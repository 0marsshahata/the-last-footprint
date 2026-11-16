/* The Last Footprint · NASA Space Apps 2026 · Team 3M. AI disclosure: code written with AI assistance (Claude, Anthropic); character voices are AI-generated (Microsoft Azure neural TTS). */
(()=>{var Jf=0,dh=1,jf=2;var ir=1,Qf=2,na=3,Oi=0,Ht=1,zt=2,ri=0,ia=1,Et=2,fh=3,ph=4,ep=5;var sr=100,tp=101,np=102,ip=103,sp=104,rp=200,ap=201,op=202,lp=203,mh=204,gh=205,cp=206,up=207,hp=208,dp=209,fp=210,pp=211,mp=212,gp=213,xp=214,Tl=0,Al=1,Rl=2,zr=3,Cl=4,Il=5,Pl=6,Ll=7,Ql=0,_p=1,vp=2,yi=0,uo=1,ho=2,fo=3,rr=4,po=5,mo=6,go=7,Qu="attached",yp="detached",xh=300,Cs=301,ar=302,ec=303,tc=304,xo=306,Dn=1e3,ei=1001,Vr=1002,en=1003,nc=1004;var or=1005;var tn=1006,sa=1007;var Mi=1008;var Bn=1009,_h=1010,vh=1011,ra=1012,ic=1013,Si=1014,Xn=1015,hn=1016,sc=1017,rc=1018,aa=1020,yh=35902,Mh=35899,Sh=1021,bh=1022,qn=1023,Ii=1026,Is=1027,ac=1028,oc=1029,Ps=1030,lc=1031;var cc=1033,_o=33776,vo=33777,yo=33778,Mo=33779,uc=35840,hc=35841,dc=35842,fc=35843,pc=36196,mc=37492,gc=37496,xc=37488,_c=37489,So=37490,vc=37491,yc=37808,Mc=37809,Sc=37810,bc=37811,Ec=37812,wc=37813,Tc=37814,Ac=37815,Rc=37816,Cc=37817,Ic=37818,Pc=37819,Lc=37820,Nc=37821,Dc=36492,Uc=36494,Fc=36495,Oc=36283,Bc=36284,bo=36285,kc=36286;var Ks=2300,Zs=2301,bl=2302,eh=2303,th=2400,nh=2401,ih=2402,Mp=2500;var Eh=0,Eo=1,oa=2,Sp=3200;var wo=0,bp=1,bi="",yt="srgb",In="srgb-linear",Va="linear",St="srgb";var El=7680;var Ep=519,wp=512,Tp=513,Ap=514,Hc=515,Rp=516,Cp=517,zc=518,Ip=519,wh=35044;var Th="300 es",gi=2e3,Gr=2001;function I0(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function P0(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Wr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Pp(){let i=Wr("canvas");return i.style.display="block",i}var uf={},Xr=null;function Ga(...i){let e="THREE."+i.shift();Xr?Xr("log",e,...i):console.log(e,...i)}function Lp(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function ze(...i){i=Lp(i);let e="THREE."+i.shift();if(Xr)Xr("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function qe(...i){i=Lp(i);let e="THREE."+i.shift();if(Xr)Xr("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function $s(...i){let e=i.join(" ");e in uf||(uf[e]=!0,ze(...i))}function Np(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var Dp={[Tl]:Al,[Rl]:Pl,[Cl]:Ll,[zr]:Il,[Al]:Tl,[Pl]:Rl,[Ll]:Cl,[Il]:zr},Pi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},Sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],hf=1234567,Ha=Math.PI/180,Js=180/Math.PI;function xi(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Sn[i&255]+Sn[i>>8&255]+Sn[i>>16&255]+Sn[i>>24&255]+"-"+Sn[e&255]+Sn[e>>8&255]+"-"+Sn[e>>16&15|64]+Sn[e>>24&255]+"-"+Sn[t&63|128]+Sn[t>>8&255]+"-"+Sn[t>>16&255]+Sn[t>>24&255]+Sn[n&255]+Sn[n>>8&255]+Sn[n>>16&255]+Sn[n>>24&255]).toLowerCase()}function ut(i,e,t){return Math.max(e,Math.min(t,i))}function Ah(i,e){return(i%e+e)%e}function L0(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function N0(i,e,t){return i!==e?(t-i)/(e-i):0}function za(i,e,t){return(1-t)*i+t*e}function D0(i,e,t,n){return za(i,e,1-Math.exp(-t*n))}function U0(i,e=1){return e-Math.abs(Ah(i,e*2)-e)}function F0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function O0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function B0(i,e){return i+Math.floor(Math.random()*(e-i+1))}function k0(i,e){return i+Math.random()*(e-i)}function H0(i){return i*(.5-Math.random())}function z0(i){i!==void 0&&(hf=i);let e=hf+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function V0(i){return i*Ha}function G0(i){return i*Js}function W0(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function X0(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function q0(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Y0(i,e,t,n,s){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),u=a((e+n)/2),h=r((e-n)/2),d=a((e-n)/2),f=r((n-e)/2),x=a((n-e)/2);switch(s){case"XYX":i.set(o*u,l*h,l*d,o*c);break;case"YZY":i.set(l*d,o*u,l*h,o*c);break;case"ZXZ":i.set(l*h,l*d,o*u,o*c);break;case"XZX":i.set(o*u,l*x,l*f,o*c);break;case"YXY":i.set(l*f,o*u,l*x,o*c);break;case"ZYZ":i.set(l*x,l*f,o*u,o*c);break;default:ze("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function mi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Rt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var At={DEG2RAD:Ha,RAD2DEG:Js,generateUUID:xi,clamp:ut,euclideanModulo:Ah,mapLinear:L0,inverseLerp:N0,lerp:za,damp:D0,pingpong:U0,smoothstep:F0,smootherstep:O0,randInt:B0,randFloat:k0,randFloatSpread:H0,seededRandom:z0,degToRad:V0,radToDeg:G0,isPowerOfTwo:W0,ceilPowerOfTwo:X0,floorPowerOfTwo:q0,setQuaternionFromProperEuler:Y0,normalize:Rt,denormalize:mi},Lh=class Lh{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ut(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ut(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Lh.prototype.isVector2=!0;var Ae=Lh,Pn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],u=n[s+2],h=n[s+3],d=r[a+0],f=r[a+1],x=r[a+2],y=r[a+3];if(h!==y||l!==d||c!==f||u!==x){let m=l*d+c*f+u*x+h*y;m<0&&(d=-d,f=-f,x=-x,y=-y,m=-m);let p=1-o;if(m<.9995){let M=Math.acos(m),C=Math.sin(M);p=Math.sin(p*M)/C,o=Math.sin(o*M)/C,l=l*p+d*o,c=c*p+f*o,u=u*p+x*o,h=h*p+y*o}else{l=l*p+d*o,c=c*p+f*o,u=u*p+x*o,h=h*p+y*o;let M=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=M,c*=M,u*=M,h*=M}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],u=n[s+3],h=r[a],d=r[a+1],f=r[a+2],x=r[a+3];return e[t]=o*x+u*h+l*f-c*d,e[t+1]=l*x+u*d+c*h-o*f,e[t+2]=c*x+u*f+o*d-l*h,e[t+3]=u*x-o*h-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(s/2),h=o(r/2),d=l(n/2),f=l(s/2),x=l(r/2);switch(a){case"XYZ":this._x=d*u*h+c*f*x,this._y=c*f*h-d*u*x,this._z=c*u*x+d*f*h,this._w=c*u*h-d*f*x;break;case"YXZ":this._x=d*u*h+c*f*x,this._y=c*f*h-d*u*x,this._z=c*u*x-d*f*h,this._w=c*u*h+d*f*x;break;case"ZXY":this._x=d*u*h-c*f*x,this._y=c*f*h+d*u*x,this._z=c*u*x+d*f*h,this._w=c*u*h-d*f*x;break;case"ZYX":this._x=d*u*h-c*f*x,this._y=c*f*h+d*u*x,this._z=c*u*x-d*f*h,this._w=c*u*h+d*f*x;break;case"YZX":this._x=d*u*h+c*f*x,this._y=c*f*h+d*u*x,this._z=c*u*x-d*f*h,this._w=c*u*h-d*f*x;break;case"XZY":this._x=d*u*h-c*f*x,this._y=c*f*h-d*u*x,this._z=c*u*x+d*f*h,this._w=c*u*h+d*f*x;break;default:ze("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=n+o+h;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>h){let f=2*Math.sqrt(1+n-o-h);this._w=(u-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>h){let f=2*Math.sqrt(1+o-n-h);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+u)/f}else{let f=2*Math.sqrt(1+h-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ut(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-s*o,this._w=a*u-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Nh=class Nh{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(df.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(df.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),u=2*(o*t-r*s),h=2*(r*n-a*t);return this.x=t+l*c+a*h-o*u,this.y=n+l*u+o*c-r*h,this.z=s+l*h+r*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this.z=ut(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this.z=ut(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ut(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Au.copy(this).projectOnVector(e),this.sub(Au)}reflect(e){return this.sub(Au.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ut(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Nh.prototype.isVector3=!0;var L=Nh,Au=new L,df=new Pn,Dh=class Dh{constructor(e,t,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){let u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],f=n[5],x=n[8],y=s[0],m=s[3],p=s[6],M=s[1],C=s[4],v=s[7],E=s[2],S=s[5],T=s[8];return r[0]=a*y+o*M+l*E,r[3]=a*m+o*C+l*S,r[6]=a*p+o*v+l*T,r[1]=c*y+u*M+h*E,r[4]=c*m+u*C+h*S,r[7]=c*p+u*v+h*T,r[2]=d*y+f*M+x*E,r[5]=d*m+f*C+x*S,r[8]=d*p+f*v+x*T,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*r*u+n*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*a-o*c,d=o*l-u*r,f=c*r-a*l,x=t*h+n*d+s*f;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/x;return e[0]=h*y,e[1]=(s*c-u*n)*y,e[2]=(o*n-s*a)*y,e[3]=d*y,e[4]=(u*t-s*l)*y,e[5]=(s*r-o*t)*y,e[6]=f*y,e[7]=(n*l-c*t)*y,e[8]=(a*t-n*r)*y,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return $s("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ru.makeScale(e,t)),this}rotate(e){return $s("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ru.makeRotation(-e)),this}translate(e,t){return $s("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ru.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Dh.prototype.isMatrix3=!0;var je=Dh,Ru=new je,ff=new je().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),pf=new je().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function $0(){let i={enabled:!0,workingColorSpace:In,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===St&&(s.r=ji(s.r),s.g=ji(s.g),s.b=ji(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===St&&(s.r=Hr(s.r),s.g=Hr(s.g),s.b=Hr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===bi?Va:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return $s("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return $s("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[In]:{primaries:e,whitePoint:n,transfer:Va,toXYZ:ff,fromXYZ:pf,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:yt},outputColorSpaceConfig:{drawingBufferColorSpace:yt}},[yt]:{primaries:e,whitePoint:n,transfer:St,toXYZ:ff,fromXYZ:pf,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:yt}}}),i}var at=$0();function ji(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Hr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Sr,Nl=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Sr===void 0&&(Sr=Wr("canvas")),Sr.width=e.width,Sr.height=e.height;let s=Sr.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Sr}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Wr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=ji(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ji(t[n]/255)*255):t[n]=ji(t[n]);return{data:t,width:e.width,height:e.height}}else return ze("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},K0=0,qr=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:K0++}),this.uuid=xi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Cu(s[a].image)):r.push(Cu(s[a]))}else r=Cu(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Cu(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Nl.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(ze("Texture: Unable to serialize Texture."),{})}var Z0=0,Iu=new L,Yt=class i extends Pi{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=ei,s=ei,r=tn,a=Mi,o=qn,l=Bn,c=i.DEFAULT_ANISOTROPY,u=bi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Z0++}),this.uuid=xi(),this.name="",this.source=new qr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ae(0,0),this.repeat=new Ae(1,1),this.center=new Ae(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Iu).x}get height(){return this.source.getSize(Iu).y}get depth(){return this.source.getSize(Iu).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){ze(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){ze(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==xh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Dn:e.x=e.x-Math.floor(e.x);break;case ei:e.x=e.x<0?0:1;break;case Vr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Dn:e.y=e.y-Math.floor(e.y);break;case ei:e.y=e.y<0?0:1;break;case Vr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Yt.DEFAULT_IMAGE=null;Yt.DEFAULT_MAPPING=xh;Yt.DEFAULT_ANISOTROPY=1;var Uh=class Uh{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],x=l[9],y=l[2],m=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-y)<.01&&Math.abs(x-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+y)<.1&&Math.abs(x+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let C=(c+1)/2,v=(f+1)/2,E=(p+1)/2,S=(u+d)/4,T=(h+y)/4,g=(x+m)/4;return C>v&&C>E?C<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(C),s=S/n,r=T/n):v>E?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=S/s,r=g/s):E<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),n=T/r,s=g/r),this.set(n,s,r,t),this}let M=Math.sqrt((m-x)*(m-x)+(h-y)*(h-y)+(d-u)*(d-u));return Math.abs(M)<.001&&(M=1),this.x=(m-x)/M,this.y=(h-y)/M,this.z=(d-u)/M,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this.z=ut(this.z,e.z,t.z),this.w=ut(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this.z=ut(this.z,e,t),this.w=ut(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ut(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Uh.prototype.isVector4=!0;var Ct=Uh,Dl=class extends Pi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:tn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Ct(0,0,e,t),this.scissorTest=!1,this.viewport=new Ct(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:n.depth},r=new Yt(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:tn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new qr(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Zt=class extends Dl{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Wa=class extends Yt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=en,this.minFilter=en,this.wrapR=ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ul=class extends Yt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=en,this.minFilter=en,this.wrapR=ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var jl=class jl{constructor(e,t,n,s,r,a,o,l,c,u,h,d,f,x,y,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,u,h,d,f,x,y,m)}set(e,t,n,s,r,a,o,l,c,u,h,d,f,x,y,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=x,p[11]=y,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new jl().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/br.setFromMatrixColumn(e,0).length(),r=1/br.setFromMatrixColumn(e,1).length(),a=1/br.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){let d=a*u,f=a*h,x=o*u,y=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=f+x*c,t[5]=d-y*c,t[9]=-o*l,t[2]=y-d*c,t[6]=x+f*c,t[10]=a*l}else if(e.order==="YXZ"){let d=l*u,f=l*h,x=c*u,y=c*h;t[0]=d+y*o,t[4]=x*o-f,t[8]=a*c,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=f*o-x,t[6]=y+d*o,t[10]=a*l}else if(e.order==="ZXY"){let d=l*u,f=l*h,x=c*u,y=c*h;t[0]=d-y*o,t[4]=-a*h,t[8]=x+f*o,t[1]=f+x*o,t[5]=a*u,t[9]=y-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let d=a*u,f=a*h,x=o*u,y=o*h;t[0]=l*u,t[4]=x*c-f,t[8]=d*c+y,t[1]=l*h,t[5]=y*c+d,t[9]=f*c-x,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let d=a*l,f=a*c,x=o*l,y=o*c;t[0]=l*u,t[4]=y-d*h,t[8]=x*h+f,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=f*h+x,t[10]=d-y*h}else if(e.order==="XZY"){let d=a*l,f=a*c,x=o*l,y=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+y,t[5]=a*u,t[9]=f*h-x,t[2]=x*h-f,t[6]=o*u,t[10]=y*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(J0,e,j0)}lookAt(e,t,n){let s=this.elements;return zn.subVectors(e,t),zn.lengthSq()===0&&(zn.z=1),zn.normalize(),_s.crossVectors(n,zn),_s.lengthSq()===0&&(Math.abs(n.z)===1?zn.x+=1e-4:zn.z+=1e-4,zn.normalize(),_s.crossVectors(n,zn)),_s.normalize(),Ko.crossVectors(zn,_s),s[0]=_s.x,s[4]=Ko.x,s[8]=zn.x,s[1]=_s.y,s[5]=Ko.y,s[9]=zn.y,s[2]=_s.z,s[6]=Ko.z,s[10]=zn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],f=n[13],x=n[2],y=n[6],m=n[10],p=n[14],M=n[3],C=n[7],v=n[11],E=n[15],S=s[0],T=s[4],g=s[8],b=s[12],P=s[1],B=s[5],A=s[9],V=s[13],w=s[2],N=s[6],k=s[10],z=s[14],O=s[3],I=s[7],U=s[11],$=s[15];return r[0]=a*S+o*P+l*w+c*O,r[4]=a*T+o*B+l*N+c*I,r[8]=a*g+o*A+l*k+c*U,r[12]=a*b+o*V+l*z+c*$,r[1]=u*S+h*P+d*w+f*O,r[5]=u*T+h*B+d*N+f*I,r[9]=u*g+h*A+d*k+f*U,r[13]=u*b+h*V+d*z+f*$,r[2]=x*S+y*P+m*w+p*O,r[6]=x*T+y*B+m*N+p*I,r[10]=x*g+y*A+m*k+p*U,r[14]=x*b+y*V+m*z+p*$,r[3]=M*S+C*P+v*w+E*O,r[7]=M*T+C*B+v*N+E*I,r[11]=M*g+C*A+v*k+E*U,r[15]=M*b+C*V+v*z+E*$,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],f=e[14],x=e[3],y=e[7],m=e[11],p=e[15],M=l*f-c*d,C=o*f-c*h,v=o*d-l*h,E=a*f-c*u,S=a*d-l*u,T=a*h-o*u;return t*(y*M-m*C+p*v)-n*(x*M-m*E+p*S)+s*(x*C-y*E+p*T)-r*(x*v-y*S+m*T)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],u=e[10];return t*(a*u-o*c)-n*(r*u-o*l)+s*(r*c-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],f=e[11],x=e[12],y=e[13],m=e[14],p=e[15],M=t*o-n*a,C=t*l-s*a,v=t*c-r*a,E=n*l-s*o,S=n*c-r*o,T=s*c-r*l,g=u*y-h*x,b=u*m-d*x,P=u*p-f*x,B=h*m-d*y,A=h*p-f*y,V=d*p-f*m,w=M*V-C*A+v*B+E*P-S*b+T*g;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let N=1/w;return e[0]=(o*V-l*A+c*B)*N,e[1]=(s*A-n*V-r*B)*N,e[2]=(y*T-m*S+p*E)*N,e[3]=(d*S-h*T-f*E)*N,e[4]=(l*P-a*V-c*b)*N,e[5]=(t*V-s*P+r*b)*N,e[6]=(m*v-x*T-p*C)*N,e[7]=(u*T-d*v+f*C)*N,e[8]=(a*A-o*P+c*g)*N,e[9]=(n*P-t*A-r*g)*N,e[10]=(x*S-y*v+p*M)*N,e[11]=(h*v-u*S-f*M)*N,e[12]=(o*b-a*B-l*g)*N,e[13]=(t*B-n*b+s*g)*N,e[14]=(y*C-x*E-m*M)*N,e[15]=(u*E-h*C+d*M)*N,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+n,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,h=o+o,d=r*c,f=r*u,x=r*h,y=a*u,m=a*h,p=o*h,M=l*c,C=l*u,v=l*h,E=n.x,S=n.y,T=n.z;return s[0]=(1-(y+p))*E,s[1]=(f+v)*E,s[2]=(x-C)*E,s[3]=0,s[4]=(f-v)*S,s[5]=(1-(d+p))*S,s[6]=(m+M)*S,s[7]=0,s[8]=(x+C)*T,s[9]=(m-M)*T,s[10]=(1-(d+y))*T,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=br.set(s[0],s[1],s[2]).length(),o=br.set(s[4],s[5],s[6]).length(),l=br.set(s[8],s[9],s[10]).length();r<0&&(a=-a),hi.copy(this);let c=1/a,u=1/o,h=1/l;return hi.elements[0]*=c,hi.elements[1]*=c,hi.elements[2]*=c,hi.elements[4]*=u,hi.elements[5]*=u,hi.elements[6]*=u,hi.elements[8]*=h,hi.elements[9]*=h,hi.elements[10]*=h,t.setFromRotationMatrix(hi),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,s,r,a,o=gi,l=!1){let c=this.elements,u=2*r/(t-e),h=2*r/(n-s),d=(t+e)/(t-e),f=(n+s)/(n-s),x,y;if(l)x=r/(a-r),y=a*r/(a-r);else if(o===gi)x=-(a+r)/(a-r),y=-2*a*r/(a-r);else if(o===Gr)x=-a/(a-r),y=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=x,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=gi,l=!1){let c=this.elements,u=2/(t-e),h=2/(n-s),d=-(t+e)/(t-e),f=-(n+s)/(n-s),x,y;if(l)x=1/(a-r),y=a/(a-r);else if(o===gi)x=-2/(a-r),y=-(a+r)/(a-r);else if(o===Gr)x=-1/(a-r),y=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=h,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=x,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};jl.prototype.isMatrix4=!0;var Je=jl,br=new L,hi=new Je,J0=new L(0,0,0),j0=new L(1,1,1),_s=new L,Ko=new L,zn=new L,mf=new Je,gf=new Pn,Li=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],h=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(ut(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ut(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(ut(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ut(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ut(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-ut(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:ze("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return mf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(mf,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return gf.setFromEuler(this),this.setFromQuaternion(gf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Li.DEFAULT_ORDER="XYZ";var Yr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Q0=0,xf=new L,Er=new Pn,Xi=new Je,Zo=new L,Ca=new L,eg=new L,tg=new Pn,_f=new L(1,0,0),vf=new L(0,1,0),yf=new L(0,0,1),Mf={type:"added"},ng={type:"removed"},wr={type:"childadded",child:null},Pu={type:"childremoved",child:null},It=class i extends Pi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Q0++}),this.uuid=xi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new L,t=new Li,n=new Pn,s=new L(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Je},normalMatrix:{value:new je}}),this.matrix=new Je,this.matrixWorld=new Je,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Yr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Er.setFromAxisAngle(e,t),this.quaternion.multiply(Er),this}rotateOnWorldAxis(e,t){return Er.setFromAxisAngle(e,t),this.quaternion.premultiply(Er),this}rotateX(e){return this.rotateOnAxis(_f,e)}rotateY(e){return this.rotateOnAxis(vf,e)}rotateZ(e){return this.rotateOnAxis(yf,e)}translateOnAxis(e,t){return xf.copy(e).applyQuaternion(this.quaternion),this.position.add(xf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(_f,e)}translateY(e){return this.translateOnAxis(vf,e)}translateZ(e){return this.translateOnAxis(yf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Xi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Zo.copy(e):Zo.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Ca.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Xi.lookAt(Ca,Zo,this.up):Xi.lookAt(Zo,Ca,this.up),this.quaternion.setFromRotationMatrix(Xi),s&&(Xi.extractRotation(s.matrixWorld),Er.setFromRotationMatrix(Xi),this.quaternion.premultiply(Er.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(qe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Mf),wr.child=e,this.dispatchEvent(wr),wr.child=null):qe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ng),Pu.child=e,this.dispatchEvent(Pu),Pu.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Xi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Xi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Xi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Mf),wr.child=e,this.dispatchEvent(wr),wr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ca,e,eg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ca,tg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),h=a(e.shapes),d=a(e.skeletons),f=a(e.animations),x=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),x.length>0&&(n.nodes=x)}return n.object=s,n;function a(o){let l=[];for(let c in o){let u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};It.DEFAULT_UP=new L(0,1,0);It.DEFAULT_MATRIX_AUTO_UPDATE=!0;It.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ke=class extends It{constructor(){super(),this.isGroup=!0,this.type="Group"}},ig={type:"move"},$r=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ke,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ke,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ke,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let y of e.hand.values()){let m=t.getJointPose(y,n),p=this._getHandJoint(c,y);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,x=.005;c.inputState.pinching&&d>f+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(ig)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Ke;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Up={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},vs={h:0,s:0,l:0},Jo={h:0,s:0,l:0};function Lu(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var ce=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=yt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,at.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=at.workingColorSpace){return this.r=e,this.g=t,this.b=n,at.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=at.workingColorSpace){if(e=Ah(e,1),t=ut(t,0,1),n=ut(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Lu(a,r,e+1/3),this.g=Lu(a,r,e),this.b=Lu(a,r,e-1/3)}return at.colorSpaceToWorking(this,s),this}setStyle(e,t=yt){function n(r){r!==void 0&&parseFloat(r)<1&&ze("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:ze("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);ze("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=yt){let n=Up[e.toLowerCase()];return n!==void 0?this.setHex(n,t):ze("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ji(e.r),this.g=ji(e.g),this.b=ji(e.b),this}copyLinearToSRGB(e){return this.r=Hr(e.r),this.g=Hr(e.g),this.b=Hr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=yt){return at.workingToColorSpace(bn.copy(this),e),Math.round(ut(bn.r*255,0,255))*65536+Math.round(ut(bn.g*255,0,255))*256+Math.round(ut(bn.b*255,0,255))}getHexString(e=yt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=at.workingColorSpace){at.workingToColorSpace(bn.copy(this),t);let n=bn.r,s=bn.g,r=bn.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,u=(o+a)/2;if(o===a)l=0,c=0;else{let h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case n:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-n)/h+2;break;case r:l=(n-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=at.workingColorSpace){return at.workingToColorSpace(bn.copy(this),t),e.r=bn.r,e.g=bn.g,e.b=bn.b,e}getStyle(e=yt){at.workingToColorSpace(bn.copy(this),e);let t=bn.r,n=bn.g,s=bn.b;return e!==yt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(vs),this.setHSL(vs.h+e,vs.s+t,vs.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(vs),e.getHSL(Jo);let n=za(vs.h,Jo.h,t),s=za(vs.s,Jo.s,t),r=za(vs.l,Jo.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},bn=new ce;ce.NAMES=Up;var Xa=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new ce(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},ti=class extends It{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Li,this.environmentIntensity=1,this.environmentRotation=new Li,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},di=new L,qi=new L,Nu=new L,Yi=new L,Tr=new L,Ar=new L,Sf=new L,Du=new L,Uu=new L,Fu=new L,Ou=new Ct,Bu=new Ct,ku=new Ct,Ji=class i{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),di.subVectors(e,t),s.cross(di);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){di.subVectors(s,t),qi.subVectors(n,t),Nu.subVectors(e,t);let a=di.dot(di),o=di.dot(qi),l=di.dot(Nu),c=qi.dot(qi),u=qi.dot(Nu),h=a*c-o*o;if(h===0)return r.set(0,0,0),null;let d=1/h,f=(c*l-o*u)*d,x=(a*u-o*l)*d;return r.set(1-f-x,x,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Yi)===null?!1:Yi.x>=0&&Yi.y>=0&&Yi.x+Yi.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,Yi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Yi.x),l.addScaledVector(a,Yi.y),l.addScaledVector(o,Yi.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return Ou.setScalar(0),Bu.setScalar(0),ku.setScalar(0),Ou.fromBufferAttribute(e,t),Bu.fromBufferAttribute(e,n),ku.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Ou,r.x),a.addScaledVector(Bu,r.y),a.addScaledVector(ku,r.z),a}static isFrontFacing(e,t,n,s){return di.subVectors(n,t),qi.subVectors(e,t),di.cross(qi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return di.subVectors(this.c,this.b),qi.subVectors(this.a,this.b),di.cross(qi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;Tr.subVectors(s,n),Ar.subVectors(r,n),Du.subVectors(e,n);let l=Tr.dot(Du),c=Ar.dot(Du);if(l<=0&&c<=0)return t.copy(n);Uu.subVectors(e,s);let u=Tr.dot(Uu),h=Ar.dot(Uu);if(u>=0&&h<=u)return t.copy(s);let d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(Tr,a);Fu.subVectors(e,r);let f=Tr.dot(Fu),x=Ar.dot(Fu);if(x>=0&&f<=x)return t.copy(r);let y=f*c-l*x;if(y<=0&&c>=0&&x<=0)return o=c/(c-x),t.copy(n).addScaledVector(Ar,o);let m=u*x-f*h;if(m<=0&&h-u>=0&&f-x>=0)return Sf.subVectors(r,s),o=(h-u)/(h-u+(f-x)),t.copy(s).addScaledVector(Sf,o);let p=1/(m+y+d);return a=y*p,o=d*p,t.copy(n).addScaledVector(Tr,a).addScaledVector(Ar,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Ln=class{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(fi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(fi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=fi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,fi):fi.fromBufferAttribute(r,a),fi.applyMatrix4(e.matrixWorld),this.expandByPoint(fi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),jo.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),jo.copy(n.boundingBox)),jo.applyMatrix4(e.matrixWorld),this.union(jo)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,fi),fi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ia),Qo.subVectors(this.max,Ia),Rr.subVectors(e.a,Ia),Cr.subVectors(e.b,Ia),Ir.subVectors(e.c,Ia),ys.subVectors(Cr,Rr),Ms.subVectors(Ir,Cr),Ws.subVectors(Rr,Ir);let t=[0,-ys.z,ys.y,0,-Ms.z,Ms.y,0,-Ws.z,Ws.y,ys.z,0,-ys.x,Ms.z,0,-Ms.x,Ws.z,0,-Ws.x,-ys.y,ys.x,0,-Ms.y,Ms.x,0,-Ws.y,Ws.x,0];return!Hu(t,Rr,Cr,Ir,Qo)||(t=[1,0,0,0,1,0,0,0,1],!Hu(t,Rr,Cr,Ir,Qo))?!1:(el.crossVectors(ys,Ms),t=[el.x,el.y,el.z],Hu(t,Rr,Cr,Ir,Qo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,fi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(fi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:($i[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),$i[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),$i[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),$i[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),$i[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),$i[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),$i[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),$i[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints($i),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},$i=[new L,new L,new L,new L,new L,new L,new L,new L],fi=new L,jo=new Ln,Rr=new L,Cr=new L,Ir=new L,ys=new L,Ms=new L,Ws=new L,Ia=new L,Qo=new L,el=new L,Xs=new L;function Hu(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Xs.fromArray(i,r);let o=s.x*Math.abs(Xs.x)+s.y*Math.abs(Xs.y)+s.z*Math.abs(Xs.z),l=e.dot(Xs),c=t.dot(Xs),u=n.dot(Xs);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var cn=new L,tl=new Ae,sg=0,ht=class extends Pi{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:sg++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=wh,this.updateRanges=[],this.gpuType=Xn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)tl.fromBufferAttribute(this,t),tl.applyMatrix3(e),this.setXY(t,tl.x,tl.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)cn.fromBufferAttribute(this,t),cn.applyMatrix3(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)cn.fromBufferAttribute(this,t),cn.applyMatrix4(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)cn.fromBufferAttribute(this,t),cn.applyNormalMatrix(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)cn.fromBufferAttribute(this,t),cn.transformDirection(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=mi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Rt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=mi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=mi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=mi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=mi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Rt(t,this.array),n=Rt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Rt(t,this.array),n=Rt(n,this.array),s=Rt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Rt(t,this.array),n=Rt(n,this.array),s=Rt(s,this.array),r=Rt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var qa=class extends ht{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Ya=class extends ht{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var et=class extends ht{constructor(e,t,n){super(new Float32Array(e),t,n)}},rg=new Ln,Pa=new L,zu=new L,Un=class{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):rg.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Pa.subVectors(e,this.center);let t=Pa.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Pa,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(zu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Pa.copy(e.center).add(zu)),this.expandByPoint(Pa.copy(e.center).sub(zu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},ag=0,Qn=new Je,Vu=new It,Pr=new L,Vn=new Ln,La=new Ln,mn=new L,tt=class i extends Pi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ag++}),this.uuid=xi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(I0(e)?Ya:qa)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new je().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Qn.makeRotationFromQuaternion(e),this.applyMatrix4(Qn),this}rotateX(e){return Qn.makeRotationX(e),this.applyMatrix4(Qn),this}rotateY(e){return Qn.makeRotationY(e),this.applyMatrix4(Qn),this}rotateZ(e){return Qn.makeRotationZ(e),this.applyMatrix4(Qn),this}translate(e,t,n){return Qn.makeTranslation(e,t,n),this.applyMatrix4(Qn),this}scale(e,t,n){return Qn.makeScale(e,t,n),this.applyMatrix4(Qn),this}lookAt(e){return Vu.lookAt(e),Vu.updateMatrix(),this.applyMatrix4(Vu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Pr).negate(),this.translate(Pr.x,Pr.y,Pr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new et(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&ze("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ln);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){qe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Vn.setFromBufferAttribute(r),this.morphTargetsRelative?(mn.addVectors(this.boundingBox.min,Vn.min),this.boundingBox.expandByPoint(mn),mn.addVectors(this.boundingBox.max,Vn.max),this.boundingBox.expandByPoint(mn)):(this.boundingBox.expandByPoint(Vn.min),this.boundingBox.expandByPoint(Vn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&qe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Un);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){qe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){let n=this.boundingSphere.center;if(Vn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];La.setFromBufferAttribute(o),this.morphTargetsRelative?(mn.addVectors(Vn.min,La.min),Vn.expandByPoint(mn),mn.addVectors(Vn.max,La.max),Vn.expandByPoint(mn)):(Vn.expandByPoint(La.min),Vn.expandByPoint(La.max))}Vn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)mn.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(mn));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)mn.fromBufferAttribute(o,c),l&&(Pr.fromBufferAttribute(e,c),mn.add(Pr)),s=Math.max(s,n.distanceToSquared(mn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&qe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){qe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new ht(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let g=0;g<n.count;g++)o[g]=new L,l[g]=new L;let c=new L,u=new L,h=new L,d=new Ae,f=new Ae,x=new Ae,y=new L,m=new L;function p(g,b,P){c.fromBufferAttribute(n,g),u.fromBufferAttribute(n,b),h.fromBufferAttribute(n,P),d.fromBufferAttribute(r,g),f.fromBufferAttribute(r,b),x.fromBufferAttribute(r,P),u.sub(c),h.sub(c),f.sub(d),x.sub(d);let B=1/(f.x*x.y-x.x*f.y);isFinite(B)&&(y.copy(u).multiplyScalar(x.y).addScaledVector(h,-f.y).multiplyScalar(B),m.copy(h).multiplyScalar(f.x).addScaledVector(u,-x.x).multiplyScalar(B),o[g].add(y),o[b].add(y),o[P].add(y),l[g].add(m),l[b].add(m),l[P].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let g=0,b=M.length;g<b;++g){let P=M[g],B=P.start,A=P.count;for(let V=B,w=B+A;V<w;V+=3)p(e.getX(V+0),e.getX(V+1),e.getX(V+2))}let C=new L,v=new L,E=new L,S=new L;function T(g){E.fromBufferAttribute(s,g),S.copy(E);let b=o[g];C.copy(b),C.sub(E.multiplyScalar(E.dot(b))).normalize(),v.crossVectors(S,b);let B=v.dot(l[g])<0?-1:1;a.setXYZW(g,C.x,C.y,C.z,B)}for(let g=0,b=M.length;g<b;++g){let P=M[g],B=P.start,A=P.count;for(let V=B,w=B+A;V<w;V+=3)T(e.getX(V+0)),T(e.getX(V+1)),T(e.getX(V+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new ht(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new L,r=new L,a=new L,o=new L,l=new L,c=new L,u=new L,h=new L;if(e)for(let d=0,f=e.count;d<f;d+=3){let x=e.getX(d+0),y=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,x),r.fromBufferAttribute(t,y),a.fromBufferAttribute(t,m),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),o.fromBufferAttribute(n,x),l.fromBufferAttribute(n,y),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(x,o.x,o.y,o.z),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)mn.fromBufferAttribute(e,t),mn.normalize(),e.setXYZ(t,mn.x,mn.y,mn.z)}toNonIndexed(){function e(o,l){let c=o.array,u=o.itemSize,h=o.normalized,d=new c.constructor(l.length*u),f=0,x=0;for(let y=0,m=l.length;y<m;y++){o.isInterleavedBufferAttribute?f=l[y]*o.data.stride+o.offset:f=l[y]*u;for(let p=0;p<u;p++)d[x++]=c[f++]}return new ht(d,u,h)}if(this.index===null)return ze("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let u=0,h=c.length;u<h;u++){let d=c[u],f=e(d,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){let f=c[h];u.push(f.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(t))}let r=e.morphAttributes;for(let c in r){let u=[],h=r[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,u=a.length;c<u;c++){let h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},js=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=wh,this.updateRanges=[],this.version=0,this.uuid=xi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=xi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=xi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},Cn=new L,Es=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Cn.fromBufferAttribute(this,t),Cn.applyMatrix4(e),this.setXYZ(t,Cn.x,Cn.y,Cn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Cn.fromBufferAttribute(this,t),Cn.applyNormalMatrix(e),this.setXYZ(t,Cn.x,Cn.y,Cn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Cn.fromBufferAttribute(this,t),Cn.transformDirection(e),this.setXYZ(t,Cn.x,Cn.y,Cn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=mi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Rt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Rt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Rt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Rt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Rt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=mi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=mi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=mi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=mi(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Rt(t,this.array),n=Rt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Rt(t,this.array),n=Rt(n,this.array),s=Rt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Rt(t,this.array),n=Rt(n,this.array),s=Rt(s,this.array),r=Rt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Ga("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new ht(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Ga("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Gu=new L,og=new L,lg=new je,pi=class{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Gu.subVectors(n,t).cross(og.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(Gu),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||lg.getNormalMatrix(e),s=this.coplanarPoint(Gu).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},cg=0,En=class extends Pi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:cg++}),this.uuid=xi(),this.name="",this.type="Material",this.blending=ia,this.side=Oi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=mh,this.blendDst=gh,this.blendEquation=sr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ce(0,0,0),this.blendAlpha=0,this.depthFunc=zr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ep,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=El,this.stencilZFail=El,this.stencilZPass=El,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){ze(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){ze(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new ce().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new pi().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Ae().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ae().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},nn=class extends En{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ce(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Lr,Na=new L,Nr=new L,Dr=new L,Ur=new Ae,Da=new Ae,Fp=new Je,nl=new L,Ua=new L,il=new L,bf=new Ae,Wu=new Ae,Ef=new Ae,un=class extends It{constructor(e=new nn){if(super(),this.isSprite=!0,this.type="Sprite",Lr===void 0){Lr=new tt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new js(t,5);Lr.setIndex([0,1,2,0,2,3]),Lr.setAttribute("position",new Es(n,3,0,!1)),Lr.setAttribute("uv",new Es(n,2,3,!1))}this.geometry=Lr,this.material=e,this.center=new Ae(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&qe('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Nr.setFromMatrixScale(this.matrixWorld),Fp.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Dr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Nr.multiplyScalar(-Dr.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;sl(nl.set(-.5,-.5,0),Dr,a,Nr,s,r),sl(Ua.set(.5,-.5,0),Dr,a,Nr,s,r),sl(il.set(.5,.5,0),Dr,a,Nr,s,r),bf.set(0,0),Wu.set(1,0),Ef.set(1,1);let o=e.ray.intersectTriangle(nl,Ua,il,!1,Na);if(o===null&&(sl(Ua.set(-.5,.5,0),Dr,a,Nr,s,r),Wu.set(0,1),o=e.ray.intersectTriangle(nl,il,Ua,!1,Na),o===null))return;let l=e.ray.origin.distanceTo(Na);l<e.near||l>e.far||t.push({distance:l,point:Na.clone(),uv:Ji.getInterpolation(Na,nl,Ua,il,bf,Wu,Ef,new Ae),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function sl(i,e,t,n,s,r){Ur.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(Da.x=r*Ur.x-s*Ur.y,Da.y=s*Ur.x+r*Ur.y):Da.copy(Ur),i.copy(e),i.x+=Da.x,i.y+=Da.y,i.applyMatrix4(Fp)}var Ki=new L,Xu=new L,rl=new L,al=new L,ws=class{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ki)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ki.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ki.copy(this.origin).addScaledVector(this.direction,t),Ki.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Xu.copy(e).add(t).multiplyScalar(.5),rl.copy(t).sub(e).normalize(),al.copy(this.origin).sub(Xu);let r=e.distanceTo(t)*.5,a=-this.direction.dot(rl),o=al.dot(this.direction),l=-al.dot(rl),c=al.lengthSq(),u=Math.abs(1-a*a),h,d,f,x;if(u>0)if(h=a*l-o,d=a*o-l,x=r*u,h>=0)if(d>=-x)if(d<=x){let y=1/u;h*=y,d*=y,f=h*(h+a*d+2*o)+d*(a*h+d+2*l)+c}else d=r,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;else d=-r,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;else d<=-x?(h=Math.max(0,-(-a*r+o)),d=h>0?-r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c):d<=x?(h=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(h=Math.max(0,-(a*r+o)),d=h>0?r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c);else d=a>0?-r:r,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Xu).addScaledVector(rl,d),f}intersectSphere(e,t){if(e.radius<0)return null;Ki.subVectors(e.center,this.origin);let n=Ki.dot(this.direction),s=Ki.dot(Ki)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),u>=0?(r=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),h>=0?(o=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Ki)!==null}intersectTriangle(e,t,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,u=o.z,h=e.x-a.x,d=e.y-a.y,f=e.z-a.z,x=t.x-a.x,y=t.y-a.y,m=t.z-a.z,p=n.x-a.x,M=n.y-a.y,C=n.z-a.z,v=Math.abs(l),E=Math.abs(c),S=Math.abs(u),T,g,b,P,B,A,V,w,N,k,z,O;if(v>=E&&v>=S?(b=l,A=h,N=x,O=p,l>=0?(T=c,g=u,P=d,B=f,V=y,w=m,k=M,z=C):(T=u,g=c,P=f,B=d,V=m,w=y,k=C,z=M)):E>=S?(b=c,A=d,N=y,O=M,c>=0?(T=u,g=l,P=f,B=h,V=m,w=x,k=C,z=p):(T=l,g=u,P=h,B=f,V=x,w=m,k=p,z=C)):(b=u,A=f,N=m,O=C,u>=0?(T=l,g=c,P=h,B=d,V=x,w=y,k=p,z=M):(T=c,g=l,P=d,B=h,V=y,w=x,k=M,z=p)),b===0)return null;let I=T/b,U=g/b,$=1/b,ye=P-I*A,le=B-U*A,Ye=V-I*N,ie=w-U*N,Pe=k-I*O,j=z-U*O,Q=Pe*ie-j*Ye,Se=ye*j-le*Pe,se=Ye*le-ie*ye;if(s){if(Q<0||Se<0||se<0)return null}else if((Q<0||Se<0||se<0)&&(Q>0||Se>0||se>0))return null;let fe=Q+Se+se;if(fe===0)return null;let _e=$*(Q*A+Se*N+se*O);return(fe>0?_e<0:_e>0)?null:this.at(_e/fe,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Nt=class extends En{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Li,this.combine=Ql,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},wf=new Je,qs=new ws,ol=new Un,Tf=new L,ll=new L,cl=new L,ul=new L,qu=new L,hl=new L,Af=new L,dl=new L,ue=class extends It{constructor(e=new tt,t=new Nt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){hl.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=o[l],h=r[l];u!==0&&(qu.fromBufferAttribute(h,e),a?hl.addScaledVector(qu,u):hl.addScaledVector(qu.sub(t),u))}t.add(hl)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ol.copy(n.boundingSphere),ol.applyMatrix4(r),qs.copy(e.ray).recast(e.near),!(ol.containsPoint(qs.origin)===!1&&(qs.intersectSphere(ol,Tf)===null||qs.origin.distanceToSquared(Tf)>(e.far-e.near)**2))&&(wf.copy(r).invert(),qs.copy(e.ray).applyMatrix4(wf),!(n.boundingBox!==null&&qs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,qs)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,y=d.length;x<y;x++){let m=d[x],p=a[m.materialIndex],M=Math.max(m.start,f.start),C=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let v=M,E=C;v<E;v+=3){let S=o.getX(v),T=o.getX(v+1),g=o.getX(v+2);s=fl(this,p,e,n,c,u,h,S,T,g),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let x=Math.max(0,f.start),y=Math.min(o.count,f.start+f.count);for(let m=x,p=y;m<p;m+=3){let M=o.getX(m),C=o.getX(m+1),v=o.getX(m+2);s=fl(this,a,e,n,c,u,h,M,C,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let x=0,y=d.length;x<y;x++){let m=d[x],p=a[m.materialIndex],M=Math.max(m.start,f.start),C=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let v=M,E=C;v<E;v+=3){let S=v,T=v+1,g=v+2;s=fl(this,p,e,n,c,u,h,S,T,g),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let x=Math.max(0,f.start),y=Math.min(l.count,f.start+f.count);for(let m=x,p=y;m<p;m+=3){let M=m,C=m+1,v=m+2;s=fl(this,a,e,n,c,u,h,M,C,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function ug(i,e,t,n,s,r,a,o){let l;if(e.side===Ht?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===Oi,o),l===null)return null;dl.copy(o),dl.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(dl);return c<t.near||c>t.far?null:{distance:c,point:dl.clone(),object:i}}function fl(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,ll),i.getVertexPosition(l,cl),i.getVertexPosition(c,ul);let u=ug(i,e,t,n,ll,cl,ul,Af);if(u){let h=new L;Ji.getBarycoord(Af,ll,cl,ul,h),s&&(u.uv=Ji.getInterpolatedAttribute(s,o,l,c,h,new Ae)),r&&(u.uv1=Ji.getInterpolatedAttribute(r,o,l,c,h,new Ae)),a&&(u.normal=Ji.getInterpolatedAttribute(a,o,l,c,h,new L),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new L,materialIndex:0};Ji.getNormal(ll,cl,ul,d.normal),u.face=d,u.barycoord=h}return u}var Fa=new Ct,Rf=new Ct,Cf=new Ct,hg=new Ct,If=new Je,pl=new L,Yu=new Un,Pf=new Je,$u=new ws,$a=class extends ue{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Qu,this.bindMatrix=new Je,this.bindMatrixInverse=new Je,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Ln),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,pl),this.boundingBox.expandByPoint(pl)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Un),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,pl),this.boundingSphere.expandByPoint(pl)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Yu.copy(this.boundingSphere),Yu.applyMatrix4(s),e.ray.intersectsSphere(Yu)!==!1&&(Pf.copy(s).invert(),$u.copy(e.ray).applyMatrix4(Pf),!(this.boundingBox!==null&&$u.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,$u)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new Ct,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Qu?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===yp?this.bindMatrixInverse.copy(this.bindMatrix).invert():ze("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;Rf.fromBufferAttribute(s.attributes.skinIndex,e),Cf.fromBufferAttribute(s.attributes.skinWeight,e),t.isVector4?(Fa.copy(t),t.set(0,0,0,0)):(Fa.set(...t,1),t.set(0,0,0)),Fa.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let a=Cf.getComponent(r);if(a!==0){let o=Rf.getComponent(r);If.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(hg.copy(Fa).applyMatrix4(If),a)}}return t.isVector4&&(t.w=Fa.w),t.applyMatrix4(this.bindMatrixInverse)}},Kr=class extends It{constructor(){super(),this.isBone=!0,this.type="Bone"}},Zr=class extends Yt{constructor(e=null,t=1,n=1,s,r,a,o,l,c=en,u=en,h,d){super(null,a,o,l,c,u,s,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Lf=new Je,dg=new Je,Ka=class i{constructor(e=[],t=[]){this.uuid=xi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){ze("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Je)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Je;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,a=e.length;r<a;r++){let o=e[r]?e[r].matrixWorld:dg;Lf.multiplyMatrices(o,t[r]),Lf.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Zr(t,e,e,qn,Xn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],a=t[r];a===void 0&&(ze("Skeleton: No bone found with UUID:",r),a=new Kr),this.bones.push(a),this.boneInverses.push(new Je().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let a=t[s];e.bones.push(a.uuid);let o=n[s];e.boneInverses.push(o.toArray())}return e}},Qi=class extends ht{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Fr=new Je,Nf=new Je,ml=[],Df=new Ln,fg=new Je,Oa=new ue,Ba=new Un,es=class extends ue{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Qi(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,fg)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ln),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Fr),Df.copy(e.boundingBox).applyMatrix4(Fr),this.boundingBox.union(Df)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Un),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Fr),Ba.copy(e.boundingSphere).applyMatrix4(Fr),this.boundingSphere.union(Ba)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(Oa.geometry=this.geometry,Oa.material=this.material,Oa.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ba.copy(this.boundingSphere),Ba.applyMatrix4(n),e.ray.intersectsSphere(Ba)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Fr),Nf.multiplyMatrices(n,Fr),Oa.matrixWorld=Nf,Oa.raycast(e,ml);for(let a=0,o=ml.length;a<o;a++){let l=ml[a];l.instanceId=r,l.object=this,t.push(l)}ml.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Qi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Zr(new Float32Array(s*this.count),s,this.count,ac,Xn));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Ys=new Un,pg=new Ae(.5,.5),gl=new L,Jr=class{constructor(e=new pi,t=new pi,n=new pi,s=new pi,r=new pi,a=new pi){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=gi,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],u=r[4],h=r[5],d=r[6],f=r[7],x=r[8],y=r[9],m=r[10],p=r[11],M=r[12],C=r[13],v=r[14],E=r[15];if(s[0].setComponents(c-a,f-u,p-x,E-M).normalize(),s[1].setComponents(c+a,f+u,p+x,E+M).normalize(),s[2].setComponents(c+o,f+h,p+y,E+C).normalize(),s[3].setComponents(c-o,f-h,p-y,E-C).normalize(),n)s[4].setComponents(l,d,m,v).normalize(),s[5].setComponents(c-l,f-d,p-m,E-v).normalize();else if(s[4].setComponents(c-l,f-d,p-m,E-v).normalize(),t===gi)s[5].setComponents(c+l,f+d,p+m,E+v).normalize();else if(t===Gr)s[5].setComponents(l,d,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ys.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ys.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ys)}intersectsSprite(e){Ys.center.set(0,0,0);let t=pg.distanceTo(e.center);return Ys.radius=.7071067811865476+t,Ys.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ys)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(gl.x=s.normal.x>0?e.max.x:e.min.x,gl.y=s.normal.y>0?e.max.y:e.min.y,gl.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(gl)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var ni=class extends En{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ce(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Fl=new L,Ol=new L,Uf=new Je,ka=new ws,xl=new Un,Ku=new L,Ff=new L,Gn=class extends It{constructor(e=new tt,t=new ni){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Fl.fromBufferAttribute(t,s-1),Ol.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Fl.distanceTo(Ol);e.setAttribute("lineDistance",new et(n,1))}else ze("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),xl.copy(n.boundingSphere),xl.applyMatrix4(s),xl.radius+=r,e.ray.intersectsSphere(xl)===!1)return;Uf.copy(s).invert(),ka.copy(e.ray).applyMatrix4(Uf);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){let f=Math.max(0,a.start),x=Math.min(u.count,a.start+a.count);for(let y=f,m=x-1;y<m;y+=c){let p=u.getX(y),M=u.getX(y+1),C=_l(this,e,ka,l,p,M,y);C&&t.push(C)}if(this.isLineLoop){let y=u.getX(x-1),m=u.getX(f),p=_l(this,e,ka,l,y,m,x-1);p&&t.push(p)}}else{let f=Math.max(0,a.start),x=Math.min(d.count,a.start+a.count);for(let y=f,m=x-1;y<m;y+=c){let p=_l(this,e,ka,l,y,y+1,y);p&&t.push(p)}if(this.isLineLoop){let y=_l(this,e,ka,l,x-1,f,x-1);y&&t.push(y)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function _l(i,e,t,n,s,r,a){let o=i.geometry.attributes.position;if(Fl.fromBufferAttribute(o,s),Ol.fromBufferAttribute(o,r),t.distanceSqToSegment(Fl,Ol,Ku,Ff)>n)return;Ku.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Ku);if(!(c<e.near||c>e.far))return{distance:c,point:Ff.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var Of=new L,Bf=new L,Qs=class extends Gn{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Of.fromBufferAttribute(t,s),Bf.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Of.distanceTo(Bf);e.setAttribute("lineDistance",new et(n,1))}else ze("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Za=class extends Gn{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},ii=class extends En{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ce(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},kf=new Je,sh=new ws,vl=new Un,yl=new L,wn=class extends It{constructor(e=new tt,t=new ii){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),vl.copy(n.boundingSphere),vl.applyMatrix4(s),vl.radius+=r,e.ray.intersectsSphere(vl)===!1)return;kf.copy(s).invert(),sh.copy(e.ray).applyMatrix4(kf);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,h=n.attributes.position;if(c!==null){let d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let x=d,y=f;x<y;x++){let m=c.getX(x);yl.fromBufferAttribute(h,m),Hf(yl,m,l,s,e,t,this)}}else{let d=Math.max(0,a.start),f=Math.min(h.count,a.start+a.count);for(let x=d,y=f;x<y;x++)yl.fromBufferAttribute(h,x),Hf(yl,x,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Hf(i,e,t,n,s,r,a){let o=sh.distanceSqToPoint(i);if(o<t){let l=new L;sh.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var Ja=class extends Yt{constructor(e=[],t=Cs,n,s,r,a,o,l,c,u){super(e,t,n,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Xt=class extends Yt{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Ts=class extends Yt{constructor(e,t,n=Si,s,r,a,o=en,l=en,c,u=Ii,h=1){if(u!==Ii&&u!==Is)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:h};super(d,s,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new qr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Bl=class extends Ts{constructor(e,t=Si,n=Cs,s,r,a=en,o=en,l,c=Ii){let u={width:e,height:e,depth:1},h=[u,u,u,u,u,u];super(e,e,t,n,s,r,a,o,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},ja=class extends Yt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},_n=class i extends tt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],u=[],h=[],d=0,f=0;x("z","y","x",-1,-1,n,t,e,a,r,0),x("z","y","x",1,-1,n,t,-e,a,r,1),x("x","z","y",1,1,e,n,t,s,a,2),x("x","z","y",1,-1,e,n,-t,s,a,3),x("x","y","z",1,-1,e,t,n,s,r,4),x("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new et(c,3)),this.setAttribute("normal",new et(u,3)),this.setAttribute("uv",new et(h,2));function x(y,m,p,M,C,v,E,S,T,g,b){let P=v/T,B=E/g,A=v/2,V=E/2,w=S/2,N=T+1,k=g+1,z=0,O=0,I=new L;for(let U=0;U<k;U++){let $=U*B-V;for(let ye=0;ye<N;ye++){let le=ye*P-A;I[y]=le*M,I[m]=$*C,I[p]=w,c.push(I.x,I.y,I.z),I[y]=0,I[m]=0,I[p]=S>0?1:-1,u.push(I.x,I.y,I.z),h.push(ye/T),h.push(1-U/g),z+=1}}for(let U=0;U<g;U++)for(let $=0;$<T;$++){let ye=d+$+N*U,le=d+$+N*(U+1),Ye=d+($+1)+N*(U+1),ie=d+($+1)+N*U;l.push(ye,le,ie),l.push(le,Ye,ie),O+=6}o.addGroup(f,O,b),f+=O,d+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},Ni=class i extends tt{constructor(e=1,t=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:s,heightSegments:r},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let a=[],o=[],l=[],c=[],u=t/2,h=Math.PI/2*e,d=t,f=2*h+d,x=n*2+r,y=s+1,m=new L,p=new L;for(let M=0;M<=x;M++){let C=0,v=0,E=0,S=0;if(M<=n){let b=M/n,P=b*Math.PI/2;v=-u-e*Math.cos(P),E=e*Math.sin(P),S=-e*Math.cos(P),C=b*h}else if(M<=n+r){let b=(M-n)/r;v=-u+b*t,E=e,S=0,C=h+b*d}else{let b=(M-n-r)/n,P=b*Math.PI/2;v=u+e*Math.sin(P),E=e*Math.cos(P),S=e*Math.sin(P),C=h+d+b*h}let T=Math.max(0,Math.min(1,C/f)),g=0;M===0?g=.5/s:M===x&&(g=-.5/s);for(let b=0;b<=s;b++){let P=b/s,B=P*Math.PI*2,A=Math.sin(B),V=Math.cos(B);p.x=-E*V,p.y=v,p.z=E*A,o.push(p.x,p.y,p.z),m.set(-E*V,S,E*A),m.normalize(),l.push(m.x,m.y,m.z),c.push(P+g,T)}if(M>0){let b=(M-1)*y;for(let P=0;P<s;P++){let B=b+P,A=b+P+1,V=M*y+P,w=M*y+P+1;a.push(B,A,V),a.push(A,w,V)}}}this.setIndex(a),this.setAttribute("position",new et(o,3)),this.setAttribute("normal",new et(l,3)),this.setAttribute("uv",new et(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},ts=class i extends tt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],a=[],o=[],l=[],c=new L,u=new Ae;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let h=0,d=3;h<=t;h++,d+=3){let f=n+h/t*s;c.x=e*Math.cos(f),c.y=e*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),u.x=(a[d]/e+1)/2,u.y=(a[d+1]/e+1)/2,l.push(u.x,u.y)}for(let h=1;h<=t;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new et(a,3)),this.setAttribute("normal",new et(o,3)),this.setAttribute("uv",new et(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Tt=class i extends tt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let u=[],h=[],d=[],f=[],x=0,y=[],m=n/2,p=0;M(),a===!1&&(e>0&&C(!0),t>0&&C(!1)),this.setIndex(u),this.setAttribute("position",new et(h,3)),this.setAttribute("normal",new et(d,3)),this.setAttribute("uv",new et(f,2));function M(){let v=new L,E=new L,S=0,T=(t-e)/n;for(let g=0;g<=r;g++){let b=[],P=g/r,B=P*(t-e)+e;for(let A=0;A<=s;A++){let V=A/s,w=V*l+o,N=Math.sin(w),k=Math.cos(w);E.x=B*N,E.y=-P*n+m,E.z=B*k,h.push(E.x,E.y,E.z),v.set(N,T,k).normalize(),d.push(v.x,v.y,v.z),f.push(V,1-P),b.push(x++)}y.push(b)}for(let g=0;g<s;g++)for(let b=0;b<r;b++){let P=y[b][g],B=y[b+1][g],A=y[b+1][g+1],V=y[b][g+1];(e>0||b!==0)&&(u.push(P,B,V),S+=3),(t>0||b!==r-1)&&(u.push(B,A,V),S+=3)}c.addGroup(p,S,0),p+=S}function C(v){let E=x,S=new Ae,T=new L,g=0,b=v===!0?e:t,P=v===!0?1:-1;for(let A=1;A<=s;A++)h.push(0,m*P,0),d.push(0,P,0),f.push(.5,.5),x++;let B=x;for(let A=0;A<=s;A++){let w=A/s*l+o,N=Math.cos(w),k=Math.sin(w);T.x=b*k,T.y=m*P,T.z=b*N,h.push(T.x,T.y,T.z),d.push(0,P,0),S.x=N*.5+.5,S.y=k*.5*P+.5,f.push(S.x,S.y),x++}for(let A=0;A<s;A++){let V=E+A,w=B+A;v===!0?u.push(w,w+1,V):u.push(w+1,w,V),g+=3}c.addGroup(p,g,v===!0?1:2),p+=g}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},jr=class i extends Tt{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},kl=class i extends tt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],a=[];o(s),c(n),u(),this.setAttribute("position",new et(r,3)),this.setAttribute("normal",new et(r.slice(),3)),this.setAttribute("uv",new et(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(M){let C=new L,v=new L,E=new L;for(let S=0;S<t.length;S+=3)f(t[S+0],C),f(t[S+1],v),f(t[S+2],E),l(C,v,E,M)}function l(M,C,v,E){let S=E+1,T=[];for(let g=0;g<=S;g++){T[g]=[];let b=M.clone().lerp(v,g/S),P=C.clone().lerp(v,g/S),B=S-g;for(let A=0;A<=B;A++)A===0&&g===S?T[g][A]=b:T[g][A]=b.clone().lerp(P,A/B)}for(let g=0;g<S;g++)for(let b=0;b<2*(S-g)-1;b++){let P=Math.floor(b/2);b%2===0?(d(T[g][P+1]),d(T[g+1][P]),d(T[g][P])):(d(T[g][P+1]),d(T[g+1][P+1]),d(T[g+1][P]))}}function c(M){let C=new L;for(let v=0;v<r.length;v+=3)C.x=r[v+0],C.y=r[v+1],C.z=r[v+2],C.normalize().multiplyScalar(M),r[v+0]=C.x,r[v+1]=C.y,r[v+2]=C.z}function u(){let M=new L;for(let C=0;C<r.length;C+=3){M.x=r[C+0],M.y=r[C+1],M.z=r[C+2];let v=m(M)/2/Math.PI+.5,E=p(M)/Math.PI+.5;a.push(v,1-E)}x(),h()}function h(){for(let M=0;M<a.length;M+=6){let C=a[M+0],v=a[M+2],E=a[M+4],S=Math.max(C,v,E),T=Math.min(C,v,E);S>.9&&T<.1&&(C<.2&&(a[M+0]+=1),v<.2&&(a[M+2]+=1),E<.2&&(a[M+4]+=1))}}function d(M){r.push(M.x,M.y,M.z)}function f(M,C){let v=M*3;C.x=e[v+0],C.y=e[v+1],C.z=e[v+2]}function x(){let M=new L,C=new L,v=new L,E=new L,S=new Ae,T=new Ae,g=new Ae;for(let b=0,P=0;b<r.length;b+=9,P+=6){M.set(r[b+0],r[b+1],r[b+2]),C.set(r[b+3],r[b+4],r[b+5]),v.set(r[b+6],r[b+7],r[b+8]),S.set(a[P+0],a[P+1]),T.set(a[P+2],a[P+3]),g.set(a[P+4],a[P+5]),E.copy(M).add(C).add(v).divideScalar(3);let B=m(E);y(S,P+0,M,B),y(T,P+2,C,B),y(g,P+4,v,B)}}function y(M,C,v,E){E<0&&M.x===1&&(a[C]=M.x-1),v.x===0&&v.z===0&&(a[C]=E/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function p(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.detail)}};var Hl=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){ze("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let u=n[s],d=n[s+1]-u,f=(a-u)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new Ae:new L);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new L,s=[],r=[],a=[],o=new L,l=new Je;for(let f=0;f<=e;f++){let x=f/e;s[f]=this.getTangentAt(x,new L)}r[0]=new L,a[0]=new L;let c=Number.MAX_VALUE,u=Math.abs(s[0].x),h=Math.abs(s[0].y),d=Math.abs(s[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let x=Math.acos(ut(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,x))}a[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(ut(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let x=1;x<=e;x++)r[x].applyMatrix4(l.makeRotationAxis(s[x],f*x)),a[x].crossVectors(s[x],r[x])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}};function mg(i,e){let t=1-i;return t*t*t*e}function gg(i,e){let t=1-i;return 3*t*t*i*e}function xg(i,e){return 3*(1-i)*i*i*e}function _g(i,e){return i*i*i*e}function Zu(i,e,t,n,s){return mg(i,e)+gg(i,t)+xg(i,n)+_g(i,s)}var Qa=class extends Hl{constructor(e=new L,t=new L,n=new L,s=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new L){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Zu(e,s.x,r.x,a.x,o.x),Zu(e,s.y,r.y,a.y,o.y),Zu(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}};var _i=class i extends kl{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var ns=class i extends tt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,u=l+1,h=e/o,d=t/l,f=[],x=[],y=[],m=[];for(let p=0;p<u;p++){let M=p*d-a;for(let C=0;C<c;C++){let v=C*h-r;x.push(v,-M,0),y.push(0,0,1),m.push(C/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<o;M++){let C=M+c*p,v=M+c*(p+1),E=M+1+c*(p+1),S=M+1+c*p;f.push(C,v,S),f.push(v,E,S)}this.setIndex(f),this.setAttribute("position",new et(x,3)),this.setAttribute("normal",new et(y,3)),this.setAttribute("uv",new et(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},er=class i extends tt{constructor(e=.5,t=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let o=[],l=[],c=[],u=[],h=e,d=(t-e)/s,f=new L,x=new Ae;for(let y=0;y<=s;y++){for(let m=0;m<=n;m++){let p=r+m/n*a;f.x=h*Math.cos(p),f.y=h*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),x.x=(f.x/t+1)/2,x.y=(f.y/t+1)/2,u.push(x.x,x.y)}h+=d}for(let y=0;y<s;y++){let m=y*(n+1);for(let p=0;p<n;p++){let M=p+m,C=M,v=M+n+1,E=M+n+2,S=M+1;o.push(C,v,S),o.push(v,E,S)}}this.setIndex(o),this.setAttribute("position",new et(l,3)),this.setAttribute("normal",new et(c,3)),this.setAttribute("uv",new et(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var Ft=class i extends tt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,u=[],h=new L,d=new L,f=[],x=[],y=[],m=[];for(let p=0;p<=n;p++){let M=[],C=p/n,v=a+C*o,E=e*Math.cos(v),S=Math.sqrt(e*e-E*E),T=0;p===0&&a===0?T=.5/t:p===n&&l===Math.PI&&(T=-.5/t);for(let g=0;g<=t;g++){let b=g/t,P=s+b*r;h.x=-S*Math.cos(P),h.y=E,h.z=S*Math.sin(P),x.push(h.x,h.y,h.z),d.copy(h).normalize(),y.push(d.x,d.y,d.z),m.push(b+T,1-C),M.push(c++)}u.push(M)}for(let p=0;p<n;p++)for(let M=0;M<t;M++){let C=u[p][M+1],v=u[p][M],E=u[p+1][M],S=u[p+1][M+1];(p!==0||a>0)&&f.push(C,v,S),(p!==n-1||l<Math.PI)&&f.push(v,E,S)}this.setIndex(f),this.setAttribute("position",new et(x,3)),this.setAttribute("normal",new et(y,3)),this.setAttribute("uv",new et(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Wn=class i extends tt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],u=[],h=[],d=new L,f=new L,x=new L;for(let y=0;y<=n;y++){let m=a+y/n*o;for(let p=0;p<=s;p++){let M=p/s*r;f.x=(e+t*Math.cos(m))*Math.cos(M),f.y=(e+t*Math.cos(m))*Math.sin(M),f.z=t*Math.sin(m),c.push(f.x,f.y,f.z),d.x=e*Math.cos(M),d.y=e*Math.sin(M),x.subVectors(f,d).normalize(),u.push(x.x,x.y,x.z),h.push(p/s),h.push(y/n)}}for(let y=1;y<=n;y++)for(let m=1;m<=s;m++){let p=(s+1)*y+m-1,M=(s+1)*(y-1)+m-1,C=(s+1)*(y-1)+m,v=(s+1)*y+m;l.push(p,M,v),l.push(M,C,v)}this.setIndex(l),this.setAttribute("position",new et(c,3)),this.setAttribute("normal",new et(u,3)),this.setAttribute("uv",new et(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};function lr(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(zf(s))s.isRenderTargetTexture?(ze("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(zf(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function Tn(i){let e={};for(let t=0;t<i.length;t++){let n=lr(i[t]);for(let s in n)e[s]=n[s]}return e}function zf(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function vg(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Rh(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:at.workingColorSpace}var ls={clone:lr,merge:Tn},yg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Mg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,xt=class extends En{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=yg,this.fragmentShader=Mg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=lr(e.uniforms),this.uniformsGroups=vg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new ce().setHex(s.value);break;case"v2":this.uniforms[n].value=new Ae().fromArray(s.value);break;case"v3":this.uniforms[n].value=new L().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Ct().fromArray(s.value);break;case"m3":this.uniforms[n].value=new je().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Je().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Qr=class extends xt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},$e=class extends En{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ce(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=wo,this.normalScale=new Ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Li,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Fn=class extends $e{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ae(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ut(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ce(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ce(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ce(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var eo=class extends En{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=wo,this.normalScale=new Ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Li,this.combine=Ql,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},zl=class extends En{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Sp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Vl=class extends En{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};var to=class extends ni{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}};function bs(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function wl(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}function Sg(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function Vf(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,a=0;a!==n;++r){let o=t[r]*e;for(let l=0;l!==e;++l)s[a++]=i[o+l]}return s}function bg(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push(...a)),r=i[s++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=i[s++];while(r!==void 0)}var Di=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Gl=class extends Di{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:th,endingEnd:th}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case nh:r=e,o=2*t-n;break;case ih:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case nh:a=e,l=2*n-t;break;case ih:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}let c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,x=(n-t)/(s-t),y=x*x,m=y*x,p=-d*m+2*d*y-d*x,M=(1+d)*m+(-1.5-2*d)*y+(-.5+d)*x+1,C=(-1-f)*m+(1.5+f)*y+.5*x,v=f*m-f*y;for(let E=0;E!==o;++E)r[E]=p*a[u+E]+M*a[c+E]+C*a[l+E]+v*a[h+E];return r}},Wl=class extends Di{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(n-t)/(s-t),h=1-u;for(let d=0;d!==o;++d)r[d]=a[c+d]*h+a[l+d]*u;return r}},Xl=class extends Di{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},ql=class extends Di{interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this.inTangents,h=this.outTangents;if(!u||!h){let x=(n-t)/(s-t),y=1-x;for(let m=0;m!==o;++m)r[m]=a[c+m]*y+a[l+m]*x;return r}let d=o*2,f=e-1;for(let x=0;x!==o;++x){let y=a[c+x],m=a[l+x],p=f*d+x*2,M=h[p],C=h[p+1],v=e*d+x*2,E=u[v],S=u[v+1],T=wg(n,t,M,E,s);r[x]=Op(T,y,C,S,m)}return r}};function Op(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function Eg(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function wg(i,e,t,n,s){let r=(i-e)/(s-e);for(let a=0;a<8;a++){let o=Op(r,e,t,n,s)-i;if(Math.abs(o)<1e-10)break;let l=Eg(r,e,t,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var On=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=bs(t,this.TimeBufferType),this.values=bs(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:bs(e.times,Array),values:bs(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),wl(e.settings)&&(n.settings={inTangents:bs(e.settings.inTangents,Array),outTangents:bs(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Xl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Wl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Gl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new ql(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Ks:t=this.InterpolantFactoryMethodDiscrete;break;case Zs:t=this.InterpolantFactoryMethodLinear;break;case bl:t=this.InterpolantFactoryMethodSmooth;break;case eh:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return ze("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ks;case this.InterpolantFactoryMethodLinear:return Zs;case this.InterpolantFactoryMethodSmooth:return bl;case this.InterpolantFactoryMethodBezier:return eh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;wl(this.settings)&&(Gf(this.settings.inTangents,e),Gf(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(qe("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(qe("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){qe("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){qe("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&P0(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){qe("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===bl,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(s)l=!0;else{let h=o*n,d=h-n,f=h+n;for(let x=0;x!==n;++x){let y=t[h+x];if(y!==t[d+x]||y!==t[f+x]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let h=o*n,d=a*n;for(let f=0;f!==n;++f)t[d+f]=t[h+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,wl(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Gf(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}On.prototype.ValueTypeName="";On.prototype.TimeBufferType=Float32Array;On.prototype.ValueBufferType=Float32Array;On.prototype.DefaultInterpolation=Zs;var is=class extends On{constructor(e,t,n){super(e,t,n)}};is.prototype.ValueTypeName="bool";is.prototype.ValueBufferType=Array;is.prototype.DefaultInterpolation=Ks;is.prototype.InterpolantFactoryMethodLinear=void 0;is.prototype.InterpolantFactoryMethodSmooth=void 0;var no=class extends On{constructor(e,t,n,s){super(e,t,n,s)}};no.prototype.ValueTypeName="color";var ss=class extends On{constructor(e,t,n,s){super(e,t,n,s)}};ss.prototype.ValueTypeName="number";var Yl=class extends Di{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),c=e*o;for(let u=c+o;c!==u;c+=4)Pn.slerpFlat(r,0,a,c-o,a,c,l);return r}},rs=class extends On{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Yl(this.times,this.values,this.getValueSize(),e)}};rs.prototype.ValueTypeName="quaternion";rs.prototype.InterpolantFactoryMethodSmooth=void 0;var as=class extends On{constructor(e,t,n){super(e,t,n)}};as.prototype.ValueTypeName="string";as.prototype.ValueBufferType=Array;as.prototype.DefaultInterpolation=Ks;as.prototype.InterpolantFactoryMethodLinear=void 0;as.prototype.InterpolantFactoryMethodSmooth=void 0;var As=class extends On{constructor(e,t,n,s){super(e,t,n,s)}};As.prototype.ValueTypeName="vector";var io=class{constructor(e="",t=-1,n=[],s=Mp){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=xi(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(Ag(n[a]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,a=n.length;r!==a;++r)t.push(On.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);let u=Sg(l);l=Vf(l,1,u),c=Vf(c,1,u),!s&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new ss(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){let c=e[o],u=c.name.match(r);if(u&&u.length>1){let h=u[1],d=s[h];d||(s[h]=d=[]),d.push(c)}}let a=[];for(let o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],t,n));return a}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function Tg(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ss;case"vector":case"vector2":case"vector3":case"vector4":return As;case"color":return no;case"quaternion":return rs;case"bool":case"boolean":return is;case"string":return as}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function Ag(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=Tg(i.type);if(i.times===void 0){let n=[],s=[];bg(i.keys,n,s,"value"),i.times=n,i.values=s}let t;return e.parse!==void 0?t=e.parse(i):t=new e(i.name,i.times,i.values,i.interpolation),wl(i.settings)&&(t.settings={inTangents:bs(i.settings.inTangents,Float32Array),outTangents:bs(i.settings.outTangents,Float32Array)}),t}var Ci={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(Wf(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!Wf(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function Wf(i){try{let e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var $l=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){let h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){let f=c[h],x=c[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return x}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Bp=new $l,Ui=class{constructor(e){this.manager=e!==void 0?e:Bp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Ui.DEFAULT_MATERIAL_NAME="__DEFAULT";var Zi={},rh=class extends Error{constructor(e,t){super(e),this.response=t}},ea=class extends Ui{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Ci.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(Zi[e]!==void 0){Zi[e].push({onLoad:t,onProgress:n,onError:s});return}Zi[e]=[],Zi[e].push({onLoad:t,onProgress:n,onError:s});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&ze("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let u=Zi[e],h=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,x=f!==0,y=0,m=new ReadableStream({start(p){M();function M(){h.read().then(({done:C,value:v})=>{if(C)p.close();else{y+=v.byteLength;let E=new ProgressEvent("progress",{lengthComputable:x,loaded:y,total:f});for(let S=0,T=u.length;S<T;S++){let g=u[S];g.onProgress&&g.onProgress(E)}p.enqueue(v),M()}},C=>{p.error(C)})}}});return new Response(m)}else throw new rh(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return c.json();default:if(o==="")return c.text();{let h=/charset="?([^;"\s]*)"?/i.exec(o),d=h&&h[1]?h[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(x=>f.decode(x))}}}).then(c=>{Ci.add(`file:${e}`,c);let u=Zi[e];delete Zi[e];for(let h=0,d=u.length;h<d;h++){let f=u[h];f.onLoad&&f.onLoad(c)}}).catch(c=>{let u=Zi[e];if(u===void 0)throw this.manager.itemError(e),c;delete Zi[e];for(let h=0,d=u.length;h<d;h++){let f=u[h];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Or=new WeakMap,Kl=class extends Ui{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=Ci.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let h=Or.get(a);h===void 0&&(h=[],Or.set(a,h)),h.push({onLoad:t,onError:s})}return a}let o=Wr("img");function l(){u(),t&&t(this);let h=Or.get(this)||[];for(let d=0;d<h.length;d++){let f=h[d];f.onLoad&&f.onLoad(this)}Or.delete(this),r.manager.itemEnd(e)}function c(h){u(),s&&s(h),Ci.remove(`image:${e}`);let d=Or.get(this)||[];for(let f=0;f<d.length;f++){let x=d[f];x.onError&&x.onError(h)}Or.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Ci.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}};var so=class extends Ui{constructor(e){super(e)}load(e,t,n,s){let r=new Yt,a=new Kl(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},Rs=class extends It{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ce(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},ro=class extends Rs{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(It.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ce(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Ju=new Je,Xf=new L,qf=new L,ta=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ae(512,512),this.mapType=Bn,this.map=null,this.mapPass=null,this.matrix=new Je,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Jr,this._frameExtents=new Ae(1,1),this._viewportCount=1,this._viewports=[new Ct(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Xf.setFromMatrixPosition(e.matrixWorld),t.position.copy(Xf),qf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(qf),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){Ju.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Ju,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===Gr||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(Ju)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Ml=new L,Sl=new Pn,Ri=new L,ao=class extends It{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Je,this.projectionMatrix=new Je,this.projectionMatrixInverse=new Je,this.coordinateSystem=gi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ml,Sl,Ri),Ri.x===1&&Ri.y===1&&Ri.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ml,Sl,Ri.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Ml,Sl,Ri),Ri.x===1&&Ri.y===1&&Ri.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ml,Sl,Ri.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ss=new L,Yf=new Ae,$f=new Ae,Wt=class extends ao{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Js*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Ha*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Js*2*Math.atan(Math.tan(Ha*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ss.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ss.x,Ss.y).multiplyScalar(-e/Ss.z),Ss.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ss.x,Ss.y).multiplyScalar(-e/Ss.z)}getViewSize(e,t){return this.getViewBounds(e,Yf,$f),t.subVectors($f,Yf)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Ha*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},ah=class extends ta{constructor(){super(new Wt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=Js*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},oo=class extends Rs{constructor(e,t,n=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(It.DEFAULT_UP),this.updateMatrix(),this.target=new It,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new ah}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},oh=class extends ta{constructor(){super(new Wt(90,1,.5,500)),this.isPointLightShadow=!0}},vi=class extends Rs{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new oh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Fi=class extends ao{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},lh=class extends ta{constructor(){super(new Fi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},si=class extends Rs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(It.DEFAULT_UP),this.updateMatrix(),this.target=new It,this.shadow=new lh}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},tr=class extends Rs{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var os=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var ju=new WeakMap,lo=class extends Ui{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&ze("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&ze("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=Ci.get(`image-bitmap:${e}`);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(c=>{ju.has(a)===!0?(s&&s(ju.get(a)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(c),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);return}let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Ci.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),ju.set(l,c),Ci.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});Ci.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Br=-90,kr=1,Zl=class extends It{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Wt(Br,kr,e,t);s.layers=this.layers,this.add(s);let r=new Wt(Br,kr,e,t);r.layers=this.layers,this.add(r);let a=new Wt(Br,kr,e,t);a.layers=this.layers,this.add(a);let o=new Wt(Br,kr,e,t);o.layers=this.layers,this.add(o);let l=new Wt(Br,kr,e,t);l.layers=this.layers,this.add(l);let c=new Wt(Br,kr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===gi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Gr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;let y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=y,e.setRenderTarget(n,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=x,n.texture.needsPMREMUpdate=!0}},Jl=class extends Wt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},nr=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=Rg.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function Rg(){this._document.hidden===!1&&this.reset()}var Ch="\\[\\]\\.:\\/",Cg=new RegExp("["+Ch+"]","g"),Ih="[^"+Ch+"]",Ig="[^"+Ch.replace("\\.","")+"]",Pg=/((?:WC+[\/:])*)/.source.replace("WC",Ih),Lg=/(WCOD+)?/.source.replace("WCOD",Ig),Ng=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ih),Dg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ih),Ug=new RegExp("^"+Pg+Lg+Ng+Dg+"$"),Fg=["material","materials","bones","map"],ch=class{constructor(e,t,n){let s=n||Ut.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Ut=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Cg,"")}static parseTrackName(e){let t=Ug.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Fg.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){ze("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){qe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){qe("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){qe("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){qe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){qe("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){qe("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){qe("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;qe("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){qe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){qe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ut.Composite=ch;Ut.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ut.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ut.prototype.GetterByBindingType=[Ut.prototype._getValue_direct,Ut.prototype._getValue_array,Ut.prototype._getValue_arrayElement,Ut.prototype._getValue_toArray];Ut.prototype.SetterByBindingTypeAndVersioning=[[Ut.prototype._setValue_direct,Ut.prototype._setValue_direct_setNeedsUpdate,Ut.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ut.prototype._setValue_array,Ut.prototype._setValue_array_setNeedsUpdate,Ut.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ut.prototype._setValue_arrayElement,Ut.prototype._setValue_arrayElement_setNeedsUpdate,Ut.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ut.prototype._setValue_fromArray,Ut.prototype._setValue_fromArray_setNeedsUpdate,Ut.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var IS=new Float32Array(1);var Kf=new Je,co=class{constructor(e,t,n=0,s=1/0){this.ray=new ws(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Yr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):qe("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Kf.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Kf),this}intersectObject(e,t=!0,n=[]){return uh(e,this,n,t),n.sort(Zf),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)uh(e[s],this,n,t);return n.sort(Zf),n}};function Zf(i,e){return i.distance-e.distance}function uh(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)uh(r[a],e,t,!0)}}var Fh=class Fh{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};Fh.prototype.isMatrix2=!0;var hh=Fh;function Ph(i,e,t,n){let s=Og(n);switch(t){case Sh:return i*e;case ac:return i*e/s.components*s.byteLength;case oc:return i*e/s.components*s.byteLength;case Ps:return i*e*2/s.components*s.byteLength;case lc:return i*e*2/s.components*s.byteLength;case bh:return i*e*3/s.components*s.byteLength;case qn:return i*e*4/s.components*s.byteLength;case cc:return i*e*4/s.components*s.byteLength;case _o:case vo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case yo:case Mo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case hc:case fc:return Math.max(i,16)*Math.max(e,8)/4;case uc:case dc:return Math.max(i,8)*Math.max(e,8)/2;case pc:case mc:case xc:case _c:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case gc:case So:case vc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case yc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Mc:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Sc:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case bc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Ec:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case wc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Tc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Ac:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Rc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Cc:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Ic:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Pc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Lc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Nc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Dc:case Uc:case Fc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Oc:case Bc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case bo:case kc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Og(i){switch(i){case Bn:case _h:return{byteLength:1,components:1};case ra:case vh:case hn:return{byteLength:2,components:1};case sc:case rc:return{byteLength:2,components:4};case Si:case ic:case Xn:return{byteLength:4,components:1};case yh:case Mh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?ze("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function am(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function kg(i){let e=new WeakMap;function t(o,l){let c=o.array,u=o.usage,h=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,u),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,l,c){let u=l.array,h=l.updateRanges;if(i.bindBuffer(c,o),h.length===0)i.bufferSubData(c,0,u);else{h.sort((f,x)=>f.start-x.start);let d=0;for(let f=1;f<h.length;f++){let x=h[d],y=h[f];y.start<=x.start+x.count+1?x.count=Math.max(x.count,y.start+y.count-x.start):(++d,h[d]=y)}h.length=d+1;for(let f=0,x=h.length;f<x;f++){let y=h[f];i.bufferSubData(c,y.start*u.BYTES_PER_ELEMENT,u,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Hg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,zg=`#ifdef USE_ALPHAHASH
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
#endif`,Vg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Gg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Wg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Xg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,qg=`#ifdef USE_AOMAP
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
#endif`,Yg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,$g=`#ifdef USE_BATCHING
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
#endif`,Kg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Zg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Jg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,jg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Qg=`#ifdef USE_IRIDESCENCE
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
#endif`,ex=`#ifdef USE_BUMPMAP
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
#endif`,tx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,nx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ix=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,sx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,rx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,ax=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,ox=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,lx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,cx=`#define PI 3.141592653589793
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
} // validated`,ux=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,hx=`vec3 transformedNormal = objectNormal;
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
#endif`,dx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,fx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,px=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,mx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,gx="gl_FragColor = linearToOutputTexel( gl_FragColor );",xx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,_x=`#ifdef USE_ENVMAP
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
#endif`,vx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,yx=`#ifdef USE_ENVMAP
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
#endif`,Mx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Sx=`#ifdef USE_ENVMAP
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
#endif`,bx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ex=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,wx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Tx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ax=`#ifdef USE_GRADIENTMAP
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
}`,Rx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Cx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ix=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Px=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Lx=`#ifdef USE_ENVMAP
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
#endif`,Nx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Dx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ux=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Fx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ox=`PhysicalMaterial material;
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
#endif`,Bx=`uniform sampler2D dfgLUT;
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
}`,kx=`
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
#endif`,Hx=`#if defined( RE_IndirectDiffuse )
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
#endif`,zx=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Vx=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Gx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Wx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Xx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Yx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,$x=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Kx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Zx=`#if defined( USE_POINTS_UV )
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
#endif`,Jx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,jx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Qx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,e_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,t_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,n_=`#ifdef USE_MORPHTARGETS
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
#endif`,i_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,s_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,r_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,a_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,o_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,l_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,c_=`#ifdef USE_NORMALMAP
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
#endif`,u_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,h_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,d_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,f_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,p_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,m_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,g_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,x_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,__=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,v_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,y_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,M_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,S_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,b_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,E_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,w_=`float getShadowMask() {
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
}`,T_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,A_=`#ifdef USE_SKINNING
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
#endif`,R_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,C_=`#ifdef USE_SKINNING
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
#endif`,I_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,P_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,L_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,N_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,D_=`#ifdef USE_TRANSMISSION
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
#endif`,U_=`#ifdef USE_TRANSMISSION
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
#endif`,F_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,O_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,B_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,k_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,H_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,z_=`uniform sampler2D t2D;
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
}`,V_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,G_=`#ifdef ENVMAP_TYPE_CUBE
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
}`,W_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,X_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,q_=`#include <common>
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
}`,Y_=`#if DEPTH_PACKING == 3200
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
}`,$_=`#define DISTANCE
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
}`,K_=`#define DISTANCE
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
}`,Z_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,J_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,j_=`uniform float scale;
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
}`,Q_=`uniform vec3 diffuse;
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
}`,ev=`#include <common>
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
}`,tv=`uniform vec3 diffuse;
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
}`,nv=`#define LAMBERT
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
}`,iv=`#define LAMBERT
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
}`,sv=`#define MATCAP
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
}`,rv=`#define MATCAP
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
}`,av=`#define NORMAL
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
}`,ov=`#define NORMAL
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
}`,lv=`#define PHONG
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
}`,cv=`#define PHONG
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
}`,uv=`#define STANDARD
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
}`,hv=`#define STANDARD
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
}`,dv=`#define TOON
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
}`,fv=`#define TOON
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
}`,pv=`uniform float size;
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
}`,mv=`uniform vec3 diffuse;
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
}`,gv=`#include <common>
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
}`,xv=`uniform vec3 color;
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
}`,_v=`uniform float rotation;
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
}`,vv=`uniform vec3 diffuse;
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
}`,ct={alphahash_fragment:Hg,alphahash_pars_fragment:zg,alphamap_fragment:Vg,alphamap_pars_fragment:Gg,alphatest_fragment:Wg,alphatest_pars_fragment:Xg,aomap_fragment:qg,aomap_pars_fragment:Yg,batching_pars_vertex:$g,batching_vertex:Kg,begin_vertex:Zg,beginnormal_vertex:Jg,bsdfs:jg,iridescence_fragment:Qg,bumpmap_pars_fragment:ex,clipping_planes_fragment:tx,clipping_planes_pars_fragment:nx,clipping_planes_pars_vertex:ix,clipping_planes_vertex:sx,color_fragment:rx,color_pars_fragment:ax,color_pars_vertex:ox,color_vertex:lx,common:cx,cube_uv_reflection_fragment:ux,defaultnormal_vertex:hx,displacementmap_pars_vertex:dx,displacementmap_vertex:fx,emissivemap_fragment:px,emissivemap_pars_fragment:mx,colorspace_fragment:gx,colorspace_pars_fragment:xx,envmap_fragment:_x,envmap_common_pars_fragment:vx,envmap_pars_fragment:yx,envmap_pars_vertex:Mx,envmap_physical_pars_fragment:Lx,envmap_vertex:Sx,fog_vertex:bx,fog_pars_vertex:Ex,fog_fragment:wx,fog_pars_fragment:Tx,gradientmap_pars_fragment:Ax,lightmap_pars_fragment:Rx,lights_lambert_fragment:Cx,lights_lambert_pars_fragment:Ix,lights_pars_begin:Px,lights_toon_fragment:Nx,lights_toon_pars_fragment:Dx,lights_phong_fragment:Ux,lights_phong_pars_fragment:Fx,lights_physical_fragment:Ox,lights_physical_pars_fragment:Bx,lights_fragment_begin:kx,lights_fragment_maps:Hx,lights_fragment_end:zx,lightprobes_pars_fragment:Vx,logdepthbuf_fragment:Gx,logdepthbuf_pars_fragment:Wx,logdepthbuf_pars_vertex:Xx,logdepthbuf_vertex:qx,map_fragment:Yx,map_pars_fragment:$x,map_particle_fragment:Kx,map_particle_pars_fragment:Zx,metalnessmap_fragment:Jx,metalnessmap_pars_fragment:jx,morphinstance_vertex:Qx,morphcolor_vertex:e_,morphnormal_vertex:t_,morphtarget_pars_vertex:n_,morphtarget_vertex:i_,normal_fragment_begin:s_,normal_fragment_maps:r_,normal_pars_fragment:a_,normal_pars_vertex:o_,normal_vertex:l_,normalmap_pars_fragment:c_,clearcoat_normal_fragment_begin:u_,clearcoat_normal_fragment_maps:h_,clearcoat_pars_fragment:d_,iridescence_pars_fragment:f_,opaque_fragment:p_,packing:m_,premultiplied_alpha_fragment:g_,project_vertex:x_,dithering_fragment:__,dithering_pars_fragment:v_,roughnessmap_fragment:y_,roughnessmap_pars_fragment:M_,shadowmap_pars_fragment:S_,shadowmap_pars_vertex:b_,shadowmap_vertex:E_,shadowmask_pars_fragment:w_,skinbase_vertex:T_,skinning_pars_vertex:A_,skinning_vertex:R_,skinnormal_vertex:C_,specularmap_fragment:I_,specularmap_pars_fragment:P_,tonemapping_fragment:L_,tonemapping_pars_fragment:N_,transmission_fragment:D_,transmission_pars_fragment:U_,uv_pars_fragment:F_,uv_pars_vertex:O_,uv_vertex:B_,worldpos_vertex:k_,background_vert:H_,background_frag:z_,backgroundCube_vert:V_,backgroundCube_frag:G_,cube_vert:W_,cube_frag:X_,depth_vert:q_,depth_frag:Y_,distance_vert:$_,distance_frag:K_,equirect_vert:Z_,equirect_frag:J_,linedashed_vert:j_,linedashed_frag:Q_,meshbasic_vert:ev,meshbasic_frag:tv,meshlambert_vert:nv,meshlambert_frag:iv,meshmatcap_vert:sv,meshmatcap_frag:rv,meshnormal_vert:av,meshnormal_frag:ov,meshphong_vert:lv,meshphong_frag:cv,meshphysical_vert:uv,meshphysical_frag:hv,meshtoon_vert:dv,meshtoon_frag:fv,points_vert:pv,points_frag:mv,shadow_vert:gv,shadow_frag:xv,sprite_vert:_v,sprite_frag:vv},Re={common:{diffuse:{value:new ce(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new je}},envmap:{envMap:{value:null},envMapRotation:{value:new je},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new je},normalScale:{value:new Ae(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ce(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new L},probesMax:{value:new L},probesResolution:{value:new L}},points:{diffuse:{value:new ce(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0},uvTransform:{value:new je}},sprite:{diffuse:{value:new ce(16777215)},opacity:{value:1},center:{value:new Ae(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}}},ki={basic:{uniforms:Tn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.fog]),vertexShader:ct.meshbasic_vert,fragmentShader:ct.meshbasic_frag},lambert:{uniforms:Tn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new ce(0)},envMapIntensity:{value:1}}]),vertexShader:ct.meshlambert_vert,fragmentShader:ct.meshlambert_frag},phong:{uniforms:Tn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new ce(0)},specular:{value:new ce(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ct.meshphong_vert,fragmentShader:ct.meshphong_frag},standard:{uniforms:Tn([Re.common,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.roughnessmap,Re.metalnessmap,Re.fog,Re.lights,{emissive:{value:new ce(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag},toon:{uniforms:Tn([Re.common,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.gradientmap,Re.fog,Re.lights,{emissive:{value:new ce(0)}}]),vertexShader:ct.meshtoon_vert,fragmentShader:ct.meshtoon_frag},matcap:{uniforms:Tn([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,{matcap:{value:null}}]),vertexShader:ct.meshmatcap_vert,fragmentShader:ct.meshmatcap_frag},points:{uniforms:Tn([Re.points,Re.fog]),vertexShader:ct.points_vert,fragmentShader:ct.points_frag},dashed:{uniforms:Tn([Re.common,Re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ct.linedashed_vert,fragmentShader:ct.linedashed_frag},depth:{uniforms:Tn([Re.common,Re.displacementmap]),vertexShader:ct.depth_vert,fragmentShader:ct.depth_frag},normal:{uniforms:Tn([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,{opacity:{value:1}}]),vertexShader:ct.meshnormal_vert,fragmentShader:ct.meshnormal_frag},sprite:{uniforms:Tn([Re.sprite,Re.fog]),vertexShader:ct.sprite_vert,fragmentShader:ct.sprite_frag},background:{uniforms:{uvTransform:{value:new je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ct.background_vert,fragmentShader:ct.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new je}},vertexShader:ct.backgroundCube_vert,fragmentShader:ct.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ct.cube_vert,fragmentShader:ct.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ct.equirect_vert,fragmentShader:ct.equirect_frag},distance:{uniforms:Tn([Re.common,Re.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ct.distance_vert,fragmentShader:ct.distance_frag},shadow:{uniforms:Tn([Re.lights,Re.fog,{color:{value:new ce(0)},opacity:{value:1}}]),vertexShader:ct.shadow_vert,fragmentShader:ct.shadow_frag}};ki.physical={uniforms:Tn([ki.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new je},clearcoatNormalScale:{value:new Ae(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new je},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new je},sheen:{value:0},sheenColor:{value:new ce(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new je},transmissionSamplerSize:{value:new Ae},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new je},attenuationDistance:{value:0},attenuationColor:{value:new ce(0)},specularColor:{value:new ce(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new je},anisotropyVector:{value:new Ae},anisotropyMap:{value:null},anisotropyMapTransform:{value:new je}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag};var Vc={r:0,b:0,g:0},yv=new Je,om=new je;om.set(-1,0,0,0,1,0,0,0,1);function Mv(i,e,t,n,s,r){let a=new ce(0),o=s===!0?0:1,l,c,u=null,h=0,d=null;function f(M){let C=M.isScene===!0?M.background:null;if(C&&C.isTexture){let v=M.backgroundBlurriness>0;C=e.get(C,v)}return C}function x(M){let C=!1,v=f(M);v===null?m(a,o):v&&v.isColor&&(m(v,1),C=!0);let E=i.xr.getEnvironmentBlendMode();E==="additive"?t.buffers.color.setClear(0,0,0,1,r):E==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||C)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function y(M,C){let v=f(C);v&&(v.isCubeTexture||v.mapping===xo)?(c===void 0&&(c=new ue(new _n(1,1,1),new xt({name:"BackgroundCubeMaterial",uniforms:lr(ki.backgroundCube.uniforms),vertexShader:ki.backgroundCube.vertexShader,fragmentShader:ki.backgroundCube.fragmentShader,side:Ht,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,S,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(yv.makeRotationFromEuler(C.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(om),c.material.toneMapped=at.getTransfer(v.colorSpace)!==St,(u!==v||h!==v.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,u=v,h=v.version,d=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new ue(new ns(2,2),new xt({name:"BackgroundMaterial",uniforms:lr(ki.background.uniforms),vertexShader:ki.background.vertexShader,fragmentShader:ki.background.fragmentShader,side:Oi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,l.material.toneMapped=at.getTransfer(v.colorSpace)!==St,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||h!==v.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,u=v,h=v.version,d=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function m(M,C){M.getRGB(Vc,Rh(i)),t.buffers.color.setClear(Vc.r,Vc.g,Vc.b,C,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,C=1){a.set(M),o=C,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(M){o=M,m(a,o)},render:x,addToRenderList:y,dispose:p}}function Sv(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,a=!1;function o(B,A,V,w,N){let k=!1,z=h(B,w,V,A);r!==z&&(r=z,c(r.object)),k=f(B,w,V,N),k&&x(B,w,V,N),N!==null&&e.update(N,i.ELEMENT_ARRAY_BUFFER),(k||a)&&(a=!1,v(B,A,V,w),N!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(N).buffer))}function l(){return i.createVertexArray()}function c(B){return i.bindVertexArray(B)}function u(B){return i.deleteVertexArray(B)}function h(B,A,V,w){let N=w.wireframe===!0,k=n[A.id];k===void 0&&(k={},n[A.id]=k);let z=B.isInstancedMesh===!0?B.id:0,O=k[z];O===void 0&&(O={},k[z]=O);let I=O[V.id];I===void 0&&(I={},O[V.id]=I);let U=I[N];return U===void 0&&(U=d(l()),I[N]=U),U}function d(B){let A=[],V=[],w=[];for(let N=0;N<t;N++)A[N]=0,V[N]=0,w[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:A,enabledAttributes:V,attributeDivisors:w,object:B,attributes:{},index:null}}function f(B,A,V,w){let N=r.attributes,k=A.attributes,z=0,O=V.getAttributes();for(let I in O)if(O[I].location>=0){let $=N[I],ye=k[I];if(ye===void 0&&(I==="instanceMatrix"&&B.instanceMatrix&&(ye=B.instanceMatrix),I==="instanceColor"&&B.instanceColor&&(ye=B.instanceColor)),$===void 0||$.attribute!==ye||ye&&$.data!==ye.data)return!0;z++}return r.attributesNum!==z||r.index!==w}function x(B,A,V,w){let N={},k=A.attributes,z=0,O=V.getAttributes();for(let I in O)if(O[I].location>=0){let $=k[I];$===void 0&&(I==="instanceMatrix"&&B.instanceMatrix&&($=B.instanceMatrix),I==="instanceColor"&&B.instanceColor&&($=B.instanceColor));let ye={};ye.attribute=$,$&&$.data&&(ye.data=$.data),N[I]=ye,z++}r.attributes=N,r.attributesNum=z,r.index=w}function y(){let B=r.newAttributes;for(let A=0,V=B.length;A<V;A++)B[A]=0}function m(B){p(B,0)}function p(B,A){let V=r.newAttributes,w=r.enabledAttributes,N=r.attributeDivisors;V[B]=1,w[B]===0&&(i.enableVertexAttribArray(B),w[B]=1),N[B]!==A&&(i.vertexAttribDivisor(B,A),N[B]=A)}function M(){let B=r.newAttributes,A=r.enabledAttributes;for(let V=0,w=A.length;V<w;V++)A[V]!==B[V]&&(i.disableVertexAttribArray(V),A[V]=0)}function C(B,A,V,w,N,k,z){z===!0?i.vertexAttribIPointer(B,A,V,N,k):i.vertexAttribPointer(B,A,V,w,N,k)}function v(B,A,V,w){y();let N=w.attributes,k=V.getAttributes(),z=A.defaultAttributeValues;for(let O in k){let I=k[O];if(I.location>=0){let U=N[O];if(U===void 0&&(O==="instanceMatrix"&&B.instanceMatrix&&(U=B.instanceMatrix),O==="instanceColor"&&B.instanceColor&&(U=B.instanceColor)),U!==void 0){let $=U.normalized,ye=U.itemSize,le=e.get(U);if(le===void 0)continue;let Ye=le.buffer,ie=le.type,Pe=le.bytesPerElement,j=ie===i.INT||ie===i.UNSIGNED_INT||U.gpuType===ic;if(U.isInterleavedBufferAttribute){let Q=U.data,Se=Q.stride,se=U.offset;if(Q.isInstancedInterleavedBuffer){for(let fe=0;fe<I.locationSize;fe++)p(I.location+fe,Q.meshPerAttribute);B.isInstancedMesh!==!0&&w._maxInstanceCount===void 0&&(w._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let fe=0;fe<I.locationSize;fe++)m(I.location+fe);i.bindBuffer(i.ARRAY_BUFFER,Ye);for(let fe=0;fe<I.locationSize;fe++)C(I.location+fe,ye/I.locationSize,ie,$,Se*Pe,(se+ye/I.locationSize*fe)*Pe,j)}else{if(U.isInstancedBufferAttribute){for(let Q=0;Q<I.locationSize;Q++)p(I.location+Q,U.meshPerAttribute);B.isInstancedMesh!==!0&&w._maxInstanceCount===void 0&&(w._maxInstanceCount=U.meshPerAttribute*U.count)}else for(let Q=0;Q<I.locationSize;Q++)m(I.location+Q);i.bindBuffer(i.ARRAY_BUFFER,Ye);for(let Q=0;Q<I.locationSize;Q++)C(I.location+Q,ye/I.locationSize,ie,$,ye*Pe,ye/I.locationSize*Q*Pe,j)}}else if(z!==void 0){let $=z[O];if($!==void 0)switch($.length){case 2:i.vertexAttrib2fv(I.location,$);break;case 3:i.vertexAttrib3fv(I.location,$);break;case 4:i.vertexAttrib4fv(I.location,$);break;default:i.vertexAttrib1fv(I.location,$)}}}}M()}function E(){b();for(let B in n){let A=n[B];for(let V in A){let w=A[V];for(let N in w){let k=w[N];for(let z in k)u(k[z].object),delete k[z];delete w[N]}}delete n[B]}}function S(B){if(n[B.id]===void 0)return;let A=n[B.id];for(let V in A){let w=A[V];for(let N in w){let k=w[N];for(let z in k)u(k[z].object),delete k[z];delete w[N]}}delete n[B.id]}function T(B){for(let A in n){let V=n[A];for(let w in V){let N=V[w];if(N[B.id]===void 0)continue;let k=N[B.id];for(let z in k)u(k[z].object),delete k[z];delete N[B.id]}}}function g(B){for(let A in n){let V=n[A],w=B.isInstancedMesh===!0?B.id:0,N=V[w];if(N!==void 0){for(let k in N){let z=N[k];for(let O in z)u(z[O].object),delete z[O];delete N[k]}delete V[w],Object.keys(V).length===0&&delete n[A]}}}function b(){P(),a=!0,r!==s&&(r=s,c(r.object))}function P(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:b,resetDefaultState:P,dispose:E,releaseStatesOfGeometry:S,releaseStatesOfObject:g,releaseStatesOfProgram:T,initAttributes:y,enableAttribute:m,disableUnusedAttributes:M}}function bv(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,u){u!==0&&(i.drawArraysInstanced(n,l,c,u),t.update(c,n,u))}function o(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let d=0;for(let f=0;f<u;f++)d+=c[f];t.update(d,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Ev(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let T=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(T){return!(T!==qn&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(T){let g=T===hn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==Bn&&T!==Xn&&!g&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(ze("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let h=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&d===!1&&ze("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),C=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),E=i.getParameter(i.MAX_SAMPLES),S=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:x,maxTextureSize:y,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:M,maxVaryings:C,maxFragmentUniforms:v,maxSamples:E,samples:S}}function wv(i){let e=this,t=null,n=0,s=!1,r=!1,a=new pi,o=new je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){let f=h.length!==0||d||n!==0||s;return s=d,n=h.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){let x=h.clippingPlanes,y=h.clipIntersection,m=h.clipShadows,p=i.get(h);if(!s||x===null||x.length===0||r&&!m)r?u(null):c();else{let M=r?0:n,C=M*4,v=p.clippingState||null;l.value=v,v=u(x,d,C,f);for(let E=0;E!==C;++E)v[E]=t[E];p.clippingState=v,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,f,x){let y=h!==null?h.length:0,m=null;if(y!==0){if(m=l.value,x!==!0||m===null){let p=f+y*4,M=d.matrixWorldInverse;o.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let C=0,v=f;C!==y;++C,v+=4)a.copy(h[C]).applyMatrix4(M,o),a.normal.toArray(m,v),m[v+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}var ca=4,Tv=6,Av=20,Rv=256,To=new Fi,kp=new ce,Oh=null,Bh=0,kh=0,Hh=!1,Cv=new L,cr=new L,Ls=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=Cv}=r;Oh=this._renderer.getRenderTarget(),Bh=this._renderer.getActiveCubeFace(),kh=this._renderer.getActiveMipmapLevel(),Hh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Vp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=zp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Oh,Bh,kh),this._renderer.xr.enabled=Hh,e.scissorTest=!1,la(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Cs||e.mapping===ar?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Oh=this._renderer.getRenderTarget(),Bh=this._renderer.getActiveCubeFace(),kh=this._renderer.getActiveMipmapLevel(),Hh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:tn,minFilter:tn,generateMipmaps:!1,type:hn,format:qn,colorSpace:In,depthBuffer:!1},s=Hp(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Hp(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Iv(r)),this._blurMaterial=Lv(r,e,t),this._ggxMaterial=Pv(r,e,t)}return s}_compileMaterial(e){let t=new ue(new tt,e);this._renderer.compile(t,To)}_sceneToCubeUV(e,t,n,s,r){let l=new Wt(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(kp),h.toneMapping=yi,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ue(new _n,new Nt({name:"PMREM.Background",side:Ht,depthWrite:!1,depthTest:!1})));let y=this._backgroundBox,m=y.material,p=!1,M=e.background;M?M.isColor&&(m.color.copy(M),e.background=null,p=!0):(m.color.copy(kp),p=!0);for(let C=0;C<6;C++){let v=C%3;v===0?(l.up.set(0,c[C],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[C],r.y,r.z)):v===1?(l.up.set(0,0,c[C]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[C],r.z)):(l.up.set(0,c[C],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[C]));let E=this._cubeSize;la(s,v*E,C>2?E:0,E,E),h.setRenderTarget(s),p&&h.render(y,l),h.render(e,l)}h.toneMapping=f,h.autoClear=d,e.background=M}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===Cs||e.mapping===ar;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Vp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=zp());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;la(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,To)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let l=a.uniforms,c=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),h=Math.sqrt(c*c-u*u),d=c*1.25,f=h*d,{_lodMax:x}=this,y=this._sizeLods[n],m=3*y*(n>x-ca?n-x+ca:0),p=4*(this._cubeSize-y);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=x-t,la(r,m,p,3*y,2*y),s.setRenderTarget(r),s.render(o,To),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=x-n,la(e,m,p,3*y,2*y),s.setRenderTarget(e),s.render(o,To)}_blur(e,t,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,a),this._blurPass(r,e,n,n,a)}_blurPass(e,t,n,s,r){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let u=this._sizeLods[s],h=3*u*(s>this._lodMax-ca?s-this._lodMax+ca:0),d=4*(this._cubeSize-u);la(t,h,d,3*u,2*u),a.setRenderTarget(t),a.render(l,To)}};function Iv(i){let e=[],t=[],n=i,s=i-ca+1+Tv;for(let r=0;r<s;r++){let a=Math.pow(2,n);e.push(a);let o=1/(a-2),l=-o,c=1+o,u=[l,l,c,l,c,c,l,l,c,c,l,c],h=6,d=6,f=3,x=new Float32Array(f*d*h),y=new Float32Array(f*d*h);for(let p=0;p<h;p++){let M=p%3*2/3-1,C=p>2?0:-1,v=[M,C,0,M+2/3,C,0,M+2/3,C+1,0,M,C,0,M+2/3,C+1,0,M,C+1,0];x.set(v,f*d*p);for(let E=0;E<d;E++){let S=u[E*2]*2-1,T=u[E*2+1]*2-1;p===0?cr.set(1,T,S):p===1?cr.set(-S,1,-T):p===2?cr.set(-S,T,1):p===3?cr.set(-1,T,-S):p===4?cr.set(-S,-1,T):cr.set(S,T,-1),cr.toArray(y,(p*d+E)*f)}}let m=new tt;m.setAttribute("position",new ht(x,f)),m.setAttribute("outputDirection",new ht(y,f)),t.push(new ue(m,null)),n>ca&&n--}return{lodMeshes:t,sizeLods:e}}function Hp(i,e,t){let n=new Zt(i,e,t);return n.texture.mapping=xo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function la(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Pv(i,e,t){return new xt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Rv,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:qc(),fragmentShader:`

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
		`,blending:ri,depthTest:!1,depthWrite:!1})}function Lv(i,e,t){return new xt({name:"SphericalGaussianBlur",defines:{SAMPLES:Av,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:qc(),fragmentShader:`

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
		`,blending:ri,depthTest:!1,depthWrite:!1})}function zp(){return new xt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:qc(),fragmentShader:`

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
		`,blending:ri,depthTest:!1,depthWrite:!1})}function Vp(){return new xt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:qc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ri,depthTest:!1,depthWrite:!1})}function qc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Wc=class extends Zt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Ja(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new _n(5,5,5),r=new xt({name:"CubemapFromEquirect",uniforms:lr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ht,blending:ri});r.uniforms.tEquirect.value=t;let a=new ue(s,r),o=t.minFilter;return t.minFilter===Mi&&(t.minFilter=tn),new Zl(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}};function Nv(i){let e=new WeakMap,t=new WeakMap,n=null;function s(d,f=!1){return d==null?null:f?a(d):r(d)}function r(d){if(d&&d.isTexture){let f=d.mapping;if(f===ec||f===tc)if(e.has(d)){let x=e.get(d).texture;return o(x,d.mapping)}else{let x=d.image;if(x&&x.height>0){let y=new Wc(x.height);return y.fromEquirectangularTexture(i,d),e.set(d,y),d.addEventListener("dispose",c),o(y.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture){let f=d.mapping,x=f===ec||f===tc,y=f===Cs||f===ar;if(x||y){let m=t.get(d),p=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==p)return n===null&&(n=new Ls(i)),m=x?n.fromEquirectangular(d,m):n.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),m.texture;if(m!==void 0)return m.texture;{let M=d.image;return x&&M&&M.height>0||y&&M&&l(M)?(n===null&&(n=new Ls(i)),m=x?n.fromEquirectangular(d):n.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),d.addEventListener("dispose",u),m.texture):null}}}return d}function o(d,f){return f===ec?d.mapping=Cs:f===tc&&(d.mapping=ar),d}function l(d){let f=0,x=6;for(let y=0;y<x;y++)d[y]!==void 0&&f++;return f===x}function c(d){let f=d.target;f.removeEventListener("dispose",c);let x=e.get(f);x!==void 0&&(e.delete(f),x.dispose())}function u(d){let f=d.target;f.removeEventListener("dispose",u);let x=t.get(f);x!==void 0&&(t.delete(f),x.dispose())}function h(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:h}}function Dv(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&$s("WebGLRenderer: "+n+" extension not supported."),s}}}function Uv(i,e,t,n){let s={},r=new WeakMap;function a(h){let d=h.target;d.index!==null&&e.remove(d.index);for(let x in d.attributes)e.remove(d.attributes[x]);d.removeEventListener("dispose",a),delete s[d.id];let f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(h,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function l(h){let d=h.attributes;for(let f in d)e.update(d[f],i.ARRAY_BUFFER)}function c(h){let d=[],f=h.index,x=h.attributes.position,y=0;if(x===void 0)return;if(f!==null){let M=f.array;y=f.version;for(let C=0,v=M.length;C<v;C+=3){let E=M[C+0],S=M[C+1],T=M[C+2];d.push(E,S,S,T,T,E)}}else{let M=x.array;y=x.version;for(let C=0,v=M.length/3-1;C<v;C+=3){let E=C+0,S=C+1,T=C+2;d.push(E,S,S,T,T,E)}}let m=new(x.count>=65535?Ya:qa)(d,1);m.version=y;let p=r.get(h);p&&e.remove(p),r.set(h,m)}function u(h){let d=r.get(h);if(d){let f=h.index;f!==null&&d.version<f.version&&c(h)}else c(h);return r.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function Fv(i,e,t){let n;function s(h){n=h}let r,a;function o(h){r=h.type,a=h.bytesPerElement}function l(h,d){i.drawElements(n,d,r,h*a),t.update(d,n,1)}function c(h,d,f){f!==0&&(i.drawElementsInstanced(n,d,r,h*a,f),t.update(d,n,f))}function u(h,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,h,0,f);let y=0;for(let m=0;m<f;m++)y+=d[m];t.update(y,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function Ov(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:qe("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Bv(i,e,t){let n=new WeakMap,s=new Ct;function r(a,o,l){let c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0,d=n.get(o);if(d===void 0||d.count!==h){let b=function(){T.dispose(),n.delete(o),o.removeEventListener("dispose",b)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,y=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],M=o.morphAttributes.color||[],C=0;f===!0&&(C=1),x===!0&&(C=2),y===!0&&(C=3);let v=o.attributes.position.count*C,E=1;v>e.maxTextureSize&&(E=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let S=new Float32Array(v*E*4*h),T=new Wa(S,v,E,h);T.type=Xn,T.needsUpdate=!0;let g=C*4;for(let P=0;P<h;P++){let B=m[P],A=p[P],V=M[P],w=v*E*4*P;for(let N=0;N<B.count;N++){let k=N*g;f===!0&&(s.fromBufferAttribute(B,N),S[w+k+0]=s.x,S[w+k+1]=s.y,S[w+k+2]=s.z,S[w+k+3]=0),x===!0&&(s.fromBufferAttribute(A,N),S[w+k+4]=s.x,S[w+k+5]=s.y,S[w+k+6]=s.z,S[w+k+7]=0),y===!0&&(s.fromBufferAttribute(V,N),S[w+k+8]=s.x,S[w+k+9]=s.y,S[w+k+10]=s.z,S[w+k+11]=V.itemSize===4?s.w:1)}}d={count:h,texture:T,size:new Ae(v,E)},n.set(o,d),o.addEventListener("dispose",b)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let f=0;for(let y=0;y<c.length;y++)f+=c[y];let x=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",x),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function kv(i,e,t,n,s){let r=new WeakMap;function a(c){let u=s.render.frame,h=c.geometry,d=e.get(c,h);if(r.get(d)!==u&&(e.update(d),r.set(d,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==u&&(f.update(),r.set(f,u))}return d}function o(){r=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}var Hv={[uo]:"LINEAR_TONE_MAPPING",[ho]:"REINHARD_TONE_MAPPING",[fo]:"CINEON_TONE_MAPPING",[rr]:"ACES_FILMIC_TONE_MAPPING",[mo]:"AGX_TONE_MAPPING",[go]:"NEUTRAL_TONE_MAPPING",[po]:"CUSTOM_TONE_MAPPING"};function zv(i,e,t,n,s,r){let a=new Zt(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new tt;c.setAttribute("position",new et([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new et([0,2,0,0,2,0],2));let u=new Qr({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new ue(c,u),d=new Fi(-1,1,1,-1,0,1),f=null,x=null,y=!1,m,p=null,M=[],C=!1;this.setSize=function(v,E){a.setSize(v,E),o!==null&&o.setSize(v,E),l!==null&&l.setSize(v,E);for(let S=0;S<M.length;S++){let T=M[S];T.setSize&&T.setSize(v,E)}},this.setEffects=function(v){M=v,C=M.length>0&&M[0].isRenderPass===!0;let E=a.width,S=a.height;M.length>0&&o===null&&(o=new Zt(E,S,{type:hn,depthBuffer:!1,stencilBuffer:!1}),l=new Zt(E,S,{type:hn,depthBuffer:!1,stencilBuffer:!1}));for(let T=0;T<M.length;T++){let g=M[T];g.setSize&&g.setSize(E,S)}},this.begin=function(v,E){if(y||v.toneMapping===yi&&M.length===0)return!1;if(p=E,E!==null){let S=E.width,T=E.height;(a.width!==S||a.height!==T)&&this.setSize(S,T)}return C===!1&&v.setRenderTarget(a),m=v.toneMapping,v.toneMapping=yi,!0},this.hasRenderPass=function(){return C},this.end=function(v,E){v.toneMapping=m,y=!0;let S=a,T=o;for(let g=0;g<M.length;g++){let b=M[g];b.enabled!==!1&&(b.render(v,T,S,E),b.needsSwap!==!1&&(S=T,T=T===o?l:o))}if(f!==v.outputColorSpace||x!==v.toneMapping){f=v.outputColorSpace,x=v.toneMapping,u.defines={},at.getTransfer(f)===St&&(u.defines.SRGB_TRANSFER="");let g=Hv[x];g&&(u.defines[g]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=S.texture,v.setRenderTarget(p),v.render(h,d),p=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),u.dispose()}}var lm=new Yt,Gh=new Ts(1,1),cm=new Wa,um=new Ul,hm=new Ja,Gp=[],Wp=[],Xp=new Float32Array(16),qp=new Float32Array(9),Yp=new Float32Array(4);function ha(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Gp[s];if(r===void 0&&(r=new Float32Array(s),Gp[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function dn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function fn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Yc(i,e){let t=Wp[e];t===void 0&&(t=new Int32Array(e),Wp[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Vv(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Gv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dn(t,e))return;i.uniform2fv(this.addr,e),fn(t,e)}}function Wv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(dn(t,e))return;i.uniform3fv(this.addr,e),fn(t,e)}}function Xv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dn(t,e))return;i.uniform4fv(this.addr,e),fn(t,e)}}function qv(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(dn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),fn(t,e)}else{if(dn(t,n))return;Yp.set(n),i.uniformMatrix2fv(this.addr,!1,Yp),fn(t,n)}}function Yv(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(dn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),fn(t,e)}else{if(dn(t,n))return;qp.set(n),i.uniformMatrix3fv(this.addr,!1,qp),fn(t,n)}}function $v(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(dn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),fn(t,e)}else{if(dn(t,n))return;Xp.set(n),i.uniformMatrix4fv(this.addr,!1,Xp),fn(t,n)}}function Kv(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Zv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dn(t,e))return;i.uniform2iv(this.addr,e),fn(t,e)}}function Jv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dn(t,e))return;i.uniform3iv(this.addr,e),fn(t,e)}}function jv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dn(t,e))return;i.uniform4iv(this.addr,e),fn(t,e)}}function Qv(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function ey(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dn(t,e))return;i.uniform2uiv(this.addr,e),fn(t,e)}}function ty(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dn(t,e))return;i.uniform3uiv(this.addr,e),fn(t,e)}}function ny(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dn(t,e))return;i.uniform4uiv(this.addr,e),fn(t,e)}}function iy(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Gh.compareFunction=t.isReversedDepthBuffer()?zc:Hc,r=Gh):r=lm,t.setTexture2D(e||r,s)}function sy(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||um,s)}function ry(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||hm,s)}function ay(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||cm,s)}function oy(i){switch(i){case 5126:return Vv;case 35664:return Gv;case 35665:return Wv;case 35666:return Xv;case 35674:return qv;case 35675:return Yv;case 35676:return $v;case 5124:case 35670:return Kv;case 35667:case 35671:return Zv;case 35668:case 35672:return Jv;case 35669:case 35673:return jv;case 5125:return Qv;case 36294:return ey;case 36295:return ty;case 36296:return ny;case 35678:case 36198:case 36298:case 36306:case 35682:return iy;case 35679:case 36299:case 36307:return sy;case 35680:case 36300:case 36308:case 36293:return ry;case 36289:case 36303:case 36311:case 36292:return ay}}function ly(i,e){i.uniform1fv(this.addr,e)}function cy(i,e){let t=ha(e,this.size,2);i.uniform2fv(this.addr,t)}function uy(i,e){let t=ha(e,this.size,3);i.uniform3fv(this.addr,t)}function hy(i,e){let t=ha(e,this.size,4);i.uniform4fv(this.addr,t)}function dy(i,e){let t=ha(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function fy(i,e){let t=ha(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function py(i,e){let t=ha(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function my(i,e){i.uniform1iv(this.addr,e)}function gy(i,e){i.uniform2iv(this.addr,e)}function xy(i,e){i.uniform3iv(this.addr,e)}function _y(i,e){i.uniform4iv(this.addr,e)}function vy(i,e){i.uniform1uiv(this.addr,e)}function yy(i,e){i.uniform2uiv(this.addr,e)}function My(i,e){i.uniform3uiv(this.addr,e)}function Sy(i,e){i.uniform4uiv(this.addr,e)}function by(i,e,t){let n=this.cache,s=e.length,r=Yc(t,s);dn(n,r)||(i.uniform1iv(this.addr,r),fn(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Gh:a=lm;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function Ey(i,e,t){let n=this.cache,s=e.length,r=Yc(t,s);dn(n,r)||(i.uniform1iv(this.addr,r),fn(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||um,r[a])}function wy(i,e,t){let n=this.cache,s=e.length,r=Yc(t,s);dn(n,r)||(i.uniform1iv(this.addr,r),fn(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||hm,r[a])}function Ty(i,e,t){let n=this.cache,s=e.length,r=Yc(t,s);dn(n,r)||(i.uniform1iv(this.addr,r),fn(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||cm,r[a])}function Ay(i){switch(i){case 5126:return ly;case 35664:return cy;case 35665:return uy;case 35666:return hy;case 35674:return dy;case 35675:return fy;case 35676:return py;case 5124:case 35670:return my;case 35667:case 35671:return gy;case 35668:case 35672:return xy;case 35669:case 35673:return _y;case 5125:return vy;case 36294:return yy;case 36295:return My;case 36296:return Sy;case 35678:case 36198:case 36298:case 36306:case 35682:return by;case 35679:case 36299:case 36307:return Ey;case 35680:case 36300:case 36308:case 36293:return wy;case 36289:case 36303:case 36311:case 36292:return Ty}}var Wh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=oy(t.type)}},Xh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Ay(t.type)}},qh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},zh=/(\w+)(\])?(\[|\.)?/g;function $p(i,e){i.seq.push(e),i.map[e.id]=e}function Ry(i,e,t){let n=i.name,s=n.length;for(zh.lastIndex=0;;){let r=zh.exec(n),a=zh.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){$p(t,c===void 0?new Wh(o,i,e):new Xh(o,i,e));break}else{let h=t.map[o];h===void 0&&(h=new qh(o),$p(t,h)),t=h}}}var ua=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);Ry(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function Kp(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var Cy=37297,Iy=0;function Py(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var Zp=new je;function Ly(i){at._getMatrix(Zp,at.workingColorSpace,i);let e=`mat3( ${Zp.elements.map(t=>t.toFixed(4))} )`;switch(at.getTransfer(i)){case Va:return[e,"LinearTransferOETF"];case St:return[e,"sRGBTransferOETF"];default:return ze("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Jp(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+Py(i.getShaderSource(e),o)}else return r}function Ny(i,e){let t=Ly(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var Dy={[uo]:"Linear",[ho]:"Reinhard",[fo]:"Cineon",[rr]:"ACESFilmic",[mo]:"AgX",[go]:"Neutral",[po]:"Custom"};function Uy(i,e){let t=Dy[e];return t===void 0?(ze("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Gc=new L;function Fy(){at.getLuminanceCoefficients(Gc);let i=Gc.x.toFixed(4),e=Gc.y.toFixed(4),t=Gc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Oy(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ro).join(`
`)}function By(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function ky(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Ro(i){return i!==""}function jp(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Qp(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Hy=/^[ \t]*#include +<([\w\d./]+)>/gm;function Yh(i){return i.replace(Hy,Vy)}var zy=new Map;function Vy(i,e){let t=ct[e];if(t===void 0){let n=zy.get(e);if(n!==void 0)t=ct[n],ze('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Yh(t)}var Gy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function em(i){return i.replace(Gy,Wy)}function Wy(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function tm(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}var Xy={[ir]:"SHADOWMAP_TYPE_PCF",[na]:"SHADOWMAP_TYPE_VSM"};function qy(i){return Xy[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Yy={[Cs]:"ENVMAP_TYPE_CUBE",[ar]:"ENVMAP_TYPE_CUBE",[xo]:"ENVMAP_TYPE_CUBE_UV"};function $y(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Yy[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var Ky={[ar]:"ENVMAP_MODE_REFRACTION"};function Zy(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Ky[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Jy={[Ql]:"ENVMAP_BLENDING_MULTIPLY",[_p]:"ENVMAP_BLENDING_MIX",[vp]:"ENVMAP_BLENDING_ADD"};function jy(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Jy[i.combine]||"ENVMAP_BLENDING_NONE"}function Qy(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function eM(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=qy(t),c=$y(t),u=Zy(t),h=jy(t),d=Qy(t),f=Oy(t),x=By(r),y=s.createProgram(),m,p,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Ro).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Ro).join(`
`),p.length>0&&(p+=`
`)):(m=[tm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ro).join(`
`),p=[tm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==yi?"#define TONE_MAPPING":"",t.toneMapping!==yi?ct.tonemapping_pars_fragment:"",t.toneMapping!==yi?Uy("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ct.colorspace_pars_fragment,Ny("linearToOutputTexel",t.outputColorSpace),Fy(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ro).join(`
`)),a=Yh(a),a=jp(a,t),a=Qp(a,t),o=Yh(o),o=jp(o,t),o=Qp(o,t),a=em(a),o=em(o),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Th?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Th?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let C=M+m+a,v=M+p+o,E=Kp(s,s.VERTEX_SHADER,C),S=Kp(s,s.FRAGMENT_SHADER,v);s.attachShader(y,E),s.attachShader(y,S),t.index0AttributeName!==void 0?s.bindAttribLocation(y,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function T(B){if(i.debug.checkShaderErrors){let A=s.getProgramInfoLog(y)||"",V=s.getShaderInfoLog(E)||"",w=s.getShaderInfoLog(S)||"",N=A.trim(),k=V.trim(),z=w.trim(),O=!0,I=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(O=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,y,E,S);else{let U=Jp(s,E,"vertex"),$=Jp(s,S,"fragment");qe("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+N+`
`+U+`
`+$)}else N!==""?ze("WebGLProgram: Program Info Log:",N):(k===""||z==="")&&(I=!1);I&&(B.diagnostics={runnable:O,programLog:N,vertexShader:{log:k,prefix:m},fragmentShader:{log:z,prefix:p}})}s.deleteShader(E),s.deleteShader(S),g=new ua(s,y),b=ky(s,y)}let g;this.getUniforms=function(){return g===void 0&&T(this),g};let b;this.getAttributes=function(){return b===void 0&&T(this),b};let P=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=s.getProgramParameter(y,Cy)),P},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Iy++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=E,this.fragmentShader=S,this}var tM=0,$h=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Kh(e),t.set(e,n)),n}},Kh=class{constructor(e){this.id=tM++,this.code=e,this.usedTimes=0}};function nM(i){return i===Ps||i===So||i===bo}function iM(i,e,t,n,s,r){let a=new Yr,o=new $h,l=new Set,c=[],u=new Map,h=n.logarithmicDepthBuffer,d=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(g){return l.add(g),g===0?"uv":`uv${g}`}function y(g,b,P,B,A,V){let w=B.fog,N=A.geometry,k=g.isMeshStandardMaterial||g.isMeshLambertMaterial||g.isMeshPhongMaterial?B.environment:null,z=g.isMeshStandardMaterial||g.isMeshLambertMaterial&&!g.envMap||g.isMeshPhongMaterial&&!g.envMap,O=e.get(g.envMap||k,z),I=O&&O.mapping===xo?O.image.height:null,U=f[g.type];g.precision!==null&&(d=n.getMaxPrecision(g.precision),d!==g.precision&&ze("WebGLProgram.getParameters:",g.precision,"not supported, using",d,"instead."));let $=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,ye=$!==void 0?$.length:0,le=0;N.morphAttributes.position!==void 0&&(le=1),N.morphAttributes.normal!==void 0&&(le=2),N.morphAttributes.color!==void 0&&(le=3);let Ye,ie,Pe,j;if(U){let Pt=ki[U];Ye=Pt.vertexShader,ie=Pt.fragmentShader}else{Ye=g.vertexShader,ie=g.fragmentShader;let Pt=o.getVertexShaderStage(g),We=o.getFragmentShaderStage(g);o.update(g,Pt,We),Pe=Pt.id,j=We.id}let Q=i.getRenderTarget(),Se=i.state.buffers.depth.getReversed(),se=A.isInstancedMesh===!0,fe=A.isBatchedMesh===!0,_e=!!g.map,Ue=!!g.matcap,Ge=!!O,Xe=!!g.aoMap,st=!!g.lightMap,Be=!!g.bumpMap&&g.wireframe===!1,pt=!!g.normalMap,oe=!!g.displacementMap,it=!!g.emissiveMap,ot=!!g.metalnessMap,gt=!!g.roughnessMap,q=g.anisotropy>0,jt=g.clearcoat>0,dt=g.dispersion>0,D=g.retroreflectivity>0,_=g.iridescence>0,H=g.sheen>0,G=g.transmission>0,K=q&&!!g.anisotropyMap,re=jt&&!!g.clearcoatMap,me=jt&&!!g.clearcoatNormalMap,Y=jt&&!!g.clearcoatRoughnessMap,ne=_&&!!g.iridescenceMap,te=_&&!!g.iridescenceThicknessMap,he=H&&!!g.sheenColorMap,pe=H&&!!g.sheenRoughnessMap,ve=!!g.specularMap,ge=!!g.specularColorMap,be=!!g.specularIntensityMap,Ve=G&&!!g.transmissionMap,W=G&&!!g.thicknessMap,Me=!!g.gradientMap,ae=!!g.alphaMap,Ee=g.alphaTest>0,we=!!g.alphaHash,de=!!g.extensions,ke=yi;g.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(ke=i.toneMapping);let De={shaderID:U,shaderType:g.type,shaderName:g.name,vertexShader:Ye,fragmentShader:ie,defines:g.defines,customVertexShaderID:Pe,customFragmentShaderID:j,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:d,batching:fe,batchingColor:fe&&A._colorsTexture!==null,instancing:se,instancingColor:se&&A.instanceColor!==null,instancingMorph:se&&A.morphTexture!==null,outputColorSpace:Q===null?i.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:at.workingColorSpace,alphaToCoverage:!!g.alphaToCoverage,map:_e,matcap:Ue,envMap:Ge,envMapMode:Ge&&O.mapping,envMapCubeUVHeight:I,aoMap:Xe,lightMap:st,bumpMap:Be,normalMap:pt,displacementMap:oe,emissiveMap:it,normalMapObjectSpace:pt&&g.normalMapType===bp,normalMapTangentSpace:pt&&g.normalMapType===wo,packedNormalMap:pt&&g.normalMapType===wo&&nM(g.normalMap.format),metalnessMap:ot,roughnessMap:gt,anisotropy:q,anisotropyMap:K,clearcoat:jt,clearcoatMap:re,clearcoatNormalMap:me,clearcoatRoughnessMap:Y,dispersion:dt,retroreflection:D,iridescence:_,iridescenceMap:ne,iridescenceThicknessMap:te,sheen:H,sheenColorMap:he,sheenRoughnessMap:pe,specularMap:ve,specularColorMap:ge,specularIntensityMap:be,transmission:G,transmissionMap:Ve,thicknessMap:W,gradientMap:Me,opaque:g.transparent===!1&&g.blending===ia&&g.alphaToCoverage===!1,alphaMap:ae,alphaTest:Ee,alphaHash:we,combine:g.combine,mapUv:_e&&x(g.map.channel),aoMapUv:Xe&&x(g.aoMap.channel),lightMapUv:st&&x(g.lightMap.channel),bumpMapUv:Be&&x(g.bumpMap.channel),normalMapUv:pt&&x(g.normalMap.channel),displacementMapUv:oe&&x(g.displacementMap.channel),emissiveMapUv:it&&x(g.emissiveMap.channel),metalnessMapUv:ot&&x(g.metalnessMap.channel),roughnessMapUv:gt&&x(g.roughnessMap.channel),anisotropyMapUv:K&&x(g.anisotropyMap.channel),clearcoatMapUv:re&&x(g.clearcoatMap.channel),clearcoatNormalMapUv:me&&x(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Y&&x(g.clearcoatRoughnessMap.channel),iridescenceMapUv:ne&&x(g.iridescenceMap.channel),iridescenceThicknessMapUv:te&&x(g.iridescenceThicknessMap.channel),sheenColorMapUv:he&&x(g.sheenColorMap.channel),sheenRoughnessMapUv:pe&&x(g.sheenRoughnessMap.channel),specularMapUv:ve&&x(g.specularMap.channel),specularColorMapUv:ge&&x(g.specularColorMap.channel),specularIntensityMapUv:be&&x(g.specularIntensityMap.channel),transmissionMapUv:Ve&&x(g.transmissionMap.channel),thicknessMapUv:W&&x(g.thicknessMap.channel),alphaMapUv:ae&&x(g.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(pt||q),vertexNormals:!!N.attributes.normal,vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:A.isPoints===!0&&!!N.attributes.uv&&(_e||ae),fog:!!w,useFog:g.fog===!0,fogExp2:!!w&&w.isFogExp2,flatShading:g.wireframe===!1&&(g.flatShading===!0||N.attributes.normal===void 0&&pt===!1&&(g.isMeshLambertMaterial||g.isMeshPhongMaterial||g.isMeshStandardMaterial||g.isMeshPhysicalMaterial)),sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:Se,skinning:A.isSkinnedMesh===!0,hasPositionAttribute:N.attributes.position!==void 0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:ye,morphTextureStride:le,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:V.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:g.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:ke,decodeVideoTexture:_e&&g.map.isVideoTexture===!0&&at.getTransfer(g.map.colorSpace)===St,decodeVideoTextureEmissive:it&&g.emissiveMap.isVideoTexture===!0&&at.getTransfer(g.emissiveMap.colorSpace)===St,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===zt,flipSided:g.side===Ht,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:de&&g.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(de&&g.extensions.multiDraw===!0||fe)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return De.vertexUv1s=l.has(1),De.vertexUv2s=l.has(2),De.vertexUv3s=l.has(3),l.clear(),De}function m(g){let b=[];if(g.shaderID?b.push(g.shaderID):(b.push(g.customVertexShaderID),b.push(g.customFragmentShaderID)),g.defines!==void 0)for(let P in g.defines)b.push(P),b.push(g.defines[P]);return g.isRawShaderMaterial===!1&&(p(b,g),M(b,g),b.push(i.outputColorSpace)),b.push(g.customProgramCacheKey),b.join()}function p(g,b){g.push(b.precision),g.push(b.outputColorSpace),g.push(b.envMapMode),g.push(b.envMapCubeUVHeight),g.push(b.mapUv),g.push(b.alphaMapUv),g.push(b.lightMapUv),g.push(b.aoMapUv),g.push(b.bumpMapUv),g.push(b.normalMapUv),g.push(b.displacementMapUv),g.push(b.emissiveMapUv),g.push(b.metalnessMapUv),g.push(b.roughnessMapUv),g.push(b.anisotropyMapUv),g.push(b.clearcoatMapUv),g.push(b.clearcoatNormalMapUv),g.push(b.clearcoatRoughnessMapUv),g.push(b.iridescenceMapUv),g.push(b.iridescenceThicknessMapUv),g.push(b.sheenColorMapUv),g.push(b.sheenRoughnessMapUv),g.push(b.specularMapUv),g.push(b.specularColorMapUv),g.push(b.specularIntensityMapUv),g.push(b.transmissionMapUv),g.push(b.thicknessMapUv),g.push(b.combine),g.push(b.fogExp2),g.push(b.sizeAttenuation),g.push(b.morphTargetsCount),g.push(b.morphAttributeCount),g.push(b.numSunLights),g.push(b.numDirLights),g.push(b.numPointLights),g.push(b.numSpotLights),g.push(b.numSpotLightMaps),g.push(b.numHemiLights),g.push(b.numRectAreaLights),g.push(b.numSunLightShadows),g.push(b.numDirLightShadows),g.push(b.numPointLightShadows),g.push(b.numSpotLightShadows),g.push(b.numSpotLightShadowsWithMaps),g.push(b.numLightProbes),g.push(b.shadowMapType),g.push(b.toneMapping),g.push(b.numClippingPlanes),g.push(b.numClipIntersection),g.push(b.depthPacking)}function M(g,b){a.disableAll(),b.instancing&&a.enable(0),b.instancingColor&&a.enable(1),b.instancingMorph&&a.enable(2),b.matcap&&a.enable(3),b.envMap&&a.enable(4),b.normalMapObjectSpace&&a.enable(5),b.normalMapTangentSpace&&a.enable(6),b.clearcoat&&a.enable(7),b.iridescence&&a.enable(8),b.alphaTest&&a.enable(9),b.vertexColors&&a.enable(10),b.vertexAlphas&&a.enable(11),b.vertexUv1s&&a.enable(12),b.vertexUv2s&&a.enable(13),b.vertexUv3s&&a.enable(14),b.vertexTangents&&a.enable(15),b.anisotropy&&a.enable(16),b.alphaHash&&a.enable(17),b.batching&&a.enable(18),b.dispersion&&a.enable(19),b.retroreflection&&a.enable(24),b.batchingColor&&a.enable(20),b.gradientMap&&a.enable(21),b.packedNormalMap&&a.enable(22),b.vertexNormals&&a.enable(23),g.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),b.numLightProbeGrids>0&&a.enable(22),b.hasPositionAttribute&&a.enable(23),g.push(a.mask)}function C(g){let b=f[g.type],P;if(b){let B=ki[b];P=ls.clone(B.uniforms)}else P=g.uniforms;return P}function v(g,b){let P=u.get(b);return P!==void 0?++P.usedTimes:(P=new eM(i,b,g,s),c.push(P),u.set(b,P)),P}function E(g){if(--g.usedTimes===0){let b=c.indexOf(g);c[b]=c[c.length-1],c.pop(),u.delete(g.cacheKey),g.destroy()}}function S(g){o.remove(g)}function T(){o.dispose()}return{getParameters:y,getProgramCacheKey:m,getUniforms:C,acquireProgram:v,releaseProgram:E,releaseShaderCache:S,programs:c,dispose:T}}function sM(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function rM(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function nm(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function im(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function o(d,f,x,y,m,p){let M=i[e];return M===void 0?(M={id:d.id,object:d,geometry:f,material:x,materialVariant:a(d),groupOrder:y,renderOrder:d.renderOrder,z:m,group:p},i[e]=M):(M.id=d.id,M.object=d,M.geometry=f,M.material=x,M.materialVariant=a(d),M.groupOrder=y,M.renderOrder=d.renderOrder,M.z=m,M.group=p),e++,M}function l(d,f,x,y,m,p,M){M.reversedDepth===!0&&(m=-m);let C=o(d,f,x,y,m,p);x.transmission>0?n.push(C):x.transparent===!0?s.push(C):t.push(C)}function c(d,f,x,y,m,p){let M=o(d,f,x,y,m,p);x.transmission>0?n.unshift(M):x.transparent===!0?s.unshift(M):t.unshift(M)}function u(d,f){t.length>1&&t.sort(d||rM),n.length>1&&n.sort(f||nm),s.length>1&&s.sort(f||nm)}function h(){for(let d=e,f=i.length;d<f;d++){let x=i[d];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:h,sort:u}}function aM(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new im,i.set(n,[a])):s>=r.length?(a=new im,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function oM(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new L,color:new ce};break;case"SpotLight":t={position:new L,direction:new L,color:new ce,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new ce,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new ce,groundColor:new ce};break;case"RectAreaLight":t={color:new ce,position:new L,halfWidth:new L,halfHeight:new L};break}return i[e.id]=t,t}}}function lM(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var cM=0;function uM(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function hM(i){let e=new oM,t=lM(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new L);let s=new L,r=new Je,a=new Je;function o(c){let u=0,h=0,d=0;for(let A=0;A<9;A++)n.probe[A].set(0,0,0);let f=0,x=0,y=0,m=0,p=0,M=0,C=0,v=0,E=0,S=0,T=0,g=0,b=0,P=0;c.sort(uM);for(let A=0,V=c.length;A<V;A++){let w=c[A],N=w.color,k=w.intensity,z=w.distance,O=null;if(w.shadow&&w.shadow.map&&(w.shadow.map.texture.format===Ps?O=w.shadow.map.texture:O=w.shadow.map.depthTexture||w.shadow.map.texture),w.isAmbientLight)u+=N.r*k,h+=N.g*k,d+=N.b*k;else if(w.isLightProbe){for(let I=0;I<9;I++)n.probe[I].addScaledVector(w.sh.coefficients[I],k);P++}else if(w.isSunLight){let I=e.get(w);if(I.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){let U=w.shadow,$=t.get(w);$.shadowIntensity=U.intensity,$.shadowBias=U.bias,$.shadowNormalBias=U.normalBias,$.shadowRadius=U.radius,$.shadowMapSize.copy(U.mapSize).multiply(U.getFrameExtents()),n.sunShadow[x]=$,n.sunShadowMap[x]=O;let ye=U.getViewportCount();for(let le=0;le<ye;le++)n.sunShadowMatrix[y+le]=U.getMatrix(le),n.sunShadowCascade[y+le]=U._cascadeData[le];y+=ye,x++}n.sun[f]=I,f++}else if(w.isDirectionalLight){let I=e.get(w);if(I.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){let U=w.shadow,$=t.get(w);$.shadowIntensity=U.intensity,$.shadowBias=U.bias,$.shadowNormalBias=U.normalBias,$.shadowRadius=U.radius,$.shadowMapSize=U.mapSize,n.directionalShadow[m]=$,n.directionalShadowMap[m]=O,n.directionalShadowMatrix[m]=w.shadow.matrix,E++}n.directional[m]=I,m++}else if(w.isSpotLight){let I=e.get(w);I.position.setFromMatrixPosition(w.matrixWorld),I.color.copy(N).multiplyScalar(k),I.distance=z,I.coneCos=Math.cos(w.angle),I.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),I.decay=w.decay,n.spot[M]=I;let U=w.shadow;if(w.map&&(n.spotLightMap[g]=w.map,g++,U.updateMatrices(w),w.castShadow&&b++),n.spotLightMatrix[M]=U.matrix,w.castShadow){let $=t.get(w);$.shadowIntensity=U.intensity,$.shadowBias=U.bias,$.shadowNormalBias=U.normalBias,$.shadowRadius=U.radius,$.shadowMapSize=U.mapSize,n.spotShadow[M]=$,n.spotShadowMap[M]=O,T++}M++}else if(w.isRectAreaLight){let I=e.get(w);I.color.copy(N).multiplyScalar(k),I.halfWidth.set(w.width*.5,0,0),I.halfHeight.set(0,w.height*.5,0),n.rectArea[C]=I,C++}else if(w.isPointLight){let I=e.get(w);if(I.color.copy(w.color).multiplyScalar(w.intensity),I.distance=w.distance,I.decay=w.decay,w.castShadow){let U=w.shadow,$=t.get(w);$.shadowIntensity=U.intensity,$.shadowBias=U.bias,$.shadowNormalBias=U.normalBias,$.shadowRadius=U.radius,$.shadowMapSize=U.mapSize,$.shadowCameraNear=U.camera.near,$.shadowCameraFar=U.camera.far,n.pointShadow[p]=$,n.pointShadowMap[p]=O,n.pointShadowMatrix[p]=w.shadow.matrix,S++}n.point[p]=I,p++}else if(w.isHemisphereLight){let I=e.get(w);I.skyColor.copy(w.color).multiplyScalar(k),I.groundColor.copy(w.groundColor).multiplyScalar(k),n.hemi[v]=I,v++}}C>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Re.LTC_FLOAT_1,n.rectAreaLTC2=Re.LTC_FLOAT_2):(n.rectAreaLTC1=Re.LTC_HALF_1,n.rectAreaLTC2=Re.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;let B=n.hash;(B.sunLength!==f||B.directionalLength!==m||B.pointLength!==p||B.spotLength!==M||B.rectAreaLength!==C||B.hemiLength!==v||B.numSunShadows!==x||B.numDirectionalShadows!==E||B.numPointShadows!==S||B.numSpotShadows!==T||B.numSpotMaps!==g||B.numLightProbes!==P)&&(n.sun.length=f,n.directional.length=m,n.spot.length=M,n.rectArea.length=C,n.point.length=p,n.hemi.length=v,n.sunShadow.length=x,n.sunShadowMap.length=x,n.sunShadowMatrix.length=y,n.sunShadowCascade.length=y,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.directionalShadowMatrix.length=E,n.pointShadow.length=S,n.pointShadowMap.length=S,n.pointShadowMatrix.length=S,n.spotShadow.length=T,n.spotShadowMap.length=T,n.spotLightMatrix.length=T+g-b,n.spotLightMap.length=g,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=P,B.sunLength=f,B.directionalLength=m,B.pointLength=p,B.spotLength=M,B.rectAreaLength=C,B.hemiLength=v,B.numSunShadows=x,B.numDirectionalShadows=E,B.numPointShadows=S,B.numSpotShadows=T,B.numSpotMaps=g,B.numLightProbes=P,n.version=cM++)}function l(c,u){let h=0,d=0,f=0,x=0,y=0,m=0,p=u.matrixWorldInverse;for(let M=0,C=c.length;M<C;M++){let v=c[M];if(v.isSunLight){let E=n.sun[h];E.direction.setFromMatrixPosition(v.matrixWorld),E.direction.transformDirection(p),h++}else if(v.isDirectionalLight){let E=n.directional[d];E.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(p),d++}else if(v.isSpotLight){let E=n.spot[x];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(p),E.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(p),x++}else if(v.isRectAreaLight){let E=n.rectArea[y];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(p),a.identity(),r.copy(v.matrixWorld),r.premultiply(p),a.extractRotation(r),E.halfWidth.set(v.width*.5,0,0),E.halfHeight.set(0,v.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),y++}else if(v.isPointLight){let E=n.point[f];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(p),f++}else if(v.isHemisphereLight){let E=n.hemi[m];E.direction.setFromMatrixPosition(v.matrixWorld),E.direction.transformDirection(p),m++}}}return{setup:o,setupView:l,state:n}}function sm(i){let e=new hM(i),t=[],n=[],s=[];function r(d){h.camera=d,t.length=0,n.length=0,s.length=0}function a(d){t.push(d)}function o(d){n.push(d)}function l(d){s.push(d)}function c(){e.setup(t)}function u(d){e.setupView(t,d)}let h={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:c,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function dM(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new sm(i),e.set(s,[o])):r>=a.length?(o=new sm(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var fM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,pM=`uniform sampler2D shadow_pass;
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
}`,mM=[new L(1,0,0),new L(-1,0,0),new L(0,1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1)],gM=[new L(0,-1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1),new L(0,-1,0),new L(0,-1,0)],rm=new Je,Ao=new L,Vh=new L;function xM(i,e,t){let n=new Jr,s=new Ae,r=new Ae,a=new Ct,o=new zl,l=new Vl,c={},u=t.maxTextureSize,h={[Oi]:Ht,[Ht]:Oi,[zt]:zt},d=new xt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ae},radius:{value:4}},vertexShader:fM,fragmentShader:pM}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let x=new tt;x.setAttribute("position",new ht(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new ue(x,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ir;let p=this.type;this.render=function(S,T,g){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||S.length===0)return;this.type===Qf&&(ze("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ir);let b=i.getRenderTarget(),P=i.getActiveCubeFace(),B=i.getActiveMipmapLevel(),A=i.state;A.setBlending(ri),A.buffers.depth.getReversed()===!0?A.buffers.color.setClear(0,0,0,0):A.buffers.color.setClear(1,1,1,1),A.buffers.depth.setTest(!0),A.setScissorTest(!1);let V=p!==this.type;V&&T.traverse(function(w){w.material&&(Array.isArray(w.material)?w.material.forEach(N=>N.needsUpdate=!0):w.material.needsUpdate=!0)});for(let w=0,N=S.length;w<N;w++){let k=S[w],z=k.shadow;if(z===void 0){ze("WebGLShadowMap:",k,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;s.copy(z.mapSize);let O=z.getFrameExtents();s.multiply(O),r.copy(z.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/O.x),s.x=r.x*O.x,z.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/O.y),s.y=r.y*O.y,z.mapSize.y=r.y));let I=i.state.buffers.depth.getReversed();if(z.camera._reversedDepth=I,z.map===null||V===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===na){if(k.isPointLight){ze("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new Zt(s.x,s.y,{format:Ps,type:hn,minFilter:tn,magFilter:tn,generateMipmaps:!1}),z.map.texture.name=k.name+".shadowMap",z.map.depthTexture=new Ts(s.x,s.y,Xn),z.map.depthTexture.name=k.name+".shadowMapDepth",z.map.depthTexture.format=Ii,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=en,z.map.depthTexture.magFilter=en}else k.isPointLight?(z.map=new Wc(s.x),z.map.depthTexture=new Bl(s.x,Si)):(z.map=new Zt(s.x,s.y),z.map.depthTexture=new Ts(s.x,s.y,Si)),z.map.depthTexture.name=k.name+".shadowMap",z.map.depthTexture.format=Ii,this.type===ir?(z.map.depthTexture.compareFunction=I?zc:Hc,z.map.depthTexture.minFilter=tn,z.map.depthTexture.magFilter=tn):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=en,z.map.depthTexture.magFilter=en);z.camera.updateProjectionMatrix()}z.map.isWebGLCubeRenderTarget!==!0&&(z.map.width!==s.x||z.map.height!==s.y)&&z.map.setSize(s.x,s.y);let U=z.map.isWebGLCubeRenderTarget?6:z.getViewportCount();k.isPointLight!==!0&&z.updateMatrices(k,g);for(let $=0;$<U;$++){let ye=z.getCamera($);if(k.isPointLight){let le=z.camera,Ye=z.matrix,ie=k.distance||le.far;ie!==le.far&&(le.far=ie,le.updateProjectionMatrix()),Ao.setFromMatrixPosition(k.matrixWorld),le.position.copy(Ao),Vh.copy(le.position),Vh.add(mM[$]),le.up.copy(gM[$]),le.lookAt(Vh),le.updateMatrixWorld(),Ye.makeTranslation(-Ao.x,-Ao.y,-Ao.z),rm.multiplyMatrices(le.projectionMatrix,le.matrixWorldInverse),z._frustum.setFromProjectionMatrix(rm,le.coordinateSystem,le.reversedDepth)}if(z.map.isWebGLCubeRenderTarget)i.setRenderTarget(z.map,$),i.clear();else{$===0&&(i.setRenderTarget(z.map),i.clear());let le=z.getViewport($);a.set(r.x*le.x,r.y*le.y,r.x*le.z,r.y*le.w),A.viewport(a)}n=z.getFrustum($),v(T,g,ye,k,this.type)}z.isPointLightShadow!==!0&&this.type===na&&M(z,g),z.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(b,P,B)};function M(S,T){let g=e.update(y);d.defines.VSM_SAMPLES!==S.blurSamples&&(d.defines.VSM_SAMPLES=S.blurSamples,f.defines.VSM_SAMPLES=S.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),S.mapPass===null?S.mapPass=new Zt(s.x,s.y,{format:Ps,type:hn}):(S.mapPass.width!==S.map.width||S.mapPass.height!==S.map.height)&&S.mapPass.setSize(S.map.width,S.map.height),d.uniforms.shadow_pass.value=S.map.depthTexture,d.uniforms.resolution.value.set(S.map.width,S.map.height),d.uniforms.radius.value=S.radius,i.setRenderTarget(S.mapPass),i.clear(),i.renderBufferDirect(T,null,g,d,y,null),f.uniforms.shadow_pass.value=S.mapPass.texture,f.uniforms.resolution.value.set(S.map.width,S.map.height),f.uniforms.radius.value=S.radius,i.setRenderTarget(S.map),i.clear(),i.renderBufferDirect(T,null,g,f,y,null)}function C(S,T,g,b){let P=null,B=g.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(B!==void 0)P=B;else if(P=g.isPointLight===!0?l:o,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){let A=P.uuid,V=T.uuid,w=c[A];w===void 0&&(w={},c[A]=w);let N=w[V];N===void 0&&(N=P.clone(),w[V]=N,T.addEventListener("dispose",E)),P=N}if(P.visible=T.visible,P.wireframe=T.wireframe,b===na?P.side=T.shadowSide!==null?T.shadowSide:T.side:P.side=T.shadowSide!==null?T.shadowSide:h[T.side],P.alphaMap=T.alphaMap,P.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,P.map=T.map,P.clipShadows=T.clipShadows,P.clippingPlanes=T.clippingPlanes,P.clipIntersection=T.clipIntersection,P.displacementMap=T.displacementMap,P.displacementScale=T.displacementScale,P.displacementBias=T.displacementBias,P.wireframeLinewidth=T.wireframeLinewidth,P.linewidth=T.linewidth,g.isPointLight===!0&&P.isMeshDistanceMaterial===!0){let A=i.properties.get(P);A.light=g}return P}function v(S,T,g,b,P){if(S.visible===!1)return;if(S.layers.test(T.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&P===na)&&(!S.frustumCulled||S.intersectsFrustum(n))){S.modelViewMatrix.multiplyMatrices(g.matrixWorldInverse,S.matrixWorld);let V=e.update(S),w=S.material;if(Array.isArray(w)){let N=V.groups;for(let k=0,z=N.length;k<z;k++){let O=N[k],I=w[O.materialIndex];if(I&&I.visible){let U=C(S,I,b,P);S.onBeforeShadow(i,S,T,g,V,U,O),i.renderBufferDirect(g,null,V,U,S,O),S.onAfterShadow(i,S,T,g,V,U,O)}}}else if(w.visible){let N=C(S,w,b,P);S.onBeforeShadow(i,S,T,g,V,N,null),i.renderBufferDirect(g,null,V,N,S,null),S.onAfterShadow(i,S,T,g,V,N,null)}}let A=S.children;for(let V=0,w=A.length;V<w;V++)v(A[V],T,g,b,P)}function E(S){S.target.removeEventListener("dispose",E);for(let g in c){let b=c[g],P=S.target.uuid;P in b&&(b[P].dispose(),delete b[P])}}}function _M(i,e){function t(){let W=!1,Me=new Ct,ae=null,Ee=new Ct(0,0,0,0);return{setMask:function(we){ae!==we&&!W&&(i.colorMask(we,we,we,we),ae=we)},setLocked:function(we){W=we},setClear:function(we,de,ke,De,Pt){Pt===!0&&(we*=De,de*=De,ke*=De),Me.set(we,de,ke,De),Ee.equals(Me)===!1&&(i.clearColor(we,de,ke,De),Ee.copy(Me))},reset:function(){W=!1,ae=null,Ee.set(-1,0,0,0)}}}function n(){let W=!1,Me=!1,ae=null,Ee=null,we=null;return{setReversed:function(de){if(Me!==de){let ke=e.get("EXT_clip_control");de?ke.clipControlEXT(ke.LOWER_LEFT_EXT,ke.ZERO_TO_ONE_EXT):ke.clipControlEXT(ke.LOWER_LEFT_EXT,ke.NEGATIVE_ONE_TO_ONE_EXT),Me=de;let De=we;we=null,this.setClear(De)}},getReversed:function(){return Me},setTest:function(de){de?Q(i.DEPTH_TEST):Se(i.DEPTH_TEST)},setMask:function(de){ae!==de&&!W&&(i.depthMask(de),ae=de)},setFunc:function(de){if(Me&&(de=Dp[de]),Ee!==de){switch(de){case Tl:i.depthFunc(i.NEVER);break;case Al:i.depthFunc(i.ALWAYS);break;case Rl:i.depthFunc(i.LESS);break;case zr:i.depthFunc(i.LEQUAL);break;case Cl:i.depthFunc(i.EQUAL);break;case Il:i.depthFunc(i.GEQUAL);break;case Pl:i.depthFunc(i.GREATER);break;case Ll:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Ee=de}},setLocked:function(de){W=de},setClear:function(de){we!==de&&(we=de,Me&&(de=1-de),i.clearDepth(de))},reset:function(){W=!1,ae=null,Ee=null,we=null,Me=!1}}}function s(){let W=!1,Me=null,ae=null,Ee=null,we=null,de=null,ke=null,De=null,Pt=null;return{setTest:function(We){W||(We?Q(i.STENCIL_TEST):Se(i.STENCIL_TEST))},setMask:function(We){Me!==We&&!W&&(i.stencilMask(We),Me=We)},setFunc:function(We,on,xn){(ae!==We||Ee!==on||we!==xn)&&(i.stencilFunc(We,on,xn),ae=We,Ee=on,we=xn)},setOp:function(We,on,xn){(de!==We||ke!==on||De!==xn)&&(i.stencilOp(We,on,xn),de=We,ke=on,De=xn)},setLocked:function(We){W=We},setClear:function(We){Pt!==We&&(i.clearStencil(We),Pt=We)},reset:function(){W=!1,Me=null,ae=null,Ee=null,we=null,de=null,ke=null,De=null,Pt=null}}}let r=new t,a=new n,o=new s,l=new WeakMap,c=new WeakMap,u={},h={},d={},f=new WeakMap,x=[],y=null,m=!1,p=null,M=null,C=null,v=null,E=null,S=null,T=null,g=new ce(0,0,0),b=0,P=!1,B=null,A=null,V=null,w=null,N=null,k=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),z=!1,O=0,I=i.getParameter(i.VERSION);I.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(I)[1]),z=O>=1):I.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(I)[1]),z=O>=2);let U=null,$={},ye=i.getParameter(i.SCISSOR_BOX),le=i.getParameter(i.VIEWPORT),Ye=new Ct().fromArray(ye),ie=new Ct().fromArray(le);function Pe(W,Me,ae,Ee){let we=new Uint8Array(4),de=i.createTexture();i.bindTexture(W,de),i.texParameteri(W,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(W,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ke=0;ke<ae;ke++)W===i.TEXTURE_3D||W===i.TEXTURE_2D_ARRAY?i.texImage3D(Me,0,i.RGBA,1,1,Ee,0,i.RGBA,i.UNSIGNED_BYTE,we):i.texImage2D(Me+ke,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,we);return de}let j={};j[i.TEXTURE_2D]=Pe(i.TEXTURE_2D,i.TEXTURE_2D,1),j[i.TEXTURE_CUBE_MAP]=Pe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),j[i.TEXTURE_2D_ARRAY]=Pe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),j[i.TEXTURE_3D]=Pe(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Q(i.DEPTH_TEST),a.setFunc(zr),Be(!1),pt(dh),Q(i.CULL_FACE),Xe(ri);function Q(W){u[W]!==!0&&(i.enable(W),u[W]=!0)}function Se(W){u[W]!==!1&&(i.disable(W),u[W]=!1)}function se(W,Me){return d[W]!==Me?(i.bindFramebuffer(W,Me),d[W]=Me,W===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=Me),W===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=Me),!0):!1}function fe(W,Me){let ae=x,Ee=!1;if(W){ae=f.get(Me),ae===void 0&&(ae=[],f.set(Me,ae));let we=W.textures;if(ae.length!==we.length||ae[0]!==i.COLOR_ATTACHMENT0){for(let de=0,ke=we.length;de<ke;de++)ae[de]=i.COLOR_ATTACHMENT0+de;ae.length=we.length,Ee=!0}}else ae[0]!==i.BACK&&(ae[0]=i.BACK,Ee=!0);Ee&&i.drawBuffers(ae)}function _e(W){return y!==W?(i.useProgram(W),y=W,!0):!1}let Ue={[sr]:i.FUNC_ADD,[tp]:i.FUNC_SUBTRACT,[np]:i.FUNC_REVERSE_SUBTRACT};Ue[ip]=i.MIN,Ue[sp]=i.MAX;let Ge={[rp]:i.ZERO,[ap]:i.ONE,[op]:i.SRC_COLOR,[mh]:i.SRC_ALPHA,[fp]:i.SRC_ALPHA_SATURATE,[hp]:i.DST_COLOR,[cp]:i.DST_ALPHA,[lp]:i.ONE_MINUS_SRC_COLOR,[gh]:i.ONE_MINUS_SRC_ALPHA,[dp]:i.ONE_MINUS_DST_COLOR,[up]:i.ONE_MINUS_DST_ALPHA,[pp]:i.CONSTANT_COLOR,[mp]:i.ONE_MINUS_CONSTANT_COLOR,[gp]:i.CONSTANT_ALPHA,[xp]:i.ONE_MINUS_CONSTANT_ALPHA};function Xe(W,Me,ae,Ee,we,de,ke,De,Pt,We){if(W===ri){m===!0&&(Se(i.BLEND),m=!1);return}if(m===!1&&(Q(i.BLEND),m=!0),W!==ep){if(W!==p||We!==P){if((M!==sr||E!==sr)&&(i.blendEquation(i.FUNC_ADD),M=sr,E=sr),We)switch(W){case ia:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Et:i.blendFunc(i.ONE,i.ONE);break;case fh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ph:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:qe("WebGLState: Invalid blending: ",W);break}else switch(W){case ia:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Et:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case fh:qe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ph:qe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:qe("WebGLState: Invalid blending: ",W);break}C=null,v=null,S=null,T=null,g.set(0,0,0),b=0,p=W,P=We}return}we=we||Me,de=de||ae,ke=ke||Ee,(Me!==M||we!==E)&&(i.blendEquationSeparate(Ue[Me],Ue[we]),M=Me,E=we),(ae!==C||Ee!==v||de!==S||ke!==T)&&(i.blendFuncSeparate(Ge[ae],Ge[Ee],Ge[de],Ge[ke]),C=ae,v=Ee,S=de,T=ke),(De.equals(g)===!1||Pt!==b)&&(i.blendColor(De.r,De.g,De.b,Pt),g.copy(De),b=Pt),p=W,P=!1}function st(W,Me){W.side===zt?Se(i.CULL_FACE):Q(i.CULL_FACE);let ae=W.side===Ht;Me&&(ae=!ae),Be(ae),W.blending===ia&&W.transparent===!1?Xe(ri):Xe(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),a.setFunc(W.depthFunc),a.setTest(W.depthTest),a.setMask(W.depthWrite),r.setMask(W.colorWrite);let Ee=W.stencilWrite;o.setTest(Ee),Ee&&(o.setMask(W.stencilWriteMask),o.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),o.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),it(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?Q(i.SAMPLE_ALPHA_TO_COVERAGE):Se(i.SAMPLE_ALPHA_TO_COVERAGE)}function Be(W){B!==W&&(W?i.frontFace(i.CW):i.frontFace(i.CCW),B=W)}function pt(W){W!==Jf?(Q(i.CULL_FACE),W!==A&&(W===dh?i.cullFace(i.BACK):W===jf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Se(i.CULL_FACE),A=W}function oe(W){W!==V&&(z&&i.lineWidth(W),V=W)}function it(W,Me,ae){W?(Q(i.POLYGON_OFFSET_FILL),(w!==Me||N!==ae)&&(w=Me,N=ae,a.getReversed()&&(Me=-Me),i.polygonOffset(Me,ae))):Se(i.POLYGON_OFFSET_FILL)}function ot(W){W?Q(i.SCISSOR_TEST):Se(i.SCISSOR_TEST)}function gt(W){W===void 0&&(W=i.TEXTURE0+k-1),U!==W&&(i.activeTexture(W),U=W)}function q(W,Me,ae){ae===void 0&&(U===null?ae=i.TEXTURE0+k-1:ae=U);let Ee=$[ae];Ee===void 0&&(Ee={type:void 0,texture:void 0},$[ae]=Ee),(Ee.type!==W||Ee.texture!==Me)&&(U!==ae&&(i.activeTexture(ae),U=ae),i.bindTexture(W,Me||j[W]),Ee.type=W,Ee.texture=Me)}function jt(){let W=$[U];W!==void 0&&W.type!==void 0&&(i.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function dt(){try{i.compressedTexImage2D(...arguments)}catch(W){qe("WebGLState:",W)}}function D(){try{i.compressedTexImage3D(...arguments)}catch(W){qe("WebGLState:",W)}}function _(){try{i.texSubImage2D(...arguments)}catch(W){qe("WebGLState:",W)}}function H(){try{i.texSubImage3D(...arguments)}catch(W){qe("WebGLState:",W)}}function G(){try{i.compressedTexSubImage2D(...arguments)}catch(W){qe("WebGLState:",W)}}function K(){try{i.compressedTexSubImage3D(...arguments)}catch(W){qe("WebGLState:",W)}}function re(){try{i.texStorage2D(...arguments)}catch(W){qe("WebGLState:",W)}}function me(){try{i.texStorage3D(...arguments)}catch(W){qe("WebGLState:",W)}}function Y(){try{i.texImage2D(...arguments)}catch(W){qe("WebGLState:",W)}}function ne(){try{i.texImage3D(...arguments)}catch(W){qe("WebGLState:",W)}}function te(W){return h[W]!==void 0?h[W]:i.getParameter(W)}function he(W,Me){h[W]!==Me&&(i.pixelStorei(W,Me),h[W]=Me)}function pe(W){Ye.equals(W)===!1&&(i.scissor(W.x,W.y,W.z,W.w),Ye.copy(W))}function ve(W){ie.equals(W)===!1&&(i.viewport(W.x,W.y,W.z,W.w),ie.copy(W))}function ge(W,Me){let ae=c.get(Me);ae===void 0&&(ae=new WeakMap,c.set(Me,ae));let Ee=ae.get(W);Ee===void 0&&(Ee=i.getUniformBlockIndex(Me,W.name),ae.set(W,Ee))}function be(W,Me){let Ee=c.get(Me).get(W);l.get(Me)!==Ee&&(i.uniformBlockBinding(Me,Ee,W.__bindingPointIndex),l.set(Me,Ee))}function Ve(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},h={},U=null,$={},d={},f=new WeakMap,x=[],y=null,m=!1,p=null,M=null,C=null,v=null,E=null,S=null,T=null,g=new ce(0,0,0),b=0,P=!1,B=null,A=null,V=null,w=null,N=null,Ye.set(0,0,i.canvas.width,i.canvas.height),ie.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:Q,disable:Se,bindFramebuffer:se,drawBuffers:fe,useProgram:_e,setBlending:Xe,setMaterial:st,setFlipSided:Be,setCullFace:pt,setLineWidth:oe,setPolygonOffset:it,setScissorTest:ot,activeTexture:gt,bindTexture:q,unbindTexture:jt,compressedTexImage2D:dt,compressedTexImage3D:D,texImage2D:Y,texImage3D:ne,pixelStorei:he,getParameter:te,updateUBOMapping:ge,uniformBlockBinding:be,texStorage2D:re,texStorage3D:me,texSubImage2D:_,texSubImage3D:H,compressedTexSubImage2D:G,compressedTexSubImage3D:K,scissor:pe,viewport:ve,reset:Ve}}function vM(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ae,u=new WeakMap,h=new Set,d,f=new WeakMap,x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(D,_){return x?new OffscreenCanvas(D,_):Wr("canvas")}function m(D,_,H){let G=1,K=dt(D);if((K.width>H||K.height>H)&&(G=H/Math.max(K.width,K.height)),G<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){let re=Math.floor(G*K.width),me=Math.floor(G*K.height);d===void 0&&(d=y(re,me));let Y=_?y(re,me):d;return Y.width=re,Y.height=me,Y.getContext("2d").drawImage(D,0,0,re,me),ze("WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+re+"x"+me+")."),Y}else return"data"in D&&ze("WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),D;return D}function p(D){return D.generateMipmaps}function M(D){i.generateMipmap(D)}function C(D){return D.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?i.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function v(D,_,H,G,K,re=!1){if(D!==null){if(i[D]!==void 0)return i[D];ze("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let me;G&&(me=e.get("EXT_texture_norm16"),me||ze("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Y=_;if(_===i.RED&&(H===i.FLOAT&&(Y=i.R32F),H===i.HALF_FLOAT&&(Y=i.R16F),H===i.UNSIGNED_BYTE&&(Y=i.R8),H===i.UNSIGNED_SHORT&&me&&(Y=me.R16_EXT),H===i.SHORT&&me&&(Y=me.R16_SNORM_EXT)),_===i.RED_INTEGER&&(H===i.UNSIGNED_BYTE&&(Y=i.R8UI),H===i.UNSIGNED_SHORT&&(Y=i.R16UI),H===i.UNSIGNED_INT&&(Y=i.R32UI),H===i.BYTE&&(Y=i.R8I),H===i.SHORT&&(Y=i.R16I),H===i.INT&&(Y=i.R32I)),_===i.RG&&(H===i.FLOAT&&(Y=i.RG32F),H===i.HALF_FLOAT&&(Y=i.RG16F),H===i.UNSIGNED_BYTE&&(Y=i.RG8),H===i.UNSIGNED_SHORT&&me&&(Y=me.RG16_EXT),H===i.SHORT&&me&&(Y=me.RG16_SNORM_EXT)),_===i.RG_INTEGER&&(H===i.UNSIGNED_BYTE&&(Y=i.RG8UI),H===i.UNSIGNED_SHORT&&(Y=i.RG16UI),H===i.UNSIGNED_INT&&(Y=i.RG32UI),H===i.BYTE&&(Y=i.RG8I),H===i.SHORT&&(Y=i.RG16I),H===i.INT&&(Y=i.RG32I)),_===i.RGB_INTEGER&&(H===i.UNSIGNED_BYTE&&(Y=i.RGB8UI),H===i.UNSIGNED_SHORT&&(Y=i.RGB16UI),H===i.UNSIGNED_INT&&(Y=i.RGB32UI),H===i.BYTE&&(Y=i.RGB8I),H===i.SHORT&&(Y=i.RGB16I),H===i.INT&&(Y=i.RGB32I)),_===i.RGBA_INTEGER&&(H===i.UNSIGNED_BYTE&&(Y=i.RGBA8UI),H===i.UNSIGNED_SHORT&&(Y=i.RGBA16UI),H===i.UNSIGNED_INT&&(Y=i.RGBA32UI),H===i.BYTE&&(Y=i.RGBA8I),H===i.SHORT&&(Y=i.RGBA16I),H===i.INT&&(Y=i.RGBA32I)),_===i.RGB&&(H===i.UNSIGNED_SHORT&&me&&(Y=me.RGB16_EXT),H===i.SHORT&&me&&(Y=me.RGB16_SNORM_EXT),H===i.UNSIGNED_INT_5_9_9_9_REV&&(Y=i.RGB9_E5),H===i.UNSIGNED_INT_10F_11F_11F_REV&&(Y=i.R11F_G11F_B10F)),_===i.RGBA){let ne=re?Va:at.getTransfer(K);H===i.FLOAT&&(Y=i.RGBA32F),H===i.HALF_FLOAT&&(Y=i.RGBA16F),H===i.UNSIGNED_BYTE&&(Y=ne===St?i.SRGB8_ALPHA8:i.RGBA8),H===i.UNSIGNED_SHORT&&me&&(Y=me.RGBA16_EXT),H===i.SHORT&&me&&(Y=me.RGBA16_SNORM_EXT),H===i.UNSIGNED_SHORT_4_4_4_4&&(Y=i.RGBA4),H===i.UNSIGNED_SHORT_5_5_5_1&&(Y=i.RGB5_A1)}return(Y===i.R16F||Y===i.R32F||Y===i.RG16F||Y===i.RG32F||Y===i.RGBA16F||Y===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function E(D,_){let H;return D?_===null||_===Si||_===aa?H=i.DEPTH24_STENCIL8:_===Xn?H=i.DEPTH32F_STENCIL8:_===ra&&(H=i.DEPTH24_STENCIL8,ze("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Si||_===aa?H=i.DEPTH_COMPONENT24:_===Xn?H=i.DEPTH_COMPONENT32F:_===ra&&(H=i.DEPTH_COMPONENT16),H}function S(D,_){return p(D)===!0||D.isFramebufferTexture&&D.minFilter!==en&&D.minFilter!==tn?Math.log2(Math.max(_.width,_.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?_.mipmaps.length:1}function T(D){let _=D.target;_.removeEventListener("dispose",T),b(_),_.isVideoTexture&&u.delete(_),_.isHTMLTexture&&h.delete(_)}function g(D){let _=D.target;_.removeEventListener("dispose",g),B(_)}function b(D){let _=n.get(D);if(_.__webglInit===void 0)return;let H=D.source,G=f.get(H);if(G){let K=G[_.__cacheKey];K.usedTimes--,K.usedTimes===0&&P(D),Object.keys(G).length===0&&f.delete(H)}n.remove(D)}function P(D){let _=n.get(D);i.deleteTexture(_.__webglTexture);let H=D.source,G=f.get(H);delete G[_.__cacheKey],a.memory.textures--}function B(D){let _=n.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),n.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let G=0;G<6;G++){if(Array.isArray(_.__webglFramebuffer[G]))for(let K=0;K<_.__webglFramebuffer[G].length;K++)i.deleteFramebuffer(_.__webglFramebuffer[G][K]);else i.deleteFramebuffer(_.__webglFramebuffer[G]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[G])}else{if(Array.isArray(_.__webglFramebuffer))for(let G=0;G<_.__webglFramebuffer.length;G++)i.deleteFramebuffer(_.__webglFramebuffer[G]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let G=0;G<_.__webglColorRenderbuffer.length;G++)_.__webglColorRenderbuffer[G]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[G]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let H=D.textures;for(let G=0,K=H.length;G<K;G++){let re=n.get(H[G]);re.__webglTexture&&(i.deleteTexture(re.__webglTexture),a.memory.textures--),n.remove(H[G])}n.remove(D)}let A=0;function V(){A=0}function w(){return A}function N(D){A=D}function k(){let D=A;return D>=s.maxTextures&&ze("WebGLTextures: Trying to use "+(D+1)+" texture units while this GPU supports only "+s.maxTextures),A+=1,D}function z(D){let _=[];return _.push(D.wrapS),_.push(D.wrapT),_.push(D.wrapR||0),_.push(D.magFilter),_.push(D.minFilter),_.push(D.anisotropy),_.push(D.internalFormat),_.push(D.format),_.push(D.type),_.push(D.generateMipmaps),_.push(D.premultiplyAlpha),_.push(D.flipY),_.push(D.unpackAlignment),_.push(D.colorSpace),_.join()}function O(D,_){let H=n.get(D);if(D.isVideoTexture&&q(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&H.__version!==D.version){let G=D.image;if(G===null)ze("WebGLRenderer: Texture marked for update but no image data found.");else if(G.complete===!1)ze("WebGLRenderer: Texture marked for update but image is incomplete");else{Se(H,D,_);return}}else D.isExternalTexture&&(H.__webglTexture=D.sourceTexture?D.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,H.__webglTexture,i.TEXTURE0+_)}function I(D,_){let H=n.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&H.__version!==D.version){Se(H,D,_);return}else D.isExternalTexture&&(H.__webglTexture=D.sourceTexture?D.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,H.__webglTexture,i.TEXTURE0+_)}function U(D,_){let H=n.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&H.__version!==D.version){Se(H,D,_);return}t.bindTexture(i.TEXTURE_3D,H.__webglTexture,i.TEXTURE0+_)}function $(D,_){let H=n.get(D);if(D.isCubeDepthTexture!==!0&&D.version>0&&H.__version!==D.version){se(H,D,_);return}t.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture,i.TEXTURE0+_)}let ye={[Dn]:i.REPEAT,[ei]:i.CLAMP_TO_EDGE,[Vr]:i.MIRRORED_REPEAT},le={[en]:i.NEAREST,[nc]:i.NEAREST_MIPMAP_NEAREST,[or]:i.NEAREST_MIPMAP_LINEAR,[tn]:i.LINEAR,[sa]:i.LINEAR_MIPMAP_NEAREST,[Mi]:i.LINEAR_MIPMAP_LINEAR},Ye={[wp]:i.NEVER,[Ip]:i.ALWAYS,[Tp]:i.LESS,[Hc]:i.LEQUAL,[Ap]:i.EQUAL,[zc]:i.GEQUAL,[Rp]:i.GREATER,[Cp]:i.NOTEQUAL};function ie(D,_){if(_.type===Xn&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===tn||_.magFilter===sa||_.magFilter===or||_.magFilter===Mi||_.minFilter===tn||_.minFilter===sa||_.minFilter===or||_.minFilter===Mi)&&ze("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(D,i.TEXTURE_WRAP_S,ye[_.wrapS]),i.texParameteri(D,i.TEXTURE_WRAP_T,ye[_.wrapT]),(D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY)&&i.texParameteri(D,i.TEXTURE_WRAP_R,ye[_.wrapR]),i.texParameteri(D,i.TEXTURE_MAG_FILTER,le[_.magFilter]),i.texParameteri(D,i.TEXTURE_MIN_FILTER,le[_.minFilter]),_.compareFunction&&(i.texParameteri(D,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(D,i.TEXTURE_COMPARE_FUNC,Ye[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===en||_.minFilter!==or&&_.minFilter!==Mi||_.type===Xn&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){let H=e.get("EXT_texture_filter_anisotropic");i.texParameterf(D,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function Pe(D,_){let H=!1;D.__webglInit===void 0&&(D.__webglInit=!0,_.addEventListener("dispose",T));let G=_.source,K=f.get(G);K===void 0&&(K={},f.set(G,K));let re=z(_);if(re!==D.__cacheKey){K[re]===void 0&&(K[re]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,H=!0),K[re].usedTimes++;let me=K[D.__cacheKey];me!==void 0&&(K[D.__cacheKey].usedTimes--,me.usedTimes===0&&P(_)),D.__cacheKey=re,D.__webglTexture=K[re].texture}return H}function j(D,_,H){return Math.floor(Math.floor(D/H)/_)}function Q(D,_,H,G){let re=D.updateRanges;if(re.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,_.width,_.height,H,G,_.data);else{re.sort((he,pe)=>he.start-pe.start);let me=0;for(let he=1;he<re.length;he++){let pe=re[me],ve=re[he],ge=pe.start+pe.count,be=j(ve.start,_.width,4),Ve=j(pe.start,_.width,4);ve.start<=ge+1&&be===Ve&&j(ve.start+ve.count-1,_.width,4)===be?pe.count=Math.max(pe.count,ve.start+ve.count-pe.start):(++me,re[me]=ve)}re.length=me+1;let Y=t.getParameter(i.UNPACK_ROW_LENGTH),ne=t.getParameter(i.UNPACK_SKIP_PIXELS),te=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,_.width);for(let he=0,pe=re.length;he<pe;he++){let ve=re[he],ge=Math.floor(ve.start/4),be=Math.ceil(ve.count/4),Ve=ge%_.width,W=Math.floor(ge/_.width),Me=be,ae=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,Ve),t.pixelStorei(i.UNPACK_SKIP_ROWS,W),t.texSubImage2D(i.TEXTURE_2D,0,Ve,W,Me,ae,H,G,_.data)}D.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,Y),t.pixelStorei(i.UNPACK_SKIP_PIXELS,ne),t.pixelStorei(i.UNPACK_SKIP_ROWS,te)}}function Se(D,_,H){let G=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(G=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(G=i.TEXTURE_3D);let K=Pe(D,_),re=_.source;t.bindTexture(G,D.__webglTexture,i.TEXTURE0+H);let me=n.get(re);if(re.version!==me.__version||K===!0){if(t.activeTexture(i.TEXTURE0+H),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){let ae=at.getPrimaries(at.workingColorSpace),Ee=_.colorSpace===bi?null:at.getPrimaries(_.colorSpace),we=_.colorSpace===bi||ae===Ee?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,we)}t.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment);let ne=m(_.image,!1,s.maxTextureSize);ne=jt(_,ne);let te=r.convert(_.format,_.colorSpace),he=r.convert(_.type),pe=v(_.internalFormat,te,he,_.normalized,_.colorSpace,_.isVideoTexture);ie(G,_);let ve,ge=_.mipmaps,be=_.isVideoTexture!==!0,Ve=me.__version===void 0||K===!0,W=re.dataReady,Me=S(_,ne);if(_.isDepthTexture)pe=E(_.format===Is,_.type),Ve&&(be?t.texStorage2D(i.TEXTURE_2D,1,pe,ne.width,ne.height):t.texImage2D(i.TEXTURE_2D,0,pe,ne.width,ne.height,0,te,he,null));else if(_.isDataTexture)if(ge.length>0){be&&Ve&&t.texStorage2D(i.TEXTURE_2D,Me,pe,ge[0].width,ge[0].height);for(let ae=0,Ee=ge.length;ae<Ee;ae++)ve=ge[ae],be?W&&t.texSubImage2D(i.TEXTURE_2D,ae,0,0,ve.width,ve.height,te,he,ve.data):t.texImage2D(i.TEXTURE_2D,ae,pe,ve.width,ve.height,0,te,he,ve.data);_.generateMipmaps=!1}else be?(Ve&&t.texStorage2D(i.TEXTURE_2D,Me,pe,ne.width,ne.height),W&&Q(_,ne,te,he)):t.texImage2D(i.TEXTURE_2D,0,pe,ne.width,ne.height,0,te,he,ne.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){be&&Ve&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Me,pe,ge[0].width,ge[0].height,ne.depth);for(let ae=0,Ee=ge.length;ae<Ee;ae++)if(ve=ge[ae],_.format!==qn)if(te!==null)if(be){if(W)if(_.layerUpdates.size>0){let we=Ph(ve.width,ve.height,_.format,_.type);for(let de of _.layerUpdates){let ke=ve.data.subarray(de*we/ve.data.BYTES_PER_ELEMENT,(de+1)*we/ve.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ae,0,0,de,ve.width,ve.height,1,te,ke)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ae,0,0,0,ve.width,ve.height,ne.depth,te,ve.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ae,pe,ve.width,ve.height,ne.depth,0,ve.data,0,0);else ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else be?W&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ae,0,0,0,ve.width,ve.height,ne.depth,te,he,ve.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ae,pe,ve.width,ve.height,ne.depth,0,te,he,ve.data);_.layerUpdates.size>0&&_.clearLayerUpdates()}else{be&&Ve&&t.texStorage2D(i.TEXTURE_2D,Me,pe,ge[0].width,ge[0].height);for(let ae=0,Ee=ge.length;ae<Ee;ae++)ve=ge[ae],_.format!==qn?te!==null?be?W&&t.compressedTexSubImage2D(i.TEXTURE_2D,ae,0,0,ve.width,ve.height,te,ve.data):t.compressedTexImage2D(i.TEXTURE_2D,ae,pe,ve.width,ve.height,0,ve.data):ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):be?W&&t.texSubImage2D(i.TEXTURE_2D,ae,0,0,ve.width,ve.height,te,he,ve.data):t.texImage2D(i.TEXTURE_2D,ae,pe,ve.width,ve.height,0,te,he,ve.data)}else if(_.isDataArrayTexture)if(be){if(Ve&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Me,pe,ne.width,ne.height,ne.depth),W)if(_.layerUpdates.size>0){let ae=Ph(ne.width,ne.height,_.format,_.type);for(let Ee of _.layerUpdates){let we=ne.data.subarray(Ee*ae/ne.data.BYTES_PER_ELEMENT,(Ee+1)*ae/ne.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Ee,ne.width,ne.height,1,te,he,we)}_.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,te,he,ne.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,pe,ne.width,ne.height,ne.depth,0,te,he,ne.data);else if(_.isData3DTexture)be?(Ve&&t.texStorage3D(i.TEXTURE_3D,Me,pe,ne.width,ne.height,ne.depth),W&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,te,he,ne.data)):t.texImage3D(i.TEXTURE_3D,0,pe,ne.width,ne.height,ne.depth,0,te,he,ne.data);else if(_.isFramebufferTexture){if(Ve)if(be)t.texStorage2D(i.TEXTURE_2D,Me,pe,ne.width,ne.height);else{let ae=ne.width,Ee=ne.height;for(let we=0;we<Me;we++)t.texImage2D(i.TEXTURE_2D,we,pe,ae,Ee,0,te,he,null),ae>>=1,Ee>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in i){let ae=i.canvas;if(ae.hasAttribute("layoutsubtree")||ae.setAttribute("layoutsubtree","true"),ne.parentNode!==ae){ae.appendChild(ne),h.add(_),ae.onpaint=Ee=>{let we=Ee.changedElements;for(let de of h)we.includes(de.image)&&(de.needsUpdate=!0)},ae.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,ne);else{let we=i.RGBA,de=i.RGBA,ke=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,we,de,ke,ne)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(ge.length>0){if(be&&Ve){let ae=dt(ge[0]);t.texStorage2D(i.TEXTURE_2D,Me,pe,ae.width,ae.height)}for(let ae=0,Ee=ge.length;ae<Ee;ae++)ve=ge[ae],be?W&&t.texSubImage2D(i.TEXTURE_2D,ae,0,0,te,he,ve):t.texImage2D(i.TEXTURE_2D,ae,pe,te,he,ve);_.generateMipmaps=!1}else if(be){if(Ve){let ae=dt(ne);t.texStorage2D(i.TEXTURE_2D,Me,pe,ae.width,ae.height)}W&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,te,he,ne)}else t.texImage2D(i.TEXTURE_2D,0,pe,te,he,ne);p(_)&&M(G),me.__version=re.version,_.onUpdate&&_.onUpdate(_)}D.__version=_.version}function se(D,_,H){if(_.image.length!==6)return;let G=Pe(D,_),K=_.source;t.bindTexture(i.TEXTURE_CUBE_MAP,D.__webglTexture,i.TEXTURE0+H);let re=n.get(K);if(K.version!==re.__version||G===!0){t.activeTexture(i.TEXTURE0+H);let me=at.getPrimaries(at.workingColorSpace),Y=_.colorSpace===bi?null:at.getPrimaries(_.colorSpace),ne=_.colorSpace===bi||me===Y?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ne);let te=_.isCompressedTexture||_.image[0].isCompressedTexture,he=_.image[0]&&_.image[0].isDataTexture,pe=[];for(let de=0;de<6;de++)!te&&!he?pe[de]=m(_.image[de],!0,s.maxCubemapSize):pe[de]=he?_.image[de].image:_.image[de],pe[de]=jt(_,pe[de]);let ve=pe[0],ge=r.convert(_.format,_.colorSpace),be=r.convert(_.type),Ve=v(_.internalFormat,ge,be,_.normalized,_.colorSpace),W=_.isVideoTexture!==!0,Me=re.__version===void 0||G===!0,ae=K.dataReady,Ee=S(_,ve);ie(i.TEXTURE_CUBE_MAP,_);let we;if(te){W&&Me&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ee,Ve,ve.width,ve.height);for(let de=0;de<6;de++){we=pe[de].mipmaps;for(let ke=0;ke<we.length;ke++){let De=we[ke];_.format!==qn?ge!==null?W?ae&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,ke,0,0,De.width,De.height,ge,De.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,ke,Ve,De.width,De.height,0,De.data):ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,ke,0,0,De.width,De.height,ge,be,De.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,ke,Ve,De.width,De.height,0,ge,be,De.data)}}}else{if(we=_.mipmaps,W&&Me){we.length>0&&Ee++;let de=dt(pe[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ee,Ve,de.width,de.height)}for(let de=0;de<6;de++)if(he){W?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,pe[de].width,pe[de].height,ge,be,pe[de].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,Ve,pe[de].width,pe[de].height,0,ge,be,pe[de].data);for(let ke=0;ke<we.length;ke++){let Pt=we[ke].image[de].image;W?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,ke+1,0,0,Pt.width,Pt.height,ge,be,Pt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,ke+1,Ve,Pt.width,Pt.height,0,ge,be,Pt.data)}}else{W?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,ge,be,pe[de]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,Ve,ge,be,pe[de]);for(let ke=0;ke<we.length;ke++){let De=we[ke];W?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,ke+1,0,0,ge,be,De.image[de]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,ke+1,Ve,ge,be,De.image[de])}}}p(_)&&M(i.TEXTURE_CUBE_MAP),re.__version=K.version,_.onUpdate&&_.onUpdate(_)}D.__version=_.version}function fe(D,_,H,G,K,re){let me=r.convert(H.format,H.colorSpace),Y=r.convert(H.type),ne=v(H.internalFormat,me,Y,H.normalized,H.colorSpace),te=n.get(_),he=n.get(H);if(he.__renderTarget=_,!te.__hasExternalTextures){let pe=Math.max(1,_.width>>re),ve=Math.max(1,_.height>>re);K===i.TEXTURE_3D||K===i.TEXTURE_2D_ARRAY?t.texImage3D(K,re,ne,pe,ve,_.depth,0,me,Y,null):t.texImage2D(K,re,ne,pe,ve,0,me,Y,null)}t.bindFramebuffer(i.FRAMEBUFFER,D),gt(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,G,K,he.__webglTexture,0,ot(_)):(K===i.TEXTURE_2D||K>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,G,K,he.__webglTexture,re),t.bindFramebuffer(i.FRAMEBUFFER,null)}function _e(D,_,H){if(i.bindRenderbuffer(i.RENDERBUFFER,D),_.depthBuffer){let G=_.depthTexture,K=G&&G.isDepthTexture?G.type:null,re=E(_.stencilBuffer,K),me=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;gt(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ot(_),re,_.width,_.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,ot(_),re,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,re,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,me,i.RENDERBUFFER,D)}else{let G=_.textures;for(let K=0;K<G.length;K++){let re=G[K],me=r.convert(re.format,re.colorSpace),Y=r.convert(re.type),ne=v(re.internalFormat,me,Y,re.normalized,re.colorSpace);gt(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ot(_),ne,_.width,_.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,ot(_),ne,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,ne,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ue(D,_,H){let G=_.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,D),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let K=n.get(_.depthTexture);if(K.__renderTarget=_,(!K.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),G){if(K.__webglInit===void 0&&(K.__webglInit=!0,_.depthTexture.addEventListener("dispose",T)),K.__webglTexture===void 0){K.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),ie(i.TEXTURE_CUBE_MAP,_.depthTexture);let te=r.convert(_.depthTexture.format),he=r.convert(_.depthTexture.type),pe;_.depthTexture.format===Ii?pe=i.DEPTH_COMPONENT24:_.depthTexture.format===Is&&(pe=i.DEPTH24_STENCIL8);for(let ve=0;ve<6;ve++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,pe,_.width,_.height,0,te,he,null)}}else O(_.depthTexture,0);let re=K.__webglTexture,me=ot(_),Y=G?i.TEXTURE_CUBE_MAP_POSITIVE_X+H:i.TEXTURE_2D,ne=_.depthTexture.format===Is?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(_.depthTexture.format===Ii)gt(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ne,Y,re,0,me):i.framebufferTexture2D(i.FRAMEBUFFER,ne,Y,re,0);else if(_.depthTexture.format===Is)gt(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ne,Y,re,0,me):i.framebufferTexture2D(i.FRAMEBUFFER,ne,Y,re,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ge(D){let _=n.get(D),H=D.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==D.depthTexture){let G=D.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),G){let K=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,G.removeEventListener("dispose",K)};G.addEventListener("dispose",K),_.__depthDisposeCallback=K}_.__boundDepthTexture=G}if(D.depthTexture&&!_.__autoAllocateDepthBuffer)if(H)for(let G=0;G<6;G++)Ue(_.__webglFramebuffer[G],D,G);else{let G=D.texture.mipmaps;G&&G.length>0?Ue(_.__webglFramebuffer[0],D,0):Ue(_.__webglFramebuffer,D,0)}else if(H){_.__webglDepthbuffer=[];for(let G=0;G<6;G++)if(t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[G]),_.__webglDepthbuffer[G]===void 0)_.__webglDepthbuffer[G]=i.createRenderbuffer(),_e(_.__webglDepthbuffer[G],D,!1);else{let K=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,re=_.__webglDepthbuffer[G];i.bindRenderbuffer(i.RENDERBUFFER,re),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,re)}}else{let G=D.texture.mipmaps;if(G&&G.length>0?t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),_e(_.__webglDepthbuffer,D,!1);else{let K=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,re=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,re),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,re)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Xe(D,_,H){let G=n.get(D);_!==void 0&&fe(G.__webglFramebuffer,D,D.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),H!==void 0&&Ge(D)}function st(D){let _=D.texture,H=n.get(D),G=n.get(_);D.addEventListener("dispose",g);let K=D.textures,re=D.isWebGLCubeRenderTarget===!0,me=K.length>1;if(me||(G.__webglTexture===void 0&&(G.__webglTexture=i.createTexture()),G.__version=_.version,a.memory.textures++),re){H.__webglFramebuffer=[];for(let Y=0;Y<6;Y++)if(_.mipmaps&&_.mipmaps.length>0){H.__webglFramebuffer[Y]=[];for(let ne=0;ne<_.mipmaps.length;ne++)H.__webglFramebuffer[Y][ne]=i.createFramebuffer()}else H.__webglFramebuffer[Y]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){H.__webglFramebuffer=[];for(let Y=0;Y<_.mipmaps.length;Y++)H.__webglFramebuffer[Y]=i.createFramebuffer()}else H.__webglFramebuffer=i.createFramebuffer();if(me)for(let Y=0,ne=K.length;Y<ne;Y++){let te=n.get(K[Y]);te.__webglTexture===void 0&&(te.__webglTexture=i.createTexture(),a.memory.textures++)}if(D.samples>0&&gt(D)===!1){H.__webglMultisampledFramebuffer=i.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let Y=0;Y<K.length;Y++){let ne=K[Y];H.__webglColorRenderbuffer[Y]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,H.__webglColorRenderbuffer[Y]);let te=r.convert(ne.format,ne.colorSpace),he=r.convert(ne.type),pe=v(ne.internalFormat,te,he,ne.normalized,ne.colorSpace,D.isXRRenderTarget===!0),ve=ot(D);i.renderbufferStorageMultisample(i.RENDERBUFFER,ve,pe,D.width,D.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Y,i.RENDERBUFFER,H.__webglColorRenderbuffer[Y])}i.bindRenderbuffer(i.RENDERBUFFER,null),D.depthBuffer&&(H.__webglDepthRenderbuffer=i.createRenderbuffer(),_e(H.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(re){t.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture),ie(i.TEXTURE_CUBE_MAP,_);for(let Y=0;Y<6;Y++)if(_.mipmaps&&_.mipmaps.length>0)for(let ne=0;ne<_.mipmaps.length;ne++)fe(H.__webglFramebuffer[Y][ne],D,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ne);else fe(H.__webglFramebuffer[Y],D,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0);p(_)&&M(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(me){for(let Y=0,ne=K.length;Y<ne;Y++){let te=K[Y],he=n.get(te),pe=i.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(pe=D.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(pe,he.__webglTexture),ie(pe,te),fe(H.__webglFramebuffer,D,te,i.COLOR_ATTACHMENT0+Y,pe,0),p(te)&&M(pe)}t.unbindTexture()}else{let Y=i.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Y=D.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Y,G.__webglTexture),ie(Y,_),_.mipmaps&&_.mipmaps.length>0)for(let ne=0;ne<_.mipmaps.length;ne++)fe(H.__webglFramebuffer[ne],D,_,i.COLOR_ATTACHMENT0,Y,ne);else fe(H.__webglFramebuffer,D,_,i.COLOR_ATTACHMENT0,Y,0);p(_)&&M(Y),t.unbindTexture()}D.depthBuffer&&Ge(D)}function Be(D){let _=D.textures;for(let H=0,G=_.length;H<G;H++){let K=_[H];if(p(K)){let re=C(D),me=n.get(K).__webglTexture;t.bindTexture(re,me),M(re),t.unbindTexture()}}}let pt=[],oe=[];function it(D){if(D.samples>0){if(gt(D)===!1){let _=D.textures,H=D.width,G=D.height,K=i.COLOR_BUFFER_BIT,re=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,me=n.get(D),Y=_.length>1;if(Y)for(let te=0;te<_.length;te++)t.bindFramebuffer(i.FRAMEBUFFER,me.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+te,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,me.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+te,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,me.__webglMultisampledFramebuffer);let ne=D.texture.mipmaps;ne&&ne.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,me.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,me.__webglFramebuffer);for(let te=0;te<_.length;te++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(K|=i.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(K|=i.STENCIL_BUFFER_BIT)),Y){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,me.__webglColorRenderbuffer[te]);let he=n.get(_[te]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,he,0)}i.blitFramebuffer(0,0,H,G,0,0,H,G,K,i.NEAREST),l===!0&&(pt.length=0,oe.length=0,pt.push(i.COLOR_ATTACHMENT0+te),D.depthBuffer&&D.storeMultisampledDepthBuffer===!1&&(pt.push(re),oe.push(re),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,oe)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,pt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Y)for(let te=0;te<_.length;te++){t.bindFramebuffer(i.FRAMEBUFFER,me.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+te,i.RENDERBUFFER,me.__webglColorRenderbuffer[te]);let he=n.get(_[te]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,me.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+te,i.TEXTURE_2D,he,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,me.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.storeMultisampledDepthBuffer===!1&&l){let _=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function ot(D){return Math.min(s.maxSamples,D.samples)}function gt(D){let _=n.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function q(D){let _=a.render.frame;u.get(D)!==_&&(u.set(D,_),D.update())}function jt(D,_){let H=D.colorSpace,G=D.format,K=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||H!==In&&H!==bi&&(at.getTransfer(H)===St?(G!==qn||K!==Bn)&&ze("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):qe("WebGLTextures: Unsupported texture color space:",H)),_}function dt(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(c.width=D.naturalWidth||D.width,c.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(c.width=D.displayWidth,c.height=D.displayHeight):(c.width=D.width,c.height=D.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=V,this.getTextureUnits=w,this.setTextureUnits=N,this.setTexture2D=O,this.setTexture2DArray=I,this.setTexture3D=U,this.setTextureCube=$,this.rebindTextures=Xe,this.setupRenderTarget=st,this.updateRenderTargetMipmap=Be,this.updateMultisampleRenderTarget=it,this.setupDepthRenderbuffer=Ge,this.setupFrameBufferTexture=fe,this.useMultisampledRTT=gt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function yM(i,e){function t(n,s=bi){let r,a=at.getTransfer(s);if(n===Bn)return i.UNSIGNED_BYTE;if(n===sc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===rc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===yh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Mh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===_h)return i.BYTE;if(n===vh)return i.SHORT;if(n===ra)return i.UNSIGNED_SHORT;if(n===ic)return i.INT;if(n===Si)return i.UNSIGNED_INT;if(n===Xn)return i.FLOAT;if(n===hn)return i.HALF_FLOAT;if(n===Sh)return i.ALPHA;if(n===bh)return i.RGB;if(n===qn)return i.RGBA;if(n===Ii)return i.DEPTH_COMPONENT;if(n===Is)return i.DEPTH_STENCIL;if(n===ac)return i.RED;if(n===oc)return i.RED_INTEGER;if(n===Ps)return i.RG;if(n===lc)return i.RG_INTEGER;if(n===cc)return i.RGBA_INTEGER;if(n===_o||n===vo||n===yo||n===Mo)if(a===St)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===_o)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===vo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===yo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Mo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===_o)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===vo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===yo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Mo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===uc||n===hc||n===dc||n===fc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===uc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===hc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===dc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===fc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===pc||n===mc||n===gc||n===xc||n===_c||n===So||n===vc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===pc||n===mc)return a===St?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===gc)return a===St?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===xc)return r.COMPRESSED_R11_EAC;if(n===_c)return r.COMPRESSED_SIGNED_R11_EAC;if(n===So)return r.COMPRESSED_RG11_EAC;if(n===vc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===yc||n===Mc||n===Sc||n===bc||n===Ec||n===wc||n===Tc||n===Ac||n===Rc||n===Cc||n===Ic||n===Pc||n===Lc||n===Nc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===yc)return a===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Mc)return a===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Sc)return a===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===bc)return a===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ec)return a===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===wc)return a===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Tc)return a===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ac)return a===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Rc)return a===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Cc)return a===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ic)return a===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Pc)return a===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Lc)return a===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Nc)return a===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Dc||n===Uc||n===Fc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Dc)return a===St?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Uc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Fc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Oc||n===Bc||n===bo||n===kc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Oc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Bc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===bo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===kc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===aa?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var MM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,SM=`
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

}`,Zh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new ja(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new xt({vertexShader:MM,fragmentShader:SM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ue(new ns(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Jh=class extends Pi{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,d=null,f=null,x=null,y=typeof XRWebGLBinding<"u",m=new Zh,p={},M=t.getContextAttributes(),C=null,v=null,E=[],S=[],T=new Ae,g=null,b=null,P=new Wt;P.viewport=new Ct;let B=new Wt;B.viewport=new Ct;let A=[P,B],V=new Jl,w=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let Q=E[j];return Q===void 0&&(Q=new $r,E[j]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(j){let Q=E[j];return Q===void 0&&(Q=new $r,E[j]=Q),Q.getGripSpace()},this.getHand=function(j){let Q=E[j];return Q===void 0&&(Q=new $r,E[j]=Q),Q.getHandSpace()};function k(j){let Q=S.indexOf(j.inputSource);if(Q===-1)return;let Se=E[Q];Se!==void 0&&(Se.update(j.inputSource,j.frame,c||a),Se.dispatchEvent({type:j.type,data:j.inputSource}))}function z(){s.removeEventListener("select",k),s.removeEventListener("selectstart",k),s.removeEventListener("selectend",k),s.removeEventListener("squeeze",k),s.removeEventListener("squeezestart",k),s.removeEventListener("squeezeend",k),s.removeEventListener("end",z),s.removeEventListener("inputsourceschange",O);for(let j=0;j<E.length;j++){let Q=S[j];Q!==null&&(S[j]=null,E[j].disconnect(Q))}w=null,N=null,m.reset();for(let j in p)delete p[j];if(e.setRenderTarget(C),f=null,d=null,h=null,s=null,v=null,Pe.stop(),n.isPresenting=!1,e.setPixelRatio(g),e.setSize(T.width,T.height,!1),b!==null){let j=b.camera;j.fov=b.fov,j.zoom=b.zoom,j.updateProjectionMatrix(),b=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,n.isPresenting===!0&&ze("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,n.isPresenting===!0&&ze("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h===null&&y&&(h=new XRWebGLBinding(s,t)),h},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(j){if(s=j,s!==null){if(C=e.getRenderTarget(),s.addEventListener("select",k),s.addEventListener("selectstart",k),s.addEventListener("selectend",k),s.addEventListener("squeeze",k),s.addEventListener("squeezestart",k),s.addEventListener("squeezeend",k),s.addEventListener("end",z),s.addEventListener("inputsourceschange",O),M.xrCompatible!==!0&&await t.makeXRCompatible(),g=e.getPixelRatio(),e.getSize(T),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let Se=null,se=null,fe=null;M.depth&&(fe=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Se=M.stencil?Is:Ii,se=M.stencil?aa:Si);let _e={colorFormat:t.RGBA8,depthFormat:fe,scaleFactor:r};h=this.getBinding(),d=h.createProjectionLayer(_e),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),v=new Zt(d.textureWidth,d.textureHeight,{format:qn,type:Bn,depthTexture:new Ts(d.textureWidth,d.textureHeight,se,void 0,void 0,void 0,void 0,void 0,void 0,Se),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let Se={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,Se),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new Zt(f.framebufferWidth,f.framebufferHeight,{format:qn,type:Bn,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Pe.setContext(s),Pe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function O(j){for(let Q=0;Q<j.removed.length;Q++){let Se=j.removed[Q],se=S.indexOf(Se);se>=0&&(S[se]=null,E[se].disconnect(Se))}for(let Q=0;Q<j.added.length;Q++){let Se=j.added[Q],se=S.indexOf(Se);if(se===-1){for(let _e=0;_e<E.length;_e++)if(_e>=S.length){S.push(Se),se=_e;break}else if(S[_e]===null){S[_e]=Se,se=_e;break}if(se===-1)break}let fe=E[se];fe&&fe.connect(Se)}}let I=new L,U=new L;function $(j,Q,Se){I.setFromMatrixPosition(Q.matrixWorld),U.setFromMatrixPosition(Se.matrixWorld);let se=I.distanceTo(U),fe=Q.projectionMatrix.elements,_e=Se.projectionMatrix.elements,Ue=fe[14]/(fe[10]-1),Ge=fe[14]/(fe[10]+1),Xe=(fe[9]+1)/fe[5],st=(fe[9]-1)/fe[5],Be=(fe[8]-1)/fe[0],pt=(_e[8]+1)/_e[0],oe=Ue*Be,it=Ue*pt,ot=se/(-Be+pt),gt=ot*-Be;if(Q.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(gt),j.translateZ(ot),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),fe[10]===-1)j.projectionMatrix.copy(Q.projectionMatrix),j.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{let q=Ue+ot,jt=Ge+ot,dt=oe-gt,D=it+(se-gt),_=Xe*Ge/jt*q,H=st*Ge/jt*q;j.projectionMatrix.makePerspective(dt,D,_,H,q,jt),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function ye(j,Q){Q===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(Q.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(s===null)return;let Q=j.near,Se=j.far;m.texture!==null&&(m.depthNear>0&&(Q=m.depthNear),m.depthFar>0&&(Se=m.depthFar)),V.near=B.near=P.near=Q,V.far=B.far=P.far=Se,(w!==V.near||N!==V.far)&&(s.updateRenderState({depthNear:V.near,depthFar:V.far}),w=V.near,N=V.far),V.layers.mask=j.layers.mask|6,P.layers.mask=V.layers.mask&-5,B.layers.mask=V.layers.mask&-3;let se=j.parent,fe=V.cameras;ye(V,se);for(let _e=0;_e<fe.length;_e++)ye(fe[_e],se);fe.length===2?$(V,P,B):V.projectionMatrix.copy(P.projectionMatrix),b===null&&j.isPerspectiveCamera&&(b={camera:j,fov:j.fov,zoom:j.zoom}),le(j,V,se)};function le(j,Q,Se){Se===null?j.matrix.copy(Q.matrixWorld):(j.matrix.copy(Se.matrixWorld),j.matrix.invert(),j.matrix.multiply(Q.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(Q.projectionMatrix),j.projectionMatrixInverse.copy(Q.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Js*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return V},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(j){l=j,d!==null&&(d.fixedFoveation=j),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=j)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(V)},this.getCameraTexture=function(j){return p[j]};let Ye=null;function ie(j,Q){if(u=Q.getViewerPose(c||a),x=Q,u!==null){let Se=u.views;f!==null&&(e.setRenderTargetFramebuffer(v,f.framebuffer),e.setRenderTarget(v));let se=!1;Se.length!==V.cameras.length&&(V.cameras.length=0,se=!0);for(let Ge=0;Ge<Se.length;Ge++){let Xe=Se[Ge],st=null;if(f!==null)st=f.getViewport(Xe);else{let pt=h.getViewSubImage(d,Xe);st=pt.viewport,Ge===0&&(e.setRenderTargetTextures(v,pt.colorTexture,pt.depthStencilTexture),e.setRenderTarget(v))}let Be=A[Ge];Be===void 0&&(Be=new Wt,Be.layers.enable(Ge),Be.viewport=new Ct,A[Ge]=Be),Be.matrix.fromArray(Xe.transform.matrix),Be.matrix.decompose(Be.position,Be.quaternion,Be.scale),Be.projectionMatrix.fromArray(Xe.projectionMatrix),Be.projectionMatrixInverse.copy(Be.projectionMatrix).invert(),Be.viewport.set(st.x,st.y,st.width,st.height),Ge===0&&(V.matrix.copy(Be.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale)),se===!0&&V.cameras.push(Be)}let fe=s.enabledFeatures;if(fe&&fe.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){h=n.getBinding();let Ge=h.getDepthInformation(Se[0]);Ge&&Ge.isValid&&Ge.texture&&m.init(Ge,s.renderState)}if(fe&&fe.includes("camera-access")&&y){e.state.unbindTexture(),h=n.getBinding();for(let Ge=0;Ge<Se.length;Ge++){let Xe=Se[Ge].camera;if(Xe){let st=p[Xe];st||(st=new ja,p[Xe]=st);let Be=h.getCameraImage(Xe);st.sourceTexture=Be}}}}for(let Se=0;Se<E.length;Se++){let se=S[Se],fe=E[Se];se!==null&&fe!==void 0&&fe.update(se,Q,c||a)}Ye&&Ye(j,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),x=null}let Pe=new am;Pe.setAnimationLoop(ie),this.setAnimationLoop=function(j){Ye=j},this.dispose=function(){}}},bM=new Je,dm=new je;dm.set(-1,0,0,0,1,0,0,0,1);function EM(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Rh(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,M,C,v){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,v)):p.isMeshMatcapMaterial?(r(m,p),x(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),y(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,M,C):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Ht&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Ht&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let M=e.get(p),C=M.envMap,v=M.envMapRotation;C&&(m.envMap.value=C,m.envMapRotation.value.setFromMatrix4(bM.makeRotationFromEuler(v)).transpose(),C.isCubeTexture&&C.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(dm),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,M,C){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=C*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ht&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function x(m,p){p.matcap&&(m.matcap.value=p.matcap)}function y(m,p){let M=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function wM(i,e,t,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,E){let S=E.program;n.uniformBlockBinding(v,S)}function c(v,E){let S=s[v.id];S===void 0&&(m(v),S=u(v),s[v.id]=S,v.addEventListener("dispose",M));let T=E.program;n.updateUBOMapping(v,T);let g=e.render.frame;r[v.id]!==g&&(d(v),r[v.id]=g)}function u(v){let E=h();v.__bindingPointIndex=E;let S=i.createBuffer(),T=v.__size,g=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,T,g),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,S),S}function h(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return qe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){let E=s[v.id],S=v.uniforms,T=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let g=0,b=S.length;g<b;g++){let P=S[g];if(Array.isArray(P))for(let B=0,A=P.length;B<A;B++)f(P[B],g,B,T);else f(P,g,0,T)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(v,E,S,T){if(y(v,E,S,T)===!0){let g=v.__offset,b=v.value;if(Array.isArray(b)){let P=0;for(let B=0;B<b.length;B++){let A=b[B],V=p(A);x(A,v.__data,P),typeof A!="number"&&typeof A!="boolean"&&!A.isMatrix3&&!ArrayBuffer.isView(A)&&(P+=V.storage/Float32Array.BYTES_PER_ELEMENT)}}else x(b,v.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,g,v.__data)}}function x(v,E,S){typeof v=="number"||typeof v=="boolean"?E[0]=v:v.isMatrix3?(E[0]=v.elements[0],E[1]=v.elements[1],E[2]=v.elements[2],E[3]=0,E[4]=v.elements[3],E[5]=v.elements[4],E[6]=v.elements[5],E[7]=0,E[8]=v.elements[6],E[9]=v.elements[7],E[10]=v.elements[8],E[11]=0):ArrayBuffer.isView(v)?E.set(new v.constructor(v.buffer,v.byteOffset,E.length)):v.toArray(E,S)}function y(v,E,S,T){let g=v.value,b=E+"_"+S;if(T[b]===void 0)return typeof g=="number"||typeof g=="boolean"?T[b]=g:ArrayBuffer.isView(g)?T[b]=g.slice():T[b]=g.clone(),!0;{let P=T[b];if(typeof g=="number"||typeof g=="boolean"){if(P!==g)return T[b]=g,!0}else{if(ArrayBuffer.isView(g))return!0;if(P.equals(g)===!1)return P.copy(g),!0}}return!1}function m(v){let E=v.uniforms,S=0,T=16;for(let b=0,P=E.length;b<P;b++){let B=Array.isArray(E[b])?E[b]:[E[b]];for(let A=0,V=B.length;A<V;A++){let w=B[A],N=Array.isArray(w.value)?w.value:[w.value];for(let k=0,z=N.length;k<z;k++){let O=N[k],I=p(O),U=S%T,$=U%I.boundary,ye=U+$;S+=$,ye!==0&&T-ye<I.storage&&(S+=T-ye),w.__data=new Float32Array(I.storage/Float32Array.BYTES_PER_ELEMENT),w.__offset=S,S+=I.storage}}}let g=S%T;return g>0&&(S+=T-g),v.__size=S,v.__cache={},this}function p(v){let E={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(E.boundary=4,E.storage=4):v.isVector2?(E.boundary=8,E.storage=8):v.isVector3||v.isColor?(E.boundary=16,E.storage=12):v.isVector4?(E.boundary=16,E.storage=16):v.isMatrix3?(E.boundary=48,E.storage=48):v.isMatrix4?(E.boundary=64,E.storage=64):v.isTexture?ze("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(E.boundary=16,E.storage=v.byteLength):ze("WebGLRenderer: Unsupported uniform value type.",v),E}function M(v){let E=v.target;E.removeEventListener("dispose",M);let S=a.indexOf(E.__bindingPointIndex);a.splice(S,1),i.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function C(){for(let v in s)i.deleteBuffer(s[v]);a=[],s={},r={}}return{bind:l,update:c,dispose:C}}var TM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Bi=null;function AM(){return Bi===null&&(Bi=new Zr(TM,16,16,Ps,hn),Bi.name="DFG_LUT",Bi.minFilter=tn,Bi.magFilter=tn,Bi.wrapS=ei,Bi.wrapT=ei,Bi.generateMipmaps=!1,Bi.needsUpdate=!0),Bi}var Xc=class{constructor(e={}){let{canvas:t=Pp(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1,outputBufferType:f=Bn}=e;this.isWebGLRenderer=!0;let x;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=n.getContextAttributes().alpha}else x=a;let y=f,m=new Set([cc,lc,oc]),p=new Set([Bn,Si,ra,aa,sc,rc]),M=new Uint32Array(4),C=new Int32Array(4),v=new L,E=null,S=null,T=[],g=[],b=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=yi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let P=this,B=!1,A=null,V=null,w=null,N=null;this._outputColorSpace=yt;let k=0,z=0,O=null,I=-1,U=null,$=new Ct,ye=new Ct,le=null,Ye=new ce(0),ie=0,Pe=t.width,j=t.height,Q=1,Se=null,se=null,fe=new Ct(0,0,Pe,j),_e=new Ct(0,0,Pe,j),Ue=!1,Ge=new Jr,Xe=!1,st=!1,Be=new Je,pt=new L,oe=new Ct,it={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ot=!1;function gt(){return O===null?Q:1}let q=n;function jt(R,X){return t.getContext(R,X)}let dt,D,_,H,G,K,re,me,Y,ne,te,he,pe,ve,ge,be,Ve,W,Me,ae,Ee,we,de;try{let R={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",Pt,!1),t.addEventListener("webglcontextrestored",We,!1),t.addEventListener("webglcontextcreationerror",on,!1),q===null){let X="webgl2";if(q=jt(X,R),q===null)throw jt(X)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ke()}catch(R){throw t.removeEventListener("webglcontextlost",Pt,!1),t.removeEventListener("webglcontextrestored",We,!1),t.removeEventListener("webglcontextcreationerror",on,!1),qe("WebGLRenderer: "+R.message),R}function ke(){dt=new Dv(q),dt.init(),Ee=new yM(q,dt),D=new Ev(q,dt,e,Ee),_=new _M(q,dt),D.reversedDepthBuffer&&d&&_.buffers.depth.setReversed(!0),V=q.createFramebuffer(),w=q.createFramebuffer(),N=q.createFramebuffer(),H=new Ov(q),G=new sM,K=new vM(q,dt,_,G,D,Ee,H),re=new Nv(P),me=new kg(q),we=new Sv(q,me),Y=new Uv(q,me,H,we),ne=new kv(q,Y,me,we,H),W=new Bv(q,D,K),ge=new wv(G),te=new iM(P,re,dt,D,we,ge),he=new EM(P,G),pe=new aM,ve=new dM(dt),Ve=new Mv(P,re,_,ne,x,l),be=new xM(P,ne,D),de=new wM(q,H,D,_),Me=new bv(q,dt,H),ae=new Fv(q,dt,H),H.programs=te.programs,P.capabilities=D,P.extensions=dt,P.properties=G,P.renderLists=pe,P.shadowMap=be,P.state=_,P.info=H}y!==Bn&&(b=new zv(y,t.width,t.height,o,s,r));let De=new Jh(P,q);this.xr=De,this.getContext=function(){return q},this.getContextAttributes=function(){return q.getContextAttributes()},this.forceContextLoss=function(){let R=dt.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){let R=dt.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(R){R!==void 0&&(Q=R,this.setSize(Pe,j,!1))},this.getSize=function(R){return R.set(Pe,j)},this.setSize=function(R,X,ee=!0){if(De.isPresenting){ze("WebGLRenderer: Can't change size while VR device is presenting.");return}Pe=R,j=X,t.width=Math.floor(R*Q),t.height=Math.floor(X*Q),ee===!0&&(t.style.width=R+"px",t.style.height=X+"px"),b!==null&&b.setSize(t.width,t.height),this.setViewport(0,0,R,X)},this.getDrawingBufferSize=function(R){return R.set(Pe*Q,j*Q).floor()},this.setDrawingBufferSize=function(R,X,ee){Pe=R,j=X,Q=ee,t.width=Math.floor(R*ee),t.height=Math.floor(X*ee),this.setViewport(0,0,R,X)},this.setEffects=function(R){if(y===Bn){qe("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let X=0;X<R.length;X++)if(R[X].isOutputPass===!0){ze("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}b.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy($)},this.getViewport=function(R){return R.copy(fe)},this.setViewport=function(R,X,ee,Z){R.isVector4?fe.set(R.x,R.y,R.z,R.w):fe.set(R,X,ee,Z),_.viewport($.copy(fe).multiplyScalar(Q).round())},this.getScissor=function(R){return R.copy(_e)},this.setScissor=function(R,X,ee,Z){R.isVector4?_e.set(R.x,R.y,R.z,R.w):_e.set(R,X,ee,Z),_.scissor(ye.copy(_e).multiplyScalar(Q).round())},this.getScissorTest=function(){return Ue},this.setScissorTest=function(R){_.setScissorTest(Ue=R)},this.setOpaqueSort=function(R){Se=R},this.setTransparentSort=function(R){se=R},this.getClearColor=function(R){return R.copy(Ve.getClearColor())},this.setClearColor=function(){Ve.setClearColor(...arguments)},this.getClearAlpha=function(){return Ve.getClearAlpha()},this.setClearAlpha=function(){Ve.setClearAlpha(...arguments)},this.clear=function(R=!0,X=!0,ee=!0){let Z=0;if(R){let J=!1;if(O!==null){let Ie=O.texture.format;J=m.has(Ie)}if(J){let Ie=O.texture.type,Ne=p.has(Ie),Ce=Ve.getClearColor(),Fe=Ve.getClearAlpha(),He=Ce.r,lt=Ce.g,mt=Ce.b;Ne?(M[0]=He,M[1]=lt,M[2]=mt,M[3]=Fe,q.clearBufferuiv(q.COLOR,0,M)):(C[0]=He,C[1]=lt,C[2]=mt,C[3]=Fe,q.clearBufferiv(q.COLOR,0,C))}else Z|=q.COLOR_BUFFER_BIT}X&&(Z|=q.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ee&&(Z|=q.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Z!==0&&q.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(R){R.setRenderer(this),A=R},this.dispose=function(){t.removeEventListener("webglcontextlost",Pt,!1),t.removeEventListener("webglcontextrestored",We,!1),t.removeEventListener("webglcontextcreationerror",on,!1),Ve.dispose(),pe.dispose(),ve.dispose(),G.dispose(),re.dispose(),ne.dispose(),we.dispose(),de.dispose(),te.dispose(),De.dispose(),De.removeEventListener("sessionstart",ef),De.removeEventListener("sessionend",tf),Gs.stop()};function Pt(R){R.preventDefault(),Ga("WebGLRenderer: Context Lost."),B=!0}function We(){Ga("WebGLRenderer: Context Restored."),B=!1;let R=H.autoReset,X=be.enabled,ee=be.autoUpdate,Z=be.needsUpdate,J=be.type;ke(),H.autoReset=R,be.enabled=X,be.autoUpdate=ee,be.needsUpdate=Z,be.type=J}function on(R){qe("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function xn(R){let X=R.target;X.removeEventListener("dispose",xn),Xo(X)}function Xo(R){qo(R),G.remove(R)}function qo(R){let X=G.get(R).programs;X!==void 0&&(X.forEach(function(ee){te.releaseProgram(ee)}),R.isShaderMaterial&&te.releaseShaderCache(R))}this.renderBufferDirect=function(R,X,ee,Z,J,Ie){X===null&&(X=it);let Ne=J.isMesh&&J.matrixWorld.determinantAffine()<0,Ce=A0(R,X,ee,Z,J);_.setMaterial(Z,Ne);let Fe=ee.index,He=1;if(Z.wireframe===!0){if(Fe=Y.getWireframeAttribute(ee),Fe===void 0)return;He=2}let lt=ee.drawRange,mt=ee.attributes.position,Oe=lt.start*He,wt=(lt.start+lt.count)*He;Ie!==null&&(Oe=Math.max(Oe,Ie.start*He),wt=Math.min(wt,(Ie.start+Ie.count)*He)),Fe!==null?(Oe=Math.max(Oe,0),wt=Math.min(wt,Fe.count)):mt!=null&&(Oe=Math.max(Oe,0),wt=Math.min(wt,mt.count));let ln=wt-Oe;if(ln<0||ln===1/0)return;we.setup(J,Z,Ce,ee,Fe);let Vt,Dt=Me;if(Fe!==null&&(Vt=me.get(Fe),Dt=ae,Dt.setIndex(Vt)),J.isMesh)Z.wireframe===!0?(_.setLineWidth(Z.wireframeLinewidth*gt()),Dt.setMode(q.LINES)):Dt.setMode(q.TRIANGLES);else if(J.isLine){let Mn=Z.linewidth;Mn===void 0&&(Mn=1),_.setLineWidth(Mn*gt()),J.isLineSegments?Dt.setMode(q.LINES):J.isLineLoop?Dt.setMode(q.LINE_LOOP):Dt.setMode(q.LINE_STRIP)}else J.isPoints?Dt.setMode(q.POINTS):J.isSprite&&Dt.setMode(q.TRIANGLES);if(J.isBatchedMesh)if(dt.get("WEBGL_multi_draw"))Dt.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else{let Mn=J._multiDrawStarts,Le=J._multiDrawCounts,Rn=J._multiDrawCount,vt=Fe?me.get(Fe).bytesPerElement:1,jn=G.get(Z).currentProgram.getUniforms();for(let Ai=0;Ai<Rn;Ai++)jn.setValue(q,"_gl_DrawID",Ai),Dt.render(Mn[Ai]/vt,Le[Ai])}else if(J.isInstancedMesh)Dt.renderInstances(Oe,ln,J.count);else if(ee.isInstancedBufferGeometry){let Mn=ee._maxInstanceCount!==void 0?ee._maxInstanceCount:1/0,Le=Math.min(ee.instanceCount,Mn);Dt.renderInstances(Oe,ln,Le)}else Dt.render(Oe,ln)};function Qd(R,X,ee,Z){A!==null&&R.isNodeMaterial&&A.setObject(Z,R),Xe===!0&&ge.setState(R,ee,!1),R.transparent===!0&&R.side===zt&&R.forceSinglePass===!1?(R.side=Ht,R.needsUpdate=!0,$o(R,X,Z),R.side=Oi,R.needsUpdate=!0,$o(R,X,Z),R.side=zt):$o(R,X,Z)}this.compile=function(R,X,ee=null){ee===null&&(ee=R),A!==null&&A.renderStart(R,X,ee),S=ve.get(ee),S.init(X),g.push(S),ee.traverseVisible(function(J){J.isLight&&J.layers.test(X.layers)&&(S.pushLight(J),J.castShadow&&S.pushShadow(J))}),R!==ee&&R.traverseVisible(function(J){J.isLight&&J.layers.test(X.layers)&&(S.pushLight(J),J.castShadow&&S.pushShadow(J))}),S.setupLights(),A!==null&&A.updateLights(S.state.lightsArray),st=this.localClippingEnabled,Xe=ge.init(this.clippingPlanes,st),Xe===!0&&ge.setGlobalState(this.clippingPlanes,X),A!==null&&be.render(S.state.shadowsArray,ee,X);let Z=new Set;return R.traverse(function(J){if(!(J.isMesh||J.isPoints||J.isLine||J.isSprite))return;let Ie=J.material;if(Ie)if(Array.isArray(Ie))for(let Ne=0;Ne<Ie.length;Ne++){let Ce=Ie[Ne];Qd(Ce,ee,X,J),Z.add(Ce)}else Qd(Ie,ee,X,J),Z.add(Ie)}),S=g.pop(),A!==null&&A.renderEnd(),Z},this.compileAsync=function(R,X,ee=null){let Z=this.compile(R,X,ee);return new Promise(J=>{function Ie(){if(Z.forEach(function(Ne){let Fe=G.get(Ne).currentProgram;(Fe===void 0||Fe.isReady())&&Z.delete(Ne)}),Z.size===0){J(R);return}setTimeout(Ie,10)}dt.get("KHR_parallel_shader_compile")!==null?Ie():setTimeout(Ie,10)})};let wu=null;function w0(R){wu&&wu(R)}function ef(){Gs.stop()}function tf(){Gs.start()}let Gs=new am;Gs.setAnimationLoop(w0),typeof self<"u"&&Gs.setContext(self),this.setAnimationLoop=function(R){wu=R,De.setAnimationLoop(R),R===null?Gs.stop():Gs.start()},De.addEventListener("sessionstart",ef),De.addEventListener("sessionend",tf),this.render=function(R,X){if(X!==void 0&&X.isCamera!==!0){qe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(B===!0)return;A!==null&&A.renderStart(R,X);let ee=De.enabled===!0&&De.isPresenting===!0,Z=b!==null&&(O===null||ee)&&b.begin(P,O);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),De.enabled===!0&&De.isPresenting===!0&&(b===null||b.isCompositing()===!1)&&(De.cameraAutoUpdate===!0&&De.updateCamera(X),X=De.getCamera()),R.isScene===!0&&R.onBeforeRender(P,R,X,O),S=ve.get(R,g.length),S.init(X),S.state.textureUnits=K.getTextureUnits(),g.push(S),Be.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),Ge.setFromProjectionMatrix(Be,gi,X.reversedDepth),st=this.localClippingEnabled,Xe=ge.init(this.clippingPlanes,st),E=pe.get(R,T.length),E.init(),T.push(E),De.enabled===!0&&De.isPresenting===!0){let Ne=P.xr.getDepthSensingMesh();Ne!==null&&Tu(Ne,X,-1/0,P.sortObjects)}Tu(R,X,0,P.sortObjects),E.finish(),A!==null&&A.updateLights(S.state.lightsArray),P.sortObjects===!0&&E.sort(Se,se),ot=De.enabled===!1||De.isPresenting===!1||De.hasDepthSensing()===!1,ot&&Ve.addToRenderList(E,R),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Xe===!0&&ge.beginShadows();let J=S.state.shadowsArray;if(be.render(J,R,X),Xe===!0&&ge.endShadows(),(Z&&b.hasRenderPass())===!1){let Ne=E.opaque,Ce=E.transmissive;if(S.setupLights(),X.isArrayCamera){let Fe=X.cameras;if(Ce.length>0)for(let He=0,lt=Fe.length;He<lt;He++){let mt=Fe[He];sf(Ne,Ce,R,mt)}ot&&Ve.render(R);for(let He=0,lt=Fe.length;He<lt;He++){let mt=Fe[He];nf(E,R,mt,mt.viewport)}}else Ce.length>0&&sf(Ne,Ce,R,X),ot&&Ve.render(R),nf(E,R,X)}O!==null&&z===0&&(K.updateMultisampleRenderTarget(O),K.updateRenderTargetMipmap(O)),Z&&b.end(P),R.isScene===!0&&R.onAfterRender(P,R,X),we.resetDefaultState(),I=-1,U=null,g.pop(),g.length>0?(S=g[g.length-1],K.setTextureUnits(S.state.textureUnits),Xe===!0&&ge.setGlobalState(P.clippingPlanes,S.state.camera)):S=null,T.pop(),T.length>0?E=T[T.length-1]:E=null,A!==null&&A.renderEnd()};function Tu(R,X,ee,Z){if(R.visible===!1)return;if(R.layers.test(X.layers)){if(R.isGroup)ee=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(X);else if(R.isLightProbeGrid)S.pushLightProbeGrid(R);else if(R.isLight)S.pushLight(R),R.castShadow&&S.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||R.intersectsFrustum(Ge)){Z&&oe.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Be);let Ne=ne.update(R),Ce=R.material;Ce.visible&&E.push(R,Ne,Ce,ee,oe.z,null,X)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||R.intersectsFrustum(Ge))){let Ne=ne.update(R),Ce=R.material;if(Z&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),oe.copy(R.boundingSphere.center)):(Ne.boundingSphere===null&&Ne.computeBoundingSphere(),oe.copy(Ne.boundingSphere.center)),oe.applyMatrix4(R.matrixWorld).applyMatrix4(Be)),Array.isArray(Ce)){let Fe=Ne.groups;for(let He=0,lt=Fe.length;He<lt;He++){let mt=Fe[He],Oe=Ce[mt.materialIndex];Oe&&Oe.visible&&E.push(R,Ne,Oe,ee,oe.z,mt,X)}}else Ce.visible&&E.push(R,Ne,Ce,ee,oe.z,null,X)}}let Ie=R.children;for(let Ne=0,Ce=Ie.length;Ne<Ce;Ne++)Tu(Ie[Ne],X,ee,Z)}function nf(R,X,ee,Z){let{opaque:J,transmissive:Ie,transparent:Ne}=R;S.setupLightsView(ee),Xe===!0&&ge.setGlobalState(P.clippingPlanes,ee),Z&&_.viewport($.copy(Z)),J.length>0&&Yo(J,X,ee),Ie.length>0&&Yo(Ie,X,ee),Ne.length>0&&Yo(Ne,X,ee),_.buffers.depth.setTest(!0),_.buffers.depth.setMask(!0),_.buffers.color.setMask(!0),_.setPolygonOffset(!1)}function sf(R,X,ee,Z){if((ee.isScene===!0?ee.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[Z.id]===void 0){let Oe=dt.has("EXT_color_buffer_half_float")||dt.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[Z.id]=new Zt(1,1,{generateMipmaps:!0,type:Oe?hn:Bn,minFilter:Mi,samples:Math.max(4,D.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:at.workingColorSpace})}let Ie=S.state.transmissionRenderTarget[Z.id],Ne=Z.viewport||$;Ie.setSize(Ne.z*P.transmissionResolutionScale,Ne.w*P.transmissionResolutionScale);let Ce=P.getRenderTarget(),Fe=P.getActiveCubeFace(),He=P.getActiveMipmapLevel();P.setRenderTarget(Ie),P.getClearColor(Ye),ie=P.getClearAlpha(),ie<1&&P.setClearColor(16777215,.5),P.clear(),ot&&Ve.render(ee);let lt=P.toneMapping;P.toneMapping=yi;let mt=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),S.setupLightsView(Z),Xe===!0&&ge.setGlobalState(P.clippingPlanes,Z),Yo(R,ee,Z),K.updateMultisampleRenderTarget(Ie),K.updateRenderTargetMipmap(Ie),dt.has("WEBGL_multisampled_render_to_texture")===!1){let Oe=!1;for(let wt=0,ln=X.length;wt<ln;wt++){let Vt=X[wt],{object:Dt,geometry:Mn,material:Le,group:Rn}=Vt;if(Le.side===zt&&Dt.layers.test(Z.layers)){let vt=Le.side;Le.side=Ht,Le.needsUpdate=!0,rf(Dt,ee,Z,Mn,Le,Rn),Le.side=vt,Le.needsUpdate=!0,Oe=!0}}Oe===!0&&(K.updateMultisampleRenderTarget(Ie),K.updateRenderTargetMipmap(Ie))}P.setRenderTarget(Ce,Fe,He),P.setClearColor(Ye,ie),mt!==void 0&&(Z.viewport=mt),P.toneMapping=lt}function Yo(R,X,ee){let Z=X.isScene===!0?X.overrideMaterial:null;for(let J=0,Ie=R.length;J<Ie;J++){let Ne=R[J],{object:Ce,geometry:Fe,group:He}=Ne,lt=Ne.material;lt.allowOverride===!0&&Z!==null&&(lt=Z),Ce.layers.test(ee.layers)&&rf(Ce,X,ee,Fe,lt,He)}}function rf(R,X,ee,Z,J,Ie){A!==null&&J.isNodeMaterial&&A.setObject(R,J),R.onBeforeRender(P,X,ee,Z,J,Ie),R.modelViewMatrix.multiplyMatrices(ee.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),J.onBeforeRender(P,X,ee,Z,R,Ie),J.transparent===!0&&J.side===zt&&J.forceSinglePass===!1?(J.side=Ht,J.needsUpdate=!0,P.renderBufferDirect(ee,X,Z,J,R,Ie),J.side=Oi,J.needsUpdate=!0,P.renderBufferDirect(ee,X,Z,J,R,Ie),J.side=zt):P.renderBufferDirect(ee,X,Z,J,R,Ie),R.onAfterRender(P,X,ee,Z,J,Ie)}function $o(R,X,ee){X.isScene!==!0&&(X=it);let Z=G.get(R),J=S.state.lights,Ie=S.state.shadowsArray,Ne=J.state.version,Ce=te.getParameters(R,J.state,Ie,X,ee,S.state.lightProbeGridArray),Fe=te.getProgramCacheKey(Ce),He=Z.programs;Z.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?X.environment:null,Z.fog=X.fog;let lt=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;Z.envMap=re.get(R.envMap||Z.environment,lt),Z.envMapRotation=Z.environment!==null&&R.envMap===null?X.environmentRotation:R.envMapRotation,He===void 0&&(R.addEventListener("dispose",xn),He=new Map,Z.programs=He);let mt=He.get(Fe);if(mt!==void 0){if(Z.currentProgram===mt&&Z.lightsStateVersion===Ne)return of(R,Ce),mt}else Ce.uniforms=te.getUniforms(R),A!==null&&R.isNodeMaterial&&A.build(R,ee,Ce),R.onBeforeCompile(Ce,P),mt=te.acquireProgram(Ce,Fe),He.set(Fe,mt),Z.uniforms=Ce.uniforms;let Oe=Z.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Oe.clippingPlanes=ge.uniform),of(R,Ce),Z.needsLights=C0(R),Z.lightsStateVersion=Ne,Z.needsLights&&(Oe.ambientLightColor.value=J.state.ambient,Oe.lightProbe.value=J.state.probe,Oe.sunLights.value=J.state.sun,Oe.sunLightShadows.value=J.state.sunShadow,Oe.directionalLights.value=J.state.directional,Oe.directionalLightShadows.value=J.state.directionalShadow,Oe.spotLights.value=J.state.spot,Oe.spotLightShadows.value=J.state.spotShadow,Oe.rectAreaLights.value=J.state.rectArea,Oe.ltc_1.value=J.state.rectAreaLTC1,Oe.ltc_2.value=J.state.rectAreaLTC2,Oe.pointLights.value=J.state.point,Oe.pointLightShadows.value=J.state.pointShadow,Oe.hemisphereLights.value=J.state.hemi,Oe.sunShadowMatrix.value=J.state.sunShadowMatrix,Oe.sunShadowCascade.value=J.state.sunShadowCascade,Oe.directionalShadowMatrix.value=J.state.directionalShadowMatrix,Oe.spotLightMatrix.value=J.state.spotLightMatrix,Oe.spotLightMap.value=J.state.spotLightMap,Oe.pointShadowMatrix.value=J.state.pointShadowMatrix),Z.lightProbeGrid=S.state.lightProbeGridArray.length>0,Z.currentProgram=mt,Z.uniformsList=null,mt}function af(R){if(R.uniformsList===null){let X=R.currentProgram.getUniforms();R.uniformsList=ua.seqWithValue(X.seq,R.uniforms)}return R.uniformsList}function of(R,X){let ee=G.get(R);ee.outputColorSpace=X.outputColorSpace,ee.batching=X.batching,ee.batchingColor=X.batchingColor,ee.instancing=X.instancing,ee.instancingColor=X.instancingColor,ee.instancingMorph=X.instancingMorph,ee.skinning=X.skinning,ee.morphTargets=X.morphTargets,ee.morphNormals=X.morphNormals,ee.morphColors=X.morphColors,ee.morphTargetsCount=X.morphTargetsCount,ee.numClippingPlanes=X.numClippingPlanes,ee.numIntersection=X.numClipIntersection,ee.vertexAlphas=X.vertexAlphas,ee.vertexTangents=X.vertexTangents,ee.toneMapping=X.toneMapping}function T0(R,X){if(R.length===0)return null;if(R.length===1)return R[0].texture!==null?R[0]:null;v.setFromMatrixPosition(X.matrixWorld);for(let ee=0,Z=R.length;ee<Z;ee++){let J=R[ee];if(J.texture!==null&&J.boundingBox.containsPoint(v))return J}return null}function A0(R,X,ee,Z,J){X.isScene!==!0&&(X=it),K.resetTextureUnits();let Ie=X.fog,Ne=Z.isMeshStandardMaterial||Z.isMeshLambertMaterial||Z.isMeshPhongMaterial?X.environment:null,Ce=O===null?P.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:at.workingColorSpace,Fe=Z.isMeshStandardMaterial||Z.isMeshLambertMaterial&&!Z.envMap||Z.isMeshPhongMaterial&&!Z.envMap,He=re.get(Z.envMap||Ne,Fe),lt=Z.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,mt=!!ee.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),Oe=!!ee.morphAttributes.position,wt=!!ee.morphAttributes.normal,ln=!!ee.morphAttributes.color,Vt=yi;Z.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(Vt=P.toneMapping);let Dt=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,Mn=Dt!==void 0?Dt.length:0,Le=G.get(Z),Rn=S.state.lights;if(Xe===!0&&(st===!0||R!==U)){let kt=R===U&&Z.id===I;ge.setState(Z,R,kt)}let vt=!1;Z.version===Le.__version?(Le.needsLights&&Le.lightsStateVersion!==Rn.state.version||Le.outputColorSpace!==Ce||J.isBatchedMesh&&Le.batching===!1||!J.isBatchedMesh&&Le.batching===!0||J.isBatchedMesh&&Le.batchingColor===!0&&J._colorsTexture===null||J.isBatchedMesh&&Le.batchingColor===!1&&J._colorsTexture!==null||J.isInstancedMesh&&Le.instancing===!1||!J.isInstancedMesh&&Le.instancing===!0||J.isSkinnedMesh&&Le.skinning===!1||!J.isSkinnedMesh&&Le.skinning===!0||J.isInstancedMesh&&Le.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&Le.instancingColor===!1&&J.instanceColor!==null||J.isInstancedMesh&&Le.instancingMorph===!0&&J.morphTexture===null||J.isInstancedMesh&&Le.instancingMorph===!1&&J.morphTexture!==null||Le.envMap!==He||Z.fog===!0&&Le.fog!==Ie||Le.numClippingPlanes!==void 0&&(Le.numClippingPlanes!==ge.numPlanes||Le.numIntersection!==ge.numIntersection)||Le.vertexAlphas!==lt||Le.vertexTangents!==mt||Le.morphTargets!==Oe||Le.morphNormals!==wt||Le.morphColors!==ln||Le.toneMapping!==Vt||Le.morphTargetsCount!==Mn||!!Le.lightProbeGrid!=S.state.lightProbeGridArray.length>0)&&(vt=!0):(vt=!0,Le.__version=Z.version);let jn=Le.currentProgram;vt===!0&&(jn=$o(Z,X,J),A&&Z.isNodeMaterial&&A.onUpdateProgram(Z,jn,Le));let Ai=!1,ms=!1,yr=!1,Lt=jn.getUniforms(),Qt=Le.uniforms;if(_.useProgram(jn.program)&&(Ai=!0,ms=!0,yr=!0),Z.id!==I&&(I=Z.id,ms=!0),Le.needsLights){let kt=T0(S.state.lightProbeGridArray,J);Le.lightProbeGrid!==kt&&(Le.lightProbeGrid=kt,ms=!0)}if(Ai||U!==R){_.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Lt.setValue(q,"projectionMatrix",R.projectionMatrix),Lt.setValue(q,"viewMatrix",R.matrixWorldInverse);let xs=Lt.map.cameraPosition;xs!==void 0&&xs.setValue(q,pt.setFromMatrixPosition(R.matrixWorld)),D.logarithmicDepthBuffer&&Lt.setValue(q,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&Lt.setValue(q,"isOrthographic",R.isOrthographicCamera===!0),U!==R&&(U=R,ms=!0,yr=!0)}if(Le.needsLights&&(Rn.state.sunShadowMap.length>0&&Lt.setValue(q,"sunShadowMap",Rn.state.sunShadowMap,K),Rn.state.directionalShadowMap.length>0&&Lt.setValue(q,"directionalShadowMap",Rn.state.directionalShadowMap,K),Rn.state.spotShadowMap.length>0&&Lt.setValue(q,"spotShadowMap",Rn.state.spotShadowMap,K),Rn.state.pointShadowMap.length>0&&Lt.setValue(q,"pointShadowMap",Rn.state.pointShadowMap,K)),J.isSkinnedMesh){Lt.setOptional(q,J,"bindMatrix"),Lt.setOptional(q,J,"bindMatrixInverse");let kt=J.skeleton;kt&&(kt.boneTexture===null&&kt.computeBoneTexture(),Lt.setValue(q,"boneTexture",kt.boneTexture,K))}J.isBatchedMesh&&(Lt.setOptional(q,J,"batchingTexture"),Lt.setValue(q,"batchingTexture",J._matricesTexture,K),Lt.setOptional(q,J,"batchingIdTexture"),Lt.setValue(q,"batchingIdTexture",J._indirectTexture,K),Lt.setOptional(q,J,"batchingColorTexture"),J._colorsTexture!==null&&Lt.setValue(q,"batchingColorTexture",J._colorsTexture,K));let gs=ee.morphAttributes;if((gs.position!==void 0||gs.normal!==void 0||gs.color!==void 0)&&W.update(J,ee,jn),(ms||Le.receiveShadow!==J.receiveShadow)&&(Le.receiveShadow=J.receiveShadow,Lt.setValue(q,"receiveShadow",J.receiveShadow)),(Z.isMeshStandardMaterial||Z.isMeshLambertMaterial||Z.isMeshPhongMaterial)&&Z.envMap===null&&X.environment!==null&&(Qt.envMapIntensity.value=X.environmentIntensity),Qt.dfgLUT!==void 0&&(Qt.dfgLUT.value=AM()),ms){if(Lt.setValue(q,"toneMappingExposure",P.toneMappingExposure),Le.needsLights&&R0(Qt,yr),Ie&&Z.fog===!0&&he.refreshFogUniforms(Qt,Ie),he.refreshMaterialUniforms(Qt,Z,Q,j,S.state.transmissionRenderTarget[R.id]),Le.needsLights&&Le.lightProbeGrid){let kt=Le.lightProbeGrid;Qt.probesSH.value=kt.texture,Qt.probesMin.value.copy(kt.boundingBox.min),Qt.probesMax.value.copy(kt.boundingBox.max),Qt.probesResolution.value.copy(kt.resolution)}ua.upload(q,af(Le),Qt,K)}if(Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(ua.upload(q,af(Le),Qt,K),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&Lt.setValue(q,"center",J.center),Lt.setValue(q,"modelViewMatrix",J.modelViewMatrix),Lt.setValue(q,"normalMatrix",J.normalMatrix),Lt.setValue(q,"modelMatrix",J.matrixWorld),Z.uniformsGroups!==void 0){let kt=Z.uniformsGroups;for(let xs=0,Mr=kt.length;xs<Mr;xs++){let cf=kt[xs];de.update(cf,jn),de.bind(cf,jn)}}return jn}function R0(R,X){R.ambientLightColor.needsUpdate=X,R.lightProbe.needsUpdate=X,R.sunLights.needsUpdate=X,R.sunLightShadows.needsUpdate=X,R.directionalLights.needsUpdate=X,R.directionalLightShadows.needsUpdate=X,R.pointLights.needsUpdate=X,R.pointLightShadows.needsUpdate=X,R.spotLights.needsUpdate=X,R.spotLightShadows.needsUpdate=X,R.rectAreaLights.needsUpdate=X,R.hemisphereLights.needsUpdate=X}function C0(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(R,X,ee){let Z=G.get(R);Z.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,Z.__autoAllocateDepthBuffer===!1&&(Z.__useRenderToTexture=!1),G.get(R.texture).__webglTexture=X,G.get(R.depthTexture).__webglTexture=Z.__autoAllocateDepthBuffer?void 0:ee,Z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,X){let ee=G.get(R);ee.__webglFramebuffer=X,ee.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(R,X=0,ee=0){O=R,k=X,z=ee;let Z=null,J=!1,Ie=!1;if(R){let Ce=G.get(R);if(Ce.__useDefaultFramebuffer!==void 0){_.bindFramebuffer(q.FRAMEBUFFER,Ce.__webglFramebuffer),$.copy(R.viewport),ye.copy(R.scissor),le=R.scissorTest,_.viewport($),_.scissor(ye),_.setScissorTest(le),I=-1;return}else if(Ce.__webglFramebuffer===void 0)K.setupRenderTarget(R);else if(Ce.__hasExternalTextures)K.rebindTextures(R,G.get(R.texture).__webglTexture,G.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){let lt=R.depthTexture;if(Ce.__boundDepthTexture!==lt){if(lt!==null&&G.has(lt)&&(R.width!==lt.image.width||R.height!==lt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");K.setupDepthRenderbuffer(R)}}let Fe=R.texture;(Fe.isData3DTexture||Fe.isDataArrayTexture||Fe.isCompressedArrayTexture)&&(Ie=!0);let He=G.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(He[X])?Z=He[X][ee]:Z=He[X],J=!0):R.samples>0&&K.useMultisampledRTT(R)===!1?Z=G.get(R).__webglMultisampledFramebuffer:Array.isArray(He)?Z=He[ee]:Z=He,$.copy(R.viewport),ye.copy(R.scissor),le=R.scissorTest}else $.copy(fe).multiplyScalar(Q).floor(),ye.copy(_e).multiplyScalar(Q).floor(),le=Ue;if(ee!==0&&(Z=V),_.bindFramebuffer(q.FRAMEBUFFER,Z)&&_.drawBuffers(R,Z),_.viewport($),_.scissor(ye),_.setScissorTest(le),J){let Ce=G.get(R.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_CUBE_MAP_POSITIVE_X+X,Ce.__webglTexture,ee)}else if(Ie){let Ce=X;for(let Fe=0;Fe<R.textures.length;Fe++){let He=G.get(R.textures[Fe]);q.framebufferTextureLayer(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0+Fe,He.__webglTexture,ee,Ce)}}else if(R!==null&&ee!==0){let Ce=G.get(R.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,Ce.__webglTexture,ee)}I=-1};function lf(R){let X=G.get(R);return(X.__readFormat!==R.format||X.__readType!==R.type)&&(X.__readFormat=R.format,X.__readType=R.type,X.__formatReadable=D.textureFormatReadable(R.format),X.__typeReadable=D.textureTypeReadable(R.type)),X}this.readRenderTargetPixels=function(R,X,ee,Z,J,Ie,Ne,Ce=0){if(!(R&&R.isWebGLRenderTarget)){qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Fe=G.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ne!==void 0&&(Fe=Fe[Ne]),Fe){_.bindFramebuffer(q.FRAMEBUFFER,Fe);try{let He=R.textures[Ce],lt=He.format,mt=He.type;R.textures.length>1&&q.readBuffer(q.COLOR_ATTACHMENT0+Ce);let Oe=lf(He);if(Oe.__formatReadable===!1){qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Oe.__typeReadable===!1){qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=R.width-Z&&ee>=0&&ee<=R.height-J&&q.readPixels(X,ee,Z,J,Ee.convert(lt),Ee.convert(mt),Ie)}finally{let He=O!==null?G.get(O).__webglFramebuffer:null;_.bindFramebuffer(q.FRAMEBUFFER,He)}}},this.readRenderTargetPixelsAsync=async function(R,X,ee,Z,J,Ie,Ne,Ce=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Fe=G.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ne!==void 0&&(Fe=Fe[Ne]),Fe)if(X>=0&&X<=R.width-Z&&ee>=0&&ee<=R.height-J){_.bindFramebuffer(q.FRAMEBUFFER,Fe);let He=R.textures[Ce],lt=He.format,mt=He.type;R.textures.length>1&&q.readBuffer(q.COLOR_ATTACHMENT0+Ce);let Oe=lf(He);if(Oe.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Oe.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let wt=q.createBuffer();q.bindBuffer(q.PIXEL_PACK_BUFFER,wt),q.bufferData(q.PIXEL_PACK_BUFFER,Ie.byteLength,q.STREAM_READ),q.readPixels(X,ee,Z,J,Ee.convert(lt),Ee.convert(mt),0),q.bindBuffer(q.PIXEL_PACK_BUFFER,null);let ln=O!==null?G.get(O).__webglFramebuffer:null;_.bindFramebuffer(q.FRAMEBUFFER,ln);let Vt=q.fenceSync(q.SYNC_GPU_COMMANDS_COMPLETE,0);return q.flush(),await Np(q,Vt,4),q.bindBuffer(q.PIXEL_PACK_BUFFER,wt),q.getBufferSubData(q.PIXEL_PACK_BUFFER,0,Ie),q.bindBuffer(q.PIXEL_PACK_BUFFER,null),q.deleteBuffer(wt),q.deleteSync(Vt),Ie}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,X=null,ee=0){let Z=Math.pow(2,-ee),J=Math.floor(R.image.width*Z),Ie=Math.floor(R.image.height*Z),Ne=X!==null?X.x:0,Ce=X!==null?X.y:0;K.setTexture2D(R,0),q.copyTexSubImage2D(q.TEXTURE_2D,ee,0,0,Ne,Ce,J,Ie),_.unbindTexture()},this.copyTextureToTexture=function(R,X,ee=null,Z=null,J=0,Ie=0){let Ne,Ce,Fe,He,lt,mt,Oe,wt,ln,Vt=R.isCompressedTexture?R.mipmaps[Ie]:R.image;if(ee!==null)Ne=ee.max.x-ee.min.x,Ce=ee.max.y-ee.min.y,Fe=ee.isBox3?ee.max.z-ee.min.z:1,He=ee.min.x,lt=ee.min.y,mt=ee.isBox3?ee.min.z:0;else{let Qt=Math.pow(2,-J);Ne=Math.floor(Vt.width*Qt),Ce=Math.floor(Vt.height*Qt),R.isDataArrayTexture?Fe=Vt.depth:R.isData3DTexture?Fe=Math.floor(Vt.depth*Qt):Fe=1,He=0,lt=0,mt=0}Z!==null?(Oe=Z.x,wt=Z.y,ln=Z.z):(Oe=0,wt=0,ln=0);let Dt=Ee.convert(X.format),Mn=Ee.convert(X.type),Le;X.isData3DTexture?(K.setTexture3D(X,0),Le=q.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(K.setTexture2DArray(X,0),Le=q.TEXTURE_2D_ARRAY):(K.setTexture2D(X,0),Le=q.TEXTURE_2D),_.activeTexture(q.TEXTURE0),_.pixelStorei(q.UNPACK_FLIP_Y_WEBGL,X.flipY),_.pixelStorei(q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),_.pixelStorei(q.UNPACK_ALIGNMENT,X.unpackAlignment);let Rn=_.getParameter(q.UNPACK_ROW_LENGTH),vt=_.getParameter(q.UNPACK_IMAGE_HEIGHT),jn=_.getParameter(q.UNPACK_SKIP_PIXELS),Ai=_.getParameter(q.UNPACK_SKIP_ROWS),ms=_.getParameter(q.UNPACK_SKIP_IMAGES);_.pixelStorei(q.UNPACK_ROW_LENGTH,Vt.width),_.pixelStorei(q.UNPACK_IMAGE_HEIGHT,Vt.height),_.pixelStorei(q.UNPACK_SKIP_PIXELS,He),_.pixelStorei(q.UNPACK_SKIP_ROWS,lt),_.pixelStorei(q.UNPACK_SKIP_IMAGES,mt);let yr=R.isDataArrayTexture||R.isData3DTexture,Lt=X.isDataArrayTexture||X.isData3DTexture;if(R.isDepthTexture){let Qt=G.get(R),gs=G.get(X),kt=G.get(Qt.__renderTarget),xs=G.get(gs.__renderTarget);_.bindFramebuffer(q.READ_FRAMEBUFFER,kt.__webglFramebuffer),_.bindFramebuffer(q.DRAW_FRAMEBUFFER,xs.__webglFramebuffer);for(let Mr=0;Mr<Fe;Mr++)yr&&(q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,G.get(R).__webglTexture,J,mt+Mr),q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,G.get(X).__webglTexture,Ie,ln+Mr)),q.blitFramebuffer(He,lt,Ne,Ce,Oe,wt,Ne,Ce,q.DEPTH_BUFFER_BIT,q.NEAREST);_.bindFramebuffer(q.READ_FRAMEBUFFER,null),_.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else if(J!==0||R.isRenderTargetTexture||G.has(R)){let Qt=G.get(R),gs=G.get(X);_.bindFramebuffer(q.READ_FRAMEBUFFER,w),_.bindFramebuffer(q.DRAW_FRAMEBUFFER,N);for(let kt=0;kt<Fe;kt++)yr?q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,Qt.__webglTexture,J,mt+kt):q.framebufferTexture2D(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,Qt.__webglTexture,J),Lt?q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,gs.__webglTexture,Ie,ln+kt):q.framebufferTexture2D(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,gs.__webglTexture,Ie),J!==0?q.blitFramebuffer(He,lt,Ne,Ce,Oe,wt,Ne,Ce,q.COLOR_BUFFER_BIT,q.NEAREST):Lt?q.copyTexSubImage3D(Le,Ie,Oe,wt,ln+kt,He,lt,Ne,Ce):q.copyTexSubImage2D(Le,Ie,Oe,wt,He,lt,Ne,Ce);_.bindFramebuffer(q.READ_FRAMEBUFFER,null),_.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else Lt?R.isDataTexture||R.isData3DTexture?q.texSubImage3D(Le,Ie,Oe,wt,ln,Ne,Ce,Fe,Dt,Mn,Vt.data):X.isCompressedArrayTexture?q.compressedTexSubImage3D(Le,Ie,Oe,wt,ln,Ne,Ce,Fe,Dt,Vt.data):q.texSubImage3D(Le,Ie,Oe,wt,ln,Ne,Ce,Fe,Dt,Mn,Vt):R.isDataTexture?q.texSubImage2D(q.TEXTURE_2D,Ie,Oe,wt,Ne,Ce,Dt,Mn,Vt.data):R.isCompressedTexture?q.compressedTexSubImage2D(q.TEXTURE_2D,Ie,Oe,wt,Vt.width,Vt.height,Dt,Vt.data):q.texSubImage2D(q.TEXTURE_2D,Ie,Oe,wt,Ne,Ce,Dt,Mn,Vt);_.pixelStorei(q.UNPACK_ROW_LENGTH,Rn),_.pixelStorei(q.UNPACK_IMAGE_HEIGHT,vt),_.pixelStorei(q.UNPACK_SKIP_PIXELS,jn),_.pixelStorei(q.UNPACK_SKIP_ROWS,Ai),_.pixelStorei(q.UNPACK_SKIP_IMAGES,ms),Ie===0&&X.generateMipmaps&&q.generateMipmap(Le),_.unbindTexture()},this.initRenderTarget=function(R){G.get(R).__webglFramebuffer===void 0&&K.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?K.setTextureCube(R,0):R.isData3DTexture?K.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?K.setTexture2DArray(R,0):K.setTexture2D(R,0),_.unbindTexture()},this.resetState=function(){k=0,z=0,O=null,_.reset(),we.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return gi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=at._getDrawingBufferColorSpace(e),t.unpackColorSpace=at._getUnpackColorSpace()}};var da={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var Yn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},RM=new Fi(-1,1,1,-1,0,1),jh=class extends tt{constructor(){super(),this.setAttribute("position",new et([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new et([0,2,0,0,2,0],2))}},CM=new jh,Ns=class{constructor(e){this._mesh=new ue(CM,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,RM)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var fa=class extends Yn{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof xt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=ls.clone(e.uniforms),this.material=new xt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Ns(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Co=class extends Yn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},$c=class extends Yn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Kc=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new Ae);this._width=n.width,this._height=n.height,t=new Zt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:hn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new fa(da),this.copyPass.material.blending=ri,this.timer=new nr}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Co!==void 0&&(a instanceof Co?n=!0:a instanceof $c&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new Ae);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Zc=class extends Yn{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new ce}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=s}};var fm={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ce(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var pa=class i extends Yn{constructor(e,t=1,n,s){super(),this.strength=t,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new Ae(e.x,e.y):new Ae(256,256),this.clearColor=new ce(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Zt(r,a,{type:hn,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let h=new Zt(r,a,{type:hn,depthBuffer:!1});h.texture.name="UnrealBloomPass.h"+u,h.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(h);let d=new Zt(r,a,{type:hn,depthBuffer:!1});d.texture.name="UnrealBloomPass.v"+u,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),a=Math.round(a/2)}let o=fm;this.highPassUniforms=ls.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new xt({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new Ae(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=ls.clone(da.uniforms),this.blendMaterial=new xt({uniforms:this.copyUniforms,vertexShader:da.vertexShader,fragmentShader:da.fragmentShader,premultipliedAlpha:!0,blending:Et,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new ce,this._oldClearAlpha=1,this._basic=new Nt,this._fsQuad=new Ns(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new Ae(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=a}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let a=0;a<e;a++)t.push(.39894*Math.exp(-.5*a*a/(n*n))/n);let s=[],r=[];for(let a=1;a<e;a+=2){let o=t[a],l=a+1<e?t[a+1]:0,c=o+l;s.push((a*o+(a+1)*l)/c),r.push(c)}return new xt({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new Ae(.5,.5)},direction:{value:new Ae(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:s},gaussianWeights:{value:r}},vertexShader:`

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

				}`})}_getCompositeMaterial(e){return new xt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}};pa.BlurDirectionX=new Ae(1,0);pa.BlurDirectionY=new Ae(0,1);var Io={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var Jc=class extends Yn{constructor(){super(),this.isOutputPass=!0,this.uniforms=ls.clone(Io.uniforms),this.material=new Qr({name:Io.name,uniforms:this.uniforms,vertexShader:Io.vertexShader,fragmentShader:Io.fragmentShader}),this._fsQuad=new Ns(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},at.getTransfer(this._outputColorSpace)===St&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===uo?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===ho?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===fo?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===rr?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===mo?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===go?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===po&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};function mm(i){let e=i>>>0;return()=>{e|=0,e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function jc(i,e){let t=i*374761393+e*668265263|0;return t=Math.imul(t^t>>>13,1274126177),((t^t>>>16)>>>0)/4294967296}var pm=i=>i*i*(3-2*i);function Ei(i,e){let t=Math.floor(i),n=Math.floor(e),s=i-t,r=e-n,a=jc(t,n),o=jc(t+1,n),l=jc(t,n+1),c=jc(t+1,n+1),u=pm(s),h=pm(r);return(a+(o-a)*u+(l-a)*h+(a-o-l+c)*u*h)*2-1}function ma(i,e,t=5){let n=0,s=.5,r=1;for(let a=0;a<t;a++)n+=s*Ei(i*r,e*r),r*=2.02,s*=.5;return n}var ga=(i,e,t)=>{let n=Math.min(1,Math.max(0,(t-i)/(e-i)));return n*n*(3-2*n)};var Qh={sojourner:new L(-6.2,0,1.6),spirit:new L(0,0,0),opportunity:new L(6.4,0,1.2)};function Ds(i,e){let t=Math.hypot(i,e-1),n=ma(i*.045,e*.045,5)*1.7+ma(i*.23+11,e*.23-5,3)*.16,s=1-ga(8,22,t);n*=1-s*.88;let r=ga(55,150,t);n+=r*(7+ma(i*.018+7,e*.018-3,4)*11);let a=Math.exp(-Math.pow((Math.hypot(i+30,e+120)-70)/9,2))*5;return n+a}var Po={horizon:new ce("#d39a6c"),mid:new ce("#9a6447"),zenith:new ce("#3b2622"),halo:new ce("#8fb4d9")};function ed(){return new L(-.62,.2,-.76).normalize()}function gm(i=256){let e=document.createElement("canvas");e.width=e.height=i;let t=e.getContext("2d"),n=t.createImageData(i,i);for(let r=0;r<i;r++)for(let a=0;a<i;a++){let o=a/i,l=r/i,c=0,u=.55,h=8;for(let x=0;x<4;x++)c+=u*(Ei(o*h,l*h)*(1-o)*(1-l)+Ei((o-1)*h,l*h)*o*(1-l)+Ei(o*h,(l-1)*h)*(1-o)*l+Ei((o-1)*h,(l-1)*h)*o*l),h*=2,u*=.5;let d=Math.max(0,Math.min(255,128+c*140)),f=(r*i+a)*4;n.data[f]=n.data[f+1]=n.data[f+2]=d,n.data[f+3]=255}t.putImageData(n,0,0);let s=new Xt(e);return s.wrapS=s.wrapT=Dn,s.colorSpace=bi,s}function xm(i,e){let t=ed(),n=new ue(new Ft(600,48,24),new xt({side:Ht,depthWrite:!1,fog:!1,uniforms:{uSun:{value:t},uHorizon:{value:Po.horizon},uMid:{value:Po.mid},uZenith:{value:Po.zenith},uHalo:{value:Po.halo},uTime:{value:0}},vertexShader:`
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
        }`}));n.renderOrder=-10,i.add(n),i.fog=new Xa(Po.horizon.clone().multiplyScalar(.92),26,230);let s=e.mobile?150:220,r=new ns(460,460,s,s);r.rotateX(-Math.PI/2);let a=r.attributes.position,o=new Float32Array(a.count*3),l=new ce("#8f4c2c"),c=new ce("#b0663e"),u=new ce("#5e3020"),h=new ce("#c27a4c"),d=new ce;for(let O=0;O<a.count;O++){let I=a.getX(O),U=a.getZ(O),$=Ds(I,U);a.setY(O,$);let ye=ma(I*.08+3,U*.08,3),le=ma(I*.6,U*.6,2);d.copy(l).lerp(c,ga(-.3,.5,ye)),d.lerp(u,ga(.15,.6,-le)*.45),d.lerp(h,ga(.35,.8,ye+le*.3)*.5),o[O*3]=d.r,o[O*3+1]=d.g,o[O*3+2]=d.b}r.setAttribute("color",new ht(o,3)),r.computeVertexNormals();let f=gm(256);f.repeat.set(70,70);let x=new ue(r,new $e({vertexColors:!0,roughness:.96,metalness:0,bumpMap:f,bumpScale:1.6}));x.receiveShadow=!0,x.matrixAutoUpdate=!1,i.add(x);let y=new _i(1,2),m=y.attributes.position;for(let O=0;O<m.count;O++){let I=new L(m.getX(O),m.getY(O),m.getZ(O)),U=1+Ei(I.x*1.6+3,I.z*1.6+I.y*1.3)*.32+Ei(I.x*5+I.y*2,I.z*5-7)*.08;I.multiplyScalar(U),I.y*=.58,I.y<-.1&&(I.y*=.4),m.setXYZ(O,I.x,I.y,I.z)}y.computeVertexNormals();let p=e.mobile?200:420,M=gm(128);M.repeat.set(2,2);let C=new es(y,new $e({roughness:.95,bumpMap:M,bumpScale:2.2}),p),v=mm(7),E=new It,S=new ce,T=0,g=0;for(;T<p&&g++<5e3;){let O=2.5+Math.pow(v(),1.6)*70,I=v()*Math.PI*2,U=Math.cos(I)*O,$=Math.sin(I)*O-4,ye=!0;for(let Ye of Object.values(Qh))Math.hypot(U-Ye.x,$-Ye.z)<2.6&&(ye=!1);if($>9&&Math.abs(U)<9&&(ye=!1),!ye)continue;let le=.03+Math.pow(v(),3.6)*(O<14?.42:.7);E.position.set(U,Ds(U,$)-le*.3,$),E.rotation.set(v()*.6,v()*6.28,v()*.6),E.scale.set(le*(.8+v()*.6),le,le*(.8+v()*.6)),E.updateMatrix(),C.setMatrixAt(T,E.matrix),S.set("#5a301e").lerp(new ce("#8a5034"),v()),C.setColorAt(T,S),T++}C.count=T,C.castShadow=!0,C.receiveShadow=!0,i.add(C);let b=new si(new ce("#ffd9b0"),3.2);b.position.copy(t).multiplyScalar(60),b.castShadow=!0,b.shadow.mapSize.set(e.mobile?1024:2048,e.mobile?1024:2048);let P=b.shadow.camera;P.left=-16,P.right=16,P.top=12,P.bottom=-12,P.near=20,P.far=110,b.shadow.bias=-4e-4,b.shadow.normalBias=.03,i.add(b,b.target);let B=new ro(new ce("#e7b48e"),new ce("#4b2616"),1.15);i.add(B);let A=new si(new ce("#d8c6b6"),.45);A.position.set(6,7,14),i.add(A);let V=e.mobile?700:1700,w=new tt,N=new Float32Array(V*3),k=new Float32Array(V);for(let O=0;O<V;O++)N[O*3]=(v()-.5)*44,N[O*3+1]=v()*5.5,N[O*3+2]=(v()-.5)*34-2,k[O]=v();w.setAttribute("position",new ht(N,3)),w.setAttribute("aRand",new ht(k,1));let z=new wn(w,new xt({transparent:!0,depthWrite:!1,uniforms:{uTime:{value:0},uPx:{value:e.pixelRatio},uColor:{value:new ce("#ffd0a4")},uBoost:{value:0}},vertexShader:`
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
      void main(){ float d = length(gl_PointCoord - 0.5); float a = smoothstep(0.5, 0.0, d) * vA; gl_FragColor = vec4(uColor, a * 0.55); }`}));return z.frustumCulled=!1,i.add(z),{sky:n,ground:x,rocks:C,sunLight:b,hemi:B,fill:A,dust:z,sun:t}}function Qc(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,l=new tt,c=0;for(let u=0;u<i.length;++u){let h=i[u],d=0;if(t!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in h.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(h.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(o!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in h.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(h.morphAttributes[f])}if(e){let f;if(t)f=h.index.count;else if(h.attributes.position!==void 0)f=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,u),c+=f}}if(t){let u=0,h=[];for(let d=0;d<i.length;++d){let f=i[d].index;for(let x=0;x<f.count;++x)h.push(f.getX(x)+u);u+=i[d].attributes.position.count}l.setIndex(h)}for(let u in r){let h=_m(r[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,h)}for(let u in a){let h=a[u][0].length;if(h!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let d=0;d<h;++d){let f=[];for(let y=0;y<a[u].length;++y)f.push(a[u][y][d]);let x=_m(f);if(!x)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(x)}}}return l}function _m(i){let e,t,n,s=-1,r=0;for(let c=0;c<i.length;++c){let u=i[c];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*t}let a=new e(r),o=new ht(a,t,n),l=0;for(let c=0;c<i.length;++c){let u=i[c];if(u.isInterleavedBufferAttribute){let h=l/t;for(let d=0,f=u.count;d<f;d++)for(let x=0;x<t;x++){let y=u.getComponent(d,x);o.setComponent(d+h,x,y)}}else a.set(u.array,l);l+=u.count*t}return s!==void 0&&(o.gpuType=s),o}function td(i,e){if(e===Eh)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===oa||e===Eo){let t=i.getIndex();if(t===null){let r=[],a=i.getAttribute("position");if(a!==void 0){for(let o=0;o<a.count;o++)r.push(o);i.setIndex(r),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,s=[];if(e===oa)for(let r=1;r<=n;r++)s.push(t.getX(0)),s.push(t.getX(r)),s.push(t.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(s.push(t.getX(r)),s.push(t.getX(r+1)),s.push(t.getX(r+2))):(s.push(t.getX(r+2)),s.push(t.getX(r+1)),s.push(t.getX(r)));return s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),i.setIndex(s),i.clearGroups(),i}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}function vm(i){let e=new Map,t=new Map,n=i.clone();return ym(i,n,function(s,r){e.set(r,s),t.set(s,r)}),n.traverse(function(s){if(!s.isSkinnedMesh)return;let r=s,a=e.get(s),o=a.skeleton.bones;r.skeleton=a.skeleton.clone(),r.bindMatrix.copy(a.bindMatrix),r.skeleton.bones=o.map(function(l){return t.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),n}function ym(i,e,t){t(i,e);for(let n=0;n<i.children.length;n++)ym(i.children[n],e.children[n],t)}var eu=class extends Ui{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new ld(t)}),this.register(function(t){return new cd(t)}),this.register(function(t){return new _d(t)}),this.register(function(t){return new vd(t)}),this.register(function(t){return new yd(t)}),this.register(function(t){return new hd(t)}),this.register(function(t){return new dd(t)}),this.register(function(t){return new fd(t)}),this.register(function(t){return new pd(t)}),this.register(function(t){return new od(t)}),this.register(function(t){return new md(t)}),this.register(function(t){return new ud(t)}),this.register(function(t){return new xd(t)}),this.register(function(t){return new gd(t)}),this.register(function(t){return new rd(t)}),this.register(function(t){return new tu(t,ft.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new tu(t,ft.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new Md(t)})}load(e,t,n,s){let r=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let c=os.extractUrlBase(e);a=os.resolveURL(c,this.path)}else a=os.extractUrlBase(e);this.manager.itemStart(e);let o=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new ea(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,a,function(u){t(u),r.manager.itemEnd(e)},o)}catch(u){o(u)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r,a={},o={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===wm){try{a[ft.KHR_BINARY_GLTF]=new Sd(e)}catch(h){s&&s(h);return}r=JSON.parse(a[ft.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new Cd(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){let h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[h.name]=h,a[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){let h=r.extensionsUsed[u],d=r.extensionsRequired||[];switch(h){case ft.KHR_MATERIALS_UNLIT:a[h]=new ad;break;case ft.KHR_DRACO_MESH_COMPRESSION:a[h]=new bd(r,this.dracoLoader);break;case ft.KHR_TEXTURE_TRANSFORM:a[h]=new Ed;break;case ft.KHR_MESH_QUANTIZATION:a[h]=new wd;break;default:d.indexOf(h)>=0&&o[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(n,s)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}};function IM(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}function sn(i,e,t){let n=i.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}var ft={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},rd=class{constructor(e){this.parser=e,this.name=ft.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,s=t.cache.get(n);if(s)return s;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,u=new ce(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],In);let h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new si(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new vi(u),c.distance=h;break;case"spot":c=new oo(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),Hi(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}},ad=class{constructor(){this.name=ft.KHR_MATERIALS_UNLIT}getMaterialType(){return Nt}extendParams(e,t,n){let s=[];e.color=new ce(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],In),e.opacity=a[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,yt))}return Promise.all(s)}},od=class{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=sn(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},ld=class{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return sn(this.parser,e,this.name)!==null?Fn:null}extendMaterialParams(e,t){let n=sn(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(s.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let r=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ae(r,r)}return Promise.all(s)}},cd=class{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_DISPERSION}getMaterialType(e){return sn(this.parser,e,this.name)!==null?Fn:null}extendMaterialParams(e,t){let n=sn(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}},ud=class{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return sn(this.parser,e,this.name)!==null?Fn:null}extendMaterialParams(e,t){let n=sn(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(s)}},hd=class{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_SHEEN}getMaterialType(e){return sn(this.parser,e,this.name)!==null?Fn:null}extendMaterialParams(e,t){let n=sn(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(t.sheenColor=new ce(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let r=n.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],In)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,yt)),n.sheenRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(s)}},dd=class{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return sn(this.parser,e,this.name)!==null?Fn:null}extendMaterialParams(e,t){let n=sn(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&s.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(s)}},fd=class{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_VOLUME}getMaterialType(e){return sn(this.parser,e,this.name)!==null?Fn:null}extendMaterialParams(e,t){let n=sn(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let r=n.attenuationColor||[1,1,1];return t.attenuationColor=new ce().setRGB(r[0],r[1],r[2],In),Promise.all(s)}},pd=class{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_IOR}getMaterialType(e){return sn(this.parser,e,this.name)!==null?Fn:null}extendMaterialParams(e,t){let n=sn(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},md=class{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_SPECULAR}getMaterialType(e){return sn(this.parser,e,this.name)!==null?Fn:null}extendMaterialParams(e,t){let n=sn(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));let r=n.specularColorFactor||[1,1,1];return t.specularColor=new ce().setRGB(r[0],r[1],r[2],In),n.specularColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,yt)),Promise.all(s)}},gd=class{constructor(e){this.parser=e,this.name=ft.EXT_MATERIALS_BUMP}getMaterialType(e){return sn(this.parser,e,this.name)!==null?Fn:null}extendMaterialParams(e,t){let n=sn(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&s.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(s)}},xd=class{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return sn(this.parser,e,this.name)!==null?Fn:null}extendMaterialParams(e,t){let n=sn(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&s.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(s)}},_d=class{constructor(e){this.parser=e,this.name=ft.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}},vd=class{constructor(e){this.parser=e,this.name=ft.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],l=n.textureLoader;if(o.uri){let c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,a.source,l)}},yd=class{constructor(e){this.parser=e,this.name=ft.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],l=n.textureLoader;if(o.uri){let c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,a.source,l)}},tu=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){let l=s.byteOffset||0,c=s.byteLength||0,u=s.count,h=s.byteStride,d=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(u,h,d,s.mode,s.filter).then(function(f){return f.buffer}):a.ready.then(function(){let f=new ArrayBuffer(u*h);return a.decodeGltfBuffer(new Uint8Array(f),u,h,d,s.mode,s.filter),f})})}else return null}},Md=class{constructor(e){this.name=ft.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=t.meshes[n.mesh];for(let c of s.primitives)if(c.mode!==ai.TRIANGLES&&c.mode!==ai.TRIANGLE_STRIP&&c.mode!==ai.TRIANGLE_FAN&&c.mode!==void 0)return null;let a=n.extensions[this.name].attributes,o=[],l={};for(let c in a)o.push(this.parser.getDependency("accessor",a[c]).then(u=>(l[c]=u,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{let u=c.pop(),h=u.isGroup?u.children:[u],d=c[0].count,f=[];for(let x of h){let y=new Je,m=new L,p=new Pn,M=new L(1,1,1),C=new es(x.geometry,x.material,d);for(let E=0;E<d;E++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,E),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,E),l.SCALE&&M.fromBufferAttribute(l.SCALE,E),C.setMatrixAt(E,y.compose(m,p,M));let v=null;for(let E in l)if(E==="_COLOR_0"){let S=l[E];C.instanceColor=new Qi(S.array,S.itemSize,S.normalized)}else if(E!=="TRANSLATION"&&E!=="ROTATION"&&E!=="SCALE"){if(v===null){let T=C.geometry;v=new tt,v.name=T.name;for(let g in T.attributes)v.setAttribute(g,T.attributes[g]);for(let g in T.morphAttributes)v.morphAttributes[g]=T.morphAttributes[g];T.index!==null&&v.setIndex(T.index),v.morphTargetsRelative=T.morphTargetsRelative;for(let g of T.groups)v.addGroup(g.start,g.count,g.materialIndex);T.boundingBox!==null&&(v.boundingBox=T.boundingBox.clone()),T.boundingSphere!==null&&(v.boundingSphere=T.boundingSphere.clone()),v.drawRange.start=T.drawRange.start,v.drawRange.count=T.drawRange.count,v.userData=Object.assign({},T.userData),C.geometry=v}let S=l[E];v.setAttribute(E,new Qi(S.array,S.itemSize,S.normalized))}It.prototype.copy.call(C,x),this.parser.assignFinalMaterial(C),f.push(C)}return u.isGroup?(u.clear(),u.add(...f),u):f[0]}))}},wm="glTF",Lo=12,Mm={JSON:1313821514,BIN:5130562},Sd=class{constructor(e){this.name=ft.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Lo),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==wm)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-Lo,r=new DataView(e,Lo),a=0;for(;a<s;){let o=r.getUint32(a,!0);a+=4;let l=r.getUint32(a,!0);if(a+=4,l===Mm.JSON){let c=new Uint8Array(e,Lo+a,o);this.content=n.decode(c)}else if(l===Mm.BIN){let c=Lo+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},bd=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ft.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(let u in a){let h=Ad[u]||u.toLowerCase();o[h]=a[u]}for(let u in e.attributes){let h=Ad[u]||u.toLowerCase();if(a[u]!==void 0){let d=n.accessors[e.attributes[u]],f=xa[d.componentType];c[h]=f.name,l[h]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h,d){s.decodeDracoFile(u,function(f){for(let x in f.attributes){let y=f.attributes[x],m=l[x];m!==void 0&&(y.normalized=m)}h(f)},o,c,In,d)})})}},Ed=class{constructor(){this.name=ft.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let n=Math.cos(e.rotation),s=Math.sin(e.rotation);e.matrix.set(e.repeat.x*n,e.repeat.y*s,e.offset.x,-e.repeat.x*s,e.repeat.y*n,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},wd=class{constructor(){this.name=ft.KHR_MESH_QUANTIZATION}},nu=class extends Di{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let a=0;a!==s;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,u=s-t,h=(n-t)/u,d=h*h,f=d*h,x=e*c,y=x-c,m=-2*f+3*d,p=f-d,M=1-m,C=p-d+h;for(let v=0;v!==o;v++){let E=a[y+v+o],S=a[y+v+l]*u,T=a[x+v+o],g=a[x+v]*u;r[v]=M*E+C*S+m*T+p*g}return r}},PM=new Pn,Td=class extends nu{interpolate_(e,t,n,s){let r=super.interpolate_(e,t,n,s);return PM.fromArray(r).normalize().toArray(r),r}},ai={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},xa={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Sm={9728:en,9729:tn,9984:nc,9985:sa,9986:or,9987:Mi},bm={33071:ei,33648:Vr,10497:Dn},nd={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Ad={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Us={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},LM={CUBICSPLINE:void 0,LINEAR:Zs,STEP:Ks},id={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function NM(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new $e({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Oi})),i.DefaultMaterial}function ur(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Hi(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function DM(i,e,t){let n=!1,s=!1,r=!1;for(let c=0,u=e.length;c<u;c++){let h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(s=!0),h.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let a=[],o=[],l=[];for(let c=0,u=e.length;c<u;c++){let h=e[c];if(n){let d=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):i.attributes.position;a.push(d)}if(s){let d=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):i.attributes.normal;o.push(d)}if(r){let d=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):i.attributes.color;l.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){let u=c[0],h=c[1],d=c[2];return n&&(i.morphAttributes.position=u),s&&(i.morphAttributes.normal=h),r&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function UM(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function FM(i){let e,t=i.extensions&&i.extensions[ft.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+sd(t.attributes):e=i.indices+":"+sd(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+sd(i.targets[n]);return e}function sd(i){let e="",t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function Rd(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function OM(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var BM=new Je,Cd=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new IM,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,a=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;let l=o.match(/Version\/(\d+)/);s=n&&l?parseInt(l[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&a<98?this.textureLoader=new so(this.options.manager):this.textureLoader=new lo(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new ea(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){let o={scene:a[0][s.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:s.asset,parser:n,userData:{}};return ur(r,o,s),Hi(o,s),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(let l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let a=t[s].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let a=e[s];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let s=n.clone(),r=(a,o)=>{let l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(let[c,u]of a.children.entries())r(u,o.children[c])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let s=e(t[n]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[ft.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,a){n.load(os.resolveURL(t.uri,s.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){let t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let a=nd[s.type],o=xa[s.componentType],l=s.normalized===!0,c=new o(s.count*a);return Promise.resolve(new ht(c,a,l))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(a){let o=a[0],l=nd[s.type],c=xa[s.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,d=s.byteOffset||0,f=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,x=s.normalized===!0,y,m;if(f&&f!==h){let p=Math.floor(d/f),M="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+p+":"+s.count,C=t.cache.get(M);C||(y=new c(o,p*f,s.count*f/u),C=new js(y,f/u),t.cache.add(M,C)),m=new Es(C,l,d%f/u,x)}else o===null?y=new c(s.count*l):y=new c(o,d,s.count*l),m=new ht(y,l,x);if(s.sparse!==void 0){let p=nd.SCALAR,M=xa[s.sparse.indices.componentType],C=s.sparse.indices.byteOffset||0,v=s.sparse.values.byteOffset||0,E=new M(a[1],C,s.sparse.count*p),S=new c(a[2],v,s.sparse.count*l);o!==null&&(m=new ht(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let T=0,g=E.length;T<g;T++){let b=E[T];if(m.setX(b,S[T*l]),l>=2&&m.setY(b,S[T*l+1]),l>=3&&m.setZ(b,S[T*l+2]),l>=4&&m.setW(b,S[T*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=x}return m})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r],o=this.textureLoader;if(a.uri){let l=n.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){let s=this,r=this.json,a=r.textures[e],o=r.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=a.name||o.name||"",u.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(u.name=o.uri);let d=(r.samplers||{})[a.sampler]||{};return u.magFilter=Sm[d.magFilter]||tn,u.minFilter=Sm[d.minFilter]||Mi,u.wrapS=bm[d.wrapS]||Dn,u.wrapT=bm[d.wrapT]||Dn,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==en&&u.minFilter!==tn,s.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());let a=s.images[e],o=self.URL||self.webkitURL,l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(h){c=!0;let d=new Blob([h],{type:a.mimeType});return l=o.createObjectURL(d),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let u=Promise.resolve(l).then(function(h){return new Promise(function(d,f){let x=d;t.isImageBitmapLoader===!0&&(x=function(y){let m=new Yt(y);m.needsUpdate=!0,d(m)}),t.load(os.resolveURL(h,r.path),x,void 0,f)})}).then(function(h){return c===!0&&o.revokeObjectURL(l),Hi(h,a),h.userData.mimeType=a.mimeType||OM(a.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,s){let r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[ft.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[ft.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let l=r.associations.get(a);a=r.extensions[ft.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,l)}}return s!==void 0&&(a.colorSpace=s),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+n.uuid,l=this.cache.get(o);l||(l=new ii,En.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){let o="LineBasicMaterial:"+n.uuid,l=this.cache.get(o);l||(l=new ni,En.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(s||r||a){let o="ClonedMaterial:"+n.uuid+":";s&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),r&&(l.vertexColors=!0),a&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return $e}loadMaterial(e){let t=this,n=this.json,s=this.extensions,r=n.materials[e],a,o={},l=r.extensions||{},c=[];if(l[ft.KHR_MATERIALS_UNLIT]){let h=s[ft.KHR_MATERIALS_UNLIT];a=h.getMaterialType(),c.push(h.extendParams(o,r,t))}else{let h=r.pbrMetallicRoughness||{};if(o.color=new ce(1,1,1),o.opacity=1,Array.isArray(h.baseColorFactor)){let d=h.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],In),o.opacity=d[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",h.baseColorTexture,yt)),o.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,o.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",h.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=zt);let u=r.alphaMode||id.OPAQUE;if(u===id.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,u===id.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==Nt&&(c.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new Ae(1,1),r.normalTexture.scale!==void 0)){let h=r.normalTexture.scale;o.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&a!==Nt&&(c.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==Nt){let h=r.emissiveFactor;o.emissive=new ce().setRGB(h[0],h[1],h[2],In)}return r.emissiveTexture!==void 0&&a!==Nt&&c.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,yt)),Promise.all(c).then(function(){let h=new a(o);return r.name&&(h.name=r.name),Hi(h,r),t.associations.set(h,{materials:e}),r.extensions&&ur(s,h,r),h})}createUniqueName(e){let t=Ut.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,s=this.primitiveCache;function r(o){return n[ft.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return Em(l,o,t)})}let a=[];for(let o=0,l=e.length;o<l;o++){let c=e[o],u=FM(c),h=s[u];if(h)a.push(h.promise);else{let d;c.extensions&&c.extensions[ft.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=Em(new tt,c,t),c.mode===ai.TRIANGLE_STRIP?d=d.then(f=>td(f,Eo)):c.mode===ai.TRIANGLE_FAN&&(d=d.then(f=>td(f,oa))),s[u]={primitive:c,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,s=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let l=0,c=a.length;l<c;l++){let u=a[l].material===void 0?NM(this.cache):this.getDependency("material",a[l].material);o.push(u)}return o.push(t.loadGeometries(a)),Promise.all(o).then(async function(l){let c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let f=0,x=u.length;f<x;f++){let y=u[f],m=a[f],p,M=c[f];if(m.mode===ai.TRIANGLES||m.mode===ai.TRIANGLE_STRIP||m.mode===ai.TRIANGLE_FAN||m.mode===void 0){let C=r.isSkinnedMesh===!0,v=y.hasAttribute("skinIndex")&&y.hasAttribute("skinWeight");C&&v===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),p=C&&v?new $a(y,M):new ue(y,M),p.isSkinnedMesh===!0&&p.normalizeSkinWeights()}else if(m.mode===ai.LINES)p=new Qs(y,M);else if(m.mode===ai.LINE_STRIP)p=new Gn(y,M);else if(m.mode===ai.LINE_LOOP)p=new Za(y,M);else if(m.mode===ai.POINTS)p=new wn(y,M);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&UM(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),Hi(p,r),m.extensions&&ur(s,p,m),t.assignFinalMaterial(p),h.push(p)}for(let f=0,x=h.length;f<x;f++)t.associations.set(h[f],{meshes:e,primitives:f});if(h.length===1)return r.extensions&&ur(s,h[0],r),h[0];let d=new Ke;r.extensions&&ur(s,d,r),t.associations.set(d,{meshes:e});for(let f=0,x=h.length;f<x;f++)d.add(h[f]);return d})}loadCamera(e){let t,n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Wt(At.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new Fi(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Hi(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),a=s,o=[],l=[];for(let c=0,u=a.length;c<u;c++){let h=a[c];if(h){o.push(h);let d=new Je;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Ka(o,l)})}loadAnimation(e){let t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,a=[],o=[],l=[],c=[],u=[];for(let h=0,d=s.channels.length;h<d;h++){let f=s.channels[h],x=s.samplers[f.sampler],y=f.target,m=y.node,p=s.parameters!==void 0?s.parameters[x.input]:x.input,M=s.parameters!==void 0?s.parameters[x.output]:x.output;y.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",M)),c.push(x),u.push(y))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){let d=h[0],f=h[1],x=h[2],y=h[3],m=h[4],p=[];for(let C=0,v=d.length;C<v;C++){let E=d[C],S=f[C],T=x[C],g=y[C],b=m[C];if(E===void 0)continue;E.updateMatrix&&E.updateMatrix();let P=n._createAnimationTracks(E,S,T,g,b);if(P)for(let B=0;B<P.length;B++)p.push(P[B])}let M=new io(r,void 0,p);return Hi(M,s),M})}createNodeMesh(e){let t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let a=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=s.weights.length;l<c;l++)o.morphTargetInfluences[l]=s.weights[l]}),a})}loadNode(e){let t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=s.children||[];for(let c=0,u=o.length;c<u;c++)a.push(n.getDependency("node",o[c]));let l=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(a),l]).then(function(c){let u=c[0],h=c[1],d=c[2];d!==null&&u.traverse(function(f){f.isSkinnedMesh&&f.bind(d,BM)});for(let f=0,x=h.length;f<x;f++)u.add(h[f]);if(u.userData.pivot!==void 0&&h.length>0){let f=u.userData.pivot,x=h[0];u.pivot=new L().fromArray(f),u.position.x-=f[0],u.position.y-=f[1],u.position.z-=f[2],x.position.set(0,0,0),delete u.userData.pivot}return u})}_loadNodeShallow(e){let t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],a=r.name?s.createUniqueName(r.name):"",o=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),r.camera!==void 0&&o.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let u;if(r.isBone===!0?u=new Kr:c.length>1?u=new Ke:c.length===1?u=c[0]:u=new It,u!==c[0])for(let h=0,d=c.length;h<d;h++)u.add(c[h]);if(r.name&&(u.userData.name=r.name,u.name=a),Hi(u,r),r.extensions&&ur(n,u,r),r.matrix!==void 0){let h=new Je;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);if(!s.associations.has(u))s.associations.set(u,{});else if(r.mesh!==void 0&&s.meshCache.refs[r.mesh]>1){let h=s.associations.get(u);s.associations.set(u,{...h})}return s.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],s=this,r=new Ke;n.name&&(r.name=s.createUniqueName(n.name)),Hi(r,n),n.extensions&&ur(t,r,n);let a=n.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(s.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let u=0,h=l.length;u<h;u++){let d=l[u];d.parent!==null?r.add(vm(d)):r.add(d)}let c=u=>{let h=new Map;for(let[d,f]of s.associations)(d instanceof En||d instanceof Yt)&&h.set(d,f);return u.traverse(d=>{let f=s.associations.get(d);f!=null&&h.set(d,f)}),h};return s.associations=c(r),r})}_createAnimationTracks(e,t,n,s,r){let a=[],o=e.name?e.name:e.uuid,l=[];function c(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}Us[r.path]===Us.weights?(c(e),e.isGroup&&e.children.forEach(c)):l.push(o);let u;switch(Us[r.path]){case Us.weights:u=ss;break;case Us.rotation:u=rs;break;case Us.translation:case Us.scale:u=As;break;default:switch(n.itemSize){case 1:u=ss;break;case 2:case 3:default:u=As;break}break}let h=s.interpolation!==void 0?LM[s.interpolation]:Zs,d=this._getArrayFromAccessor(n);for(let f=0,x=l.length;f<x;f++){let y=new u(l[f]+"."+Us[r.path],t.array,d,h);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(y),a.push(y)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=Rd(t.constructor),s=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let s=this instanceof rs?Td:nu;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function kM(i,e,t){let n=e.attributes,s=new Ln;if(n.POSITION!==void 0){let o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(s.set(new L(l[0],l[1],l[2]),new L(c[0],c[1],c[2])),o.normalized){let u=Rd(xa[o.componentType]);s.min.multiplyScalar(u),s.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let o=new L,l=new L;for(let c=0,u=r.length;c<u;c++){let h=r[c];if(h.POSITION!==void 0){let d=t.json.accessors[h.POSITION],f=d.min,x=d.max;if(f!==void 0&&x!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(x[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(x[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(x[2]))),d.normalized){let y=Rd(xa[d.componentType]);l.multiplyScalar(y)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(o)}i.boundingBox=s;let a=new Un;s.getCenter(a.center),a.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=a}function Em(i,e,t){let n=e.attributes,s=[];function r(a,o){return t.getDependency("accessor",a).then(function(l){i.setAttribute(o,l)})}for(let a in n){let o=Ad[a]||a.toLowerCase();o in i.attributes||s.push(r(n[a],o))}if(e.indices!==void 0&&!i.index){let a=t.getDependency("accessor",e.indices).then(function(o){i.setIndex(o)});s.push(a)}return at.workingColorSpace!==In&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${at.workingColorSpace}" not supported.`),Hi(i,e),kM(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?DM(i,e.targets,t):i})}var No=new L;function oi(i,e,t,n,s,r){let a=2*Math.PI*s/4,o=Math.max(r-2*s,0),l=Math.PI/4;No.copy(e),No[n]=0,No.normalize();let c=.5*a/(a+o),u=1-No.angleTo(i)/l;return Math.sign(No[t])===1?u*c:o/(a+o)+c+c*(1-u)}var kn=class i extends _n{constructor(e=1,t=1,n=1,s=2,r=.1){let a=s*2+1;if(r=Math.min(e/2,t/2,n/2,r),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:s,radius:r},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let l=new L,c=new L,u=new L(e,t,n).divideScalar(2).subScalar(r),h=this.attributes.position.array,d=this.attributes.normal.array,f=this.attributes.uv.array,x=h.length/6,y=new L,m=.5/a;for(let p=0,M=0;p<h.length;p+=3,M+=2)switch(l.fromArray(h,p),c.copy(l),c.x-=Math.sign(c.x)*m,c.y-=Math.sign(c.y)*m,c.z-=Math.sign(c.z)*m,c.normalize(),h[p+0]=u.x*Math.sign(l.x)+c.x*r,h[p+1]=u.y*Math.sign(l.y)+c.y*r,h[p+2]=u.z*Math.sign(l.z)+c.z*r,d[p+0]=c.x,d[p+1]=c.y,d[p+2]=c.z,Math.floor(p/x)){case 0:y.set(1,0,0),f[M+0]=oi(y,c,"z","y",r,n),f[M+1]=1-oi(y,c,"y","z",r,t);break;case 1:y.set(-1,0,0),f[M+0]=1-oi(y,c,"z","y",r,n),f[M+1]=1-oi(y,c,"y","z",r,t);break;case 2:y.set(0,1,0),f[M+0]=1-oi(y,c,"x","z",r,e),f[M+1]=oi(y,c,"z","x",r,n);break;case 3:y.set(0,-1,0),f[M+0]=1-oi(y,c,"x","z",r,e),f[M+1]=1-oi(y,c,"z","x",r,n);break;case 4:y.set(0,0,1),f[M+0]=1-oi(y,c,"x","y",r,e),f[M+1]=1-oi(y,c,"y","x",r,t);break;case 5:y.set(0,0,-1),f[M+0]=oi(y,c,"x","y",r,e),f[M+1]=1-oi(y,c,"y","x",r,t);break}}static fromJSON(e){return new i(e.width,e.height,e.depth,e.segments,e.radius)}};function HM(i){i.updateMatrixWorld(!0);let e=new Map,t=[];i.traverse(n=>{if(!n.isMesh||Array.isArray(n.material))return;let s=(n.geometry.index?n.geometry.toNonIndexed():n.geometry.clone()).applyMatrix4(n.matrixWorld);for(let r of Object.keys(s.attributes))["position","normal","uv"].includes(r)||s.deleteAttribute(r);e.has(n.material)||e.set(n.material,[]),e.get(n.material).push(s),t.push(n)}),t.forEach(n=>n.parent.remove(n)),[...i.children].forEach(n=>{!n.isMesh&&n.children.length===0&&i.remove(n)});for(let[n,s]of e)i.add(new ue(Qc(s),n))}function Tm(i,e){i.onBeforeCompile=t=>{t.uniforms.uSleep=e.uSleep,t.uniforms.uDim=e.uDim,t.uniforms.uGlow=e.uGlow,t.fragmentShader=`uniform float uSleep; uniform float uDim; uniform float uGlow;
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
       #include <dithering_fragment>`)},i.customProgramCacheKey=()=>"tlf-rover"}function Am(){return{uSleep:{value:1},uDim:{value:0},uGlow:{value:0}}}function Rm(i,e,t,n,s){e.traverse(o=>{o.isMesh&&(o.castShadow=!0,o.receiveShadow=!0)});let r=Qh[i],a=new Ke;return a.position.set(r.x,Ds(r.x,r.z),r.z),a.add(e),{id:i,pivot:a,model:e,u:t,height:n,radius:s,baseYaw:0}}function zM(){let i=document.createElement("canvas");i.width=256,i.height=192;let e=i.getContext("2d");e.fillStyle="#1a2440",e.fillRect(0,0,256,192);for(let n=0;n<12;n++)for(let s=0;s<16;s++){let r=40+(s*7+n*13)%9*3;e.fillStyle=`rgb(${r-12},${r+6},${r+52})`,e.fillRect(s*16+1,n*16+1,14,14)}let t=new Xt(i);return t.colorSpace=yt,t}function iu(){let i=Am(),e=new Ke,t=new $e({color:"#c9a35e",metalness:.75,roughness:.38}),n=new $e({color:"#d8c7a0",metalness:.6,roughness:.55}),s=new $e({color:"#b9b6b0",metalness:.85,roughness:.35}),r=new $e({color:"#1d1b1a",metalness:.3,roughness:.55}),a=new $e({map:zM(),metalness:.5,roughness:.3}),o=new $e({color:"#e2ded6",roughness:.65}),l=new $e({color:"#a33a2a",roughness:.6});[t,n,s,r,a,o,l].forEach(m=>Tm(m,i));let c=(m,p,M,C)=>(m.position.set(p,M,C),e.add(m),m);c(new ue(new kn(.4,.13,.3,2,.012),t),0,.2,0),c(new ue(new kn(.36,.02,.26,1,.006),n),0,.27,0);let u=c(new ue(new _n(.48,.01,.36),[s,s,a,r,s,s]),0,.285,-.01);for(let[m,p,M,C]of[[.49,.012,0,.17],[.49,.012,0,-.19],[.012,.37,.243,-.01],[.012,.37,-.243,-.01]])c(new ue(new _n(m,.016,p),s),M,.287,C);c(new ue(new kn(.14,.035,.035,2,.008),o),0,.235,.165);for(let m of[-1,1]){let p=c(new ue(new Tt(.009,.009,.012,16),r),m*.04,.237,.184);p.rotation.x=Math.PI/2;let M=c(new ue(new _n(.03,.012,.012),l),m*.11,.16,.156)}let h=c(new ue(new _n(.018,.018,.1),s),0,.17,-.19);h.rotation.x=.6,c(new ue(new Tt(.022,.022,.04,16),s),0,.13,-.235),c(new ue(new Tt(.008,.01,.06,10),s),.15,.32,-.1),c(new ue(new Tt(.0025,.0025,.34,6),r),.15,.52,-.1),c(new ue(new Ft(.007,10,8),s),.15,.69,-.1);let d=new Tt(.066,.066,.075,24,1,!0);d.rotateZ(Math.PI/2);let f=new ts(.064,24),x=new _n(.078,.008,.012),y=new Tt(.018,.018,.085,12);y.rotateZ(Math.PI/2);for(let m of[-1,1]){for(let C of[-.2,0,.2]){let v=new Ke;v.position.set(m*.265,.066,C),e.add(v),v.add(new ue(d,s));for(let E of[-1,1]){let S=new ue(f,r);S.rotation.y=E*Math.PI/2,S.position.x=E*.037,v.add(S)}for(let E=0;E<12;E++){let S=new ue(x,s),T=E/12*Math.PI*2;S.position.set(0,Math.cos(T)*.068,Math.sin(T)*.068),S.rotation.x=-T,v.add(S)}v.add(new ue(y,r))}let p=(C,v,E,S,T,g)=>{let b=new L(C,v,E),P=new L(S,T,g),B=c(new ue(new _n(.014,.014,b.distanceTo(P)),s),(C+S)/2,(v+T)/2,(E+g)/2);return B.lookAt(e.localToWorld(P.clone())),B},M=m*.235;p(M,.07,.2,M,.17,.04),p(M,.17,.04,M,.13,-.1),p(M,.13,-.1,M,.07,0),p(M,.13,-.1,M,.07,-.2),c(new ue(new Ft(.014,10,8),r),M,.17,.04)}return HM(e),Rm("sojourner",e,i,.6,.45)}async function Cm(i,e){return(await new eu().loadAsync(i,e)).scene}function Id(i,e){let t=Am(),n=e.clone(!0);return n.traverse(s=>{s.isMesh&&(s.material=Array.isArray(s.material)?s.material.map(r=>r.clone()):s.material.clone(),[s.material].flat().forEach(r=>{r.envMapIntensity=1,Tm(r,t)}))}),Rm(i,n,t,1.58,1.6)}function Im(){let i=new Ke,e=new Ke;i.add(e);let t=new Ke;t.rotation.set(-1.2,Math.PI,0),e.add(t);let n=(()=>{let se=document.createElement("canvas");se.width=se.height=64;let fe=se.getContext("2d");for(let Ue=0;Ue<64;Ue++)for(let Ge=0;Ge<64;Ge++){let Xe=128+50*Math.sin(Ge*.8)*Math.sin(Ue*.8)+(Math.random()-.5)*40;fe.fillStyle=`rgb(${Xe},${Xe},${Xe})`,fe.fillRect(Ge,Ue,1,1)}let _e=new Xt(se);return _e.wrapS=_e.wrapT=Dn,_e.repeat.set(3,3),_e})(),s=new $e({color:"#ddd7cc",roughness:.9,metalness:0,bumpMap:n,bumpScale:.6}),r=new $e({color:"#7b7d82",roughness:.6,metalness:.1}),a=new $e({color:"#c9ccd2",roughness:.28,metalness:.95}),o=new $e({color:"#2b5fb8",roughness:.55}),l=new $e({color:"#e0682a",roughness:.55}),c=new $e({color:"#0b2533",emissive:"#58e3ff",emissiveIntensity:.4,roughness:.2});[s,r,a,o,l,c].forEach(se=>{se.fog=!1});let h=new ue(new kn(.17,.19,.075,3,.03),s);t.add(h);let d=new ue(new kn(.13,.13,.02,2,.008),r);d.position.set(0,-.01,-.035),t.add(d);let f=new ue(new kn(.168,.036,.05,2,.016),s);f.position.set(0,.078,.02),t.add(f);let x=new ue(new Tt(.02,.02,.01,32),c);x.rotation.x=Math.PI/2,x.position.set(0,-.01,-.047),t.add(x);let y=new ue(new Wn(.025,.005,10,40),a);y.position.copy(x.position),t.add(y);let m=(()=>{let se=document.createElement("canvas");se.width=se.height=128;let fe=se.getContext("2d"),_e=fe.createRadialGradient(64,64,0,64,64,64);_e.addColorStop(0,"rgba(255,255,255,1)"),_e.addColorStop(.25,"rgba(140,235,255,0.6)"),_e.addColorStop(1,"rgba(60,180,255,0)"),fe.fillStyle=_e,fe.fillRect(0,0,128,128);let Ue=new Xt(se);return Ue.colorSpace=yt,Ue})(),p=new un(new nn({map:m,color:"#7fe8ff",transparent:!0,depthWrite:!1,blending:Et,fog:!1,toneMapped:!1}));p.scale.setScalar(.12),p.position.set(0,-.005,-.1),t.add(p);let M=new ue(new _i(.018,2),new Nt({color:new ce(2.2,5,6),toneMapped:!1,fog:!1,transparent:!0}));M.position.set(0,-.005,-.1),t.add(M);let C=new tt,v=40,E=new Float32Array(v*3),S=new Float32Array(v*3);for(let se=0;se<v;se++)S[se*3]=Math.random()*6.28,S[se*3+1]=Math.random()*6.28,S[se*3+2]=.6+Math.random();C.setAttribute("position",new ht(E,3));let T=new wn(C,new ii({map:m,color:new ce(1.5,3.5,4.5),size:.012,transparent:!0,depthWrite:!1,blending:Et,toneMapped:!1,fog:!1}));T.frustumCulled=!1,t.add(T);let g=new vi("#6fe0ff",0,7,1.4);g.position.set(0,-.005,-.14),t.add(g);let b=[],P=[-.058,-.019,.02,.058],B=[[.05,.036,.03],[.056,.04,.032],[.052,.037,.03],[.04,.03,.026]];P.forEach((se,fe)=>{let _e=t,Ue=[],Ge=.095;B[fe].forEach((Xe,st)=>{let Be=new Ke;Be.position.set(st===0?se:0,Ge,st===0?.004:0),_e.add(Be);let pt=.0185-st*.0018,oe=new ue(new Ni(pt,Xe-pt,4,12),st===2?r:s);if(oe.position.y=Xe/2,Be.add(oe),st>0){let it=new ue(new Wn(pt*.98,pt*.18,6,16),r);it.rotation.x=Math.PI/2,it.position.y=.002,Be.add(it)}Ue.push(Be),_e=Be,Ge=Xe}),b.push(Ue)});let A=new Ke;A.position.set(-.085,-.02,-.01),A.rotation.set(0,.5,.9),t.add(A);let V=new ue(new Ni(.021,.035,4,12),s);V.position.y=.028,A.add(V);let w=new Ke;w.position.y=.056,A.add(w);let N=new ue(new Ni(.019,.026,4,12),r);N.position.y=.022,w.add(N);let k=new ue(new Tt(.07,.075,.06,32),s);k.position.y=-.125,t.add(k);let z=new ue(new Wn(.08,.012,12,48),a);z.rotation.x=Math.PI/2,z.position.y=-.16,t.add(z);let O=new ue(new Tt(.088,.1,.36,32),s);O.position.y=-.35,t.add(O);let I=new ue(new Tt(.0895,.0905,.022,32),o);I.position.y=-.2,t.add(I);let U=new ue(new Tt(.0915,.0925,.016,32),l);U.position.y=-.232,t.add(U);let $=new ue(new kn(.07,.045,.02,2,.006),r);$.position.set(0,-.215,.085),t.add($);let ye=new ue(new ns(.055,.03),new Nt({color:"#58e3ff",toneMapped:!1,fog:!1}));ye.position.set(0,-.215,.0955),t.add(ye),e.traverse(se=>{se.isMesh&&(se.castShadow=!1,se.receiveShadow=!1,se.renderOrder=10)});let le={charge:0,recoil:0,open:0,t:0,tiltX:0,tiltY:0,raise:0,raiseTarget:0},Ye=new L,ie=!1;function Pe(se){ie=se<.9,ie?(Ye.set(.15,-.4,-.95),i.scale.setScalar(.8)):(Ye.set(.31,-.27,-.92),i.scale.setScalar(1.05)),i.position.copy(Ye)}function j(se,fe){le.t+=se,le.raise+=(le.raiseTarget-le.raise)*Math.min(1,se*3.2),i.position.set(Ye.x,Ye.y-(1-le.raise)*.42,Ye.z),le.recoil=Math.max(0,le.recoil-se*2.6),le.open=Math.max(0,le.open-se*.9),le.tiltX+=((fe?.y??0)*.12-le.tiltX)*Math.min(1,se*5),le.tiltY+=((fe?.x??0)*-.18-le.tiltY)*Math.min(1,se*5);let _e=le.charge,Ue=Math.sin(le.t*1.6)*.006,Ge=_e>.55?(Math.random()-.5)*.004*(_e-.55)*2:0,Xe=Math.sin(Math.min(1,le.recoil)*Math.PI);e.position.set(Ge-Xe*.05,Ue+Ge+Xe*.05,-Xe*.16),e.rotation.set(le.tiltX+Xe*.35+_e*.06,(ie?.12:.32)+le.tiltY,(ie?.15:.3)-_e*.08);let st=At.lerp(.18+_e*.5,-.1,Math.min(1,le.open*1.6));b.forEach((oe,it)=>{let ot=1-it*.06;oe[0].rotation.x=-st*.7*ot,oe[1].rotation.x=-st*1*ot,oe[2].rotation.x=-st*.8*ot,oe[0].rotation.z=(1.5-it)*(.045+le.open*.1)}),w.rotation.x=-(.15+_e*.45)+le.open*.3,A.rotation.x=-_e*.2;let Be=_e>.02&&le.open<.05,pt=Be?.25+_e*1.6+Math.sin(le.t*22)*.06*_e:.001;if(M.scale.setScalar(pt),M.visible=Be,M.position.z=-.085-_e*.04,M.rotation.y+=se*4,M.rotation.x+=se*2.6,p.position.z=M.position.z,T.visible=Be,Be){for(let oe=0;oe<v;oe++){let it=S[oe*3]+le.t*(2+S[oe*3+2]*3),ot=S[oe*3+1]+le.t*1.3,gt=(.03+_e*.05)*S[oe*3+2];E[oe*3]=Math.cos(it)*Math.sin(ot)*gt,E[oe*3+1]=-.005+Math.cos(ot)*gt,E[oe*3+2]=M.position.z+Math.sin(it)*Math.sin(ot)*gt}C.attributes.position.needsUpdate=!0}c.emissiveIntensity=.3+_e*2.5+le.open*4+Math.sin(le.t*3)*.08,p.material.opacity=Math.min(1,_e*.85+le.open*.8),p.material.color.setRGB(.35+_e*.9,.7+_e*1.5,.9+_e*1.8),p.scale.setScalar(.03+_e*.075+le.open*.12),g.intensity=_e*6+le.open*14,ye.material.color.setRGB(.25+_e*.6,.8,1)}function Q(){le.recoil=1,le.open=1}function Se(se){return M.getWorldPosition(se)}return{root:i,hand:e,state:le,update:j,fire:Q,layout:Pe,worldPalm:Se}}var VM=`
varying vec2 vUv;
void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`,GM=`
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
}`;function WM(){let i=document.createElement("canvas");i.width=i.height=64;let e=i.getContext("2d"),t=e.createRadialGradient(32,32,0,32,32,32);return t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,64,64),new Xt(i)}function Pm(i){let e=new Ke;i.add(e);let t=(S,T,g)=>new ue(new Tt(S,S*.12,1,24,1,!0).translate(0,.5,0).rotateX(Math.PI/2),new xt({vertexShader:VM,fragmentShader:GM,transparent:!0,depthWrite:!1,side:zt,blending:Et,toneMapped:!1,fog:!1,uniforms:{uTime:{value:0},uAlpha:{value:0},uColor:{value:new ce(T)},uCore:{value:g}}})),n=t(.075,"#3fb8ff",.2),s=t(.03,"#bff6ff",1);[n,s].forEach(S=>{S.visible=!1,S.frustumCulled=!1,e.add(S)});let r=WM(),a=new un(new nn({map:r,color:new ce(2.5,5,6),transparent:!0,depthWrite:!1,blending:Et,toneMapped:!1,fog:!1}));a.visible=!1,e.add(a);let o=new un(new nn({map:r,color:new ce(3,5,6),transparent:!0,depthWrite:!1,blending:Et,toneMapped:!1,fog:!1}));o.visible=!1,e.add(o);let l=new ue(new er(.82,1,96),new Nt({color:new ce(1.4,3.2,4),transparent:!0,depthWrite:!1,blending:Et,toneMapped:!1,side:zt}));l.rotation.x=-Math.PI/2,l.visible=!1,e.add(l);let c=l.clone();c.material=l.material.clone(),e.add(c);let u=new vi("#7fe6ff",0,9,1.6);e.add(u);let h=220,d=new tt,f=new Float32Array(h*3),x=new Float32Array(h*3);d.setAttribute("position",new ht(f,3));let y=new wn(d,new ii({map:r,size:.16,color:"#d89a6c",transparent:!0,opacity:0,depthWrite:!1,sizeAttenuation:!0}));y.frustumCulled=!1,e.add(y);let m={phase:"idle",t:0,from:new L,to:new L,base:new L,scale:1,shake:0,onHit:null},p=new L;function M(S,T,g){let b=S.distanceTo(T)*g;for(let P of[n,s])P.position.copy(S),P.lookAt(T),P.scale.set(1,1,Math.max(.001,b))}function C(S,T,g,b,P){m.phase="travel",m.t=0,m.from.copy(S),m.to.copy(T),m.base.copy(g),m.scale=b,m.onHit=P,n.visible=s.visible=a.visible=!0}function v(){for(let S=0;S<h;S++){let T=Math.random()*Math.PI*2,g=Math.random()*.5*m.scale;f[S*3]=m.base.x+Math.cos(T)*g,f[S*3+1]=m.base.y+.05,f[S*3+2]=m.base.z+Math.sin(T)*g;let b=(1.2+Math.random()*2.6)*m.scale;x[S*3]=Math.cos(T)*b,x[S*3+1]=(.6+Math.random()*1.6)*m.scale,x[S*3+2]=Math.sin(T)*b}d.attributes.position.needsUpdate=!0,y.material.opacity=.55,y.material.size=.05*Math.max(.6,m.scale)}function E(S,T,g){if(n.material.uniforms.uTime.value=T,s.material.uniforms.uTime.value=T,m.shake=Math.max(0,m.shake-S*2.2),g&&m.phase!=="idle"&&m.from.copy(g),m.phase==="travel"){m.t+=S;let b=Math.min(1,m.t/.32),P=1-Math.pow(1-b,3);M(m.from,m.to,P),p.lerpVectors(m.from,m.to,P),a.position.copy(p),a.scale.setScalar(.35+Math.sin(T*40)*.05),n.material.uniforms.uAlpha.value=s.material.uniforms.uAlpha.value=1,b>=1&&(m.phase="hold",m.t=0,a.visible=!1,o.visible=!0,o.position.copy(m.to),l.visible=c.visible=!0,l.position.copy(m.base).y+=.03,c.position.copy(l.position),u.position.copy(m.to),u.intensity=40,m.shake=1,v(),m.onHit?.())}else if(m.phase==="hold"){m.t+=S,M(m.from,m.to,1);let b=Math.max(0,1-m.t/.55);n.material.uniforms.uAlpha.value=b,s.material.uniforms.uAlpha.value=b;let P=Math.min(1,m.t/.5);o.scale.setScalar((.5+P*2.4)*m.scale),o.material.opacity=(1-P)*.8;let B=Math.min(1,m.t/1.1),A=Math.min(1,Math.max(0,(m.t-.15)/1.3));l.scale.setScalar((.3+B*4.5)*m.scale),l.material.opacity=(1-B)*.9,c.scale.setScalar((.2+A*7)*m.scale),c.material.opacity=(1-A)*.45,u.intensity=40*Math.max(0,1-m.t/.7),m.t>1.5&&(m.phase="idle",n.visible=s.visible=o.visible=l.visible=c.visible=!1)}if(y.material.opacity>0){for(let b=0;b<h;b++)x[b*3+1]-=1.6*S*m.scale,x[b*3]*=1-S*1.4,x[b*3+2]*=1-S*1.4,f[b*3]+=x[b*3]*S,f[b*3+1]=Math.max(m.base.y+.02,f[b*3+1]+x[b*3+1]*S),f[b*3+2]+=x[b*3+2]*S;d.attributes.position.needsUpdate=!0,y.material.opacity=Math.max(0,y.material.opacity-S*.32),y.material.size+=S*.03}}return{fire:C,update:E,get shake(){return m.shake},get busy(){return m.phase!=="idle"}}}function Lm(){let i=null,e=null,t=!1,n=null,s=null,r=null,a=null,o=null,l=null,c=null,u={space:null,mars:null,current:null};function h(w=2){let N=i.createBuffer(1,i.sampleRate*w,i.sampleRate),k=N.getChannelData(0),z=0;for(let O=0;O<k.length;O++){let I=Math.random()*2-1;z=(z+.02*I)/1.02,k[O]=z*3.5}return N}function d(w=1){let N=i.createBuffer(1,i.sampleRate*w,i.sampleRate),k=N.getChannelData(0);for(let z=0;z<k.length;z++)k[z]=Math.random()*2-1;return N}function f(){if(i){i.state==="suspended"&&i.resume();return}let w=window.AudioContext||window.webkitAudioContext;w&&(i=new w,e=i.createGain(),e.gain.value=t?0:.9,e.connect(i.destination),n=i.createAnalyser(),n.fftSize=1024,e.connect(n),s=i.createGain(),s.gain.value=1,s.connect(e),l=i.createBiquadFilter(),l.type="lowpass",l.frequency.value=300,l.Q.value=6,o=i.createGain(),o.gain.value=0,r=i.createOscillator(),r.type="sawtooth",r.frequency.value=70,a=i.createOscillator(),a.type="sine",a.frequency.value=140,r.connect(l),a.connect(l),l.connect(o).connect(e),r.start(),a.start())}function x(){let w=i.createGain();w.gain.value=0,w.connect(s);let N=i.createBufferSource();N.buffer=h(4),N.loop=!0;let k=i.createBiquadFilter();k.type="bandpass",k.frequency.value=380,k.Q.value=.6,N.connect(k).connect(w),N.start();let z=i.createOscillator();z.frequency.value=.07;let O=i.createGain();return O.gain.value=160,z.connect(O).connect(k.frequency),z.start(),{gain:w,level:.16}}function y(){let w=i.createGain();w.gain.value=0,w.connect(s);let N=i.createBiquadFilter();N.type="lowpass",N.frequency.value=520,N.Q.value=.4,N.connect(w),[[55,"sine"],[55.4,"triangle"],[82.4,"sine"],[110.2,"sine"]].forEach(([O,I],U)=>{let $=i.createOscillator();$.type=I,$.frequency.value=O;let ye=i.createGain();ye.gain.value=[.5,.25,.3,.12][U],$.connect(ye).connect(N),$.start()});let k=i.createOscillator();k.frequency.value=.05;let z=i.createGain();return z.gain.value=220,k.connect(z).connect(N.frequency),k.start(),{gain:w,level:.085}}function m(w){if(!i)return;w==="mars"&&!u.mars&&(u.mars=x()),w==="space"&&!u.space&&(u.space=y());let N=i.currentTime;for(let k of["mars","space"]){let z=u[k];z&&(z.gain.gain.cancelScheduledValues(N),z.gain.gain.setValueAtTime(z.gain.gain.value,N),z.gain.gain.linearRampToValueAtTime(k===w?z.level:0,N+(k===w?2.5:1.2)))}u.current=w}function p(){if(!i)return;let w=i.currentTime,N=i.createBufferSource();N.buffer=d(1.4);let k=i.createBiquadFilter();k.type="bandpass",k.frequency.value=2400,k.Q.value=.8;let z=i.createGain();z.gain.setValueAtTime(0,w);for(let U=0;U<14;U++)z.gain.setValueAtTime(.05+Math.random()*.12,w+U*.07);z.gain.linearRampToValueAtTime(0,w+1.25),N.connect(k).connect(z).connect(e),N.start(w),N.stop(w+1.4);let O=i.createOscillator();O.type="sine",O.frequency.setValueAtTime(1600,w+.9),O.frequency.exponentialRampToValueAtTime(880,w+1.15);let I=i.createGain();I.gain.setValueAtTime(0,w+.9),I.gain.linearRampToValueAtTime(.12,w+.93),I.gain.exponentialRampToValueAtTime(.001,w+1.5),O.connect(I).connect(e),O.start(w+.9),O.stop(w+1.6)}function M(w=0){if(!i)return;let N=i.currentTime,k=[784,988,1175][w%3],z=i.createOscillator();z.type="sine",z.frequency.value=k;let O=i.createGain();O.gain.setValueAtTime(0,N),O.gain.linearRampToValueAtTime(.11,N+.01),O.gain.exponentialRampToValueAtTime(.001,N+.9);let I=i.createDelay();I.delayTime.value=.22;let U=i.createGain();U.gain.value=.32,z.connect(O),O.connect(e),O.connect(I),I.connect(U).connect(I),I.connect(e),z.start(N),z.stop(N+1)}function C(w=2.8){if(!i)return;let N=i.currentTime,k=i.createBufferSource();k.buffer=h(w+.5);let z=i.createBiquadFilter();z.type="bandpass",z.Q.value=1.2,z.frequency.setValueAtTime(180,N),z.frequency.exponentialRampToValueAtTime(2600,N+w);let O=i.createGain();O.gain.setValueAtTime(1e-4,N),O.gain.exponentialRampToValueAtTime(.5,N+w*.9),O.gain.exponentialRampToValueAtTime(.001,N+w+.4),k.connect(z).connect(O).connect(e),k.start(N),k.stop(N+w+.5);let I=i.createOscillator();I.type="sine",I.frequency.setValueAtTime(40,N),I.frequency.linearRampToValueAtTime(70,N+w);let U=i.createGain();U.gain.setValueAtTime(1e-4,N),U.gain.exponentialRampToValueAtTime(.35,N+w),U.gain.exponentialRampToValueAtTime(.001,N+w+.6),I.connect(U).connect(e),I.start(N),I.stop(N+w+.7)}function v(w){if(!i)return;let N=i.currentTime;o.gain.setTargetAtTime(w>.01?.05+w*.11:0,N,.05),r.frequency.setTargetAtTime(70+w*260,N,.05),a.frequency.setTargetAtTime(140+w*620,N,.05),l.frequency.setTargetAtTime(300+w*2600,N,.05)}function E(){if(!i)return;let w=i.currentTime,N=i.createBufferSource();N.buffer=h(1);let k=i.createBiquadFilter();k.type="highpass",k.frequency.setValueAtTime(3e3,w),k.frequency.exponentialRampToValueAtTime(200,w+.6);let z=i.createGain();z.gain.setValueAtTime(.5,w),z.gain.exponentialRampToValueAtTime(.001,w+.9),N.connect(k).connect(z).connect(e),N.start(w),N.stop(w+1);let O=i.createOscillator();O.type="sine",O.frequency.setValueAtTime(900,w),O.frequency.exponentialRampToValueAtTime(45,w+.7);let I=i.createGain();I.gain.setValueAtTime(.45,w),I.gain.exponentialRampToValueAtTime(.001,w+.9),O.connect(I).connect(e),O.start(w),O.stop(w+1)}function S(){if(!i)return;let w=i.currentTime;[1046.5,1318.5,1568,2093].forEach((N,k)=>{let z=i.createOscillator();z.type="sine",z.frequency.value=N;let O=i.createGain(),I=w+.25+k*.12;O.gain.setValueAtTime(0,I),O.gain.linearRampToValueAtTime(.09,I+.02),O.gain.exponentialRampToValueAtTime(.001,I+1.4),z.connect(O).connect(e),z.start(I),z.stop(I+1.5)})}let T=0;function g(w=1){if(!i||c)return;let N=i.currentTime;if(N-T<.075)return;T=N;let k=(420+Math.random()*360)*w,z=i.createBiquadFilter();z.type="bandpass",z.frequency.value=1400*w,z.Q.value=.9;let O=i.createGain();O.gain.setValueAtTime(1e-4,N),O.gain.exponentialRampToValueAtTime(.16,N+.008),O.gain.exponentialRampToValueAtTime(.001,N+.085),[1,1.5].forEach(I=>{let U=i.createOscillator();U.type=I===1?"square":"triangle",U.frequency.setValueAtTime(k*I,N),U.frequency.exponentialRampToValueAtTime(k*I*(Math.random()>.5?1.25:.8),N+.07),U.connect(z),U.start(N),U.stop(N+.09)}),z.connect(O).connect(e)}function b(w){!i||!s||s.gain.setTargetAtTime(w?.35:1,i.currentTime,.15)}function P(w){return B(),!w||t?null:(c=new Audio(w),c.addEventListener("ended",()=>{c=null}),c.play().catch(()=>{c=null}),c)}function B(){c&&(c.pause(),c=null)}function A(w){t=w,e&&e.gain.setTargetAtTime(w?0:.9,i.currentTime,.05),w&&B()}function V(){if(!n)return 0;let w=new Float32Array(n.fftSize);n.getFloatTimeDomainData(w);let N=0;for(let k of w)N+=k*k;return Math.sqrt(N/w.length)}return{level:V,duck:b,get ctx(){return i},start:f,setAmbient:m,signal:p,beep:M,whoosh:C,setCharge:v,zap:E,chime:S,blip:g,speak:P,stopSpeech:B,setMuted:A,get muted(){return t}}}var Nm=[{id:"sojourner",name:"Sojourner",mission:"Mars Pathfinder",site:"Ares Vallis",coords:"19.13\xB0N 33.22\xB0W",status_ar:"\u0633\u0627\u0643\u062A\u0629 \u0645\u0646 \u0662\u0667 \u0633\u0628\u062A\u0645\u0628\u0631 \u0661\u0669\u0669\u0667",status_en:"Silent since 27 Sep 1997",voice:{pitch:1.18,speed:1.05},stats:[{ar_label:"\u0646\u0632\u0644\u062A \u0639\u0644\u0649 \u0627\u0644\u0645\u0631\u064A\u062E",ar:"\u0664 \u064A\u0648\u0644\u064A\u0648 \u0661\u0669\u0669\u0667",en_label:"Landed on Mars",en:"4 Jul 1997"},{ar_label:"\u0627\u0644\u0639\u0645\u0631 \u0627\u0644\u0645\u062E\u0637\u0637",ar:"\u0667 \u0623\u064A\u0627\u0645 \u0645\u0631\u064A\u062E\u064A\u0629",en_label:"Planned life",en:"7 sols"},{ar_label:"\u0627\u0634\u062A\u063A\u0644\u062A \u0641\u0639\u0644\u064B\u0627",ar:"\u062D\u0648\u0627\u0644\u064A \u0668\u0663 \u064A\u0648\u0645",en_label:"Actually worked",en:"about 83 sols"},{ar_label:"\u0627\u0644\u0648\u0632\u0646",ar:"\u062D\u0648\u0627\u0644\u064A \u0661\u0660 \u0643\u064A\u0644\u0648",en_label:"Mass",en:"about 10 kg"},{ar_label:"\u0622\u062E\u0631 \u0627\u062A\u0635\u0627\u0644",ar:"\u0662\u0667 \u0633\u0628\u062A\u0645\u0628\u0631 \u0661\u0669\u0669\u0667",en_label:"Last contact",en:"27 Sep 1997"}],source:"https://science.nasa.gov/mission/mars-pathfinder/",lines:[{kind:"fiction",ar:"\u2026\u0647\u0647\u061F \u0645\u064A\u0646 \u0635\u062D\u0651\u0627\u0646\u064A\u061F \u0634\u0643\u0631\u064B\u0627 \u0644\u064A\u0643! \u0623\u0646\u0627 Sojourner\u060C \u0623\u0635\u063A\u0631 \u0631\u0648\u0641\u0631 \u0641\u064A \u0627\u0644\u062D\u0643\u0627\u064A\u0629\u2026 \u0648\u0623\u0648\u0644 \u0639\u0631\u0628\u064A\u0629 \u0628\u0639\u062C\u0644 \u062A\u0645\u0634\u064A \u0639\u0644\u0649 \u0643\u0648\u0643\u0628 \u062A\u0627\u0646\u064A!",tts_ar:"\u0647\u0647\u061F \u0645\u064A\u0646 \u0635\u062D\u0651\u0627\u0646\u064A\u061F \u0634\u0643\u0631\u0627 \u0644\u064A\u0643! \u0623\u0646\u0627 \u0633\u0648\u062C\u0648\u0631\u0646\u0631\u060C \u0623\u0635\u063A\u0631 \u0631\u0648\u0641\u0631 \u0641\u064A \u0627\u0644\u062D\u0643\u0627\u064A\u0629. \u0648\u0623\u0648\u0644 \u0639\u0631\u0628\u064A\u0629 \u0628\u0639\u062C\u0644 \u062A\u0645\u0634\u064A \u0639\u0644\u0649 \u0643\u0648\u0643\u0628 \u062A\u0627\u0646\u064A!",en:"\u2026Huh? Who woke me up? Thank you! I'm Sojourner, the smallest rover in this story\u2026 and the first wheeled vehicle to drive on another planet!",audio_en:"audio/sojourner_1_en.mp3"},{kind:"fiction",ar:"\u0647\u0642\u0648\u0644\u0643 \u0633\u0631: \u0623\u0646\u0627 \u0633\u0627\u0643\u062A\u0629 \u0645\u0646 \u0633\u0646\u0629 \u0661\u0669\u0669\u0667\u060C \u0648\u0627\u0644\u0637\u0627\u0642\u0629 \u062F\u064A \u062C\u0627\u064A\u0629 \u0645\u0646 \u062E\u064A\u0627\u0644\u0643. \u0628\u0633 \u0627\u0644\u0644\u064A \u0639\u0645\u0644\u062A\u0647 \u0644\u0633\u0647 \u0627\u0644\u0639\u0644\u0645\u0627\u0621 \u0641\u0627\u0643\u0631\u064A\u0646\u0647 \u0644\u062D\u062F \u0627\u0644\u0646\u0647\u0627\u0631\u062F\u0647.",tts_ar:"\u0647\u0642\u0648\u0644\u0643 \u0633\u0631: \u0623\u0646\u0627 \u0633\u0627\u0643\u062A\u0629 \u0645\u0646 \u0633\u0646\u0629 1997\u060C \u0648\u0627\u0644\u0637\u0627\u0642\u0629 \u062F\u064A \u062C\u0627\u064A\u0629 \u0645\u0646 \u062E\u064A\u0627\u0644\u0643. \u0628\u0633 \u0627\u0644\u0644\u064A \u0639\u0645\u0644\u062A\u0647 \u0644\u0633\u0647 \u0627\u0644\u0639\u0644\u0645\u0627\u0621 \u0641\u0627\u0643\u0631\u064A\u0646\u0647 \u0644\u062D\u062F \u0627\u0644\u0646\u0647\u0627\u0631\u062F\u0647.",en:"Here's a secret: I've been silent since 1997, and this energy comes from your imagination. But scientists still remember what I did.",audio_en:"audio/sojourner_2_en.mp3"},{kind:"fact",ar:"\u0646\u0632\u0644\u062A \u0639\u0644\u0649 \u0627\u0644\u0645\u0631\u064A\u062E \u064A\u0648\u0645 \u0664 \u064A\u0648\u0644\u064A\u0648 \u0661\u0669\u0669\u0667 \u062C\u0648\u0647 \u0648\u0627\u062F\u064A \u0627\u0633\u0645\u0647 Ares Vallis\u060C \u0648\u0646\u0637\u0651\u064A\u062A \u0639\u0644\u0649 \u0627\u0644\u0623\u0631\u0636 \u062C\u0648\u0647 \u0623\u0643\u064A\u0627\u0633 \u0647\u0648\u0627 \u0632\u064A \u0627\u0644\u0643\u0648\u0631\u0629! \u0643\u0627\u0646 \u0645\u062E\u0637\u0637 \u0623\u0634\u062A\u063A\u0644 \u0667 \u0623\u064A\u0627\u0645 \u0628\u0633\u2026 \u0648\u0627\u0634\u062A\u063A\u0644\u062A \u062D\u0648\u0627\u0644\u064A \u0668\u0663 \u064A\u0648\u0645.",tts_ar:"\u0646\u0632\u0644\u062A \u0639\u0644\u0649 \u0627\u0644\u0645\u0631\u064A\u062E \u064A\u0648\u0645 4 \u064A\u0648\u0644\u064A\u0648 1997 \u062C\u0648\u0647 \u0648\u0627\u062F\u064A \u0627\u0633\u0645\u0647 \u0622\u0631\u064A\u0633 \u0641\u0627\u0644\u064A\u0633\u060C \u0648\u0646\u0637\u0651\u064A\u062A \u0639\u0644\u0649 \u0627\u0644\u0623\u0631\u0636 \u062C\u0648\u0647 \u0623\u0643\u064A\u0627\u0633 \u0647\u0648\u0627 \u0632\u064A \u0627\u0644\u0643\u0648\u0631\u0629! \u0643\u0627\u0646 \u0645\u062E\u0637\u0637 \u0623\u0634\u062A\u063A\u0644 7 \u0623\u064A\u0627\u0645 \u0628\u0633\u060C \u0648\u0627\u0634\u062A\u063A\u0644\u062A \u062D\u0648\u0627\u0644\u064A 83 \u064A\u0648\u0645.",en:"I landed on Mars on 4 July 1997 in a valley called Ares Vallis, bouncing on the ground inside airbags like a ball! I was planned to work for just 7 days\u2026 and I worked for about 83.",audio_en:"audio/sojourner_3_en.mp3"},{kind:"fact",ar:"\u0648\u0632\u0646\u064A \u062D\u0648\u0627\u0644\u064A \u0661\u0660 \u0643\u064A\u0644\u0648 \u0628\u0633\u060C \u0648\u0643\u0646\u062A \u0628\u0641\u062D\u0635 \u0627\u0644\u0635\u062E\u0648\u0631 \u0628\u062C\u0647\u0627\u0632 \u0641\u064A \u0636\u0647\u0631\u064A. \u0648\u0627\u0644\u0639\u0644\u0645\u0627\u0621 \u0633\u0645\u0651\u0648\u0627 \u0627\u0644\u0635\u062E\u0648\u0631 \u0627\u0644\u0644\u064A \u062D\u0648\u0627\u0644\u064A\u0651\u0627 \u0623\u0633\u0627\u0645\u064A \u0644\u0637\u064A\u0641\u0629 \u0632\u064A Barnacle Bill \u0648 Yogi!",tts_ar:"\u0648\u0632\u0646\u064A \u062D\u0648\u0627\u0644\u064A 10 \u0643\u064A\u0644\u0648 \u0628\u0633\u060C \u0648\u0643\u0646\u062A \u0628\u0641\u062D\u0635 \u0627\u0644\u0635\u062E\u0648\u0631 \u0628\u062C\u0647\u0627\u0632 \u0641\u064A \u0636\u0647\u0631\u064A. \u0648\u0627\u0644\u0639\u0644\u0645\u0627\u0621 \u0633\u0645\u0651\u0648\u0627 \u0627\u0644\u0635\u062E\u0648\u0631 \u0627\u0644\u0644\u064A \u062D\u0648\u0627\u0644\u064A\u0627 \u0623\u0633\u0627\u0645\u064A \u0644\u0637\u064A\u0641\u0629 \u0632\u064A \u0628\u0627\u0631\u0646\u0627\u0643\u0644 \u0628\u064A\u0644 \u0648\u064A\u0648\u062C\u064A!",en:"I weighed only about 10 kilograms, and I studied rocks with an instrument on my back. Scientists gave the rocks around me fun names like Barnacle Bill and Yogi!",audio_en:"audio/sojourner_4_en.mp3"},{kind:"fact",ar:"\u0627\u0644\u0648\u0627\u062F\u064A \u0627\u0644\u0644\u064A \u0646\u0632\u0644\u062A \u0641\u064A\u0647 \u0627\u062A\u062D\u0641\u0631 \u0645\u0646 \u0641\u064A\u0636\u0627\u0646\u0627\u062A \u0645\u064A\u0629 \u0636\u062E\u0645\u0629 \u0645\u0646 \u0632\u0645\u0627\u0646 \u0623\u0648\u064A\u060C \u0648\u0627\u0644\u0635\u062E\u0648\u0631 \u0627\u0644\u0644\u064A \u0641\u062D\u0635\u062A\u0647\u0627 \u0633\u0627\u0639\u062F\u062A \u0627\u0644\u0639\u0644\u0645\u0627\u0621 \u064A\u0641\u0647\u0645\u0648\u0627 \u0625\u0646 \u0627\u0644\u0645\u0631\u064A\u062E \u0643\u0627\u0646 \u0641\u064A\u0647 \u0645\u064A\u0629 \u0643\u062A\u064A\u0631.",tts_ar:"\u0627\u0644\u0648\u0627\u062F\u064A \u0627\u0644\u0644\u064A \u0646\u0632\u0644\u062A \u0641\u064A\u0647 \u0627\u062A\u062D\u0641\u0631 \u0645\u0646 \u0641\u064A\u0636\u0627\u0646\u0627\u062A \u0645\u064A\u0629 \u0636\u062E\u0645\u0629 \u0645\u0646 \u0632\u0645\u0627\u0646 \u0623\u0648\u064A\u060C \u0648\u0627\u0644\u0635\u062E\u0648\u0631 \u0627\u0644\u0644\u064A \u0641\u062D\u0635\u062A\u0647\u0627 \u0633\u0627\u0639\u062F\u062A \u0627\u0644\u0639\u0644\u0645\u0627\u0621 \u064A\u0641\u0647\u0645\u0648\u0627 \u0625\u0646 \u0627\u0644\u0645\u0631\u064A\u062E \u0643\u0627\u0646 \u0641\u064A\u0647 \u0645\u064A\u0629 \u0643\u062A\u064A\u0631.",en:"The valley I landed in was carved by huge floods long ago, and the rocks I studied helped scientists understand that Mars once had a lot of water.",audio_en:"audio/sojourner_5_en.mp3"},{kind:"fact",ar:"\u0641\u064A \u0633\u0628\u062A\u0645\u0628\u0631 \u0661\u0669\u0669\u0667 \u0627\u0644\u0645\u062D\u0637\u0629 \u0627\u0644\u0644\u064A \u0643\u0646\u062A \u0628\u0643\u0644\u0651\u0645 \u0627\u0644\u0623\u0631\u0636 \u0645\u0646 \u062E\u0644\u0627\u0644\u0647\u0627 \u0633\u0643\u062A\u062A\u060C \u0641\u0628\u0642\u064A\u062A \u0644\u0648\u062D\u062F\u064A. \u0628\u0633 \u0623\u0646\u0627 \u0627\u0644\u0644\u064A \u0641\u062A\u062D\u062A \u0627\u0644\u0637\u0631\u064A\u0642 \u0644\u0643\u0644 \u0627\u0644\u0631\u0648\u0641\u0631\u0632 \u0627\u0644\u0644\u064A \u062C\u0645 \u0628\u0639\u062F\u064A.",tts_ar:"\u0641\u064A \u0633\u0628\u062A\u0645\u0628\u0631 1997 \u0627\u0644\u0645\u062D\u0637\u0629 \u0627\u0644\u0644\u064A \u0643\u0646\u062A \u0628\u0643\u0644\u0651\u0645 \u0627\u0644\u0623\u0631\u0636 \u0645\u0646 \u062E\u0644\u0627\u0644\u0647\u0627 \u0633\u0643\u062A\u062A\u060C \u0641\u0628\u0642\u064A\u062A \u0644\u0648\u062D\u062F\u064A. \u0628\u0633 \u0623\u0646\u0627 \u0627\u0644\u0644\u064A \u0641\u062A\u062D\u062A \u0627\u0644\u0637\u0631\u064A\u0642 \u0644\u0643\u0644 \u0627\u0644\u0631\u0648\u0641\u0631\u0632 \u0627\u0644\u0644\u064A \u062C\u0645 \u0628\u0639\u062F\u064A.",en:"In September 1997, the lander I used to talk to Earth went silent, and I was left alone. But I opened the road for every rover that came after me.",audio_en:"audio/sojourner_6_en.mp3"}]},{id:"spirit",name:"Spirit",mission:"MER-A",site:"Gusev Crater",coords:"14.57\xB0S 175.47\xB0E",status_ar:"\u0633\u0627\u0643\u062A \u0645\u0646 \u0662\u0662 \u0645\u0627\u0631\u0633 \u0662\u0660\u0661\u0660",status_en:"Silent since 22 Mar 2010",voice:{pitch:1,speed:1},stats:[{ar_label:"\u0646\u0632\u0644 \u0639\u0644\u0649 \u0627\u0644\u0645\u0631\u064A\u062E",ar:"\u0664 \u064A\u0646\u0627\u064A\u0631 \u0662\u0660\u0660\u0664",en_label:"Landed on Mars",en:"4 Jan 2004"},{ar_label:"\u0627\u0644\u0639\u0645\u0631 \u0627\u0644\u0645\u062E\u0637\u0637",ar:"\u0669\u0660 \u064A\u0648\u0645 \u0645\u0631\u064A\u062E\u064A",en_label:"Planned life",en:"90 sols"},{ar_label:"\u0627\u0634\u062A\u063A\u0644 \u0641\u0639\u0644\u064B\u0627",ar:"+\u0662\u0662\u0660\u0660 \u064A\u0648\u0645 \u0645\u0631\u064A\u062E\u064A",en_label:"Actually worked",en:"2,200+ sols"},{ar_label:"\u0627\u0644\u0645\u0633\u0627\u0641\u0629",ar:"\u0667\u066B\u0667 \u0643\u0645",en_label:"Distance",en:"7.7 km"},{ar_label:"\u0622\u062E\u0631 \u0627\u062A\u0635\u0627\u0644",ar:"\u0662\u0662 \u0645\u0627\u0631\u0633 \u0662\u0660\u0661\u0660",en_label:"Last contact",en:"22 Mar 2010"}],source:"https://science.nasa.gov/mission/mer-spirit/",lines:[{kind:"fiction",ar:"\u2026\u0625\u064A\u0647 \u062F\u0647\u061F \u2026 \u0623\u0646\u0627 \u0635\u062D\u064A\u062A\u061F! \u0634\u0643\u0631\u064B\u0627 \u0625\u0646\u0643 \u0635\u062D\u0651\u064A\u062A\u0646\u064A! \u0623\u0646\u0627 Spirit\u060C \u0631\u0648\u0641\u0631 \u0645\u0646 \u0646\u0627\u0633\u0627.",tts_ar:"\u0625\u064A\u0647 \u062F\u0647\u061F \u0623\u0646\u0627 \u0635\u062D\u064A\u062A\u061F! \u0634\u0643\u0631\u0627 \u0625\u0646\u0643 \u0635\u062D\u0651\u064A\u062A\u0646\u064A! \u0623\u0646\u0627 \u0633\u0628\u064A\u0631\u064A\u062A\u060C \u0631\u0648\u0641\u0631 \u0645\u0646 \u0646\u0627\u0633\u0627.",en:"\u2026What was that? \u2026 Am I awake?! Thank you for waking me up! I'm Spirit, a NASA rover.",audio_en:"audio/spirit_1_en.mp3"},{kind:"fiction",ar:"\u0647\u0642\u0648\u0644\u0643 \u0633\u0631: \u0623\u0646\u0627 \u0641\u064A \u0627\u0644\u062D\u0642\u064A\u0642\u0629 \u0633\u0627\u0643\u062A \u0645\u0646 \u0662\u0662 \u0645\u0627\u0631\u0633 \u0662\u0660\u0661\u0660\u060C \u0648\u0627\u0644\u0637\u0627\u0642\u0629 \u062F\u064A \u062C\u0627\u064A\u0629 \u0645\u0646 \u062E\u064A\u0627\u0644\u0643. \u0628\u0633 \u0627\u0644\u0644\u064A \u0627\u0643\u062A\u0634\u0641\u062A\u0647 \u0644\u0633\u0647 \u0639\u0627\u064A\u0634 \u0644\u062D\u062F \u0627\u0644\u0646\u0647\u0627\u0631\u062F\u0647.",tts_ar:"\u0647\u0642\u0648\u0644\u0643 \u0633\u0631: \u0623\u0646\u0627 \u0641\u064A \u0627\u0644\u062D\u0642\u064A\u0642\u0629 \u0633\u0627\u0643\u062A \u0645\u0646 22 \u0645\u0627\u0631\u0633 2010\u060C \u0648\u0627\u0644\u0637\u0627\u0642\u0629 \u062F\u064A \u062C\u0627\u064A\u0629 \u0645\u0646 \u062E\u064A\u0627\u0644\u0643. \u0628\u0633 \u0627\u0644\u0644\u064A \u0627\u0643\u062A\u0634\u0641\u062A\u0647 \u0644\u0633\u0647 \u0639\u0627\u064A\u0634 \u0644\u062D\u062F \u0627\u0644\u0646\u0647\u0627\u0631\u062F\u0647.",en:"Here's a secret: I've really been silent since 22 March 2010, and this energy comes from your imagination. But what I discovered is still alive today.",audio_en:"audio/spirit_2_en.mp3"},{kind:"fact",ar:"\u0646\u0632\u0644\u062A \u0639\u0644\u0649 \u0627\u0644\u0645\u0631\u064A\u062E \u064A\u0648\u0645 \u0664 \u064A\u0646\u0627\u064A\u0631 \u0662\u0660\u0660\u0664 \u062C\u0648\u0647 \u0641\u0648\u0647\u0629 \u0627\u0633\u0645\u0647\u0627 \u062C\u0648\u0633\u064A\u0641. \u0643\u0627\u0646\u0648\u0627 \u0645\u062E\u0637\u0637\u064A\u0646 \u0623\u0634\u062A\u063A\u0644 \u0669\u0660 \u064A\u0648\u0645 \u0645\u0631\u064A\u062E\u064A \u0628\u0633\u2026 \u0648\u0623\u0646\u0627 \u0627\u0634\u062A\u063A\u0644\u062A \u0623\u0643\u062A\u0631 \u0645\u0646 \u0662\u0662\u0660\u0660!",tts_ar:"\u0646\u0632\u0644\u062A \u0639\u0644\u0649 \u0627\u0644\u0645\u0631\u064A\u062E \u064A\u0648\u0645 4 \u064A\u0646\u0627\u064A\u0631 2004 \u062C\u0648\u0647 \u0641\u0648\u0647\u0629 \u0627\u0633\u0645\u0647\u0627 \u062C\u0648\u0633\u064A\u0641. \u0643\u0627\u0646\u0648\u0627 \u0645\u062E\u0637\u0637\u064A\u0646 \u0623\u0634\u062A\u063A\u0644 90 \u064A\u0648\u0645 \u0645\u0631\u064A\u062E\u064A \u0628\u0633\u060C \u0648\u0623\u0646\u0627 \u0627\u0634\u062A\u063A\u0644\u062A \u0623\u0643\u062A\u0631 \u0645\u0646 2200!",en:"I landed on Mars on 4 January 2004, inside Gusev Crater. I was planned to work for just 90 Martian days\u2026 and I worked for more than 2,200!",audio_en:"audio/spirit_3_en.mp3"},{kind:"fact",ar:"\u0633\u0646\u0629 \u0662\u0660\u0660\u0666 \u0639\u062C\u0644\u062A\u064A \u0627\u0644\u0623\u0645\u0627\u0645\u064A\u0629 \u0627\u0644\u064A\u0645\u064A\u0646 \u0628\u0637\u0651\u0644\u062A \u062A\u0644\u0641\u060C \u0641\u0628\u0642\u064A\u062A \u0623\u0645\u0634\u064A \u0644\u0648\u0631\u0627 \u0648\u0623\u0646\u0627 \u0628\u062C\u0631\u0651\u0647\u0627. \u0648\u062A\u062E\u064A\u0651\u0644\u061F \u0627\u0644\u0639\u062C\u0644\u0629 \u062F\u064A \u062D\u0641\u0631\u062A \u0627\u0644\u0623\u0631\u0636 \u0648\u0643\u0634\u0641\u062A \u062A\u0631\u0628\u0629 \u0643\u0644\u0647\u0627 \u062A\u0642\u0631\u064A\u0628\u064B\u0627 \u0633\u064A\u0644\u064A\u0643\u0627\u060C \u0648\u062F\u064A \u0639\u0644\u0627\u0645\u0629 \u0625\u0646 \u0632\u0645\u0627\u0646 \u0643\u0627\u0646 \u0641\u064A\u0647 \u0645\u064A\u0629 \u0633\u062E\u0646\u0629 \u0647\u0646\u0627.",tts_ar:"\u0633\u0646\u0629 2006 \u0639\u062C\u0644\u062A\u064A \u0627\u0644\u0623\u0645\u0627\u0645\u064A\u0629 \u0627\u0644\u064A\u0645\u064A\u0646 \u0628\u0637\u0651\u0644\u062A \u062A\u0644\u0641\u060C \u0641\u0628\u0642\u064A\u062A \u0623\u0645\u0634\u064A \u0644\u0648\u0631\u0627 \u0648\u0623\u0646\u0627 \u0628\u062C\u0631\u0651\u0647\u0627. \u0648\u062A\u062E\u064A\u0651\u0644\u061F \u0627\u0644\u0639\u062C\u0644\u0629 \u062F\u064A \u062D\u0641\u0631\u062A \u0627\u0644\u0623\u0631\u0636 \u0648\u0643\u0634\u0641\u062A \u062A\u0631\u0628\u0629 \u0643\u0644\u0647\u0627 \u062A\u0642\u0631\u064A\u0628\u0627 \u0633\u064A\u0644\u064A\u0643\u0627\u060C \u0648\u062F\u064A \u0639\u0644\u0627\u0645\u0629 \u0625\u0646 \u0632\u0645\u0627\u0646 \u0643\u0627\u0646 \u0641\u064A\u0647 \u0645\u064A\u0629 \u0633\u062E\u0646\u0629 \u0647\u0646\u0627.",en:"In 2006 my right front wheel stopped turning, so I drove backwards, dragging it. And guess what? That wheel dug up soil that was almost pure silica, a sign that hot water once existed here.",audio_en:"audio/spirit_4_en.mp3"},{kind:"fact",ar:"\u0633\u0646\u0629 \u0662\u0660\u0660\u0669 \u063A\u0631\u0632\u062A \u0641\u064A \u0631\u0645\u0644 \u0646\u0627\u0639\u0645 \u0641\u064A \u0645\u0643\u0627\u0646 \u0627\u0633\u0645\u0647 Troy. \u0648\u0641\u064A \u0662\u0660\u0661\u0660 \u062C\u0647 \u0627\u0644\u0634\u062A\u0627 \u0648\u0627\u0644\u0637\u0627\u0642\u0629 \u062E\u0644\u0635\u062A\u060C \u0648\u0628\u0637\u0651\u0644\u062A \u0623\u062A\u0643\u0644\u0645.",tts_ar:"\u0633\u0646\u0629 2009 \u063A\u0631\u0632\u062A \u0641\u064A \u0631\u0645\u0644 \u0646\u0627\u0639\u0645 \u0641\u064A \u0645\u0643\u0627\u0646 \u0627\u0633\u0645\u0647 \u062A\u0631\u0648\u064A. \u0648\u0641\u064A 2010 \u062C\u0647 \u0627\u0644\u0634\u062A\u0627 \u0648\u0627\u0644\u0637\u0627\u0642\u0629 \u062E\u0644\u0635\u062A\u060C \u0648\u0628\u0637\u0651\u0644\u062A \u0623\u062A\u0643\u0644\u0645.",en:"In 2009 I got stuck in soft sand at a place called Troy. In 2010 winter came, my power ran out, and I stopped talking.",audio_en:"audio/spirit_5_en.mp3"},{kind:"fact",ar:"\u0628\u0633 \u0622\u062B\u0627\u0631\u064A \u0644\u0633\u0647 \u0647\u0646\u0627: \u0667\u066B\u0667 \u0643\u064A\u0644\u0648\u0645\u062A\u0631 \u0645\u0634\u064A\u062A\u0647\u0645 \u0639\u0644\u0649 \u0627\u0644\u0645\u0631\u064A\u062E. \u062A\u062D\u0628 \u062A\u0643\u062A\u0634\u0641 \u0631\u062D\u0644\u062A\u064A\u061F",tts_ar:"\u0628\u0633 \u0622\u062B\u0627\u0631\u064A \u0644\u0633\u0647 \u0647\u0646\u0627: \u0633\u0628\u0639\u0629 \u0643\u064A\u0644\u0648 \u0648\u0633\u0628\u0639\u0645\u064A\u0629 \u0645\u062A\u0631 \u0645\u0634\u064A\u062A\u0647\u0645 \u0639\u0644\u0649 \u0627\u0644\u0645\u0631\u064A\u062E. \u062A\u062D\u0628 \u062A\u0643\u062A\u0634\u0641 \u0631\u062D\u0644\u062A\u064A\u061F",en:"But my footprints are still here: 7.7 kilometres driven on Mars. Want to explore my journey?",audio_en:"audio/spirit_6_en.mp3"}]},{id:"opportunity",name:"Opportunity",mission:"MER-B",site:"Meridiani Planum",coords:"1.95\xB0S 354.47\xB0E",status_ar:"\u0633\u0627\u0643\u062A \u0645\u0646 \u0661\u0660 \u064A\u0648\u0646\u064A\u0648 \u0662\u0660\u0661\u0668",status_en:"Silent since 10 Jun 2018",voice:{pitch:.88,speed:.95},stats:[{ar_label:"\u0646\u0632\u0644 \u0639\u0644\u0649 \u0627\u0644\u0645\u0631\u064A\u062E",ar:"\u0662\u0665 \u064A\u0646\u0627\u064A\u0631 \u0662\u0660\u0660\u0664",en_label:"Landed on Mars",en:"25 Jan 2004"},{ar_label:"\u0627\u0644\u0639\u0645\u0631 \u0627\u0644\u0645\u062E\u0637\u0637",ar:"\u0669\u0660 \u064A\u0648\u0645 \u0645\u0631\u064A\u062E\u064A",en_label:"Planned life",en:"90 sols"},{ar_label:"\u0627\u0634\u062A\u063A\u0644 \u0641\u0639\u0644\u064B\u0627",ar:"\u062D\u0648\u0627\u0644\u064A \u0661\u0665 \u0633\u0646\u0629",en_label:"Actually worked",en:"about 15 years"},{ar_label:"\u0627\u0644\u0645\u0633\u0627\u0641\u0629",ar:"+\u0664\u0665 \u0643\u0645",en_label:"Distance",en:"45+ km"},{ar_label:"\u0622\u062E\u0631 \u0627\u062A\u0635\u0627\u0644",ar:"\u0661\u0660 \u064A\u0648\u0646\u064A\u0648 \u0662\u0660\u0661\u0668",en_label:"Last contact",en:"10 Jun 2018"}],source:"https://science.nasa.gov/mission/mer-opportunity/",lines:[{kind:"fiction",ar:"\u2026\u0622\u0647\u061F \u0623\u0646\u0627 \u0641\u064A\u0646\u061F \u2026 \u0625\u0646\u062A \u0627\u0644\u0644\u064A \u0635\u062D\u0651\u064A\u062A\u0646\u064A\u061F \u0634\u0643\u0631\u064B\u0627 \u064A\u0627 \u0628\u0637\u0644! \u0623\u0646\u0627 Opportunity\u060C \u0648\u0635\u062D\u0627\u0628\u064A \u0628\u064A\u0642\u0648\u0644\u0648\u0644\u064A Oppy.",tts_ar:"\u0622\u0647\u061F \u0623\u0646\u0627 \u0641\u064A\u0646\u061F \u0625\u0646\u062A \u0627\u0644\u0644\u064A \u0635\u062D\u0651\u064A\u062A\u0646\u064A\u061F \u0634\u0643\u0631\u0627 \u064A\u0627 \u0628\u0637\u0644! \u0623\u0646\u0627 \u0623\u0648\u0628\u0648\u0631\u062A\u0634\u0648\u0646\u064A\u062A\u064A\u060C \u0648\u0635\u062D\u0627\u0628\u064A \u0628\u064A\u0642\u0648\u0644\u0648\u0644\u064A \u0623\u0648\u0628\u064A.",en:"\u2026Huh? Where am I? \u2026 Did you wake me up? Thank you, hero! I'm Opportunity, and my friends call me Oppy.",audio_en:"audio/opportunity_1_en.mp3"},{kind:"fiction",ar:"\u0647\u0642\u0648\u0644\u0643 \u0633\u0631: \u0623\u0646\u0627 \u0633\u0627\u0643\u062A \u0645\u0646 \u0661\u0660 \u064A\u0648\u0646\u064A\u0648 \u0662\u0660\u0661\u0668\u060C \u0648\u0627\u0644\u0637\u0627\u0642\u0629 \u062F\u064A \u062C\u0627\u064A\u0629 \u0645\u0646 \u062E\u064A\u0627\u0644\u0643. \u0628\u0633 \u0631\u062D\u0644\u062A\u064A \u0644\u0633\u0647 \u0628\u062A\u0639\u0644\u0651\u0645 \u0627\u0644\u0639\u0644\u0645\u0627\u0621 \u0644\u062D\u062F \u0627\u0644\u0646\u0647\u0627\u0631\u062F\u0647.",tts_ar:"\u0647\u0642\u0648\u0644\u0643 \u0633\u0631: \u0623\u0646\u0627 \u0633\u0627\u0643\u062A \u0645\u0646 10 \u064A\u0648\u0646\u064A\u0648 2018\u060C \u0648\u0627\u0644\u0637\u0627\u0642\u0629 \u062F\u064A \u062C\u0627\u064A\u0629 \u0645\u0646 \u062E\u064A\u0627\u0644\u0643. \u0628\u0633 \u0631\u062D\u0644\u062A\u064A \u0644\u0633\u0647 \u0628\u062A\u0639\u0644\u0651\u0645 \u0627\u0644\u0639\u0644\u0645\u0627\u0621 \u0644\u062D\u062F \u0627\u0644\u0646\u0647\u0627\u0631\u062F\u0647.",en:"Here's a secret: I've been silent since 10 June 2018, and this energy comes from your imagination. But my journey still teaches scientists today.",audio_en:"audio/opportunity_2_en.mp3"},{kind:"fact",ar:"\u0646\u0632\u0644\u062A \u064A\u0648\u0645 \u0662\u0665 \u064A\u0646\u0627\u064A\u0631 \u0662\u0660\u0660\u0664\u060C \u0648\u0646\u0637\u0651\u064A\u062A \u0641\u064A \u0623\u0643\u064A\u0627\u0633 \u0627\u0644\u0647\u0648\u0627 \u0644\u062D\u062F \u0645\u0627 \u0648\u0642\u0639\u062A \u062C\u0648\u0647 \u0641\u0648\u0647\u0629 \u0635\u063A\u064A\u0631\u0629 \u0627\u0633\u0645\u0647\u0627 Eagle. \u0627\u0644\u0639\u0644\u0645\u0627\u0621 \u0633\u0645\u0651\u0648\u0647\u0627 \xABHole in one\xBB \u0632\u064A \u0627\u0644\u062C\u0648\u0644\u0641!",tts_ar:"\u0646\u0632\u0644\u062A \u064A\u0648\u0645 25 \u064A\u0646\u0627\u064A\u0631 2004\u060C \u0648\u0646\u0637\u0651\u064A\u062A \u0641\u064A \u0623\u0643\u064A\u0627\u0633 \u0627\u0644\u0647\u0648\u0627 \u0644\u062D\u062F \u0645\u0627 \u0648\u0642\u0639\u062A \u062C\u0648\u0647 \u0641\u0648\u0647\u0629 \u0635\u063A\u064A\u0631\u0629 \u0627\u0633\u0645\u0647\u0627 \u0625\u064A\u062C\u0644. \u0627\u0644\u0639\u0644\u0645\u0627\u0621 \u0633\u0645\u0651\u0648\u0647\u0627 \u0647\u0648\u0644 \u0625\u0646 \u0648\u0627\u0646\u060C \u0632\u064A \u0627\u0644\u062C\u0648\u0644\u0641!",en:'I landed on 25 January 2004 and bounced in my airbags until I rolled into a small crater called Eagle. Scientists called it a "hole in one", like in golf!',audio_en:"audio/opportunity_3_en.mp3"},{kind:"fact",ar:"\u0647\u0646\u0627\u0643 \u0644\u0642\u064A\u062A \u0643\u0648\u0631 \u0635\u063A\u064A\u0631\u0629 \u0645\u0646 \u0645\u0639\u062F\u0646 \u0627\u0633\u0645\u0647 \u0647\u064A\u0645\u0627\u062A\u064A\u062A\u060C \u0648\u0627\u0644\u0639\u0644\u0645\u0627\u0621 \u0633\u0645\u0651\u0648\u0647\u0627 \xAB\u0627\u0644\u062A\u0648\u062A\xBB. \u0627\u0644\u0643\u0648\u0631 \u062F\u064A \u0628\u062A\u062A\u0643\u0648\u0651\u0646 \u0641\u064A \u0648\u062C\u0648\u062F \u0645\u064A\u0629\u060C \u064A\u0639\u0646\u064A \u0627\u0644\u0645\u0643\u0627\u0646 \u062F\u0647 \u0643\u0627\u0646 \u0641\u064A\u0647 \u0645\u064A\u0629 \u0632\u0645\u0627\u0646.",tts_ar:"\u0647\u0646\u0627\u0643 \u0644\u0642\u064A\u062A \u0643\u0648\u0631 \u0635\u063A\u064A\u0631\u0629 \u0645\u0646 \u0645\u0639\u062F\u0646 \u0627\u0633\u0645\u0647 \u0647\u064A\u0645\u0627\u062A\u064A\u062A\u060C \u0648\u0627\u0644\u0639\u0644\u0645\u0627\u0621 \u0633\u0645\u0651\u0648\u0647\u0627 \u0627\u0644\u062A\u0648\u062A. \u0627\u0644\u0643\u0648\u0631 \u062F\u064A \u0628\u062A\u062A\u0643\u0648\u0651\u0646 \u0641\u064A \u0648\u062C\u0648\u062F \u0645\u064A\u0629\u060C \u064A\u0639\u0646\u064A \u0627\u0644\u0645\u0643\u0627\u0646 \u062F\u0647 \u0643\u0627\u0646 \u0641\u064A\u0647 \u0645\u064A\u0629 \u0632\u0645\u0627\u0646.",en:'There I found tiny balls of a mineral called hematite, which scientists nicknamed "blueberries". They form in water, so this place once had water.',audio_en:"audio/opportunity_4_en.mp3"},{kind:"fact",ar:"\u0643\u0627\u0646 \u0645\u062E\u0637\u0637 \u0623\u0639\u064A\u0634 \u0669\u0660 \u064A\u0648\u0645 \u0645\u0631\u064A\u062E\u064A\u2026 \u0648\u0639\u0634\u062A \u062D\u0648\u0627\u0644\u064A \u0661\u0665 \u0633\u0646\u0629! \u0648\u0645\u0634\u064A\u062A \u0623\u0643\u062A\u0631 \u0645\u0646 \u0664\u0665 \u0643\u064A\u0644\u0648\u0645\u062A\u0631\u060C \u064A\u0639\u0646\u064A \u0623\u0643\u062A\u0631 \u0645\u0646 \u0645\u0627\u0631\u0627\u062B\u0648\u0646 \u0643\u0627\u0645\u0644.",tts_ar:"\u0643\u0627\u0646 \u0645\u062E\u0637\u0637 \u0623\u0639\u064A\u0634 90 \u064A\u0648\u0645 \u0645\u0631\u064A\u062E\u064A\u060C \u0648\u0639\u0634\u062A \u062D\u0648\u0627\u0644\u064A 15 \u0633\u0646\u0629! \u0648\u0645\u0634\u064A\u062A \u0623\u0643\u062A\u0631 \u0645\u0646 45 \u0643\u064A\u0644\u0648\u0645\u062A\u0631\u060C \u064A\u0639\u0646\u064A \u0623\u0643\u062A\u0631 \u0645\u0646 \u0645\u0627\u0631\u0627\u062B\u0648\u0646 \u0643\u0627\u0645\u0644.",en:"I was planned to live for 90 Martian days\u2026 and I lived for about 15 years! I drove more than 45 kilometres, longer than a whole marathon.",audio_en:"audio/opportunity_5_en.mp3"},{kind:"fact",ar:"\u0641\u064A \u0662\u0660\u0661\u0668 \u062C\u062A \u0639\u0627\u0635\u0641\u0629 \u062A\u0631\u0627\u0628\u064A\u0629 \u063A\u0637\u0651\u062A \u0627\u0644\u0645\u0631\u064A\u062E \u0643\u0644\u0647 \u0648\u062D\u062C\u0628\u062A \u0627\u0644\u0634\u0645\u0633 \u0639\u0646 \u0623\u0644\u0648\u0627\u062D\u064A\u060C \u0648\u0628\u0637\u0651\u0644\u062A \u0623\u062A\u0643\u0644\u0645. \u0628\u0633 \u0622\u062B\u0627\u0631\u064A \u0644\u0633\u0647 \u0645\u0631\u0633\u0648\u0645\u0629 \u0639\u0644\u0649 \u0627\u0644\u0631\u0645\u0644. \u062A\u062D\u0628 \u062A\u0645\u0634\u064A \u0639\u0644\u0649 \u062E\u0637\u0627\u064A\u0627\u061F",tts_ar:"\u0641\u064A 2018 \u062C\u062A \u0639\u0627\u0635\u0641\u0629 \u062A\u0631\u0627\u0628\u064A\u0629 \u063A\u0637\u0651\u062A \u0627\u0644\u0645\u0631\u064A\u062E \u0643\u0644\u0647 \u0648\u062D\u062C\u0628\u062A \u0627\u0644\u0634\u0645\u0633 \u0639\u0646 \u0623\u0644\u0648\u0627\u062D\u064A\u060C \u0648\u0628\u0637\u0651\u0644\u062A \u0623\u062A\u0643\u0644\u0645. \u0628\u0633 \u0622\u062B\u0627\u0631\u064A \u0644\u0633\u0647 \u0645\u0631\u0633\u0648\u0645\u0629 \u0639\u0644\u0649 \u0627\u0644\u0631\u0645\u0644. \u062A\u062D\u0628 \u062A\u0645\u0634\u064A \u0639\u0644\u0649 \u062E\u0637\u0627\u064A\u0627\u061F",en:"In 2018 a dust storm covered all of Mars and blocked the Sun from my solar panels, and I stopped talking. But my tracks are still drawn in the sand. Want to walk in my footsteps?",audio_en:"audio/opportunity_6_en.mp3"}]}];var XM={tagline:{ar:"\u0627\u0644\u0645\u0647\u0645\u0629 \u0645\u0645\u0643\u0646 \u062A\u062E\u0644\u0635\u2026 \u0628\u0633 \u0623\u062B\u0631\u0647\u0627 \u0628\u064A\u0641\u0636\u0644",en:"A mission may end, but its footprint remains"},start:{ar:"\u0627\u0633\u062A\u0642\u0628\u0644 \u0627\u0644\u0625\u0634\u0627\u0631\u0629",en:"Receive the Signal"},loading:{ar:"\u0628\u0646\u0636\u0628\u0637 \u0627\u0644\u0647\u0648\u0627\u0626\u064A \u0639\u0644\u0649 \u0627\u0644\u0645\u0631\u064A\u062E\u2026",en:"Tuning the antenna to Mars\u2026"},signalHint:{ar:"\u0627\u0636\u063A\u0637 \u0639\u0634\u0627\u0646 \u062A\u0633\u062A\u0642\u0628\u0644 \xB7 \u0627\u0644\u0635\u0648\u062A \u0647\u064A\u0634\u062A\u063A\u0644",en:"Tap to receive \xB7 sound will play"},silentA:{ar:"Spirit \u0633\u0627\u0643\u062A \u0628\u0642\u0627\u0644\u0647",en:"Spirit has been silent for"},silentB:{ar:"\u064A\u0648\u0645",en:"days"},expTitle:{ar:"\u0627\u0644\u0631\u062D\u0644\u0629 \u0627\u0644\u0643\u0627\u0645\u0644\u0629",en:"Immersive Expedition"},expDesc:{ar:"\u0639\u064A\u0634 \u0631\u062D\u0644\u0629 Spirit \u0627\u0644\u062D\u0642\u064A\u0642\u064A\u0629: \u0625\u0637\u0644\u0627\u0642 \u0645\u0646 \u0627\u0644\u0623\u0631\u0636\u060C \u0667 \u0634\u0647\u0648\u0631 \u0641\u064A \u0627\u0644\u0641\u0636\u0627\u060C \u0648\u0647\u0628\u0648\u0637 \u0628\u0627\u0644\u0628\u0631\u0627\u0634\u0648\u062A \u0648\u0623\u0643\u064A\u0627\u0633 \u0627\u0644\u0647\u0648\u0627",en:"Live Spirit\u2019s real trip: launch from Earth, 7 months in space, and a landing by parachute and airbags"},expGo:{ar:"\u064A\u0644\u0627 \u0646\u0637\u0644\u0639",en:"Let\u2019s Launch"},warpTitle:{ar:"\u0627\u0644\u0627\u0646\u062A\u0642\u0627\u0644 \u0627\u0644\u0641\u0648\u0631\u064A",en:"Instant Warp"},warpDesc:{ar:"\u0627\u0646\u0632\u0644 \u0639\u0644\u0649 \u0637\u0648\u0644 \u0639\u0646\u062F \u0627\u0644\u0631\u0648\u0641\u0631\u0632 \u0648\u0635\u062D\u0651\u064A\u0647\u0645",en:"Drop straight to the rovers and wake them"},gDuration:{ar:"\u0627\u0644\u0645\u062F\u0629",en:"Time"},gNarration:{ar:"\u0631\u0627\u0648\u064A \u0628\u0627\u0644\u0635\u0648\u062A",en:"Narration"},gSfx:{ar:"\u0645\u0624\u062B\u0631\u0627\u062A \u0635\u0648\u062A\u064A\u0629",en:"Sound FX"},gMotion:{ar:"\u0627\u0644\u062D\u0631\u0643\u0629",en:"Motion"},min10:{ar:"~\u0665 \u062F\u0642\u0627\u064A\u0642",en:"~5 min"},min2:{ar:"~\u0662 \u062F\u0642\u064A\u0642\u0629",en:"~2 min"},yes:{ar:"\u0623\u064A\u0648\u0647",en:"Yes"},high:{ar:"\u0643\u062A\u064A\u0631",en:"High"},medium:{ar:"\u0645\u062A\u0648\u0633\u0637\u0629",en:"Medium"},soon:{ar:"\u0642\u0631\u064A\u0628\u064B\u0627",en:"Coming Soon"},go:{ar:"\u064A\u0644\u0627 \u0646\u0646\u0632\u0644",en:"Let\u2019s Go"},preparing:{ar:"\u0628\u0646\u062C\u0647\u0651\u0632 \u0627\u0644\u0633\u0637\u062D\u2026",en:"Preparing\u2026"},day:{ar:"\u0646\u0647\u0627\u0631",en:"Day"},night:{ar:"\u0644\u064A\u0644",en:"Night"},marsTime:{ar:"\u0628\u062A\u0648\u0642\u064A\u062A \u0627\u0644\u0645\u0631\u064A\u062E",en:"Mars local time"},homeAria:{ar:"\u0627\u0644\u0631\u062C\u0648\u0639 \u0644\u0644\u0628\u062F\u0627\u064A\u0629",en:"Back to start"},skip:{ar:"\u062A\u062E\u0637\u0651\u064A",en:"Skip"},guideName:{ar:"\u0633\u0648\u0644 \xB7 \u0627\u0644\u0645\u0631\u0634\u062F",en:"SOL \xB7 your guide"},guideHello:{ar:"\u0623\u0647\u0644\u064B\u0627 \u064A\u0627 \u0645\u0633\u062A\u0643\u0634\u0641! \u0623\u0646\u0627 \u0633\u0648\u0644\u060C \u0648\u0627\u0633\u0645\u064A \u0645\u0639\u0646\u0627\u0647 \xAB\u064A\u0648\u0645 \u0639\u0644\u0649 \u0627\u0644\u0645\u0631\u064A\u062E\xBB.",en:"Hi, explorer! I\u2019m SOL. My name means \u201Cone day on Mars\u201D."},guideChoose:{ar:"\u0639\u0644\u0649 \u0627\u0644\u0643\u0631\u0629 \u062F\u064A \u0663 \u0631\u0648\u0641\u0631\u0632 \u0646\u0627\u064A\u0645\u064A\u0646 \u0628\u0642\u0627\u0644\u0647\u0645 \u0633\u0646\u064A\u0646. \u0627\u062E\u062A\u0627\u0631 \u0648\u0627\u062D\u062F \u0648\u0623\u0646\u0627 \u0647\u0646\u0632\u0651\u0644\u0643 \u0639\u0646\u062F\u0647.",en:"Three rovers are asleep on this planet. Pick one and I\u2019ll drop you right next to it."},guideHint:{ar:"\u0644\u0650\u0641 \u0627\u0644\u0643\u0631\u0629 \u0628\u0625\u064A\u062F\u0643\u060C \u0623\u0648 \u062F\u0648\u0633 \u0639\u0644\u0649 \u062F\u0628\u0648\u0633 \u0623\u0648 \u0627\u0633\u0645 \u0631\u0648\u0641\u0631.",en:"Spin the globe, or tap a pin or a rover\u2019s name."},guide_sojourner:{ar:"Sojourner: \u0623\u0648\u0644 \u0639\u0631\u0628\u064A\u0629 \u0628\u0639\u062C\u0644 \u062A\u0645\u0634\u064A \u0639\u0644\u0649 \u0643\u0648\u0643\u0628 \u062A\u0627\u0646\u064A\u060C \u0633\u0646\u0629 \u0661\u0669\u0669\u0667. \u0648\u0632\u0646\u0647\u0627 \u062D\u0648\u0627\u0644\u064A \u0661\u0660 \u0643\u064A\u0644\u0648 \u0628\u0633!",en:"Sojourner: the first wheeled vehicle on another planet, in 1997. It weighed only about 10 kg!"},guide_spirit:{ar:"Spirit: \u0646\u0632\u0644 \u0641\u064A \u0641\u0648\u0647\u0629 \u062C\u0648\u0633\u064A\u0641 \u0633\u0646\u0629 \u0662\u0660\u0660\u0664. \u0643\u0627\u0646 \u0627\u0644\u0645\u0641\u0631\u0648\u0636 \u064A\u0634\u062A\u063A\u0644 \u0669\u0660 \u064A\u0648\u0645\u2026 \u0627\u0634\u062A\u063A\u0644 \u0623\u0643\u062A\u0631 \u0645\u0646 \u0666 \u0633\u0646\u064A\u0646!",en:"Spirit: landed in Gusev Crater in 2004. It was meant to work for 90 sols\u2026 it lasted more than 6 years!"},guide_opportunity:{ar:"Opportunity: \u062A\u0648\u0623\u0645 Spirit. \u0645\u0634\u064A \u0623\u0643\u062A\u0631 \u0645\u0646 \u0664\u0665 \u0643\u064A\u0644\u0648 \u0648\u0627\u0634\u062A\u063A\u0644 \u062D\u0648\u0627\u0644\u064A \u0661\u0665 \u0633\u0646\u0629!",en:"Opportunity: Spirit\u2019s twin. It drove more than 45 km and worked for about 15 years!"},landAt:{ar:"\u0627\u0646\u0632\u0644 \u0639\u0646\u062F",en:"Land at"},back:{ar:"\u0631\u062C\u0648\u0639",en:"Back"},ready:{ar:"\u062C\u0627\u0647\u0632. \u0634\u063A\u0651\u0644 \u0627\u0644\u0635\u0648\u062A \u0644\u062A\u062C\u0631\u0628\u0629 \u0623\u062D\u0644\u0649",en:"Ready. Sound on for the full experience"},holdHintShort:{ar:"\u0627\u0636\u063A\u0637 \u0645\u0637\u0648\u0651\u0644\u064B\u0627 \u0639\u0644\u0649 \u0627\u0644\u0632\u0631\u0627\u0631 \u0623\u0648 \u0627\u0644\u0634\u0627\u0634\u0629",en:"Press & hold the button or the screen"},holdHint:{ar:"\u0627\u0636\u063A\u0637 \u0645\u0637\u0648\u0651\u0644\u064B\u0627 \u0639\u0644\u0649 Power Pulse \u0639\u0634\u0627\u0646 \u062A\u0634\u062D\u0646 \u0627\u0644\u0628\u062F\u0644\u0629 \u0648\u062A\u0635\u062D\u0651\u064A \u0627\u0644\u0631\u0648\u0641\u0631",en:"Press and hold Power Pulse to charge your suit and wake the rover"},dragHint:{ar:"\u0627\u0633\u062D\u0628 \u0639\u0644\u0649 \u0627\u0644\u0634\u0627\u0634\u0629 \u0639\u0634\u0627\u0646 \u062A\u0644\u0641\u0651 \u0627\u0644\u0631\u0648\u0641\u0631",en:"Drag the screen to turn the rover"},power:{ar:"\u0627\u0636\u063A\u0637 \u0645\u0637\u0648\u0651\u0644\u064B\u0627",en:"Press & hold"},fact:{ar:"\u062D\u0642\u064A\u0642\u0629",en:"Fact"},story:{ar:"\u0642\u0635\u0629",en:"Story"},next:{ar:"\u0627\u0644\u062A\u0627\u0644\u064A",en:"Next"},again:{ar:"\u0645\u0646 \u0627\u0644\u0623\u0648\u0644",en:"Start Over"},awakeNow:{ar:"\u0635\u0627\u062D\u064A \u062F\u0644\u0648\u0642\u062A\u064A \u2726 \u0628\u0641\u0636\u0644\u0643",en:"Awake now \u2726 thanks to you"},mute:{ar:"\u0643\u062A\u0645 \u0627\u0644\u0635\u0648\u062A",en:"Mute sound"},unmute:{ar:"\u062A\u0634\u063A\u064A\u0644 \u0627\u0644\u0635\u0648\u062A",en:"Turn sound on"},lang:{ar:"English",en:"\u0639\u0631\u0628\u064A"},navLabel:{ar:"\u0627\u062E\u062A\u0627\u0631 \u0631\u0648\u0641\u0631",en:"Choose a rover"},credit:{ar:"\u0646\u0645\u0648\u0630\u062C Spirit \u0648 Opportunity \u062B\u0644\u0627\u062B\u064A \u0627\u0644\u0623\u0628\u0639\u0627\u062F: NASA/JPL-Caltech \xB7 Sojourner: \u0646\u0645\u0648\u0630\u062C \u0645\u0628\u0633\u0651\u0637 \u0645\u0646 \u0639\u0645\u0644 \u0627\u0644\u0641\u0631\u064A\u0642",en:"3D Spirit & Opportunity model: NASA/JPL-Caltech \xB7 Sojourner: simplified team-made model"},creditHome:{ar:"\u062E\u0631\u064A\u0637\u0629 \u0627\u0644\u0645\u0631\u064A\u062E \u0648\u0627\u0644\u0633\u0645\u0627\u0621: Solar System Scope (CC BY 4.0) \u0645\u0646 \u0628\u064A\u0627\u0646\u0627\u062A NASA \xB7 \u0645\u0643\u0627\u0646 \u0627\u0644\u0634\u0645\u0633 \u0641\u0648\u0642 \u0627\u0644\u0645\u0631\u064A\u062E \u062F\u0644\u0648\u0642\u062A\u064A \u0645\u062D\u0633\u0648\u0628 \u0628\u062E\u0648\u0627\u0631\u0632\u0645\u064A\u0629 Mars24 \u0645\u0646 NASA",en:"Mars & sky maps: Solar System Scope (CC BY 4.0), from NASA data \xB7 Sun position over Mars computed live with NASA\u2019s Mars24 algorithm"},noWebGL:{ar:"\u0627\u0644\u062C\u0647\u0627\u0632 \u062F\u0647 \u0645\u0634 \u0628\u064A\u062F\u0639\u0645 WebGL\u060C \u062C\u0631\u0651\u0628 \u0645\u062A\u0635\u0641\u062D Chrome \u0623\u0648 Edge.",en:"This device does not support WebGL. Try Chrome or Edge."},loadError:{ar:"\u062D\u0635\u0644\u062A \u0645\u0634\u0643\u0644\u0629 \u0641\u064A \u0627\u0644\u062A\u062D\u0645\u064A\u0644\u060C \u062D\u062F\u0651\u062B \u0627\u0644\u0635\u0641\u062D\u0629.",en:"Something went wrong while loading. Please refresh."},expHello:{ar:"\u0623\u0647\u0644\u064B\u0627 \u064A\u0627 \u0645\u0633\u062A\u0643\u0634\u0641! \u0627\u0644\u0646\u0647\u0627\u0631\u062F\u0647 \u0647\u0646\u0639\u064A\u0634 \u0631\u062D\u0644\u0629 Spirit \u0627\u0644\u062D\u0642\u064A\u0642\u064A\u0629 \u0645\u0646 \u0627\u0644\u0623\u0631\u0636 \u0644\u0644\u0645\u0631\u064A\u062E.",en:"Welcome aboard, explorer! Today we live Spirit\u2019s real trip from Earth to Mars."},expPad:{ar:"\u062F\u064A \u0627\u0644\u0623\u0631\u0636\u060C \u0648\u062F\u0647 Cape Canaveral \u0641\u064A \u0641\u0644\u0648\u0631\u064A\u062F\u0627. \u0645\u0646 \u0647\u0646\u0627 Spirit \u0627\u062A\u0637\u0644\u0642 \u0639\u0644\u0649 \u0635\u0627\u0631\u0648\u062E Delta II \u064A\u0648\u0645 \u0661\u0660 \u064A\u0648\u0646\u064A\u0648 \u0662\u0660\u0660\u0663. \u0627\u0636\u063A\u0637 \u0645\u0637\u0648\u0651\u0644\u064B\u0627 \u0639\u0644\u0649 \xAB\u0625\u0637\u0644\u0627\u0642\xBB.",en:"That\u2019s Earth, and this is Cape Canaveral in Florida. Spirit launched from here on a Delta II rocket on 10 June 2003. Press and hold \u201CLaunch\u201D."},expLaunched:{ar:"\u0627\u0646\u0637\u0644\u0642\u0646\u0627! \u0648\u062F\u0651\u0639 \u0627\u0644\u0623\u0631\u0636\u2026",en:"Liftoff! Say goodbye to Earth\u2026"},expCruise1:{ar:"\u0627\u0644\u0631\u062D\u0644\u0629 \u0644\u0644\u0645\u0631\u064A\u062E \u0623\u062E\u062F\u062A \u062D\u0648\u0627\u0644\u064A \u0667 \u0634\u0647\u0648\u0631\u060C \u0648\u0642\u0637\u0639 \u0641\u064A\u0647\u0627 Spirit \u0664\u0668\u0667 \u0645\u0644\u064A\u0648\u0646 \u0643\u064A\u0644\u0648!",en:"The trip to Mars took about 7 months, and Spirit travelled 487 million km!"},expCruise2:{ar:"\u0637\u0648\u0644 \u0627\u0644\u0637\u0631\u064A\u0642 Spirit \u0643\u0627\u0646 \u0646\u0627\u064A\u0645 \u062C\u0648\u0647 \u0643\u0628\u0633\u0648\u0644\u0629\u060C \u0648\u0627\u0644\u0645\u0631\u0643\u0628\u0629 \u0627\u0644\u0644\u064A \u0634\u0627\u064A\u0644\u0627\u0647 \u0628\u062A\u0627\u062E\u062F \u0643\u0647\u0631\u0628\u0627 \u0645\u0646 \u0623\u0644\u0648\u0627\u062D \u0634\u0645\u0633\u064A\u0629 \u0632\u0631\u0642\u0627.",en:"All the way, Spirit slept inside a capsule, and the stage carrying it got power from blue solar panels."},expMars:{ar:"\u0634\u0627\u064A\u0641 \u0627\u0644\u0646\u0642\u0637\u0629 \u0627\u0644\u062D\u0645\u0631\u0627 \u0627\u0644\u0644\u064A \u0628\u062A\u0643\u0628\u0631\u061F \u062F\u0647 \u0627\u0644\u0645\u0631\u064A\u062E!",en:"See the red dot getting bigger? That\u2019s Mars!"},expApproach:{ar:"\u0642\u0628\u0644 \u0627\u0644\u063A\u0644\u0627\u0641 \u0627\u0644\u062C\u0648\u064A \u0628\u0646\u0633\u064A\u0628 \u0645\u0631\u0643\u0628\u0629 \u0627\u0644\u0631\u062D\u0644\u0629\u2026 \u0648\u0627\u0644\u0643\u0628\u0633\u0648\u0644\u0629 \u0628\u062A\u0644\u0641 \u0627\u0644\u062F\u0631\u0639 \u0627\u0644\u062D\u0631\u0627\u0631\u064A \u0644\u0642\u062F\u0651\u0627\u0645.",en:"Before the atmosphere we let go of the cruise stage\u2026 and the capsule turns its heat shield forward."},expEntry:{ar:"\u062F\u062E\u0644\u0646\u0627 \u0627\u0644\u063A\u0644\u0627\u0641 \u0627\u0644\u062C\u0648\u064A \u0628\u0633\u0631\u0639\u0629 \u062D\u0648\u0627\u0644\u064A \u0661\u0669\u0660\u0660\u0660 \u0643\u0645 \u0641\u064A \u0627\u0644\u0633\u0627\u0639\u0629! \u0627\u0636\u063A\u0637 \u0645\u0637\u0648\u0651\u0644\u064B\u0627 \u0639\u0644\u0649 \xAB\u062B\u0628\u0651\u062A \u0627\u0644\u062F\u0631\u0639\xBB \u0639\u0634\u0627\u0646 \u064A\u0641\u0636\u0644 \u0642\u062F\u0651\u0627\u0645 \u0627\u0644\u0646\u0627\u0631.",en:"We hit the atmosphere at about 19,000 km/h! Press and hold \u201CHold the Shield\u201D to keep it facing the fire."},expEntryOk:{ar:"\u0628\u0631\u0627\u0641\u0648! \u0627\u0644\u0627\u062D\u062A\u0643\u0627\u0643 \u0628\u0627\u0644\u0647\u0648\u0627 \u0642\u0644\u0651\u0644 \u0633\u0631\u0639\u062A\u0646\u0627 \u0669\u0660\u066A \u0641\u064A \u062D\u0648\u0627\u0644\u064A \u0664 \u062F\u0642\u0627\u064A\u0642.",en:"Well done! Friction with the air cut our speed by 90% in about 4 minutes."},edlChute:{ar:"\u0644\u0633\u0647 \u0633\u0631\u064A\u0639\u064A\u0646 \u062C\u062F\u064B\u0627. \u0627\u0641\u062A\u062D \u0627\u0644\u0628\u0631\u0627\u0634\u0648\u062A \u0644\u0645\u0627 \u0627\u0644\u0627\u0631\u062A\u0641\u0627\u0639 \u064A\u0648\u0635\u0644 \u062D\u0648\u0627\u0644\u064A \u0661\u0660 \u0643\u0645!",en:"Still very fast. Open the parachute when the altitude reaches about 10 km!"},edlEarly:{ar:"\u0628\u062F\u0631\u064A \u0634\u0648\u064A\u0629! \u0628\u0627\u0644\u0633\u0631\u0639\u0629 \u062F\u064A \u0627\u0644\u0628\u0631\u0627\u0634\u0648\u062A \u0645\u0645\u0643\u0646 \u064A\u062A\u0642\u0637\u0639. \u0627\u0633\u062A\u0646\u0649 \u0627\u0644\u0627\u0631\u062A\u0641\u0627\u0639 \u064A\u0642\u0631\u0628 \u0645\u0646 \u0661\u0660 \u0643\u0645.",en:"A bit early! At this speed the parachute could tear. Wait until the altitude is close to 10 km."},edlChuteLate:{ar:"\u0627\u062A\u0623\u062E\u0631\u0646\u0627! \u0645\u0646 \u063A\u064A\u0631 \u0628\u0631\u0627\u0634\u0648\u062A \u0647\u0646\u062E\u0628\u0637 \u0641\u064A \u0627\u0644\u0623\u0631\u0636. \u064A\u0644\u0627 \u0646\u062C\u0631\u0628 \u062A\u0627\u0646\u064A.",en:"Too late! Without a parachute we would crash. Let\u2019s try again."},edlChuteOk:{ar:"\u0627\u0644\u0628\u0631\u0627\u0634\u0648\u062A \u0627\u062A\u0641\u062A\u062D! \u0627\u0644\u0633\u0631\u0639\u0629 \u0646\u0632\u0644\u062A \u0644\u062D\u0648\u0627\u0644\u064A \u0663\u0660\u0660 \u0643\u0645 \u0641\u064A \u0627\u0644\u0633\u0627\u0639\u0629. \u0627\u0644\u062F\u0631\u0639 \u0627\u0644\u062D\u0631\u0627\u0631\u064A \u0628\u064A\u0642\u0639\u060C \u0648\u0627\u0644\u0645\u0631\u0643\u0628\u0629 \u0628\u062A\u0646\u0632\u0644 \u0639\u0644\u0649 \u062D\u0628\u0644 \u0637\u0648\u0644\u0647 \u0662\u0660 \u0645\u062A\u0631.",en:"Parachute open! We slowed to about 300 km/h. The heat shield drops, and the lander is lowered on a 20-metre rope."},edlBags:{ar:"\u0627\u0644\u0623\u0631\u0636 \u0642\u0631\u0651\u0628\u062A! \u0627\u0646\u0641\u062E \u0623\u0643\u064A\u0627\u0633 \u0627\u0644\u0647\u0648\u0627 \u0642\u0628\u0644 \u0645\u0627 \u0646\u0644\u0645\u0633 \u0627\u0644\u0623\u0631\u0636 \u0628\u062D\u0648\u0627\u0644\u064A \u0668 \u062B\u0648\u0627\u0646\u064A.",en:"The ground is close! Inflate the airbags about 8 seconds before touchdown."},edlBagsEarly:{ar:"\u0628\u062F\u0631\u064A! \u0627\u0633\u062A\u0646\u0649 \u0627\u0644\u0639\u062F\u0627\u062F \u064A\u0642\u0631\u0628 \u0645\u0646 \u0668 \u062B\u0648\u0627\u0646\u064A.",en:"Too early! Wait for the counter to get close to 8 seconds."},edlBagsLate:{ar:"\u0627\u062A\u0623\u062E\u0631\u0646\u0627! \u064A\u0644\u0627 \u0646\u0639\u064A\u062F\u0647\u0627\u060C \u0648\u0631\u0643\u0651\u0632 \u0639\u0644\u0649 \u0627\u0644\u0639\u062F\u0627\u062F.",en:"Too late! Let\u2019s try again, and watch the counter."},edlBagsOk:{ar:"\u0627\u0644\u0623\u0643\u064A\u0627\u0633 \u0627\u062A\u0646\u0641\u062E\u062A! \u0635\u0648\u0627\u0631\u064A\u062E \u0635\u063A\u064A\u0631\u0629 \u0647\u062A\u0648\u0642\u0641 \u0627\u0644\u0646\u0632\u0648\u0644\u060C \u0648\u0628\u0639\u062F\u064A\u0646 \u0646\u0642\u0637\u0639 \u0627\u0644\u062D\u0628\u0644\u2026",en:"Airbags inflated! Small rockets stop our fall, then we cut the rope\u2026"},edlBounce:{ar:"\u0628\u0646\u062A\u0646\u0637\u0637 \u0639\u0644\u0649 \u0627\u0644\u0645\u0631\u064A\u062E \u0632\u064A \u0627\u0644\u0643\u0648\u0631\u0629! Spirit \u0627\u0644\u062D\u0642\u064A\u0642\u064A \u0627\u062A\u0646\u0637\u0637 \u062D\u0648\u0627\u0644\u064A \u0663\u0660 \u0645\u0631\u0629 \u0642\u0628\u0644 \u0645\u0627 \u064A\u0642\u0641.",en:"Bouncing on Mars like a beach ball! The real Spirit bounced around 30 times before it stopped."},edlOpened:{ar:"\u0627\u0644\u0623\u0643\u064A\u0627\u0633 \u0641\u0636\u064A\u062A\u060C \u0648\u0627\u0644\u0645\u0631\u0643\u0628\u0629 \u0641\u062A\u062D\u062A \u0632\u064A \u0627\u0644\u0648\u0631\u062F\u0629. \u062F\u0647 \u0643\u0627\u0646 \u064A\u0648\u0645 \u0664 \u064A\u0646\u0627\u064A\u0631 \u0662\u0660\u0660\u0664\u2026",en:"The airbags deflated and the lander opened like a flower. That was 4 January 2004\u2026"},edlNow:{ar:"\u062A\u0639\u0627\u0644\u0649 \u0646\u0634\u0648\u0641 Spirit \u0627\u0644\u0646\u0647\u0627\u0631\u062F\u0647\u2026 \u0633\u0627\u0643\u062A \u0628\u0642\u0627\u0644\u0647 \u0633\u0646\u064A\u0646. \u0635\u062D\u0651\u064A\u0647 \u0628\u0640 Power Pulse!",en:"Now let\u2019s see Spirit today\u2026 silent for years. Wake it with the Power Pulse!"},expLaunchBtn:{ar:"\u0625\u0637\u0644\u0627\u0642",en:"Launch"},expShieldBtn:{ar:"\u062B\u0628\u0651\u062A \u0627\u0644\u062F\u0631\u0639",en:"Hold the Shield"},expChuteBtn:{ar:"\u0627\u0641\u062A\u062D \u0627\u0644\u0628\u0631\u0627\u0634\u0648\u062A",en:"Open Parachute"},expBagsBtn:{ar:"\u0627\u0646\u0641\u062E \u0627\u0644\u0623\u0643\u064A\u0627\u0633",en:"Inflate Airbags"},skipLanding:{ar:"\u062A\u062E\u0637\u0651\u0649 \u0644\u0644\u0647\u0628\u0648\u0637",en:"Skip to Landing"},expStep1:{ar:"\u0627\u0644\u0625\u0637\u0644\u0627\u0642",en:"Launch"},expStep2:{ar:"\u0627\u0644\u0631\u062D\u0644\u0629",en:"Cruise"},expStep3:{ar:"\u0627\u0644\u062F\u062E\u0648\u0644",en:"Entry"},expStep4:{ar:"\u0627\u0644\u0628\u0631\u0627\u0634\u0648\u062A",en:"Parachute"},expStep5:{ar:"\u0627\u0644\u0647\u0628\u0648\u0637",en:"Landing"},hDate:{ar:"\u0627\u0644\u062A\u0627\u0631\u064A\u062E",en:"Date"},hPlace:{ar:"\u0627\u0644\u0645\u0643\u0627\u0646",en:"Place"},hDay:{ar:"\u064A\u0648\u0645 \u0641\u064A \u0627\u0644\u0631\u062D\u0644\u0629",en:"Day of trip"},hDist:{ar:"\u0627\u0644\u0645\u0633\u0627\u0641\u0629",en:"Distance"},hSpeed:{ar:"\u0627\u0644\u0633\u0631\u0639\u0629",en:"Speed"},hAlt:{ar:"\u0627\u0644\u0627\u0631\u062A\u0641\u0627\u0639",en:"Altitude"},hGround:{ar:"\u0644\u0644\u0623\u0631\u0636",en:"To touchdown"},hBounces:{ar:"\u0627\u0644\u0646\u0637\u0651\u0627\u062A",en:"Bounces"},hShield:{ar:"\u0627\u0644\u062F\u0631\u0639",en:"Shield"},uKm:{ar:"\u0643\u0645",en:"km"},uKmh:{ar:"\u0643\u0645/\u0633",en:"km/h"},uMkm:{ar:"\u0645\u0644\u064A\u0648\u0646 \u0643\u0645",en:"million km"},uSec:{ar:"\u062B",en:"s"},launchDate:{ar:"\u0661\u0660 \u064A\u0648\u0646\u064A\u0648 \u0662\u0660\u0660\u0663",en:"10 Jun 2003"},exploreBtn:{ar:"\u0627\u0633\u062A\u0643\u0634\u0641",en:"Explore"},close:{ar:"\u0625\u063A\u0644\u0627\u0642",en:"Close"},myLife:{ar:"\u0631\u062D\u0644\u0629 \u062D\u064A\u0627\u062A\u064A",en:"My Life on Mars"},lifeAria:{ar:"\u0627\u0634\u062A\u063A\u0644\u062A {a} \u064A\u0648\u0645 \u0645\u0631\u064A\u062E\u064A \u0628\u062F\u0644 {p}",en:"Worked {a} sols instead of {p}"},plannedStop:{ar:"\u0643\u0627\u0646 \u0627\u0644\u0645\u0641\u0631\u0648\u0636 \u0623\u0642\u0641 \u0647\u0646\u0627",en:"I was meant to stop here"},planned:{ar:"\u0627\u0644\u0645\u062E\u0637\u0637",en:"Planned"},actual:{ar:"\u0627\u0644\u0644\u064A \u0627\u0634\u062A\u063A\u0644\u062A\u0647 \u0641\u0639\u0644\u064B\u0627",en:"Actually worked"},timesLonger:{ar:"\u064A\u0639\u0646\u064A \u0627\u0634\u062A\u063A\u0644\u062A \u0623\u0643\u062A\u0631 \u0645\u0646 {n} \u0645\u0631\u0629 \u0642\u062F \u0627\u0644\u0645\u062E\u0637\u0637!",en:"That\u2019s more than {n}\xD7 longer than planned!"},playGame:{ar:"\u0627\u0644\u0639\u0628: \u0623\u0646\u0642\u0630 Spirit",en:"Play: Save Spirit"},seePhoto:{ar:"\u0634\u0648\u0641 \u0627\u0644\u0635\u0648\u0631\u0629",en:"See the Photo"},photoAlt:{ar:"\u0635\u0648\u0631\u0629 \u0627\u0644\u0623\u0631\u0636 \u0643\u0646\u0642\u0637\u0629 \u0645\u0646\u0648\u0631\u0629 \u0641\u064A \u0633\u0645\u0627 \u0627\u0644\u0645\u0631\u064A\u062E \u0642\u0628\u0644 \u0627\u0644\u0634\u0631\u0648\u0642\u060C \u0635\u0648\u0651\u0631\u0647\u0627 Spirit",en:"Earth as a bright dot in the pre-dawn Martian sky, photographed by Spirit"},mythOrFact:{ar:"\u062D\u0642\u064A\u0642\u0629 \u0648\u0644\u0627 \u0625\u0634\u0627\u0639\u0629\u061F",en:"Fact or Myth?"},myth:{ar:"\u0625\u0634\u0627\u0639\u0629",en:"Myth"},correct:{ar:"\u0635\u062D!",en:"Correct!"},notQuite:{ar:"\u0645\u0634 \u0628\u0627\u0644\u0638\u0628\u0637\u2026",en:"Not quite\u2026"},gameTitle:{ar:"\u0627\u0644\u064A\u0648\u0645 \u0627\u0644\u0644\u064A \u0643\u0646\u062A \u0647\u0645\u0648\u062A \u0641\u064A\u0647",en:"The Day I Almost Died"},gameIntro:{ar:"\u0641\u064A \u064A\u0648\u0645 \u0661\u0668 \u0639\u0644\u0649 \u0627\u0644\u0645\u0631\u064A\u062E Spirit \u0643\u0627\u0646 \u0647\u064A\u0636\u064A\u0639. \u0627\u0646\u062A \u0627\u0644\u0645\u0647\u0646\u062F\u0633 \u062F\u0644\u0648\u0642\u062A\u064A: \u0627\u062E\u062A\u0627\u0631 \u0627\u0644\u0635\u062D \u0639\u0634\u0627\u0646 \u062A\u0646\u0642\u0630\u0647.",en:"On sol 18 Spirit almost got lost. You are the engineer now: choose well to save it."},savedSpirit:{ar:"\u0623\u0646\u0642\u0630\u062A Spirit!",en:"You saved Spirit!"},compareTitle:{ar:"\u0642\u0627\u0631\u0646\u0651\u064A \u0628\u0627\u0644\u062A\u0627\u0646\u064A\u064A\u0646",en:"Compare Us"},compareIntro:{ar:"\u0625\u062D\u0646\u0627 \u0627\u0644\u062A\u0644\u0627\u062A\u0629 \u0646\u0632\u0644\u0646\u0627 \u0628\u0623\u0643\u064A\u0627\u0633 \u0647\u0648\u0627 \u0648\u0627\u0634\u062A\u063A\u0644\u0646\u0627 \u0628\u0627\u0644\u0634\u0645\u0633\u2026 \u0628\u0633 \u0643\u0644 \u0648\u0627\u062D\u062F \u0641\u064A\u0646\u0627 \u0639\u0627\u0634 \u062D\u0643\u0627\u064A\u0629 \u0645\u062E\u062A\u0644\u0641\u0629.",en:"All three of us landed on airbags and ran on sunlight\u2026 but each of us lived a different story."},compareBtn:{ar:"\u0627\u0641\u062A\u062D \u0627\u0644\u0645\u0642\u0627\u0631\u0646\u0629",en:"Open the Comparison"},compareHead:{ar:"\u0627\u0644\u062A\u0644\u0627\u062A\u0629 \u062C\u0646\u0628 \u0628\u0639\u0636",en:"Side by Side"},cLanded:{ar:"\u0646\u0632\u0644 \u0639\u0644\u0649 \u0627\u0644\u0645\u0631\u064A\u062E",en:"Landed"},cSite:{ar:"\u0627\u0644\u0645\u0643\u0627\u0646",en:"Site"},cLength:{ar:"\u0627\u0644\u0637\u0648\u0644",en:"Length"},cMass:{ar:"\u0627\u0644\u0648\u0632\u0646",en:"Mass"},cPlanned:{ar:"\u0627\u0644\u0639\u0645\u0631 \u0627\u0644\u0645\u062E\u0637\u0637",en:"Planned life"},cWorked:{ar:"\u0627\u0634\u062A\u063A\u0644 \u0641\u0639\u0644\u064B\u0627",en:"Actually worked"},cTimes:{ar:"\u0623\u0637\u0648\u0644 \u0645\u0646 \u0627\u0644\u0645\u062E\u0637\u0637",en:"Longer than planned"},cDistance:{ar:"\u0627\u0644\u0645\u0633\u0627\u0641\u0629 \u0627\u0644\u0644\u064A \u0645\u0634\u064A\u0647\u0627",en:"Distance driven"},cPower:{ar:"\u0645\u0635\u062F\u0631 \u0627\u0644\u0637\u0627\u0642\u0629",en:"Power"},cLanding:{ar:"\u0637\u0631\u064A\u0642\u0629 \u0627\u0644\u0647\u0628\u0648\u0637",en:"Landing"},compareNote:{ar:"\u0627\u0644\u0623\u064A\u0627\u0645 \u0647\u0646\u0627 \u0623\u064A\u0627\u0645 \u0645\u0631\u064A\u062E\u064A\u0629 (\u0627\u0644\u064A\u0648\u0645 \u0627\u0644\u0645\u0631\u064A\u062E\u064A \u0623\u0637\u0648\u0644 \u0645\u0646 \u064A\u0648\u0645\u0646\u0627 \u0628\u062D\u0648\u0627\u0644\u064A \u0664\u0660 \u062F\u0642\u064A\u0642\u0629). \u0627\u0644\u0645\u0635\u0627\u062F\u0631 \u0641\u064A \xAB\u24D8 \u2190 \u0627\u0644\u0645\u0635\u0627\u062F\u0631\xBB.",en:"Days here are Martian sols (a sol is about 40 minutes longer than an Earth day). Sources are in \u201C\u24D8 \u2192 Sources\u201D."},endingCta:{ar:"\u0635\u062D\u0651\u064A\u062A \u0627\u0644\u062A\u0644\u0627\u062A\u0629! \u0643\u0645\u0651\u0644 \u0644\u0644\u0623\u062B\u0631 \u0627\u0644\u062C\u0627\u064A",en:"All Three Awake! On to the Next Footprint"},endA:{ar:"\u0639\u0645\u0644\u062A\u0647\u0627! \u0635\u062D\u0651\u064A\u062A Sojourner \u0648Spirit \u0648Opportunity. \u0627\u0644\u0645\u0647\u0645\u0627\u062A \u0628\u062A\u062E\u0644\u0635\u2026 \u0628\u0633 \u0622\u062B\u0627\u0631\u0647\u0627 \u0628\u062A\u0641\u0636\u0644.",en:"You did it! You woke Sojourner, Spirit and Opportunity. Missions end\u2026 but their footprints remain."},endB:{ar:"\u0648\u0634\u0648\u0641\u060C \u0627\u0644\u0622\u062B\u0627\u0631 \u0645\u0643\u0645\u0651\u0644\u0629: Curiosity \u0648Perseverance \u0644\u0633\u0647 \u0634\u063A\u0627\u0644\u064A\u0646 \u0639\u0644\u0649 \u0627\u0644\u0645\u0631\u064A\u062E \u0644\u062D\u062F \u0627\u0644\u0646\u0647\u0627\u0631\u062F\u0647.",en:"And look \u2014 the footprints continue: Curiosity and Perseverance are still exploring Mars today."},endC:{ar:"\u0648\u0627\u0644\u0623\u062B\u0631 \u0627\u0644\u062C\u0627\u064A \u0645\u0645\u0643\u0646 \u064A\u0643\u0648\u0646 \u0623\u062B\u0631\u0643 \u0627\u0646\u062A. \u0627\u0643\u062A\u0628 \u0627\u0633\u0645\u0643 \u0648\u0633\u064A\u0628 \u0623\u062B\u0631\u0643.",en:"The next footprint could be yours. Write your name and leave your footprint."},yourName:{ar:"\u0627\u0633\u0645\u0643",en:"Your name"},nameNeeded:{ar:"\u0627\u0643\u062A\u0628 \u0627\u0633\u0645\u0643 \u0627\u0644\u0623\u0648\u0644 \u0639\u0634\u0627\u0646 \u0646\u0643\u062A\u0628\u0647 \u0639\u0644\u0649 \u0627\u0644\u0634\u0647\u0627\u062F\u0629.",en:"Type your name first, so we can put it on the certificate."},leaveFootprint:{ar:"\u0633\u064A\u0628 \u0623\u062B\u0631\u0643",en:"Leave Your Footprint"},certTitle:{ar:"\u0634\u0647\u0627\u062F\u0629 \u0645\u0633\u062A\u0643\u0634\u0641 \u0627\u0644\u0645\u0631\u064A\u062E",en:"Mars Explorer Certificate"},certLine:{ar:"\u0635\u062D\u0651\u0649 Sojourner \u0648Spirit \u0648Opportunity\u060C \u0648\u0639\u0631\u0641 \u0625\u0646 \u0627\u0644\u0645\u0647\u0645\u0629 \u0645\u0645\u0643\u0646 \u062A\u062E\u0644\u0635\u2026 \u0628\u0633 \u0623\u062B\u0631\u0647\u0627 \u0628\u064A\u0641\u0636\u0644.",en:"woke Sojourner, Spirit and Opportunity, and learned that a mission may end, but its footprint remains."},download:{ar:"\u0646\u0632\u0651\u0644 \u0627\u0644\u0634\u0647\u0627\u062F\u0629",en:"Download Certificate"},saveHint:{ar:"\u0644\u0648 \u0627\u0644\u0632\u0631\u0627\u0631 \u0645\u0627 \u0646\u0632\u0651\u0644\u0634 \u0627\u0644\u0634\u0647\u0627\u062F\u0629: \u0643\u0644\u064A\u0643 \u064A\u0645\u064A\u0646 \u0639\u0644\u0649 \u0627\u0644\u0635\u0648\u0631\u0629 (\u0623\u0648 \u0627\u0636\u063A\u0637 \u0639\u0644\u064A\u0647\u0627 \u0645\u0637\u0648\u0651\u0644\u064B\u0627) \u0648\u0627\u062E\u062A\u0627\u0631 \xAB\u062D\u0641\u0638 \u0627\u0644\u0635\u0648\u0631\u0629\xBB.",en:"If the button doesn\u2019t download it, right-click (or long-press) the image and choose \u201CSave image\u201D."},replay:{ar:"\u0627\u0628\u062F\u0623 \u0645\u0646 \u0627\u0644\u0623\u0648\u0644",en:"Start Again"},nextFootprint:{ar:"\u0627\u0644\u0623\u062B\u0631 \u0627\u0644\u062C\u0627\u064A\u2026 \u0628\u062A\u0627\u0639\u0643",en:"The Next Footprint Is Yours"},active:{ar:"\u0634\u063A\u0627\u0644 \u062F\u0644\u0648\u0642\u062A\u064A",en:"Active now"},legacyBtn:{ar:"\u062A\u0627\u0628\u0639 \u0627\u0644\u0622\u062B\u0627\u0631",en:"Follow the Footprints"},legacyTitle:{ar:"\u0645\u0646 \u0623\u062B\u0631 \u0644\u0623\u062B\u0631",en:"From Footprint to Footprint"},legacyFound:{ar:"\u0627\u0643\u062A\u0634\u0641 \u0625\u064A\u0647\u061F",en:"What it found"},legacyGave:{ar:"\u0633\u0644\u0651\u0645 \u0625\u064A\u0647 \u0644\u0644\u064A \u0628\u0639\u062F\u0647\u061F",en:"What it passed on"},legacySrc:{ar:"\u0645\u062A\u0631\u0627\u062C\u0639\u0629 \u0639\u0644\u0649 \u0645\u0635\u0627\u062F\u0631 \u0646\u0627\u0633\u0627 (\u24D8 \u2190 \u0627\u0644\u0645\u0635\u0627\u062F\u0631).",en:"Checked against NASA sources (\u24D8 \u2192 Sources)."},factLabel:{ar:"\u062D\u0642\u064A\u0642\u0629",en:"Fact"},missionEnded:{ar:"\u0627\u0644\u0645\u0647\u0645\u0629 \u062E\u0644\u0635\u062A",en:"Mission ended"},since:{ar:"\u0645\u0646",en:"since"},prev:{ar:"\u0627\u0644\u0633\u0627\u0628\u0642",en:"Back"},youNode:{ar:"\u0627\u0646\u062A",en:"You"},youTitle:{ar:"\u0648\u0627\u0644\u0623\u062B\u0631 \u0627\u0644\u062C\u0627\u064A\u061F",en:"And the next footprint?"},youBody:{ar:"\u0643\u0644 \u0645\u0647\u0645\u0629 \u0633\u0644\u0651\u0645\u062A \u0627\u0644\u0644\u064A \u0627\u062A\u0639\u0644\u0645\u062A\u0647 \u0644\u0644\u064A \u0628\u0639\u062F\u0647\u0627: \u0645\u0646 \u0623\u0648\u0644 \u0639\u062C\u0644 \u0639\u0644\u0649 \u0627\u0644\u0645\u0631\u064A\u062E\u060C \u0644\u0644\u0645\u064A\u0629\u060C \u0644\u0645\u0643\u0648\u0646\u0627\u062A \u0627\u0644\u062D\u064A\u0627\u0629\u060C \u0644\u0639\u064A\u0646\u0627\u062A \u0645\u0645\u0643\u0646 \u062A\u0631\u062C\u0639 \u0627\u0644\u0623\u0631\u0636. \u0627\u0644\u0627\u0643\u062A\u0634\u0627\u0641 \u0627\u0644\u062C\u0627\u064A \u0645\u0645\u0643\u0646 \u064A\u0628\u0642\u0649 \u0628\u062A\u0627\u0639\u0643 \u0627\u0646\u062A.",en:"Each mission handed what it learned to the next: from the first wheels on Mars, to water, to the ingredients for life, to samples that could come home. The next discovery could be yours."},toQuiz:{ar:"\u0627\u062E\u062A\u0628\u0631 \u0646\u0641\u0633\u0643",en:"Test Yourself"},seeChain:{ar:"\u0634\u0648\u0641 \u0627\u0644\u0633\u0644\u0633\u0644\u0629 \u0643\u0644\u0647\u0627",en:"See the Whole Chain"},skipToCert:{ar:"\u0631\u0648\u062D \u0644\u0644\u0634\u0647\u0627\u062F\u0629 \u0639\u0644\u0649 \u0637\u0648\u0644",en:"Skip to my certificate"},quizTitle:{ar:"\u0627\u062A\u0639\u0644\u0645\u062A \u0625\u064A\u0647\u061F",en:"What Did You Learn?"},qOf:{ar:"\u0633\u0624\u0627\u0644 {n} \u0645\u0646 {t}",en:"Question {n} of {t}"},nextQ:{ar:"\u0627\u0644\u0633\u0624\u0627\u0644 \u0627\u0644\u062C\u0627\u064A",en:"Next Question"},seeScore:{ar:"\u0634\u0648\u0641 \u0646\u062A\u064A\u062C\u062A\u0643",en:"See Your Score"},scoreLine:{ar:"\u062C\u0627\u0648\u0628\u062A {n} \u0645\u0646 {t} \u0635\u062D",en:"You got {n} of {t} right"},scoreAll:{ar:"\u0645\u0645\u062A\u0627\u0632! \u0627\u0646\u062A \u0641\u0627\u0647\u0645 \u0625\u0632\u0627\u064A \u0643\u0644 \u0645\u0647\u0645\u0629 \u0628\u0646\u062A \u0639\u0644\u0649 \u0627\u0644\u0644\u064A \u0642\u0628\u0644\u0647\u0627. \u062F\u0647 \u0628\u0627\u0644\u0638\u0628\u0637 \u062A\u0641\u0643\u064A\u0631 \u0645\u0647\u0646\u062F\u0633\u064A\u0646 \u0646\u0627\u0633\u0627.",en:"Excellent! You understand how each mission built on the one before \u2014 that\u2019s exactly how NASA engineers think."},scoreGood:{ar:"\u0634\u063A\u0644 \u062D\u0644\u0648! \u0631\u0627\u062C\u0639 \u0627\u0644\u0634\u0631\u062D \u062A\u062D\u062A \u0643\u0644 \u0633\u0624\u0627\u0644\u060C \u0648\u0627\u0646\u062A \u0643\u062F\u0647 \u0639\u0627\u0631\u0641 \u0623\u0647\u0645 \u062D\u0627\u062C\u0629: \u0627\u0644\u0645\u0647\u0645\u0627\u062A \u0628\u062A\u0633\u0644\u0651\u0645 \u0644\u0628\u0639\u0636.",en:"Nice work! Check the explanations \u2014 you already know the big idea: missions pass their discoveries on."},scoreTry:{ar:"\u0648\u0644\u0627 \u064A\u0647\u0645\u0643\u060C \u0627\u0644\u0639\u0644\u0645\u0627\u0621 \u0646\u0641\u0633\u0647\u0645 \u0628\u064A\u062A\u0639\u0644\u0645\u0648\u0627 \u0628\u0627\u0644\u062A\u062C\u0631\u0628\u0629. \u062A\u0642\u062F\u0631 \u062A\u0639\u064A\u062F \u0627\u0644\u0627\u062E\u062A\u0628\u0627\u0631 \u0623\u0648 \u062A\u0643\u0645\u0651\u0644 \u0644\u0644\u0634\u0647\u0627\u062F\u0629.",en:"No worries \u2014 scientists learn by trying, too. You can take it again or go on to your certificate."},quizAgain:{ar:"\u062C\u0631\u0651\u0628 \u062A\u0627\u0646\u064A",en:"Try Again"},certQuiz:{ar:"\u0627\u062E\u062A\u0628\u0627\u0631 \u0627\u0644\u0645\u0633\u062A\u0643\u0634\u0641: {n}/{t}",en:"EXPLORER QUIZ {n}/{t}"},j1:{ar:"\u0627\u0633\u062A\u0642\u0628\u0644\u062A \u0627\u0644\u0625\u0634\u0627\u0631\u0629",en:"Signal received"},j2:{ar:"\u0635\u062D\u0651\u064A\u062A Sojourner",en:"Woke Sojourner"},j3:{ar:"\u0635\u062D\u0651\u064A\u062A Spirit",en:"Woke Spirit"},j4:{ar:"\u0635\u062D\u0651\u064A\u062A Opportunity",en:"Woke Opportunity"},j5:{ar:"\u0627\u0644\u0623\u062B\u0631 \u0627\u0644\u062C\u0627\u064A",en:"The next footprint"},journeyAria:{ar:"\u0631\u062D\u0644\u062A\u0643",en:"Your journey"},aboutAria:{ar:"\u0639\u0646 \u0627\u0644\u0645\u0634\u0631\u0648\u0639 \u0648\u0627\u0644\u0645\u0635\u0627\u062F\u0631",en:"About & sources"},tab_project:{ar:"\u0627\u0644\u0645\u0634\u0631\u0648\u0639",en:"Project"},tab_teacher:{ar:"\u0644\u0644\u0645\u062F\u0631\u0633",en:"For Teachers"},tab_sources:{ar:"\u0627\u0644\u0645\u0635\u0627\u062F\u0631",en:"Sources"},tab_ai:{ar:"\u0627\u0633\u062A\u062E\u062F\u0627\u0645 \u0627\u0644\u0640 AI",en:"Use of AI"},aboutP1:{ar:"<bdi>The Last Footprint</bdi> \u062A\u062C\u0631\u0628\u0629 \u062A\u0641\u0627\u0639\u0644\u064A\u0629 \u0644\u0637\u0644\u0627\u0628 \u0645\u0646 \u0661\u0660 \u0644\u0640 \u0661\u0665 \u0633\u0646\u0629 \u0639\u0646 \u0645\u0639\u062F\u0627\u062A \u0646\u0627\u0633\u0627 \u0627\u0644\u0644\u064A \u062E\u0644\u0635\u062A \u0645\u0647\u0645\u062A\u0647\u0627 \u0648\u0641\u0636\u0644\u062A \u0639\u0644\u0649 \u0627\u0644\u0645\u0631\u064A\u062E: Sojourner \u0648Spirit \u0648Opportunity.",en:"The Last Footprint is an interactive story for students aged 10\u201315 about NASA equipment that finished its mission and stayed on Mars: Sojourner, Spirit and Opportunity."},aboutP2:{ar:"\u0645\u0639\u0645\u0648\u0644\u0629 \u0644\u062A\u062D\u062F\u064A \xAB<bdi>Abandoned but not Forgotten</bdi>\xBB \u0641\u064A <bdi>NASA Space Apps 2026</bdi>. \u0627\u0644\u0637\u0627\u0644\u0628 \u0628\u064A\u0635\u062D\u0651\u064A \u0643\u0644 \u0631\u0648\u0641\u0631 \u0628\u0640 <bdi>Power&nbsp;Pulse</bdi>\u060C \u0648\u064A\u0633\u0645\u0639 \u062D\u0643\u0627\u064A\u062A\u0647\u060C \u0648\u064A\u0633\u062A\u0643\u0634\u0641 \u062D\u0642\u0627\u064A\u0642 \u062D\u0642\u064A\u0642\u064A\u0629 \u0645\u0646 \u0646\u0627\u0633\u0627.",en:"Built for the NASA Space Apps 2026 challenge \u201CAbandoned but not Forgotten\u201D. Students wake each rover with a Power Pulse, hear its story and explore real NASA facts."},aboutL1:{ar:"\u0645\u0643\u0627\u0646 \u0627\u0644\u0634\u0645\u0633 \u0641\u0648\u0642 \u0627\u0644\u0645\u0631\u064A\u062E \u062F\u0644\u0648\u0642\u062A\u064A \u0645\u062D\u0633\u0648\u0628 \u0628\u062E\u0648\u0627\u0631\u0632\u0645\u064A\u0629 Mars24 \u0645\u0646 \u0646\u0627\u0633\u0627\u060C \u0641\u0627\u0644\u0646\u0647\u0627\u0631 \u0648\u0627\u0644\u0644\u064A\u0644 \u062D\u0642\u064A\u0642\u064A\u064A\u0646.",en:"The Sun\u2019s position over Mars is computed live with NASA\u2019s Mars24 algorithm \u2014 day and night are real."},aboutL2:{ar:"\u0646\u0645\u0648\u0630\u062C Spirit \u0648Opportunity \u062B\u0644\u0627\u062B\u064A \u0627\u0644\u0623\u0628\u0639\u0627\u062F \u0645\u0646 \u0646\u0627\u0633\u0627\u060C \u0648\u0627\u0644\u0635\u0648\u0631 \u0645\u0646 \u0623\u0631\u0634\u064A\u0641 \u0646\u0627\u0633\u0627 \u0627\u0644\u0631\u0633\u0645\u064A.",en:"The Spirit/Opportunity 3D model and the photos come from NASA\u2019s official archives."},aboutL3:{ar:"\u0643\u0644 \u062C\u0645\u0644\u0629 \u0645\u0643\u062A\u0648\u0628 \u0639\u0644\u064A\u0647\u0627 \xAB\u062D\u0642\u064A\u0642\u0629\xBB \u0623\u0648 \xAB\u0642\u0635\u0629\xBB \u0639\u0634\u0627\u0646 \u0627\u0644\u0637\u0627\u0644\u0628 \u064A\u0641\u0631\u0651\u0642 \u0628\u064A\u0646 \u0627\u0644\u0645\u0639\u0644\u0648\u0645\u0629 \u0648\u0627\u0644\u062E\u064A\u0627\u0644.",en:"Every line is labelled \u201CFact\u201D or \u201CStory\u201D so students can tell information from fiction."},aboutL4:{ar:"\u0628\u064A\u0634\u062A\u063A\u0644 \u0628\u0627\u0644\u0639\u0631\u0628\u064A \u0648\u0627\u0644\u0625\u0646\u062C\u0644\u064A\u0632\u064A\u060C \u0639\u0644\u0649 \u0627\u0644\u0645\u0648\u0628\u0627\u064A\u0644 \u0648\u0627\u0644\u0643\u0645\u0628\u064A\u0648\u062A\u0631\u060C \u0648\u0645\u0646 \u063A\u064A\u0631 \u0646\u062A.",en:"Works in Arabic and English, on phones and computers, and offline."},aboutL5:{ar:"\xAB\u0627\u0644\u0631\u062D\u0644\u0629 \u0627\u0644\u0643\u0627\u0645\u0644\u0629\xBB \u0628\u062A\u062D\u0643\u064A \u0631\u062D\u0644\u0629 Spirit \u0627\u0644\u062D\u0642\u064A\u0642\u064A\u0629: \u0627\u0644\u0625\u0637\u0644\u0627\u0642 \u0645\u0646 \u0641\u0644\u0648\u0631\u064A\u062F\u0627 \u0633\u0646\u0629 \u0662\u0660\u0660\u0663\u060C \u0667 \u0634\u0647\u0648\u0631 \u0641\u064A \u0627\u0644\u0641\u0636\u0627\u060C \u0648\u0627\u0644\u0647\u0628\u0648\u0637 \u0628\u0627\u0644\u0628\u0631\u0627\u0634\u0648\u062A \u0648\u0623\u0643\u064A\u0627\u0633 \u0627\u0644\u0647\u0648\u0627. \u0627\u0644\u0648\u0642\u062A \u0645\u062A\u0633\u0631\u0651\u0639\u060C \u0648\u0627\u0644\u0623\u0631\u0642\u0627\u0645 \u0627\u0644\u0644\u064A \u0639\u0644\u0649 \u0627\u0644\u0634\u0627\u0634\u0629 \u062D\u0642\u064A\u0642\u064A\u0629.",en:"The Immersive Expedition replays Spirit\u2019s real trip: launch from Florida in 2003, 7 months in space, and the landing by parachute and airbags. Time is sped up; the numbers on screen are real."},aboutL6:{ar:"\xAB\u0645\u0646 \u0623\u062B\u0631 \u0644\u0623\u062B\u0631\xBB \u0628\u064A\u0648\u0636\u062D \u0643\u0644 \u0645\u0647\u0645\u0629 \u0627\u0643\u062A\u0634\u0641\u062A \u0625\u064A\u0647 \u0648\u0633\u0644\u0651\u0645\u062A \u0625\u064A\u0647 \u0644\u0644\u064A \u0628\u0639\u062F\u0647\u0627\u060C \u0645\u0646 <bdi>Sojourner</bdi> \u0644\u0640 <bdi>Perseverance</bdi>\u060C \u0648\u0641\u064A \u0627\u0644\u0622\u062E\u0631 \u0627\u062E\u062A\u0628\u0627\u0631 \u0642\u0635\u064A\u0631 \xAB\u0627\u062A\u0639\u0644\u0645\u062A \u0625\u064A\u0647\u061F\xBB \u0648\u0646\u062A\u064A\u062C\u062A\u0647 \u0628\u062A\u062A\u0643\u062A\u0628 \u0639\u0644\u0649 \u0627\u0644\u0634\u0647\u0627\u062F\u0629.",en:"\u201CFrom Footprint to Footprint\u201D shows what each mission found and passed on to the next, from Sojourner to Perseverance, followed by a short \u201CWhat did you learn?\u201D quiz whose score goes on the certificate."},teamLine:{ar:"\u062A\u064A\u0645 <bdi>3M</bdi> \xB7 <bdi>NASA Space Apps 2026</bdi> \xB7 \u0643\u0641\u0631 \u0627\u0644\u0634\u064A\u062E",en:"Team 3M \xB7 NASA Space Apps 2026 \xB7 Kafr El Sheikh"},teachP1:{ar:"\u062D\u0635\u0629 \u0645\u0642\u062A\u0631\u062D\u0629 (\u0662\u0660 \u062F\u0642\u064A\u0642\u0629):",en:"Suggested lesson (20 minutes):"},teach1:{ar:"\u0663 \u062F\u0642\u0627\u064A\u0642: \u0627\u0633\u062A\u0642\u0628\u0644\u0648\u0627 \u0627\u0644\u0625\u0634\u0627\u0631\u0629 \u0648\u0627\u0633\u0623\u0644\u0648\u0627 \u0627\u0644\u0637\u0644\u0627\u0628: \u0625\u0632\u0627\u064A \u0628\u0646\u0639\u0631\u0641 \u0625\u0646 \u062F\u0644\u0648\u0642\u062A\u064A \u0646\u0647\u0627\u0631 \u0648\u0644\u0627 \u0644\u064A\u0644 \u0639\u0644\u0649 \u0627\u0644\u0645\u0631\u064A\u062E\u061F",en:"3 min: receive the signal and ask: how can we know if it is day or night on Mars right now?"},teach2:{ar:"\u0661\u0660 \u062F\u0642\u0627\u064A\u0642: \u0627\u0644\u0637\u0644\u0627\u0628 \u064A\u0635\u062D\u0651\u0648\u0627 \u0627\u0644\u062A\u0644\u0627\u062A \u0631\u0648\u0641\u0631\u0632 \u0648\u064A\u0642\u0631\u0623\u0648\u0627 \xAB\u0631\u062D\u0644\u0629 \u062D\u064A\u0627\u062A\u064A\xBB \u0644\u0643\u0644 \u0648\u0627\u062D\u062F.",en:"10 min: students wake all three rovers and read each \u201CMy life on Mars\u201D."},teach3:{ar:"\u0665 \u062F\u0642\u0627\u064A\u0642: \u0644\u0639\u0628\u0629 \u0625\u0646\u0642\u0627\u0630 Spirit\u060C \u0648\xAB\u0645\u0646 \u0623\u062B\u0631 \u0644\u0623\u062B\u0631\xBB\u060C \u0648\u0627\u062E\u062A\u0628\u0627\u0631 \xAB\u0627\u062A\u0639\u0644\u0645\u062A \u0625\u064A\u0647\u061F\xBB \u0641\u064A \u0627\u0644\u0622\u062E\u0631.",en:"5 min: the \u201Csave Spirit\u201D game, \u201CFrom Footprint to Footprint\u201D and the final \u201CWhat did you learn?\u201D quiz."},teach4:{ar:"\u062F\u0642\u064A\u0642\u062A\u064A\u0646: \u0643\u0644 \u0637\u0627\u0644\u0628 \u064A\u0633\u064A\u0628 \u0623\u062B\u0631\u0647 \u0648\u064A\u0627\u062E\u062F \u0634\u0647\u0627\u062F\u062A\u0647.",en:"2 min: each student leaves a footprint and gets a certificate."},teachQ:{ar:"\u0623\u0633\u0626\u0644\u0629 \u0644\u0644\u0646\u0642\u0627\u0634:",en:"Discussion questions:"},teachQ1:{ar:"\u0644\u064A\u0647 \u0627\u0644\u0631\u0648\u0641\u0631\u0632 \u0627\u0634\u062A\u063A\u0644\u062A \u0623\u0637\u0648\u0644 \u0628\u0643\u062A\u064A\u0631 \u0645\u0646 \u0627\u0644\u0645\u062E\u0637\u0637\u061F",en:"Why did the rovers last so much longer than planned?"},teachQ2:{ar:"\u0625\u064A\u0647 \u0627\u0644\u0641\u0631\u0642 \u0628\u064A\u0646 \u0627\u0644\u062D\u0642\u064A\u0642\u0629 \u0627\u0644\u0639\u0644\u0645\u064A\u0629 \u0648\u0627\u0644\u0642\u0635\u0629 \u0627\u0644\u0644\u064A \u0628\u0646\u062D\u0643\u064A\u0647\u0627 \u0639\u0646\u0647\u0627\u061F",en:"What is the difference between a scientific fact and the story we tell about it?"},teachQ3:{ar:"\u0644\u0648 \u0635\u0645\u0645\u062A \u0631\u0648\u0641\u0631\u060C \u0647\u062A\u0639\u0645\u0644 \u0625\u064A\u0647 \u0639\u0634\u0627\u0646 \u064A\u0639\u064A\u0634 \u0623\u0637\u0648\u0644\u061F",en:"If you designed a rover, what would you do to make it last longer?"},teachQ4:{ar:"\u0625\u0632\u0627\u064A \u0643\u0644 \u0645\u0647\u0645\u0629 \u0627\u0633\u062A\u0641\u0627\u062F\u062A \u0645\u0646 \u0627\u0644\u0644\u064A \u0642\u0628\u0644\u0647\u0627\u061F \u0648\u0644\u0648 \u0627\u0646\u062A \u0628\u062A\u062E\u0637\u0637 \u0644\u0644\u0645\u0647\u0645\u0629 \u0627\u0644\u062C\u0627\u064A\u0629\u060C \u0647\u062A\u0633\u0623\u0644 \u0625\u064A\u0647\u061F",en:"How did each mission build on the one before? If you planned the next mission, what would you ask?"},factNote:{ar:"\u0643\u0644 \u0627\u0644\u0623\u0631\u0642\u0627\u0645 \u0648\u0627\u0644\u062A\u0648\u0627\u0631\u064A\u062E \u0645\u062A\u0631\u0627\u062C\u0639\u0629 \u0639\u0644\u0649 \u0645\u0635\u0627\u062F\u0631 \u0646\u0627\u0633\u0627. \u0635\u0648\u0631\u0629 <bdi>PIA05547: NASA/JPL/Cornell/Texas A&amp;M</bdi>.",en:"All numbers and dates were checked against NASA sources. Image PIA05547: NASA/JPL/Cornell/Texas A&amp;M."},aiP1:{ar:"\u0625\u062D\u0646\u0627 \u0628\u0646\u0648\u0636\u062D \u0628\u0635\u0631\u0627\u062D\u0629 \u0625\u0632\u0627\u064A \u0627\u0633\u062A\u062E\u062F\u0645\u0646\u0627 \u0623\u062F\u0648\u0627\u062A \u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0627\u0635\u0637\u0646\u0627\u0639\u064A:",en:"We are open about how we used AI tools:"},ai1:{ar:"\u0627\u0633\u062A\u062E\u062F\u0645\u0646\u0627 <bdi>Claude</bdi> (\u0645\u0646 <bdi>Anthropic</bdi>) \u0643\u0645\u0633\u0627\u0639\u062F \u0641\u064A \u0627\u0644\u0628\u0631\u0645\u062C\u0629 \u0648\u0627\u0644\u062A\u0635\u0645\u064A\u0645 \u0648\u0643\u062A\u0627\u0628\u0629 \u0627\u0644\u0646\u0635\u0648\u0635\u060C \u0648\u0643\u0644 \u0642\u0631\u0627\u0631 \u0643\u0627\u0646 \u0628\u062A\u0627\u0639 \u0627\u0644\u0641\u0631\u064A\u0642.",en:"We used Claude (by Anthropic) as an assistant for coding, design and writing; every decision was the team\u2019s."},ai2:{ar:"\u0623\u0635\u0648\u0627\u062A \u0627\u0644\u0634\u062E\u0635\u064A\u0627\u062A \u0645\u0639\u0645\u0648\u0644\u0629 \u0628\u0623\u0635\u0648\u0627\u062A <bdi>Microsoft Azure</bdi> \u0627\u0644\u0639\u0635\u0628\u064A\u0629 (\u062A\u062D\u0648\u064A\u0644 \u0627\u0644\u0646\u0635 \u0644\u0643\u0644\u0627\u0645)\u060C \u0648\u0645\u0634 \u0623\u0635\u0648\u0627\u062A \u0646\u0627\u0633 \u062D\u0642\u064A\u0642\u064A\u064A\u0646.",en:"Character voices use Microsoft Azure neural text-to-speech, not real people\u2019s voices."},ai3:{ar:"\u0633\u0648\u0644 \u0634\u062E\u0635\u064A\u0629 \u062E\u064A\u0627\u0644\u064A\u0629 \u0645\u0646 \u062A\u0635\u0645\u064A\u0645\u0646\u0627\u060C \u0648\u0643\u0644\u0627\u0645 \u0627\u0644\u0631\u0648\u0641\u0631\u0632 \u0627\u0644\u0644\u064A \u0639\u0644\u064A\u0647 \xAB\u0642\u0635\u0629\xBB \u062E\u064A\u0627\u0644\u060C \u0623\u0645\u0627 \xAB\u062D\u0642\u064A\u0642\u0629\xBB \u0641\u0645\u062A\u0631\u0627\u062C\u0639\u0629 \u0639\u0644\u0649 \u0646\u0627\u0633\u0627.",en:"SOL is a fictional character we designed; rover lines marked \u201CStory\u201D are fiction, lines marked \u201CFact\u201D are checked against NASA."},ai4:{ar:"\u0627\u0644\u0635\u0648\u0631 \u0627\u0644\u062D\u0642\u064A\u0642\u064A\u0629 \u0643\u0644\u0647\u0627 \u0645\u0646 \u0646\u0627\u0633\u0627 \u0648\u0645\u0643\u062A\u0648\u0628 \u0645\u0635\u062F\u0631\u0647\u0627\u060C \u0648\u0645\u0627 \u0627\u0633\u062A\u062E\u062F\u0645\u0646\u0627\u0634 \u0635\u0648\u0631 \u0645\u0648\u0644\u0651\u062F\u0629 \u0628\u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0627\u0635\u0637\u0646\u0627\u0639\u064A \u0639\u0644\u0649 \u0625\u0646\u0647\u0627 \u062D\u0642\u064A\u0642\u064A\u0629.",en:"All real photos are NASA\u2019s and credited; no AI-generated image is presented as real."}};function xe(i,e){return XM[i]?.[e]??i}function Pd(i){document.documentElement.lang=i,document.documentElement.dir=i==="ar"?"rtl":"ltr",document.querySelectorAll("[data-t]").forEach(e=>{e.textContent=xe(e.dataset.t,i)}),document.querySelectorAll("[data-t-aria]").forEach(e=>{e.setAttribute("aria-label",xe(e.dataset.tAria,i))})}var zi=Math.PI/180;function _a(i=new Date){let n=i.getTime()/864e5+24405875e-1+(37+32.184)/86400-2451545,s=(19.3871+.52402073*n)*zi,r=270.3871+.524038496*n,o=[[.0071,2.2353,49.409],[.0057,2.7543,168.173],[.0039,1.1177,191.837],[.0037,15.7866,21.736],[.0021,2.1354,15.704],[.002,2.4694,95.528],[.0018,32.8493,49.095]].reduce((m,[p,M,C])=>m+p*Math.cos((.985626*n/M+C)*zi),0),l=(10.691+3e-7*n)*Math.sin(s)+.623*Math.sin(2*s)+.05*Math.sin(3*s)+.005*Math.sin(4*s)+5e-4*Math.sin(5*s)+o,c=((r+l)%360+360)%360,u=2.861*Math.sin(2*c*zi)-.071*Math.sin(4*c*zi)+.002*Math.sin(6*c*zi)-l,h=(n-4.5)/1.0274912517+44796-9626e-7,d=(24*h%24+24)%24,x=((360-((d*15+u+180)%360+360)%360)%360+360)%360,y=Math.asin(.42565*Math.sin(c*zi))/zi+.25*Math.sin(c*zi);return{Ls:c,msd:h,mtc:d,lat:y,lonE:x>180?x-360:x}}function Fs(i,e,t){let n=i*zi,s=e*zi;return t.set(Math.cos(s)*Math.cos(n),Math.sin(n),-Math.sin(s)*Math.cos(n))}function Dm(i,e){return((12+(e-i.lonE)/15)%24+24)%24}var ru=[{id:"curiosity",lat:-4.59,lon:137.44,name:"Curiosity",place:"Gale Crater",year:2012,extra:!0},{id:"perseverance",lat:18.44,lon:77.45,name:"Perseverance",place:"Jezero Crater",year:2021,extra:!0}],hr=[{id:"sojourner",lat:19.13,lon:-33.22,name:"Sojourner",place:"Ares Vallis",year:1997},{id:"spirit",lat:-14.57,lon:175.47,name:"Spirit",place:"Gusev Crater",year:2004},{id:"opportunity",lat:-1.95,lon:-5.53,name:"Opportunity",place:"Meridiani Planum",year:2004}],qM=5.4,Ld=i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2,su=i=>Math.min(1,Math.max(0,i)),us=(i,e,t)=>{let n=su((t-i)/(e-i));return n*n*(3-2*n)};function Nd(i){let e=At.degToRad(i),t=At.degToRad(-20);return At.radToDeg(Math.atan2(Math.sin(e)+Math.sin(t),Math.cos(e)+Math.cos(t)))}function Dd(i,e=!0){let t=new Image,n=new Yt(t);return e&&(n.colorSpace=yt),t.onload=()=>{n.needsUpdate=!0},t.src="data:image/jpeg;base64,"+i,n}function YM(){let i=document.createElement("canvas");i.width=i.height=64;let e=i.getContext("2d"),t=e.createRadialGradient(32,32,0,32,32,32);return t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.3,"rgba(255,255,255,0.55)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,64,64),new Xt(i)}function Um(i,e,t){let n=new _i(1,3),s=n.attributes.position,r=new L;for(let o=0;o<s.count;o++){r.fromBufferAttribute(s,o);let l=1+Ei(r.x*2.2+e,r.y*2.2+r.z)*.22+Ei(r.x*6+e,r.z*6)*.05;r.multiplyScalar(l),r.x*=1.25,s.setXYZ(o,r.x,r.y,r.z)}n.computeVertexNormals();let a=new ue(n,new $e({color:t,roughness:1}));return a.scale.setScalar(i),a}function Fm(i,e){let t=new ti,n=new Wt(35,innerWidth/innerHeight,.01,200);t.add(n);let s=YM(),r=Dd(window.STARS_TEX_B64||""),a=new ue(new Ft(90,48,24),new Nt({map:r,side:Ht,color:new ce(.32,.32,.36),depthWrite:!1,transparent:!0,opacity:0}));t.add(a);let o=e.mobile?1400:2600,l=new Float32Array(o*3),c=new Float32Array(o);for(let _=0;_<o;_++){let H=Math.random()*2-1,G=Math.random()*Math.PI*2,K=70,re=Math.sqrt(1-H*H);l[_*3]=Math.cos(G)*re*K,l[_*3+1]=H*K,l[_*3+2]=Math.sin(G)*re*K,c[_]=Math.random()}let u=new tt;u.setAttribute("position",new ht(l,3)),u.setAttribute("aRand",new ht(c,1));let h=new xt({transparent:!0,depthWrite:!1,blending:Et,uniforms:{uTime:{value:0},uPx:{value:i.getPixelRatio()},uOpacity:{value:0},uMap:{value:s}},vertexShader:`attribute float aRand; uniform float uTime, uPx, uOpacity; varying float vA; varying vec3 vC;
      void main(){ vec4 mv = modelViewMatrix * vec4(position,1.0); gl_Position = projectionMatrix * mv;
        float tw = 0.65 + 0.35 * sin(uTime * (0.6 + aRand * 2.2) + aRand * 60.0);
        gl_PointSize = (0.8 + pow(aRand, 6.0) * 3.2) * uPx * 2.0;
        vA = tw * uOpacity * (0.35 + 0.65 * aRand);
        vC = mix(vec3(0.75,0.85,1.0), vec3(1.0,0.86,0.7), fract(aRand * 7.31)); }`,fragmentShader:`uniform sampler2D uMap; varying float vA; varying vec3 vC;
      void main(){ float a = texture2D(uMap, gl_PointCoord).a; gl_FragColor = vec4(vC * 1.6, a * vA); }`});t.add(new wn(u,h));let d=_a(new Date),f=Fs(d.lat,d.lonE,new L),x=Dd(window.MARS_TEX_B64||"");x.anisotropy=Math.min(8,i.capabilities.getMaxAnisotropy());let y=Dd(window.MARS_TEX_B64||"",!1),m=new ue(new Ft(1,e.mobile?96:160,e.mobile?48:80),new $e({map:x,bumpMap:y,bumpScale:1.4,roughness:1,metalness:0}));t.add(m);let p=new ue(new Ft(1.035,96,48),new xt({transparent:!0,depthWrite:!1,side:Ht,blending:Et,uniforms:{uSun:{value:f},uK:{value:0}},vertexShader:"varying vec3 vN; varying vec3 vW; void main(){ vN = normalize(normal); vec4 w = modelMatrix * vec4(position,1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }",fragmentShader:`uniform vec3 uSun; uniform float uK; varying vec3 vN; varying vec3 vW;
      void main(){ vec3 V = normalize(cameraPosition - vW); float rim = pow(1.0 - abs(dot(-vN, V)), 3.0);
        float day = 0.22 + 0.78 * smoothstep(-0.25, 0.5, dot(normalize(vW), uSun)); // a faint rim stays on the night side
        vec3 c = mix(vec3(0.95,0.55,0.35), vec3(0.6,0.75,1.0), smoothstep(0.1, -0.2, dot(normalize(vW), uSun)) * 0.6);
        gl_FragColor = vec4(c * rim * day * 1.6 * uK, rim * day * uK); }`}));t.add(p);let M=new si("#fff1e0",0);M.position.copy(f).multiplyScalar(10),t.add(M);let C=new tr("#5d5a80",.32);t.add(C);let v=Um(.045,3,"#6d625a"),E=Um(.03,9,"#8a7d70");t.add(v,E);let S=[...hr,...ru],T=S.map((_,H)=>{let G=!!_.extra,K=Fs(_.lat,_.lon,new L),re=new Ke;re.position.copy(K).multiplyScalar(1.003),re.quaternion.setFromUnitVectors(new L(0,1,0),K);let me=new un(new nn({map:s,color:G?new ce(1.6,4.6,2.2):new ce(2.2,4.4,5.2),transparent:!0,depthWrite:!1,blending:Et,toneMapped:!1}));me.scale.setScalar(.05),re.add(me);let Y=[0,1].map(()=>{let be=new ue(new er(.8,1,48),new Nt({color:G?new ce(.9,3,1.3):new ce(1.2,2.8,3.4),transparent:!0,depthWrite:!1,blending:Et,toneMapped:!1,side:zt}));return be.rotation.x=-Math.PI/2,re.add(be),be}),ne=new Tt(.0015,.004,.05,8,1,!0).translate(0,.025,0),te=new ue(ne,new Nt({color:new ce(1,2.6,3.2),transparent:!0,depthWrite:!1,blending:Et,toneMapped:!1}));re.add(te);let he=new Ke;he.scale.setScalar(.001),re.add(he);let pe=new ue(new Tt(.004,.004,.15,8).translate(0,.075,0),new Nt({color:"#e9e4dc",transparent:!0})),ve=new ue(new Ft(.024,20,14),new Nt({color:new ce(1.35,.72,.3),toneMapped:!1}));ve.position.y=.16,he.add(pe,ve);let ge=new ue(new Ft(.085,10,8),new Nt({visible:!1}));return ge.position.y=.13,ge.userData.site=_.id,he.add(ge),t.add(re),{site:_,n:K,g:re,core:me,rings:Y,beam:te,pin:he,head:ve,hit:ge,on:0,target:0,phase:H*.37,el:null,pinK:0}}),g=[],b=["sojourner","spirit","opportunity","curiosity","perseverance"].map(_=>S.find(H=>H.id===_)),P=new L,B=new L,A=new L;for(let _=0;_<b.length-1;_++){Fs(b[_].lat,b[_].lon,P),Fs(b[_+1].lat,b[_+1].lon,B);let H=P.angleTo(B),G=Math.max(8,Math.round(H*40));for(let K=0;K<=G;K++){let re=K/G;A.copy(P).multiplyScalar(Math.sin((1-re)*H)).addScaledVector(B,Math.sin(re*H)).divideScalar(Math.sin(H)),g.push(A.clone().multiplyScalar(1.006+Math.sin(re*Math.PI)*.05))}}let V=new tt().setFromPoints(g),w=new Gn(V,new to({color:new ce(2.2,1.3,.55),dashSize:.025,gapSize:.018,transparent:!0,toneMapped:!1}));w.computeLineDistances(),V.setDrawRange(0,0),w.visible=!1,t.add(w);let N={k:0},k={points:null,mat:null,progress:0,opacity:0};function z(_,H){k.points&&(n.remove(k.points),k.points.geometry.dispose());let G=1200,K=520,re=document.createElement("canvas");re.width=G,re.height=K;let me=re.getContext("2d");me.fillStyle="#fff",me.textAlign="center",me.textBaseline="middle",me.font='600 200px "Chakra Petch", "Chakra", "Segoe UI", sans-serif';let Y=(We,on)=>{let xn=200;for(me.font=`600 ${xn}px "Chakra Petch", "Chakra", "Segoe UI", sans-serif`;me.measureText(We).width>G*.96&&xn>40;)xn-=6,me.font=`600 ${xn}px "Chakra Petch", "Chakra", "Segoe UI", sans-serif`;me.fillText(We,G/2,on)};Y("THE LAST",K*.27),Y("FOOTPRINT",K*.74),k.canvas=re;let ne=me.getImageData(0,0,G,K).data,te=[],he=e.mobile?4:3;for(let We=0;We<K;We+=he)for(let on=0;on<G;on+=he)ne[(We*G+on)*4+3]>140&&te.push(on+(Math.random()-.5)*he*.6,We+(Math.random()-.5)*he*.6);let pe=te.length/2,ve=4,ge=Math.tan(At.degToRad(n.fov/2))*ve,be=ge*n.aspect,Ve=We=>(We/innerWidth*2-1)*be,W=We=>(1-We/innerHeight*2)*ge,Me=Math.min(_.width/G,_.height/K),ae=_.left+(_.width-G*Me)/2,Ee=_.top+(_.height-K*Me)/2,we=new Float32Array(pe*3),de=new Float32Array(pe*3),ke=new Float32Array(pe*2);for(let We=0;We<pe;We++){let on=ae+te[We*2]*Me,xn=Ee+te[We*2+1]*Me;we[We*3]=Ve(on),we[We*3+1]=W(xn),we[We*3+2]=-ve;let Xo=Math.random()*Math.PI*2,qo=Math.sqrt(Math.random())*ge*.42;de[We*3]=Math.cos(Xo)*qo,de[We*3+1]=Math.sin(Xo)*qo,de[We*3+2]=-ve+.6+Math.random()*1.2,ke[We*2]=Math.random(),ke[We*2+1]=te[We*2]/G}let De=new tt;De.setAttribute("position",new ht(we,3)),De.setAttribute("aStart",new ht(de,3)),De.setAttribute("aRnd",new ht(ke,2));let Pt=Math.max(1.4,Me*he*1.05)*i.getPixelRatio();k.mat=k.mat||new xt({transparent:!0,depthWrite:!1,depthTest:!1,blending:Et,uniforms:{uP:{value:0},uT:{value:0},uO:{value:0},uSize:{value:2},uMap:{value:s},uSide:{value:1}},vertexShader:`attribute vec3 aStart; attribute vec2 aRnd; uniform float uP, uT, uSize, uSide; varying float vA;
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
        void main(){ float a = texture2D(uMap, gl_PointCoord).a; gl_FragColor = vec4(vec3(1.5, 1.12, 0.82), a * vA * uO); }`}),k.mat.uniforms.uSize.value=Pt,k.mat.uniforms.uSide.value=1,k.points=new wn(De,k.mat),k.points.frustumCulled=!1,k.points.renderOrder=20,n.add(k.points)}let O=new L,I={lon:Nd(d.lonE),lat:12,r:13,look:new L,side:0,sideTarget:0,lift:0,liftTarget:0},U={t:-1,phase:"idle",warp:null,spin:.018,focus:null,vLon:0,vLat:0,dragging:!1,idle:0},$=new L,ye=new L,le=new L(0,1,0),Ye=new L;function ie(_){let H=innerWidth<innerHeight*.95;I.sideTarget=H?0:_==="ar"?-.62:.62;let G=H&&innerWidth/innerHeight>.6;I.liftTarget=H?G?.15:.27:.05,I.rHome=H?G?7.5:6.7:qM,I.pickLift=H?G?.12:.3:.1,I.pickR=H?G?5.6:6:5,n.fov=H?46:35,n.aspect=innerWidth/innerHeight,n.updateProjectionMatrix()}function Pe(){let _=At.degToRad(I.lat),H=At.degToRad(I.lon);n.position.set(Math.cos(H)*Math.cos(_),Math.sin(_),-Math.sin(H)*Math.cos(_)).multiplyScalar(I.r),$.copy(n.position).negate().normalize(),ye.crossVectors($,le).normalize(),Ye.crossVectors(ye,$),I.look.set(0,0,0).addScaledVector(ye,-I.side*I.r*.42).addScaledVector(Ye,-I.lift*I.r*.42),n.lookAt(I.look)}let j={beep:null};function Q(_){U.t=0,U.phase="intro",U.reduced=_,_&&(U.t=6)}function Se(_,H){let G=T.find(K=>K.site.id===_);U.phase="warp",U.warp={t:0,from:{lon:I.lon,lat:I.lat,r:I.r,side:I.side,lift:I.lift},to:{lon:G.site.lon,lat:G.site.lat},onDone:H,done:!1}}function se(){U.phase="ending",U.focus=null,U.warp=null,C.intensity=.32,N.k=0,I.lon=Nd(_a(new Date).lonE),I.lat=10,I.r=I.pickR*1.6,k.opacity=0,T.forEach(_=>{_.target=1})}function fe(){U.phase="pick",U.focus=null,U.idle=0,U.vLon=0,U.vLat=0,T.forEach(_=>{_.target=_.site.extra?0:1})}function _e(_){let H=T.find(G=>G.site.id===_);U.focus=H?{id:_,lon:H.site.lon,lat:At.clamp(H.site.lat,-40,40)}:null}function Ue(){U.dragging=!0,U.focus=null,U.idle=0,U.vLon=0,U.vLat=0}function Ge(_,H,G){let K=.22*(I.r/4);I.lon-=_*K,I.lat=At.clamp(I.lat+H*K*.8,-55,55),G>0&&(U.vLon=-_*K/G,U.vLat=H*K*.8/G)}function Xe(){U.dragging=!1,U.idle=0}let st=new co,Be=new Ae;function pt(_,H){Be.set(_/innerWidth*2-1,-(H/innerHeight)*2+1),st.setFromCamera(Be,n);let G=st.intersectObject(m,!1)[0],K=st.intersectObjects(T.filter(re=>re.pin.visible).map(re=>re.hit),!1);for(let re of K)if(!G||re.distance<G.distance+.02)return re.object.userData.site;return null}function oe(_,H=!0){U.phase="home",U.t=Math.max(U.t,6),U.warp=null,U.focus=null,C.intensity=.32,w.visible=!1,T.forEach(G=>{G.target=G.site.extra?0:1}),ie(_),H&&(I.r=I.rHome,I.lat=12,k.opacity=.38,I.lon=Nd(_a(new Date).lonE))}let it=new L,ot=0;function gt(){let _=_a(new Date);Fs(_.lat,_.lonE,f),M.position.copy(f).multiplyScalar(10)}function q(_,H){ot+=_,ot>30&&(ot=0,gt()),h.uniforms.uTime.value=H,U.t>=0&&(U.t+=_);let G=U.t,K=us(0,1.6,G);if(h.uniforms.uOpacity.value=K,a.material.opacity=K,M.intensity=3.2*us(.3,2.6,G),p.material.uniforms.uK.value=us(1,3,G),U.phase==="intro"||U.phase==="home"){let Y=At.lerp(13,I.rHome,Ld(su(G/4.2)));I.r=U.phase==="intro"?Y:I.r+(Y-I.r)*Math.min(1,_*2.5),U.phase==="home"&&(I.lat+=(12-I.lat)*Math.min(1,_*1.5),C.intensity+=(.32-C.intensity)*Math.min(1,_*2)),I.lon+=U.spin*_*(U.phase==="home"?1:.6)*57.3*.25,I.side+=(I.sideTarget*us(2.5,4.5,G)-I.side)*Math.min(1,_*3),I.lift+=(I.liftTarget*us(2.5,4.5,G)-I.lift)*Math.min(1,_*3),T.forEach((ne,te)=>{ne.target=!ne.site.extra&&G>1.5+te*.45?1:0}),k.progress=us(1.7,4.3,G),k.opacity=us(1.5,2.2,G),U.phase==="intro"&&G>4.4&&(U.phase="home"),U.phase==="home"&&(k.opacity+=(.38-k.opacity)*Math.min(1,_*1.2))}if(U.phase==="ending"&&(C.intensity+=(1.05-C.intensity)*Math.min(1,_*2),I.side+=(0-I.side)*Math.min(1,_*3),I.lift+=(I.pickLift+.12-I.lift)*Math.min(1,_*3),I.r+=(I.pickR*1.12-I.r)*Math.min(1,_*2),I.lat+=(8-I.lat)*Math.min(1,_*1.5),I.lon+=6*_,k.opacity+=(0-k.opacity)*Math.min(1,_*4),T.forEach(Y=>{Y.target=1}),w.visible=!0,N.k=Math.min(1,N.k+_/5.5),V.setDrawRange(0,Math.floor(g.length*N.k))),U.phase==="pick")if(C.intensity+=(1.05-C.intensity)*Math.min(1,_*2),I.side+=(0-I.side)*Math.min(1,_*3),I.lift+=(I.pickLift-I.lift)*Math.min(1,_*3),I.r+=(I.pickR-I.r)*Math.min(1,_*2.5),k.opacity+=(0-k.opacity)*Math.min(1,_*4),U.focus){let Y=(U.focus.lon-I.lon+540)%360-180;I.lon+=Y*Math.min(1,_*2.6),I.lat+=(U.focus.lat-I.lat)*Math.min(1,_*2.6)}else U.dragging||(I.lon+=U.vLon*_,I.lat=At.clamp(I.lat+U.vLat*_,-55,55),U.vLon*=Math.pow(.08,_),U.vLat*=Math.pow(.08,_),U.idle+=_,U.idle>2.5&&(I.lon+=3*_));if(U.phase==="warp"){let Y=U.warp;Y.t+=_;let ne=Ld(su(Y.t/1.9)),te=(Y.to.lon-Y.from.lon+540)%360-180;if(I.lon=Y.from.lon+te*ne,I.lat=At.lerp(Y.from.lat,Y.to.lat,ne),I.r=At.lerp(Y.from.r,1.55,ne),I.side=At.lerp(Y.from.side,0,ne),I.lift=At.lerp(Y.from.lift,0,ne),k.opacity=1-us(0,.6,Y.t),Y.t>1.9){let he=Ld(su((Y.t-1.9)/1));I.r=At.lerp(1.55,1.006,he),n.fov=At.lerp(n.fov,60,_*2),n.updateProjectionMatrix()}C.intensity=At.lerp(.32,2.2,us(.2,1.5,Y.t)),Y.t>2.9&&!Y.done&&(Y.done=!0,Y.onDone?.())}Pe();let re=H*.16,me=H*.05+2;v.position.set(Math.cos(re)*2,Math.sin(re)*.05,-Math.sin(re)*2),v.rotation.y=-re,E.position.set(Math.cos(me)*3.3,Math.sin(me)*.12,-Math.sin(me)*3.3),E.rotation.y=-me,T.forEach(Y=>{U.phase==="warp"&&U.warp.t>.5&&(Y.target=0),Y.on+=(Y.target-Y.on)*Math.min(1,_*4),Y.g.getWorldPosition(it),$.copy(n.position).sub(it).normalize(),Y.g.visible=$.dot(Y.n)>-.05;let ne=(H*.55+Y.phase)%1;Y.rings.forEach((ve,ge)=>{let be=(ne+ge*.5)%1;ve.scale.setScalar(.008+be*.07),ve.material.opacity=(1-be)*.85*Y.on}),Y.core.material.opacity=Y.on,Y.core.scale.setScalar(.018+.006*Math.sin(H*5+Y.phase*9)*Y.on+.012*Y.on),Y.beam.material.opacity=.45*Y.on,Y.beam.scale.y=.2+Y.on*.8;let te=U.phase==="pick"&&!Y.site.extra?1:0;Y.pinK+=(te-Y.pinK)*Math.min(1,_*5);let he=U.focus&&U.focus.id===Y.site.id,pe=Y.pinK*(he?1.35+.08*Math.sin(H*6):1);Y.pin.scale.setScalar(Math.max(.001,pe)),Y.pin.visible=Y.pinK>.01,Y.head.material.color.setRGB(he?.7:1.35,he?1.9:.72,he?2.3:.3)}),k.mat&&(k.mat.uniforms.uP.value=U.reduced?1:k.progress,k.mat.uniforms.uO.value=k.opacity,k.mat.uniforms.uT.value=H)}function jt(_){return n.updateMatrixWorld(),T.forEach((H,G)=>{H.g.getWorldPosition(it),$.copy(n.position).sub(it).normalize();let K=$.dot(H.n);it.project(n),_[G]={x:(it.x*.5+.5)*innerWidth,y:(-it.y*.5+.5)*innerHeight,visible:K>.15&&H.on>.5,on:H.on}}),_}function dt(){let _=_a(new Date);return[...hr,...ru].map(H=>{let G=Dm(_,H.lon),K=Fs(H.lat,H.lon,new L),re=Fs(_.lat,_.lonE,new L);return{id:H.id,hour:G,day:K.dot(re)>0}})}function D(_){ie(_),h.uniforms.uPx.value=i.getPixelRatio()}return ie("ar"),Pe(),{scene:t,camera:n,update:q,start:Q,warpTo:Se,goHome:oe,resize:D,enterPick:fe,enterEnding:se,focusSite:_e,dragStart:Ue,dragMove:Ge,dragEnd:Xe,pickAt:pt,planet:m,buildTitle:z,labelPositions:jt,siteStatus:dt,beacons:T,sun:d,get phase(){return U.phase},get t(){return U.t},title:k,sfx:j}}var Om={sojourner:{planned:7,actual:83,unit:{ar:"\u064A\u0648\u0645 \u0645\u0631\u064A\u062E\u064A",en:"sols"},items:[{sol:1,date:{ar:"\u0664 \u064A\u0648\u0644\u064A\u0648 \u0661\u0669\u0669\u0667",en:"4 Jul 1997"},t:{ar:"\u0646\u0632\u0644\u062A \u0639\u0644\u0649 \u0627\u0644\u0645\u0631\u064A\u062E \u0645\u0639 \u0627\u0644\u0645\u062D\u0637\u0629 Pathfinder \u0641\u064A \u0648\u0627\u062F\u064A Ares Vallis",en:"Landed with the Pathfinder lander in Ares Vallis"}},{sol:7,plan:!0,date:{ar:"\u064A\u0648\u0645 \u0667",en:"Sol 7"},t:{ar:"\u0643\u0627\u0646 \u0627\u0644\u0645\u0641\u0631\u0648\u0636 \u0645\u0647\u0645\u062A\u064A \u062A\u062E\u0644\u0635 \u0647\u0646\u0627",en:"My mission was planned to end here"}},{sol:83,end:!0,date:{ar:"\u0662\u0667 \u0633\u0628\u062A\u0645\u0628\u0631 \u0661\u0669\u0669\u0667",en:"27 Sep 1997"},t:{ar:"\u0622\u062E\u0631 \u0625\u0634\u0627\u0631\u0629 \u0645\u0646 Pathfinder\u060C \u0648\u0623\u0646\u0627 \u0643\u0646\u062A \u0628\u0643\u0644\u0645 \u0627\u0644\u0623\u0631\u0636 \u0639\u0646 \u0637\u0631\u064A\u0642\u0647\u0627\u060C \u0641\u0633\u0643\u062A\u0651 \u0645\u0639\u0627\u0647\u0627",en:"Last signal from Pathfinder \u2014 I talked to Earth through it, so I fell silent too"}}]},spirit:{planned:90,actual:2208,unit:{ar:"\u064A\u0648\u0645 \u0645\u0631\u064A\u062E\u064A",en:"sols"},items:[{sol:1,date:{ar:"\u0664 \u064A\u0646\u0627\u064A\u0631 \u0662\u0660\u0660\u0664",en:"4 Jan 2004"},t:{ar:"\u0646\u0632\u0644\u062A \u0641\u064A \u0641\u0648\u0647\u0629 \u062C\u0648\u0633\u064A\u0641",en:"Landed in Gusev Crater"}},{sol:18,date:{ar:"\u0662\u0661 \u064A\u0646\u0627\u064A\u0631 \u0662\u0660\u0660\u0664",en:"21 Jan 2004"},t:{ar:"\u0630\u0627\u0643\u0631\u062A\u064A \u0627\u062A\u0645\u0644\u062A \u0648\u0641\u0636\u0644\u062A \u0623\u0639\u064A\u062F \u062A\u0634\u063A\u064A\u0644 \u0646\u0641\u0633\u064A\u2026 \u0643\u0646\u062A \u0647\u0645\u0648\u062A",en:"My memory filled up and I kept restarting\u2026 I almost died"},game:!0},{sol:32,date:{ar:"\u0666 \u0641\u0628\u0631\u0627\u064A\u0631 \u0662\u0660\u0660\u0664",en:"6 Feb 2004"},t:{ar:"\u0627\u0644\u0645\u0647\u0646\u062F\u0633\u064A\u0646 \u0635\u0644\u0651\u062D\u0648\u0646\u064A \u0648\u0631\u062C\u0639\u062A \u0623\u0634\u062A\u063A\u0644",en:"Engineers fixed me and I went back to work"}},{sol:63,date:{ar:"\u0668 \u0645\u0627\u0631\u0633 \u0662\u0660\u0660\u0664",en:"8 Mar 2004"},t:{ar:"\u0635\u0648\u0651\u0631\u062A \u0627\u0644\u0623\u0631\u0636 \u0645\u0646 \u0633\u0637\u062D \u0627\u0644\u0645\u0631\u064A\u062E",en:"I photographed Earth from the surface of Mars"},photo:!0},{sol:90,plan:!0,date:{ar:"\u064A\u0648\u0645 \u0669\u0660",en:"Sol 90"},t:{ar:"\u0643\u0627\u0646 \u0627\u0644\u0645\u0641\u0631\u0648\u0636 \u0645\u0647\u0645\u062A\u064A \u062A\u062E\u0644\u0635 \u0647\u0646\u0627",en:"My mission was planned to end here"}},{sol:760,date:{ar:"\u0662\u0660\u0660\u0666",en:"2006"},t:{ar:"\u0639\u062C\u0644\u0629 \u0645\u0646 \u0639\u062C\u0644\u0627\u062A\u064A \u0648\u0642\u0641\u062A\u060C \u0641\u0628\u0642\u064A\u062A \u0623\u0633\u0648\u0642 \u0628\u0627\u0644\u0639\u0643\u0633 \u0648\u0623\u0633\u062D\u0628\u0647\u0627",en:"One wheel stopped, so I drove backwards dragging it"}},{sol:1892,date:{ar:"\u0662\u0660\u0660\u0669",en:"2009"},t:{ar:"\u063A\u0631\u0632\u062A \u0641\u064A \u0631\u0645\u0644 \u0646\u0627\u0639\u0645 \u0641\u064A \u0645\u0643\u0627\u0646 \u0627\u0633\u0645\u0647 Troy",en:"I got stuck in soft sand at a place called Troy"}},{sol:2208,end:!0,date:{ar:"\u0662\u0662 \u0645\u0627\u0631\u0633 \u0662\u0660\u0661\u0660",en:"22 Mar 2010"},t:{ar:"\u0622\u062E\u0631 \u0631\u0633\u0627\u0644\u0629 \u0645\u0646\u064A \u0644\u0644\u0623\u0631\u0636\u060C \u0628\u0639\u062F \u0645\u0627 \u0645\u0634\u064A\u062A \u0667\u066B\u0667\u0663 \u0643\u0645",en:"My last message to Earth, after driving 7.73 km"}}]},opportunity:{planned:90,actual:5111,unit:{ar:"\u064A\u0648\u0645 \u0645\u0631\u064A\u062E\u064A",en:"sols"},items:[{sol:1,date:{ar:"\u0662\u0665 \u064A\u0646\u0627\u064A\u0631 \u0662\u0660\u0660\u0664",en:"25 Jan 2004"},t:{ar:"\u0646\u0632\u0644\u062A \u062C\u0648\u0647 \u0641\u0648\u0647\u0629 \u0635\u063A\u064A\u0631\u0629 \u0627\u0633\u0645\u0647\u0627 Eagle \u0641\u064A \u0633\u0647\u0644 Meridiani",en:"Landed inside a small crater called Eagle, in Meridiani Planum"}},{sol:90,plan:!0,date:{ar:"\u064A\u0648\u0645 \u0669\u0660",en:"Sol 90"},t:{ar:"\u0643\u0627\u0646 \u0627\u0644\u0645\u0641\u0631\u0648\u0636 \u0645\u0647\u0645\u062A\u064A \u062A\u062E\u0644\u0635 \u0647\u0646\u0627",en:"My mission was planned to end here"}},{sol:2681,date:{ar:"\u0669 \u0623\u063A\u0633\u0637\u0633 \u0662\u0660\u0661\u0661",en:"9 Aug 2011"},t:{ar:"\u0648\u0635\u0644\u062A \u0641\u0648\u0647\u0629 Endeavour \u0628\u0639\u062F \u0631\u062D\u0644\u0629 \u0663 \u0633\u0646\u064A\u0646 \u0648\u062D\u0648\u0627\u0644\u064A \u0662\u0661 \u0643\u0645",en:"Reached Endeavour Crater after a 3-year, ~21 km trip"}},{sol:3968,date:{ar:"\u0645\u0627\u0631\u0633 \u0662\u0660\u0661\u0665",en:"Mar 2015"},t:{ar:"\u0639\u062F\u0651\u064A\u062A \u0645\u0633\u0627\u0641\u0629 \u0645\u0627\u0631\u0627\u062B\u0648\u0646 \u0643\u0627\u0645\u0644 (\u0664\u0662\u066B\u0661\u0669\u0665 \u0643\u0645)",en:"Passed a full marathon distance (42.195 km)"}},{sol:5111,end:!0,date:{ar:"\u0661\u0660 \u064A\u0648\u0646\u064A\u0648 \u0662\u0660\u0661\u0668",en:"10 Jun 2018"},t:{ar:"\u0639\u0627\u0635\u0641\u0629 \u062A\u0631\u0627\u0628 \u063A\u0637\u0651\u062A \u0627\u0644\u0643\u0648\u0643\u0628 \u0643\u0644\u0647 \u0648\u0637\u0641\u062A \u0634\u0645\u0633\u064A\u2026 \u0622\u062E\u0631 \u0627\u062A\u0635\u0627\u0644",en:"A planet-wide dust storm blocked my sun\u2026 last contact"}}]}},dr=[{s:{ar:"\u064A\u0648\u0645 \u0661\u0668 (\u0662\u0661 \u064A\u0646\u0627\u064A\u0631 \u0662\u0660\u0660\u0664): Spirit \u0628\u0637\u0651\u0644 \u064A\u0628\u0639\u062A \u0628\u064A\u0627\u0646\u0627\u062A \u0645\u0641\u0647\u0648\u0645\u0629 \u0648\u0628\u064A\u0639\u064A\u062F \u062A\u0634\u063A\u064A\u0644 \u0646\u0641\u0633\u0647 \u0643\u0644 \u0634\u0648\u064A\u0629. \u062A\u0639\u0645\u0644 \u0625\u064A\u0647 \u0627\u0644\u0623\u0648\u0644\u061F",en:"Sol 18 (21 Jan 2004): Spirit stopped sending sensible data and keeps rebooting. What do you do first?"},options:[{t:{ar:"\u0646\u0634\u063A\u0651\u0644\u0647 \u0645\u0646 \u063A\u064A\u0631 \u0645\u0627 \u064A\u0644\u0645\u0633 \u0630\u0627\u0643\u0631\u0629 \u0627\u0644\u0641\u0644\u0627\u0634 (\u0648\u0636\u0639 \xABCrippled\xBB)",en:"Boot it without touching its flash memory (\u201Ccrippled mode\u201D)"},ok:!0},{t:{ar:"\u0646\u062E\u0644\u064A\u0647 \u064A\u0633\u0648\u0642 \u0644\u0645\u0643\u0627\u0646 \u0641\u064A\u0647 \u0634\u0645\u0633 \u0623\u0643\u062A\u0631",en:"Drive it to a sunnier spot"},why:{ar:"\u0647\u0648 \u0645\u0634 \u0642\u0627\u062F\u0631 \u064A\u0641\u0647\u0645 \u0627\u0644\u0623\u0648\u0627\u0645\u0631 \u0628\u0634\u0643\u0644 \u0637\u0628\u064A\u0639\u064A\u060C \u0641\u0627\u0644\u0633\u0648\u0627\u0642\u0629 \u062E\u0637\u0631 \u0639\u0644\u064A\u0647 \u062F\u0644\u0648\u0642\u062A\u064A.",en:"It can\u2019t follow commands normally \u2014 driving now would be risky."}},{t:{ar:"\u0646\u0633\u062A\u0633\u0644\u0645 \u0648\u0646\u0642\u0641\u0644 \u0627\u0644\u0645\u0647\u0645\u0629",en:"Give up and end the mission"},why:{ar:"\u0644\u0623! \u0627\u0644\u0645\u0647\u0646\u062F\u0633\u064A\u0646 \u0645\u0627 \u0627\u0633\u062A\u0633\u0644\u0645\u0648\u0634\u2026 \u062C\u0631\u0651\u0628 \u062A\u0627\u0646\u064A.",en:"No way! The engineers didn\u2019t give up\u2026 try again."}}],done:{ar:"\u0635\u062D! \u0641\u064A \u064A\u0648\u0645 \u0662\u0661 \u0627\u0644\u0645\u0647\u0646\u062F\u0633\u064A\u0646 \u062F\u062E\u0651\u0644\u0648\u0647 \xAB\u0648\u0636\u0639 Crippled\xBB \u0648\u0631\u062C\u0639\u0648\u0627 \u064A\u062A\u062D\u0643\u0645\u0648\u0627 \u0641\u064A\u0647.",en:"Right! On sol 21 the engineers got it into crippled mode and regained control."}},{s:{ar:"Spirit \u0647\u062F\u064A. \u0627\u0643\u062A\u0634\u0641\u0646\u0627 \u0625\u0646 \u0630\u0627\u0643\u0631\u0629 \u0627\u0644\u0641\u0644\u0627\u0634 \u0645\u0644\u064A\u0627\u0646\u0629 \u0622\u0644\u0627\u0641 \u0627\u0644\u0645\u0644\u0641\u0627\u062A \u0627\u0644\u0642\u062F\u064A\u0645\u0629 \u0645\u0646 \u0627\u0644\u0631\u062D\u0644\u0629 \u0644\u0644\u0645\u0631\u064A\u062E. \u0627\u0644\u062E\u0637\u0648\u0629 \u0627\u0644\u062C\u0627\u064A\u0629\u061F",en:"Spirit is stable. Its flash memory is packed with thousands of old files from the trip to Mars. Next step?"},options:[{t:{ar:"\u0646\u0645\u0633\u062D \u0622\u0644\u0627\u0641 \u0627\u0644\u0645\u0644\u0641\u0627\u062A \u0627\u0644\u0644\u064A \u0645\u0634 \u0645\u062D\u062A\u0627\u062C\u064A\u0646\u0647\u0627",en:"Delete thousands of files we no longer need"},ok:!0},{t:{ar:"\u0646\u0628\u0639\u062A\u0644\u0647 \u0645\u0644\u0641\u0627\u062A \u0632\u064A\u0627\u062F\u0629",en:"Send it even more files"},why:{ar:"\u062F\u0647 \u0628\u0627\u0644\u0638\u0628\u0637 \u0627\u0644\u0644\u064A \u0639\u0645\u0644 \u0627\u0644\u0645\u0634\u0643\u0644\u0629!",en:"That\u2019s exactly what caused the problem!"}}],done:{ar:"\u0628\u0631\u0627\u0641\u0648! \u0627\u0644\u0645\u0647\u0646\u062F\u0633\u064A\u0646 \u0645\u0633\u062D\u0648\u0627 \u0622\u0644\u0627\u0641 \u0627\u0644\u0645\u0644\u0641\u0627\u062A \u0648Spirit \u0628\u0642\u0649 \u0645\u0633\u062A\u0642\u0631.",en:"Bravo! Engineers deleted thousands of files and Spirit became stable."}},{s:{ar:"\u0639\u0634\u0627\u0646 \u0646\u0628\u062F\u0623 \u0639\u0644\u0649 \u0646\u0636\u064A\u0641 \u0648\u0645\u0646\u0643\u0631\u0631\u0634 \u0627\u0644\u063A\u0644\u0637\u0629\u060C \u0646\u0639\u0645\u0644 \u0625\u064A\u0647 \u0641\u064A \u0627\u0644\u0630\u0627\u0643\u0631\u0629\u061F",en:"To start clean and avoid a repeat, what do we do with the memory?"},options:[{t:{ar:"\u0646\u0639\u0645\u0644 \xAB\u0641\u0648\u0631\u0645\u0627\u062A\xBB \u0644\u0644\u0630\u0627\u0643\u0631\u0629 \u0643\u0644\u0647\u0627",en:"Reformat the whole flash memory"},ok:!0},{t:{ar:"\u0646\u0633\u064A\u0628\u0647\u0627 \u0632\u064A \u0645\u0627 \u0647\u064A",en:"Leave it as it is"},why:{ar:"\u0645\u0644\u0641\u0627\u062A\u0647\u0627 \u0643\u0627\u0646 \u0645\u0645\u0643\u0646 \u062A\u0643\u0648\u0646 \u0628\u0627\u0638\u062A\u060C \u0648\u0627\u0644\u0623\u0645\u0627\u0646 \u0625\u0646\u0646\u0627 \u0646\u0628\u062F\u0623 \u0645\u0646 \u0627\u0644\u0635\u0641\u0631.",en:"Its files may be corrupted \u2014 the safe move is a clean start."}}],done:{ar:"\u062A\u0645\u0627\u0645! \u064A\u0648\u0645 \u0663\u0662 (\u0666 \u0641\u0628\u0631\u0627\u064A\u0631 \u0662\u0660\u0660\u0664) Spirit \u0631\u062C\u0639 \u0632\u064A \u0627\u0644\u0641\u0644\u2026 \u0648\u0639\u0627\u0634 \u0666 \u0633\u0646\u064A\u0646 \u0643\u0645\u0627\u0646!",en:"Done! On sol 32 (6 Feb 2004) Spirit was fully back\u2026 and worked for 6 more years!"}}],Ud=[{s:{ar:"\xAB\u0628\u0637\u0627\u0631\u064A\u062A\u064A \u0636\u0639\u064A\u0641\u0629 \u0648\u0627\u0644\u062F\u0646\u064A\u0627 \u0628\u062A\u0636\u0644\u0645\xBB\u2026 \u062F\u064A \u0622\u062E\u0631 \u062C\u0645\u0644\u0629 Opportunity \u0642\u0627\u0644\u0647\u0627\u061F",en:"\u201CMy battery is low and it\u2019s getting dark\u201D \u2014 were these Opportunity\u2019s last words?"},answer:!1,why:{ar:"\u0625\u0634\u0627\u0639\u0629! Opportunity \u0643\u0627\u0646 \u0628\u064A\u0628\u0639\u062A \u0623\u0631\u0642\u0627\u0645 \u0645\u0634 \u0643\u0644\u0627\u0645: \u0627\u0644\u0628\u0637\u0627\u0631\u064A\u0629 \u0648\u0627\u0637\u064A\u0629 \u0648\u0627\u0644\u0633\u0645\u0627 \u0636\u0644\u0645\u0629 \u062C\u062F\u064B\u0627 \u0645\u0646 \u0639\u0627\u0635\u0641\u0629 \u062A\u0631\u0627\u0628. \u0635\u062D\u0641\u064A \u0627\u0633\u0645\u0647 Jacob Margolis \u0643\u062A\u0628 \u0627\u0644\u062C\u0645\u0644\u0629 \u062F\u064A \u0643\u062A\u0631\u062C\u0645\u0629 \u0634\u0627\u0639\u0631\u064A\u0629 \u0644\u0644\u0628\u064A\u0627\u0646\u0627\u062A\u060C \u0648\u0627\u0644\u0646\u0627\u0633 \u0627\u0641\u062A\u0643\u0631\u0648\u0647\u0627 \u0643\u0644\u0627\u0645 \u0627\u0644\u0631\u0648\u0641\u0631.",en:"Myth! Opportunity sent numbers, not words: low battery and a very dark sky from a dust storm. A journalist, Jacob Margolis, wrote that line as a poetic translation of the data \u2014 people mistook it for the rover\u2019s words."}},{s:{ar:"Opportunity \u0645\u0634\u064A \u0639\u0644\u0649 \u0627\u0644\u0645\u0631\u064A\u062E \u0645\u0633\u0627\u0641\u0629 \u0623\u0637\u0648\u0644 \u0645\u0646 \u0645\u0627\u0631\u0627\u062B\u0648\u0646 \u0643\u0627\u0645\u0644.",en:"Opportunity drove farther than a full marathon on Mars."},answer:!0,why:{ar:"\u062D\u0642\u064A\u0642\u0629! \u0639\u062F\u0651\u0649 \u0645\u0633\u0627\u0641\u0629 \u0627\u0644\u0645\u0627\u0631\u0627\u062B\u0648\u0646 \u0641\u064A \u0645\u0627\u0631\u0633 \u0662\u0660\u0661\u0665\u060C \u0648\u0641\u064A \u0627\u0644\u0622\u062E\u0631 \u0645\u0634\u064A \u0664\u0665\u066B\u0661\u0666 \u0643\u0645.",en:"True! It passed marathon distance in March 2015 and finished with 45.16 km."}},{s:{ar:"\u0628\u0639\u062F \u0645\u0627 Opportunity \u0633\u0643\u062A\u060C \u0646\u0627\u0633\u0627 \u0641\u0636\u0644\u062A \u062A\u0628\u0639\u062A\u0644\u0647 \u0623\u0648\u0627\u0645\u0631 \u0639\u0634\u0627\u0646 \u064A\u0635\u062D\u0649.",en:"After Opportunity went silent, NASA kept sending commands to wake it."},answer:!0,why:{ar:"\u062D\u0642\u064A\u0642\u0629! \u0628\u0639\u062A\u0648\u0627 \u0623\u0643\u062A\u0631 \u0645\u0646 \u0668\u0663\u0665 \u0623\u0645\u0631 \u0639\u0644\u0649 \u0645\u062F\u0627\u0631 \u0634\u0647\u0648\u0631\u060C \u0648\u0641\u064A \u0661\u0663 \u0641\u0628\u0631\u0627\u064A\u0631 \u0662\u0660\u0661\u0669 \u0623\u0639\u0644\u0646\u0648\u0627 \u0625\u0646 \u0627\u0644\u0645\u0647\u0645\u0629 \u062E\u0644\u0635\u062A.",en:"True! They sent more than 835 recovery commands over months, then declared the mission complete on 13 Feb 2019."}}],Bm={sojourner:[{k:"first",title:{ar:"\u0623\u0648\u0644 \u0639\u062C\u0644 \u0639\u0644\u0649 \u0643\u0648\u0643\u0628 \u062A\u0627\u0646\u064A",en:"The first wheels on another planet"},body:{ar:"\u0623\u0646\u0627 \u0623\u0648\u0644 \u0639\u0631\u0628\u064A\u0629 \u0628\u0639\u062C\u0644 \u0627\u0634\u062A\u063A\u0644\u062A \u0639\u0644\u0649 \u0643\u0648\u0643\u0628 \u063A\u064A\u0631 \u0627\u0644\u0623\u0631\u0636. \u0627\u062A\u0635\u0645\u0645\u062A \u0623\u0634\u062A\u063A\u0644 \u0667 \u0623\u064A\u0627\u0645\u060C \u0648\u0627\u0634\u062A\u063A\u0644\u062A \u0668\u0663 \u064A\u0648\u0645. \u0645\u0634\u064A\u062A \u062D\u0648\u0627\u0644\u064A \u0661\u0660\u0660 \u0645\u062A\u0631\u060C \u0648\u062D\u0644\u0651\u0644\u062A \u0627\u0644\u0635\u062E\u0648\u0631 \u0648\u0627\u0644\u062A\u0631\u0628\u0629 \u0641\u064A \u0661\u0666 \u0645\u0643\u0627\u0646 \u062D\u0648\u0627\u0644\u064A\u0646 \u0627\u0644\u0645\u062D\u0637\u0629\u060C \u0648\u0644\u0642\u064A\u062A\u0647\u0627 \u0634\u0628\u0647 \u0627\u0644\u0635\u062E\u0648\u0631 \u0627\u0644\u0628\u0631\u0643\u0627\u0646\u064A\u0629 \u0627\u0644\u0644\u064A \u0639\u0644\u0649 \u0627\u0644\u0623\u0631\u0636. \u0648\u0635\u0648\u0651\u0631\u062A \u0665\u0665\u0660 \u0635\u0648\u0631\u0629.",en:"I was the first wheeled vehicle ever driven on another planet. I was built for 7 days and worked for 83. I drove about 100 m, analysed rocks and soil at 16 places around the lander, and found they look like volcanic rocks on Earth. I also took 550 pictures."}},{k:"size",title:{ar:"\u0642\u062F \u0625\u064A\u0647 \u0623\u0646\u0627 \u0635\u063A\u064A\u0631\u0629\u061F",en:"How small am I?"},body:{ar:"\u0637\u0648\u0644\u064A \u062D\u0648\u0627\u0644\u064A \u0666\u0665 \u0633\u0645 \u0648\u0648\u0632\u0646\u064A \u062D\u0648\u0627\u0644\u064A \u0661\u0660\u066B\u0666 \u0643\u064A\u0644\u0648 \u0628\u0633\u060C \u0642\u062F \u0634\u0646\u0637\u0629 \u0633\u0641\u0631 \u0635\u063A\u064A\u0631\u0629. Spirit \u0648Opportunity \u0648\u0632\u0646 \u0627\u0644\u0648\u0627\u062D\u062F \u0641\u064A\u0647\u0645 \u062D\u0648\u0627\u0644\u064A \u0661\u0668\u0660 \u0643\u064A\u0644\u0648\u060C \u064A\u0639\u0646\u064A \u0623\u062A\u0642\u0644 \u0645\u0646\u064A \u0661\u0667 \u0645\u0631\u0629!",en:"I\u2019m about 65 cm long and weigh only about 10.6 kg \u2014 like a small suitcase. Spirit and Opportunity weigh about 180 kg each, 17 times more than me!"}},{k:"why",title:{ar:"\u0644\u064A\u0647 \u0633\u0643\u062A\u0651\u061F",en:"Why did I go silent?"},body:{ar:"\u0623\u0646\u0627 \u0645\u0627 \u0643\u0646\u062A\u0634 \u0628\u0643\u0644\u0645 \u0627\u0644\u0623\u0631\u0636 \u0645\u0628\u0627\u0634\u0631\u0629\u060C \u0643\u0646\u062A \u0628\u0643\u0644\u0645 \u0627\u0644\u0645\u062D\u0637\u0629 Pathfinder \u0648\u0647\u064A \u062A\u0648\u0635\u0651\u0644 \u0643\u0644\u0627\u0645\u064A. \u0644\u0645\u0627 Pathfinder \u0628\u0639\u062A\u062A \u0622\u062E\u0631 \u0625\u0634\u0627\u0631\u0629 \u064A\u0648\u0645 \u0662\u0667 \u0633\u0628\u062A\u0645\u0628\u0631 \u0661\u0669\u0669\u0667\u060C \u0641\u0636\u0644\u062A \u0623\u0646\u0627 \u0644\u0648\u062D\u062F\u064A \u0645\u0646 \u063A\u064A\u0631 \u0635\u0648\u062A.",en:"I didn\u2019t talk to Earth directly \u2014 the Pathfinder lander relayed my messages. When Pathfinder sent its last signal on 27 Sep 1997, I was left without a voice."}},{k:"legacy",legacy:0,title:{ar:"\u0633\u0628\u062A \u0625\u064A\u0647 \u0644\u0644\u064A \u0628\u0639\u062F\u064A\u061F",en:"What did I pass on?"},body:{ar:"\u0637\u0631\u064A\u0642\u0629 \u0627\u0644\u0647\u0628\u0648\u0637 \u0628\u0623\u0643\u064A\u0627\u0633 \u0627\u0644\u0647\u0648\u0627 \u0648\u0627\u0644\u0645\u062D\u0637\u0629 \u0627\u0644\u0644\u064A \u0628\u062A\u0641\u062A\u062D \u0632\u064A \u0627\u0644\u0648\u0631\u062F\u0629 \u0627\u062A\u0633\u062A\u062E\u062F\u0645\u0648\u0627 \u062A\u0627\u0646\u064A \u0639\u0634\u0627\u0646 \u064A\u0646\u0632\u0651\u0644\u0648\u0627 Spirit \u0648Opportunity. \u0648\u0623\u062B\u0628\u062A\u062A \u0625\u0646 \u0631\u0648\u0641\u0631 \u0635\u063A\u064A\u0631 \u064A\u0642\u062F\u0631 \u064A\u0644\u0641 \u062D\u0648\u0627\u0644\u064A\u0646 \u0627\u0644\u0635\u062E\u0648\u0631 \u0644\u0648\u062D\u062F\u0647\u060C \u0648\u062A\u0635\u0645\u064A\u0645 \u0627\u0644\u0639\u062C\u0644 \u0627\u0644\u0633\u062A \u0628\u062A\u0627\u0639\u064A \u0628\u0642\u0649 \u0627\u0644\u0623\u0633\u0627\u0633 \u0644\u0643\u0644 \u0631\u0648\u0641\u0631\u0627\u062A \u0646\u0627\u0633\u0627 \u0627\u0644\u0644\u064A \u062C\u062A \u0628\u0639\u062F\u064A.",en:"My airbag landing and my flower-like opening lander were used again to land Spirit and Opportunity. I proved a small rover can steer around rocks by itself, and my six-wheel design became the base for every NASA Mars rover after me."}}],spirit:[{k:"photo",title:{ar:"\u0627\u0644\u0646\u0642\u0637\u0629 \u062F\u064A\u2026 \u0625\u062D\u0646\u0627",en:"That dot is us"},body:{ar:"\u064A\u0648\u0645 \u0668 \u0645\u0627\u0631\u0633 \u0662\u0660\u0660\u0664\u060C \u0642\u0628\u0644 \u0634\u0631\u0648\u0642 \u0627\u0644\u0634\u0645\u0633 \u0628\u0633\u0627\u0639\u0629\u060C Spirit \u0635\u0648\u0651\u0631 \u0627\u0644\u0646\u0642\u0637\u0629 \u0627\u0644\u0645\u0646\u0648\u0631\u0629 \u062F\u064A. \u062F\u064A \u0627\u0644\u0623\u0631\u0636! \u0623\u0648\u0644 \u0635\u0648\u0631\u0629 \u0644\u0644\u0623\u0631\u0636 \u0627\u062A\u0627\u062E\u062F\u062A \u0645\u0646 \u0633\u0637\u062D \u0643\u0648\u0643\u0628 \u0623\u0628\u0639\u062F \u0645\u0646 \u0627\u0644\u0642\u0645\u0631. \u0643\u0644 \u0627\u0644\u0646\u0627\u0633 \u0627\u0644\u0644\u064A \u062A\u0639\u0631\u0641\u0647\u0645 \u0645\u0648\u062C\u0648\u062F\u064A\u0646 \u062C\u0648\u0647 \u0627\u0644\u0646\u0642\u0637\u0629 \u062F\u064A.",en:"On 8 March 2004, one hour before sunrise, Spirit photographed this bright dot. That\u2019s Earth! The first image of Earth ever taken from the surface of a planet beyond the Moon. Everyone you know is inside that dot."},img:"assets/PIA05547.jpg",w:1194,h:1007,credit:"NASA/JPL/Cornell/Texas A&M \xB7 PIA05547"},{k:"silica",title:{ar:"\u0627\u0643\u062A\u0634\u0627\u0641 \u0645\u0646 \u0639\u062C\u0644\u0629 \u0628\u0627\u064A\u0638\u0629",en:"A discovery from a broken wheel"},body:{ar:"\u0633\u0646\u0629 \u0662\u0660\u0660\u0666 \u0639\u062C\u0644\u0629 \u0645\u0646 \u0639\u062C\u0644\u0627\u062A\u064A \u0648\u0642\u0641\u062A\u060C \u0641\u0628\u0642\u064A\u062A \u0623\u0633\u062D\u0628\u0647\u0627 \u0648\u0631\u0627\u064A\u0627. \u0627\u0644\u0639\u062C\u0644\u0629 \u062F\u064A \u062D\u0641\u0631\u062A \u0641\u064A \u0627\u0644\u0623\u0631\u0636 \u0648\u0637\u0644\u0651\u0639\u062A \u062A\u0631\u0628\u0629 \u0628\u064A\u0636\u0627 \u0637\u0644\u0639\u062A \u0633\u064A\u0644\u064A\u0643\u0627 \u0634\u0628\u0647 \u0646\u0642\u064A\u0629\u060C \u062C\u0646\u0628 \u0645\u0643\u0627\u0646 \u0627\u0633\u0645\u0647 Home Plate. \u0627\u0644\u0633\u064A\u0644\u064A\u0643\u0627 \u062F\u064A \u0628\u062A\u062A\u0643\u0648\u0651\u0646 \u062D\u0648\u0627\u0644\u064A\u0646 \u064A\u0646\u0627\u0628\u064A\u0639 \u0645\u064A\u0629 \u0633\u062E\u0646\u0629 \u0623\u0648 \u0641\u062A\u062D\u0627\u062A \u0628\u062E\u0627\u0631\u060C \u0648\u0623\u0645\u0627\u0643\u0646 \u0632\u064A \u062F\u064A \u0639\u0644\u0649 \u0627\u0644\u0623\u0631\u0636 \u0645\u0644\u064A\u0627\u0646\u0629 \u062D\u064A\u0627\u0629.",en:"In 2006 one of my wheels stopped, so I dragged it behind me. That wheel dug up white soil that turned out to be almost pure silica, near a place called Home Plate. Silica like this forms around hot springs or steam vents \u2014 places that are full of life on Earth."}},{k:"legacy",legacy:1,title:{ar:"\u0633\u0628\u062A \u0625\u064A\u0647 \u0644\u0644\u064A \u0628\u0639\u062F\u064A\u061F",en:"What did I pass on?"},body:{ar:"\u0627\u0643\u062A\u0634\u0627\u0641 \u0627\u0644\u064A\u0646\u0627\u0628\u064A\u0639 \u0627\u0644\u0633\u062E\u0646\u0629 \u063A\u064A\u0651\u0631 \u0627\u0644\u0633\u0624\u0627\u0644: \u0645\u0634 \u0628\u0633 \xAB\u0643\u0627\u0646 \u0641\u064A\u0647 \u0645\u064A\u0629\u061F\xBB\u2026 \u0644\u0623\u060C \xAB\u0647\u0644 \u0627\u0644\u0645\u0631\u064A\u062E \u0643\u0627\u0646 \u0645\u0645\u0643\u0646 \u064A\u0639\u064A\u0634 \u0641\u064A\u0647 \u0643\u0627\u0626\u0646\u0627\u062A\u061F\xBB. \u0648\u062F\u0647 \u0628\u0627\u0644\u0638\u0628\u0637 \u0627\u0644\u0633\u0624\u0627\u0644 \u0627\u0644\u0644\u064A Curiosity \u0627\u062A\u0628\u0639\u062A \u0639\u0634\u0627\u0646\u0647.",en:"Finding signs of hot springs changed the question from \u201Cwas there water?\u201D to \u201Ccould Mars once have supported life?\u201D \u2014 exactly the question Curiosity was sent to answer."}}],opportunity:[{k:"hole",title:{ar:"\u0647\u062F\u0641 \u0645\u0646 \u0623\u0648\u0644 \u0644\u0645\u0633\u0629",en:"A hole-in-one landing"},body:{ar:"\u0623\u0643\u064A\u0627\u0633 \u0627\u0644\u0647\u0648\u0627 \u0628\u062A\u0627\u0639\u062A\u064A \u0646\u0637\u0651\u062A \u0648\u062F\u062D\u0631\u062C\u062A\u0646\u064A \u062C\u0648\u0647 \u0641\u0648\u0647\u0629 \u0635\u063A\u064A\u0631\u0629 \u0627\u0633\u0645\u0647\u0627 Eagle. \u0648\u0644\u0645\u0627 \u0641\u062A\u062D\u062A \u0643\u0627\u0645\u064A\u0631\u0627\u062A\u064A \u0644\u0642\u064A\u062A \u062D\u0631\u0641\u0647\u0627 \u0643\u0644\u0647 \u0635\u062E\u0648\u0631 \u0637\u0628\u0642\u0627\u062A \u0645\u0643\u0634\u0648\u0641\u0629 \u0642\u062F\u0627\u0645\u064A \u0639\u0644\u0649 \u0637\u0648\u0644! \u0627\u0644\u0645\u0647\u0646\u062F\u0633\u064A\u0646 \u0633\u0645\u0651\u0648\u0647\u0627 \xABhole-in-one\xBB \u0632\u064A \u0627\u0644\u062C\u0648\u0644\u0641.",en:"My airbags bounced and rolled me into a small crater called Eagle. When I opened my cameras, its rim was lined with exposed layered bedrock right in front of me! The engineers called it a \u201Chole-in-one\u201D, like in golf."}},{k:"berries",title:{ar:"\u0627\u0644\u062A\u0648\u062A \u0627\u0644\u0623\u0632\u0631\u0642 \u0627\u0644\u0644\u064A \u0645\u0634 \u062A\u0648\u062A",en:"Blueberries that aren\u2019t berries"},body:{ar:"\u0644\u0642\u064A\u062A \u0643\u0648\u0631 \u0635\u063A\u064A\u0631\u0629 \u0642\u062F \u062D\u0628\u0629 \u0627\u0644\u062E\u0631\u0632 \u0645\u0627\u0644\u064A\u0629 \u0627\u0644\u0623\u0631\u0636\u060C \u0627\u0644\u0639\u0644\u0645\u0627\u0621 \u0633\u0645\u0651\u0648\u0647\u0627 \xAB\u062A\u0648\u062A \u0623\u0632\u0631\u0642\xBB. \u0637\u0644\u0639\u062A \u0645\u0639\u062F\u0646 \u0627\u0633\u0645\u0647 \u0627\u0644\u0647\u064A\u0645\u0627\u062A\u064A\u062A\u060C \u0648\u0627\u062A\u0643\u0648\u0651\u0646\u062A \u0641\u064A \u0645\u064A\u0629 \u062D\u0645\u0636\u064A\u0629 \u0632\u0645\u0627\u0646. \u062F\u064A \u0643\u0627\u0646\u062A \u0645\u0646 \u0623\u0647\u0645 \u0627\u0644\u0623\u062F\u0644\u0629 \u0625\u0646 \u0627\u0644\u0645\u0643\u0627\u0646 \u062F\u0647 \u0643\u0627\u0646 \u063A\u0631\u0642\u0627\u0646 \u0645\u064A\u0629 \u0641\u064A \u0627\u0644\u0645\u0627\u0636\u064A.",en:"I found tiny balls, the size of beads, all over the ground. Scientists nicknamed them \u201Cblueberries\u201D. They are made of a mineral called hematite that formed in acidic water long ago \u2014 one of the strongest clues that this place was once soaked in water."}},{k:"gypsum",title:{ar:"\u062E\u0637 \u0623\u0628\u064A\u0636\u2026 \u062F\u0644\u064A\u0644 \u0642\u0648\u064A",en:"A white line, a strong clue"},body:{ar:"\u0633\u0646\u0629 \u0662\u0660\u0660\u0665 \u0644\u0642\u064A\u062A \u0635\u062E\u0631\u0629 \u0637\u0644\u0639\u062A \u0646\u064A\u0632\u0643 \u0645\u0646 \u062D\u062F\u064A\u062F \u0648\u0646\u064A\u0643\u0644 \u062C\u0646\u0628 \u062F\u0631\u0639 \u0627\u0644\u062D\u0631\u0627\u0631\u0629 \u0628\u062A\u0627\u0639\u064A. \u0648\u0628\u0639\u062F \u0631\u062D\u0644\u0629 \u0663 \u0633\u0646\u064A\u0646 \u0644\u0641\u0648\u0647\u0629 Endeavour (\u0639\u0631\u0636\u0647\u0627 \u062D\u0648\u0627\u0644\u064A \u0662\u0662 \u0643\u0645)\u060C \u0644\u0642\u064A\u062A \u0639\u0631\u0648\u0642 \u0628\u064A\u0636\u0627 \u0645\u0646 \u0645\u0639\u062F\u0646 \u0627\u0644\u062C\u0628\u0633\u060C \u0627\u062A\u0643\u0648\u0651\u0646\u062A \u0645\u0646 \u0645\u064A\u0629 \u062C\u0631\u062A \u0641\u064A \u0634\u0642\u0648\u0642 \u062A\u062D\u062A \u0627\u0644\u0623\u0631\u0636. \u0641\u0631\u064A\u0642\u064A \u0642\u0627\u0644 \u0625\u0646\u0647 \u0623\u0642\u0648\u0649 \u062F\u0644\u064A\u0644 \u0639\u0644\u0649 \u0627\u0644\u0645\u064A\u0629 \u0634\u0627\u0641\u0648\u0647 \u0645\u0639\u0627\u064A\u0627.",en:"In 2005 I found a rock near my heat shield that turned out to be an iron-nickel meteorite. After a 3-year drive to Endeavour Crater (about 22 km wide), I found bright veins of gypsum, left by water flowing through underground cracks. My team called it the strongest evidence for water they had seen with me."}},{k:"legacy",legacy:2,title:{ar:"\u0633\u0628\u062A \u0625\u064A\u0647 \u0644\u0644\u064A \u0628\u0639\u062F\u064A\u061F",en:"What did I pass on?"},body:{ar:"\u0645\u0634\u064A\u062A \u0664\u0665\u066B\u0661\u0666 \u0643\u0645\u060C \u0648\u062F\u0647 \u0643\u0627\u0646 \u0631\u0642\u0645 \u0642\u064A\u0627\u0633\u064A \u0644\u0623\u064A \u0639\u0631\u0628\u064A\u0629 \u0633\u0648\u0627\u0642\u0629 \u0639\u0644\u0649 \u0639\u0627\u0644\u0645 \u062A\u0627\u0646\u064A. \u0648\u0627\u0643\u062A\u0634\u0627\u0641\u0627\u062A\u064A \u0623\u0646\u0627 \u0648Spirit \u0639\u0646 \u0627\u0644\u0645\u064A\u0629 \u0643\u0627\u0646\u062A \u062C\u0632\u0621 \u0645\u0646 \u0633\u0628\u0628 \u0625\u0646 \u0646\u0627\u0633\u0627 \u0648\u0627\u0641\u0642\u062A \u062A\u0628\u0639\u062A Curiosity \u0639\u0634\u0627\u0646 \u062A\u0634\u0648\u0641: \u0647\u0644 \u0645\u0643\u0648\u0646\u0627\u062A \u0627\u0644\u062D\u064A\u0627\u0629 \u0643\u0627\u0646\u062A \u0645\u0648\u062C\u0648\u062F\u0629 \u0639\u0644\u0649 \u0627\u0644\u0645\u0631\u064A\u062E\u061F",en:"I drove 45.16 km \u2014 a record for driving on another world. What Spirit and I found about water is part of why NASA approved Curiosity, to check whether the ingredients for life were once on Mars."}}]},Do=[{id:"sojourner",name:"Sojourner",year:1997,ended:!0,found:{ar:"\u0623\u0648\u0644 \u0631\u0648\u0641\u0631 \u0639\u0644\u0649 \u0643\u0648\u0643\u0628 \u062A\u0627\u0646\u064A. \u0646\u0632\u0644\u062A \u0628\u0623\u0643\u064A\u0627\u0633 \u0647\u0648\u0627\u060C \u0648\u0644\u0641\u0651\u062A \u062D\u0648\u0627\u0644\u064A\u0646 \u0627\u0644\u0635\u062E\u0648\u0631 \u0644\u0648\u062D\u062F\u0647\u0627\u060C \u0648\u062D\u0644\u0651\u0644\u062A \u0635\u062E\u0648\u0631 \u0634\u0628\u0647 \u0627\u0644\u0628\u0631\u0643\u0627\u0646\u064A\u0629 \u0627\u0644\u0644\u064A \u0639\u0646\u062F\u0646\u0627.",en:"The first rover on another planet. It landed with airbags, steered around rocks by itself, and analysed rocks that look like Earth\u2019s volcanic rocks."},gave:{ar:"\u0637\u0631\u064A\u0642\u0629 \u0627\u0644\u0647\u0628\u0648\u0637 \u0628\u0623\u0643\u064A\u0627\u0633 \u0627\u0644\u0647\u0648\u0627 \u0627\u062A\u0633\u062A\u062E\u062F\u0645\u062A \u062A\u0627\u0646\u064A \u0645\u0639 Spirit \u0648Opportunity\u060C \u0648\u062A\u0635\u0645\u064A\u0645 \u0627\u0644\u0639\u062C\u0644 \u0627\u0644\u0633\u062A \u0628\u0642\u0649 \u0623\u0633\u0627\u0633 \u0643\u0644 \u0631\u0648\u0641\u0631 \u0628\u0639\u062F\u0647\u0627.",en:"Its airbag landing was used again for Spirit and Opportunity, and its six-wheel design became the base for every rover after it."}},{id:"spirit",name:"Spirit",year:2004,ended:!0,found:{ar:"\u0639\u062C\u0644\u062A\u0647 \u0627\u0644\u0628\u0627\u064A\u0638\u0629 \u062D\u0641\u0631\u062A \u0648\u0644\u0642\u062A \u0633\u064A\u0644\u064A\u0643\u0627 \u0634\u0628\u0647 \u0646\u0642\u064A\u0629\u060C \u0639\u0644\u0627\u0645\u0629 \u0639\u0644\u0649 \u064A\u0646\u0627\u0628\u064A\u0639 \u0645\u064A\u0629 \u0633\u062E\u0646\u0629 \u0632\u0645\u0627\u0646.",en:"Its broken wheel dug up almost pure silica, a sign of ancient hot springs."},gave:{ar:"\u0627\u0644\u0633\u0624\u0627\u0644 \u0643\u0628\u0631: \u0645\u0634 \u0628\u0633 \xAB\u0643\u0627\u0646 \u0641\u064A\u0647 \u0645\u064A\u0629\u061F\xBB \u0644\u0643\u0646 \xAB\u0647\u0644 \u0627\u0644\u0645\u0631\u064A\u062E \u0643\u0627\u0646 \u0645\u0645\u0643\u0646 \u064A\u0639\u064A\u0634 \u0641\u064A\u0647 \u0643\u0627\u0626\u0646\u0627\u062A\u061F\xBB.",en:"The question grew: not just \u201Cwas there water?\u201D but \u201Ccould Mars have supported life?\u201D"}},{id:"opportunity",name:"Opportunity",year:2004,ended:!0,found:{ar:"\u0644\u0642\u0649 \xAB\u0627\u0644\u062A\u0648\u062A \u0627\u0644\u0623\u0632\u0631\u0642\xBB \u0645\u0646 \u0627\u0644\u0647\u064A\u0645\u0627\u062A\u064A\u062A \u0648\u0639\u0631\u0648\u0642 \u0627\u0644\u062C\u0628\u0633\u060C \u0623\u062F\u0644\u0629 \u0642\u0648\u064A\u0629 \u0625\u0646 \u0627\u0644\u0645\u064A\u0629 \u062C\u0631\u062A \u0632\u0645\u0627\u0646. \u0648\u0645\u0634\u064A \u0631\u0642\u0645 \u0642\u064A\u0627\u0633\u064A: \u0664\u0665\u066B\u0661\u0666 \u0643\u0645.",en:"It found hematite \u201Cblueberries\u201D and gypsum veins \u2014 strong proof that water once flowed \u2014 and drove a record 45.16 km."},gave:{ar:"\u0627\u0643\u062A\u0634\u0627\u0641\u0627\u062A Spirit \u0648Opportunity \u0643\u0627\u0646\u062A \u062C\u0632\u0621 \u0645\u0646 \u0633\u0628\u0628 \u0625\u0646 \u0646\u0627\u0633\u0627 \u0648\u0627\u0641\u0642\u062A \u062A\u0628\u0646\u064A Curiosity.",en:"What Spirit and Opportunity found is part of why NASA approved building Curiosity."}},{id:"curiosity",name:"Curiosity",year:2012,ended:!1,found:{ar:"\u0627\u062A\u0628\u0639\u062A \u062A\u0633\u0623\u0644: \u0647\u0644 \u0645\u0643\u0648\u0646\u0627\u062A \u0627\u0644\u062D\u064A\u0627\u0629 \u0643\u0627\u0646\u062A \u0645\u0648\u062C\u0648\u062F\u0629\u061F \u0648\u0628\u0639\u062F \u0645\u0627 \u0646\u0632\u0644\u062A \u0628\u0634\u0648\u064A\u0629 \u0644\u0642\u062A \u0625\u0646\u0647\u0627 \u0643\u0627\u0646\u062A \u0645\u0648\u062C\u0648\u062F\u0629\u060C \u0648\u0625\u0646 \u0641\u0648\u0647\u0629 Gale \u0643\u0627\u0646 \u0641\u064A\u0647\u0627 \u0628\u062D\u064A\u0631\u0629 \u0632\u0645\u0627\u0646.",en:"Sent to ask: were the ingredients for life there? Soon after landing it found they were \u2014 and that Gale Crater once held a lake."},gave:{ar:"\u0628\u0645\u0627 \u0625\u0646 \u0627\u0644\u0645\u0631\u064A\u062E \u0643\u0627\u0646 \u0635\u0627\u0644\u062D \u0644\u0644\u062D\u064A\u0627\u0629\u060C \u0627\u0644\u062E\u0637\u0648\u0629 \u0627\u0644\u062C\u0627\u064A\u0629: \u0646\u062F\u0648\u0651\u0631 \u0639\u0644\u0649 \u0639\u0644\u0627\u0645\u0627\u062A \u0627\u0644\u062D\u064A\u0627\u0629 \u0646\u0641\u0633\u0647\u0627.",en:"Since Mars was once habitable, the next step was to look for signs of life itself."}},{id:"perseverance",name:"Perseverance",year:2021,ended:!1,found:{ar:"\u0628\u064A\u062F\u0648\u0651\u0631 \u0639\u0644\u0649 \u0639\u0644\u0627\u0645\u0627\u062A \u062D\u064A\u0627\u0629 \u0642\u062F\u064A\u0645\u0629 \u0641\u064A \u0641\u0648\u0647\u0629 Jezero\u060C \u0648\u0628\u064A\u062C\u0645\u0639 \u0639\u064A\u0646\u0627\u062A \u0635\u062E\u0648\u0631 \u0645\u0645\u0643\u0646 \u062A\u0631\u062C\u0639 \u0627\u0644\u0623\u0631\u0636 \u0641\u064A \u0627\u0644\u0645\u0633\u062A\u0642\u0628\u0644. \u0648\u0633\u0646\u0629 \u0662\u0660\u0662\u0665 \u0646\u0627\u0633\u0627 \u0642\u0627\u0644\u062A \u0625\u0646 \u0639\u064A\u0646\u0629 \u0645\u0646\u0647\u0645 \u0641\u064A\u0647\u0627 \xAB\u0639\u0644\u0627\u0645\u0629 \u062D\u064A\u0648\u064A\u0629 \u0645\u062D\u062A\u0645\u0644\u0629\xBB \u0644\u0633\u0647 \u0645\u062D\u062A\u0627\u062C\u0629 \u062F\u0631\u0627\u0633\u0629.",en:"It searches Jezero Crater for signs of ancient life and collects rock samples that could come back to Earth. In 2025 NASA said one sample holds a \u201Cpotential biosignature\u201D that still needs study."},gave:{ar:"\u0627\u0644\u0639\u064A\u0646\u0627\u062A \u062F\u064A \u0645\u0645\u0643\u0646 \u062A\u062C\u0627\u0648\u0628 \u064A\u0648\u0645 \u0645\u0646 \u0627\u0644\u0623\u064A\u0627\u0645 \u0639\u0644\u0649 \u0623\u0643\u0628\u0631 \u0633\u0624\u0627\u0644: \u0647\u0644 \u0643\u0627\u0646 \u0641\u064A\u0647 \u062D\u064A\u0627\u0629 \u0639\u0644\u0649 \u0627\u0644\u0645\u0631\u064A\u062E\u061F",en:"One day these samples could help answer the biggest question: was there ever life on Mars?"}}],Os=[{s:{ar:"\u0625\u064A\u0647 \u0623\u0647\u0645 \u062D\u0627\u062C\u0629 Sojourner \u0623\u062B\u0628\u062A\u062A\u0647\u0627 \u0644\u0644\u0631\u0648\u0641\u0631\u0627\u062A \u0627\u0644\u0644\u064A \u0628\u0639\u062F\u0647\u0627\u061F",en:"What was the most important thing Sojourner proved for later rovers?"},options:[{t:{ar:"\u0625\u0646 \u0631\u0648\u0641\u0631 \u0635\u063A\u064A\u0631 \u064A\u0646\u0641\u0639 \u064A\u0646\u0632\u0644 \u0628\u0623\u0643\u064A\u0627\u0633 \u0647\u0648\u0627 \u0648\u064A\u0644\u0641 \u062D\u0648\u0627\u0644\u064A\u0646 \u0627\u0644\u0635\u062E\u0648\u0631 \u0644\u0648\u062D\u062F\u0647",en:"A small rover can land with airbags and steer around rocks by itself"},ok:!0},{t:{ar:"\u0625\u0646 \u0627\u0644\u0631\u0648\u0641\u0631\u0627\u062A \u062A\u0642\u062F\u0631 \u062A\u0637\u064A\u0631 \u0641\u0648\u0642 \u0627\u0644\u0645\u0631\u064A\u062E",en:"Rovers can fly over Mars"}},{t:{ar:"\u0625\u0646 \u0627\u0644\u0645\u0631\u064A\u062E \u0641\u064A\u0647 \u0645\u062D\u064A\u0637\u0627\u062A \u0627\u0644\u0646\u0647\u0627\u0631\u062F\u0647",en:"Mars has oceans today"}}],why:{ar:"Sojourner \u0643\u0627\u0646\u062A \u062A\u062C\u0631\u0628\u0629 \u062A\u0642\u0646\u064A\u0629\u060C \u0648\u0646\u062C\u0627\u062D\u0647\u0627 \u062E\u0644\u0651\u0649 \u0646\u0627\u0633\u0627 \u062A\u0633\u062A\u062E\u062F\u0645 \u0646\u0641\u0633 \u0637\u0631\u064A\u0642\u0629 \u0627\u0644\u0647\u0628\u0648\u0637 \u0648\u0646\u0641\u0633 \u0641\u0643\u0631\u0629 \u0627\u0644\u0639\u062C\u0644 \u0627\u0644\u0633\u062A \u062A\u0627\u0646\u064A.",en:"Sojourner was a technology test. Its success let NASA reuse the same landing method and six-wheel idea."}},{s:{ar:"\u0639\u062C\u0644\u0629 Spirit \u0627\u0644\u0628\u0627\u064A\u0638\u0629 \u0643\u0634\u0641\u062A \u0639\u0646 \u0625\u064A\u0647\u061F",en:"What did Spirit\u2019s broken wheel uncover?"},options:[{t:{ar:"\u062A\u0644\u062C \u062A\u062D\u062A \u0627\u0644\u0631\u0645\u0644",en:"Ice under the sand"}},{t:{ar:"\u0633\u064A\u0644\u064A\u0643\u0627 \u0634\u0628\u0647 \u0646\u0642\u064A\u0629\u060C \u0639\u0644\u0627\u0645\u0629 \u0639\u0644\u0649 \u064A\u0646\u0627\u0628\u064A\u0639 \u0645\u064A\u0629 \u0633\u062E\u0646\u0629 \u0632\u0645\u0627\u0646",en:"Almost pure silica \u2014 a sign of ancient hot springs"},ok:!0},{t:{ar:"\u062D\u0641\u0631\u064A\u0629 \u0644\u0643\u0627\u0626\u0646 \u062D\u064A",en:"A fossil of a living thing"}}],why:{ar:"\u0627\u0644\u0633\u064A\u0644\u064A\u0643\u0627 \u062F\u064A \u0628\u062A\u062A\u0643\u0648\u0651\u0646 \u062D\u0648\u0627\u0644\u064A\u0646 \u0627\u0644\u064A\u0646\u0627\u0628\u064A\u0639 \u0627\u0644\u0633\u062E\u0646\u0629 \u0648\u0641\u062A\u062D\u0627\u062A \u0627\u0644\u0628\u062E\u0627\u0631\u060C \u0648\u0623\u0645\u0627\u0643\u0646 \u0632\u064A \u062F\u064A \u0639\u0644\u0649 \u0627\u0644\u0623\u0631\u0636 \u0628\u064A\u0639\u064A\u0634 \u0641\u064A\u0647\u0627 \u0643\u0627\u0626\u0646\u0627\u062A.",en:"This silica forms around hot springs and steam vents \u2014 on Earth, places like these are home to life."}},{s:{ar:"\xAB\u0627\u0644\u062A\u0648\u062A \u0627\u0644\u0623\u0632\u0631\u0642\xBB \u0627\u0644\u0644\u064A Opportunity \u0644\u0642\u0627\u0647 \u0627\u062A\u0643\u0648\u0651\u0646 \u0625\u0632\u0627\u064A\u061F",en:"How did the \u201Cblueberries\u201D Opportunity found form?"},options:[{t:{ar:"\u0646\u0632\u0644\u0648\u0627 \u0645\u0639 \u0627\u0644\u0645\u0637\u0631 \u0645\u0646 \u0627\u0644\u0633\u0645\u0627",en:"They fell from the sky as rain"}},{t:{ar:"\u062F\u064A \u0641\u0627\u0643\u0647\u0629 \u062D\u0642\u064A\u0642\u064A\u0629",en:"They are real fruit"}},{t:{ar:"\u0627\u062A\u0643\u0648\u0651\u0646\u0648\u0627 \u0641\u064A \u0645\u064A\u0629 \u0632\u0645\u0627\u0646",en:"They formed in water long ago"},ok:!0}],why:{ar:"\u0627\u0644\u0643\u0648\u0631 \u0627\u0644\u0635\u063A\u064A\u0631\u0629 \u062F\u064A \u0645\u0646 \u0645\u0639\u062F\u0646 \u0627\u0644\u0647\u064A\u0645\u0627\u062A\u064A\u062A\u060C \u0648\u0627\u062A\u0643\u0648\u0651\u0646\u062A \u0641\u064A \u0645\u064A\u0629 \u062D\u0645\u0636\u064A\u0629\u060C \u0641\u0628\u0642\u062A \u062F\u0644\u064A\u0644 \u0625\u0646 \u0627\u0644\u0645\u0643\u0627\u0646 \u0643\u0627\u0646 \u063A\u0631\u0642\u0627\u0646 \u0645\u064A\u0629.",en:"These small balls are made of hematite that formed in acidic water \u2014 proof that the area was once soaked."}},{s:{ar:"\u0625\u0632\u0627\u064A Spirit \u0648Opportunity \u0633\u0627\u0639\u062F\u0648\u0627 Curiosity\u061F",en:"How did Spirit and Opportunity help Curiosity?"},options:[{t:{ar:"\u0627\u0643\u062A\u0634\u0627\u0641\u0627\u062A\u0647\u0645 \u0639\u0646 \u0627\u0644\u0645\u064A\u0629 \u062E\u0644\u0651\u062A \u0646\u0627\u0633\u0627 \u062A\u0628\u0639\u062A Curiosity \u062A\u062F\u0648\u0651\u0631 \u0639\u0644\u0649 \u0645\u0643\u0648\u0646\u0627\u062A \u0627\u0644\u062D\u064A\u0627\u0629",en:"Their water discoveries led NASA to send Curiosity to look for the ingredients of life"},ok:!0},{t:{ar:"\u0633\u0644\u0651\u0645\u0648\u0647\u0627 \u0642\u0637\u0639 \u063A\u064A\u0627\u0631",en:"They handed it spare parts"}},{t:{ar:"\u0645\u0627 \u0633\u0627\u0639\u062F\u0648\u0647\u0627\u0634\u060C \u0643\u0644 \u0645\u0647\u0645\u0629 \u0644\u0648\u062D\u062F\u0647\u0627",en:"They didn\u2019t \u2014 every mission is on its own"}}],why:{ar:"\u0643\u0644 \u0645\u0647\u0645\u0629 \u0628\u062A\u0628\u0646\u064A \u0639\u0644\u0649 \u0627\u0644\u0644\u064A \u0642\u0628\u0644\u0647\u0627: \u0627\u0644\u0623\u0648\u0644 \u062F\u0648\u0651\u0631\u0646\u0627 \u0639\u0644\u0649 \u0627\u0644\u0645\u064A\u0629\u060C \u0628\u0639\u062F\u064A\u0646 \u0639\u0644\u0649 \u0627\u0644\u0638\u0631\u0648\u0641 \u0627\u0644\u0645\u0646\u0627\u0633\u0628\u0629 \u0644\u0644\u062D\u064A\u0627\u0629\u060C \u0648\u062F\u0644\u0648\u0642\u062A\u064A \u0639\u0644\u0649 \u0639\u0644\u0627\u0645\u0627\u062A \u0627\u0644\u062D\u064A\u0627\u0629 \u0646\u0641\u0633\u0647\u0627.",en:"Each mission builds on the last: first we looked for water, then for conditions for life, and now for signs of life itself."}},{s:{ar:"Perseverance \u0628\u064A\u0639\u0645\u0644 \u0625\u064A\u0647 \u0645\u0627\u062D\u062F\u0634 \u0645\u0646 \u0627\u0644\u0631\u0648\u0641\u0631\u0627\u062A \u0627\u0644\u0644\u064A \u0642\u0628\u0644\u0647 \u0639\u0645\u0644\u0647\u061F",en:"What is Perseverance doing that no rover before it did?"},options:[{t:{ar:"\u0628\u064A\u062F\u0648\u0651\u0631 \u0639\u0644\u0649 \u0627\u0644\u0645\u064A\u0629 \u0644\u0623\u0648\u0644 \u0645\u0631\u0629",en:"Looking for water for the first time"}},{t:{ar:"\u0628\u064A\u062C\u0645\u0639 \u0639\u064A\u0646\u0627\u062A \u0635\u062E\u0648\u0631 \u0645\u0645\u0643\u0646 \u062A\u0631\u062C\u0639 \u0627\u0644\u0623\u0631\u0636",en:"Collecting rock samples that could come back to Earth"},ok:!0},{t:{ar:"\u0646\u0632\u0644 \u0628\u0623\u0643\u064A\u0627\u0633 \u0647\u0648\u0627",en:"Landing with airbags"}}],why:{ar:"Perseverance \u0628\u064A\u062D\u0641\u0638 \u0639\u064A\u0646\u0627\u062A \u0641\u064A \u0623\u0646\u0627\u0628\u064A\u0628\u060C \u0648\u0645\u0647\u0645\u0629 \u062C\u0627\u064A\u0629 \u0645\u0645\u0643\u0646 \u062A\u0631\u062C\u0651\u0639\u0647\u0627 \u0627\u0644\u0623\u0631\u0636 \u0639\u0634\u0627\u0646 \u0627\u0644\u0639\u0644\u0645\u0627\u0621 \u064A\u062F\u0631\u0633\u0648\u0647\u0627 \u0628\u0623\u062C\u0647\u0632\u0629 \u0623\u0642\u0648\u0649.",en:"Perseverance seals samples in tubes so a future mission could bring them to Earth for study with stronger instruments."}}],au={rovers:["sojourner","spirit","opportunity"],names:["Sojourner","Spirit","Opportunity"],rows:[{k:"cLanded",v:[{ar:"\u0664 \u064A\u0648\u0644\u064A\u0648 \u0661\u0669\u0669\u0667",en:"4 Jul 1997"},{ar:"\u0664 \u064A\u0646\u0627\u064A\u0631 \u0662\u0660\u0660\u0664",en:"4 Jan 2004"},{ar:"\u0662\u0665 \u064A\u0646\u0627\u064A\u0631 \u0662\u0660\u0660\u0664",en:"25 Jan 2004"}]},{k:"cSite",v:[{ar:"Ares Vallis",en:"Ares Vallis"},{ar:"\u0641\u0648\u0647\u0629 Gusev",en:"Gusev Crater"},{ar:"Meridiani Planum",en:"Meridiani Planum"}]},{k:"cLength",v:[{ar:"\u0666\u0665 \u0633\u0645",en:"65 cm"},{ar:"\u0661\u066B\u0666 \u0645\u062A\u0631",en:"1.6 m"},{ar:"\u0661\u066B\u0666 \u0645\u062A\u0631",en:"1.6 m"}]},{k:"cMass",v:[{ar:"\u062D\u0648\u0627\u0644\u064A \u0661\u0660\u066B\u0666 \u0643\u064A\u0644\u0648",en:"~10.6 kg"},{ar:"\u062D\u0648\u0627\u0644\u064A \u0661\u0668\u0660 \u0643\u064A\u0644\u0648",en:"~180 kg"},{ar:"\u062D\u0648\u0627\u0644\u064A \u0661\u0668\u0660 \u0643\u064A\u0644\u0648",en:"~180 kg"}]},{k:"cPlanned",v:[{ar:"\u0667 \u0623\u064A\u0627\u0645",en:"7 sols"},{ar:"\u0669\u0660 \u064A\u0648\u0645",en:"90 sols"},{ar:"\u0669\u0660 \u064A\u0648\u0645",en:"90 sols"}]},{k:"cWorked",v:[{ar:"\u0668\u0663 \u064A\u0648\u0645",en:"83 sols"},{ar:"\u0662\u066C\u0662\u0660\u0668 \u064A\u0648\u0645",en:"2,208 sols"},{ar:"\u0665\u066C\u0661\u0661\u0661 \u064A\u0648\u0645",en:"5,111 sols"}]},{k:"cTimes",v:[{ar:"\u062D\u0648\u0627\u0644\u064A \u0661\u0662 \u0645\u0631\u0629",en:"~12\xD7"},{ar:"\u062D\u0648\u0627\u0644\u064A \u0662\u0664 \u0645\u0631\u0629",en:"~24\xD7"},{ar:"\u062D\u0648\u0627\u0644\u064A \u0665\u0666 \u0645\u0631\u0629",en:"~56\xD7"}]},{k:"cDistance",v:[{ar:"\u062D\u0648\u0627\u0644\u064A \u0661\u0660\u0660 \u0645\u062A\u0631",en:"~100 m"},{ar:"\u0667\u066B\u0667\u0663 \u0643\u0645",en:"7.73 km"},{ar:"\u0664\u0665\u066B\u0661\u0666 \u0643\u0645",en:"45.16 km"}]},{k:"cPower",v:[{ar:"\u0623\u0644\u0648\u0627\u062D \u0634\u0645\u0633\u064A\u0629",en:"Solar panels"},{ar:"\u0623\u0644\u0648\u0627\u062D \u0634\u0645\u0633\u064A\u0629",en:"Solar panels"},{ar:"\u0623\u0644\u0648\u0627\u062D \u0634\u0645\u0633\u064A\u0629",en:"Solar panels"}]},{k:"cLanding",v:[{ar:"\u0623\u0643\u064A\u0627\u0633 \u0647\u0648\u0627",en:"Airbags"},{ar:"\u0623\u0643\u064A\u0627\u0633 \u0647\u0648\u0627",en:"Airbags"},{ar:"\u0623\u0643\u064A\u0627\u0633 \u0647\u0648\u0627",en:"Airbags"}]}]};var km=[["NASA \u2014 Mars Exploration Rover: Spirit","https://science.nasa.gov/mission/mer-spirit/"],["NASA \u2014 Mars Exploration Rover: Opportunity","https://science.nasa.gov/mission/mer-opportunity/"],["NASA \u2014 Mars Pathfinder / Sojourner","https://science.nasa.gov/mission/mars-pathfinder/"],["JPL \u2014 NASA\u2019s Spirit Rover Completes Mission on Mars","https://www.jpl.nasa.gov/news/nasas-spirit-rover-completes-mission-on-mars"],["NASA Photojournal PIA05547 \u2014 You are here: Earth as seen from Mars","https://science.nasa.gov/photojournal/you-are-here-earth-as-seen-from-mars/"],["Spaceflight Now \u2014 Thousands of files deleted on Spirit to fix computer trouble (Feb 2004)","https://spaceflightnow.com/mars/mera/040201spirit.html"],["NASA GISS \u2014 Mars24 Sunclock algorithm (Allison & McEwen 2000)","https://www.giss.nasa.gov/tools/mars24/help/algorithm.html"],["NASA 3D Resources \u2014 Mars Exploration Rover model","https://science.nasa.gov/3d-resources/"],["Snopes \u2014 Opportunity\u2019s \u201Cfinal words\u201D fact check","https://www.snopes.com/fact-check/opportunity-rovers-final-words/"],["JPL \u2014 20 Years After Landing: How NASA\u2019s Twin Rovers Changed Mars Science (about 30 bounces)","https://www.jpl.nasa.gov/news/20-years-after-landing-how-nasas-twin-rovers-changed-mars-science/"],["JPL \u2014 Mars Exploration Rover Spirit Mission Status, 4 Jan 2004 (bounced and rolled after impact)","https://www.jpl.nasa.gov/news/mars-exploration-rover-spirit-mission-status-2/"],["NASA \u2014 25 Years Ago: Mars Pathfinder launches (Sojourner drove about 100 m)","https://www.nasa.gov/?p=445143"],["NASA podcast \u201COn a Mission\u201D: Before you can drive, first you have to fly (airbag landings)","https://www.nasa.gov/podcasts/on-a-mission/before-you-can-drive-first-you-have-to-fly-s4e9/"],["Spaceflight Now \u2014 Giant airbags will give rovers\u2019 landings a bounce (entry 5.4 km/s, parachute, 20 m bridle, airbags 8 s before touchdown)","https://spaceflightnow.com/mars/mera/031231landing.html"],["Windows to the Universe (UCAR) \u2014 MER mission events timeline (launch dates, parachute, retro-rockets)","https://windows2universe.org/space_missions/mars/mars_exploration_rover/mission_events.html&edu=high"],["NASA Earth Observatory \u2014 Blue Marble: Next Generation, Reto St\xF6ckli (Earth in the expedition)","https://science.nasa.gov/earth/earth-observatory/blue-marble-next-generation/"],["NASA \u2014 10 years later: Pathfinder and Sojourner (550 rover images)","https://www.nasa.gov/image-article/pathfinder-sojourner-10-years-later/"],["JPL \u2014 Mars Pathfinder / Sojourner (airbag and petal landing reused for later rovers)","https://www.jpl.nasa.gov/missions/mars-pathfinder-sojourner-rover/"],["IEEE Spectrum \u2014 Sojourner: autonomous hazard avoidance and the six-wheel rocker-bogie design","https://spectrum.ieee.org/mars-pathfinder-rover"],["JPL \u2014 Spirit faces circuitous route (silica near Home Plate: hot springs or steam vents)","https://www.jpl.nasa.gov/news/nasas-mars-rover-spirit-faces-circuitous-route/"],["ASU \u2014 Foot-dragging rover finds hot-spring deposits (nearly pure silica)","https://news.asu.edu/content/mars-rover-finds-yellowstone-hot-spring-deposits"],["NASA \u2014 20 Years After Landing (blueberries of hematite formed in acidic water)","https://www.nasa.gov/missions/mer/20-years-after-landing-how-nasas-twin-rovers-changed-mars-science/"],["JPL \u2014 Opportunity: NASA Rover Completes Mars Mission (hole-in-one, driving record)","https://www.jpl.nasa.gov/videos/opportunity-nasa-rover-completes-mars-mission/"],["JPL \u2014 Paydirt at Endeavour Crater (gypsum veins, strongest evidence for water)","https://www.jpl.nasa.gov/news/paydirt-at-8-year-old-mars-rovers-new-landing-site/"],["NASA Science \u2014 Opportunity in depth (Heat Shield Rock iron-nickel meteorite)","https://science.nasa.gov/mission/mer-opportunity/"],["The Planetary Society \u2014 Curiosity found Gale Crater once held a lake","https://www.planetary.org/space-missions/curiosity"],["NASA Science \u2014 Perseverance science: looking for signs of past life","https://science.nasa.gov/mission/mars-2020-perseverance/science/"],["NASA Science \u2014 Mars Sample Return","https://science.nasa.gov/mission/mars-sample-return/"],["NASA \u2014 Mars rover discovered a potential biosignature (2025)","https://www.nasa.gov/news-release/nasa-says-mars-rover-discovered-potential-biosignature-last-year/"],["Solar System Scope \u2014 Mars & Milky Way textures (CC BY 4.0)","https://www.solarsystemscope.com/textures/"]];var hs=i=>document.querySelector(i),$n=i=>String(i).replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]),Uo=(i,e)=>e==="ar"?Number(i).toLocaleString("ar-EG"):Number(i).toLocaleString("en-US");function ou(i){i.hidden=!1,i.offsetWidth,i.classList.add("open")}function lu(i,e){i.classList.remove("open"),setTimeout(()=>{i.classList.contains("open")||(i.hidden=!0)},e)}function Hm({getLang:i,onBadge:e,audio:t,onClose:n,onLegacy:s}){let r=hs("#explore"),a=hs("#explore-body"),o=hs("#explore-title"),l=hs("#game"),c=hs("#game-body"),u=hs("#about"),h=hs("#about-body"),d=hs("#compare"),f=hs("#compare-body"),x=null,y=null;function m(O,I){let U=Om[O],$=U.actual/U.planned,ye=Math.floor($),le=Math.max(1.2,U.planned/U.actual*100),Ye=U.items.map(ie=>`
      <li class="${ie.plan?"plan":""} ${ie.end?"end":""}">
        <span class="d">${$n(ie.date[I])}</span>
        <span class="t">${$n(ie.t[I])}</span>
        ${ie.game?`<button type="button" class="mini" data-act="game">${xe("playGame",I)}</button>`:""}
        ${ie.photo?`<button type="button" class="mini" data-act="photo">${xe("seePhoto",I)}</button>`:""}
      </li>`).join("");return`
      <section class="ex-sec">
        <h3>${xe("myLife",I)}</h3>
        <div class="life" role="img" aria-label="${$n(xe("lifeAria",I).replace("{a}",Uo(U.actual,I)).replace("{p}",Uo(U.planned,I)))}">
          <div class="life-track"><div class="life-fill"></div><div class="life-plan" style="inset-inline-start:${le}%"><i></i><span>${xe("plannedStop",I)}</span></div></div>
          <div class="life-legend"><span>${xe("planned",I)}: <b>${Uo(U.planned,I)}</b> ${U.unit[I]}</span><span>${xe("actual",I)}: <b>${Uo(U.actual,I)}</b> ${U.unit[I]}</span></div>
          <p class="life-x">${xe("timesLonger",I).replace("{n}",Uo(ye,I))}</p>
        </div>
        <ol class="tl">${Ye}</ol>
      </section>`}function p(O,I){return(Bm[O]||[]).map(U=>`
      <section class="ex-sec card ${U.legacy!=null?"legacy":""}" id="card-${U.k}">
        <h3>${$n(U.title[I])}</h3>
        ${U.img?`<figure><img src="${U.img}" width="${U.w}" height="${U.h}" alt="${$n(xe("photoAlt",I))}" loading="lazy" decoding="async"><figcaption>${$n(U.credit)}</figcaption></figure>`:""}
        <p>${$n(U.body[I])}</p>
        ${U.legacy!=null?`<button type="button" class="primary" data-act="legacy" data-at="${U.legacy}">${xe("seeChain",I)}</button>`:""}
      </section>`).join("")}function M(O){return`<section class="ex-sec quiz"><h3>${xe("mythOrFact",O)}</h3>${Ud.map((I,U)=>`
      <div class="q" data-q="${U}">
        <p class="qs">${$n(I.s[O])}</p>
        <div class="qa"><button type="button" data-ans="1">${xe("fact",O)}</button><button type="button" data-ans="0">${xe("myth",O)}</button></div>
        <p class="qw" aria-live="polite"></p>
      </div>`).join("")}</section>`}function C(){if(!x)return;let O=i();o.textContent=x.name,a.innerHTML=m(x.id,O)+p(x.id,O)+(x.id==="opportunity"?M(O):"")+(x.id==="spirit"?`<section class="ex-sec"><h3>${xe("gameTitle",O)}</h3><p>${xe("gameIntro",O)}</p><button type="button" class="primary" data-act="game">${xe("playGame",O)}</button></section>`:"")+`<section class="ex-sec"><h3>${xe("compareTitle",O)}</h3><p>${xe("compareIntro",O)}</p><button type="button" class="primary" data-act="compare">${xe("compareBtn",O)}</button></section>`,requestAnimationFrame(()=>r.querySelector(".life-fill")?.classList.add("go"))}function v(O){x={id:O.id,name:O.data.name},y=document.activeElement,C(),ou(r),a.scrollTop=0,r.querySelector(".ex-close").focus({preventScroll:!0})}function E(){r.hidden||(lu(r,220),y?.focus?.({preventScroll:!0}),n?.())}a.addEventListener("click",O=>{let I=O.target.closest("button");if(I&&(I.dataset.act==="game"&&g(),I.dataset.act==="compare"&&B(),I.dataset.act==="legacy"&&s?.(+I.dataset.at),I.dataset.act==="photo"&&document.getElementById("card-photo")?.scrollIntoView({behavior:"smooth",block:"start"}),I.dataset.ans!=null)){let U=I.closest(".q"),$=Ud[+U.dataset.q],ye=i(),le=I.dataset.ans==="1"===$.answer;U.querySelectorAll("button").forEach(ie=>{ie.disabled=!0}),I.classList.add(le?"right":"wrong");let Ye=U.querySelector(".qw");Ye.textContent=`${le?xe("correct",ye):xe("notQuite",ye)} ${$.why[ye]}`,t.beep(le?2:0)}}),r.querySelector(".ex-close").addEventListener("click",E);let S=0;function T(){let O=i();if(S>=dr.length){c.innerHTML=`<div class="g-done"><div class="badge" aria-hidden="true">\u2605</div><h3>${xe("savedSpirit",O)}</h3><p>${$n(dr[dr.length-1].done[O])}</p><button type="button" class="primary" data-act="close">${xe("back",O)}</button></div>`,e?.("sol18");return}let I=dr[S];c.innerHTML=`
      <div class="g-steps" aria-hidden="true">${dr.map((U,$)=>`<i class="${$<S?"done":$===S?"now":""}"></i>`).join("")}</div>
      <p class="g-s">${$n(I.s[O])}</p>
      <div class="g-opts">${I.options.map((U,$)=>`<button type="button" data-o="${$}">${$n(U.t[O])}</button>`).join("")}</div>
      <p class="g-fb" aria-live="polite"></p>`}function g(){S=0,T(),ou(l),l.querySelector(".g-close").focus({preventScroll:!0})}function b(){lu(l,200),r.querySelector('[data-act="game"]')?.focus({preventScroll:!0})}c.addEventListener("click",O=>{let I=O.target.closest("button");if(!I)return;if(I.dataset.act==="close"){b();return}if(I.dataset.o==null)return;let U=i(),$=dr[S],ye=$.options[+I.dataset.o],le=c.querySelector(".g-fb");ye.ok?(I.classList.add("right"),c.querySelectorAll(".g-opts button").forEach(Ye=>{Ye.disabled=!0}),le.textContent=$.done[U],t.beep(2),setTimeout(()=>{S++,T()},2300)):(I.classList.add("wrong"),I.disabled=!0,le.textContent=ye.why[U],t.beep(0))}),l.querySelector(".g-close").addEventListener("click",b);function P(){let O=i(),I=x?au.rovers.indexOf(x.id):-1;f.innerHTML=`<div class="cmp-wrap"><table class="cmp"><caption class="sr-only">${xe("compareTitle",O)}</caption>
      <thead><tr><td></td>${au.names.map((U,$)=>`<th scope="col" class="${$===I?"me":""}" translate="no">${U}</th>`).join("")}</tr></thead>
      <tbody>${au.rows.map(U=>`<tr><th scope="row">${xe(U.k,O)}</th>${U.v.map(($,ye)=>`<td class="${ye===I?"me":""}">${$n($[O])}</td>`).join("")}</tr>`).join("")}</tbody></table></div>
      <p class="small">${xe("compareNote",O)}</p>`}function B(){P(),ou(d),d.querySelector(".cmp-close").focus({preventScroll:!0})}function A(){lu(d,200),r.querySelector('[data-act="compare"]')?.focus({preventScroll:!0})}d.querySelector(".cmp-close").addEventListener("click",A),d.addEventListener("click",O=>{O.target===d&&A()});let V="project";function w(){let O=i(),I=["project","teacher","sources","ai"],U={project:`<p>${xe("aboutP1",O)}</p><p>${xe("aboutP2",O)}</p><ul>${["aboutL1","aboutL5","aboutL6","aboutL2","aboutL3","aboutL4"].map($=>`<li>${xe($,O)}</li>`).join("")}</ul><p class="team">${xe("teamLine",O)}</p>`,teacher:`<p>${xe("teachP1",O)}</p><ol>${["teach1","teach2","teach3","teach4"].map($=>`<li>${xe($,O)}</li>`).join("")}</ol><p>${xe("teachQ",O)}</p><ul>${["teachQ1","teachQ2","teachQ3","teachQ4"].map($=>`<li>${xe($,O)}</li>`).join("")}</ul>`,sources:`<ul class="src">${km.map(([$,ye])=>`<li><a href="${ye}" target="_blank" rel="noopener">${$n($)}</a></li>`).join("")}</ul><p class="small">${xe("factNote",O)}</p>`,ai:`<p>${xe("aiP1",O)}</p><ul>${["ai1","ai2","ai3","ai4"].map($=>`<li>${xe($,O)}</li>`).join("")}</ul>`};h.innerHTML=`<div class="tabs" role="tablist">${I.map($=>`<button type="button" role="tab" id="tab-${$}" aria-controls="tabpanel" aria-selected="${$===V}" tabindex="${$===V?0:-1}" data-tab="${$}">${xe("tab_"+$,O)}</button>`).join("")}</div><div class="tabpanel" id="tabpanel" role="tabpanel" aria-labelledby="tab-${V}" tabindex="0">${U[V]}</div>`}let N=null;function k(){N=document.activeElement,w(),ou(u),u.querySelector(".ab-close").focus({preventScroll:!0})}function z(){lu(u,200),N?.focus?.({preventScroll:!0})}return h.addEventListener("click",O=>{let I=O.target.closest("[data-tab]");I&&(V=I.dataset.tab,w(),h.querySelector(`[data-tab="${V}"]`)?.focus({preventScroll:!0}))}),h.addEventListener("keydown",O=>{if(!O.target.closest("[role=tab]")||O.key!=="ArrowLeft"&&O.key!=="ArrowRight")return;let I=["project","teacher","sources","ai"],U=document.documentElement.dir==="rtl",$=O.key==="ArrowRight"!==U?1:-1;V=I[(I.indexOf(V)+$+I.length)%I.length],w(),h.querySelector(`[data-tab="${V}"]`)?.focus(),O.preventDefault()}),u.querySelector(".ab-close").addEventListener("click",z),u.addEventListener("click",O=>{O.target===u&&z()}),l.addEventListener("click",O=>{O.target===l&&b()}),window.addEventListener("keydown",O=>{O.key==="Escape"&&(document.querySelector("#legacy:not([hidden]), #fquiz:not([hidden])")||(l.hidden?d.hidden?u.hidden?r.hidden||E():z():A():b()))}),{open:v,close:E,openAbout:k,closeAbout:z,refresh(){r.hidden||C(),u.hidden||w(),l.hidden||T(),d.hidden||P()},get isOpen(){return!r.hidden||!l.hidden||!u.hidden||!d.hidden}}}var cu=i=>document.querySelector(i),fr=i=>String(i).replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]),ds=(i,e)=>e==="ar"?String(i).replace(/\d/g,t=>"\u0660\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669"[t]):String(i);function zm(i){i.hidden=!1,i.offsetWidth,i.classList.add("open")}function va(i,e){i.classList.remove("open"),setTimeout(()=>{i.classList.contains("open")||(i.hidden=!0)},e)}function $M(i){let e=i.map((t,n)=>[t,n]);for(let t=e.length-1;t>0;t--){let n=Math.floor(Math.random()*(t+1));[e[t],e[n]]=[e[n],e[t]]}return e}function Vm({getLang:i,audio:e,onQuizDone:t,onLegacyClosed:n}){let s=cu("#legacy"),r=cu("#legacy-body"),a=cu("#fquiz"),o=cu("#fquiz-body"),l=Do.length,c=0,u="ending",h=null,d=!1;function f(T){let g=i(),b=c===l,B=`<ol class="chain">${[...Do.map(w=>({year:w.year,name:w.name})),{year:"",name:xe("youNode",g)}].map((w,N)=>`
      <li class="${N<c?"done":""} ${N===c?"now":""} ${N===l?"you":""}"><button type="button" class="node" data-go="${N}" ${N===c?'aria-current="step"':""}>
        <svg viewBox="0 0 20 26" aria-hidden="true"><use href="#fp"/></svg><span class="y">${w.year?ds(w.year,g):fr(w.name)}</span>${w.year?`<span class="nm" translate="no"> ${fr(w.name)}</span>`:""}</button></li>`).join("")}</ol>`,A;if(b)A=`<div class="lg-card you" data-k="you">
        <svg class="lg-you" viewBox="0 0 20 26" aria-hidden="true"><use href="#fp"/></svg>
        <h3>${xe("youTitle",g)}</h3><p>${xe("youBody",g)}</p></div>`;else{let w=Do[c],N=Do[c+1],k=w.ended?`${xe("missionEnded",g)} \xB7 ${ds(w.year,g)}`:`${xe("active",g)} \xB7 ${xe("since",g)} ${ds(w.year,g)}`;A=`<div class="lg-card" data-k="${c}">
        <div class="lg-head"><h3 translate="no">${w.name}</h3><span class="lg-tag ${w.ended?"":"live"}">${k}</span></div>
        <div class="lg-block"><h4>${xe("legacyFound",g)}</h4><p>${fr(w.found[g])}</p></div>
        <div class="lg-arrow" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M6 13l6 6 6-6"/></svg></div>
        <div class="lg-block gave"><h4>${xe("legacyGave",g)}${N?` <span class="to" translate="no">\u2192 ${N.name}</span>`:""}</h4><p>${fr(w.gave[g])}</p></div>
        <p class="lg-fact"><span class="pill">${xe("factLabel",g)}</span> ${xe("legacySrc",g)}</p>
      </div>`}let V=b?u==="ending"?`<button type="button" class="primary" data-act="quiz">${xe("toQuiz",g)}</button>`:`<button type="button" class="primary" data-act="close">${xe("back",g)}</button>`:`<button type="button" class="primary" data-act="next">${xe("next",g)}</button>`;r.innerHTML=`${B}<div class="lg-stage" aria-live="polite">${A}</div>
      <div class="lg-nav"><button type="button" class="ghost" data-act="prev" ${c===0?"disabled":""}>${xe("prev",g)}</button>${V}</div>`,T&&r.querySelector(`[data-go="${c}"]`)?.focus({preventScroll:!0})}function x(T,g){c=Math.max(0,Math.min(l,T)),f(g),e.beep(1)}r.addEventListener("click",T=>{let g=T.target.closest("button");if(g){if(g.dataset.go!=null){x(+g.dataset.go,!0);return}g.dataset.act==="next"&&(x(c+1),r.querySelector('[data-act="next"],[data-act="quiz"],[data-act="close"]')?.focus({preventScroll:!0})),g.dataset.act==="prev"&&(x(c-1),(r.querySelector('[data-act="prev"]:not([disabled])')||r.querySelector('[data-act="next"]'))?.focus({preventScroll:!0})),g.dataset.act==="quiz"&&(va(s,200),E()),g.dataset.act==="close"&&m()}}),r.addEventListener("keydown",T=>{if(!T.target.closest(".chain")||T.key!=="ArrowLeft"&&T.key!=="ArrowRight")return;let g=document.documentElement.dir==="rtl";x(c+(T.key==="ArrowRight"!==g?1:-1),!0),T.preventDefault()});function y(T={}){u=T.mode||"ending",c=T.at??0,h=document.activeElement,f(),zm(s),s.querySelector(".lg-close").focus({preventScroll:!0})}function m(){s.hidden||(va(s,200),h?.focus?.({preventScroll:!0}),n?.(u))}s.querySelector(".lg-close").addEventListener("click",m),s.addEventListener("click",T=>{T.target===s&&m()});let p=0,M=0,C=[];function v(){let T=i(),g=Os.length;if(p>=g){let P=M/g,B=P===1?"scoreAll":P>=.6?"scoreGood":"scoreTry";o.innerHTML=`<div class="g-done fq-done">
        <div class="fq-ring" style="--p:${P}" aria-hidden="true"><b>${ds(M,T)}</b><span>/ ${ds(g,T)}</span></div>
        <h3>${xe("scoreLine",T).replace("{n}",ds(M,T)).replace("{t}",ds(g,T))}</h3>
        <p>${xe(B,T)}</p>
        <div class="fq-acts"><button type="button" class="primary" data-act="finish">${xe("leaveFootprint",T)}</button><button type="button" class="ghost" data-act="again">${xe("quizAgain",T)}</button></div></div>`,d||(d=!0,t?.(M,g)),o.querySelector('[data-act="finish"]').focus({preventScroll:!0});return}let b=Os[p];C=$M(b.options),o.innerHTML=`
      <div class="g-steps" aria-hidden="true">${Os.map((P,B)=>`<i class="${B<p?"done":B===p?"now":""}"></i>`).join("")}</div>
      <p class="fq-n">${xe("qOf",T).replace("{n}",ds(p+1,T)).replace("{t}",ds(g,T))}</p>
      <p class="g-s" id="fq-s">${fr(b.s[T])}</p>
      <div class="g-opts" role="group" aria-labelledby="fq-s">${C.map(([P],B)=>`<button type="button" data-o="${B}">${fr(P.t[T])}</button>`).join("")}</div>
      <p class="g-fb" aria-live="polite"></p>
      <div class="fq-next"></div>`}function E(){p=0,M=0,d=!1,v(),zm(a),a.querySelector(".g-opts button")?.focus({preventScroll:!0})}function S(){a.hidden||(va(a,200),d||(d=!0,t?.(null,Os.length)))}return o.addEventListener("click",T=>{let g=T.target.closest("button");if(!g)return;let b=i();if(g.dataset.act==="finish"){va(a,200);return}if(g.dataset.act==="again"){d=!0,p=0,M=0,v(),a.querySelector(".g-opts button")?.focus({preventScroll:!0});return}if(g.dataset.act==="nextq"){p++,v(),(a.querySelector(".g-opts button")||a.querySelector('[data-act="finish"]'))?.focus({preventScroll:!0});return}if(g.dataset.o==null)return;let P=Os[p],[B]=C[+g.dataset.o],A=!!B.ok;A&&M++,o.querySelectorAll(".g-opts button").forEach((w,N)=>{w.disabled=!0,C[N][0].ok&&w.classList.add("right")}),A||g.classList.add("wrong"),o.querySelector(".g-fb").innerHTML=`<b>${A?xe("correct",b):xe("notQuite",b)}</b> ${fr(P.why[b])}`;let V=p===Os.length-1;o.querySelector(".fq-next").innerHTML=`<button type="button" class="primary" data-act="nextq">${xe(V?"seeScore":"nextQ",b)}</button>`,o.querySelector('[data-act="nextq"]').focus({preventScroll:!0}),e.beep(A?2:0)}),a.querySelector(".fq-close").addEventListener("click",S),window.addEventListener("keydown",T=>{T.key==="Escape"&&(a.hidden?s.hidden||m():S())}),{openLegacy:y,closeLegacy:m,openQuiz:E,close(){a.hidden||va(a,200),s.hidden||va(s,200)},refresh(){s.hidden||f(),!a.hidden&&p<Os.length&&!o.querySelector(".g-opts button:disabled")&&v()},get isOpen(){return!s.hidden||!a.hidden}}}var Vi='"Chakra Petch", "Chakra", "Segoe UI", sans-serif',Fo='"IBM Plex Sans Arabic", "Plex Arabic", "Segoe UI", Tahoma, sans-serif',KM='"Lalezar", "IBM Plex Sans Arabic", "Plex Arabic", Tahoma, sans-serif';function Gm(i,e,t,n,s,r){i.save(),i.translate(e,t),i.rotate(s),i.scale(n,n),i.fillStyle=r,i.beginPath(),i.ellipse(0,-18,15,24,0,0,Math.PI*2),i.fill(),i.beginPath(),i.ellipse(0,26,12,14,0,0,Math.PI*2),i.fill(),i.globalCompositeOperation="destination-out",i.lineWidth=2.4;for(let a=-30;a<=-6;a+=7)i.beginPath(),i.moveTo(-12,a),i.lineTo(12,a),i.stroke();for(let a=20;a<=34;a+=6)i.beginPath(),i.moveTo(-9,a),i.lineTo(9,a),i.stroke();i.restore()}function Wm(i,e,t=new Date,n=[],s=null){let o=document.createElement("canvas");o.width=1600,o.height=1100;let l=o.getContext("2d"),c=e==="ar";l.direction=c?"rtl":"ltr";let u=l.createLinearGradient(0,0,0,1100);u.addColorStop(0,"#0b0707"),u.addColorStop(1,"#1a0d09"),l.fillStyle=u,l.fillRect(0,0,1600,1100);for(let g=0;g<260;g++)l.fillStyle=`rgba(255,240,225,${Math.random()*.7})`,l.fillRect(Math.random()*1600,Math.random()*1100*.75,Math.random()*2+.5,Math.random()*2+.5);let h=l.createRadialGradient(1600/2,2600,1500,1600/2,2600,1820);h.addColorStop(0,"#b4552f"),h.addColorStop(.82,"#7a3018"),h.addColorStop(.9,"rgba(255,170,120,0.55)"),h.addColorStop(1,"rgba(255,170,120,0)"),l.fillStyle=h,l.beginPath(),l.arc(1600/2,2600,1820,0,Math.PI*2),l.fill(),l.strokeStyle="rgba(255,214,180,0.55)",l.lineWidth=3,l.strokeRect(46,46,1508,1008),l.strokeStyle="rgba(255,214,180,0.18)",l.lineWidth=1.5,l.strokeRect(62,62,1476,976),l.textAlign="center",l.fillStyle="#f6eee6",l.font=`600 30px ${Vi}`,l.fillStyle="rgba(246,238,230,0.7)",l.fillText("NASA SPACE APPS 2026 \xB7 KAFR EL SHEIKH \xB7 TEAM 3M",1600/2,140),l.font=c?`68px ${KM}`:`600 70px ${Vi}`,l.fillStyle="#ffe2c8",l.fillText(xe("certTitle",e),1600/2,250);let d=112;for(l.font=`600 ${d}px ${c?Fo:Vi}`;l.measureText(i).width>1240&&d>50;)d-=6,l.font=`600 ${d}px ${c?Fo:Vi}`;let f=l.createLinearGradient(0,330,0,450);f.addColorStop(0,"#ffffff"),f.addColorStop(1,"#ffc49a"),l.fillStyle=f,l.shadowColor="rgba(255,150,90,0.45)",l.shadowBlur=30,l.fillText(i,1600/2,430),l.shadowBlur=0,l.strokeStyle="rgba(255,214,180,0.45)",l.lineWidth=2,l.beginPath(),l.moveTo(1600/2-360,470),l.lineTo(1600/2+360,470),l.stroke(),l.font=`400 36px ${c?Fo:'"IBM Plex Sans Arabic", "Plex Arabic", "Segoe UI", sans-serif'}`,l.fillStyle="rgba(246,238,230,0.9)";let x=xe("certLine",e),y=x.split(" "),m=1180,p=Math.max(1,Math.ceil(l.measureText(x).width/m)),M=l.measureText(x).width/p+40,C=[],v="";for(let g of y){let b=v?v+" "+g:g;v&&l.measureText(b).width>M&&C.length<p-1?(C.push(v),v=g):v=b}v&&C.push(v),C.forEach((g,b)=>l.fillText(g,1600/2,545+b*56));let E=715;[["Sojourner",1997],["Spirit",2004],["Opportunity",2004]].forEach(([g,b],P)=>{let B=380+P*230;Gm(l,B,E,1.15,-.25+P*.12,"rgba(255,214,180,0.75)"),l.font=`600 24px ${Vi}`,l.fillStyle="rgba(246,238,230,0.8)",l.fillText(g,B,E+80),l.font=`500 20px ${Vi}`,l.fillStyle="rgba(246,238,230,0.5)",l.fillText(String(b),B,E+108)}),l.save(),l.shadowColor="#7fe6ff",l.shadowBlur=40,Gm(l,1600/2+270,E-10,1.45,.2,"#bff4ff"),l.restore(),l.font=`600 24px ${Vi}`,l.fillStyle="#bff4ff",l.fillText(c?"\u0623\u062B\u0631\u0643":"YOU",1600/2+270,E+80);let S=[];if(n.includes("sol18")&&S.push(c?"\u2605 \u0623\u0646\u0642\u0630 Spirit \u0641\u064A \u064A\u0648\u0645 \u0661\u0668":"\u2605 SAVED SPIRIT ON SOL 18"),s){let g=b=>c?String(b).replace(/\d/g,P=>"\u0660\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669"[P]):String(b);S.push("\u2605 "+xe("certQuiz",e).replace("{n}",g(s.score)).replace("{t}",g(s.total)))}S.length&&(l.font=`600 24px ${c?Fo:Vi}`,l.fillStyle="#ffb36b",l.fillText(S.join("   \xB7   "),1600/2,E+172));let T=t.toLocaleDateString(c?"ar-EG":"en-GB",{year:"numeric",month:"long",day:"numeric"});return l.font=`400 26px ${c?Fo:Vi}`,l.fillStyle="rgba(246,238,230,0.75)",l.fillText(`${T}  \xB7  THE LAST FOOTPRINT`,1600/2,968),l.font=`600 30px ${Vi}`,l.fillStyle="#ffb36b",l.fillText(c?"\u0627\u0644\u0623\u062B\u0631 \u0627\u0644\u062C\u0627\u064A\u2026 \u0628\u062A\u0627\u0639\u0643":"THE NEXT FOOTPRINT IS YOURS",1600/2,1014),o}var li=(i,e,t)=>{let n=Math.min(1,Math.max(0,(t-i)/(e-i)));return n*n*(3-2*n)},ZM=i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2,qm=[];function Xm(i,e=!0){let t=new Image,n=new Yt(t);return e&&(n.colorSpace=yt),t.onload=()=>{n.needsUpdate=!0},i&&(t.src="data:image/jpeg;base64,"+i,qm.push(t.decode().then(()=>{n.needsUpdate=!0}).catch(()=>{}))),n}function JM(){let i=document.createElement("canvas");i.width=i.height=128;let e=i.getContext("2d"),t=e.createRadialGradient(64,64,0,64,64,64);return t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.25,"rgba(255,220,170,0.7)"),t.addColorStop(1,"rgba(255,140,60,0)"),e.fillStyle=t,e.fillRect(0,0,128,128),new Xt(i)}function jM(){let i=document.createElement("canvas");i.width=i.height=64;let e=i.getContext("2d"),t=e.createRadialGradient(32,32,0,32,32,32);return t.addColorStop(0,"rgba(255,255,255,0.9)"),t.addColorStop(.45,"rgba(255,255,255,0.45)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,64,64),new Xt(i)}var ya=null;function QM(){if(ya)return ya;let i=document.createElement("canvas");i.width=512,i.height=128;let e=i.getContext("2d");e.fillStyle="#ebe7df",e.fillRect(0,0,512,128);for(let t=0;t<16;t++)e.fillStyle=`rgba(0,0,0,${.025+t%3*.015})`,e.fillRect(t*32,0,32,128);e.strokeStyle="rgba(70,60,50,0.35)",e.lineWidth=2;for(let t=0;t<=16;t++)e.beginPath(),e.moveTo(t*32,0),e.lineTo(t*32,128),e.stroke();for(let t of[38,86])e.beginPath(),e.moveTo(0,t),e.lineTo(512,t),e.stroke();e.fillStyle="rgba(60,50,40,0.5)";for(let t=0;t<16;t++)for(let n of[38,86])e.beginPath(),e.arc(t*32+16,n,2,0,Math.PI*2),e.fill();return ya=new Xt(i),ya.colorSpace=yt,ya.wrapS=Dn,ya}function eS(){let i=document.createElement("canvas");i.width=i.height=512;let e=i.getContext("2d");e.fillStyle="#b9bcc2",e.fillRect(0,0,512,512);let t=256,n=92;for(let r=0;r<7;r++){let a=n+r*23,o=a+21,l=28+r*6;for(let c=0;c<l;c++){let u=c/l*Math.PI*2+.004,h=(c+1)/l*Math.PI*2-.004,d=34+(c*7+r*11)%7*4;e.fillStyle=`rgb(${d-14},${d+4},${d+58})`,e.beginPath(),e.arc(t,t,o,u,h),e.arc(t,t,a,h,u,!0),e.closePath(),e.fill()}}e.fillStyle="#7d8189",e.beginPath(),e.arc(t,t,n-6,0,Math.PI*2),e.fill();let s=new Xt(i);return s.colorSpace=yt,s}function Fd(i){let e=new Ke,t=new $e({color:"#ffffff",map:QM(),roughness:.55,metalness:.15,envMap:i||null,envMapIntensity:.6}),n=new $e({color:"#9a6440",roughness:.8,metalness:.05,emissive:new ce("#ff6a1a"),emissiveIntensity:0}),s=new $e({color:"#2b2f36",roughness:.6,metalness:.5}),r=new ue(new jr(1,.42,48,1,!0),n);r.position.y=.21,r.material.side=zt,e.add(r);let a=new ue(new ts(1,48),n);a.rotation.x=Math.PI/2,e.add(a);let o=new ue(new Tt(.98,.42,.95,48,1,!0),t);o.position.y=-.475,o.material.side=zt,e.add(o);let l=new ue(new Tt(.42,.42,.06,32),t);l.position.y=-.98,e.add(l);let c=new ue(new Wn(.99,.03,8,64),s);return c.rotation.x=Math.PI/2,e.add(c),{group:e,shield:r,shieldMat:n,white:t,dark:s}}function Ym(i,{marsMap:e,quality:t,env:n,reduced:s}){let r=new ti,a=new Wt(40,innerWidth/innerHeight,.002,400);r.add(a);let o=new L(1,.35,.55).normalize(),l=t.mobile?1400:2400,c=new Float32Array(l*3);for(let te=0;te<l;te++){let he=Math.random()*2-1,pe=Math.random()*Math.PI*2,ve=Math.sqrt(1-he*he),ge=150;c[te*3]=Math.cos(pe)*ve*ge,c[te*3+1]=he*ge,c[te*3+2]=Math.sin(pe)*ve*ge}let u=new tt;u.setAttribute("position",new ht(c,3));let h=new wn(u,new ii({color:"#cfd8ff",size:1.4*i.getPixelRatio(),sizeAttenuation:!1,transparent:!0,opacity:.85,depthWrite:!1}));r.add(h);let d=Xm(window.EARTH_DAY_B64),f=Xm(window.EARTH_NIGHT_B64);d.anisotropy=Math.min(8,i.capabilities.getMaxAnisotropy());let x=new xt({uniforms:{uDay:{value:d},uNight:{value:f},uSun:{value:o}},vertexShader:`varying vec2 vUv; varying vec3 vN; varying vec3 vW;
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
      }`}),y=At.degToRad(28.5),m=-80.6,p=new Ke,M=new Ke,C=new ue(new Ft(1,t.mobile?96:128,t.mobile?48:64),x);M.add(C),p.add(M),r.add(p);{let te=At.degToRad(m+180),he=-Math.cos(te)*Math.cos(y),pe=Math.sin(te)*Math.cos(y);M.rotation.y=-Math.atan2(he,pe),p.rotation.x=y}let v=new ue(new Ft(1.025,64,32),new xt({transparent:!0,depthWrite:!1,side:Ht,blending:Et,uniforms:{uSun:{value:o},uC:{value:new ce(.35,.6,1)}},vertexShader:"varying vec3 vN; varying vec3 vW; void main(){ vN = normalize(mat3(modelMatrix) * normal); vec4 w = modelMatrix * vec4(position,1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }",fragmentShader:`uniform vec3 uSun; uniform vec3 uC; varying vec3 vN; varying vec3 vW;
      void main(){ vec3 V = normalize(cameraPosition - vW); float rim = pow(1.0 - abs(dot(-vN, V)), 2.6);
        float day = 0.15 + 0.85 * smoothstep(-0.3, 0.5, dot(normalize(vN), uSun)); gl_FragColor = vec4(uC * rim * day * 1.4, rim * day); }`}));r.add(v);let E=.53,S=new L(26,5,62),T=new ue(new Ft(E,96,48),new $e({map:e,roughness:1,metalness:0}));T.position.copy(S),T.rotation.y=2.6,r.add(T);let g=v.clone();g.material=v.material.clone(),g.material.uniforms.uC.value=new ce(.95,.55,.35);let b=new L(-.55,.5,-.67).normalize();g.material.uniforms.uSun={value:b},g.scale.setScalar(E),g.position.copy(S),r.add(g);let P=new si("#fff3e6",3);P.position.copy(b).multiplyScalar(50),r.add(P),r.add(new tr("#8a90b0",.85));let B=JM(),A=new un(new nn({map:B,color:new ce(3,2.6,2.1),blending:Et,depthWrite:!1,transparent:!0}));A.position.copy(o).multiplyScalar(140),A.scale.setScalar(16),r.add(A);let V=Fd(n),w=new Ke;w.add(V.group);let N=new Ke;{let te=new $e({map:eS(),roughness:.28,metalness:.55,emissive:"#0a1430",emissiveIntensity:.25,envMap:n||null,envMapIntensity:.9}),he=new $e({color:"#c9ccd2",roughness:.35,metalness:.7,envMap:n||null,envMapIntensity:.8}),pe=new ue(new Tt(1.32,1.32,.16,64),[he,V.dark,te]);pe.position.y=-1.1,N.add(pe);let ve=new ue(new Tt(.03,.03,.5,8),V.dark);ve.position.y=-1.42,N.add(ve);let ge=new ue(new jr(.22,.12,24,1,!0),V.white);ge.position.y=-1.66,ge.material.side=zt,N.add(ge)}w.add(N),w.scale.setScalar(.012),r.add(w);let k=new un(new nn({map:B,color:new ce(4,2.6,1.2),blending:Et,depthWrite:!1,transparent:!0,opacity:0}));r.add(k);let z=new ue(new Ft(1,32,16,0,Math.PI*2,0,Math.PI/2),new xt({transparent:!0,depthWrite:!1,blending:Et,side:zt,uniforms:{uK:{value:0},uT:{value:0}},vertexShader:"varying vec3 vP; void main(){ vP = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`uniform float uK, uT; varying vec3 vP;
      void main(){ float h = vP.y; float flick = 0.75 + 0.25 * sin(uT * 40.0 + vP.x * 20.0) * sin(uT * 31.0 + vP.z * 17.0);
        float a = smoothstep(0.0, 1.0, h) * uK * flick; vec3 c = mix(vec3(1.0,0.35,0.08), vec3(1.0,0.85,0.55), h) * 3.0;
        gl_FragColor = vec4(c * a, a); }`}));z.scale.set(1.25,.9,1.25),z.position.y=.32,V.group.add(z);let O=jM(),I=t.mobile?48:80,U=[];for(let te=0;te<I;te++){let he=new un(new nn({map:O,color:"#f4ece4",transparent:!0,opacity:0,depthWrite:!1}));he.visible=!1,r.add(he),U.push({sp:he,life:1,max:1,size:.02,vel:new L})}let $=0,ye=0;function le(te,he,pe,ve,ge,be){let Ve=U[$];$=($+1)%I,Ve.sp.position.copy(te),Ve.size=he,Ve.life=0,Ve.max=pe,Ve.vel.set(ve,ge,be),Ve.sp.visible=!0}function Ye(te){for(let he of U){if(!he.sp.visible)continue;if(he.life+=te,he.life>=he.max){he.sp.visible=!1;continue}let pe=he.life/he.max;he.sp.position.addScaledVector(he.vel,te),he.sp.scale.setScalar(he.size*(.6+2.2*Math.sqrt(pe))),he.sp.material.opacity=.55*Math.min(1,he.life*6)*(1-pe)}}let ie=9,Pe=[];for(let te=0;te<ie;te++){let he=new un(new nn({map:B,color:new ce(3.2,1.5-te*.1,.45),blending:Et,depthWrite:!1,transparent:!0,opacity:0}));r.add(he),Pe.push(he)}let j=80,Q=new Float32Array(j*3),Se=new tt;Se.setAttribute("position",new ht(Q,3));let se=new Gn(Se,new ni({color:new ce(2.4,1.6,.9),transparent:!0,opacity:.9,blending:Et,depthWrite:!1}));se.frustumCulled=!1,se.visible=!1,r.add(se);let fe=0,_e=new L(0,0,1),Ue=new L().subVectors(_e,S).normalize(),Ge=S.clone().addScaledVector(Ue,E*1.9).add(new L(0,E*.35,0)),Xe=new L(2.2,1.6,8),st=new L(30,12,40),Be=new Qa(_e.clone().multiplyScalar(1.004),Xe,st,Ge),pt=S.clone().add(new L(.05,E*.55,-0)).addScaledVector(Ue,E*.9),oe={phase:"idle",t:0,charge:0,heat:0,k:0,shake:0,onEvent:null,fired:{}},it=new L,ot=new L,gt=new L(0,1,0),q=new L,jt=new Pn,dt=te=>{oe.fired[te]||(oe.fired[te]=!0,oe.onEvent?.(te))};function D(te){jt.setFromUnitVectors(gt,ot.copy(te).normalize()),w.quaternion.slerp(jt,.12)}function _(te){oe.onEvent=te,oe.fired={},oe.phase="pad",oe.t=0,oe.charge=0,oe.heat=0,oe.k=0,N.visible=!0,N.position.set(0,0,0),N.rotation.set(0,0,0),z.material.uniforms.uK.value=0,V.shieldMat.emissiveIntensity=0,k.material.opacity=0,se.visible=!1,fe=0,U.forEach(he=>{he.sp.visible=!1}),Pe.forEach(he=>{he.material.opacity=0}),w.position.copy(Be.getPoint(0)),w.quaternion.setFromUnitVectors(gt,_e),K()}function H(){oe.phase==="pad"&&(oe.phase="launch",oe.t=0)}function G(){oe.phase==="entry"&&(oe.phase="plunge",oe.t=0)}function K(){a.aspect=innerWidth/innerHeight,a.fov=innerWidth<innerHeight*.95?55:40,a.updateProjectionMatrix()}let re=new L(.9,.35,3.6),me=new L(0,.15,0);function Y(te,he){oe.t+=te,h.position.copy(a.position),M.rotation.y+=te*.004,z.material.uniforms.uT.value=he;let pe=innerWidth<innerHeight*.95;if(oe.phase!=="pad"&&oe.phase!=="launch"&&U.forEach(ge=>{ge.sp.visible&&(ge.life=Math.max(ge.life,ge.max-.5)+te*2)}),Ye(te),oe.phase==="entry"||oe.phase==="plunge"||Pe.forEach(ge=>{ge.material.opacity=Math.max(0,ge.material.opacity-te*2)}),oe.phase==="pad")for(re.set(pe?.3:.62,pe?-.05:.22,pe?3:2.25),me.set(pe?.05:.3,pe?.3:.12,.45),k.position.copy(w.position),k.scale.setScalar(.025+oe.charge*.09),k.material.opacity=oe.charge*(.8+Math.random()*.2),ye+=te*oe.charge*26;ye>1;){ye--;let ge=Math.random()*Math.PI*2;it.copy(w.position).multiplyScalar(.999),le(it,.03+Math.random()*.02,1.6+Math.random(),Math.cos(ge)*.02,Math.sin(ge)*.02,.006)}if(oe.phase==="launch"){let ge=li(0,5.5,oe.t);oe.k=.06*ge*ge,w.position.copy(Be.getPoint(oe.k)),D(Be.getTangent(Math.max(5e-4,oe.k))),k.position.copy(w.position).addScaledVector(Be.getTangent(Math.max(5e-4,oe.k)),-.015),k.scale.setScalar(.05+.04*Math.random()+ge*.05),k.material.opacity=1-li(4.2,5.5,oe.t),se.visible=!0,fe<j&&fe++;for(let be=j-1;be>0;be--)Q[be*3]=Q[(be-1)*3],Q[be*3+1]=Q[(be-1)*3+1],Q[be*3+2]=Q[(be-1)*3+2];Q[0]=w.position.x,Q[1]=w.position.y,Q[2]=w.position.z;for(let be=fe;be<j;be++)Q[be*3]=Q[0],Q[be*3+1]=Q[1],Q[be*3+2]=Q[2];for(Se.attributes.position.needsUpdate=!0,Se.setDrawRange(0,fe),se.material.opacity=.9*(1-li(3.5,5.5,oe.t)),ye+=te*40*(1-li(3.8,5.2,oe.t));ye>1;)ye--,le(w.position,.035+ge*.07,2.6+Math.random()*.8,(Math.random()-.5)*.01,(Math.random()-.5)*.01,(Math.random()-.5)*.01);re.lerp(it.set(pe?.6:1.6,pe?.4:.8,pe?5.6:4.4),Math.min(1,te*.45*li(.6,2.5,oe.t))),me.lerp(w.position,Math.min(1,te*1.5)),oe.t>5.6&&(oe.phase="cruise",oe.t=0,se.visible=!1,dt("cruise"))}if(oe.phase==="cruise"){let be=ZM(Math.min(1,oe.t/22));oe.k=.06+.92*be,w.position.copy(Be.getPoint(oe.k));let Ve=Be.getTangent(oe.k);D(Ve);let W=li(.35,.7,be),Me=it.crossVectors(Ve,gt).normalize(),ae=ot.copy(Ve).multiplyScalar(.17).addScaledVector(Me,.22).addScaledVector(gt,.08),Ee=new L().copy(Ve).multiplyScalar(-.27).addScaledVector(Me,-.1).addScaledVector(gt,.07);ae.lerp(Ee,W),re.copy(w.position).add(ae),me.copy(w.position),be>.3&&dt("mid"),be>.72&&dt("marsAhead"),oe.t>=22&&(oe.phase="approach",oe.t=0,dt("approach"))}if(oe.phase==="approach"){let ge=Be.getTangent(.98);w.position.copy(Be.getPoint(.98)).addScaledVector(ge,oe.t*.006),D(it.subVectors(S,w.position)),N.position.y=-li(.6,3.5,oe.t)*3.5,N.rotation.x=li(.6,3.5,oe.t)*.8,N.visible=oe.t<3.4;let be=it.crossVectors(ge,gt).normalize();re.lerp(ot.copy(w.position).addScaledVector(ge,-.2).addScaledVector(be,-.1).addScaledVector(gt,.07),Math.min(1,te*2)),me.lerp(it.copy(w.position).lerp(S,.08),Math.min(1,te*2)),oe.t>3.6&&(oe.phase="entry",oe.t=0,oe.heat=0,dt("entry"))}if(oe.phase==="entry"||oe.phase==="plunge"){let ge=oe.phase==="plunge"?1:oe.heat,be=Be.getPoint(.98),Ve=oe.phase==="plunge"?.35+li(0,2.2,oe.t)*.65:.35*li(0,1,oe.heat);w.position.lerpVectors(be,pt,Ve),D(it.subVectors(pt,be));let W=oe.phase==="plunge"?.7+li(0,1.5,oe.t)*.6:.15+oe.heat*.6;z.material.uniforms.uK.value=W,V.shieldMat.emissiveIntensity=W*1.6;let Me=it.subVectors(pt,be).normalize();for(let Ee=0;Ee<ie;Ee++){let we=Pe[Ee],de=Ee/ie;we.position.copy(w.position).addScaledVector(Me,-(.004+Ee*.0042)),we.scale.setScalar(.026*(1-de*.65)*(.9+.2*Math.random())),we.material.opacity=Math.min(1,W)*(1-de)*.85}let ae=ot.crossVectors(Me,gt).normalize();re.lerp(new L().copy(w.position).addScaledVector(Me,-.15).addScaledVector(ae,-.09).addScaledVector(gt,.06),Math.min(1,te*3)),me.lerp(new L().copy(w.position).addScaledVector(Me,.05),Math.min(1,te*3)),oe.shake=W*.0015+(oe.phase==="plunge"?li(0,2,oe.t)*.002:0),oe.phase==="plunge"&&oe.t>2.3&&dt("plunged")}a.position.copy(re),oe.shake>0&&!s&&a.position.add(it.set((Math.random()-.5)*oe.shake,(Math.random()-.5)*oe.shake,0)),q.copy(me),a.lookAt(q)}function ne(){let te=oe.phase==="pad"||oe.phase==="launch"?0:Math.min(1,(oe.k-.06)/.92);return{days:Math.round(te*208),mkm:Math.round(te*487),heat:oe.heat}}return{scene:r,camera:a,update:Y,start:_,launch:H,enterOk:G,resize:K,hud:ne,craft:w,ready:Promise.all(qm),get phase(){return oe.phase},set charge(te){oe.charge=te},set heat(te){oe.heat=te},get heat(){return oe.heat}}}var Bs=(i,e,t)=>{let n=Math.min(1,Math.max(0,(t-i)/(e-i)));return n*n*(3-2*n)};function tS(){let i=document.createElement("canvas");i.width=i.height=64;let e=i.getContext("2d"),t=e.createRadialGradient(32,32,0,32,32,32);return t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.3,"rgba(255,210,150,0.7)"),t.addColorStop(1,"rgba(255,120,40,0)"),e.fillStyle=t,e.fillRect(0,0,64,64),new Xt(i)}var Ma={chute:[11.5,8.5],bags:[10,6]};function nS(){let i=document.createElement("canvas");i.width=i.height=256;let e=i.getContext("2d");e.fillStyle="#cfcac0",e.fillRect(0,0,256,256),e.strokeStyle="rgba(60,55,50,0.4)",e.lineWidth=2;for(let n=1;n<6;n++)e.beginPath(),e.moveTo(0,n*42),e.lineTo(256,n*42),e.stroke();for(let n=1;n<6;n++)e.beginPath(),e.moveTo(n*42,0),e.lineTo(n*42,256),e.stroke();e.fillStyle="rgba(0,0,0,0.06)";for(let n=0;n<18;n++)e.fillRect(Math.random()*256,Math.random()*256,30,20);e.fillStyle="#c9a24e",e.fillRect(0,0,256,12);let t=new Xt(i);return t.colorSpace=yt,t}function $m(i,{rover:e=null,env:t=null}={}){let n=new Ke;n.visible=!1,i.add(n);let s=tS(),r=Fd(null),a=new Ke;a.add(r.group),r.group.rotation.x=Math.PI,r.group.scale.setScalar(1.35),n.add(a);let o=r.group.children.filter(ie=>ie.material===r.shieldMat);o.forEach(ie=>{ie.userData.y0=ie.position.y});let l=new Ke;a.add(l);{let ie=new Ft(1,32,10,0,Math.PI*2,0,Math.PI*.42),Pe=new Float32Array(ie.attributes.position.count*3),j=ie.attributes.position,Q=new ce("#f2efe8"),Se=new ce("#e0782f");for(let Ue=0;Ue<j.count;Ue++){let Xe=Math.floor((Math.atan2(j.getZ(Ue),j.getX(Ue))+Math.PI)/(Math.PI*2)*16)%2?Q:Se;Pe.set([Xe.r,Xe.g,Xe.b],Ue*3)}ie.setAttribute("color",new ht(Pe,3));let se=new ue(ie,new $e({vertexColors:!0,roughness:.85,side:zt}));se.scale.set(7.5,4.2,7.5),se.position.y=20,l.add(se);let fe=[];for(let Ue=0;Ue<16;Ue++){let Ge=Ue/16*Math.PI*2;fe.push(Math.cos(Ge)*7.5*Math.sin(Math.PI*.42),20+4.2*Math.cos(Math.PI*.42),Math.sin(Ge)*7.5*Math.sin(Math.PI*.42),0,1.6,0)}let _e=new tt;_e.setAttribute("position",new et(fe,3)),l.add(new Qs(_e,new ni({color:"#d9d2c6",transparent:!0,opacity:.7}))),l.userData.canopy=se}l.scale.setScalar(.001),l.visible=!1;let c=new Ke;n.add(c);let u=nS(),h=new $e({map:u,roughness:.7,metalness:.2,side:zt,envMap:t,envMapIntensity:.4}),d=new $e({map:u,color:"#a9a49c",roughness:.7,metalness:.25,side:zt,envMap:t,envMapIntensity:.4}),f=1.15,x=f*Math.sqrt(3)/2,y=ie=>{let Pe=new tt;return Pe.setAttribute("position",new et([-f/2,0,0,f/2,0,0,0,ie,0],3)),Pe.setAttribute("uv",new et([0,0,1,0,.5,1],2)),Pe.computeVertexNormals(),Pe},m=new ue(y(x),d);m.rotation.x=-Math.PI/2,m.position.z=x/3,c.add(m);let p=[],M=-Math.acos(1/3)+Math.PI/2;for(let ie=0;ie<3;ie++){let Pe=new Ke;Pe.rotation.y=ie/3*Math.PI*2;let j=new Ke;j.position.z=x/3,Pe.add(j);let Q=new ue(y(x),h);j.add(Q),j.rotation.x=-M,p.push(j),c.add(Pe)}c.position.y=.05;let C=null;if(e){C=new Ke;let ie=e.clone(!0);ie.traverse(se=>{se.isMesh&&(se.material=Array.isArray(se.material)?se.material.map(fe=>fe.clone()):se.material.clone(),[se.material].flat().forEach(fe=>{fe.isMeshStandardMaterial&&(fe.envMap=t,fe.envMapIntensity=.5)}),se.castShadow=!1,se.receiveShadow=!1)});let Pe=new Ln().setFromObject(ie),j=Pe.getSize(new L),Q=Pe.getCenter(new L),Se=.78/Math.max(j.x,j.z);ie.scale.setScalar(Se),ie.position.set(-Q.x*Se,-Pe.min.y*Se,-Q.z*Se),C.add(ie),C.position.set(0,.012,0),C.visible=!1,c.add(C)}let v=(()=>{let ie=[],j=new _i(1,1).attributes.position,Q=new Set,Se=new L;for(let se=0;se<j.count;se++){Se.fromBufferAttribute(j,se);let fe=Se.toArray().map(Ue=>Ue.toFixed(2)).join();if(Q.has(fe))continue;Q.add(fe);let _e=new Ft(.62,14,10);_e.translate(Se.x*1.05,Se.y*1.05,Se.z*1.05),ie.push(_e)}return Qc(ie)})(),E=new ue(v,new $e({color:"#e7dcc8",roughness:.92,metalness:0}));E.scale.setScalar(.001),E.visible=!1,E.position.y=.45,c.add(E);let S=new tt;S.setAttribute("position",new et([0,0,0,0,0,0],3));let T=new Gn(S,new ni({color:"#e8e2d8"}));T.frustumCulled=!1,n.add(T);let g=[0,1,2].map(ie=>{let Pe=new un(new nn({map:s,color:new ce(4,2.4,1),blending:Et,depthWrite:!1,transparent:!0,opacity:0})),j=ie/3*Math.PI*2;return Pe.position.set(Math.cos(j)*.6,-.5,Math.sin(j)*.6),Pe.scale.setScalar(1.6),a.add(Pe),Pe}),b=new un(new nn({map:s,color:new ce(.9,.55,.35),transparent:!0,opacity:0,depthWrite:!1}));n.add(b),[a,c,l,E].forEach(ie=>ie.traverse(Pe=>{Pe.isMesh&&(Pe.castShadow=!1,Pe.receiveShadow=!1)}));let P=new L(1.2,0,-5.5),B=new L(-1.5,0,1),A={phase:"idle",t:0,alt:16,speed:1600,tg:16,onEvent:null,fired:{},chuteK:0,bagsK:0,vel:new L,bounces:0},V=ie=>{A.onEvent?.(ie)},w=ie=>{A.fired[ie]||(A.fired[ie]=!0,V(ie))},N=new L,k=new L,z=new L,O=new L;function I(){A.fired={},A.alt=16,A.speed=1600,A.tg=16,A.chuteK=0,A.bagsK=0,A.bounces=0,l.visible=!1,l.scale.setScalar(.001),E.visible=!1,E.scale.setScalar(.001),o.forEach(ie=>{ie.visible=!0,ie.position.y=ie.userData.y0}),r.shieldMat.emissiveIntensity=.9,a.visible=!0,a.rotation.set(0,0,0),g.forEach(ie=>{ie.material.opacity=0}),p.forEach(ie=>{ie.rotation.x=-M}),c.visible=!1,T.visible=!1,b.material.opacity=0,C&&(C.visible=!1,C.scale.set(1,.72,1))}function U(ie){A.onEvent=ie,I(),A.phase="fall",A.t=0,n.visible=!0}function $(){A.phase="idle",n.visible=!1}function ye(){return A.phase==="fall"?A.alt>Ma.chute[0]?"early":(A.phase="chute",A.t=0,l.visible=!0,V("chuteOk"),"ok"):A.phase==="drop"&&!E.visible?A.tg>Ma.bags[0]?"early":(E.visible=!0,A.bagsT=0,V("bagsOk"),"ok"):"none"}let le=ie=>22+ie*8;function Ye(ie,Pe,j){if(A.phase==="idle")return;A.t+=ie;let Q=Ds(P.x,P.z),Se=Math.sin(Pe*1.3)*.05;if(A.phase==="fall"&&(A.alt=Math.max(0,A.alt-ie*.55),A.speed=1600,r.shieldMat.emissiveIntensity=Math.max(0,.9-A.t*.12),a.position.set(P.x+A.alt*2.2,Q+le(A.alt),P.z-A.alt*1.2),a.rotation.z=Math.sin(Pe*2.1)*.06,a.rotation.x=Math.sin(Pe*1.7)*.05,A.alt<=Ma.chute[0]&&w("chuteWindow"),A.alt<Ma.chute[1]&&(A.alt=14.5,A.fired.chuteWindow=!1,V("chuteLate")),N.copy(a.position).add(z.set(8,3.5,13)),k.copy(a.position).add(z.set(0,-2.2,0))),A.phase==="chute"){A.chuteK=Math.min(1,A.t/.7);let se=A.chuteK<1?A.chuteK*(1.15-.15*A.chuteK):1;l.scale.setScalar(Math.max(.001,se)),l.userData.canopy.scale.set(7.5*(.6+.4*se),4.2,7.5*(.6+.4*se)),A.speed=1600-1300*Bs(0,3,A.t),A.alt=Math.max(.3,A.alt-ie*(.55-.4*Bs(0,3,A.t))),a.position.set(P.x+A.alt*2.2,Q+le(A.alt),P.z-A.alt*1.2),a.rotation.z=Se,a.rotation.x=Math.sin(Pe*1.1)*.04;let fe=Bs(3.2,5.5,A.t);o.forEach(Ue=>{Ue.position.y=Ue.userData.y0+fe*9,Ue.visible=fe<.98}),A.t>3.2&&w("shieldOff");let _e=Bs(5,7,A.t);c.visible=A.t>5,T.visible=c.visible,c.position.copy(a.position).add(z.set(0,-1.2-_e*18,0)),A.t>5&&w("bridle"),N.copy(a.position).add(z.set(20,8-_e*16,32)),k.copy(a.position).add(z.set(0,11-_e*20,0)),A.t>8&&(A.phase="drop",A.t=0,A.tg=16,V("drop"))}if(A.phase==="drop"){A.tg=Math.max(0,A.tg-ie*1.35),A.speed=300,A.alt=A.tg*.083;let se=Q+2.6+A.tg*4.2;c.position.set(P.x+A.tg*.35,se,P.z-A.tg*.2),a.position.copy(c.position).add(z.set(0,19.2,0)),a.rotation.z=Se*.6,E.visible&&(A.bagsT+=ie,A.bagsK=Math.min(1,A.bagsT/.5),E.scale.setScalar(Math.max(.001,A.bagsK*(1.12-.12*A.bagsK)))),A.tg<=Ma.bags[0]&&w("bagsWindow"),!E.visible&&A.tg<Ma.bags[1]&&(A.tg=16,A.fired.bagsWindow=!1,V("bagsLate"));let fe=E.visible&&A.tg<1.6;g.forEach(_e=>{_e.material.opacity=fe?.8+Math.random()*.2:0,_e.scale.setScalar(1.4+Math.random()*.6)}),fe&&w("rockets"),N.copy(c.position).add(z.set(10,3,17)),k.copy(c.position).add(z.set(0,1.5,0)),E.visible&&A.tg<=.5&&(A.phase="bounce",A.t=0,w("cut"),A.vel.set(-1.2,-6,3),O.set(3,7,-2))}if(A.phase==="bounce"){a.position.addScaledVector(O,ie),O.y-=ie*.8,a.visible=A.t<6,g.forEach(fe=>{fe.material.opacity=Math.max(0,fe.material.opacity-ie*3)});let se=Math.ceil(ie/(1/120));for(let fe=0;fe<se;fe++){let _e=ie/se;A.vel.y-=9*_e,c.position.addScaledVector(A.vel,_e);let Ue=Ds(c.position.x,c.position.z)+1.25;c.position.y<Ue&&(c.position.y=Ue,A.vel.y<-1.2?(A.vel.y=-A.vel.y*.58,A.vel.x*=.82,A.vel.z*=.82,A.bounces++,b.position.set(c.position.x,Ue-1,c.position.z),b.material.opacity=Math.min(.7,Math.abs(A.vel.y)*.15),b.scale.setScalar(3.5),V("bounce")):(A.vel.y=0,A.vel.x*=Math.pow(.15,_e),A.vel.z*=Math.pow(.15,_e)))}c.position.x+=(B.x-c.position.x)*ie*.08,c.position.z+=(B.z-c.position.z)*ie*.08,c.rotation.x+=A.vel.z*ie*.5,c.rotation.z-=A.vel.x*ie*.5,b.material.opacity=Math.max(0,b.material.opacity-ie*.8),b.scale.multiplyScalar(1+ie*.8),A.speed=Math.round(A.vel.length()*3.6*3),A.alt=0,A.tg=0,N.lerp(z.copy(c.position).add(new L(6,2.5,10)),Math.min(1,ie*2)),k.lerp(c.position,Math.min(1,ie*3)),A.t>5&&A.vel.length()<.4&&(A.phase="open",A.t=0,w("rest"))}if(A.phase==="open"){let se=Bs(0,1.6,A.t);E.scale.set(1-se*.75,1-se*.9,1-se*.75),E.position.y=.45-se*.45,c.rotation.x*=Math.pow(.02,ie),c.rotation.z*=Math.pow(.02,ie);let fe=Ds(c.position.x,c.position.z);c.position.y+=(fe+.25-c.position.y)*Math.min(1,ie*3);let _e=Bs(1.4,3.4,A.t);if(p.forEach(Ue=>{Ue.rotation.x=At.lerp(-M,Math.PI/2-.12,_e)}),E.visible=se<.98,C&&(C.visible=_e>.05,C.scale.y=.72+.28*Bs(3,4.2,A.t)),N.lerp(z.copy(c.position).add(new L(3.2,2.2,5.5)),Math.min(1,ie*1.5)),k.lerp(c.position,Math.min(1,ie*2)),A.t>3.8&&w("opened"),C&&A.t>3.4){let Ue=Bs(3.4,6,A.t);N.lerp(z.copy(c.position).add(new L(1.4,.95,2.3)),Math.min(1,ie*.9*Ue)),k.lerp(z.copy(c.position).add(new L(0,.25,0)),Math.min(1,ie*Ue))}}if(T.visible){let se=S.attributes.position;se.setXYZ(0,a.position.x,a.position.y-.4,a.position.z),se.setXYZ(1,c.position.x,c.position.y+1.2,c.position.z),se.needsUpdate=!0,(A.phase==="bounce"||A.phase==="open")&&(T.visible=!1)}j.position.copy(N),j.lookAt(k)}return{root:n,start:U,stop:$,update:Ye,press:ye,get phase(){return A.phase},hud(){return{alt:A.alt,speed:Math.round(A.speed),tg:A.tg,bounces:A.bounces}}}}var uu=class extends ti{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let e=new _n;e.deleteAttribute("uv");let t=new $e({side:Ht}),n=new $e,s=new vi(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new ue(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new es(e,n,6),o=new It;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let l=new ue(e,Sa(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new ue(e,Sa(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let u=new ue(e,Sa(17));u.position.set(14.904,12.198,-1.832),u.scale.set(.15,4.265,6.331),this.add(u);let h=new ue(e,Sa(43));h.position.set(-.462,8.89,14.52),h.scale.set(4.38,5.441,.088),this.add(h);let d=new ue(e,Sa(20));d.position.set(3.235,11.486,-12.541),d.scale.set(2.5,2,.1),this.add(d);let f=new ue(e,Sa(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function Sa(i){return new eo({color:0,emissive:16777215,emissiveIntensity:i})}function Km(i){let e=new Ls(i),t=e.fromScene(new uu,.04).texture;e.dispose();let n=new Ke,s=new Ke;n.add(s);let r=new $e({color:"#d9d3cb",roughness:.38,metalness:.05,envMap:t,envMapIntensity:.55}),a=new $e({color:"#2a2f3a",roughness:.45,metalness:.4,envMap:t,envMapIntensity:.9}),o=new $e({color:"#06090d",roughness:.12,metalness:.2,envMap:t,envMapIntensity:.8}),l=new $e({color:"#ffb36b",roughness:.35,envMap:t,emissive:"#ff8a3d",emissiveIntensity:.12}),c=new Nt({color:new ce(.9,2,2.5),toneMapped:!1}),u=new Nt({color:new ce(2.2,1.2,.5),toneMapped:!1}),h=new Ke;h.position.y=.16,s.add(h);let d=new ue(new kn(.62,.46,.5,6,.2),r);h.add(d);let f=new ue(new kn(.5,.3,.06,4,.1),o);f.position.set(0,-.01,.235),h.add(f);let x=[-1,1].map(A=>{let V=new ue(new Ni(.035,.05,4,12),c);return V.position.set(A*.1,0,.27),h.add(V),V});[-1,1].forEach(A=>{let V=new ue(new Tt(.075,.075,.05,28),a);V.rotation.z=Math.PI/2,V.position.set(A*.325,0,0),h.add(V);let w=new ue(new Wn(.06,.012,8,28),l);w.rotation.y=Math.PI/2,w.position.set(A*.352,0,0),h.add(w)});let y=new Ke;y.position.set(.12,.23,-.02),h.add(y);let m=new ue(new Tt(.008,.01,.16,8),a);m.position.y=.08,y.add(m);let p=new ue(new Ft(.028,16,12),u);p.position.y=.17,y.add(p);let M=new ue(new Ni(.17,.12,6,20),r);M.position.y=-.22,s.add(M);let C=new ue(new Wn(.172,.018,10,36),a);C.rotation.x=Math.PI/2,C.position.y=-.2,s.add(C);let v=new ue(new ts(.035,24),c);v.position.set(0,-.17,.168),s.add(v);let E=[-1,1].map(A=>{let V=new Ke;V.position.set(A*.29,-.22,.04),s.add(V);let w=new ue(new Ft(.06,20,14),r);w.scale.set(1,1.15,.85),V.add(w);let N=new ue(new Wn(.05,.01,8,20),l);return N.rotation.x=Math.PI/2,N.position.y=-.04,V.add(N),V}),S=(()=>{let A=document.createElement("canvas");A.width=A.height=64;let V=A.getContext("2d"),w=V.createRadialGradient(32,32,0,32,32,32);return w.addColorStop(0,"rgba(255,255,255,1)"),w.addColorStop(.4,"rgba(255,200,140,0.5)"),w.addColorStop(1,"rgba(255,140,60,0)"),V.fillStyle=w,V.fillRect(0,0,64,64),new Xt(A)})(),T=new un(new nn({map:S,color:new ce(1.4,.9,.5),transparent:!0,depthWrite:!1,blending:Et,toneMapped:!1}));T.position.y=-.42,T.scale.set(.22,.3,1),s.add(T),n.traverse(A=>{A.frustumCulled=!1,(A.isMesh||A.isSprite)&&(A.renderOrder=30)});let g={t:0,blink:2,talk:0,wave:0,show:0,showTarget:0,look:new Ae,side:1},b=new L;function P(A,V,w){let N=innerWidth<innerHeight*.95,k=3.2,z=Math.tan(At.degToRad(A.fov/2))*k,O=z*A.aspect,I=2*z/innerHeight;g.side=V==="ar"?1:-1;let U=N?.6:.78;if(n.scale.setScalar(U),N&&w&&w.height>0){let $=w.top-.62*U/I;b.set(g.side*(O-.48*U),z-$*I,-k)}else b.set(g.side*(O-.55*U),-z+.72*U,-k);n.rotation.y=-g.side*.35}function B(A,V){g.t+=A,g.show+=(g.showTarget-g.show)*Math.min(1,A*3.5),n.visible=g.show>.01;let w=1-g.show;n.position.set(b.x+g.side*w*.9,b.y-w*1.4+Math.sin(g.t*1.8)*.035,b.z),V&&g.look.lerp(V,Math.min(1,A*3)),h.rotation.set(-g.look.y*.18,g.look.x*.3,Math.sin(g.t*.9)*.04),s.rotation.z=Math.sin(g.t*1.3)*.05,g.blink-=A;let N=1;g.blink<.12&&(N=Math.abs(g.blink-.06)/.06),g.blink<0&&(g.blink=2.2+Math.random()*2.5);let k=g.talk>0?.75+.25*Math.sin(g.t*22):1;x.forEach(z=>{z.scale.set(1,Math.max(.08,N*k),1)}),g.talk=Math.max(0,g.talk-A),p.scale.setScalar(1+(g.talk>0?.35*Math.abs(Math.sin(g.t*14)):.1*Math.sin(g.t*3))),y.rotation.z=Math.sin(g.t*2.4)*.12,g.wave=Math.max(0,g.wave-A),E.forEach((z,O)=>{let I=O===0?-1:1;z.position.y=-.22+Math.sin(g.t*2+O)*.02,z.rotation.z=0,g.wave>0&&O===(g.side>0?0:1)&&(z.position.y=.02+Math.sin(g.t*9)*.02,z.rotation.z=Math.sin(g.t*12)*.5*I)}),T.material.opacity=.6+.4*Math.sin(g.t*30)*Math.sin(g.t*7),T.scale.set(.2+.03*Math.sin(g.t*25),.28+.06*Math.sin(g.t*17),1)}return{root:n,layout:P,update:B,show(){g.showTarget=1,g.wave=1.8},hide(){g.showTarget=0},talk(A){g.talk=Math.max(g.talk,A)},get visible(){return g.show>.5}}}var hu={sol:{pref:["Shakir","Hamed","Naayf"],gender:"m",pitch:1.45,rate:1.04},sojourner:{pref:["Salma","Zariyah","Hoda"],gender:"f",pitch:1.2,rate:1.02},spirit:{pref:["Shakir","Hamed","Naayf"],gender:"m",pitch:.95,rate:.98},opportunity:{pref:["Shakir","Hamed","Naayf"],gender:"m",pitch:.78,rate:.95}},iS={m:["Guy","Andrew","Christopher","Eric","David","Google US English"],f:["Aria","Jenny","Ava","Emma","Zira","Google US English"]};function Zm(i){let e=typeof window<"u"?window.speechSynthesis:null,t=[],n=null,s=null;function r(){e&&(t=e.getVoices()||[])}r(),e&&"onvoiceschanged"in e&&e.addEventListener("voiceschanged",r);function a(h,d){let f=hu[d]||hu.sol,x=t.filter(p=>p.lang&&p.lang.toLowerCase().startsWith(h==="ar"?"ar":"en"));if(!x.length)return null;let y=h==="ar"?f.pref:iS[f.gender],m=p=>{let M=0,C=p.name||"";return y.forEach((v,E)=>{C.includes(v)&&(M+=40-E*3)}),/Natural|Online|Neural/i.test(C)&&(M+=20),h==="ar"&&/ar-EG/i.test(p.lang)&&(M+=25),h==="en"&&/en-US/i.test(p.lang)&&(M+=8),M};return x.slice().sort((p,M)=>m(M)-m(p))[0]}function o(h){return r(),!!a(h,"sol")}function l(){s&&(s.pause(),s=null),e&&(e.speaking||e.pending)&&e.cancel(),n&&!n.ended&&(n.ended=!0),n=null,i.duck(!1)}function c(h){if(l(),i.muted)return!1;let d={ended:!1,onEnd:h.onEnd,onProgress:h.onProgress},f=()=>{d.ended||(d.ended=!0,i.duck(!1),d.onProgress?.(1),d.onEnd?.(),n===d&&(n=null))};if(n=d,h.file){let x=new Audio(h.file);s=x,x.addEventListener("timeupdate",()=>{s===x&&x.duration&&d.onProgress?.(x.currentTime/x.duration)}),x.addEventListener("ended",f);let y=()=>{s!==x||d.ended||(s=null,h.text&&u(h,d,f)||f())};return x.addEventListener("error",y),x.play().then(()=>i.duck(!0)).catch(y),!0}return u(h,d,f)}function u(h,d,f){if(!e)return!1;r();let x=a(h.lang,h.role);if(!x)return!1;let y=hu[h.role]||hu.sol,m=new SpeechSynthesisUtterance(h.text);m.voice=x,m.lang=x.lang,m.pitch=y.pitch,m.rate=y.rate,m.volume=1;let p=Math.max(1,h.text.length);m.onstart=()=>i.duck(!0),m.onboundary=v=>{typeof v.charIndex=="number"&&d.onProgress?.(Math.min(1,(v.charIndex+(v.charLength||4))/p))},m.onend=f,m.onerror=f,e.speak(m);let M=performance.now(),C=setInterval(()=>{if(d.ended){clearInterval(C);return}performance.now()-M>1200&&!e.speaking&&!e.pending&&(clearInterval(C),f())},400);return!0}return{speak:c,stop:l,available:o,get speaking(){return!!n},voiceName:(h,d)=>a(h,d)?.name||null}}var Te=i=>document.querySelector(i),Aa=new URLSearchParams(location.search),sS=Number(Aa.get("dtmax"))||1/20,n0=Aa.has("debug")||location.hash.includes("debug"),i0=!Aa.has("nofiles"),bt=window.matchMedia("(prefers-reduced-motion: reduce)").matches||Aa.has("reduced"),Vo=Math.min(window.innerWidth,window.innerHeight)<600||/Android|iPhone|iPad/i.test(navigator.userAgent),F={lang:(()=>{let i=Aa.get("lang");if(i==="ar"||i==="en")return i;try{return localStorage.getItem("tlf-lang")||"en"}catch{return"en"}})(),stage:"loading",surfaceReady:!1,fade:1,fadeTarget:1,fadeSpeed:1,focus:1,mode:"loading",charge:0,holding:!1,awake:[!1,!1,!1],line:[0,0,0],badges:new Set,done:!1,quiz:null,fps:0,pr:1,started:!1,timeScale:1},Qe=Lm(),Jn=Zm(Qe),rS={Sojourner:"\u0633\u0648\u062C\u0648\u0631\u0646\u0631",Spirit:"\u0633\u0628\u064A\u0631\u064A\u062A",Opportunity:"\u0623\u0648\u0628\u0648\u0631\u062A\u0634\u0648\u0646\u064A\u062A\u064A",Oppy:"\u0623\u0648\u0628\u064A",NASA:"\u0646\u0627\u0633\u0627",Curiosity:"\u0643\u064A\u0648\u0631\u064A\u0648\u0633\u064A\u062A\u064A",Perseverance:"\u0628\u064A\u0631\u0633\u064A\u0641\u064A\u0631\u0627\u0646\u0633"};function s0(i,e){let t=i.replace(/[«»“”"]/g,"").replace(/…/g,"\u060C ");if(e==="ar"){t=t.replace(/[٠-٩]/g,n=>"\u0660\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669".indexOf(n));for(let[n,s]of Object.entries(rS))t=t.split(n).join(s)}return t}function r0(i,e,t,n=1){return{full:i,shown:bt?1e9:0,acc:0,voiced:e,progress:0,dur:Math.max(1.2,i.length/(t==="ar"?12.5:15)/n)}}function a0(i,e,t){if(i.shown>=i.full.length)return!1;if(i.acc+=e,i.voiced){let n=Math.floor(i.full.length*Math.min(1,i.acc/i.dur));i.shown=Math.min(i.full.length,Math.max(n,Math.floor(i.full.length*i.progress)))}else for(;i.acc>.03&&i.shown<i.full.length;)i.acc-=.03,i.shown++,i.shown%3===0&&Qe.blip(t);return!0}var Oo=[],Kt=(i,e)=>Oo.push({t:i,fn:e}),Zn=Te("#scene"),Bt;try{Bt=new Xc({canvas:Zn,antialias:!1,powerPreference:"high-performance"})}catch(i){throw Te("#signal").classList.add("error"),Te("#loader-text").textContent=xe("noWebGL",F.lang),i}Zn.addEventListener("webglcontextlost",i=>{i.preventDefault(),console.warn("WebGL context lost");let e=document.createElement("div");e.className="glass",e.id="gl-lost",e.textContent=F.lang==="ar"?"\u0643\u0627\u0631\u062A \u0627\u0644\u0634\u0627\u0634\u0629 \u0627\u062A\u0639\u0645\u0644\u0647 \u0625\u0639\u0627\u062F\u0629 \u062A\u0634\u063A\u064A\u0644\u2026 \u0628\u0646\u0631\u062C\u0651\u0639 \u0627\u0644\u0645\u0634\u0647\u062F":"The graphics card reset\u2026 restoring the scene",document.body.appendChild(e)});Zn.addEventListener("webglcontextrestored",()=>location.reload());var aS=Vo?1.5:1.75;F.pr=Math.min(window.devicePixelRatio||1,aS);Bt.setPixelRatio(F.pr);Bt.setSize(window.innerWidth,window.innerHeight);Bt.toneMapping=rr;Bt.toneMappingExposure=1.05;Bt.outputColorSpace=yt;Bt.shadowMap.enabled=!0;Bt.shadowMap.type=ir;Bt.shadowMap.autoUpdate=!1;var Hs=new ti,an=new Wt(Vo&&innerWidth<innerHeight?48:35,innerWidth/innerHeight,.05,1e3);Hs.add(an);var Xd={mobile:Vo,pixelRatio:F.pr},ko=xm(Hs,Xd);{let i=new ti,e=ed();i.add(new ue(new Ft(10,32,16),new xt({side:Ht,uniforms:{uSun:{value:e}},vertexShader:"varying vec3 vD; void main(){ vD = normalize(position); gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`uniform vec3 uSun; varying vec3 vD;
      void main(){ float y = vD.y;
        vec3 ground = vec3(0.30,0.15,0.08); vec3 hor = vec3(0.85,0.58,0.40); vec3 zen = vec3(0.30,0.20,0.17);
        vec3 c = y < 0.0 ? mix(hor*0.7, ground, smoothstep(0.0,-0.5,y)) : mix(hor, zen, smoothstep(0.0,0.7,y));
        float s = max(dot(vD, uSun), 0.0); c += vec3(0.55,0.70,0.95)*pow(s,10.0)*1.2 + vec3(4.0,3.4,2.8)*pow(s,300.0);
        gl_FragColor = vec4(c,1.0); }`})));let t=new Ls(Bt);vu=t.fromScene(i,.03).texture,t.dispose()}var vu,oS=new Zt(innerWidth,innerHeight,{type:hn,samples:2}),ui=new Kc(Bt,oS);ui.setPixelRatio(F.pr);ui.setSize(innerWidth,innerHeight);var Hd=new Zc(Hs,an);ui.addPass(Hd);var ba=new pa(new Ae(innerWidth,innerHeight),.6,.6,.92);{let i=ba.setSize.bind(ba);ba.setSize=(e,t)=>i(Math.max(2,e*.5),Math.max(2,t*.5))}ui.addPass(ba);ui.addPass(new Jc);var Hn=new fa({uniforms:{tDiffuse:{value:null},uTime:{value:0},uRes:{value:new Ae(innerWidth,innerHeight)},uFlash:{value:0},uFade:{value:1},uFadeColor:{value:new ce(.86,.56,.4)},uCA:{value:.001}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`
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
    }`});ui.addPass(Hn);var Kn=Im();an.add(Kn.root);Kn.layout(innerWidth/innerHeight);var pu=Pm(Hs),Jt=[],_t=Fm(Bt,Xd),pn=Km(Bt);_t.camera.add(pn.root);var o0=new Set(["loading","signal","opening","home","pick","warp","ending"]);function yn(i){F.stage=i,document.body.dataset.stage=i;let e=o0.has(i);Hd.scene=i==="exp"?$t.scene:e?_t.scene:Hs,Hd.camera=i==="exp"?$t.camera:e?_t.camera:an,i!=="surface"&&(F.mode="away",F.holding=!1,F.charge=0,document.body.classList.remove("hall-live"),Kn.state.raiseTarget=0,Kn.state.raise=0)}function gn(i,e){F.fadeTarget=i,F.fadeSpeed=1/Math.max(.001,e)}function l0(i){return new Promise((e,t)=>{let n=document.createElement("script");n.src=i,n.async=!0,n.onload=()=>e(),n.onerror=()=>t(new Error("failed "+i)),document.head.appendChild(n)})}var c0=null;async function lS(){if(!window.MER_GLB_B64)try{await l0("models/mer-model.js")}catch(a){console.warn(a)}let i="./models/MER.glb";if(window.MER_GLB_B64){let a=Uint8Array.from(atob(window.MER_GLB_B64),o=>o.charCodeAt(0));i=URL.createObjectURL(new Blob([a],{type:"model/gltf-binary"}))}let e;try{e=await Cm(i),c0=e}catch(a){console.warn("MER model failed, using fallback",a)}let t=iu(),n=e?Id("spirit",e):iu(),s=e?Id("opportunity",e):iu();e||(n.id="spirit",s.id="opportunity"),[t,n,s].forEach((a,o)=>{a.data=Nm[o],a.pivot.rotation.y=a.baseYaw=[.32,-.15,-.55][o],a.yaw=a.pivot.rotation.y,a.yawVel=0,a.wakeT=-1,a.baseY=a.pivot.position.y,Hs.add(a.pivot),Jt.push(a)}),Jt[2].model.scale.setScalar(.995);let r=a=>a.traverse(o=>{o.isMesh&&[o.material].flat().forEach(l=>{l.isMeshStandardMaterial&&(l.envMap=vu,l.envMapIntensity=.4,l.needsUpdate=!0)})});Jt.forEach(a=>r(a.model)),r(Kn.root)}var rn={pos:new L(0,9,28),look:new L(0,1,0)},Nn={active:!1,t:0,dur:1,fromPos:new L,fromLook:new L,lift:0},pr=new L,mr=new L,yu=new Ae,ks=new Ae;function Mu(i,e,t){let n=Jt[i],s=n.id==="sojourner",r=innerWidth<innerHeight,a=s?1.9:5.4;r&&(a*=1.35);let o=n.push??1,l=a*.075;a*=o;let c=.38,u=n.pivot.position;if(t.set(u.x,u.y+n.height*(s?.42:.5)-l,u.z),e.set(u.x+Math.sin(c)*a,t.y+a*(s?.3:.17)+(1-o)*-.3*(s?.3:1),u.z+Math.cos(c)*a),!r){let h=new L(Math.cos(c),0,-Math.sin(c));e.addScaledVector(h,a*.07),t.addScaledVector(h,a*.07)}}var Od=i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2;function qd(i,e=1.7,t=.5){Nn.active=!0,Nn.t=0,Nn.dur=bt?.001:e,Nn.lift=t,Nn.fromPos.copy(rn.pos),Nn.fromLook.copy(rn.look)}var nt={bubble:Te("#bubble"),text:Te("#bubble-text"),kind:Te("#bubble-kind"),count:Te("#bubble-count"),next:Te("#bubble-next"),tag:Te("#rover-tag"),name:Te("#rover-name"),meta:Te("#rover-meta"),status:Te("#rover-status"),stats:Te("#stats"),power:Te("#power"),ring:Te("#power-ring"),hint:Te("#hint"),nav:Te("#nav"),toast:Te("#toast"),explore:Te("#explore-btn"),cta:Te("#end-cta")},wi={full:"",shown:0,acc:0},vn={root:Te("#home"),slot:Te("#title-slot"),days:Te("#c-days"),clock:Te("#c-clock"),labels:Te("#labels"),warp:Te("#go-warp"),exp:Te("#go-exp"),els:[]},cS=Date.UTC(2010,2,22),mu=(i,e)=>e==="ar"?i.toLocaleString("ar-EG"):i.toLocaleString("en-US");function Yd(){let i=Date.now()-cS,e=Math.floor(i/864e5),t=i%864e5,n=Math.floor(t/36e5),s=Math.floor(t%36e5/6e4),r=Math.floor(t%6e4/1e3),a=l=>String(l).padStart(2,"0");vn.days.textContent=mu(e,F.lang);let o=`${a(n)}:${a(s)}:${a(r)}`;vn.clock.textContent=F.lang==="ar"?o.replace(/\d/g,l=>"\u0660\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669"[l]):o}function uS(){vn.labels.innerHTML="",vn.els=[...hr,...ru].map(i=>{let e=document.createElement("div");return e.className="site-label"+(i.extra?" extra":""),e.dataset.extra=i.extra?"1":"",e.addEventListener("click",()=>Su(i.id)),e.innerHTML=`<i></i><div><b>${i.name}</b><span class="place">${i.place}</span><span class="when"></span></div>`,vn.labels.appendChild(e),e}),gr()}function gr(){_t.siteStatus().forEach((e,t)=>{let n=vn.els[t];if(!n)return;let s=Math.floor(e.hour),r=Math.floor(e.hour%1*60),a=`${String(s).padStart(2,"0")}:${String(r).padStart(2,"0")}`,o=F.lang==="ar"?a.replace(/\d/g,l=>"\u0660\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669"[l]):a;n.querySelector(".when").textContent=n.dataset.extra?`\u25CF ${xe("active",F.lang)} \xB7 ${e.day?"\u2600":"\u263E"} ${o}`:`${e.day?"\u2600":"\u263E"} ${xe(e.day?"day":"night",F.lang)} \xB7 ${o}`,n.classList.toggle("night",!e.day)}),u0()}var u0=()=>vn.els.forEach(i=>{i._w=i.offsetWidth}),Jm=[];function hS(){_t.labelPositions(Jm),Jm.forEach((i,e)=>{let t=vn.els[e];if(!t)return;let n=i.x+(t._w||140)>innerWidth-6;t.classList.toggle("flip",n),t.style.transform=`translate(${(i.x-(n?t._w||140:0)).toFixed(1)}px, ${i.y.toFixed(1)}px)`;let s=t.dataset.extra?F.stage==="ending":F.stage==="home"||F.stage==="opening"||F.stage==="pick"||F.stage==="ending";t.classList.toggle("show",i.visible&&s)})}function xr(){let i=vn.slot.getBoundingClientRect();if(i.width<10)return;_t.buildTitle(i,F.lang);let e=_t.title.canvas;if(!e)return;let t=document.createElement("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d"),s=n.createLinearGradient(0,0,0,t.height);s.addColorStop(0,"#fff8ef"),s.addColorStop(.55,"#ffe2c8"),s.addColorStop(1,"#f2b083");let r=document.createElement("canvas");r.width=e.width,r.height=e.height;let a=r.getContext("2d");a.fillStyle=s,a.fillRect(0,0,r.width,r.height),a.globalCompositeOperation="destination-in",a.drawImage(e,0,0),n.shadowColor="rgba(255,150,90,0.35)",n.shadowBlur=28,n.drawImage(r,0,0),n.shadowBlur=0,n.drawImage(r,0,0),t.className="title-crisp",vn.slot.replaceChildren(t)}function ps(){let i=Jt[F.focus];if(!i)return;let e=i.data,t=F.lang;nt.name.textContent=e.name,nt.meta.textContent=`${e.mission} \xB7 ${e.site} \xB7 ${e.coords}`,nt.status.textContent=F.awake[F.focus]?xe("awakeNow",t):t==="ar"?e.status_ar:e.status_en,nt.status.classList.toggle("on",F.awake[F.focus]),nt.stats.innerHTML=e.stats.map(s=>`<div class="stat"><span>${t==="ar"?s.ar_label:s.en_label}</span><b>${t==="ar"?s.ar:s.en}</b></div>`).join(""),nt.stats.classList.toggle("show",F.awake[F.focus]),nt.nav.querySelectorAll("button").forEach((s,r)=>{s.classList.toggle("active",r===F.focus),s.classList.toggle("awake",F.awake[r]),s.setAttribute("aria-pressed",r===F.focus)});let n=F.awake[F.focus];nt.power.classList.toggle("hidden",n||F.mode!=="hall"),nt.hint.textContent=n?xe("dragHint",t):xe(innerWidth<760?"holdHintShort":"holdHint",t),nt.hint.classList.toggle("show",F.mode==="hall"),nt.explore.hidden=!n,nt.cta.hidden=!(h0()&&F.mode==="hall")}var h0=()=>F.awake.every(Boolean);function Go(i,e){let t=Jt[i],n=t.data.lines[e],s=F.lang;nt.bubble.classList.add("show"),nt.kind.textContent=n.kind==="fact"?xe("fact",s):xe("story",s),nt.kind.className="kind "+n.kind,nt.count.textContent=`${e+1} / ${t.data.lines.length}`,nt.next.textContent=e+1<t.data.lines.length?xe("next",s):xe("again",s);let r=s==="ar"?n.ar:n.en,a={onProgress:l=>{wi.job===a&&(wi.progress=l)}},o=Jn.speak({...a,file:i0?`audio/v/${t.id}_${e+1}_${s}.mp3`:null,lang:s,role:t.id,text:s0(s==="ar"?n.tts_ar||n.ar:n.en,s)});wi=r0(r,o,s),wi.job=a,nt.text.textContent=bt?r:"",nt.text.dir=s==="ar"?"rtl":"ltr"}function $d(){nt.bubble.classList.remove("show"),Jn.stop()}function wa(i){i===F.focus||!Jt[i]||F.mode==="intro"||(F.focus=i,F.charge=0,F.holding=!1,$d(),qd(i,1.8,.7),ps(),F.awake[i]&&Kt(bt?.05:1.5,()=>{F.focus===i&&F.stage==="surface"&&Go(i,F.line[i])}))}function gu(i){nt.toast.textContent=i,nt.toast.classList.add("show"),clearTimeout(gu._t),gu._t=setTimeout(()=>nt.toast.classList.remove("show"),2600)}var xu=new L,Bd=new L,jm=new L;function d0(){let i=F.focus,e=Jt[i];F.holding=!1,F.mode="firing",Kn.fire(),Qe.zap(),Qe.setCharge(0),Kn.worldPalm(xu),Bd.copy(e.pivot.position),Bd.y+=e.height*.55,jm.copy(e.pivot.position),pu.fire(xu,Bd,jm,e.id==="sojourner"?.45:1,()=>dS(i)),nt.power.classList.add("hidden"),nt.power.classList.remove("holding"),nt.hint.classList.remove("show")}function dS(i){let e=Jt[i];e.wakeT=0,F.awake[i]=!0,F.line[i]=0,vr(),Hn.uniforms.uFlash.value=bt?.3:1,Qe.chime(),Kt(bt?.2:1.5,()=>{F.stage!=="surface"||F.mode!=="firing"||(F.mode="hall",ps(),F.focus===i&&Go(i,0))})}function Vs(i){F.mode!=="hall"||F.awake[F.focus]||(Qe.start(),F.holding=i,nt.power.classList.toggle("holding",i))}nt.power.addEventListener("pointerdown",i=>{i.preventDefault(),nt.power.setPointerCapture?.(i.pointerId),Vs(!0)});["pointerup","pointercancel","lostpointercapture"].forEach(i=>nt.power.addEventListener(i,()=>Vs(!1)));nt.power.addEventListener("contextmenu",i=>i.preventDefault());document.addEventListener("click",i=>{let e=i.target.closest&&i.target.closest("button");e&&i.detail>0&&e.blur()});var fS=()=>{let i=document.activeElement;return i&&(i.tagName==="INPUT"||i.tagName==="TEXTAREA"||i.isContentEditable)},Qm=()=>{let i=document.activeElement;return i&&i.tagName==="BUTTON"&&i!==nt.power},f0=()=>_r.isOpen||fs.isOpen||!Te("#cert").hidden;window.addEventListener("keydown",i=>{if(fS()||f0())return;if((F.stage==="exp"||F.stage==="edl")&&(i.code==="Space"||i.code==="Enter"&&document.activeElement===qt.act)){if(Qm()&&document.activeElement!==qt.act)return;i.preventDefault(),i.repeat||Ra(!0);return}if((i.code==="Space"||i.code==="Enter"&&document.activeElement===nt.power)&&!Qm()){i.preventDefault(),i.repeat||Vs(!0);return}i.repeat||(i.key==="ArrowRight"&&wa(Math.min(2,F.focus+(F.lang==="ar"?-1:1))),i.key==="ArrowLeft"&&wa(Math.max(0,F.focus+(F.lang==="ar"?1:-1))),(i.key==="f"||i.key==="F")&&Te("#fps").classList.toggle("show"),(i.key==="m"||i.key==="M")&&m0(),(i.key==="b"||i.key==="B")&&!An.on&&F.mode==="hall"&&(An.on=!0,An.data={},E0()))});window.addEventListener("keyup",i=>{if((F.stage==="exp"||F.stage==="edl")&&(i.code==="Space"||i.code==="Enter")){Ra(!1);return}(i.code==="Space"||i.code==="Enter")&&F.holding&&(i.preventDefault(),Vs(!1))});window.addEventListener("blur",()=>{F.holding&&Vs(!1)});nt.next.addEventListener("click",()=>{let i=F.focus,e=Jt[i].data.lines.length;F.line[i]=(F.line[i]+1)%e,Go(i,F.line[i])});nt.text.addEventListener("click",()=>{wi.shown=1e9,nt.text.textContent=wi.full});nt.nav.querySelectorAll("button").forEach((i,e)=>i.addEventListener("click",()=>{Qe.start(),wa(e)}));var Ea=null,zd=!1;Zn.addEventListener("pointerdown",i=>{F.mode==="hall"&&(Zn.setPointerCapture(i.pointerId),F.awake[F.focus]?Ea={x:i.clientX}:(zd=!0,Vs(!0)))});Zn.addEventListener("pointermove",i=>{if(Ea){let e=i.clientX-Ea.x;Ea.x=i.clientX,Jt[F.focus].yawVel=e*.0045/(1/60)}});var p0=()=>{Ea=null,zd&&(zd=!1,Vs(!1))};Zn.addEventListener("pointerup",p0);Zn.addEventListener("pointercancel",p0);window.addEventListener("pointermove",i=>{yu.set(i.clientX/innerWidth*2-1,-(i.clientY/innerHeight)*2+1)});function m0(){Qe.setMuted(!Qe.muted),Qe.muted&&Jn.stop(),Te("#mute").classList.toggle("muted",Qe.muted),Te("#mute").setAttribute("aria-pressed",Qe.muted),Te("#mute").setAttribute("aria-label",xe(Qe.muted?"unmute":"mute",F.lang))}Te("#mute").addEventListener("click",()=>{Qe.start(),m0()});Te("#lang").addEventListener("click",()=>{F.lang=F.lang==="ar"?"en":"ar";try{localStorage.setItem("tlf-lang",F.lang)}catch{}Pd(F.lang),ps(),_t.resize(F.lang),xr(),Yd(),gr(),Wi(),Zd(),vr(),_r.refresh(),fs.refresh(),(F.stage==="pick"||F.stage==="ending"||F.stage==="exp"||F.stage==="edl")&&rt.typing.key&&Gt(rt.typing.key,rt.typing.then),v0(),Wo(!0),Ze.step&&Ta(Ze.step),nt.bubble.classList.contains("show")&&Go(F.focus,F.line[F.focus])});function Vd(){let i=innerWidth,e=innerHeight;an.aspect=i/e,an.fov=Vo&&i<e?48:35,an.updateProjectionMatrix(),Bt.setSize(i,e),ui.setSize(i,e),Hn.uniforms.uRes.value.set(i,e),Kn.layout(i/e),ps(),_t.resize(F.lang),clearTimeout(Vd._t),Vd._t=setTimeout(()=>{xr(),Wi()},150),(F.mode==="hall"||F.mode==="firing")&&Jt.length&&(Mu(F.focus,pr,mr),Nn.active||(rn.pos.copy(pr),rn.look.copy(mr)))}window.addEventListener("resize",Vd);var Bo=new nr;Bo.connect(document);var kd=0,du=0;var fu=0,pS=new L,zs=2,e0=-1;function Kd(i){let e=rt.typing;if(a0(e,i,1.45)&&((e.el||rt.text).textContent=e.full.slice(0,e.shown)),(Jn.speaking||e.shown<e.full.length&&!e.voiced)&&pn.talk(.12),rt.after&&e.shown>=e.full.length&&e.spoken){let t=rt.after;rt.after=null,Kt(.9,()=>{F.stage===e.stage&&rt.typing===e&&t()})}}function mS(i,e){ks.lerp(yu,Math.min(1,i*3)),_t.update(i,e),pn.update(i,bt?null:ks),Kd(i),hS();let t=Math.floor(Date.now()/1e3);t!==e0&&(e0=t,Yd(),t%30===0&&gr())}function gS(i,e){ks.lerp(yu,Math.min(1,i*3)),F.holding?F.charge=Math.min(1,F.charge+i/1.5):F.charge=Math.max(0,F.charge-i*1.4),Kn.state.charge=F.charge,Qe.setCharge(F.charge),nt.ring.style.setProperty("--p",F.charge.toFixed(3)),ko.dust.material.uniforms.uBoost.value=F.charge*1.5,F.holding&&F.charge>=1&&d0(),Jt.forEach((s,r)=>{let a=r===F.focus?0:.62;if(s.u.uDim.value+=(a-s.u.uDim.value)*Math.min(1,i*3),s.wakeT>=0){s.wakeT+=i;let o=Math.min(1,s.wakeT/1.6);s.u.uSleep.value=1-Od(o),s.u.uGlow.value=Math.sin(Math.min(1,s.wakeT/1.4)*Math.PI)*.9;let l=s.wakeT<.9?Math.sin(s.wakeT/.9*Math.PI)*(s.id==="sojourner"?.04:.09):0;s.pivot.position.y=s.baseY+(bt?0:l),s.model.rotation.z=bt?0:Math.sin(s.wakeT*14)*.02*Math.max(0,1-s.wakeT/1.2),s.push=1-.1*Od(Math.min(1,s.wakeT/2.2)),s.wakeT<2.5&&(zs=1),s.wakeT>3&&(s.wakeT=-2)}F.awake[r]&&((!Ea||r!==F.focus)&&(s.yawVel*=Math.pow(.04,i)),s.yaw+=s.yawVel*i,Math.abs(s.yawVel)>.001&&(zs=1),s.pivot.rotation.y=s.yaw)});let t=F.mode==="hall"||F.mode==="firing";if(Jt.length&&t&&Mu(F.focus,pr,mr),Nn.active){Nn.t+=i;let s=Math.min(1,Nn.t/Nn.dur),r=Od(s);rn.pos.lerpVectors(Nn.fromPos,pr,r),rn.pos.y+=Math.sin(s*Math.PI)*Nn.lift,rn.look.lerpVectors(Nn.fromLook,mr,r),s>=1&&(Nn.active=!1,F.mode==="intro"&&(F.mode="hall",document.body.classList.add("hall-live"),Kn.state.raiseTarget=1,ps(),F.awake[F.focus]&&Go(F.focus,F.line[F.focus])))}else t&&(rn.pos.lerp(pr,Math.min(1,i*2.5)),rn.look.lerp(mr,Math.min(1,i*2.5)));if(an.position.copy(rn.pos),!bt){an.position.x+=ks.x*.12,an.position.y+=ks.y*.06,an.position.y+=Math.sin(e*.5)*.015;let s=pu.shake*pu.shake*.05;s>0&&an.position.add(pS.set((Math.random()-.5)*s,(Math.random()-.5)*s,0))}an.lookAt(rn.look),Kn.update(i,bt?null:ks),Kn.worldPalm(xu),pu.update(i,e,xu),ko.sky.material.uniforms.uTime.value=e,ko.dust.material.uniforms.uTime.value=e,Hn.uniforms.uFlash.value=Math.max(0,Hn.uniforms.uFlash.value-i*1.6);let n=Jt[F.focus]?.id;a0(wi,i,n==="sojourner"?1.25:n==="opportunity"?.85:1)&&(nt.text.textContent=wi.full.slice(0,wi.shown))}function xS(i){if(kd++,du+=i,du>=1){if(F.fps=Math.round(kd/du),kd=0,du=0,(n0||Te("#fps").classList.contains("show"))&&!Te("#fps").dataset.final){let e=Bt.info.render;Te("#fps").textContent=`${F.fps} fps \xB7 pr ${F.pr.toFixed(2)} \xB7 ${e.calls} calls \xB7 ${(e.triangles/1e3).toFixed(0)}k tris`}F.stage!=="loading"&&F.stage!=="signal"&&F.fps<52&&!document.hidden?fu++:fu=0,fu>=2&&F.pr>.85&&(F.pr=Math.max(.85,F.pr-.25),Bt.setPixelRatio(F.pr),ui.setPixelRatio(F.pr),ui.setSize(innerWidth,innerHeight),fu=0,F.pr<=1&&ba.enabled&&F.fps<35&&(ba.enabled=!1))}}var An={on:Aa.has("bench"),phase:"idle",data:{}};function _S(){var t,n;if(Bo.update(),An.on&&F.started){let s=Bo.getDelta();((t=An.data)[n=An.phase]||(t[n]=[])).push(s*1e3)}let i=Math.min(Bo.getDelta(),sS)*F.timeScale,e=Bo.getElapsed();for(let s=Oo.length-1;s>=0;s--)Oo[s].t-=i,Oo[s].t<=0&&Oo.splice(s,1)[0].fn();if(F.fade!==F.fadeTarget){let s=i*F.fadeSpeed;F.fade=Math.abs(F.fadeTarget-F.fade)<=s?F.fadeTarget:F.fade+Math.sign(F.fadeTarget-F.fade)*s}Hn.uniforms.uFade.value=F.fade,Hn.uniforms.uTime.value=e,F.stage==="exp"?SS(i,e):F.stage==="edl"?wS(i,e):o0.has(F.stage)?mS(i,e):gS(i,e),zs>0&&(Bt.shadowMap.needsUpdate=!0,zs--),ui.render(i),xS(i)}async function Gd(i,e){let t=[];i.traverse(s=>{s.visible||(t.push(s),s.visible=!0)}),Bt.setRenderTarget(ui.renderTarget1);try{await Bt.compileAsync(i,e,i)}catch{}Bt.shadowMap.needsUpdate=!0,Bt.setRenderTarget(ui.renderTarget1),Bt.render(i,e),Bt.setRenderTarget(null);let n=new Set;i.traverse(s=>{[s.material].flat().forEach(r=>{if(r){for(let a of Object.values(r))a&&a.isTexture&&!n.has(a)&&n.add(a);if(r.uniforms)for(let a of Object.values(r.uniforms))a.value&&a.value.isTexture&&n.add(a.value)}})}),n.forEach(s=>{try{s.image&&Bt.initTexture(s)}catch{}}),t.forEach(s=>{s.visible=!1})}async function vS(){Pd(F.lang),yn("loading"),n0&&Te("#fps").classList.add("show"),_t.resize(F.lang);try{await Promise.race([document.fonts.ready,new Promise(i=>setTimeout(i,1500))])}catch{}xr(),uS(),Yd(),vr(),await Gd(_t.scene,_t.camera),Bt.setAnimationLoop(_S),yn("signal"),Te("#signal").classList.add("ready"),Te("#start").disabled=!1,window.__tlf.ready=!0,await lS(),Ti=$m(Hs,{rover:c0,env:vu}),ps(),an.position.copy(rn.pos),an.lookAt(rn.look),await Gd(Hs,an),F.surfaceReady=!0,window.__tlf.surfaceReady=!0,vn.warp.classList.remove("loading"),Ho&&jd(Ho)}function g0(){F.started||(F.started=!0,Qe.start(),Qe.signal(),Qe.setAmbient("space"),document.body.classList.add("started"),vr(),yn("opening"),_t.start(bt),bt||[1.5,1.95,2.4].forEach((i,e)=>Kt(i,()=>Qe.beep(e))),Kt(bt?.2:4.3,()=>{F.stage==="opening"&&yn("home")}))}Te("#start").addEventListener("click",g0);var rt={root:Te("#guide"),text:Te("#guide-text"),chips:Te("#guide-chips"),land:Te("#guide-land"),back:Te("#guide-back"),typing:{full:"",shown:0,acc:0},after:null,selected:null},yS=new Set(["guideHello","guideChoose","guide_sojourner","guide_spirit","guide_opportunity","endA","endB","endC","expHello","expPad","expLaunched","expCruise1","expCruise2","expMars","expApproach","expEntry","expEntryOk","edlChute","edlEarly","edlChuteLate","edlChuteOk","edlBags","edlBagsEarly","edlBagsLate","edlBagsOk","edlBounce","edlOpened","edlNow"]);function Gt(i,e){let t=xe(i,F.lang),n=F.stage==="ending"?Mt.text:F.stage==="exp"||F.stage==="edl"?qt.text:rt.text,s={onProgress:a=>{rt.typing.job===s&&(rt.typing.progress=a)},onEnd:()=>{rt.typing.job===s&&(rt.typing.spoken=!0)}},r=Jn.speak({...s,file:i0&&yS.has(i)?`audio/v/sol_${i}_${F.lang}.mp3`:null,lang:F.lang,role:"sol",text:s0(t,F.lang)});rt.typing=r0(t,r,F.lang,1.04),Object.assign(rt.typing,{key:i,job:s,spoken:!r,el:n,then:e,stage:F.stage}),n.textContent=bt?t:"",rt.after=e||null}function Zd(){rt.chips.querySelectorAll("button").forEach(e=>{let t=e.dataset.site===rt.selected;e.classList.toggle("active",t),e.setAttribute("aria-pressed",t)});let i=hr.find(e=>e.id===rt.selected);rt.land.hidden=!i,i&&(rt.land.textContent=`${xe("landAt",F.lang)} ${i.name}`)}function Wi(){let i=(F.stage==="ending"?Mt.root:F.stage==="exp"?qt.root:rt.root).getBoundingClientRect();pn.layout(F.stage==="exp"&&$t?$t.camera:_t.camera,F.lang,i)}function x0(){F.stage==="home"&&(Qe.start(),yn("pick"),_t.enterPick(),rt.selected=null,Zd(),Wi(),pn.show(),rt.text.textContent="",Kt(bt?0:.7,()=>{F.stage==="pick"&&Gt("guideHello",()=>Gt("guideChoose"))}))}function Su(i){if(F.stage!=="pick")return;let e=hr.findIndex(t=>t.id===i);e<0||(F.focus=e,rt.selected=i,_t.focusSite(i),Zd(),Qe.beep(e),Gt("guide_"+i))}function Jd(){F.stage==="pick"&&(Jn.stop(),yn("home"),_t.goHome(F.lang,!1),pn.hide(),rt.after=null)}rt.chips.querySelectorAll("button").forEach(i=>i.addEventListener("click",()=>Su(i.dataset.site)));rt.back.addEventListener("click",Jd);rt.land.addEventListener("click",()=>{rt.selected&&jd(rt.selected)});window.addEventListener("keydown",i=>{i.key==="Escape"&&(Te("#cert").hidden?f0()||Jd():Eu())});var Ho=null;function jd(i){if(!(F.stage!=="pick"&&!Ho)){if(!F.surfaceReady){Ho=i,rt.land.classList.add("loading"),rt.land.textContent=xe("preparing",F.lang);return}if(Ho=null,rt.land.classList.remove("loading"),F.focus=hr.findIndex(e=>e.id===i),yn("warp"),pn.hide(),Jn.stop(),Qe.whoosh(2.9),bt){gn(0,.4),Kt(.45,_u);return}Kt(2.05,()=>gn(0,.75)),_t.warpTo(i,_u)}}vn.warp.addEventListener("click",x0);var ci=null;Zn.addEventListener("pointerdown",i=>{F.stage==="pick"&&(Zn.setPointerCapture(i.pointerId),ci={x:i.clientX,y:i.clientY,t:performance.now(),moved:0},_t.dragStart())});Zn.addEventListener("pointermove",i=>{if(!ci)return;let e=performance.now(),t=i.clientX-ci.x,n=i.clientY-ci.y;ci.moved+=Math.abs(t)+Math.abs(n),_t.dragMove(t,n,(e-ci.t)/1e3),ci.x=i.clientX,ci.y=i.clientY,ci.t=e});var _0=i=>{if(ci){if(_t.dragEnd(),ci.moved<8&&i.type==="pointerup"){let e=_t.pickAt(i.clientX,i.clientY);e&&Su(e)}ci=null}};Zn.addEventListener("pointerup",_0);Zn.addEventListener("pointercancel",_0);function _u(){yn("surface"),Qe.setAmbient("mars"),F.mode="intro";let i=Jt[F.focus];rn.pos.set(i.pivot.position.x+10,34,i.pivot.position.z+52),rn.look.set(i.pivot.position.x,0,i.pivot.position.z-8),an.position.copy(rn.pos),an.lookAt(rn.look),zs=2,Mu(F.focus,pr,mr),qd(F.focus,bt?.001:4.6,0),Te("#site-caption").textContent=i.data.site.toUpperCase(),Te("#caption-eyebrow").textContent=`${i.data.name.toUpperCase()} \xB7 ${i.data.coords}`,Te("#title").classList.remove("out"),Kt(bt?.8:3.4,()=>Te("#title").classList.add("out")),gn(1,bt?.3:1.1),ps()}Te("#home-btn").addEventListener("click",()=>{if(F.stage==="exp"||F.stage==="edl"){bu("home");return}if(F.stage==="ending"){Jn.stop(),rt.after=null,gn(0,.45),Kt(.5,()=>{pn.hide(),yn("home"),_t.goHome(F.lang),xr(),gr(),gn(1,.7)});return}F.stage!=="surface"||F.mode==="firing"||F.mode==="away"||(_r.close(),$d(),gn(0,.45),Kt(.5,()=>{yn("home"),_t.goHome(F.lang),Qe.setAmbient("space"),xr(),gr(),gn(1,.7)}))});var $t=null,Ti=null,qt={root:Te("#exp"),text:Te("#exp-text"),hud:Te("#exp-hud"),act:Te("#exp-act"),skip:Te("#exp-skip"),step:Te("#exp-step")},Ze={mode:null,kind:null,holding:!1,charge:0,step:0,hudT:0,onTap:null,onFull:null};function Gi(i,e,t){Ze.kind=i,Ze.mode=e,Ze.charge=0,Ze.holding=!1,e==="hold"?(Ze.onFull=t,Ze.onTap=null):(Ze.onTap=t,Ze.onFull=null),v0()}function v0(){let i=qt.act;i.hidden=!Ze.mode,Ze.mode&&(i.textContent=xe({launch:"expLaunchBtn",shield:"expShieldBtn",chute:"expChuteBtn",bags:"expBagsBtn"}[Ze.kind],F.lang),i.classList.toggle("hold",Ze.mode==="hold"),i.style.setProperty("--p",Ze.charge.toFixed(3)))}function Ra(i){Ze.mode&&(Qe.start(),Ze.mode==="hold"?(Ze.holding=i,qt.act.classList.toggle("pressed",i)):i&&Ze.onTap&&Ze.onTap())}qt.act.addEventListener("pointerdown",i=>{Ze.mode==="hold"&&(i.preventDefault(),qt.act.setPointerCapture?.(i.pointerId),Ra(!0))});["pointerup","pointercancel","lostpointercapture"].forEach(i=>qt.act.addEventListener(i,()=>{Ze.mode==="hold"&&Ra(!1)}));qt.act.addEventListener("click",i=>{Ze.mode==="tap"&&i.detail>0&&Ra(!0)});qt.act.addEventListener("contextmenu",i=>i.preventDefault());qt.skip.addEventListener("click",()=>bu("land"));function Ta(i){Ze.step=i,qt.step.textContent=i?`${mu(i,F.lang)}/${mu(5,F.lang)} \xB7 ${xe("expStep"+i,F.lang)}`:""}function zo(i,e){let t=rt.typing;t.shown>=t.full.length&&!Jn.speaking?Gt(i,e):rt.after=()=>Gt(i,e)}function Wo(i){let e=F.lang,t=(r,a=0)=>e==="ar"?Number(r).toLocaleString("ar-EG",{maximumFractionDigits:a,minimumFractionDigits:a}):Number(r).toLocaleString("en-US",{maximumFractionDigits:a,minimumFractionDigits:a}),n=(r,a,o="")=>`<div class="${o}"><dt>${xe(r,e)}</dt><dd>${a}</dd></div>`,s="";if(F.stage==="exp"&&$t){let r=$t.hud(),a=$t.phase;a==="pad"||a==="launch"?s=n("hDate",xe("launchDate",e))+n("hPlace","Cape Canaveral"):a==="cruise"||a==="approach"?s=n("hDay",`${t(r.days)} / ${t(208)}`)+n("hDist",`${t(r.mkm)} ${xe("uMkm",e)}`):s=n("hSpeed",`~${t(19e3)} ${xe("uKmh",e)}`)+n("hShield",`${t(Math.round(r.heat*100))}\u066A`.replace("\u066A",e==="ar"?"\u066A":"%"),r.heat>.99?"go":"")}else if(F.stage==="edl"&&Ti){let r=Ti.hud(),a=Ti.phase;if(a==="fall"||a==="chute"){let o=a==="fall"&&r.alt<=11.5;s=n("hAlt",`${t(r.alt,1)} ${xe("uKm",e)}`,o?"go":"")+n("hSpeed",`${t(Math.round(r.speed/10)*10)} ${xe("uKmh",e)}`)}else if(a==="drop"){let o=r.tg<=10&&r.tg>=6;s=n("hGround",`${t(r.tg,1)} ${xe("uSec",e)}`,o?"go":r.tg<6?"warn":"")+n("hSpeed",`~${t(300)} ${xe("uKmh",e)}`)}else s=n("hBounces",t(r.bounces))+n("hSpeed",`${t(r.speed)} ${xe("uKmh",e)}`)}(i||qt.hud._html!==s)&&(qt.hud.innerHTML=s,qt.hud._html=s)}async function y0(){if(!(F.stage!=="home"||!F.surfaceReady||vn.exp.classList.contains("loading"))){Qe.start(),vn.exp.classList.add("loading");try{window.EARTH_DAY_B64||await l0("models/earth-tex.js"),$t||($t=Ym(Bt,{marsMap:_t.planet.material.map,quality:Xd,env:vu,reduced:bt}),await $t.ready,$t.camera.add(pn.root),await Gd($t.scene,$t.camera),_t.camera.add(pn.root))}catch(i){console.warn(i),vn.exp.classList.remove("loading");return}vn.exp.classList.remove("loading"),F.stage==="home"&&(gn(0,.5),Kt(.55,()=>{yn("exp"),$t.resize(),$t.start(MS),$t.camera.add(pn.root),Gi(null,null),Ta(1),Wo(!0),qt.text.textContent="",Wi(),pn.show(),gn(1,.9);let i=()=>{F.stage!=="exp"||$t.phase!=="pad"||Ze.mode||Gi("launch","hold",()=>{$t.launch(),Qe.whoosh(5.5),Gi(null,null),rt.after=null,Gt("expLaunched")})};Kt(bt?.2:1,()=>{F.stage==="exp"&&Gt("expHello",()=>{Gt("expPad"),i()})}),Kt(bt?1:9,i)}))}}vn.exp.addEventListener("click",y0);function MS(i){F.stage==="exp"&&(i==="cruise"&&(Ta(2),zo("expCruise1",()=>Gt("expCruise2"))),i==="marsAhead"&&zo("expMars"),i==="approach"&&(Ta(3),zo("expApproach")),i==="entry"&&(rt.after=null,Gt("expEntry"),Gi("shield","hold",()=>{$t.enterOk(),Gi(null,null),Qe.setCharge(0),Qe.whoosh(2.4),Gt("expEntryOk")})),i==="plunged"&&(Hn.uniforms.uFlash.value=bt?.3:1,Hn.uniforms.uFadeColor.value.setRGB(1,.82,.62),gn(0,.5),Kt(.55,bS)))}function SS(i,e){if(ks.lerp(yu,Math.min(1,i*3)),Ze.mode==="hold"&&(Ze.charge=Ze.holding?Math.min(1,Ze.charge+i/(Ze.kind==="shield"?2.4:1.5)):Math.max(0,Ze.charge-i*.9),qt.act.style.setProperty("--p",Ze.charge.toFixed(3)),Ze.kind==="launch"&&($t.charge=Ze.charge),Ze.kind==="shield"&&($t.heat=Ze.charge,Qe.setCharge(Ze.charge)),Ze.charge>=1)){let t=Ze.onFull;Ze.mode=null,Ze.holding=!1,qt.act.classList.remove("pressed"),t&&t()}$t.update(i,e),pn.update(i,bt?null:ks),Kd(i),Ze.hudT+=i,Ze.hudT>.1&&(Ze.hudT=0,Wo())}function bS(){F.stage==="exp"&&(yn("edl"),pn.hide(),_t.camera.add(pn.root),Jt.forEach(i=>{i.pivot.visible=!1}),zs=2,Qe.setAmbient("mars"),Ti.start(ES),Ta(4),Wo(!0),Gi("chute","tap",()=>{Ti.press()==="early"&&Gt("edlEarly")}),Gt("edlChute"),gn(1,.6),Kt(.8,()=>Hn.uniforms.uFadeColor.value.setRGB(.86,.56,.4)))}function ES(i){F.stage==="edl"&&((i==="chuteWindow"||i==="bagsWindow")&&qt.act.classList.add("ready"),i==="chuteLate"&&(qt.act.classList.remove("ready"),Gt("edlChuteLate")),i==="chuteOk"&&(qt.act.classList.remove("ready"),Gi(null,null),Qe.whoosh(1.2),Gt("edlChuteOk")),i==="drop"&&(Ta(5),Gi("bags","tap",()=>{Ti.press()==="early"&&Gt("edlBagsEarly")}),zo("edlBags")),i==="bagsLate"&&(qt.act.classList.remove("ready"),Gt("edlBagsLate")),i==="bagsOk"&&(qt.act.classList.remove("ready"),Gi(null,null),Qe.chime(),Gt("edlBagsOk")),i==="rockets"&&(Hn.uniforms.uFlash.value=bt?.15:.45,Qe.zap()),i==="bounce"&&(Qe.blip(.35),Ti.hud().bounces===1&&Gt("edlBounce")),i==="opened"&&zo("edlOpened",()=>Gt("edlNow",()=>Kt(1.2,()=>{F.stage==="edl"&&bu("hall")}))))}function wS(i,e){Ti.update(i,e,an),Kn.update(i,null),ko.sky.material.uniforms.uTime.value=e,ko.dust.material.uniforms.uTime.value=e,Hn.uniforms.uFlash.value=Math.max(0,Hn.uniforms.uFlash.value-i*1.6),Kd(i),Ze.hudT+=i,Ze.hudT>.1&&(Ze.hudT=0,Wo())}function bu(i){F.stage!=="exp"&&F.stage!=="edl"||(Jn.stop(),rt.after=null,Gi(null,null),Qe.setCharge(0),gn(0,.45),Kt(.5,()=>{if(Ti?.stop(),pn.hide(),_t.camera.add(pn.root),Jt.forEach(t=>{t.pivot.visible=!0}),zs=2,Hn.uniforms.uFadeColor.value.setRGB(.86,.56,.4),i==="home"){yn("home"),_t.goHome(F.lang),Qe.setAmbient("space"),xr(),gr(),gn(1,.7);return}if(F.focus=1,i==="land"){_u();return}yn("surface"),Qe.setAmbient("mars"),F.mode="intro";let e=Jt[1];rn.pos.set(e.pivot.position.x+7,e.pivot.position.y+6,e.pivot.position.z+14),rn.look.copy(e.pivot.position),an.position.copy(rn.pos),an.lookAt(rn.look),Mu(1,pr,mr),qd(1,bt?.001:2.6,.2),Te("#site-caption").textContent=e.data.site.toUpperCase(),Te("#caption-eyebrow").textContent=`SPIRIT \xB7 ${mu(new Date().getFullYear(),F.lang).replace(/[,٬]/g,"")}`,Te("#title").classList.remove("out"),Kt(bt?.8:2.8,()=>Te("#title").classList.add("out")),gn(1,.9),ps()}))}var _r=Hm({getLang:()=>F.lang,audio:Qe,onBadge:i=>{F.badges.has(i)||(F.badges.add(i),gu("\u2605 "+xe("savedSpirit",F.lang)))},onClose:()=>document.body.classList.remove("sheet-open"),onLegacy:i=>fs.openLegacy({mode:"explore",at:i})});nt.explore.addEventListener("click",()=>{F.stage!=="surface"||!F.awake[F.focus]||(Jn.stop(),wi.shown=1e9,nt.text.textContent=wi.full,document.body.classList.add("sheet-open"),_r.open(Jt[F.focus]))});Te("#about-btn").addEventListener("click",()=>_r.openAbout());document.addEventListener("keydown",i=>{if(i.key!=="Tab")return;let e=[...document.querySelectorAll(".modal")].find(r=>!r.hidden);if(!e)return;let t=[...e.querySelectorAll('button:not([disabled]), a[href], input, [tabindex]:not([tabindex="-1"])')].filter(r=>r.offsetParent!==null);if(!t.length)return;let n=t[0],s=t[t.length-1];e.contains(document.activeElement)?i.shiftKey&&document.activeElement===n?(i.preventDefault(),s.focus()):!i.shiftKey&&document.activeElement===s&&(i.preventDefault(),n.focus()):(i.preventDefault(),n.focus())});var TS=[...document.querySelectorAll("#journey li")],t0=[];function vr(){let i=[F.started,...F.awake,F.done],e=i.indexOf(!1);TS.forEach((n,s)=>{let r=xe("j"+(s+1),F.lang);n.classList.toggle("done",i[s]),n.classList.toggle("now",s===e),i[s]&&t0[s]===!1&&!bt&&(n.classList.add("just"),setTimeout(()=>n.classList.remove("just"),650)),n.title=r,n.querySelector(".sr-only").textContent=r+(i[s]?" \u2713":""),s===e?n.setAttribute("aria-current","step"):n.removeAttribute("aria-current")}),t0=i;let t=i.filter(Boolean).length;Te("#j-count").textContent=F.lang==="ar"?`${"\u0660\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669"[t]} / \u0665`:`${t} / 5`}var Mt={root:Te("#ending"),text:Te("#end-text"),form:Te("#end-form"),name:Te("#end-name"),err:Te("#end-err"),steps:Te("#end-steps"),busy:!1},fs=Vm({getLang:()=>F.lang,audio:Qe,onQuizDone:(i,e)=>{F.quiz=i==null?null:{score:i,total:e},!(F.stage!=="ending"||!Mt.form.hidden)&&(Mt.steps.hidden=!0,Wi(),Gt("endC",S0))},onLegacyClosed:i=>{i==="ending"&&F.stage==="ending"&&Mt.form.hidden&&(Mt.steps.hidden=!1,Wi())}});function AS(){F.stage==="ending"&&(Mt.steps.hidden=!1,Wi(),Kt(bt?.1:.6,()=>{F.stage==="ending"&&Mt.form.hidden&&!fs.isOpen&&fs.openLegacy({mode:"ending"})}))}Te("#end-legacy").addEventListener("click",()=>fs.openLegacy({mode:"ending"}));Te("#end-skip").addEventListener("click",()=>{fs.close(),Mt.steps.hidden=!0,Wi(),Gt("endC",S0)});var Ot={root:Te("#cert"),img:Te("#cert-img"),dl:Te("#cert-dl"),url:null,back:null};function M0(){F.stage!=="surface"||F.mode!=="hall"||!h0()||(F.mode="away",_r.close(),$d(),nt.cta.hidden=!0,Qe.whoosh(1.8),gn(0,.6),Kt(.65,()=>{yn("ending"),u0(),Qe.setAmbient("space"),_t.resize(F.lang),_t.enterEnding(),Mt.form.hidden=!0,Mt.steps.hidden=!0,Mt.text.textContent="",F.quiz=null,Wi(),pn.show(),gn(1,bt?.3:1),Kt(bt?.2:1.4,()=>{F.stage==="ending"&&Gt("endA",()=>Gt("endB",AS))})}))}function S0(){F.stage==="ending"&&(Mt.form.hidden=!1,Wi(),Vo||Mt.name.focus({preventScroll:!0}))}nt.cta.addEventListener("click",M0);async function RS(){let i=['600 40px "Chakra Petch"','600 40px "Chakra"','400 40px "Lalezar"','600 40px "IBM Plex Sans Arabic"','600 40px "Plex Arabic"','400 40px "IBM Plex Sans Arabic"','400 40px "Plex Arabic"'];try{await Promise.race([Promise.all(i.map(e=>document.fonts.load(e,"A\u0628").catch(()=>{}))),new Promise(e=>setTimeout(e,1500))])}catch{}}Mt.form.addEventListener("submit",async i=>{if(i.preventDefault(),Mt.busy)return;let e=Mt.name.value.replace(/\s+/g," ").trim().slice(0,28);if(!e){Mt.err.textContent=xe("nameNeeded",F.lang),Mt.name.setAttribute("aria-invalid","true"),Mt.name.focus();return}Mt.err.textContent="",Mt.name.removeAttribute("aria-invalid"),Mt.busy=!0,Qe.chime(),await RS(),Wm(e,F.lang,new Date,[...F.badges],F.quiz).toBlob(n=>{Mt.busy=!1,n&&(Ot.url&&URL.revokeObjectURL(Ot.url),Ot.url=URL.createObjectURL(n),Ot.blob=n,Ot.img.src=Ot.url,Ot.img.alt=`${xe("certTitle",F.lang)}: ${e}`,Ot.dl.href=Ot.url,Ot.dl.download=`The-Last-Footprint-${e.replace(/[^\p{L}\p{N}]+/gu,"-").replace(/^-|-$/g,"")||"explorer"}.png`,F.done=!0,vr(),CS())},"image/png")});function CS(){Ot.back=document.activeElement,Ot.root.hidden=!1,Ot.root.offsetWidth,Ot.root.classList.add("open"),Ot.root.querySelector(".cert-close").focus({preventScroll:!0})}function Eu(){Ot.root.classList.remove("open"),setTimeout(()=>{Ot.root.classList.contains("open")||(Ot.root.hidden=!0)},200),Ot.back?.focus?.({preventScroll:!0})}Ot.root.querySelector(".cert-close").addEventListener("click",Eu);Ot.root.addEventListener("click",i=>{i.target===Ot.root&&Eu()});var Wd=null;(async()=>{try{window.claude&&window.claude.use&&(Wd=await window.claude.use("downloads"))}catch{}})();Ot.dl.addEventListener("click",async i=>{if(!Ot.url){i.preventDefault();return}if(Wd){i.preventDefault();try{await Wd.save({filename:Ot.dl.download,data:Ot.blob})}catch(e){(!e||e.code!=="declined")&&gu(xe("saveHint",F.lang))}}});function b0(){Ot.root.hidden||Eu(),Jn.stop(),pn.hide(),rt.after=null,fs.close(),F.awake=[!1,!1,!1],F.line=[0,0,0],F.done=!1,F.badges.clear(),F.focus=1,F.quiz=null,Jt.forEach(i=>{i.u.uSleep.value=1,i.u.uGlow.value=0,i.wakeT=-1,i.push=1,i.yaw=i.baseYaw,i.yawVel=0,i.pivot.rotation.y=i.baseYaw,i.pivot.position.y=i.baseY,i.model.rotation.z=0}),zs=2,Mt.form.hidden=!0,Mt.steps.hidden=!0,Mt.name.value="",Mt.err.textContent="",Mt.name.removeAttribute("aria-invalid"),gn(0,.45),Kt(.5,()=>{yn("home"),_t.goHome(F.lang),Qe.setAmbient("space"),xr(),gr(),ps(),vr(),gn(1,.7)})}Te("#end-replay").addEventListener("click",b0);Mt.name.addEventListener("input",()=>{Mt.err.textContent&&(Mt.err.textContent="",Mt.name.removeAttribute("aria-invalid"))});async function E0(){let i=a=>new Promise(o=>setTimeout(o,a)),e=async a=>{for(;!a();)await i(50)};Te("#fps").classList.add("show"),await e(()=>F.mode==="hall");let t=async()=>{An.phase="charge",Vs(!0),await e(()=>F.mode==="firing"),An.phase="fire+wake",await i(3200),An.phase="idle"};await i(2500),await t(),An.phase="fly",wa(0),await i(2600),An.phase="idle",await t(),An.phase="fly",wa(2),await i(2600),An.phase="idle",await t(),await i(1500);let n=Object.entries(An.data).map(([a,o])=>{let l=[...o].sort((h,d)=>h-d),c=o.reduce((h,d)=>h+d,0)/o.length,u=l[Math.floor(l.length*.99)]||0;return`${a}: ${(1e3/c).toFixed(0)} fps avg \xB7 worst1% ${(1e3/u).toFixed(0)} fps \xB7 max ${Math.max(...o).toFixed(0)}ms \xB7 hitches>50ms ${o.filter(h=>h>50).length}`});An.on=!1;let s=n.join(`
`)+`
pr ${F.pr.toFixed(2)} \xB7 ${innerWidth}x${innerHeight} \xB7 dpr ${devicePixelRatio}`;window.__benchResult=s;let r=Te("#fps");r.style.whiteSpace="pre",r.textContent=s,r.dataset.final="1"}An.on&&E0();window.__tlf={ready:!1,surfaceReady:!1,S:F,rovers:Jt,renderer:Bt,focusRover:wa,opening:_t,receiveSignal:g0,startWarp:jd,setStage:yn,selectSite:Su,enterPick:x0,backHome:Jd,audio:Qe,speech:Jn,explore:_r,finale:fs,goEnding:M0,replay:b0,renderJourney:vr,startExpedition:()=>y0(),get expd(){return $t},get edl(){return Ti},expPress:i=>Ra(i),leaveExpedition:i=>bu(i),goSurface:()=>{F.started=!0,document.body.classList.add("started"),_u()},wakeNow:()=>{F.mode==="hall"&&!F.awake[F.focus]&&(F.charge=1,d0())}};vS().catch(i=>{console.error(i),Te("#loader-text").textContent=xe("loadError",F.lang)});})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
