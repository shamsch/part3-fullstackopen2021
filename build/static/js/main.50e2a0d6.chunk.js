(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{39:function(e,n,t){},40:function(e,n,t){"use strict";t.r(n);var c=t(1),r=t(15),i=t.n(r),a=t(6),u=t(3),o=t(0),s=function(e){var n=e.filter.length?e.personsList.filter((function(n){return n.name.toUpperCase()===e.filter.toUpperCase()})):e.personsList;return Object(o.jsx)("div",{children:n.map((function(n){return Object(o.jsxs)("p",{children:[n.name," ",n.number," ",Object(o.jsx)("button",{onClick:function(n){return e.handleDelete(n.target.id)},id:n.id,children:"delete"})]},n.id)}))})},d=function(e){return Object(o.jsxs)("div",{children:["filter shown with ",Object(o.jsx)("input",{value:e.filter,onChange:e.updateFilterField})]})},l=function(e){return Object(o.jsx)("div",{children:Object(o.jsxs)("form",{onSubmit:e.addNewPerson,children:[Object(o.jsxs)("div",{children:["name: ",Object(o.jsx)("input",{value:e.newName,onChange:e.updateNameField})]}),Object(o.jsxs)("div",{children:["number:"," ",Object(o.jsx)("input",{value:e.newNumber,onChange:e.updateNumberField})]}),Object(o.jsx)("div",{children:Object(o.jsx)("button",{type:"submit",children:"add"})})]})})},j=t(4),b=t.n(j),f="/api/persons",h=function(e){return b.a.post(f,e).then((function(e){return e.data}))},m=function(){return b.a.get(f).then((function(e){return e.data}))},O=function(e){return b.a.delete("".concat(f,"/").concat(e)).then((function(e){return e.data}))},p=function(e,n){return b.a.put("".concat(f,"/").concat(e),n).then((function(e){return e.data}))},v=(t(39),function(e){var n=e.message;return null===n?null:Object(o.jsx)("div",{className:"notification",children:n})}),x=function(e){var n=e.message;return null===n?null:Object(o.jsx)("div",{className:"error",children:n})},w=function(){var e=Object(c.useState)([]),n=Object(u.a)(e,2),t=n[0],r=n[1],i=Object(c.useState)(""),j=Object(u.a)(i,2),b=j[0],f=j[1],w=Object(c.useState)(""),g=Object(u.a)(w,2),N=g[0],F=g[1],k=Object(c.useState)(""),S=Object(u.a)(k,2),C=S[0],y=S[1],D=Object(c.useState)(null),I=Object(u.a)(D,2),L=I[0],P=I[1],E=Object(c.useState)(null),J=Object(u.a)(E,2),T=J[0],U=J[1];Object(c.useEffect)((function(){return m().then((function(e){r(e)}))}),[]);var A=t.map((function(e){return e.name}));return Object(o.jsxs)("div",{children:[Object(o.jsx)("h2",{children:"Phonebook"}),Object(o.jsx)(v,{message:L}),Object(o.jsx)(x,{message:T}),Object(o.jsx)(d,{filter:C,updateFilterField:function(e){y(e.target.value)}}),Object(o.jsx)("h3",{children:"add a new"}),Object(o.jsx)(l,{newName:b,newNumber:N,updateNameField:function(e){f(e.target.value)},updateNumberField:function(e){F(e.target.value)},addNewPerson:function(e){if(e.preventDefault(),A.includes(b)){if(window.confirm("".concat(b," is already added to phonebook, replace the old number with a new one?"))){var n=t.find((function(e){return e.name===b})),c=Object(a.a)(Object(a.a)({},n),{},{number:N});p(n.id,c).then((function(e){r(t.map((function(t){return t.id===n.id?e:t})))}))}}else{var i={name:b,number:N};h(i).then((function(e){r(t.concat(e))})),P("Added ".concat(i.name)),setTimeout((function(){P(null)}),4500)}f(""),F("")}}),Object(o.jsx)("h2",{children:"Numbers"}),Object(o.jsx)(s,{personsList:t,filter:C,handleDelete:function(e){var n=parseInt(e),c=t.find((function(e){return e.id===n}));window.confirm("Delete ".concat(c.name,"?"))&&O(e).then((function(){var e=t.filter((function(e){return e.id!==n}));r(e)})).catch((function(e){U("Information of ".concat(c.name," has already been removed from server")),setTimeout((function(){U(null)}),4500)}))}})]})};i.a.render(Object(o.jsx)(w,{}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.50e2a0d6.chunk.js.map