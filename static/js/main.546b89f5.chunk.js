(this.webpackJsonpwhatsapp=this.webpackJsonpwhatsapp||[]).push([[0],{65:function(e,t,c){},66:function(e,t,c){},67:function(e,t,c){},77:function(e,t,c){},78:function(e,t,c){},79:function(e,t,c){},80:function(e,t,c){"use strict";c.r(t);var a=c(4),s=c(2),n=c.n(s),i=c(26),r=c.n(i),o=(c(65),c(13)),d=(c(66),c(94)),j=c(92),l=(c(67),c(36)),b=c.n(l),h=c(50),u=c.n(h),O=c(37),m=c.n(O),p=c(51),x=c.n(p),f=c(52),v=c.n(f),g=c(9),N=c(28),S=N.a.initializeApp({apiKey:"AIzaSyDzeP-5S2bid9sN_HBXQZp7810OYxh7OkY",authDomain:"uniletsbefd-98.firebaseapp.com",databaseURL:"https://uniletsbefd-98-default-rtdb.firebaseio.com",projectId:"uniletsbefd-98",storageBucket:"uniletsbefd-98.appspot.com",messagingSenderId:"692444421334",appId:"1:692444421334:web:f290addc9845cc5f01bd77",measurementId:"G-EGYHWSZ0KC"}).firestore(),_=N.a.auth(),C=new N.a.auth.GoogleAuthProvider,y=S,w=Object(s.createContext)(),I=function(e){var t=e.reducer,c=e.initialState,n=e.children;return Object(a.jsx)(w.Provider,{value:Object(s.useReducer)(t,c),children:n})},k=function(){return Object(s.useContext)(w)};var E=function(){var e,t,c=Object(s.useState)(""),n=Object(o.a)(c,2),i=n[0],r=n[1],l=Object(s.useState)(""),h=Object(o.a)(l,2),O=h[0],p=h[1],f=Object(g.f)().roomId,S=Object(s.useState)(""),_=Object(o.a)(S,2),C=_[0],w=_[1],I=Object(s.useState)([]),E=Object(o.a)(I,2),D=E[0],A=E[1],P=k(),T=Object(o.a)(P,2),B=T[0].user;return T[1],Object(s.useEffect)((function(){f&&(y.collection("rooms").doc(f).onSnapshot((function(e){return null!=e.data()?w(e.data().name):w()})),y.collection("rooms").doc(f).collection("messages").orderBy("timestamp","asc").onSnapshot((function(e){return A(e.docs.map((function(e){return e.data()})))})))}),[f]),Object(s.useEffect)((function(){r(Math.floor(5e3*Math.random()))}),[f]),Object(a.jsxs)("div",{className:"chat",children:[Object(a.jsxs)("div",{className:"chat_header",children:[Object(a.jsx)(d.a,{src:"https://avatars.dicebear.com/api/human/".concat(i,".svg")}),Object(a.jsxs)("div",{className:"chat_headerInfo",children:[Object(a.jsx)("h3",{children:C}),Object(a.jsxs)("p",{children:["last seen"," ",new Date(null===(e=D[D.length-1])||void 0===e||null===(t=e.timestamp)||void 0===t?void 0:t.toDate()).toUTCString()]})]}),Object(a.jsxs)("div",{className:"chat_headerRight",children:[Object(a.jsx)(j.a,{children:Object(a.jsx)(b.a,{})}),Object(a.jsx)(j.a,{children:Object(a.jsx)(u.a,{})}),Object(a.jsx)(j.a,{children:Object(a.jsx)(m.a,{})})]})]}),Object(a.jsx)("div",{className:"chat_body",children:D.map((function(e){var t;return Object(a.jsxs)("p",{className:"chat_message ".concat(e.name===B.displayName&&"chat_receiver"," "),children:[Object(a.jsx)("span",{className:"chat_name",children:e.name}),e.message,Object(a.jsx)("span",{className:"chat_timestamp",children:new Date(null===(t=e.timestamp)||void 0===t?void 0:t.toDate()).toUTCString()})]})}))}),Object(a.jsxs)("div",{className:"chat_footer",children:[Object(a.jsx)(j.a,{children:Object(a.jsx)(x.a,{})}),Object(a.jsxs)("form",{children:[Object(a.jsx)("input",{value:O,onChange:function(e){return p(e.target.value)},type:"text",placeholder:"Type a message"}),Object(a.jsx)("button",{onClick:function(e){e.preventDefault(),console.log("You typed >>>>>>",O),y.collection("rooms").doc(f).collection("messages").add({message:O,name:B.displayName,timestamp:N.a.firestore.FieldValue.serverTimestamp()}),p("")},type:"submit",children:"Send a message"})]}),Object(a.jsx)(j.a,{children:Object(a.jsx)(v.a,{})})]})]})},D=(c(77),c(53)),A=c.n(D),P=c(54),T=c.n(P),B=(c(78),c(30));var R=function(e){var t,c=e.id,n=e.name,i=e.addNewChat,r=Object(s.useState)(""),j=Object(o.a)(r,2),l=j[0],b=j[1],h=Object(s.useState)(""),u=Object(o.a)(h,2),O=u[0],m=u[1];return Object(s.useEffect)((function(){c&&y.collection("rooms").doc(c).collection("messages").orderBy("timestamp","desc").onSnapshot((function(e){return m(e.docs.map((function(e){return e.data()})))}))}),[c]),Object(s.useEffect)((function(){b(Math.floor(5e3*Math.random()))}),[]),i?Object(a.jsx)("div",{onClick:function(){var e=prompt("Please enter name for chat room");e&&y.collection("rooms").add({name:e})},className:"sidebarChat",children:Object(a.jsx)("h2",{children:"Add new Chat"})}):Object(a.jsx)(B.b,{to:"/rooms/".concat(c),children:Object(a.jsxs)("div",{className:"sidebarChat",children:[Object(a.jsx)(d.a,{src:"https://avatars.dicebear.com/api/human/".concat(l,".svg")}),Object(a.jsxs)("div",{className:"sidebarChat_info",children:[Object(a.jsx)("h2",{children:n}),Object(a.jsx)("p",{children:null===(t=O[0])||void 0===t?void 0:t.message})]})]})})};var F=function(){var e=Object(s.useState)([]),t=Object(o.a)(e,2),c=t[0],n=t[1],i=k(),r=Object(o.a)(i,2),l=r[0].user;return r[1],Object(s.useEffect)((function(){var e=y.collection("rooms").onSnapshot((function(e){return n(e.docs.map((function(e){return{id:e.id,data:e.data()}})))}));return function(){e()}}),[]),Object(a.jsxs)("div",{className:"sidebar",children:[Object(a.jsxs)("div",{className:"sidebar_header",children:[Object(a.jsx)(d.a,{src:null===l||void 0===l?void 0:l.photoURL}),Object(a.jsxs)("div",{className:"sidebar_headerRight",children:[Object(a.jsx)(j.a,{children:Object(a.jsx)(A.a,{})}),Object(a.jsx)(j.a,{children:Object(a.jsx)(T.a,{})}),Object(a.jsx)(j.a,{children:Object(a.jsx)(m.a,{})})]})]}),Object(a.jsx)("div",{className:"sidebar_search",children:Object(a.jsxs)("div",{className:"sidebar_searchContainer",children:[Object(a.jsx)(b.a,{}),Object(a.jsx)("input",{type:"text",placeholder:"Search or start a new chat"})]})}),Object(a.jsxs)("div",{className:"sidebar_chats",children:[Object(a.jsx)(R,{addNewChat:!0}),c.map((function(e){return Object(a.jsx)(R,{id:e.id,name:e.data.name},e.id)}))]})]})},M=c(55),U=(c(79),c(93)),W=c(42),G="SET_USER",L=function(e,t){switch(console.log(t),t.type){case G:return Object(W.a)(Object(W.a)({},e),{},{user:t.user});default:return e}};var Y=function(){var e=k(),t=Object(o.a)(e,2);Object(M.a)(t[0]);var c=t[1];return Object(a.jsx)("div",{className:"login",children:Object(a.jsxs)("div",{className:"login_container",children:[Object(a.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/598px-WhatsApp.svg.png",alt:""}),Object(a.jsx)("div",{className:"login_text",children:Object(a.jsx)("h1",{children:"Sign in to WhatsApp"})}),Object(a.jsx)(U.a,{variant:"contained",type:"submit",onClick:function(){_.signInWithPopup(C).then((function(e){c({type:G,user:e.user})})).catch((function(e){return alert(e.message)}))},children:"Sign in with Google"})]})})};var z=function(){var e=k(),t=Object(o.a)(e,2),c=t[0].user;return t[1],Object(a.jsx)("div",{className:"app",children:c?Object(a.jsx)("div",{className:"app_body",children:Object(a.jsxs)(B.a,{children:[Object(a.jsx)(F,{}),Object(a.jsxs)(g.c,{children:[Object(a.jsx)(g.a,{path:"/rooms/:roomId",children:Object(a.jsx)(E,{})}),Object(a.jsx)(g.a,{path:"/",children:Object(a.jsx)(E,{})})]})]})}):Object(a.jsx)(Y,{})})},H=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,95)).then((function(t){var c=t.getCLS,a=t.getFID,s=t.getFCP,n=t.getLCP,i=t.getTTFB;c(e),a(e),s(e),n(e),i(e)}))};r.a.render(Object(a.jsx)(n.a.StrictMode,{children:Object(a.jsx)(I,{initialState:{user:null},reducer:L,children:Object(a.jsx)(z,{})})}),document.getElementById("root")),H()}},[[80,1,2]]]);
//# sourceMappingURL=main.546b89f5.chunk.js.map