(function(e){function t(t){for(var r,u,o=t[0],i=t[1],l=t[2],b=0,s=[];b<o.length;b++)u=o[b],Object.prototype.hasOwnProperty.call(c,u)&&c[u]&&s.push(c[u][0]),c[u]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);d&&d(t);while(s.length)s.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,o=1;o<n.length;o++){var i=n[o];0!==c[i]&&(r=!1)}r&&(a.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},c={app:0},a=[];function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],i=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var d=i;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0364":function(e,t,n){},"0a12":function(e,t,n){},"0a5d":function(e,t,n){"use strict";n("3e88")},"0b85":function(e,t,n){"use strict";n("7dea")},1750:function(e,t,n){},"175b":function(e,t,n){"use strict";n("3720")},"17c5":function(e,t,n){"use strict";n("1750")},3720:function(e,t,n){},"3baf":function(e,t,n){"use strict";n("cd6e")},"3e88":function(e,t,n){},"42d9":function(e,t,n){},"43cf":function(e,t,n){},"4cb7":function(e,t,n){"use strict";n("e929")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),c={class:"content"};function a(e,t,n,a,u,o){var i=Object(r["y"])("Navbar"),l=Object(r["y"])("router-view");return Object(r["q"])(),Object(r["e"])(r["a"],null,[Object(r["h"])(i),Object(r["h"])("div",c,[Object(r["h"])(l,null,{default:Object(r["I"])((function(e){return[Object(r["h"])(r["b"],{name:"route",mode:"out-in"},{default:Object(r["I"])((function(){return[(Object(r["q"])(),Object(r["e"])(Object(r["z"])(e.Component)))]})),_:2},1024)]})),_:1})])],64)}var u=Object(r["M"])("data-v-2e3c2967");Object(r["t"])("data-v-2e3c2967");var o={class:"navbar"},i={class:"title"},l={class:"grow"},d=Object(r["g"])("Tennis Buddy"),b={key:0},s={class:"links"},j={key:0},O=Object(r["g"])(" Register as Buddy "),v=Object(r["g"])("Logout"),f={key:1},p=Object(r["g"])("Signup"),m=Object(r["g"])("Login");Object(r["r"])();var h=u((function(e,t,n,c,a,h){var g=Object(r["y"])("router-link"),y=Object(r["y"])("font-awesome-icon"),w=Object(r["y"])("base-button");return Object(r["q"])(),Object(r["e"])("div",o,[Object(r["h"])("nav",null,[Object(r["h"])("div",i,[Object(r["h"])("h1",l,[Object(r["h"])(g,{to:"/"},{default:u((function(){return[d]})),_:1})]),c.user?(Object(r["q"])(),Object(r["e"])("span",b,"Hello, "+Object(r["B"])(c.user.displayName)+"!",1)):Object(r["f"])("",!0)]),Object(r["h"])("div",s,[c.user?(Object(r["q"])(),Object(r["e"])("div",j,[Object(r["h"])(g,{to:"/register",class:"hover-bold"},{default:u((function(){return[O]})),_:1}),Object(r["h"])(g,{to:"/account"},{default:u((function(){return[Object(r["h"])(y,{icon:"user-circle",size:"lg"})]})),_:1}),Object(r["h"])(g,{to:"/chatroom"},{default:u((function(){return[Object(r["h"])(y,{icon:"comments",size:"lg"})]})),_:1}),Object(r["h"])(w,{onClick:c.handleLogout,mode:"alert"},{default:u((function(){return[v]})),_:1},8,["onClick"])])):(Object(r["q"])(),Object(r["e"])("div",f,[Object(r["h"])(w,{link:"",to:"/signup"},{default:u((function(){return[p]})),_:1}),Object(r["h"])(w,{link:"",to:"/login"},{default:u((function(){return[m]})),_:1})]))])])])})),g=n("1da1"),y=(n("96cf"),n("ac1f"),n("5319"),n("6c02")),w=n("260b"),k=(n("e71f"),n("ea7b"),{apiKey:"AIzaSyAD43XNNAylN4D618c21-J1-mEb-eKZ_WM",authDomain:"tennis-buddy-1124f.firebaseapp.com",projectId:"tennis-buddy-1124f",storageBucket:"tennis-buddy-1124f.appspot.com",messagingSenderId:"156395879392",appId:"1:156395879392:web:59f1f95e29c45e810f4985"});w["a"].initializeApp(k);var q=w["a"].firestore(),x=w["a"].auth(),_=w["a"].firestore.FieldValue.serverTimestamp,I=Object(r["v"])(null),B=Object(r["v"])(!1),S=function(){var e=Object(g["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return I.value=null,B.value=!0,e.prev=2,e.next=5,x.signOut();case 5:B.value=!1,e.next=13;break;case 8:e.prev=8,e.t0=e["catch"](2),console.log(e.t0.message),I.value=e.t0.message,B.value=!1;case 13:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(){return e.apply(this,arguments)}}(),R=function(){return{logout:S,error:I,isPending:B}},U=R,E=Object(r["v"])(x.currentUser);x.onAuthStateChanged((function(e){E.value=e}));var P=function(){return{user:E}},C=P,N={setup:function(){var e=Object(y["c"])(),t=U(),n=t.logout,r=C(),c=r.user,a=function(){var t=Object(g["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,n();case 2:e.replace("/login");case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return{handleLogout:a,user:c}}};n("175b");N.render=h,N.__scopeId="data-v-2e3c2967";var J=N,V={components:{Navbar:J}};n("e872");V.render=a;var M=V,D={class:"home"},F={key:0,class:"error"},L={key:1,class:"layout"};function A(e,t,n,c,a,u){var o=Object(r["y"])("BuddyItem"),i=Object(r["y"])("BuddyFilter");return Object(r["q"])(),Object(r["e"])("div",D,[c.error?(Object(r["q"])(),Object(r["e"])("div",F,Object(r["B"])(c.error),1)):Object(r["f"])("",!0),c.buddies?(Object(r["q"])(),Object(r["e"])("div",L,[Object(r["h"])("div",null,[(Object(r["q"])(!0),Object(r["e"])(r["a"],null,Object(r["w"])(c.buddies,(function(e){return Object(r["q"])(),Object(r["e"])(o,{key:e.id,id:e.id,name:e.userName,level:e.level,times:e.times},null,8,["id","name","level","times"])})),128))]),Object(r["h"])(i)])):Object(r["f"])("",!0)])}var H=n("5530"),T=n("2909"),z=(n("159b"),function(e,t){var n,c=Object(r["v"])(null),a=Object(r["v"])(null),u=q.collection(e).orderBy("createdAt");t&&(u=(n=u).where.apply(n,Object(T["a"])(t)));var o=u.onSnapshot((function(e){var t=[];e.docs.forEach((function(e){e.data().createdAt&&t.push(Object(H["a"])(Object(H["a"])({},e.data()),{},{id:e.id}))})),c.value=t,a.value=null}),(function(e){console.log(e.message),c.value=null,a.value="Could not fetch the data"}));return Object(r["H"])((function(e){e((function(){return o()}))})),{documents:c,error:a}}),W=z,K=(n("b0c0"),Object(r["M"])("data-v-4ad5ab28"));Object(r["t"])("data-v-4ad5ab28");var Y={class:"single"};Object(r["r"])();var $=K((function(e,t,n,c,a,u){var o=Object(r["y"])("base-badge"),i=Object(r["y"])("router-link");return Object(r["q"])(),Object(r["e"])("div",null,[Object(r["h"])(i,{to:{name:"BuddyDetails",params:{id:n.id}}},{default:K((function(){return[Object(r["h"])("div",Y,[Object(r["h"])("h3",null,Object(r["B"])(n.name),1),Object(r["h"])("p",null,Object(r["B"])(n.level),1),Object(r["h"])("div",null,[(Object(r["q"])(!0),Object(r["e"])(r["a"],null,Object(r["w"])(n.times,(function(e){return Object(r["q"])(),Object(r["e"])(o,{key:e,type:e,title:e},null,8,["type","title"])})),128))])])]})),_:1},8,["to"])])})),X={props:["id","name","level","times"]};n("959a");X.render=$,X.__scopeId="data-v-4ad5ab28";var Z=X,G=Object(r["M"])("data-v-01077140");Object(r["t"])("data-v-01077140");var Q={class:"filter"},ee=Object(r["h"])("h2",null,"Filter",-1),te=Object(r["h"])("h3",null,"Time of the day",-1),ne=Object(r["h"])("h3",null,"Level of player",-1);Object(r["r"])();var re=G((function(e,t,n,c,a,u){return Object(r["q"])(),Object(r["e"])("div",Q,[ee,Object(r["h"])("section",null,[te,(Object(r["q"])(!0),Object(r["e"])(r["a"],null,Object(r["w"])(a.timeLists,(function(e){return Object(r["q"])(),Object(r["e"])("div",{key:e,class:"filter-option"},[Object(r["h"])("input",{type:"checkbox",id:e},null,8,["id"]),Object(r["h"])("label",{for:e},Object(r["B"])(e),9,["for"])])})),128))]),Object(r["h"])("section",null,[ne,(Object(r["q"])(!0),Object(r["e"])(r["a"],null,Object(r["w"])(a.levelLists,(function(e){return Object(r["q"])(),Object(r["e"])("div",{key:e,class:"filter-option"},[Object(r["h"])("input",{type:"checkbox",id:e},null,8,["id"]),Object(r["h"])("label",{for:e},Object(r["B"])(e),9,["for"])])})),128))])])})),ce={data:function(){return{timeLists:["morning","evening","night"],levelLists:["beginner","intermediate","advanced"]}}};n("9e02");ce.render=re,ce.__scopeId="data-v-01077140";var ae=ce,ue={name:"Home",components:{BuddyItem:Z,BuddyFilter:ae},setup:function(){var e=W("buddies"),t=e.documents,n=e.error;return{error:n,buddies:t}}};n("5e89");ue.render=A;var oe=ue,ie=Object(r["h"])("h3",null,"Login",-1),le={key:0,class:"error"},de=Object(r["g"])("Login"),be=Object(r["g"])("Loading");function se(e,t,n,c,a,u){var o=Object(r["y"])("base-button");return Object(r["q"])(),Object(r["e"])("form",{onSubmit:t[3]||(t[3]=Object(r["L"])((function(){return c.handleSubmit&&c.handleSubmit.apply(c,arguments)}),["prevent"])),class:"card"},[ie,Object(r["J"])(Object(r["h"])("input",{type:"email",required:"",placeholder:"Email","onUpdate:modelValue":t[1]||(t[1]=function(e){return c.email=e})},null,512),[[r["F"],c.email]]),Object(r["J"])(Object(r["h"])("input",{type:"password",required:"",placeholder:"Password","onUpdate:modelValue":t[2]||(t[2]=function(e){return c.password=e})},null,512),[[r["F"],c.password]]),c.error?(Object(r["q"])(),Object(r["e"])("div",le,Object(r["B"])(c.error),1)):Object(r["f"])("",!0),c.isPending?(Object(r["q"])(),Object(r["e"])(o,{key:2,disabled:""},{default:Object(r["I"])((function(){return[be]})),_:1})):(Object(r["q"])(),Object(r["e"])(o,{key:1},{default:Object(r["I"])((function(){return[de]})),_:1}))],32)}var je=n("a1e9"),Oe=Object(je["j"])(null),ve=Object(je["j"])(!1),fe=function(){var e=Object(g["a"])(regeneratorRuntime.mark((function e(t,n){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return Oe.value=null,ve.value=!0,e.prev=2,e.next=5,x.signInWithEmailAndPassword(t,n);case 5:return r=e.sent,ve.value=!1,e.abrupt("return",r);case 10:e.prev=10,e.t0=e["catch"](2),console.log(e.t0.message),Oe.value="Incorrect login credentials",ve.value=!1;case 15:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t,n){return e.apply(this,arguments)}}(),pe=function(){return{error:Oe,login:fe,isPending:ve}},me=pe,he={setup:function(){var e=Object(r["v"])(""),t=Object(r["v"])(""),n=me(),c=n.error,a=n.login,u=n.isPending,o=Object(y["c"])(),i=function(){var n=Object(g["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,a(e.value,t.value);case 2:n.sent,c.value||o.push("/");case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return{email:e,password:t,handleSubmit:i,error:c,isPending:u}}};he.render=se;var ge=he,ye=Object(r["h"])("h3",null,"Sign up",-1),we={key:0,class:"error"},ke=Object(r["g"])("Sign up"),qe=Object(r["g"])("Loading");function xe(e,t,n,c,a,u){var o=Object(r["y"])("base-button");return Object(r["q"])(),Object(r["e"])("form",{onSubmit:t[4]||(t[4]=Object(r["L"])((function(){return c.handleSubmit&&c.handleSubmit.apply(c,arguments)}),["prevent"])),class:"card"},[ye,Object(r["J"])(Object(r["h"])("input",{type:"text",required:"",placeholder:"displayName","onUpdate:modelValue":t[1]||(t[1]=function(e){return c.displayName=e})},null,512),[[r["F"],c.displayName]]),Object(r["J"])(Object(r["h"])("input",{type:"email",required:"",placeholder:"Email","onUpdate:modelValue":t[2]||(t[2]=function(e){return c.email=e})},null,512),[[r["F"],c.email]]),Object(r["J"])(Object(r["h"])("input",{type:"password",required:"",placeholder:"Password","onUpdate:modelValue":t[3]||(t[3]=function(e){return c.password=e})},null,512),[[r["F"],c.password]]),c.error?(Object(r["q"])(),Object(r["e"])("div",we,Object(r["B"])(c.error),1)):Object(r["f"])("",!0),c.isPending?(Object(r["q"])(),Object(r["e"])(o,{key:2,disabled:""},{default:Object(r["I"])((function(){return[qe]})),_:1})):(Object(r["q"])(),Object(r["e"])(o,{key:1},{default:Object(r["I"])((function(){return[ke]})),_:1}))],32)}var _e=Object(je["j"])(null),Ie=Object(je["j"])(!1),Be=function(){var e=Object(g["a"])(regeneratorRuntime.mark((function e(t,n,r){var c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return _e.value=null,Ie.value=!0,e.prev=2,e.next=5,x.createUserWithEmailAndPassword(t,n);case 5:if(c=e.sent,c){e.next=8;break}throw new Error("Could not complete the signup");case 8:return e.next=10,c.user.updateProfile({displayName:r});case 10:return _e.value=null,Ie.value=!1,e.abrupt("return",c);case 15:e.prev=15,e.t0=e["catch"](2),console.log(e.t0.message),_e.value=e.t0.message,Ie.value=!1;case 20:case"end":return e.stop()}}),e,null,[[2,15]])})));return function(t,n,r){return e.apply(this,arguments)}}(),Se=function(){return{error:_e,signup:Be,isPending:Ie}},Re=Se,Ue={setup:function(){var e=Object(r["v"])(""),t=Object(r["v"])(""),n=Object(r["v"])(""),c=Re(),a=c.error,u=c.signup,o=c.isPending,i=Object(y["c"])(),l=function(){var r=Object(g["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,u(t.value,n.value,e.value);case 2:r.sent,a.value||i.push("/");case 4:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}();return{displayName:e,email:t,password:n,handleSubmit:l,error:a,isPending:o}}};Ue.render=xe;var Ee=Ue,Pe=Object(r["M"])("data-v-0ede1ac7");Object(r["t"])("data-v-0ede1ac7");var Ce=Object(r["h"])("h2",null,"Register as Buddy",-1),Ne=Object(r["h"])("h3",null,"Introduce yourself",-1),Je={class:"form-control"},Ve=Object(r["h"])("h3",null,"Your level",-1),Me=Object(r["h"])("label",{for:"beginner"},"Beginner",-1),De=Object(r["h"])("label",{for:"intermediate"},"Intermediate",-1),Fe=Object(r["h"])("label",{for:"advanced"},"Advanced",-1),Le={class:"form-control"},Ae=Object(r["h"])("h3",null,"Availability",-1),He=Object(r["h"])("label",{for:"morning"},"Morning",-1),Te=Object(r["h"])("label",{for:"evening"},"Evening",-1),ze=Object(r["h"])("label",{for:"night"},"Night",-1),We={key:0,class:"error"},Ke=Object(r["g"])("Register"),Ye=Object(r["g"])("Saving...");Object(r["r"])();var $e=Pe((function(e,t,n,c,a,u){var o=Object(r["y"])("base-button");return Object(r["q"])(),Object(r["e"])("form",{onSubmit:t[8]||(t[8]=Object(r["L"])((function(){return c.handleSubmit&&c.handleSubmit.apply(c,arguments)}),["prevent"])),class:"card"},[Ce,Object(r["h"])("div",null,[Ne,Object(r["J"])(Object(r["h"])("textarea",{required:"",placeholder:"Introduction","onUpdate:modelValue":t[1]||(t[1]=function(e){return c.introduction=e})},null,512),[[r["F"],c.introduction]])]),Object(r["h"])("div",Je,[Ve,Object(r["h"])("div",null,[Object(r["J"])(Object(r["h"])("input",{type:"radio",id:"beginner",value:"beginner",name:"level",checked:"","onUpdate:modelValue":t[2]||(t[2]=function(e){return c.level=e})},null,512),[[r["E"],c.level]]),Me]),Object(r["h"])("div",null,[Object(r["J"])(Object(r["h"])("input",{type:"radio",id:"intermediate",value:"intermediate",name:"level","onUpdate:modelValue":t[3]||(t[3]=function(e){return c.level=e})},null,512),[[r["E"],c.level]]),De]),Object(r["h"])("div",null,[Object(r["J"])(Object(r["h"])("input",{type:"radio",id:"advanced",value:"advanced",name:"level","onUpdate:modelValue":t[4]||(t[4]=function(e){return c.level=e})},null,512),[[r["E"],c.level]]),Fe])]),Object(r["h"])("div",Le,[Ae,Object(r["h"])("div",null,[Object(r["J"])(Object(r["h"])("input",{type:"checkbox",id:"morning",value:"morning","onUpdate:modelValue":t[5]||(t[5]=function(e){return c.times=e})},null,512),[[r["D"],c.times]]),He]),Object(r["h"])("div",null,[Object(r["J"])(Object(r["h"])("input",{type:"checkbox",id:"evening",value:"evening","onUpdate:modelValue":t[6]||(t[6]=function(e){return c.times=e})},null,512),[[r["D"],c.times]]),Te]),Object(r["h"])("div",null,[Object(r["J"])(Object(r["h"])("input",{type:"checkbox",id:"night",value:"night","onUpdate:modelValue":t[7]||(t[7]=function(e){return c.times=e})},null,512),[[r["D"],c.times]]),ze])]),c.error?(Object(r["q"])(),Object(r["e"])("div",We,Object(r["B"])(c.error),1)):Object(r["f"])("",!0),c.isPending?(Object(r["q"])(),Object(r["e"])(o,{key:2,disabled:""},{default:Pe((function(){return[Ye]})),_:1})):(Object(r["q"])(),Object(r["e"])(o,{key:1},{default:Pe((function(){return[Ke]})),_:1}))],32)})),Xe=function(e){var t=Object(r["v"])(null),n=Object(r["v"])(!1),c=function(){var r=Object(g["a"])(regeneratorRuntime.mark((function r(c){var a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return t.value=null,n.value=!0,r.prev=2,r.next=5,q.collection(e).add(c);case 5:return a=r.sent,n.value=!1,r.abrupt("return",a);case 10:r.prev=10,r.t0=r["catch"](2),console.log(r.t0.message),t.value="Could not send the message",n.value=!1;case 15:case"end":return r.stop()}}),r,null,[[2,10]])})));return function(e){return r.apply(this,arguments)}}();return{error:t,addDoc:c,isPending:n}},Ze=Xe,Ge={setup:function(){var e=Object(r["v"])(""),t=Object(r["v"])("beginner"),n=Object(r["v"])([]),c=Ze("buddies"),a=c.error,u=c.addDoc,o=c.isPending,i=C(),l=i.user,d=Object(y["c"])(),b=function(){var r=Object(g["a"])(regeneratorRuntime.mark((function r(){var c;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,u({userId:l.value.uid,userName:l.value.displayName,intro:e.value,level:t.value,times:n.value,createdAt:_()});case 2:c=r.sent,a.value||d.push({name:"BuddyDetails",params:{id:c.id}});case 4:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}();return{introduction:e,level:t,times:n,handleSubmit:b,error:a,isPending:o}}};n("0a5d");Ge.render=$e,Ge.__scopeId="data-v-0ede1ac7";var Qe=Ge,et=Object(r["M"])("data-v-2dc084ba");Object(r["t"])("data-v-2dc084ba");var tt={key:0,class:"error"},nt={key:1},rt={class:"card"},ct={class:"card"},at=Object(r["h"])("h2",null,"Interested? Reach out now!",-1),ut=Object(r["g"])(" Contact "),ot=Object(r["g"])(" Close "),it={class:"card"};Object(r["r"])();var lt=et((function(e,t,n,c,a,u){var o=Object(r["y"])("base-badge"),i=Object(r["y"])("base-button"),l=Object(r["y"])("ContactBuddy");return Object(r["q"])(),Object(r["e"])("div",null,[c.error?(Object(r["q"])(),Object(r["e"])("div",tt,Object(r["B"])(c.error),1)):Object(r["f"])("",!0),c.buddy?(Object(r["q"])(),Object(r["e"])("div",nt,[Object(r["h"])("section",rt,[Object(r["h"])("h2",null,Object(r["B"])(c.buddy.userName),1),Object(r["h"])("h3",null,Object(r["B"])(c.buddy.level),1),(Object(r["q"])(!0),Object(r["e"])(r["a"],null,Object(r["w"])(c.buddy.times,(function(e){return Object(r["q"])(),Object(r["e"])(o,{key:e,type:e,title:e},null,8,["type","title"])})),128))]),Object(r["h"])("section",ct,[at,c.isFormShow?(Object(r["q"])(),Object(r["e"])(i,{key:1,onClick:t[2]||(t[2]=function(e){return c.isFormShow=!1}),mode:"alert"},{default:et((function(){return[ot]})),_:1})):(Object(r["q"])(),Object(r["e"])(i,{key:0,onClick:t[1]||(t[1]=function(e){return c.isFormShow=!0})},{default:et((function(){return[ut]})),_:1})),c.isFormShow?(Object(r["q"])(),Object(r["e"])(l,{key:2,buddyUserId:c.buddy.userId},null,8,["buddyUserId"])):Object(r["f"])("",!0)]),Object(r["h"])("section",it,[Object(r["h"])("p",null,Object(r["B"])(c.buddy.intro),1)])])):Object(r["f"])("",!0)])})),dt=function(e,t){var n=Object(r["v"])(null),c=Object(r["v"])(null),a=q.collection(e).doc(t),u=a.onSnapshot((function(e){e.data()?(n.value=Object(H["a"])(Object(H["a"])({},e.data()),{},{id:e.id}),c.value=null):c.value="that document does not exist"}),(function(e){console.log(e.message),c.value="Could not fetch the document"}));return Object(r["H"])((function(e){e((function(){return u()}))})),{document:n,error:c}},bt=dt,st=Object(r["h"])("label",{for:"email"},"Your E-Mail",-1),jt=Object(r["h"])("label",{for:"message"},"Message",-1),Ot={key:0,class:"error"},vt=Object(r["g"])("Send Message");function ft(e,t,n,c,a,u){var o=Object(r["y"])("base-button");return Object(r["q"])(),Object(r["e"])("form",{onSubmit:t[3]||(t[3]=Object(r["L"])((function(){return c.handleSubmit&&c.handleSubmit.apply(c,arguments)}),["prevent"]))},[Object(r["h"])("div",null,[st,Object(r["J"])(Object(r["h"])("input",{type:"email",id:"email","onUpdate:modelValue":t[1]||(t[1]=function(e){return c.email=e})},null,512),[[r["F"],c.email,void 0,{trim:!0}]])]),Object(r["h"])("div",null,[jt,Object(r["J"])(Object(r["h"])("textarea",{id:"message",rows:"5","onUpdate:modelValue":t[2]||(t[2]=function(e){return c.message=e})},null,512),[[r["F"],c.message,void 0,{trim:!0}]])]),c.formIsValid?Object(r["f"])("",!0):(Object(r["q"])(),Object(r["e"])("p",Ot," Please enter a valid message and non-empty message. ")),Object(r["h"])("div",null,[Object(r["h"])(o,null,{default:Object(r["I"])((function(){return[vt]})),_:1})])],32)}n("caad"),n("2532");var pt={props:["buddyUserId"],setup:function(e){var t=Object(y["c"])(),n=Ze("requests"),r=n.addDoc,c=n.error,a=Object(je["j"])(""),u=Object(je["j"])(""),o=Object(je["j"])(!0),i=function(){var n=Object(g["a"])(regeneratorRuntime.mark((function n(){var i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(o.value=!0,""!==a.value&&a.value.includes("@")&&""!==u.value){n.next=4;break}return o.value=!1,n.abrupt("return");case 4:return i={email:a.value,message:u.value,buddyUserId:e.buddyUserId,createdAt:_()},n.next=7,r(i);case 7:c.value||t.replace("/");case 8:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return{email:a,message:u,formIsValid:o,handleSubmit:i}}};pt.render=ft;var mt=pt,ht={components:{ContactBuddy:mt},props:["id"],setup:function(e){var t=bt("buddies",e.id),n=t.error,r=t.document,c=Object(je["j"])(!1);return{error:n,buddy:r,isFormShow:c}}};n("4cb7");ht.render=lt,ht.__scopeId="data-v-2dc084ba";var gt=ht,yt=Object(r["M"])("data-v-26caf9c8");Object(r["t"])("data-v-26caf9c8");var wt={key:0,class:"error"},kt={key:1},qt={class:"edit"},xt=Object(r["g"])(" Edit Profile "),_t={class:"card"},It={class:"card"},Bt={class:"card"};Object(r["r"])();var St=yt((function(e,t,n,c,a,u){var o=Object(r["y"])("router-link"),i=Object(r["y"])("base-badge"),l=Object(r["y"])("RequestsReceived");return Object(r["q"])(),Object(r["e"])("div",null,[c.error?(Object(r["q"])(),Object(r["e"])("div",wt,Object(r["B"])(c.error),1)):Object(r["f"])("",!0),c.buddies?(Object(r["q"])(),Object(r["e"])("div",kt,[Object(r["h"])("div",qt,[Object(r["h"])(o,{to:{name:"UserEdit",params:{id:c.buddies[0].id}},class:"hover-bold"},{default:yt((function(){return[xt]})),_:1},8,["to"])]),Object(r["h"])("section",_t,[Object(r["h"])("h2",null,Object(r["B"])(c.buddies[0].userName),1),Object(r["h"])("h3",null,Object(r["B"])(c.buddies[0].level),1),(Object(r["q"])(!0),Object(r["e"])(r["a"],null,Object(r["w"])(c.buddies[0].times,(function(e){return Object(r["q"])(),Object(r["e"])(i,{key:e,type:e,title:e},null,8,["type","title"])})),128))]),Object(r["h"])("section",It,[Object(r["h"])("p",null,Object(r["B"])(c.buddies[0].intro),1)])])):Object(r["f"])("",!0),Object(r["h"])("div",null,[Object(r["h"])("section",Bt,[Object(r["h"])(l,{userId:c.userId},null,8,["userId"])])])])})),Rt=Object(r["M"])("data-v-6aad5a90");Object(r["t"])("data-v-6aad5a90");var Ut=Object(r["h"])("header",null,[Object(r["h"])("h2",null,"Requests Received")],-1),Et={key:0},Pt={key:1},Ct={key:2};Object(r["r"])();var Nt=Rt((function(e,t,n,c,a,u){var o=Object(r["y"])("font-awesome-icon");return Object(r["q"])(),Object(r["e"])("div",null,[Ut,c.error?(Object(r["q"])(),Object(r["e"])("div",Et,Object(r["B"])(c.error),1)):Object(r["f"])("",!0),c.hasRequests?(Object(r["q"])(),Object(r["e"])("ul",Ct,[(Object(r["q"])(!0),Object(r["e"])(r["a"],null,Object(r["w"])(c.requests,(function(e){return Object(r["q"])(),Object(r["e"])("li",{key:e.id},[Object(r["h"])("div",null,[Object(r["h"])("a",{href:"mailto:"+e.email},Object(r["B"])(e.email),9,["href"]),Object(r["h"])("p",null,Object(r["B"])(e.message),1)]),Object(r["h"])(o,{icon:"times-circle",size:"lg",onClick:function(t){return c.handleDelete(e.id)},class:"delete"},null,8,["onClick"])])})),128))])):(Object(r["q"])(),Object(r["e"])("p",Pt," You haven't received any requests yet! "))])})),Jt=n("5c40"),Vt=function(e){var t=Object(r["v"])(null),n=Object(r["v"])(!1),c=function(){var r=Object(g["a"])(regeneratorRuntime.mark((function r(c){var a,u;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return a=q.collection(e).doc(c),n.value=!0,t.value=null,r.prev=3,r.next=6,a.delete();case 6:return u=r.sent,n.value=!1,r.abrupt("return",u);case 11:r.prev=11,r.t0=r["catch"](3),console.log(r.t0.message),n.value=!1,t.value="could not delete the document";case 16:case"end":return r.stop()}}),r,null,[[3,11]])})));return function(e){return r.apply(this,arguments)}}(),a=function(){var r=Object(g["a"])(regeneratorRuntime.mark((function r(c,a){var u,o;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return u=q.collection(e).doc(c),n.value=!0,t.value=null,r.prev=3,r.next=6,u.update(a);case 6:return o=r.sent,n.value=!1,r.abrupt("return",o);case 11:r.prev=11,r.t0=r["catch"](3),console.log(r.t0.message),n.value=!1,t.value="could not update the document";case 16:case"end":return r.stop()}}),r,null,[[3,11]])})));return function(e,t){return r.apply(this,arguments)}}();return{error:t,isPending:n,deleteDoc:c,updateDoc:a}},Mt=Vt,Dt={props:["userId"],setup:function(e){var t=W("requests",["buddyUserId","==",e.userId]),n=t.documents,r=t.error,c=Mt("requests"),a=c.deleteDoc,u=function(){var e=Object(g["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,a(t);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o=Object(Jt["d"])((function(){if(n.value)return n.value.length}));return{requests:n,error:r,hasRequests:o,handleDelete:u}}};n("0b85");Dt.render=Nt,Dt.__scopeId="data-v-6aad5a90";var Ft=Dt,Lt={components:{RequestsReceived:Ft},setup:function(){var e=C(),t=e.user,n=t.value.uid,r=W("buddies",["userId","==",n]),c=r.documents,a=r.error;return{buddies:c,error:a,userId:n}}};n("3baf");Lt.render=St,Lt.__scopeId="data-v-26caf9c8";var At=Lt,Ht=Object(r["M"])("data-v-79f05a3d");Object(r["t"])("data-v-79f05a3d");var Tt={key:0,class:"error"},zt=Object(r["h"])("h2",null,"Edit Profile",-1),Wt=Object(r["h"])("h3",null,"Name",-1),Kt=Object(r["h"])("h3",null,"Introduction",-1),Yt={class:"form-control"},$t=Object(r["h"])("h3",null,"Your level",-1),Xt=Object(r["h"])("label",{for:"beginner"},"Beginner",-1),Zt=Object(r["h"])("label",{for:"intermediate"},"Intermediate",-1),Gt=Object(r["h"])("label",{for:"advanced"},"Advanced",-1),Qt={class:"form-control"},en=Object(r["h"])("h3",null,"Availability",-1),tn=Object(r["h"])("label",{for:"morning"},"Morning",-1),nn=Object(r["h"])("label",{for:"evening"},"Evening",-1),rn=Object(r["h"])("label",{for:"night"},"Night",-1),cn={key:0,class:"error"},an={key:1},un=Object(r["g"])("Save"),on=Object(r["g"])("Cancel"),ln=Object(r["g"])("Saving...");Object(r["r"])();var dn=Ht((function(e,t,n,c,a,u){var o=Object(r["y"])("base-button");return Object(r["q"])(),Object(r["e"])("div",null,[c.loadError?(Object(r["q"])(),Object(r["e"])("div",Tt,Object(r["B"])(c.loadError),1)):Object(r["f"])("",!0),c.document?(Object(r["q"])(),Object(r["e"])("form",{key:1,onSubmit:t[9]||(t[9]=Object(r["L"])((function(){return c.handleSubmit&&c.handleSubmit.apply(c,arguments)}),["prevent"])),class:"card"},[zt,Object(r["h"])("div",null,[Wt,Object(r["J"])(Object(r["h"])("input",{type:"text",required:"","onUpdate:modelValue":t[1]||(t[1]=function(e){return c.document.userName=e})},null,512),[[r["F"],c.document.userName]])]),Object(r["h"])("div",null,[Kt,Object(r["J"])(Object(r["h"])("textarea",{required:"","onUpdate:modelValue":t[2]||(t[2]=function(e){return c.document.intro=e})},null,512),[[r["F"],c.document.intro]])]),Object(r["h"])("div",Yt,[$t,Object(r["h"])("div",null,[Object(r["J"])(Object(r["h"])("input",{type:"radio",id:"beginner",value:"beginner",name:"level",checked:"","onUpdate:modelValue":t[3]||(t[3]=function(e){return c.document.level=e})},null,512),[[r["E"],c.document.level]]),Xt]),Object(r["h"])("div",null,[Object(r["J"])(Object(r["h"])("input",{type:"radio",id:"intermediate",value:"intermediate",name:"level","onUpdate:modelValue":t[4]||(t[4]=function(e){return c.document.level=e})},null,512),[[r["E"],c.document.level]]),Zt]),Object(r["h"])("div",null,[Object(r["J"])(Object(r["h"])("input",{type:"radio",id:"advanced",value:"advanced",name:"level","onUpdate:modelValue":t[5]||(t[5]=function(e){return c.document.level=e})},null,512),[[r["E"],c.document.level]]),Gt])]),Object(r["h"])("div",Qt,[en,Object(r["h"])("div",null,[Object(r["J"])(Object(r["h"])("input",{type:"checkbox",id:"morning",value:"morning","onUpdate:modelValue":t[6]||(t[6]=function(e){return c.document.times=e})},null,512),[[r["D"],c.document.times]]),tn]),Object(r["h"])("div",null,[Object(r["J"])(Object(r["h"])("input",{type:"checkbox",id:"evening",value:"evening","onUpdate:modelValue":t[7]||(t[7]=function(e){return c.document.times=e})},null,512),[[r["D"],c.document.times]]),nn]),Object(r["h"])("div",null,[Object(r["J"])(Object(r["h"])("input",{type:"checkbox",id:"night",value:"night","onUpdate:modelValue":t[8]||(t[8]=function(e){return c.document.times=e})},null,512),[[r["D"],c.document.times]]),rn])]),c.updateError?(Object(r["q"])(),Object(r["e"])("div",cn,Object(r["B"])(c.updateError),1)):Object(r["f"])("",!0),c.isPending?(Object(r["q"])(),Object(r["e"])(o,{key:2,disabled:""},{default:Ht((function(){return[ln]})),_:1})):(Object(r["q"])(),Object(r["e"])("div",an,[Object(r["h"])(o,{style:{"margin-right":"1rem"}},{default:Ht((function(){return[un]})),_:1}),Object(r["h"])(o,{type:"button",onClick:c.handleCancel,mode:"alert"},{default:Ht((function(){return[on]})),_:1},8,["onClick"])]))],32)):Object(r["f"])("",!0)])})),bn={props:["id"],setup:function(e){var t=Object(y["c"])(),n=bt("buddies",e.id),r=n.document,c=n.error,a=Mt("buddies"),u=a.updateDoc,o=a.error,i=a.isPending,l=function(){var n=Object(g["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,u(e.id,{userName:r.value.userName,intro:r.value.intro,level:r.value.level,times:r.value.times});case 2:o.value||t.push({name:"UserBuddy"});case 3:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),d=function(){t.push({name:"UserBuddy"})};return{document:r,loadError:c,updateError:o,isPending:i,handleSubmit:l,handleCancel:d}}};n("17c5");bn.render=dn,bn.__scopeId="data-v-79f05a3d";var sn=bn,jn=Object(r["M"])("data-v-00f34dfc");Object(r["t"])("data-v-00f34dfc");var On={class:"chat-container"};Object(r["r"])();var vn=jn((function(e,t,n,c,a,u){var o=Object(r["y"])("ChatWindow"),i=Object(r["y"])("NewChatForm");return Object(r["q"])(),Object(r["e"])("div",On,[Object(r["h"])(o),Object(r["h"])(i)])})),fn=Object(r["M"])("data-v-cfcfbecc");Object(r["t"])("data-v-cfcfbecc");var pn={class:"error"};Object(r["r"])();var mn=fn((function(e,t,n,c,a,u){return Object(r["q"])(),Object(r["e"])("form",null,[Object(r["J"])(Object(r["h"])("textarea",{placeholder:"Type a message and hit enter to send...","onUpdate:modelValue":t[1]||(t[1]=function(e){return c.message=e}),onKeypress:t[2]||(t[2]=Object(r["K"])(Object(r["L"])((function(){return c.handleSubmit&&c.handleSubmit.apply(c,arguments)}),["prevent"]),["enter"]))},null,544),[[r["F"],c.message]]),Object(r["h"])("div",pn,Object(r["B"])(c.error),1)])})),hn={setup:function(){var e=C(),t=e.user,n=Ze("messages"),r=n.addDoc,c=n.error,a=Object(je["j"])(""),u=function(){var e=Object(g["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n={userName:t.value.displayName,message:a.value,createdAt:_()},e.next=3,r(n);case 3:c.value||(a.value="");case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return{message:a,handleSubmit:u,error:c}}};n("a6b5");hn.render=mn,hn.__scopeId="data-v-cfcfbecc";var gn=hn,yn={class:"chat-window"},wn={key:0},kn={key:1,class:"messages",ref:"window"},qn={class:"created-at"},xn={class:"name"},_n={class:"message"};function In(e,t,n,c,a,u){return Object(r["q"])(),Object(r["e"])("div",yn,[c.error?(Object(r["q"])(),Object(r["e"])("div",wn,Object(r["B"])(c.error),1)):Object(r["f"])("",!0),c.formattedMessages?(Object(r["q"])(),Object(r["e"])("div",kn,[(Object(r["q"])(!0),Object(r["e"])(r["a"],null,Object(r["w"])(c.formattedMessages,(function(e){return Object(r["q"])(),Object(r["e"])("div",{key:e.id,class:"single"},[Object(r["h"])("span",qn,Object(r["B"])(e.createdAt),1),Object(r["h"])("span",xn,Object(r["B"])(e.userName),1),Object(r["h"])("span",_n,Object(r["B"])(e.message),1)])})),128))],512)):Object(r["f"])("",!0)])}n("d81d");var Bn=n("ef1b"),Sn={setup:function(){var e=W("messages"),t=e.documents,n=e.error,r=Object(Jt["d"])((function(){if(t.value)return t.value.map((function(e){var t=Object(Bn["a"])(e.createdAt.toDate());return Object(H["a"])(Object(H["a"])({},e),{},{createdAt:t})}))})),c=Object(je["j"])(null);return Object(Jt["w"])((function(){c.value.scrollTop=c.value.scrollHeight})),{formattedMessages:r,error:n,window:c}}};n("dadc");Sn.render=In;var Rn=Sn,Un={components:{NewChatForm:gn,ChatWindow:Rn}};n("a943");Un.render=vn,Un.__scopeId="data-v-00f34dfc";var En=Un,Pn=function(e,t,n){var r=x.currentUser;r?n():n({name:"Login"})},Cn=function(e,t,n){var r=x.currentUser;r?n({name:"Home"}):n()},Nn=[{path:"/",name:"Home",component:oe},{path:"/login",name:"Login",component:ge,beforeEnter:Cn},{path:"/signup",name:"Signup",component:Ee,beforeEnter:Cn},{path:"/register",name:"BuddyRegistration",component:Qe,beforeEnter:Pn},{path:"/buddies/:id",name:"BuddyDetails",component:gt,props:!0},{path:"/account",name:"UserBuddy",component:At,beforeEnter:Pn},{path:"/account/edit",name:"UserEdit",component:sn,props:!0,beforeEnter:Pn},{path:"/chatroom",name:"Chatroom",component:En,beforeEnter:Pn}],Jn=Object(y["a"])({history:Object(y["b"])(""),routes:Nn}),Vn=Jn,Mn=n("ecee"),Dn=n("c074"),Fn=n("ad3d"),Ln=(n("9911"),Object(r["M"])("data-v-b5826a0a")),An=Ln((function(e,t,n,c,a,u){var o=Object(r["y"])("router-link");return n.link?(Object(r["q"])(),Object(r["e"])(o,{key:1,to:n.to},{default:Ln((function(){return[Object(r["x"])(e.$slots,"default",{},void 0,!0)]})),_:3},8,["to"])):(Object(r["q"])(),Object(r["e"])("button",{key:0,class:n.mode},[Object(r["x"])(e.$slots,"default",{},void 0,!0)],2))})),Hn={props:{mode:{type:String,required:!1,default:null},link:{type:Boolean,required:!1,default:!1},to:{type:String,required:!1,default:"/"}}};n("d96c");Hn.render=An,Hn.__scopeId="data-v-b5826a0a";var Tn=Hn,zn=Object(r["M"])("data-v-3e047f46"),Wn=zn((function(e,t,n,c,a,u){return Object(r["q"])(),Object(r["e"])("span",{class:["badge",n.type]},Object(r["B"])(u.text),3)})),Kn={props:["type","title"],computed:{text:function(){return this.title.toUpperCase()}}};n("a2b9");Kn.render=Wn,Kn.__scopeId="data-v-3e047f46";var Yn,$n=Kn,Xn=(n("845f"),Object(r["d"])(M));Xn.component("base-button",Tn),Xn.component("base-badge",$n),Mn["c"].add(Dn["c"]),Mn["c"].add(Dn["a"]),Mn["c"].add(Dn["b"]),Mn["c"].add(Dn["d"]),Xn.component("font-awesome-icon",Fn["a"]),x.onAuthStateChanged((function(){Yn||(Yn=Xn.use(Vn).mount("#app"))}))},"5db8":function(e,t,n){},"5e89":function(e,t,n){"use strict";n("6d79")},"6d79":function(e,t,n){},"7dea":function(e,t,n){},"845f":function(e,t,n){},"959a":function(e,t,n){"use strict";n("42d9")},"95f1":function(e,t,n){},"9e02":function(e,t,n){"use strict";n("fcce")},a2b9:function(e,t,n){"use strict";n("0a12")},a6b5:function(e,t,n){"use strict";n("c3ff")},a943:function(e,t,n){"use strict";n("0364")},c3ff:function(e,t,n){},cd6e:function(e,t,n){},d96c:function(e,t,n){"use strict";n("43cf")},dadc:function(e,t,n){"use strict";n("5db8")},e872:function(e,t,n){"use strict";n("95f1")},e929:function(e,t,n){},fcce:function(e,t,n){}});
//# sourceMappingURL=app.09144624.js.map