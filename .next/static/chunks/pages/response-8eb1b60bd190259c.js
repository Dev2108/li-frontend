(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[285],{7948:function(e,t,n){"use strict";n.d(t,{Z:function(){return m}});var r=n(3366),a=n(7462),s=n(7294),i=n(6010),o=n(7192),c=n(3616),l=n(1496),u=n(8979);function d(e){return(0,u.Z)("MuiContainer",e)}(0,n(6087).Z)("MuiContainer",["root","disableGutters","fixed","maxWidthXs","maxWidthSm","maxWidthMd","maxWidthLg","maxWidthXl"]);var p=n(8216),h=n(5893);const x=["className","component","disableGutters","fixed","maxWidth"],f=(0,l.ZP)("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[`maxWidth${(0,p.Z)(String(n.maxWidth))}`],n.fixed&&t.fixed,n.disableGutters&&t.disableGutters]}})((({theme:e,ownerState:t})=>(0,a.Z)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!t.disableGutters&&{paddingLeft:e.spacing(2),paddingRight:e.spacing(2),[e.breakpoints.up("sm")]:{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}})),(({theme:e,ownerState:t})=>t.fixed&&Object.keys(e.breakpoints.values).reduce(((t,n)=>{const r=e.breakpoints.values[n];return 0!==r&&(t[e.breakpoints.up(n)]={maxWidth:`${r}${e.breakpoints.unit}`}),t}),{})),(({theme:e,ownerState:t})=>(0,a.Z)({},"xs"===t.maxWidth&&{[e.breakpoints.up("xs")]:{maxWidth:Math.max(e.breakpoints.values.xs,444)}},t.maxWidth&&"xs"!==t.maxWidth&&{[e.breakpoints.up(t.maxWidth)]:{maxWidth:`${e.breakpoints.values[t.maxWidth]}${e.breakpoints.unit}`}})));var m=s.forwardRef((function(e,t){const n=(0,c.Z)({props:e,name:"MuiContainer"}),{className:s,component:l="div",disableGutters:u=!1,fixed:m=!1,maxWidth:b="lg"}=n,g=(0,r.Z)(n,x),v=(0,a.Z)({},n,{component:l,disableGutters:u,fixed:m,maxWidth:b}),k=(e=>{const{classes:t,fixed:n,disableGutters:r,maxWidth:a}=e,s={root:["root",a&&`maxWidth${(0,p.Z)(String(a))}`,n&&"fixed",r&&"disableGutters"]};return(0,o.Z)(s,d,t)})(v);return(0,h.jsx)(f,(0,a.Z)({as:l,ownerState:v,className:(0,i.Z)(k.root,s),ref:t},g))}))},9265:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/response",function(){return n(5349)}])},2342:function(e,t){"use strict";function n(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var r="https://li-parser.herokuapp.com/api",a=function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)};n(a,"responseUrl","".concat(r,"/response/")),n(a,"registerUrl","".concat(r,"/register/")),n(a,"tokenUrl","".concat(r,"/token/")),n(a,"refreshTokenUrl","".concat(r,"/token/refresh/")),n(a,"indexUrl","".concat(r,"/link/")),n(a,"fileUploadUrl","".concat(r,"/upload_file/")),n(a,"shortlistUrl","".concat(r,"/shortlist/")),n(a,"candidateListToolbarUrl","".concat(r,"/link/?")),n(a,"userUrl","".concat(r,"/user/")),n(a,"excelUserListUrl","".concat(r,"/excel_user_list/")),t.Z=a},5349:function(e,t,n){"use strict";n.r(t);var r=n(8520),a=n.n(r),s=n(5893),i=n(9008),o=n(9669),c=n.n(o),l=n(7294),u=n(7357),d=n(7948),p=n(5861),h=n(3321),x=n(2342),f=n(1163),m=n(896);function b(e,t,n,r,a,s,i){try{var o=e[s](i),c=o.value}catch(l){return void n(l)}o.done?t(c):Promise.resolve(c).then(r,a)}function g(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var s=e.apply(t,n);function i(e){b(s,r,a,i,o,"next",e)}function o(e){b(s,r,a,i,o,"throw",e)}i(void 0)}))}}t.default=function(){var e=(0,f.useRouter)(),t=(0,l.useState)(null),n=t[0],r=t[1],o=(0,l.useState)(null),b=o[0],v=o[1],k=(0,l.useState)(null),w=k[0],y=k[1],Z=(0,m.Ds)(),j=Z.enqueueSnackbar,W=(Z.closeSnackbar,(0,l.useState)("")),S=W[0],_=W[1],U=(0,l.useState)(!1),P=U[0],R=U[1];(0,l.useEffect)(g(a().mark((function t(){var n,s,i,o,l;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=localStorage.getItem("access"),s=new URLSearchParams(window.location.search),v(s.get("uuid")),y(s.get("resp")),r(s.get("first_name")),i={headers:{Authorization:"Bearer ".concat(n)},data:{id:s.get("uuid"),resp:s.get("resp")}},o=x.Z.responseUrl,"1"!==s.get("resp")){t.next=18;break}return t.prev=8,t.next=11,c().post(o,i);case 11:205!==(l=t.sent).status&&200!==l.status||j("Response saved Successfully.",{variant:"success",duration:"10000"}),t.next=18;break;case 15:t.prev=15,t.t0=t.catch(8),e.push({pathname:"/404"});case 18:R(!0);case 19:case"end":return t.stop()}}),t,null,[[8,15]])}))),[]);var C=g(a().mark((function t(n){var r,s,i,o;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=localStorage.getItem("access"),s={headers:{Authorization:"Bearer ".concat(r)},data:{id:b,resp:w,decline_reason:S}},i=x.Z.responseUrl,t.prev=3,t.next=6,c().post(i,s);case 6:205!==(o=t.sent).status&&200!==o.status||j("Response saved Successfully.",{variant:"success",duration:"10000"}),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(3),e.push({pathname:"/404"});case 13:case"end":return t.stop()}}),t,null,[[3,10]])})));return console.log(S),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.default,{children:(0,s.jsx)("title",{children:"User Response"})}),(0,s.jsx)(u.Z,{component:"main",sx:{alignItems:"center",display:"flex",flexGrow:1,minHeight:"100%",marginBottom:"15%"},children:(0,s.jsx)(d.Z,{maxWidth:"md",children:P&&(0,s.jsxs)(u.Z,{sx:{alignItems:"left",display:"flex",flexDirection:"column",padding:"10%",marginTop:"5%",border:"1px solid #aaecff",backgroundColor:"#f0f7f9"},children:[(0,s.jsxs)(p.Z,{align:"left",color:"textPrimary",children:["Hi ",n,","]}),(0,s.jsx)("br",{}),"1"===w?(0,s.jsxs)("div",{children:[(0,s.jsx)(p.Z,{align:"left",color:"textPrimary",children:"Thank you! We will contact you shortly."}),(0,s.jsx)("br",{}),(0,s.jsx)(p.Z,{align:"left",color:"textPrimary",sx:{mb:1},children:"If you would like to expedite the process please click on Apply link below and upload your profile."})]}):(0,s.jsxs)("div",{children:[(0,s.jsx)("textarea",{value:S,onChange:function(e){var t=e.target.value;_(t)},rows:5,cols:50,placeholder:"Why would you not want to apply?"}),(0,s.jsx)("br",{}),(0,s.jsx)(h.Z,{sx:{mr:0,mb:3},variant:"contained",color:"secondary",size:"small",type:"submit",onClick:C,children:"Submit"})]}),(0,s.jsx)("a",{href:"https://apply.mindfiresolutions.com/apply",style:{"text-decoration":"none",width:"20%"},children:(0,s.jsx)(h.Z,{sx:{mr:0},variant:"contained",color:"secondary",size:"small",type:"submit",children:"APPLY NOW"})}),(0,s.jsx)("br",{}),(0,s.jsx)("p",{children:"Thanks"}),(0,s.jsx)("p",{children:"Mindfire Soulitons"})]})})})]})}}},function(e){e.O(0,[969,400,774,888,179],(function(){return t=9265,e(e.s=t);var t}));var t=e.O();_N_E=t}]);