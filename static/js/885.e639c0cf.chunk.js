"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[885],{885:function(e,t,n){n.r(t),n.d(t,{default:function(){return q}});var r=n(791),a=n(434),u=n(691),i="Filter_filter__z+x9X",o="Filter_input__R4e-B",c="Filter_label__IWv91",s=n(808),l=n(184),f=function(){var e=(0,a.I0)();return(0,l.jsxs)("div",{className:i,children:[(0,l.jsx)("label",{className:c,children:"Find contacts by name"}),(0,l.jsx)("input",{className:o,type:"text",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",onChange:function(t){return e((0,s.T)(t.target.value))}})]})},p="ContactList_list__csErn",m=function(e){var t=e.children;return(0,l.jsx)("ul",{className:p,children:t})},d="ContactItem_listItem__NSSYk",h="ContactItem_button__IRFBz",v="NOT_FOUND";var y=function(e,t){return e===t};function _(e,t){var n="object"===typeof t?t:{equalityCheck:t},r=n.equalityCheck,a=void 0===r?y:r,u=n.maxSize,i=void 0===u?1:u,o=n.resultEqualityCheck,c=function(e){return function(t,n){if(null===t||null===n||t.length!==n.length)return!1;for(var r=t.length,a=0;a<r;a++)if(!e(t[a],n[a]))return!1;return!0}}(a),s=1===i?function(e){var t;return{get:function(n){return t&&e(t.key,n)?t.value:v},put:function(e,n){t={key:e,value:n}},getEntries:function(){return t?[t]:[]},clear:function(){t=void 0}}}(c):function(e,t){var n=[];function r(e){var r=n.findIndex((function(n){return t(e,n.key)}));if(r>-1){var a=n[r];return r>0&&(n.splice(r,1),n.unshift(a)),a.value}return v}return{get:r,put:function(t,a){r(t)===v&&(n.unshift({key:t,value:a}),n.length>e&&n.pop())},getEntries:function(){return n},clear:function(){n=[]}}}(i,c);function l(){var t=s.get(arguments);if(t===v){if(t=e.apply(null,arguments),o){var n=s.getEntries(),r=n.find((function(e){return o(e.value,t)}));r&&(t=r.value)}s.put(arguments,t)}return t}return l.clearCache=function(){return s.clear()},l}function b(e){var t=Array.isArray(e[0])?e[0]:e;if(!t.every((function(e){return"function"===typeof e}))){var n=t.map((function(e){return"function"===typeof e?"function "+(e.name||"unnamed")+"()":typeof e})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+n+"]")}return t}function x(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=function(){for(var t=arguments.length,r=new Array(t),a=0;a<t;a++)r[a]=arguments[a];var u,i=0,o={memoizeOptions:void 0},c=r.pop();if("object"===typeof c&&(o=c,c=r.pop()),"function"!==typeof c)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof c+"]");var s=o,l=s.memoizeOptions,f=void 0===l?n:l,p=Array.isArray(f)?f:[f],m=b(r),d=e.apply(void 0,[function(){return i++,c.apply(null,arguments)}].concat(p)),h=e((function(){for(var e=[],t=m.length,n=0;n<t;n++)e.push(m[n].apply(null,arguments));return u=d.apply(null,e)}));return Object.assign(h,{resultFunc:c,memoizedResultFunc:d,dependencies:m,lastResult:function(){return u},recomputations:function(){return i},resetRecomputations:function(){return i=0}}),h};return a}var g=x(_),j=function(e){return e.contacts.contacts},C=function(e){return e.filters},N=function(e){return e.contacts.isLoading},A=function(e){return e.contacts.error},F=g([j,C],(function(e,t){return e.filter((function(e){return e.name.toString().toLowerCase().includes(t.toString().toLowerCase())}))})),k=g([j,C,F],(function(e,t,n){return null===t?e:n})),w=n(634),z=function(){var e=(0,a.I0)(),t=(0,a.v9)(k);return(0,l.jsx)(l.Fragment,{children:t.map((function(t){return(0,l.jsxs)("li",{className:d,children:[t.name,": ",t.number,(0,l.jsx)("button",{type:"button",className:h,onClick:function(){return e((0,w.zY)(t.id))},children:"Delete"})]},t.id)}))})},I="ContactForm_form__dhl+T",S="ContactForm_label__-cVXI",E="ContactForm_input__Bl93P",R="ContactForm_button__eSwX9",Z=function(){var e=(0,a.I0)();return(0,l.jsxs)("form",{className:I,onSubmit:function(t){t.preventDefault();var n=t.target,r={name:n.username.value,number:n.number.value};e((0,w.uK)(r)),n.reset()},children:[(0,l.jsx)("label",{className:S,children:"Name"}),(0,l.jsx)("input",{className:E,type:"text",name:"username",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0}),(0,l.jsx)("label",{className:S,children:"Number"}),(0,l.jsx)("input",{className:E,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0}),(0,l.jsx)("button",{className:R,type:"submit",children:"Add contact"})]})},q=function(){var e=(0,a.I0)(),t=(0,a.v9)(N),n=(0,a.v9)(A);return(0,r.useEffect)((function(){e((0,w.yF)())}),[e]),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("section",{children:[(0,l.jsx)("h1",{className:"main-title",children:"Phonebook"}),(0,l.jsx)(Z,{}),t&&!n&&(0,l.jsx)(u.Rf,{color:"#3f51b5",width:"50",visible:!0,ariaLabel:"falling-lines-loading"})]}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{className:"title",children:"Contacts"}),(0,l.jsx)(f,{}),(0,l.jsx)(m,{children:(0,l.jsx)(z,{})})]})]})}}}]);
//# sourceMappingURL=885.e639c0cf.chunk.js.map