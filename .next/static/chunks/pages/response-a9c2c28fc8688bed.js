(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[285],{9265:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/response",function(){return t(5349)}])},2342:function(e,n){"use strict";function t(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var r="https://li-parser.herokuapp.com/api",s=function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e)};t(s,"responseUrl","".concat(r,"/response/")),t(s,"registerUrl","".concat(r,"/register/")),t(s,"tokenUrl","".concat(r,"/token/")),t(s,"refreshTokenUrl","".concat(r,"/token/refresh/")),t(s,"indexUrl","".concat(r,"/link/")),t(s,"fileUploadUrl","".concat(r,"/upload_file/")),t(s,"shortlistUrl","".concat(r,"/shortlist/")),t(s,"candidateListToolbarUrl","".concat(r,"/link/?")),t(s,"userUrl","".concat(r,"/user/")),n.Z=s},5349:function(e,n,t){"use strict";t.r(n);var r=t(8520),s=t.n(r),a=t(5893),o=t(9008),c=t(9669),i=t.n(c),l=t(7294),u=t(7357),d=t(7948),p=t(5861),f=t(3321),h=t(2342),x=t(1163),m=t(896);function v(e,n,t,r,s,a,o){try{var c=e[a](o),i=c.value}catch(l){return void t(l)}c.done?n(i):Promise.resolve(i).then(r,s)}function y(e){return function(){var n=this,t=arguments;return new Promise((function(r,s){var a=e.apply(n,t);function o(e){v(a,r,s,o,c,"next",e)}function c(e){v(a,r,s,o,c,"throw",e)}o(void 0)}))}}n.default=function(){var e=(0,x.useRouter)(),n=(0,l.useState)(null),t=n[0],r=n[1],c=(0,l.useState)(null),v=c[0],w=c[1],k=(0,l.useState)(null),b=k[0],g=k[1],j=(0,m.Ds)(),_=j.enqueueSnackbar,S=(j.closeSnackbar,(0,l.useState)("")),U=S[0],P=S[1],Z=(0,l.useState)(!1),T=Z[0],E=Z[1];(0,l.useEffect)(y(s().mark((function n(){var t,a,o,c,l;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t=localStorage.getItem("access"),a=new URLSearchParams(window.location.search),w(a.get("uuid")),g(a.get("resp")),r(a.get("first_name")),o={headers:{Authorization:"Bearer ".concat(t)},data:{id:v,resp:b}},c=h.Z.responseUrl,"1"!==b){n.next=18;break}return n.prev=8,n.next=11,i().post(c,o);case 11:205!==(l=n.sent).status&&200!==l.status||_("Response saved Successfully.",{variant:"success",duration:"10000"}),n.next=18;break;case 15:n.prev=15,n.t0=n.catch(8),e.push({pathname:"/404"});case 18:E(!0);case 19:case"end":return n.stop()}}),n,null,[[8,15]])}))),[]);var C=y(s().mark((function n(t){var r,a,o,c;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=localStorage.getItem("access"),a={headers:{Authorization:"Bearer ".concat(r)},data:{id:v,resp:b,decline_reason:U}},o=h.Z.responseUrl,n.prev=3,n.next=6,i().post(o,a);case 6:205!==(c=n.sent).status&&200!==c.status||_("Response saved Successfully.",{variant:"success",duration:"10000"}),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(3),e.push({pathname:"/404"});case 13:case"end":return n.stop()}}),n,null,[[3,10]])})));return console.log(U),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(o.default,{children:(0,a.jsx)("title",{children:"User Response"})}),(0,a.jsx)(u.Z,{component:"main",sx:{alignItems:"center",display:"flex",flexGrow:1,minHeight:"100%",marginBottom:"15%"},children:(0,a.jsx)(d.Z,{maxWidth:"md",children:T&&(0,a.jsxs)(u.Z,{sx:{alignItems:"left",display:"flex",flexDirection:"column",padding:"10%",marginTop:"5%",border:"1px solid #aaecff",backgroundColor:"#f0f7f9"},children:[(0,a.jsxs)(p.Z,{align:"left",color:"textPrimary",children:["Hi ",t,","]}),(0,a.jsx)("br",{}),"1"===b?(0,a.jsxs)("div",{children:[(0,a.jsx)(p.Z,{align:"left",color:"textPrimary",children:"Thank you! We will contact you shortly."}),(0,a.jsx)("br",{}),(0,a.jsx)(p.Z,{align:"left",color:"textPrimary",sx:{mb:1},children:"If you would like to expedite the process please click on Apply link below and upload your profile."})]}):(0,a.jsxs)("div",{children:[(0,a.jsx)("textarea",{value:U,onChange:function(e){var n=e.target.value;P(n)},rows:5,cols:50,placeholder:"Why would you not want to apply?"}),(0,a.jsx)("br",{}),(0,a.jsx)(f.Z,{sx:{mr:0,mb:3},variant:"contained",color:"secondary",size:"small",type:"submit",onClick:C,children:"Submit"})]}),(0,a.jsx)("a",{href:"https://apply.mindfiresolutions.com/apply",style:{"text-decoration":"none",width:"20%"},children:(0,a.jsx)(f.Z,{sx:{mr:0},variant:"contained",color:"secondary",size:"small",type:"submit",children:"APPLY NOW"})}),(0,a.jsx)("br",{}),(0,a.jsx)("p",{children:"Thanks"}),(0,a.jsx)("p",{children:"Mindfire Soulitons"})]})})})]})}}},function(e){e.O(0,[790,400,774,888,179],(function(){return n=9265,e(e.s=n);var n}));var n=e.O();_N_E=n}]);