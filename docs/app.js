(()=>{var Gf=0,ih=1,Wf=2;var js=1,Xf=2,Zr=3,Fi=0,kt=1,Ht=2,ri=0,Jr=1,Et=2,sh=3,rh=4,qf=5;var Qs=100,Yf=101,$f=102,Kf=103,Zf=104,Jf=200,jf=201,Qf=202,ep=203,ah=204,oh=205,tp=206,np=207,ip=208,sp=209,rp=210,ap=211,op=212,lp=213,cp=214,vl=0,yl=1,Ml=2,Ur=3,Sl=4,bl=5,El=6,Tl=7,ql=0,up=1,hp=2,vi=0,so=1,ro=2,ao=3,er=4,oo=5,lo=6,co=7,Wu="attached",dp="detached",lh=300,ws=301,tr=302,Yl=303,$l=304,uo=306,ei=1e3,Qn=1001,Fr=1002,jt=1003,Kl=1004;var nr=1005;var Qt=1006,jr=1007;var yi=1008;var Fn=1009,ch=1010,uh=1011,Qr=1012,Zl=1013,Mi=1014,Wn=1015,un=1016,Jl=1017,jl=1018,ea=1020,hh=35902,dh=35899,fh=1021,ph=1022,Xn=1023,Ci=1026,As=1027,Ql=1028,ec=1029,Rs=1030,tc=1031;var nc=1033,ho=33776,fo=33777,po=33778,mo=33779,ic=35840,sc=35841,rc=35842,ac=35843,oc=36196,lc=37492,cc=37496,uc=37488,hc=37489,go=37490,dc=37491,fc=37808,pc=37809,mc=37810,gc=37811,xc=37812,_c=37813,vc=37814,yc=37815,Mc=37816,Sc=37817,bc=37818,Ec=37819,Tc=37820,wc=37821,Ac=36492,Rc=36494,Cc=36495,Pc=36283,Ic=36284,xo=36285,Lc=36286;var Ws=2300,Xs=2301,gl=2302,Xu=2303,qu=2400,Yu=2401,$u=2402,fp=2500;var mh=0,_o=1,ta=2,pp=3200;var vo=0,mp=1,Si="",At="srgb",Pn="srgb-linear",Fa="linear",yt="srgb";var xl=7680;var gp=519,xp=512,_p=513,vp=514,Nc=515,yp=516,Mp=517,Dc=518,Sp=519,gh=35044;var xh="300 es",mi=2e3,Or=2001;function _0(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function v0(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Br(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function bp(){let i=Br("canvas");return i.style.display="block",i}var tf={},kr=null;function Oa(...i){let e="THREE."+i.shift();kr?kr("log",e,...i):console.log(e,...i)}function Ep(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Be(...i){i=Ep(i);let e="THREE."+i.shift();if(kr)kr("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function We(...i){i=Ep(i);let e="THREE."+i.shift();if(kr)kr("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Gs(...i){let e=i.join(" ");e in tf||(tf[e]=!0,Be(...i))}function Tp(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var wp={[vl]:yl,[Ml]:El,[Sl]:Tl,[Ur]:bl,[yl]:vl,[El]:Ml,[Tl]:Sl,[bl]:Ur},Pi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},Sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],nf=1234567,Da=Math.PI/180,qs=180/Math.PI;function gi(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Sn[i&255]+Sn[i>>8&255]+Sn[i>>16&255]+Sn[i>>24&255]+"-"+Sn[e&255]+Sn[e>>8&255]+"-"+Sn[e>>16&15|64]+Sn[e>>24&255]+"-"+Sn[t&63|128]+Sn[t>>8&255]+"-"+Sn[t>>16&255]+Sn[t>>24&255]+Sn[n&255]+Sn[n>>8&255]+Sn[n>>16&255]+Sn[n>>24&255]).toLowerCase()}function lt(i,e,t){return Math.max(e,Math.min(t,i))}function _h(i,e){return(i%e+e)%e}function y0(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function M0(i,e,t){return i!==e?(t-i)/(e-i):0}function Ua(i,e,t){return(1-t)*i+t*e}function S0(i,e,t,n){return Ua(i,e,1-Math.exp(-t*n))}function b0(i,e=1){return e-Math.abs(_h(i,e*2)-e)}function E0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function T0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function w0(i,e){return i+Math.floor(Math.random()*(e-i+1))}function A0(i,e){return i+Math.random()*(e-i)}function R0(i){return i*(.5-Math.random())}function C0(i){i!==void 0&&(nf=i);let e=nf+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function P0(i){return i*Da}function I0(i){return i*qs}function L0(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function N0(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function D0(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function U0(i,e,t,n,s){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),u=a((e+n)/2),h=r((e-n)/2),d=a((e-n)/2),f=r((n-e)/2),_=a((n-e)/2);switch(s){case"XYX":i.set(o*u,l*h,l*d,o*c);break;case"YZY":i.set(l*d,o*u,l*h,o*c);break;case"ZXZ":i.set(l*h,l*d,o*u,o*c);break;case"XZX":i.set(o*u,l*_,l*f,o*c);break;case"YXY":i.set(l*f,o*u,l*_,o*c);break;case"ZYZ":i.set(l*_,l*f,o*u,o*c);break;default:Be("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function pi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function wt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Tt={DEG2RAD:Da,RAD2DEG:qs,generateUUID:gi,clamp:lt,euclideanModulo:_h,mapLinear:y0,inverseLerp:M0,lerp:Ua,damp:S0,pingpong:b0,smoothstep:E0,smootherstep:T0,randInt:w0,randFloat:A0,randFloatSpread:R0,seededRandom:C0,degToRad:P0,radToDeg:I0,isPowerOfTwo:L0,ceilPowerOfTwo:N0,floorPowerOfTwo:D0,setQuaternionFromProperEuler:U0,normalize:wt,denormalize:pi},bh=class bh{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=lt(this.x,e.x,t.x),this.y=lt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=lt(this.x,e,t),this.y=lt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(lt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(lt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};bh.prototype.isVector2=!0;var Se=bh,In=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],u=n[s+2],h=n[s+3],d=r[a+0],f=r[a+1],_=r[a+2],y=r[a+3];if(h!==y||l!==d||c!==f||u!==_){let g=l*d+c*f+u*_+h*y;g<0&&(d=-d,f=-f,_=-_,y=-y,g=-g);let m=1-o;if(g<.9995){let M=Math.acos(g),A=Math.sin(M);m=Math.sin(m*M)/A,o=Math.sin(o*M)/A,l=l*m+d*o,c=c*m+f*o,u=u*m+_*o,h=h*m+y*o}else{l=l*m+d*o,c=c*m+f*o,u=u*m+_*o,h=h*m+y*o;let M=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=M,c*=M,u*=M,h*=M}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],u=n[s+3],h=r[a],d=r[a+1],f=r[a+2],_=r[a+3];return e[t]=o*_+u*h+l*f-c*d,e[t+1]=l*_+u*d+c*h-o*f,e[t+2]=c*_+u*f+o*d-l*h,e[t+3]=u*_-o*h-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(s/2),h=o(r/2),d=l(n/2),f=l(s/2),_=l(r/2);switch(a){case"XYZ":this._x=d*u*h+c*f*_,this._y=c*f*h-d*u*_,this._z=c*u*_+d*f*h,this._w=c*u*h-d*f*_;break;case"YXZ":this._x=d*u*h+c*f*_,this._y=c*f*h-d*u*_,this._z=c*u*_-d*f*h,this._w=c*u*h+d*f*_;break;case"ZXY":this._x=d*u*h-c*f*_,this._y=c*f*h+d*u*_,this._z=c*u*_+d*f*h,this._w=c*u*h-d*f*_;break;case"ZYX":this._x=d*u*h-c*f*_,this._y=c*f*h+d*u*_,this._z=c*u*_-d*f*h,this._w=c*u*h+d*f*_;break;case"YZX":this._x=d*u*h+c*f*_,this._y=c*f*h+d*u*_,this._z=c*u*_-d*f*h,this._w=c*u*h-d*f*_;break;case"XZY":this._x=d*u*h-c*f*_,this._y=c*f*h-d*u*_,this._z=c*u*_+d*f*h,this._w=c*u*h+d*f*_;break;default:Be("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=n+o+h;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>h){let f=2*Math.sqrt(1+n-o-h);this._w=(u-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>h){let f=2*Math.sqrt(1+o-n-h);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+u)/f}else{let f=2*Math.sqrt(1+h-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(lt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-s*o,this._w=a*u-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Eh=class Eh{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(sf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(sf.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),u=2*(o*t-r*s),h=2*(r*n-a*t);return this.x=t+l*c+a*h-o*u,this.y=n+l*u+o*c-r*h,this.z=s+l*h+r*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=lt(this.x,e.x,t.x),this.y=lt(this.y,e.y,t.y),this.z=lt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=lt(this.x,e,t),this.y=lt(this.y,e,t),this.z=lt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(lt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return _u.copy(this).projectOnVector(e),this.sub(_u)}reflect(e){return this.sub(_u.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(lt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Eh.prototype.isVector3=!0;var I=Eh,_u=new I,sf=new In,Th=class Th{constructor(e,t,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){let u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],f=n[5],_=n[8],y=s[0],g=s[3],m=s[6],M=s[1],A=s[4],v=s[7],b=s[2],S=s[5],C=s[8];return r[0]=a*y+o*M+l*b,r[3]=a*g+o*A+l*S,r[6]=a*m+o*v+l*C,r[1]=c*y+u*M+h*b,r[4]=c*g+u*A+h*S,r[7]=c*m+u*v+h*C,r[2]=d*y+f*M+_*b,r[5]=d*g+f*A+_*S,r[8]=d*m+f*v+_*C,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*r*u+n*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*a-o*c,d=o*l-u*r,f=c*r-a*l,_=t*h+n*d+s*f;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/_;return e[0]=h*y,e[1]=(s*c-u*n)*y,e[2]=(o*n-s*a)*y,e[3]=d*y,e[4]=(u*t-s*l)*y,e[5]=(s*r-o*t)*y,e[6]=f*y,e[7]=(n*l-c*t)*y,e[8]=(a*t-n*r)*y,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return Gs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(vu.makeScale(e,t)),this}rotate(e){return Gs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(vu.makeRotation(-e)),this}translate(e,t){return Gs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(vu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Th.prototype.isMatrix3=!0;var Ze=Th,vu=new Ze,rf=new Ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),af=new Ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function F0(){let i={enabled:!0,workingColorSpace:Pn,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===yt&&(s.r=Ji(s.r),s.g=Ji(s.g),s.b=Ji(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===yt&&(s.r=Dr(s.r),s.g=Dr(s.g),s.b=Dr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Si?Fa:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Gs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Gs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Pn]:{primaries:e,whitePoint:n,transfer:Fa,toXYZ:rf,fromXYZ:af,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:At},outputColorSpaceConfig:{drawingBufferColorSpace:At}},[At]:{primaries:e,whitePoint:n,transfer:yt,toXYZ:rf,fromXYZ:af,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:At}}}),i}var st=F0();function Ji(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Dr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var gr,wl=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{gr===void 0&&(gr=Br("canvas")),gr.width=e.width,gr.height=e.height;let s=gr.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=gr}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Br("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Ji(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ji(t[n]/255)*255):t[n]=Ji(t[n]);return{data:t,width:e.width,height:e.height}}else return Be("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},O0=0,Hr=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:O0++}),this.uuid=gi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(yu(s[a].image)):r.push(yu(s[a]))}else r=yu(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function yu(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?wl.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Be("Texture: Unable to serialize Texture."),{})}var B0=0,Mu=new I,qt=class i extends Pi{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Qn,s=Qn,r=Qt,a=yi,o=Xn,l=Fn,c=i.DEFAULT_ANISOTROPY,u=Si){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:B0++}),this.uuid=gi(),this.name="",this.source=new Hr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Se(0,0),this.repeat=new Se(1,1),this.center=new Se(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Mu).x}get height(){return this.source.getSize(Mu).y}get depth(){return this.source.getSize(Mu).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Be(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Be(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==lh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ei:e.x=e.x-Math.floor(e.x);break;case Qn:e.x=e.x<0?0:1;break;case Fr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ei:e.y=e.y-Math.floor(e.y);break;case Qn:e.y=e.y<0?0:1;break;case Fr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};qt.DEFAULT_IMAGE=null;qt.DEFAULT_MAPPING=lh;qt.DEFAULT_ANISOTROPY=1;var wh=class wh{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],_=l[9],y=l[2],g=l[6],m=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-y)<.01&&Math.abs(_-g)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+y)<.1&&Math.abs(_+g)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let A=(c+1)/2,v=(f+1)/2,b=(m+1)/2,S=(u+d)/4,C=(h+y)/4,p=(_+g)/4;return A>v&&A>b?A<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(A),s=S/n,r=C/n):v>b?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=S/s,r=p/s):b<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(b),n=C/r,s=p/r),this.set(n,s,r,t),this}let M=Math.sqrt((g-_)*(g-_)+(h-y)*(h-y)+(d-u)*(d-u));return Math.abs(M)<.001&&(M=1),this.x=(g-_)/M,this.y=(h-y)/M,this.z=(d-u)/M,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=lt(this.x,e.x,t.x),this.y=lt(this.y,e.y,t.y),this.z=lt(this.z,e.z,t.z),this.w=lt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=lt(this.x,e,t),this.y=lt(this.y,e,t),this.z=lt(this.z,e,t),this.w=lt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(lt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};wh.prototype.isVector4=!0;var Rt=wh,Al=class extends Pi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Qt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Rt(0,0,e,t),this.scissorTest=!1,this.viewport=new Rt(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:n.depth},r=new qt(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Qt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Hr(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},$t=class extends Al{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Ba=class extends qt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=jt,this.minFilter=jt,this.wrapR=Qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Rl=class extends qt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=jt,this.minFilter=jt,this.wrapR=Qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Xl=class Xl{constructor(e,t,n,s,r,a,o,l,c,u,h,d,f,_,y,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,u,h,d,f,_,y,g)}set(e,t,n,s,r,a,o,l,c,u,h,d,f,_,y,g){let m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=u,m[10]=h,m[14]=d,m[3]=f,m[7]=_,m[11]=y,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Xl().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/xr.setFromMatrixColumn(e,0).length(),r=1/xr.setFromMatrixColumn(e,1).length(),a=1/xr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){let d=a*u,f=a*h,_=o*u,y=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=f+_*c,t[5]=d-y*c,t[9]=-o*l,t[2]=y-d*c,t[6]=_+f*c,t[10]=a*l}else if(e.order==="YXZ"){let d=l*u,f=l*h,_=c*u,y=c*h;t[0]=d+y*o,t[4]=_*o-f,t[8]=a*c,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=f*o-_,t[6]=y+d*o,t[10]=a*l}else if(e.order==="ZXY"){let d=l*u,f=l*h,_=c*u,y=c*h;t[0]=d-y*o,t[4]=-a*h,t[8]=_+f*o,t[1]=f+_*o,t[5]=a*u,t[9]=y-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let d=a*u,f=a*h,_=o*u,y=o*h;t[0]=l*u,t[4]=_*c-f,t[8]=d*c+y,t[1]=l*h,t[5]=y*c+d,t[9]=f*c-_,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let d=a*l,f=a*c,_=o*l,y=o*c;t[0]=l*u,t[4]=y-d*h,t[8]=_*h+f,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=f*h+_,t[10]=d-y*h}else if(e.order==="XZY"){let d=a*l,f=a*c,_=o*l,y=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+y,t[5]=a*u,t[9]=f*h-_,t[2]=_*h-f,t[6]=o*u,t[10]=y*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(k0,e,H0)}lookAt(e,t,n){let s=this.elements;return kn.subVectors(e,t),kn.lengthSq()===0&&(kn.z=1),kn.normalize(),ms.crossVectors(n,kn),ms.lengthSq()===0&&(Math.abs(n.z)===1?kn.x+=1e-4:kn.z+=1e-4,kn.normalize(),ms.crossVectors(n,kn)),ms.normalize(),Vo.crossVectors(kn,ms),s[0]=ms.x,s[4]=Vo.x,s[8]=kn.x,s[1]=ms.y,s[5]=Vo.y,s[9]=kn.y,s[2]=ms.z,s[6]=Vo.z,s[10]=kn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],f=n[13],_=n[2],y=n[6],g=n[10],m=n[14],M=n[3],A=n[7],v=n[11],b=n[15],S=s[0],C=s[4],p=s[8],E=s[12],L=s[1],z=s[5],O=s[9],G=s[13],w=s[2],D=s[6],H=s[10],N=s[14],B=s[3],R=s[7],F=s[11],W=s[15];return r[0]=a*S+o*L+l*w+c*B,r[4]=a*C+o*z+l*D+c*R,r[8]=a*p+o*O+l*H+c*F,r[12]=a*E+o*G+l*N+c*W,r[1]=u*S+h*L+d*w+f*B,r[5]=u*C+h*z+d*D+f*R,r[9]=u*p+h*O+d*H+f*F,r[13]=u*E+h*G+d*N+f*W,r[2]=_*S+y*L+g*w+m*B,r[6]=_*C+y*z+g*D+m*R,r[10]=_*p+y*O+g*H+m*F,r[14]=_*E+y*G+g*N+m*W,r[3]=M*S+A*L+v*w+b*B,r[7]=M*C+A*z+v*D+b*R,r[11]=M*p+A*O+v*H+b*F,r[15]=M*E+A*G+v*N+b*W,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],f=e[14],_=e[3],y=e[7],g=e[11],m=e[15],M=l*f-c*d,A=o*f-c*h,v=o*d-l*h,b=a*f-c*u,S=a*d-l*u,C=a*h-o*u;return t*(y*M-g*A+m*v)-n*(_*M-g*b+m*S)+s*(_*A-y*b+m*C)-r*(_*v-y*S+g*C)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],u=e[10];return t*(a*u-o*c)-n*(r*u-o*l)+s*(r*c-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],f=e[11],_=e[12],y=e[13],g=e[14],m=e[15],M=t*o-n*a,A=t*l-s*a,v=t*c-r*a,b=n*l-s*o,S=n*c-r*o,C=s*c-r*l,p=u*y-h*_,E=u*g-d*_,L=u*m-f*_,z=h*g-d*y,O=h*m-f*y,G=d*m-f*g,w=M*G-A*O+v*z+b*L-S*E+C*p;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let D=1/w;return e[0]=(o*G-l*O+c*z)*D,e[1]=(s*O-n*G-r*z)*D,e[2]=(y*C-g*S+m*b)*D,e[3]=(d*S-h*C-f*b)*D,e[4]=(l*L-a*G-c*E)*D,e[5]=(t*G-s*L+r*E)*D,e[6]=(g*v-_*C-m*A)*D,e[7]=(u*C-d*v+f*A)*D,e[8]=(a*O-o*L+c*p)*D,e[9]=(n*L-t*O-r*p)*D,e[10]=(_*S-y*v+m*M)*D,e[11]=(h*v-u*S-f*M)*D,e[12]=(o*E-a*z-l*p)*D,e[13]=(t*z-n*E+s*p)*D,e[14]=(y*A-_*b-g*M)*D,e[15]=(u*b-h*A+d*M)*D,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+n,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,h=o+o,d=r*c,f=r*u,_=r*h,y=a*u,g=a*h,m=o*h,M=l*c,A=l*u,v=l*h,b=n.x,S=n.y,C=n.z;return s[0]=(1-(y+m))*b,s[1]=(f+v)*b,s[2]=(_-A)*b,s[3]=0,s[4]=(f-v)*S,s[5]=(1-(d+m))*S,s[6]=(g+M)*S,s[7]=0,s[8]=(_+A)*C,s[9]=(g-M)*C,s[10]=(1-(d+y))*C,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=xr.set(s[0],s[1],s[2]).length(),o=xr.set(s[4],s[5],s[6]).length(),l=xr.set(s[8],s[9],s[10]).length();r<0&&(a=-a),ui.copy(this);let c=1/a,u=1/o,h=1/l;return ui.elements[0]*=c,ui.elements[1]*=c,ui.elements[2]*=c,ui.elements[4]*=u,ui.elements[5]*=u,ui.elements[6]*=u,ui.elements[8]*=h,ui.elements[9]*=h,ui.elements[10]*=h,t.setFromRotationMatrix(ui),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,s,r,a,o=mi,l=!1){let c=this.elements,u=2*r/(t-e),h=2*r/(n-s),d=(t+e)/(t-e),f=(n+s)/(n-s),_,y;if(l)_=r/(a-r),y=a*r/(a-r);else if(o===mi)_=-(a+r)/(a-r),y=-2*a*r/(a-r);else if(o===Or)_=-a/(a-r),y=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=mi,l=!1){let c=this.elements,u=2/(t-e),h=2/(n-s),d=-(t+e)/(t-e),f=-(n+s)/(n-s),_,y;if(l)_=1/(a-r),y=a/(a-r);else if(o===mi)_=-2/(a-r),y=-(a+r)/(a-r);else if(o===Or)_=-1/(a-r),y=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=h,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=_,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Xl.prototype.isMatrix4=!0;var Ke=Xl,xr=new I,ui=new Ke,k0=new I(0,0,0),H0=new I(1,1,1),ms=new I,Vo=new I,kn=new I,of=new Ke,lf=new In,Ii=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],h=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(lt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-lt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(lt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-lt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(lt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-lt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:Be("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return of.makeRotationFromQuaternion(e),this.setFromRotationMatrix(of,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return lf.setFromEuler(this),this.setFromQuaternion(lf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ii.DEFAULT_ORDER="XYZ";var zr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},z0=0,cf=new I,_r=new In,Wi=new Ke,Go=new I,ba=new I,V0=new I,G0=new In,uf=new I(1,0,0),hf=new I(0,1,0),df=new I(0,0,1),ff={type:"added"},W0={type:"removed"},vr={type:"childadded",child:null},Su={type:"childremoved",child:null},Ct=class i extends Pi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:z0++}),this.uuid=gi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new I,t=new Ii,n=new In,s=new I(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ke},normalMatrix:{value:new Ze}}),this.matrix=new Ke,this.matrixWorld=new Ke,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new zr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return _r.setFromAxisAngle(e,t),this.quaternion.multiply(_r),this}rotateOnWorldAxis(e,t){return _r.setFromAxisAngle(e,t),this.quaternion.premultiply(_r),this}rotateX(e){return this.rotateOnAxis(uf,e)}rotateY(e){return this.rotateOnAxis(hf,e)}rotateZ(e){return this.rotateOnAxis(df,e)}translateOnAxis(e,t){return cf.copy(e).applyQuaternion(this.quaternion),this.position.add(cf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(uf,e)}translateY(e){return this.translateOnAxis(hf,e)}translateZ(e){return this.translateOnAxis(df,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Wi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Go.copy(e):Go.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),ba.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Wi.lookAt(ba,Go,this.up):Wi.lookAt(Go,ba,this.up),this.quaternion.setFromRotationMatrix(Wi),s&&(Wi.extractRotation(s.matrixWorld),_r.setFromRotationMatrix(Wi),this.quaternion.premultiply(_r.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(We("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ff),vr.child=e,this.dispatchEvent(vr),vr.child=null):We("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(W0),Su.child=e,this.dispatchEvent(Su),Su.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Wi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Wi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Wi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ff),vr.child=e,this.dispatchEvent(vr),vr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ba,e,V0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ba,G0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),h=a(e.shapes),d=a(e.skeletons),f=a(e.animations),_=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),_.length>0&&(n.nodes=_)}return n.object=s,n;function a(o){let l=[];for(let c in o){let u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Ct.DEFAULT_UP=new I(0,1,0);Ct.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var $e=class extends Ct{constructor(){super(),this.isGroup=!0,this.type="Group"}},X0={type:"move"},Vr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new $e,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new $e,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new $e,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let y of e.hand.values()){let g=t.getJointPose(y,n),m=this._getHandJoint(c,y);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,_=.005;c.inputState.pinching&&d>f+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(X0)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new $e;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Ap={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},gs={h:0,s:0,l:0},Wo={h:0,s:0,l:0};function bu(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var oe=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=At){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,st.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=st.workingColorSpace){return this.r=e,this.g=t,this.b=n,st.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=st.workingColorSpace){if(e=_h(e,1),t=lt(t,0,1),n=lt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=bu(a,r,e+1/3),this.g=bu(a,r,e),this.b=bu(a,r,e-1/3)}return st.colorSpaceToWorking(this,s),this}setStyle(e,t=At){function n(r){r!==void 0&&parseFloat(r)<1&&Be("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Be("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Be("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=At){let n=Ap[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Be("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ji(e.r),this.g=Ji(e.g),this.b=Ji(e.b),this}copyLinearToSRGB(e){return this.r=Dr(e.r),this.g=Dr(e.g),this.b=Dr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=At){return st.workingToColorSpace(bn.copy(this),e),Math.round(lt(bn.r*255,0,255))*65536+Math.round(lt(bn.g*255,0,255))*256+Math.round(lt(bn.b*255,0,255))}getHexString(e=At){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=st.workingColorSpace){st.workingToColorSpace(bn.copy(this),t);let n=bn.r,s=bn.g,r=bn.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,u=(o+a)/2;if(o===a)l=0,c=0;else{let h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case n:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-n)/h+2;break;case r:l=(n-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=st.workingColorSpace){return st.workingToColorSpace(bn.copy(this),t),e.r=bn.r,e.g=bn.g,e.b=bn.b,e}getStyle(e=At){st.workingToColorSpace(bn.copy(this),e);let t=bn.r,n=bn.g,s=bn.b;return e!==At?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(gs),this.setHSL(gs.h+e,gs.s+t,gs.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(gs),e.getHSL(Wo);let n=Ua(gs.h,Wo.h,t),s=Ua(gs.s,Wo.s,t),r=Ua(gs.l,Wo.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},bn=new oe;oe.NAMES=Ap;var ka=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new oe(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},ti=class extends Ct{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ii,this.environmentIntensity=1,this.environmentRotation=new Ii,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},hi=new I,Xi=new I,Eu=new I,qi=new I,yr=new I,Mr=new I,pf=new I,Tu=new I,wu=new I,Au=new I,Ru=new Rt,Cu=new Rt,Pu=new Rt,Zi=class i{constructor(e=new I,t=new I,n=new I){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),hi.subVectors(e,t),s.cross(hi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){hi.subVectors(s,t),Xi.subVectors(n,t),Eu.subVectors(e,t);let a=hi.dot(hi),o=hi.dot(Xi),l=hi.dot(Eu),c=Xi.dot(Xi),u=Xi.dot(Eu),h=a*c-o*o;if(h===0)return r.set(0,0,0),null;let d=1/h,f=(c*l-o*u)*d,_=(a*u-o*l)*d;return r.set(1-f-_,_,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,qi)===null?!1:qi.x>=0&&qi.y>=0&&qi.x+qi.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,qi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,qi.x),l.addScaledVector(a,qi.y),l.addScaledVector(o,qi.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return Ru.setScalar(0),Cu.setScalar(0),Pu.setScalar(0),Ru.fromBufferAttribute(e,t),Cu.fromBufferAttribute(e,n),Pu.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Ru,r.x),a.addScaledVector(Cu,r.y),a.addScaledVector(Pu,r.z),a}static isFrontFacing(e,t,n,s){return hi.subVectors(n,t),Xi.subVectors(e,t),hi.cross(Xi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return hi.subVectors(this.c,this.b),Xi.subVectors(this.a,this.b),hi.cross(Xi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;yr.subVectors(s,n),Mr.subVectors(r,n),Tu.subVectors(e,n);let l=yr.dot(Tu),c=Mr.dot(Tu);if(l<=0&&c<=0)return t.copy(n);wu.subVectors(e,s);let u=yr.dot(wu),h=Mr.dot(wu);if(u>=0&&h<=u)return t.copy(s);let d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(yr,a);Au.subVectors(e,r);let f=yr.dot(Au),_=Mr.dot(Au);if(_>=0&&f<=_)return t.copy(r);let y=f*c-l*_;if(y<=0&&c>=0&&_<=0)return o=c/(c-_),t.copy(n).addScaledVector(Mr,o);let g=u*_-f*h;if(g<=0&&h-u>=0&&f-_>=0)return pf.subVectors(r,s),o=(h-u)/(h-u+(f-_)),t.copy(s).addScaledVector(pf,o);let m=1/(g+y+d);return a=y*m,o=d*m,t.copy(n).addScaledVector(yr,a).addScaledVector(Mr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},zn=class{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(di.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(di.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=di.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,di):di.fromBufferAttribute(r,a),di.applyMatrix4(e.matrixWorld),this.expandByPoint(di);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Xo.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Xo.copy(n.boundingBox)),Xo.applyMatrix4(e.matrixWorld),this.union(Xo)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,di),di.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ea),qo.subVectors(this.max,Ea),Sr.subVectors(e.a,Ea),br.subVectors(e.b,Ea),Er.subVectors(e.c,Ea),xs.subVectors(br,Sr),_s.subVectors(Er,br),ks.subVectors(Sr,Er);let t=[0,-xs.z,xs.y,0,-_s.z,_s.y,0,-ks.z,ks.y,xs.z,0,-xs.x,_s.z,0,-_s.x,ks.z,0,-ks.x,-xs.y,xs.x,0,-_s.y,_s.x,0,-ks.y,ks.x,0];return!Iu(t,Sr,br,Er,qo)||(t=[1,0,0,0,1,0,0,0,1],!Iu(t,Sr,br,Er,qo))?!1:(Yo.crossVectors(xs,_s),t=[Yo.x,Yo.y,Yo.z],Iu(t,Sr,br,Er,qo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,di).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(di).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Yi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Yi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Yi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Yi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Yi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Yi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Yi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Yi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Yi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Yi=[new I,new I,new I,new I,new I,new I,new I,new I],di=new I,Xo=new zn,Sr=new I,br=new I,Er=new I,xs=new I,_s=new I,ks=new I,Ea=new I,qo=new I,Yo=new I,Hs=new I;function Iu(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Hs.fromArray(i,r);let o=s.x*Math.abs(Hs.x)+s.y*Math.abs(Hs.y)+s.z*Math.abs(Hs.z),l=e.dot(Hs),c=t.dot(Hs),u=n.dot(Hs);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var on=new I,$o=new Se,q0=0,ct=class extends Pi{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:q0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=gh,this.updateRanges=[],this.gpuType=Wn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)$o.fromBufferAttribute(this,t),$o.applyMatrix3(e),this.setXY(t,$o.x,$o.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)on.fromBufferAttribute(this,t),on.applyMatrix3(e),this.setXYZ(t,on.x,on.y,on.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)on.fromBufferAttribute(this,t),on.applyMatrix4(e),this.setXYZ(t,on.x,on.y,on.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)on.fromBufferAttribute(this,t),on.applyNormalMatrix(e),this.setXYZ(t,on.x,on.y,on.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)on.fromBufferAttribute(this,t),on.transformDirection(e),this.setXYZ(t,on.x,on.y,on.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=pi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=wt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=pi(t,this.array)),t}setX(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=pi(t,this.array)),t}setY(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=pi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=pi(t,this.array)),t}setW(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),n=wt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),n=wt(n,this.array),s=wt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),n=wt(n,this.array),s=wt(s,this.array),r=wt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var Ha=class extends ct{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var za=class extends ct{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var nt=class extends ct{constructor(e,t,n){super(new Float32Array(e),t,n)}},Y0=new zn,Ta=new I,Lu=new I,Nn=class{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Y0.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ta.subVectors(e,this.center);let t=Ta.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Ta,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Lu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ta.copy(e.center).add(Lu)),this.expandByPoint(Ta.copy(e.center).sub(Lu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},$0=0,jn=new Ke,Nu=new Ct,Tr=new I,Hn=new zn,wa=new zn,pn=new I,Qe=class i extends Pi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:$0++}),this.uuid=gi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(_0(e)?za:Ha)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ze().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return jn.makeRotationFromQuaternion(e),this.applyMatrix4(jn),this}rotateX(e){return jn.makeRotationX(e),this.applyMatrix4(jn),this}rotateY(e){return jn.makeRotationY(e),this.applyMatrix4(jn),this}rotateZ(e){return jn.makeRotationZ(e),this.applyMatrix4(jn),this}translate(e,t,n){return jn.makeTranslation(e,t,n),this.applyMatrix4(jn),this}scale(e,t,n){return jn.makeScale(e,t,n),this.applyMatrix4(jn),this}lookAt(e){return Nu.lookAt(e),Nu.updateMatrix(),this.applyMatrix4(Nu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Tr).negate(),this.translate(Tr.x,Tr.y,Tr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new nt(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Be("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new zn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){We("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Hn.setFromBufferAttribute(r),this.morphTargetsRelative?(pn.addVectors(this.boundingBox.min,Hn.min),this.boundingBox.expandByPoint(pn),pn.addVectors(this.boundingBox.max,Hn.max),this.boundingBox.expandByPoint(pn)):(this.boundingBox.expandByPoint(Hn.min),this.boundingBox.expandByPoint(Hn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&We('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Nn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){We("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){let n=this.boundingSphere.center;if(Hn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];wa.setFromBufferAttribute(o),this.morphTargetsRelative?(pn.addVectors(Hn.min,wa.min),Hn.expandByPoint(pn),pn.addVectors(Hn.max,wa.max),Hn.expandByPoint(pn)):(Hn.expandByPoint(wa.min),Hn.expandByPoint(wa.max))}Hn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)pn.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(pn));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)pn.fromBufferAttribute(o,c),l&&(Tr.fromBufferAttribute(e,c),pn.add(Tr)),s=Math.max(s,n.distanceToSquared(pn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&We('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){We("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new ct(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let p=0;p<n.count;p++)o[p]=new I,l[p]=new I;let c=new I,u=new I,h=new I,d=new Se,f=new Se,_=new Se,y=new I,g=new I;function m(p,E,L){c.fromBufferAttribute(n,p),u.fromBufferAttribute(n,E),h.fromBufferAttribute(n,L),d.fromBufferAttribute(r,p),f.fromBufferAttribute(r,E),_.fromBufferAttribute(r,L),u.sub(c),h.sub(c),f.sub(d),_.sub(d);let z=1/(f.x*_.y-_.x*f.y);isFinite(z)&&(y.copy(u).multiplyScalar(_.y).addScaledVector(h,-f.y).multiplyScalar(z),g.copy(h).multiplyScalar(f.x).addScaledVector(u,-_.x).multiplyScalar(z),o[p].add(y),o[E].add(y),o[L].add(y),l[p].add(g),l[E].add(g),l[L].add(g))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let p=0,E=M.length;p<E;++p){let L=M[p],z=L.start,O=L.count;for(let G=z,w=z+O;G<w;G+=3)m(e.getX(G+0),e.getX(G+1),e.getX(G+2))}let A=new I,v=new I,b=new I,S=new I;function C(p){b.fromBufferAttribute(s,p),S.copy(b);let E=o[p];A.copy(E),A.sub(b.multiplyScalar(b.dot(E))).normalize(),v.crossVectors(S,E);let z=v.dot(l[p])<0?-1:1;a.setXYZW(p,A.x,A.y,A.z,z)}for(let p=0,E=M.length;p<E;++p){let L=M[p],z=L.start,O=L.count;for(let G=z,w=z+O;G<w;G+=3)C(e.getX(G+0)),C(e.getX(G+1)),C(e.getX(G+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new ct(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new I,r=new I,a=new I,o=new I,l=new I,c=new I,u=new I,h=new I;if(e)for(let d=0,f=e.count;d<f;d+=3){let _=e.getX(d+0),y=e.getX(d+1),g=e.getX(d+2);s.fromBufferAttribute(t,_),r.fromBufferAttribute(t,y),a.fromBufferAttribute(t,g),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,y),c.fromBufferAttribute(n,g),o.add(u),l.add(u),c.add(u),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)pn.fromBufferAttribute(e,t),pn.normalize(),e.setXYZ(t,pn.x,pn.y,pn.z)}toNonIndexed(){function e(o,l){let c=o.array,u=o.itemSize,h=o.normalized,d=new c.constructor(l.length*u),f=0,_=0;for(let y=0,g=l.length;y<g;y++){o.isInterleavedBufferAttribute?f=l[y]*o.data.stride+o.offset:f=l[y]*u;for(let m=0;m<u;m++)d[_++]=c[f++]}return new ct(d,u,h)}if(this.index===null)return Be("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let u=0,h=c.length;u<h;u++){let d=c[u],f=e(d,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){let f=c[h];u.push(f.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(t))}let r=e.morphAttributes;for(let c in r){let u=[],h=r[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,u=a.length;c<u;c++){let h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ys=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=gh,this.updateRanges=[],this.version=0,this.uuid=gi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=gi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=gi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},Cn=new I,Ms=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Cn.fromBufferAttribute(this,t),Cn.applyMatrix4(e),this.setXYZ(t,Cn.x,Cn.y,Cn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Cn.fromBufferAttribute(this,t),Cn.applyNormalMatrix(e),this.setXYZ(t,Cn.x,Cn.y,Cn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Cn.fromBufferAttribute(this,t),Cn.transformDirection(e),this.setXYZ(t,Cn.x,Cn.y,Cn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=pi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=wt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=wt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=wt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=wt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=wt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=pi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=pi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=pi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=pi(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=wt(t,this.array),n=wt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=wt(t,this.array),n=wt(n,this.array),s=wt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=wt(t,this.array),n=wt(n,this.array),s=wt(s,this.array),r=wt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Oa("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new ct(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Oa("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Du=new I,K0=new I,Z0=new Ze,fi=class{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Du.subVectors(n,t).cross(K0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(Du),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Z0.getNormalMatrix(e),s=this.coplanarPoint(Du).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},J0=0,En=class extends Pi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:J0++}),this.uuid=gi(),this.name="",this.type="Material",this.blending=Jr,this.side=Fi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ah,this.blendDst=oh,this.blendEquation=Qs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new oe(0,0,0),this.blendAlpha=0,this.depthFunc=Ur,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=gp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xl,this.stencilZFail=xl,this.stencilZPass=xl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Be(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Be(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new oe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new fi().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Se().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Se().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},cn=class extends En{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new oe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},wr,Aa=new I,Ar=new I,Rr=new I,Cr=new Se,Ra=new Se,Rp=new Ke,Ko=new I,Ca=new I,Zo=new I,mf=new Se,Uu=new Se,gf=new Se,mn=class extends Ct{constructor(e=new cn){if(super(),this.isSprite=!0,this.type="Sprite",wr===void 0){wr=new Qe;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Ys(t,5);wr.setIndex([0,1,2,0,2,3]),wr.setAttribute("position",new Ms(n,3,0,!1)),wr.setAttribute("uv",new Ms(n,2,3,!1))}this.geometry=wr,this.material=e,this.center=new Se(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&We('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ar.setFromMatrixScale(this.matrixWorld),Rp.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Rr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ar.multiplyScalar(-Rr.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;Jo(Ko.set(-.5,-.5,0),Rr,a,Ar,s,r),Jo(Ca.set(.5,-.5,0),Rr,a,Ar,s,r),Jo(Zo.set(.5,.5,0),Rr,a,Ar,s,r),mf.set(0,0),Uu.set(1,0),gf.set(1,1);let o=e.ray.intersectTriangle(Ko,Ca,Zo,!1,Aa);if(o===null&&(Jo(Ca.set(-.5,.5,0),Rr,a,Ar,s,r),Uu.set(0,1),o=e.ray.intersectTriangle(Ko,Zo,Ca,!1,Aa),o===null))return;let l=e.ray.origin.distanceTo(Aa);l<e.near||l>e.far||t.push({distance:l,point:Aa.clone(),uv:Zi.getInterpolation(Aa,Ko,Ca,Zo,mf,Uu,gf,new Se),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Jo(i,e,t,n,s,r){Cr.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(Ra.x=r*Cr.x-s*Cr.y,Ra.y=s*Cr.x+r*Cr.y):Ra.copy(Cr),i.copy(e),i.x+=Ra.x,i.y+=Ra.y,i.applyMatrix4(Rp)}var $i=new I,Fu=new I,jo=new I,Qo=new I,Ss=class{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,$i)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=$i.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):($i.copy(this.origin).addScaledVector(this.direction,t),$i.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Fu.copy(e).add(t).multiplyScalar(.5),jo.copy(t).sub(e).normalize(),Qo.copy(this.origin).sub(Fu);let r=e.distanceTo(t)*.5,a=-this.direction.dot(jo),o=Qo.dot(this.direction),l=-Qo.dot(jo),c=Qo.lengthSq(),u=Math.abs(1-a*a),h,d,f,_;if(u>0)if(h=a*l-o,d=a*o-l,_=r*u,h>=0)if(d>=-_)if(d<=_){let y=1/u;h*=y,d*=y,f=h*(h+a*d+2*o)+d*(a*h+d+2*l)+c}else d=r,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;else d=-r,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;else d<=-_?(h=Math.max(0,-(-a*r+o)),d=h>0?-r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c):d<=_?(h=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(h=Math.max(0,-(a*r+o)),d=h>0?r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c);else d=a>0?-r:r,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Fu).addScaledVector(jo,d),f}intersectSphere(e,t){if(e.radius<0)return null;$i.subVectors(e.center,this.origin);let n=$i.dot(this.direction),s=$i.dot($i)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),u>=0?(r=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),h>=0?(o=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,$i)!==null}intersectTriangle(e,t,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,u=o.z,h=e.x-a.x,d=e.y-a.y,f=e.z-a.z,_=t.x-a.x,y=t.y-a.y,g=t.z-a.z,m=n.x-a.x,M=n.y-a.y,A=n.z-a.z,v=Math.abs(l),b=Math.abs(c),S=Math.abs(u),C,p,E,L,z,O,G,w,D,H,N,B;if(v>=b&&v>=S?(E=l,O=h,D=_,B=m,l>=0?(C=c,p=u,L=d,z=f,G=y,w=g,H=M,N=A):(C=u,p=c,L=f,z=d,G=g,w=y,H=A,N=M)):b>=S?(E=c,O=d,D=y,B=M,c>=0?(C=u,p=l,L=f,z=h,G=g,w=_,H=A,N=m):(C=l,p=u,L=h,z=f,G=_,w=g,H=m,N=A)):(E=u,O=f,D=g,B=A,u>=0?(C=l,p=c,L=h,z=d,G=_,w=y,H=m,N=M):(C=c,p=l,L=d,z=h,G=y,w=_,H=M,N=m)),E===0)return null;let R=C/E,F=p/E,W=1/E,le=L-R*O,ie=z-F*O,Le=G-R*D,ke=w-F*D,Ce=H-R*B,Q=N-F*B,ee=Ce*ke-Q*Le,he=le*Q-ie*Ce,Z=Le*ie-ke*le;if(s){if(ee<0||he<0||Z<0)return null}else if((ee<0||he<0||Z<0)&&(ee>0||he>0||Z>0))return null;let fe=ee+he+Z;if(fe===0)return null;let xe=W*(ee*O+he*D+Z*B);return(fe>0?xe<0:xe>0)?null:this.at(xe/fe,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Lt=class extends En{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ii,this.combine=ql,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},xf=new Ke,zs=new Ss,el=new Nn,_f=new I,tl=new I,nl=new I,il=new I,Ou=new I,sl=new I,vf=new I,rl=new I,ae=class extends Ct{constructor(e=new Qe,t=new Lt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){sl.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=o[l],h=r[l];u!==0&&(Ou.fromBufferAttribute(h,e),a?sl.addScaledVector(Ou,u):sl.addScaledVector(Ou.sub(t),u))}t.add(sl)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),el.copy(n.boundingSphere),el.applyMatrix4(r),zs.copy(e.ray).recast(e.near),!(el.containsPoint(zs.origin)===!1&&(zs.intersectSphere(el,_f)===null||zs.origin.distanceToSquared(_f)>(e.far-e.near)**2))&&(xf.copy(r).invert(),zs.copy(e.ray).applyMatrix4(xf),!(n.boundingBox!==null&&zs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,zs)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,y=d.length;_<y;_++){let g=d[_],m=a[g.materialIndex],M=Math.max(g.start,f.start),A=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let v=M,b=A;v<b;v+=3){let S=o.getX(v),C=o.getX(v+1),p=o.getX(v+2);s=al(this,m,e,n,c,u,h,S,C,p),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let _=Math.max(0,f.start),y=Math.min(o.count,f.start+f.count);for(let g=_,m=y;g<m;g+=3){let M=o.getX(g),A=o.getX(g+1),v=o.getX(g+2);s=al(this,a,e,n,c,u,h,M,A,v),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,y=d.length;_<y;_++){let g=d[_],m=a[g.materialIndex],M=Math.max(g.start,f.start),A=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let v=M,b=A;v<b;v+=3){let S=v,C=v+1,p=v+2;s=al(this,m,e,n,c,u,h,S,C,p),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let _=Math.max(0,f.start),y=Math.min(l.count,f.start+f.count);for(let g=_,m=y;g<m;g+=3){let M=g,A=g+1,v=g+2;s=al(this,a,e,n,c,u,h,M,A,v),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}};function j0(i,e,t,n,s,r,a,o){let l;if(e.side===kt?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===Fi,o),l===null)return null;rl.copy(o),rl.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(rl);return c<t.near||c>t.far?null:{distance:c,point:rl.clone(),object:i}}function al(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,tl),i.getVertexPosition(l,nl),i.getVertexPosition(c,il);let u=j0(i,e,t,n,tl,nl,il,vf);if(u){let h=new I;Zi.getBarycoord(vf,tl,nl,il,h),s&&(u.uv=Zi.getInterpolatedAttribute(s,o,l,c,h,new Se)),r&&(u.uv1=Zi.getInterpolatedAttribute(r,o,l,c,h,new Se)),a&&(u.normal=Zi.getInterpolatedAttribute(a,o,l,c,h,new I),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new I,materialIndex:0};Zi.getNormal(tl,nl,il,d.normal),u.face=d,u.barycoord=h}return u}var Pa=new Rt,yf=new Rt,Mf=new Rt,Q0=new Rt,Sf=new Ke,ol=new I,Bu=new Nn,bf=new Ke,ku=new Ss,Va=class extends ae{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Wu,this.bindMatrix=new Ke,this.bindMatrixInverse=new Ke,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new zn),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,ol),this.boundingBox.expandByPoint(ol)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Nn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,ol),this.boundingSphere.expandByPoint(ol)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Bu.copy(this.boundingSphere),Bu.applyMatrix4(s),e.ray.intersectsSphere(Bu)!==!1&&(bf.copy(s).invert(),ku.copy(e.ray).applyMatrix4(bf),!(this.boundingBox!==null&&ku.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,ku)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new Rt,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Wu?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===dp?this.bindMatrixInverse.copy(this.bindMatrix).invert():Be("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;yf.fromBufferAttribute(s.attributes.skinIndex,e),Mf.fromBufferAttribute(s.attributes.skinWeight,e),t.isVector4?(Pa.copy(t),t.set(0,0,0,0)):(Pa.set(...t,1),t.set(0,0,0)),Pa.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let a=Mf.getComponent(r);if(a!==0){let o=yf.getComponent(r);Sf.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(Q0.copy(Pa).applyMatrix4(Sf),a)}}return t.isVector4&&(t.w=Pa.w),t.applyMatrix4(this.bindMatrixInverse)}},Gr=class extends Ct{constructor(){super(),this.isBone=!0,this.type="Bone"}},Wr=class extends qt{constructor(e=null,t=1,n=1,s,r,a,o,l,c=jt,u=jt,h,d){super(null,a,o,l,c,u,s,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Ef=new Ke,eg=new Ke,Ga=class i{constructor(e=[],t=[]){this.uuid=gi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Be("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Ke)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Ke;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,a=e.length;r<a;r++){let o=e[r]?e[r].matrixWorld:eg;Ef.multiplyMatrices(o,t[r]),Ef.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Wr(t,e,e,Xn,Wn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],a=t[r];a===void 0&&(Be("Skeleton: No bone found with UUID:",r),a=new Gr),this.bones.push(a),this.boneInverses.push(new Ke().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let a=t[s];e.bones.push(a.uuid);let o=n[s];e.boneInverses.push(o.toArray())}return e}},ji=class extends ct{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Pr=new Ke,Tf=new Ke,ll=[],wf=new zn,tg=new Ke,Ia=new ae,La=new Nn,Qi=class extends ae{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ji(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,tg)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new zn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Pr),wf.copy(e.boundingBox).applyMatrix4(Pr),this.boundingBox.union(wf)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Nn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Pr),La.copy(e.boundingSphere).applyMatrix4(Pr),this.boundingSphere.union(La)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(Ia.geometry=this.geometry,Ia.material=this.material,Ia.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),La.copy(this.boundingSphere),La.applyMatrix4(n),e.ray.intersectsSphere(La)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Pr),Tf.multiplyMatrices(n,Pr),Ia.matrixWorld=Tf,Ia.raycast(e,ll);for(let a=0,o=ll.length;a<o;a++){let l=ll[a];l.instanceId=r,l.object=this,t.push(l)}ll.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new ji(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Wr(new Float32Array(s*this.count),s,this.count,Ql,Wn));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Vs=new Nn,ng=new Se(.5,.5),cl=new I,Xr=class{constructor(e=new fi,t=new fi,n=new fi,s=new fi,r=new fi,a=new fi){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=mi,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],u=r[4],h=r[5],d=r[6],f=r[7],_=r[8],y=r[9],g=r[10],m=r[11],M=r[12],A=r[13],v=r[14],b=r[15];if(s[0].setComponents(c-a,f-u,m-_,b-M).normalize(),s[1].setComponents(c+a,f+u,m+_,b+M).normalize(),s[2].setComponents(c+o,f+h,m+y,b+A).normalize(),s[3].setComponents(c-o,f-h,m-y,b-A).normalize(),n)s[4].setComponents(l,d,g,v).normalize(),s[5].setComponents(c-l,f-d,m-g,b-v).normalize();else if(s[4].setComponents(c-l,f-d,m-g,b-v).normalize(),t===mi)s[5].setComponents(c+l,f+d,m+g,b+v).normalize();else if(t===Or)s[5].setComponents(l,d,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Vs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Vs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Vs)}intersectsSprite(e){Vs.center.set(0,0,0);let t=ng.distanceTo(e.center);return Vs.radius=.7071067811865476+t,Vs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Vs)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(cl.x=s.normal.x>0?e.max.x:e.min.x,cl.y=s.normal.y>0?e.max.y:e.min.y,cl.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(cl)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var ni=class extends En{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new oe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Cl=new I,Pl=new I,Af=new Ke,Na=new Ss,ul=new Nn,Hu=new I,Rf=new I,Vn=class extends Ct{constructor(e=new Qe,t=new ni){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Cl.fromBufferAttribute(t,s-1),Pl.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Cl.distanceTo(Pl);e.setAttribute("lineDistance",new nt(n,1))}else Be("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ul.copy(n.boundingSphere),ul.applyMatrix4(s),ul.radius+=r,e.ray.intersectsSphere(ul)===!1)return;Af.copy(s).invert(),Na.copy(e.ray).applyMatrix4(Af);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){let f=Math.max(0,a.start),_=Math.min(u.count,a.start+a.count);for(let y=f,g=_-1;y<g;y+=c){let m=u.getX(y),M=u.getX(y+1),A=hl(this,e,Na,l,m,M,y);A&&t.push(A)}if(this.isLineLoop){let y=u.getX(_-1),g=u.getX(f),m=hl(this,e,Na,l,y,g,_-1);m&&t.push(m)}}else{let f=Math.max(0,a.start),_=Math.min(d.count,a.start+a.count);for(let y=f,g=_-1;y<g;y+=c){let m=hl(this,e,Na,l,y,y+1,y);m&&t.push(m)}if(this.isLineLoop){let y=hl(this,e,Na,l,_-1,f,_-1);y&&t.push(y)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function hl(i,e,t,n,s,r,a){let o=i.geometry.attributes.position;if(Cl.fromBufferAttribute(o,s),Pl.fromBufferAttribute(o,r),t.distanceSqToSegment(Cl,Pl,Hu,Rf)>n)return;Hu.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Hu);if(!(c<e.near||c>e.far))return{distance:c,point:Rf.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var Cf=new I,Pf=new I,$s=class extends Vn{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Cf.fromBufferAttribute(t,s),Pf.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Cf.distanceTo(Pf);e.setAttribute("lineDistance",new nt(n,1))}else Be("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Wa=class extends Vn{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},ii=class extends En{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new oe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},If=new Ke,Ku=new Ss,dl=new Nn,fl=new I,Tn=class extends Ct{constructor(e=new Qe,t=new ii){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),dl.copy(n.boundingSphere),dl.applyMatrix4(s),dl.radius+=r,e.ray.intersectsSphere(dl)===!1)return;If.copy(s).invert(),Ku.copy(e.ray).applyMatrix4(If);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,h=n.attributes.position;if(c!==null){let d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let _=d,y=f;_<y;_++){let g=c.getX(_);fl.fromBufferAttribute(h,g),Lf(fl,g,l,s,e,t,this)}}else{let d=Math.max(0,a.start),f=Math.min(h.count,a.start+a.count);for(let _=d,y=f;_<y;_++)fl.fromBufferAttribute(h,_),Lf(fl,_,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Lf(i,e,t,n,s,r,a){let o=Ku.distanceSqToPoint(i);if(o<t){let l=new I;Ku.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var Xa=class extends qt{constructor(e=[],t=ws,n,s,r,a,o,l,c,u){super(e,t,n,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},ln=class extends qt{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var bs=class extends qt{constructor(e,t,n=Mi,s,r,a,o=jt,l=jt,c,u=Ci,h=1){if(u!==Ci&&u!==As)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:h};super(d,s,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Hr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Il=class extends bs{constructor(e,t=Mi,n=ws,s,r,a=jt,o=jt,l,c=Ci){let u={width:e,height:e,depth:1},h=[u,u,u,u,u,u];super(e,e,t,n,s,r,a,o,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},qa=class extends qt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},_n=class i extends Qe{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],u=[],h=[],d=0,f=0;_("z","y","x",-1,-1,n,t,e,a,r,0),_("z","y","x",1,-1,n,t,-e,a,r,1),_("x","z","y",1,1,e,n,t,s,a,2),_("x","z","y",1,-1,e,n,-t,s,a,3),_("x","y","z",1,-1,e,t,n,s,r,4),_("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new nt(c,3)),this.setAttribute("normal",new nt(u,3)),this.setAttribute("uv",new nt(h,2));function _(y,g,m,M,A,v,b,S,C,p,E){let L=v/C,z=b/p,O=v/2,G=b/2,w=S/2,D=C+1,H=p+1,N=0,B=0,R=new I;for(let F=0;F<H;F++){let W=F*z-G;for(let le=0;le<D;le++){let ie=le*L-O;R[y]=ie*M,R[g]=W*A,R[m]=w,c.push(R.x,R.y,R.z),R[y]=0,R[g]=0,R[m]=S>0?1:-1,u.push(R.x,R.y,R.z),h.push(le/C),h.push(1-F/p),N+=1}}for(let F=0;F<p;F++)for(let W=0;W<C;W++){let le=d+W+D*F,ie=d+W+D*(F+1),Le=d+(W+1)+D*(F+1),ke=d+(W+1)+D*F;l.push(le,ie,ke),l.push(ie,Le,ke),B+=6}o.addGroup(f,B,E),f+=B,d+=N}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},Li=class i extends Qe{constructor(e=1,t=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:s,heightSegments:r},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let a=[],o=[],l=[],c=[],u=t/2,h=Math.PI/2*e,d=t,f=2*h+d,_=n*2+r,y=s+1,g=new I,m=new I;for(let M=0;M<=_;M++){let A=0,v=0,b=0,S=0;if(M<=n){let E=M/n,L=E*Math.PI/2;v=-u-e*Math.cos(L),b=e*Math.sin(L),S=-e*Math.cos(L),A=E*h}else if(M<=n+r){let E=(M-n)/r;v=-u+E*t,b=e,S=0,A=h+E*d}else{let E=(M-n-r)/n,L=E*Math.PI/2;v=u+e*Math.sin(L),b=e*Math.cos(L),S=e*Math.sin(L),A=h+d+E*h}let C=Math.max(0,Math.min(1,A/f)),p=0;M===0?p=.5/s:M===_&&(p=-.5/s);for(let E=0;E<=s;E++){let L=E/s,z=L*Math.PI*2,O=Math.sin(z),G=Math.cos(z);m.x=-b*G,m.y=v,m.z=b*O,o.push(m.x,m.y,m.z),g.set(-b*G,S,b*O),g.normalize(),l.push(g.x,g.y,g.z),c.push(L+p,C)}if(M>0){let E=(M-1)*y;for(let L=0;L<s;L++){let z=E+L,O=E+L+1,G=M*y+L,w=M*y+L+1;a.push(z,O,G),a.push(O,w,G)}}}this.setIndex(a),this.setAttribute("position",new nt(o,3)),this.setAttribute("normal",new nt(l,3)),this.setAttribute("uv",new nt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},es=class i extends Qe{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],a=[],o=[],l=[],c=new I,u=new Se;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let h=0,d=3;h<=t;h++,d+=3){let f=n+h/t*s;c.x=e*Math.cos(f),c.y=e*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),u.x=(a[d]/e+1)/2,u.y=(a[d+1]/e+1)/2,l.push(u.x,u.y)}for(let h=1;h<=t;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new nt(a,3)),this.setAttribute("normal",new nt(o,3)),this.setAttribute("uv",new nt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},bt=class i extends Qe{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let u=[],h=[],d=[],f=[],_=0,y=[],g=n/2,m=0;M(),a===!1&&(e>0&&A(!0),t>0&&A(!1)),this.setIndex(u),this.setAttribute("position",new nt(h,3)),this.setAttribute("normal",new nt(d,3)),this.setAttribute("uv",new nt(f,2));function M(){let v=new I,b=new I,S=0,C=(t-e)/n;for(let p=0;p<=r;p++){let E=[],L=p/r,z=L*(t-e)+e;for(let O=0;O<=s;O++){let G=O/s,w=G*l+o,D=Math.sin(w),H=Math.cos(w);b.x=z*D,b.y=-L*n+g,b.z=z*H,h.push(b.x,b.y,b.z),v.set(D,C,H).normalize(),d.push(v.x,v.y,v.z),f.push(G,1-L),E.push(_++)}y.push(E)}for(let p=0;p<s;p++)for(let E=0;E<r;E++){let L=y[E][p],z=y[E+1][p],O=y[E+1][p+1],G=y[E][p+1];(e>0||E!==0)&&(u.push(L,z,G),S+=3),(t>0||E!==r-1)&&(u.push(z,O,G),S+=3)}c.addGroup(m,S,0),m+=S}function A(v){let b=_,S=new Se,C=new I,p=0,E=v===!0?e:t,L=v===!0?1:-1;for(let O=1;O<=s;O++)h.push(0,g*L,0),d.push(0,L,0),f.push(.5,.5),_++;let z=_;for(let O=0;O<=s;O++){let w=O/s*l+o,D=Math.cos(w),H=Math.sin(w);C.x=E*H,C.y=g*L,C.z=E*D,h.push(C.x,C.y,C.z),d.push(0,L,0),S.x=D*.5+.5,S.y=H*.5*L+.5,f.push(S.x,S.y),_++}for(let O=0;O<s;O++){let G=b+O,w=z+O;v===!0?u.push(w,w+1,G):u.push(w+1,w,G),p+=3}c.addGroup(m,p,v===!0?1:2),m+=p}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},qr=class i extends bt{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Ll=class i extends Qe{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],a=[];o(s),c(n),u(),this.setAttribute("position",new nt(r,3)),this.setAttribute("normal",new nt(r.slice(),3)),this.setAttribute("uv",new nt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(M){let A=new I,v=new I,b=new I;for(let S=0;S<t.length;S+=3)f(t[S+0],A),f(t[S+1],v),f(t[S+2],b),l(A,v,b,M)}function l(M,A,v,b){let S=b+1,C=[];for(let p=0;p<=S;p++){C[p]=[];let E=M.clone().lerp(v,p/S),L=A.clone().lerp(v,p/S),z=S-p;for(let O=0;O<=z;O++)O===0&&p===S?C[p][O]=E:C[p][O]=E.clone().lerp(L,O/z)}for(let p=0;p<S;p++)for(let E=0;E<2*(S-p)-1;E++){let L=Math.floor(E/2);E%2===0?(d(C[p][L+1]),d(C[p+1][L]),d(C[p][L])):(d(C[p][L+1]),d(C[p+1][L+1]),d(C[p+1][L]))}}function c(M){let A=new I;for(let v=0;v<r.length;v+=3)A.x=r[v+0],A.y=r[v+1],A.z=r[v+2],A.normalize().multiplyScalar(M),r[v+0]=A.x,r[v+1]=A.y,r[v+2]=A.z}function u(){let M=new I;for(let A=0;A<r.length;A+=3){M.x=r[A+0],M.y=r[A+1],M.z=r[A+2];let v=g(M)/2/Math.PI+.5,b=m(M)/Math.PI+.5;a.push(v,1-b)}_(),h()}function h(){for(let M=0;M<a.length;M+=6){let A=a[M+0],v=a[M+2],b=a[M+4],S=Math.max(A,v,b),C=Math.min(A,v,b);S>.9&&C<.1&&(A<.2&&(a[M+0]+=1),v<.2&&(a[M+2]+=1),b<.2&&(a[M+4]+=1))}}function d(M){r.push(M.x,M.y,M.z)}function f(M,A){let v=M*3;A.x=e[v+0],A.y=e[v+1],A.z=e[v+2]}function _(){let M=new I,A=new I,v=new I,b=new I,S=new Se,C=new Se,p=new Se;for(let E=0,L=0;E<r.length;E+=9,L+=6){M.set(r[E+0],r[E+1],r[E+2]),A.set(r[E+3],r[E+4],r[E+5]),v.set(r[E+6],r[E+7],r[E+8]),S.set(a[L+0],a[L+1]),C.set(a[L+2],a[L+3]),p.set(a[L+4],a[L+5]),b.copy(M).add(A).add(v).divideScalar(3);let z=g(b);y(S,L+0,M,z),y(C,L+2,A,z),y(p,L+4,v,z)}}function y(M,A,v,b){b<0&&M.x===1&&(a[A]=M.x-1),v.x===0&&v.z===0&&(a[A]=b/2/Math.PI+.5)}function g(M){return Math.atan2(M.z,-M.x)}function m(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.detail)}};var Nl=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Be("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let u=n[s],d=n[s+1]-u,f=(a-u)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new Se:new I);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new I,s=[],r=[],a=[],o=new I,l=new Ke;for(let f=0;f<=e;f++){let _=f/e;s[f]=this.getTangentAt(_,new I)}r[0]=new I,a[0]=new I;let c=Number.MAX_VALUE,u=Math.abs(s[0].x),h=Math.abs(s[0].y),d=Math.abs(s[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let _=Math.acos(lt(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,_))}a[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(lt(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let _=1;_<=e;_++)r[_].applyMatrix4(l.makeRotationAxis(s[_],f*_)),a[_].crossVectors(s[_],r[_])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}};function ig(i,e){let t=1-i;return t*t*t*e}function sg(i,e){let t=1-i;return 3*t*t*i*e}function rg(i,e){return 3*(1-i)*i*i*e}function ag(i,e){return i*i*i*e}function zu(i,e,t,n,s){return ig(i,e)+sg(i,t)+rg(i,n)+ag(i,s)}var Ya=class extends Nl{constructor(e=new I,t=new I,n=new I,s=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new I){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(zu(e,s.x,r.x,a.x,o.x),zu(e,s.y,r.y,a.y,o.y),zu(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}};var xi=class i extends Ll{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var ts=class i extends Qe{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,u=l+1,h=e/o,d=t/l,f=[],_=[],y=[],g=[];for(let m=0;m<u;m++){let M=m*d-a;for(let A=0;A<c;A++){let v=A*h-r;_.push(v,-M,0),y.push(0,0,1),g.push(A/o),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let M=0;M<o;M++){let A=M+c*m,v=M+c*(m+1),b=M+1+c*(m+1),S=M+1+c*m;f.push(A,v,S),f.push(v,b,S)}this.setIndex(f),this.setAttribute("position",new nt(_,3)),this.setAttribute("normal",new nt(y,3)),this.setAttribute("uv",new nt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},Ks=class i extends Qe{constructor(e=.5,t=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let o=[],l=[],c=[],u=[],h=e,d=(t-e)/s,f=new I,_=new Se;for(let y=0;y<=s;y++){for(let g=0;g<=n;g++){let m=r+g/n*a;f.x=h*Math.cos(m),f.y=h*Math.sin(m),l.push(f.x,f.y,f.z),c.push(0,0,1),_.x=(f.x/t+1)/2,_.y=(f.y/t+1)/2,u.push(_.x,_.y)}h+=d}for(let y=0;y<s;y++){let g=y*(n+1);for(let m=0;m<n;m++){let M=m+g,A=M,v=M+n+1,b=M+n+2,S=M+1;o.push(A,v,S),o.push(v,b,S)}}this.setIndex(o),this.setAttribute("position",new nt(l,3)),this.setAttribute("normal",new nt(c,3)),this.setAttribute("uv",new nt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var Ut=class i extends Qe{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,u=[],h=new I,d=new I,f=[],_=[],y=[],g=[];for(let m=0;m<=n;m++){let M=[],A=m/n,v=a+A*o,b=e*Math.cos(v),S=Math.sqrt(e*e-b*b),C=0;m===0&&a===0?C=.5/t:m===n&&l===Math.PI&&(C=-.5/t);for(let p=0;p<=t;p++){let E=p/t,L=s+E*r;h.x=-S*Math.cos(L),h.y=b,h.z=S*Math.sin(L),_.push(h.x,h.y,h.z),d.copy(h).normalize(),y.push(d.x,d.y,d.z),g.push(E+C,1-A),M.push(c++)}u.push(M)}for(let m=0;m<n;m++)for(let M=0;M<t;M++){let A=u[m][M+1],v=u[m][M],b=u[m+1][M],S=u[m+1][M+1];(m!==0||a>0)&&f.push(A,v,S),(m!==n-1||l<Math.PI)&&f.push(v,b,S)}this.setIndex(f),this.setAttribute("position",new nt(_,3)),this.setAttribute("normal",new nt(y,3)),this.setAttribute("uv",new nt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Gn=class i extends Qe{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],u=[],h=[],d=new I,f=new I,_=new I;for(let y=0;y<=n;y++){let g=a+y/n*o;for(let m=0;m<=s;m++){let M=m/s*r;f.x=(e+t*Math.cos(g))*Math.cos(M),f.y=(e+t*Math.cos(g))*Math.sin(M),f.z=t*Math.sin(g),c.push(f.x,f.y,f.z),d.x=e*Math.cos(M),d.y=e*Math.sin(M),_.subVectors(f,d).normalize(),u.push(_.x,_.y,_.z),h.push(m/s),h.push(y/n)}}for(let y=1;y<=n;y++)for(let g=1;g<=s;g++){let m=(s+1)*y+g-1,M=(s+1)*(y-1)+g-1,A=(s+1)*(y-1)+g,v=(s+1)*y+g;l.push(m,M,v),l.push(M,A,v)}this.setIndex(l),this.setAttribute("position",new nt(c,3)),this.setAttribute("normal",new nt(u,3)),this.setAttribute("uv",new nt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};function ir(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(Nf(s))s.isRenderTargetTexture?(Be("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(Nf(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function wn(i){let e={};for(let t=0;t<i.length;t++){let n=ir(i[t]);for(let s in n)e[s]=n[s]}return e}function Nf(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function og(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function vh(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:st.workingColorSpace}var os={clone:ir,merge:wn},lg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,cg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ft=class extends En{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=lg,this.fragmentShader=cg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ir(e.uniforms),this.uniformsGroups=og(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new oe().setHex(s.value);break;case"v2":this.uniforms[n].value=new Se().fromArray(s.value);break;case"v3":this.uniforms[n].value=new I().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Rt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Ze().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Ke().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Yr=class extends ft{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},qe=class extends En{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new oe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new oe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=vo,this.normalScale=new Se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ii,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Dn=class extends qe{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Se(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return lt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new oe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new oe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new oe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var $a=class extends En{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new oe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=vo,this.normalScale=new Se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ii,this.combine=ql,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Dl=class extends En{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=pp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Ul=class extends En{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};var Ka=class extends ni{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}};function ys(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function _l(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}function ug(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function Df(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,a=0;a!==n;++r){let o=t[r]*e;for(let l=0;l!==e;++l)s[a++]=i[o+l]}return s}function hg(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push(...a)),r=i[s++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=i[s++];while(r!==void 0)}var Ni=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Fl=class extends Ni{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:qu,endingEnd:qu}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Yu:r=e,o=2*t-n;break;case $u:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Yu:a=e,l=2*n-t;break;case $u:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}let c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,_=(n-t)/(s-t),y=_*_,g=y*_,m=-d*g+2*d*y-d*_,M=(1+d)*g+(-1.5-2*d)*y+(-.5+d)*_+1,A=(-1-f)*g+(1.5+f)*y+.5*_,v=f*g-f*y;for(let b=0;b!==o;++b)r[b]=m*a[u+b]+M*a[c+b]+A*a[l+b]+v*a[h+b];return r}},Ol=class extends Ni{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(n-t)/(s-t),h=1-u;for(let d=0;d!==o;++d)r[d]=a[c+d]*h+a[l+d]*u;return r}},Bl=class extends Ni{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},kl=class extends Ni{interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this.inTangents,h=this.outTangents;if(!u||!h){let _=(n-t)/(s-t),y=1-_;for(let g=0;g!==o;++g)r[g]=a[c+g]*y+a[l+g]*_;return r}let d=o*2,f=e-1;for(let _=0;_!==o;++_){let y=a[c+_],g=a[l+_],m=f*d+_*2,M=h[m],A=h[m+1],v=e*d+_*2,b=u[v],S=u[v+1],C=fg(n,t,M,b,s);r[_]=Cp(C,y,A,S,g)}return r}};function Cp(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function dg(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function fg(i,e,t,n,s){let r=(i-e)/(s-e);for(let a=0;a<8;a++){let o=Cp(r,e,t,n,s)-i;if(Math.abs(o)<1e-10)break;let l=dg(r,e,t,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var Un=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ys(t,this.TimeBufferType),this.values=ys(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ys(e.times,Array),values:ys(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),_l(e.settings)&&(n.settings={inTangents:ys(e.settings.inTangents,Array),outTangents:ys(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Bl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ol(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Fl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new kl(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Ws:t=this.InterpolantFactoryMethodDiscrete;break;case Xs:t=this.InterpolantFactoryMethodLinear;break;case gl:t=this.InterpolantFactoryMethodSmooth;break;case Xu:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Be("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ws;case this.InterpolantFactoryMethodLinear:return Xs;case this.InterpolantFactoryMethodSmooth:return gl;case this.InterpolantFactoryMethodBezier:return Xu}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;_l(this.settings)&&(Uf(this.settings.inTangents,e),Uf(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(We("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(We("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){We("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){We("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&v0(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){We("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===gl,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(s)l=!0;else{let h=o*n,d=h-n,f=h+n;for(let _=0;_!==n;++_){let y=t[h+_];if(y!==t[d+_]||y!==t[f+_]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let h=o*n,d=a*n;for(let f=0;f!==n;++f)t[d+f]=t[h+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,_l(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Uf(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}Un.prototype.ValueTypeName="";Un.prototype.TimeBufferType=Float32Array;Un.prototype.ValueBufferType=Float32Array;Un.prototype.DefaultInterpolation=Xs;var ns=class extends Un{constructor(e,t,n){super(e,t,n)}};ns.prototype.ValueTypeName="bool";ns.prototype.ValueBufferType=Array;ns.prototype.DefaultInterpolation=Ws;ns.prototype.InterpolantFactoryMethodLinear=void 0;ns.prototype.InterpolantFactoryMethodSmooth=void 0;var Za=class extends Un{constructor(e,t,n,s){super(e,t,n,s)}};Za.prototype.ValueTypeName="color";var is=class extends Un{constructor(e,t,n,s){super(e,t,n,s)}};is.prototype.ValueTypeName="number";var Hl=class extends Ni{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),c=e*o;for(let u=c+o;c!==u;c+=4)In.slerpFlat(r,0,a,c-o,a,c,l);return r}},ss=class extends Un{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Hl(this.times,this.values,this.getValueSize(),e)}};ss.prototype.ValueTypeName="quaternion";ss.prototype.InterpolantFactoryMethodSmooth=void 0;var rs=class extends Un{constructor(e,t,n){super(e,t,n)}};rs.prototype.ValueTypeName="string";rs.prototype.ValueBufferType=Array;rs.prototype.DefaultInterpolation=Ws;rs.prototype.InterpolantFactoryMethodLinear=void 0;rs.prototype.InterpolantFactoryMethodSmooth=void 0;var Es=class extends Un{constructor(e,t,n,s){super(e,t,n,s)}};Es.prototype.ValueTypeName="vector";var Ja=class{constructor(e="",t=-1,n=[],s=fp){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=gi(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(mg(n[a]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,a=n.length;r!==a;++r)t.push(Un.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);let u=ug(l);l=Df(l,1,u),c=Df(c,1,u),!s&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new is(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){let c=e[o],u=c.name.match(r);if(u&&u.length>1){let h=u[1],d=s[h];d||(s[h]=d=[]),d.push(c)}}let a=[];for(let o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],t,n));return a}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function pg(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return is;case"vector":case"vector2":case"vector3":case"vector4":return Es;case"color":return Za;case"quaternion":return ss;case"bool":case"boolean":return ns;case"string":return rs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function mg(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=pg(i.type);if(i.times===void 0){let n=[],s=[];hg(i.keys,n,s,"value"),i.times=n,i.values=s}let t;return e.parse!==void 0?t=e.parse(i):t=new e(i.name,i.times,i.values,i.interpolation),_l(i.settings)&&(t.settings={inTangents:ys(i.settings.inTangents,Float32Array),outTangents:ys(i.settings.outTangents,Float32Array)}),t}var Ri={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(Ff(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!Ff(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function Ff(i){try{let e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var zl=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){let h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){let f=c[h],_=c[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return _}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Pp=new zl,Di=class{constructor(e){this.manager=e!==void 0?e:Pp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Di.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ki={},Zu=class extends Error{constructor(e,t){super(e),this.response=t}},$r=class extends Di{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Ri.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(Ki[e]!==void 0){Ki[e].push({onLoad:t,onProgress:n,onError:s});return}Ki[e]=[],Ki[e].push({onLoad:t,onProgress:n,onError:s});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Be("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let u=Ki[e],h=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,_=f!==0,y=0,g=new ReadableStream({start(m){M();function M(){h.read().then(({done:A,value:v})=>{if(A)m.close();else{y+=v.byteLength;let b=new ProgressEvent("progress",{lengthComputable:_,loaded:y,total:f});for(let S=0,C=u.length;S<C;S++){let p=u[S];p.onProgress&&p.onProgress(b)}m.enqueue(v),M()}},A=>{m.error(A)})}}});return new Response(g)}else throw new Zu(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return c.json();default:if(o==="")return c.text();{let h=/charset="?([^;"\s]*)"?/i.exec(o),d=h&&h[1]?h[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(_=>f.decode(_))}}}).then(c=>{Ri.add(`file:${e}`,c);let u=Ki[e];delete Ki[e];for(let h=0,d=u.length;h<d;h++){let f=u[h];f.onLoad&&f.onLoad(c)}}).catch(c=>{let u=Ki[e];if(u===void 0)throw this.manager.itemError(e),c;delete Ki[e];for(let h=0,d=u.length;h<d;h++){let f=u[h];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Ir=new WeakMap,Vl=class extends Di{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=Ri.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let h=Ir.get(a);h===void 0&&(h=[],Ir.set(a,h)),h.push({onLoad:t,onError:s})}return a}let o=Br("img");function l(){u(),t&&t(this);let h=Ir.get(this)||[];for(let d=0;d<h.length;d++){let f=h[d];f.onLoad&&f.onLoad(this)}Ir.delete(this),r.manager.itemEnd(e)}function c(h){u(),s&&s(h),Ri.remove(`image:${e}`);let d=Ir.get(this)||[];for(let f=0;f<d.length;f++){let _=d[f];_.onError&&_.onError(h)}Ir.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Ri.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}};var ja=class extends Di{constructor(e){super(e)}load(e,t,n,s){let r=new qt,a=new Vl(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},Ts=class extends Ct{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new oe(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Qa=class extends Ts{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ct.DEFAULT_UP),this.updateMatrix(),this.groundColor=new oe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Vu=new Ke,Of=new I,Bf=new I,Kr=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Se(512,512),this.mapType=Fn,this.map=null,this.mapPass=null,this.matrix=new Ke,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Xr,this._frameExtents=new Se(1,1),this._viewportCount=1,this._viewports=[new Rt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Of.setFromMatrixPosition(e.matrixWorld),t.position.copy(Of),Bf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Bf),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){Vu.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Vu,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===Or||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(Vu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},pl=new I,ml=new In,Ai=new I,eo=class extends Ct{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ke,this.projectionMatrix=new Ke,this.projectionMatrixInverse=new Ke,this.coordinateSystem=mi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(pl,ml,Ai),Ai.x===1&&Ai.y===1&&Ai.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(pl,ml,Ai.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(pl,ml,Ai),Ai.x===1&&Ai.y===1&&Ai.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(pl,ml,Ai.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},vs=new I,kf=new Se,Hf=new Se,Vt=class extends eo{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=qs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Da*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return qs*2*Math.atan(Math.tan(Da*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){vs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(vs.x,vs.y).multiplyScalar(-e/vs.z),vs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(vs.x,vs.y).multiplyScalar(-e/vs.z)}getViewSize(e,t){return this.getViewBounds(e,kf,Hf),t.subVectors(Hf,kf)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Da*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Ju=class extends Kr{constructor(){super(new Vt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=qs*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},to=class extends Ts{constructor(e,t,n=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ct.DEFAULT_UP),this.updateMatrix(),this.target=new Ct,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Ju}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},ju=class extends Kr{constructor(){super(new Vt(90,1,.5,500)),this.isPointLightShadow=!0}},_i=class extends Ts{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new ju}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Ui=class extends eo{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Qu=class extends Kr{constructor(){super(new Ui(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},si=class extends Ts{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ct.DEFAULT_UP),this.updateMatrix(),this.target=new Ct,this.shadow=new Qu}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},Zs=class extends Ts{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var as=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var Gu=new WeakMap,no=class extends Di{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Be("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Be("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=Ri.get(`image-bitmap:${e}`);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(c=>{Gu.has(a)===!0?(s&&s(Gu.get(a)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(c),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);return}let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Ri.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),Gu.set(l,c),Ri.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});Ri.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Lr=-90,Nr=1,Gl=class extends Ct{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Vt(Lr,Nr,e,t);s.layers=this.layers,this.add(s);let r=new Vt(Lr,Nr,e,t);r.layers=this.layers,this.add(r);let a=new Vt(Lr,Nr,e,t);a.layers=this.layers,this.add(a);let o=new Vt(Lr,Nr,e,t);o.layers=this.layers,this.add(o);let l=new Vt(Lr,Nr,e,t);l.layers=this.layers,this.add(l);let c=new Vt(Lr,Nr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===mi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Or)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;let y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=y,e.setRenderTarget(n,5,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}},Wl=class extends Vt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},Js=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=gg.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function gg(){this._document.hidden===!1&&this.reset()}var yh="\\[\\]\\.:\\/",xg=new RegExp("["+yh+"]","g"),Mh="[^"+yh+"]",_g="[^"+yh.replace("\\.","")+"]",vg=/((?:WC+[\/:])*)/.source.replace("WC",Mh),yg=/(WCOD+)?/.source.replace("WCOD",_g),Mg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Mh),Sg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Mh),bg=new RegExp("^"+vg+yg+Mg+Sg+"$"),Eg=["material","materials","bones","map"],eh=class{constructor(e,t,n){let s=n||Dt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Dt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(xg,"")}static parseTrackName(e){let t=bg.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Eg.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Be("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){We("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){We("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){We("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){We("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){We("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){We("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){We("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;We("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){We("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){We("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Dt.Composite=eh;Dt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Dt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Dt.prototype.GetterByBindingType=[Dt.prototype._getValue_direct,Dt.prototype._getValue_array,Dt.prototype._getValue_arrayElement,Dt.prototype._getValue_toArray];Dt.prototype.SetterByBindingTypeAndVersioning=[[Dt.prototype._setValue_direct,Dt.prototype._setValue_direct_setNeedsUpdate,Dt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Dt.prototype._setValue_array,Dt.prototype._setValue_array_setNeedsUpdate,Dt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Dt.prototype._setValue_arrayElement,Dt.prototype._setValue_arrayElement_setNeedsUpdate,Dt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Dt.prototype._setValue_fromArray,Dt.prototype._setValue_fromArray_setNeedsUpdate,Dt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var fS=new Float32Array(1);var zf=new Ke,io=class{constructor(e,t,n=0,s=1/0){this.ray=new Ss(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new zr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):We("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return zf.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(zf),this}intersectObject(e,t=!0,n=[]){return th(e,this,n,t),n.sort(Vf),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)th(e[s],this,n,t);return n.sort(Vf),n}};function Vf(i,e){return i.distance-e.distance}function th(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)th(r[a],e,t,!0)}}var Ah=class Ah{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};Ah.prototype.isMatrix2=!0;var nh=Ah;function Sh(i,e,t,n){let s=Tg(n);switch(t){case fh:return i*e;case Ql:return i*e/s.components*s.byteLength;case ec:return i*e/s.components*s.byteLength;case Rs:return i*e*2/s.components*s.byteLength;case tc:return i*e*2/s.components*s.byteLength;case ph:return i*e*3/s.components*s.byteLength;case Xn:return i*e*4/s.components*s.byteLength;case nc:return i*e*4/s.components*s.byteLength;case ho:case fo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case po:case mo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case sc:case ac:return Math.max(i,16)*Math.max(e,8)/4;case ic:case rc:return Math.max(i,8)*Math.max(e,8)/2;case oc:case lc:case uc:case hc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case cc:case go:case dc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case fc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case pc:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case mc:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case gc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case xc:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case _c:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case vc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case yc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Mc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Sc:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case bc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Ec:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Tc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case wc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Ac:case Rc:case Cc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Pc:case Ic:return Math.ceil(i/4)*Math.ceil(e/4)*8;case xo:case Lc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Tg(i){switch(i){case Fn:case ch:return{byteLength:1,components:1};case Qr:case uh:case un:return{byteLength:2,components:1};case Jl:case jl:return{byteLength:2,components:4};case Mi:case Zl:case Wn:return{byteLength:4,components:1};case hh:case dh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Be("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function jp(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Ag(i){let e=new WeakMap;function t(o,l){let c=o.array,u=o.usage,h=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,u),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,l,c){let u=l.array,h=l.updateRanges;if(i.bindBuffer(c,o),h.length===0)i.bufferSubData(c,0,u);else{h.sort((f,_)=>f.start-_.start);let d=0;for(let f=1;f<h.length;f++){let _=h[d],y=h[f];y.start<=_.start+_.count+1?_.count=Math.max(_.count,y.start+y.count-_.start):(++d,h[d]=y)}h.length=d+1;for(let f=0,_=h.length;f<_;f++){let y=h[f];i.bufferSubData(c,y.start*u.BYTES_PER_ELEMENT,u,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Rg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Cg=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Pg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ig=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Lg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ng=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Dg=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Ug=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Fg=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Og=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Bg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,kg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Hg=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,zg=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Vg=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Gg=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Wg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Xg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,qg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Yg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,$g=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Kg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Zg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Jg=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,jg=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Qg=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,ex=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,tx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,nx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ix=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,sx="gl_FragColor = linearToOutputTexel( gl_FragColor );",rx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ax=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,ox=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,lx=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,cx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ux=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,hx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,dx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,px=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,mx=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,gx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,xx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,_x=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,vx=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,yx=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Mx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Sx=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,bx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ex=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Tx=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,wx=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Ax=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Rx=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Cx=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Px=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Ix=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Lx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Nx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Dx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ux=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Fx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ox=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Bx=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,kx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Hx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,zx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Vx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Gx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Wx=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Xx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Yx=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,$x=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Kx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Jx=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,jx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Qx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,e_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,t_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,n_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,i_=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,s_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,r_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,a_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,o_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,l_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,c_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,u_=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,h_=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,d_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,f_=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,p_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,m_=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,g_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,x_=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,__=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,v_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,y_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,M_=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,S_=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,b_=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,E_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,T_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,w_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,A_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,R_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,C_=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,P_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,I_=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,L_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,N_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,D_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,U_=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,F_=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,O_=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,B_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,k_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,H_=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,z_=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,V_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,G_=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,W_=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,X_=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,q_=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Y_=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$_=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,K_=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Z_=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,J_=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,j_=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Q_=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ev=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tv=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nv=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,iv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sv=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,rv=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,av=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ov=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ot={alphahash_fragment:Rg,alphahash_pars_fragment:Cg,alphamap_fragment:Pg,alphamap_pars_fragment:Ig,alphatest_fragment:Lg,alphatest_pars_fragment:Ng,aomap_fragment:Dg,aomap_pars_fragment:Ug,batching_pars_vertex:Fg,batching_vertex:Og,begin_vertex:Bg,beginnormal_vertex:kg,bsdfs:Hg,iridescence_fragment:zg,bumpmap_pars_fragment:Vg,clipping_planes_fragment:Gg,clipping_planes_pars_fragment:Wg,clipping_planes_pars_vertex:Xg,clipping_planes_vertex:qg,color_fragment:Yg,color_pars_fragment:$g,color_pars_vertex:Kg,color_vertex:Zg,common:Jg,cube_uv_reflection_fragment:jg,defaultnormal_vertex:Qg,displacementmap_pars_vertex:ex,displacementmap_vertex:tx,emissivemap_fragment:nx,emissivemap_pars_fragment:ix,colorspace_fragment:sx,colorspace_pars_fragment:rx,envmap_fragment:ax,envmap_common_pars_fragment:ox,envmap_pars_fragment:lx,envmap_pars_vertex:cx,envmap_physical_pars_fragment:yx,envmap_vertex:ux,fog_vertex:hx,fog_pars_vertex:dx,fog_fragment:fx,fog_pars_fragment:px,gradientmap_pars_fragment:mx,lightmap_pars_fragment:gx,lights_lambert_fragment:xx,lights_lambert_pars_fragment:_x,lights_pars_begin:vx,lights_toon_fragment:Mx,lights_toon_pars_fragment:Sx,lights_phong_fragment:bx,lights_phong_pars_fragment:Ex,lights_physical_fragment:Tx,lights_physical_pars_fragment:wx,lights_fragment_begin:Ax,lights_fragment_maps:Rx,lights_fragment_end:Cx,lightprobes_pars_fragment:Px,logdepthbuf_fragment:Ix,logdepthbuf_pars_fragment:Lx,logdepthbuf_pars_vertex:Nx,logdepthbuf_vertex:Dx,map_fragment:Ux,map_pars_fragment:Fx,map_particle_fragment:Ox,map_particle_pars_fragment:Bx,metalnessmap_fragment:kx,metalnessmap_pars_fragment:Hx,morphinstance_vertex:zx,morphcolor_vertex:Vx,morphnormal_vertex:Gx,morphtarget_pars_vertex:Wx,morphtarget_vertex:Xx,normal_fragment_begin:qx,normal_fragment_maps:Yx,normal_pars_fragment:$x,normal_pars_vertex:Kx,normal_vertex:Zx,normalmap_pars_fragment:Jx,clearcoat_normal_fragment_begin:jx,clearcoat_normal_fragment_maps:Qx,clearcoat_pars_fragment:e_,iridescence_pars_fragment:t_,opaque_fragment:n_,packing:i_,premultiplied_alpha_fragment:s_,project_vertex:r_,dithering_fragment:a_,dithering_pars_fragment:o_,roughnessmap_fragment:l_,roughnessmap_pars_fragment:c_,shadowmap_pars_fragment:u_,shadowmap_pars_vertex:h_,shadowmap_vertex:d_,shadowmask_pars_fragment:f_,skinbase_vertex:p_,skinning_pars_vertex:m_,skinning_vertex:g_,skinnormal_vertex:x_,specularmap_fragment:__,specularmap_pars_fragment:v_,tonemapping_fragment:y_,tonemapping_pars_fragment:M_,transmission_fragment:S_,transmission_pars_fragment:b_,uv_pars_fragment:E_,uv_pars_vertex:T_,uv_vertex:w_,worldpos_vertex:A_,background_vert:R_,background_frag:C_,backgroundCube_vert:P_,backgroundCube_frag:I_,cube_vert:L_,cube_frag:N_,depth_vert:D_,depth_frag:U_,distance_vert:F_,distance_frag:O_,equirect_vert:B_,equirect_frag:k_,linedashed_vert:H_,linedashed_frag:z_,meshbasic_vert:V_,meshbasic_frag:G_,meshlambert_vert:W_,meshlambert_frag:X_,meshmatcap_vert:q_,meshmatcap_frag:Y_,meshnormal_vert:$_,meshnormal_frag:K_,meshphong_vert:Z_,meshphong_frag:J_,meshphysical_vert:j_,meshphysical_frag:Q_,meshtoon_vert:ev,meshtoon_frag:tv,points_vert:nv,points_frag:iv,shadow_vert:sv,shadow_frag:rv,sprite_vert:av,sprite_frag:ov},be={common:{diffuse:{value:new oe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ze}},envmap:{envMap:{value:null},envMapRotation:{value:new Ze},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ze},normalScale:{value:new Se(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new oe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new I},probesMax:{value:new I},probesResolution:{value:new I}},points:{diffuse:{value:new oe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0},uvTransform:{value:new Ze}},sprite:{diffuse:{value:new oe(16777215)},opacity:{value:1},center:{value:new Se(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}}},Bi={basic:{uniforms:wn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.fog]),vertexShader:ot.meshbasic_vert,fragmentShader:ot.meshbasic_frag},lambert:{uniforms:wn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new oe(0)},envMapIntensity:{value:1}}]),vertexShader:ot.meshlambert_vert,fragmentShader:ot.meshlambert_frag},phong:{uniforms:wn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new oe(0)},specular:{value:new oe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ot.meshphong_vert,fragmentShader:ot.meshphong_frag},standard:{uniforms:wn([be.common,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.roughnessmap,be.metalnessmap,be.fog,be.lights,{emissive:{value:new oe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag},toon:{uniforms:wn([be.common,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.gradientmap,be.fog,be.lights,{emissive:{value:new oe(0)}}]),vertexShader:ot.meshtoon_vert,fragmentShader:ot.meshtoon_frag},matcap:{uniforms:wn([be.common,be.bumpmap,be.normalmap,be.displacementmap,be.fog,{matcap:{value:null}}]),vertexShader:ot.meshmatcap_vert,fragmentShader:ot.meshmatcap_frag},points:{uniforms:wn([be.points,be.fog]),vertexShader:ot.points_vert,fragmentShader:ot.points_frag},dashed:{uniforms:wn([be.common,be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ot.linedashed_vert,fragmentShader:ot.linedashed_frag},depth:{uniforms:wn([be.common,be.displacementmap]),vertexShader:ot.depth_vert,fragmentShader:ot.depth_frag},normal:{uniforms:wn([be.common,be.bumpmap,be.normalmap,be.displacementmap,{opacity:{value:1}}]),vertexShader:ot.meshnormal_vert,fragmentShader:ot.meshnormal_frag},sprite:{uniforms:wn([be.sprite,be.fog]),vertexShader:ot.sprite_vert,fragmentShader:ot.sprite_frag},background:{uniforms:{uvTransform:{value:new Ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ot.background_vert,fragmentShader:ot.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ze}},vertexShader:ot.backgroundCube_vert,fragmentShader:ot.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ot.cube_vert,fragmentShader:ot.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ot.equirect_vert,fragmentShader:ot.equirect_frag},distance:{uniforms:wn([be.common,be.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ot.distance_vert,fragmentShader:ot.distance_frag},shadow:{uniforms:wn([be.lights,be.fog,{color:{value:new oe(0)},opacity:{value:1}}]),vertexShader:ot.shadow_vert,fragmentShader:ot.shadow_frag}};Bi.physical={uniforms:wn([Bi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ze},clearcoatNormalScale:{value:new Se(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ze},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ze},sheen:{value:0},sheenColor:{value:new oe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ze},transmissionSamplerSize:{value:new Se},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ze},attenuationDistance:{value:0},attenuationColor:{value:new oe(0)},specularColor:{value:new oe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ze},anisotropyVector:{value:new Se},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ze}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag};var Uc={r:0,b:0,g:0},lv=new Ke,Qp=new Ze;Qp.set(-1,0,0,0,1,0,0,0,1);function cv(i,e,t,n,s,r){let a=new oe(0),o=s===!0?0:1,l,c,u=null,h=0,d=null;function f(M){let A=M.isScene===!0?M.background:null;if(A&&A.isTexture){let v=M.backgroundBlurriness>0;A=e.get(A,v)}return A}function _(M){let A=!1,v=f(M);v===null?g(a,o):v&&v.isColor&&(g(v,1),A=!0);let b=i.xr.getEnvironmentBlendMode();b==="additive"?t.buffers.color.setClear(0,0,0,1,r):b==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||A)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function y(M,A){let v=f(A);v&&(v.isCubeTexture||v.mapping===uo)?(c===void 0&&(c=new ae(new _n(1,1,1),new ft({name:"BackgroundCubeMaterial",uniforms:ir(Bi.backgroundCube.uniforms),vertexShader:Bi.backgroundCube.vertexShader,fragmentShader:Bi.backgroundCube.fragmentShader,side:kt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,S,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(lv.makeRotationFromEuler(A.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Qp),c.material.toneMapped=st.getTransfer(v.colorSpace)!==yt,(u!==v||h!==v.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,u=v,h=v.version,d=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new ae(new ts(2,2),new ft({name:"BackgroundMaterial",uniforms:ir(Bi.background.uniforms),vertexShader:Bi.background.vertexShader,fragmentShader:Bi.background.fragmentShader,side:Fi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,l.material.toneMapped=st.getTransfer(v.colorSpace)!==yt,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||h!==v.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,u=v,h=v.version,d=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function g(M,A){M.getRGB(Uc,vh(i)),t.buffers.color.setClear(Uc.r,Uc.g,Uc.b,A,r)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,A=1){a.set(M),o=A,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(M){o=M,g(a,o)},render:_,addToRenderList:y,dispose:m}}function uv(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,a=!1;function o(z,O,G,w,D){let H=!1,N=h(z,w,G,O);r!==N&&(r=N,c(r.object)),H=f(z,w,G,D),H&&_(z,w,G,D),D!==null&&e.update(D,i.ELEMENT_ARRAY_BUFFER),(H||a)&&(a=!1,v(z,O,G,w),D!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(D).buffer))}function l(){return i.createVertexArray()}function c(z){return i.bindVertexArray(z)}function u(z){return i.deleteVertexArray(z)}function h(z,O,G,w){let D=w.wireframe===!0,H=n[O.id];H===void 0&&(H={},n[O.id]=H);let N=z.isInstancedMesh===!0?z.id:0,B=H[N];B===void 0&&(B={},H[N]=B);let R=B[G.id];R===void 0&&(R={},B[G.id]=R);let F=R[D];return F===void 0&&(F=d(l()),R[D]=F),F}function d(z){let O=[],G=[],w=[];for(let D=0;D<t;D++)O[D]=0,G[D]=0,w[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:G,attributeDivisors:w,object:z,attributes:{},index:null}}function f(z,O,G,w){let D=r.attributes,H=O.attributes,N=0,B=G.getAttributes();for(let R in B)if(B[R].location>=0){let W=D[R],le=H[R];if(le===void 0&&(R==="instanceMatrix"&&z.instanceMatrix&&(le=z.instanceMatrix),R==="instanceColor"&&z.instanceColor&&(le=z.instanceColor)),W===void 0||W.attribute!==le||le&&W.data!==le.data)return!0;N++}return r.attributesNum!==N||r.index!==w}function _(z,O,G,w){let D={},H=O.attributes,N=0,B=G.getAttributes();for(let R in B)if(B[R].location>=0){let W=H[R];W===void 0&&(R==="instanceMatrix"&&z.instanceMatrix&&(W=z.instanceMatrix),R==="instanceColor"&&z.instanceColor&&(W=z.instanceColor));let le={};le.attribute=W,W&&W.data&&(le.data=W.data),D[R]=le,N++}r.attributes=D,r.attributesNum=N,r.index=w}function y(){let z=r.newAttributes;for(let O=0,G=z.length;O<G;O++)z[O]=0}function g(z){m(z,0)}function m(z,O){let G=r.newAttributes,w=r.enabledAttributes,D=r.attributeDivisors;G[z]=1,w[z]===0&&(i.enableVertexAttribArray(z),w[z]=1),D[z]!==O&&(i.vertexAttribDivisor(z,O),D[z]=O)}function M(){let z=r.newAttributes,O=r.enabledAttributes;for(let G=0,w=O.length;G<w;G++)O[G]!==z[G]&&(i.disableVertexAttribArray(G),O[G]=0)}function A(z,O,G,w,D,H,N){N===!0?i.vertexAttribIPointer(z,O,G,D,H):i.vertexAttribPointer(z,O,G,w,D,H)}function v(z,O,G,w){y();let D=w.attributes,H=G.getAttributes(),N=O.defaultAttributeValues;for(let B in H){let R=H[B];if(R.location>=0){let F=D[B];if(F===void 0&&(B==="instanceMatrix"&&z.instanceMatrix&&(F=z.instanceMatrix),B==="instanceColor"&&z.instanceColor&&(F=z.instanceColor)),F!==void 0){let W=F.normalized,le=F.itemSize,ie=e.get(F);if(ie===void 0)continue;let Le=ie.buffer,ke=ie.type,Ce=ie.bytesPerElement,Q=ke===i.INT||ke===i.UNSIGNED_INT||F.gpuType===Zl;if(F.isInterleavedBufferAttribute){let ee=F.data,he=ee.stride,Z=F.offset;if(ee.isInstancedInterleavedBuffer){for(let fe=0;fe<R.locationSize;fe++)m(R.location+fe,ee.meshPerAttribute);z.isInstancedMesh!==!0&&w._maxInstanceCount===void 0&&(w._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let fe=0;fe<R.locationSize;fe++)g(R.location+fe);i.bindBuffer(i.ARRAY_BUFFER,Le);for(let fe=0;fe<R.locationSize;fe++)A(R.location+fe,le/R.locationSize,ke,W,he*Ce,(Z+le/R.locationSize*fe)*Ce,Q)}else{if(F.isInstancedBufferAttribute){for(let ee=0;ee<R.locationSize;ee++)m(R.location+ee,F.meshPerAttribute);z.isInstancedMesh!==!0&&w._maxInstanceCount===void 0&&(w._maxInstanceCount=F.meshPerAttribute*F.count)}else for(let ee=0;ee<R.locationSize;ee++)g(R.location+ee);i.bindBuffer(i.ARRAY_BUFFER,Le);for(let ee=0;ee<R.locationSize;ee++)A(R.location+ee,le/R.locationSize,ke,W,le*Ce,le/R.locationSize*ee*Ce,Q)}}else if(N!==void 0){let W=N[B];if(W!==void 0)switch(W.length){case 2:i.vertexAttrib2fv(R.location,W);break;case 3:i.vertexAttrib3fv(R.location,W);break;case 4:i.vertexAttrib4fv(R.location,W);break;default:i.vertexAttrib1fv(R.location,W)}}}}M()}function b(){E();for(let z in n){let O=n[z];for(let G in O){let w=O[G];for(let D in w){let H=w[D];for(let N in H)u(H[N].object),delete H[N];delete w[D]}}delete n[z]}}function S(z){if(n[z.id]===void 0)return;let O=n[z.id];for(let G in O){let w=O[G];for(let D in w){let H=w[D];for(let N in H)u(H[N].object),delete H[N];delete w[D]}}delete n[z.id]}function C(z){for(let O in n){let G=n[O];for(let w in G){let D=G[w];if(D[z.id]===void 0)continue;let H=D[z.id];for(let N in H)u(H[N].object),delete H[N];delete D[z.id]}}}function p(z){for(let O in n){let G=n[O],w=z.isInstancedMesh===!0?z.id:0,D=G[w];if(D!==void 0){for(let H in D){let N=D[H];for(let B in N)u(N[B].object),delete N[B];delete D[H]}delete G[w],Object.keys(G).length===0&&delete n[O]}}}function E(){L(),a=!0,r!==s&&(r=s,c(r.object))}function L(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:E,resetDefaultState:L,dispose:b,releaseStatesOfGeometry:S,releaseStatesOfObject:p,releaseStatesOfProgram:C,initAttributes:y,enableAttribute:g,disableUnusedAttributes:M}}function hv(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,u){u!==0&&(i.drawArraysInstanced(n,l,c,u),t.update(c,n,u))}function o(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let d=0;for(let f=0;f<u;f++)d+=c[f];t.update(d,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function dv(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let C=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(C){return!(C!==Xn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){let p=C===un&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==Fn&&C!==Wn&&!p&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(Be("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let h=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&d===!1&&Be("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),A=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),b=i.getParameter(i.MAX_SAMPLES),S=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:_,maxTextureSize:y,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:M,maxVaryings:A,maxFragmentUniforms:v,maxSamples:b,samples:S}}function fv(i){let e=this,t=null,n=0,s=!1,r=!1,a=new fi,o=new Ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){let f=h.length!==0||d||n!==0||s;return s=d,n=h.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){let _=h.clippingPlanes,y=h.clipIntersection,g=h.clipShadows,m=i.get(h);if(!s||_===null||_.length===0||r&&!g)r?u(null):c();else{let M=r?0:n,A=M*4,v=m.clippingState||null;l.value=v,v=u(_,d,A,f);for(let b=0;b!==A;++b)v[b]=t[b];m.clippingState=v,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,f,_){let y=h!==null?h.length:0,g=null;if(y!==0){if(g=l.value,_!==!0||g===null){let m=f+y*4,M=d.matrixWorldInverse;o.getNormalMatrix(M),(g===null||g.length<m)&&(g=new Float32Array(m));for(let A=0,v=f;A!==y;++A,v+=4)a.copy(h[A]).applyMatrix4(M,o),a.normal.toArray(g,v),g[v+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,g}}var ia=4,pv=6,mv=20,gv=256,yo=new Ui,Ip=new oe,Rh=null,Ch=0,Ph=0,Ih=!1,xv=new I,sr=new I,Cs=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=xv}=r;Rh=this._renderer.getRenderTarget(),Ch=this._renderer.getActiveCubeFace(),Ph=this._renderer.getActiveMipmapLevel(),Ih=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Dp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Np(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Rh,Ch,Ph),this._renderer.xr.enabled=Ih,e.scissorTest=!1,na(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ws||e.mapping===tr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Rh=this._renderer.getRenderTarget(),Ch=this._renderer.getActiveCubeFace(),Ph=this._renderer.getActiveMipmapLevel(),Ih=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Qt,minFilter:Qt,generateMipmaps:!1,type:un,format:Xn,colorSpace:Pn,depthBuffer:!1},s=Lp(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Lp(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=_v(r)),this._blurMaterial=yv(r,e,t),this._ggxMaterial=vv(r,e,t)}return s}_compileMaterial(e){let t=new ae(new Qe,e);this._renderer.compile(t,yo)}_sceneToCubeUV(e,t,n,s,r){let l=new Vt(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(Ip),h.toneMapping=vi,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ae(new _n,new Lt({name:"PMREM.Background",side:kt,depthWrite:!1,depthTest:!1})));let y=this._backgroundBox,g=y.material,m=!1,M=e.background;M?M.isColor&&(g.color.copy(M),e.background=null,m=!0):(g.color.copy(Ip),m=!0);for(let A=0;A<6;A++){let v=A%3;v===0?(l.up.set(0,c[A],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[A],r.y,r.z)):v===1?(l.up.set(0,0,c[A]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[A],r.z)):(l.up.set(0,c[A],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[A]));let b=this._cubeSize;na(s,v*b,A>2?b:0,b,b),h.setRenderTarget(s),m&&h.render(y,l),h.render(e,l)}h.toneMapping=f,h.autoClear=d,e.background=M}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===ws||e.mapping===tr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Dp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Np());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;na(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,yo)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let l=a.uniforms,c=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),h=Math.sqrt(c*c-u*u),d=c*1.25,f=h*d,{_lodMax:_}=this,y=this._sizeLods[n],g=3*y*(n>_-ia?n-_+ia:0),m=4*(this._cubeSize-y);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=_-t,na(r,g,m,3*y,2*y),s.setRenderTarget(r),s.render(o,yo),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=_-n,na(e,g,m,3*y,2*y),s.setRenderTarget(e),s.render(o,yo)}_blur(e,t,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,a),this._blurPass(r,e,n,n,a)}_blurPass(e,t,n,s,r){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let u=this._sizeLods[s],h=3*u*(s>this._lodMax-ia?s-this._lodMax+ia:0),d=4*(this._cubeSize-u);na(t,h,d,3*u,2*u),a.setRenderTarget(t),a.render(l,yo)}};function _v(i){let e=[],t=[],n=i,s=i-ia+1+pv;for(let r=0;r<s;r++){let a=Math.pow(2,n);e.push(a);let o=1/(a-2),l=-o,c=1+o,u=[l,l,c,l,c,c,l,l,c,c,l,c],h=6,d=6,f=3,_=new Float32Array(f*d*h),y=new Float32Array(f*d*h);for(let m=0;m<h;m++){let M=m%3*2/3-1,A=m>2?0:-1,v=[M,A,0,M+2/3,A,0,M+2/3,A+1,0,M,A,0,M+2/3,A+1,0,M,A+1,0];_.set(v,f*d*m);for(let b=0;b<d;b++){let S=u[b*2]*2-1,C=u[b*2+1]*2-1;m===0?sr.set(1,C,S):m===1?sr.set(-S,1,-C):m===2?sr.set(-S,C,1):m===3?sr.set(-1,C,-S):m===4?sr.set(-S,-1,C):sr.set(S,C,-1),sr.toArray(y,(m*d+b)*f)}}let g=new Qe;g.setAttribute("position",new ct(_,f)),g.setAttribute("outputDirection",new ct(y,f)),t.push(new ae(g,null)),n>ia&&n--}return{lodMeshes:t,sizeLods:e}}function Lp(i,e,t){let n=new $t(i,e,t);return n.texture.mapping=uo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function na(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function vv(i,e,t){return new ft({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:gv,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:kc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:ri,depthTest:!1,depthWrite:!1})}function yv(i,e,t){return new ft({name:"SphericalGaussianBlur",defines:{SAMPLES:mv,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:kc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:ri,depthTest:!1,depthWrite:!1})}function Np(){return new ft({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:kc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ri,depthTest:!1,depthWrite:!1})}function Dp(){return new ft({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:kc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ri,depthTest:!1,depthWrite:!1})}function kc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Oc=class extends $t{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Xa(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new _n(5,5,5),r=new ft({name:"CubemapFromEquirect",uniforms:ir(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:kt,blending:ri});r.uniforms.tEquirect.value=t;let a=new ae(s,r),o=t.minFilter;return t.minFilter===yi&&(t.minFilter=Qt),new Gl(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}};function Mv(i){let e=new WeakMap,t=new WeakMap,n=null;function s(d,f=!1){return d==null?null:f?a(d):r(d)}function r(d){if(d&&d.isTexture){let f=d.mapping;if(f===Yl||f===$l)if(e.has(d)){let _=e.get(d).texture;return o(_,d.mapping)}else{let _=d.image;if(_&&_.height>0){let y=new Oc(_.height);return y.fromEquirectangularTexture(i,d),e.set(d,y),d.addEventListener("dispose",c),o(y.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture){let f=d.mapping,_=f===Yl||f===$l,y=f===ws||f===tr;if(_||y){let g=t.get(d),m=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==m)return n===null&&(n=new Cs(i)),g=_?n.fromEquirectangular(d,g):n.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),g.texture;if(g!==void 0)return g.texture;{let M=d.image;return _&&M&&M.height>0||y&&M&&l(M)?(n===null&&(n=new Cs(i)),g=_?n.fromEquirectangular(d):n.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),d.addEventListener("dispose",u),g.texture):null}}}return d}function o(d,f){return f===Yl?d.mapping=ws:f===$l&&(d.mapping=tr),d}function l(d){let f=0,_=6;for(let y=0;y<_;y++)d[y]!==void 0&&f++;return f===_}function c(d){let f=d.target;f.removeEventListener("dispose",c);let _=e.get(f);_!==void 0&&(e.delete(f),_.dispose())}function u(d){let f=d.target;f.removeEventListener("dispose",u);let _=t.get(f);_!==void 0&&(t.delete(f),_.dispose())}function h(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:h}}function Sv(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Gs("WebGLRenderer: "+n+" extension not supported."),s}}}function bv(i,e,t,n){let s={},r=new WeakMap;function a(h){let d=h.target;d.index!==null&&e.remove(d.index);for(let _ in d.attributes)e.remove(d.attributes[_]);d.removeEventListener("dispose",a),delete s[d.id];let f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(h,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function l(h){let d=h.attributes;for(let f in d)e.update(d[f],i.ARRAY_BUFFER)}function c(h){let d=[],f=h.index,_=h.attributes.position,y=0;if(_===void 0)return;if(f!==null){let M=f.array;y=f.version;for(let A=0,v=M.length;A<v;A+=3){let b=M[A+0],S=M[A+1],C=M[A+2];d.push(b,S,S,C,C,b)}}else{let M=_.array;y=_.version;for(let A=0,v=M.length/3-1;A<v;A+=3){let b=A+0,S=A+1,C=A+2;d.push(b,S,S,C,C,b)}}let g=new(_.count>=65535?za:Ha)(d,1);g.version=y;let m=r.get(h);m&&e.remove(m),r.set(h,g)}function u(h){let d=r.get(h);if(d){let f=h.index;f!==null&&d.version<f.version&&c(h)}else c(h);return r.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function Ev(i,e,t){let n;function s(h){n=h}let r,a;function o(h){r=h.type,a=h.bytesPerElement}function l(h,d){i.drawElements(n,d,r,h*a),t.update(d,n,1)}function c(h,d,f){f!==0&&(i.drawElementsInstanced(n,d,r,h*a,f),t.update(d,n,f))}function u(h,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,h,0,f);let y=0;for(let g=0;g<f;g++)y+=d[g];t.update(y,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function Tv(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:We("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function wv(i,e,t){let n=new WeakMap,s=new Rt;function r(a,o,l){let c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0,d=n.get(o);if(d===void 0||d.count!==h){let E=function(){C.dispose(),n.delete(o),o.removeEventListener("dispose",E)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,y=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],M=o.morphAttributes.color||[],A=0;f===!0&&(A=1),_===!0&&(A=2),y===!0&&(A=3);let v=o.attributes.position.count*A,b=1;v>e.maxTextureSize&&(b=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let S=new Float32Array(v*b*4*h),C=new Ba(S,v,b,h);C.type=Wn,C.needsUpdate=!0;let p=A*4;for(let L=0;L<h;L++){let z=g[L],O=m[L],G=M[L],w=v*b*4*L;for(let D=0;D<z.count;D++){let H=D*p;f===!0&&(s.fromBufferAttribute(z,D),S[w+H+0]=s.x,S[w+H+1]=s.y,S[w+H+2]=s.z,S[w+H+3]=0),_===!0&&(s.fromBufferAttribute(O,D),S[w+H+4]=s.x,S[w+H+5]=s.y,S[w+H+6]=s.z,S[w+H+7]=0),y===!0&&(s.fromBufferAttribute(G,D),S[w+H+8]=s.x,S[w+H+9]=s.y,S[w+H+10]=s.z,S[w+H+11]=G.itemSize===4?s.w:1)}}d={count:h,texture:C,size:new Se(v,b)},n.set(o,d),o.addEventListener("dispose",E)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let f=0;for(let y=0;y<c.length;y++)f+=c[y];let _=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Av(i,e,t,n,s){let r=new WeakMap;function a(c){let u=s.render.frame,h=c.geometry,d=e.get(c,h);if(r.get(d)!==u&&(e.update(d),r.set(d,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==u&&(f.update(),r.set(f,u))}return d}function o(){r=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}var Rv={[so]:"LINEAR_TONE_MAPPING",[ro]:"REINHARD_TONE_MAPPING",[ao]:"CINEON_TONE_MAPPING",[er]:"ACES_FILMIC_TONE_MAPPING",[lo]:"AGX_TONE_MAPPING",[co]:"NEUTRAL_TONE_MAPPING",[oo]:"CUSTOM_TONE_MAPPING"};function Cv(i,e,t,n,s,r){let a=new $t(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new Qe;c.setAttribute("position",new nt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new nt([0,2,0,0,2,0],2));let u=new Yr({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new ae(c,u),d=new Ui(-1,1,1,-1,0,1),f=null,_=null,y=!1,g,m=null,M=[],A=!1;this.setSize=function(v,b){a.setSize(v,b),o!==null&&o.setSize(v,b),l!==null&&l.setSize(v,b);for(let S=0;S<M.length;S++){let C=M[S];C.setSize&&C.setSize(v,b)}},this.setEffects=function(v){M=v,A=M.length>0&&M[0].isRenderPass===!0;let b=a.width,S=a.height;M.length>0&&o===null&&(o=new $t(b,S,{type:un,depthBuffer:!1,stencilBuffer:!1}),l=new $t(b,S,{type:un,depthBuffer:!1,stencilBuffer:!1}));for(let C=0;C<M.length;C++){let p=M[C];p.setSize&&p.setSize(b,S)}},this.begin=function(v,b){if(y||v.toneMapping===vi&&M.length===0)return!1;if(m=b,b!==null){let S=b.width,C=b.height;(a.width!==S||a.height!==C)&&this.setSize(S,C)}return A===!1&&v.setRenderTarget(a),g=v.toneMapping,v.toneMapping=vi,!0},this.hasRenderPass=function(){return A},this.end=function(v,b){v.toneMapping=g,y=!0;let S=a,C=o;for(let p=0;p<M.length;p++){let E=M[p];E.enabled!==!1&&(E.render(v,C,S,b),E.needsSwap!==!1&&(S=C,C=C===o?l:o))}if(f!==v.outputColorSpace||_!==v.toneMapping){f=v.outputColorSpace,_=v.toneMapping,u.defines={},st.getTransfer(f)===yt&&(u.defines.SRGB_TRANSFER="");let p=Rv[_];p&&(u.defines[p]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=S.texture,v.setRenderTarget(m),v.render(h,d),m=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),u.dispose()}}var em=new qt,Dh=new bs(1,1),tm=new Ba,nm=new Rl,im=new Xa,Up=[],Fp=[],Op=new Float32Array(16),Bp=new Float32Array(9),kp=new Float32Array(4);function ra(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Up[s];if(r===void 0&&(r=new Float32Array(s),Up[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function hn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function dn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Hc(i,e){let t=Fp[e];t===void 0&&(t=new Int32Array(e),Fp[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Pv(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Iv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(hn(t,e))return;i.uniform2fv(this.addr,e),dn(t,e)}}function Lv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(hn(t,e))return;i.uniform3fv(this.addr,e),dn(t,e)}}function Nv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(hn(t,e))return;i.uniform4fv(this.addr,e),dn(t,e)}}function Dv(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(hn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),dn(t,e)}else{if(hn(t,n))return;kp.set(n),i.uniformMatrix2fv(this.addr,!1,kp),dn(t,n)}}function Uv(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(hn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),dn(t,e)}else{if(hn(t,n))return;Bp.set(n),i.uniformMatrix3fv(this.addr,!1,Bp),dn(t,n)}}function Fv(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(hn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),dn(t,e)}else{if(hn(t,n))return;Op.set(n),i.uniformMatrix4fv(this.addr,!1,Op),dn(t,n)}}function Ov(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Bv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(hn(t,e))return;i.uniform2iv(this.addr,e),dn(t,e)}}function kv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(hn(t,e))return;i.uniform3iv(this.addr,e),dn(t,e)}}function Hv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(hn(t,e))return;i.uniform4iv(this.addr,e),dn(t,e)}}function zv(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Vv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(hn(t,e))return;i.uniform2uiv(this.addr,e),dn(t,e)}}function Gv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(hn(t,e))return;i.uniform3uiv(this.addr,e),dn(t,e)}}function Wv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(hn(t,e))return;i.uniform4uiv(this.addr,e),dn(t,e)}}function Xv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Dh.compareFunction=t.isReversedDepthBuffer()?Dc:Nc,r=Dh):r=em,t.setTexture2D(e||r,s)}function qv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||nm,s)}function Yv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||im,s)}function $v(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||tm,s)}function Kv(i){switch(i){case 5126:return Pv;case 35664:return Iv;case 35665:return Lv;case 35666:return Nv;case 35674:return Dv;case 35675:return Uv;case 35676:return Fv;case 5124:case 35670:return Ov;case 35667:case 35671:return Bv;case 35668:case 35672:return kv;case 35669:case 35673:return Hv;case 5125:return zv;case 36294:return Vv;case 36295:return Gv;case 36296:return Wv;case 35678:case 36198:case 36298:case 36306:case 35682:return Xv;case 35679:case 36299:case 36307:return qv;case 35680:case 36300:case 36308:case 36293:return Yv;case 36289:case 36303:case 36311:case 36292:return $v}}function Zv(i,e){i.uniform1fv(this.addr,e)}function Jv(i,e){let t=ra(e,this.size,2);i.uniform2fv(this.addr,t)}function jv(i,e){let t=ra(e,this.size,3);i.uniform3fv(this.addr,t)}function Qv(i,e){let t=ra(e,this.size,4);i.uniform4fv(this.addr,t)}function ey(i,e){let t=ra(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function ty(i,e){let t=ra(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function ny(i,e){let t=ra(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function iy(i,e){i.uniform1iv(this.addr,e)}function sy(i,e){i.uniform2iv(this.addr,e)}function ry(i,e){i.uniform3iv(this.addr,e)}function ay(i,e){i.uniform4iv(this.addr,e)}function oy(i,e){i.uniform1uiv(this.addr,e)}function ly(i,e){i.uniform2uiv(this.addr,e)}function cy(i,e){i.uniform3uiv(this.addr,e)}function uy(i,e){i.uniform4uiv(this.addr,e)}function hy(i,e,t){let n=this.cache,s=e.length,r=Hc(t,s);hn(n,r)||(i.uniform1iv(this.addr,r),dn(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Dh:a=em;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function dy(i,e,t){let n=this.cache,s=e.length,r=Hc(t,s);hn(n,r)||(i.uniform1iv(this.addr,r),dn(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||nm,r[a])}function fy(i,e,t){let n=this.cache,s=e.length,r=Hc(t,s);hn(n,r)||(i.uniform1iv(this.addr,r),dn(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||im,r[a])}function py(i,e,t){let n=this.cache,s=e.length,r=Hc(t,s);hn(n,r)||(i.uniform1iv(this.addr,r),dn(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||tm,r[a])}function my(i){switch(i){case 5126:return Zv;case 35664:return Jv;case 35665:return jv;case 35666:return Qv;case 35674:return ey;case 35675:return ty;case 35676:return ny;case 5124:case 35670:return iy;case 35667:case 35671:return sy;case 35668:case 35672:return ry;case 35669:case 35673:return ay;case 5125:return oy;case 36294:return ly;case 36295:return cy;case 36296:return uy;case 35678:case 36198:case 36298:case 36306:case 35682:return hy;case 35679:case 36299:case 36307:return dy;case 35680:case 36300:case 36308:case 36293:return fy;case 36289:case 36303:case 36311:case 36292:return py}}var Uh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Kv(t.type)}},Fh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=my(t.type)}},Oh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},Lh=/(\w+)(\])?(\[|\.)?/g;function Hp(i,e){i.seq.push(e),i.map[e.id]=e}function gy(i,e,t){let n=i.name,s=n.length;for(Lh.lastIndex=0;;){let r=Lh.exec(n),a=Lh.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Hp(t,c===void 0?new Uh(o,i,e):new Fh(o,i,e));break}else{let h=t.map[o];h===void 0&&(h=new Oh(o),Hp(t,h)),t=h}}}var sa=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);gy(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function zp(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var xy=37297,_y=0;function vy(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var Vp=new Ze;function yy(i){st._getMatrix(Vp,st.workingColorSpace,i);let e=`mat3( ${Vp.elements.map(t=>t.toFixed(4))} )`;switch(st.getTransfer(i)){case Fa:return[e,"LinearTransferOETF"];case yt:return[e,"sRGBTransferOETF"];default:return Be("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Gp(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+vy(i.getShaderSource(e),o)}else return r}function My(i,e){let t=yy(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var Sy={[so]:"Linear",[ro]:"Reinhard",[ao]:"Cineon",[er]:"ACESFilmic",[lo]:"AgX",[co]:"Neutral",[oo]:"Custom"};function by(i,e){let t=Sy[e];return t===void 0?(Be("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Fc=new I;function Ey(){st.getLuminanceCoefficients(Fc);let i=Fc.x.toFixed(4),e=Fc.y.toFixed(4),t=Fc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ty(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(So).join(`
`)}function wy(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Ay(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function So(i){return i!==""}function Wp(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Xp(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Ry=/^[ \t]*#include +<([\w\d./]+)>/gm;function Bh(i){return i.replace(Ry,Py)}var Cy=new Map;function Py(i,e){let t=ot[e];if(t===void 0){let n=Cy.get(e);if(n!==void 0)t=ot[n],Be('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Bh(t)}var Iy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function qp(i){return i.replace(Iy,Ly)}function Ly(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Yp(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var Ny={[js]:"SHADOWMAP_TYPE_PCF",[Zr]:"SHADOWMAP_TYPE_VSM"};function Dy(i){return Ny[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Uy={[ws]:"ENVMAP_TYPE_CUBE",[tr]:"ENVMAP_TYPE_CUBE",[uo]:"ENVMAP_TYPE_CUBE_UV"};function Fy(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Uy[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var Oy={[tr]:"ENVMAP_MODE_REFRACTION"};function By(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Oy[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var ky={[ql]:"ENVMAP_BLENDING_MULTIPLY",[up]:"ENVMAP_BLENDING_MIX",[hp]:"ENVMAP_BLENDING_ADD"};function Hy(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":ky[i.combine]||"ENVMAP_BLENDING_NONE"}function zy(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Vy(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=Dy(t),c=Fy(t),u=By(t),h=Hy(t),d=zy(t),f=Ty(t),_=wy(r),y=s.createProgram(),g,m,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(So).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(So).join(`
`),m.length>0&&(m+=`
`)):(g=[Yp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(So).join(`
`),m=[Yp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==vi?"#define TONE_MAPPING":"",t.toneMapping!==vi?ot.tonemapping_pars_fragment:"",t.toneMapping!==vi?by("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ot.colorspace_pars_fragment,My("linearToOutputTexel",t.outputColorSpace),Ey(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(So).join(`
`)),a=Bh(a),a=Wp(a,t),a=Xp(a,t),o=Bh(o),o=Wp(o,t),o=Xp(o,t),a=qp(a),o=qp(o),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",t.glslVersion===xh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===xh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let A=M+g+a,v=M+m+o,b=zp(s,s.VERTEX_SHADER,A),S=zp(s,s.FRAGMENT_SHADER,v);s.attachShader(y,b),s.attachShader(y,S),t.index0AttributeName!==void 0?s.bindAttribLocation(y,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function C(z){if(i.debug.checkShaderErrors){let O=s.getProgramInfoLog(y)||"",G=s.getShaderInfoLog(b)||"",w=s.getShaderInfoLog(S)||"",D=O.trim(),H=G.trim(),N=w.trim(),B=!0,R=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(B=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,y,b,S);else{let F=Gp(s,b,"vertex"),W=Gp(s,S,"fragment");We("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+z.name+`
Material Type: `+z.type+`

Program Info Log: `+D+`
`+F+`
`+W)}else D!==""?Be("WebGLProgram: Program Info Log:",D):(H===""||N==="")&&(R=!1);R&&(z.diagnostics={runnable:B,programLog:D,vertexShader:{log:H,prefix:g},fragmentShader:{log:N,prefix:m}})}s.deleteShader(b),s.deleteShader(S),p=new sa(s,y),E=Ay(s,y)}let p;this.getUniforms=function(){return p===void 0&&C(this),p};let E;this.getAttributes=function(){return E===void 0&&C(this),E};let L=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=s.getProgramParameter(y,xy)),L},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=_y++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=b,this.fragmentShader=S,this}var Gy=0,kh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Hh(e),t.set(e,n)),n}},Hh=class{constructor(e){this.id=Gy++,this.code=e,this.usedTimes=0}};function Wy(i){return i===Rs||i===go||i===xo}function Xy(i,e,t,n,s,r){let a=new zr,o=new kh,l=new Set,c=[],u=new Map,h=n.logarithmicDepthBuffer,d=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(p){return l.add(p),p===0?"uv":`uv${p}`}function y(p,E,L,z,O,G){let w=z.fog,D=O.geometry,H=p.isMeshStandardMaterial||p.isMeshLambertMaterial||p.isMeshPhongMaterial?z.environment:null,N=p.isMeshStandardMaterial||p.isMeshLambertMaterial&&!p.envMap||p.isMeshPhongMaterial&&!p.envMap,B=e.get(p.envMap||H,N),R=B&&B.mapping===uo?B.image.height:null,F=f[p.type];p.precision!==null&&(d=n.getMaxPrecision(p.precision),d!==p.precision&&Be("WebGLProgram.getParameters:",p.precision,"not supported, using",d,"instead."));let W=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,le=W!==void 0?W.length:0,ie=0;D.morphAttributes.position!==void 0&&(ie=1),D.morphAttributes.normal!==void 0&&(ie=2),D.morphAttributes.color!==void 0&&(ie=3);let Le,ke,Ce,Q;if(F){let Pt=Bi[F];Le=Pt.vertexShader,ke=Pt.fragmentShader}else{Le=p.vertexShader,ke=p.fragmentShader;let Pt=o.getVertexShaderStage(p),ze=o.getFragmentShaderStage(p);o.update(p,Pt,ze),Ce=Pt.id,Q=ze.id}let ee=i.getRenderTarget(),he=i.state.buffers.depth.getReversed(),Z=O.isInstancedMesh===!0,fe=O.isBatchedMesh===!0,xe=!!p.map,Je=!!p.matcap,Ve=!!B,Ge=!!p.aoMap,Xe=!!p.lightMap,He=!!p.bumpMap&&p.wireframe===!1,pt=!!p.normalMap,rt=!!p.displacementMap,mt=!!p.emissiveMap,ut=!!p.metalnessMap,xt=!!p.roughnessMap,X=p.anisotropy>0,sn=p.clearcoat>0,_t=p.dispersion>0,P=p.retroreflectivity>0,x=p.iridescence>0,k=p.sheen>0,V=p.transmission>0,Y=X&&!!p.anisotropyMap,se=sn&&!!p.clearcoatMap,ue=sn&&!!p.clearcoatNormalMap,$=sn&&!!p.clearcoatRoughnessMap,ne=x&&!!p.iridescenceMap,de=x&&!!p.iridescenceThicknessMap,ve=k&&!!p.sheenColorMap,me=k&&!!p.sheenRoughnessMap,pe=!!p.specularMap,Ae=!!p.specularColorMap,Ue=!!p.specularIntensityMap,je=V&&!!p.transmissionMap,K=V&&!!p.thicknessMap,ge=!!p.gradientMap,re=!!p.alphaMap,_e=p.alphaTest>0,ye=!!p.alphaHash,ce=!!p.extensions,Fe=vi;p.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(Fe=i.toneMapping);let Ie={shaderID:F,shaderType:p.type,shaderName:p.name,vertexShader:Le,fragmentShader:ke,defines:p.defines,customVertexShaderID:Ce,customFragmentShaderID:Q,isRawShaderMaterial:p.isRawShaderMaterial===!0,glslVersion:p.glslVersion,precision:d,batching:fe,batchingColor:fe&&O._colorsTexture!==null,instancing:Z,instancingColor:Z&&O.instanceColor!==null,instancingMorph:Z&&O.morphTexture!==null,outputColorSpace:ee===null?i.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:st.workingColorSpace,alphaToCoverage:!!p.alphaToCoverage,map:xe,matcap:Je,envMap:Ve,envMapMode:Ve&&B.mapping,envMapCubeUVHeight:R,aoMap:Ge,lightMap:Xe,bumpMap:He,normalMap:pt,displacementMap:rt,emissiveMap:mt,normalMapObjectSpace:pt&&p.normalMapType===mp,normalMapTangentSpace:pt&&p.normalMapType===vo,packedNormalMap:pt&&p.normalMapType===vo&&Wy(p.normalMap.format),metalnessMap:ut,roughnessMap:xt,anisotropy:X,anisotropyMap:Y,clearcoat:sn,clearcoatMap:se,clearcoatNormalMap:ue,clearcoatRoughnessMap:$,dispersion:_t,retroreflection:P,iridescence:x,iridescenceMap:ne,iridescenceThicknessMap:de,sheen:k,sheenColorMap:ve,sheenRoughnessMap:me,specularMap:pe,specularColorMap:Ae,specularIntensityMap:Ue,transmission:V,transmissionMap:je,thicknessMap:K,gradientMap:ge,opaque:p.transparent===!1&&p.blending===Jr&&p.alphaToCoverage===!1,alphaMap:re,alphaTest:_e,alphaHash:ye,combine:p.combine,mapUv:xe&&_(p.map.channel),aoMapUv:Ge&&_(p.aoMap.channel),lightMapUv:Xe&&_(p.lightMap.channel),bumpMapUv:He&&_(p.bumpMap.channel),normalMapUv:pt&&_(p.normalMap.channel),displacementMapUv:rt&&_(p.displacementMap.channel),emissiveMapUv:mt&&_(p.emissiveMap.channel),metalnessMapUv:ut&&_(p.metalnessMap.channel),roughnessMapUv:xt&&_(p.roughnessMap.channel),anisotropyMapUv:Y&&_(p.anisotropyMap.channel),clearcoatMapUv:se&&_(p.clearcoatMap.channel),clearcoatNormalMapUv:ue&&_(p.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:$&&_(p.clearcoatRoughnessMap.channel),iridescenceMapUv:ne&&_(p.iridescenceMap.channel),iridescenceThicknessMapUv:de&&_(p.iridescenceThicknessMap.channel),sheenColorMapUv:ve&&_(p.sheenColorMap.channel),sheenRoughnessMapUv:me&&_(p.sheenRoughnessMap.channel),specularMapUv:pe&&_(p.specularMap.channel),specularColorMapUv:Ae&&_(p.specularColorMap.channel),specularIntensityMapUv:Ue&&_(p.specularIntensityMap.channel),transmissionMapUv:je&&_(p.transmissionMap.channel),thicknessMapUv:K&&_(p.thicknessMap.channel),alphaMapUv:re&&_(p.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(pt||X),vertexNormals:!!D.attributes.normal,vertexColors:p.vertexColors,vertexAlphas:p.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!D.attributes.uv&&(xe||re),fog:!!w,useFog:p.fog===!0,fogExp2:!!w&&w.isFogExp2,flatShading:p.wireframe===!1&&(p.flatShading===!0||D.attributes.normal===void 0&&pt===!1&&(p.isMeshLambertMaterial||p.isMeshPhongMaterial||p.isMeshStandardMaterial||p.isMeshPhysicalMaterial)),sizeAttenuation:p.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:he,skinning:O.isSkinnedMesh===!0,hasPositionAttribute:D.attributes.position!==void 0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:le,morphTextureStride:ie,numSunLights:E.sun.length,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numSunLightShadows:E.sunShadowMap.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:G.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:p.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:Fe,decodeVideoTexture:xe&&p.map.isVideoTexture===!0&&st.getTransfer(p.map.colorSpace)===yt,decodeVideoTextureEmissive:mt&&p.emissiveMap.isVideoTexture===!0&&st.getTransfer(p.emissiveMap.colorSpace)===yt,premultipliedAlpha:p.premultipliedAlpha,doubleSided:p.side===Ht,flipSided:p.side===kt,useDepthPacking:p.depthPacking>=0,depthPacking:p.depthPacking||0,index0AttributeName:p.index0AttributeName,extensionClipCullDistance:ce&&p.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ce&&p.extensions.multiDraw===!0||fe)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:p.customProgramCacheKey()};return Ie.vertexUv1s=l.has(1),Ie.vertexUv2s=l.has(2),Ie.vertexUv3s=l.has(3),l.clear(),Ie}function g(p){let E=[];if(p.shaderID?E.push(p.shaderID):(E.push(p.customVertexShaderID),E.push(p.customFragmentShaderID)),p.defines!==void 0)for(let L in p.defines)E.push(L),E.push(p.defines[L]);return p.isRawShaderMaterial===!1&&(m(E,p),M(E,p),E.push(i.outputColorSpace)),E.push(p.customProgramCacheKey),E.join()}function m(p,E){p.push(E.precision),p.push(E.outputColorSpace),p.push(E.envMapMode),p.push(E.envMapCubeUVHeight),p.push(E.mapUv),p.push(E.alphaMapUv),p.push(E.lightMapUv),p.push(E.aoMapUv),p.push(E.bumpMapUv),p.push(E.normalMapUv),p.push(E.displacementMapUv),p.push(E.emissiveMapUv),p.push(E.metalnessMapUv),p.push(E.roughnessMapUv),p.push(E.anisotropyMapUv),p.push(E.clearcoatMapUv),p.push(E.clearcoatNormalMapUv),p.push(E.clearcoatRoughnessMapUv),p.push(E.iridescenceMapUv),p.push(E.iridescenceThicknessMapUv),p.push(E.sheenColorMapUv),p.push(E.sheenRoughnessMapUv),p.push(E.specularMapUv),p.push(E.specularColorMapUv),p.push(E.specularIntensityMapUv),p.push(E.transmissionMapUv),p.push(E.thicknessMapUv),p.push(E.combine),p.push(E.fogExp2),p.push(E.sizeAttenuation),p.push(E.morphTargetsCount),p.push(E.morphAttributeCount),p.push(E.numSunLights),p.push(E.numDirLights),p.push(E.numPointLights),p.push(E.numSpotLights),p.push(E.numSpotLightMaps),p.push(E.numHemiLights),p.push(E.numRectAreaLights),p.push(E.numSunLightShadows),p.push(E.numDirLightShadows),p.push(E.numPointLightShadows),p.push(E.numSpotLightShadows),p.push(E.numSpotLightShadowsWithMaps),p.push(E.numLightProbes),p.push(E.shadowMapType),p.push(E.toneMapping),p.push(E.numClippingPlanes),p.push(E.numClipIntersection),p.push(E.depthPacking)}function M(p,E){a.disableAll(),E.instancing&&a.enable(0),E.instancingColor&&a.enable(1),E.instancingMorph&&a.enable(2),E.matcap&&a.enable(3),E.envMap&&a.enable(4),E.normalMapObjectSpace&&a.enable(5),E.normalMapTangentSpace&&a.enable(6),E.clearcoat&&a.enable(7),E.iridescence&&a.enable(8),E.alphaTest&&a.enable(9),E.vertexColors&&a.enable(10),E.vertexAlphas&&a.enable(11),E.vertexUv1s&&a.enable(12),E.vertexUv2s&&a.enable(13),E.vertexUv3s&&a.enable(14),E.vertexTangents&&a.enable(15),E.anisotropy&&a.enable(16),E.alphaHash&&a.enable(17),E.batching&&a.enable(18),E.dispersion&&a.enable(19),E.retroreflection&&a.enable(24),E.batchingColor&&a.enable(20),E.gradientMap&&a.enable(21),E.packedNormalMap&&a.enable(22),E.vertexNormals&&a.enable(23),p.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),E.numLightProbeGrids>0&&a.enable(22),E.hasPositionAttribute&&a.enable(23),p.push(a.mask)}function A(p){let E=f[p.type],L;if(E){let z=Bi[E];L=os.clone(z.uniforms)}else L=p.uniforms;return L}function v(p,E){let L=u.get(E);return L!==void 0?++L.usedTimes:(L=new Vy(i,E,p,s),c.push(L),u.set(E,L)),L}function b(p){if(--p.usedTimes===0){let E=c.indexOf(p);c[E]=c[c.length-1],c.pop(),u.delete(p.cacheKey),p.destroy()}}function S(p){o.remove(p)}function C(){o.dispose()}return{getParameters:y,getProgramCacheKey:g,getUniforms:A,acquireProgram:v,releaseProgram:b,releaseShaderCache:S,programs:c,dispose:C}}function qy(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Yy(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function $p(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Kp(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function o(d,f,_,y,g,m){let M=i[e];return M===void 0?(M={id:d.id,object:d,geometry:f,material:_,materialVariant:a(d),groupOrder:y,renderOrder:d.renderOrder,z:g,group:m},i[e]=M):(M.id=d.id,M.object=d,M.geometry=f,M.material=_,M.materialVariant=a(d),M.groupOrder=y,M.renderOrder=d.renderOrder,M.z=g,M.group=m),e++,M}function l(d,f,_,y,g,m,M){M.reversedDepth===!0&&(g=-g);let A=o(d,f,_,y,g,m);_.transmission>0?n.push(A):_.transparent===!0?s.push(A):t.push(A)}function c(d,f,_,y,g,m){let M=o(d,f,_,y,g,m);_.transmission>0?n.unshift(M):_.transparent===!0?s.unshift(M):t.unshift(M)}function u(d,f){t.length>1&&t.sort(d||Yy),n.length>1&&n.sort(f||$p),s.length>1&&s.sort(f||$p)}function h(){for(let d=e,f=i.length;d<f;d++){let _=i[d];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:h,sort:u}}function $y(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new Kp,i.set(n,[a])):s>=r.length?(a=new Kp,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Ky(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new I,color:new oe};break;case"SpotLight":t={position:new I,direction:new I,color:new oe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new oe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new oe,groundColor:new oe};break;case"RectAreaLight":t={color:new oe,position:new I,halfWidth:new I,halfHeight:new I};break}return i[e.id]=t,t}}}function Zy(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var Jy=0;function jy(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Qy(i){let e=new Ky,t=Zy(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new I);let s=new I,r=new Ke,a=new Ke;function o(c){let u=0,h=0,d=0;for(let O=0;O<9;O++)n.probe[O].set(0,0,0);let f=0,_=0,y=0,g=0,m=0,M=0,A=0,v=0,b=0,S=0,C=0,p=0,E=0,L=0;c.sort(jy);for(let O=0,G=c.length;O<G;O++){let w=c[O],D=w.color,H=w.intensity,N=w.distance,B=null;if(w.shadow&&w.shadow.map&&(w.shadow.map.texture.format===Rs?B=w.shadow.map.texture:B=w.shadow.map.depthTexture||w.shadow.map.texture),w.isAmbientLight)u+=D.r*H,h+=D.g*H,d+=D.b*H;else if(w.isLightProbe){for(let R=0;R<9;R++)n.probe[R].addScaledVector(w.sh.coefficients[R],H);L++}else if(w.isSunLight){let R=e.get(w);if(R.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){let F=w.shadow,W=t.get(w);W.shadowIntensity=F.intensity,W.shadowBias=F.bias,W.shadowNormalBias=F.normalBias,W.shadowRadius=F.radius,W.shadowMapSize.copy(F.mapSize).multiply(F.getFrameExtents()),n.sunShadow[_]=W,n.sunShadowMap[_]=B;let le=F.getViewportCount();for(let ie=0;ie<le;ie++)n.sunShadowMatrix[y+ie]=F.getMatrix(ie),n.sunShadowCascade[y+ie]=F._cascadeData[ie];y+=le,_++}n.sun[f]=R,f++}else if(w.isDirectionalLight){let R=e.get(w);if(R.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){let F=w.shadow,W=t.get(w);W.shadowIntensity=F.intensity,W.shadowBias=F.bias,W.shadowNormalBias=F.normalBias,W.shadowRadius=F.radius,W.shadowMapSize=F.mapSize,n.directionalShadow[g]=W,n.directionalShadowMap[g]=B,n.directionalShadowMatrix[g]=w.shadow.matrix,b++}n.directional[g]=R,g++}else if(w.isSpotLight){let R=e.get(w);R.position.setFromMatrixPosition(w.matrixWorld),R.color.copy(D).multiplyScalar(H),R.distance=N,R.coneCos=Math.cos(w.angle),R.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),R.decay=w.decay,n.spot[M]=R;let F=w.shadow;if(w.map&&(n.spotLightMap[p]=w.map,p++,F.updateMatrices(w),w.castShadow&&E++),n.spotLightMatrix[M]=F.matrix,w.castShadow){let W=t.get(w);W.shadowIntensity=F.intensity,W.shadowBias=F.bias,W.shadowNormalBias=F.normalBias,W.shadowRadius=F.radius,W.shadowMapSize=F.mapSize,n.spotShadow[M]=W,n.spotShadowMap[M]=B,C++}M++}else if(w.isRectAreaLight){let R=e.get(w);R.color.copy(D).multiplyScalar(H),R.halfWidth.set(w.width*.5,0,0),R.halfHeight.set(0,w.height*.5,0),n.rectArea[A]=R,A++}else if(w.isPointLight){let R=e.get(w);if(R.color.copy(w.color).multiplyScalar(w.intensity),R.distance=w.distance,R.decay=w.decay,w.castShadow){let F=w.shadow,W=t.get(w);W.shadowIntensity=F.intensity,W.shadowBias=F.bias,W.shadowNormalBias=F.normalBias,W.shadowRadius=F.radius,W.shadowMapSize=F.mapSize,W.shadowCameraNear=F.camera.near,W.shadowCameraFar=F.camera.far,n.pointShadow[m]=W,n.pointShadowMap[m]=B,n.pointShadowMatrix[m]=w.shadow.matrix,S++}n.point[m]=R,m++}else if(w.isHemisphereLight){let R=e.get(w);R.skyColor.copy(w.color).multiplyScalar(H),R.groundColor.copy(w.groundColor).multiplyScalar(H),n.hemi[v]=R,v++}}A>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=be.LTC_FLOAT_1,n.rectAreaLTC2=be.LTC_FLOAT_2):(n.rectAreaLTC1=be.LTC_HALF_1,n.rectAreaLTC2=be.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;let z=n.hash;(z.sunLength!==f||z.directionalLength!==g||z.pointLength!==m||z.spotLength!==M||z.rectAreaLength!==A||z.hemiLength!==v||z.numSunShadows!==_||z.numDirectionalShadows!==b||z.numPointShadows!==S||z.numSpotShadows!==C||z.numSpotMaps!==p||z.numLightProbes!==L)&&(n.sun.length=f,n.directional.length=g,n.spot.length=M,n.rectArea.length=A,n.point.length=m,n.hemi.length=v,n.sunShadow.length=_,n.sunShadowMap.length=_,n.sunShadowMatrix.length=y,n.sunShadowCascade.length=y,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.directionalShadowMatrix.length=b,n.pointShadow.length=S,n.pointShadowMap.length=S,n.pointShadowMatrix.length=S,n.spotShadow.length=C,n.spotShadowMap.length=C,n.spotLightMatrix.length=C+p-E,n.spotLightMap.length=p,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=L,z.sunLength=f,z.directionalLength=g,z.pointLength=m,z.spotLength=M,z.rectAreaLength=A,z.hemiLength=v,z.numSunShadows=_,z.numDirectionalShadows=b,z.numPointShadows=S,z.numSpotShadows=C,z.numSpotMaps=p,z.numLightProbes=L,n.version=Jy++)}function l(c,u){let h=0,d=0,f=0,_=0,y=0,g=0,m=u.matrixWorldInverse;for(let M=0,A=c.length;M<A;M++){let v=c[M];if(v.isSunLight){let b=n.sun[h];b.direction.setFromMatrixPosition(v.matrixWorld),b.direction.transformDirection(m),h++}else if(v.isDirectionalLight){let b=n.directional[d];b.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(m),d++}else if(v.isSpotLight){let b=n.spot[_];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(m),b.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(m),_++}else if(v.isRectAreaLight){let b=n.rectArea[y];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(m),a.identity(),r.copy(v.matrixWorld),r.premultiply(m),a.extractRotation(r),b.halfWidth.set(v.width*.5,0,0),b.halfHeight.set(0,v.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),y++}else if(v.isPointLight){let b=n.point[f];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(m),f++}else if(v.isHemisphereLight){let b=n.hemi[g];b.direction.setFromMatrixPosition(v.matrixWorld),b.direction.transformDirection(m),g++}}}return{setup:o,setupView:l,state:n}}function Zp(i){let e=new Qy(i),t=[],n=[],s=[];function r(d){h.camera=d,t.length=0,n.length=0,s.length=0}function a(d){t.push(d)}function o(d){n.push(d)}function l(d){s.push(d)}function c(){e.setup(t)}function u(d){e.setupView(t,d)}let h={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:c,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function eM(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new Zp(i),e.set(s,[o])):r>=a.length?(o=new Zp(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var tM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,nM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,iM=[new I(1,0,0),new I(-1,0,0),new I(0,1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1)],sM=[new I(0,-1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1),new I(0,-1,0),new I(0,-1,0)],Jp=new Ke,Mo=new I,Nh=new I;function rM(i,e,t){let n=new Xr,s=new Se,r=new Se,a=new Rt,o=new Dl,l=new Ul,c={},u=t.maxTextureSize,h={[Fi]:kt,[kt]:Fi,[Ht]:Ht},d=new ft({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Se},radius:{value:4}},vertexShader:tM,fragmentShader:nM}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let _=new Qe;_.setAttribute("position",new ct(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new ae(_,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=js;let m=this.type;this.render=function(S,C,p){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||S.length===0)return;this.type===Xf&&(Be("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=js);let E=i.getRenderTarget(),L=i.getActiveCubeFace(),z=i.getActiveMipmapLevel(),O=i.state;O.setBlending(ri),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let G=m!==this.type;G&&C.traverse(function(w){w.material&&(Array.isArray(w.material)?w.material.forEach(D=>D.needsUpdate=!0):w.material.needsUpdate=!0)});for(let w=0,D=S.length;w<D;w++){let H=S[w],N=H.shadow;if(N===void 0){Be("WebGLShadowMap:",H,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;s.copy(N.mapSize);let B=N.getFrameExtents();s.multiply(B),r.copy(N.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/B.x),s.x=r.x*B.x,N.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/B.y),s.y=r.y*B.y,N.mapSize.y=r.y));let R=i.state.buffers.depth.getReversed();if(N.camera._reversedDepth=R,N.map===null||G===!0){if(N.map!==null&&(N.map.depthTexture!==null&&(N.map.depthTexture.dispose(),N.map.depthTexture=null),N.map.dispose()),this.type===Zr){if(H.isPointLight){Be("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}N.map=new $t(s.x,s.y,{format:Rs,type:un,minFilter:Qt,magFilter:Qt,generateMipmaps:!1}),N.map.texture.name=H.name+".shadowMap",N.map.depthTexture=new bs(s.x,s.y,Wn),N.map.depthTexture.name=H.name+".shadowMapDepth",N.map.depthTexture.format=Ci,N.map.depthTexture.compareFunction=null,N.map.depthTexture.minFilter=jt,N.map.depthTexture.magFilter=jt}else H.isPointLight?(N.map=new Oc(s.x),N.map.depthTexture=new Il(s.x,Mi)):(N.map=new $t(s.x,s.y),N.map.depthTexture=new bs(s.x,s.y,Mi)),N.map.depthTexture.name=H.name+".shadowMap",N.map.depthTexture.format=Ci,this.type===js?(N.map.depthTexture.compareFunction=R?Dc:Nc,N.map.depthTexture.minFilter=Qt,N.map.depthTexture.magFilter=Qt):(N.map.depthTexture.compareFunction=null,N.map.depthTexture.minFilter=jt,N.map.depthTexture.magFilter=jt);N.camera.updateProjectionMatrix()}N.map.isWebGLCubeRenderTarget!==!0&&(N.map.width!==s.x||N.map.height!==s.y)&&N.map.setSize(s.x,s.y);let F=N.map.isWebGLCubeRenderTarget?6:N.getViewportCount();H.isPointLight!==!0&&N.updateMatrices(H,p);for(let W=0;W<F;W++){let le=N.getCamera(W);if(H.isPointLight){let ie=N.camera,Le=N.matrix,ke=H.distance||ie.far;ke!==ie.far&&(ie.far=ke,ie.updateProjectionMatrix()),Mo.setFromMatrixPosition(H.matrixWorld),ie.position.copy(Mo),Nh.copy(ie.position),Nh.add(iM[W]),ie.up.copy(sM[W]),ie.lookAt(Nh),ie.updateMatrixWorld(),Le.makeTranslation(-Mo.x,-Mo.y,-Mo.z),Jp.multiplyMatrices(ie.projectionMatrix,ie.matrixWorldInverse),N._frustum.setFromProjectionMatrix(Jp,ie.coordinateSystem,ie.reversedDepth)}if(N.map.isWebGLCubeRenderTarget)i.setRenderTarget(N.map,W),i.clear();else{W===0&&(i.setRenderTarget(N.map),i.clear());let ie=N.getViewport(W);a.set(r.x*ie.x,r.y*ie.y,r.x*ie.z,r.y*ie.w),O.viewport(a)}n=N.getFrustum(W),v(C,p,le,H,this.type)}N.isPointLightShadow!==!0&&this.type===Zr&&M(N,p),N.needsUpdate=!1}m=this.type,g.needsUpdate=!1,i.setRenderTarget(E,L,z)};function M(S,C){let p=e.update(y);d.defines.VSM_SAMPLES!==S.blurSamples&&(d.defines.VSM_SAMPLES=S.blurSamples,f.defines.VSM_SAMPLES=S.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),S.mapPass===null?S.mapPass=new $t(s.x,s.y,{format:Rs,type:un}):(S.mapPass.width!==S.map.width||S.mapPass.height!==S.map.height)&&S.mapPass.setSize(S.map.width,S.map.height),d.uniforms.shadow_pass.value=S.map.depthTexture,d.uniforms.resolution.value.set(S.map.width,S.map.height),d.uniforms.radius.value=S.radius,i.setRenderTarget(S.mapPass),i.clear(),i.renderBufferDirect(C,null,p,d,y,null),f.uniforms.shadow_pass.value=S.mapPass.texture,f.uniforms.resolution.value.set(S.map.width,S.map.height),f.uniforms.radius.value=S.radius,i.setRenderTarget(S.map),i.clear(),i.renderBufferDirect(C,null,p,f,y,null)}function A(S,C,p,E){let L=null,z=p.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(z!==void 0)L=z;else if(L=p.isPointLight===!0?l:o,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){let O=L.uuid,G=C.uuid,w=c[O];w===void 0&&(w={},c[O]=w);let D=w[G];D===void 0&&(D=L.clone(),w[G]=D,C.addEventListener("dispose",b)),L=D}if(L.visible=C.visible,L.wireframe=C.wireframe,E===Zr?L.side=C.shadowSide!==null?C.shadowSide:C.side:L.side=C.shadowSide!==null?C.shadowSide:h[C.side],L.alphaMap=C.alphaMap,L.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,L.map=C.map,L.clipShadows=C.clipShadows,L.clippingPlanes=C.clippingPlanes,L.clipIntersection=C.clipIntersection,L.displacementMap=C.displacementMap,L.displacementScale=C.displacementScale,L.displacementBias=C.displacementBias,L.wireframeLinewidth=C.wireframeLinewidth,L.linewidth=C.linewidth,p.isPointLight===!0&&L.isMeshDistanceMaterial===!0){let O=i.properties.get(L);O.light=p}return L}function v(S,C,p,E,L){if(S.visible===!1)return;if(S.layers.test(C.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&L===Zr)&&(!S.frustumCulled||S.intersectsFrustum(n))){S.modelViewMatrix.multiplyMatrices(p.matrixWorldInverse,S.matrixWorld);let G=e.update(S),w=S.material;if(Array.isArray(w)){let D=G.groups;for(let H=0,N=D.length;H<N;H++){let B=D[H],R=w[B.materialIndex];if(R&&R.visible){let F=A(S,R,E,L);S.onBeforeShadow(i,S,C,p,G,F,B),i.renderBufferDirect(p,null,G,F,S,B),S.onAfterShadow(i,S,C,p,G,F,B)}}}else if(w.visible){let D=A(S,w,E,L);S.onBeforeShadow(i,S,C,p,G,D,null),i.renderBufferDirect(p,null,G,D,S,null),S.onAfterShadow(i,S,C,p,G,D,null)}}let O=S.children;for(let G=0,w=O.length;G<w;G++)v(O[G],C,p,E,L)}function b(S){S.target.removeEventListener("dispose",b);for(let p in c){let E=c[p],L=S.target.uuid;L in E&&(E[L].dispose(),delete E[L])}}}function aM(i,e){function t(){let K=!1,ge=new Rt,re=null,_e=new Rt(0,0,0,0);return{setMask:function(ye){re!==ye&&!K&&(i.colorMask(ye,ye,ye,ye),re=ye)},setLocked:function(ye){K=ye},setClear:function(ye,ce,Fe,Ie,Pt){Pt===!0&&(ye*=Ie,ce*=Ie,Fe*=Ie),ge.set(ye,ce,Fe,Ie),_e.equals(ge)===!1&&(i.clearColor(ye,ce,Fe,Ie),_e.copy(ge))},reset:function(){K=!1,re=null,_e.set(-1,0,0,0)}}}function n(){let K=!1,ge=!1,re=null,_e=null,ye=null;return{setReversed:function(ce){if(ge!==ce){let Fe=e.get("EXT_clip_control");ce?Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.ZERO_TO_ONE_EXT):Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.NEGATIVE_ONE_TO_ONE_EXT),ge=ce;let Ie=ye;ye=null,this.setClear(Ie)}},getReversed:function(){return ge},setTest:function(ce){ce?ee(i.DEPTH_TEST):he(i.DEPTH_TEST)},setMask:function(ce){re!==ce&&!K&&(i.depthMask(ce),re=ce)},setFunc:function(ce){if(ge&&(ce=wp[ce]),_e!==ce){switch(ce){case vl:i.depthFunc(i.NEVER);break;case yl:i.depthFunc(i.ALWAYS);break;case Ml:i.depthFunc(i.LESS);break;case Ur:i.depthFunc(i.LEQUAL);break;case Sl:i.depthFunc(i.EQUAL);break;case bl:i.depthFunc(i.GEQUAL);break;case El:i.depthFunc(i.GREATER);break;case Tl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}_e=ce}},setLocked:function(ce){K=ce},setClear:function(ce){ye!==ce&&(ye=ce,ge&&(ce=1-ce),i.clearDepth(ce))},reset:function(){K=!1,re=null,_e=null,ye=null,ge=!1}}}function s(){let K=!1,ge=null,re=null,_e=null,ye=null,ce=null,Fe=null,Ie=null,Pt=null;return{setTest:function(ze){K||(ze?ee(i.STENCIL_TEST):he(i.STENCIL_TEST))},setMask:function(ze){ge!==ze&&!K&&(i.stencilMask(ze),ge=ze)},setFunc:function(ze,rn,xn){(re!==ze||_e!==rn||ye!==xn)&&(i.stencilFunc(ze,rn,xn),re=ze,_e=rn,ye=xn)},setOp:function(ze,rn,xn){(ce!==ze||Fe!==rn||Ie!==xn)&&(i.stencilOp(ze,rn,xn),ce=ze,Fe=rn,Ie=xn)},setLocked:function(ze){K=ze},setClear:function(ze){Pt!==ze&&(i.clearStencil(ze),Pt=ze)},reset:function(){K=!1,ge=null,re=null,_e=null,ye=null,ce=null,Fe=null,Ie=null,Pt=null}}}let r=new t,a=new n,o=new s,l=new WeakMap,c=new WeakMap,u={},h={},d={},f=new WeakMap,_=[],y=null,g=!1,m=null,M=null,A=null,v=null,b=null,S=null,C=null,p=new oe(0,0,0),E=0,L=!1,z=null,O=null,G=null,w=null,D=null,H=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),N=!1,B=0,R=i.getParameter(i.VERSION);R.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(R)[1]),N=B>=1):R.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(R)[1]),N=B>=2);let F=null,W={},le=i.getParameter(i.SCISSOR_BOX),ie=i.getParameter(i.VIEWPORT),Le=new Rt().fromArray(le),ke=new Rt().fromArray(ie);function Ce(K,ge,re,_e){let ye=new Uint8Array(4),ce=i.createTexture();i.bindTexture(K,ce),i.texParameteri(K,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(K,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Fe=0;Fe<re;Fe++)K===i.TEXTURE_3D||K===i.TEXTURE_2D_ARRAY?i.texImage3D(ge,0,i.RGBA,1,1,_e,0,i.RGBA,i.UNSIGNED_BYTE,ye):i.texImage2D(ge+Fe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ye);return ce}let Q={};Q[i.TEXTURE_2D]=Ce(i.TEXTURE_2D,i.TEXTURE_2D,1),Q[i.TEXTURE_CUBE_MAP]=Ce(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[i.TEXTURE_2D_ARRAY]=Ce(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Q[i.TEXTURE_3D]=Ce(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ee(i.DEPTH_TEST),a.setFunc(Ur),He(!1),pt(ih),ee(i.CULL_FACE),Ge(ri);function ee(K){u[K]!==!0&&(i.enable(K),u[K]=!0)}function he(K){u[K]!==!1&&(i.disable(K),u[K]=!1)}function Z(K,ge){return d[K]!==ge?(i.bindFramebuffer(K,ge),d[K]=ge,K===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=ge),K===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=ge),!0):!1}function fe(K,ge){let re=_,_e=!1;if(K){re=f.get(ge),re===void 0&&(re=[],f.set(ge,re));let ye=K.textures;if(re.length!==ye.length||re[0]!==i.COLOR_ATTACHMENT0){for(let ce=0,Fe=ye.length;ce<Fe;ce++)re[ce]=i.COLOR_ATTACHMENT0+ce;re.length=ye.length,_e=!0}}else re[0]!==i.BACK&&(re[0]=i.BACK,_e=!0);_e&&i.drawBuffers(re)}function xe(K){return y!==K?(i.useProgram(K),y=K,!0):!1}let Je={[Qs]:i.FUNC_ADD,[Yf]:i.FUNC_SUBTRACT,[$f]:i.FUNC_REVERSE_SUBTRACT};Je[Kf]=i.MIN,Je[Zf]=i.MAX;let Ve={[Jf]:i.ZERO,[jf]:i.ONE,[Qf]:i.SRC_COLOR,[ah]:i.SRC_ALPHA,[rp]:i.SRC_ALPHA_SATURATE,[ip]:i.DST_COLOR,[tp]:i.DST_ALPHA,[ep]:i.ONE_MINUS_SRC_COLOR,[oh]:i.ONE_MINUS_SRC_ALPHA,[sp]:i.ONE_MINUS_DST_COLOR,[np]:i.ONE_MINUS_DST_ALPHA,[ap]:i.CONSTANT_COLOR,[op]:i.ONE_MINUS_CONSTANT_COLOR,[lp]:i.CONSTANT_ALPHA,[cp]:i.ONE_MINUS_CONSTANT_ALPHA};function Ge(K,ge,re,_e,ye,ce,Fe,Ie,Pt,ze){if(K===ri){g===!0&&(he(i.BLEND),g=!1);return}if(g===!1&&(ee(i.BLEND),g=!0),K!==qf){if(K!==m||ze!==L){if((M!==Qs||b!==Qs)&&(i.blendEquation(i.FUNC_ADD),M=Qs,b=Qs),ze)switch(K){case Jr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Et:i.blendFunc(i.ONE,i.ONE);break;case sh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case rh:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:We("WebGLState: Invalid blending: ",K);break}else switch(K){case Jr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Et:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case sh:We("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case rh:We("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:We("WebGLState: Invalid blending: ",K);break}A=null,v=null,S=null,C=null,p.set(0,0,0),E=0,m=K,L=ze}return}ye=ye||ge,ce=ce||re,Fe=Fe||_e,(ge!==M||ye!==b)&&(i.blendEquationSeparate(Je[ge],Je[ye]),M=ge,b=ye),(re!==A||_e!==v||ce!==S||Fe!==C)&&(i.blendFuncSeparate(Ve[re],Ve[_e],Ve[ce],Ve[Fe]),A=re,v=_e,S=ce,C=Fe),(Ie.equals(p)===!1||Pt!==E)&&(i.blendColor(Ie.r,Ie.g,Ie.b,Pt),p.copy(Ie),E=Pt),m=K,L=!1}function Xe(K,ge){K.side===Ht?he(i.CULL_FACE):ee(i.CULL_FACE);let re=K.side===kt;ge&&(re=!re),He(re),K.blending===Jr&&K.transparent===!1?Ge(ri):Ge(K.blending,K.blendEquation,K.blendSrc,K.blendDst,K.blendEquationAlpha,K.blendSrcAlpha,K.blendDstAlpha,K.blendColor,K.blendAlpha,K.premultipliedAlpha),a.setFunc(K.depthFunc),a.setTest(K.depthTest),a.setMask(K.depthWrite),r.setMask(K.colorWrite);let _e=K.stencilWrite;o.setTest(_e),_e&&(o.setMask(K.stencilWriteMask),o.setFunc(K.stencilFunc,K.stencilRef,K.stencilFuncMask),o.setOp(K.stencilFail,K.stencilZFail,K.stencilZPass)),mt(K.polygonOffset,K.polygonOffsetFactor,K.polygonOffsetUnits),K.alphaToCoverage===!0?ee(i.SAMPLE_ALPHA_TO_COVERAGE):he(i.SAMPLE_ALPHA_TO_COVERAGE)}function He(K){z!==K&&(K?i.frontFace(i.CW):i.frontFace(i.CCW),z=K)}function pt(K){K!==Gf?(ee(i.CULL_FACE),K!==O&&(K===ih?i.cullFace(i.BACK):K===Wf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):he(i.CULL_FACE),O=K}function rt(K){K!==G&&(N&&i.lineWidth(K),G=K)}function mt(K,ge,re){K?(ee(i.POLYGON_OFFSET_FILL),(w!==ge||D!==re)&&(w=ge,D=re,a.getReversed()&&(ge=-ge),i.polygonOffset(ge,re))):he(i.POLYGON_OFFSET_FILL)}function ut(K){K?ee(i.SCISSOR_TEST):he(i.SCISSOR_TEST)}function xt(K){K===void 0&&(K=i.TEXTURE0+H-1),F!==K&&(i.activeTexture(K),F=K)}function X(K,ge,re){re===void 0&&(F===null?re=i.TEXTURE0+H-1:re=F);let _e=W[re];_e===void 0&&(_e={type:void 0,texture:void 0},W[re]=_e),(_e.type!==K||_e.texture!==ge)&&(F!==re&&(i.activeTexture(re),F=re),i.bindTexture(K,ge||Q[K]),_e.type=K,_e.texture=ge)}function sn(){let K=W[F];K!==void 0&&K.type!==void 0&&(i.bindTexture(K.type,null),K.type=void 0,K.texture=void 0)}function _t(){try{i.compressedTexImage2D(...arguments)}catch(K){We("WebGLState:",K)}}function P(){try{i.compressedTexImage3D(...arguments)}catch(K){We("WebGLState:",K)}}function x(){try{i.texSubImage2D(...arguments)}catch(K){We("WebGLState:",K)}}function k(){try{i.texSubImage3D(...arguments)}catch(K){We("WebGLState:",K)}}function V(){try{i.compressedTexSubImage2D(...arguments)}catch(K){We("WebGLState:",K)}}function Y(){try{i.compressedTexSubImage3D(...arguments)}catch(K){We("WebGLState:",K)}}function se(){try{i.texStorage2D(...arguments)}catch(K){We("WebGLState:",K)}}function ue(){try{i.texStorage3D(...arguments)}catch(K){We("WebGLState:",K)}}function $(){try{i.texImage2D(...arguments)}catch(K){We("WebGLState:",K)}}function ne(){try{i.texImage3D(...arguments)}catch(K){We("WebGLState:",K)}}function de(K){return h[K]!==void 0?h[K]:i.getParameter(K)}function ve(K,ge){h[K]!==ge&&(i.pixelStorei(K,ge),h[K]=ge)}function me(K){Le.equals(K)===!1&&(i.scissor(K.x,K.y,K.z,K.w),Le.copy(K))}function pe(K){ke.equals(K)===!1&&(i.viewport(K.x,K.y,K.z,K.w),ke.copy(K))}function Ae(K,ge){let re=c.get(ge);re===void 0&&(re=new WeakMap,c.set(ge,re));let _e=re.get(K);_e===void 0&&(_e=i.getUniformBlockIndex(ge,K.name),re.set(K,_e))}function Ue(K,ge){let _e=c.get(ge).get(K);l.get(ge)!==_e&&(i.uniformBlockBinding(ge,_e,K.__bindingPointIndex),l.set(ge,_e))}function je(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},h={},F=null,W={},d={},f=new WeakMap,_=[],y=null,g=!1,m=null,M=null,A=null,v=null,b=null,S=null,C=null,p=new oe(0,0,0),E=0,L=!1,z=null,O=null,G=null,w=null,D=null,Le.set(0,0,i.canvas.width,i.canvas.height),ke.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ee,disable:he,bindFramebuffer:Z,drawBuffers:fe,useProgram:xe,setBlending:Ge,setMaterial:Xe,setFlipSided:He,setCullFace:pt,setLineWidth:rt,setPolygonOffset:mt,setScissorTest:ut,activeTexture:xt,bindTexture:X,unbindTexture:sn,compressedTexImage2D:_t,compressedTexImage3D:P,texImage2D:$,texImage3D:ne,pixelStorei:ve,getParameter:de,updateUBOMapping:Ae,uniformBlockBinding:Ue,texStorage2D:se,texStorage3D:ue,texSubImage2D:x,texSubImage3D:k,compressedTexSubImage2D:V,compressedTexSubImage3D:Y,scissor:me,viewport:pe,reset:je}}function oM(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Se,u=new WeakMap,h=new Set,d,f=new WeakMap,_=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(P,x){return _?new OffscreenCanvas(P,x):Br("canvas")}function g(P,x,k){let V=1,Y=_t(P);if((Y.width>k||Y.height>k)&&(V=k/Math.max(Y.width,Y.height)),V<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){let se=Math.floor(V*Y.width),ue=Math.floor(V*Y.height);d===void 0&&(d=y(se,ue));let $=x?y(se,ue):d;return $.width=se,$.height=ue,$.getContext("2d").drawImage(P,0,0,se,ue),Be("WebGLRenderer: Texture has been resized from ("+Y.width+"x"+Y.height+") to ("+se+"x"+ue+")."),$}else return"data"in P&&Be("WebGLRenderer: Image in DataTexture is too big ("+Y.width+"x"+Y.height+")."),P;return P}function m(P){return P.generateMipmaps}function M(P){i.generateMipmap(P)}function A(P){return P.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?i.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function v(P,x,k,V,Y,se=!1){if(P!==null){if(i[P]!==void 0)return i[P];Be("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let ue;V&&(ue=e.get("EXT_texture_norm16"),ue||Be("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let $=x;if(x===i.RED&&(k===i.FLOAT&&($=i.R32F),k===i.HALF_FLOAT&&($=i.R16F),k===i.UNSIGNED_BYTE&&($=i.R8),k===i.UNSIGNED_SHORT&&ue&&($=ue.R16_EXT),k===i.SHORT&&ue&&($=ue.R16_SNORM_EXT)),x===i.RED_INTEGER&&(k===i.UNSIGNED_BYTE&&($=i.R8UI),k===i.UNSIGNED_SHORT&&($=i.R16UI),k===i.UNSIGNED_INT&&($=i.R32UI),k===i.BYTE&&($=i.R8I),k===i.SHORT&&($=i.R16I),k===i.INT&&($=i.R32I)),x===i.RG&&(k===i.FLOAT&&($=i.RG32F),k===i.HALF_FLOAT&&($=i.RG16F),k===i.UNSIGNED_BYTE&&($=i.RG8),k===i.UNSIGNED_SHORT&&ue&&($=ue.RG16_EXT),k===i.SHORT&&ue&&($=ue.RG16_SNORM_EXT)),x===i.RG_INTEGER&&(k===i.UNSIGNED_BYTE&&($=i.RG8UI),k===i.UNSIGNED_SHORT&&($=i.RG16UI),k===i.UNSIGNED_INT&&($=i.RG32UI),k===i.BYTE&&($=i.RG8I),k===i.SHORT&&($=i.RG16I),k===i.INT&&($=i.RG32I)),x===i.RGB_INTEGER&&(k===i.UNSIGNED_BYTE&&($=i.RGB8UI),k===i.UNSIGNED_SHORT&&($=i.RGB16UI),k===i.UNSIGNED_INT&&($=i.RGB32UI),k===i.BYTE&&($=i.RGB8I),k===i.SHORT&&($=i.RGB16I),k===i.INT&&($=i.RGB32I)),x===i.RGBA_INTEGER&&(k===i.UNSIGNED_BYTE&&($=i.RGBA8UI),k===i.UNSIGNED_SHORT&&($=i.RGBA16UI),k===i.UNSIGNED_INT&&($=i.RGBA32UI),k===i.BYTE&&($=i.RGBA8I),k===i.SHORT&&($=i.RGBA16I),k===i.INT&&($=i.RGBA32I)),x===i.RGB&&(k===i.UNSIGNED_SHORT&&ue&&($=ue.RGB16_EXT),k===i.SHORT&&ue&&($=ue.RGB16_SNORM_EXT),k===i.UNSIGNED_INT_5_9_9_9_REV&&($=i.RGB9_E5),k===i.UNSIGNED_INT_10F_11F_11F_REV&&($=i.R11F_G11F_B10F)),x===i.RGBA){let ne=se?Fa:st.getTransfer(Y);k===i.FLOAT&&($=i.RGBA32F),k===i.HALF_FLOAT&&($=i.RGBA16F),k===i.UNSIGNED_BYTE&&($=ne===yt?i.SRGB8_ALPHA8:i.RGBA8),k===i.UNSIGNED_SHORT&&ue&&($=ue.RGBA16_EXT),k===i.SHORT&&ue&&($=ue.RGBA16_SNORM_EXT),k===i.UNSIGNED_SHORT_4_4_4_4&&($=i.RGBA4),k===i.UNSIGNED_SHORT_5_5_5_1&&($=i.RGB5_A1)}return($===i.R16F||$===i.R32F||$===i.RG16F||$===i.RG32F||$===i.RGBA16F||$===i.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function b(P,x){let k;return P?x===null||x===Mi||x===ea?k=i.DEPTH24_STENCIL8:x===Wn?k=i.DEPTH32F_STENCIL8:x===Qr&&(k=i.DEPTH24_STENCIL8,Be("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Mi||x===ea?k=i.DEPTH_COMPONENT24:x===Wn?k=i.DEPTH_COMPONENT32F:x===Qr&&(k=i.DEPTH_COMPONENT16),k}function S(P,x){return m(P)===!0||P.isFramebufferTexture&&P.minFilter!==jt&&P.minFilter!==Qt?Math.log2(Math.max(x.width,x.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?x.mipmaps.length:1}function C(P){let x=P.target;x.removeEventListener("dispose",C),E(x),x.isVideoTexture&&u.delete(x),x.isHTMLTexture&&h.delete(x)}function p(P){let x=P.target;x.removeEventListener("dispose",p),z(x)}function E(P){let x=n.get(P);if(x.__webglInit===void 0)return;let k=P.source,V=f.get(k);if(V){let Y=V[x.__cacheKey];Y.usedTimes--,Y.usedTimes===0&&L(P),Object.keys(V).length===0&&f.delete(k)}n.remove(P)}function L(P){let x=n.get(P);i.deleteTexture(x.__webglTexture);let k=P.source,V=f.get(k);delete V[x.__cacheKey],a.memory.textures--}function z(P){let x=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let V=0;V<6;V++){if(Array.isArray(x.__webglFramebuffer[V]))for(let Y=0;Y<x.__webglFramebuffer[V].length;Y++)i.deleteFramebuffer(x.__webglFramebuffer[V][Y]);else i.deleteFramebuffer(x.__webglFramebuffer[V]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[V])}else{if(Array.isArray(x.__webglFramebuffer))for(let V=0;V<x.__webglFramebuffer.length;V++)i.deleteFramebuffer(x.__webglFramebuffer[V]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let V=0;V<x.__webglColorRenderbuffer.length;V++)x.__webglColorRenderbuffer[V]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[V]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let k=P.textures;for(let V=0,Y=k.length;V<Y;V++){let se=n.get(k[V]);se.__webglTexture&&(i.deleteTexture(se.__webglTexture),a.memory.textures--),n.remove(k[V])}n.remove(P)}let O=0;function G(){O=0}function w(){return O}function D(P){O=P}function H(){let P=O;return P>=s.maxTextures&&Be("WebGLTextures: Trying to use "+(P+1)+" texture units while this GPU supports only "+s.maxTextures),O+=1,P}function N(P){let x=[];return x.push(P.wrapS),x.push(P.wrapT),x.push(P.wrapR||0),x.push(P.magFilter),x.push(P.minFilter),x.push(P.anisotropy),x.push(P.internalFormat),x.push(P.format),x.push(P.type),x.push(P.generateMipmaps),x.push(P.premultiplyAlpha),x.push(P.flipY),x.push(P.unpackAlignment),x.push(P.colorSpace),x.join()}function B(P,x){let k=n.get(P);if(P.isVideoTexture&&X(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&k.__version!==P.version){let V=P.image;if(V===null)Be("WebGLRenderer: Texture marked for update but no image data found.");else if(V.complete===!1)Be("WebGLRenderer: Texture marked for update but image is incomplete");else{he(k,P,x);return}}else P.isExternalTexture&&(k.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,k.__webglTexture,i.TEXTURE0+x)}function R(P,x){let k=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&k.__version!==P.version){he(k,P,x);return}else P.isExternalTexture&&(k.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,k.__webglTexture,i.TEXTURE0+x)}function F(P,x){let k=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&k.__version!==P.version){he(k,P,x);return}t.bindTexture(i.TEXTURE_3D,k.__webglTexture,i.TEXTURE0+x)}function W(P,x){let k=n.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&k.__version!==P.version){Z(k,P,x);return}t.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture,i.TEXTURE0+x)}let le={[ei]:i.REPEAT,[Qn]:i.CLAMP_TO_EDGE,[Fr]:i.MIRRORED_REPEAT},ie={[jt]:i.NEAREST,[Kl]:i.NEAREST_MIPMAP_NEAREST,[nr]:i.NEAREST_MIPMAP_LINEAR,[Qt]:i.LINEAR,[jr]:i.LINEAR_MIPMAP_NEAREST,[yi]:i.LINEAR_MIPMAP_LINEAR},Le={[xp]:i.NEVER,[Sp]:i.ALWAYS,[_p]:i.LESS,[Nc]:i.LEQUAL,[vp]:i.EQUAL,[Dc]:i.GEQUAL,[yp]:i.GREATER,[Mp]:i.NOTEQUAL};function ke(P,x){if(x.type===Wn&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===Qt||x.magFilter===jr||x.magFilter===nr||x.magFilter===yi||x.minFilter===Qt||x.minFilter===jr||x.minFilter===nr||x.minFilter===yi)&&Be("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(P,i.TEXTURE_WRAP_S,le[x.wrapS]),i.texParameteri(P,i.TEXTURE_WRAP_T,le[x.wrapT]),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,le[x.wrapR]),i.texParameteri(P,i.TEXTURE_MAG_FILTER,ie[x.magFilter]),i.texParameteri(P,i.TEXTURE_MIN_FILTER,ie[x.minFilter]),x.compareFunction&&(i.texParameteri(P,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(P,i.TEXTURE_COMPARE_FUNC,Le[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===jt||x.minFilter!==nr&&x.minFilter!==yi||x.type===Wn&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){let k=e.get("EXT_texture_filter_anisotropic");i.texParameterf(P,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function Ce(P,x){let k=!1;P.__webglInit===void 0&&(P.__webglInit=!0,x.addEventListener("dispose",C));let V=x.source,Y=f.get(V);Y===void 0&&(Y={},f.set(V,Y));let se=N(x);if(se!==P.__cacheKey){Y[se]===void 0&&(Y[se]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,k=!0),Y[se].usedTimes++;let ue=Y[P.__cacheKey];ue!==void 0&&(Y[P.__cacheKey].usedTimes--,ue.usedTimes===0&&L(x)),P.__cacheKey=se,P.__webglTexture=Y[se].texture}return k}function Q(P,x,k){return Math.floor(Math.floor(P/k)/x)}function ee(P,x,k,V){let se=P.updateRanges;if(se.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,x.width,x.height,k,V,x.data);else{se.sort((ve,me)=>ve.start-me.start);let ue=0;for(let ve=1;ve<se.length;ve++){let me=se[ue],pe=se[ve],Ae=me.start+me.count,Ue=Q(pe.start,x.width,4),je=Q(me.start,x.width,4);pe.start<=Ae+1&&Ue===je&&Q(pe.start+pe.count-1,x.width,4)===Ue?me.count=Math.max(me.count,pe.start+pe.count-me.start):(++ue,se[ue]=pe)}se.length=ue+1;let $=t.getParameter(i.UNPACK_ROW_LENGTH),ne=t.getParameter(i.UNPACK_SKIP_PIXELS),de=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,x.width);for(let ve=0,me=se.length;ve<me;ve++){let pe=se[ve],Ae=Math.floor(pe.start/4),Ue=Math.ceil(pe.count/4),je=Ae%x.width,K=Math.floor(Ae/x.width),ge=Ue,re=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,je),t.pixelStorei(i.UNPACK_SKIP_ROWS,K),t.texSubImage2D(i.TEXTURE_2D,0,je,K,ge,re,k,V,x.data)}P.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,$),t.pixelStorei(i.UNPACK_SKIP_PIXELS,ne),t.pixelStorei(i.UNPACK_SKIP_ROWS,de)}}function he(P,x,k){let V=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(V=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(V=i.TEXTURE_3D);let Y=Ce(P,x),se=x.source;t.bindTexture(V,P.__webglTexture,i.TEXTURE0+k);let ue=n.get(se);if(se.version!==ue.__version||Y===!0){if(t.activeTexture(i.TEXTURE0+k),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){let re=st.getPrimaries(st.workingColorSpace),_e=x.colorSpace===Si?null:st.getPrimaries(x.colorSpace),ye=x.colorSpace===Si||re===_e?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye)}t.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment);let ne=g(x.image,!1,s.maxTextureSize);ne=sn(x,ne);let de=r.convert(x.format,x.colorSpace),ve=r.convert(x.type),me=v(x.internalFormat,de,ve,x.normalized,x.colorSpace,x.isVideoTexture);ke(V,x);let pe,Ae=x.mipmaps,Ue=x.isVideoTexture!==!0,je=ue.__version===void 0||Y===!0,K=se.dataReady,ge=S(x,ne);if(x.isDepthTexture)me=b(x.format===As,x.type),je&&(Ue?t.texStorage2D(i.TEXTURE_2D,1,me,ne.width,ne.height):t.texImage2D(i.TEXTURE_2D,0,me,ne.width,ne.height,0,de,ve,null));else if(x.isDataTexture)if(Ae.length>0){Ue&&je&&t.texStorage2D(i.TEXTURE_2D,ge,me,Ae[0].width,Ae[0].height);for(let re=0,_e=Ae.length;re<_e;re++)pe=Ae[re],Ue?K&&t.texSubImage2D(i.TEXTURE_2D,re,0,0,pe.width,pe.height,de,ve,pe.data):t.texImage2D(i.TEXTURE_2D,re,me,pe.width,pe.height,0,de,ve,pe.data);x.generateMipmaps=!1}else Ue?(je&&t.texStorage2D(i.TEXTURE_2D,ge,me,ne.width,ne.height),K&&ee(x,ne,de,ve)):t.texImage2D(i.TEXTURE_2D,0,me,ne.width,ne.height,0,de,ve,ne.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Ue&&je&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ge,me,Ae[0].width,Ae[0].height,ne.depth);for(let re=0,_e=Ae.length;re<_e;re++)if(pe=Ae[re],x.format!==Xn)if(de!==null)if(Ue){if(K)if(x.layerUpdates.size>0){let ye=Sh(pe.width,pe.height,x.format,x.type);for(let ce of x.layerUpdates){let Fe=pe.data.subarray(ce*ye/pe.data.BYTES_PER_ELEMENT,(ce+1)*ye/pe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,re,0,0,ce,pe.width,pe.height,1,de,Fe)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,re,0,0,0,pe.width,pe.height,ne.depth,de,pe.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,re,me,pe.width,pe.height,ne.depth,0,pe.data,0,0);else Be("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ue?K&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,re,0,0,0,pe.width,pe.height,ne.depth,de,ve,pe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,re,me,pe.width,pe.height,ne.depth,0,de,ve,pe.data);x.layerUpdates.size>0&&x.clearLayerUpdates()}else{Ue&&je&&t.texStorage2D(i.TEXTURE_2D,ge,me,Ae[0].width,Ae[0].height);for(let re=0,_e=Ae.length;re<_e;re++)pe=Ae[re],x.format!==Xn?de!==null?Ue?K&&t.compressedTexSubImage2D(i.TEXTURE_2D,re,0,0,pe.width,pe.height,de,pe.data):t.compressedTexImage2D(i.TEXTURE_2D,re,me,pe.width,pe.height,0,pe.data):Be("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ue?K&&t.texSubImage2D(i.TEXTURE_2D,re,0,0,pe.width,pe.height,de,ve,pe.data):t.texImage2D(i.TEXTURE_2D,re,me,pe.width,pe.height,0,de,ve,pe.data)}else if(x.isDataArrayTexture)if(Ue){if(je&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ge,me,ne.width,ne.height,ne.depth),K)if(x.layerUpdates.size>0){let re=Sh(ne.width,ne.height,x.format,x.type);for(let _e of x.layerUpdates){let ye=ne.data.subarray(_e*re/ne.data.BYTES_PER_ELEMENT,(_e+1)*re/ne.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,_e,ne.width,ne.height,1,de,ve,ye)}x.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,de,ve,ne.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,me,ne.width,ne.height,ne.depth,0,de,ve,ne.data);else if(x.isData3DTexture)Ue?(je&&t.texStorage3D(i.TEXTURE_3D,ge,me,ne.width,ne.height,ne.depth),K&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,de,ve,ne.data)):t.texImage3D(i.TEXTURE_3D,0,me,ne.width,ne.height,ne.depth,0,de,ve,ne.data);else if(x.isFramebufferTexture){if(je)if(Ue)t.texStorage2D(i.TEXTURE_2D,ge,me,ne.width,ne.height);else{let re=ne.width,_e=ne.height;for(let ye=0;ye<ge;ye++)t.texImage2D(i.TEXTURE_2D,ye,me,re,_e,0,de,ve,null),re>>=1,_e>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in i){let re=i.canvas;if(re.hasAttribute("layoutsubtree")||re.setAttribute("layoutsubtree","true"),ne.parentNode!==re){re.appendChild(ne),h.add(x),re.onpaint=_e=>{let ye=_e.changedElements;for(let ce of h)ye.includes(ce.image)&&(ce.needsUpdate=!0)},re.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,ne);else{let ye=i.RGBA,ce=i.RGBA,Fe=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,ye,ce,Fe,ne)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Ae.length>0){if(Ue&&je){let re=_t(Ae[0]);t.texStorage2D(i.TEXTURE_2D,ge,me,re.width,re.height)}for(let re=0,_e=Ae.length;re<_e;re++)pe=Ae[re],Ue?K&&t.texSubImage2D(i.TEXTURE_2D,re,0,0,de,ve,pe):t.texImage2D(i.TEXTURE_2D,re,me,de,ve,pe);x.generateMipmaps=!1}else if(Ue){if(je){let re=_t(ne);t.texStorage2D(i.TEXTURE_2D,ge,me,re.width,re.height)}K&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,de,ve,ne)}else t.texImage2D(i.TEXTURE_2D,0,me,de,ve,ne);m(x)&&M(V),ue.__version=se.version,x.onUpdate&&x.onUpdate(x)}P.__version=x.version}function Z(P,x,k){if(x.image.length!==6)return;let V=Ce(P,x),Y=x.source;t.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+k);let se=n.get(Y);if(Y.version!==se.__version||V===!0){t.activeTexture(i.TEXTURE0+k);let ue=st.getPrimaries(st.workingColorSpace),$=x.colorSpace===Si?null:st.getPrimaries(x.colorSpace),ne=x.colorSpace===Si||ue===$?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ne);let de=x.isCompressedTexture||x.image[0].isCompressedTexture,ve=x.image[0]&&x.image[0].isDataTexture,me=[];for(let ce=0;ce<6;ce++)!de&&!ve?me[ce]=g(x.image[ce],!0,s.maxCubemapSize):me[ce]=ve?x.image[ce].image:x.image[ce],me[ce]=sn(x,me[ce]);let pe=me[0],Ae=r.convert(x.format,x.colorSpace),Ue=r.convert(x.type),je=v(x.internalFormat,Ae,Ue,x.normalized,x.colorSpace),K=x.isVideoTexture!==!0,ge=se.__version===void 0||V===!0,re=Y.dataReady,_e=S(x,pe);ke(i.TEXTURE_CUBE_MAP,x);let ye;if(de){K&&ge&&t.texStorage2D(i.TEXTURE_CUBE_MAP,_e,je,pe.width,pe.height);for(let ce=0;ce<6;ce++){ye=me[ce].mipmaps;for(let Fe=0;Fe<ye.length;Fe++){let Ie=ye[Fe];x.format!==Xn?Ae!==null?K?re&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Fe,0,0,Ie.width,Ie.height,Ae,Ie.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Fe,je,Ie.width,Ie.height,0,Ie.data):Be("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):K?re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Fe,0,0,Ie.width,Ie.height,Ae,Ue,Ie.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Fe,je,Ie.width,Ie.height,0,Ae,Ue,Ie.data)}}}else{if(ye=x.mipmaps,K&&ge){ye.length>0&&_e++;let ce=_t(me[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,_e,je,ce.width,ce.height)}for(let ce=0;ce<6;ce++)if(ve){K?re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,me[ce].width,me[ce].height,Ae,Ue,me[ce].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,je,me[ce].width,me[ce].height,0,Ae,Ue,me[ce].data);for(let Fe=0;Fe<ye.length;Fe++){let Pt=ye[Fe].image[ce].image;K?re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Fe+1,0,0,Pt.width,Pt.height,Ae,Ue,Pt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Fe+1,je,Pt.width,Pt.height,0,Ae,Ue,Pt.data)}}else{K?re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,Ae,Ue,me[ce]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,je,Ae,Ue,me[ce]);for(let Fe=0;Fe<ye.length;Fe++){let Ie=ye[Fe];K?re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Fe+1,0,0,Ae,Ue,Ie.image[ce]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Fe+1,je,Ae,Ue,Ie.image[ce])}}}m(x)&&M(i.TEXTURE_CUBE_MAP),se.__version=Y.version,x.onUpdate&&x.onUpdate(x)}P.__version=x.version}function fe(P,x,k,V,Y,se){let ue=r.convert(k.format,k.colorSpace),$=r.convert(k.type),ne=v(k.internalFormat,ue,$,k.normalized,k.colorSpace),de=n.get(x),ve=n.get(k);if(ve.__renderTarget=x,!de.__hasExternalTextures){let me=Math.max(1,x.width>>se),pe=Math.max(1,x.height>>se);Y===i.TEXTURE_3D||Y===i.TEXTURE_2D_ARRAY?t.texImage3D(Y,se,ne,me,pe,x.depth,0,ue,$,null):t.texImage2D(Y,se,ne,me,pe,0,ue,$,null)}t.bindFramebuffer(i.FRAMEBUFFER,P),xt(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,V,Y,ve.__webglTexture,0,ut(x)):(Y===i.TEXTURE_2D||Y>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Y<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,V,Y,ve.__webglTexture,se),t.bindFramebuffer(i.FRAMEBUFFER,null)}function xe(P,x,k){if(i.bindRenderbuffer(i.RENDERBUFFER,P),x.depthBuffer){let V=x.depthTexture,Y=V&&V.isDepthTexture?V.type:null,se=b(x.stencilBuffer,Y),ue=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;xt(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ut(x),se,x.width,x.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,ut(x),se,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,se,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ue,i.RENDERBUFFER,P)}else{let V=x.textures;for(let Y=0;Y<V.length;Y++){let se=V[Y],ue=r.convert(se.format,se.colorSpace),$=r.convert(se.type),ne=v(se.internalFormat,ue,$,se.normalized,se.colorSpace);xt(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ut(x),ne,x.width,x.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,ut(x),ne,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,ne,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Je(P,x,k){let V=x.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,P),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Y=n.get(x.depthTexture);if(Y.__renderTarget=x,(!Y.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),V){if(Y.__webglInit===void 0&&(Y.__webglInit=!0,x.depthTexture.addEventListener("dispose",C)),Y.__webglTexture===void 0){Y.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),ke(i.TEXTURE_CUBE_MAP,x.depthTexture);let de=r.convert(x.depthTexture.format),ve=r.convert(x.depthTexture.type),me;x.depthTexture.format===Ci?me=i.DEPTH_COMPONENT24:x.depthTexture.format===As&&(me=i.DEPTH24_STENCIL8);for(let pe=0;pe<6;pe++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,me,x.width,x.height,0,de,ve,null)}}else B(x.depthTexture,0);let se=Y.__webglTexture,ue=ut(x),$=V?i.TEXTURE_CUBE_MAP_POSITIVE_X+k:i.TEXTURE_2D,ne=x.depthTexture.format===As?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(x.depthTexture.format===Ci)xt(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ne,$,se,0,ue):i.framebufferTexture2D(i.FRAMEBUFFER,ne,$,se,0);else if(x.depthTexture.format===As)xt(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ne,$,se,0,ue):i.framebufferTexture2D(i.FRAMEBUFFER,ne,$,se,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ve(P){let x=n.get(P),k=P.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==P.depthTexture){let V=P.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),V){let Y=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,V.removeEventListener("dispose",Y)};V.addEventListener("dispose",Y),x.__depthDisposeCallback=Y}x.__boundDepthTexture=V}if(P.depthTexture&&!x.__autoAllocateDepthBuffer)if(k)for(let V=0;V<6;V++)Je(x.__webglFramebuffer[V],P,V);else{let V=P.texture.mipmaps;V&&V.length>0?Je(x.__webglFramebuffer[0],P,0):Je(x.__webglFramebuffer,P,0)}else if(k){x.__webglDepthbuffer=[];for(let V=0;V<6;V++)if(t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[V]),x.__webglDepthbuffer[V]===void 0)x.__webglDepthbuffer[V]=i.createRenderbuffer(),xe(x.__webglDepthbuffer[V],P,!1);else{let Y=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,se=x.__webglDepthbuffer[V];i.bindRenderbuffer(i.RENDERBUFFER,se),i.framebufferRenderbuffer(i.FRAMEBUFFER,Y,i.RENDERBUFFER,se)}}else{let V=P.texture.mipmaps;if(V&&V.length>0?t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),xe(x.__webglDepthbuffer,P,!1);else{let Y=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,se=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,se),i.framebufferRenderbuffer(i.FRAMEBUFFER,Y,i.RENDERBUFFER,se)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ge(P,x,k){let V=n.get(P);x!==void 0&&fe(V.__webglFramebuffer,P,P.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),k!==void 0&&Ve(P)}function Xe(P){let x=P.texture,k=n.get(P),V=n.get(x);P.addEventListener("dispose",p);let Y=P.textures,se=P.isWebGLCubeRenderTarget===!0,ue=Y.length>1;if(ue||(V.__webglTexture===void 0&&(V.__webglTexture=i.createTexture()),V.__version=x.version,a.memory.textures++),se){k.__webglFramebuffer=[];for(let $=0;$<6;$++)if(x.mipmaps&&x.mipmaps.length>0){k.__webglFramebuffer[$]=[];for(let ne=0;ne<x.mipmaps.length;ne++)k.__webglFramebuffer[$][ne]=i.createFramebuffer()}else k.__webglFramebuffer[$]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){k.__webglFramebuffer=[];for(let $=0;$<x.mipmaps.length;$++)k.__webglFramebuffer[$]=i.createFramebuffer()}else k.__webglFramebuffer=i.createFramebuffer();if(ue)for(let $=0,ne=Y.length;$<ne;$++){let de=n.get(Y[$]);de.__webglTexture===void 0&&(de.__webglTexture=i.createTexture(),a.memory.textures++)}if(P.samples>0&&xt(P)===!1){k.__webglMultisampledFramebuffer=i.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let $=0;$<Y.length;$++){let ne=Y[$];k.__webglColorRenderbuffer[$]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,k.__webglColorRenderbuffer[$]);let de=r.convert(ne.format,ne.colorSpace),ve=r.convert(ne.type),me=v(ne.internalFormat,de,ve,ne.normalized,ne.colorSpace,P.isXRRenderTarget===!0),pe=ut(P);i.renderbufferStorageMultisample(i.RENDERBUFFER,pe,me,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+$,i.RENDERBUFFER,k.__webglColorRenderbuffer[$])}i.bindRenderbuffer(i.RENDERBUFFER,null),P.depthBuffer&&(k.__webglDepthRenderbuffer=i.createRenderbuffer(),xe(k.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(se){t.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture),ke(i.TEXTURE_CUBE_MAP,x);for(let $=0;$<6;$++)if(x.mipmaps&&x.mipmaps.length>0)for(let ne=0;ne<x.mipmaps.length;ne++)fe(k.__webglFramebuffer[$][ne],P,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ne);else fe(k.__webglFramebuffer[$],P,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0);m(x)&&M(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ue){for(let $=0,ne=Y.length;$<ne;$++){let de=Y[$],ve=n.get(de),me=i.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(me=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(me,ve.__webglTexture),ke(me,de),fe(k.__webglFramebuffer,P,de,i.COLOR_ATTACHMENT0+$,me,0),m(de)&&M(me)}t.unbindTexture()}else{let $=i.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&($=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture($,V.__webglTexture),ke($,x),x.mipmaps&&x.mipmaps.length>0)for(let ne=0;ne<x.mipmaps.length;ne++)fe(k.__webglFramebuffer[ne],P,x,i.COLOR_ATTACHMENT0,$,ne);else fe(k.__webglFramebuffer,P,x,i.COLOR_ATTACHMENT0,$,0);m(x)&&M($),t.unbindTexture()}P.depthBuffer&&Ve(P)}function He(P){let x=P.textures;for(let k=0,V=x.length;k<V;k++){let Y=x[k];if(m(Y)){let se=A(P),ue=n.get(Y).__webglTexture;t.bindTexture(se,ue),M(se),t.unbindTexture()}}}let pt=[],rt=[];function mt(P){if(P.samples>0){if(xt(P)===!1){let x=P.textures,k=P.width,V=P.height,Y=i.COLOR_BUFFER_BIT,se=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ue=n.get(P),$=x.length>1;if($)for(let de=0;de<x.length;de++)t.bindFramebuffer(i.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ue.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ue.__webglMultisampledFramebuffer);let ne=P.texture.mipmaps;ne&&ne.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ue.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ue.__webglFramebuffer);for(let de=0;de<x.length;de++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(Y|=i.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(Y|=i.STENCIL_BUFFER_BIT)),$){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ue.__webglColorRenderbuffer[de]);let ve=n.get(x[de]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ve,0)}i.blitFramebuffer(0,0,k,V,0,0,k,V,Y,i.NEAREST),l===!0&&(pt.length=0,rt.length=0,pt.push(i.COLOR_ATTACHMENT0+de),P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&(pt.push(se),rt.push(se),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,rt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,pt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),$)for(let de=0;de<x.length;de++){t.bindFramebuffer(i.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.RENDERBUFFER,ue.__webglColorRenderbuffer[de]);let ve=n.get(x[de]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ue.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.TEXTURE_2D,ve,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ue.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&l){let x=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function ut(P){return Math.min(s.maxSamples,P.samples)}function xt(P){let x=n.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function X(P){let x=a.render.frame;u.get(P)!==x&&(u.set(P,x),P.update())}function sn(P,x){let k=P.colorSpace,V=P.format,Y=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||k!==Pn&&k!==Si&&(st.getTransfer(k)===yt?(V!==Xn||Y!==Fn)&&Be("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):We("WebGLTextures: Unsupported texture color space:",k)),x}function _t(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=G,this.getTextureUnits=w,this.setTextureUnits=D,this.setTexture2D=B,this.setTexture2DArray=R,this.setTexture3D=F,this.setTextureCube=W,this.rebindTextures=Ge,this.setupRenderTarget=Xe,this.updateRenderTargetMipmap=He,this.updateMultisampleRenderTarget=mt,this.setupDepthRenderbuffer=Ve,this.setupFrameBufferTexture=fe,this.useMultisampledRTT=xt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function lM(i,e){function t(n,s=Si){let r,a=st.getTransfer(s);if(n===Fn)return i.UNSIGNED_BYTE;if(n===Jl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===jl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===hh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===dh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===ch)return i.BYTE;if(n===uh)return i.SHORT;if(n===Qr)return i.UNSIGNED_SHORT;if(n===Zl)return i.INT;if(n===Mi)return i.UNSIGNED_INT;if(n===Wn)return i.FLOAT;if(n===un)return i.HALF_FLOAT;if(n===fh)return i.ALPHA;if(n===ph)return i.RGB;if(n===Xn)return i.RGBA;if(n===Ci)return i.DEPTH_COMPONENT;if(n===As)return i.DEPTH_STENCIL;if(n===Ql)return i.RED;if(n===ec)return i.RED_INTEGER;if(n===Rs)return i.RG;if(n===tc)return i.RG_INTEGER;if(n===nc)return i.RGBA_INTEGER;if(n===ho||n===fo||n===po||n===mo)if(a===yt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ho)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===fo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===po)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===mo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ho)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===fo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===po)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===mo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ic||n===sc||n===rc||n===ac)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ic)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===sc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===rc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ac)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===oc||n===lc||n===cc||n===uc||n===hc||n===go||n===dc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===oc||n===lc)return a===yt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===cc)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===uc)return r.COMPRESSED_R11_EAC;if(n===hc)return r.COMPRESSED_SIGNED_R11_EAC;if(n===go)return r.COMPRESSED_RG11_EAC;if(n===dc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===fc||n===pc||n===mc||n===gc||n===xc||n===_c||n===vc||n===yc||n===Mc||n===Sc||n===bc||n===Ec||n===Tc||n===wc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===fc)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===pc)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===mc)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===gc)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===xc)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===_c)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===vc)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===yc)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Mc)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Sc)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===bc)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ec)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Tc)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===wc)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ac||n===Rc||n===Cc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Ac)return a===yt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Rc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Cc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Pc||n===Ic||n===xo||n===Lc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Pc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ic)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===xo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Lc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ea?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var cM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,uM=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,zh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new qa(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new ft({vertexShader:cM,fragmentShader:uM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ae(new ts(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Vh=class extends Pi{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,d=null,f=null,_=null,y=typeof XRWebGLBinding<"u",g=new zh,m={},M=t.getContextAttributes(),A=null,v=null,b=[],S=[],C=new Se,p=null,E=null,L=new Vt;L.viewport=new Rt;let z=new Vt;z.viewport=new Rt;let O=[L,z],G=new Wl,w=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let ee=b[Q];return ee===void 0&&(ee=new Vr,b[Q]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(Q){let ee=b[Q];return ee===void 0&&(ee=new Vr,b[Q]=ee),ee.getGripSpace()},this.getHand=function(Q){let ee=b[Q];return ee===void 0&&(ee=new Vr,b[Q]=ee),ee.getHandSpace()};function H(Q){let ee=S.indexOf(Q.inputSource);if(ee===-1)return;let he=b[ee];he!==void 0&&(he.update(Q.inputSource,Q.frame,c||a),he.dispatchEvent({type:Q.type,data:Q.inputSource}))}function N(){s.removeEventListener("select",H),s.removeEventListener("selectstart",H),s.removeEventListener("selectend",H),s.removeEventListener("squeeze",H),s.removeEventListener("squeezestart",H),s.removeEventListener("squeezeend",H),s.removeEventListener("end",N),s.removeEventListener("inputsourceschange",B);for(let Q=0;Q<b.length;Q++){let ee=S[Q];ee!==null&&(S[Q]=null,b[Q].disconnect(ee))}w=null,D=null,g.reset();for(let Q in m)delete m[Q];if(e.setRenderTarget(A),f=null,d=null,h=null,s=null,v=null,Ce.stop(),n.isPresenting=!1,e.setPixelRatio(p),e.setSize(C.width,C.height,!1),E!==null){let Q=E.camera;Q.fov=E.fov,Q.zoom=E.zoom,Q.updateProjectionMatrix(),E=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){r=Q,n.isPresenting===!0&&Be("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){o=Q,n.isPresenting===!0&&Be("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Q){c=Q},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h===null&&y&&(h=new XRWebGLBinding(s,t)),h},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(Q){if(s=Q,s!==null){if(A=e.getRenderTarget(),s.addEventListener("select",H),s.addEventListener("selectstart",H),s.addEventListener("selectend",H),s.addEventListener("squeeze",H),s.addEventListener("squeezestart",H),s.addEventListener("squeezeend",H),s.addEventListener("end",N),s.addEventListener("inputsourceschange",B),M.xrCompatible!==!0&&await t.makeXRCompatible(),p=e.getPixelRatio(),e.getSize(C),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let he=null,Z=null,fe=null;M.depth&&(fe=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,he=M.stencil?As:Ci,Z=M.stencil?ea:Mi);let xe={colorFormat:t.RGBA8,depthFormat:fe,scaleFactor:r};h=this.getBinding(),d=h.createProjectionLayer(xe),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),v=new $t(d.textureWidth,d.textureHeight,{format:Xn,type:Fn,depthTexture:new bs(d.textureWidth,d.textureHeight,Z,void 0,void 0,void 0,void 0,void 0,void 0,he),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let he={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,he),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new $t(f.framebufferWidth,f.framebufferHeight,{format:Xn,type:Fn,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Ce.setContext(s),Ce.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function B(Q){for(let ee=0;ee<Q.removed.length;ee++){let he=Q.removed[ee],Z=S.indexOf(he);Z>=0&&(S[Z]=null,b[Z].disconnect(he))}for(let ee=0;ee<Q.added.length;ee++){let he=Q.added[ee],Z=S.indexOf(he);if(Z===-1){for(let xe=0;xe<b.length;xe++)if(xe>=S.length){S.push(he),Z=xe;break}else if(S[xe]===null){S[xe]=he,Z=xe;break}if(Z===-1)break}let fe=b[Z];fe&&fe.connect(he)}}let R=new I,F=new I;function W(Q,ee,he){R.setFromMatrixPosition(ee.matrixWorld),F.setFromMatrixPosition(he.matrixWorld);let Z=R.distanceTo(F),fe=ee.projectionMatrix.elements,xe=he.projectionMatrix.elements,Je=fe[14]/(fe[10]-1),Ve=fe[14]/(fe[10]+1),Ge=(fe[9]+1)/fe[5],Xe=(fe[9]-1)/fe[5],He=(fe[8]-1)/fe[0],pt=(xe[8]+1)/xe[0],rt=Je*He,mt=Je*pt,ut=Z/(-He+pt),xt=ut*-He;if(ee.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(xt),Q.translateZ(ut),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),fe[10]===-1)Q.projectionMatrix.copy(ee.projectionMatrix),Q.projectionMatrixInverse.copy(ee.projectionMatrixInverse);else{let X=Je+ut,sn=Ve+ut,_t=rt-xt,P=mt+(Z-xt),x=Ge*Ve/sn*X,k=Xe*Ve/sn*X;Q.projectionMatrix.makePerspective(_t,P,x,k,X,sn),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function le(Q,ee){ee===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(ee.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(s===null)return;let ee=Q.near,he=Q.far;g.texture!==null&&(g.depthNear>0&&(ee=g.depthNear),g.depthFar>0&&(he=g.depthFar)),G.near=z.near=L.near=ee,G.far=z.far=L.far=he,(w!==G.near||D!==G.far)&&(s.updateRenderState({depthNear:G.near,depthFar:G.far}),w=G.near,D=G.far),G.layers.mask=Q.layers.mask|6,L.layers.mask=G.layers.mask&-5,z.layers.mask=G.layers.mask&-3;let Z=Q.parent,fe=G.cameras;le(G,Z);for(let xe=0;xe<fe.length;xe++)le(fe[xe],Z);fe.length===2?W(G,L,z):G.projectionMatrix.copy(L.projectionMatrix),E===null&&Q.isPerspectiveCamera&&(E={camera:Q,fov:Q.fov,zoom:Q.zoom}),ie(Q,G,Z)};function ie(Q,ee,he){he===null?Q.matrix.copy(ee.matrixWorld):(Q.matrix.copy(he.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(ee.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(ee.projectionMatrix),Q.projectionMatrixInverse.copy(ee.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=qs*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return G},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(Q){l=Q,d!==null&&(d.fixedFoveation=Q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Q)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(G)},this.getCameraTexture=function(Q){return m[Q]};let Le=null;function ke(Q,ee){if(u=ee.getViewerPose(c||a),_=ee,u!==null){let he=u.views;f!==null&&(e.setRenderTargetFramebuffer(v,f.framebuffer),e.setRenderTarget(v));let Z=!1;he.length!==G.cameras.length&&(G.cameras.length=0,Z=!0);for(let Ve=0;Ve<he.length;Ve++){let Ge=he[Ve],Xe=null;if(f!==null)Xe=f.getViewport(Ge);else{let pt=h.getViewSubImage(d,Ge);Xe=pt.viewport,Ve===0&&(e.setRenderTargetTextures(v,pt.colorTexture,pt.depthStencilTexture),e.setRenderTarget(v))}let He=O[Ve];He===void 0&&(He=new Vt,He.layers.enable(Ve),He.viewport=new Rt,O[Ve]=He),He.matrix.fromArray(Ge.transform.matrix),He.matrix.decompose(He.position,He.quaternion,He.scale),He.projectionMatrix.fromArray(Ge.projectionMatrix),He.projectionMatrixInverse.copy(He.projectionMatrix).invert(),He.viewport.set(Xe.x,Xe.y,Xe.width,Xe.height),Ve===0&&(G.matrix.copy(He.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale)),Z===!0&&G.cameras.push(He)}let fe=s.enabledFeatures;if(fe&&fe.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){h=n.getBinding();let Ve=h.getDepthInformation(he[0]);Ve&&Ve.isValid&&Ve.texture&&g.init(Ve,s.renderState)}if(fe&&fe.includes("camera-access")&&y){e.state.unbindTexture(),h=n.getBinding();for(let Ve=0;Ve<he.length;Ve++){let Ge=he[Ve].camera;if(Ge){let Xe=m[Ge];Xe||(Xe=new qa,m[Ge]=Xe);let He=h.getCameraImage(Ge);Xe.sourceTexture=He}}}}for(let he=0;he<b.length;he++){let Z=S[he],fe=b[he];Z!==null&&fe!==void 0&&fe.update(Z,ee,c||a)}Le&&Le(Q,ee),ee.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ee}),_=null}let Ce=new jp;Ce.setAnimationLoop(ke),this.setAnimationLoop=function(Q){Le=Q},this.dispose=function(){}}},hM=new Ke,sm=new Ze;sm.set(-1,0,0,0,1,0,0,0,1);function dM(i,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,vh(i)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function s(g,m,M,A,v){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(g,m):m.isMeshLambertMaterial?(r(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(g,m),h(g,m)):m.isMeshPhongMaterial?(r(g,m),u(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(g,m),d(g,m),m.isMeshPhysicalMaterial&&f(g,m,v)):m.isMeshMatcapMaterial?(r(g,m),_(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),y(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(a(g,m),m.isLineDashedMaterial&&o(g,m)):m.isPointsMaterial?l(g,m,M,A):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===kt&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===kt&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let M=e.get(m),A=M.envMap,v=M.envMapRotation;A&&(g.envMap.value=A,g.envMapRotation.value.setFromMatrix4(hM.makeRotationFromEuler(v)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(sm),g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function a(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function o(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,M,A){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*M,g.scale.value=A*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function u(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function h(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function d(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function f(g,m,M){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===kt&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.retroreflectivity>0&&(g.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=M.texture,g.transmissionSamplerSize.value.set(M.width,M.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function _(g,m){m.matcap&&(g.matcap.value=m.matcap)}function y(g,m){let M=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(M.matrixWorld),g.nearDistance.value=M.shadow.camera.near,g.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function fM(i,e,t,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,b){let S=b.program;n.uniformBlockBinding(v,S)}function c(v,b){let S=s[v.id];S===void 0&&(g(v),S=u(v),s[v.id]=S,v.addEventListener("dispose",M));let C=b.program;n.updateUBOMapping(v,C);let p=e.render.frame;r[v.id]!==p&&(d(v),r[v.id]=p)}function u(v){let b=h();v.__bindingPointIndex=b;let S=i.createBuffer(),C=v.__size,p=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,C,p),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,S),S}function h(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return We("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){let b=s[v.id],S=v.uniforms,C=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let p=0,E=S.length;p<E;p++){let L=S[p];if(Array.isArray(L))for(let z=0,O=L.length;z<O;z++)f(L[z],p,z,C);else f(L,p,0,C)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(v,b,S,C){if(y(v,b,S,C)===!0){let p=v.__offset,E=v.value;if(Array.isArray(E)){let L=0;for(let z=0;z<E.length;z++){let O=E[z],G=m(O);_(O,v.__data,L),typeof O!="number"&&typeof O!="boolean"&&!O.isMatrix3&&!ArrayBuffer.isView(O)&&(L+=G.storage/Float32Array.BYTES_PER_ELEMENT)}}else _(E,v.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,p,v.__data)}}function _(v,b,S){typeof v=="number"||typeof v=="boolean"?b[0]=v:v.isMatrix3?(b[0]=v.elements[0],b[1]=v.elements[1],b[2]=v.elements[2],b[3]=0,b[4]=v.elements[3],b[5]=v.elements[4],b[6]=v.elements[5],b[7]=0,b[8]=v.elements[6],b[9]=v.elements[7],b[10]=v.elements[8],b[11]=0):ArrayBuffer.isView(v)?b.set(new v.constructor(v.buffer,v.byteOffset,b.length)):v.toArray(b,S)}function y(v,b,S,C){let p=v.value,E=b+"_"+S;if(C[E]===void 0)return typeof p=="number"||typeof p=="boolean"?C[E]=p:ArrayBuffer.isView(p)?C[E]=p.slice():C[E]=p.clone(),!0;{let L=C[E];if(typeof p=="number"||typeof p=="boolean"){if(L!==p)return C[E]=p,!0}else{if(ArrayBuffer.isView(p))return!0;if(L.equals(p)===!1)return L.copy(p),!0}}return!1}function g(v){let b=v.uniforms,S=0,C=16;for(let E=0,L=b.length;E<L;E++){let z=Array.isArray(b[E])?b[E]:[b[E]];for(let O=0,G=z.length;O<G;O++){let w=z[O],D=Array.isArray(w.value)?w.value:[w.value];for(let H=0,N=D.length;H<N;H++){let B=D[H],R=m(B),F=S%C,W=F%R.boundary,le=F+W;S+=W,le!==0&&C-le<R.storage&&(S+=C-le),w.__data=new Float32Array(R.storage/Float32Array.BYTES_PER_ELEMENT),w.__offset=S,S+=R.storage}}}let p=S%C;return p>0&&(S+=C-p),v.__size=S,v.__cache={},this}function m(v){let b={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(b.boundary=4,b.storage=4):v.isVector2?(b.boundary=8,b.storage=8):v.isVector3||v.isColor?(b.boundary=16,b.storage=12):v.isVector4?(b.boundary=16,b.storage=16):v.isMatrix3?(b.boundary=48,b.storage=48):v.isMatrix4?(b.boundary=64,b.storage=64):v.isTexture?Be("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(b.boundary=16,b.storage=v.byteLength):Be("WebGLRenderer: Unsupported uniform value type.",v),b}function M(v){let b=v.target;b.removeEventListener("dispose",M);let S=a.indexOf(b.__bindingPointIndex);a.splice(S,1),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function A(){for(let v in s)i.deleteBuffer(s[v]);a=[],s={},r={}}return{bind:l,update:c,dispose:A}}var pM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Oi=null;function mM(){return Oi===null&&(Oi=new Wr(pM,16,16,Rs,un),Oi.name="DFG_LUT",Oi.minFilter=Qt,Oi.magFilter=Qt,Oi.wrapS=Qn,Oi.wrapT=Qn,Oi.generateMipmaps=!1,Oi.needsUpdate=!0),Oi}var Bc=class{constructor(e={}){let{canvas:t=bp(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1,outputBufferType:f=Fn}=e;this.isWebGLRenderer=!0;let _;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=n.getContextAttributes().alpha}else _=a;let y=f,g=new Set([nc,tc,ec]),m=new Set([Fn,Mi,Qr,ea,Jl,jl]),M=new Uint32Array(4),A=new Int32Array(4),v=new I,b=null,S=null,C=[],p=[],E=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=vi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let L=this,z=!1,O=null,G=null,w=null,D=null;this._outputColorSpace=At;let H=0,N=0,B=null,R=-1,F=null,W=new Rt,le=new Rt,ie=null,Le=new oe(0),ke=0,Ce=t.width,Q=t.height,ee=1,he=null,Z=null,fe=new Rt(0,0,Ce,Q),xe=new Rt(0,0,Ce,Q),Je=!1,Ve=new Xr,Ge=!1,Xe=!1,He=new Ke,pt=new I,rt=new Rt,mt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ut=!1;function xt(){return B===null?ee:1}let X=n;function sn(T,q){return t.getContext(T,q)}let _t,P,x,k,V,Y,se,ue,$,ne,de,ve,me,pe,Ae,Ue,je,K,ge,re,_e,ye,ce;try{let T={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",Pt,!1),t.addEventListener("webglcontextrestored",ze,!1),t.addEventListener("webglcontextcreationerror",rn,!1),X===null){let q="webgl2";if(X=sn(q,T),X===null)throw sn(q)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Fe()}catch(T){throw t.removeEventListener("webglcontextlost",Pt,!1),t.removeEventListener("webglcontextrestored",ze,!1),t.removeEventListener("webglcontextcreationerror",rn,!1),We("WebGLRenderer: "+T.message),T}function Fe(){_t=new Sv(X),_t.init(),_e=new lM(X,_t),P=new dv(X,_t,e,_e),x=new aM(X,_t),P.reversedDepthBuffer&&d&&x.buffers.depth.setReversed(!0),G=X.createFramebuffer(),w=X.createFramebuffer(),D=X.createFramebuffer(),k=new Tv(X),V=new qy,Y=new oM(X,_t,x,V,P,_e,k),se=new Mv(L),ue=new Ag(X),ye=new uv(X,ue),$=new bv(X,ue,k,ye),ne=new Av(X,$,ue,ye,k),K=new wv(X,P,Y),Ae=new fv(V),de=new Xy(L,se,_t,P,ye,Ae),ve=new dM(L,V),me=new $y,pe=new eM(_t),je=new cv(L,se,x,ne,_,l),Ue=new rM(L,ne,P),ce=new fM(X,k,P,x),ge=new hv(X,_t,k),re=new Ev(X,_t,k),k.programs=de.programs,L.capabilities=P,L.extensions=_t,L.properties=V,L.renderLists=me,L.shadowMap=Ue,L.state=x,L.info=k}y!==Fn&&(E=new Cv(y,t.width,t.height,o,s,r));let Ie=new Vh(L,X);this.xr=Ie,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){let T=_t.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=_t.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return ee},this.setPixelRatio=function(T){T!==void 0&&(ee=T,this.setSize(Ce,Q,!1))},this.getSize=function(T){return T.set(Ce,Q)},this.setSize=function(T,q,te=!0){if(Ie.isPresenting){Be("WebGLRenderer: Can't change size while VR device is presenting.");return}Ce=T,Q=q,t.width=Math.floor(T*ee),t.height=Math.floor(q*ee),te===!0&&(t.style.width=T+"px",t.style.height=q+"px"),E!==null&&E.setSize(t.width,t.height),this.setViewport(0,0,T,q)},this.getDrawingBufferSize=function(T){return T.set(Ce*ee,Q*ee).floor()},this.setDrawingBufferSize=function(T,q,te){Ce=T,Q=q,ee=te,t.width=Math.floor(T*te),t.height=Math.floor(q*te),this.setViewport(0,0,T,q)},this.setEffects=function(T){if(y===Fn){We("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let q=0;q<T.length;q++)if(T[q].isOutputPass===!0){Be("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(W)},this.getViewport=function(T){return T.copy(fe)},this.setViewport=function(T,q,te,J){T.isVector4?fe.set(T.x,T.y,T.z,T.w):fe.set(T,q,te,J),x.viewport(W.copy(fe).multiplyScalar(ee).round())},this.getScissor=function(T){return T.copy(xe)},this.setScissor=function(T,q,te,J){T.isVector4?xe.set(T.x,T.y,T.z,T.w):xe.set(T,q,te,J),x.scissor(le.copy(xe).multiplyScalar(ee).round())},this.getScissorTest=function(){return Je},this.setScissorTest=function(T){x.setScissorTest(Je=T)},this.setOpaqueSort=function(T){he=T},this.setTransparentSort=function(T){Z=T},this.getClearColor=function(T){return T.copy(je.getClearColor())},this.setClearColor=function(){je.setClearColor(...arguments)},this.getClearAlpha=function(){return je.getClearAlpha()},this.setClearAlpha=function(){je.setClearAlpha(...arguments)},this.clear=function(T=!0,q=!0,te=!0){let J=0;if(T){let j=!1;if(B!==null){let we=B.texture.format;j=g.has(we)}if(j){let we=B.texture.type,Pe=m.has(we),Te=je.getClearColor(),Ne=je.getClearAlpha(),Oe=Te.r,at=Te.g,dt=Te.b;Pe?(M[0]=Oe,M[1]=at,M[2]=dt,M[3]=Ne,X.clearBufferuiv(X.COLOR,0,M)):(A[0]=Oe,A[1]=at,A[2]=dt,A[3]=Ne,X.clearBufferiv(X.COLOR,0,A))}else J|=X.COLOR_BUFFER_BIT}q&&(J|=X.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),te&&(J|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),J!==0&&X.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),O=T},this.dispose=function(){t.removeEventListener("webglcontextlost",Pt,!1),t.removeEventListener("webglcontextrestored",ze,!1),t.removeEventListener("webglcontextcreationerror",rn,!1),je.dispose(),me.dispose(),pe.dispose(),V.dispose(),se.dispose(),ne.dispose(),ye.dispose(),ce.dispose(),de.dispose(),Ie.dispose(),Ie.removeEventListener("sessionstart",qd),Ie.removeEventListener("sessionend",Yd),Bs.stop()};function Pt(T){T.preventDefault(),Oa("WebGLRenderer: Context Lost."),z=!0}function ze(){Oa("WebGLRenderer: Context Restored."),z=!1;let T=k.autoReset,q=Ue.enabled,te=Ue.autoUpdate,J=Ue.needsUpdate,j=Ue.type;Fe(),k.autoReset=T,Ue.enabled=q,Ue.autoUpdate=te,Ue.needsUpdate=J,Ue.type=j}function rn(T){We("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function xn(T){let q=T.target;q.removeEventListener("dispose",xn),Bo(q)}function Bo(T){ko(T),V.remove(T)}function ko(T){let q=V.get(T).programs;q!==void 0&&(q.forEach(function(te){de.releaseProgram(te)}),T.isShaderMaterial&&de.releaseShaderCache(T))}this.renderBufferDirect=function(T,q,te,J,j,we){q===null&&(q=mt);let Pe=j.isMesh&&j.matrixWorld.determinantAffine()<0,Te=m0(T,q,te,J,j);x.setMaterial(J,Pe);let Ne=te.index,Oe=1;if(J.wireframe===!0){if(Ne=$.getWireframeAttribute(te),Ne===void 0)return;Oe=2}let at=te.drawRange,dt=te.attributes.position,De=at.start*Oe,St=(at.start+at.count)*Oe;we!==null&&(De=Math.max(De,we.start*Oe),St=Math.min(St,(we.start+we.count)*Oe)),Ne!==null?(De=Math.max(De,0),St=Math.min(St,Ne.count)):dt!=null&&(De=Math.max(De,0),St=Math.min(St,dt.count));let an=St-De;if(an<0||an===1/0)return;ye.setup(j,J,Te,te,Ne);let zt,Nt=ge;if(Ne!==null&&(zt=ue.get(Ne),Nt=re,Nt.setIndex(zt)),j.isMesh)J.wireframe===!0?(x.setLineWidth(J.wireframeLinewidth*xt()),Nt.setMode(X.LINES)):Nt.setMode(X.TRIANGLES);else if(j.isLine){let Mn=J.linewidth;Mn===void 0&&(Mn=1),x.setLineWidth(Mn*xt()),j.isLineSegments?Nt.setMode(X.LINES):j.isLineLoop?Nt.setMode(X.LINE_LOOP):Nt.setMode(X.LINE_STRIP)}else j.isPoints?Nt.setMode(X.POINTS):j.isSprite&&Nt.setMode(X.TRIANGLES);if(j.isBatchedMesh)if(_t.get("WEBGL_multi_draw"))Nt.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{let Mn=j._multiDrawStarts,Re=j._multiDrawCounts,Rn=j._multiDrawCount,vt=Ne?ue.get(Ne).bytesPerElement:1,Jn=V.get(J).currentProgram.getUniforms();for(let wi=0;wi<Rn;wi++)Jn.setValue(X,"_gl_DrawID",wi),Nt.render(Mn[wi]/vt,Re[wi])}else if(j.isInstancedMesh)Nt.renderInstances(De,an,j.count);else if(te.isInstancedBufferGeometry){let Mn=te._maxInstanceCount!==void 0?te._maxInstanceCount:1/0,Re=Math.min(te.instanceCount,Mn);Nt.renderInstances(De,an,Re)}else Nt.render(De,an)};function Xd(T,q,te,J){O!==null&&T.isNodeMaterial&&O.setObject(J,T),Ge===!0&&Ae.setState(T,te,!1),T.transparent===!0&&T.side===Ht&&T.forceSinglePass===!1?(T.side=kt,T.needsUpdate=!0,zo(T,q,J),T.side=Fi,T.needsUpdate=!0,zo(T,q,J),T.side=Ht):zo(T,q,J)}this.compile=function(T,q,te=null){te===null&&(te=T),O!==null&&O.renderStart(T,q,te),S=pe.get(te),S.init(q),p.push(S),te.traverseVisible(function(j){j.isLight&&j.layers.test(q.layers)&&(S.pushLight(j),j.castShadow&&S.pushShadow(j))}),T!==te&&T.traverseVisible(function(j){j.isLight&&j.layers.test(q.layers)&&(S.pushLight(j),j.castShadow&&S.pushShadow(j))}),S.setupLights(),O!==null&&O.updateLights(S.state.lightsArray),Xe=this.localClippingEnabled,Ge=Ae.init(this.clippingPlanes,Xe),Ge===!0&&Ae.setGlobalState(this.clippingPlanes,q),O!==null&&Ue.render(S.state.shadowsArray,te,q);let J=new Set;return T.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;let we=j.material;if(we)if(Array.isArray(we))for(let Pe=0;Pe<we.length;Pe++){let Te=we[Pe];Xd(Te,te,q,j),J.add(Te)}else Xd(we,te,q,j),J.add(we)}),S=p.pop(),O!==null&&O.renderEnd(),J},this.compileAsync=function(T,q,te=null){let J=this.compile(T,q,te);return new Promise(j=>{function we(){if(J.forEach(function(Pe){let Ne=V.get(Pe).currentProgram;(Ne===void 0||Ne.isReady())&&J.delete(Pe)}),J.size===0){j(T);return}setTimeout(we,10)}_t.get("KHR_parallel_shader_compile")!==null?we():setTimeout(we,10)})};let gu=null;function f0(T){gu&&gu(T)}function qd(){Bs.stop()}function Yd(){Bs.start()}let Bs=new jp;Bs.setAnimationLoop(f0),typeof self<"u"&&Bs.setContext(self),this.setAnimationLoop=function(T){gu=T,Ie.setAnimationLoop(T),T===null?Bs.stop():Bs.start()},Ie.addEventListener("sessionstart",qd),Ie.addEventListener("sessionend",Yd),this.render=function(T,q){if(q!==void 0&&q.isCamera!==!0){We("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(z===!0)return;O!==null&&O.renderStart(T,q);let te=Ie.enabled===!0&&Ie.isPresenting===!0,J=E!==null&&(B===null||te)&&E.begin(L,B);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),Ie.enabled===!0&&Ie.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(Ie.cameraAutoUpdate===!0&&Ie.updateCamera(q),q=Ie.getCamera()),T.isScene===!0&&T.onBeforeRender(L,T,q,B),S=pe.get(T,p.length),S.init(q),S.state.textureUnits=Y.getTextureUnits(),p.push(S),He.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),Ve.setFromProjectionMatrix(He,mi,q.reversedDepth),Xe=this.localClippingEnabled,Ge=Ae.init(this.clippingPlanes,Xe),b=me.get(T,C.length),b.init(),C.push(b),Ie.enabled===!0&&Ie.isPresenting===!0){let Pe=L.xr.getDepthSensingMesh();Pe!==null&&xu(Pe,q,-1/0,L.sortObjects)}xu(T,q,0,L.sortObjects),b.finish(),O!==null&&O.updateLights(S.state.lightsArray),L.sortObjects===!0&&b.sort(he,Z),ut=Ie.enabled===!1||Ie.isPresenting===!1||Ie.hasDepthSensing()===!1,ut&&je.addToRenderList(b,T),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Ge===!0&&Ae.beginShadows();let j=S.state.shadowsArray;if(Ue.render(j,T,q),Ge===!0&&Ae.endShadows(),(J&&E.hasRenderPass())===!1){let Pe=b.opaque,Te=b.transmissive;if(S.setupLights(),q.isArrayCamera){let Ne=q.cameras;if(Te.length>0)for(let Oe=0,at=Ne.length;Oe<at;Oe++){let dt=Ne[Oe];Kd(Pe,Te,T,dt)}ut&&je.render(T);for(let Oe=0,at=Ne.length;Oe<at;Oe++){let dt=Ne[Oe];$d(b,T,dt,dt.viewport)}}else Te.length>0&&Kd(Pe,Te,T,q),ut&&je.render(T),$d(b,T,q)}B!==null&&N===0&&(Y.updateMultisampleRenderTarget(B),Y.updateRenderTargetMipmap(B)),J&&E.end(L),T.isScene===!0&&T.onAfterRender(L,T,q),ye.resetDefaultState(),R=-1,F=null,p.pop(),p.length>0?(S=p[p.length-1],Y.setTextureUnits(S.state.textureUnits),Ge===!0&&Ae.setGlobalState(L.clippingPlanes,S.state.camera)):S=null,C.pop(),C.length>0?b=C[C.length-1]:b=null,O!==null&&O.renderEnd()};function xu(T,q,te,J){if(T.visible===!1)return;if(T.layers.test(q.layers)){if(T.isGroup)te=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(q);else if(T.isLightProbeGrid)S.pushLightProbeGrid(T);else if(T.isLight)S.pushLight(T),T.castShadow&&S.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||T.intersectsFrustum(Ve)){J&&rt.setFromMatrixPosition(T.matrixWorld).applyMatrix4(He);let Pe=ne.update(T),Te=T.material;Te.visible&&b.push(T,Pe,Te,te,rt.z,null,q)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||T.intersectsFrustum(Ve))){let Pe=ne.update(T),Te=T.material;if(J&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),rt.copy(T.boundingSphere.center)):(Pe.boundingSphere===null&&Pe.computeBoundingSphere(),rt.copy(Pe.boundingSphere.center)),rt.applyMatrix4(T.matrixWorld).applyMatrix4(He)),Array.isArray(Te)){let Ne=Pe.groups;for(let Oe=0,at=Ne.length;Oe<at;Oe++){let dt=Ne[Oe],De=Te[dt.materialIndex];De&&De.visible&&b.push(T,Pe,De,te,rt.z,dt,q)}}else Te.visible&&b.push(T,Pe,Te,te,rt.z,null,q)}}let we=T.children;for(let Pe=0,Te=we.length;Pe<Te;Pe++)xu(we[Pe],q,te,J)}function $d(T,q,te,J){let{opaque:j,transmissive:we,transparent:Pe}=T;S.setupLightsView(te),Ge===!0&&Ae.setGlobalState(L.clippingPlanes,te),J&&x.viewport(W.copy(J)),j.length>0&&Ho(j,q,te),we.length>0&&Ho(we,q,te),Pe.length>0&&Ho(Pe,q,te),x.buffers.depth.setTest(!0),x.buffers.depth.setMask(!0),x.buffers.color.setMask(!0),x.setPolygonOffset(!1)}function Kd(T,q,te,J){if((te.isScene===!0?te.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[J.id]===void 0){let De=_t.has("EXT_color_buffer_half_float")||_t.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[J.id]=new $t(1,1,{generateMipmaps:!0,type:De?un:Fn,minFilter:yi,samples:Math.max(4,P.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:st.workingColorSpace})}let we=S.state.transmissionRenderTarget[J.id],Pe=J.viewport||W;we.setSize(Pe.z*L.transmissionResolutionScale,Pe.w*L.transmissionResolutionScale);let Te=L.getRenderTarget(),Ne=L.getActiveCubeFace(),Oe=L.getActiveMipmapLevel();L.setRenderTarget(we),L.getClearColor(Le),ke=L.getClearAlpha(),ke<1&&L.setClearColor(16777215,.5),L.clear(),ut&&je.render(te);let at=L.toneMapping;L.toneMapping=vi;let dt=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),S.setupLightsView(J),Ge===!0&&Ae.setGlobalState(L.clippingPlanes,J),Ho(T,te,J),Y.updateMultisampleRenderTarget(we),Y.updateRenderTargetMipmap(we),_t.has("WEBGL_multisampled_render_to_texture")===!1){let De=!1;for(let St=0,an=q.length;St<an;St++){let zt=q[St],{object:Nt,geometry:Mn,material:Re,group:Rn}=zt;if(Re.side===Ht&&Nt.layers.test(J.layers)){let vt=Re.side;Re.side=kt,Re.needsUpdate=!0,Zd(Nt,te,J,Mn,Re,Rn),Re.side=vt,Re.needsUpdate=!0,De=!0}}De===!0&&(Y.updateMultisampleRenderTarget(we),Y.updateRenderTargetMipmap(we))}L.setRenderTarget(Te,Ne,Oe),L.setClearColor(Le,ke),dt!==void 0&&(J.viewport=dt),L.toneMapping=at}function Ho(T,q,te){let J=q.isScene===!0?q.overrideMaterial:null;for(let j=0,we=T.length;j<we;j++){let Pe=T[j],{object:Te,geometry:Ne,group:Oe}=Pe,at=Pe.material;at.allowOverride===!0&&J!==null&&(at=J),Te.layers.test(te.layers)&&Zd(Te,q,te,Ne,at,Oe)}}function Zd(T,q,te,J,j,we){O!==null&&j.isNodeMaterial&&O.setObject(T,j),T.onBeforeRender(L,q,te,J,j,we),T.modelViewMatrix.multiplyMatrices(te.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),j.onBeforeRender(L,q,te,J,T,we),j.transparent===!0&&j.side===Ht&&j.forceSinglePass===!1?(j.side=kt,j.needsUpdate=!0,L.renderBufferDirect(te,q,J,j,T,we),j.side=Fi,j.needsUpdate=!0,L.renderBufferDirect(te,q,J,j,T,we),j.side=Ht):L.renderBufferDirect(te,q,J,j,T,we),T.onAfterRender(L,q,te,J,j,we)}function zo(T,q,te){q.isScene!==!0&&(q=mt);let J=V.get(T),j=S.state.lights,we=S.state.shadowsArray,Pe=j.state.version,Te=de.getParameters(T,j.state,we,q,te,S.state.lightProbeGridArray),Ne=de.getProgramCacheKey(Te),Oe=J.programs;J.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?q.environment:null,J.fog=q.fog;let at=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;J.envMap=se.get(T.envMap||J.environment,at),J.envMapRotation=J.environment!==null&&T.envMap===null?q.environmentRotation:T.envMapRotation,Oe===void 0&&(T.addEventListener("dispose",xn),Oe=new Map,J.programs=Oe);let dt=Oe.get(Ne);if(dt!==void 0){if(J.currentProgram===dt&&J.lightsStateVersion===Pe)return jd(T,Te),dt}else Te.uniforms=de.getUniforms(T),O!==null&&T.isNodeMaterial&&O.build(T,te,Te),T.onBeforeCompile(Te,L),dt=de.acquireProgram(Te,Ne),Oe.set(Ne,dt),J.uniforms=Te.uniforms;let De=J.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(De.clippingPlanes=Ae.uniform),jd(T,Te),J.needsLights=x0(T),J.lightsStateVersion=Pe,J.needsLights&&(De.ambientLightColor.value=j.state.ambient,De.lightProbe.value=j.state.probe,De.sunLights.value=j.state.sun,De.sunLightShadows.value=j.state.sunShadow,De.directionalLights.value=j.state.directional,De.directionalLightShadows.value=j.state.directionalShadow,De.spotLights.value=j.state.spot,De.spotLightShadows.value=j.state.spotShadow,De.rectAreaLights.value=j.state.rectArea,De.ltc_1.value=j.state.rectAreaLTC1,De.ltc_2.value=j.state.rectAreaLTC2,De.pointLights.value=j.state.point,De.pointLightShadows.value=j.state.pointShadow,De.hemisphereLights.value=j.state.hemi,De.sunShadowMatrix.value=j.state.sunShadowMatrix,De.sunShadowCascade.value=j.state.sunShadowCascade,De.directionalShadowMatrix.value=j.state.directionalShadowMatrix,De.spotLightMatrix.value=j.state.spotLightMatrix,De.spotLightMap.value=j.state.spotLightMap,De.pointShadowMatrix.value=j.state.pointShadowMatrix),J.lightProbeGrid=S.state.lightProbeGridArray.length>0,J.currentProgram=dt,J.uniformsList=null,dt}function Jd(T){if(T.uniformsList===null){let q=T.currentProgram.getUniforms();T.uniformsList=sa.seqWithValue(q.seq,T.uniforms)}return T.uniformsList}function jd(T,q){let te=V.get(T);te.outputColorSpace=q.outputColorSpace,te.batching=q.batching,te.batchingColor=q.batchingColor,te.instancing=q.instancing,te.instancingColor=q.instancingColor,te.instancingMorph=q.instancingMorph,te.skinning=q.skinning,te.morphTargets=q.morphTargets,te.morphNormals=q.morphNormals,te.morphColors=q.morphColors,te.morphTargetsCount=q.morphTargetsCount,te.numClippingPlanes=q.numClippingPlanes,te.numIntersection=q.numClipIntersection,te.vertexAlphas=q.vertexAlphas,te.vertexTangents=q.vertexTangents,te.toneMapping=q.toneMapping}function p0(T,q){if(T.length===0)return null;if(T.length===1)return T[0].texture!==null?T[0]:null;v.setFromMatrixPosition(q.matrixWorld);for(let te=0,J=T.length;te<J;te++){let j=T[te];if(j.texture!==null&&j.boundingBox.containsPoint(v))return j}return null}function m0(T,q,te,J,j){q.isScene!==!0&&(q=mt),Y.resetTextureUnits();let we=q.fog,Pe=J.isMeshStandardMaterial||J.isMeshLambertMaterial||J.isMeshPhongMaterial?q.environment:null,Te=B===null?L.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:st.workingColorSpace,Ne=J.isMeshStandardMaterial||J.isMeshLambertMaterial&&!J.envMap||J.isMeshPhongMaterial&&!J.envMap,Oe=se.get(J.envMap||Pe,Ne),at=J.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,dt=!!te.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),De=!!te.morphAttributes.position,St=!!te.morphAttributes.normal,an=!!te.morphAttributes.color,zt=vi;J.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(zt=L.toneMapping);let Nt=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,Mn=Nt!==void 0?Nt.length:0,Re=V.get(J),Rn=S.state.lights;if(Ge===!0&&(Xe===!0||T!==F)){let Bt=T===F&&J.id===R;Ae.setState(J,T,Bt)}let vt=!1;J.version===Re.__version?(Re.needsLights&&Re.lightsStateVersion!==Rn.state.version||Re.outputColorSpace!==Te||j.isBatchedMesh&&Re.batching===!1||!j.isBatchedMesh&&Re.batching===!0||j.isBatchedMesh&&Re.batchingColor===!0&&j._colorsTexture===null||j.isBatchedMesh&&Re.batchingColor===!1&&j._colorsTexture!==null||j.isInstancedMesh&&Re.instancing===!1||!j.isInstancedMesh&&Re.instancing===!0||j.isSkinnedMesh&&Re.skinning===!1||!j.isSkinnedMesh&&Re.skinning===!0||j.isInstancedMesh&&Re.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&Re.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&Re.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&Re.instancingMorph===!1&&j.morphTexture!==null||Re.envMap!==Oe||J.fog===!0&&Re.fog!==we||Re.numClippingPlanes!==void 0&&(Re.numClippingPlanes!==Ae.numPlanes||Re.numIntersection!==Ae.numIntersection)||Re.vertexAlphas!==at||Re.vertexTangents!==dt||Re.morphTargets!==De||Re.morphNormals!==St||Re.morphColors!==an||Re.toneMapping!==zt||Re.morphTargetsCount!==Mn||!!Re.lightProbeGrid!=S.state.lightProbeGridArray.length>0)&&(vt=!0):(vt=!0,Re.__version=J.version);let Jn=Re.currentProgram;vt===!0&&(Jn=zo(J,q,j),O&&J.isNodeMaterial&&O.onUpdateProgram(J,Jn,Re));let wi=!1,ds=!1,pr=!1,It=Jn.getUniforms(),Jt=Re.uniforms;if(x.useProgram(Jn.program)&&(wi=!0,ds=!0,pr=!0),J.id!==R&&(R=J.id,ds=!0),Re.needsLights){let Bt=p0(S.state.lightProbeGridArray,j);Re.lightProbeGrid!==Bt&&(Re.lightProbeGrid=Bt,ds=!0)}if(wi||F!==T){x.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),It.setValue(X,"projectionMatrix",T.projectionMatrix),It.setValue(X,"viewMatrix",T.matrixWorldInverse);let ps=It.map.cameraPosition;ps!==void 0&&ps.setValue(X,pt.setFromMatrixPosition(T.matrixWorld)),P.logarithmicDepthBuffer&&It.setValue(X,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&It.setValue(X,"isOrthographic",T.isOrthographicCamera===!0),F!==T&&(F=T,ds=!0,pr=!0)}if(Re.needsLights&&(Rn.state.sunShadowMap.length>0&&It.setValue(X,"sunShadowMap",Rn.state.sunShadowMap,Y),Rn.state.directionalShadowMap.length>0&&It.setValue(X,"directionalShadowMap",Rn.state.directionalShadowMap,Y),Rn.state.spotShadowMap.length>0&&It.setValue(X,"spotShadowMap",Rn.state.spotShadowMap,Y),Rn.state.pointShadowMap.length>0&&It.setValue(X,"pointShadowMap",Rn.state.pointShadowMap,Y)),j.isSkinnedMesh){It.setOptional(X,j,"bindMatrix"),It.setOptional(X,j,"bindMatrixInverse");let Bt=j.skeleton;Bt&&(Bt.boneTexture===null&&Bt.computeBoneTexture(),It.setValue(X,"boneTexture",Bt.boneTexture,Y))}j.isBatchedMesh&&(It.setOptional(X,j,"batchingTexture"),It.setValue(X,"batchingTexture",j._matricesTexture,Y),It.setOptional(X,j,"batchingIdTexture"),It.setValue(X,"batchingIdTexture",j._indirectTexture,Y),It.setOptional(X,j,"batchingColorTexture"),j._colorsTexture!==null&&It.setValue(X,"batchingColorTexture",j._colorsTexture,Y));let fs=te.morphAttributes;if((fs.position!==void 0||fs.normal!==void 0||fs.color!==void 0)&&K.update(j,te,Jn),(ds||Re.receiveShadow!==j.receiveShadow)&&(Re.receiveShadow=j.receiveShadow,It.setValue(X,"receiveShadow",j.receiveShadow)),(J.isMeshStandardMaterial||J.isMeshLambertMaterial||J.isMeshPhongMaterial)&&J.envMap===null&&q.environment!==null&&(Jt.envMapIntensity.value=q.environmentIntensity),Jt.dfgLUT!==void 0&&(Jt.dfgLUT.value=mM()),ds){if(It.setValue(X,"toneMappingExposure",L.toneMappingExposure),Re.needsLights&&g0(Jt,pr),we&&J.fog===!0&&ve.refreshFogUniforms(Jt,we),ve.refreshMaterialUniforms(Jt,J,ee,Q,S.state.transmissionRenderTarget[T.id]),Re.needsLights&&Re.lightProbeGrid){let Bt=Re.lightProbeGrid;Jt.probesSH.value=Bt.texture,Jt.probesMin.value.copy(Bt.boundingBox.min),Jt.probesMax.value.copy(Bt.boundingBox.max),Jt.probesResolution.value.copy(Bt.resolution)}sa.upload(X,Jd(Re),Jt,Y)}if(J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(sa.upload(X,Jd(Re),Jt,Y),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&It.setValue(X,"center",j.center),It.setValue(X,"modelViewMatrix",j.modelViewMatrix),It.setValue(X,"normalMatrix",j.normalMatrix),It.setValue(X,"modelMatrix",j.matrixWorld),J.uniformsGroups!==void 0){let Bt=J.uniformsGroups;for(let ps=0,mr=Bt.length;ps<mr;ps++){let ef=Bt[ps];ce.update(ef,Jn),ce.bind(ef,Jn)}}return Jn}function g0(T,q){T.ambientLightColor.needsUpdate=q,T.lightProbe.needsUpdate=q,T.sunLights.needsUpdate=q,T.sunLightShadows.needsUpdate=q,T.directionalLights.needsUpdate=q,T.directionalLightShadows.needsUpdate=q,T.pointLights.needsUpdate=q,T.pointLightShadows.needsUpdate=q,T.spotLights.needsUpdate=q,T.spotLightShadows.needsUpdate=q,T.rectAreaLights.needsUpdate=q,T.hemisphereLights.needsUpdate=q}function x0(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return B},this.setRenderTargetTextures=function(T,q,te){let J=V.get(T);J.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,J.__autoAllocateDepthBuffer===!1&&(J.__useRenderToTexture=!1),V.get(T.texture).__webglTexture=q,V.get(T.depthTexture).__webglTexture=J.__autoAllocateDepthBuffer?void 0:te,J.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,q){let te=V.get(T);te.__webglFramebuffer=q,te.__useDefaultFramebuffer=q===void 0},this.setRenderTarget=function(T,q=0,te=0){B=T,H=q,N=te;let J=null,j=!1,we=!1;if(T){let Te=V.get(T);if(Te.__useDefaultFramebuffer!==void 0){x.bindFramebuffer(X.FRAMEBUFFER,Te.__webglFramebuffer),W.copy(T.viewport),le.copy(T.scissor),ie=T.scissorTest,x.viewport(W),x.scissor(le),x.setScissorTest(ie),R=-1;return}else if(Te.__webglFramebuffer===void 0)Y.setupRenderTarget(T);else if(Te.__hasExternalTextures)Y.rebindTextures(T,V.get(T.texture).__webglTexture,V.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let at=T.depthTexture;if(Te.__boundDepthTexture!==at){if(at!==null&&V.has(at)&&(T.width!==at.image.width||T.height!==at.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Y.setupDepthRenderbuffer(T)}}let Ne=T.texture;(Ne.isData3DTexture||Ne.isDataArrayTexture||Ne.isCompressedArrayTexture)&&(we=!0);let Oe=V.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Oe[q])?J=Oe[q][te]:J=Oe[q],j=!0):T.samples>0&&Y.useMultisampledRTT(T)===!1?J=V.get(T).__webglMultisampledFramebuffer:Array.isArray(Oe)?J=Oe[te]:J=Oe,W.copy(T.viewport),le.copy(T.scissor),ie=T.scissorTest}else W.copy(fe).multiplyScalar(ee).floor(),le.copy(xe).multiplyScalar(ee).floor(),ie=Je;if(te!==0&&(J=G),x.bindFramebuffer(X.FRAMEBUFFER,J)&&x.drawBuffers(T,J),x.viewport(W),x.scissor(le),x.setScissorTest(ie),j){let Te=V.get(T.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+q,Te.__webglTexture,te)}else if(we){let Te=q;for(let Ne=0;Ne<T.textures.length;Ne++){let Oe=V.get(T.textures[Ne]);X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0+Ne,Oe.__webglTexture,te,Te)}}else if(T!==null&&te!==0){let Te=V.get(T.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,Te.__webglTexture,te)}R=-1};function Qd(T){let q=V.get(T);return(q.__readFormat!==T.format||q.__readType!==T.type)&&(q.__readFormat=T.format,q.__readType=T.type,q.__formatReadable=P.textureFormatReadable(T.format),q.__typeReadable=P.textureTypeReadable(T.type)),q}this.readRenderTargetPixels=function(T,q,te,J,j,we,Pe,Te=0){if(!(T&&T.isWebGLRenderTarget)){We("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=V.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Pe!==void 0&&(Ne=Ne[Pe]),Ne){x.bindFramebuffer(X.FRAMEBUFFER,Ne);try{let Oe=T.textures[Te],at=Oe.format,dt=Oe.type;T.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+Te);let De=Qd(Oe);if(De.__formatReadable===!1){We("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(De.__typeReadable===!1){We("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=T.width-J&&te>=0&&te<=T.height-j&&X.readPixels(q,te,J,j,_e.convert(at),_e.convert(dt),we)}finally{let Oe=B!==null?V.get(B).__webglFramebuffer:null;x.bindFramebuffer(X.FRAMEBUFFER,Oe)}}},this.readRenderTargetPixelsAsync=async function(T,q,te,J,j,we,Pe,Te=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ne=V.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Pe!==void 0&&(Ne=Ne[Pe]),Ne)if(q>=0&&q<=T.width-J&&te>=0&&te<=T.height-j){x.bindFramebuffer(X.FRAMEBUFFER,Ne);let Oe=T.textures[Te],at=Oe.format,dt=Oe.type;T.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+Te);let De=Qd(Oe);if(De.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(De.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let St=X.createBuffer();X.bindBuffer(X.PIXEL_PACK_BUFFER,St),X.bufferData(X.PIXEL_PACK_BUFFER,we.byteLength,X.STREAM_READ),X.readPixels(q,te,J,j,_e.convert(at),_e.convert(dt),0),X.bindBuffer(X.PIXEL_PACK_BUFFER,null);let an=B!==null?V.get(B).__webglFramebuffer:null;x.bindFramebuffer(X.FRAMEBUFFER,an);let zt=X.fenceSync(X.SYNC_GPU_COMMANDS_COMPLETE,0);return X.flush(),await Tp(X,zt,4),X.bindBuffer(X.PIXEL_PACK_BUFFER,St),X.getBufferSubData(X.PIXEL_PACK_BUFFER,0,we),X.bindBuffer(X.PIXEL_PACK_BUFFER,null),X.deleteBuffer(St),X.deleteSync(zt),we}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,q=null,te=0){let J=Math.pow(2,-te),j=Math.floor(T.image.width*J),we=Math.floor(T.image.height*J),Pe=q!==null?q.x:0,Te=q!==null?q.y:0;Y.setTexture2D(T,0),X.copyTexSubImage2D(X.TEXTURE_2D,te,0,0,Pe,Te,j,we),x.unbindTexture()},this.copyTextureToTexture=function(T,q,te=null,J=null,j=0,we=0){let Pe,Te,Ne,Oe,at,dt,De,St,an,zt=T.isCompressedTexture?T.mipmaps[we]:T.image;if(te!==null)Pe=te.max.x-te.min.x,Te=te.max.y-te.min.y,Ne=te.isBox3?te.max.z-te.min.z:1,Oe=te.min.x,at=te.min.y,dt=te.isBox3?te.min.z:0;else{let Jt=Math.pow(2,-j);Pe=Math.floor(zt.width*Jt),Te=Math.floor(zt.height*Jt),T.isDataArrayTexture?Ne=zt.depth:T.isData3DTexture?Ne=Math.floor(zt.depth*Jt):Ne=1,Oe=0,at=0,dt=0}J!==null?(De=J.x,St=J.y,an=J.z):(De=0,St=0,an=0);let Nt=_e.convert(q.format),Mn=_e.convert(q.type),Re;q.isData3DTexture?(Y.setTexture3D(q,0),Re=X.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(Y.setTexture2DArray(q,0),Re=X.TEXTURE_2D_ARRAY):(Y.setTexture2D(q,0),Re=X.TEXTURE_2D),x.activeTexture(X.TEXTURE0),x.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,q.flipY),x.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),x.pixelStorei(X.UNPACK_ALIGNMENT,q.unpackAlignment);let Rn=x.getParameter(X.UNPACK_ROW_LENGTH),vt=x.getParameter(X.UNPACK_IMAGE_HEIGHT),Jn=x.getParameter(X.UNPACK_SKIP_PIXELS),wi=x.getParameter(X.UNPACK_SKIP_ROWS),ds=x.getParameter(X.UNPACK_SKIP_IMAGES);x.pixelStorei(X.UNPACK_ROW_LENGTH,zt.width),x.pixelStorei(X.UNPACK_IMAGE_HEIGHT,zt.height),x.pixelStorei(X.UNPACK_SKIP_PIXELS,Oe),x.pixelStorei(X.UNPACK_SKIP_ROWS,at),x.pixelStorei(X.UNPACK_SKIP_IMAGES,dt);let pr=T.isDataArrayTexture||T.isData3DTexture,It=q.isDataArrayTexture||q.isData3DTexture;if(T.isDepthTexture){let Jt=V.get(T),fs=V.get(q),Bt=V.get(Jt.__renderTarget),ps=V.get(fs.__renderTarget);x.bindFramebuffer(X.READ_FRAMEBUFFER,Bt.__webglFramebuffer),x.bindFramebuffer(X.DRAW_FRAMEBUFFER,ps.__webglFramebuffer);for(let mr=0;mr<Ne;mr++)pr&&(X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,V.get(T).__webglTexture,j,dt+mr),X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,V.get(q).__webglTexture,we,an+mr)),X.blitFramebuffer(Oe,at,Pe,Te,De,St,Pe,Te,X.DEPTH_BUFFER_BIT,X.NEAREST);x.bindFramebuffer(X.READ_FRAMEBUFFER,null),x.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else if(j!==0||T.isRenderTargetTexture||V.has(T)){let Jt=V.get(T),fs=V.get(q);x.bindFramebuffer(X.READ_FRAMEBUFFER,w),x.bindFramebuffer(X.DRAW_FRAMEBUFFER,D);for(let Bt=0;Bt<Ne;Bt++)pr?X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,Jt.__webglTexture,j,dt+Bt):X.framebufferTexture2D(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,Jt.__webglTexture,j),It?X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,fs.__webglTexture,we,an+Bt):X.framebufferTexture2D(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,fs.__webglTexture,we),j!==0?X.blitFramebuffer(Oe,at,Pe,Te,De,St,Pe,Te,X.COLOR_BUFFER_BIT,X.NEAREST):It?X.copyTexSubImage3D(Re,we,De,St,an+Bt,Oe,at,Pe,Te):X.copyTexSubImage2D(Re,we,De,St,Oe,at,Pe,Te);x.bindFramebuffer(X.READ_FRAMEBUFFER,null),x.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else It?T.isDataTexture||T.isData3DTexture?X.texSubImage3D(Re,we,De,St,an,Pe,Te,Ne,Nt,Mn,zt.data):q.isCompressedArrayTexture?X.compressedTexSubImage3D(Re,we,De,St,an,Pe,Te,Ne,Nt,zt.data):X.texSubImage3D(Re,we,De,St,an,Pe,Te,Ne,Nt,Mn,zt):T.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,we,De,St,Pe,Te,Nt,Mn,zt.data):T.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,we,De,St,zt.width,zt.height,Nt,zt.data):X.texSubImage2D(X.TEXTURE_2D,we,De,St,Pe,Te,Nt,Mn,zt);x.pixelStorei(X.UNPACK_ROW_LENGTH,Rn),x.pixelStorei(X.UNPACK_IMAGE_HEIGHT,vt),x.pixelStorei(X.UNPACK_SKIP_PIXELS,Jn),x.pixelStorei(X.UNPACK_SKIP_ROWS,wi),x.pixelStorei(X.UNPACK_SKIP_IMAGES,ds),we===0&&q.generateMipmaps&&X.generateMipmap(Re),x.unbindTexture()},this.initRenderTarget=function(T){V.get(T).__webglFramebuffer===void 0&&Y.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?Y.setTextureCube(T,0):T.isData3DTexture?Y.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?Y.setTexture2DArray(T,0):Y.setTexture2D(T,0),x.unbindTexture()},this.resetState=function(){H=0,N=0,B=null,x.reset(),ye.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return mi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=st._getDrawingBufferColorSpace(e),t.unpackColorSpace=st._getUnpackColorSpace()}};var aa={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var qn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},gM=new Ui(-1,1,1,-1,0,1),Gh=class extends Qe{constructor(){super(),this.setAttribute("position",new nt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new nt([0,2,0,0,2,0],2))}},xM=new Gh,Ps=class{constructor(e){this._mesh=new ae(xM,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,gM)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var oa=class extends qn{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof ft?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=os.clone(e.uniforms),this.material=new ft({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Ps(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var bo=class extends qn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},zc=class extends qn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Vc=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new Se);this._width=n.width,this._height=n.height,t=new $t(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:un}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new oa(aa),this.copyPass.material.blending=ri,this.timer=new Js}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}bo!==void 0&&(a instanceof bo?n=!0:a instanceof zc&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new Se);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Gc=class extends qn{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new oe}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=s}};var rm={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new oe(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var la=class i extends qn{constructor(e,t=1,n,s){super(),this.strength=t,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new Se(e.x,e.y):new Se(256,256),this.clearColor=new oe(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new $t(r,a,{type:un,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let h=new $t(r,a,{type:un,depthBuffer:!1});h.texture.name="UnrealBloomPass.h"+u,h.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(h);let d=new $t(r,a,{type:un,depthBuffer:!1});d.texture.name="UnrealBloomPass.v"+u,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),a=Math.round(a/2)}let o=rm;this.highPassUniforms=os.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new ft({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new Se(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=os.clone(aa.uniforms),this.blendMaterial=new ft({uniforms:this.copyUniforms,vertexShader:aa.vertexShader,fragmentShader:aa.fragmentShader,premultipliedAlpha:!0,blending:Et,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new oe,this._oldClearAlpha=1,this._basic=new Lt,this._fsQuad=new Ps(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new Se(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=a}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let a=0;a<e;a++)t.push(.39894*Math.exp(-.5*a*a/(n*n))/n);let s=[],r=[];for(let a=1;a<e;a+=2){let o=t[a],l=a+1<e?t[a+1]:0,c=o+l;s.push((a*o+(a+1)*l)/c),r.push(c)}return new ft({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new Se(.5,.5)},direction:{value:new Se(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:s},gaussianWeights:{value:r}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new ft({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}};la.BlurDirectionX=new Se(1,0);la.BlurDirectionY=new Se(0,1);var Eo={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var Wc=class extends qn{constructor(){super(),this.isOutputPass=!0,this.uniforms=os.clone(Eo.uniforms),this.material=new Yr({name:Eo.name,uniforms:this.uniforms,vertexShader:Eo.vertexShader,fragmentShader:Eo.fragmentShader}),this._fsQuad=new Ps(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},st.getTransfer(this._outputColorSpace)===yt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===so?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===ro?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===ao?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===er?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===lo?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===co?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===oo&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};function om(i){let e=i>>>0;return()=>{e|=0,e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function Xc(i,e){let t=i*374761393+e*668265263|0;return t=Math.imul(t^t>>>13,1274126177),((t^t>>>16)>>>0)/4294967296}var am=i=>i*i*(3-2*i);function bi(i,e){let t=Math.floor(i),n=Math.floor(e),s=i-t,r=e-n,a=Xc(t,n),o=Xc(t+1,n),l=Xc(t,n+1),c=Xc(t+1,n+1),u=am(s),h=am(r);return(a+(o-a)*u+(l-a)*h+(a-o-l+c)*u*h)*2-1}function ca(i,e,t=5){let n=0,s=.5,r=1;for(let a=0;a<t;a++)n+=s*bi(i*r,e*r),r*=2.02,s*=.5;return n}var ua=(i,e,t)=>{let n=Math.min(1,Math.max(0,(t-i)/(e-i)));return n*n*(3-2*n)};var Wh={sojourner:new I(-6.2,0,1.6),spirit:new I(0,0,0),opportunity:new I(6.4,0,1.2)};function Is(i,e){let t=Math.hypot(i,e-1),n=ca(i*.045,e*.045,5)*1.7+ca(i*.23+11,e*.23-5,3)*.16,s=1-ua(8,22,t);n*=1-s*.88;let r=ua(55,150,t);n+=r*(7+ca(i*.018+7,e*.018-3,4)*11);let a=Math.exp(-Math.pow((Math.hypot(i+30,e+120)-70)/9,2))*5;return n+a}var To={horizon:new oe("#d39a6c"),mid:new oe("#9a6447"),zenith:new oe("#3b2622"),halo:new oe("#8fb4d9")};function Xh(){return new I(-.62,.2,-.76).normalize()}function lm(i=256){let e=document.createElement("canvas");e.width=e.height=i;let t=e.getContext("2d"),n=t.createImageData(i,i);for(let r=0;r<i;r++)for(let a=0;a<i;a++){let o=a/i,l=r/i,c=0,u=.55,h=8;for(let _=0;_<4;_++)c+=u*(bi(o*h,l*h)*(1-o)*(1-l)+bi((o-1)*h,l*h)*o*(1-l)+bi(o*h,(l-1)*h)*(1-o)*l+bi((o-1)*h,(l-1)*h)*o*l),h*=2,u*=.5;let d=Math.max(0,Math.min(255,128+c*140)),f=(r*i+a)*4;n.data[f]=n.data[f+1]=n.data[f+2]=d,n.data[f+3]=255}t.putImageData(n,0,0);let s=new ln(e);return s.wrapS=s.wrapT=ei,s.colorSpace=Si,s}function cm(i,e){let t=Xh(),n=new ae(new Ut(600,48,24),new ft({side:kt,depthWrite:!1,fog:!1,uniforms:{uSun:{value:t},uHorizon:{value:To.horizon},uMid:{value:To.mid},uZenith:{value:To.zenith},uHalo:{value:To.halo},uTime:{value:0}},vertexShader:`
        varying vec3 vDir;
        void main(){ vDir = normalize(position); vec4 p = projectionMatrix * modelViewMatrix * vec4(position,1.0); gl_Position = p.xyww; }`,fragmentShader:`
        uniform vec3 uSun, uHorizon, uMid, uZenith, uHalo; varying vec3 vDir;
        void main(){
          vec3 d = normalize(vDir); float h = d.y;
          vec3 col = mix(uHorizon, uMid, smoothstep(0.0, 0.22, h));
          col = mix(col, uZenith, smoothstep(0.18, 0.95, h));
          col = mix(col, uHorizon * 0.75, smoothstep(0.0, -0.08, h));
          float s = max(dot(d, normalize(uSun)), 0.0);
          col += uHalo * pow(s, 18.0) * 0.85;          // blue halo around the low sun
          col += vec3(1.0, 0.72, 0.48) * pow(s, 3.0) * 0.12; // warm forward scatter
          col += vec3(1.0, 0.96, 0.9) * smoothstep(0.9993, 0.99975, s) * 9.0; // small sun disc, bright enough to bloom
          gl_FragColor = vec4(col, 1.0);
        }`}));n.renderOrder=-10,i.add(n),i.fog=new ka(To.horizon.clone().multiplyScalar(.92),26,230);let s=e.mobile?150:220,r=new ts(460,460,s,s);r.rotateX(-Math.PI/2);let a=r.attributes.position,o=new Float32Array(a.count*3),l=new oe("#8f4c2c"),c=new oe("#b0663e"),u=new oe("#5e3020"),h=new oe("#c27a4c"),d=new oe;for(let B=0;B<a.count;B++){let R=a.getX(B),F=a.getZ(B),W=Is(R,F);a.setY(B,W);let le=ca(R*.08+3,F*.08,3),ie=ca(R*.6,F*.6,2);d.copy(l).lerp(c,ua(-.3,.5,le)),d.lerp(u,ua(.15,.6,-ie)*.45),d.lerp(h,ua(.35,.8,le+ie*.3)*.5),o[B*3]=d.r,o[B*3+1]=d.g,o[B*3+2]=d.b}r.setAttribute("color",new ct(o,3)),r.computeVertexNormals();let f=lm(256);f.repeat.set(70,70);let _=new ae(r,new qe({vertexColors:!0,roughness:.96,metalness:0,bumpMap:f,bumpScale:1.6}));_.receiveShadow=!0,_.matrixAutoUpdate=!1,i.add(_);let y=new xi(1,2),g=y.attributes.position;for(let B=0;B<g.count;B++){let R=new I(g.getX(B),g.getY(B),g.getZ(B)),F=1+bi(R.x*1.6+3,R.z*1.6+R.y*1.3)*.32+bi(R.x*5+R.y*2,R.z*5-7)*.08;R.multiplyScalar(F),R.y*=.58,R.y<-.1&&(R.y*=.4),g.setXYZ(B,R.x,R.y,R.z)}y.computeVertexNormals();let m=e.mobile?200:420,M=lm(128);M.repeat.set(2,2);let A=new Qi(y,new qe({roughness:.95,bumpMap:M,bumpScale:2.2}),m),v=om(7),b=new Ct,S=new oe,C=0,p=0;for(;C<m&&p++<5e3;){let B=2.5+Math.pow(v(),1.6)*70,R=v()*Math.PI*2,F=Math.cos(R)*B,W=Math.sin(R)*B-4,le=!0;for(let Le of Object.values(Wh))Math.hypot(F-Le.x,W-Le.z)<2.6&&(le=!1);if(W>9&&Math.abs(F)<9&&(le=!1),!le)continue;let ie=.03+Math.pow(v(),3.6)*(B<14?.42:.7);b.position.set(F,Is(F,W)-ie*.3,W),b.rotation.set(v()*.6,v()*6.28,v()*.6),b.scale.set(ie*(.8+v()*.6),ie,ie*(.8+v()*.6)),b.updateMatrix(),A.setMatrixAt(C,b.matrix),S.set("#5a301e").lerp(new oe("#8a5034"),v()),A.setColorAt(C,S),C++}A.count=C,A.castShadow=!0,A.receiveShadow=!0,i.add(A);let E=new si(new oe("#ffd9b0"),3.2);E.position.copy(t).multiplyScalar(60),E.castShadow=!0,E.shadow.mapSize.set(e.mobile?1024:2048,e.mobile?1024:2048);let L=E.shadow.camera;L.left=-16,L.right=16,L.top=12,L.bottom=-12,L.near=20,L.far=110,E.shadow.bias=-4e-4,E.shadow.normalBias=.03,i.add(E,E.target);let z=new Qa(new oe("#e7b48e"),new oe("#4b2616"),1.15);i.add(z);let O=new si(new oe("#d8c6b6"),.45);O.position.set(6,7,14),i.add(O);let G=e.mobile?700:1700,w=new Qe,D=new Float32Array(G*3),H=new Float32Array(G);for(let B=0;B<G;B++)D[B*3]=(v()-.5)*44,D[B*3+1]=v()*5.5,D[B*3+2]=(v()-.5)*34-2,H[B]=v();w.setAttribute("position",new ct(D,3)),w.setAttribute("aRand",new ct(H,1));let N=new Tn(w,new ft({transparent:!0,depthWrite:!1,uniforms:{uTime:{value:0},uPx:{value:e.pixelRatio},uColor:{value:new oe("#ffd0a4")},uBoost:{value:0}},vertexShader:`
      attribute float aRand; uniform float uTime, uPx, uBoost; varying float vA;
      void main(){
        vec3 p = position;
        p.x = mod(p.x + uTime * (0.25 + aRand * 0.5) + 22.0, 44.0) - 22.0;
        p.y += sin(uTime * 0.6 + aRand * 40.0) * 0.18;
        p.z += cos(uTime * 0.4 + aRand * 25.0) * 0.25;
        vec4 mv = modelViewMatrix * vec4(p, 1.0);
        gl_PointSize = (1.4 + aRand * 2.6) * uPx * (9.0 / -mv.z);
        vA = (0.25 + 0.55 * aRand) * smoothstep(40.0, 6.0, -mv.z) * (1.0 + uBoost);
        gl_Position = projectionMatrix * mv;
      }`,fragmentShader:`
      uniform vec3 uColor; varying float vA;
      void main(){ float d = length(gl_PointCoord - 0.5); float a = smoothstep(0.5, 0.0, d) * vA; gl_FragColor = vec4(uColor, a * 0.55); }`}));return N.frustumCulled=!1,i.add(N),{sky:n,ground:_,rocks:A,sunLight:E,hemi:z,fill:O,dust:N,sun:t}}function qc(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,l=new Qe,c=0;for(let u=0;u<i.length;++u){let h=i[u],d=0;if(t!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in h.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(h.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(o!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in h.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(h.morphAttributes[f])}if(e){let f;if(t)f=h.index.count;else if(h.attributes.position!==void 0)f=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,u),c+=f}}if(t){let u=0,h=[];for(let d=0;d<i.length;++d){let f=i[d].index;for(let _=0;_<f.count;++_)h.push(f.getX(_)+u);u+=i[d].attributes.position.count}l.setIndex(h)}for(let u in r){let h=um(r[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,h)}for(let u in a){let h=a[u][0].length;if(h!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let d=0;d<h;++d){let f=[];for(let y=0;y<a[u].length;++y)f.push(a[u][y][d]);let _=um(f);if(!_)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(_)}}}return l}function um(i){let e,t,n,s=-1,r=0;for(let c=0;c<i.length;++c){let u=i[c];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*t}let a=new e(r),o=new ct(a,t,n),l=0;for(let c=0;c<i.length;++c){let u=i[c];if(u.isInterleavedBufferAttribute){let h=l/t;for(let d=0,f=u.count;d<f;d++)for(let _=0;_<t;_++){let y=u.getComponent(d,_);o.setComponent(d+h,_,y)}}else a.set(u.array,l);l+=u.count*t}return s!==void 0&&(o.gpuType=s),o}function qh(i,e){if(e===mh)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===ta||e===_o){let t=i.getIndex();if(t===null){let r=[],a=i.getAttribute("position");if(a!==void 0){for(let o=0;o<a.count;o++)r.push(o);i.setIndex(r),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,s=[];if(e===ta)for(let r=1;r<=n;r++)s.push(t.getX(0)),s.push(t.getX(r)),s.push(t.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(s.push(t.getX(r)),s.push(t.getX(r+1)),s.push(t.getX(r+2))):(s.push(t.getX(r+2)),s.push(t.getX(r+1)),s.push(t.getX(r)));return s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),i.setIndex(s),i.clearGroups(),i}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}function hm(i){let e=new Map,t=new Map,n=i.clone();return dm(i,n,function(s,r){e.set(r,s),t.set(s,r)}),n.traverse(function(s){if(!s.isSkinnedMesh)return;let r=s,a=e.get(s),o=a.skeleton.bones;r.skeleton=a.skeleton.clone(),r.bindMatrix.copy(a.bindMatrix),r.skeleton.bones=o.map(function(l){return t.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),n}function dm(i,e,t){t(i,e);for(let n=0;n<i.children.length;n++)dm(i.children[n],e.children[n],t)}var Yc=class extends Di{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Qh(t)}),this.register(function(t){return new ed(t)}),this.register(function(t){return new cd(t)}),this.register(function(t){return new ud(t)}),this.register(function(t){return new hd(t)}),this.register(function(t){return new nd(t)}),this.register(function(t){return new id(t)}),this.register(function(t){return new sd(t)}),this.register(function(t){return new rd(t)}),this.register(function(t){return new jh(t)}),this.register(function(t){return new ad(t)}),this.register(function(t){return new td(t)}),this.register(function(t){return new ld(t)}),this.register(function(t){return new od(t)}),this.register(function(t){return new Zh(t)}),this.register(function(t){return new $c(t,ht.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new $c(t,ht.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new dd(t)})}load(e,t,n,s){let r=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let c=as.extractUrlBase(e);a=as.resolveURL(c,this.path)}else a=as.extractUrlBase(e);this.manager.itemStart(e);let o=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new $r(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,a,function(u){t(u),r.manager.itemEnd(e)},o)}catch(u){o(u)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r,a={},o={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===xm){try{a[ht.KHR_BINARY_GLTF]=new fd(e)}catch(h){s&&s(h);return}r=JSON.parse(a[ht.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new yd(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){let h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[h.name]=h,a[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){let h=r.extensionsUsed[u],d=r.extensionsRequired||[];switch(h){case ht.KHR_MATERIALS_UNLIT:a[h]=new Jh;break;case ht.KHR_DRACO_MESH_COMPRESSION:a[h]=new pd(r,this.dracoLoader);break;case ht.KHR_TEXTURE_TRANSFORM:a[h]=new md;break;case ht.KHR_MESH_QUANTIZATION:a[h]=new gd;break;default:d.indexOf(h)>=0&&o[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(n,s)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}};function _M(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}function en(i,e,t){let n=i.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}var ht={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Zh=class{constructor(e){this.parser=e,this.name=ht.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,s=t.cache.get(n);if(s)return s;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,u=new oe(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],Pn);let h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new si(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new _i(u),c.distance=h;break;case"spot":c=new to(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),ki(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}},Jh=class{constructor(){this.name=ht.KHR_MATERIALS_UNLIT}getMaterialType(){return Lt}extendParams(e,t,n){let s=[];e.color=new oe(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],Pn),e.opacity=a[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,At))}return Promise.all(s)}},jh=class{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=en(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},Qh=class{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return en(this.parser,e,this.name)!==null?Dn:null}extendMaterialParams(e,t){let n=en(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(s.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let r=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Se(r,r)}return Promise.all(s)}},ed=class{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_DISPERSION}getMaterialType(e){return en(this.parser,e,this.name)!==null?Dn:null}extendMaterialParams(e,t){let n=en(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}},td=class{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return en(this.parser,e,this.name)!==null?Dn:null}extendMaterialParams(e,t){let n=en(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(s)}},nd=class{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_SHEEN}getMaterialType(e){return en(this.parser,e,this.name)!==null?Dn:null}extendMaterialParams(e,t){let n=en(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(t.sheenColor=new oe(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let r=n.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],Pn)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,At)),n.sheenRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(s)}},id=class{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return en(this.parser,e,this.name)!==null?Dn:null}extendMaterialParams(e,t){let n=en(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&s.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(s)}},sd=class{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_VOLUME}getMaterialType(e){return en(this.parser,e,this.name)!==null?Dn:null}extendMaterialParams(e,t){let n=en(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let r=n.attenuationColor||[1,1,1];return t.attenuationColor=new oe().setRGB(r[0],r[1],r[2],Pn),Promise.all(s)}},rd=class{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_IOR}getMaterialType(e){return en(this.parser,e,this.name)!==null?Dn:null}extendMaterialParams(e,t){let n=en(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},ad=class{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_SPECULAR}getMaterialType(e){return en(this.parser,e,this.name)!==null?Dn:null}extendMaterialParams(e,t){let n=en(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));let r=n.specularColorFactor||[1,1,1];return t.specularColor=new oe().setRGB(r[0],r[1],r[2],Pn),n.specularColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,At)),Promise.all(s)}},od=class{constructor(e){this.parser=e,this.name=ht.EXT_MATERIALS_BUMP}getMaterialType(e){return en(this.parser,e,this.name)!==null?Dn:null}extendMaterialParams(e,t){let n=en(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&s.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(s)}},ld=class{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return en(this.parser,e,this.name)!==null?Dn:null}extendMaterialParams(e,t){let n=en(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&s.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(s)}},cd=class{constructor(e){this.parser=e,this.name=ht.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}},ud=class{constructor(e){this.parser=e,this.name=ht.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],l=n.textureLoader;if(o.uri){let c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,a.source,l)}},hd=class{constructor(e){this.parser=e,this.name=ht.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],l=n.textureLoader;if(o.uri){let c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,a.source,l)}},$c=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){let l=s.byteOffset||0,c=s.byteLength||0,u=s.count,h=s.byteStride,d=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(u,h,d,s.mode,s.filter).then(function(f){return f.buffer}):a.ready.then(function(){let f=new ArrayBuffer(u*h);return a.decodeGltfBuffer(new Uint8Array(f),u,h,d,s.mode,s.filter),f})})}else return null}},dd=class{constructor(e){this.name=ht.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=t.meshes[n.mesh];for(let c of s.primitives)if(c.mode!==ai.TRIANGLES&&c.mode!==ai.TRIANGLE_STRIP&&c.mode!==ai.TRIANGLE_FAN&&c.mode!==void 0)return null;let a=n.extensions[this.name].attributes,o=[],l={};for(let c in a)o.push(this.parser.getDependency("accessor",a[c]).then(u=>(l[c]=u,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{let u=c.pop(),h=u.isGroup?u.children:[u],d=c[0].count,f=[];for(let _ of h){let y=new Ke,g=new I,m=new In,M=new I(1,1,1),A=new Qi(_.geometry,_.material,d);for(let b=0;b<d;b++)l.TRANSLATION&&g.fromBufferAttribute(l.TRANSLATION,b),l.ROTATION&&m.fromBufferAttribute(l.ROTATION,b),l.SCALE&&M.fromBufferAttribute(l.SCALE,b),A.setMatrixAt(b,y.compose(g,m,M));let v=null;for(let b in l)if(b==="_COLOR_0"){let S=l[b];A.instanceColor=new ji(S.array,S.itemSize,S.normalized)}else if(b!=="TRANSLATION"&&b!=="ROTATION"&&b!=="SCALE"){if(v===null){let C=A.geometry;v=new Qe,v.name=C.name;for(let p in C.attributes)v.setAttribute(p,C.attributes[p]);for(let p in C.morphAttributes)v.morphAttributes[p]=C.morphAttributes[p];C.index!==null&&v.setIndex(C.index),v.morphTargetsRelative=C.morphTargetsRelative;for(let p of C.groups)v.addGroup(p.start,p.count,p.materialIndex);C.boundingBox!==null&&(v.boundingBox=C.boundingBox.clone()),C.boundingSphere!==null&&(v.boundingSphere=C.boundingSphere.clone()),v.drawRange.start=C.drawRange.start,v.drawRange.count=C.drawRange.count,v.userData=Object.assign({},C.userData),A.geometry=v}let S=l[b];v.setAttribute(b,new ji(S.array,S.itemSize,S.normalized))}Ct.prototype.copy.call(A,_),this.parser.assignFinalMaterial(A),f.push(A)}return u.isGroup?(u.clear(),u.add(...f),u):f[0]}))}},xm="glTF",wo=12,fm={JSON:1313821514,BIN:5130562},fd=class{constructor(e){this.name=ht.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,wo),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==xm)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-wo,r=new DataView(e,wo),a=0;for(;a<s;){let o=r.getUint32(a,!0);a+=4;let l=r.getUint32(a,!0);if(a+=4,l===fm.JSON){let c=new Uint8Array(e,wo+a,o);this.content=n.decode(c)}else if(l===fm.BIN){let c=wo+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},pd=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ht.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(let u in a){let h=_d[u]||u.toLowerCase();o[h]=a[u]}for(let u in e.attributes){let h=_d[u]||u.toLowerCase();if(a[u]!==void 0){let d=n.accessors[e.attributes[u]],f=ha[d.componentType];c[h]=f.name,l[h]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h,d){s.decodeDracoFile(u,function(f){for(let _ in f.attributes){let y=f.attributes[_],g=l[_];g!==void 0&&(y.normalized=g)}h(f)},o,c,Pn,d)})})}},md=class{constructor(){this.name=ht.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let n=Math.cos(e.rotation),s=Math.sin(e.rotation);e.matrix.set(e.repeat.x*n,e.repeat.y*s,e.offset.x,-e.repeat.x*s,e.repeat.y*n,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},gd=class{constructor(){this.name=ht.KHR_MESH_QUANTIZATION}},Kc=class extends Ni{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let a=0;a!==s;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,u=s-t,h=(n-t)/u,d=h*h,f=d*h,_=e*c,y=_-c,g=-2*f+3*d,m=f-d,M=1-g,A=m-d+h;for(let v=0;v!==o;v++){let b=a[y+v+o],S=a[y+v+l]*u,C=a[_+v+o],p=a[_+v]*u;r[v]=M*b+A*S+g*C+m*p}return r}},vM=new In,xd=class extends Kc{interpolate_(e,t,n,s){let r=super.interpolate_(e,t,n,s);return vM.fromArray(r).normalize().toArray(r),r}},ai={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},ha={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},pm={9728:jt,9729:Qt,9984:Kl,9985:jr,9986:nr,9987:yi},mm={33071:Qn,33648:Fr,10497:ei},Yh={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},_d={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ls={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},yM={CUBICSPLINE:void 0,LINEAR:Xs,STEP:Ws},$h={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function MM(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new qe({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Fi})),i.DefaultMaterial}function rr(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function ki(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function SM(i,e,t){let n=!1,s=!1,r=!1;for(let c=0,u=e.length;c<u;c++){let h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(s=!0),h.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let a=[],o=[],l=[];for(let c=0,u=e.length;c<u;c++){let h=e[c];if(n){let d=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):i.attributes.position;a.push(d)}if(s){let d=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):i.attributes.normal;o.push(d)}if(r){let d=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):i.attributes.color;l.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){let u=c[0],h=c[1],d=c[2];return n&&(i.morphAttributes.position=u),s&&(i.morphAttributes.normal=h),r&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function bM(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function EM(i){let e,t=i.extensions&&i.extensions[ht.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Kh(t.attributes):e=i.indices+":"+Kh(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+Kh(i.targets[n]);return e}function Kh(i){let e="",t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function vd(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function TM(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var wM=new Ke,yd=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new _M,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,a=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;let l=o.match(/Version\/(\d+)/);s=n&&l?parseInt(l[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&a<98?this.textureLoader=new ja(this.options.manager):this.textureLoader=new no(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new $r(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){let o={scene:a[0][s.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:s.asset,parser:n,userData:{}};return rr(r,o,s),ki(o,s),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(let l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let a=t[s].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let a=e[s];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let s=n.clone(),r=(a,o)=>{let l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(let[c,u]of a.children.entries())r(u,o.children[c])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let s=e(t[n]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[ht.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,a){n.load(as.resolveURL(t.uri,s.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){let t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let a=Yh[s.type],o=ha[s.componentType],l=s.normalized===!0,c=new o(s.count*a);return Promise.resolve(new ct(c,a,l))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(a){let o=a[0],l=Yh[s.type],c=ha[s.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,d=s.byteOffset||0,f=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,_=s.normalized===!0,y,g;if(f&&f!==h){let m=Math.floor(d/f),M="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+m+":"+s.count,A=t.cache.get(M);A||(y=new c(o,m*f,s.count*f/u),A=new Ys(y,f/u),t.cache.add(M,A)),g=new Ms(A,l,d%f/u,_)}else o===null?y=new c(s.count*l):y=new c(o,d,s.count*l),g=new ct(y,l,_);if(s.sparse!==void 0){let m=Yh.SCALAR,M=ha[s.sparse.indices.componentType],A=s.sparse.indices.byteOffset||0,v=s.sparse.values.byteOffset||0,b=new M(a[1],A,s.sparse.count*m),S=new c(a[2],v,s.sparse.count*l);o!==null&&(g=new ct(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let C=0,p=b.length;C<p;C++){let E=b[C];if(g.setX(E,S[C*l]),l>=2&&g.setY(E,S[C*l+1]),l>=3&&g.setZ(E,S[C*l+2]),l>=4&&g.setW(E,S[C*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=_}return g})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r],o=this.textureLoader;if(a.uri){let l=n.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){let s=this,r=this.json,a=r.textures[e],o=r.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=a.name||o.name||"",u.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(u.name=o.uri);let d=(r.samplers||{})[a.sampler]||{};return u.magFilter=pm[d.magFilter]||Qt,u.minFilter=pm[d.minFilter]||yi,u.wrapS=mm[d.wrapS]||ei,u.wrapT=mm[d.wrapT]||ei,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==jt&&u.minFilter!==Qt,s.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());let a=s.images[e],o=self.URL||self.webkitURL,l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(h){c=!0;let d=new Blob([h],{type:a.mimeType});return l=o.createObjectURL(d),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let u=Promise.resolve(l).then(function(h){return new Promise(function(d,f){let _=d;t.isImageBitmapLoader===!0&&(_=function(y){let g=new qt(y);g.needsUpdate=!0,d(g)}),t.load(as.resolveURL(h,r.path),_,void 0,f)})}).then(function(h){return c===!0&&o.revokeObjectURL(l),ki(h,a),h.userData.mimeType=a.mimeType||TM(a.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,s){let r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[ht.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[ht.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let l=r.associations.get(a);a=r.extensions[ht.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,l)}}return s!==void 0&&(a.colorSpace=s),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+n.uuid,l=this.cache.get(o);l||(l=new ii,En.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){let o="LineBasicMaterial:"+n.uuid,l=this.cache.get(o);l||(l=new ni,En.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(s||r||a){let o="ClonedMaterial:"+n.uuid+":";s&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),r&&(l.vertexColors=!0),a&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return qe}loadMaterial(e){let t=this,n=this.json,s=this.extensions,r=n.materials[e],a,o={},l=r.extensions||{},c=[];if(l[ht.KHR_MATERIALS_UNLIT]){let h=s[ht.KHR_MATERIALS_UNLIT];a=h.getMaterialType(),c.push(h.extendParams(o,r,t))}else{let h=r.pbrMetallicRoughness||{};if(o.color=new oe(1,1,1),o.opacity=1,Array.isArray(h.baseColorFactor)){let d=h.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],Pn),o.opacity=d[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",h.baseColorTexture,At)),o.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,o.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",h.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=Ht);let u=r.alphaMode||$h.OPAQUE;if(u===$h.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,u===$h.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==Lt&&(c.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new Se(1,1),r.normalTexture.scale!==void 0)){let h=r.normalTexture.scale;o.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&a!==Lt&&(c.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==Lt){let h=r.emissiveFactor;o.emissive=new oe().setRGB(h[0],h[1],h[2],Pn)}return r.emissiveTexture!==void 0&&a!==Lt&&c.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,At)),Promise.all(c).then(function(){let h=new a(o);return r.name&&(h.name=r.name),ki(h,r),t.associations.set(h,{materials:e}),r.extensions&&rr(s,h,r),h})}createUniqueName(e){let t=Dt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,s=this.primitiveCache;function r(o){return n[ht.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return gm(l,o,t)})}let a=[];for(let o=0,l=e.length;o<l;o++){let c=e[o],u=EM(c),h=s[u];if(h)a.push(h.promise);else{let d;c.extensions&&c.extensions[ht.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=gm(new Qe,c,t),c.mode===ai.TRIANGLE_STRIP?d=d.then(f=>qh(f,_o)):c.mode===ai.TRIANGLE_FAN&&(d=d.then(f=>qh(f,ta))),s[u]={primitive:c,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,s=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let l=0,c=a.length;l<c;l++){let u=a[l].material===void 0?MM(this.cache):this.getDependency("material",a[l].material);o.push(u)}return o.push(t.loadGeometries(a)),Promise.all(o).then(async function(l){let c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let f=0,_=u.length;f<_;f++){let y=u[f],g=a[f],m,M=c[f];if(g.mode===ai.TRIANGLES||g.mode===ai.TRIANGLE_STRIP||g.mode===ai.TRIANGLE_FAN||g.mode===void 0){let A=r.isSkinnedMesh===!0,v=y.hasAttribute("skinIndex")&&y.hasAttribute("skinWeight");A&&v===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),m=A&&v?new Va(y,M):new ae(y,M),m.isSkinnedMesh===!0&&m.normalizeSkinWeights()}else if(g.mode===ai.LINES)m=new $s(y,M);else if(g.mode===ai.LINE_STRIP)m=new Vn(y,M);else if(g.mode===ai.LINE_LOOP)m=new Wa(y,M);else if(g.mode===ai.POINTS)m=new Tn(y,M);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(m.geometry.morphAttributes).length>0&&bM(m,r),m.name=t.createUniqueName(r.name||"mesh_"+e),ki(m,r),g.extensions&&rr(s,m,g),t.assignFinalMaterial(m),h.push(m)}for(let f=0,_=h.length;f<_;f++)t.associations.set(h[f],{meshes:e,primitives:f});if(h.length===1)return r.extensions&&rr(s,h[0],r),h[0];let d=new $e;r.extensions&&rr(s,d,r),t.associations.set(d,{meshes:e});for(let f=0,_=h.length;f<_;f++)d.add(h[f]);return d})}loadCamera(e){let t,n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Vt(Tt.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new Ui(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),ki(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),a=s,o=[],l=[];for(let c=0,u=a.length;c<u;c++){let h=a[c];if(h){o.push(h);let d=new Ke;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Ga(o,l)})}loadAnimation(e){let t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,a=[],o=[],l=[],c=[],u=[];for(let h=0,d=s.channels.length;h<d;h++){let f=s.channels[h],_=s.samplers[f.sampler],y=f.target,g=y.node,m=s.parameters!==void 0?s.parameters[_.input]:_.input,M=s.parameters!==void 0?s.parameters[_.output]:_.output;y.node!==void 0&&(a.push(this.getDependency("node",g)),o.push(this.getDependency("accessor",m)),l.push(this.getDependency("accessor",M)),c.push(_),u.push(y))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){let d=h[0],f=h[1],_=h[2],y=h[3],g=h[4],m=[];for(let A=0,v=d.length;A<v;A++){let b=d[A],S=f[A],C=_[A],p=y[A],E=g[A];if(b===void 0)continue;b.updateMatrix&&b.updateMatrix();let L=n._createAnimationTracks(b,S,C,p,E);if(L)for(let z=0;z<L.length;z++)m.push(L[z])}let M=new Ja(r,void 0,m);return ki(M,s),M})}createNodeMesh(e){let t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let a=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=s.weights.length;l<c;l++)o.morphTargetInfluences[l]=s.weights[l]}),a})}loadNode(e){let t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=s.children||[];for(let c=0,u=o.length;c<u;c++)a.push(n.getDependency("node",o[c]));let l=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(a),l]).then(function(c){let u=c[0],h=c[1],d=c[2];d!==null&&u.traverse(function(f){f.isSkinnedMesh&&f.bind(d,wM)});for(let f=0,_=h.length;f<_;f++)u.add(h[f]);if(u.userData.pivot!==void 0&&h.length>0){let f=u.userData.pivot,_=h[0];u.pivot=new I().fromArray(f),u.position.x-=f[0],u.position.y-=f[1],u.position.z-=f[2],_.position.set(0,0,0),delete u.userData.pivot}return u})}_loadNodeShallow(e){let t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],a=r.name?s.createUniqueName(r.name):"",o=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),r.camera!==void 0&&o.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let u;if(r.isBone===!0?u=new Gr:c.length>1?u=new $e:c.length===1?u=c[0]:u=new Ct,u!==c[0])for(let h=0,d=c.length;h<d;h++)u.add(c[h]);if(r.name&&(u.userData.name=r.name,u.name=a),ki(u,r),r.extensions&&rr(n,u,r),r.matrix!==void 0){let h=new Ke;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);if(!s.associations.has(u))s.associations.set(u,{});else if(r.mesh!==void 0&&s.meshCache.refs[r.mesh]>1){let h=s.associations.get(u);s.associations.set(u,{...h})}return s.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],s=this,r=new $e;n.name&&(r.name=s.createUniqueName(n.name)),ki(r,n),n.extensions&&rr(t,r,n);let a=n.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(s.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let u=0,h=l.length;u<h;u++){let d=l[u];d.parent!==null?r.add(hm(d)):r.add(d)}let c=u=>{let h=new Map;for(let[d,f]of s.associations)(d instanceof En||d instanceof qt)&&h.set(d,f);return u.traverse(d=>{let f=s.associations.get(d);f!=null&&h.set(d,f)}),h};return s.associations=c(r),r})}_createAnimationTracks(e,t,n,s,r){let a=[],o=e.name?e.name:e.uuid,l=[];function c(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}Ls[r.path]===Ls.weights?(c(e),e.isGroup&&e.children.forEach(c)):l.push(o);let u;switch(Ls[r.path]){case Ls.weights:u=is;break;case Ls.rotation:u=ss;break;case Ls.translation:case Ls.scale:u=Es;break;default:switch(n.itemSize){case 1:u=is;break;case 2:case 3:default:u=Es;break}break}let h=s.interpolation!==void 0?yM[s.interpolation]:Xs,d=this._getArrayFromAccessor(n);for(let f=0,_=l.length;f<_;f++){let y=new u(l[f]+"."+Ls[r.path],t.array,d,h);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(y),a.push(y)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=vd(t.constructor),s=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let s=this instanceof ss?xd:Kc;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function AM(i,e,t){let n=e.attributes,s=new zn;if(n.POSITION!==void 0){let o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(s.set(new I(l[0],l[1],l[2]),new I(c[0],c[1],c[2])),o.normalized){let u=vd(ha[o.componentType]);s.min.multiplyScalar(u),s.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let o=new I,l=new I;for(let c=0,u=r.length;c<u;c++){let h=r[c];if(h.POSITION!==void 0){let d=t.json.accessors[h.POSITION],f=d.min,_=d.max;if(f!==void 0&&_!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(_[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(_[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(_[2]))),d.normalized){let y=vd(ha[d.componentType]);l.multiplyScalar(y)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(o)}i.boundingBox=s;let a=new Nn;s.getCenter(a.center),a.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=a}function gm(i,e,t){let n=e.attributes,s=[];function r(a,o){return t.getDependency("accessor",a).then(function(l){i.setAttribute(o,l)})}for(let a in n){let o=_d[a]||a.toLowerCase();o in i.attributes||s.push(r(n[a],o))}if(e.indices!==void 0&&!i.index){let a=t.getDependency("accessor",e.indices).then(function(o){i.setIndex(o)});s.push(a)}return st.workingColorSpace!==Pn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${st.workingColorSpace}" not supported.`),ki(i,e),AM(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?SM(i,e.targets,t):i})}var Ao=new I;function oi(i,e,t,n,s,r){let a=2*Math.PI*s/4,o=Math.max(r-2*s,0),l=Math.PI/4;Ao.copy(e),Ao[n]=0,Ao.normalize();let c=.5*a/(a+o),u=1-Ao.angleTo(i)/l;return Math.sign(Ao[t])===1?u*c:o/(a+o)+c+c*(1-u)}var On=class i extends _n{constructor(e=1,t=1,n=1,s=2,r=.1){let a=s*2+1;if(r=Math.min(e/2,t/2,n/2,r),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:s,radius:r},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let l=new I,c=new I,u=new I(e,t,n).divideScalar(2).subScalar(r),h=this.attributes.position.array,d=this.attributes.normal.array,f=this.attributes.uv.array,_=h.length/6,y=new I,g=.5/a;for(let m=0,M=0;m<h.length;m+=3,M+=2)switch(l.fromArray(h,m),c.copy(l),c.x-=Math.sign(c.x)*g,c.y-=Math.sign(c.y)*g,c.z-=Math.sign(c.z)*g,c.normalize(),h[m+0]=u.x*Math.sign(l.x)+c.x*r,h[m+1]=u.y*Math.sign(l.y)+c.y*r,h[m+2]=u.z*Math.sign(l.z)+c.z*r,d[m+0]=c.x,d[m+1]=c.y,d[m+2]=c.z,Math.floor(m/_)){case 0:y.set(1,0,0),f[M+0]=oi(y,c,"z","y",r,n),f[M+1]=1-oi(y,c,"y","z",r,t);break;case 1:y.set(-1,0,0),f[M+0]=1-oi(y,c,"z","y",r,n),f[M+1]=1-oi(y,c,"y","z",r,t);break;case 2:y.set(0,1,0),f[M+0]=1-oi(y,c,"x","z",r,e),f[M+1]=oi(y,c,"z","x",r,n);break;case 3:y.set(0,-1,0),f[M+0]=1-oi(y,c,"x","z",r,e),f[M+1]=1-oi(y,c,"z","x",r,n);break;case 4:y.set(0,0,1),f[M+0]=1-oi(y,c,"x","y",r,e),f[M+1]=1-oi(y,c,"y","x",r,t);break;case 5:y.set(0,0,-1),f[M+0]=oi(y,c,"x","y",r,e),f[M+1]=1-oi(y,c,"y","x",r,t);break}}static fromJSON(e){return new i(e.width,e.height,e.depth,e.segments,e.radius)}};function RM(i){i.updateMatrixWorld(!0);let e=new Map,t=[];i.traverse(n=>{if(!n.isMesh||Array.isArray(n.material))return;let s=(n.geometry.index?n.geometry.toNonIndexed():n.geometry.clone()).applyMatrix4(n.matrixWorld);for(let r of Object.keys(s.attributes))["position","normal","uv"].includes(r)||s.deleteAttribute(r);e.has(n.material)||e.set(n.material,[]),e.get(n.material).push(s),t.push(n)}),t.forEach(n=>n.parent.remove(n)),[...i.children].forEach(n=>{!n.isMesh&&n.children.length===0&&i.remove(n)});for(let[n,s]of e)i.add(new ae(qc(s),n))}function _m(i,e){i.onBeforeCompile=t=>{t.uniforms.uSleep=e.uSleep,t.uniforms.uDim=e.uDim,t.uniforms.uGlow=e.uGlow,t.fragmentShader=`uniform float uSleep; uniform float uDim; uniform float uGlow;
`+t.fragmentShader.replace("#include <dithering_fragment>",`float lum = dot(gl_FragColor.rgb, vec3(0.299, 0.587, 0.114));
       // asleep: buried under years of rust-coloured dust, flat and dim
       vec3 dusty = vec3(lum) * vec3(1.15, 0.78, 0.58) * 0.55 + vec3(0.05, 0.022, 0.01);
       // awake: clean and a touch brighter, so the change reads instantly
       vec3 awake = gl_FragColor.rgb * 1.18;
       gl_FragColor.rgb = mix(awake, dusty, uSleep);
       gl_FragColor.rgb *= mix(1.0, 0.32, uDim);
       float rim = 1.0 - abs(dot(normalize(normal), normalize(vViewPosition)));
       gl_FragColor.rgb += vec3(0.25, 0.85, 1.0) * uGlow * (0.06 + pow(rim, 2.5) * 1.4);
       // a faint cyan rim stays on while the rover is awake
       gl_FragColor.rgb += vec3(0.2, 0.7, 1.0) * pow(rim, 4.0) * 0.12 * (1.0 - uSleep) * (1.0 - uDim);
       #include <dithering_fragment>`)},i.customProgramCacheKey=()=>"tlf-rover"}function vm(){return{uSleep:{value:1},uDim:{value:0},uGlow:{value:0}}}function ym(i,e,t,n,s){e.traverse(o=>{o.isMesh&&(o.castShadow=!0,o.receiveShadow=!0)});let r=Wh[i],a=new $e;return a.position.set(r.x,Is(r.x,r.z),r.z),a.add(e),{id:i,pivot:a,model:e,u:t,height:n,radius:s,baseYaw:0}}function CM(){let i=document.createElement("canvas");i.width=256,i.height=192;let e=i.getContext("2d");e.fillStyle="#1a2440",e.fillRect(0,0,256,192);for(let n=0;n<12;n++)for(let s=0;s<16;s++){let r=40+(s*7+n*13)%9*3;e.fillStyle=`rgb(${r-12},${r+6},${r+52})`,e.fillRect(s*16+1,n*16+1,14,14)}let t=new ln(i);return t.colorSpace=At,t}function Zc(){let i=vm(),e=new $e,t=new qe({color:"#c9a35e",metalness:.75,roughness:.38}),n=new qe({color:"#d8c7a0",metalness:.6,roughness:.55}),s=new qe({color:"#b9b6b0",metalness:.85,roughness:.35}),r=new qe({color:"#1d1b1a",metalness:.3,roughness:.55}),a=new qe({map:CM(),metalness:.5,roughness:.3}),o=new qe({color:"#e2ded6",roughness:.65}),l=new qe({color:"#a33a2a",roughness:.6});[t,n,s,r,a,o,l].forEach(g=>_m(g,i));let c=(g,m,M,A)=>(g.position.set(m,M,A),e.add(g),g);c(new ae(new On(.4,.13,.3,2,.012),t),0,.2,0),c(new ae(new On(.36,.02,.26,1,.006),n),0,.27,0);let u=c(new ae(new _n(.48,.01,.36),[s,s,a,r,s,s]),0,.285,-.01);for(let[g,m,M,A]of[[.49,.012,0,.17],[.49,.012,0,-.19],[.012,.37,.243,-.01],[.012,.37,-.243,-.01]])c(new ae(new _n(g,.016,m),s),M,.287,A);c(new ae(new On(.14,.035,.035,2,.008),o),0,.235,.165);for(let g of[-1,1]){let m=c(new ae(new bt(.009,.009,.012,16),r),g*.04,.237,.184);m.rotation.x=Math.PI/2;let M=c(new ae(new _n(.03,.012,.012),l),g*.11,.16,.156)}let h=c(new ae(new _n(.018,.018,.1),s),0,.17,-.19);h.rotation.x=.6,c(new ae(new bt(.022,.022,.04,16),s),0,.13,-.235),c(new ae(new bt(.008,.01,.06,10),s),.15,.32,-.1),c(new ae(new bt(.0025,.0025,.34,6),r),.15,.52,-.1),c(new ae(new Ut(.007,10,8),s),.15,.69,-.1);let d=new bt(.066,.066,.075,24,1,!0);d.rotateZ(Math.PI/2);let f=new es(.064,24),_=new _n(.078,.008,.012),y=new bt(.018,.018,.085,12);y.rotateZ(Math.PI/2);for(let g of[-1,1]){for(let A of[-.2,0,.2]){let v=new $e;v.position.set(g*.265,.066,A),e.add(v),v.add(new ae(d,s));for(let b of[-1,1]){let S=new ae(f,r);S.rotation.y=b*Math.PI/2,S.position.x=b*.037,v.add(S)}for(let b=0;b<12;b++){let S=new ae(_,s),C=b/12*Math.PI*2;S.position.set(0,Math.cos(C)*.068,Math.sin(C)*.068),S.rotation.x=-C,v.add(S)}v.add(new ae(y,r))}let m=(A,v,b,S,C,p)=>{let E=new I(A,v,b),L=new I(S,C,p),z=c(new ae(new _n(.014,.014,E.distanceTo(L)),s),(A+S)/2,(v+C)/2,(b+p)/2);return z.lookAt(e.localToWorld(L.clone())),z},M=g*.235;m(M,.07,.2,M,.17,.04),m(M,.17,.04,M,.13,-.1),m(M,.13,-.1,M,.07,0),m(M,.13,-.1,M,.07,-.2),c(new ae(new Ut(.014,10,8),r),M,.17,.04)}return RM(e),ym("sojourner",e,i,.6,.45)}async function Mm(i,e){return(await new Yc().loadAsync(i,e)).scene}function Md(i,e){let t=vm(),n=e.clone(!0);return n.traverse(s=>{s.isMesh&&(s.material=Array.isArray(s.material)?s.material.map(r=>r.clone()):s.material.clone(),[s.material].flat().forEach(r=>{r.envMapIntensity=1,_m(r,t)}))}),ym(i,n,t,1.58,1.6)}function Sm(){let i=new $e,e=new $e;i.add(e);let t=new $e;t.rotation.set(-1.2,Math.PI,0),e.add(t);let n=(()=>{let Z=document.createElement("canvas");Z.width=Z.height=64;let fe=Z.getContext("2d");for(let Je=0;Je<64;Je++)for(let Ve=0;Ve<64;Ve++){let Ge=128+50*Math.sin(Ve*.8)*Math.sin(Je*.8)+(Math.random()-.5)*40;fe.fillStyle=`rgb(${Ge},${Ge},${Ge})`,fe.fillRect(Ve,Je,1,1)}let xe=new ln(Z);return xe.wrapS=xe.wrapT=ei,xe.repeat.set(3,3),xe})(),s=new qe({color:"#ddd7cc",roughness:.9,metalness:0,bumpMap:n,bumpScale:.6}),r=new qe({color:"#7b7d82",roughness:.6,metalness:.1}),a=new qe({color:"#c9ccd2",roughness:.28,metalness:.95}),o=new qe({color:"#2b5fb8",roughness:.55}),l=new qe({color:"#e0682a",roughness:.55}),c=new qe({color:"#0b2533",emissive:"#58e3ff",emissiveIntensity:.4,roughness:.2});[s,r,a,o,l,c].forEach(Z=>{Z.fog=!1});let h=new ae(new On(.17,.19,.075,3,.03),s);t.add(h);let d=new ae(new On(.13,.13,.02,2,.008),r);d.position.set(0,-.01,-.035),t.add(d);let f=new ae(new On(.168,.036,.05,2,.016),s);f.position.set(0,.078,.02),t.add(f);let _=new ae(new bt(.02,.02,.01,32),c);_.rotation.x=Math.PI/2,_.position.set(0,-.01,-.047),t.add(_);let y=new ae(new Gn(.025,.005,10,40),a);y.position.copy(_.position),t.add(y);let g=(()=>{let Z=document.createElement("canvas");Z.width=Z.height=128;let fe=Z.getContext("2d"),xe=fe.createRadialGradient(64,64,0,64,64,64);xe.addColorStop(0,"rgba(255,255,255,1)"),xe.addColorStop(.25,"rgba(140,235,255,0.6)"),xe.addColorStop(1,"rgba(60,180,255,0)"),fe.fillStyle=xe,fe.fillRect(0,0,128,128);let Je=new ln(Z);return Je.colorSpace=At,Je})(),m=new mn(new cn({map:g,color:"#7fe8ff",transparent:!0,depthWrite:!1,blending:Et,fog:!1,toneMapped:!1}));m.scale.setScalar(.12),m.position.set(0,-.005,-.1),t.add(m);let M=new ae(new xi(.018,2),new Lt({color:new oe(2.2,5,6),toneMapped:!1,fog:!1,transparent:!0}));M.position.set(0,-.005,-.1),t.add(M);let A=new Qe,v=40,b=new Float32Array(v*3),S=new Float32Array(v*3);for(let Z=0;Z<v;Z++)S[Z*3]=Math.random()*6.28,S[Z*3+1]=Math.random()*6.28,S[Z*3+2]=.6+Math.random();A.setAttribute("position",new ct(b,3));let C=new Tn(A,new ii({map:g,color:new oe(1.5,3.5,4.5),size:.012,transparent:!0,depthWrite:!1,blending:Et,toneMapped:!1,fog:!1}));C.frustumCulled=!1,t.add(C);let p=new _i("#6fe0ff",0,7,1.4);p.position.set(0,-.005,-.14),t.add(p);let E=[],L=[-.058,-.019,.02,.058],z=[[.05,.036,.03],[.056,.04,.032],[.052,.037,.03],[.04,.03,.026]];L.forEach((Z,fe)=>{let xe=t,Je=[],Ve=.095;z[fe].forEach((Ge,Xe)=>{let He=new $e;He.position.set(Xe===0?Z:0,Ve,Xe===0?.004:0),xe.add(He);let pt=.0185-Xe*.0018,rt=new ae(new Li(pt,Ge-pt,4,12),Xe===2?r:s);if(rt.position.y=Ge/2,He.add(rt),Xe>0){let mt=new ae(new Gn(pt*.98,pt*.18,6,16),r);mt.rotation.x=Math.PI/2,mt.position.y=.002,He.add(mt)}Je.push(He),xe=He,Ve=Ge}),E.push(Je)});let O=new $e;O.position.set(-.085,-.02,-.01),O.rotation.set(0,.5,.9),t.add(O);let G=new ae(new Li(.021,.035,4,12),s);G.position.y=.028,O.add(G);let w=new $e;w.position.y=.056,O.add(w);let D=new ae(new Li(.019,.026,4,12),r);D.position.y=.022,w.add(D);let H=new ae(new bt(.07,.075,.06,32),s);H.position.y=-.125,t.add(H);let N=new ae(new Gn(.08,.012,12,48),a);N.rotation.x=Math.PI/2,N.position.y=-.16,t.add(N);let B=new ae(new bt(.088,.1,.36,32),s);B.position.y=-.35,t.add(B);let R=new ae(new bt(.0895,.0905,.022,32),o);R.position.y=-.2,t.add(R);let F=new ae(new bt(.0915,.0925,.016,32),l);F.position.y=-.232,t.add(F);let W=new ae(new On(.07,.045,.02,2,.006),r);W.position.set(0,-.215,.085),t.add(W);let le=new ae(new ts(.055,.03),new Lt({color:"#58e3ff",toneMapped:!1,fog:!1}));le.position.set(0,-.215,.0955),t.add(le),e.traverse(Z=>{Z.isMesh&&(Z.castShadow=!1,Z.receiveShadow=!1,Z.renderOrder=10)});let ie={charge:0,recoil:0,open:0,t:0,tiltX:0,tiltY:0,raise:0,raiseTarget:0},Le=new I,ke=!1;function Ce(Z){ke=Z<.9,ke?(Le.set(.15,-.4,-.95),i.scale.setScalar(.8)):(Le.set(.31,-.27,-.92),i.scale.setScalar(1.05)),i.position.copy(Le)}function Q(Z,fe){ie.t+=Z,ie.raise+=(ie.raiseTarget-ie.raise)*Math.min(1,Z*3.2),i.position.set(Le.x,Le.y-(1-ie.raise)*.42,Le.z),ie.recoil=Math.max(0,ie.recoil-Z*2.6),ie.open=Math.max(0,ie.open-Z*.9),ie.tiltX+=((fe?.y??0)*.12-ie.tiltX)*Math.min(1,Z*5),ie.tiltY+=((fe?.x??0)*-.18-ie.tiltY)*Math.min(1,Z*5);let xe=ie.charge,Je=Math.sin(ie.t*1.6)*.006,Ve=xe>.55?(Math.random()-.5)*.004*(xe-.55)*2:0,Ge=Math.sin(Math.min(1,ie.recoil)*Math.PI);e.position.set(Ve-Ge*.05,Je+Ve+Ge*.05,-Ge*.16),e.rotation.set(ie.tiltX+Ge*.35+xe*.06,(ke?.12:.32)+ie.tiltY,(ke?.15:.3)-xe*.08);let Xe=Tt.lerp(.18+xe*.5,-.1,Math.min(1,ie.open*1.6));E.forEach((rt,mt)=>{let ut=1-mt*.06;rt[0].rotation.x=-Xe*.7*ut,rt[1].rotation.x=-Xe*1*ut,rt[2].rotation.x=-Xe*.8*ut,rt[0].rotation.z=(1.5-mt)*(.045+ie.open*.1)}),w.rotation.x=-(.15+xe*.45)+ie.open*.3,O.rotation.x=-xe*.2;let He=xe>.02&&ie.open<.05,pt=He?.25+xe*1.6+Math.sin(ie.t*22)*.06*xe:.001;if(M.scale.setScalar(pt),M.visible=He,M.position.z=-.085-xe*.04,M.rotation.y+=Z*4,M.rotation.x+=Z*2.6,m.position.z=M.position.z,C.visible=He,He){for(let rt=0;rt<v;rt++){let mt=S[rt*3]+ie.t*(2+S[rt*3+2]*3),ut=S[rt*3+1]+ie.t*1.3,xt=(.03+xe*.05)*S[rt*3+2];b[rt*3]=Math.cos(mt)*Math.sin(ut)*xt,b[rt*3+1]=-.005+Math.cos(ut)*xt,b[rt*3+2]=M.position.z+Math.sin(mt)*Math.sin(ut)*xt}A.attributes.position.needsUpdate=!0}c.emissiveIntensity=.3+xe*2.5+ie.open*4+Math.sin(ie.t*3)*.08,m.material.opacity=Math.min(1,xe*.85+ie.open*.8),m.material.color.setRGB(.35+xe*.9,.7+xe*1.5,.9+xe*1.8),m.scale.setScalar(.03+xe*.075+ie.open*.12),p.intensity=xe*6+ie.open*14,le.material.color.setRGB(.25+xe*.6,.8,1)}function ee(){ie.recoil=1,ie.open=1}function he(Z){return M.getWorldPosition(Z)}return{root:i,hand:e,state:ie,update:Q,fire:ee,layout:Ce,worldPalm:he}}var PM=`
varying vec2 vUv;
void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`,IM=`
uniform float uTime; uniform float uAlpha; uniform vec3 uColor; uniform float uCore;
varying vec2 vUv;
float h(float n){ return fract(sin(n)*43758.5453); }
float n1(float x){ float i=floor(x); float f=fract(x); return mix(h(i),h(i+1.0),f*f*(3.0-2.0*f)); }
void main(){
  // vUv.x wraps around the tube; vUv.y runs palm(0) -> rover(1)
  float edge = abs(sin(vUv.x*3.14159));
  float flow = n1(vUv.y*28.0 - uTime*22.0)*0.55 + n1(vUv.y*9.0 - uTime*9.0 + vUv.x*6.0)*0.45;
  float fade = smoothstep(0.0,0.06,vUv.y)*smoothstep(1.0,0.9,vUv.y);
  float a = pow(edge, 1.6) * (0.55 + flow*0.75) * fade * uAlpha;
  vec3 col = mix(uColor, vec3(1.0), pow(edge,6.0)*uCore);
  gl_FragColor = vec4(col * (1.0 + uCore*2.5), a);
}`;function LM(){let i=document.createElement("canvas");i.width=i.height=64;let e=i.getContext("2d"),t=e.createRadialGradient(32,32,0,32,32,32);return t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,64,64),new ln(i)}function bm(i){let e=new $e;i.add(e);let t=(S,C,p)=>new ae(new bt(S,S*.12,1,24,1,!0).translate(0,.5,0).rotateX(Math.PI/2),new ft({vertexShader:PM,fragmentShader:IM,transparent:!0,depthWrite:!1,side:Ht,blending:Et,toneMapped:!1,fog:!1,uniforms:{uTime:{value:0},uAlpha:{value:0},uColor:{value:new oe(C)},uCore:{value:p}}})),n=t(.075,"#3fb8ff",.2),s=t(.03,"#bff6ff",1);[n,s].forEach(S=>{S.visible=!1,S.frustumCulled=!1,e.add(S)});let r=LM(),a=new mn(new cn({map:r,color:new oe(2.5,5,6),transparent:!0,depthWrite:!1,blending:Et,toneMapped:!1,fog:!1}));a.visible=!1,e.add(a);let o=new mn(new cn({map:r,color:new oe(3,5,6),transparent:!0,depthWrite:!1,blending:Et,toneMapped:!1,fog:!1}));o.visible=!1,e.add(o);let l=new ae(new Ks(.82,1,96),new Lt({color:new oe(1.4,3.2,4),transparent:!0,depthWrite:!1,blending:Et,toneMapped:!1,side:Ht}));l.rotation.x=-Math.PI/2,l.visible=!1,e.add(l);let c=l.clone();c.material=l.material.clone(),e.add(c);let u=new _i("#7fe6ff",0,9,1.6);e.add(u);let h=220,d=new Qe,f=new Float32Array(h*3),_=new Float32Array(h*3);d.setAttribute("position",new ct(f,3));let y=new Tn(d,new ii({map:r,size:.16,color:"#d89a6c",transparent:!0,opacity:0,depthWrite:!1,sizeAttenuation:!0}));y.frustumCulled=!1,e.add(y);let g={phase:"idle",t:0,from:new I,to:new I,base:new I,scale:1,shake:0,onHit:null},m=new I;function M(S,C,p){let E=S.distanceTo(C)*p;for(let L of[n,s])L.position.copy(S),L.lookAt(C),L.scale.set(1,1,Math.max(.001,E))}function A(S,C,p,E,L){g.phase="travel",g.t=0,g.from.copy(S),g.to.copy(C),g.base.copy(p),g.scale=E,g.onHit=L,n.visible=s.visible=a.visible=!0}function v(){for(let S=0;S<h;S++){let C=Math.random()*Math.PI*2,p=Math.random()*.5*g.scale;f[S*3]=g.base.x+Math.cos(C)*p,f[S*3+1]=g.base.y+.05,f[S*3+2]=g.base.z+Math.sin(C)*p;let E=(1.2+Math.random()*2.6)*g.scale;_[S*3]=Math.cos(C)*E,_[S*3+1]=(.6+Math.random()*1.6)*g.scale,_[S*3+2]=Math.sin(C)*E}d.attributes.position.needsUpdate=!0,y.material.opacity=.55,y.material.size=.05*Math.max(.6,g.scale)}function b(S,C,p){if(n.material.uniforms.uTime.value=C,s.material.uniforms.uTime.value=C,g.shake=Math.max(0,g.shake-S*2.2),p&&g.phase!=="idle"&&g.from.copy(p),g.phase==="travel"){g.t+=S;let E=Math.min(1,g.t/.32),L=1-Math.pow(1-E,3);M(g.from,g.to,L),m.lerpVectors(g.from,g.to,L),a.position.copy(m),a.scale.setScalar(.35+Math.sin(C*40)*.05),n.material.uniforms.uAlpha.value=s.material.uniforms.uAlpha.value=1,E>=1&&(g.phase="hold",g.t=0,a.visible=!1,o.visible=!0,o.position.copy(g.to),l.visible=c.visible=!0,l.position.copy(g.base).y+=.03,c.position.copy(l.position),u.position.copy(g.to),u.intensity=40,g.shake=1,v(),g.onHit?.())}else if(g.phase==="hold"){g.t+=S,M(g.from,g.to,1);let E=Math.max(0,1-g.t/.55);n.material.uniforms.uAlpha.value=E,s.material.uniforms.uAlpha.value=E;let L=Math.min(1,g.t/.5);o.scale.setScalar((.5+L*2.4)*g.scale),o.material.opacity=(1-L)*.8;let z=Math.min(1,g.t/1.1),O=Math.min(1,Math.max(0,(g.t-.15)/1.3));l.scale.setScalar((.3+z*4.5)*g.scale),l.material.opacity=(1-z)*.9,c.scale.setScalar((.2+O*7)*g.scale),c.material.opacity=(1-O)*.45,u.intensity=40*Math.max(0,1-g.t/.7),g.t>1.5&&(g.phase="idle",n.visible=s.visible=o.visible=l.visible=c.visible=!1)}if(y.material.opacity>0){for(let E=0;E<h;E++)_[E*3+1]-=1.6*S*g.scale,_[E*3]*=1-S*1.4,_[E*3+2]*=1-S*1.4,f[E*3]+=_[E*3]*S,f[E*3+1]=Math.max(g.base.y+.02,f[E*3+1]+_[E*3+1]*S),f[E*3+2]+=_[E*3+2]*S;d.attributes.position.needsUpdate=!0,y.material.opacity=Math.max(0,y.material.opacity-S*.32),y.material.size+=S*.03}}return{fire:A,update:b,get shake(){return g.shake},get busy(){return g.phase!=="idle"}}}function Em(){let i=null,e=null,t=!1,n=null,s=null,r=null,a=null,o=null,l=null,c=null,u={space:null,mars:null,current:null};function h(w=2){let D=i.createBuffer(1,i.sampleRate*w,i.sampleRate),H=D.getChannelData(0),N=0;for(let B=0;B<H.length;B++){let R=Math.random()*2-1;N=(N+.02*R)/1.02,H[B]=N*3.5}return D}function d(w=1){let D=i.createBuffer(1,i.sampleRate*w,i.sampleRate),H=D.getChannelData(0);for(let N=0;N<H.length;N++)H[N]=Math.random()*2-1;return D}function f(){if(i){i.state==="suspended"&&i.resume();return}let w=window.AudioContext||window.webkitAudioContext;w&&(i=new w,e=i.createGain(),e.gain.value=t?0:.9,e.connect(i.destination),n=i.createAnalyser(),n.fftSize=1024,e.connect(n),s=i.createGain(),s.gain.value=1,s.connect(e),l=i.createBiquadFilter(),l.type="lowpass",l.frequency.value=300,l.Q.value=6,o=i.createGain(),o.gain.value=0,r=i.createOscillator(),r.type="sawtooth",r.frequency.value=70,a=i.createOscillator(),a.type="sine",a.frequency.value=140,r.connect(l),a.connect(l),l.connect(o).connect(e),r.start(),a.start())}function _(){let w=i.createGain();w.gain.value=0,w.connect(s);let D=i.createBufferSource();D.buffer=h(4),D.loop=!0;let H=i.createBiquadFilter();H.type="bandpass",H.frequency.value=380,H.Q.value=.6,D.connect(H).connect(w),D.start();let N=i.createOscillator();N.frequency.value=.07;let B=i.createGain();return B.gain.value=160,N.connect(B).connect(H.frequency),N.start(),{gain:w,level:.16}}function y(){let w=i.createGain();w.gain.value=0,w.connect(s);let D=i.createBiquadFilter();D.type="lowpass",D.frequency.value=520,D.Q.value=.4,D.connect(w),[[55,"sine"],[55.4,"triangle"],[82.4,"sine"],[110.2,"sine"]].forEach(([B,R],F)=>{let W=i.createOscillator();W.type=R,W.frequency.value=B;let le=i.createGain();le.gain.value=[.5,.25,.3,.12][F],W.connect(le).connect(D),W.start()});let H=i.createOscillator();H.frequency.value=.05;let N=i.createGain();return N.gain.value=220,H.connect(N).connect(D.frequency),H.start(),{gain:w,level:.085}}function g(w){if(!i)return;w==="mars"&&!u.mars&&(u.mars=_()),w==="space"&&!u.space&&(u.space=y());let D=i.currentTime;for(let H of["mars","space"]){let N=u[H];N&&(N.gain.gain.cancelScheduledValues(D),N.gain.gain.setValueAtTime(N.gain.gain.value,D),N.gain.gain.linearRampToValueAtTime(H===w?N.level:0,D+(H===w?2.5:1.2)))}u.current=w}function m(){if(!i)return;let w=i.currentTime,D=i.createBufferSource();D.buffer=d(1.4);let H=i.createBiquadFilter();H.type="bandpass",H.frequency.value=2400,H.Q.value=.8;let N=i.createGain();N.gain.setValueAtTime(0,w);for(let F=0;F<14;F++)N.gain.setValueAtTime(.05+Math.random()*.12,w+F*.07);N.gain.linearRampToValueAtTime(0,w+1.25),D.connect(H).connect(N).connect(e),D.start(w),D.stop(w+1.4);let B=i.createOscillator();B.type="sine",B.frequency.setValueAtTime(1600,w+.9),B.frequency.exponentialRampToValueAtTime(880,w+1.15);let R=i.createGain();R.gain.setValueAtTime(0,w+.9),R.gain.linearRampToValueAtTime(.12,w+.93),R.gain.exponentialRampToValueAtTime(.001,w+1.5),B.connect(R).connect(e),B.start(w+.9),B.stop(w+1.6)}function M(w=0){if(!i)return;let D=i.currentTime,H=[784,988,1175][w%3],N=i.createOscillator();N.type="sine",N.frequency.value=H;let B=i.createGain();B.gain.setValueAtTime(0,D),B.gain.linearRampToValueAtTime(.11,D+.01),B.gain.exponentialRampToValueAtTime(.001,D+.9);let R=i.createDelay();R.delayTime.value=.22;let F=i.createGain();F.gain.value=.32,N.connect(B),B.connect(e),B.connect(R),R.connect(F).connect(R),R.connect(e),N.start(D),N.stop(D+1)}function A(w=2.8){if(!i)return;let D=i.currentTime,H=i.createBufferSource();H.buffer=h(w+.5);let N=i.createBiquadFilter();N.type="bandpass",N.Q.value=1.2,N.frequency.setValueAtTime(180,D),N.frequency.exponentialRampToValueAtTime(2600,D+w);let B=i.createGain();B.gain.setValueAtTime(1e-4,D),B.gain.exponentialRampToValueAtTime(.5,D+w*.9),B.gain.exponentialRampToValueAtTime(.001,D+w+.4),H.connect(N).connect(B).connect(e),H.start(D),H.stop(D+w+.5);let R=i.createOscillator();R.type="sine",R.frequency.setValueAtTime(40,D),R.frequency.linearRampToValueAtTime(70,D+w);let F=i.createGain();F.gain.setValueAtTime(1e-4,D),F.gain.exponentialRampToValueAtTime(.35,D+w),F.gain.exponentialRampToValueAtTime(.001,D+w+.6),R.connect(F).connect(e),R.start(D),R.stop(D+w+.7)}function v(w){if(!i)return;let D=i.currentTime;o.gain.setTargetAtTime(w>.01?.05+w*.11:0,D,.05),r.frequency.setTargetAtTime(70+w*260,D,.05),a.frequency.setTargetAtTime(140+w*620,D,.05),l.frequency.setTargetAtTime(300+w*2600,D,.05)}function b(){if(!i)return;let w=i.currentTime,D=i.createBufferSource();D.buffer=h(1);let H=i.createBiquadFilter();H.type="highpass",H.frequency.setValueAtTime(3e3,w),H.frequency.exponentialRampToValueAtTime(200,w+.6);let N=i.createGain();N.gain.setValueAtTime(.5,w),N.gain.exponentialRampToValueAtTime(.001,w+.9),D.connect(H).connect(N).connect(e),D.start(w),D.stop(w+1);let B=i.createOscillator();B.type="sine",B.frequency.setValueAtTime(900,w),B.frequency.exponentialRampToValueAtTime(45,w+.7);let R=i.createGain();R.gain.setValueAtTime(.45,w),R.gain.exponentialRampToValueAtTime(.001,w+.9),B.connect(R).connect(e),B.start(w),B.stop(w+1)}function S(){if(!i)return;let w=i.currentTime;[1046.5,1318.5,1568,2093].forEach((D,H)=>{let N=i.createOscillator();N.type="sine",N.frequency.value=D;let B=i.createGain(),R=w+.25+H*.12;B.gain.setValueAtTime(0,R),B.gain.linearRampToValueAtTime(.09,R+.02),B.gain.exponentialRampToValueAtTime(.001,R+1.4),N.connect(B).connect(e),N.start(R),N.stop(R+1.5)})}let C=0;function p(w=1){if(!i||c)return;let D=i.currentTime;if(D-C<.075)return;C=D;let H=(420+Math.random()*360)*w,N=i.createBiquadFilter();N.type="bandpass",N.frequency.value=1400*w,N.Q.value=.9;let B=i.createGain();B.gain.setValueAtTime(1e-4,D),B.gain.exponentialRampToValueAtTime(.16,D+.008),B.gain.exponentialRampToValueAtTime(.001,D+.085),[1,1.5].forEach(R=>{let F=i.createOscillator();F.type=R===1?"square":"triangle",F.frequency.setValueAtTime(H*R,D),F.frequency.exponentialRampToValueAtTime(H*R*(Math.random()>.5?1.25:.8),D+.07),F.connect(N),F.start(D),F.stop(D+.09)}),N.connect(B).connect(e)}function E(w){!i||!s||s.gain.setTargetAtTime(w?.35:1,i.currentTime,.15)}function L(w){return z(),!w||t?null:(c=new Audio(w),c.addEventListener("ended",()=>{c=null}),c.play().catch(()=>{c=null}),c)}function z(){c&&(c.pause(),c=null)}function O(w){t=w,e&&e.gain.setTargetAtTime(w?0:.9,i.currentTime,.05),w&&z()}function G(){if(!n)return 0;let w=new Float32Array(n.fftSize);n.getFloatTimeDomainData(w);let D=0;for(let H of w)D+=H*H;return Math.sqrt(D/w.length)}return{level:G,duck:E,get ctx(){return i},start:f,setAmbient:g,signal:m,beep:M,whoosh:A,setCharge:v,zap:b,chime:S,blip:p,speak:L,stopSpeech:z,setMuted:O,get muted(){return t}}}var Tm=[{id:"sojourner",name:"Sojourner",mission:"Mars Pathfinder",site:"Ares Vallis",coords:"19.13\xB0N 33.22\xB0W",status_ar:"\u0633\u0627\u0643\u062A\u0629 \u0645\u0646 \u0662\u0667 \u0633\u0628\u062A\u0645\u0628\u0631 \u0661\u0669\u0669\u0667",status_en:"Silent since 27 Sep 1997",voice:{pitch:1.18,speed:1.05},stats:[{ar_label:"\u0646\u0632\u0644\u062A \u0639\u0644\u0649 \u0627\u0644\u0645\u0631\u064A\u062E",ar:"\u0664 \u064A\u0648\u0644\u064A\u0648 \u0661\u0669\u0669\u0667",en_label:"Landed on Mars",en:"4 Jul 1997"},{ar_label:"\u0627\u0644\u0639\u0645\u0631 \u0627\u0644\u0645\u062E\u0637\u0637",ar:"\u0667 \u0623\u064A\u0627\u0645 \u0645\u0631\u064A\u062E\u064A\u0629",en_label:"Planned life",en:"7 sols"},{ar_label:"\u0627\u0634\u062A\u063A\u0644\u062A \u0641\u0639\u0644\u064B\u0627",ar:"\u062D\u0648\u0627\u0644\u064A \u0668\u0663 \u064A\u0648\u0645",en_label:"Actually worked",en:"about 83 sols"},{ar_label:"\u0627\u0644\u0648\u0632\u0646",ar:"\u062D\u0648\u0627\u0644\u064A \u0661\u0660 \u0643\u064A\u0644\u0648",en_label:"Mass",en:"about 10 kg"},{ar_label:"\u0622\u062E\u0631 \u0627\u062A\u0635\u0627\u0644",ar:"\u0662\u0667 \u0633\u0628\u062A\u0645\u0628\u0631 \u0661\u0669\u0669\u0667",en_label:"Last contact",en:"27 Sep 1997"}],source:"https://science.nasa.gov/mission/mars-pathfinder/",lines:[{kind:"fiction",ar:"\u2026\u0647\u0647\u061F \u0645\u064A\u0646 \u0635\u062D\u0651\u0627\u0646\u064A\u061F \u0634\u0643\u0631\u064B\u0627 \u0644\u064A\u0643! \u0623\u0646\u0627 Sojourner\u060C \u0623\u0635\u063A\u0631 \u0631\u0648\u0641\u0631 \u0641\u064A \u0627\u0644\u062D\u0643\u0627\u064A\u0629\u2026 \u0648\u0623\u0648\u0644 \u0639\u0631\u0628\u064A\u0629 \u0628\u0639\u062C\u0644 \u062A\u0645\u0634\u064A \u0639\u0644\u0649 \u0643\u0648\u0643\u0628 \u062A\u0627\u0646\u064A!",tts_ar:"\u0647\u0647\u061F \u0645\u064A\u0646 \u0635\u062D\u0651\u0627\u0646\u064A\u061F \u0634\u0643\u0631\u0627 \u0644\u064A\u0643! \u0623\u0646\u0627 \u0633\u0648\u062C\u0648\u0631\u0646\u0631\u060C \u0623\u0635\u063A\u0631 \u0631\u0648\u0641\u0631 \u0641\u064A \u0627\u0644\u062D\u0643\u0627\u064A\u0629. \u0648\u0623\u0648\u0644 \u0639\u0631\u0628\u064A\u0629 \u0628\u0639\u062C\u0644 \u062A\u0645\u0634\u064A \u0639\u0644\u0649 \u0643\u0648\u0643\u0628 \u062A\u0627\u0646\u064A!",en:"\u2026Huh? Who woke me up? Thank you! I'm Sojourner, the smallest rover in this story\u2026 and the first wheeled vehicle to drive on another planet!",audio_en:"audio/sojourner_1_en.mp3"},{kind:"fiction",ar:"\u0647\u0642\u0648\u0644\u0643 \u0633\u0631: \u0623\u0646\u0627 \u0633\u0627\u0643\u062A\u0629 \u0645\u0646 \u0633\u0646\u0629 \u0661\u0669\u0669\u0667\u060C \u0648\u0627\u0644\u0637\u0627\u0642\u0629 \u062F\u064A \u062C\u0627\u064A\u0629 \u0645\u0646 \u062E\u064A\u0627\u0644\u0643. \u0628\u0633 \u0627\u0644\u0644\u064A \u0639\u0645\u0644\u062A\u0647 \u0644\u0633\u0647 \u0627\u0644\u0639\u0644\u0645\u0627\u0621 \u0641\u0627\u0643\u0631\u064A\u0646\u0647 \u0644\u062D\u062F \u0627\u0644\u0646\u0647\u0627\u0631\u062F\u0647.",tts_ar:"\u0647\u0642\u0648\u0644\u0643 \u0633\u0631: \u0623\u0646\u0627 \u0633\u0627\u0643\u062A\u0629 \u0645\u0646 \u0633\u0646\u0629 1997\u060C \u0648\u0627\u0644\u0637\u0627\u0642\u0629 \u062F\u064A \u062C\u0627\u064A\u0629 \u0645\u0646 \u062E\u064A\u0627\u0644\u0643. \u0628\u0633 \u0627\u0644\u0644\u064A \u0639\u0645\u0644\u062A\u0647 \u0644\u0633\u0647 \u0627\u0644\u0639\u0644\u0645\u0627\u0621 \u0641\u0627\u0643\u0631\u064A\u0646\u0647 \u0644\u062D\u062F \u0627\u0644\u0646\u0647\u0627\u0631\u062F\u0647.",en:"Here's a secret: I've been silent since 1997, and this energy comes from your imagination. But scientists still remember what I did.",audio_en:"audio/sojourner_2_en.mp3"},{kind:"fact",ar:"\u0646\u0632\u0644\u062A \u0639\u0644\u0649 \u0627\u0644\u0645\u0631\u064A\u062E \u064A\u0648\u0645 \u0664 \u064A\u0648\u0644\u064A\u0648 \u0661\u0669\u0669\u0667 \u062C\u0648\u0647 \u0648\u0627\u062F\u064A \u0627\u0633\u0645\u0647 Ares Vallis\u060C \u0648\u0646\u0637\u0651\u064A\u062A \u0639\u0644\u0649 \u0627\u0644\u0623\u0631\u0636 \u062C\u0648\u0647 \u0623\u0643\u064A\u0627\u0633 \u0647\u0648\u0627 \u0632\u064A \u0627\u0644\u0643\u0648\u0631\u0629! \u0643\u0627\u0646 \u0645\u062E\u0637\u0637 \u0623\u0634\u062A\u063A\u0644 \u0667 \u0623\u064A\u0627\u0645 \u0628\u0633\u2026 \u0648\u0627\u0634\u062A\u063A\u0644\u062A \u062D\u0648\u0627\u0644\u064A \u0668\u0663 \u064A\u0648\u0645.",tts_ar:"\u0646\u0632\u0644\u062A \u0639\u0644\u0649 \u0627\u0644\u0645\u0631\u064A\u062E \u064A\u0648\u0645 4 \u064A\u0648\u0644\u064A\u0648 1997 \u062C\u0648\u0647 \u0648\u0627\u062F\u064A \u0627\u0633\u0645\u0647 \u0622\u0631\u064A\u0633 \u0641\u0627\u0644\u064A\u0633\u060C \u0648\u0646\u0637\u0651\u064A\u062A \u0639\u0644\u0649 \u0627\u0644\u0623\u0631\u0636 \u062C\u0648\u0647 \u0623\u0643\u064A\u0627\u0633 \u0647\u0648\u0627 \u0632\u064A \u0627\u0644\u0643\u0648\u0631\u0629! \u0643\u0627\u0646 \u0645\u062E\u0637\u0637 \u0623\u0634\u062A\u063A\u0644 7 \u0623\u064A\u0627\u0645 \u0628\u0633\u060C \u0648\u0627\u0634\u062A\u063A\u0644\u062A \u062D\u0648\u0627\u0644\u064A 83 \u064A\u0648\u0645.",en:"I landed on Mars on 4 July 1997 in a valley called Ares Vallis, bouncing on the ground inside airbags like a ball! I was planned to work for just 7 days\u2026 and I worked for about 83.",audio_en:"audio/sojourner_3_en.mp3"},{kind:"fact",ar:"\u0648\u0632\u0646\u064A \u062D\u0648\u0627\u0644\u064A \u0661\u0660 \u0643\u064A\u0644\u0648 \u0628\u0633\u060C \u0648\u0643\u0646\u062A \u0628\u0641\u062D\u0635 \u0627\u0644\u0635\u062E\u0648\u0631 \u0628\u062C\u0647\u0627\u0632 \u0641\u064A \u0636\u0647\u0631\u064A. \u0648\u0627\u0644\u0639\u0644\u0645\u0627\u0621 \u0633\u0645\u0651\u0648\u0627 \u0627\u0644\u0635\u062E\u0648\u0631 \u0627\u0644\u0644\u064A \u062D\u0648\u0627\u0644\u064A\u0651\u0627 \u0623\u0633\u0627\u0645\u064A \u0644\u0637\u064A\u0641\u0629 \u0632\u064A Barnacle Bill \u0648 Yogi!",tts_ar:"\u0648\u0632\u0646\u064A \u062D\u0648\u0627\u0644\u064A 10 \u0643\u064A\u0644\u0648 \u0628\u0633\u060C \u0648\u0643\u0646\u062A \u0628\u0641\u062D\u0635 \u0627\u0644\u0635\u062E\u0648\u0631 \u0628\u062C\u0647\u0627\u0632 \u0641\u064A \u0636\u0647\u0631\u064A. \u0648\u0627\u0644\u0639\u0644\u0645\u0627\u0621 \u0633\u0645\u0651\u0648\u0627 \u0627\u0644\u0635\u062E\u0648\u0631 \u0627\u0644\u0644\u064A \u062D\u0648\u0627\u0644\u064A\u0627 \u0623\u0633\u0627\u0645\u064A \u0644\u0637\u064A\u0641\u0629 \u0632\u064A \u0628\u0627\u0631\u0646\u0627\u0643\u0644 \u0628\u064A\u0644 \u0648\u064A\u0648\u062C\u064A!",en:"I weighed only about 10 kilograms, and I studied rocks with an instrument on my back. Scientists gave the rocks around me fun names like Barnacle Bill and Yogi!",audio_en:"audio/sojourner_4_en.mp3"},{kind:"fact",ar:"\u0627\u0644\u0648\u0627\u062F\u064A \u0627\u0644\u0644\u064A \u0646\u0632\u0644\u062A \u0641\u064A\u0647 \u0627\u062A\u062D\u0641\u0631 \u0645\u0646 \u0641\u064A\u0636\u0627\u0646\u0627\u062A \u0645\u064A\u0629 \u0636\u062E\u0645\u0629 \u0645\u0646 \u0632\u0645\u0627\u0646 \u0623\u0648\u064A\u060C \u0648\u0627\u0644\u0635\u062E\u0648\u0631 \u0627\u0644\u0644\u064A \u0641\u062D\u0635\u062A\u0647\u0627 \u0633\u0627\u0639\u062F\u062A \u0627\u0644\u0639\u0644\u0645\u0627\u0621 \u064A\u0641\u0647\u0645\u0648\u0627 \u0625\u0646 \u0627\u0644\u0645\u0631\u064A\u062E \u0643\u0627\u0646 \u0641\u064A\u0647 \u0645\u064A\u0629 \u0643\u062A\u064A\u0631.",tts_ar:"\u0627\u0644\u0648\u0627\u062F\u064A \u0627\u0644\u0644\u064A \u0646\u0632\u0644\u062A \u0641\u064A\u0647 \u0627\u062A\u062D\u0641\u0631 \u0645\u0646 \u0641\u064A\u0636\u0627\u0646\u0627\u062A \u0645\u064A\u0629 \u0636\u062E\u0645\u0629 \u0645\u0646 \u0632\u0645\u0627\u0646 \u0623\u0648\u064A\u060C \u0648\u0627\u0644\u0635\u062E\u0648\u0631 \u0627\u0644\u0644\u064A \u0641\u062D\u0635\u062A\u0647\u0627 \u0633\u0627\u0639\u062F\u062A \u0627\u0644\u0639\u0644\u0645\u0627\u0621 \u064A\u0641\u0647\u0645\u0648\u0627 \u0625\u0646 \u0627\u0644\u0645\u0631\u064A\u062E \u0643\u0627\u0646 \u0641\u064A\u0647 \u0645\u064A\u0629 \u0643\u062A\u064A\u0631.",en:"The valley I landed in was carved by huge floods long ago, and the rocks I studied helped scientists understand that Mars once had a lot of water.",audio_en:"audio/sojourner_5_en.mp3"},{kind:"fact",ar:"\u0641\u064A \u0633\u0628\u062A\u0645\u0628\u0631 \u0661\u0669\u0669\u0667 \u0627\u0644\u0645\u062D\u0637\u0629 \u0627\u0644\u0644\u064A \u0643\u0646\u062A \u0628\u0643\u0644\u0651\u0645 \u0627\u0644\u0623\u0631\u0636 \u0645\u0646 \u062E\u0644\u0627\u0644\u0647\u0627 \u0633\u0643\u062A\u062A\u060C \u0641\u0628\u0642\u064A\u062A \u0644\u0648\u062D\u062F\u064A. \u0628\u0633 \u0623\u0646\u0627 \u0627\u0644\u0644\u064A \u0641\u062A\u062D\u062A \u0627\u0644\u0637\u0631\u064A\u0642 \u0644\u0643\u0644 \u0627\u0644\u0631\u0648\u0641\u0631\u0632 \u0627\u0644\u0644\u064A \u062C\u0645 \u0628\u0639\u062F\u064A.",tts_ar:"\u0641\u064A \u0633\u0628\u062A\u0645\u0628\u0631 1997 \u0627\u0644\u0645\u062D\u0637\u0629 \u0627\u0644\u0644\u064A \u0643\u0646\u062A \u0628\u0643\u0644\u0651\u0645 \u0627\u0644\u0623\u0631\u0636 \u0645\u0646 \u062E\u0644\u0627\u0644\u0647\u0627 \u0633\u0643\u062A\u062A\u060C \u0641\u0628\u0642\u064A\u062A \u0644\u0648\u062D\u062F\u064A. \u0628\u0633 \u0623\u0646\u0627 \u0627\u0644\u0644\u064A \u0641\u062A\u062D\u062A \u0627\u0644\u0637\u0631\u064A\u0642 \u0644\u0643\u0644 \u0627\u0644\u0631\u0648\u0641\u0631\u0632 \u0627\u0644\u0644\u064A \u062C\u0645 \u0628\u0639\u062F\u064A.",en:"In September 1997, the lander I used to talk to Earth went silent, and I was left alone. But I opened the road for every rover that came after me.",audio_en:"audio/sojourner_6_en.mp3"}]},{id:"spirit",name:"Spirit",mission:"MER-A",site:"Gusev Crater",coords:"14.57\xB0S 175.47\xB0E",status_ar:"\u0633\u0627\u0643\u062A \u0645\u0646 \u0662\u0662 \u0645\u0627\u0631\u0633 \u0662\u0660\u0661\u0660",status_en:"Silent since 22 Mar 2010",voice:{pitch:1,speed:1},stats:[{ar_label:"\u0646\u0632\u0644 \u0639\u0644\u0649 \u0627\u0644\u0645\u0631\u064A\u062E",ar:"\u0664 \u064A\u0646\u0627\u064A\u0631 \u0662\u0660\u0660\u0664",en_label:"Landed on Mars",en:"4 Jan 2004"},{ar_label:"\u0627\u0644\u0639\u0645\u0631 \u0627\u0644\u0645\u062E\u0637\u0637",ar:"\u0669\u0660 \u064A\u0648\u0645 \u0645\u0631\u064A\u062E\u064A",en_label:"Planned life",en:"90 sols"},{ar_label:"\u0627\u0634\u062A\u063A\u0644 \u0641\u0639\u0644\u064B\u0627",ar:"+\u0662\u0662\u0660\u0660 \u064A\u0648\u0645 \u0645\u0631\u064A\u062E\u064A",en_label:"Actually worked",en:"2,200+ sols"},{ar_label:"\u0627\u0644\u0645\u0633\u0627\u0641\u0629",ar:"\u0667\u066B\u0667 \u0643\u0645",en_label:"Distance",en:"7.7 km"},{ar_label:"\u0622\u062E\u0631 \u0627\u062A\u0635\u0627\u0644",ar:"\u0662\u0662 \u0645\u0627\u0631\u0633 \u0662\u0660\u0661\u0660",en_label:"Last contact",en:"22 Mar 2010"}],source:"https://science.nasa.gov/mission/mer-spirit/",lines:[{kind:"fiction",ar:"\u2026\u0625\u064A\u0647 \u062F\u0647\u061F \u2026 \u0623\u0646\u0627 \u0635\u062D\u064A\u062A\u061F! \u0634\u0643\u0631\u064B\u0627 \u0625\u0646\u0643 \u0635\u062D\u0651\u064A\u062A\u0646\u064A! \u0623\u0646\u0627 Spirit\u060C \u0631\u0648\u0641\u0631 \u0645\u0646 \u0646\u0627\u0633\u0627.",tts_ar:"\u0625\u064A\u0647 \u062F\u0647\u061F \u0623\u0646\u0627 \u0635\u062D\u064A\u062A\u061F! \u0634\u0643\u0631\u0627 \u0625\u0646\u0643 \u0635\u062D\u0651\u064A\u062A\u0646\u064A! \u0623\u0646\u0627 \u0633\u0628\u064A\u0631\u064A\u062A\u060C \u0631\u0648\u0641\u0631 \u0645\u0646 \u0646\u0627\u0633\u0627.",en:"\u2026What was that? \u2026 Am I awake?! Thank you for waking me up! I'm Spirit, a NASA rover.",audio_en:"audio/spirit_1_en.mp3"},{kind:"fiction",ar:"\u0647\u0642\u0648\u0644\u0643 \u0633\u0631: \u0623\u0646\u0627 \u0641\u064A \u0627\u0644\u062D\u0642\u064A\u0642\u0629 \u0633\u0627\u0643\u062A \u0645\u0646 \u0662\u0662 \u0645\u0627\u0631\u0633 \u0662\u0660\u0661\u0660\u060C \u0648\u0627\u0644\u0637\u0627\u0642\u0629 \u062F\u064A \u062C\u0627\u064A\u0629 \u0645\u0646 \u062E\u064A\u0627\u0644\u0643. \u0628\u0633 \u0627\u0644\u0644\u064A \u0627\u0643\u062A\u0634\u0641\u062A\u0647 \u0644\u0633\u0647 \u0639\u0627\u064A\u0634 \u0644\u062D\u062F \u0627\u0644\u0646\u0647\u0627\u0631\u062F\u0647.",tts_ar:"\u0647\u0642\u0648\u0644\u0643 \u0633\u0631: \u0623\u0646\u0627 \u0641\u064A \u0627\u0644\u062D\u0642\u064A\u0642\u0629 \u0633\u0627\u0643\u062A \u0645\u0646 22 \u0645\u0627\u0631\u0633 2010\u060C \u0648\u0627\u0644\u0637\u0627\u0642\u0629 \u062F\u064A \u062C\u0627\u064A\u0629 \u0645\u0646 \u062E\u064A\u0627\u0644\u0643. \u0628\u0633 \u0627\u0644\u0644\u064A \u0627\u0643\u062A\u0634\u0641\u062A\u0647 \u0644\u0633\u0647 \u0639\u0627\u064A\u0634 \u0644\u062D\u062F \u0627\u0644\u0646\u0647\u0627\u0631\u062F\u0647.",en:"Here's a secret: I've really been silent since 22 March 2010, and this energy comes from your imagination. But what I discovered is still alive today.",audio_en:"audio/spirit_2_en.mp3"},{kind:"fact",ar:"\u0646\u0632\u0644\u062A \u0639\u0644\u0649 \u0627\u0644\u0645\u0631\u064A\u062E \u064A\u0648\u0645 \u0664 \u064A\u0646\u0627\u064A\u0631 \u0662\u0660\u0660\u0664 \u062C\u0648\u0647 \u0641\u0648\u0647\u0629 \u0627\u0633\u0645\u0647\u0627 \u062C\u0648\u0633\u064A\u0641. \u0643\u0627\u0646\u0648\u0627 \u0645\u062E\u0637\u0637\u064A\u0646 \u0623\u0634\u062A\u063A\u0644 \u0669\u0660 \u064A\u0648\u0645 \u0645\u0631\u064A\u062E\u064A \u0628\u0633\u2026 \u0648\u0623\u0646\u0627 \u0627\u0634\u062A\u063A\u0644\u062A \u0623\u0643\u062A\u0631 \u0645\u0646 \u0662\u0662\u0660\u0660!",tts_ar:"\u0646\u0632\u0644\u062A \u0639\u0644\u0649 \u0627\u0644\u0645\u0631\u064A\u062E \u064A\u0648\u0645 4 \u064A\u0646\u0627\u064A\u0631 2004 \u062C\u0648\u0647 \u0641\u0648\u0647\u0629 \u0627\u0633\u0645\u0647\u0627 \u062C\u0648\u0633\u064A\u0641. \u0643\u0627\u0646\u0648\u0627 \u0645\u062E\u0637\u0637\u064A\u0646 \u0623\u0634\u062A\u063A\u0644 90 \u064A\u0648\u0645 \u0645\u0631\u064A\u062E\u064A \u0628\u0633\u060C \u0648\u0623\u0646\u0627 \u0627\u0634\u062A\u063A\u0644\u062A \u0623\u0643\u062A\u0631 \u0645\u0646 2200!",en:"I landed on Mars on 4 January 2004, inside Gusev Crater. I was planned to work for just 90 Martian days\u2026 and I worked for more than 2,200!",audio_en:"audio/spirit_3_en.mp3"},{kind:"fact",ar:"\u0633\u0646\u0629 \u0662\u0660\u0660\u0666 \u0639\u062C\u0644\u062A\u064A \u0627\u0644\u0623\u0645\u0627\u0645\u064A\u0629 \u0627\u0644\u064A\u0645\u064A\u0646 \u0628\u0637\u0651\u0644\u062A \u062A\u0644\u0641\u060C \u0641\u0628\u0642\u064A\u062A \u0623\u0645\u0634\u064A \u0644\u0648\u0631\u0627 \u0648\u0623\u0646\u0627 \u0628\u062C\u0631\u0651\u0647\u0627. \u0648\u062A\u062E\u064A\u0651\u0644\u061F \u0627\u0644\u0639\u062C\u0644\u0629 \u062F\u064A \u062D\u0641\u0631\u062A \u0627\u0644\u0623\u0631\u0636 \u0648\u0643\u0634\u0641\u062A \u062A\u0631\u0628\u0629 \u0643\u0644\u0647\u0627 \u062A\u0642\u0631\u064A\u0628\u064B\u0627 \u0633\u064A\u0644\u064A\u0643\u0627\u060C \u0648\u062F\u064A \u0639\u0644\u0627\u0645\u0629 \u0625\u0646 \u0632\u0645\u0627\u0646 \u0643\u0627\u0646 \u0641\u064A\u0647 \u0645\u064A\u0629 \u0633\u062E\u0646\u0629 \u0647\u0646\u0627.",tts_ar:"\u0633\u0646\u0629 2006 \u0639\u062C\u0644\u062A\u064A \u0627\u0644\u0623\u0645\u0627\u0645\u064A\u0629 \u0627\u0644\u064A\u0645\u064A\u0646 \u0628\u0637\u0651\u0644\u062A \u062A\u0644\u0641\u060C \u0641\u0628\u0642\u064A\u062A \u0623\u0645\u0634\u064A \u0644\u0648\u0631\u0627 \u0648\u0623\u0646\u0627 \u0628\u062C\u0631\u0651\u0647\u0627. \u0648\u062A\u062E\u064A\u0651\u0644\u061F \u0627\u0644\u0639\u062C\u0644\u0629 \u062F\u064A \u062D\u0641\u0631\u062A \u0627\u0644\u0623\u0631\u0636 \u0648\u0643\u0634\u0641\u062A \u062A\u0631\u0628\u0629 \u0643\u0644\u0647\u0627 \u062A\u0642\u0631\u064A\u0628\u0627 \u0633\u064A\u0644\u064A\u0643\u0627\u060C \u0648\u062F\u064A \u0639\u0644\u0627\u0645\u0629 \u0625\u0646 \u0632\u0645\u0627\u0646 \u0643\u0627\u0646 \u0641\u064A\u0647 \u0645\u064A\u0629 \u0633\u062E\u0646\u0629 \u0647\u0646\u0627.",en:"In 2006 my right front wheel stopped turning, so I drove backwards, dragging it. And guess what? That wheel dug up soil that was almost pure silica, a sign that hot water once existed here.",audio_en:"audio/spirit_4_en.mp3"},{kind:"fact",ar:"\u0633\u0646\u0629 \u0662\u0660\u0660\u0669 \u063A\u0631\u0632\u062A \u0641\u064A \u0631\u0645\u0644 \u0646\u0627\u0639\u0645 \u0641\u064A \u0645\u0643\u0627\u0646 \u0627\u0633\u0645\u0647 Troy. \u0648\u0641\u064A \u0662\u0660\u0661\u0660 \u062C\u0647 \u0627\u0644\u0634\u062A\u0627 \u0648\u0627\u0644\u0637\u0627\u0642\u0629 \u062E\u0644\u0635\u062A\u060C \u0648\u0628\u0637\u0651\u0644\u062A \u0623\u062A\u0643\u0644\u0645.",tts_ar:"\u0633\u0646\u0629 2009 \u063A\u0631\u0632\u062A \u0641\u064A \u0631\u0645\u0644 \u0646\u0627\u0639\u0645 \u0641\u064A \u0645\u0643\u0627\u0646 \u0627\u0633\u0645\u0647 \u062A\u0631\u0648\u064A. \u0648\u0641\u064A 2010 \u062C\u0647 \u0627\u0644\u0634\u062A\u0627 \u0648\u0627\u0644\u0637\u0627\u0642\u0629 \u062E\u0644\u0635\u062A\u060C \u0648\u0628\u0637\u0651\u0644\u062A \u0623\u062A\u0643\u0644\u0645.",en:"In 2009 I got stuck in soft sand at a place called Troy. In 2010 winter came, my power ran out, and I stopped talking.",audio_en:"audio/spirit_5_en.mp3"},{kind:"fact",ar:"\u0628\u0633 \u0622\u062B\u0627\u0631\u064A \u0644\u0633\u0647 \u0647\u0646\u0627: \u0667\u066B\u0667 \u0643\u064A\u0644\u0648\u0645\u062A\u0631 \u0645\u0634\u064A\u062A\u0647\u0645 \u0639\u0644\u0649 \u0627\u0644\u0645\u0631\u064A\u062E. \u062A\u062D\u0628 \u062A\u0643\u062A\u0634\u0641 \u0631\u062D\u0644\u062A\u064A\u061F",tts_ar:"\u0628\u0633 \u0622\u062B\u0627\u0631\u064A \u0644\u0633\u0647 \u0647\u0646\u0627: \u0633\u0628\u0639\u0629 \u0643\u064A\u0644\u0648 \u0648\u0633\u0628\u0639\u0645\u064A\u0629 \u0645\u062A\u0631 \u0645\u0634\u064A\u062A\u0647\u0645 \u0639\u0644\u0649 \u0627\u0644\u0645\u0631\u064A\u062E. \u062A\u062D\u0628 \u062A\u0643\u062A\u0634\u0641 \u0631\u062D\u0644\u062A\u064A\u061F",en:"But my footprints are still here: 7.7 kilometres driven on Mars. Want to explore my journey?",audio_en:"audio/spirit_6_en.mp3"}]},{id:"opportunity",name:"Opportunity",mission:"MER-B",site:"Meridiani Planum",coords:"1.95\xB0S 354.47\xB0E",status_ar:"\u0633\u0627\u0643\u062A \u0645\u0646 \u0661\u0660 \u064A\u0648\u0646\u064A\u0648 \u0662\u0660\u0661\u0668",status_en:"Silent since 10 Jun 2018",voice:{pitch:.88,speed:.95},stats:[{ar_label:"\u0646\u0632\u0644 \u0639\u0644\u0649 \u0627\u0644\u0645\u0631\u064A\u062E",ar:"\u0662\u0665 \u064A\u0646\u0627\u064A\u0631 \u0662\u0660\u0660\u0664",en_label:"Landed on Mars",en:"25 Jan 2004"},{ar_label:"\u0627\u0644\u0639\u0645\u0631 \u0627\u0644\u0645\u062E\u0637\u0637",ar:"\u0669\u0660 \u064A\u0648\u0645 \u0645\u0631\u064A\u062E\u064A",en_label:"Planned life",en:"90 sols"},{ar_label:"\u0627\u0634\u062A\u063A\u0644 \u0641\u0639\u0644\u064B\u0627",ar:"\u062D\u0648\u0627\u0644\u064A \u0661\u0665 \u0633\u0646\u0629",en_label:"Actually worked",en:"about 15 years"},{ar_label:"\u0627\u0644\u0645\u0633\u0627\u0641\u0629",ar:"+\u0664\u0665 \u0643\u0645",en_label:"Distance",en:"45+ km"},{ar_label:"\u0622\u062E\u0631 \u0627\u062A\u0635\u0627\u0644",ar:"\u0661\u0660 \u064A\u0648\u0646\u064A\u0648 \u0662\u0660\u0661\u0668",en_label:"Last contact",en:"10 Jun 2018"}],source:"https://science.nasa.gov/mission/mer-opportunity/",lines:[{kind:"fiction",ar:"\u2026\u0622\u0647\u061F \u0623\u0646\u0627 \u0641\u064A\u0646\u061F \u2026 \u0625\u0646\u062A \u0627\u0644\u0644\u064A \u0635\u062D\u0651\u064A\u062A\u0646\u064A\u061F \u0634\u0643\u0631\u064B\u0627 \u064A\u0627 \u0628\u0637\u0644! \u0623\u0646\u0627 Opportunity\u060C \u0648\u0635\u062D\u0627\u0628\u064A \u0628\u064A\u0642\u0648\u0644\u0648\u0644\u064A Oppy.",tts_ar:"\u0622\u0647\u061F \u0623\u0646\u0627 \u0641\u064A\u0646\u061F \u0625\u0646\u062A \u0627\u0644\u0644\u064A \u0635\u062D\u0651\u064A\u062A\u0646\u064A\u061F \u0634\u0643\u0631\u0627 \u064A\u0627 \u0628\u0637\u0644! \u0623\u0646\u0627 \u0623\u0648\u0628\u0648\u0631\u062A\u0634\u0648\u0646\u064A\u062A\u064A\u060C \u0648\u0635\u062D\u0627\u0628\u064A \u0628\u064A\u0642\u0648\u0644\u0648\u0644\u064A \u0623\u0648\u0628\u064A.",en:"\u2026Huh? Where am I? \u2026 Did you wake me up? Thank you, hero! I'm Opportunity, and my friends call me Oppy.",audio_en:"audio/opportunity_1_en.mp3"},{kind:"fiction",ar:"\u0647\u0642\u0648\u0644\u0643 \u0633\u0631: \u0623\u0646\u0627 \u0633\u0627\u0643\u062A \u0645\u0646 \u0661\u0660 \u064A\u0648\u0646\u064A\u0648 \u0662\u0660\u0661\u0668\u060C \u0648\u0627\u0644\u0637\u0627\u0642\u0629 \u062F\u064A \u062C\u0627\u064A\u0629 \u0645\u0646 \u062E\u064A\u0627\u0644\u0643. \u0628\u0633 \u0631\u062D\u0644\u062A\u064A \u0644\u0633\u0647 \u0628\u062A\u0639\u0644\u0651\u0645 \u0627\u0644\u0639\u0644\u0645\u0627\u0621 \u0644\u062D\u062F \u0627\u0644\u0646\u0647\u0627\u0631\u062F\u0647.",tts_ar:"\u0647\u0642\u0648\u0644\u0643 \u0633\u0631: \u0623\u0646\u0627 \u0633\u0627\u0643\u062A \u0645\u0646 10 \u064A\u0648\u0646\u064A\u0648 2018\u060C \u0648\u0627\u0644\u0637\u0627\u0642\u0629 \u062F\u064A \u062C\u0627\u064A\u0629 \u0645\u0646 \u062E\u064A\u0627\u0644\u0643. \u0628\u0633 \u0631\u062D\u0644\u062A\u064A \u0644\u0633\u0647 \u0628\u062A\u0639\u0644\u0651\u0645 \u0627\u0644\u0639\u0644\u0645\u0627\u0621 \u0644\u062D\u062F \u0627\u0644\u0646\u0647\u0627\u0631\u062F\u0647.",en:"Here's a secret: I've been silent since 10 June 2018, and this energy comes from your imagination. But my journey still teaches scientists today.",audio_en:"audio/opportunity_2_en.mp3"},{kind:"fact",ar:"\u0646\u0632\u0644\u062A \u064A\u0648\u0645 \u0662\u0665 \u064A\u0646\u0627\u064A\u0631 \u0662\u0660\u0660\u0664\u060C \u0648\u0646\u0637\u0651\u064A\u062A \u0641\u064A \u0623\u0643\u064A\u0627\u0633 \u0627\u0644\u0647\u0648\u0627 \u0644\u062D\u062F \u0645\u0627 \u0648\u0642\u0639\u062A \u062C\u0648\u0647 \u0641\u0648\u0647\u0629 \u0635\u063A\u064A\u0631\u0629 \u0627\u0633\u0645\u0647\u0627 Eagle. \u0627\u0644\u0639\u0644\u0645\u0627\u0621 \u0633\u0645\u0651\u0648\u0647\u0627 \xABHole in one\xBB \u0632\u064A \u0627\u0644\u062C\u0648\u0644\u0641!",tts_ar:"\u0646\u0632\u0644\u062A \u064A\u0648\u0645 25 \u064A\u0646\u0627\u064A\u0631 2004\u060C \u0648\u0646\u0637\u0651\u064A\u062A \u0641\u064A \u0623\u0643\u064A\u0627\u0633 \u0627\u0644\u0647\u0648\u0627 \u0644\u062D\u062F \u0645\u0627 \u0648\u0642\u0639\u062A \u062C\u0648\u0647 \u0641\u0648\u0647\u0629 \u0635\u063A\u064A\u0631\u0629 \u0627\u0633\u0645\u0647\u0627 \u0625\u064A\u062C\u0644. \u0627\u0644\u0639\u0644\u0645\u0627\u0621 \u0633\u0645\u0651\u0648\u0647\u0627 \u0647\u0648\u0644 \u0625\u0646 \u0648\u0627\u0646\u060C \u0632\u064A \u0627\u0644\u062C\u0648\u0644\u0641!",en:'I landed on 25 January 2004 and bounced in my airbags until I rolled into a small crater called Eagle. Scientists called it a "hole in one", like in golf!',audio_en:"audio/opportunity_3_en.mp3"},{kind:"fact",ar:"\u0647\u0646\u0627\u0643 \u0644\u0642\u064A\u062A \u0643\u0648\u0631 \u0635\u063A\u064A\u0631\u0629 \u0645\u0646 \u0645\u0639\u062F\u0646 \u0627\u0633\u0645\u0647 \u0647\u064A\u0645\u0627\u062A\u064A\u062A\u060C \u0648\u0627\u0644\u0639\u0644\u0645\u0627\u0621 \u0633\u0645\u0651\u0648\u0647\u0627 \xAB\u0627\u0644\u062A\u0648\u062A\xBB. \u0627\u0644\u0643\u0648\u0631 \u062F\u064A \u0628\u062A\u062A\u0643\u0648\u0651\u0646 \u0641\u064A \u0648\u062C\u0648\u062F \u0645\u064A\u0629\u060C \u064A\u0639\u0646\u064A \u0627\u0644\u0645\u0643\u0627\u0646 \u062F\u0647 \u0643\u0627\u0646 \u0641\u064A\u0647 \u0645\u064A\u0629 \u0632\u0645\u0627\u0646.",tts_ar:"\u0647\u0646\u0627\u0643 \u0644\u0642\u064A\u062A \u0643\u0648\u0631 \u0635\u063A\u064A\u0631\u0629 \u0645\u0646 \u0645\u0639\u062F\u0646 \u0627\u0633\u0645\u0647 \u0647\u064A\u0645\u0627\u062A\u064A\u062A\u060C \u0648\u0627\u0644\u0639\u0644\u0645\u0627\u0621 \u0633\u0645\u0651\u0648\u0647\u0627 \u0627\u0644\u062A\u0648\u062A. \u0627\u0644\u0643\u0648\u0631 \u062F\u064A \u0628\u062A\u062A\u0643\u0648\u0651\u0646 \u0641\u064A \u0648\u062C\u0648\u062F \u0645\u064A\u0629\u060C \u064A\u0639\u0646\u064A \u0627\u0644\u0645\u0643\u0627\u0646 \u062F\u0647 \u0643\u0627\u0646 \u0641\u064A\u0647 \u0645\u064A\u0629 \u0632\u0645\u0627\u0646.",en:'There I found tiny balls of a mineral called hematite, which scientists nicknamed "blueberries". They form in water, so this place once had water.',audio_en:"audio/opportunity_4_en.mp3"},{kind:"fact",ar:"\u0643\u0627\u0646 \u0645\u062E\u0637\u0637 \u0623\u0639\u064A\u0634 \u0669\u0660 \u064A\u0648\u0645 \u0645\u0631\u064A\u062E\u064A\u2026 \u0648\u0639\u0634\u062A \u062D\u0648\u0627\u0644\u064A \u0661\u0665 \u0633\u0646\u0629! \u0648\u0645\u0634\u064A\u062A \u0623\u0643\u062A\u0631 \u0645\u0646 \u0664\u0665 \u0643\u064A\u0644\u0648\u0645\u062A\u0631\u060C \u064A\u0639\u0646\u064A \u0623\u0643\u062A\u0631 \u0645\u0646 \u0645\u0627\u0631\u0627\u062B\u0648\u0646 \u0643\u0627\u0645\u0644.",tts_ar:"\u0643\u0627\u0646 \u0645\u062E\u0637\u0637 \u0623\u0639\u064A\u0634 90 \u064A\u0648\u0645 \u0645\u0631\u064A\u062E\u064A\u060C \u0648\u0639\u0634\u062A \u062D\u0648\u0627\u0644\u064A 15 \u0633\u0646\u0629! \u0648\u0645\u0634\u064A\u062A \u0623\u0643\u062A\u0631 \u0645\u0646 45 \u0643\u064A\u0644\u0648\u0645\u062A\u0631\u060C \u064A\u0639\u0646\u064A \u0623\u0643\u062A\u0631 \u0645\u0646 \u0645\u0627\u0631\u0627\u062B\u0648\u0646 \u0643\u0627\u0645\u0644.",en:"I was planned to live for 90 Martian days\u2026 and I lived for about 15 years! I drove more than 45 kilometres, longer than a whole marathon.",audio_en:"audio/opportunity_5_en.mp3"},{kind:"fact",ar:"\u0641\u064A \u0662\u0660\u0661\u0668 \u062C\u062A \u0639\u0627\u0635\u0641\u0629 \u062A\u0631\u0627\u0628\u064A\u0629 \u063A\u0637\u0651\u062A \u0627\u0644\u0645\u0631\u064A\u062E \u0643\u0644\u0647 \u0648\u062D\u062C\u0628\u062A \u0627\u0644\u0634\u0645\u0633 \u0639\u0646 \u0623\u0644\u0648\u0627\u062D\u064A\u060C \u0648\u0628\u0637\u0651\u0644\u062A \u0623\u062A\u0643\u0644\u0645. \u0628\u0633 \u0622\u062B\u0627\u0631\u064A \u0644\u0633\u0647 \u0645\u0631\u0633\u0648\u0645\u0629 \u0639\u0644\u0649 \u0627\u0644\u0631\u0645\u0644. \u062A\u062D\u0628 \u062A\u0645\u0634\u064A \u0639\u0644\u0649 \u062E\u0637\u0627\u064A\u0627\u061F",tts_ar:"\u0641\u064A 2018 \u062C\u062A \u0639\u0627\u0635\u0641\u0629 \u062A\u0631\u0627\u0628\u064A\u0629 \u063A\u0637\u0651\u062A \u0627\u0644\u0645\u0631\u064A\u062E \u0643\u0644\u0647 \u0648\u062D\u062C\u0628\u062A \u0627\u0644\u0634\u0645\u0633 \u0639\u0646 \u0623\u0644\u0648\u0627\u062D\u064A\u060C \u0648\u0628\u0637\u0651\u0644\u062A \u0623\u062A\u0643\u0644\u0645. \u0628\u0633 \u0622\u062B\u0627\u0631\u064A \u0644\u0633\u0647 \u0645\u0631\u0633\u0648\u0645\u0629 \u0639\u0644\u0649 \u0627\u0644\u0631\u0645\u0644. \u062A\u062D\u0628 \u062A\u0645\u0634\u064A \u0639\u0644\u0649 \u062E\u0637\u0627\u064A\u0627\u061F",en:"In 2018 a dust storm covered all of Mars and blocked the Sun from my solar panels, and I stopped talking. But my tracks are still drawn in the sand. Want to walk in my footsteps?",audio_en:"audio/opportunity_6_en.mp3"}]}];var NM={tagline:{ar:"\u0627\u0644\u0645\u0647\u0645\u0629 \u0645\u0645\u0643\u0646 \u062A\u062E\u0644\u0635\u2026 \u0628\u0633 \u0623\u062B\u0631\u0647\u0627 \u0628\u064A\u0641\u0636\u0644",en:"A mission may end, but its footprint remains"},start:{ar:"\u0627\u0633\u062A\u0642\u0628\u0644 \u0627\u0644\u0625\u0634\u0627\u0631\u0629",en:"Receive the Signal"},loading:{ar:"\u0628\u0646\u0636\u0628\u0637 \u0627\u0644\u0647\u0648\u0627\u0626\u064A \u0639\u0644\u0649 \u0627\u0644\u0645\u0631\u064A\u062E\u2026",en:"Tuning the antenna to Mars\u2026"},signalHint:{ar:"\u0627\u0636\u063A\u0637 \u0639\u0634\u0627\u0646 \u062A\u0633\u062A\u0642\u0628\u0644 \xB7 \u0627\u0644\u0635\u0648\u062A \u0647\u064A\u0634\u062A\u063A\u0644",en:"Tap to receive \xB7 sound will play"},silentA:{ar:"Spirit \u0633\u0627\u0643\u062A \u0628\u0642\u0627\u0644\u0647",en:"Spirit has been silent for"},silentB:{ar:"\u064A\u0648\u0645",en:"days"},expTitle:{ar:"\u0627\u0644\u0631\u062D\u0644\u0629 \u0627\u0644\u0643\u0627\u0645\u0644\u0629",en:"Immersive Expedition"},expDesc:{ar:"\u0639\u064A\u0634 \u0631\u062D\u0644\u0629 Spirit \u0627\u0644\u062D\u0642\u064A\u0642\u064A\u0629: \u0625\u0637\u0644\u0627\u0642 \u0645\u0646 \u0627\u0644\u0623\u0631\u0636\u060C \u0667 \u0634\u0647\u0648\u0631 \u0641\u064A \u0627\u0644\u0641\u0636\u0627\u060C \u0648\u0647\u0628\u0648\u0637 \u0628\u0627\u0644\u0628\u0631\u0627\u0634\u0648\u062A \u0648\u0623\u0643\u064A\u0627\u0633 \u0627\u0644\u0647\u0648\u0627",en:"Live Spirit\u2019s real trip: launch from Earth, 7 months in space, and a landing by parachute and airbags"},expGo:{ar:"\u064A\u0644\u0627 \u0646\u0637\u0644\u0639",en:"Let\u2019s Launch"},warpTitle:{ar:"\u0627\u0644\u0627\u0646\u062A\u0642\u0627\u0644 \u0627\u0644\u0641\u0648\u0631\u064A",en:"Instant Warp"},warpDesc:{ar:"\u0627\u0646\u0632\u0644 \u0639\u0644\u0649 \u0637\u0648\u0644 \u0639\u0646\u062F \u0627\u0644\u0631\u0648\u0641\u0631\u0632 \u0648\u0635\u062D\u0651\u064A\u0647\u0645",en:"Drop straight to the rovers and wake them"},gDuration:{ar:"\u0627\u0644\u0645\u062F\u0629",en:"Time"},gNarration:{ar:"\u0631\u0627\u0648\u064A \u0628\u0627\u0644\u0635\u0648\u062A",en:"Narration"},gSfx:{ar:"\u0645\u0624\u062B\u0631\u0627\u062A \u0635\u0648\u062A\u064A\u0629",en:"Sound FX"},gMotion:{ar:"\u0627\u0644\u062D\u0631\u0643\u0629",en:"Motion"},min10:{ar:"~\u0665 \u062F\u0642\u0627\u064A\u0642",en:"~5 min"},min2:{ar:"~\u0662 \u062F\u0642\u064A\u0642\u0629",en:"~2 min"},yes:{ar:"\u0623\u064A\u0648\u0647",en:"Yes"},high:{ar:"\u0643\u062A\u064A\u0631",en:"High"},medium:{ar:"\u0645\u062A\u0648\u0633\u0637\u0629",en:"Medium"},soon:{ar:"\u0642\u0631\u064A\u0628\u064B\u0627",en:"Coming Soon"},go:{ar:"\u064A\u0644\u0627 \u0646\u0646\u0632\u0644",en:"Let\u2019s Go"},preparing:{ar:"\u0628\u0646\u062C\u0647\u0651\u0632 \u0627\u0644\u0633\u0637\u062D\u2026",en:"Preparing\u2026"},day:{ar:"\u0646\u0647\u0627\u0631",en:"Day"},night:{ar:"\u0644\u064A\u0644",en:"Night"},marsTime:{ar:"\u0628\u062A\u0648\u0642\u064A\u062A \u0627\u0644\u0645\u0631\u064A\u062E",en:"Mars local time"},homeAria:{ar:"\u0627\u0644\u0631\u062C\u0648\u0639 \u0644\u0644\u0628\u062F\u0627\u064A\u0629",en:"Back to start"},skip:{ar:"\u062A\u062E\u0637\u0651\u064A",en:"Skip"},guideName:{ar:"\u0633\u0648\u0644 \xB7 \u0627\u0644\u0645\u0631\u0634\u062F",en:"SOL \xB7 your guide"},guideHello:{ar:"\u0623\u0647\u0644\u064B\u0627 \u064A\u0627 \u0645\u0633\u062A\u0643\u0634\u0641! \u0623\u0646\u0627 \u0633\u0648\u0644\u060C \u0648\u0627\u0633\u0645\u064A \u0645\u0639\u0646\u0627\u0647 \xAB\u064A\u0648\u0645 \u0639\u0644\u0649 \u0627\u0644\u0645\u0631\u064A\u062E\xBB.",en:"Hi, explorer! I\u2019m SOL. My name means \u201Cone day on Mars\u201D."},guideChoose:{ar:"\u0639\u0644\u0649 \u0627\u0644\u0643\u0631\u0629 \u062F\u064A \u0663 \u0631\u0648\u0641\u0631\u0632 \u0646\u0627\u064A\u0645\u064A\u0646 \u0628\u0642\u0627\u0644\u0647\u0645 \u0633\u0646\u064A\u0646. \u0627\u062E\u062A\u0627\u0631 \u0648\u0627\u062D\u062F \u0648\u0623\u0646\u0627 \u0647\u0646\u0632\u0651\u0644\u0643 \u0639\u0646\u062F\u0647.",en:"Three rovers are asleep on this planet. Pick one and I\u2019ll drop you right next to it."},guideHint:{ar:"\u0644\u0650\u0641 \u0627\u0644\u0643\u0631\u0629 \u0628\u0625\u064A\u062F\u0643\u060C \u0623\u0648 \u062F\u0648\u0633 \u0639\u0644\u0649 \u062F\u0628\u0648\u0633 \u0623\u0648 \u0627\u0633\u0645 \u0631\u0648\u0641\u0631.",en:"Spin the globe, or tap a pin or a rover\u2019s name."},guide_sojourner:{ar:"Sojourner: \u0623\u0648\u0644 \u0639\u0631\u0628\u064A\u0629 \u0628\u0639\u062C\u0644 \u062A\u0645\u0634\u064A \u0639\u0644\u0649 \u0643\u0648\u0643\u0628 \u062A\u0627\u0646\u064A\u060C \u0633\u0646\u0629 \u0661\u0669\u0669\u0667. \u0648\u0632\u0646\u0647\u0627 \u062D\u0648\u0627\u0644\u064A \u0661\u0660 \u0643\u064A\u0644\u0648 \u0628\u0633!",en:"Sojourner: the first wheeled vehicle on another planet, in 1997. It weighed only about 10 kg!"},guide_spirit:{ar:"Spirit: \u0646\u0632\u0644 \u0641\u064A \u0641\u0648\u0647\u0629 \u062C\u0648\u0633\u064A\u0641 \u0633\u0646\u0629 \u0662\u0660\u0660\u0664. \u0643\u0627\u0646 \u0627\u0644\u0645\u0641\u0631\u0648\u0636 \u064A\u0634\u062A\u063A\u0644 \u0669\u0660 \u064A\u0648\u0645\u2026 \u0627\u0634\u062A\u063A\u0644 \u0623\u0643\u062A\u0631 \u0645\u0646 \u0666 \u0633\u0646\u064A\u0646!",en:"Spirit: landed in Gusev Crater in 2004. It was meant to work for 90 sols\u2026 it lasted more than 6 years!"},guide_opportunity:{ar:"Opportunity: \u062A\u0648\u0623\u0645 Spirit. \u0645\u0634\u064A \u0623\u0643\u062A\u0631 \u0645\u0646 \u0664\u0665 \u0643\u064A\u0644\u0648 \u0648\u0627\u0634\u062A\u063A\u0644 \u062D\u0648\u0627\u0644\u064A \u0661\u0665 \u0633\u0646\u0629!",en:"Opportunity: Spirit\u2019s twin. It drove more than 45 km and worked for about 15 years!"},landAt:{ar:"\u0627\u0646\u0632\u0644 \u0639\u0646\u062F",en:"Land at"},back:{ar:"\u0631\u062C\u0648\u0639",en:"Back"},ready:{ar:"\u062C\u0627\u0647\u0632. \u0634\u063A\u0651\u0644 \u0627\u0644\u0635\u0648\u062A \u0644\u062A\u062C\u0631\u0628\u0629 \u0623\u062D\u0644\u0649",en:"Ready. Sound on for the full experience"},holdHintShort:{ar:"\u0627\u0636\u063A\u0637 \u0645\u0637\u0648\u0651\u0644\u064B\u0627 \u0639\u0644\u0649 \u0627\u0644\u0632\u0631\u0627\u0631 \u0623\u0648 \u0627\u0644\u0634\u0627\u0634\u0629",en:"Press & hold the button or the screen"},holdHint:{ar:"\u0627\u0636\u063A\u0637 \u0645\u0637\u0648\u0651\u0644\u064B\u0627 \u0639\u0644\u0649 Power Pulse \u0639\u0634\u0627\u0646 \u062A\u0634\u062D\u0646 \u0627\u0644\u0628\u062F\u0644\u0629 \u0648\u062A\u0635\u062D\u0651\u064A \u0627\u0644\u0631\u0648\u0641\u0631",en:"Press and hold Power Pulse to charge your suit and wake the rover"},dragHint:{ar:"\u0627\u0633\u062D\u0628 \u0639\u0644\u0649 \u0627\u0644\u0634\u0627\u0634\u0629 \u0639\u0634\u0627\u0646 \u062A\u0644\u0641\u0651 \u0627\u0644\u0631\u0648\u0641\u0631",en:"Drag the screen to turn the rover"},power:{ar:"\u0627\u0636\u063A\u0637 \u0645\u0637\u0648\u0651\u0644\u064B\u0627",en:"Press & hold"},fact:{ar:"\u062D\u0642\u064A\u0642\u0629",en:"Fact"},story:{ar:"\u0642\u0635\u0629",en:"Story"},next:{ar:"\u0627\u0644\u062A\u0627\u0644\u064A",en:"Next"},again:{ar:"\u0645\u0646 \u0627\u0644\u0623\u0648\u0644",en:"Start Over"},awakeNow:{ar:"\u0635\u0627\u062D\u064A \u062F\u0644\u0648\u0642\u062A\u064A \u2726 \u0628\u0641\u0636\u0644\u0643",en:"Awake now \u2726 thanks to you"},mute:{ar:"\u0643\u062A\u0645 \u0627\u0644\u0635\u0648\u062A",en:"Mute sound"},unmute:{ar:"\u062A\u0634\u063A\u064A\u0644 \u0627\u0644\u0635\u0648\u062A",en:"Turn sound on"},lang:{ar:"English",en:"\u0639\u0631\u0628\u064A"},navLabel:{ar:"\u0627\u062E\u062A\u0627\u0631 \u0631\u0648\u0641\u0631",en:"Choose a rover"},credit:{ar:"\u0646\u0645\u0648\u0630\u062C Spirit \u0648 Opportunity \u062B\u0644\u0627\u062B\u064A \u0627\u0644\u0623\u0628\u0639\u0627\u062F: NASA/JPL-Caltech \xB7 Sojourner: \u0646\u0645\u0648\u0630\u062C \u0645\u0628\u0633\u0651\u0637 \u0645\u0646 \u0639\u0645\u0644 \u0627\u0644\u0641\u0631\u064A\u0642",en:"3D Spirit & Opportunity model: NASA/JPL-Caltech \xB7 Sojourner: simplified team-made model"},creditHome:{ar:"\u062E\u0631\u064A\u0637\u0629 \u0627\u0644\u0645\u0631\u064A\u062E \u0648\u0627\u0644\u0633\u0645\u0627\u0621: Solar System Scope (CC BY 4.0) \u0645\u0646 \u0628\u064A\u0627\u0646\u0627\u062A NASA \xB7 \u0645\u0643\u0627\u0646 \u0627\u0644\u0634\u0645\u0633 \u0641\u0648\u0642 \u0627\u0644\u0645\u0631\u064A\u062E \u062F\u0644\u0648\u0642\u062A\u064A \u0645\u062D\u0633\u0648\u0628 \u0628\u062E\u0648\u0627\u0631\u0632\u0645\u064A\u0629 Mars24 \u0645\u0646 NASA",en:"Mars & sky maps: Solar System Scope (CC BY 4.0), from NASA data \xB7 Sun position over Mars computed live with NASA\u2019s Mars24 algorithm"},noWebGL:{ar:"\u0627\u0644\u062C\u0647\u0627\u0632 \u062F\u0647 \u0645\u0634 \u0628\u064A\u062F\u0639\u0645 WebGL\u060C \u062C\u0631\u0651\u0628 \u0645\u062A\u0635\u0641\u062D Chrome \u0623\u0648 Edge.",en:"This device does not support WebGL. Try Chrome or Edge."},loadError:{ar:"\u062D\u0635\u0644\u062A \u0645\u0634\u0643\u0644\u0629 \u0641\u064A \u0627\u0644\u062A\u062D\u0645\u064A\u0644\u060C \u062D\u062F\u0651\u062B \u0627\u0644\u0635\u0641\u062D\u0629.",en:"Something went wrong while loading. Please refresh."},expHello:{ar:"\u0623\u0647\u0644\u064B\u0627 \u064A\u0627 \u0645\u0633\u062A\u0643\u0634\u0641! \u0627\u0644\u0646\u0647\u0627\u0631\u062F\u0647 \u0647\u0646\u0639\u064A\u0634 \u0631\u062D\u0644\u0629 Spirit \u0627\u0644\u062D\u0642\u064A\u0642\u064A\u0629 \u0645\u0646 \u0627\u0644\u0623\u0631\u0636 \u0644\u0644\u0645\u0631\u064A\u062E.",en:"Welcome aboard, explorer! Today we live Spirit\u2019s real trip from Earth to Mars."},expPad:{ar:"\u062F\u064A \u0627\u0644\u0623\u0631\u0636\u060C \u0648\u062F\u0647 Cape Canaveral \u0641\u064A \u0641\u0644\u0648\u0631\u064A\u062F\u0627. \u0645\u0646 \u0647\u0646\u0627 Spirit \u0627\u062A\u0637\u0644\u0642 \u0639\u0644\u0649 \u0635\u0627\u0631\u0648\u062E Delta II \u064A\u0648\u0645 \u0661\u0660 \u064A\u0648\u0646\u064A\u0648 \u0662\u0660\u0660\u0663. \u0627\u0636\u063A\u0637 \u0645\u0637\u0648\u0651\u0644\u064B\u0627 \u0639\u0644\u0649 \xAB\u0625\u0637\u0644\u0627\u0642\xBB.",en:"That\u2019s Earth, and this is Cape Canaveral in Florida. Spirit launched from here on a Delta II rocket on 10 June 2003. Press and hold \u201CLaunch\u201D."},expLaunched:{ar:"\u0627\u0646\u0637\u0644\u0642\u0646\u0627! \u0648\u062F\u0651\u0639 \u0627\u0644\u0623\u0631\u0636\u2026",en:"Liftoff! Say goodbye to Earth\u2026"},expCruise1:{ar:"\u0627\u0644\u0631\u062D\u0644\u0629 \u0644\u0644\u0645\u0631\u064A\u062E \u0623\u062E\u062F\u062A \u062D\u0648\u0627\u0644\u064A \u0667 \u0634\u0647\u0648\u0631\u060C \u0648\u0642\u0637\u0639 \u0641\u064A\u0647\u0627 Spirit \u0664\u0668\u0667 \u0645\u0644\u064A\u0648\u0646 \u0643\u064A\u0644\u0648!",en:"The trip to Mars took about 7 months, and Spirit travelled 487 million km!"},expCruise2:{ar:"\u0637\u0648\u0644 \u0627\u0644\u0637\u0631\u064A\u0642 Spirit \u0643\u0627\u0646 \u0646\u0627\u064A\u0645 \u062C\u0648\u0647 \u0643\u0628\u0633\u0648\u0644\u0629\u060C \u0648\u0627\u0644\u0645\u0631\u0643\u0628\u0629 \u0627\u0644\u0644\u064A \u0634\u0627\u064A\u0644\u0627\u0647 \u0628\u062A\u0627\u062E\u062F \u0643\u0647\u0631\u0628\u0627 \u0645\u0646 \u0623\u0644\u0648\u0627\u062D \u0634\u0645\u0633\u064A\u0629 \u0632\u0631\u0642\u0627.",en:"All the way, Spirit slept inside a capsule, and the stage carrying it got power from blue solar panels."},expMars:{ar:"\u0634\u0627\u064A\u0641 \u0627\u0644\u0646\u0642\u0637\u0629 \u0627\u0644\u062D\u0645\u0631\u0627 \u0627\u0644\u0644\u064A \u0628\u062A\u0643\u0628\u0631\u061F \u062F\u0647 \u0627\u0644\u0645\u0631\u064A\u062E!",en:"See the red dot getting bigger? That\u2019s Mars!"},expApproach:{ar:"\u0642\u0628\u0644 \u0627\u0644\u063A\u0644\u0627\u0641 \u0627\u0644\u062C\u0648\u064A \u0628\u0646\u0633\u064A\u0628 \u0645\u0631\u0643\u0628\u0629 \u0627\u0644\u0631\u062D\u0644\u0629\u2026 \u0648\u0627\u0644\u0643\u0628\u0633\u0648\u0644\u0629 \u0628\u062A\u0644\u0641 \u0627\u0644\u062F\u0631\u0639 \u0627\u0644\u062D\u0631\u0627\u0631\u064A \u0644\u0642\u062F\u0651\u0627\u0645.",en:"Before the atmosphere we let go of the cruise stage\u2026 and the capsule turns its heat shield forward."},expEntry:{ar:"\u062F\u062E\u0644\u0646\u0627 \u0627\u0644\u063A\u0644\u0627\u0641 \u0627\u0644\u062C\u0648\u064A \u0628\u0633\u0631\u0639\u0629 \u062D\u0648\u0627\u0644\u064A \u0661\u0669\u0660\u0660\u0660 \u0643\u0645 \u0641\u064A \u0627\u0644\u0633\u0627\u0639\u0629! \u0627\u0636\u063A\u0637 \u0645\u0637\u0648\u0651\u0644\u064B\u0627 \u0639\u0644\u0649 \xAB\u062B\u0628\u0651\u062A \u0627\u0644\u062F\u0631\u0639\xBB \u0639\u0634\u0627\u0646 \u064A\u0641\u0636\u0644 \u0642\u062F\u0651\u0627\u0645 \u0627\u0644\u0646\u0627\u0631.",en:"We hit the atmosphere at about 19,000 km/h! Press and hold \u201CHold the Shield\u201D to keep it facing the fire."},expEntryOk:{ar:"\u0628\u0631\u0627\u0641\u0648! \u0627\u0644\u0627\u062D\u062A\u0643\u0627\u0643 \u0628\u0627\u0644\u0647\u0648\u0627 \u0642\u0644\u0651\u0644 \u0633\u0631\u0639\u062A\u0646\u0627 \u0669\u0660\u066A \u0641\u064A \u062D\u0648\u0627\u0644\u064A \u0664 \u062F\u0642\u0627\u064A\u0642.",en:"Well done! Friction with the air cut our speed by 90% in about 4 minutes."},edlChute:{ar:"\u0644\u0633\u0647 \u0633\u0631\u064A\u0639\u064A\u0646 \u062C\u062F\u064B\u0627. \u0627\u0641\u062A\u062D \u0627\u0644\u0628\u0631\u0627\u0634\u0648\u062A \u0644\u0645\u0627 \u0627\u0644\u0627\u0631\u062A\u0641\u0627\u0639 \u064A\u0648\u0635\u0644 \u062D\u0648\u0627\u0644\u064A \u0661\u0660 \u0643\u0645!",en:"Still very fast. Open the parachute when the altitude reaches about 10 km!"},edlEarly:{ar:"\u0628\u062F\u0631\u064A \u0634\u0648\u064A\u0629! \u0628\u0627\u0644\u0633\u0631\u0639\u0629 \u062F\u064A \u0627\u0644\u0628\u0631\u0627\u0634\u0648\u062A \u0645\u0645\u0643\u0646 \u064A\u062A\u0642\u0637\u0639. \u0627\u0633\u062A\u0646\u0649 \u0627\u0644\u0627\u0631\u062A\u0641\u0627\u0639 \u064A\u0642\u0631\u0628 \u0645\u0646 \u0661\u0660 \u0643\u0645.",en:"A bit early! At this speed the parachute could tear. Wait until the altitude is close to 10 km."},edlChuteLate:{ar:"\u0627\u062A\u0623\u062E\u0631\u0646\u0627! \u0645\u0646 \u063A\u064A\u0631 \u0628\u0631\u0627\u0634\u0648\u062A \u0647\u0646\u062E\u0628\u0637 \u0641\u064A \u0627\u0644\u0623\u0631\u0636. \u064A\u0644\u0627 \u0646\u062C\u0631\u0628 \u062A\u0627\u0646\u064A.",en:"Too late! Without a parachute we would crash. Let\u2019s try again."},edlChuteOk:{ar:"\u0627\u0644\u0628\u0631\u0627\u0634\u0648\u062A \u0627\u062A\u0641\u062A\u062D! \u0627\u0644\u0633\u0631\u0639\u0629 \u0646\u0632\u0644\u062A \u0644\u062D\u0648\u0627\u0644\u064A \u0663\u0660\u0660 \u0643\u0645 \u0641\u064A \u0627\u0644\u0633\u0627\u0639\u0629. \u0627\u0644\u062F\u0631\u0639 \u0627\u0644\u062D\u0631\u0627\u0631\u064A \u0628\u064A\u0642\u0639\u060C \u0648\u0627\u0644\u0645\u0631\u0643\u0628\u0629 \u0628\u062A\u0646\u0632\u0644 \u0639\u0644\u0649 \u062D\u0628\u0644 \u0637\u0648\u0644\u0647 \u0662\u0660 \u0645\u062A\u0631.",en:"Parachute open! We slowed to about 300 km/h. The heat shield drops, and the lander is lowered on a 20-metre rope."},edlBags:{ar:"\u0627\u0644\u0623\u0631\u0636 \u0642\u0631\u0651\u0628\u062A! \u0627\u0646\u0641\u062E \u0623\u0643\u064A\u0627\u0633 \u0627\u0644\u0647\u0648\u0627 \u0642\u0628\u0644 \u0645\u0627 \u0646\u0644\u0645\u0633 \u0627\u0644\u0623\u0631\u0636 \u0628\u062D\u0648\u0627\u0644\u064A \u0668 \u062B\u0648\u0627\u0646\u064A.",en:"The ground is close! Inflate the airbags about 8 seconds before touchdown."},edlBagsEarly:{ar:"\u0628\u062F\u0631\u064A! \u0627\u0633\u062A\u0646\u0649 \u0627\u0644\u0639\u062F\u0627\u062F \u064A\u0642\u0631\u0628 \u0645\u0646 \u0668 \u062B\u0648\u0627\u0646\u064A.",en:"Too early! Wait for the counter to get close to 8 seconds."},edlBagsLate:{ar:"\u0627\u062A\u0623\u062E\u0631\u0646\u0627! \u064A\u0644\u0627 \u0646\u0639\u064A\u062F\u0647\u0627\u060C \u0648\u0631\u0643\u0651\u0632 \u0639\u0644\u0649 \u0627\u0644\u0639\u062F\u0627\u062F.",en:"Too late! Let\u2019s try again, and watch the counter."},edlBagsOk:{ar:"\u0627\u0644\u0623\u0643\u064A\u0627\u0633 \u0627\u062A\u0646\u0641\u062E\u062A! \u0635\u0648\u0627\u0631\u064A\u062E \u0635\u063A\u064A\u0631\u0629 \u0647\u062A\u0648\u0642\u0641 \u0627\u0644\u0646\u0632\u0648\u0644\u060C \u0648\u0628\u0639\u062F\u064A\u0646 \u0646\u0642\u0637\u0639 \u0627\u0644\u062D\u0628\u0644\u2026",en:"Airbags inflated! Small rockets stop our fall, then we cut the rope\u2026"},edlBounce:{ar:"\u0628\u0646\u062A\u0646\u0637\u0637 \u0639\u0644\u0649 \u0627\u0644\u0645\u0631\u064A\u062E \u0632\u064A \u0627\u0644\u0643\u0648\u0631\u0629! Spirit \u0627\u0644\u062D\u0642\u064A\u0642\u064A \u0627\u062A\u0646\u0637\u0637 \u062D\u0648\u0627\u0644\u064A \u0663\u0660 \u0645\u0631\u0629 \u0642\u0628\u0644 \u0645\u0627 \u064A\u0642\u0641.",en:"Bouncing on Mars like a beach ball! The real Spirit bounced around 30 times before it stopped."},edlOpened:{ar:"\u0627\u0644\u0623\u0643\u064A\u0627\u0633 \u0641\u0636\u064A\u062A\u060C \u0648\u0627\u0644\u0645\u0631\u0643\u0628\u0629 \u0641\u062A\u062D\u062A \u0632\u064A \u0627\u0644\u0648\u0631\u062F\u0629. \u062F\u0647 \u0643\u0627\u0646 \u064A\u0648\u0645 \u0664 \u064A\u0646\u0627\u064A\u0631 \u0662\u0660\u0660\u0664\u2026",en:"The airbags deflated and the lander opened like a flower. That was 4 January 2004\u2026"},edlNow:{ar:"\u062A\u0639\u0627\u0644\u0649 \u0646\u0634\u0648\u0641 Spirit \u0627\u0644\u0646\u0647\u0627\u0631\u062F\u0647\u2026 \u0633\u0627\u0643\u062A \u0628\u0642\u0627\u0644\u0647 \u0633\u0646\u064A\u0646. \u0635\u062D\u0651\u064A\u0647 \u0628\u0640 Power Pulse!",en:"Now let\u2019s see Spirit today\u2026 silent for years. Wake it with the Power Pulse!"},expLaunchBtn:{ar:"\u0625\u0637\u0644\u0627\u0642",en:"Launch"},expShieldBtn:{ar:"\u062B\u0628\u0651\u062A \u0627\u0644\u062F\u0631\u0639",en:"Hold the Shield"},expChuteBtn:{ar:"\u0627\u0641\u062A\u062D \u0627\u0644\u0628\u0631\u0627\u0634\u0648\u062A",en:"Open Parachute"},expBagsBtn:{ar:"\u0627\u0646\u0641\u062E \u0627\u0644\u0623\u0643\u064A\u0627\u0633",en:"Inflate Airbags"},skipLanding:{ar:"\u062A\u062E\u0637\u0651\u0649 \u0644\u0644\u0647\u0628\u0648\u0637",en:"Skip to Landing"},expStep1:{ar:"\u0627\u0644\u0625\u0637\u0644\u0627\u0642",en:"Launch"},expStep2:{ar:"\u0627\u0644\u0631\u062D\u0644\u0629",en:"Cruise"},expStep3:{ar:"\u0627\u0644\u062F\u062E\u0648\u0644",en:"Entry"},expStep4:{ar:"\u0627\u0644\u0628\u0631\u0627\u0634\u0648\u062A",en:"Parachute"},expStep5:{ar:"\u0627\u0644\u0647\u0628\u0648\u0637",en:"Landing"},hDate:{ar:"\u0627\u0644\u062A\u0627\u0631\u064A\u062E",en:"Date"},hPlace:{ar:"\u0627\u0644\u0645\u0643\u0627\u0646",en:"Place"},hDay:{ar:"\u064A\u0648\u0645 \u0641\u064A \u0627\u0644\u0631\u062D\u0644\u0629",en:"Day of trip"},hDist:{ar:"\u0627\u0644\u0645\u0633\u0627\u0641\u0629",en:"Distance"},hSpeed:{ar:"\u0627\u0644\u0633\u0631\u0639\u0629",en:"Speed"},hAlt:{ar:"\u0627\u0644\u0627\u0631\u062A\u0641\u0627\u0639",en:"Altitude"},hGround:{ar:"\u0644\u0644\u0623\u0631\u0636",en:"To touchdown"},hBounces:{ar:"\u0627\u0644\u0646\u0637\u0651\u0627\u062A",en:"Bounces"},hShield:{ar:"\u0627\u0644\u062F\u0631\u0639",en:"Shield"},uKm:{ar:"\u0643\u0645",en:"km"},uKmh:{ar:"\u0643\u0645/\u0633",en:"km/h"},uMkm:{ar:"\u0645\u0644\u064A\u0648\u0646 \u0643\u0645",en:"million km"},uSec:{ar:"\u062B",en:"s"},launchDate:{ar:"\u0661\u0660 \u064A\u0648\u0646\u064A\u0648 \u0662\u0660\u0660\u0663",en:"10 Jun 2003"},exploreBtn:{ar:"\u0627\u0633\u062A\u0643\u0634\u0641",en:"Explore"},close:{ar:"\u0625\u063A\u0644\u0627\u0642",en:"Close"},myLife:{ar:"\u0631\u062D\u0644\u0629 \u062D\u064A\u0627\u062A\u064A",en:"My Life on Mars"},lifeAria:{ar:"\u0627\u0634\u062A\u063A\u0644\u062A {a} \u064A\u0648\u0645 \u0645\u0631\u064A\u062E\u064A \u0628\u062F\u0644 {p}",en:"Worked {a} sols instead of {p}"},plannedStop:{ar:"\u0643\u0627\u0646 \u0627\u0644\u0645\u0641\u0631\u0648\u0636 \u0623\u0642\u0641 \u0647\u0646\u0627",en:"I was meant to stop here"},planned:{ar:"\u0627\u0644\u0645\u062E\u0637\u0637",en:"Planned"},actual:{ar:"\u0627\u0644\u0644\u064A \u0627\u0634\u062A\u063A\u0644\u062A\u0647 \u0641\u0639\u0644\u064B\u0627",en:"Actually worked"},timesLonger:{ar:"\u064A\u0639\u0646\u064A \u0627\u0634\u062A\u063A\u0644\u062A \u0623\u0643\u062A\u0631 \u0645\u0646 {n} \u0645\u0631\u0629 \u0642\u062F \u0627\u0644\u0645\u062E\u0637\u0637!",en:"That\u2019s more than {n}\xD7 longer than planned!"},playGame:{ar:"\u0627\u0644\u0639\u0628: \u0623\u0646\u0642\u0630 Spirit",en:"Play: Save Spirit"},seePhoto:{ar:"\u0634\u0648\u0641 \u0627\u0644\u0635\u0648\u0631\u0629",en:"See the Photo"},photoAlt:{ar:"\u0635\u0648\u0631\u0629 \u0627\u0644\u0623\u0631\u0636 \u0643\u0646\u0642\u0637\u0629 \u0645\u0646\u0648\u0631\u0629 \u0641\u064A \u0633\u0645\u0627 \u0627\u0644\u0645\u0631\u064A\u062E \u0642\u0628\u0644 \u0627\u0644\u0634\u0631\u0648\u0642\u060C \u0635\u0648\u0651\u0631\u0647\u0627 Spirit",en:"Earth as a bright dot in the pre-dawn Martian sky, photographed by Spirit"},mythOrFact:{ar:"\u062D\u0642\u064A\u0642\u0629 \u0648\u0644\u0627 \u0625\u0634\u0627\u0639\u0629\u061F",en:"Fact or Myth?"},myth:{ar:"\u0625\u0634\u0627\u0639\u0629",en:"Myth"},correct:{ar:"\u0635\u062D!",en:"Correct!"},notQuite:{ar:"\u0645\u0634 \u0628\u0627\u0644\u0638\u0628\u0637\u2026",en:"Not quite\u2026"},gameTitle:{ar:"\u0627\u0644\u064A\u0648\u0645 \u0627\u0644\u0644\u064A \u0643\u0646\u062A \u0647\u0645\u0648\u062A \u0641\u064A\u0647",en:"The Day I Almost Died"},gameIntro:{ar:"\u0641\u064A \u064A\u0648\u0645 \u0661\u0668 \u0639\u0644\u0649 \u0627\u0644\u0645\u0631\u064A\u062E Spirit \u0643\u0627\u0646 \u0647\u064A\u0636\u064A\u0639. \u0627\u0646\u062A \u0627\u0644\u0645\u0647\u0646\u062F\u0633 \u062F\u0644\u0648\u0642\u062A\u064A: \u0627\u062E\u062A\u0627\u0631 \u0627\u0644\u0635\u062D \u0639\u0634\u0627\u0646 \u062A\u0646\u0642\u0630\u0647.",en:"On sol 18 Spirit almost got lost. You are the engineer now: choose well to save it."},savedSpirit:{ar:"\u0623\u0646\u0642\u0630\u062A Spirit!",en:"You saved Spirit!"},compareTitle:{ar:"\u0642\u0627\u0631\u0646\u0651\u064A \u0628\u0627\u0644\u062A\u0627\u0646\u064A\u064A\u0646",en:"Compare Us"},compareIntro:{ar:"\u0625\u062D\u0646\u0627 \u0627\u0644\u062A\u0644\u0627\u062A\u0629 \u0646\u0632\u0644\u0646\u0627 \u0628\u0623\u0643\u064A\u0627\u0633 \u0647\u0648\u0627 \u0648\u0627\u0634\u062A\u063A\u0644\u0646\u0627 \u0628\u0627\u0644\u0634\u0645\u0633\u2026 \u0628\u0633 \u0643\u0644 \u0648\u0627\u062D\u062F \u0641\u064A\u0646\u0627 \u0639\u0627\u0634 \u062D\u0643\u0627\u064A\u0629 \u0645\u062E\u062A\u0644\u0641\u0629.",en:"All three of us landed on airbags and ran on sunlight\u2026 but each of us lived a different story."},compareBtn:{ar:"\u0627\u0641\u062A\u062D \u0627\u0644\u0645\u0642\u0627\u0631\u0646\u0629",en:"Open the Comparison"},compareHead:{ar:"\u0627\u0644\u062A\u0644\u0627\u062A\u0629 \u062C\u0646\u0628 \u0628\u0639\u0636",en:"Side by Side"},cLanded:{ar:"\u0646\u0632\u0644 \u0639\u0644\u0649 \u0627\u0644\u0645\u0631\u064A\u062E",en:"Landed"},cSite:{ar:"\u0627\u0644\u0645\u0643\u0627\u0646",en:"Site"},cLength:{ar:"\u0627\u0644\u0637\u0648\u0644",en:"Length"},cMass:{ar:"\u0627\u0644\u0648\u0632\u0646",en:"Mass"},cPlanned:{ar:"\u0627\u0644\u0639\u0645\u0631 \u0627\u0644\u0645\u062E\u0637\u0637",en:"Planned life"},cWorked:{ar:"\u0627\u0634\u062A\u063A\u0644 \u0641\u0639\u0644\u064B\u0627",en:"Actually worked"},cTimes:{ar:"\u0623\u0637\u0648\u0644 \u0645\u0646 \u0627\u0644\u0645\u062E\u0637\u0637",en:"Longer than planned"},cDistance:{ar:"\u0627\u0644\u0645\u0633\u0627\u0641\u0629 \u0627\u0644\u0644\u064A \u0645\u0634\u064A\u0647\u0627",en:"Distance driven"},cPower:{ar:"\u0645\u0635\u062F\u0631 \u0627\u0644\u0637\u0627\u0642\u0629",en:"Power"},cLanding:{ar:"\u0637\u0631\u064A\u0642\u0629 \u0627\u0644\u0647\u0628\u0648\u0637",en:"Landing"},compareNote:{ar:"\u0627\u0644\u0623\u064A\u0627\u0645 \u0647\u0646\u0627 \u0623\u064A\u0627\u0645 \u0645\u0631\u064A\u062E\u064A\u0629 (\u0627\u0644\u064A\u0648\u0645 \u0627\u0644\u0645\u0631\u064A\u062E\u064A \u0623\u0637\u0648\u0644 \u0645\u0646 \u064A\u0648\u0645\u0646\u0627 \u0628\u062D\u0648\u0627\u0644\u064A \u0664\u0660 \u062F\u0642\u064A\u0642\u0629). \u0627\u0644\u0645\u0635\u0627\u062F\u0631 \u0641\u064A \xAB\u24D8 \u2190 \u0627\u0644\u0645\u0635\u0627\u062F\u0631\xBB.",en:"Days here are Martian sols (a sol is about 40 minutes longer than an Earth day). Sources are in \u201C\u24D8 \u2192 Sources\u201D."},endingCta:{ar:"\u0635\u062D\u0651\u064A\u062A \u0627\u0644\u062A\u0644\u0627\u062A\u0629! \u0643\u0645\u0651\u0644 \u0644\u0644\u0623\u062B\u0631 \u0627\u0644\u062C\u0627\u064A",en:"All Three Awake! On to the Next Footprint"},endA:{ar:"\u0639\u0645\u0644\u062A\u0647\u0627! \u0635\u062D\u0651\u064A\u062A Sojourner \u0648Spirit \u0648Opportunity. \u0627\u0644\u0645\u0647\u0645\u0627\u062A \u0628\u062A\u062E\u0644\u0635\u2026 \u0628\u0633 \u0622\u062B\u0627\u0631\u0647\u0627 \u0628\u062A\u0641\u0636\u0644.",en:"You did it! You woke Sojourner, Spirit and Opportunity. Missions end\u2026 but their footprints remain."},endB:{ar:"\u0648\u0634\u0648\u0641\u060C \u0627\u0644\u0622\u062B\u0627\u0631 \u0645\u0643\u0645\u0651\u0644\u0629: Curiosity \u0648Perseverance \u0644\u0633\u0647 \u0634\u063A\u0627\u0644\u064A\u0646 \u0639\u0644\u0649 \u0627\u0644\u0645\u0631\u064A\u062E \u0644\u062D\u062F \u0627\u0644\u0646\u0647\u0627\u0631\u062F\u0647.",en:"And look \u2014 the footprints continue: Curiosity and Perseverance are still exploring Mars today."},endC:{ar:"\u0648\u0627\u0644\u0623\u062B\u0631 \u0627\u0644\u062C\u0627\u064A \u0645\u0645\u0643\u0646 \u064A\u0643\u0648\u0646 \u0623\u062B\u0631\u0643 \u0627\u0646\u062A. \u0627\u0643\u062A\u0628 \u0627\u0633\u0645\u0643 \u0648\u0633\u064A\u0628 \u0623\u062B\u0631\u0643.",en:"The next footprint could be yours. Write your name and leave your footprint."},yourName:{ar:"\u0627\u0633\u0645\u0643",en:"Your name"},nameNeeded:{ar:"\u0627\u0643\u062A\u0628 \u0627\u0633\u0645\u0643 \u0627\u0644\u0623\u0648\u0644 \u0639\u0634\u0627\u0646 \u0646\u0643\u062A\u0628\u0647 \u0639\u0644\u0649 \u0627\u0644\u0634\u0647\u0627\u062F\u0629.",en:"Type your name first, so we can put it on the certificate."},leaveFootprint:{ar:"\u0633\u064A\u0628 \u0623\u062B\u0631\u0643",en:"Leave Your Footprint"},certTitle:{ar:"\u0634\u0647\u0627\u062F\u0629 \u0645\u0633\u062A\u0643\u0634\u0641 \u0627\u0644\u0645\u0631\u064A\u062E",en:"Mars Explorer Certificate"},certLine:{ar:"\u0635\u062D\u0651\u0649 Sojourner \u0648Spirit \u0648Opportunity\u060C \u0648\u0639\u0631\u0641 \u0625\u0646 \u0627\u0644\u0645\u0647\u0645\u0629 \u0645\u0645\u0643\u0646 \u062A\u062E\u0644\u0635\u2026 \u0628\u0633 \u0623\u062B\u0631\u0647\u0627 \u0628\u064A\u0641\u0636\u0644.",en:"woke Sojourner, Spirit and Opportunity, and learned that a mission may end, but its footprint remains."},download:{ar:"\u0646\u0632\u0651\u0644 \u0627\u0644\u0634\u0647\u0627\u062F\u0629",en:"Download Certificate"},saveHint:{ar:"\u0644\u0648 \u0627\u0644\u0632\u0631\u0627\u0631 \u0645\u0627 \u0646\u0632\u0651\u0644\u0634 \u0627\u0644\u0634\u0647\u0627\u062F\u0629: \u0643\u0644\u064A\u0643 \u064A\u0645\u064A\u0646 \u0639\u0644\u0649 \u0627\u0644\u0635\u0648\u0631\u0629 (\u0623\u0648 \u0627\u0636\u063A\u0637 \u0639\u0644\u064A\u0647\u0627 \u0645\u0637\u0648\u0651\u0644\u064B\u0627) \u0648\u0627\u062E\u062A\u0627\u0631 \xAB\u062D\u0641\u0638 \u0627\u0644\u0635\u0648\u0631\u0629\xBB.",en:"If the button doesn\u2019t download it, right-click (or long-press) the image and choose \u201CSave image\u201D."},replay:{ar:"\u0627\u0628\u062F\u0623 \u0645\u0646 \u0627\u0644\u0623\u0648\u0644",en:"Start Again"},nextFootprint:{ar:"\u0627\u0644\u0623\u062B\u0631 \u0627\u0644\u062C\u0627\u064A\u2026 \u0628\u062A\u0627\u0639\u0643",en:"The Next Footprint Is Yours"},active:{ar:"\u0634\u063A\u0627\u0644 \u062F\u0644\u0648\u0642\u062A\u064A",en:"Active now"},j1:{ar:"\u0627\u0633\u062A\u0642\u0628\u0644\u062A \u0627\u0644\u0625\u0634\u0627\u0631\u0629",en:"Signal received"},j2:{ar:"\u0635\u062D\u0651\u064A\u062A Sojourner",en:"Woke Sojourner"},j3:{ar:"\u0635\u062D\u0651\u064A\u062A Spirit",en:"Woke Spirit"},j4:{ar:"\u0635\u062D\u0651\u064A\u062A Opportunity",en:"Woke Opportunity"},j5:{ar:"\u0627\u0644\u0623\u062B\u0631 \u0627\u0644\u062C\u0627\u064A",en:"The next footprint"},journeyAria:{ar:"\u0631\u062D\u0644\u062A\u0643",en:"Your journey"},aboutAria:{ar:"\u0639\u0646 \u0627\u0644\u0645\u0634\u0631\u0648\u0639 \u0648\u0627\u0644\u0645\u0635\u0627\u062F\u0631",en:"About & sources"},tab_project:{ar:"\u0627\u0644\u0645\u0634\u0631\u0648\u0639",en:"Project"},tab_teacher:{ar:"\u0644\u0644\u0645\u062F\u0631\u0633",en:"For Teachers"},tab_sources:{ar:"\u0627\u0644\u0645\u0635\u0627\u062F\u0631",en:"Sources"},tab_ai:{ar:"\u0627\u0633\u062A\u062E\u062F\u0627\u0645 \u0627\u0644\u0640 AI",en:"Use of AI"},aboutP1:{ar:"<bdi>The Last Footprint</bdi> \u062A\u062C\u0631\u0628\u0629 \u062A\u0641\u0627\u0639\u0644\u064A\u0629 \u0644\u0637\u0644\u0627\u0628 \u0645\u0646 \u0661\u0660 \u0644\u0640 \u0661\u0665 \u0633\u0646\u0629 \u0639\u0646 \u0645\u0639\u062F\u0627\u062A \u0646\u0627\u0633\u0627 \u0627\u0644\u0644\u064A \u062E\u0644\u0635\u062A \u0645\u0647\u0645\u062A\u0647\u0627 \u0648\u0641\u0636\u0644\u062A \u0639\u0644\u0649 \u0627\u0644\u0645\u0631\u064A\u062E: Sojourner \u0648Spirit \u0648Opportunity.",en:"The Last Footprint is an interactive story for students aged 10\u201315 about NASA equipment that finished its mission and stayed on Mars: Sojourner, Spirit and Opportunity."},aboutP2:{ar:"\u0645\u0639\u0645\u0648\u0644\u0629 \u0644\u062A\u062D\u062F\u064A \xAB<bdi>Abandoned but not Forgotten</bdi>\xBB \u0641\u064A <bdi>NASA Space Apps 2026</bdi>. \u0627\u0644\u0637\u0627\u0644\u0628 \u0628\u064A\u0635\u062D\u0651\u064A \u0643\u0644 \u0631\u0648\u0641\u0631 \u0628\u0640 <bdi>Power&nbsp;Pulse</bdi>\u060C \u0648\u064A\u0633\u0645\u0639 \u062D\u0643\u0627\u064A\u062A\u0647\u060C \u0648\u064A\u0633\u062A\u0643\u0634\u0641 \u062D\u0642\u0627\u064A\u0642 \u062D\u0642\u064A\u0642\u064A\u0629 \u0645\u0646 \u0646\u0627\u0633\u0627.",en:"Built for the NASA Space Apps 2026 challenge \u201CAbandoned but not Forgotten\u201D. Students wake each rover with a Power Pulse, hear its story and explore real NASA facts."},aboutL1:{ar:"\u0645\u0643\u0627\u0646 \u0627\u0644\u0634\u0645\u0633 \u0641\u0648\u0642 \u0627\u0644\u0645\u0631\u064A\u062E \u062F\u0644\u0648\u0642\u062A\u064A \u0645\u062D\u0633\u0648\u0628 \u0628\u062E\u0648\u0627\u0631\u0632\u0645\u064A\u0629 Mars24 \u0645\u0646 \u0646\u0627\u0633\u0627\u060C \u0641\u0627\u0644\u0646\u0647\u0627\u0631 \u0648\u0627\u0644\u0644\u064A\u0644 \u062D\u0642\u064A\u0642\u064A\u064A\u0646.",en:"The Sun\u2019s position over Mars is computed live with NASA\u2019s Mars24 algorithm \u2014 day and night are real."},aboutL2:{ar:"\u0646\u0645\u0648\u0630\u062C Spirit \u0648Opportunity \u062B\u0644\u0627\u062B\u064A \u0627\u0644\u0623\u0628\u0639\u0627\u062F \u0645\u0646 \u0646\u0627\u0633\u0627\u060C \u0648\u0627\u0644\u0635\u0648\u0631 \u0645\u0646 \u0623\u0631\u0634\u064A\u0641 \u0646\u0627\u0633\u0627 \u0627\u0644\u0631\u0633\u0645\u064A.",en:"The Spirit/Opportunity 3D model and the photos come from NASA\u2019s official archives."},aboutL3:{ar:"\u0643\u0644 \u062C\u0645\u0644\u0629 \u0645\u0643\u062A\u0648\u0628 \u0639\u0644\u064A\u0647\u0627 \xAB\u062D\u0642\u064A\u0642\u0629\xBB \u0623\u0648 \xAB\u0642\u0635\u0629\xBB \u0639\u0634\u0627\u0646 \u0627\u0644\u0637\u0627\u0644\u0628 \u064A\u0641\u0631\u0651\u0642 \u0628\u064A\u0646 \u0627\u0644\u0645\u0639\u0644\u0648\u0645\u0629 \u0648\u0627\u0644\u062E\u064A\u0627\u0644.",en:"Every line is labelled \u201CFact\u201D or \u201CStory\u201D so students can tell information from fiction."},aboutL4:{ar:"\u0628\u064A\u0634\u062A\u063A\u0644 \u0628\u0627\u0644\u0639\u0631\u0628\u064A \u0648\u0627\u0644\u0625\u0646\u062C\u0644\u064A\u0632\u064A\u060C \u0639\u0644\u0649 \u0627\u0644\u0645\u0648\u0628\u0627\u064A\u0644 \u0648\u0627\u0644\u0643\u0645\u0628\u064A\u0648\u062A\u0631\u060C \u0648\u0645\u0646 \u063A\u064A\u0631 \u0646\u062A.",en:"Works in Arabic and English, on phones and computers, and offline."},aboutL5:{ar:"\xAB\u0627\u0644\u0631\u062D\u0644\u0629 \u0627\u0644\u0643\u0627\u0645\u0644\u0629\xBB \u0628\u062A\u062D\u0643\u064A \u0631\u062D\u0644\u0629 Spirit \u0627\u0644\u062D\u0642\u064A\u0642\u064A\u0629: \u0627\u0644\u0625\u0637\u0644\u0627\u0642 \u0645\u0646 \u0641\u0644\u0648\u0631\u064A\u062F\u0627 \u0633\u0646\u0629 \u0662\u0660\u0660\u0663\u060C \u0667 \u0634\u0647\u0648\u0631 \u0641\u064A \u0627\u0644\u0641\u0636\u0627\u060C \u0648\u0627\u0644\u0647\u0628\u0648\u0637 \u0628\u0627\u0644\u0628\u0631\u0627\u0634\u0648\u062A \u0648\u0623\u0643\u064A\u0627\u0633 \u0627\u0644\u0647\u0648\u0627. \u0627\u0644\u0648\u0642\u062A \u0645\u062A\u0633\u0631\u0651\u0639\u060C \u0648\u0627\u0644\u0623\u0631\u0642\u0627\u0645 \u0627\u0644\u0644\u064A \u0639\u0644\u0649 \u0627\u0644\u0634\u0627\u0634\u0629 \u062D\u0642\u064A\u0642\u064A\u0629.",en:"The Immersive Expedition replays Spirit\u2019s real trip: launch from Florida in 2003, 7 months in space, and the landing by parachute and airbags. Time is sped up; the numbers on screen are real."},teamLine:{ar:"\u062A\u064A\u0645 <bdi>3M</bdi> \xB7 <bdi>NASA Space Apps 2026</bdi> \xB7 \u0643\u0641\u0631 \u0627\u0644\u0634\u064A\u062E",en:"Team 3M \xB7 NASA Space Apps 2026 \xB7 Kafr El Sheikh"},teachP1:{ar:"\u062D\u0635\u0629 \u0645\u0642\u062A\u0631\u062D\u0629 (\u0662\u0660 \u062F\u0642\u064A\u0642\u0629):",en:"Suggested lesson (20 minutes):"},teach1:{ar:"\u0663 \u062F\u0642\u0627\u064A\u0642: \u0627\u0633\u062A\u0642\u0628\u0644\u0648\u0627 \u0627\u0644\u0625\u0634\u0627\u0631\u0629 \u0648\u0627\u0633\u0623\u0644\u0648\u0627 \u0627\u0644\u0637\u0644\u0627\u0628: \u0625\u0632\u0627\u064A \u0628\u0646\u0639\u0631\u0641 \u0625\u0646 \u062F\u0644\u0648\u0642\u062A\u064A \u0646\u0647\u0627\u0631 \u0648\u0644\u0627 \u0644\u064A\u0644 \u0639\u0644\u0649 \u0627\u0644\u0645\u0631\u064A\u062E\u061F",en:"3 min: receive the signal and ask: how can we know if it is day or night on Mars right now?"},teach2:{ar:"\u0661\u0660 \u062F\u0642\u0627\u064A\u0642: \u0627\u0644\u0637\u0644\u0627\u0628 \u064A\u0635\u062D\u0651\u0648\u0627 \u0627\u0644\u062A\u0644\u0627\u062A \u0631\u0648\u0641\u0631\u0632 \u0648\u064A\u0642\u0631\u0623\u0648\u0627 \xAB\u0631\u062D\u0644\u0629 \u062D\u064A\u0627\u062A\u064A\xBB \u0644\u0643\u0644 \u0648\u0627\u062D\u062F.",en:"10 min: students wake all three rovers and read each \u201CMy life on Mars\u201D."},teach3:{ar:"\u0665 \u062F\u0642\u0627\u064A\u0642: \u0644\u0639\u0628\u0629 \u0625\u0646\u0642\u0627\u0630 Spirit \u0648\u0643\u0627\u0631\u062A \xAB\u062D\u0642\u064A\u0642\u0629 \u0648\u0644\u0627 \u0625\u0634\u0627\u0639\u0629\u061F\xBB.",en:"5 min: the \u201Csave Spirit\u201D game and the \u201CFact or myth?\u201D cards."},teach4:{ar:"\u062F\u0642\u064A\u0642\u062A\u064A\u0646: \u0643\u0644 \u0637\u0627\u0644\u0628 \u064A\u0633\u064A\u0628 \u0623\u062B\u0631\u0647 \u0648\u064A\u0627\u062E\u062F \u0634\u0647\u0627\u062F\u062A\u0647.",en:"2 min: each student leaves a footprint and gets a certificate."},teachQ:{ar:"\u0623\u0633\u0626\u0644\u0629 \u0644\u0644\u0646\u0642\u0627\u0634:",en:"Discussion questions:"},teachQ1:{ar:"\u0644\u064A\u0647 \u0627\u0644\u0631\u0648\u0641\u0631\u0632 \u0627\u0634\u062A\u063A\u0644\u062A \u0623\u0637\u0648\u0644 \u0628\u0643\u062A\u064A\u0631 \u0645\u0646 \u0627\u0644\u0645\u062E\u0637\u0637\u061F",en:"Why did the rovers last so much longer than planned?"},teachQ2:{ar:"\u0625\u064A\u0647 \u0627\u0644\u0641\u0631\u0642 \u0628\u064A\u0646 \u0627\u0644\u062D\u0642\u064A\u0642\u0629 \u0627\u0644\u0639\u0644\u0645\u064A\u0629 \u0648\u0627\u0644\u0642\u0635\u0629 \u0627\u0644\u0644\u064A \u0628\u0646\u062D\u0643\u064A\u0647\u0627 \u0639\u0646\u0647\u0627\u061F",en:"What is the difference between a scientific fact and the story we tell about it?"},teachQ3:{ar:"\u0644\u0648 \u0635\u0645\u0645\u062A \u0631\u0648\u0641\u0631\u060C \u0647\u062A\u0639\u0645\u0644 \u0625\u064A\u0647 \u0639\u0634\u0627\u0646 \u064A\u0639\u064A\u0634 \u0623\u0637\u0648\u0644\u061F",en:"If you designed a rover, what would you do to make it last longer?"},factNote:{ar:"\u0643\u0644 \u0627\u0644\u0623\u0631\u0642\u0627\u0645 \u0648\u0627\u0644\u062A\u0648\u0627\u0631\u064A\u062E \u0645\u062A\u0631\u0627\u062C\u0639\u0629 \u0639\u0644\u0649 \u0645\u0635\u0627\u062F\u0631 \u0646\u0627\u0633\u0627. \u0635\u0648\u0631\u0629 <bdi>PIA05547: NASA/JPL/Cornell/Texas A&amp;M</bdi>.",en:"All numbers and dates were checked against NASA sources. Image PIA05547: NASA/JPL/Cornell/Texas A&amp;M."},aiP1:{ar:"\u0625\u062D\u0646\u0627 \u0628\u0646\u0648\u0636\u062D \u0628\u0635\u0631\u0627\u062D\u0629 \u0625\u0632\u0627\u064A \u0627\u0633\u062A\u062E\u062F\u0645\u0646\u0627 \u0623\u062F\u0648\u0627\u062A \u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0627\u0635\u0637\u0646\u0627\u0639\u064A:",en:"We are open about how we used AI tools:"},ai1:{ar:"\u0627\u0633\u062A\u062E\u062F\u0645\u0646\u0627 <bdi>Claude</bdi> (\u0645\u0646 <bdi>Anthropic</bdi>) \u0643\u0645\u0633\u0627\u0639\u062F \u0641\u064A \u0627\u0644\u0628\u0631\u0645\u062C\u0629 \u0648\u0627\u0644\u062A\u0635\u0645\u064A\u0645 \u0648\u0643\u062A\u0627\u0628\u0629 \u0627\u0644\u0646\u0635\u0648\u0635\u060C \u0648\u0643\u0644 \u0642\u0631\u0627\u0631 \u0643\u0627\u0646 \u0628\u062A\u0627\u0639 \u0627\u0644\u0641\u0631\u064A\u0642.",en:"We used Claude (by Anthropic) as an assistant for coding, design and writing; every decision was the team\u2019s."},ai2:{ar:"\u0623\u0635\u0648\u0627\u062A \u0627\u0644\u0634\u062E\u0635\u064A\u0627\u062A \u0645\u0639\u0645\u0648\u0644\u0629 \u0628\u0623\u0635\u0648\u0627\u062A <bdi>Microsoft Azure</bdi> \u0627\u0644\u0639\u0635\u0628\u064A\u0629 (\u062A\u062D\u0648\u064A\u0644 \u0627\u0644\u0646\u0635 \u0644\u0643\u0644\u0627\u0645)\u060C \u0648\u0645\u0634 \u0623\u0635\u0648\u0627\u062A \u0646\u0627\u0633 \u062D\u0642\u064A\u0642\u064A\u064A\u0646.",en:"Character voices use Microsoft Azure neural text-to-speech, not real people\u2019s voices."},ai3:{ar:"\u0633\u0648\u0644 \u0634\u062E\u0635\u064A\u0629 \u062E\u064A\u0627\u0644\u064A\u0629 \u0645\u0646 \u062A\u0635\u0645\u064A\u0645\u0646\u0627\u060C \u0648\u0643\u0644\u0627\u0645 \u0627\u0644\u0631\u0648\u0641\u0631\u0632 \u0627\u0644\u0644\u064A \u0639\u0644\u064A\u0647 \xAB\u0642\u0635\u0629\xBB \u062E\u064A\u0627\u0644\u060C \u0623\u0645\u0627 \xAB\u062D\u0642\u064A\u0642\u0629\xBB \u0641\u0645\u062A\u0631\u0627\u062C\u0639\u0629 \u0639\u0644\u0649 \u0646\u0627\u0633\u0627.",en:"SOL is a fictional character we designed; rover lines marked \u201CStory\u201D are fiction, lines marked \u201CFact\u201D are checked against NASA."},ai4:{ar:"\u0627\u0644\u0635\u0648\u0631 \u0627\u0644\u062D\u0642\u064A\u0642\u064A\u0629 \u0643\u0644\u0647\u0627 \u0645\u0646 \u0646\u0627\u0633\u0627 \u0648\u0645\u0643\u062A\u0648\u0628 \u0645\u0635\u062F\u0631\u0647\u0627\u060C \u0648\u0645\u0627 \u0627\u0633\u062A\u062E\u062F\u0645\u0646\u0627\u0634 \u0635\u0648\u0631 \u0645\u0648\u0644\u0651\u062F\u0629 \u0628\u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0627\u0635\u0637\u0646\u0627\u0639\u064A \u0639\u0644\u0649 \u0625\u0646\u0647\u0627 \u062D\u0642\u064A\u0642\u064A\u0629.",en:"All real photos are NASA\u2019s and credited; no AI-generated image is presented as real."}};function Ee(i,e){return NM[i]?.[e]??i}function Sd(i){document.documentElement.lang=i,document.documentElement.dir=i==="ar"?"rtl":"ltr",document.querySelectorAll("[data-t]").forEach(e=>{e.textContent=Ee(e.dataset.t,i)}),document.querySelectorAll("[data-t-aria]").forEach(e=>{e.setAttribute("aria-label",Ee(e.dataset.tAria,i))})}var Hi=Math.PI/180;function da(i=new Date){let n=i.getTime()/864e5+24405875e-1+(37+32.184)/86400-2451545,s=(19.3871+.52402073*n)*Hi,r=270.3871+.524038496*n,o=[[.0071,2.2353,49.409],[.0057,2.7543,168.173],[.0039,1.1177,191.837],[.0037,15.7866,21.736],[.0021,2.1354,15.704],[.002,2.4694,95.528],[.0018,32.8493,49.095]].reduce((g,[m,M,A])=>g+m*Math.cos((.985626*n/M+A)*Hi),0),l=(10.691+3e-7*n)*Math.sin(s)+.623*Math.sin(2*s)+.05*Math.sin(3*s)+.005*Math.sin(4*s)+5e-4*Math.sin(5*s)+o,c=((r+l)%360+360)%360,u=2.861*Math.sin(2*c*Hi)-.071*Math.sin(4*c*Hi)+.002*Math.sin(6*c*Hi)-l,h=(n-4.5)/1.0274912517+44796-9626e-7,d=(24*h%24+24)%24,_=((360-((d*15+u+180)%360+360)%360)%360+360)%360,y=Math.asin(.42565*Math.sin(c*Hi))/Hi+.25*Math.sin(c*Hi);return{Ls:c,msd:h,mtc:d,lat:y,lonE:_>180?_-360:_}}function Ns(i,e,t){let n=i*Hi,s=e*Hi;return t.set(Math.cos(s)*Math.cos(n),Math.sin(n),-Math.sin(s)*Math.cos(n))}function wm(i,e){return((12+(e-i.lonE)/15)%24+24)%24}var jc=[{id:"curiosity",lat:-4.59,lon:137.44,name:"Curiosity",place:"Gale Crater",year:2012,extra:!0},{id:"perseverance",lat:18.44,lon:77.45,name:"Perseverance",place:"Jezero Crater",year:2021,extra:!0}],ar=[{id:"sojourner",lat:19.13,lon:-33.22,name:"Sojourner",place:"Ares Vallis",year:1997},{id:"spirit",lat:-14.57,lon:175.47,name:"Spirit",place:"Gusev Crater",year:2004},{id:"opportunity",lat:-1.95,lon:-5.53,name:"Opportunity",place:"Meridiani Planum",year:2004}],DM=5.4,bd=i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2,Jc=i=>Math.min(1,Math.max(0,i)),cs=(i,e,t)=>{let n=Jc((t-i)/(e-i));return n*n*(3-2*n)};function Ed(i){let e=Tt.degToRad(i),t=Tt.degToRad(-20);return Tt.radToDeg(Math.atan2(Math.sin(e)+Math.sin(t),Math.cos(e)+Math.cos(t)))}function Td(i,e=!0){let t=new Image,n=new qt(t);return e&&(n.colorSpace=At),t.onload=()=>{n.needsUpdate=!0},t.src="data:image/jpeg;base64,"+i,n}function UM(){let i=document.createElement("canvas");i.width=i.height=64;let e=i.getContext("2d"),t=e.createRadialGradient(32,32,0,32,32,32);return t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.3,"rgba(255,255,255,0.55)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,64,64),new ln(i)}function Am(i,e,t){let n=new xi(1,3),s=n.attributes.position,r=new I;for(let o=0;o<s.count;o++){r.fromBufferAttribute(s,o);let l=1+bi(r.x*2.2+e,r.y*2.2+r.z)*.22+bi(r.x*6+e,r.z*6)*.05;r.multiplyScalar(l),r.x*=1.25,s.setXYZ(o,r.x,r.y,r.z)}n.computeVertexNormals();let a=new ae(n,new qe({color:t,roughness:1}));return a.scale.setScalar(i),a}function Rm(i,e){let t=new ti,n=new Vt(35,innerWidth/innerHeight,.01,200);t.add(n);let s=UM(),r=Td(window.STARS_TEX_B64||""),a=new ae(new Ut(90,48,24),new Lt({map:r,side:kt,color:new oe(.32,.32,.36),depthWrite:!1,transparent:!0,opacity:0}));t.add(a);let o=e.mobile?1400:2600,l=new Float32Array(o*3),c=new Float32Array(o);for(let x=0;x<o;x++){let k=Math.random()*2-1,V=Math.random()*Math.PI*2,Y=70,se=Math.sqrt(1-k*k);l[x*3]=Math.cos(V)*se*Y,l[x*3+1]=k*Y,l[x*3+2]=Math.sin(V)*se*Y,c[x]=Math.random()}let u=new Qe;u.setAttribute("position",new ct(l,3)),u.setAttribute("aRand",new ct(c,1));let h=new ft({transparent:!0,depthWrite:!1,blending:Et,uniforms:{uTime:{value:0},uPx:{value:i.getPixelRatio()},uOpacity:{value:0},uMap:{value:s}},vertexShader:`attribute float aRand; uniform float uTime, uPx, uOpacity; varying float vA; varying vec3 vC;
      void main(){ vec4 mv = modelViewMatrix * vec4(position,1.0); gl_Position = projectionMatrix * mv;
        float tw = 0.65 + 0.35 * sin(uTime * (0.6 + aRand * 2.2) + aRand * 60.0);
        gl_PointSize = (0.8 + pow(aRand, 6.0) * 3.2) * uPx * 2.0;
        vA = tw * uOpacity * (0.35 + 0.65 * aRand);
        vC = mix(vec3(0.75,0.85,1.0), vec3(1.0,0.86,0.7), fract(aRand * 7.31)); }`,fragmentShader:`uniform sampler2D uMap; varying float vA; varying vec3 vC;
      void main(){ float a = texture2D(uMap, gl_PointCoord).a; gl_FragColor = vec4(vC * 1.6, a * vA); }`});t.add(new Tn(u,h));let d=da(new Date),f=Ns(d.lat,d.lonE,new I),_=Td(window.MARS_TEX_B64||"");_.anisotropy=Math.min(8,i.capabilities.getMaxAnisotropy());let y=Td(window.MARS_TEX_B64||"",!1),g=new ae(new Ut(1,e.mobile?96:160,e.mobile?48:80),new qe({map:_,bumpMap:y,bumpScale:1.4,roughness:1,metalness:0}));t.add(g);let m=new ae(new Ut(1.035,96,48),new ft({transparent:!0,depthWrite:!1,side:kt,blending:Et,uniforms:{uSun:{value:f},uK:{value:0}},vertexShader:"varying vec3 vN; varying vec3 vW; void main(){ vN = normalize(normal); vec4 w = modelMatrix * vec4(position,1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }",fragmentShader:`uniform vec3 uSun; uniform float uK; varying vec3 vN; varying vec3 vW;
      void main(){ vec3 V = normalize(cameraPosition - vW); float rim = pow(1.0 - abs(dot(-vN, V)), 3.0);
        float day = 0.22 + 0.78 * smoothstep(-0.25, 0.5, dot(normalize(vW), uSun)); // a faint rim stays on the night side
        vec3 c = mix(vec3(0.95,0.55,0.35), vec3(0.6,0.75,1.0), smoothstep(0.1, -0.2, dot(normalize(vW), uSun)) * 0.6);
        gl_FragColor = vec4(c * rim * day * 1.6 * uK, rim * day * uK); }`}));t.add(m);let M=new si("#fff1e0",0);M.position.copy(f).multiplyScalar(10),t.add(M);let A=new Zs("#5d5a80",.32);t.add(A);let v=Am(.045,3,"#6d625a"),b=Am(.03,9,"#8a7d70");t.add(v,b);let S=[...ar,...jc],C=S.map((x,k)=>{let V=!!x.extra,Y=Ns(x.lat,x.lon,new I),se=new $e;se.position.copy(Y).multiplyScalar(1.003),se.quaternion.setFromUnitVectors(new I(0,1,0),Y);let ue=new mn(new cn({map:s,color:V?new oe(1.6,4.6,2.2):new oe(2.2,4.4,5.2),transparent:!0,depthWrite:!1,blending:Et,toneMapped:!1}));ue.scale.setScalar(.05),se.add(ue);let $=[0,1].map(()=>{let Ue=new ae(new Ks(.8,1,48),new Lt({color:V?new oe(.9,3,1.3):new oe(1.2,2.8,3.4),transparent:!0,depthWrite:!1,blending:Et,toneMapped:!1,side:Ht}));return Ue.rotation.x=-Math.PI/2,se.add(Ue),Ue}),ne=new bt(.0015,.004,.05,8,1,!0).translate(0,.025,0),de=new ae(ne,new Lt({color:new oe(1,2.6,3.2),transparent:!0,depthWrite:!1,blending:Et,toneMapped:!1}));se.add(de);let ve=new $e;ve.scale.setScalar(.001),se.add(ve);let me=new ae(new bt(.004,.004,.15,8).translate(0,.075,0),new Lt({color:"#e9e4dc",transparent:!0})),pe=new ae(new Ut(.024,20,14),new Lt({color:new oe(1.35,.72,.3),toneMapped:!1}));pe.position.y=.16,ve.add(me,pe);let Ae=new ae(new Ut(.085,10,8),new Lt({visible:!1}));return Ae.position.y=.13,Ae.userData.site=x.id,ve.add(Ae),t.add(se),{site:x,n:Y,g:se,core:ue,rings:$,beam:de,pin:ve,head:pe,hit:Ae,on:0,target:0,phase:k*.37,el:null,pinK:0}}),p=[],E=["sojourner","spirit","opportunity","curiosity","perseverance"].map(x=>S.find(k=>k.id===x)),L=new I,z=new I,O=new I;for(let x=0;x<E.length-1;x++){Ns(E[x].lat,E[x].lon,L),Ns(E[x+1].lat,E[x+1].lon,z);let k=L.angleTo(z),V=Math.max(8,Math.round(k*40));for(let Y=0;Y<=V;Y++){let se=Y/V;O.copy(L).multiplyScalar(Math.sin((1-se)*k)).addScaledVector(z,Math.sin(se*k)).divideScalar(Math.sin(k)),p.push(O.clone().multiplyScalar(1.006+Math.sin(se*Math.PI)*.05))}}let G=new Qe().setFromPoints(p),w=new Vn(G,new Ka({color:new oe(2.2,1.3,.55),dashSize:.025,gapSize:.018,transparent:!0,toneMapped:!1}));w.computeLineDistances(),G.setDrawRange(0,0),w.visible=!1,t.add(w);let D={k:0},H={points:null,mat:null,progress:0,opacity:0};function N(x,k){H.points&&(n.remove(H.points),H.points.geometry.dispose());let V=1200,Y=520,se=document.createElement("canvas");se.width=V,se.height=Y;let ue=se.getContext("2d");ue.fillStyle="#fff",ue.textAlign="center",ue.textBaseline="middle",ue.font='600 200px "Chakra Petch", "Chakra", "Segoe UI", sans-serif';let $=(ze,rn)=>{let xn=200;for(ue.font=`600 ${xn}px "Chakra Petch", "Chakra", "Segoe UI", sans-serif`;ue.measureText(ze).width>V*.96&&xn>40;)xn-=6,ue.font=`600 ${xn}px "Chakra Petch", "Chakra", "Segoe UI", sans-serif`;ue.fillText(ze,V/2,rn)};$("THE LAST",Y*.27),$("FOOTPRINT",Y*.74),H.canvas=se;let ne=ue.getImageData(0,0,V,Y).data,de=[],ve=e.mobile?4:3;for(let ze=0;ze<Y;ze+=ve)for(let rn=0;rn<V;rn+=ve)ne[(ze*V+rn)*4+3]>140&&de.push(rn+(Math.random()-.5)*ve*.6,ze+(Math.random()-.5)*ve*.6);let me=de.length/2,pe=4,Ae=Math.tan(Tt.degToRad(n.fov/2))*pe,Ue=Ae*n.aspect,je=ze=>(ze/innerWidth*2-1)*Ue,K=ze=>(1-ze/innerHeight*2)*Ae,ge=Math.min(x.width/V,x.height/Y),re=x.left+(x.width-V*ge)/2,_e=x.top+(x.height-Y*ge)/2,ye=new Float32Array(me*3),ce=new Float32Array(me*3),Fe=new Float32Array(me*2);for(let ze=0;ze<me;ze++){let rn=re+de[ze*2]*ge,xn=_e+de[ze*2+1]*ge;ye[ze*3]=je(rn),ye[ze*3+1]=K(xn),ye[ze*3+2]=-pe;let Bo=Math.random()*Math.PI*2,ko=Math.sqrt(Math.random())*Ae*.42;ce[ze*3]=Math.cos(Bo)*ko,ce[ze*3+1]=Math.sin(Bo)*ko,ce[ze*3+2]=-pe+.6+Math.random()*1.2,Fe[ze*2]=Math.random(),Fe[ze*2+1]=de[ze*2]/V}let Ie=new Qe;Ie.setAttribute("position",new ct(ye,3)),Ie.setAttribute("aStart",new ct(ce,3)),Ie.setAttribute("aRnd",new ct(Fe,2));let Pt=Math.max(1.4,ge*ve*1.05)*i.getPixelRatio();H.mat=H.mat||new ft({transparent:!0,depthWrite:!1,depthTest:!1,blending:Et,uniforms:{uP:{value:0},uT:{value:0},uO:{value:0},uSize:{value:2},uMap:{value:s},uSide:{value:1}},vertexShader:`attribute vec3 aStart; attribute vec2 aRnd; uniform float uP, uT, uSize, uSide; varying float vA;
        void main(){
          float order = uSide > 0.0 ? aRnd.y : 1.0 - aRnd.y;           // sweep in reading order
          float k = clamp((uP * 1.9 - order * 0.6 - aRnd.x * 0.3), 0.0, 1.0);
          k = k * k * (3.0 - 2.0 * k);
          vec3 p = mix(aStart, position, k);
          p.x += sin(uT * 1.3 + aRnd.x * 40.0) * 0.004 * (1.0 + (1.0 - k) * 30.0);
          p.y += cos(uT * 1.1 + aRnd.x * 30.0) * 0.004 * (1.0 + (1.0 - k) * 30.0);
          vec4 mv = modelViewMatrix * vec4(p, 1.0);
          gl_Position = projectionMatrix * mv;
          gl_PointSize = uSize * (1.0 + (1.0 - k) * 1.4) * (0.75 + aRnd.x * 0.5);
          vA = mix(0.25, 1.0, k) * (0.8 + 0.2 * sin(uT * 3.0 + aRnd.x * 50.0));
        }`,fragmentShader:`uniform sampler2D uMap; uniform float uO; varying float vA;
        void main(){ float a = texture2D(uMap, gl_PointCoord).a; gl_FragColor = vec4(vec3(1.5, 1.12, 0.82), a * vA * uO); }`}),H.mat.uniforms.uSize.value=Pt,H.mat.uniforms.uSide.value=1,H.points=new Tn(Ie,H.mat),H.points.frustumCulled=!1,H.points.renderOrder=20,n.add(H.points)}let B=new I,R={lon:Ed(d.lonE),lat:12,r:13,look:new I,side:0,sideTarget:0,lift:0,liftTarget:0},F={t:-1,phase:"idle",warp:null,spin:.018,focus:null,vLon:0,vLat:0,dragging:!1,idle:0},W=new I,le=new I,ie=new I(0,1,0),Le=new I;function ke(x){let k=innerWidth<innerHeight*.95;R.sideTarget=k?0:x==="ar"?-.62:.62;let V=k&&innerWidth/innerHeight>.6;R.liftTarget=k?V?.15:.27:.05,R.rHome=k?V?7.5:6.7:DM,R.pickLift=k?V?.12:.3:.1,R.pickR=k?V?5.6:6:5,n.fov=k?46:35,n.aspect=innerWidth/innerHeight,n.updateProjectionMatrix()}function Ce(){let x=Tt.degToRad(R.lat),k=Tt.degToRad(R.lon);n.position.set(Math.cos(k)*Math.cos(x),Math.sin(x),-Math.sin(k)*Math.cos(x)).multiplyScalar(R.r),W.copy(n.position).negate().normalize(),le.crossVectors(W,ie).normalize(),Le.crossVectors(le,W),R.look.set(0,0,0).addScaledVector(le,-R.side*R.r*.42).addScaledVector(Le,-R.lift*R.r*.42),n.lookAt(R.look)}let Q={beep:null};function ee(x){F.t=0,F.phase="intro",F.reduced=x,x&&(F.t=6)}function he(x,k){let V=C.find(Y=>Y.site.id===x);F.phase="warp",F.warp={t:0,from:{lon:R.lon,lat:R.lat,r:R.r,side:R.side,lift:R.lift},to:{lon:V.site.lon,lat:V.site.lat},onDone:k,done:!1}}function Z(){F.phase="ending",F.focus=null,F.warp=null,A.intensity=.32,D.k=0,R.lon=Ed(da(new Date).lonE),R.lat=10,R.r=R.pickR*1.6,H.opacity=0,C.forEach(x=>{x.target=1})}function fe(){F.phase="pick",F.focus=null,F.idle=0,F.vLon=0,F.vLat=0,C.forEach(x=>{x.target=x.site.extra?0:1})}function xe(x){let k=C.find(V=>V.site.id===x);F.focus=k?{id:x,lon:k.site.lon,lat:Tt.clamp(k.site.lat,-40,40)}:null}function Je(){F.dragging=!0,F.focus=null,F.idle=0,F.vLon=0,F.vLat=0}function Ve(x,k,V){let Y=.22*(R.r/4);R.lon-=x*Y,R.lat=Tt.clamp(R.lat+k*Y*.8,-55,55),V>0&&(F.vLon=-x*Y/V,F.vLat=k*Y*.8/V)}function Ge(){F.dragging=!1,F.idle=0}let Xe=new io,He=new Se;function pt(x,k){He.set(x/innerWidth*2-1,-(k/innerHeight)*2+1),Xe.setFromCamera(He,n);let V=Xe.intersectObject(g,!1)[0],Y=Xe.intersectObjects(C.filter(se=>se.pin.visible).map(se=>se.hit),!1);for(let se of Y)if(!V||se.distance<V.distance+.02)return se.object.userData.site;return null}function rt(x,k=!0){F.phase="home",F.t=Math.max(F.t,6),F.warp=null,F.focus=null,A.intensity=.32,w.visible=!1,C.forEach(V=>{V.target=V.site.extra?0:1}),ke(x),k&&(R.r=R.rHome,R.lat=12,H.opacity=.38,R.lon=Ed(da(new Date).lonE))}let mt=new I,ut=0;function xt(){let x=da(new Date);Ns(x.lat,x.lonE,f),M.position.copy(f).multiplyScalar(10)}function X(x,k){ut+=x,ut>30&&(ut=0,xt()),h.uniforms.uTime.value=k,F.t>=0&&(F.t+=x);let V=F.t,Y=cs(0,1.6,V);if(h.uniforms.uOpacity.value=Y,a.material.opacity=Y,M.intensity=3.2*cs(.3,2.6,V),m.material.uniforms.uK.value=cs(1,3,V),F.phase==="intro"||F.phase==="home"){let $=Tt.lerp(13,R.rHome,bd(Jc(V/4.2)));R.r=F.phase==="intro"?$:R.r+($-R.r)*Math.min(1,x*2.5),F.phase==="home"&&(R.lat+=(12-R.lat)*Math.min(1,x*1.5),A.intensity+=(.32-A.intensity)*Math.min(1,x*2)),R.lon+=F.spin*x*(F.phase==="home"?1:.6)*57.3*.25,R.side+=(R.sideTarget*cs(2.5,4.5,V)-R.side)*Math.min(1,x*3),R.lift+=(R.liftTarget*cs(2.5,4.5,V)-R.lift)*Math.min(1,x*3),C.forEach((ne,de)=>{ne.target=!ne.site.extra&&V>1.5+de*.45?1:0}),H.progress=cs(1.7,4.3,V),H.opacity=cs(1.5,2.2,V),F.phase==="intro"&&V>4.4&&(F.phase="home"),F.phase==="home"&&(H.opacity+=(.38-H.opacity)*Math.min(1,x*1.2))}if(F.phase==="ending"&&(A.intensity+=(1.05-A.intensity)*Math.min(1,x*2),R.side+=(0-R.side)*Math.min(1,x*3),R.lift+=(R.pickLift+.12-R.lift)*Math.min(1,x*3),R.r+=(R.pickR*1.12-R.r)*Math.min(1,x*2),R.lat+=(8-R.lat)*Math.min(1,x*1.5),R.lon+=6*x,H.opacity+=(0-H.opacity)*Math.min(1,x*4),C.forEach($=>{$.target=1}),w.visible=!0,D.k=Math.min(1,D.k+x/5.5),G.setDrawRange(0,Math.floor(p.length*D.k))),F.phase==="pick")if(A.intensity+=(1.05-A.intensity)*Math.min(1,x*2),R.side+=(0-R.side)*Math.min(1,x*3),R.lift+=(R.pickLift-R.lift)*Math.min(1,x*3),R.r+=(R.pickR-R.r)*Math.min(1,x*2.5),H.opacity+=(0-H.opacity)*Math.min(1,x*4),F.focus){let $=(F.focus.lon-R.lon+540)%360-180;R.lon+=$*Math.min(1,x*2.6),R.lat+=(F.focus.lat-R.lat)*Math.min(1,x*2.6)}else F.dragging||(R.lon+=F.vLon*x,R.lat=Tt.clamp(R.lat+F.vLat*x,-55,55),F.vLon*=Math.pow(.08,x),F.vLat*=Math.pow(.08,x),F.idle+=x,F.idle>2.5&&(R.lon+=3*x));if(F.phase==="warp"){let $=F.warp;$.t+=x;let ne=bd(Jc($.t/1.9)),de=($.to.lon-$.from.lon+540)%360-180;if(R.lon=$.from.lon+de*ne,R.lat=Tt.lerp($.from.lat,$.to.lat,ne),R.r=Tt.lerp($.from.r,1.55,ne),R.side=Tt.lerp($.from.side,0,ne),R.lift=Tt.lerp($.from.lift,0,ne),H.opacity=1-cs(0,.6,$.t),$.t>1.9){let ve=bd(Jc(($.t-1.9)/1));R.r=Tt.lerp(1.55,1.006,ve),n.fov=Tt.lerp(n.fov,60,x*2),n.updateProjectionMatrix()}A.intensity=Tt.lerp(.32,2.2,cs(.2,1.5,$.t)),$.t>2.9&&!$.done&&($.done=!0,$.onDone?.())}Ce();let se=k*.16,ue=k*.05+2;v.position.set(Math.cos(se)*2,Math.sin(se)*.05,-Math.sin(se)*2),v.rotation.y=-se,b.position.set(Math.cos(ue)*3.3,Math.sin(ue)*.12,-Math.sin(ue)*3.3),b.rotation.y=-ue,C.forEach($=>{F.phase==="warp"&&F.warp.t>.5&&($.target=0),$.on+=($.target-$.on)*Math.min(1,x*4),$.g.getWorldPosition(mt),W.copy(n.position).sub(mt).normalize(),$.g.visible=W.dot($.n)>-.05;let ne=(k*.55+$.phase)%1;$.rings.forEach((pe,Ae)=>{let Ue=(ne+Ae*.5)%1;pe.scale.setScalar(.008+Ue*.07),pe.material.opacity=(1-Ue)*.85*$.on}),$.core.material.opacity=$.on,$.core.scale.setScalar(.018+.006*Math.sin(k*5+$.phase*9)*$.on+.012*$.on),$.beam.material.opacity=.45*$.on,$.beam.scale.y=.2+$.on*.8;let de=F.phase==="pick"&&!$.site.extra?1:0;$.pinK+=(de-$.pinK)*Math.min(1,x*5);let ve=F.focus&&F.focus.id===$.site.id,me=$.pinK*(ve?1.35+.08*Math.sin(k*6):1);$.pin.scale.setScalar(Math.max(.001,me)),$.pin.visible=$.pinK>.01,$.head.material.color.setRGB(ve?.7:1.35,ve?1.9:.72,ve?2.3:.3)}),H.mat&&(H.mat.uniforms.uP.value=F.reduced?1:H.progress,H.mat.uniforms.uO.value=H.opacity,H.mat.uniforms.uT.value=k)}function sn(x){return n.updateMatrixWorld(),C.forEach((k,V)=>{k.g.getWorldPosition(mt),W.copy(n.position).sub(mt).normalize();let Y=W.dot(k.n);mt.project(n),x[V]={x:(mt.x*.5+.5)*innerWidth,y:(-mt.y*.5+.5)*innerHeight,visible:Y>.15&&k.on>.5,on:k.on}}),x}function _t(){let x=da(new Date);return[...ar,...jc].map(k=>{let V=wm(x,k.lon),Y=Ns(k.lat,k.lon,new I),se=Ns(x.lat,x.lonE,new I);return{id:k.id,hour:V,day:Y.dot(se)>0}})}function P(x){ke(x),h.uniforms.uPx.value=i.getPixelRatio()}return ke("ar"),Ce(),{scene:t,camera:n,update:X,start:ee,warpTo:he,goHome:rt,resize:P,enterPick:fe,enterEnding:Z,focusSite:xe,dragStart:Je,dragMove:Ve,dragEnd:Ge,pickAt:pt,planet:g,buildTitle:N,labelPositions:sn,siteStatus:_t,beacons:C,sun:d,get phase(){return F.phase},get t(){return F.t},title:H,sfx:Q}}var Cm={sojourner:{planned:7,actual:83,unit:{ar:"\u064A\u0648\u0645 \u0645\u0631\u064A\u062E\u064A",en:"sols"},items:[{sol:1,date:{ar:"\u0664 \u064A\u0648\u0644\u064A\u0648 \u0661\u0669\u0669\u0667",en:"4 Jul 1997"},t:{ar:"\u0646\u0632\u0644\u062A \u0639\u0644\u0649 \u0627\u0644\u0645\u0631\u064A\u062E \u0645\u0639 \u0627\u0644\u0645\u062D\u0637\u0629 Pathfinder \u0641\u064A \u0648\u0627\u062F\u064A Ares Vallis",en:"Landed with the Pathfinder lander in Ares Vallis"}},{sol:7,plan:!0,date:{ar:"\u064A\u0648\u0645 \u0667",en:"Sol 7"},t:{ar:"\u0643\u0627\u0646 \u0627\u0644\u0645\u0641\u0631\u0648\u0636 \u0645\u0647\u0645\u062A\u064A \u062A\u062E\u0644\u0635 \u0647\u0646\u0627",en:"My mission was planned to end here"}},{sol:83,end:!0,date:{ar:"\u0662\u0667 \u0633\u0628\u062A\u0645\u0628\u0631 \u0661\u0669\u0669\u0667",en:"27 Sep 1997"},t:{ar:"\u0622\u062E\u0631 \u0625\u0634\u0627\u0631\u0629 \u0645\u0646 Pathfinder\u060C \u0648\u0623\u0646\u0627 \u0643\u0646\u062A \u0628\u0643\u0644\u0645 \u0627\u0644\u0623\u0631\u0636 \u0639\u0646 \u0637\u0631\u064A\u0642\u0647\u0627\u060C \u0641\u0633\u0643\u062A\u0651 \u0645\u0639\u0627\u0647\u0627",en:"Last signal from Pathfinder \u2014 I talked to Earth through it, so I fell silent too"}}]},spirit:{planned:90,actual:2208,unit:{ar:"\u064A\u0648\u0645 \u0645\u0631\u064A\u062E\u064A",en:"sols"},items:[{sol:1,date:{ar:"\u0664 \u064A\u0646\u0627\u064A\u0631 \u0662\u0660\u0660\u0664",en:"4 Jan 2004"},t:{ar:"\u0646\u0632\u0644\u062A \u0641\u064A \u0641\u0648\u0647\u0629 \u062C\u0648\u0633\u064A\u0641",en:"Landed in Gusev Crater"}},{sol:18,date:{ar:"\u0662\u0661 \u064A\u0646\u0627\u064A\u0631 \u0662\u0660\u0660\u0664",en:"21 Jan 2004"},t:{ar:"\u0630\u0627\u0643\u0631\u062A\u064A \u0627\u062A\u0645\u0644\u062A \u0648\u0641\u0636\u0644\u062A \u0623\u0639\u064A\u062F \u062A\u0634\u063A\u064A\u0644 \u0646\u0641\u0633\u064A\u2026 \u0643\u0646\u062A \u0647\u0645\u0648\u062A",en:"My memory filled up and I kept restarting\u2026 I almost died"},game:!0},{sol:32,date:{ar:"\u0666 \u0641\u0628\u0631\u0627\u064A\u0631 \u0662\u0660\u0660\u0664",en:"6 Feb 2004"},t:{ar:"\u0627\u0644\u0645\u0647\u0646\u062F\u0633\u064A\u0646 \u0635\u0644\u0651\u062D\u0648\u0646\u064A \u0648\u0631\u062C\u0639\u062A \u0623\u0634\u062A\u063A\u0644",en:"Engineers fixed me and I went back to work"}},{sol:63,date:{ar:"\u0668 \u0645\u0627\u0631\u0633 \u0662\u0660\u0660\u0664",en:"8 Mar 2004"},t:{ar:"\u0635\u0648\u0651\u0631\u062A \u0627\u0644\u0623\u0631\u0636 \u0645\u0646 \u0633\u0637\u062D \u0627\u0644\u0645\u0631\u064A\u062E",en:"I photographed Earth from the surface of Mars"},photo:!0},{sol:90,plan:!0,date:{ar:"\u064A\u0648\u0645 \u0669\u0660",en:"Sol 90"},t:{ar:"\u0643\u0627\u0646 \u0627\u0644\u0645\u0641\u0631\u0648\u0636 \u0645\u0647\u0645\u062A\u064A \u062A\u062E\u0644\u0635 \u0647\u0646\u0627",en:"My mission was planned to end here"}},{sol:760,date:{ar:"\u0662\u0660\u0660\u0666",en:"2006"},t:{ar:"\u0639\u062C\u0644\u0629 \u0645\u0646 \u0639\u062C\u0644\u0627\u062A\u064A \u0648\u0642\u0641\u062A\u060C \u0641\u0628\u0642\u064A\u062A \u0623\u0633\u0648\u0642 \u0628\u0627\u0644\u0639\u0643\u0633 \u0648\u0623\u0633\u062D\u0628\u0647\u0627",en:"One wheel stopped, so I drove backwards dragging it"}},{sol:1892,date:{ar:"\u0662\u0660\u0660\u0669",en:"2009"},t:{ar:"\u063A\u0631\u0632\u062A \u0641\u064A \u0631\u0645\u0644 \u0646\u0627\u0639\u0645 \u0641\u064A \u0645\u0643\u0627\u0646 \u0627\u0633\u0645\u0647 Troy",en:"I got stuck in soft sand at a place called Troy"}},{sol:2208,end:!0,date:{ar:"\u0662\u0662 \u0645\u0627\u0631\u0633 \u0662\u0660\u0661\u0660",en:"22 Mar 2010"},t:{ar:"\u0622\u062E\u0631 \u0631\u0633\u0627\u0644\u0629 \u0645\u0646\u064A \u0644\u0644\u0623\u0631\u0636\u060C \u0628\u0639\u062F \u0645\u0627 \u0645\u0634\u064A\u062A \u0667\u066B\u0667\u0663 \u0643\u0645",en:"My last message to Earth, after driving 7.73 km"}}]},opportunity:{planned:90,actual:5111,unit:{ar:"\u064A\u0648\u0645 \u0645\u0631\u064A\u062E\u064A",en:"sols"},items:[{sol:1,date:{ar:"\u0662\u0665 \u064A\u0646\u0627\u064A\u0631 \u0662\u0660\u0660\u0664",en:"25 Jan 2004"},t:{ar:"\u0646\u0632\u0644\u062A \u062C\u0648\u0647 \u0641\u0648\u0647\u0629 \u0635\u063A\u064A\u0631\u0629 \u0627\u0633\u0645\u0647\u0627 Eagle \u0641\u064A \u0633\u0647\u0644 Meridiani",en:"Landed inside a small crater called Eagle, in Meridiani Planum"}},{sol:90,plan:!0,date:{ar:"\u064A\u0648\u0645 \u0669\u0660",en:"Sol 90"},t:{ar:"\u0643\u0627\u0646 \u0627\u0644\u0645\u0641\u0631\u0648\u0636 \u0645\u0647\u0645\u062A\u064A \u062A\u062E\u0644\u0635 \u0647\u0646\u0627",en:"My mission was planned to end here"}},{sol:2681,date:{ar:"\u0669 \u0623\u063A\u0633\u0637\u0633 \u0662\u0660\u0661\u0661",en:"9 Aug 2011"},t:{ar:"\u0648\u0635\u0644\u062A \u0641\u0648\u0647\u0629 Endeavour \u0628\u0639\u062F \u0631\u062D\u0644\u0629 \u0663 \u0633\u0646\u064A\u0646 \u0648\u062D\u0648\u0627\u0644\u064A \u0662\u0661 \u0643\u0645",en:"Reached Endeavour Crater after a 3-year, ~21 km trip"}},{sol:3968,date:{ar:"\u0645\u0627\u0631\u0633 \u0662\u0660\u0661\u0665",en:"Mar 2015"},t:{ar:"\u0639\u062F\u0651\u064A\u062A \u0645\u0633\u0627\u0641\u0629 \u0645\u0627\u0631\u0627\u062B\u0648\u0646 \u0643\u0627\u0645\u0644 (\u0664\u0662\u066B\u0661\u0669\u0665 \u0643\u0645)",en:"Passed a full marathon distance (42.195 km)"}},{sol:5111,end:!0,date:{ar:"\u0661\u0660 \u064A\u0648\u0646\u064A\u0648 \u0662\u0660\u0661\u0668",en:"10 Jun 2018"},t:{ar:"\u0639\u0627\u0635\u0641\u0629 \u062A\u0631\u0627\u0628 \u063A\u0637\u0651\u062A \u0627\u0644\u0643\u0648\u0643\u0628 \u0643\u0644\u0647 \u0648\u0637\u0641\u062A \u0634\u0645\u0633\u064A\u2026 \u0622\u062E\u0631 \u0627\u062A\u0635\u0627\u0644",en:"A planet-wide dust storm blocked my sun\u2026 last contact"}}]}},or=[{s:{ar:"\u064A\u0648\u0645 \u0661\u0668 (\u0662\u0661 \u064A\u0646\u0627\u064A\u0631 \u0662\u0660\u0660\u0664): Spirit \u0628\u0637\u0651\u0644 \u064A\u0628\u0639\u062A \u0628\u064A\u0627\u0646\u0627\u062A \u0645\u0641\u0647\u0648\u0645\u0629 \u0648\u0628\u064A\u0639\u064A\u062F \u062A\u0634\u063A\u064A\u0644 \u0646\u0641\u0633\u0647 \u0643\u0644 \u0634\u0648\u064A\u0629. \u062A\u0639\u0645\u0644 \u0625\u064A\u0647 \u0627\u0644\u0623\u0648\u0644\u061F",en:"Sol 18 (21 Jan 2004): Spirit stopped sending sensible data and keeps rebooting. What do you do first?"},options:[{t:{ar:"\u0646\u0634\u063A\u0651\u0644\u0647 \u0645\u0646 \u063A\u064A\u0631 \u0645\u0627 \u064A\u0644\u0645\u0633 \u0630\u0627\u0643\u0631\u0629 \u0627\u0644\u0641\u0644\u0627\u0634 (\u0648\u0636\u0639 \xABCrippled\xBB)",en:"Boot it without touching its flash memory (\u201Ccrippled mode\u201D)"},ok:!0},{t:{ar:"\u0646\u062E\u0644\u064A\u0647 \u064A\u0633\u0648\u0642 \u0644\u0645\u0643\u0627\u0646 \u0641\u064A\u0647 \u0634\u0645\u0633 \u0623\u0643\u062A\u0631",en:"Drive it to a sunnier spot"},why:{ar:"\u0647\u0648 \u0645\u0634 \u0642\u0627\u062F\u0631 \u064A\u0641\u0647\u0645 \u0627\u0644\u0623\u0648\u0627\u0645\u0631 \u0628\u0634\u0643\u0644 \u0637\u0628\u064A\u0639\u064A\u060C \u0641\u0627\u0644\u0633\u0648\u0627\u0642\u0629 \u062E\u0637\u0631 \u0639\u0644\u064A\u0647 \u062F\u0644\u0648\u0642\u062A\u064A.",en:"It can\u2019t follow commands normally \u2014 driving now would be risky."}},{t:{ar:"\u0646\u0633\u062A\u0633\u0644\u0645 \u0648\u0646\u0642\u0641\u0644 \u0627\u0644\u0645\u0647\u0645\u0629",en:"Give up and end the mission"},why:{ar:"\u0644\u0623! \u0627\u0644\u0645\u0647\u0646\u062F\u0633\u064A\u0646 \u0645\u0627 \u0627\u0633\u062A\u0633\u0644\u0645\u0648\u0634\u2026 \u062C\u0631\u0651\u0628 \u062A\u0627\u0646\u064A.",en:"No way! The engineers didn\u2019t give up\u2026 try again."}}],done:{ar:"\u0635\u062D! \u0641\u064A \u064A\u0648\u0645 \u0662\u0661 \u0627\u0644\u0645\u0647\u0646\u062F\u0633\u064A\u0646 \u062F\u062E\u0651\u0644\u0648\u0647 \xAB\u0648\u0636\u0639 Crippled\xBB \u0648\u0631\u062C\u0639\u0648\u0627 \u064A\u062A\u062D\u0643\u0645\u0648\u0627 \u0641\u064A\u0647.",en:"Right! On sol 21 the engineers got it into crippled mode and regained control."}},{s:{ar:"Spirit \u0647\u062F\u064A. \u0627\u0643\u062A\u0634\u0641\u0646\u0627 \u0625\u0646 \u0630\u0627\u0643\u0631\u0629 \u0627\u0644\u0641\u0644\u0627\u0634 \u0645\u0644\u064A\u0627\u0646\u0629 \u0622\u0644\u0627\u0641 \u0627\u0644\u0645\u0644\u0641\u0627\u062A \u0627\u0644\u0642\u062F\u064A\u0645\u0629 \u0645\u0646 \u0627\u0644\u0631\u062D\u0644\u0629 \u0644\u0644\u0645\u0631\u064A\u062E. \u0627\u0644\u062E\u0637\u0648\u0629 \u0627\u0644\u062C\u0627\u064A\u0629\u061F",en:"Spirit is stable. Its flash memory is packed with thousands of old files from the trip to Mars. Next step?"},options:[{t:{ar:"\u0646\u0645\u0633\u062D \u0622\u0644\u0627\u0641 \u0627\u0644\u0645\u0644\u0641\u0627\u062A \u0627\u0644\u0644\u064A \u0645\u0634 \u0645\u062D\u062A\u0627\u062C\u064A\u0646\u0647\u0627",en:"Delete thousands of files we no longer need"},ok:!0},{t:{ar:"\u0646\u0628\u0639\u062A\u0644\u0647 \u0645\u0644\u0641\u0627\u062A \u0632\u064A\u0627\u062F\u0629",en:"Send it even more files"},why:{ar:"\u062F\u0647 \u0628\u0627\u0644\u0638\u0628\u0637 \u0627\u0644\u0644\u064A \u0639\u0645\u0644 \u0627\u0644\u0645\u0634\u0643\u0644\u0629!",en:"That\u2019s exactly what caused the problem!"}}],done:{ar:"\u0628\u0631\u0627\u0641\u0648! \u0627\u0644\u0645\u0647\u0646\u062F\u0633\u064A\u0646 \u0645\u0633\u062D\u0648\u0627 \u0622\u0644\u0627\u0641 \u0627\u0644\u0645\u0644\u0641\u0627\u062A \u0648Spirit \u0628\u0642\u0649 \u0645\u0633\u062A\u0642\u0631.",en:"Bravo! Engineers deleted thousands of files and Spirit became stable."}},{s:{ar:"\u0639\u0634\u0627\u0646 \u0646\u0628\u062F\u0623 \u0639\u0644\u0649 \u0646\u0636\u064A\u0641 \u0648\u0645\u0646\u0643\u0631\u0631\u0634 \u0627\u0644\u063A\u0644\u0637\u0629\u060C \u0646\u0639\u0645\u0644 \u0625\u064A\u0647 \u0641\u064A \u0627\u0644\u0630\u0627\u0643\u0631\u0629\u061F",en:"To start clean and avoid a repeat, what do we do with the memory?"},options:[{t:{ar:"\u0646\u0639\u0645\u0644 \xAB\u0641\u0648\u0631\u0645\u0627\u062A\xBB \u0644\u0644\u0630\u0627\u0643\u0631\u0629 \u0643\u0644\u0647\u0627",en:"Reformat the whole flash memory"},ok:!0},{t:{ar:"\u0646\u0633\u064A\u0628\u0647\u0627 \u0632\u064A \u0645\u0627 \u0647\u064A",en:"Leave it as it is"},why:{ar:"\u0645\u0644\u0641\u0627\u062A\u0647\u0627 \u0643\u0627\u0646 \u0645\u0645\u0643\u0646 \u062A\u0643\u0648\u0646 \u0628\u0627\u0638\u062A\u060C \u0648\u0627\u0644\u0623\u0645\u0627\u0646 \u0625\u0646\u0646\u0627 \u0646\u0628\u062F\u0623 \u0645\u0646 \u0627\u0644\u0635\u0641\u0631.",en:"Its files may be corrupted \u2014 the safe move is a clean start."}}],done:{ar:"\u062A\u0645\u0627\u0645! \u064A\u0648\u0645 \u0663\u0662 (\u0666 \u0641\u0628\u0631\u0627\u064A\u0631 \u0662\u0660\u0660\u0664) Spirit \u0631\u062C\u0639 \u0632\u064A \u0627\u0644\u0641\u0644\u2026 \u0648\u0639\u0627\u0634 \u0666 \u0633\u0646\u064A\u0646 \u0643\u0645\u0627\u0646!",en:"Done! On sol 32 (6 Feb 2004) Spirit was fully back\u2026 and worked for 6 more years!"}}],wd=[{s:{ar:"\xAB\u0628\u0637\u0627\u0631\u064A\u062A\u064A \u0636\u0639\u064A\u0641\u0629 \u0648\u0627\u0644\u062F\u0646\u064A\u0627 \u0628\u062A\u0636\u0644\u0645\xBB\u2026 \u062F\u064A \u0622\u062E\u0631 \u062C\u0645\u0644\u0629 Opportunity \u0642\u0627\u0644\u0647\u0627\u061F",en:"\u201CMy battery is low and it\u2019s getting dark\u201D \u2014 were these Opportunity\u2019s last words?"},answer:!1,why:{ar:"\u0625\u0634\u0627\u0639\u0629! Opportunity \u0643\u0627\u0646 \u0628\u064A\u0628\u0639\u062A \u0623\u0631\u0642\u0627\u0645 \u0645\u0634 \u0643\u0644\u0627\u0645: \u0627\u0644\u0628\u0637\u0627\u0631\u064A\u0629 \u0648\u0627\u0637\u064A\u0629 \u0648\u0627\u0644\u0633\u0645\u0627 \u0636\u0644\u0645\u0629 \u062C\u062F\u064B\u0627 \u0645\u0646 \u0639\u0627\u0635\u0641\u0629 \u062A\u0631\u0627\u0628. \u0635\u062D\u0641\u064A \u0627\u0633\u0645\u0647 Jacob Margolis \u0643\u062A\u0628 \u0627\u0644\u062C\u0645\u0644\u0629 \u062F\u064A \u0643\u062A\u0631\u062C\u0645\u0629 \u0634\u0627\u0639\u0631\u064A\u0629 \u0644\u0644\u0628\u064A\u0627\u0646\u0627\u062A\u060C \u0648\u0627\u0644\u0646\u0627\u0633 \u0627\u0641\u062A\u0643\u0631\u0648\u0647\u0627 \u0643\u0644\u0627\u0645 \u0627\u0644\u0631\u0648\u0641\u0631.",en:"Myth! Opportunity sent numbers, not words: low battery and a very dark sky from a dust storm. A journalist, Jacob Margolis, wrote that line as a poetic translation of the data \u2014 people mistook it for the rover\u2019s words."}},{s:{ar:"Opportunity \u0645\u0634\u064A \u0639\u0644\u0649 \u0627\u0644\u0645\u0631\u064A\u062E \u0645\u0633\u0627\u0641\u0629 \u0623\u0637\u0648\u0644 \u0645\u0646 \u0645\u0627\u0631\u0627\u062B\u0648\u0646 \u0643\u0627\u0645\u0644.",en:"Opportunity drove farther than a full marathon on Mars."},answer:!0,why:{ar:"\u062D\u0642\u064A\u0642\u0629! \u0639\u062F\u0651\u0649 \u0645\u0633\u0627\u0641\u0629 \u0627\u0644\u0645\u0627\u0631\u0627\u062B\u0648\u0646 \u0641\u064A \u0645\u0627\u0631\u0633 \u0662\u0660\u0661\u0665\u060C \u0648\u0641\u064A \u0627\u0644\u0622\u062E\u0631 \u0645\u0634\u064A \u0664\u0665\u066B\u0661\u0666 \u0643\u0645.",en:"True! It passed marathon distance in March 2015 and finished with 45.16 km."}},{s:{ar:"\u0628\u0639\u062F \u0645\u0627 Opportunity \u0633\u0643\u062A\u060C \u0646\u0627\u0633\u0627 \u0641\u0636\u0644\u062A \u062A\u0628\u0639\u062A\u0644\u0647 \u0623\u0648\u0627\u0645\u0631 \u0639\u0634\u0627\u0646 \u064A\u0635\u062D\u0649.",en:"After Opportunity went silent, NASA kept sending commands to wake it."},answer:!0,why:{ar:"\u062D\u0642\u064A\u0642\u0629! \u0628\u0639\u062A\u0648\u0627 \u0623\u0643\u062A\u0631 \u0645\u0646 \u0668\u0663\u0665 \u0623\u0645\u0631 \u0639\u0644\u0649 \u0645\u062F\u0627\u0631 \u0634\u0647\u0648\u0631\u060C \u0648\u0641\u064A \u0661\u0663 \u0641\u0628\u0631\u0627\u064A\u0631 \u0662\u0660\u0661\u0669 \u0623\u0639\u0644\u0646\u0648\u0627 \u0625\u0646 \u0627\u0644\u0645\u0647\u0645\u0629 \u062E\u0644\u0635\u062A.",en:"True! They sent more than 835 recovery commands over months, then declared the mission complete on 13 Feb 2019."}}],Pm={sojourner:[{k:"size",title:{ar:"\u0642\u062F \u0625\u064A\u0647 \u0623\u0646\u0627 \u0635\u063A\u064A\u0631\u0629\u061F",en:"How small am I?"},body:{ar:"\u0637\u0648\u0644\u064A \u062D\u0648\u0627\u0644\u064A \u0666\u0665 \u0633\u0645 \u0648\u0648\u0632\u0646\u064A \u062D\u0648\u0627\u0644\u064A \u0661\u0660\u066B\u0666 \u0643\u064A\u0644\u0648 \u0628\u0633\u060C \u0642\u062F \u0634\u0646\u0637\u0629 \u0633\u0641\u0631 \u0635\u063A\u064A\u0631\u0629. Spirit \u0648Opportunity \u0648\u0632\u0646 \u0627\u0644\u0648\u0627\u062D\u062F \u0641\u064A\u0647\u0645 \u062D\u0648\u0627\u0644\u064A \u0661\u0668\u0660 \u0643\u064A\u0644\u0648\u060C \u064A\u0639\u0646\u064A \u0623\u062A\u0642\u0644 \u0645\u0646\u064A \u0661\u0667 \u0645\u0631\u0629!",en:"I\u2019m about 65 cm long and weigh only about 10.6 kg \u2014 like a small suitcase. Spirit and Opportunity weigh about 180 kg each, 17 times more than me!"}},{k:"why",title:{ar:"\u0644\u064A\u0647 \u0633\u0643\u062A\u0651\u061F",en:"Why did I go silent?"},body:{ar:"\u0623\u0646\u0627 \u0645\u0627 \u0643\u0646\u062A\u0634 \u0628\u0643\u0644\u0645 \u0627\u0644\u0623\u0631\u0636 \u0645\u0628\u0627\u0634\u0631\u0629\u060C \u0643\u0646\u062A \u0628\u0643\u0644\u0645 \u0627\u0644\u0645\u062D\u0637\u0629 Pathfinder \u0648\u0647\u064A \u062A\u0648\u0635\u0651\u0644 \u0643\u0644\u0627\u0645\u064A. \u0644\u0645\u0627 Pathfinder \u0628\u0639\u062A\u062A \u0622\u062E\u0631 \u0625\u0634\u0627\u0631\u0629 \u064A\u0648\u0645 \u0662\u0667 \u0633\u0628\u062A\u0645\u0628\u0631 \u0661\u0669\u0669\u0667\u060C \u0641\u0636\u0644\u062A \u0623\u0646\u0627 \u0644\u0648\u062D\u062F\u064A \u0645\u0646 \u063A\u064A\u0631 \u0635\u0648\u062A.",en:"I didn\u2019t talk to Earth directly \u2014 the Pathfinder lander relayed my messages. When Pathfinder sent its last signal on 27 Sep 1997, I was left without a voice."}}],spirit:[{k:"photo",title:{ar:"\u0627\u0644\u0646\u0642\u0637\u0629 \u062F\u064A\u2026 \u0625\u062D\u0646\u0627",en:"That dot is us"},body:{ar:"\u064A\u0648\u0645 \u0668 \u0645\u0627\u0631\u0633 \u0662\u0660\u0660\u0664\u060C \u0642\u0628\u0644 \u0634\u0631\u0648\u0642 \u0627\u0644\u0634\u0645\u0633 \u0628\u0633\u0627\u0639\u0629\u060C Spirit \u0635\u0648\u0651\u0631 \u0627\u0644\u0646\u0642\u0637\u0629 \u0627\u0644\u0645\u0646\u0648\u0631\u0629 \u062F\u064A. \u062F\u064A \u0627\u0644\u0623\u0631\u0636! \u0623\u0648\u0644 \u0635\u0648\u0631\u0629 \u0644\u0644\u0623\u0631\u0636 \u0627\u062A\u0627\u062E\u062F\u062A \u0645\u0646 \u0633\u0637\u062D \u0643\u0648\u0643\u0628 \u0623\u0628\u0639\u062F \u0645\u0646 \u0627\u0644\u0642\u0645\u0631. \u0643\u0644 \u0627\u0644\u0646\u0627\u0633 \u0627\u0644\u0644\u064A \u062A\u0639\u0631\u0641\u0647\u0645 \u0645\u0648\u062C\u0648\u062F\u064A\u0646 \u062C\u0648\u0647 \u0627\u0644\u0646\u0642\u0637\u0629 \u062F\u064A.",en:"On 8 March 2004, one hour before sunrise, Spirit photographed this bright dot. That\u2019s Earth! The first image of Earth ever taken from the surface of a planet beyond the Moon. Everyone you know is inside that dot."},img:"assets/PIA05547.jpg",w:1194,h:1007,credit:"NASA/JPL/Cornell/Texas A&M \xB7 PIA05547"}],opportunity:[]},Qc={rovers:["sojourner","spirit","opportunity"],names:["Sojourner","Spirit","Opportunity"],rows:[{k:"cLanded",v:[{ar:"\u0664 \u064A\u0648\u0644\u064A\u0648 \u0661\u0669\u0669\u0667",en:"4 Jul 1997"},{ar:"\u0664 \u064A\u0646\u0627\u064A\u0631 \u0662\u0660\u0660\u0664",en:"4 Jan 2004"},{ar:"\u0662\u0665 \u064A\u0646\u0627\u064A\u0631 \u0662\u0660\u0660\u0664",en:"25 Jan 2004"}]},{k:"cSite",v:[{ar:"Ares Vallis",en:"Ares Vallis"},{ar:"\u0641\u0648\u0647\u0629 Gusev",en:"Gusev Crater"},{ar:"Meridiani Planum",en:"Meridiani Planum"}]},{k:"cLength",v:[{ar:"\u0666\u0665 \u0633\u0645",en:"65 cm"},{ar:"\u0661\u066B\u0666 \u0645\u062A\u0631",en:"1.6 m"},{ar:"\u0661\u066B\u0666 \u0645\u062A\u0631",en:"1.6 m"}]},{k:"cMass",v:[{ar:"\u062D\u0648\u0627\u0644\u064A \u0661\u0660\u066B\u0666 \u0643\u064A\u0644\u0648",en:"~10.6 kg"},{ar:"\u062D\u0648\u0627\u0644\u064A \u0661\u0668\u0660 \u0643\u064A\u0644\u0648",en:"~180 kg"},{ar:"\u062D\u0648\u0627\u0644\u064A \u0661\u0668\u0660 \u0643\u064A\u0644\u0648",en:"~180 kg"}]},{k:"cPlanned",v:[{ar:"\u0667 \u0623\u064A\u0627\u0645",en:"7 sols"},{ar:"\u0669\u0660 \u064A\u0648\u0645",en:"90 sols"},{ar:"\u0669\u0660 \u064A\u0648\u0645",en:"90 sols"}]},{k:"cWorked",v:[{ar:"\u0668\u0663 \u064A\u0648\u0645",en:"83 sols"},{ar:"\u0662\u066C\u0662\u0660\u0668 \u064A\u0648\u0645",en:"2,208 sols"},{ar:"\u0665\u066C\u0661\u0661\u0661 \u064A\u0648\u0645",en:"5,111 sols"}]},{k:"cTimes",v:[{ar:"\u062D\u0648\u0627\u0644\u064A \u0661\u0662 \u0645\u0631\u0629",en:"~12\xD7"},{ar:"\u062D\u0648\u0627\u0644\u064A \u0662\u0664 \u0645\u0631\u0629",en:"~24\xD7"},{ar:"\u062D\u0648\u0627\u0644\u064A \u0665\u0666 \u0645\u0631\u0629",en:"~56\xD7"}]},{k:"cDistance",v:[{ar:"\u062D\u0648\u0627\u0644\u064A \u0661\u0660\u0660 \u0645\u062A\u0631",en:"~100 m"},{ar:"\u0667\u066B\u0667\u0663 \u0643\u0645",en:"7.73 km"},{ar:"\u0664\u0665\u066B\u0661\u0666 \u0643\u0645",en:"45.16 km"}]},{k:"cPower",v:[{ar:"\u0623\u0644\u0648\u0627\u062D \u0634\u0645\u0633\u064A\u0629",en:"Solar panels"},{ar:"\u0623\u0644\u0648\u0627\u062D \u0634\u0645\u0633\u064A\u0629",en:"Solar panels"},{ar:"\u0623\u0644\u0648\u0627\u062D \u0634\u0645\u0633\u064A\u0629",en:"Solar panels"}]},{k:"cLanding",v:[{ar:"\u0623\u0643\u064A\u0627\u0633 \u0647\u0648\u0627",en:"Airbags"},{ar:"\u0623\u0643\u064A\u0627\u0633 \u0647\u0648\u0627",en:"Airbags"},{ar:"\u0623\u0643\u064A\u0627\u0633 \u0647\u0648\u0627",en:"Airbags"}]}]};var Im=[["NASA \u2014 Mars Exploration Rover: Spirit","https://science.nasa.gov/mission/mer-spirit/"],["NASA \u2014 Mars Exploration Rover: Opportunity","https://science.nasa.gov/mission/mer-opportunity/"],["NASA \u2014 Mars Pathfinder / Sojourner","https://science.nasa.gov/mission/mars-pathfinder/"],["JPL \u2014 NASA\u2019s Spirit Rover Completes Mission on Mars","https://www.jpl.nasa.gov/news/nasas-spirit-rover-completes-mission-on-mars"],["NASA Photojournal PIA05547 \u2014 You are here: Earth as seen from Mars","https://science.nasa.gov/photojournal/you-are-here-earth-as-seen-from-mars/"],["Spaceflight Now \u2014 Thousands of files deleted on Spirit to fix computer trouble (Feb 2004)","https://spaceflightnow.com/mars/mera/040201spirit.html"],["NASA GISS \u2014 Mars24 Sunclock algorithm (Allison & McEwen 2000)","https://www.giss.nasa.gov/tools/mars24/help/algorithm.html"],["NASA 3D Resources \u2014 Mars Exploration Rover model","https://science.nasa.gov/3d-resources/"],["Snopes \u2014 Opportunity\u2019s \u201Cfinal words\u201D fact check","https://www.snopes.com/fact-check/opportunity-rovers-final-words/"],["JPL \u2014 20 Years After Landing: How NASA\u2019s Twin Rovers Changed Mars Science (about 30 bounces)","https://www.jpl.nasa.gov/news/20-years-after-landing-how-nasas-twin-rovers-changed-mars-science/"],["JPL \u2014 Mars Exploration Rover Spirit Mission Status, 4 Jan 2004 (bounced and rolled after impact)","https://www.jpl.nasa.gov/news/mars-exploration-rover-spirit-mission-status-2/"],["NASA \u2014 25 Years Ago: Mars Pathfinder launches (Sojourner drove about 100 m)","https://www.nasa.gov/?p=445143"],["NASA podcast \u201COn a Mission\u201D: Before you can drive, first you have to fly (airbag landings)","https://www.nasa.gov/podcasts/on-a-mission/before-you-can-drive-first-you-have-to-fly-s4e9/"],["Spaceflight Now \u2014 Giant airbags will give rovers\u2019 landings a bounce (entry 5.4 km/s, parachute, 20 m bridle, airbags 8 s before touchdown)","https://spaceflightnow.com/mars/mera/031231landing.html"],["Windows to the Universe (UCAR) \u2014 MER mission events timeline (launch dates, parachute, retro-rockets)","https://windows2universe.org/space_missions/mars/mars_exploration_rover/mission_events.html&edu=high"],["NASA Earth Observatory \u2014 Blue Marble: Next Generation, Reto St\xF6ckli (Earth in the expedition)","https://science.nasa.gov/earth/earth-observatory/blue-marble-next-generation/"],["Solar System Scope \u2014 Mars & Milky Way textures (CC BY 4.0)","https://www.solarsystemscope.com/textures/"]];var us=i=>document.querySelector(i),Yn=i=>String(i).replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]),Ro=(i,e)=>e==="ar"?Number(i).toLocaleString("ar-EG"):Number(i).toLocaleString("en-US");function eu(i){i.hidden=!1,i.offsetWidth,i.classList.add("open")}function tu(i,e){i.classList.remove("open"),setTimeout(()=>{i.classList.contains("open")||(i.hidden=!0)},e)}function Lm({getLang:i,onBadge:e,audio:t,onClose:n}){let s=us("#explore"),r=us("#explore-body"),a=us("#explore-title"),o=us("#game"),l=us("#game-body"),c=us("#about"),u=us("#about-body"),h=us("#compare"),d=us("#compare-body"),f=null,_=null;function y(N,B){let R=Cm[N],F=R.actual/R.planned,W=Math.floor(F),le=Math.max(1.2,R.planned/R.actual*100),ie=R.items.map(Le=>`
      <li class="${Le.plan?"plan":""} ${Le.end?"end":""}">
        <span class="d">${Yn(Le.date[B])}</span>
        <span class="t">${Yn(Le.t[B])}</span>
        ${Le.game?`<button type="button" class="mini" data-act="game">${Ee("playGame",B)}</button>`:""}
        ${Le.photo?`<button type="button" class="mini" data-act="photo">${Ee("seePhoto",B)}</button>`:""}
      </li>`).join("");return`
      <section class="ex-sec">
        <h3>${Ee("myLife",B)}</h3>
        <div class="life" role="img" aria-label="${Yn(Ee("lifeAria",B).replace("{a}",Ro(R.actual,B)).replace("{p}",Ro(R.planned,B)))}">
          <div class="life-track"><div class="life-fill"></div><div class="life-plan" style="inset-inline-start:${le}%"><i></i><span>${Ee("plannedStop",B)}</span></div></div>
          <div class="life-legend"><span>${Ee("planned",B)}: <b>${Ro(R.planned,B)}</b> ${R.unit[B]}</span><span>${Ee("actual",B)}: <b>${Ro(R.actual,B)}</b> ${R.unit[B]}</span></div>
          <p class="life-x">${Ee("timesLonger",B).replace("{n}",Ro(W,B))}</p>
        </div>
        <ol class="tl">${ie}</ol>
      </section>`}function g(N,B){return(Pm[N]||[]).map(R=>`
      <section class="ex-sec card" id="card-${R.k}">
        <h3>${Yn(R.title[B])}</h3>
        ${R.img?`<figure><img src="${R.img}" width="${R.w}" height="${R.h}" alt="${Yn(Ee("photoAlt",B))}" loading="lazy" decoding="async"><figcaption>${Yn(R.credit)}</figcaption></figure>`:""}
        <p>${Yn(R.body[B])}</p>
      </section>`).join("")}function m(N){return`<section class="ex-sec quiz"><h3>${Ee("mythOrFact",N)}</h3>${wd.map((B,R)=>`
      <div class="q" data-q="${R}">
        <p class="qs">${Yn(B.s[N])}</p>
        <div class="qa"><button type="button" data-ans="1">${Ee("fact",N)}</button><button type="button" data-ans="0">${Ee("myth",N)}</button></div>
        <p class="qw" aria-live="polite"></p>
      </div>`).join("")}</section>`}function M(){if(!f)return;let N=i();a.textContent=f.name,r.innerHTML=y(f.id,N)+g(f.id,N)+(f.id==="opportunity"?m(N):"")+(f.id==="spirit"?`<section class="ex-sec"><h3>${Ee("gameTitle",N)}</h3><p>${Ee("gameIntro",N)}</p><button type="button" class="primary" data-act="game">${Ee("playGame",N)}</button></section>`:"")+`<section class="ex-sec"><h3>${Ee("compareTitle",N)}</h3><p>${Ee("compareIntro",N)}</p><button type="button" class="primary" data-act="compare">${Ee("compareBtn",N)}</button></section>`,requestAnimationFrame(()=>s.querySelector(".life-fill")?.classList.add("go"))}function A(N){f={id:N.id,name:N.data.name},_=document.activeElement,M(),eu(s),r.scrollTop=0,s.querySelector(".ex-close").focus({preventScroll:!0})}function v(){s.hidden||(tu(s,220),_?.focus?.({preventScroll:!0}),n?.())}r.addEventListener("click",N=>{let B=N.target.closest("button");if(B&&(B.dataset.act==="game"&&C(),B.dataset.act==="compare"&&L(),B.dataset.act==="photo"&&document.getElementById("card-photo")?.scrollIntoView({behavior:"smooth",block:"start"}),B.dataset.ans!=null)){let R=B.closest(".q"),F=wd[+R.dataset.q],W=i(),le=B.dataset.ans==="1"===F.answer;R.querySelectorAll("button").forEach(Le=>{Le.disabled=!0}),B.classList.add(le?"right":"wrong");let ie=R.querySelector(".qw");ie.textContent=`${le?Ee("correct",W):Ee("notQuite",W)} ${F.why[W]}`,t.beep(le?2:0)}}),s.querySelector(".ex-close").addEventListener("click",v);let b=0;function S(){let N=i();if(b>=or.length){l.innerHTML=`<div class="g-done"><div class="badge" aria-hidden="true">\u2605</div><h3>${Ee("savedSpirit",N)}</h3><p>${Yn(or[or.length-1].done[N])}</p><button type="button" class="primary" data-act="close">${Ee("back",N)}</button></div>`,e?.("sol18");return}let B=or[b];l.innerHTML=`
      <div class="g-steps" aria-hidden="true">${or.map((R,F)=>`<i class="${F<b?"done":F===b?"now":""}"></i>`).join("")}</div>
      <p class="g-s">${Yn(B.s[N])}</p>
      <div class="g-opts">${B.options.map((R,F)=>`<button type="button" data-o="${F}">${Yn(R.t[N])}</button>`).join("")}</div>
      <p class="g-fb" aria-live="polite"></p>`}function C(){b=0,S(),eu(o),o.querySelector(".g-close").focus({preventScroll:!0})}function p(){tu(o,200),s.querySelector('[data-act="game"]')?.focus({preventScroll:!0})}l.addEventListener("click",N=>{let B=N.target.closest("button");if(!B)return;if(B.dataset.act==="close"){p();return}if(B.dataset.o==null)return;let R=i(),F=or[b],W=F.options[+B.dataset.o],le=l.querySelector(".g-fb");W.ok?(B.classList.add("right"),l.querySelectorAll(".g-opts button").forEach(ie=>{ie.disabled=!0}),le.textContent=F.done[R],t.beep(2),setTimeout(()=>{b++,S()},2300)):(B.classList.add("wrong"),B.disabled=!0,le.textContent=W.why[R],t.beep(0))}),o.querySelector(".g-close").addEventListener("click",p);function E(){let N=i(),B=f?Qc.rovers.indexOf(f.id):-1;d.innerHTML=`<div class="cmp-wrap"><table class="cmp"><caption class="sr-only">${Ee("compareTitle",N)}</caption>
      <thead><tr><td></td>${Qc.names.map((R,F)=>`<th scope="col" class="${F===B?"me":""}" translate="no">${R}</th>`).join("")}</tr></thead>
      <tbody>${Qc.rows.map(R=>`<tr><th scope="row">${Ee(R.k,N)}</th>${R.v.map((F,W)=>`<td class="${W===B?"me":""}">${Yn(F[N])}</td>`).join("")}</tr>`).join("")}</tbody></table></div>
      <p class="small">${Ee("compareNote",N)}</p>`}function L(){E(),eu(h),h.querySelector(".cmp-close").focus({preventScroll:!0})}function z(){tu(h,200),s.querySelector('[data-act="compare"]')?.focus({preventScroll:!0})}h.querySelector(".cmp-close").addEventListener("click",z),h.addEventListener("click",N=>{N.target===h&&z()});let O="project";function G(){let N=i(),B=["project","teacher","sources","ai"],R={project:`<p>${Ee("aboutP1",N)}</p><p>${Ee("aboutP2",N)}</p><ul>${["aboutL1","aboutL5","aboutL2","aboutL3","aboutL4"].map(F=>`<li>${Ee(F,N)}</li>`).join("")}</ul><p class="team">${Ee("teamLine",N)}</p>`,teacher:`<p>${Ee("teachP1",N)}</p><ol>${["teach1","teach2","teach3","teach4"].map(F=>`<li>${Ee(F,N)}</li>`).join("")}</ol><p>${Ee("teachQ",N)}</p><ul>${["teachQ1","teachQ2","teachQ3"].map(F=>`<li>${Ee(F,N)}</li>`).join("")}</ul>`,sources:`<ul class="src">${Im.map(([F,W])=>`<li><a href="${W}" target="_blank" rel="noopener">${Yn(F)}</a></li>`).join("")}</ul><p class="small">${Ee("factNote",N)}</p>`,ai:`<p>${Ee("aiP1",N)}</p><ul>${["ai1","ai2","ai3","ai4"].map(F=>`<li>${Ee(F,N)}</li>`).join("")}</ul>`};u.innerHTML=`<div class="tabs" role="tablist">${B.map(F=>`<button type="button" role="tab" id="tab-${F}" aria-controls="tabpanel" aria-selected="${F===O}" tabindex="${F===O?0:-1}" data-tab="${F}">${Ee("tab_"+F,N)}</button>`).join("")}</div><div class="tabpanel" id="tabpanel" role="tabpanel" aria-labelledby="tab-${O}" tabindex="0">${R[O]}</div>`}let w=null;function D(){w=document.activeElement,G(),eu(c),c.querySelector(".ab-close").focus({preventScroll:!0})}function H(){tu(c,200),w?.focus?.({preventScroll:!0})}return u.addEventListener("click",N=>{let B=N.target.closest("[data-tab]");B&&(O=B.dataset.tab,G(),u.querySelector(`[data-tab="${O}"]`)?.focus({preventScroll:!0}))}),u.addEventListener("keydown",N=>{if(!N.target.closest("[role=tab]")||N.key!=="ArrowLeft"&&N.key!=="ArrowRight")return;let B=["project","teacher","sources","ai"],R=document.documentElement.dir==="rtl",F=N.key==="ArrowRight"!==R?1:-1;O=B[(B.indexOf(O)+F+B.length)%B.length],G(),u.querySelector(`[data-tab="${O}"]`)?.focus(),N.preventDefault()}),c.querySelector(".ab-close").addEventListener("click",H),c.addEventListener("click",N=>{N.target===c&&H()}),o.addEventListener("click",N=>{N.target===o&&p()}),window.addEventListener("keydown",N=>{N.key==="Escape"&&(o.hidden?h.hidden?c.hidden?s.hidden||v():H():z():p())}),{open:A,close:v,openAbout:D,closeAbout:H,refresh(){s.hidden||M(),c.hidden||G(),o.hidden||S(),h.hidden||E()},get isOpen(){return!s.hidden||!o.hidden||!c.hidden||!h.hidden}}}var zi='"Chakra Petch", "Chakra", "Segoe UI", sans-serif',Co='"IBM Plex Sans Arabic", "Plex Arabic", "Segoe UI", Tahoma, sans-serif',FM='"Lalezar", "IBM Plex Sans Arabic", "Plex Arabic", Tahoma, sans-serif';function Nm(i,e,t,n,s,r){i.save(),i.translate(e,t),i.rotate(s),i.scale(n,n),i.fillStyle=r,i.beginPath(),i.ellipse(0,-18,15,24,0,0,Math.PI*2),i.fill(),i.beginPath(),i.ellipse(0,26,12,14,0,0,Math.PI*2),i.fill(),i.globalCompositeOperation="destination-out",i.lineWidth=2.4;for(let a=-30;a<=-6;a+=7)i.beginPath(),i.moveTo(-12,a),i.lineTo(12,a),i.stroke();for(let a=20;a<=34;a+=6)i.beginPath(),i.moveTo(-9,a),i.lineTo(9,a),i.stroke();i.restore()}function Dm(i,e,t=new Date,n=[]){let a=document.createElement("canvas");a.width=1600,a.height=1100;let o=a.getContext("2d"),l=e==="ar";o.direction=l?"rtl":"ltr";let c=o.createLinearGradient(0,0,0,1100);c.addColorStop(0,"#0b0707"),c.addColorStop(1,"#1a0d09"),o.fillStyle=c,o.fillRect(0,0,1600,1100);for(let S=0;S<260;S++)o.fillStyle=`rgba(255,240,225,${Math.random()*.7})`,o.fillRect(Math.random()*1600,Math.random()*1100*.75,Math.random()*2+.5,Math.random()*2+.5);let u=o.createRadialGradient(1600/2,2600,1500,1600/2,2600,1820);u.addColorStop(0,"#b4552f"),u.addColorStop(.82,"#7a3018"),u.addColorStop(.9,"rgba(255,170,120,0.55)"),u.addColorStop(1,"rgba(255,170,120,0)"),o.fillStyle=u,o.beginPath(),o.arc(1600/2,2600,1820,0,Math.PI*2),o.fill(),o.strokeStyle="rgba(255,214,180,0.55)",o.lineWidth=3,o.strokeRect(46,46,1508,1008),o.strokeStyle="rgba(255,214,180,0.18)",o.lineWidth=1.5,o.strokeRect(62,62,1476,976),o.textAlign="center",o.fillStyle="#f6eee6",o.font=`600 30px ${zi}`,o.fillStyle="rgba(246,238,230,0.7)",o.fillText("NASA SPACE APPS 2026 \xB7 KAFR EL SHEIKH \xB7 TEAM 3M",1600/2,140),o.font=l?`68px ${FM}`:`600 70px ${zi}`,o.fillStyle="#ffe2c8",o.fillText(Ee("certTitle",e),1600/2,250);let h=112;for(o.font=`600 ${h}px ${l?Co:zi}`;o.measureText(i).width>1240&&h>50;)h-=6,o.font=`600 ${h}px ${l?Co:zi}`;let d=o.createLinearGradient(0,330,0,450);d.addColorStop(0,"#ffffff"),d.addColorStop(1,"#ffc49a"),o.fillStyle=d,o.shadowColor="rgba(255,150,90,0.45)",o.shadowBlur=30,o.fillText(i,1600/2,430),o.shadowBlur=0,o.strokeStyle="rgba(255,214,180,0.45)",o.lineWidth=2,o.beginPath(),o.moveTo(1600/2-360,470),o.lineTo(1600/2+360,470),o.stroke(),o.font=`400 36px ${l?Co:'"IBM Plex Sans Arabic", "Plex Arabic", "Segoe UI", sans-serif'}`,o.fillStyle="rgba(246,238,230,0.9)";let f=Ee("certLine",e),_=f.split(" "),y=1180,g=Math.max(1,Math.ceil(o.measureText(f).width/y)),m=o.measureText(f).width/g+40,M=[],A="";for(let S of _){let C=A?A+" "+S:S;A&&o.measureText(C).width>m&&M.length<g-1?(M.push(A),A=S):A=C}A&&M.push(A),M.forEach((S,C)=>o.fillText(S,1600/2,545+C*56));let v=715;[["Sojourner",1997],["Spirit",2004],["Opportunity",2004]].forEach(([S,C],p)=>{let E=380+p*230;Nm(o,E,v,1.15,-.25+p*.12,"rgba(255,214,180,0.75)"),o.font=`600 24px ${zi}`,o.fillStyle="rgba(246,238,230,0.8)",o.fillText(S,E,v+80),o.font=`500 20px ${zi}`,o.fillStyle="rgba(246,238,230,0.5)",o.fillText(String(C),E,v+108)}),o.save(),o.shadowColor="#7fe6ff",o.shadowBlur=40,Nm(o,1600/2+270,v-10,1.45,.2,"#bff4ff"),o.restore(),o.font=`600 24px ${zi}`,o.fillStyle="#bff4ff",o.fillText(l?"\u0623\u062B\u0631\u0643":"YOU",1600/2+270,v+80),n.includes("sol18")&&(o.font=`600 24px ${l?Co:zi}`,o.fillStyle="#ffb36b",o.fillText(l?"\u2605 \u0623\u0646\u0642\u0630 Spirit \u0641\u064A \u064A\u0648\u0645 \u0661\u0668":"\u2605 SAVED SPIRIT ON SOL 18",1600/2,v+172));let b=t.toLocaleDateString(l?"ar-EG":"en-GB",{year:"numeric",month:"long",day:"numeric"});return o.font=`400 26px ${l?Co:zi}`,o.fillStyle="rgba(246,238,230,0.75)",o.fillText(`${b}  \xB7  THE LAST FOOTPRINT`,1600/2,968),o.font=`600 30px ${zi}`,o.fillStyle="#ffb36b",o.fillText(l?"\u0627\u0644\u0623\u062B\u0631 \u0627\u0644\u062C\u0627\u064A\u2026 \u0628\u062A\u0627\u0639\u0643":"THE NEXT FOOTPRINT IS YOURS",1600/2,1014),a}var Vi=(i,e,t)=>{let n=Math.min(1,Math.max(0,(t-i)/(e-i)));return n*n*(3-2*n)},OM=i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2,Fm=[];function Um(i,e=!0){let t=new Image,n=new qt(t);return e&&(n.colorSpace=At),t.onload=()=>{n.needsUpdate=!0},i&&(t.src="data:image/jpeg;base64,"+i,Fm.push(t.decode().then(()=>{n.needsUpdate=!0}).catch(()=>{}))),n}function BM(){let i=document.createElement("canvas");i.width=i.height=128;let e=i.getContext("2d"),t=e.createRadialGradient(64,64,0,64,64,64);return t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.25,"rgba(255,220,170,0.7)"),t.addColorStop(1,"rgba(255,140,60,0)"),e.fillStyle=t,e.fillRect(0,0,128,128),new ln(i)}function Ad(i){let e=new $e,t=new qe({color:"#e9e6e0",roughness:.45,metalness:.25,envMap:i||null,envMapIntensity:.6}),n=new qe({color:"#9a6440",roughness:.8,metalness:.05,emissive:new oe("#ff6a1a"),emissiveIntensity:0}),s=new qe({color:"#2b2f36",roughness:.6,metalness:.5}),r=new ae(new qr(1,.42,48,1,!0),n);r.position.y=.21,r.material.side=Ht,e.add(r);let a=new ae(new es(1,48),n);a.rotation.x=Math.PI/2,e.add(a);let o=new ae(new bt(.98,.42,.95,48,1,!0),t);o.position.y=-.475,o.material.side=Ht,e.add(o);let l=new ae(new bt(.42,.42,.06,32),t);l.position.y=-.98,e.add(l);let c=new ae(new Gn(.99,.03,8,64),s);return c.rotation.x=Math.PI/2,e.add(c),{group:e,shield:r,shieldMat:n,white:t,dark:s}}function Om(i,{marsMap:e,quality:t,env:n,reduced:s}){let r=new ti,a=new Vt(40,innerWidth/innerHeight,.002,400);r.add(a);let o=new I(1,.35,.55).normalize(),l=t.mobile?1400:2400,c=new Float32Array(l*3);for(let P=0;P<l;P++){let x=Math.random()*2-1,k=Math.random()*Math.PI*2,V=Math.sqrt(1-x*x),Y=150;c[P*3]=Math.cos(k)*V*Y,c[P*3+1]=x*Y,c[P*3+2]=Math.sin(k)*V*Y}let u=new Qe;u.setAttribute("position",new ct(c,3));let h=new Tn(u,new ii({color:"#cfd8ff",size:1.4*i.getPixelRatio(),sizeAttenuation:!1,transparent:!0,opacity:.85,depthWrite:!1}));r.add(h);let d=Um(window.EARTH_DAY_B64),f=Um(window.EARTH_NIGHT_B64);d.anisotropy=Math.min(8,i.capabilities.getMaxAnisotropy());let _=new ft({uniforms:{uDay:{value:d},uNight:{value:f},uSun:{value:o}},vertexShader:`varying vec2 vUv; varying vec3 vN; varying vec3 vW;
      void main(){ vUv = uv; vN = normalize(mat3(modelMatrix) * normal); vec4 w = modelMatrix * vec4(position,1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }`,fragmentShader:`uniform sampler2D uDay, uNight; uniform vec3 uSun; varying vec2 vUv; varying vec3 vN; varying vec3 vW;
      void main(){
        float ndl = dot(normalize(vN), uSun);
        vec3 day = texture2D(uDay, vUv).rgb; vec3 night = texture2D(uNight, vUv).rgb;
        vec3 c = day * (smoothstep(-0.12, 0.35, ndl) * 1.15 + 0.035);
        c += night * night * 2.2 * smoothstep(0.1, -0.25, ndl);
        vec3 V = normalize(cameraPosition - vW); float rim = pow(1.0 - max(dot(normalize(vN), V), 0.0), 3.0);
        c += vec3(0.25, 0.5, 1.0) * rim * (0.25 + 0.9 * smoothstep(-0.3, 0.4, ndl));
        gl_FragColor = vec4(c, 1.0);
        #include <colorspace_fragment>
      }`}),y=Tt.degToRad(28.5),g=-80.6,m=new $e,M=new $e,A=new ae(new Ut(1,t.mobile?96:128,t.mobile?48:64),_);M.add(A),m.add(M),r.add(m);{let P=Tt.degToRad(g+180),x=-Math.cos(P)*Math.cos(y),k=Math.sin(P)*Math.cos(y);M.rotation.y=-Math.atan2(x,k),m.rotation.x=y}let v=new ae(new Ut(1.025,64,32),new ft({transparent:!0,depthWrite:!1,side:kt,blending:Et,uniforms:{uSun:{value:o},uC:{value:new oe(.35,.6,1)}},vertexShader:"varying vec3 vN; varying vec3 vW; void main(){ vN = normalize(mat3(modelMatrix) * normal); vec4 w = modelMatrix * vec4(position,1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }",fragmentShader:`uniform vec3 uSun; uniform vec3 uC; varying vec3 vN; varying vec3 vW;
      void main(){ vec3 V = normalize(cameraPosition - vW); float rim = pow(1.0 - abs(dot(-vN, V)), 2.6);
        float day = 0.15 + 0.85 * smoothstep(-0.3, 0.5, dot(normalize(vN), uSun)); gl_FragColor = vec4(uC * rim * day * 1.4, rim * day); }`}));r.add(v);let b=.53,S=new I(26,5,62),C=new ae(new Ut(b,96,48),new qe({map:e,roughness:1,metalness:0}));C.position.copy(S),C.rotation.y=2.6,r.add(C);let p=v.clone();p.material=v.material.clone(),p.material.uniforms.uC.value=new oe(.95,.55,.35);let E=new I(-.55,.5,-.67).normalize();p.material.uniforms.uSun={value:E},p.scale.setScalar(b),p.position.copy(S),r.add(p);let L=new si("#fff3e6",3);L.position.copy(E).multiplyScalar(50),r.add(L),r.add(new Zs("#8a90b0",.85));let z=BM(),O=new mn(new cn({map:z,color:new oe(3,2.6,2.1),blending:Et,depthWrite:!1,transparent:!0}));O.position.copy(o).multiplyScalar(140),O.scale.setScalar(16),r.add(O);let G=Ad(n),w=new $e;w.add(G.group);let D=new $e;{let P=new qe({color:"#1d3f8a",roughness:.3,metalness:.6,emissive:"#0a1a40",emissiveIntensity:.4}),x=new ae(new bt(1.32,1.32,.16,48),[G.white,G.dark,P]);x.position.y=-1.1,D.add(x);let k=new ae(new bt(.03,.03,.5,8),G.dark);k.position.y=-1.42,D.add(k);let V=new ae(new qr(.22,.12,24,1,!0),G.white);V.position.y=-1.66,V.material.side=Ht,D.add(V)}w.add(D),w.scale.setScalar(.012),r.add(w);let H=new mn(new cn({map:z,color:new oe(4,2.6,1.2),blending:Et,depthWrite:!1,transparent:!0,opacity:0}));r.add(H);let N=new ae(new Ut(1,32,16,0,Math.PI*2,0,Math.PI/2),new ft({transparent:!0,depthWrite:!1,blending:Et,side:Ht,uniforms:{uK:{value:0},uT:{value:0}},vertexShader:"varying vec3 vP; void main(){ vP = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`uniform float uK, uT; varying vec3 vP;
      void main(){ float h = vP.y; float flick = 0.75 + 0.25 * sin(uT * 40.0 + vP.x * 20.0) * sin(uT * 31.0 + vP.z * 17.0);
        float a = smoothstep(0.0, 1.0, h) * uK * flick; vec3 c = mix(vec3(1.0,0.35,0.08), vec3(1.0,0.85,0.55), h) * 3.0;
        gl_FragColor = vec4(c * a, a); }`}));N.scale.set(1.25,.9,1.25),N.position.y=.32,G.group.add(N);let B=80,R=new Float32Array(B*3),F=new Qe;F.setAttribute("position",new ct(R,3));let W=new Vn(F,new ni({color:new oe(2.4,1.6,.9),transparent:!0,opacity:.9,blending:Et,depthWrite:!1}));W.frustumCulled=!1,W.visible=!1,r.add(W);let le=0,ie=new I(0,0,1),Le=new I().subVectors(ie,S).normalize(),ke=S.clone().addScaledVector(Le,b*1.9).add(new I(0,b*.35,0)),Ce=new I(2.2,1.6,8),Q=new I(30,12,40),ee=new Ya(ie.clone().multiplyScalar(1.004),Ce,Q,ke),he=S.clone().add(new I(.05,b*.55,-0)).addScaledVector(Le,b*.9),Z={phase:"idle",t:0,charge:0,heat:0,k:0,shake:0,onEvent:null,fired:{}},fe=new I,xe=new I,Je=new I(0,1,0),Ve=new I,Ge=new In,Xe=P=>{Z.fired[P]||(Z.fired[P]=!0,Z.onEvent?.(P))};function He(P){Ge.setFromUnitVectors(Je,xe.copy(P).normalize()),w.quaternion.slerp(Ge,.12)}function pt(P){Z.onEvent=P,Z.fired={},Z.phase="pad",Z.t=0,Z.charge=0,Z.heat=0,Z.k=0,D.visible=!0,D.position.set(0,0,0),D.rotation.set(0,0,0),N.material.uniforms.uK.value=0,G.shieldMat.emissiveIntensity=0,H.material.opacity=0,W.visible=!1,le=0,w.position.copy(ee.getPoint(0)),w.quaternion.setFromUnitVectors(Je,ie),ut()}function rt(){Z.phase==="pad"&&(Z.phase="launch",Z.t=0)}function mt(){Z.phase==="entry"&&(Z.phase="plunge",Z.t=0)}function ut(){a.aspect=innerWidth/innerHeight,a.fov=innerWidth<innerHeight*.95?55:40,a.updateProjectionMatrix()}let xt=new I(.9,.35,3.6),X=new I(0,.15,0);function sn(P,x){Z.t+=P,h.position.copy(a.position),M.rotation.y+=P*.004,N.material.uniforms.uT.value=x;let k=innerWidth<innerHeight*.95;if(Z.phase==="pad"&&(xt.set(k?.35:.9,k?-.2:.3,k?4.4:3.4),X.set(k?.08:.42,k?.32:.12,0),H.position.copy(w.position),H.scale.setScalar(.02+Z.charge*.07),H.material.opacity=Z.charge*(.8+Math.random()*.2)),Z.phase==="launch"){let V=Vi(0,5.5,Z.t);Z.k=.06*V*V,w.position.copy(ee.getPoint(Z.k)),He(ee.getTangent(Math.max(5e-4,Z.k))),H.position.copy(w.position).addScaledVector(ee.getTangent(Math.max(5e-4,Z.k)),-.015),H.scale.setScalar(.05+.04*Math.random()+V*.05),H.material.opacity=1-Vi(4.2,5.5,Z.t),W.visible=!0,le<B&&le++;for(let Y=B-1;Y>0;Y--)R[Y*3]=R[(Y-1)*3],R[Y*3+1]=R[(Y-1)*3+1],R[Y*3+2]=R[(Y-1)*3+2];R[0]=w.position.x,R[1]=w.position.y,R[2]=w.position.z;for(let Y=le;Y<B;Y++)R[Y*3]=R[0],R[Y*3+1]=R[1],R[Y*3+2]=R[2];F.attributes.position.needsUpdate=!0,F.setDrawRange(0,le),W.material.opacity=.9*(1-Vi(3.5,5.5,Z.t)),xt.lerp(fe.set(k?.6:1.6,k?.4:.8,k?5.6:4.4),Math.min(1,P*.8)),X.lerp(w.position,Math.min(1,P*1.5)),Z.t>5.6&&(Z.phase="cruise",Z.t=0,W.visible=!1,Xe("cruise"))}if(Z.phase==="cruise"){let Y=OM(Math.min(1,Z.t/22));Z.k=.06+.92*Y,w.position.copy(ee.getPoint(Z.k));let se=ee.getTangent(Z.k);He(se);let ue=Vi(.35,.7,Y),$=fe.crossVectors(se,Je).normalize(),ne=xe.copy(se).multiplyScalar(.17).addScaledVector($,.22).addScaledVector(Je,.08),de=new I().copy(se).multiplyScalar(-.27).addScaledVector($,-.1).addScaledVector(Je,.07);ne.lerp(de,ue),xt.copy(w.position).add(ne),X.copy(w.position),Y>.3&&Xe("mid"),Y>.72&&Xe("marsAhead"),Z.t>=22&&(Z.phase="approach",Z.t=0,Xe("approach"))}if(Z.phase==="approach"){let V=ee.getTangent(.98);w.position.copy(ee.getPoint(.98)).addScaledVector(V,Z.t*.006),He(fe.subVectors(S,w.position)),D.position.y=-Vi(.6,3.5,Z.t)*3.5,D.rotation.x=Vi(.6,3.5,Z.t)*.8,D.visible=Z.t<3.4;let Y=fe.crossVectors(V,Je).normalize();xt.lerp(xe.copy(w.position).addScaledVector(V,-.2).addScaledVector(Y,-.1).addScaledVector(Je,.07),Math.min(1,P*2)),X.lerp(fe.copy(w.position).lerp(S,.08),Math.min(1,P*2)),Z.t>3.6&&(Z.phase="entry",Z.t=0,Z.heat=0,Xe("entry"))}if(Z.phase==="entry"||Z.phase==="plunge"){let V=Z.phase==="plunge"?1:Z.heat,Y=ee.getPoint(.98),se=Z.phase==="plunge"?.35+Vi(0,2.2,Z.t)*.65:.35*Vi(0,1,Z.heat);w.position.lerpVectors(Y,he,se),He(fe.subVectors(he,Y));let ue=Z.phase==="plunge"?.7+Vi(0,1.5,Z.t)*.6:.15+Z.heat*.6;N.material.uniforms.uK.value=ue,G.shieldMat.emissiveIntensity=ue*1.6;let $=fe.subVectors(he,Y).normalize(),ne=xe.crossVectors($,Je).normalize();xt.lerp(new I().copy(w.position).addScaledVector($,-.15).addScaledVector(ne,-.09).addScaledVector(Je,.06),Math.min(1,P*3)),X.lerp(new I().copy(w.position).addScaledVector($,.05),Math.min(1,P*3)),Z.shake=ue*.0015+(Z.phase==="plunge"?Vi(0,2,Z.t)*.002:0),Z.phase==="plunge"&&Z.t>2.3&&Xe("plunged")}a.position.copy(xt),Z.shake>0&&!s&&a.position.add(fe.set((Math.random()-.5)*Z.shake,(Math.random()-.5)*Z.shake,0)),Ve.copy(X),a.lookAt(Ve)}function _t(){let P=Z.phase==="pad"||Z.phase==="launch"?0:Math.min(1,(Z.k-.06)/.92);return{days:Math.round(P*208),mkm:Math.round(P*487),heat:Z.heat}}return{scene:r,camera:a,update:sn,start:pt,launch:rt,enterOk:mt,resize:ut,hud:_t,craft:w,ready:Promise.all(Fm),get phase(){return Z.phase},set charge(P){Z.charge=P},set heat(P){Z.heat=P},get heat(){return Z.heat}}}var fa=(i,e,t)=>{let n=Math.min(1,Math.max(0,(t-i)/(e-i)));return n*n*(3-2*n)};function kM(){let i=document.createElement("canvas");i.width=i.height=64;let e=i.getContext("2d"),t=e.createRadialGradient(32,32,0,32,32,32);return t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.3,"rgba(255,210,150,0.7)"),t.addColorStop(1,"rgba(255,120,40,0)"),e.fillStyle=t,e.fillRect(0,0,64,64),new ln(i)}var pa={chute:[11.5,8.5],bags:[10,6]};function Bm(i){let e=new $e;e.visible=!1,i.add(e);let t=kM(),n=Ad(null),s=new $e;s.add(n.group),n.group.rotation.x=Math.PI,n.group.scale.setScalar(1.35),e.add(s);let r=n.group.children.filter(W=>W.material===n.shieldMat);r.forEach(W=>{W.userData.y0=W.position.y});let a=new $e;s.add(a);{let W=new Ut(1,32,10,0,Math.PI*2,0,Math.PI*.42),le=new Float32Array(W.attributes.position.count*3),ie=W.attributes.position,Le=new oe("#f2efe8"),ke=new oe("#e0782f");for(let he=0;he<ie.count;he++){let fe=Math.floor((Math.atan2(ie.getZ(he),ie.getX(he))+Math.PI)/(Math.PI*2)*16)%2?Le:ke;le.set([fe.r,fe.g,fe.b],he*3)}W.setAttribute("color",new ct(le,3));let Ce=new ae(W,new qe({vertexColors:!0,roughness:.85,side:Ht}));Ce.scale.set(7.5,4.2,7.5),Ce.position.y=20,a.add(Ce);let Q=[];for(let he=0;he<16;he++){let Z=he/16*Math.PI*2;Q.push(Math.cos(Z)*7.5*Math.sin(Math.PI*.42),20+4.2*Math.cos(Math.PI*.42),Math.sin(Z)*7.5*Math.sin(Math.PI*.42),0,1.6,0)}let ee=new Qe;ee.setAttribute("position",new nt(Q,3)),a.add(new $s(ee,new ni({color:"#d9d2c6",transparent:!0,opacity:.7}))),a.userData.canopy=Ce}a.scale.setScalar(.001),a.visible=!1;let o=new $e;e.add(o);let l=new qe({color:"#c8a35a",roughness:.55,metalness:.45,side:Ht}),c=new qe({color:"#8b8f96",roughness:.6,metalness:.4,side:Ht}),u=1.15,h=u*Math.sqrt(3)/2,d=W=>{let le=new Qe;return le.setAttribute("position",new nt([-u/2,0,0,u/2,0,0,0,W,0],3)),le.computeVertexNormals(),le},f=new ae(d(h),c);f.rotation.x=-Math.PI/2,f.position.z=h/3,o.add(f);let _=[],y=-Math.acos(1/3)+Math.PI/2;for(let W=0;W<3;W++){let le=new $e;le.rotation.y=W/3*Math.PI*2;let ie=new $e;ie.position.z=h/3,le.add(ie);let Le=new ae(d(h),l);ie.add(Le),ie.rotation.x=-y,_.push(ie),o.add(le)}o.position.y=.05;let g=(()=>{let W=[],ie=new xi(1,1).attributes.position,Le=new Set,ke=new I;for(let Ce=0;Ce<ie.count;Ce++){ke.fromBufferAttribute(ie,Ce);let Q=ke.toArray().map(he=>he.toFixed(2)).join();if(Le.has(Q))continue;Le.add(Q);let ee=new Ut(.62,14,10);ee.translate(ke.x*1.05,ke.y*1.05,ke.z*1.05),W.push(ee)}return qc(W)})(),m=new ae(g,new qe({color:"#e7dcc8",roughness:.92,metalness:0}));m.scale.setScalar(.001),m.visible=!1,m.position.y=.45,o.add(m);let M=new Qe;M.setAttribute("position",new nt([0,0,0,0,0,0],3));let A=new Vn(M,new ni({color:"#e8e2d8"}));A.frustumCulled=!1,e.add(A);let v=[0,1,2].map(W=>{let le=new mn(new cn({map:t,color:new oe(4,2.4,1),blending:Et,depthWrite:!1,transparent:!0,opacity:0})),ie=W/3*Math.PI*2;return le.position.set(Math.cos(ie)*.6,-.5,Math.sin(ie)*.6),le.scale.setScalar(1.6),s.add(le),le}),b=new mn(new cn({map:t,color:new oe(.9,.55,.35),transparent:!0,opacity:0,depthWrite:!1}));e.add(b),[s,o,a,m].forEach(W=>W.traverse(le=>{le.isMesh&&(le.castShadow=!1,le.receiveShadow=!1)}));let S=new I(1.2,0,-5.5),C=new I(-1.5,0,1),p={phase:"idle",t:0,alt:16,speed:1600,tg:16,onEvent:null,fired:{},chuteK:0,bagsK:0,vel:new I,bounces:0},E=W=>{p.onEvent?.(W)},L=W=>{p.fired[W]||(p.fired[W]=!0,E(W))},z=new I,O=new I,G=new I,w=new I;function D(){p.fired={},p.alt=16,p.speed=1600,p.tg=16,p.chuteK=0,p.bagsK=0,p.bounces=0,a.visible=!1,a.scale.setScalar(.001),m.visible=!1,m.scale.setScalar(.001),r.forEach(W=>{W.visible=!0,W.position.y=W.userData.y0}),n.shieldMat.emissiveIntensity=.9,s.visible=!0,s.rotation.set(0,0,0),v.forEach(W=>{W.material.opacity=0}),_.forEach(W=>{W.rotation.x=-y}),o.visible=!1,A.visible=!1,b.material.opacity=0}function H(W){p.onEvent=W,D(),p.phase="fall",p.t=0,e.visible=!0}function N(){p.phase="idle",e.visible=!1}function B(){return p.phase==="fall"?p.alt>pa.chute[0]?"early":(p.phase="chute",p.t=0,a.visible=!0,E("chuteOk"),"ok"):p.phase==="drop"&&!m.visible?p.tg>pa.bags[0]?"early":(m.visible=!0,p.bagsT=0,E("bagsOk"),"ok"):"none"}let R=W=>22+W*8;function F(W,le,ie){if(p.phase==="idle")return;p.t+=W;let Le=Is(S.x,S.z),ke=Math.sin(le*1.3)*.05;if(p.phase==="fall"&&(p.alt=Math.max(0,p.alt-W*.55),p.speed=1600,n.shieldMat.emissiveIntensity=Math.max(0,.9-p.t*.12),s.position.set(S.x+p.alt*2.2,Le+R(p.alt),S.z-p.alt*1.2),s.rotation.z=Math.sin(le*2.1)*.06,s.rotation.x=Math.sin(le*1.7)*.05,p.alt<=pa.chute[0]&&L("chuteWindow"),p.alt<pa.chute[1]&&(p.alt=14.5,p.fired.chuteWindow=!1,E("chuteLate")),z.copy(s.position).add(G.set(8,3.5,13)),O.copy(s.position).add(G.set(0,-2.2,0))),p.phase==="chute"){p.chuteK=Math.min(1,p.t/.7);let Ce=p.chuteK<1?p.chuteK*(1.15-.15*p.chuteK):1;a.scale.setScalar(Math.max(.001,Ce)),a.userData.canopy.scale.set(7.5*(.6+.4*Ce),4.2,7.5*(.6+.4*Ce)),p.speed=1600-1300*fa(0,3,p.t),p.alt=Math.max(.3,p.alt-W*(.55-.4*fa(0,3,p.t))),s.position.set(S.x+p.alt*2.2,Le+R(p.alt),S.z-p.alt*1.2),s.rotation.z=ke,s.rotation.x=Math.sin(le*1.1)*.04;let Q=fa(3.2,5.5,p.t);r.forEach(he=>{he.position.y=he.userData.y0+Q*9,he.visible=Q<.98}),p.t>3.2&&L("shieldOff");let ee=fa(5,7,p.t);o.visible=p.t>5,A.visible=o.visible,o.position.copy(s.position).add(G.set(0,-1.2-ee*18,0)),p.t>5&&L("bridle"),z.copy(s.position).add(G.set(20,8-ee*16,32)),O.copy(s.position).add(G.set(0,11-ee*20,0)),p.t>8&&(p.phase="drop",p.t=0,p.tg=16,E("drop"))}if(p.phase==="drop"){p.tg=Math.max(0,p.tg-W*1.35),p.speed=300,p.alt=p.tg*.083;let Ce=Le+2.6+p.tg*4.2;o.position.set(S.x+p.tg*.35,Ce,S.z-p.tg*.2),s.position.copy(o.position).add(G.set(0,19.2,0)),s.rotation.z=ke*.6,m.visible&&(p.bagsT+=W,p.bagsK=Math.min(1,p.bagsT/.5),m.scale.setScalar(Math.max(.001,p.bagsK*(1.12-.12*p.bagsK)))),p.tg<=pa.bags[0]&&L("bagsWindow"),!m.visible&&p.tg<pa.bags[1]&&(p.tg=16,p.fired.bagsWindow=!1,E("bagsLate"));let Q=m.visible&&p.tg<1.6;v.forEach(ee=>{ee.material.opacity=Q?.8+Math.random()*.2:0,ee.scale.setScalar(1.4+Math.random()*.6)}),Q&&L("rockets"),z.copy(o.position).add(G.set(10,3,17)),O.copy(o.position).add(G.set(0,1.5,0)),m.visible&&p.tg<=.5&&(p.phase="bounce",p.t=0,L("cut"),p.vel.set(-1.2,-6,3),w.set(3,7,-2))}if(p.phase==="bounce"){s.position.addScaledVector(w,W),w.y-=W*.8,s.visible=p.t<6,v.forEach(Q=>{Q.material.opacity=Math.max(0,Q.material.opacity-W*3)});let Ce=Math.ceil(W/(1/120));for(let Q=0;Q<Ce;Q++){let ee=W/Ce;p.vel.y-=9*ee,o.position.addScaledVector(p.vel,ee);let he=Is(o.position.x,o.position.z)+1.25;o.position.y<he&&(o.position.y=he,p.vel.y<-1.2?(p.vel.y=-p.vel.y*.58,p.vel.x*=.82,p.vel.z*=.82,p.bounces++,b.position.set(o.position.x,he-1,o.position.z),b.material.opacity=Math.min(.7,Math.abs(p.vel.y)*.15),b.scale.setScalar(3.5),E("bounce")):(p.vel.y=0,p.vel.x*=Math.pow(.15,ee),p.vel.z*=Math.pow(.15,ee)))}o.position.x+=(C.x-o.position.x)*W*.08,o.position.z+=(C.z-o.position.z)*W*.08,o.rotation.x+=p.vel.z*W*.5,o.rotation.z-=p.vel.x*W*.5,b.material.opacity=Math.max(0,b.material.opacity-W*.8),b.scale.multiplyScalar(1+W*.8),p.speed=Math.round(p.vel.length()*3.6*3),p.alt=0,p.tg=0,z.lerp(G.copy(o.position).add(new I(6,2.5,10)),Math.min(1,W*2)),O.lerp(o.position,Math.min(1,W*3)),p.t>5&&p.vel.length()<.4&&(p.phase="open",p.t=0,L("rest"))}if(p.phase==="open"){let Ce=fa(0,1.6,p.t);m.scale.set(1-Ce*.75,1-Ce*.9,1-Ce*.75),m.position.y=.45-Ce*.45,o.rotation.x*=Math.pow(.02,W),o.rotation.z*=Math.pow(.02,W);let Q=Is(o.position.x,o.position.z);o.position.y+=(Q+.25-o.position.y)*Math.min(1,W*3);let ee=fa(1.4,3.4,p.t);_.forEach(he=>{he.rotation.x=Tt.lerp(-y,Math.PI/2-.12,ee)}),m.visible=Ce<.98,z.lerp(G.copy(o.position).add(new I(3.2,2.2,5.5)),Math.min(1,W*1.5)),O.lerp(o.position,Math.min(1,W*2)),p.t>3.8&&L("opened")}if(A.visible){let Ce=M.attributes.position;Ce.setXYZ(0,s.position.x,s.position.y-.4,s.position.z),Ce.setXYZ(1,o.position.x,o.position.y+1.2,o.position.z),Ce.needsUpdate=!0,(p.phase==="bounce"||p.phase==="open")&&(A.visible=!1)}ie.position.copy(z),ie.lookAt(O)}return{root:e,start:H,stop:N,update:F,press:B,get phase(){return p.phase},hud(){return{alt:p.alt,speed:Math.round(p.speed),tg:p.tg,bounces:p.bounces}}}}var nu=class extends ti{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let e=new _n;e.deleteAttribute("uv");let t=new qe({side:kt}),n=new qe,s=new _i(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new ae(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new Qi(e,n,6),o=new Ct;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let l=new ae(e,ma(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new ae(e,ma(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let u=new ae(e,ma(17));u.position.set(14.904,12.198,-1.832),u.scale.set(.15,4.265,6.331),this.add(u);let h=new ae(e,ma(43));h.position.set(-.462,8.89,14.52),h.scale.set(4.38,5.441,.088),this.add(h);let d=new ae(e,ma(20));d.position.set(3.235,11.486,-12.541),d.scale.set(2.5,2,.1),this.add(d);let f=new ae(e,ma(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function ma(i){return new $a({color:0,emissive:16777215,emissiveIntensity:i})}function km(i){let e=new Cs(i),t=e.fromScene(new nu,.04).texture;e.dispose();let n=new $e,s=new $e;n.add(s);let r=new qe({color:"#d9d3cb",roughness:.38,metalness:.05,envMap:t,envMapIntensity:.55}),a=new qe({color:"#2a2f3a",roughness:.45,metalness:.4,envMap:t,envMapIntensity:.9}),o=new qe({color:"#06090d",roughness:.12,metalness:.2,envMap:t,envMapIntensity:.8}),l=new qe({color:"#ffb36b",roughness:.35,envMap:t,emissive:"#ff8a3d",emissiveIntensity:.12}),c=new Lt({color:new oe(.9,2,2.5),toneMapped:!1}),u=new Lt({color:new oe(2.2,1.2,.5),toneMapped:!1}),h=new $e;h.position.y=.16,s.add(h);let d=new ae(new On(.62,.46,.5,6,.2),r);h.add(d);let f=new ae(new On(.5,.3,.06,4,.1),o);f.position.set(0,-.01,.235),h.add(f);let _=[-1,1].map(O=>{let G=new ae(new Li(.035,.05,4,12),c);return G.position.set(O*.1,0,.27),h.add(G),G});[-1,1].forEach(O=>{let G=new ae(new bt(.075,.075,.05,28),a);G.rotation.z=Math.PI/2,G.position.set(O*.325,0,0),h.add(G);let w=new ae(new Gn(.06,.012,8,28),l);w.rotation.y=Math.PI/2,w.position.set(O*.352,0,0),h.add(w)});let y=new $e;y.position.set(.12,.23,-.02),h.add(y);let g=new ae(new bt(.008,.01,.16,8),a);g.position.y=.08,y.add(g);let m=new ae(new Ut(.028,16,12),u);m.position.y=.17,y.add(m);let M=new ae(new Li(.17,.12,6,20),r);M.position.y=-.22,s.add(M);let A=new ae(new Gn(.172,.018,10,36),a);A.rotation.x=Math.PI/2,A.position.y=-.2,s.add(A);let v=new ae(new es(.035,24),c);v.position.set(0,-.17,.168),s.add(v);let b=[-1,1].map(O=>{let G=new $e;G.position.set(O*.29,-.22,.04),s.add(G);let w=new ae(new Ut(.06,20,14),r);w.scale.set(1,1.15,.85),G.add(w);let D=new ae(new Gn(.05,.01,8,20),l);return D.rotation.x=Math.PI/2,D.position.y=-.04,G.add(D),G}),S=(()=>{let O=document.createElement("canvas");O.width=O.height=64;let G=O.getContext("2d"),w=G.createRadialGradient(32,32,0,32,32,32);return w.addColorStop(0,"rgba(255,255,255,1)"),w.addColorStop(.4,"rgba(255,200,140,0.5)"),w.addColorStop(1,"rgba(255,140,60,0)"),G.fillStyle=w,G.fillRect(0,0,64,64),new ln(O)})(),C=new mn(new cn({map:S,color:new oe(1.4,.9,.5),transparent:!0,depthWrite:!1,blending:Et,toneMapped:!1}));C.position.y=-.42,C.scale.set(.22,.3,1),s.add(C),n.traverse(O=>{O.frustumCulled=!1,(O.isMesh||O.isSprite)&&(O.renderOrder=30)});let p={t:0,blink:2,talk:0,wave:0,show:0,showTarget:0,look:new Se,side:1},E=new I;function L(O,G,w){let D=innerWidth<innerHeight*.95,H=3.2,N=Math.tan(Tt.degToRad(O.fov/2))*H,B=N*O.aspect,R=2*N/innerHeight;p.side=G==="ar"?1:-1;let F=D?.6:.78;if(n.scale.setScalar(F),D&&w&&w.height>0){let W=w.top-.62*F/R;E.set(p.side*(B-.48*F),N-W*R,-H)}else E.set(p.side*(B-.55*F),-N+.72*F,-H);n.rotation.y=-p.side*.35}function z(O,G){p.t+=O,p.show+=(p.showTarget-p.show)*Math.min(1,O*3.5),n.visible=p.show>.01;let w=1-p.show;n.position.set(E.x+p.side*w*.9,E.y-w*1.4+Math.sin(p.t*1.8)*.035,E.z),G&&p.look.lerp(G,Math.min(1,O*3)),h.rotation.set(-p.look.y*.18,p.look.x*.3,Math.sin(p.t*.9)*.04),s.rotation.z=Math.sin(p.t*1.3)*.05,p.blink-=O;let D=1;p.blink<.12&&(D=Math.abs(p.blink-.06)/.06),p.blink<0&&(p.blink=2.2+Math.random()*2.5);let H=p.talk>0?.75+.25*Math.sin(p.t*22):1;_.forEach(N=>{N.scale.set(1,Math.max(.08,D*H),1)}),p.talk=Math.max(0,p.talk-O),m.scale.setScalar(1+(p.talk>0?.35*Math.abs(Math.sin(p.t*14)):.1*Math.sin(p.t*3))),y.rotation.z=Math.sin(p.t*2.4)*.12,p.wave=Math.max(0,p.wave-O),b.forEach((N,B)=>{let R=B===0?-1:1;N.position.y=-.22+Math.sin(p.t*2+B)*.02,N.rotation.z=0,p.wave>0&&B===(p.side>0?0:1)&&(N.position.y=.02+Math.sin(p.t*9)*.02,N.rotation.z=Math.sin(p.t*12)*.5*R)}),C.material.opacity=.6+.4*Math.sin(p.t*30)*Math.sin(p.t*7),C.scale.set(.2+.03*Math.sin(p.t*25),.28+.06*Math.sin(p.t*17),1)}return{root:n,layout:L,update:z,show(){p.showTarget=1,p.wave=1.8},hide(){p.showTarget=0},talk(O){p.talk=Math.max(p.talk,O)},get visible(){return p.show>.5}}}var iu={sol:{pref:["Shakir","Hamed","Naayf"],gender:"m",pitch:1.45,rate:1.04},sojourner:{pref:["Salma","Zariyah","Hoda"],gender:"f",pitch:1.2,rate:1.02},spirit:{pref:["Shakir","Hamed","Naayf"],gender:"m",pitch:.95,rate:.98},opportunity:{pref:["Shakir","Hamed","Naayf"],gender:"m",pitch:.78,rate:.95}},HM={m:["Guy","Andrew","Christopher","Eric","David","Google US English"],f:["Aria","Jenny","Ava","Emma","Zira","Google US English"]};function Hm(i){let e=typeof window<"u"?window.speechSynthesis:null,t=[],n=null,s=null;function r(){e&&(t=e.getVoices()||[])}r(),e&&"onvoiceschanged"in e&&e.addEventListener("voiceschanged",r);function a(h,d){let f=iu[d]||iu.sol,_=t.filter(m=>m.lang&&m.lang.toLowerCase().startsWith(h==="ar"?"ar":"en"));if(!_.length)return null;let y=h==="ar"?f.pref:HM[f.gender],g=m=>{let M=0,A=m.name||"";return y.forEach((v,b)=>{A.includes(v)&&(M+=40-b*3)}),/Natural|Online|Neural/i.test(A)&&(M+=20),h==="ar"&&/ar-EG/i.test(m.lang)&&(M+=25),h==="en"&&/en-US/i.test(m.lang)&&(M+=8),M};return _.slice().sort((m,M)=>g(M)-g(m))[0]}function o(h){return r(),!!a(h,"sol")}function l(){s&&(s.pause(),s=null),e&&(e.speaking||e.pending)&&e.cancel(),n&&!n.ended&&(n.ended=!0),n=null,i.duck(!1)}function c(h){if(l(),i.muted)return!1;let d={ended:!1,onEnd:h.onEnd,onProgress:h.onProgress},f=()=>{d.ended||(d.ended=!0,i.duck(!1),d.onProgress?.(1),d.onEnd?.(),n===d&&(n=null))};if(n=d,h.file){let _=new Audio(h.file);s=_,_.addEventListener("timeupdate",()=>{s===_&&_.duration&&d.onProgress?.(_.currentTime/_.duration)}),_.addEventListener("ended",f);let y=()=>{s!==_||d.ended||(s=null,h.text&&u(h,d,f)||f())};return _.addEventListener("error",y),_.play().then(()=>i.duck(!0)).catch(y),!0}return u(h,d,f)}function u(h,d,f){if(!e)return!1;r();let _=a(h.lang,h.role);if(!_)return!1;let y=iu[h.role]||iu.sol,g=new SpeechSynthesisUtterance(h.text);g.voice=_,g.lang=_.lang,g.pitch=y.pitch,g.rate=y.rate,g.volume=1;let m=Math.max(1,h.text.length);g.onstart=()=>i.duck(!0),g.onboundary=v=>{typeof v.charIndex=="number"&&d.onProgress?.(Math.min(1,(v.charIndex+(v.charLength||4))/m))},g.onend=f,g.onerror=f,e.speak(g);let M=performance.now(),A=setInterval(()=>{if(d.ended){clearInterval(A);return}performance.now()-M>1200&&!e.speaking&&!e.pending&&(clearInterval(A),f())},400);return!0}return{speak:c,stop:l,available:o,get speaking(){return!!n},voiceName:(h,d)=>a(h,d)?.name||null}}var Me=i=>document.querySelector(i),ya=new URLSearchParams(location.search),zM=Number(ya.get("dtmax"))||1/20,qm=ya.has("debug")||location.hash.includes("debug"),Ym=!ya.has("nofiles"),Mt=window.matchMedia("(prefers-reduced-motion: reduce)").matches||ya.has("reduced"),Uo=Math.min(window.innerWidth,window.innerHeight)<600||/Android|iPhone|iPad/i.test(navigator.userAgent),U={lang:(()=>{let i=ya.get("lang");if(i==="ar"||i==="en")return i;try{return localStorage.getItem("tlf-lang")||"en"}catch{return"en"}})(),stage:"loading",surfaceReady:!1,fade:1,fadeTarget:1,fadeSpeed:1,focus:1,mode:"loading",charge:0,holding:!1,awake:[!1,!1,!1],line:[0,0,0],badges:new Set,done:!1,fps:0,pr:1,started:!1,timeScale:1},tt=Em(),Zn=Hm(tt),VM={Sojourner:"\u0633\u0648\u062C\u0648\u0631\u0646\u0631",Spirit:"\u0633\u0628\u064A\u0631\u064A\u062A",Opportunity:"\u0623\u0648\u0628\u0648\u0631\u062A\u0634\u0648\u0646\u064A\u062A\u064A",Oppy:"\u0623\u0648\u0628\u064A",NASA:"\u0646\u0627\u0633\u0627",Curiosity:"\u0643\u064A\u0648\u0631\u064A\u0648\u0633\u064A\u062A\u064A",Perseverance:"\u0628\u064A\u0631\u0633\u064A\u0641\u064A\u0631\u0627\u0646\u0633"};function $m(i,e){let t=i.replace(/[«»“”"]/g,"").replace(/…/g,"\u060C ");if(e==="ar"){t=t.replace(/[٠-٩]/g,n=>"\u0660\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669".indexOf(n));for(let[n,s]of Object.entries(VM))t=t.split(n).join(s)}return t}function Km(i,e,t,n=1){return{full:i,shown:Mt?1e9:0,acc:0,voiced:e,progress:0,dur:Math.max(1.2,i.length/(t==="ar"?12.5:15)/n)}}function Zm(i,e,t){if(i.shown>=i.full.length)return!1;if(i.acc+=e,i.voiced){let n=Math.floor(i.full.length*Math.min(1,i.acc/i.dur));i.shown=Math.min(i.full.length,Math.max(n,Math.floor(i.full.length*i.progress)))}else for(;i.acc>.03&&i.shown<i.full.length;)i.acc-=.03,i.shown++,i.shown%3===0&&tt.blip(t);return!0}var Po=[],Kt=(i,e)=>Po.push({t:i,fn:e}),Kn=Me("#scene"),Ot;try{Ot=new Bc({canvas:Kn,antialias:!1,powerPreference:"high-performance"})}catch(i){throw Me("#signal").classList.add("error"),Me("#loader-text").textContent=Ee("noWebGL",U.lang),i}Kn.addEventListener("webglcontextlost",i=>{i.preventDefault(),console.warn("WebGL context lost");let e=document.createElement("div");e.className="glass",e.id="gl-lost",e.textContent=U.lang==="ar"?"\u0643\u0627\u0631\u062A \u0627\u0644\u0634\u0627\u0634\u0629 \u0627\u062A\u0639\u0645\u0644\u0647 \u0625\u0639\u0627\u062F\u0629 \u062A\u0634\u063A\u064A\u0644\u2026 \u0628\u0646\u0631\u062C\u0651\u0639 \u0627\u0644\u0645\u0634\u0647\u062F":"The graphics card reset\u2026 restoring the scene",document.body.appendChild(e)});Kn.addEventListener("webglcontextrestored",()=>location.reload());var GM=Uo?1.5:1.75;U.pr=Math.min(window.devicePixelRatio||1,GM);Ot.setPixelRatio(U.pr);Ot.setSize(window.innerWidth,window.innerHeight);Ot.toneMapping=er;Ot.toneMappingExposure=1.05;Ot.outputColorSpace=At;Ot.shadowMap.enabled=!0;Ot.shadowMap.type=js;Ot.shadowMap.autoUpdate=!1;var Us=new ti,nn=new Vt(Uo&&innerWidth<innerHeight?48:35,innerWidth/innerHeight,.05,1e3);Us.add(nn);var Fd={mobile:Uo,pixelRatio:U.pr},Lo=cm(Us,Fd);{let i=new ti,e=Xh();i.add(new ae(new Ut(10,32,16),new ft({side:kt,uniforms:{uSun:{value:e}},vertexShader:"varying vec3 vD; void main(){ vD = normalize(position); gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`uniform vec3 uSun; varying vec3 vD;
      void main(){ float y = vD.y;
        vec3 ground = vec3(0.30,0.15,0.08); vec3 hor = vec3(0.85,0.58,0.40); vec3 zen = vec3(0.30,0.20,0.17);
        vec3 c = y < 0.0 ? mix(hor*0.7, ground, smoothstep(0.0,-0.5,y)) : mix(hor, zen, smoothstep(0.0,0.7,y));
        float s = max(dot(vD, uSun), 0.0); c += vec3(0.55,0.70,0.95)*pow(s,10.0)*1.2 + vec3(4.0,3.4,2.8)*pow(s,300.0);
        gl_FragColor = vec4(c,1.0); }`})));let t=new Cs(Ot);Od=t.fromScene(i,.03).texture,t.dispose()}var Od,WM=new $t(innerWidth,innerHeight,{type:un,samples:2}),ci=new Vc(Ot,WM);ci.setPixelRatio(U.pr);ci.setSize(innerWidth,innerHeight);var Id=new Gc(Us,nn);ci.addPass(Id);var ga=new la(new Se(innerWidth,innerHeight),.6,.6,.92);{let i=ga.setSize.bind(ga);ga.setSize=(e,t)=>i(Math.max(2,e*.5),Math.max(2,t*.5))}ci.addPass(ga);ci.addPass(new Wc);var Bn=new oa({uniforms:{tDiffuse:{value:null},uTime:{value:0},uRes:{value:new Se(innerWidth,innerHeight)},uFlash:{value:0},uFade:{value:1},uFadeColor:{value:new oe(.86,.56,.4)},uCA:{value:.001}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`
    uniform sampler2D tDiffuse; uniform float uTime, uFlash, uFade, uCA; uniform vec3 uFadeColor; uniform vec2 uRes; varying vec2 vUv;
    float hash(vec2 p){ return fract(sin(dot(p, vec2(12.9898,78.233))) * 43758.5453); }
    void main(){
      vec2 d = vUv - 0.5;
      float ca = uCA * (1.0 + uFlash*1.5);
      vec3 c;
      c.r = texture2D(tDiffuse, vUv + d*ca*2.0).r;
      c.g = texture2D(tDiffuse, vUv).g;
      c.b = texture2D(tDiffuse, vUv - d*ca*2.0).b;
      float l = dot(c, vec3(0.299,0.587,0.114));
      c += vec3(-0.004, 0.006, 0.018) * (1.0 - smoothstep(0.0, 0.35, l));   // cool the shadows a touch
      c *= mix(vec3(1.0), vec3(1.03, 0.995, 0.96), smoothstep(0.3, 1.0, l)); // warm the highlights
      float v = smoothstep(0.95, 0.28, length(d * vec2(uRes.x/uRes.y, 1.0) * 0.82));
      c *= mix(0.58, 1.0, v);
      c += (hash(vUv*uRes + fract(uTime)*91.7) - 0.5) * 0.04;
      c += vec3(0.55, 0.85, 1.0) * uFlash * 0.16;
      gl_FragColor = vec4(mix(uFadeColor, c, uFade), 1.0);
    }`});ci.addPass(Bn);var $n=Sm();nn.add($n.root);$n.layout(innerWidth/innerHeight);var au=bm(Us),Zt=[],gt=Rm(Ot,Fd),fn=km(Ot);gt.camera.add(fn.root);var Jm=new Set(["loading","signal","opening","home","pick","warp","ending"]);function yn(i){U.stage=i,document.body.dataset.stage=i;let e=Jm.has(i);Id.scene=i==="exp"?Yt.scene:e?gt.scene:Us,Id.camera=i==="exp"?Yt.camera:e?gt.camera:nn,i!=="surface"&&(U.mode="away",U.holding=!1,U.charge=0,document.body.classList.remove("hall-live"),$n.state.raiseTarget=0,$n.state.raise=0)}function gn(i,e){U.fadeTarget=i,U.fadeSpeed=1/Math.max(.001,e)}function jm(i){return new Promise((e,t)=>{let n=document.createElement("script");n.src=i,n.async=!0,n.onload=()=>e(),n.onerror=()=>t(new Error("failed "+i)),document.head.appendChild(n)})}async function XM(){if(!window.MER_GLB_B64)try{await jm("models/mer-model.js")}catch(a){console.warn(a)}let i="./models/MER.glb";if(window.MER_GLB_B64){let a=Uint8Array.from(atob(window.MER_GLB_B64),o=>o.charCodeAt(0));i=URL.createObjectURL(new Blob([a],{type:"model/gltf-binary"}))}let e;try{e=await Mm(i)}catch(a){console.warn("MER model failed, using fallback",a)}let t=Zc(),n=e?Md("spirit",e):Zc(),s=e?Md("opportunity",e):Zc();e||(n.id="spirit",s.id="opportunity"),[t,n,s].forEach((a,o)=>{a.data=Tm[o],a.pivot.rotation.y=a.baseYaw=[.32,-.15,-.55][o],a.yaw=a.pivot.rotation.y,a.yawVel=0,a.wakeT=-1,a.baseY=a.pivot.position.y,Us.add(a.pivot),Zt.push(a)}),Zt[2].model.scale.setScalar(.995);let r=a=>a.traverse(o=>{o.isMesh&&[o.material].flat().forEach(l=>{l.isMeshStandardMaterial&&(l.envMap=Od,l.envMapIntensity=.4,l.needsUpdate=!0)})});Zt.forEach(a=>r(a.model)),r($n.root)}var tn={pos:new I(0,9,28),look:new I(0,1,0)},Ln={active:!1,t:0,dur:1,fromPos:new I,fromLook:new I,lift:0},lr=new I,cr=new I,hu=new Se,Ds=new Se;function du(i,e,t){let n=Zt[i],s=n.id==="sojourner",r=innerWidth<innerHeight,a=s?1.9:5.4;r&&(a*=1.35);let o=n.push??1,l=a*.075;a*=o;let c=.38,u=n.pivot.position;if(t.set(u.x,u.y+n.height*(s?.42:.5)-l,u.z),e.set(u.x+Math.sin(c)*a,t.y+a*(s?.3:.17)+(1-o)*-.3*(s?.3:1),u.z+Math.cos(c)*a),!r){let h=new I(Math.cos(c),0,-Math.sin(c));e.addScaledVector(h,a*.07),t.addScaledVector(h,a*.07)}}var Rd=i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2;function Bd(i,e=1.7,t=.5){Ln.active=!0,Ln.t=0,Ln.dur=Mt?.001:e,Ln.lift=t,Ln.fromPos.copy(tn.pos),Ln.fromLook.copy(tn.look)}var et={bubble:Me("#bubble"),text:Me("#bubble-text"),kind:Me("#bubble-kind"),count:Me("#bubble-count"),next:Me("#bubble-next"),tag:Me("#rover-tag"),name:Me("#rover-name"),meta:Me("#rover-meta"),status:Me("#rover-status"),stats:Me("#stats"),power:Me("#power"),ring:Me("#power-ring"),hint:Me("#hint"),nav:Me("#nav"),toast:Me("#toast"),explore:Me("#explore-btn"),cta:Me("#end-cta")},Ei={full:"",shown:0,acc:0},vn={root:Me("#home"),slot:Me("#title-slot"),days:Me("#c-days"),clock:Me("#c-clock"),labels:Me("#labels"),warp:Me("#go-warp"),exp:Me("#go-exp"),els:[]},qM=Date.UTC(2010,2,22),ou=(i,e)=>e==="ar"?i.toLocaleString("ar-EG"):i.toLocaleString("en-US");function kd(){let i=Date.now()-qM,e=Math.floor(i/864e5),t=i%864e5,n=Math.floor(t/36e5),s=Math.floor(t%36e5/6e4),r=Math.floor(t%6e4/1e3),a=l=>String(l).padStart(2,"0");vn.days.textContent=ou(e,U.lang);let o=`${a(n)}:${a(s)}:${a(r)}`;vn.clock.textContent=U.lang==="ar"?o.replace(/\d/g,l=>"\u0660\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669"[l]):o}function YM(){vn.labels.innerHTML="",vn.els=[...ar,...jc].map(i=>{let e=document.createElement("div");return e.className="site-label"+(i.extra?" extra":""),e.dataset.extra=i.extra?"1":"",e.addEventListener("click",()=>fu(i.id)),e.innerHTML=`<i></i><div><b>${i.name}</b><span class="place">${i.place}</span><span class="when"></span></div>`,vn.labels.appendChild(e),e}),ur()}function ur(){gt.siteStatus().forEach((e,t)=>{let n=vn.els[t];if(!n)return;let s=Math.floor(e.hour),r=Math.floor(e.hour%1*60),a=`${String(s).padStart(2,"0")}:${String(r).padStart(2,"0")}`,o=U.lang==="ar"?a.replace(/\d/g,l=>"\u0660\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669"[l]):a;n.querySelector(".when").textContent=n.dataset.extra?`\u25CF ${Ee("active",U.lang)} \xB7 ${e.day?"\u2600":"\u263E"} ${o}`:`${e.day?"\u2600":"\u263E"} ${Ee(e.day?"day":"night",U.lang)} \xB7 ${o}`,n.classList.toggle("night",!e.day)}),Qm()}var Qm=()=>vn.els.forEach(i=>{i._w=i.offsetWidth}),zm=[];function $M(){gt.labelPositions(zm),zm.forEach((i,e)=>{let t=vn.els[e];if(!t)return;let n=i.x+(t._w||140)>innerWidth-6;t.classList.toggle("flip",n),t.style.transform=`translate(${(i.x-(n?t._w||140:0)).toFixed(1)}px, ${i.y.toFixed(1)}px)`;let s=t.dataset.extra?U.stage==="ending":U.stage==="home"||U.stage==="opening"||U.stage==="pick"||U.stage==="ending";t.classList.toggle("show",i.visible&&s)})}function hr(){let i=vn.slot.getBoundingClientRect();if(i.width<10)return;gt.buildTitle(i,U.lang);let e=gt.title.canvas;if(!e)return;let t=document.createElement("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d"),s=n.createLinearGradient(0,0,0,t.height);s.addColorStop(0,"#fff8ef"),s.addColorStop(.55,"#ffe2c8"),s.addColorStop(1,"#f2b083");let r=document.createElement("canvas");r.width=e.width,r.height=e.height;let a=r.getContext("2d");a.fillStyle=s,a.fillRect(0,0,r.width,r.height),a.globalCompositeOperation="destination-in",a.drawImage(e,0,0),n.shadowColor="rgba(255,150,90,0.35)",n.shadowBlur=28,n.drawImage(r,0,0),n.shadowBlur=0,n.drawImage(r,0,0),t.className="title-crisp",vn.slot.replaceChildren(t)}function hs(){let i=Zt[U.focus];if(!i)return;let e=i.data,t=U.lang;et.name.textContent=e.name,et.meta.textContent=`${e.mission} \xB7 ${e.site} \xB7 ${e.coords}`,et.status.textContent=U.awake[U.focus]?Ee("awakeNow",t):t==="ar"?e.status_ar:e.status_en,et.status.classList.toggle("on",U.awake[U.focus]),et.stats.innerHTML=e.stats.map(s=>`<div class="stat"><span>${t==="ar"?s.ar_label:s.en_label}</span><b>${t==="ar"?s.ar:s.en}</b></div>`).join(""),et.stats.classList.toggle("show",U.awake[U.focus]),et.nav.querySelectorAll("button").forEach((s,r)=>{s.classList.toggle("active",r===U.focus),s.classList.toggle("awake",U.awake[r]),s.setAttribute("aria-pressed",r===U.focus)});let n=U.awake[U.focus];et.power.classList.toggle("hidden",n||U.mode!=="hall"),et.hint.textContent=n?Ee("dragHint",t):Ee(innerWidth<760?"holdHintShort":"holdHint",t),et.hint.classList.toggle("show",U.mode==="hall"),et.explore.hidden=!n,et.cta.hidden=!(e0()&&U.mode==="hall")}var e0=()=>U.awake.every(Boolean);function Fo(i,e){let t=Zt[i],n=t.data.lines[e],s=U.lang;et.bubble.classList.add("show"),et.kind.textContent=n.kind==="fact"?Ee("fact",s):Ee("story",s),et.kind.className="kind "+n.kind,et.count.textContent=`${e+1} / ${t.data.lines.length}`,et.next.textContent=e+1<t.data.lines.length?Ee("next",s):Ee("again",s);let r=s==="ar"?n.ar:n.en,a={onProgress:l=>{Ei.job===a&&(Ei.progress=l)}},o=Zn.speak({...a,file:Ym?`audio/v/${t.id}_${e+1}_${s}.mp3`:null,lang:s,role:t.id,text:$m(s==="ar"?n.tts_ar||n.ar:n.en,s)});Ei=Km(r,o,s),Ei.job=a,et.text.textContent=Mt?r:"",et.text.dir=s==="ar"?"rtl":"ltr"}function Hd(){et.bubble.classList.remove("show"),Zn.stop()}function _a(i){i===U.focus||!Zt[i]||U.mode==="intro"||(U.focus=i,U.charge=0,U.holding=!1,Hd(),Bd(i,1.8,.7),hs(),U.awake[i]&&Kt(Mt?.05:1.5,()=>{U.focus===i&&U.stage==="surface"&&Fo(i,U.line[i])}))}function lu(i){et.toast.textContent=i,et.toast.classList.add("show"),clearTimeout(lu._t),lu._t=setTimeout(()=>et.toast.classList.remove("show"),2600)}var cu=new I,Cd=new I,Vm=new I;function t0(){let i=U.focus,e=Zt[i];U.holding=!1,U.mode="firing",$n.fire(),tt.zap(),tt.setCharge(0),$n.worldPalm(cu),Cd.copy(e.pivot.position),Cd.y+=e.height*.55,Vm.copy(e.pivot.position),au.fire(cu,Cd,Vm,e.id==="sojourner"?.45:1,()=>KM(i)),et.power.classList.add("hidden"),et.power.classList.remove("holding"),et.hint.classList.remove("show")}function KM(i){let e=Zt[i];e.wakeT=0,U.awake[i]=!0,U.line[i]=0,fr(),Bn.uniforms.uFlash.value=Mt?.3:1,tt.chime(),Kt(Mt?.2:1.5,()=>{U.stage!=="surface"||U.mode!=="firing"||(U.mode="hall",hs(),U.focus===i&&Fo(i,0))})}function Os(i){U.mode!=="hall"||U.awake[U.focus]||(tt.start(),U.holding=i,et.power.classList.toggle("holding",i))}et.power.addEventListener("pointerdown",i=>{i.preventDefault(),et.power.setPointerCapture?.(i.pointerId),Os(!0)});["pointerup","pointercancel","lostpointercapture"].forEach(i=>et.power.addEventListener(i,()=>Os(!1)));et.power.addEventListener("contextmenu",i=>i.preventDefault());document.addEventListener("click",i=>{let e=i.target.closest&&i.target.closest("button");e&&i.detail>0&&e.blur()});var ZM=()=>{let i=document.activeElement;return i&&(i.tagName==="INPUT"||i.tagName==="TEXTAREA"||i.isContentEditable)},Gm=()=>{let i=document.activeElement;return i&&i.tagName==="BUTTON"&&i!==et.power},n0=()=>dr.isOpen||!Me("#cert").hidden;window.addEventListener("keydown",i=>{if(ZM()||n0())return;if((U.stage==="exp"||U.stage==="edl")&&(i.code==="Space"||i.code==="Enter"&&document.activeElement===Xt.act)){if(Gm()&&document.activeElement!==Xt.act)return;i.preventDefault(),i.repeat||Sa(!0);return}if((i.code==="Space"||i.code==="Enter"&&document.activeElement===et.power)&&!Gm()){i.preventDefault(),i.repeat||Os(!0);return}i.repeat||(i.key==="ArrowRight"&&_a(Math.min(2,U.focus+(U.lang==="ar"?-1:1))),i.key==="ArrowLeft"&&_a(Math.max(0,U.focus+(U.lang==="ar"?1:-1))),(i.key==="f"||i.key==="F")&&Me("#fps").classList.toggle("show"),(i.key==="m"||i.key==="M")&&s0(),(i.key==="b"||i.key==="B")&&!An.on&&U.mode==="hall"&&(An.on=!0,An.data={},d0()))});window.addEventListener("keyup",i=>{if((U.stage==="exp"||U.stage==="edl")&&(i.code==="Space"||i.code==="Enter")){Sa(!1);return}(i.code==="Space"||i.code==="Enter")&&U.holding&&(i.preventDefault(),Os(!1))});window.addEventListener("blur",()=>{U.holding&&Os(!1)});et.next.addEventListener("click",()=>{let i=U.focus,e=Zt[i].data.lines.length;U.line[i]=(U.line[i]+1)%e,Fo(i,U.line[i])});et.text.addEventListener("click",()=>{Ei.shown=1e9,et.text.textContent=Ei.full});et.nav.querySelectorAll("button").forEach((i,e)=>i.addEventListener("click",()=>{tt.start(),_a(e)}));var xa=null,Ld=!1;Kn.addEventListener("pointerdown",i=>{U.mode==="hall"&&(Kn.setPointerCapture(i.pointerId),U.awake[U.focus]?xa={x:i.clientX}:(Ld=!0,Os(!0)))});Kn.addEventListener("pointermove",i=>{if(xa){let e=i.clientX-xa.x;xa.x=i.clientX,Zt[U.focus].yawVel=e*.0045/(1/60)}});var i0=()=>{xa=null,Ld&&(Ld=!1,Os(!1))};Kn.addEventListener("pointerup",i0);Kn.addEventListener("pointercancel",i0);window.addEventListener("pointermove",i=>{hu.set(i.clientX/innerWidth*2-1,-(i.clientY/innerHeight)*2+1)});function s0(){tt.setMuted(!tt.muted),tt.muted&&Zn.stop(),Me("#mute").classList.toggle("muted",tt.muted),Me("#mute").setAttribute("aria-pressed",tt.muted),Me("#mute").setAttribute("aria-label",Ee(tt.muted?"unmute":"mute",U.lang))}Me("#mute").addEventListener("click",()=>{tt.start(),s0()});Me("#lang").addEventListener("click",()=>{U.lang=U.lang==="ar"?"en":"ar";try{localStorage.setItem("tlf-lang",U.lang)}catch{}Sd(U.lang),hs(),gt.resize(U.lang),hr(),kd(),ur(),Ma(),Vd(),fr(),dr.refresh(),(U.stage==="pick"||U.stage==="ending"||U.stage==="exp"||U.stage==="edl")&&it.typing.key&&Wt(it.typing.key,it.typing.then),l0(),Oo(!0),Ye.step&&va(Ye.step),et.bubble.classList.contains("show")&&Fo(U.focus,U.line[U.focus])});function Nd(){let i=innerWidth,e=innerHeight;nn.aspect=i/e,nn.fov=Uo&&i<e?48:35,nn.updateProjectionMatrix(),Ot.setSize(i,e),ci.setSize(i,e),Bn.uniforms.uRes.value.set(i,e),$n.layout(i/e),hs(),gt.resize(U.lang),clearTimeout(Nd._t),Nd._t=setTimeout(()=>{hr(),Ma()},150),(U.mode==="hall"||U.mode==="firing")&&Zt.length&&(du(U.focus,lr,cr),Ln.active||(tn.pos.copy(lr),tn.look.copy(cr)))}window.addEventListener("resize",Nd);var Io=new Js;Io.connect(document);var Pd=0,su=0;var ru=0,JM=new I,Fs=2,Wm=-1;function zd(i){let e=it.typing;if(Zm(e,i,1.45)&&((e.el||it.text).textContent=e.full.slice(0,e.shown)),(Zn.speaking||e.shown<e.full.length&&!e.voiced)&&fn.talk(.12),it.after&&e.shown>=e.full.length&&e.spoken){let t=it.after;it.after=null,Kt(.9,()=>{U.stage===e.stage&&it.typing===e&&t()})}}function jM(i,e){Ds.lerp(hu,Math.min(1,i*3)),gt.update(i,e),fn.update(i,Mt?null:Ds),zd(i),$M();let t=Math.floor(Date.now()/1e3);t!==Wm&&(Wm=t,kd(),t%30===0&&ur())}function QM(i,e){Ds.lerp(hu,Math.min(1,i*3)),U.holding?U.charge=Math.min(1,U.charge+i/1.5):U.charge=Math.max(0,U.charge-i*1.4),$n.state.charge=U.charge,tt.setCharge(U.charge),et.ring.style.setProperty("--p",U.charge.toFixed(3)),Lo.dust.material.uniforms.uBoost.value=U.charge*1.5,U.holding&&U.charge>=1&&t0(),Zt.forEach((s,r)=>{let a=r===U.focus?0:.62;if(s.u.uDim.value+=(a-s.u.uDim.value)*Math.min(1,i*3),s.wakeT>=0){s.wakeT+=i;let o=Math.min(1,s.wakeT/1.6);s.u.uSleep.value=1-Rd(o),s.u.uGlow.value=Math.sin(Math.min(1,s.wakeT/1.4)*Math.PI)*.9;let l=s.wakeT<.9?Math.sin(s.wakeT/.9*Math.PI)*(s.id==="sojourner"?.04:.09):0;s.pivot.position.y=s.baseY+(Mt?0:l),s.model.rotation.z=Mt?0:Math.sin(s.wakeT*14)*.02*Math.max(0,1-s.wakeT/1.2),s.push=1-.1*Rd(Math.min(1,s.wakeT/2.2)),s.wakeT<2.5&&(Fs=1),s.wakeT>3&&(s.wakeT=-2)}U.awake[r]&&((!xa||r!==U.focus)&&(s.yawVel*=Math.pow(.04,i)),s.yaw+=s.yawVel*i,Math.abs(s.yawVel)>.001&&(Fs=1),s.pivot.rotation.y=s.yaw)});let t=U.mode==="hall"||U.mode==="firing";if(Zt.length&&t&&du(U.focus,lr,cr),Ln.active){Ln.t+=i;let s=Math.min(1,Ln.t/Ln.dur),r=Rd(s);tn.pos.lerpVectors(Ln.fromPos,lr,r),tn.pos.y+=Math.sin(s*Math.PI)*Ln.lift,tn.look.lerpVectors(Ln.fromLook,cr,r),s>=1&&(Ln.active=!1,U.mode==="intro"&&(U.mode="hall",document.body.classList.add("hall-live"),$n.state.raiseTarget=1,hs(),U.awake[U.focus]&&Fo(U.focus,U.line[U.focus])))}else t&&(tn.pos.lerp(lr,Math.min(1,i*2.5)),tn.look.lerp(cr,Math.min(1,i*2.5)));if(nn.position.copy(tn.pos),!Mt){nn.position.x+=Ds.x*.12,nn.position.y+=Ds.y*.06,nn.position.y+=Math.sin(e*.5)*.015;let s=au.shake*au.shake*.05;s>0&&nn.position.add(JM.set((Math.random()-.5)*s,(Math.random()-.5)*s,0))}nn.lookAt(tn.look),$n.update(i,Mt?null:Ds),$n.worldPalm(cu),au.update(i,e,cu),Lo.sky.material.uniforms.uTime.value=e,Lo.dust.material.uniforms.uTime.value=e,Bn.uniforms.uFlash.value=Math.max(0,Bn.uniforms.uFlash.value-i*1.6);let n=Zt[U.focus]?.id;Zm(Ei,i,n==="sojourner"?1.25:n==="opportunity"?.85:1)&&(et.text.textContent=Ei.full.slice(0,Ei.shown))}function eS(i){if(Pd++,su+=i,su>=1){if(U.fps=Math.round(Pd/su),Pd=0,su=0,(qm||Me("#fps").classList.contains("show"))&&!Me("#fps").dataset.final){let e=Ot.info.render;Me("#fps").textContent=`${U.fps} fps \xB7 pr ${U.pr.toFixed(2)} \xB7 ${e.calls} calls \xB7 ${(e.triangles/1e3).toFixed(0)}k tris`}U.stage!=="loading"&&U.stage!=="signal"&&U.fps<52&&!document.hidden?ru++:ru=0,ru>=2&&U.pr>.85&&(U.pr=Math.max(.85,U.pr-.25),Ot.setPixelRatio(U.pr),ci.setPixelRatio(U.pr),ci.setSize(innerWidth,innerHeight),ru=0,U.pr<=1&&ga.enabled&&U.fps<35&&(ga.enabled=!1))}}var An={on:ya.has("bench"),phase:"idle",data:{}};function tS(){var t,n;if(Io.update(),An.on&&U.started){let s=Io.getDelta();((t=An.data)[n=An.phase]||(t[n]=[])).push(s*1e3)}let i=Math.min(Io.getDelta(),zM)*U.timeScale,e=Io.getElapsed();for(let s=Po.length-1;s>=0;s--)Po[s].t-=i,Po[s].t<=0&&Po.splice(s,1)[0].fn();if(U.fade!==U.fadeTarget){let s=i*U.fadeSpeed;U.fade=Math.abs(U.fadeTarget-U.fade)<=s?U.fadeTarget:U.fade+Math.sign(U.fadeTarget-U.fade)*s}Bn.uniforms.uFade.value=U.fade,Bn.uniforms.uTime.value=e,U.stage==="exp"?rS(i,e):U.stage==="edl"?lS(i,e):Jm.has(U.stage)?jM(i,e):QM(i,e),Fs>0&&(Ot.shadowMap.needsUpdate=!0,Fs--),ci.render(i),eS(i)}async function Dd(i,e){let t=[];i.traverse(s=>{s.visible||(t.push(s),s.visible=!0)}),Ot.setRenderTarget(ci.renderTarget1);try{await Ot.compileAsync(i,e,i)}catch{}Ot.shadowMap.needsUpdate=!0,Ot.setRenderTarget(ci.renderTarget1),Ot.render(i,e),Ot.setRenderTarget(null);let n=new Set;i.traverse(s=>{[s.material].flat().forEach(r=>{if(r){for(let a of Object.values(r))a&&a.isTexture&&!n.has(a)&&n.add(a);if(r.uniforms)for(let a of Object.values(r.uniforms))a.value&&a.value.isTexture&&n.add(a.value)}})}),n.forEach(s=>{try{s.image&&Ot.initTexture(s)}catch{}}),t.forEach(s=>{s.visible=!1})}async function nS(){Sd(U.lang),yn("loading"),qm&&Me("#fps").classList.add("show"),gt.resize(U.lang);try{await Promise.race([document.fonts.ready,new Promise(i=>setTimeout(i,1500))])}catch{}hr(),YM(),kd(),fr(),await Dd(gt.scene,gt.camera),Ot.setAnimationLoop(tS),yn("signal"),Me("#signal").classList.add("ready"),Me("#start").disabled=!1,window.__tlf.ready=!0,await XM(),Ti=Bm(Us),hs(),nn.position.copy(tn.pos),nn.lookAt(tn.look),await Dd(Us,nn),U.surfaceReady=!0,window.__tlf.surfaceReady=!0,vn.warp.classList.remove("loading"),No&&Wd(No)}function r0(){U.started||(U.started=!0,tt.start(),tt.signal(),tt.setAmbient("space"),document.body.classList.add("started"),fr(),yn("opening"),gt.start(Mt),Mt||[1.5,1.95,2.4].forEach((i,e)=>Kt(i,()=>tt.beep(e))),Kt(Mt?.2:4.3,()=>{U.stage==="opening"&&yn("home")}))}Me("#start").addEventListener("click",r0);var it={root:Me("#guide"),text:Me("#guide-text"),chips:Me("#guide-chips"),land:Me("#guide-land"),back:Me("#guide-back"),typing:{full:"",shown:0,acc:0},after:null,selected:null},iS=new Set(["guideHello","guideChoose","guide_sojourner","guide_spirit","guide_opportunity","endA","endB","endC","expHello","expPad","expLaunched","expCruise1","expCruise2","expMars","expApproach","expEntry","expEntryOk","edlChute","edlEarly","edlChuteLate","edlChuteOk","edlBags","edlBagsEarly","edlBagsLate","edlBagsOk","edlBounce","edlOpened","edlNow"]);function Wt(i,e){let t=Ee(i,U.lang),n=U.stage==="ending"?Gt.text:U.stage==="exp"||U.stage==="edl"?Xt.text:it.text,s={onProgress:a=>{it.typing.job===s&&(it.typing.progress=a)},onEnd:()=>{it.typing.job===s&&(it.typing.spoken=!0)}},r=Zn.speak({...s,file:Ym&&iS.has(i)?`audio/v/sol_${i}_${U.lang}.mp3`:null,lang:U.lang,role:"sol",text:$m(t,U.lang)});it.typing=Km(t,r,U.lang,1.04),Object.assign(it.typing,{key:i,job:s,spoken:!r,el:n,then:e,stage:U.stage}),n.textContent=Mt?t:"",it.after=e||null}function Vd(){it.chips.querySelectorAll("button").forEach(e=>{let t=e.dataset.site===it.selected;e.classList.toggle("active",t),e.setAttribute("aria-pressed",t)});let i=ar.find(e=>e.id===it.selected);it.land.hidden=!i,i&&(it.land.textContent=`${Ee("landAt",U.lang)} ${i.name}`)}function Ma(){let i=(U.stage==="ending"?Gt.root:U.stage==="exp"?Xt.root:it.root).getBoundingClientRect();fn.layout(U.stage==="exp"&&Yt?Yt.camera:gt.camera,U.lang,i)}function a0(){U.stage==="home"&&(tt.start(),yn("pick"),gt.enterPick(),it.selected=null,Vd(),Ma(),fn.show(),it.text.textContent="",Kt(Mt?0:.7,()=>{U.stage==="pick"&&Wt("guideHello",()=>Wt("guideChoose"))}))}function fu(i){if(U.stage!=="pick")return;let e=ar.findIndex(t=>t.id===i);e<0||(U.focus=e,it.selected=i,gt.focusSite(i),Vd(),tt.beep(e),Wt("guide_"+i))}function Gd(){U.stage==="pick"&&(Zn.stop(),yn("home"),gt.goHome(U.lang,!1),fn.hide(),it.after=null)}it.chips.querySelectorAll("button").forEach(i=>i.addEventListener("click",()=>fu(i.dataset.site)));it.back.addEventListener("click",Gd);it.land.addEventListener("click",()=>{it.selected&&Wd(it.selected)});window.addEventListener("keydown",i=>{i.key==="Escape"&&(Me("#cert").hidden?n0()||Gd():mu())});var No=null;function Wd(i){if(!(U.stage!=="pick"&&!No)){if(!U.surfaceReady){No=i,it.land.classList.add("loading"),it.land.textContent=Ee("preparing",U.lang);return}if(No=null,it.land.classList.remove("loading"),U.focus=ar.findIndex(e=>e.id===i),yn("warp"),fn.hide(),Zn.stop(),tt.whoosh(2.9),Mt){gn(0,.4),Kt(.45,uu);return}Kt(2.05,()=>gn(0,.75)),gt.warpTo(i,uu)}}vn.warp.addEventListener("click",a0);var li=null;Kn.addEventListener("pointerdown",i=>{U.stage==="pick"&&(Kn.setPointerCapture(i.pointerId),li={x:i.clientX,y:i.clientY,t:performance.now(),moved:0},gt.dragStart())});Kn.addEventListener("pointermove",i=>{if(!li)return;let e=performance.now(),t=i.clientX-li.x,n=i.clientY-li.y;li.moved+=Math.abs(t)+Math.abs(n),gt.dragMove(t,n,(e-li.t)/1e3),li.x=i.clientX,li.y=i.clientY,li.t=e});var o0=i=>{if(li){if(gt.dragEnd(),li.moved<8&&i.type==="pointerup"){let e=gt.pickAt(i.clientX,i.clientY);e&&fu(e)}li=null}};Kn.addEventListener("pointerup",o0);Kn.addEventListener("pointercancel",o0);function uu(){yn("surface"),tt.setAmbient("mars"),U.mode="intro";let i=Zt[U.focus];tn.pos.set(i.pivot.position.x+10,34,i.pivot.position.z+52),tn.look.set(i.pivot.position.x,0,i.pivot.position.z-8),nn.position.copy(tn.pos),nn.lookAt(tn.look),Fs=2,du(U.focus,lr,cr),Bd(U.focus,Mt?.001:4.6,0),Me("#site-caption").textContent=i.data.site.toUpperCase(),Me("#caption-eyebrow").textContent=`${i.data.name.toUpperCase()} \xB7 ${i.data.coords}`,Me("#title").classList.remove("out"),Kt(Mt?.8:3.4,()=>Me("#title").classList.add("out")),gn(1,Mt?.3:1.1),hs()}Me("#home-btn").addEventListener("click",()=>{if(U.stage==="exp"||U.stage==="edl"){pu("home");return}if(U.stage==="ending"){Zn.stop(),it.after=null,gn(0,.45),Kt(.5,()=>{fn.hide(),yn("home"),gt.goHome(U.lang),hr(),ur(),gn(1,.7)});return}U.stage!=="surface"||U.mode==="firing"||U.mode==="away"||(dr.close(),Hd(),gn(0,.45),Kt(.5,()=>{yn("home"),gt.goHome(U.lang),tt.setAmbient("space"),hr(),ur(),gn(1,.7)}))});var Yt=null,Ti=null,Xt={root:Me("#exp"),text:Me("#exp-text"),hud:Me("#exp-hud"),act:Me("#exp-act"),skip:Me("#exp-skip"),step:Me("#exp-step")},Ye={mode:null,kind:null,holding:!1,charge:0,step:0,hudT:0,onTap:null,onFull:null};function Gi(i,e,t){Ye.kind=i,Ye.mode=e,Ye.charge=0,Ye.holding=!1,e==="hold"?(Ye.onFull=t,Ye.onTap=null):(Ye.onTap=t,Ye.onFull=null),l0()}function l0(){let i=Xt.act;i.hidden=!Ye.mode,Ye.mode&&(i.textContent=Ee({launch:"expLaunchBtn",shield:"expShieldBtn",chute:"expChuteBtn",bags:"expBagsBtn"}[Ye.kind],U.lang),i.classList.toggle("hold",Ye.mode==="hold"),i.style.setProperty("--p",Ye.charge.toFixed(3)))}function Sa(i){Ye.mode&&(tt.start(),Ye.mode==="hold"?(Ye.holding=i,Xt.act.classList.toggle("pressed",i)):i&&Ye.onTap&&Ye.onTap())}Xt.act.addEventListener("pointerdown",i=>{Ye.mode==="hold"&&(i.preventDefault(),Xt.act.setPointerCapture?.(i.pointerId),Sa(!0))});["pointerup","pointercancel","lostpointercapture"].forEach(i=>Xt.act.addEventListener(i,()=>{Ye.mode==="hold"&&Sa(!1)}));Xt.act.addEventListener("click",i=>{Ye.mode==="tap"&&i.detail>0&&Sa(!0)});Xt.act.addEventListener("contextmenu",i=>i.preventDefault());Xt.skip.addEventListener("click",()=>pu("land"));function va(i){Ye.step=i,Xt.step.textContent=i?`${ou(i,U.lang)}/${ou(5,U.lang)} \xB7 ${Ee("expStep"+i,U.lang)}`:""}function Do(i,e){let t=it.typing;t.shown>=t.full.length&&!Zn.speaking?Wt(i,e):it.after=()=>Wt(i,e)}function Oo(i){let e=U.lang,t=(r,a=0)=>e==="ar"?Number(r).toLocaleString("ar-EG",{maximumFractionDigits:a,minimumFractionDigits:a}):Number(r).toLocaleString("en-US",{maximumFractionDigits:a,minimumFractionDigits:a}),n=(r,a,o="")=>`<div class="${o}"><dt>${Ee(r,e)}</dt><dd>${a}</dd></div>`,s="";if(U.stage==="exp"&&Yt){let r=Yt.hud(),a=Yt.phase;a==="pad"||a==="launch"?s=n("hDate",Ee("launchDate",e))+n("hPlace","Cape Canaveral"):a==="cruise"||a==="approach"?s=n("hDay",`${t(r.days)} / ${t(208)}`)+n("hDist",`${t(r.mkm)} ${Ee("uMkm",e)}`):s=n("hSpeed",`~${t(19e3)} ${Ee("uKmh",e)}`)+n("hShield",`${t(Math.round(r.heat*100))}\u066A`.replace("\u066A",e==="ar"?"\u066A":"%"),r.heat>.99?"go":"")}else if(U.stage==="edl"&&Ti){let r=Ti.hud(),a=Ti.phase;if(a==="fall"||a==="chute"){let o=a==="fall"&&r.alt<=11.5;s=n("hAlt",`${t(r.alt,1)} ${Ee("uKm",e)}`,o?"go":"")+n("hSpeed",`${t(Math.round(r.speed/10)*10)} ${Ee("uKmh",e)}`)}else if(a==="drop"){let o=r.tg<=10&&r.tg>=6;s=n("hGround",`${t(r.tg,1)} ${Ee("uSec",e)}`,o?"go":r.tg<6?"warn":"")+n("hSpeed",`~${t(300)} ${Ee("uKmh",e)}`)}else s=n("hBounces",t(r.bounces))+n("hSpeed",`${t(r.speed)} ${Ee("uKmh",e)}`)}(i||Xt.hud._html!==s)&&(Xt.hud.innerHTML=s,Xt.hud._html=s)}async function c0(){if(!(U.stage!=="home"||!U.surfaceReady||vn.exp.classList.contains("loading"))){tt.start(),vn.exp.classList.add("loading");try{window.EARTH_DAY_B64||await jm("models/earth-tex.js"),Yt||(Yt=Om(Ot,{marsMap:gt.planet.material.map,quality:Fd,env:Od,reduced:Mt}),await Yt.ready,Yt.camera.add(fn.root),await Dd(Yt.scene,Yt.camera),gt.camera.add(fn.root))}catch(i){console.warn(i),vn.exp.classList.remove("loading");return}vn.exp.classList.remove("loading"),U.stage==="home"&&(gn(0,.5),Kt(.55,()=>{yn("exp"),Yt.resize(),Yt.start(sS),Yt.camera.add(fn.root),Gi(null,null),va(1),Oo(!0),Xt.text.textContent="",Ma(),fn.show(),gn(1,.9);let i=()=>{U.stage!=="exp"||Yt.phase!=="pad"||Ye.mode||Gi("launch","hold",()=>{Yt.launch(),tt.whoosh(5.5),Gi(null,null),it.after=null,Wt("expLaunched")})};Kt(Mt?.2:1,()=>{U.stage==="exp"&&Wt("expHello",()=>{Wt("expPad"),i()})}),Kt(Mt?1:9,i)}))}}vn.exp.addEventListener("click",c0);function sS(i){U.stage==="exp"&&(i==="cruise"&&(va(2),Do("expCruise1",()=>Wt("expCruise2"))),i==="marsAhead"&&Do("expMars"),i==="approach"&&(va(3),Do("expApproach")),i==="entry"&&(it.after=null,Wt("expEntry"),Gi("shield","hold",()=>{Yt.enterOk(),Gi(null,null),tt.setCharge(0),tt.whoosh(2.4),Wt("expEntryOk")})),i==="plunged"&&(Bn.uniforms.uFlash.value=Mt?.3:1,Bn.uniforms.uFadeColor.value.setRGB(1,.82,.62),gn(0,.5),Kt(.55,aS)))}function rS(i,e){if(Ds.lerp(hu,Math.min(1,i*3)),Ye.mode==="hold"&&(Ye.charge=Ye.holding?Math.min(1,Ye.charge+i/(Ye.kind==="shield"?2.4:1.5)):Math.max(0,Ye.charge-i*.9),Xt.act.style.setProperty("--p",Ye.charge.toFixed(3)),Ye.kind==="launch"&&(Yt.charge=Ye.charge),Ye.kind==="shield"&&(Yt.heat=Ye.charge,tt.setCharge(Ye.charge)),Ye.charge>=1)){let t=Ye.onFull;Ye.mode=null,Ye.holding=!1,Xt.act.classList.remove("pressed"),t&&t()}Yt.update(i,e),fn.update(i,Mt?null:Ds),zd(i),Ye.hudT+=i,Ye.hudT>.1&&(Ye.hudT=0,Oo())}function aS(){U.stage==="exp"&&(yn("edl"),fn.hide(),gt.camera.add(fn.root),Zt.forEach(i=>{i.pivot.visible=!1}),Fs=2,tt.setAmbient("mars"),Ti.start(oS),va(4),Oo(!0),Gi("chute","tap",()=>{Ti.press()==="early"&&Wt("edlEarly")}),Wt("edlChute"),gn(1,.6),Kt(.8,()=>Bn.uniforms.uFadeColor.value.setRGB(.86,.56,.4)))}function oS(i){U.stage==="edl"&&((i==="chuteWindow"||i==="bagsWindow")&&Xt.act.classList.add("ready"),i==="chuteLate"&&(Xt.act.classList.remove("ready"),Wt("edlChuteLate")),i==="chuteOk"&&(Xt.act.classList.remove("ready"),Gi(null,null),tt.whoosh(1.2),Wt("edlChuteOk")),i==="drop"&&(va(5),Gi("bags","tap",()=>{Ti.press()==="early"&&Wt("edlBagsEarly")}),Do("edlBags")),i==="bagsLate"&&(Xt.act.classList.remove("ready"),Wt("edlBagsLate")),i==="bagsOk"&&(Xt.act.classList.remove("ready"),Gi(null,null),tt.chime(),Wt("edlBagsOk")),i==="rockets"&&(Bn.uniforms.uFlash.value=Mt?.15:.45,tt.zap()),i==="bounce"&&(tt.blip(.35),Ti.hud().bounces===1&&Wt("edlBounce")),i==="opened"&&Do("edlOpened",()=>Wt("edlNow",()=>Kt(1.2,()=>{U.stage==="edl"&&pu("hall")}))))}function lS(i,e){Ti.update(i,e,nn),$n.update(i,null),Lo.sky.material.uniforms.uTime.value=e,Lo.dust.material.uniforms.uTime.value=e,Bn.uniforms.uFlash.value=Math.max(0,Bn.uniforms.uFlash.value-i*1.6),zd(i),Ye.hudT+=i,Ye.hudT>.1&&(Ye.hudT=0,Oo())}function pu(i){U.stage!=="exp"&&U.stage!=="edl"||(Zn.stop(),it.after=null,Gi(null,null),tt.setCharge(0),gn(0,.45),Kt(.5,()=>{if(Ti?.stop(),fn.hide(),gt.camera.add(fn.root),Zt.forEach(t=>{t.pivot.visible=!0}),Fs=2,Bn.uniforms.uFadeColor.value.setRGB(.86,.56,.4),i==="home"){yn("home"),gt.goHome(U.lang),tt.setAmbient("space"),hr(),ur(),gn(1,.7);return}if(U.focus=1,i==="land"){uu();return}yn("surface"),tt.setAmbient("mars"),U.mode="intro";let e=Zt[1];tn.pos.set(e.pivot.position.x+7,e.pivot.position.y+6,e.pivot.position.z+14),tn.look.copy(e.pivot.position),nn.position.copy(tn.pos),nn.lookAt(tn.look),du(1,lr,cr),Bd(1,Mt?.001:2.6,.2),Me("#site-caption").textContent=e.data.site.toUpperCase(),Me("#caption-eyebrow").textContent=`SPIRIT \xB7 ${ou(new Date().getFullYear(),U.lang).replace(/[,٬]/g,"")}`,Me("#title").classList.remove("out"),Kt(Mt?.8:2.8,()=>Me("#title").classList.add("out")),gn(1,.9),hs()}))}var dr=Lm({getLang:()=>U.lang,audio:tt,onBadge:i=>{U.badges.has(i)||(U.badges.add(i),lu("\u2605 "+Ee("savedSpirit",U.lang)))},onClose:()=>document.body.classList.remove("sheet-open")});et.explore.addEventListener("click",()=>{U.stage!=="surface"||!U.awake[U.focus]||(Zn.stop(),Ei.shown=1e9,et.text.textContent=Ei.full,document.body.classList.add("sheet-open"),dr.open(Zt[U.focus]))});Me("#about-btn").addEventListener("click",()=>dr.openAbout());document.addEventListener("keydown",i=>{if(i.key!=="Tab")return;let e=[...document.querySelectorAll(".modal")].find(r=>!r.hidden);if(!e)return;let t=[...e.querySelectorAll('button:not([disabled]), a[href], input, [tabindex]:not([tabindex="-1"])')].filter(r=>r.offsetParent!==null);if(!t.length)return;let n=t[0],s=t[t.length-1];e.contains(document.activeElement)?i.shiftKey&&document.activeElement===n?(i.preventDefault(),s.focus()):!i.shiftKey&&document.activeElement===s&&(i.preventDefault(),n.focus()):(i.preventDefault(),n.focus())});var cS=[...document.querySelectorAll("#journey li")],Xm=[];function fr(){let i=[U.started,...U.awake,U.done],e=i.indexOf(!1);cS.forEach((n,s)=>{let r=Ee("j"+(s+1),U.lang);n.classList.toggle("done",i[s]),n.classList.toggle("now",s===e),i[s]&&Xm[s]===!1&&!Mt&&(n.classList.add("just"),setTimeout(()=>n.classList.remove("just"),650)),n.title=r,n.querySelector(".sr-only").textContent=r+(i[s]?" \u2713":""),s===e?n.setAttribute("aria-current","step"):n.removeAttribute("aria-current")}),Xm=i;let t=i.filter(Boolean).length;Me("#j-count").textContent=U.lang==="ar"?`${"\u0660\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669"[t]} / \u0665`:`${t} / 5`}var Gt={root:Me("#ending"),text:Me("#end-text"),form:Me("#end-form"),name:Me("#end-name"),err:Me("#end-err"),busy:!1},Ft={root:Me("#cert"),img:Me("#cert-img"),dl:Me("#cert-dl"),url:null,back:null};function u0(){U.stage!=="surface"||U.mode!=="hall"||!e0()||(U.mode="away",dr.close(),Hd(),et.cta.hidden=!0,tt.whoosh(1.8),gn(0,.6),Kt(.65,()=>{yn("ending"),Qm(),tt.setAmbient("space"),gt.resize(U.lang),gt.enterEnding(),Gt.form.hidden=!0,Gt.text.textContent="",Ma(),fn.show(),gn(1,Mt?.3:1),Kt(Mt?.2:1.4,()=>{U.stage==="ending"&&Wt("endA",()=>Wt("endB",()=>Wt("endC",uS)))})}))}function uS(){U.stage==="ending"&&(Gt.form.hidden=!1,Ma(),Uo||Gt.name.focus({preventScroll:!0}))}et.cta.addEventListener("click",u0);async function hS(){let i=['600 40px "Chakra Petch"','600 40px "Chakra"','400 40px "Lalezar"','600 40px "IBM Plex Sans Arabic"','600 40px "Plex Arabic"','400 40px "IBM Plex Sans Arabic"','400 40px "Plex Arabic"'];try{await Promise.race([Promise.all(i.map(e=>document.fonts.load(e,"A\u0628").catch(()=>{}))),new Promise(e=>setTimeout(e,1500))])}catch{}}Gt.form.addEventListener("submit",async i=>{if(i.preventDefault(),Gt.busy)return;let e=Gt.name.value.replace(/\s+/g," ").trim().slice(0,28);if(!e){Gt.err.textContent=Ee("nameNeeded",U.lang),Gt.name.setAttribute("aria-invalid","true"),Gt.name.focus();return}Gt.err.textContent="",Gt.name.removeAttribute("aria-invalid"),Gt.busy=!0,tt.chime(),await hS(),Dm(e,U.lang,new Date,[...U.badges]).toBlob(n=>{Gt.busy=!1,n&&(Ft.url&&URL.revokeObjectURL(Ft.url),Ft.url=URL.createObjectURL(n),Ft.blob=n,Ft.img.src=Ft.url,Ft.img.alt=`${Ee("certTitle",U.lang)}: ${e}`,Ft.dl.href=Ft.url,Ft.dl.download=`The-Last-Footprint-${e.replace(/[^\p{L}\p{N}]+/gu,"-").replace(/^-|-$/g,"")||"explorer"}.png`,U.done=!0,fr(),dS())},"image/png")});function dS(){Ft.back=document.activeElement,Ft.root.hidden=!1,Ft.root.offsetWidth,Ft.root.classList.add("open"),Ft.root.querySelector(".cert-close").focus({preventScroll:!0})}function mu(){Ft.root.classList.remove("open"),setTimeout(()=>{Ft.root.classList.contains("open")||(Ft.root.hidden=!0)},200),Ft.back?.focus?.({preventScroll:!0})}Ft.root.querySelector(".cert-close").addEventListener("click",mu);Ft.root.addEventListener("click",i=>{i.target===Ft.root&&mu()});var Ud=null;(async()=>{try{window.claude&&window.claude.use&&(Ud=await window.claude.use("downloads"))}catch{}})();Ft.dl.addEventListener("click",async i=>{if(!Ft.url){i.preventDefault();return}if(Ud){i.preventDefault();try{await Ud.save({filename:Ft.dl.download,data:Ft.blob})}catch(e){(!e||e.code!=="declined")&&lu(Ee("saveHint",U.lang))}}});function h0(){Ft.root.hidden||mu(),Zn.stop(),fn.hide(),it.after=null,U.awake=[!1,!1,!1],U.line=[0,0,0],U.done=!1,U.badges.clear(),U.focus=1,Zt.forEach(i=>{i.u.uSleep.value=1,i.u.uGlow.value=0,i.wakeT=-1,i.push=1,i.yaw=i.baseYaw,i.yawVel=0,i.pivot.rotation.y=i.baseYaw,i.pivot.position.y=i.baseY,i.model.rotation.z=0}),Fs=2,Gt.form.hidden=!0,Gt.name.value="",Gt.err.textContent="",Gt.name.removeAttribute("aria-invalid"),gn(0,.45),Kt(.5,()=>{yn("home"),gt.goHome(U.lang),tt.setAmbient("space"),hr(),ur(),hs(),fr(),gn(1,.7)})}Me("#end-replay").addEventListener("click",h0);Gt.name.addEventListener("input",()=>{Gt.err.textContent&&(Gt.err.textContent="",Gt.name.removeAttribute("aria-invalid"))});async function d0(){let i=a=>new Promise(o=>setTimeout(o,a)),e=async a=>{for(;!a();)await i(50)};Me("#fps").classList.add("show"),await e(()=>U.mode==="hall");let t=async()=>{An.phase="charge",Os(!0),await e(()=>U.mode==="firing"),An.phase="fire+wake",await i(3200),An.phase="idle"};await i(2500),await t(),An.phase="fly",_a(0),await i(2600),An.phase="idle",await t(),An.phase="fly",_a(2),await i(2600),An.phase="idle",await t(),await i(1500);let n=Object.entries(An.data).map(([a,o])=>{let l=[...o].sort((h,d)=>h-d),c=o.reduce((h,d)=>h+d,0)/o.length,u=l[Math.floor(l.length*.99)]||0;return`${a}: ${(1e3/c).toFixed(0)} fps avg \xB7 worst1% ${(1e3/u).toFixed(0)} fps \xB7 max ${Math.max(...o).toFixed(0)}ms \xB7 hitches>50ms ${o.filter(h=>h>50).length}`});An.on=!1;let s=n.join(`
`)+`
pr ${U.pr.toFixed(2)} \xB7 ${innerWidth}x${innerHeight} \xB7 dpr ${devicePixelRatio}`;window.__benchResult=s;let r=Me("#fps");r.style.whiteSpace="pre",r.textContent=s,r.dataset.final="1"}An.on&&d0();window.__tlf={ready:!1,surfaceReady:!1,S:U,rovers:Zt,renderer:Ot,focusRover:_a,opening:gt,receiveSignal:r0,startWarp:Wd,setStage:yn,selectSite:fu,enterPick:a0,backHome:Gd,audio:tt,speech:Zn,explore:dr,goEnding:u0,replay:h0,renderJourney:fr,startExpedition:()=>c0(),get expd(){return Yt},get edl(){return Ti},expPress:i=>Sa(i),leaveExpedition:i=>pu(i),goSurface:()=>{U.started=!0,document.body.classList.add("started"),uu()},wakeNow:()=>{U.mode==="hall"&&!U.awake[U.focus]&&(U.charge=1,t0())}};nS().catch(i=>{console.error(i),Me("#loader-text").textContent=Ee("loadError",U.lang)});})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
