(this.webpackJsonpfront=this.webpackJsonpfront||[]).push([[0],{100:function(e,t,c){},101:function(e,t,c){},102:function(e,t,c){},104:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),s=c(23),r=c.n(s),o=(c(58),c(3)),i=[{image:"https://i.ibb.co/BP4Qshn/home.jpg"},{image:"https://i.ibb.co/Jj759S3/user-Profile.jpg"},{image:"https://i.ibb.co/X2JLYt3/visiting-Profile.jpg"}],l=(c(59),c(41)),u=c.n(l),j=c(42),b=c.n(j),d=c(0);function p(e){var t=e.slides,c=Object(a.useState)(0),n=Object(o.a)(c,2),s=n[0],r=n[1],l=t.length;return!Array.isArray(t)||t.length<=0?null:Object(d.jsxs)("div",{className:"slider",children:[Object(d.jsx)(u.a,{className:"silderLeftArrow",style:{fontSize:70,color:"var(--bluedark)"},onClick:function(){r(0===s?l-1:s-1)}}),i.map((function(e,t){return Object(d.jsx)("div",{className:t===s?"slide active":"slide",children:t===s&&Object(d.jsx)("img",{src:e.image,alt:"sliderImg",className:"sliderImg"})},t)})),Object(d.jsx)(b.a,{className:"silderRightArrow",style:{fontSize:70,color:"var(--bluedark)"},onClick:function(){r(s===l-1?0:s+1)}})]})}var h=c(7);function m(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("div",{className:"welcome",children:[Object(d.jsxs)("div",{className:"welcomeLeft",children:[Object(d.jsx)("h1",{className:"welcomeHead",children:"Welcome to ConnectGlobe!"}),Object(d.jsxs)("div",{className:"welcomeConnect",children:[Object(d.jsx)("p",{className:"welcomeText",children:"New here?"}),Object(d.jsx)(h.b,{to:"/register",children:Object(d.jsx)("button",{className:"whiteBtn",children:"Register"})}),Object(d.jsx)("p",{className:"welcomeText",children:"have a account?"}),Object(d.jsx)(h.b,{to:"/login",children:Object(d.jsx)("button",{className:"whiteBtn",children:"Login"})})]})]}),Object(d.jsx)("div",{className:"welcomeRight",children:Object(d.jsx)(p,{slides:i})})]}),Object(d.jsxs)("div",{className:"welcomeBottom",children:[Object(d.jsxs)("ul",{className:"welcomeLink",children:[Object(d.jsx)("li",{children:"About"}),Object(d.jsx)("li",{children:"Blog"}),Object(d.jsx)("li",{children:"Jobs"}),Object(d.jsx)("li",{children:"Help"}),Object(d.jsx)("li",{children:"API"}),Object(d.jsx)("li",{children:"Privacy"}),Object(d.jsx)("li",{children:"Terms"}),Object(d.jsx)("li",{children:"Top Accounts"}),Object(d.jsx)("li",{children:"Hashtags"}),Object(d.jsx)("li",{children:"Locations"})]}),Object(d.jsxs)("div",{className:"welcomeEnd",children:[Object(d.jsxs)("p",{children:["Made with ",Object(d.jsx)("span",{className:"pop",children:"Love"})," from India"]}),Object(d.jsx)("p",{children:"\xa9 2021 ConnectGlobe"})]})]})]})}c(67);var O=c(4),x=c.n(O),f=c(6),g=c(21),v=c(18),N=c(8),w=c(5),k=c.n(w);var S=c(25),I=c.n(S),C=c(26),y=c.n(C);function P(){var e=Object(a.useState)(!1),t=Object(o.a)(e,2),c=t[0],n=t[1],s=function(e){var t=e.initialValues,c=Object(N.g)(),n=Object(a.useState)(t||{}),s=Object(o.a)(n,2),r=s[0],i=s[1],l=Object(a.useState)(null),u=Object(o.a)(l,2),j=u[0],b=u[1],d=function(){var e=Object(f.a)(x.a.mark((function e(t){var a,n,s;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.values,n=a.email,s=a.password,e.prev=3,e.next=6,k()({method:"POST",url:"".concat("https://demooapi.herokuapp.com","/auth/login"),data:{email:n,password:s},headers:new Headers({"Content-Type":"application/json"})}).then((function(e){c.push("/"),localStorage.setItem("token",e.data.token),localStorage.setItem("userId",e.data.user._id),console.log(e.data.user._id)}));case 6:e.next=12;break;case 8:e.prev=8,e.t0=e.catch(3),console.log(e.t0.response.data),b(e.t0.response.data);case 12:case"end":return e.stop()}}),e,null,[[3,8]])})));return function(t){return e.apply(this,arguments)}}();return{handle_change:function(e){var t=e.target.value,c=e.target.name;i(Object(v.a)(Object(v.a)({},r),{},Object(g.a)({},c,t)))},values:r,handle_submit:function(e){e.preventDefault(),d({values:r})},error:j}}({initialValues:{email:"",password:""}}),r=s.values,i=s.handle_change,l=s.handle_submit,u=s.error;return Object(d.jsx)("div",{className:"login",children:Object(d.jsxs)("div",{className:"loginWrapper",children:[Object(d.jsxs)("div",{className:"loginLeft",children:[Object(d.jsx)("h3",{className:"loginLogo",children:"ConnectGlobe"}),Object(d.jsx)("span",{className:"loginDesc",children:"Connect with the world around you on ConnectGlobe."}),Object(d.jsx)(h.b,{to:"/welcome",children:Object(d.jsx)("button",{className:"whiteBtn",children:"Check us"})})]}),Object(d.jsx)("div",{className:"loginRight",children:Object(d.jsxs)("div",{className:"loginBox",children:[Object(d.jsx)("h3",{className:"loginHead",children:"Login"}),u&&Object(d.jsx)("p",{className:"errorMessage",children:u.messages}),Object(d.jsx)("input",{type:"email",placeholder:"Enter email",name:"email",value:r.email,onChange:i,className:"loginInput"}),Object(d.jsx)("input",{type:c?"text":"password",placeholder:"Enter password",name:"password",value:r.password,onChange:i,className:"loginInput"}),c?Object(d.jsx)(y.a,{onClick:function(){n(!c)}}):Object(d.jsx)(I.a,{onClick:function(){n(!c)}}),Object(d.jsx)("button",{className:"greenBtn",onClick:l,children:"Login"}),Object(d.jsx)("span",{className:"loginNoAccount",children:"Don't have an account?"}),Object(d.jsx)(h.b,{to:"/register",children:Object(d.jsx)("button",{className:"greenBtn",children:"Register"})})]})})]})})}c(88);var B=function(){var e=Object(f.a)(x.a.mark((function e(t,c){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.post("".concat("https://demooapi.herokuapp.com","/auth/verify"),{userName:t,email:c}).then((function(e){return console.log(e)})).catch((function(e){return console.log(e)}));case 2:case"end":return e.stop()}}),e)})));return function(t,c){return e.apply(this,arguments)}}();function D(){var e=Object(a.useState)(!1),t=Object(o.a)(e,2),c=t[0],n=t[1],s=function(e){var t=e.initialValues,c=Object(N.g)(),n=Object(a.useState)(t||{}),s=Object(o.a)(n,2),r=s[0],i=s[1],l=Object(a.useState)(null),u=Object(o.a)(l,2),j=u[0],b=u[1],d=function(){var e=Object(f.a)(x.a.mark((function e(t){var a,n,s,r;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.values,n=a.userName,s=a.email,r=a.password,e.prev=3,e.next=6,k()({method:"POST",url:"".concat("https://demooapi.herokuapp.com","/auth/register"),data:{userName:n,email:s,password:r},headers:new Headers({"Content-Type":"application/json"})}).then((function(e){B(n,s),c.push("/login"),console.log(e)}));case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(3),b(e.t0.response.data);case 11:case"end":return e.stop()}}),e,null,[[3,8]])})));return function(t){return e.apply(this,arguments)}}();return{handle_change:function(e){var t=e.target.value,c=e.target.name;i(Object(v.a)(Object(v.a)({},r),{},Object(g.a)({},c,t)))},values:r,handle_submit:function(e){e.preventDefault(),d({values:r})},error:j}}({initialValues:{email:"",userName:"",password:""}}),r=s.values,i=s.handle_change,l=s.handle_submit,u=s.error;return Object(d.jsx)("div",{className:"register",children:Object(d.jsxs)("div",{className:"registerWrapper",children:[Object(d.jsxs)("div",{className:"registerLeft",children:[Object(d.jsx)("h3",{className:"registerLogo",children:"ConnectGlobe"}),Object(d.jsx)("span",{className:"registerDesc",children:"Connect with the world around you on ConnectGlobe."}),Object(d.jsx)(h.b,{to:"/welcome",children:Object(d.jsx)("button",{className:"greenBtn",children:"Check us"})})]}),Object(d.jsx)("div",{className:"registerRight",children:Object(d.jsxs)("div",{className:"registerBox",children:[Object(d.jsx)("h3",{className:"registerHead",children:"Register"}),u&&Object(d.jsx)("p",{className:"errorMessage",children:u.messages}),Object(d.jsx)("input",{type:"text",placeholder:"Enter username",name:"userName",value:r.userName,onChange:i,className:"registerInput"}),Object(d.jsx)("input",{type:"email",placeholder:"Enter email",name:"email",value:r.email,onChange:i,className:"registerInput"}),Object(d.jsx)("input",{type:c?"text":"password",placeholder:"Enter password",name:"password",value:r.password,onChange:i,className:"registerInput"}),c?Object(d.jsx)(y.a,{onClick:function(){n(!c)}}):Object(d.jsx)(I.a,{onClick:function(){n(!c)}}),Object(d.jsx)("button",{onClick:l,className:"greenBtn",children:"Signup"}),Object(d.jsx)("span",{className:"loginAccount",children:"Already have a account?"}),Object(d.jsx)(h.b,{to:"/login",children:Object(d.jsx)("button",{className:"greenBtn",children:"Login"})})]})})]})})}c(89),c(90);var L=c(44),T=c.n(L),_=c(45),E=c.n(_),F=c(22),A=c.n(F);function U(){var e="https://demooapi.herokuapp.com",t=Object(a.useState)(""),c=Object(o.a)(t,2),n=c[0],s=c[1],r=Object(a.useState)([]),i=Object(o.a)(r,2),l=i[0],u=i[1],j=Object(a.useState)(localStorage.getItem("userId")),b=Object(o.a)(j,1)[0],p=Object(a.useState)([]),m=Object(o.a)(p,2),O=m[0],g=m[1],v=function(){var t=Object(f.a)(x.a.mark((function t(c){return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(""===c){t.next=3;break}return t.next=3,k.a.get("".concat(e,"/user/search/").concat(c),{headers:{"x-access-token":localStorage.getItem("token")}}).then((function(e){u(e.data.users)}));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),N=function(){s("")},w=function(){var t=Object(f.a)(x.a.mark((function t(c,a){var n;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k.a.get("".concat(e,"/user/").concat(b));case 2:n=t.sent,g(n.data.other);case 4:case"end":return t.stop()}}),t)})));return function(e,c){return t.apply(this,arguments)}}();return Object(a.useEffect)((function(){w(),v(n)}),[n]),Object(d.jsxs)("div",{className:"topbarContainer",children:[Object(d.jsx)("div",{className:"topbarLeft",children:Object(d.jsx)(h.b,{to:"/",style:{textDecoration:"none"},children:Object(d.jsx)("span",{className:"logo",children:"ConnectGlobe"})})}),Object(d.jsx)("div",{className:"topbarCenter",children:Object(d.jsxs)("div",{className:"searchBar",children:[Object(d.jsx)(T.a,{className:"searchIcon"}),Object(d.jsx)("input",{placeholder:"Search",className:"searchInput",type:"text",onChange:function(e){s(e.target.value)},value:n}),n&&Object(d.jsx)("div",{className:"searchUsers",children:l.map((function(e){return Object(d.jsxs)(h.b,{to:"/profile/".concat(e.userName),style:{textDecoration:"none"},className:"searchUser",onClick:N,children:[Object(d.jsx)("img",{src:e.profilePicture||"https://i.ibb.co/r0PgzHc/noAvatar.png",alt:"searchUserProfile",className:"searchUserProfile"}),Object(d.jsx)("p",{children:e.userName})]},e._id)}))}),n&&Object(d.jsx)(A.a,{className:"cancelIcon",onClick:function(){s("")}})]})}),Object(d.jsxs)("div",{className:"topbarRight",children:[Object(d.jsx)("div",{className:"topbarIcons",children:Object(d.jsx)("div",{className:"topbarIconItem",children:Object(d.jsx)(h.b,{to:"/",style:{color:"var(--white)"},children:Object(d.jsx)(E.a,{className:"icon"})})})}),Object(d.jsx)(h.b,{to:"/profile/".concat(O.userName),children:Object(d.jsx)("img",{src:O.profilePicture||"https://i.ibb.co/r0PgzHc/noAvatar.png",alt:"userImg",className:"userImg"})}),Object(d.jsx)(h.b,{to:"/login",style:{textDecoration:"none"},onClick:function(){localStorage.removeItem("token"),localStorage.removeItem("userId")},children:Object(d.jsx)("p",{className:"logoutButton",children:"Logout"})})]})]})}c(91),c(92);function R(e){var t=e.loggedinUserId,c="https://demooapi.herokuapp.com",n=Object(a.useState)(""),s=Object(o.a)(n,2),r=s[0],i=s[1],l=Object(a.useState)(""),u=Object(o.a)(l,2),j=u[0],b=u[1],p=Object(a.useState)(!1),h=Object(o.a)(p,2),m=h[0],O=h[1],g=Object(a.useState)([]),v=Object(o.a)(g,2),N=v[0],w=v[1],S=function(){var e=Object(f.a)(x.a.mark((function e(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!r&&!j){e.next=9;break}return e.prev=1,e.next=4,k()({method:"POST",url:"".concat(c,"/posts/").concat(t),data:{userId:t,content:r,image:j},headers:{"x-access-token":localStorage.getItem("token")}}).then((function(e){window.location.reload(!1)}));case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1),console.log(e.t0);case 9:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(){return e.apply(this,arguments)}}(),I=function(){var e=Object(f.a)(x.a.mark((function e(a,n){var s;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.get("".concat(c,"/user/").concat(t));case 2:s=e.sent,w(s.data.other);case 4:case"end":return e.stop()}}),e)})));return function(t,c){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){I()}),[]),Object(d.jsx)("div",{className:"share",children:Object(d.jsxs)("div",{className:"shareWrapper",children:[Object(d.jsxs)("div",{className:"shareTop",children:[Object(d.jsx)("img",{className:"shareProfileImg",src:N.profilePicture||"https://i.ibb.co/r0PgzHc/noAvatar.png",alt:"userProfileImg"}),Object(d.jsx)("input",{type:"text",placeholder:"What's happening?",className:"shareInput",onChange:function(e){i(e.target.value)},value:r})]}),Object(d.jsx)("hr",{className:"shareHr"}),m&&Object(d.jsx)("img",{id:"output",alt:"",className:"shareImgPreview"}),Object(d.jsxs)("div",{className:"shareBottom",children:[Object(d.jsx)("div",{className:"shareOption",children:Object(d.jsx)("input",{type:"file",className:"sharePictureInput",id:"file",onChange:function(e){var t=new FileReader;t.onload=function(){var e=t.result,c="base64,",a=e,n=a.slice(a.indexOf(c)+c.length);b(n),O(!0),document.getElementById("output").src=e},t.readAsDataURL(e.target.files[0])},accept:"image/*"})}),Object(d.jsx)("span",{className:"info",children:"Max size 45KB"}),Object(d.jsx)("div",{className:"shareButton",children:Object(d.jsx)("button",{type:"button",onClick:S,children:"Post"})})]})]})})}c(93);var H=c(47),z=c.n(H),W=c(48),G=c.n(W),J=c(49),M=c.n(J),V=c(46);function K(e){var t=e.post,c="https://demooapi.herokuapp.com",n=Object(a.useState)(t.likes.length),s=Object(o.a)(n,2),r=s[0],i=s[1],l=Object(a.useState)(t.comments.length),u=Object(o.a)(l,1)[0],j=Object(a.useState)(localStorage.getItem("userId")),b=Object(o.a)(j,1)[0],p=Object(a.useState)(!1),m=Object(o.a)(p,2),O=m[0],g=m[1],v=Object(a.useState)({}),N=Object(o.a)(v,2),w=N[0],S=N[1],I=Object(a.useState)(!1),C=Object(o.a)(I,2),y=C[0],P=C[1],B=Object(a.useState)(!1),D=Object(o.a)(B,2),L=D[0],T=D[1],_=Object(a.useState)(""),E=Object(o.a)(_,2),F=E[0],U=E[1],R=Object(a.useState)(""),H=Object(o.a)(R,2),W=H[0],J=H[1],K=Object(a.useState)(!1),Q=Object(o.a)(K,2),X=Q[0],Y=Q[1],q=Object(a.useState)(!1),Z=Object(o.a)(q,2),$=Z[0],ee=Z[1],te=function(){var e=Object(f.a)(x.a.mark((function e(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==W||!F){e.next=9;break}return e.prev=1,e.next=4,k()({method:"PUT",url:"".concat(c,"/posts/update/").concat(t._id),data:{userId:b,content:F}}).then((function(e){window.location.reload(!1)}));case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1),console.log(e.t0);case 9:if(!X&&!W){e.next=18;break}return e.prev=10,e.next=13,k()({method:"PUT",url:"".concat(c,"/posts/update/").concat(t._id),data:{userId:b,content:F,image:W}}).then((function(e){window.location.reload(!1)}));case 13:e.next=18;break;case 15:e.prev=15,e.t1=e.catch(10),console.log(e.t1);case 18:case"end":return e.stop()}}),e,null,[[1,6],[10,15]])})));return function(){return e.apply(this,arguments)}}(),ce=function(){var e=Object(f.a)(x.a.mark((function e(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k()({method:"DELETE",url:"".concat(c,"/posts/").concat(t._id),data:{userId:b}}).then((function(e){window.location.reload(!1),console.log(e.data)}));case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.log(e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(){return e.apply(this,arguments)}}(),ae=function(){var e=Object(f.a)(x.a.mark((function e(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return O?(g(!1),i(r-1)):(g(!0),i(r+1)),e.prev=1,e.next=4,k()({method:"PUT",url:"".concat(c,"/posts/").concat(t._id,"/like"),data:{userId:b}}).then((function(e){console.log(e.data)}));case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1),console.log(e.t0);case 9:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(){return e.apply(this,arguments)}}(),ne=function(){var e=Object(f.a)(x.a.mark((function e(){var a;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.get("".concat(c,"/user/").concat(t.userId));case 2:a=e.sent,S(a.data.other);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){t.likes.includes(b)&&g(!0),U(null===t||void 0===t?void 0:t.content),ne()}),[t.likes]),Object(d.jsx)("div",{className:"post",children:Object(d.jsxs)("div",{className:"postWrapper",children:[Object(d.jsxs)("div",{className:"postTop",children:[Object(d.jsxs)("div",{className:"postTopLeft",children:[Object(d.jsxs)(h.b,{to:"/profile/".concat(w.userName),style:{textDecoration:"none"},className:"postUserLink",children:[Object(d.jsx)("img",{className:"postProfileImg",src:w.profilePicture||"https://i.ibb.co/r0PgzHc/noAvatar.png",alt:"postProfileImg"}),Object(d.jsx)("span",{className:"postUserName",children:w.userName})]}),Object(d.jsx)("span",{className:"postDate",children:Object(V.format)(t.createdAt)})]}),w._id===b&&Object(d.jsxs)("div",{className:"postTopRight",onClick:function(){P(!y)},children:[L?Object(d.jsx)(A.a,{onClick:function(){T(!1),ee(!1),U(null===t||void 0===t?void 0:t.content)}}):Object(d.jsx)(z.a,{className:"horizonIcon"}),y&&Object(d.jsxs)("div",{className:"postOptionBar",children:[Object(d.jsx)("p",{className:"postOptionItem",onClick:function(){T(!0),P(!1)},children:"Edit Post"}),Object(d.jsx)("p",{className:"postOptionItem",onClick:ce,children:"Delete Post"})]})]})]}),Object(d.jsx)("div",{className:"postCenter",children:L?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("input",{type:"text",className:"postContentEdit",value:F,onChange:function(e){U(e.target.value)}}),Object(d.jsxs)("div",{className:"postImgEdit",children:[t.image?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("img",{id:"output",alt:"",className:"postImgPreview",src:t.image}),Object(d.jsxs)("span",{children:["Remove Post Image:",Object(d.jsx)("input",{type:"checkbox",className:"removePost",onClick:function(){Y(!X)}})]})]}):Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("input",{type:"file",className:"editProfileInput",accept:"image/*",onChange:function(e){var t=new FileReader;t.onload=function(){var e=t.result,c="base64,",a=e,n=a.slice(a.indexOf(c)+c.length);J(n),ee(!0),document.getElementById("output").src=e},t.readAsDataURL(e.target.files[0])}})}),$&&Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("img",{id:"output",alt:"",className:"postImgPreview"})})]})]}):Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("p",{className:"postText",children:null===t||void 0===t?void 0:t.content}),Object(d.jsx)("img",{className:"postPostImg",src:null===t||void 0===t?void 0:t.image,alt:""})]})}),Object(d.jsxs)("div",{className:"postBottom",children:[Object(d.jsx)("div",{className:"postBottomLeft",children:L?Object(d.jsx)(d.Fragment,{}):Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(G.a,{className:"postBottomIcon  ".concat(O?"liked":null),onClick:ae}),Object(d.jsxs)("span",{className:"postLikeCounter ",children:[r," likes"]})]})}),Object(d.jsx)("div",{className:"postBottomRight",children:L?Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("button",{className:"postSaveBtn",onClick:te,children:"Save"})}):Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(M.a,{className:"postBottomIcon"}),Object(d.jsxs)("span",{className:"postCommentCounter",children:[u," comments"]})]})})]})]})})}function Q(e){var t=e.userName,c="https://demooapi.herokuapp.com",n=Object(a.useState)([]),s=Object(o.a)(n,2),r=s[0],i=s[1],l=Object(a.useState)(localStorage.getItem("userId")),u=Object(o.a)(l,1)[0],j=Object(a.useState)([]),b=Object(o.a)(j,2),p=b[0],h=b[1],m=function(){var e=Object(f.a)(x.a.mark((function e(t,a){var n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.get("".concat(c,"/user/").concat(u));case 2:n=e.sent,h(n.data.other);case 4:case"end":return e.stop()}}),e)})));return function(t,c){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){m(),function(){var e=Object(f.a)(x.a.mark((function e(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=5;break}return e.next=3,k.a.get("".concat(c,"/posts/userpost/").concat(t),{headers:{"x-access-token":localStorage.getItem("token")}}).then((function(e){i(e.data)}));case 3:e.next=7;break;case 5:return e.next=7,k.a.get("".concat(c,"/posts/feed/").concat(u),{headers:{"x-access-token":localStorage.getItem("token")}}).then((function(e){i(e.data)}));case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[u,t]),Object(d.jsx)("div",{className:"feed",children:Object(d.jsxs)("div",{className:"feedWrapper",children:[(!t||t===p.userName)&&Object(d.jsx)(R,{loggedinUserId:u}),r.map((function(e){return Object(d.jsx)(K,{post:e,user:p},e._id)}))]})})}c(99),c(100);function X(e){var t=e.user,c=Object(a.useState)(localStorage.getItem("userId")),n=Object(o.a)(c,1)[0],s=Object(a.useState)(!1),r=Object(o.a)(s,2),i=r[0],l=r[1],u=function(){var e=Object(f.a)(x.a.mark((function e(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l(!i),e.prev=1,e.next=4,k()({method:"PUT",url:"".concat("https://demooapi.herokuapp.com","/user/").concat(t._id,"/follow"),data:{_id:n}}).then((function(e){console.log(e.data)}));case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1),console.log(e.t0);case 9:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(){return e.apply(this,arguments)}}();return Object(d.jsxs)("div",{className:"usershow",children:[Object(d.jsx)(h.b,{to:"/profile/".concat(t.userName),style:{textDecoration:"none"},className:"postUserLink",children:Object(d.jsxs)("div",{className:"userProfile",children:[Object(d.jsx)("img",{className:"userShowImg",src:t.profilePicture||"https://i.ibb.co/r0PgzHc/noAvatar.png",alt:"userShowImg"}),Object(d.jsx)("span",{className:"userShowName",children:t.userName})]})}),Object(d.jsx)("span",{className:"userShowFollow",onClick:u,children:i?"Following":"Follow"})]})}function Y(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)(localStorage.getItem("userId")),r=Object(o.a)(s,1)[0];return Object(a.useEffect)((function(){(function(){var e=Object(f.a)(x.a.mark((function e(t){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.get("".concat("https://demooapi.herokuapp.com","/user/notfollowing/").concat(t),{headers:{"x-access-token":localStorage.getItem("token")}}).then((function(e){n(e.data)}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}})()(r)}),[r]),Object(d.jsx)("div",{className:"rightbar",children:Object(d.jsxs)("div",{className:"rightbarWrapper",children:[Object(d.jsx)("div",{className:"rightbarTop",children:Object(d.jsx)("h3",{children:"Suggestions for you"})}),Object(d.jsx)("div",{className:"rightbarBottom",children:c.map((function(e){return Object(d.jsx)(X,{user:e},e._id)}))})]})})}function q(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(U,{}),Object(d.jsxs)("div",{className:"homeContainer",children:[Object(d.jsx)(Q,{}),Object(d.jsx)(Y,{})]})]})}c(101),c(102);var Z=c(50),$=c.n(Z);function ee(e){var t=e.userName,c=Object(N.g)(),n="https://demooapi.herokuapp.com",s=Object(a.useState)([]),r=Object(o.a)(s,2),i=r[0],l=r[1],u=Object(a.useState)(0),j=Object(o.a)(u,2),b=j[0],p=j[1],h=Object(a.useState)([]),m=Object(o.a)(h,2),O=m[0],g=m[1],v=Object(a.useState)([]),w=Object(o.a)(v,2),S=w[0],I=w[1],C=Object(a.useState)(localStorage.getItem("userId")),y=Object(o.a)(C,1)[0],P=Object(a.useState)([]),B=Object(o.a)(P,2),D=B[0],L=B[1],T=Object(a.useState)(!1),_=Object(o.a)(T,2),E=_[0],F=_[1],U=Object(a.useState)(""),R=Object(o.a)(U,2),H=R[0],z=R[1],W=Object(a.useState)(""),G=Object(o.a)(W,2),J=G[0],M=G[1],V=Object(a.useState)(!1),K=Object(o.a)(V,2),Q=K[0],X=K[1],Y=Object(a.useState)(!1),q=Object(o.a)(Y,2),Z=q[0],ee=q[1],te=Object(a.useState)(!1),ce=Object(o.a)(te,2),ae=ce[0],ne=ce[1],se=function(){var e=Object(f.a)(x.a.mark((function e(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.delete("".concat(n,"/user/delete/").concat(y));case 2:localStorage.removeItem("token"),localStorage.removeItem("userId"),c.push("/welcome");case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),re=function(){var e=Object(f.a)(x.a.mark((function e(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return X(!Q),e.prev=1,e.next=4,k()({method:"PUT",url:"".concat(n,"/user/").concat(i._id,"/follow"),data:{_id:y}}).then((function(e){console.log(e.data)}));case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1),console.log(e.t0);case 9:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(){return e.apply(this,arguments)}}(),oe=function(){var e=Object(f.a)(x.a.mark((function e(t,c){var a;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.get("".concat(n,"/user/").concat(y));case 2:a=e.sent,L(a.data.other);case 4:case"end":return e.stop()}}),e)})));return function(t,c){return e.apply(this,arguments)}}(),ie=function(){var e=Object(f.a)(x.a.mark((function e(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==J||!H){e.next=9;break}return e.prev=1,e.next=4,k()({method:"PUT",url:"".concat(n,"/user/update/").concat(y),data:{_id:y,bio:H},headers:{"x-access-token":localStorage.getItem("token")}}).then((function(e){window.location.reload(!1)}));case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1),console.log(e.t0);case 9:if(!J&&!ae){e.next=18;break}return e.prev=10,e.next=13,k()({method:"PUT",url:"".concat(n,"/user/update/").concat(y),data:{_id:y,bio:H,profilePicture:J},headers:{"x-access-token":localStorage.getItem("token")}}).then((function(e){window.location.reload(!1)}));case 13:e.next=18;break;case 15:e.prev=15,e.t1=e.catch(10),console.log(e.t1);case 18:case"end":return e.stop()}}),e,null,[[1,6],[10,15]])})));return function(){return e.apply(this,arguments)}}(),le=function(){var e=Object(f.a)(x.a.mark((function e(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("running"),e.next=3,k.a.get("".concat(n,"/posts/user/userpost/").concat(i._id)).then((function(e){p(e.data.length)}));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){var e=function(){var e=Object(f.a)(x.a.mark((function e(){var c;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return oe(),console.log(t),e.next=4,k.a.get("".concat(n,"/user/profile/?userName=").concat(t));case 4:c=e.sent,l(c.data.other),g(c.data.other.following),I(c.data.other.followers),X(c.data.other.followers.includes(y));case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();z(i.bio),e(),le()}),[i.bio,t,y]),Object(d.jsxs)("div",{className:"userinfo",children:[Object(d.jsxs)("div",{className:"userinfoWrapper",children:[Object(d.jsx)("img",{className:"userinfoImg",src:i.profilePicture||"https://i.ibb.co/r0PgzHc/noAvatar.png",alt:"userinfoImg"}),Object(d.jsxs)("div",{className:"userinfoDetails",children:[Object(d.jsx)("p",{className:"userinfoName",children:i.userName}),Object(d.jsxs)("div",{className:"userinfoData",children:[Object(d.jsxs)("p",{children:[Object(d.jsx)("span",{className:"userinfoDataNum",children:b})," posts"]}),Object(d.jsxs)("p",{children:[Object(d.jsx)("span",{className:"userinfoDataNum",children:O.length})," following"]}),Object(d.jsxs)("p",{children:[Object(d.jsx)("span",{className:"userinfoDataNum",children:S.length})," followers"]})]}),Object(d.jsx)("p",{className:"userinfoBio",children:i.bio}),t===D.userName?Object(d.jsxs)("button",{className:"profileSettingsButton",onClick:function(){F(!0)},children:[Object(d.jsx)($.a,{})," Settings"]}):Object(d.jsx)("button",{className:Q?"followingButton":"followButton",onClick:re,children:Q?"following":"follow"})]})]}),E&&Object(d.jsxs)("div",{className:"profileEditForm",children:[Object(d.jsxs)("button",{className:"profileSettingsButton",onClick:function(){ee(!1),F(!1)},children:[Object(d.jsx)(A.a,{className:"cancelIcon"}),"Cancel"]}),Object(d.jsx)("label",{htmlFor:"bio",children:"Bio: "}),Object(d.jsx)("textarea",{name:"bio",id:"bio",cols:"70",rows:"3",value:H,onChange:function(e){z(e.target.value)},className:"bioTextArea"}),Object(d.jsx)("br",{}),Object(d.jsx)("label",{htmlFor:"profilePicture",children:"Change Profile Picture: "}),Object(d.jsx)("input",{name:"profilePicture",type:"file",accept:"image/*",onChange:function(e){var t=new FileReader;t.onload=function(){var e="base64,",c=t.result,a=c.slice(c.indexOf(e)+e.length);M(a)},t.readAsDataURL(e.target.files[0])},className:"editProfileInput"}),Object(d.jsx)("p",{className:"info",children:"Profile Picture size has to be below 45KB"}),Object(d.jsx)("p",{children:"Delete Profile Picture:"}),Object(d.jsx)("input",{type:"checkbox",onClick:function(){ne(!ae)}}),Object(d.jsx)("button",{className:"profileSettingsButton",onClick:ie,children:" Save"}),Object(d.jsx)("button",{className:"profileDeleteButton",onClick:function(){ee(!0)},children:" Delete account"}),Z?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("p",{children:"are you sure?"}),Object(d.jsx)("button",{className:"profileDeleteButton",onClick:se,children:"yes"}),Object(d.jsx)("button",{className:"profileNoDeleteButton",onClick:function(){ee(!1)},children:"no"})]}):null]})]})}function te(){var e=Object(N.h)().userName;return Object(d.jsxs)("div",{className:"profileContainer",children:[Object(d.jsx)(U,{}),Object(d.jsx)(ee,{userName:e}),Object(d.jsx)("div",{className:"profilePost",children:Object(d.jsx)(Q,{userName:e})})]})}var ce=c(52),ae=c(51),ne=["component"],se=function(e){var t=e.component,c=Object(ce.a)(e,ne),n=Object(a.useState)(null),s=Object(o.a)(n,2),r=s[0],i=s[1];return Object(a.useEffect)((function(){var e=localStorage.getItem("token");if(e){var t=Object(ae.a)(e).exp,c=new Date;console.log(t),console.log(c),t<c.getTime()/1e3?i(!1):i(!0)}else i(!1)}),[r]),null===r?Object(d.jsx)(d.Fragment,{}):Object(d.jsx)(N.b,Object(v.a)(Object(v.a)({},c),{},{render:function(e){return r?Object(d.jsx)(t,Object(v.a)({},e)):Object(d.jsx)(N.a,{to:"/welcome"})}}))};var re=function(){return Object(d.jsx)(h.a,{basename:"/cg",children:Object(d.jsxs)(N.d,{children:[Object(d.jsx)(N.b,{exact:!0,path:"/welcome",component:m}),Object(d.jsx)(N.b,{path:"/login",component:P}),Object(d.jsx)(N.b,{path:"/register",component:D}),Object(d.jsx)(se,{exact:!0,path:"/",component:q}),Object(d.jsx)(se,{path:"/profile/:userName",component:te})]})})};r.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(re,{})}),document.getElementById("root"))},58:function(e,t,c){},59:function(e,t,c){},67:function(e,t,c){},88:function(e,t,c){},89:function(e,t,c){},90:function(e,t,c){},91:function(e,t,c){},92:function(e,t,c){},93:function(e,t,c){},99:function(e,t,c){}},[[104,1,2]]]);
//# sourceMappingURL=main.fb79a7a0.chunk.js.map