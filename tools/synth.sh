#!/bin/bash
# Run inside Azure Cloud Shell (Bash). Creates a free (F0) Speech resource in "Azure for Students",
# reads its key without printing it, and renders every voiced line of The Last Footprint to MP3.
# Output: ~/tlf-voices.zip  (download it from Cloud Shell: Manage files → Download)
set -e
SUB="Azure for Students"
RG="rg-the-last-footprint"
NAME="tlf-speech-$(az account show --subscription "$SUB" --query id -o tsv | cut -c1-6)"
az account set --subscription "$SUB"
az provider register --namespace Microsoft.CognitiveServices --wait >/dev/null 2>&1 || true
REGION=""
for R in eastus westeurope francecentral uaenorth northeurope westus2; do
  az group create -n "$RG" -l "$R" -o none 2>/dev/null || { az group show -n "$RG" -o none 2>/dev/null || continue; }
  if az cognitiveservices account show -n "$NAME" -g "$RG" -o none 2>/dev/null; then REGION=$(az cognitiveservices account show -n "$NAME" -g "$RG" --query location -o tsv); break; fi
  if az cognitiveservices account create -n "$NAME" -g "$RG" --kind SpeechServices --sku F0 -l "$R" --yes -o none 2>/tmp/err.txt; then REGION=$R; break; fi
  echo "region $R refused: $(head -c 200 /tmp/err.txt)"
done
[ -z "$REGION" ] && { echo "Could not create the Speech resource"; exit 1; }
echo "Speech resource $NAME in $REGION"
export TLF_KEY=$(az cognitiveservices account keys list -n "$NAME" -g "$RG" --query key1 -o tsv)
export TLF_REGION=$REGION
mkdir -p ~/tlf-voices  # already-rendered lines are kept, so a second run only fills the gaps
curl -sL "https://raw.githubusercontent.com/0marsshahata/the-last-footprint/main/tools/voice_lines.json" -o ~/tlf-voices/lines.json
python3 - <<'PY'
import json, os, time, urllib.request, html
key, region = os.environ['TLF_KEY'], os.environ['TLF_REGION']
lines = json.load(open(os.path.expanduser('~/tlf-voices/lines.json')))
url = f'https://{region}.tts.speech.microsoft.com/cognitiveservices/v1'
ok = 0
for i, l in enumerate(lines):
    out = os.path.expanduser(f"~/tlf-voices/{l['id']}.mp3")
    if os.path.exists(out) and os.path.getsize(out) > 2000: ok += 1; continue
    lang = 'ar-EG' if l['lang'] == 'ar' else 'en-US'
    ssml = (f"<speak version='1.0' xml:lang='{lang}'><voice name='{l['voice']}'>"
            f"<prosody pitch='{l['pitch']}' rate='{l['rate']}'>{html.escape(l['text'])}</prosody></voice></speak>")
    for attempt in range(5):
        req = urllib.request.Request(url, data=ssml.encode('utf-8'), headers={
            'Ocp-Apim-Subscription-Key': key, 'Content-Type': 'application/ssml+xml',
            'X-Microsoft-OutputFormat': 'audio-24khz-96kbitrate-mono-mp3', 'User-Agent': 'the-last-footprint'})
        try:
            data = urllib.request.urlopen(req, timeout=60).read()
            open(out, 'wb').write(data); ok += 1
            print(f"{i+1}/{len(lines)} {l['id']} {len(data)//1024} KB", flush=True); break
        except urllib.error.HTTPError as e:
            if e.code in (429, 500, 502, 503): time.sleep(8 * (attempt + 1)); continue
            print('error', l['id'], e.code, e.read()[:200]); break
        except Exception as e:
            print('retry', l['id'], e); time.sleep(6 * (attempt + 1))
    time.sleep(4)  # the free tier allows about 20 requests a minute
print('done', ok, 'of', len(lines))
PY
cd ~ && rm -f tlf-voices.zip && zip -qr tlf-voices.zip tlf-voices -x 'tlf-voices/lines.json'
ls -la ~/tlf-voices.zip
echo "READY: download ~/tlf-voices.zip"
