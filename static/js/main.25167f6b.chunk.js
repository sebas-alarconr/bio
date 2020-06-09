(this.webpackJsonpresume=this.webpackJsonpresume||[]).push([[0],{149:function(e,a,t){},15:function(e,a,t){e.exports={colors:"'../../styles/colors.scss'",elephant:"#143850","jungle-mist":"#b9d5d5",porcelain:"#e7ebed",mainContainer:"header_mainContainer__3hXud",list:"header_list__xbXjj",listItem:"header_listItem__37FNE",nav:"header_nav__3OwU2",open:"header_open__25LeW",menuIcon:"header_menuIcon__1WL3N",buttonMenu:"header_buttonMenu__1CtvZ",header:"header_header__3fn4i"}},150:function(e,a,t){"use strict";t.r(a);var n=t(17),r=t(60),c=t.n(r),l=t(0),o=t.n(l),s=t(24),i=t.n(s),m=(t(80),t(16)),u=t(5),d=t.n(u),p=t(18),_=t.n(p);const b=({animated:e,className:a,iconStyle:t,name:n,secondIconName:r,showSecondIcon:c,size:l,type:s})=>{const i=t=>d()(_.a.icon,_.a[s],m(),"fa-".concat(l),"fa-".concat(t?r:n),e&&_.a.animated,e&&!t&&_.a.default,e&&t&&_.a.transform,c&&_.a.showAnimation,a),m=()=>{switch(t){case"regular":return"".concat("fa","r");case"light":return"".concat("fa","l");case"brand":return"".concat("fa","b");case"solid":return"".concat("fa","s");default:return""}};return o.a.createElement(o.a.Fragment,null,o.a.createElement("i",{className:i()}),e&&o.a.createElement("i",{className:i(!0)}))};b.defaultProps={animated:!1,className:"",secondIconName:"",showSecondIcon:!1,size:"sm",type:"primary"};var E=b,h=t(40),f=t.n(h);var v=()=>o.a.createElement("section",{className:f.a.mainContainer},o.a.createElement("div",{className:f.a.imageContainer},o.a.createElement("img",{src:"".concat("/bio","/bio_pic.png"),alt:"Personal"})),o.a.createElement("h1",null,"Hi! I'm Sebas."),o.a.createElement("div",null,o.a.createElement("p",null,"My name is Sebastian Alarcon. I'm ".concat(new Date(new Date-new Date("1992-03-28")).getFullYear()-1970," years old and I was born in Bogota, Colombia.")),o.a.createElement("a",{href:"https://github.com/sebas-alarconr",target:"_blank",rel:"noopener noreferrer"},o.a.createElement(E,{iconStyle:"brand",name:"github-square",size:"2x",type:"secondary"})),o.a.createElement("a",{href:"https://www.linkedin.com/in/sebastian-alarcon-ramos",target:"_blank",rel:"noopener noreferrer"},o.a.createElement(E,{iconStyle:"brand",name:"linkedin",size:"2x",type:"secondary"})),o.a.createElement("a",{href:"https://stackoverflow.com/users/9347317/sebasti%C3%A1n-alarc%C3%B3n",target:"_blank",rel:"noopener noreferrer"},o.a.createElement(E,{iconStyle:"brand",name:"stack-overflow",size:"2x",type:"secondary"})))),y=t(32),N=t(33),w=t.n(N);const g=({location:e})=>(Object(l.useEffect)(()=>{y.toast.error("Oops! This page seems that doesn't exist")},[e]),o.a.createElement("section",{className:w.a.mainSection,style:{background:"url(".concat("/bio","/404.png) 60% center/cover")}},o.a.createElement("div",{className:w.a.mainContainer},o.a.createElement("div",{className:w.a.textContainer},o.a.createElement("h1",null,"404! Page Not Found."),o.a.createElement("h2",null,"We were searching your page but we couldn't find it.")))));g.defaultProps={location:{pathname:""}};var x=g,k=t(62),I=t.n(k),j=t(10),O=t.n(j);var C=t(4),S=t.n(C);var B=()=>{const e=Object(m.b)(),a=Object(m.c)(e=>e.bio);return Object(l.useEffect)(()=>{I()(a)&&e({type:"FETCH_BIO"})},[]),o.a.createElement("section",null,o.a.createElement("h1",null,"Overview"),o.a.createElement("p",null,O()(a,"overview")),o.a.createElement("section",null,o.a.createElement("h2",null,"Experience"),o.a.createElement("ul",{className:S.a.contentWrapper},O()(a,"experience",[]).map(e=>o.a.createElement("li",{className:S.a.listItem,key:"".concat(e.company,"-").concat(a.id)},o.a.createElement("div",{className:S.a.listItemTitle},o.a.createElement("div",{className:d()(S.a.listBullet,S.a.outer)},o.a.createElement("div",{className:d()(S.a.listBullet,S.a.inner)})),o.a.createElement("h3",null,e.company)),o.a.createElement("div",{className:S.a.content},o.a.createElement("p",null,e.title),o.a.createElement("p",null,"".concat(e.start," - ").concat(e.end)),o.a.createElement("p",null,O()(e,"technologies",[]).join(", ")),o.a.createElement("ul",null,O()(e,"responsabilities",[]).map((e,a)=>o.a.createElement("li",{className:S.a.extra,key:a},e)))))))),o.a.createElement("section",null,o.a.createElement("h2",null,"Education"),o.a.createElement("ul",{className:S.a.contentWrapper},O()(a,"education",[]).map(e=>o.a.createElement("li",{className:S.a.listItem,key:"".concat(e.institution,"-").concat(a.id)},o.a.createElement("div",{className:S.a.listItemTitle},o.a.createElement("div",{className:d()(S.a.listBullet,S.a.outer)},o.a.createElement("div",{className:d()(S.a.listBullet,S.a.inner)})),o.a.createElement("h3",null,e.institution)),o.a.createElement("div",{className:S.a.content},o.a.createElement("p",null,e.title),o.a.createElement("p",null,"".concat(e.start," - ").concat(e.end)),o.a.createElement("ul",null,O()(e,"extras",[]).map((e,a)=>o.a.createElement("li",{className:S.a.extra,key:a},e)))))))),o.a.createElement("section",null,o.a.createElement("h2",null,"Community"),o.a.createElement("ul",{className:S.a.contentWrapper},O()(a,"community",[]).map(e=>o.a.createElement("li",{className:S.a.listItem,key:"".concat(e.role,"-").concat(a.id)},o.a.createElement("div",{className:S.a.listItemTitle},o.a.createElement("div",{className:d()(S.a.listBullet,S.a.outer)},o.a.createElement("div",{className:d()(S.a.listBullet,S.a.inner)})),o.a.createElement("h3",null,e.role)),o.a.createElement("div",{className:S.a.content},o.a.createElement("p",null,e.description),o.a.createElement("p",null,O()(e,"dates",[]).join(" - ")),o.a.createElement("ul",null,O()(e,"events",[]).map((e,a)=>o.a.createElement("li",{className:S.a.extra,key:a},"".concat(e.title," "),o.a.createElement("a",{href:e.link.url,target:"_blank",rel:"noopener noreferrer"},e.link.text))))))))))},F=t(68),T=t(41),A=t.n(T);const W=({isCurrent:e})=>({className:d()(A.a.navlink,e&&A.a.active)});var P=e=>o.a.createElement(n.a,Object.assign({},e,{getProps:W})),z=t(63),D=t.n(z),H=t(64),U=t.n(H);const X=({className:e,onClick:a,children:t,type:n})=>o.a.createElement("button",{className:d()(U.a.button,e),onClick:a,type:n},t);X.defaultProps={className:"",onClick:D.a,type:"button"};var M=X,R=t(65),L=t(15),q=t.n(L);var J=()=>{const e=Object(l.useState)(!1),a=Object(F.a)(e,2),t=a[0],n=a[1],r=()=>n(!1);return o.a.createElement("header",{className:q.a.mainContainer},o.a.createElement("nav",{className:d()(q.a.nav,t&&q.a.open)},o.a.createElement("ul",{className:"".concat(q.a.list," no-margin")},R.map((e,a)=>o.a.createElement("li",{className:q.a.listItem,key:a},o.a.createElement(P,{to:e.route,onClick:r},e.label)))),o.a.createElement("div",{className:"".concat(q.a.menuIcon," hide-medium-up")},o.a.createElement(M,{className:q.a.buttonMenu,onClick:()=>n(!t)},o.a.createElement(E,{animated:!0,className:"no-margin",iconStyle:"solid",name:"bars",secondIconName:"times",showSecondIcon:t,size:"lg",type:"tertiary"})))))},V=t(42),Z=t.n(V);var Y=()=>Object(m.c)(e=>e.ui.loading)&&o.a.createElement("div",{className:Z.a.mainContainer},o.a.createElement("div",{className:Z.a.loader}));const G=["/","/resume"];var K=t(43),$=t.n(K);const Q=({children:e,location:a})=>{const t=G.includes(a.pathname);return o.a.createElement("div",null,o.a.createElement(Y,null),o.a.createElement(J,null),o.a.createElement(y.ToastContainer,null),o.a.createElement("main",{className:d()(t&&$.a.appContent,!t&&$.a.notFound)},e))};Q.defaultProps={location:{pathname:""}};var ee=Q,ae=t(66),te=t(9),ne=t(69),re=t(12);const ce={};const le={loading:!1};var oe=Object(te.combineReducers)({bio:(e=ce,a)=>{switch(a.type){case"SET_BIO":return Object(re.a)(Object(re.a)({},e),a.bio);default:return e}},ui:(e=le,a)=>{switch(a.type){case"SET_LOADING":return Object(re.a)(Object(re.a)({},e),{},{loading:a.bool});default:return e}}}),se=t(7),ie=t.n(se),me=t(14);const ue=e=>({type:"SET_LOADING",bool:e});var de=t(67),pe=t(44),_e=t.n(pe);t(148);const be={apiKey:"AIzaSyBSFtPxgJS8USawtuUnHwVHH0ttP3V7Nx8",authDomain:"my-personal-bio.firebaseapp.com",databaseURL:"https://my-personal-bio.firebaseio.com",projectId:"my-personal-bio",storageBucket:"my-personal-bio.appspot.com",messagingSenderId:"770715025261",appId:"1:770715025261:web:8aa851a469fa962F"};var Ee=new class{constructor(){_e.a.initializeApp(be),this.db=_e.a.firestore(),this.resumeId="dqqrhVhL4q05XfXYhP9R"}getResume(){var e=this;return Object(de.a)(ie.a.mark((function a(){var t;return ie.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.db.doc("bios/".concat(e.resumeId));case 2:return t=a.sent,a.abrupt("return",t.get());case 4:case"end":return a.stop()}}),a)})))()}},he=ie.a.mark(ve),fe=ie.a.mark(ye);function ve(){var e;return ie.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,Object(me.b)(ue(!0));case 3:return a.next=5,Ee.getResume();case 5:return e=a.sent,a.next=8,Object(me.b)({type:"SET_BIO",bio:Object(re.a)(Object(re.a)({},e.data()),{},{id:e.id})});case 8:return a.next=10,Object(me.b)(ue(!1));case 10:a.next=16;break;case 12:return a.prev=12,a.t0=a.catch(0),a.next=16,Object(me.b)(ue(!1));case 16:case"end":return a.stop()}}),he,null,[[0,12]])}function ye(){return ie.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(me.c)("FETCH_BIO",ve);case 2:case"end":return e.stop()}}),fe)}var Ne=ie.a.mark(we);function we(){return ie.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(me.a)([ye()]);case 2:case"end":return e.stop()}}),Ne)}const ge=(()=>{const e=Object(ne.a)(),a=Object(te.createStore)(oe,Object(ae.composeWithDevTools)(Object(te.applyMiddleware)(e)));return e.run(we),a})();var xe=()=>o.a.createElement(m.a,{store:ge},o.a.createElement(n.c,null,o.a.createElement(ee,{path:"/"},o.a.createElement(v,{path:"/"}),o.a.createElement(B,{path:"/resume"}),o.a.createElement(x,{default:!0}))));t(149);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));const ke=c()(),Ie=Object(n.d)(ke),je=()=>o.a.createElement(n.b,{history:Ie},o.a.createElement(xe,null));i.a.render(o.a.createElement(je,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(e=>{e.unregister()})},18:function(e,a,t){e.exports={colors:"'../../styles/colors.scss'",elephant:"#143850","jungle-mist":"#b9d5d5",porcelain:"#e7ebed",icon:"icon_icon__BHboF",primary:"icon_primary__mTIql",secondary:"icon_secondary__32wBC",tertiary:"icon_tertiary__kVa5f",animated:"icon_animated__b3cUl",default:"icon_default__23R4Z",transform:"icon_transform__rA4XF",showAnimation:"icon_showAnimation__1_UAr"}},33:function(e,a,t){e.exports={colors:"'../../styles/colors.scss'",elephant:"#143850",white:"#fff",porcelain:"#e7ebed",mainSection:"notFound_mainSection__3o8NF",mainContainer:"notFound_mainContainer__i2kel",textContainer:"notFound_textContainer__-jf49"}},4:function(e,a,t){e.exports={colors:"'../../styles/colors.scss'",elephant:"#143850",white:"#fff",porcelain:"#e7ebed",contentWrapper:"resume_contentWrapper__15ZMx",listItem:"resume_listItem__3XmAh",listItemTitle:"resume_listItemTitle__3CZ6N",listBullet:"resume_listBullet__13IS-",inner:"resume_inner__KxD_l",outer:"resume_outer__S0mYd",content:"resume_content__15isp",extra:"resume_extra__1BJcl"}},40:function(e,a,t){e.exports={mainContainer:"home_mainContainer__2j_4v",imageContainer:"home_imageContainer__1dHvg"}},41:function(e,a,t){e.exports={colors:"'../../styles/colors.scss'",porcelain:"#e7ebed","jungle-mist":"#b9d5d5",navlink:"navlink_navlink__wBdXp",active:"navlink_active__6F4zU"}},42:function(e,a,t){e.exports={mainContainer:"loader_mainContainer__2X3om",loader:"loader_loader__2sbTU",spin:"loader_spin__3WO-j"}},43:function(e,a,t){e.exports={appContent:"layout_appContent__2oZAm",notFound:"layout_notFound__1SmSi"}},64:function(e,a,t){e.exports={button:"button_button__rhxVg"}},65:function(e){e.exports=JSON.parse('[{"label":"Me","route":"/"},{"label":"Resume","route":"/resume"}]')},70:function(e,a,t){e.exports=t(150)}},[[70,1,2]]]);
//# sourceMappingURL=main.25167f6b.chunk.js.map