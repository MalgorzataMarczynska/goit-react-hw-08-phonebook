"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[607],{5607:function(e,t,n){n.r(t),n.d(t,{default:function(){return T}});var r=n(2791),a=n(9434),o=n(8593),i="Filter_filter__z+x9X",c="Filter_input__R4e-B",u="Filter_label__IWv91",s=n(4808),l=n(5903),f=(0,l.I)({d:"M23.384,21.619,16.855,15.09a9.284,9.284,0,1,0-1.768,1.768l6.529,6.529a1.266,1.266,0,0,0,1.768,0A1.251,1.251,0,0,0,23.384,21.619ZM2.75,9.5a6.75,6.75,0,1,1,6.75,6.75A6.758,6.758,0,0,1,2.75,9.5Z",displayName:"SearchIcon"}),d=n(184),p=function(){var e=(0,a.I0)();return(0,d.jsxs)("div",{className:i,children:[(0,d.jsxs)("label",{className:u,children:[(0,d.jsx)(f,{boxSize:4,mr:2}),"Find contacts by name"]}),(0,d.jsx)("input",{className:c,type:"text",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",onChange:function(t){return e((0,s.T)(t.target.value))}})]})},m="ContactList_list__csErn",h=function(e){var t=e.children;return(0,d.jsx)("ul",{className:m,children:t})},v="ContactItem_listItem__NSSYk",x="ContactItem_button__IRFBz",y="NOT_FOUND";var C=function(e,t){return e===t};function _(e,t){var n="object"===typeof t?t:{equalityCheck:t},r=n.equalityCheck,a=void 0===r?C:r,o=n.maxSize,i=void 0===o?1:o,c=n.resultEqualityCheck,u=function(e){return function(t,n){if(null===t||null===n||t.length!==n.length)return!1;for(var r=t.length,a=0;a<r;a++)if(!e(t[a],n[a]))return!1;return!0}}(a),s=1===i?function(e){var t;return{get:function(n){return t&&e(t.key,n)?t.value:y},put:function(e,n){t={key:e,value:n}},getEntries:function(){return t?[t]:[]},clear:function(){t=void 0}}}(u):function(e,t){var n=[];function r(e){var r=n.findIndex((function(n){return t(e,n.key)}));if(r>-1){var a=n[r];return r>0&&(n.splice(r,1),n.unshift(a)),a.value}return y}return{get:r,put:function(t,a){r(t)===y&&(n.unshift({key:t,value:a}),n.length>e&&n.pop())},getEntries:function(){return n},clear:function(){n=[]}}}(i,u);function l(){var t=s.get(arguments);if(t===y){if(t=e.apply(null,arguments),c){var n=s.getEntries(),r=n.find((function(e){return c(e.value,t)}));r&&(t=r.value)}s.put(arguments,t)}return t}return l.clearCache=function(){return s.clear()},l}function b(e){var t=Array.isArray(e[0])?e[0]:e;if(!t.every((function(e){return"function"===typeof e}))){var n=t.map((function(e){return"function"===typeof e?"function "+(e.name||"unnamed")+"()":typeof e})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+n+"]")}return t}function j(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=function(){for(var t=arguments.length,r=new Array(t),a=0;a<t;a++)r[a]=arguments[a];var o,i=0,c={memoizeOptions:void 0},u=r.pop();if("object"===typeof u&&(c=u,u=r.pop()),"function"!==typeof u)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof u+"]");var s=c,l=s.memoizeOptions,f=void 0===l?n:l,d=Array.isArray(f)?f:[f],p=b(r),m=e.apply(void 0,[function(){return i++,u.apply(null,arguments)}].concat(d)),h=e((function(){for(var e=[],t=p.length,n=0;n<t;n++)e.push(p[n].apply(null,arguments));return o=m.apply(null,e)}));return Object.assign(h,{resultFunc:u,memoizedResultFunc:m,dependencies:p,lastResult:function(){return o},recomputations:function(){return i},resetRecomputations:function(){return i=0}}),h};return a}var g=j(_),N=function(e){return e.contacts.contacts},z=function(e){return e.filters},A=function(e){return e.contacts.isLoading},I=function(e){return e.contacts.error},k=g([N,z],(function(e,t){return e.filter((function(e){return e.name.toString().toLowerCase().includes(t.toString().toLowerCase())}))})),w=g([N,z,k],(function(e,t,n){return null===t?e:n})),F=n(3634),S=(0,l.I)({displayName:"DeleteIcon",path:(0,d.jsx)("g",{fill:"currentColor",children:(0,d.jsx)("path",{d:"M19.452 7.5H4.547a.5.5 0 00-.5.545l1.287 14.136A2 2 0 007.326 24h9.347a2 2 0 001.992-1.819L19.95 8.045a.5.5 0 00-.129-.382.5.5 0 00-.369-.163zm-9.2 13a.75.75 0 01-1.5 0v-9a.75.75 0 011.5 0zm5 0a.75.75 0 01-1.5 0v-9a.75.75 0 011.5 0zM22 4h-4.75a.25.25 0 01-.25-.25V2.5A2.5 2.5 0 0014.5 0h-5A2.5 2.5 0 007 2.5v1.25a.25.25 0 01-.25.25H2a1 1 0 000 2h20a1 1 0 000-2zM9 3.75V2.5a.5.5 0 01.5-.5h5a.5.5 0 01.5.5v1.25a.25.25 0 01-.25.25h-5.5A.25.25 0 019 3.75z"})})}),M=function(){var e=(0,a.I0)(),t=(0,a.v9)(w);return(0,d.jsx)(d.Fragment,{children:t.map((function(t){return(0,d.jsxs)("li",{className:v,children:[t.name,": ",t.number,(0,d.jsxs)("button",{type:"button",className:x,onClick:function(){return e((0,F.zY)(t.id))},children:[(0,d.jsx)(S,{boxSize:3,mr:1,verticalAlign:!0}),"Delete"]})]},t.id)}))})},L="ContactForm_form__dhl+T",Z="ContactForm_label__-cVXI",E="ContactForm_input__Bl93P",q="ContactForm_button__eSwX9",B=(0,l.I)({d:"M2.20731,0.0127209 C2.1105,-0.0066419 1.99432,-0.00664663 1.91687,0.032079 C0.871279,0.438698 0.212942,1.92964 0.0580392,2.95587 C-0.426031,6.28627 2.20731,9.17133 4.62766,11.0689 C6.77694,12.7534 10.9012,15.5223 13.3409,12.8503 C13.6507,12.5211 14.0186,12.037 13.9993,11.553 C13.9412,10.7397 13.186,10.1588 12.6051,9.71349 C12.1598,9.38432 11.2304,8.47427 10.6495,8.49363 C10.1267,8.51299 9.79754,9.05515 9.46837,9.38432 L8.88748,9.96521 C8.79067,10.062 7.55145,9.24878 7.41591,9.15197 C6.91248,8.8228 6.4284,8.45491 6.00242,8.04829 C5.57644,7.64167 5.18919,7.19632 4.86002,6.73161 C4.7632,6.59607 3.96933,5.41495 4.04678,5.31813 C4.04678,5.31813 4.72448,4.58234 4.91811,4.2919 C5.32473,3.67229 5.63453,3.18822 5.16982,2.45243 C4.99556,2.18135 4.78257,1.96836 4.55021,1.73601 C4.14359,1.34875 3.73698,0.942131 3.27227,0.612963 C3.02055,0.419335 2.59457,0.0708094 2.20731,0.0127209 Z",displayName:"PhoneIcon",viewBox:"0 0 14 14"}),R=(0,l.I)({displayName:"PlusSquareIcon",path:(0,d.jsxs)("g",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeWidth:"2",children:[(0,d.jsx)("rect",{height:"18",width:"18",rx:"2",ry:"2",x:"3",y:"3"}),(0,d.jsx)("path",{d:"M12 8v8"}),(0,d.jsx)("path",{d:"M8 12h8"})]})}),O=function(){var e=(0,a.I0)();return(0,d.jsxs)("form",{className:L,onSubmit:function(t){t.preventDefault();var n=t.target,r={name:n.username.value,number:n.number.value};e((0,F.uK)(r)),n.reset()},children:[(0,d.jsx)("label",{className:Z,children:"Name"}),(0,d.jsx)("input",{className:E,type:"text",name:"username",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0}),(0,d.jsxs)("label",{className:Z,children:[(0,d.jsx)(B,{boxSize:4,mr:1})," Number"]}),(0,d.jsx)("input",{className:E,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0}),(0,d.jsxs)("button",{className:q,type:"submit",children:[(0,d.jsx)(R,{boxSize:4,mr:1})," Add contact"]})]})},D="Contacts_container__WzsIr",P="Contacts_title__LxdN4",T=function(){var e=(0,a.I0)(),t=(0,a.v9)(A),n=(0,a.v9)(I);return(0,r.useEffect)((function(){e((0,F.yF)())}),[e]),(0,d.jsxs)("div",{className:D,children:[(0,d.jsxs)("section",{children:[(0,d.jsx)("h2",{className:P,children:"Add contact to your phonebook"}),(0,d.jsx)(O,{}),t&&!n&&(0,d.jsx)(o.Rf,{color:"#3f51b5",width:"50",visible:!0,ariaLabel:"falling-lines-loading"})]}),(0,d.jsxs)("section",{children:[(0,d.jsx)("h2",{className:P,children:"Your contacts"}),(0,d.jsx)(p,{}),(0,d.jsx)(h,{children:(0,d.jsx)(M,{})})]})]})}}}]);
//# sourceMappingURL=607.886253f6.chunk.js.map