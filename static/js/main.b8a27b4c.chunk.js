(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,function(e,t,a){e.exports=a(25)},,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(5),r=a.n(c),l=(a(14),a(2)),u=a(1);var s=o.a.createContext();function m(e){var t=e.children,a=function(e,t){var a=o.a.useState(t),n=Object(u.a)(a,2),c=n[0],r=n[1],l=o.a.useState(!0),s=Object(u.a)(l,2),m=s[0],i=s[1],d=o.a.useState(!1),f=Object(u.a)(d,2),E=f[0],p=f[1];return o.a.useEffect(function(){setTimeout(function(){try{var a=JSON.parse(localStorage.getItem(e))||t;r(a),i(!1)}catch(E){p(!0),i(!1)}},2e3)},[]),{loading:m,error:E,item:c,saveItem:function(t){localStorage.setItem(e,JSON.stringify(t)),r(t)}}}("TODONEST_V1.0",[]),n=a.loading,c=a.error,r=a.item,m=a.saveItem,i=o.a.useState(""),d=Object(u.a)(i,2),f=d[0],E=d[1],p=o.a.useState(!1),v=Object(u.a)(p,2),h=v[0],g=v[1],N=r.filter(function(e){return!!e.completed}).length,x=r.length,T=r.filter(function(e){var t=e.text.toLocaleLowerCase(),a=f.toLocaleLowerCase();return t.includes(a)});return o.a.createElement(s.Provider,{value:{loading:n,error:c,totalTodos:x,completedTodos:N,searchValue:f,setSearchValue:E,searchedTodos:T,addTodo:function(e){var t=Object(l.a)(r);t.push({completed:!1,text:e}),m(t)},completeTodo:function(e){var t=r.findIndex(function(t){return t.text===e}),a=Object(l.a)(r);a[t].completed=!0,m(a)},deleteTodo:function(e){var t=r.findIndex(function(t){return t.text===e}),a=Object(l.a)(r);a.splice(t,1),m(a)},openModal:h,setOpenModal:g}},t)}a(15);function i(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"shape-divider"},o.a.createElement("svg",{"data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1200 100",preserveAspectRatio:"none"},o.a.createElement("rect",{x:"1200",height:"3.6"}),o.a.createElement("rect",{height:"3.6"}),o.a.createElement("path",{d:"M0,0V3.6H580.08c11,0,19.92,5.09,19.92,13.2,0-8.14,8.88-13.2,19.92-13.2H1200V0Z",class:"shape-fill"}))),o.a.createElement("h1",{className:"PageTitle"},"To-Do Nest"))}a(16);function d(){var e=o.a.useContext(s),t=e.totalTodos,a=e.completedTodos;return e.loading?o.a.createElement("h2",{className:"todo-counter"},"Loading your tasks..."):0===t?o.a.createElement("h2",{className:"todo-counter"}):a===t?o.a.createElement("h2",{className:"todo-counter"},"You have completed all your tasks! \ud83c\udf89"):o.a.createElement("h2",{className:"todo-counter"},"You have completed ",o.a.createElement("span",null,a," "),"of ",o.a.createElement("span",null,t)," tasks!")}a(17);function f(){var e=o.a.useContext(s),t=e.searchValue,a=e.setSearchValue;return o.a.createElement("div",{className:"todo-search-container"},o.a.createElement("div",{className:"search-input"},o.a.createElement("input",{type:"text",placeholder:"Search your todos...",className:"todo-search",value:t,onChange:function(e){a(e.target.value)}}),o.a.createElement("div",{className:"search-icon"},o.a.createElement("i",{className:"fas fa-search"}))))}a(18);function E(e){var t=e.children,a=o.a.useContext(s);a.totalTodos,a.completedTodos,a.loading;return o.a.createElement("ul",{className:"todo-list"},o.a.createElement(d,null),t)}a(19);function p(e){var t=e.text,a=e.completed,n=e.onComplete,c=e.onDelete;return o.a.createElement("li",{className:"todo-item"},o.a.createElement("i",{className:"icon icon-check fas fa-check ".concat(a&&"icon-check--active"),onClick:n}),o.a.createElement("p",{className:"task ".concat(a&&"task--completed")},t),o.a.createElement("i",{className:"icon icon-delete fa fa-trash","aria-hidden":"true",onClick:c}))}a(20);function v(){return o.a.createElement("div",{className:"todo-item-skeleton"},o.a.createElement("div",{className:"skeleton-icon"}),o.a.createElement("div",{className:"skeleton-text"},"\u200e "),o.a.createElement("div",{className:"skeleton-icon"}))}function h(){return o.a.createElement("div",{className:"TodosError"},o.a.createElement("p",{className:"TodosError__p"},"\u274c Error"))}a(21);function g(){return o.a.createElement("div",{className:"TodoEmpty"},o.a.createElement("p",{className:"TodoEmpty__p"},"There are no todos. Create one! \ud83d\ude03"))}a(22);function N(){var e=o.a.useContext(s).setOpenModal;return o.a.createElement("button",{className:"CreateTodoButton fas fa-plus",onClick:function(){return e(!0)}})}a(23);function x(){var e=o.a.useContext(s),t=e.addTodo,a=e.setOpenModal,n=o.a.useState(""),c=Object(u.a)(n,2),r=c[0],l=c[1];return o.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t(r),a(!1)}},o.a.createElement("label",{htmlFor:"todo"},"New To-do"),o.a.createElement("textarea",{type:"text",id:"todo",name:"todo",placeholder:"Enter your new to-do here",value:r,onChange:function(e){l(e.target.value)},required:!0}),o.a.createElement("div",{className:"form-buttonContainer"},o.a.createElement("button",{type:"button",className:"form-button form-button--cancel",onClick:function(){return a(function(e){return!e})}},"Cancel"),o.a.createElement("button",{type:"submit",className:"form-button form-button--add"},"Add")))}var T=a(3),b=a.n(T);a(24);function C(e){var t=e.children,a=Object(n.useContext)(s).setOpenModal,c=Object(n.useState)(!1),r=Object(u.a)(c,2),l=r[0],m=r[1];Object(n.useEffect)(function(){var e=function(){m(""!==window.getSelection().toString())};return document.addEventListener("selectionchange",e),function(){document.removeEventListener("selectionchange",e)}},[]);return b.a.createPortal(o.a.createElement("div",{className:"ModalBackground",onClick:function(e){l||e.target!==e.currentTarget||a(!1)}},o.a.createElement("div",{className:"ModalContainer"},t)),document.getElementById("modal"))}function k(){var e=o.a.useContext(s),t=e.loading,a=e.error,n=e.searchedTodos,c=e.completeTodo,r=e.deleteTodo,l=e.openModal;return o.a.createElement(o.a.Fragment,null,o.a.createElement(i,null),o.a.createElement(f,null),o.a.createElement(E,null,t?o.a.createElement("div",{className:"TodoLoading"},o.a.createElement(v,null)," ",o.a.createElement(v,null)," ",o.a.createElement(v,null)):null,a?o.a.createElement(h,null):null,t||n.length?null:o.a.createElement(g,null),n.map(function(e){return o.a.createElement(p,{key:e.text,text:e.text,completed:e.completed,onComplete:function(){return c(e.text)},onDelete:function(){return r(e.text)}})})),o.a.createElement(N,null),l&&o.a.createElement(C,null,o.a.createElement(x,null)))}var O=function(){return o.a.createElement(m,null,o.a.createElement(k,null))};r.a.createRoot(document.getElementById("root")).render(o.a.createElement(O,null))}],[[6,1,2]]]);
//# sourceMappingURL=main.b8a27b4c.chunk.js.map