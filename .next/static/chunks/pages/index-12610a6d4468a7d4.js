(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8581:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(2632)}])},2632:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Q}});var r=n(8520),a=n.n(r),c=n(5893),i=n(7357),s=n(7948),o=n(9669),l=n.n(o),u=n(9008),d=n(896),f=n(7294),p=n(6242),h=n(7906),x=n(3184),v=n(3816),g=n(3252),j=n(295),m=n(9661),b=n(5861),y=n(5347),Z=n(1163),O=n(5697),S=n.n(O),w=n(1964),P=n.n(w);function k(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function E(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){k(e,t,n[t])}))}return e}function C(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var _=function(e){var t=e.candidates,n=e.setcandidate,r=e.activeurl,a=e.setactive,s=e.nextpage,o=e.setnext,u=e.prevpage,d=e.setprev,O=e.count,S=e.setcount,w=C(e,["candidates","setcandidate","activeurl","setactive","nextpage","setnext","prevpage","setprev","count","setcount"]),k=(0,f.useState)([]),_=(k[0],k[1],(0,f.useState)(25)),I=_[0],N=_[1],L=(0,f.useState)(0),T=L[0],D=L[1],B=(0,f.useState)(),U=B[0],q=B[1],z=(0,f.useState)(!1),A=z[0],G=(z[1],(0,Z.useRouter)());(0,f.useEffect)((function(){q(t)}),[t]);return(0,c.jsx)(c.Fragment,{children:A?(0,c.jsx)("div",{children:" Loading...."}):(0,c.jsxs)(p.Z,E({},w,{children:[(0,c.jsx)(P(),{children:(0,c.jsx)(i.Z,{sx:{minWidth:800},children:(0,c.jsxs)(h.Z,{children:[(0,c.jsx)(x.Z,{children:(0,c.jsxs)(v.Z,{children:[(0,c.jsx)(g.Z,{children:"Name"}),(0,c.jsx)(g.Z,{children:"Location"}),(0,c.jsx)(g.Z,{style:{"text-align":"center"},children:"Headline"}),(0,c.jsx)(g.Z,{children:"Email"})]})}),(0,c.jsx)(j.Z,{children:U&&U.slice(0,I).map((function(e,t){return(0,c.jsxs)(v.Z,{hover:!0,onClick:function(){return t=JSON.stringify(e),void G.push({pathname:"/profile",query:{name:t}});var t},children:[(0,c.jsx)(g.Z,{children:(0,c.jsxs)(i.Z,{sx:{alignItems:"center",display:"flex"},children:[(0,c.jsx)(m.Z,{src:e.profile_pic,sx:{mr:2},children:(n=e.full_name,(void 0===n?"":n).replace(/\s+/," ").split(" ").slice(0,2).map((function(e){return e&&e[0].toUpperCase()})).join(""))}),(0,c.jsx)(b.Z,{color:"textPrimary",variant:"body1",children:e.full_name})]})}),(0,c.jsx)(g.Z,{children:e.location}),(0,c.jsx)(g.Z,{children:e.headline}),(0,c.jsx)(g.Z,{children:e.email})]},t);var n}))})]})})}),(0,c.jsx)(y.Z,{component:"div",count:O,onPageChange:function(e,t){var c=r;T<t?s&&(c=s):t<T&&u&&(c=u);var i=localStorage.getItem("access"),f={headers:{Authorization:"Bearer ".concat(i)}};l().get(c,f).then((function(e){var r=e.data,i=(r.count,r.next),s=r.previous;a(c),o(i),d(s),S(r.count),D(t),n(e.data.results)})).catch((function(e){G.push({pathname:"/login"})}))},onRowsPerPageChange:function(e){N(e.target.value)},page:T,rowsPerPage:I,rowsPerPageOptions:[O]})]}))})};_.propTypes={candidates:S().array.isRequired};var I=n(3321),N=n(4267),L=n(4054),T=n(3841),D=n(5018),B=n(7058),U=n(431),q=n(5071),z=n(9334),A=n(2342);function G(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function R(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var W={PaperProps:{style:{maxHeight:224,width:250}}},F=["Django","Python","Javascript","python developer","celery"],H=["Delhi","Noida","Bhubneshwar","Gurugram","Gurgoan","India"],J=function(e){e.candidates;var t=e.setcandidate,n=(e.activeurl,e.setactive),r=(e.nextpage,e.setnext),a=(e.prevpage,e.setprev),s=(e.count,e.setcount),o=R(e,["candidates","setcandidate","activeurl","setactive","nextpage","setnext","prevpage","setprev","count","setcount"]),u=(0,f.useState)([]),h=u[0],x=u[1],v=(0,f.useState)([]),g=v[0],j=v[1],m=(0,d.Ds)(),y=m.enqueueSnackbar;m.closeSnackbar;return(0,c.jsxs)(i.Z,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){G(e,t,n[t])}))}return e}({},o,{children:[(0,c.jsxs)(i.Z,{sx:{alignItems:"center",display:"flex",justifyContent:"space-between",flexWrap:"wrap",m:-1},children:[(0,c.jsx)(b.Z,{sx:{m:1},variant:"h4",children:"Candidates"}),(0,c.jsx)(i.Z,{sx:{m:1},children:(0,c.jsx)(I.Z,{color:"info",variant:"contained",onClick:function(){var e=A.Z.shortlistUrl,c=localStorage.getItem("access"),i={headers:{Authorization:"Bearer ".concat(c)}};l().get(e,i).then((function(c){var i=c.data,o=i.previous,l=i.next;n(e),r(l),a(o),s(i.count);var u=c.data.results;t(u)})).catch((function(e){y("Error: "+e.message,{variant:"error"})}))},children:"Get Shortlisted Candidate"})})]}),(0,c.jsx)(i.Z,{sx:{mt:3},children:(0,c.jsx)(p.Z,{children:(0,c.jsx)(N.Z,{children:(0,c.jsxs)(i.Z,{sx:{maxWidth:"100%"},children:[(0,c.jsxs)(L.Z,{sx:{m:1,width:400},children:[(0,c.jsx)(T.Z,{id:"demo-multiple-checkbox-label",children:"Skills"}),(0,c.jsx)(D.Z,{labelId:"demo-multiple-checkbox-label",id:"demo-multiple-checkbox",multiple:!0,value:h,onChange:function(e){var t=e.target.value;x("string"===typeof t?t.split(","):t)},input:(0,c.jsx)(B.Z,{label:"Tag"}),renderValue:function(e){return e.join(", ")},MenuProps:W,children:F.map((function(e){return(0,c.jsxs)(U.Z,{value:e,children:[(0,c.jsx)(q.Z,{checked:h.indexOf(e)>-1}),(0,c.jsx)(z.Z,{primary:e})]},e)}))})]}),(0,c.jsxs)(L.Z,{sx:{m:1,width:400},children:[(0,c.jsx)(T.Z,{id:"demo-multiple-checkbox-label",children:"Location"}),(0,c.jsx)(D.Z,{labelId:"demo-multiple-checkbox-label",id:"demo-multiple-checkbox",value:g,onChange:function(e){var t=e.target.value;j("string"===typeof t?t.split(","):t)},input:(0,c.jsx)(B.Z,{label:"Tag"}),renderValue:function(e){return e.join(", ")},MenuProps:W,children:H.map((function(e){return(0,c.jsxs)(U.Z,{value:e,children:[(0,c.jsx)(q.Z,{checked:g.indexOf(e)>-1}),(0,c.jsx)(z.Z,{primary:e})]},e)}))})]}),(0,c.jsx)(I.Z,{sx:{m:1.5},color:"info",variant:"contained",onClick:function(e){var c="";h.forEach((function(e){e=e.split(" ").join("+").toLowerCase(),c+="skill=".concat(e,"&")})),c=c.slice(0,-1);var i="";g.forEach((function(e){e=e.split(" ").join("+").toLowerCase(),i+="&location=".concat(e)}));var o=c+i,u=A.Z.candidateListToolbarUrl+o,d=localStorage.getItem("access"),f={headers:{Authorization:"Bearer ".concat(d)}};l().get(u,f).then((function(e){var c=e.data,i=c.previous,o=c.next;n(u),r(o),a(i),s(c.count);var l=e.data.results;t(l)})).catch((function(e){y("Error: "+e.message,{variant:"error"})}))},children:"Search"})]})})})})]}))},M=n(644);function V(e,t,n,r,a,c,i){try{var s=e[c](i),o=s.value}catch(l){return void n(l)}s.done?t(o):Promise.resolve(o).then(r,a)}function X(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var c=e.apply(t,n);function i(e){V(c,r,a,i,s,"next",e)}function s(e){V(c,r,a,i,s,"throw",e)}i(void 0)}))}}var K=function(){var e=(0,f.useRef)(!0),t=(0,f.useState)(),n=t[0],r=t[1],o=(0,f.useState)(null),p=o[0],h=o[1],x=(0,f.useState)(null),v=x[0],g=x[1],j=(0,f.useState)(null),m=j[0],b=j[1],y=(0,f.useState)(0),Z=y[0],O=y[1],S=(0,f.useState)(null),w=S[0],P=S[1],k=(0,f.useState)(null),E=k[0],C=k[1],I=(0,d.Ds)(),N=I.enqueueSnackbar;I.closeSnackbar;(0,f.useEffect)((function(){var e=localStorage.getItem("access"),t={headers:{Authorization:"Bearer ".concat(e)}};function n(){return(n=X(a().mark((function e(){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=A.Z.indexUrl,b(n),l().get(n,t).then((function(e){var t=e.data,n=(t.count,t.next);h(n),O(t.count),r(e.data.results)})).catch((function(e){if(e.response){if(401===e.response.status){N(e.response.data.detail);var t=localStorage.getItem("refresh");C(t)}}else N("Error: "+e.message,{variant:"error"})}));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[w]),(0,f.useEffect)((function(){if(e.current)e.current=!1;else{var t=localStorage.getItem("refresh");function e(){return r.apply(this,arguments)}function r(){return(r=X(a().mark((function e(){var r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=A.Z.refreshTokenUrl,b(r),l().post(r,n={refresh:t}).then((function(e){localStorage.setItem("access",e.data.access),P(e.data.access)})).catch((function(e){e.response?401===e.response.status&&N(e.response.data.detail,{variant:"error"}):N("Error: "+e.message,{variant:"error"})}));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}e()}}),[E]);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(u.default,{children:(0,c.jsx)("title",{children:"Customers"})}),(0,c.jsx)(i.Z,{component:"main",sx:{flexGrow:1,py:8},children:n&&(0,c.jsxs)(s.Z,{maxWidth:!1,children:[(0,c.jsx)(J,{candidates:n,setcandidate:function(e){r(null),r(e)},activeurl:m,setactive:b,nextpage:p,setnext:h,prevpage:v,setprev:g,count:Z,setcount:O}),(0,c.jsx)(i.Z,{sx:{mt:3},children:(0,c.jsx)(_,{candidates:n,setcandidate:r,activeurl:m,setactive:b,nextpage:p,setnext:h,prevpage:v,setprev:g,count:Z,setcount:O})})]})})]})};K.getLayout=function(e){return(0,c.jsx)(M.c,{children:e})};var Q=K}},function(e){e.O(0,[969,400,540,856,63,299,291,472,774,888,179],(function(){return t=8581,e(e.s=t);var t}));var t=e.O();_N_E=t}]);