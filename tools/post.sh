#!/bin/bash
# Gentle character on top of the Azure voices, same loudness for every line.
#   SOL: a small robot (light chorus + tiny metallic echo)
#   rovers: a radio message from Mars (band-limited + short echo)
IN=$1; OUT=$2; mkdir -p "$OUT"
for f in "$IN"/*.mp3; do
  n=$(basename "$f")
  case "$n" in
    sol_*) BRX=${BR_SOL:-40k}; FX="highpass=f=110,chorus=0.7:0.85:22:0.22:0.35:1.8,aecho=0.85:0.5:9:0.18" ;;
    *)     BRX=${BR:-32k}; FX="highpass=f=180,lowpass=f=6200,aecho=0.85:0.45:28:0.12,acompressor=threshold=-20dB:ratio=2.5:attack=8:release=120" ;;
  esac
  ffmpeg -loglevel error -y -i "$f" -af "silenceremove=start_periods=1:start_threshold=-50dB,${FX},loudnorm=I=-17:TP=-1.5:LRA=9,afade=t=in:d=0.02" -ac 1 -ar 24000 -b:a $BRX "$OUT/$n"
done
echo "processed $(ls "$OUT" | wc -l) files"
