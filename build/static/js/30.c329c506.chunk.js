(this.webpackJsonpCRM=this.webpackJsonpCRM||[]).push([[30],{1120:function(e,t,a){"use strict";a.r(t);a(161);var n=a(76),r=(a(92),a(25)),c=(a(59),a(14)),l=a(6),o=a.n(l),s=a(11),i=(a(315),a(57)),u=a(2),m=a(0),d=a.n(m),p=a(277),h=a(278),f=a(22),E=(a(1154),a(28)),b=(a(132),a(21));t.default=function(){var e=Object(f.useHistory)(),t=Object(m.useState)([]),a=Object(u.a)(t,2),l=a[0],v=a[1],y=Object(m.useState)({values:null,checked:null}),g=Object(u.a)(y,2),k=(g[0],g[1],i.a.useForm()),O=Object(u.a)(k,1)[0],x=Object(m.useState)([]),C=Object(u.a)(x,2),w=C[0],j=C[1];Object(m.useEffect)((function(){Object(s.a)(o.a.mark((function e(){var t,a,n,r,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat("http://143.110.241.30","/api/v1/employee/salesmanager"));case 3:return t=e.sent,e.next=6,t.json();case 6:return a=e.sent,e.next=9,fetch("".concat("http://143.110.241.30","/api/v1/master/team"));case 9:return n=e.sent,e.next=12,n.json();case 12:r=e.sent,c=[],r.map((function(e){c.push({name:e.name,id:e._id})})),j(c),v(a.data),e.next=22;break;case 19:e.prev=19,e.t0=e.catch(0),Object(b.default)("error","Add Failed",e.t0);case 22:case"end":return e.stop()}}),e,null,[[0,19]])})))()}),[]);var S=function(){var t=Object(s.a)(o.a.mark((function t(a){var n,r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("values: ",a),n={name:a.name,employeeId:a.employeeID,email:a.email,password:a.password,employeeType:a.userRole,managerId:a.managerIDx||"61a9c868840551f953956fe2",team:a.team},t.next=4,fetch("".concat("http://143.110.241.30","/api/v1/employee"),{method:"POST",body:JSON.stringify(n),headers:{Accept:"application/json","Content-Type":"application/json"}});case 4:return r=t.sent,t.next=7,r.json().then((function(t){!1===(null===t||void 0===t?void 0:t.success)?Object(b.default)("error","error occurred",t.message):(e.push("/"),Object(b.default)("success","Account Created","Account Created Successfully"),O.resetFields())}));case 7:t.sent;case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),I=c.a.Option;c.a.OptGroup;return d.a.createElement(h.AuthWrapper,null,d.a.createElement("p",{className:"auth-notice"},"Already have an account?"," ",d.a.createElement(p.NavLink,{to:"/",className:"color-red"},"Sign In")),d.a.createElement("div",{className:"auth-contents"},d.a.createElement(i.a,{name:"register",onFinish:S,layout:"vertical",form:O},d.a.createElement(E.default,{as:"h3"},"Sign Up to ",d.a.createElement("span",{className:"color-secondary"},"CRM")),d.a.createElement(i.a.Item,{label:"Name",name:"name",rules:[{required:!0,message:"Please input your Full name!"}]},d.a.createElement(r.a,{placeholder:"Full name"})),d.a.createElement(i.a.Item,{name:"userRole",label:"User Role"},d.a.createElement(c.a,{showSearch:!0,className:"Wwidth",placeholder:"Executive",optionFilterProp:"children",filterOption:function(e,t){return t.props.children.toLowerCase().indexOf(e.toLowerCase())>=0}},d.a.createElement(I,{value:"Executive"},"Executive"),";",d.a.createElement(I,{value:"Manager"},"Manager"),";",d.a.createElement(I,{value:"Executive+Sales"},"Executive + Sales"))),d.a.createElement(i.a.Item,{name:"team",label:"Select Team"},d.a.createElement(c.a,{showSearch:!0,className:"Wwidth",placeholder:"Select your manager",optionFilterProp:"children",filterOption:function(e,t){return t.props.children.toLowerCase().indexOf(e.toLowerCase())>=0}},w.map((function(e){return d.a.createElement(I,{key:e.id,value:e.name},e.name)})))),d.a.createElement(i.a.Item,{name:"managerIDx",label:"Select Manager"},d.a.createElement(c.a,{showSearch:!0,className:"Wwidth",placeholder:"Select your manaer",optionFilterProp:"children",filterOption:function(e,t){return t.props.children.toLowerCase().indexOf(e.toLowerCase())>=0}},l.map((function(e){return d.a.createElement(I,{key:e._id,value:e._id},e.name)})))),d.a.createElement(i.a.Item,{name:"employeeID",label:"Employee ID",rules:[{required:!0,message:"Please input your Employee ID!"}]},d.a.createElement(r.a,{placeholder:"Employee ID"})),d.a.createElement(i.a.Item,{name:"email",label:"Email Address",rules:[{required:!0,message:"Please input your email!",type:"email"}]},d.a.createElement(r.a,{placeholder:"name@example.com"})),d.a.createElement(i.a.Item,{label:"Password",name:"password",rules:[{required:!0,message:"Please input your password!"}]},d.a.createElement(r.a.Password,{placeholder:"Password"})),d.a.createElement(n.a,{className:"btn-create color-redBG",htmlType:"submit",type:"primary",size:"large"},"Create Account"))))}},1154:function(e,t,a){"use strict";a.r(t),a.d(t,"Checkbox",(function(){return s})),a.d(t,"CheckboxGroup",(function(){return o}));var n=a(2),r=a(0),c=a.n(r),l=a(1256),o=l.CheckboxStyle.Group,s=function(e){var t=e.item,a=e.defaultSelect,s=e.checked,i=e.multiple,u=e.onChange,m=e.onChangeTriger,d=e.defaultChecked,p=e.disabled,h=e.children,f=t,E=Object(r.useState)({checkedList:a,indeterminate:!0,checkAll:!1}),b=Object(n.a)(E,2),v=b[0],y=b[1];Object(r.useEffect)((function(){m&&m(v.checkedList)}),[v]);return i?c.a.createElement("div",null,c.a.createElement("div",{style:{borderBottom:"1px solid #E9E9E9"}},c.a.createElement(l.CheckboxStyle,{indeterminate:v.indeterminate,onChange:function(e){y({checkedList:e.target.checked?f:[],indeterminate:!1,checkAll:e.target.checked})},checked:v.checkAll},"Check all")),c.a.createElement("br",null),c.a.createElement(o,{options:f,value:v.checkedList,onChange:function(e){y({checkedList:e,indeterminate:!!e.length&&e.length<f.length,checkAll:e.length===f.length})}})):c.a.createElement(l.CheckboxStyle,{checked:s,onChange:function(e){return u(e.target.checked,e.target.value)},defaultChecked:d,disabled:p},h)}},1256:function(e,t,a){"use strict";a.r(t),a.d(t,"CheckboxStyle",(function(){return o}));a(276);var n,r=a(106),c=a(20),l=a(18),o=Object(l.b)(r.a)(n||(n=Object(c.a)(["\n\n"])))}}]);