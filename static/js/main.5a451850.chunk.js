(this["webpackJsonpgif-app"]=this["webpackJsonpgif-app"]||[]).push([[0],{20:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(7),r=n.n(c),i=n(2),s=n(10),u=n(8),o=n.n(u),d=n(0),j=function(e){var t=e.setCategories,n=Object(a.useState)(""),c=Object(i.a)(n,2),r=c[0],u=c[1];return Object(d.jsx)("form",{onSubmit:function(e){e.preventDefault(),r.trim().length>0&&(t((function(e){return[r].concat(Object(s.a)(e))})),u(""))},children:Object(d.jsx)("input",{type:"text",value:r,onChange:function(e){u(e.target.value)}})})};j.propType={setCategories:o.a.func.isRequired};var f=n(11),l=n(6),b=n.n(l),p=n(9),m=function(){var e=Object(p.a)(b.a.mark((function e(t){var n,a,c,r,i;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(t),"&limit=10&api_key=K1JRWy8nWR754BvDYszwhGvAoLfebXuz"),e.next=3,fetch(n);case 3:return a=e.sent,e.next=6,a.json();case 6:return c=e.sent,r=c.data,i=r.map((function(e){var t;return{id:e.id,title:e.title,url:null===(t=e.images)||void 0===t?void 0:t.downsized_medium.url}})),e.abrupt("return",i);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(e){e.id;var t=e.title,n=e.url;return Object(d.jsxs)("div",{className:"card animate__animated animate__fadeIn",children:[Object(d.jsx)("img",{src:n,alt:t}),Object(d.jsx)("p",{children:t})]})},O=function(e){var t=e.category,n=function(e){var t=Object(a.useState)({data:[],loadding:!0}),n=Object(i.a)(t,2),c=n[0],r=n[1];return Object(a.useEffect)((function(){m(e).then((function(e){setTimeout((function(){r({data:e,loadding:!1})}),1500)}))}),[e]),c}(t),c=n.data,r=n.loadding;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h3",{className:"animate__animated animate__fadeIn",children:t}),r&&Object(d.jsx)("p",{className:"animate__animated animate__flash",children:"Loading..."}),Object(d.jsx)("div",{className:"card-grid",children:c.map((function(e){return Object(d.jsx)(h,Object(f.a)({},e),e.id)}))})]})},v=(n(20),function(){var e=Object(a.useState)(["Goku"]),t=Object(i.a)(e,2),n=t[0],c=t[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{children:"Gif - App"}),Object(d.jsx)(j,{setCategories:c}),Object(d.jsx)("hr",{}),Object(d.jsx)("ol",{children:n.map((function(e){return Object(d.jsx)(O,{category:e},e)}))})]})});r.a.render(Object(d.jsx)(v,{}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.5a451850.chunk.js.map