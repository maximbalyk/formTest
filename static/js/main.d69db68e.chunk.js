(this["webpackJsonpreact-typescript-starter-pack"]=this["webpackJsonpreact-typescript-starter-pack"]||[]).push([[0],{10:function(e,t,n){},13:function(e,t,n){"use strict";n.r(t);var s=n(1),a=n.n(s),r=n(4),l=n.n(r),c=(n(9),n(2)),o=(n(10),n(11),n(0)),i=function(e){return Object(o.jsx)("span",{className:"errorMessage",children:e})},m=function(){var e,t=Object(s.useState)(""),n=Object(c.a)(t,2),a=n[0],r=n[1],l=Object(s.useState)(""),m=Object(c.a)(l,2),u=m[0],j=m[1],b=Object(s.useState)(""),d=Object(c.a)(b,2),h=d[0],p=d[1],f=Object(s.useState)(""),x=Object(c.a)(f,2),O=x[0],g=x[1],v=Object(s.useState)(!0),w=Object(c.a)(v,2),N=w[0],_=w[1],y=/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i.test(a),C=u.length>=6,P=(e=u)===h&&0!==e.length,S="login : ".concat(O," \nemail : ").concat(a," \npassword : ").concat(u);return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)("header",{className:"header",children:Object(o.jsx)("h1",{className:"header__title",children:"Sign Up with email"})}),Object(o.jsxs)("form",{method:"post",className:"form",onSubmit:function(e){e.preventDefault(),y&&C&&P&&(alert(S),g(""),r(""),j(""),p(""))},children:[Object(o.jsx)("div",{className:"form__input",children:Object(o.jsxs)("label",{htmlFor:"exampleInputEmail1",className:"form-label",children:["Login",Object(o.jsx)("input",{value:O,type:"text",className:"form-control",placeholder:"Create login",maxLength:24,onChange:function(e){return g(e.target.value)},required:!0})]})}),Object(o.jsx)("div",{className:"form__input",children:Object(o.jsxs)("label",{htmlFor:"exampleInputEmail1",className:"form-label",children:["E-mail",Object(o.jsx)("input",{value:a,type:"email",className:"form-control",id:"exampleInputEmail1",placeholder:"johnsmith@mail.com",maxLength:25,onChange:function(e){return r(e.target.value)},required:!0}),y||0===a.length?null:i("Email not valid")]})}),Object(o.jsx)("div",{className:"form__input",children:Object(o.jsxs)("label",{htmlFor:"inputPassword",className:"form-label",children:["Create Password",Object(o.jsx)("input",{value:u,type:N?"password":"text",name:"password",className:"form-control",id:"inputPassword",maxLength:24,onChange:function(e){return j(e.target.value)},required:!0}),Object(o.jsx)("button",{type:"button",className:"form__button--showPassword",onClick:function(){return _(!N)},children:Object(o.jsx)("img",{src:"./eye.svg",alt:"showPassword"})}),C||0===u.length?null:i("Password not valid. Min length 6 symbol")]})}),Object(o.jsx)("div",{className:"form__input",children:Object(o.jsxs)("label",{htmlFor:"inputConfirm",className:"form-label",children:["Confirm Password",Object(o.jsx)("input",{value:h,type:N?"password":"text",className:"form-control",id:"inputConfirm",maxLength:24,onChange:function(e){return p(e.target.value)},required:!0}),Object(o.jsx)("button",{type:"button",className:"form__button--showPassword",onClick:function(){return _(!N)},children:Object(o.jsx)("img",{src:"./eye.svg",alt:"showPassword"})}),!P&&0!==u.length||u.length!==h.length?i("Confirm password not valid"):null]})}),Object(o.jsx)("button",{type:"submit",className:y&&C&&P?"form__button--singUp":"form__button--singUp form__button--singUp--nonActive",children:"Submit"})]})]})};l.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(m,{})}),document.getElementById("root"))},9:function(e,t,n){}},[[13,1,2]]]);
//# sourceMappingURL=main.d69db68e.chunk.js.map