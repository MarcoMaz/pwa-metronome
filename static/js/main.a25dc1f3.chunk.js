(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{21:function(e,t,n){e.exports=n(32)},26:function(e,t,n){},27:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var a,r,i,o,l,c,s=n(0),u=n.n(s),m=n(17),d=n.n(m),p=(n(26),n(27),function(){return u.a.createElement("div",null,"I'm the helper")}),v=n(19),f=n(9),g=n(33),h=n(34),w=0,b=0,E=function(){var e=Object(s.useState)(!1),t=Object(f.a)(e,2),n=t[0],m=t[1],d=Object(s.useState)(100),p=Object(f.a)(d,2),E=p[0],_=p[1],y=Object(s.useState)(3),N=Object(f.a)(y,2),S=N[0],k=N[1],C=function(e){return 6e4/e}(E)/1e3,O=C/2;l=document.getElementsByClassName("Circles_beat"),Object(s.useEffect)(function(){return a=new AudioContext,o=S-1,n?(a.resume(),clearInterval(r),r=setInterval(function(){a.currentTime-w>=O&&(w=b=w+C,function(e,t){null!==(c=document.querySelector(".-active"))&&c.classList.remove("-active"),i>0?l[i-1].classList.remove("-active"):l[o].classList.remove("-active");var n=e.createOscillator();n.connect(e.destination),n.start(t),n.stop(t+1/16),n.frequency.value=0===i?"800":"400",Number(l[i].dataset.index)===i&&l[i].classList.add("-active"),i===o?i=0:i+=1}(a,b))},C/25)):(a.suspend(),clearInterval(r),w=0,b=0,i=0),function(){return clearInterval(r)}});return u.a.createElement("div",{id:"metronome"},u.a.createElement("div",{className:"Circles"},Object(v.a)(Array(S)).map(function(e,t){return u.a.createElement("div",{key:t,"data-index":t,className:"Circles_beat"+(n?" Circles_beat--plays":"")})})),u.a.createElement("div",{className:"TimeSignature"},u.a.createElement("label",{className:"TimeSignature__label",htmlFor:"TimeSignature__Input"},u.a.createElement("div",{className:"TimeSignature__label__numerator"},S),u.a.createElement("hr",{className:"TimeSignature__label__divider"}),u.a.createElement("div",{className:"TimeSignature__label__denominator"},"4")),u.a.createElement("input",{className:"TimeSignature__input",id:"TimeSignature__input",type:"range",min:"2",max:"20",step:"1",onChange:function(e){a.suspend(),k(Number(e.target.value)),w=0,b=0,i=0},value:S})),u.a.createElement("div",{className:"Bpm"},u.a.createElement("label",{className:"Bpm_label",htmlFor:"Bpm_input"},E," BPM"),u.a.createElement("input",{className:"Bpm_input",id:"Bpm_input",type:"range",min:"40",max:"200",step:"1",onChange:function(e){a.suspend(),_(e.target.value),w=0,b=0,i=0},value:E})),u.a.createElement("button",{className:"PlayButton",onClick:function(){return m(!0!==n)}},n?u.a.createElement(h.a,null):u.a.createElement(g.a,null)))},_=n(8),y=n(1),N=function(){return u.a.createElement(_.a,null,u.a.createElement(y.a,{exact:!0,path:"/",component:E}),u.a.createElement(y.a,{path:"/help",component:p}),u.a.createElement(E,null),u.a.createElement("ul",null,u.a.createElement("li",null,u.a.createElement(_.b,{to:"/"},"HOME")),u.a.createElement("li",null,u.a.createElement(_.b,{to:"/help"},u.a.createElement("span",null,"Help")))))},S=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function k(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),window.swUpdateReady=!0,t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}d.a.render(u.a.createElement(N,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/pwa-metronome",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/pwa-metronome","/service-worker.js");S?(function(e,t){fetch(e).then(function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):k(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):k(t,e)})}}()}},[[21,1,2]]]);
//# sourceMappingURL=main.a25dc1f3.chunk.js.map