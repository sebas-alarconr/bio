(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{24:function(e){e.exports=[{label:"Me",route:"/"},{label:"Resume",route:"/resume"},{label:"Contact",route:"/contact"},{label:"Blog",route:"/blog"}]},26:function(e,t,a){e.exports=a(61)},29:function(e,t,a){},31:function(e,t,a){},33:function(e,t,a){},35:function(e,t,a){},52:function(e,t,a){},54:function(e,t,a){},57:function(e,t,a){},61:function(e,t,a){"use strict";a.r(t);var n=a(3),r=a(9),c=a(5),o=a(4),i=a(6),s=a(65),l=a(64),u=a(0),m=a.n(u),p=a(23),d=a.n(p),b=(a(29),a(31),a(10)),h=a.n(b),f="regular",g="light",j="brand",E="solid",O=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];return(a=Object(c.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(i)))).render=function(){return m.a.createElement(m.a.Fragment,null,m.a.createElement("i",{className:a.getClass()}),a.renderAnimatedIcon())},a.renderAnimatedIcon=function(){var e;return a.props.animated&&(e=m.a.createElement("i",{className:a.getClass(!0)})),e},a.getClass=function(e){var t={icon:!0,"icon--animated":a.props.animated,icon__default:a.props.animated&&!e,icon__transform:a.props.animated&&e,"show-animation":a.props.showSecondIcon};return t[a.getIconStyle()]=!0,t[a.getIconName(e)]=!0,t["fa-".concat(a.props.size)]=!0,t["icon--".concat(a.props.type)]=!0,t[a.props.className]=a.props.className,h()(t)},a.getIconStyle=function(){var e;switch(a.props.iconStyle){case f:e="".concat("fa","r");break;case g:e="".concat("fa","l");break;case j:e="".concat("fa","b");break;case E:e="".concat("fa","s");break;default:e=""}return e},a.getIconName=function(e){var t=e?a.props.secondIconName:a.props.name;return"fa-".concat(t)},a}return Object(i.a)(t,e),t}(u.Component);O.defaultProps={animated:!1,showSecondIcon:!1,size:"sm",type:"primary"};var y=O,v=function(e){function t(){return Object(n.a)(this,t),Object(c.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return m.a.createElement("article",{className:"indexpage text-center app__content"},m.a.createElement("div",{className:"indexpage__imagecontainer"},m.a.createElement("img",{src:"".concat("/bio","/bio_pic.jpg"),alt:"Personal"})),m.a.createElement("h1",null,"Hi! I'm Sebas."),m.a.createElement("section",null,m.a.createElement("p",null,"My name is Sebastian Alarcon. I'm ",d()().diff([1992,2,28],"years")," years old and I was born in Bogota, Colombia."),m.a.createElement("a",{href:"https://github.com/sebas-alarconr",target:"_blank",rel:"noopener noreferrer"},m.a.createElement(y,{iconStyle:"brand",name:"github-square",size:"2x",type:"secondary"})),m.a.createElement("a",{href:"https://www.linkedin.com/in/sebastian-alarcon-ramos",target:"_blank",rel:"noopener noreferrer"},m.a.createElement(y,{iconStyle:"brand",name:"linkedin",size:"2x",type:"secondary"}))))}}]),t}(u.Component),N=a(62),_=(a(33),a(24)),k=(a(35),function(e){function t(){return Object(n.a)(this,t),Object(c.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return m.a.createElement("button",{className:this.getClass(),onClick:this.props.onClick},this.props.children)}},{key:"getClass",value:function(){var e={button:!0};return e[this.props.className]=this.props.className,h()(e)}}]),t}(u.Component)),w=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(c.a)(this,Object(o.a)(t).call(this,e))).render=function(){return m.a.createElement("header",{className:"header"},m.a.createElement("nav",{className:a.getNavClass()},m.a.createElement("ul",{className:"header__list no-margin"},_.map(a.renderHeaderItem)),m.a.createElement("div",{className:"header__menuicon hide-medium-up"},m.a.createElement(k,{onClick:a.handleNavBarIconClick,className:"header__buttonmenu"},m.a.createElement(y,{animated:!0,className:"no-margin",iconStyle:"solid",name:"bars",secondIconName:"times",showSecondIcon:a.state.opened,size:"lg",type:"tertiary"})))))},a.renderHeaderItem=function(e,t){return m.a.createElement("li",{className:"header__listitem",key:t},m.a.createElement(N.a,{to:e.route},e.label))},a.getNavClass=function(){var e={header__nav:!0,"header__nav--open":a.state.opened};return h()(e)},a.handleNavBarIconClick=function(e){a.setState({opened:!a.state.opened}),e.preventDefault()},a.state={opened:!1},a}return Object(i.a)(t,e),t}(u.Component),C=a(12),I=(a(52),function(e){function t(){return Object(n.a)(this,t),Object(c.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return m.a.createElement(m.a.Fragment,null,m.a.createElement(w,null),m.a.createElement(C.ToastContainer,null),this.props.children)}}]),t}(u.Component)),S=function(e){function t(){return Object(n.a)(this,t),Object(c.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return m.a.createElement("div",null,"Resume Page")}}]),t}(u.Component),x=(a(54),function(e){function t(){return Object(n.a)(this,t),Object(c.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return C.toast.error("Oops! This page seems that doesn't exist"),m.a.createElement("article",{className:"notfoundpage"},m.a.createElement("img",{alt:"Not Found",className:"notfoundpage__image",src:"".concat("/bio","/404.jpg")}),m.a.createElement("div",{className:"notfoundpage__textcontainer"},m.a.createElement("h1",null,"404! Page Not Found."),m.a.createElement("h2",null,"We were searching your page but we couldn't find it.")))}}]),t}(u.Component)),B=function(e){function t(){return Object(n.a)(this,t),Object(c.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return m.a.createElement(I,null,m.a.createElement(s.a,null,m.a.createElement(l.a,{exact:!0,path:"/",component:v}),m.a.createElement(l.a,{exact:!0,path:"/resume",component:S}),m.a.createElement(l.a,{component:x})))}}]),t}(u.Component),z=a(15),A=a.n(z);a(57),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var F=a(63);a(59);A.a.render(m.a.createElement(function(){return m.a.createElement(F.a,{basename:"/bio"},m.a.createElement(B,null))},null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[26,2,1]]]);
//# sourceMappingURL=main.c4d085dc.chunk.js.map