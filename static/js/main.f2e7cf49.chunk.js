(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,n){e.exports=n(36)},25:function(e,t,n){},30:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(13),l=n.n(o),i=(n(24),n(25),n(1)),r=n(3),u=n(4),s=n(5),m=n(9),p=n(2),d=n.n(p),h=n(14),f={ids:[],add:function(e,t){this.ids.push({id:e,callback:t})},remove:function(e){e?((0,this.ids.find(function(t){return t.id===e}).callback)(),this.ids=this.ids.filter(function(t){return t.id!==e})):(this.ids.forEach(function(e){return e.callback()}),this.ids=[])}},v=function(e){var t=e.message,n=e.onClose,a=e.type,c=void 0===a?"info":a,o=e.width,l=void 0===o?"300px":o,i=e.rtl,r=e.closeOnClick,u=e.mouseEnter,s=e.mouseLeave;return d.a.createElement("div",{className:"item ".concat(c," ").concat(i?"rtl":"ltr"),style:{width:l},onClick:function(){return r&&n()},onMouseEnter:u,onMouseLeave:s},d.a.createElement("span",null,t),d.a.createElement("button",{onClick:n},"\u2716"))},E={};function b(e,t){var n=-1,a=0,c=t;this.pause=function(){clearTimeout(n),c-=Date.now()-a},this.resume=function(){a=Date.now(),clearTimeout(n),n=setTimeout(e,c)},this.resume()}var g,y=function(e){var t=Object(p.useState)([]),n=Object(r.a)(t,2)[1],a=Object(p.useRef)([]),c=e.autoClose,o=void 0===c?3e3:c,l=e.delay,i=void 0===l?0:l,u=e.id,s=function(t){a.current=function(e,t){return e.filter(function(e){return e.key!=t})}(a.current,t),n(a.current),0===a.current.length&&e.cleared()};return Object(p.useEffect)(function(){var t={id:u,onClose:function(){return s(u)},mouseEnter:function(){return c("pause")},mouseLeave:function(){return c("resume")}},c=function(t){return e.pauseOnHover&&E[u]&&E[u][t]()},l=e.render?e.render(t):d.a.createElement(v,Object.assign({},e,t,{key:u})),r=e.animation,p=void 0===r?{}:r,h=p.duration||300,g=o||1e9;(p.in||p.out)&&(l=d.a.createElement("div",{key:u,style:{animationName:"".concat(p.in,", ").concat(p.out),animationDelay:"0ms, ".concat(i+g,"ms"),animationDuration:"".concat(h,"ms, ").concat(h,"ms")}},l));var y=e.onlyLast?[]:a.current,x=e.newestOnTop,O=void 0===x||x;a.current=O?[l].concat(Object(m.a)(y)):[].concat(Object(m.a)(y),[l]),f.add(u,function(){return s(u)}),setTimeout(function(){return n(a.current)},i),o&&(E[u]=new b(function(){return s(u)},i+o+h))},[e]),d.a.createElement(d.a.Fragment,null,a.current)},x=0,O=function(e){var t=(e=Object.assign({},g||{},e)).position,n=void 0===t?"top-right":t,a=document.querySelector(".simple-react-notifier."+n);return a||((a=document.createElement("div")).classList.add("simple-react-notifier",n),a.style.direction=e.rtl?"rtl":"ltr",document.body.appendChild(a)),Object(h.render)(d.a.createElement(y,Object.assign({},e,{id:x,cleared:function(){try{document.body.removeChild(a)}catch(e){}}})),a),++x-1};["info","success","error"].forEach(function(e){return O[e]=function(t){return O({message:t,type:e})}}),O.configure=function(e){g=e},O.dismiss=function(e){return f.remove(e)};var k=O,N=(n(30),function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,a=arguments.length>2?arguments[2]:void 0,c="";t.animation||delete t.animation,t.in||delete t.in,t.out||delete t.out;var o=Object.keys(t).length,l=0;for(var i in t){var r=l++<o-1?",":"",u=t[i],s="  ".repeat(n),m="string"!==typeof u||a?u:'"'.concat(u,'"');m="object"===typeof m?"{\n".concat(e(m,n+1)).concat(s,"}"):m,c+="".concat(s).concat(i,": ").concat(m).concat(r,"\n")}return c}),C=function(){return c.a.createElement("a",{target:"_blank",href:"https://github.com/alexpermyakov/simple-react-notifications",rel:"noopener noreferrer",className:"github-corner","aria-label":"Open GitHub project",style:{position:"absolute",top:"0px",fill:"white",right:"0px"}},c.a.createElement("svg",{width:"125",height:"125",viewBox:"0 0 250 250"},c.a.createElement("path",{d:"M0 0l115 115h15l12 27 108 108V0z",fill:"#f36666"}),c.a.createElement("path",{d:"M128 109c-15-9-9-19-9-19 3-7 2-11 2-11-1-7 3-2 3-2 4 5 2 11 2 11-3 10 5 15 9 16",style:{transformOrigin:"130px 106px"}}),c.a.createElement("path",{d:"M115 115s4 2 5 0l14-14c3-2 6-3 8-3-8-11-15-24 2-41 5-5 10-7 16-7 1-2 3-7 12-11 0 0 5 3 7 16 4 2 8 5 12 9s7 8 9 12c14 3 17 7 17 7-4 8-9 11-11 11 0 6-2 11-7 16-16 16-30 10-41 2 0 3-1 7-5 11l-12 11c-1 1 1 5 1 5z"})))};function j(){var e=Object(u.a)(["\n  font-size: 18px;\n  margin-bottom: 12px;\n"]);return j=function(){return e},e}function w(){var e=Object(u.a)(['\n  max-width: 960px;\n  margin: 0 auto;\n  input[type="checkbox"] {\n    height: 20px;\n    width: 20px;\n  }\n  .item {\n    margin-bottom: 8px;\n    span {\n      line-height: 36px;\n      height: 36px;\n      display: inline-block;\n      width: 150px;\n    }\n  }\n  .input {\n    width: 150px;\n  }\n  .select select {\n    width: 150px;\n  }\n  .textarea {\n    height: 250px;\n    cursor: default !important;\n  }\n']);return w=function(){return e},e}function T(){var e=Object(u.a)(["\n  background-color: #f6f8fa;\n  border-radius: 3px;\n  font-size: 85%;\n  line-height: 1.45;\n  overflow: auto;\n  padding: 16px;\n"]);return T=function(){return e},e}function H(){var e=Object(u.a)(["\n  background: #2f2f2f;\n  height: 250px;\n  .title,\n  .subtitle {\n    color: white;\n    text-align: center;\n    margin-bottom: 32px;\n  }\n  .title {\n    margin-top: 48px;\n  }\n"]);return H=function(){return e},e}var S=s.a.div.attrs({className:"section"})(H()),z=s.a.pre(T()),L=s.a.section.attrs({className:"columns"})(w()),I=s.a.h3(j()),D="The number of meetings you have next week:  ",M=function(e){var t=e.header,n=e.onClosePanel;return c.a.createElement("div",{className:"route-info",onClick:n,style:{height:"250px",background:"white",color:"black",padding:"8px 16px",position:"relative",boxShadow:"0 1px 10px 0 rgba(0, 0, 0, 0.1)"}},c.a.createElement("h3",{className:"subtitle"},t),c.a.createElement("p",null,"Bicycle 2.4 km, 8 min."),c.a.createElement("p",null,"Use caution - may involve errors or sections not suited for bicycling"))},P={in:"fadeIn",out:"fadeOut",duration:400},R=function(){var e=Object(a.useState)("success"),t=Object(r.a)(e,2),n=t[0],o=t[1],l=Object(a.useState)({autoClose:3e3,width:275,position:"top-right",delay:0,closeOnClick:!1,pauseOnHover:!1,onlyLast:!1,rtl:!1,newestOnTop:!0,animation:P}),u=Object(r.a)(l,2),s=u[0],m=u[1],p=Object(a.useState)(s.animation),d=Object(r.a)(p,2),h=d[0],f=d[1];Object(a.useEffect)(function(){return k.configure(s)},[s]);var v=s.position,E=s.autoClose,b=s.onlyLast,g=s.delay,y=s.animation,x=s.rtl,O=s.newestOnTop,j=s.pauseOnHover,w=s.closeOnClick,T=s.width;return c.a.createElement(c.a.Fragment,null,c.a.createElement(S,null,c.a.createElement("h1",{className:"title"},"Simple React Notifications"),c.a.createElement("h2",{className:"subtitle"},"Tiny React.js notification library (1kb gzip)."),c.a.createElement(C,null)),c.a.createElement(L,null,c.a.createElement("div",{className:"column"},c.a.createElement("div",null,c.a.createElement("button",{className:"button is-primary",onClick:function(){"custom"===n?k({render:function(e){var t=e.id,n=e.onClose;return c.a.createElement(M,{key:t,onClosePanel:n,header:"The shortest way to ride home."})}}):k[n](D+(new Date).getSeconds())}},"Click to show!"),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement(I,null,"Options"),c.a.createElement("div",{className:"item"},c.a.createElement("span",null,"position"),c.a.createElement("div",{className:"select"},c.a.createElement("select",{onChange:function(e){var t=e.target;m(Object(i.a)({},s,{position:t.value}))},value:v},c.a.createElement("option",{value:"top-left"},"top-left"),c.a.createElement("option",{value:"top-center"},"top-center"),c.a.createElement("option",{value:"top-right"},"top-right"),c.a.createElement("option",{value:"bottom-left"},"bottom-left"),c.a.createElement("option",{value:"bottom-center"},"bottom-center"),c.a.createElement("option",{value:"bottom-right"},"bottom-right")))),c.a.createElement("div",{className:"item"},c.a.createElement("span",null,"type"),c.a.createElement("div",{className:"select"},c.a.createElement("select",{onChange:function(e){var t=e.target;return o(t.value)},value:n},c.a.createElement("option",{value:"success"},"success"),c.a.createElement("option",{value:"error"},"error"),c.a.createElement("option",{value:"info"},"info"),c.a.createElement("option",{value:"custom"},"custom")))),"custom"===n&&c.a.createElement("div",{className:"item"},c.a.createElement("span",null,"Demo component"),c.a.createElement("textarea",{className:"textarea",disabled:!0},'const RouteInfo = ({(header, onClosePanel)}) => (\n  <div className="route-info" onClick={onClosePanel}>\n    <h3>{header}</h3>\n    <p>\n      Bicycle 2.4 km, 8 min.\n    </p>\n    <p>\n      Use caution - may involve errors or\n      sections not suited for bicycling\n    </p>\n  </div>\n  );')),c.a.createElement("div",{className:"item"},c.a.createElement("span",null,"autoClose"),c.a.createElement("input",{className:"input",type:"number",value:E,onChange:function(e){var t=e.target;m(Object(i.a)({},s,{autoClose:!!t.value&&+t.value}))}})),c.a.createElement("div",{className:"item"},c.a.createElement("span",null,"width"),c.a.createElement("input",{className:"input",type:"number",value:T,onChange:function(e){var t=e.target;m(Object(i.a)({},s,{width:+t.value}))}})),c.a.createElement("div",{className:"item"},c.a.createElement("span",null,"delay"),c.a.createElement("input",{className:"input",type:"number",value:g,onChange:function(e){var t=e.target;m(Object(i.a)({},s,{delay:+t.value}))}})),c.a.createElement("div",{className:"item"},c.a.createElement("label",{className:"checkbox"},c.a.createElement("span",{style:{height:"20px",lineHeight:"20px"}},"pauseOnHover"),c.a.createElement("input",{type:"checkbox",checked:j,value:g,onChange:function(){m(Object(i.a)({},s,{pauseOnHover:!j}))}}))),c.a.createElement("div",{className:"item"},c.a.createElement("label",{className:"checkbox"},c.a.createElement("span",{style:{height:"20px",lineHeight:"20px"}},"closeOnClick"),c.a.createElement("input",{type:"checkbox",checked:w,value:g,onChange:function(){m(Object(i.a)({},s,{closeOnClick:!w}))}}))),c.a.createElement("div",{className:"item"},c.a.createElement("label",{className:"checkbox"},c.a.createElement("span",{style:{height:"20px",lineHeight:"20px"}},"onlyLast"),c.a.createElement("input",{type:"checkbox",checked:b,value:g,onChange:function(){m(Object(i.a)({},s,{onlyLast:!b}))}}))),c.a.createElement("div",{className:"item"},c.a.createElement("label",{className:"checkbox"},c.a.createElement("span",{style:{height:"20px",lineHeight:"20px"}},"newestOnTop"),c.a.createElement("input",{type:"checkbox",checked:O,value:g,onChange:function(){m(Object(i.a)({},s,{newestOnTop:!O}))}}))),c.a.createElement("div",{className:"item"},c.a.createElement("label",{className:"checkbox"},c.a.createElement("span",{style:{height:"20px",lineHeight:"20px"}},"rtl"),c.a.createElement("input",{type:"checkbox",checked:x,value:g,onChange:function(){m(Object(i.a)({},s,{rtl:!x}))}}))),c.a.createElement("div",{className:"item"},c.a.createElement("span",{style:{height:"20px",lineHeight:"20px"}},"animation"),c.a.createElement("input",{type:"checkbox",checked:h,value:h,onChange:function(){f(!h),m(Object(i.a)({},s,{animation:!y&&P}))}})),h&&c.a.createElement("div",{className:"item"},c.a.createElement("label",{className:"checkbox"},c.a.createElement("span",null,"duration"),c.a.createElement("input",{className:"input",type:"number",value:(y||P).duration,onChange:function(e){var t=e.target;m(Object(i.a)({},s,{animation:{in:(y||P).in,out:(y||P).out,duration:+t.value}}))}}))),h&&c.a.createElement("div",{className:"item"},c.a.createElement("span",null,"in"),c.a.createElement("div",{className:"select"},c.a.createElement("select",{onChange:function(e){var t=e.target;m(Object(i.a)({},s,{animation:Object(i.a)({},y,{in:t.value||!1})}))},value:(y||P).in},c.a.createElement("option",{value:""},"None"),c.a.createElement("option",{value:"fadeIn"},"fadeIn"),c.a.createElement("option",{value:"zoomIn"},"zoomIn")))),h&&c.a.createElement("div",{className:"item"},c.a.createElement("span",null,"out"),c.a.createElement("div",{className:"select"},c.a.createElement("select",{onChange:function(e){var t=e.target;m(Object(i.a)({},s,{animation:Object(i.a)({},y,{out:t.value||!1})}))},value:(y||P).out},c.a.createElement("option",{value:""},"None"),c.a.createElement("option",{value:"fadeOut"},"fadeOut"),c.a.createElement("option",{value:"zoomOut"},"zoomOut")))))),c.a.createElement("div",{className:"column"},c.a.createElement(I,null,c.a.createElement("b",null,"Configuration")," (optional, common for all notifications)"),c.a.createElement(z,null,function(e){return"notifier.configure({\n"+N(e)+"});"}(s)),c.a.createElement("br",null),c.a.createElement(I,null,c.a.createElement("b",null,"Show notification")," (you can override configuration here)"),"custom"!==n&&c.a.createElement(z,null,function(e){return'notifier.success("'.concat(D,'", {\n').concat(N(e),"});")}({position:v,autoClose:E})),"custom"===n&&c.a.createElement(z,null,function(e){return e.render='({ id, onClose }) => (\n    <RouteInfo\n      key={id}\n      onClosePanel={onClose}\n      header={"The shortest way to ride home."}\n    />\n  )',"notifier({\n".concat(N(e,1,!0),"})")}({position:v,autoClose:E})))))};l.a.render(c.a.createElement(R,null),document.querySelector("#root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.f2e7cf49.chunk.js.map