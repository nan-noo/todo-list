(this["webpackJsonptodo-list"]=this["webpackJsonptodo-list"]||[]).push([[0],{21:function(n,e,t){},25:function(n,e,t){},26:function(n,e,t){"use strict";t.r(e);var r=t(1),o=t.n(r),c=t(12),i=t.n(c),a=(t(21),t(16)),d=t(2);var s=function(n){var e=n.children;return Object(d.jsx)("div",{className:"Wrapper",children:e})},b=t(5),u=t(10),j=[{id:1,text:"\uc544\uce68\uba39\uae30",done:!0},{id:2,text:"\uacf5\ubd80\ud558\uae30",done:!1},{id:3,text:"\uac15\uc544\uc9c0\uc0b0\ucc45\ud558\uae30",done:!0}];function l(n,e){switch(e.type){case"CREATE":return n.concat(e.todo);case"TOGGLE":return n.map((function(n){return n.id===e.id?Object(u.a)(Object(u.a)({},n),{},{done:!n.done}):n}));case"REMOVE":return n.filter((function(n){return n.id!==e.id}));default:throw new Error("Unhandled action type: ".concat(e.type))}}var x=Object(r.createContext)();function f(){return Object(r.useContext)(x)||new Error("Cannot find TodoProvider")}var O=Object(r.createContext)();function p(){return Object(r.useContext)(O)||new Error("Cannot find TodoProvider")}var h=Object(r.createContext)();function v(n){var e=n.children,t=Object(r.useReducer)(l,j),o=Object(b.a)(t,2),c=o[0],i=o[1],a=Object(r.useRef)(4);return Object(d.jsx)(x.Provider,{value:c,children:Object(d.jsx)(O.Provider,{value:i,children:Object(d.jsx)(h.Provider,{value:a,children:e})})})}var g,m,y,C,w,E,k=function(){var n=new Date,e=n.toLocaleDateString("ko-KR",{year:"numeric",month:"long",day:"numeric"}),t=n.toLocaleDateString("ko-KR",{weekday:"long"}),r=f().filter((function(n){return!n.done}));return Object(d.jsxs)("div",{className:"TodoHeader",children:[Object(d.jsx)("h1",{children:e}),Object(d.jsx)("p",{className:"day",children:t}),Object(d.jsx)("br",{}),Object(d.jsxs)("p",{className:"description",children:["\ud560 \uc77c ",r.length,"\uac1c \ub0a8\uc74c"]})]})},T=t(3),P=t(4),R=t(6),L=P.b.div(g||(g=Object(T.a)(["\n    width: 24px;\n    height: 24px;\n\n    border-radius: 20px;\n    border: 1px solid #8d8d8d;\n    font-size: 20px;\n\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    cursor: pointer;\n    ","\n"])),(function(n){return n.done&&Object(P.a)(m||(m=Object(T.a)(["\n            border: 1px solid #00e676;\n            color: #00e676;\n        "])))})),S=P.b.div(y||(y=Object(T.a)(["\n    flex: 1;\n    margin-left: 15px;\n    ","\n"])),(function(n){return n.done&&Object(P.a)(C||(C=Object(T.a)(["\n            color: #e0e0e0;\n        "])))})),F=P.b.div(w||(w=Object(T.a)(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    color: #e0e0e0;\n    cursor: pointer;\n    &:hover{\n        color: #f93125;\n    }\n    display: none;\n"]))),N=P.b.div(E||(E=Object(T.a)(["\n    display: flex;\n\n    margin: 5px 0;\n    padding: 5px 0;\n\n    font-size: 20px;\n    &:hover{\n        ","{\n            display: initial;\n        }\n    }\n"])),F);function z(n){var e=n.id,t=n.text,r=n.done,o=p();return Object(d.jsxs)(N,{children:[Object(d.jsx)(L,{done:r,onClick:function(){return o({type:"TOGGLE",id:e})},children:r&&Object(d.jsx)(R.c,{})}),Object(d.jsx)(S,{done:r,children:t}),Object(d.jsx)(F,{onClick:function(){return o({type:"REMOVE",id:e})},children:Object(d.jsx)(R.b,{})})]})}var D=o.a.memo(z);var G,A,M=function(){var n=f();return Object(d.jsx)("div",{className:"TodoList",children:n.map((function(n){return Object(d.jsx)(D,{id:n.id,text:n.text,done:n.done},n.id)}))})},B=P.b.form(G||(G=Object(T.a)(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n    height: 150px;\n\n    position: absolute;\n    bottom: 0;\n    border-top: 1px solid #e0e0e0;\n    border-bottom-left-radius: 20px;\n    border-bottom-right-radius: 20px;\n\n    background: #f1f7e4;\n"]))),I=P.b.input(A||(A=Object(T.a)(["\n    width: 80%;\n    padding: 2px 10px;\n    border: none;\n    border-bottom: 1px solid #e0e0e0;\n    outline: none;\n    font-size: 16px;\n"])));function J(){var n=Object(r.useContext)(h)||new Error("Cannot find TodoProvider"),e=p(),t=Object(r.useState)(""),o=Object(b.a)(t,2),c=o[0],i=o[1];return Object(d.jsx)(B,{onSubmit:function(t){t.preventDefault(),i(""),e({type:"CREATE",todo:{id:n.current,text:c,done:!1}}),n.current++},children:Object(d.jsx)(I,{autoFocus:!0,placeholder:"\uc77c\uc815\uc744 \uc791\uc131\ud558\uace0, Enter\ub97c \ub20c\ub7ec \uc8fc\uc138\uc694.",value:c,onChange:function(n){return i(n.target.value)}})})}var K,V,H=o.a.memo(J),U=P.b.button(K||(K=Object(T.a)(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    align-self: center;\n\n    position: absolute;\n    bottom: -32px;\n\n    width: 64px;\n    height: 64px;\n\n    box-shadow: 0 0 8px 0 rgba(0,0,0, .2);\n    border-radius: 50%;\n    border: none;\n    outline: none;\n    background: #00e676;\n    font-size: 32px;\n    color: white;\n\n    &:hover{\n        background: #63e6be;\n    }\n    &:active{\n        background: #20c997;\n    }\n    z-index: 5;\n    cursor: pointer;\n    transition: 0.125s all ease-in;\n\n    ","\n"])),(function(n){return n.open&&Object(P.a)(V||(V=Object(T.a)(["\n            background: #ff6b6b;\n            &:hover{\n                background: #ff8787;\n            }\n            &:active{\n                background: #fa5252;\n            }\n            transform: translate(0, 60%) rotate(45deg);\n        "])))}));var W=function(){var n=Object(r.useState)(!1),e=Object(b.a)(n,2),t=e[0],o=e[1];return Object(d.jsxs)(d.Fragment,{children:[t&&Object(d.jsx)(H,{}),Object(d.jsx)(U,{open:t,onClick:function(){return o(!t)},children:Object(d.jsx)(R.a,{})})]})};t(25);var q=function(){return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(v,{children:Object(d.jsxs)(s,{children:[Object(d.jsx)(k,{}),Object(d.jsx)(M,{}),Object(d.jsx)(W,{})]})}),Object(d.jsxs)("footer",{children:["nannoo",Object(d.jsx)(a.a,{})]})]})},Q=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,27)).then((function(e){var t=e.getCLS,r=e.getFID,o=e.getFCP,c=e.getLCP,i=e.getTTFB;t(n),r(n),o(n),c(n),i(n)}))};i.a.render(Object(d.jsx)(o.a.StrictMode,{children:Object(d.jsx)(q,{})}),document.getElementById("root")),Q()}},[[26,1,2]]]);
//# sourceMappingURL=main.be2f6464.chunk.js.map