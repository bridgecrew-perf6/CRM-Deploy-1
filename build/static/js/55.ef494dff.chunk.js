(this.webpackJsonpCRM=this.webpackJsonpCRM||[]).push([[55],{1214:function(e,a,s){"use strict";s.r(a);s(90);var t=s(52),n=(s(748),s(316)),r=s(0),c=s.n(r),o=s(9),l=s(51),i=s(55),u=s(23),m=s(1140);a.default=function(){var e=Object(l.c)(),a=Object(l.d)((function(e){return{socialTrafficState:e.chartContent.socialTrafficData,soIsLoading:e.chartContent.soLoading}})).socialTrafficState;Object(r.useEffect)((function(){m.socialTrafficGetData&&e(Object(m.socialTrafficGetData)())}),[e]);var s=c.a.createElement(c.a.Fragment,null,c.a.createElement(o.d,{to:"#"},c.a.createElement("span",null,"2 years")),c.a.createElement(o.d,{to:"#"},c.a.createElement("span",null,"3 years")),c.a.createElement(o.d,{to:"#"},c.a.createElement("span",null,"4 years"))),g=null!==a&&a,f=g.facebook,p=g.twitter,E=g.youtube,d=g.linkdin,k=g.pinterest,w=g.google,b=null!==a?[{key:"1",network:c.a.createElement("span",{className:"traffic-title"},"Social Network"),users:c.a.createElement("span",{className:"traffic-title"},"Users"),newUsers:c.a.createElement("span",{className:"traffic-title"},"New Users"),sessions:c.a.createElement("span",{className:"traffic-title"},"Sessions"),bounceRate:c.a.createElement("span",{className:"traffic-title"},"Bounce Rate"),pages:c.a.createElement("span",{className:"traffic-title"},"Pages / Session"),avg:c.a.createElement("span",{className:"traffic-title"},"Avg. Session Duration")},{key:"2",network:c.a.createElement(o.c,{to:"#"},c.a.createElement("span",{className:"social-name"},"Facebook")),users:f.users,newUsers:f.newUsers,sessions:f.session,bounceRate:f.bounceRate,pages:f.pagesSession,avg:f.avg},{key:"3",network:c.a.createElement(o.c,{to:"#"},c.a.createElement("span",{className:"social-name"},"Twitter")),users:p.users,newUsers:p.newUsers,sessions:p.session,bounceRate:p.bounceRate,pages:p.pagesSession,avg:p.avg},{key:"4",network:c.a.createElement(o.c,{to:"#"},c.a.createElement("span",{className:"social-name"},"Linkdin")),users:d.users,newUsers:d.newUsers,sessions:d.session,bounceRate:d.bounceRate,pages:d.pagesSession,avg:d.avg},{key:"5",network:c.a.createElement(o.c,{to:"#"},c.a.createElement("span",{className:"social-name"},"Youtube")),users:E.users,newUsers:E.newUsers,sessions:E.session,bounceRate:E.bounceRate,pages:E.pagesSession,avg:E.avg},{key:"6",network:c.a.createElement(o.c,{to:"#"},c.a.createElement("span",{className:"social-name"},"Pinterest")),users:k.users,newUsers:k.newUsers,sessions:k.session,bounceRate:k.bounceRate,pages:k.pagesSession,avg:k.avg},{key:"7",network:c.a.createElement(o.c,{to:"#"},c.a.createElement("span",{className:"social-name"},"Google+")),users:w.users,newUsers:w.newUsers,sessions:w.session,bounceRate:w.bounceRate,pages:w.pagesSession,avg:w.avg}]:[];return c.a.createElement(i.CardGroup,null,c.a.createElement("div",{className:"full-width-table"},c.a.createElement(u.Cards,{isbutton:c.a.createElement("div",{className:"card-radio"},c.a.createElement(n.a.Group,{onChange:function(a){e(Object(m.socialTrafficFilterData)(a.target.value))},defaultValue:"today"},c.a.createElement(n.a.Button,{value:"today"},"Today"),c.a.createElement(n.a.Button,{value:"week"},"Week"),c.a.createElement(n.a.Button,{value:"month"},"Month"),c.a.createElement(n.a.Button,{value:"year"},"Year"))),title:"Social Traffic Metrics",size:"large",more:s},c.a.createElement("div",{className:"traffic-table table-responsive"},c.a.createElement(t.a,{columns:[{dataIndex:"network",key:"network"},{title:"Acquisition",dataIndex:"users",key:"users"},{dataIndex:"newUsers",key:"newUsers"},{dataIndex:"sessions",key:"sessions"},{title:"Behavior",dataIndex:"bounceRate",key:"bounceRate"},{dataIndex:"pages",key:"pages"},{dataIndex:"avg",key:"avg"}],dataSource:b,pagination:!1})))))}}}]);