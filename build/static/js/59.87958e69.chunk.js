(this.webpackJsonpCRM=this.webpackJsonpCRM||[]).push([[59],{1218:function(e,a,t){"use strict";t.r(a);t(75);var n=t(38),c=t(1),l=t(2),s=t(0),r=t.n(s),i=t(9),o=t(51),m=t(55),d=t(23),u=t(275),v=t(1140);a.default=function(){var e=Object(o.c)(),a=Object(o.d)((function(e){return{deviceState:e.chartContent.deviceData,dvIsLoading:e.chartContent.dvLoading}})),t=a.deviceState,E=a.dvIsLoading,b=Object(s.useState)({device:"year"}),p=Object(l.a)(b,2),N=p[0],h=p[1];Object(s.useEffect)((function(){v.deviceGetData&&e(Object(v.deviceGetData)())}),[e]);var f=function(a){h(Object(c.a)(Object(c.a)({},N),{},{device:a})),e(Object(v.deviceFilterData)(a))};return r.a.createElement(m.SessionChartWrapper,null,null!==t&&r.a.createElement(d.Cards,{isbutton:r.a.createElement("div",{className:"card-nav"},r.a.createElement("ul",null,r.a.createElement("li",{className:"week"===N.device?"active":"deactivate"},r.a.createElement(i.c,{onClick:function(){return f("week")},to:"#"},"Week")),r.a.createElement("li",{className:"month"===N.device?"active":"deactivate"},r.a.createElement(i.c,{onClick:function(){return f("month")},to:"#"},"Month")),r.a.createElement("li",{className:"year"===N.device?"active":"deactivate"},r.a.createElement(i.c,{onClick:function(){return f("year")},to:"#"},"Year")))),title:"Sessions By Device",size:"large"},E?r.a.createElement("div",{className:"sd-spin"},r.a.createElement(n.a,null)):r.a.createElement("div",{className:"session-chart-inner"},r.a.createElement(u.ChartjsDonutChart,{labels:["Desktop","Mobiles","Tablets"],datasets:[{data:t,backgroundColor:["#20C997","#5F63F2","#FA8B0C"],total:"9,283"}]}),r.a.createElement(m.SessionState,{className:"session-wrap d-flex justify-content-center"},r.a.createElement("div",{className:"session-single"},r.a.createElement("div",{className:"chart-label"},r.a.createElement("span",{className:"label-dot dot-success"}),"Desktop"),r.a.createElement("span",null,t[0]),r.a.createElement("sub",null,"45%")),r.a.createElement("div",{className:"session-single"},r.a.createElement("div",{className:"chart-label"},r.a.createElement("span",{className:"label-dot dot-info"}),"Mobile"),r.a.createElement("span",null,t[1]),r.a.createElement("sub",null,"30%")),r.a.createElement("div",{className:"session-single"},r.a.createElement("div",{className:"chart-label"},r.a.createElement("span",{className:"label-dot dot-warning"}),"Tablets"),r.a.createElement("span",null,t[1]),r.a.createElement("sub",null,"25%"))))))}}}]);