(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{39:function(e,n,t){},40:function(e,n,t){"use strict";t.r(n);var c=t(1),r=t(15),i=t.n(r),a=t(6),u=t(3),o=t(0),s=function(e){var n=e.filter.length?e.personsList.filter((function(n){return n.name.toUpperCase()===e.filter.toUpperCase()})):e.personsList;return Object(o.jsx)("div",{children:n.map((function(n){return Object(o.jsxs)("p",{children:[n.name," ",n.number," ",Object(o.jsx)("button",{onClick:function(n){return e.handleDelete(n.target.id)},id:n.id,children:"delete"})]},n.id)}))})},d=function(e){return Object(o.jsxs)("div",{children:["filter shown with ",Object(o.jsx)("input",{value:e.filter,onChange:e.updateFilterField})]})},l=function(e){return Object(o.jsx)("div",{children:Object(o.jsxs)("form",{onSubmit:e.addNewPerson,children:[Object(o.jsxs)("div",{children:["name: ",Object(o.jsx)("input",{value:e.newName,onChange:e.updateNameField})]}),Object(o.jsxs)("div",{children:["number:"," ",Object(o.jsx)("input",{value:e.newNumber,onChange:e.updateNumberField})]}),Object(o.jsx)("div",{children:Object(o.jsx)("button",{type:"submit",children:"add"})})]})})},j=t(4),f=t.n(j),b="/api/persons",h=function(e){return f.a.post(b,e).then((function(e){return e.data}))},m=function(){return f.a.get(b).then((function(e){return e.data}))},O=function(e){return f.a.delete("".concat(b,"/").concat(e)).then((function(e){return e.data}))},p=function(e,n){return f.a.put("".concat(b,"/").concat(e),n).then((function(e){return e.data}))},v=(t(39),function(e){var n=e.message;return null===n?null:Object(o.jsx)("div",{className:"notification",children:n})}),x=function(e){var n=e.message;return null===n?null:Object(o.jsx)("div",{className:"error",children:n})},w=function(){var e=Object(c.useState)([]),n=Object(u.a)(e,2),t=n[0],r=n[1],i=Object(c.useState)(""),j=Object(u.a)(i,2),f=j[0],b=j[1],w=Object(c.useState)(""),g=Object(u.a)(w,2),N=g[0],F=g[1],k=Object(c.useState)(""),S=Object(u.a)(k,2),C=S[0],y=S[1],D=Object(c.useState)(null),T=Object(u.a)(D,2),L=T[0],P=T[1],E=Object(c.useState)(null),I=Object(u.a)(E,2),J=I[0],U=I[1];Object(c.useEffect)((function(){return m().then((function(e){r(e)}))}),[]);var A=t.map((function(e){return e.name}));return Object(o.jsxs)("div",{children:[Object(o.jsx)("h2",{children:"Phonebook"}),Object(o.jsx)(v,{message:L}),Object(o.jsx)(x,{message:J}),Object(o.jsx)(d,{filter:C,updateFilterField:function(e){y(e.target.value)}}),Object(o.jsx)("h3",{children:"add a new"}),Object(o.jsx)(l,{newName:f,newNumber:N,updateNameField:function(e){b(e.target.value)},updateNumberField:function(e){F(e.target.value)},addNewPerson:function(e){if(e.preventDefault(),A.includes(f)){if(window.confirm("".concat(f," is already added to phonebook, replace the old number with a new one?"))){var n=t.find((function(e){return e.name===f})),c=Object(a.a)(Object(a.a)({},n),{},{number:N});p(n.id,c).then((function(e){r(t.map((function(t){return t.id===n.id?e:t})))})).catch((function(e){U("Fail: ".concat(e.response.data.error)),setTimeout((function(){U(null)}),4500)}))}}else{var i={name:f,number:N};h(i).then((function(e){r(t.concat(e)),P("Added ".concat(i.name)),setTimeout((function(){P(null)}),4500)})).catch((function(e){U("Fail: ".concat(e.response.data.error)),setTimeout((function(){U(null)}),4500)}))}b(""),F("")}}),Object(o.jsx)("h2",{children:"Numbers"}),Object(o.jsx)(s,{personsList:t,filter:C,handleDelete:function(e){var n=t.find((function(n){return n.id===e}));window.confirm("Delete ".concat(n.name,"?"))&&O(e).then((function(){var n=t.filter((function(n){return n.id!==e}));r(n)})).catch((function(e){U("Information of ".concat(n.name," has already been removed from server")),setTimeout((function(){U(null)}),4500)}))}})]})};i.a.render(Object(o.jsx)(w,{}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.a622110e.chunk.js.map