(this.webpackJsonpCRM=this.webpackJsonpCRM||[]).push([[37],{1114:function(e,a,t){"use strict";t.r(a);t(66);var A=t(17),l=(t(62),t(8)),n=(t(748),t(316)),r=(t(1260),t(1263)),s=(t(92),t(25)),i=(t(317),t(116)),m=t(1),I=(t(315),t(57)),c=t(2),C=(t(749),t(475)),u=(t(59),t(14)),E=t(0),U=t.n(E),w=t(16),o=t.n(w),L=t(154),S=t(23),d=t(34),v=t(13),h=t(198),Q=t(28),B=t(180),M=t(181),y=t(182),p=u.a.Option,g=C.a.Dragger;a.default=function(){var e=I.a.useForm(),a=Object(c.a)(e,1)[0],C=Object(E.useState)({file:null,list:null,submitValues:{}}),w=Object(c.a)(C,2),J=w[0],j=w[1],b={name:"file",multiple:!0,action:"https://www.mocky.io/v2/5cc8019d300000980a055e76",onChange:function(e){var a=e.file.status;"uploading"!==a&&j(Object(m.a)(Object(m.a)({},J),{},{file:e.file,list:e.fileList})),"done"===a?i.b.success("".concat(e.file.name," file uploaded successfully.")):"error"===a&&i.b.error("".concat(e.file.name," file upload failed."))},listType:"picture",defaultFileList:[{uid:"1",name:"xxx.png",status:"done",url:t(1181),thumbUrl:t(1181)}],showUploadList:{showRemoveIcon:!0,removeIcon:U.a.createElement(o.a,{icon:"trash-2",onClick:function(e){return console.log(e,"custom removeIcon event")}})}};return U.a.createElement(U.a.Fragment,null,U.a.createElement(L.PageHeader,{ghost:!0,title:"Edit Product",buttons:[U.a.createElement("div",{key:"1",className:"page-header-actions"},U.a.createElement(y.CalendarButtonPageHeader,{key:"1"}),U.a.createElement(M.ExportButtonPageHeader,{key:"2"}),U.a.createElement(B.ShareButtonPageHeader,{key:"3"}),U.a.createElement(v.Button,{size:"small",key:"4",type:"primary"},U.a.createElement(o.a,{icon:"plus",size:14}),"Add New"))]}),U.a.createElement(d.Main,null,U.a.createElement(A.a,{gutter:15},U.a.createElement(l.a,{xs:24},U.a.createElement(S.Cards,{headless:!0},U.a.createElement(A.a,{gutter:25,justify:"center"},U.a.createElement(l.a,{xxl:12,md:14,sm:18,xs:24},U.a.createElement(h.AddProductForm,null,U.a.createElement(I.a,{style:{width:"100%"},form:a,name:"editProduct",onFinish:function(e){j(Object(m.a)(Object(m.a)({},J),{},{submitValues:e}))}},U.a.createElement(d.BasicFormWrapper,null,U.a.createElement("div",{className:"add-product-block"},U.a.createElement(A.a,{gutter:15},U.a.createElement(l.a,{xs:24},U.a.createElement("div",{className:"add-product-content"},U.a.createElement(S.Cards,{title:"About Product"},U.a.createElement(I.a.Item,{name:"name",initialValue:"Red chair",label:"Product Name"},U.a.createElement(s.a,null)),U.a.createElement(I.a.Item,{name:"subtext",initialValue:"Sub heading",label:"Sub Text"},U.a.createElement(s.a,null)),U.a.createElement(I.a.Item,{name:"category",initialValue:"sunglasses",label:"Category"},U.a.createElement(u.a,{style:{width:"100%"}},U.a.createElement(p,{value:""},"Please Select"),U.a.createElement(p,{value:"wearingClothes"},"Wearing Clothes"),U.a.createElement(p,{value:"sunglasses"},"Sunglasses"),U.a.createElement(p,{value:"t-shirt"},"T-Shirt"))),U.a.createElement(I.a.Item,{name:"price",initialValue:"120",label:"Price"},U.a.createElement("div",{className:"input-prepend-wrap"},U.a.createElement("span",{className:"input-prepend"},U.a.createElement(o.a,{icon:"dollar-sign",size:14})),U.a.createElement(r.a,{style:{width:"100%"}}))),U.a.createElement(I.a.Item,{name:"discount",initialValue:"20%",label:"Discount"},U.a.createElement("div",{className:"input-prepend-wrap"},U.a.createElement("span",{className:"input-prepend"},U.a.createElement(o.a,{icon:"percent",size:14})),U.a.createElement(r.a,{style:{width:"100%"}}))),U.a.createElement(I.a.Item,{name:"status",initialValue:"published",label:"Status"},U.a.createElement(n.a.Group,null,U.a.createElement(n.a,{value:"published"},"Published"),U.a.createElement(n.a,{value:"draft"},"Draft"))),U.a.createElement(I.a.Item,{name:"description",initialValue:"lorem ipsum dolor sit amit",label:"Product Description"},U.a.createElement(s.a.TextArea,{rows:5})),U.a.createElement(I.a.Item,{name:"mTitle",initialValue:"Meta title",label:"Meta Title"},U.a.createElement(s.a,null)),U.a.createElement(I.a.Item,{name:"mKeyword",initialValue:"Meta keyword",label:"Meta Keyword"},U.a.createElement(s.a,null))))))),U.a.createElement("div",{className:"add-product-block"},U.a.createElement(A.a,{gutter:15},U.a.createElement(l.a,{xs:24},U.a.createElement("div",{className:"add-product-content"},U.a.createElement(S.Cards,{title:"Product Image"},U.a.createElement(g,b,U.a.createElement("p",{className:"ant-upload-drag-icon"},U.a.createElement(o.a,{icon:"upload",size:50})),U.a.createElement(Q.default,{as:"h4",className:"ant-upload-text"},"Drag and drop an image"),U.a.createElement("p",{className:"ant-upload-hint"},"or Browse to choose a file"))))))),U.a.createElement("div",{className:"add-form-action"},U.a.createElement(I.a.Item,null,U.a.createElement(v.Button,{className:"btn-cancel",size:"large",onClick:function(){return a.resetFields()}},"Cancel"),U.a.createElement(v.Button,{size:"large",htmlType:"submit",type:"primary",raised:!0},"Save Product")))))))))))))}},1181:function(e,a){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATIAAADUCAYAAAAfrK/uAAAVJ0lEQVR4Xu2dBc/sNhNGc8vMzMzMIPVf9w+0KjMzMzPTpxN9XrluwFnI7uw9kV61uptNPGcmj+3xOHvg/vvv/6fxkIAEJBCYwAGFLLD3bLoEJNASUMgMBAlIIDwBhSy8CzVAAhJQyIwBCUggPAGFLLwLNUACElDIjAEJSCA8AYUsvAs1QAISUMiMAQlIIDwBhSy8CzVAAhJQyIwBCUggPAGFLLwLNUACElDIjAEJSCA8AYUsvAs1QAISUMiMAQlIIDwBhSy8CzVAAhJQyIwBCUggPAGFLLwLNUACElDIjAEJSCA8AYUsvAs1QAISUMiMAQlIIDwBhSy8CzVAAhJQyIwBCUggPAGFLLwLNUACElDIjAEJSCA8AYUsvAs1QAISUMiMAQlIIDwBhSy8CzVAAhJQyIwBCUggPAGFLLwLNUACElDIjAEJSCA8AYUsvAs1QAISUMiMAQlIIDwBhSy8CzVAAhJQyIwBCUggPAGFLLwLNUACElDIjAEJSCA8AYUsvAs1QAISUMiMAQlIIDwBhSy8CzVAAhJQyIwBCUggPAGFLLwLNUACElDIjAEJSCA8AYUsvAs1QAISUMiMAQlIIDwBhSy8CzVAAhJQyIwBCUggPAGFLLwLNUACElDIjAEJSCA8AYUsvAs1QAISUMiMAQlIIDwBhSy8CzVAAhJQyIwBCUggPAGFLLwLNUACElDIjAEJSCA8AYUsvAs1QAISUMiMAQlIIDwBhSy8CzVAAhJQyIwBCUggPAGFLLwLNUACElDIjAEJSCA8AYUsvAs1QAISUMiMAQlIIDwBhSy8CzVAAhJQyIwBCUggPAGFLLwLNUACElDIjAEJSCA8AYUsvAs1QAISUMiMAQlIIDwBhSy8CzVAAhJQyIwBCUggPAGFLLwLNUACElDIjAEJSCA8AYUsvAs1QAISUMiMAQlIIDwBhSy8CzVAAhJQyIwBCUggPAGFLLwLNUACElDIjAEJSCA8AYUsvAs1QAISUMiMAQlIIDwBhSy8CzVAAhJQyIwBCUggPAGFLLwLNUACElDIjAEJSCA8AYUsvAs1QAISUMiMAQlIIDwBhSy8CzVAAhJQyIwBCUggPAGFLLwLNUACElDIjAEJSCA8AYUsvAs1QAISUMiMAQlIIDwBhSy8CzVAAhKYXciOO+645sILL2xOPfXU5qijjmoOO+ywhRf++uuv5tdff20+/fTT5q233mr+/PPPyR4699xzmwsuuKA5/vjjF9f+559/mj/++KP5+uuvm/fee6/56quvJl+XL9BW2n722Wc3xx57bHPooYf+q+2//fZbe+033nijtWOfj0svvbS57LLLFgx+//335sUXX2x9V3sQAzfeeGMbBxz46KWXXmo+/vjj2kt0nnfWWWe1MXDCCSc0hx9+eHPgwIH2POKAdhIH77///tJxkN+UmLjmmmuac845p/nmm2+axx57bFLb52zrpIYFO3lWISNocVwuAH28EAUEgYCrORBIAoqHIwVu1/cQyw8++KB5+eWXay67OOfiiy9ueHiPOOKIwe8hvjyMH3300aTrRzz5jjvuaE477bRF0xHxKQ/ybbfd1pxxxhkLkYHZ888/vzSK2hjgBn///Xfro1deeWWpDpNrnH766c2VV17ZCibHFPvnbuvSUIN8cVYhu++++xocmA5EhV6SA/EpBY4e+rXXXhsVM6550003LQIq9b4EK9cvr82/v/POO+21a47rr7++YaR3yCGHLE7nurQ/tZ3PuM/BJGQ8yLBJIyp4wPTdd98dxcqI6aqrrlqMmn/88cfm6aefbvjvMgcd2HXXXdeOlPMjjzHiK+/k8CGjv+eee27SLbH3iiuuaDvlfEZRK2RztnWSYYFPnl3ICDSG4AR7OQ0hMBj1nHjiiQukP/30U/Pkk082/LfvKHt2pg48UN9++237FYKNwDvvvPMWgYdI0ht/+OGHg+674YYbWhFLDwBCRU/O1DefPhLcF110UdtL89mq06MoMXX11Ve3dic+P/zwQytIQ/4iBm6++eZFxzNFAPu44KNrr7229S8dFaJCjH3xxReLr+Aj4otzkwBx7zfffLP12djB9y+55JJ2Gtk1Mq8VsjnaOmbLvn0+q5AxFUG8hqaLBNitt97aThE5CDSmmG+//XYne3JW9OxpNPfll1+2D1JXfo1pAFPENLJC8B599NFen5ajBh7SF154YSGQ+xYMy9iDv+68885F58MoBwGhk+g7EBzYJvH75JNPmmeeeWaZ2y++k8SBzoV75wJWXhgxuvzyyxcx89133zUPPfRQ7/2JRb5z8skn/2sEhq38pXiaKmSbaOtKEAN/eVYhq+VUihM5LQSk67jrrruaU045pf3ol19+aR+INBLrOp+HLonkUHKZUcMtt9zSLhpwrDr1qbU94nmMdBmZkVjn4AFluta1qFJOR3/++efm2WefXblzYJTEIgwj8ZrpaR43LACQm/v888878TOaR8jy1AIdJaN5coQpXVIrZJtsa8T4WUebd1LIytWsPiHjoWDqd+SRR7YsCKyxZHEukvSmjA5JzpcHozeCl1HDOqY+63DWLl+DqSJCko6+UVa+QMAUkCkdI+65j1ycxvKa+bm0mZE87Ua48rxvrZBNtXVKW6dee1/ODy1kpYNZiRzLeZF/Y6R19NFHtz7sCj6mS/TYaTVqbAq6L8Gwih0nnXRSu+ByzDHHtJdhtPvqq6+2K8TpKEs2YP/UU08tvWq4SnuniAPTUKbC5HbL8h2FbBUvrO+7Oylk9OysQDFVGcqRkUs788wzWxpMUZ544onBJHPClk8vu77H0J88DvenB2bEUJMMHnNLft98+kUSmYeFaQr/n3JH2E7SnMUFVlm7DhZIYJWSzzVTtXIquC5BwQbEKk3BePDxCSMepl/4K60qYj/pgqFc1hjPVT6fImRD99klIWMF+fzzz2+bm48y6ZjxC7FCB578U1O3uUvxNeSHnRQyenbEjAd66MG89957F0lmHppHHnmkKrZzh1OvRj6HRYJ05Mlo8m4sHpAQXvXoEjIebAQgTY/77kHejxFnV/5vSvKcoL799tvbxDXHOgWlXKjJp4756m/NgsCqrMe+j/gzyuIYy5FtW8hq29olZAgai2FlWUppEx0mI+jPPvvsP+buSnyFEjKgs5xPrzFU71VOEaesfI31xnkeZ4pAjj08pZAxTSEPl5Lk9JBMyTj4t7KujlVTFjPKZHa5cji0iFHme6bU043Zx+dlD84DQnkDiwFp1EinQOHsMjs3atowdk6ZOoDnww8/vFR7Nj0im9LWUsjgzrOU1/nBnDij4yzjq69T26X46vPt1kdkQGJKxR/J+5S7GqvAr10Q6DI8f5i5Dz0RopKOPDiTQHI/SjfIBeXbXtL0j1xQfo2u++ZCxiiAg4ebB4mpa7kbgOkA98xrllhZo66uPLqmi2WVfZnHWteUsmxL3oMz+mJUnUYEtfV7Y2K0yuc83Czm8CDTPnzH9qpljk0L2ZS25kJGXBJjPE8IFB1WmZ5gGkqMpbwm9vd1MrsUX11+ml3I8mLArgYxCvv+++/bvNRQ/iTPow2tPnbdI1+55H7UqL3++uvtqaVAsqrJOTh9bGvV0PSPa+dCltqFmDC17dubWZYrDI222AJGfq9vpTWfsi+zN7L2QS8LXtP38NOq25Bq29B3Hv5lmps6zJqc4tA9NylkU9uaC1lq81jtI7lLVpxTmdFQTnhX4iuEkBFYCBmV8UMbkMvq6FyMxoJ96Lvs/SPQGQXhVHJnjBZTgpR/44+ja1tV3/SvS8iYdrFqN1b3RK9JHi21oa/MhKBkRTbVNeW9a76AMUeOqiwmxv5t1+KVD23tFrhtCNkybS2FrLazymMDW/vKSHYpvkqfzD4iAxr5knx00yUIPGwAZaTUleDelJCVI8a0V5OgoGKdvzy3w9SPv5SHADDi9/jjj/8n/vMR2RQxYYRDgj5NAYYq0fOpSMoxMm3NE/z5auKY6C/7ebmCyXWGCmWXvU/t9xjdMOVNIj91v23ffTYxIlu2raWQTckb33333YsFoKEFrl2Jr60LWV9AIASICH/5xnJGLazWldPMuYQsPYBDpQI1NVTliIzRAHkZgq3myBcgEASq4alv6zry4lRGuIxs0wJKbS9d06ah6Vv+ep7UGQyJ/Cr3G/tu+eYSOiLyResoxF23kK3S1jJHNrS1r2SWr4zCh9js2y+87fjaianlWNDxOT0nOak0leoa4eQ5Mr5DLqs2YTu0almOyGqr+mumf311ZDVM8iAdG9nkwoqIMPpIie2xfZA1bRk6h8Ubprfp9T4IJ1PKtI1syibtVdtC58irnag1TLV5sGMb07pes7QuIVtHW/vqyGo4jq3k59fYZnz12TL71LIGKufkqk8PUVbtr2vVshwZ5Tky2kG+jo3lY6UC5fSvq2xjLiGj3V1TuzmmlOXGfEac1CalAmPaVpsbrI2VrvPK6VlKVRBHYznJKfddh5Ctq61zCdk24yuckLHcS29KD9+1Ksm/33PPPZM37AKiHN3k07RSIHkIScjXHLlQ8bA88MAD//ranEJW1nPRkL7SjRrbas4Z2hCer5jiTwQO7ps4WGhghJHKVuismEpSV7XuY1UhW2db5xSybcTXkO92dkRWM+LKE5SsFj744INVcZoLSlfiPA/OvsR91402KWT5dqyxHFlZwJjauslpXTmlLDeEl1uU1rFi2OUDCox5BXd63xgdCi8FWPb15mMBtYqQrbutqwhZXvs3liPbRnyN+SG0kFEmwciNo3abSTkF7CplyEVjSmV/LmRdwrrsiKwcfY6Jdr4dCNFjFSptSVq1bqovoMopZVexbTndZdrOToWhlzCOBXD+OaMb2pF2StAJ8TaUTf5+wrJCtom2riJkZWwOLSZtI77G4mBnhaycWnYlqctX8lBLNvb66vw7XVX9AMsTn+zF5GEY29xcbpnqmpLmwdJ37y6HlXU+Q8vq+QOSSjwYdeY5qnVPMcspZd/KaLnPc2oh81AwlyO+oRdsjj0UUz5fRsg21dZcyKaU95C8JyedioSHOu9txFeNP3ZWyPJkf1+pAqMrXnOdtr/UvGa5HDV1vZY5d2xtPqfcw9j1xoyysr/2/VX5q7yHBLAsoswLYvNedJ1TzHJKOSZOpSivqxwknxptatTZ9UAtI2SbamtZR1bzPGBTuaWsb0CwjfiqETHOmU3IKMikl+x7HU3e4HzjOP8+9MCXThj6MYl8+lNuTSqBkZzmoeMgZ0CiuO912+WIpC+ASiGjDezz63qxY2pPOWUbWnnME+rlnsZyFLCuh71sX810sfwdhFX3fJYbq2tesFn7gIydN1XINtnWUsjoVJgZMKPoW3Uvp7hDK8rbiK8x/unz2YQsOZzkKzU8/JW5C1ZCKNwkn5PX/QwVo5a9RHIeOwLSMjs1OiSAqRFLOwrGShHKIldEh8JSNpindhOUtJe/tEI2VHdWVvZjI+2lsBWhzBPS2EVOiRqoVE83tOG63FzctSpYvthw1SlmKeA8LPAZ+wm/UlRXrbKnZo0CXN7oMNZB1T4YtedNFbJNtrVLyIgxRubs7si3/HX9EMvQG3u3EV+1Pph1RFb+FFwq1Bz6OTimHTwYY299LR8oDMuvjxDk71vv2y1Qgit7q3Td9DNw5XXHRlhlQjVPwuftJfjSz8ulNnFPRrNpc3ve1lJ0h3rVMk9X+wtCJZtySsnnU4SxFNWxIt+hoO4qYk5xVfsw5Nu5ar/DeVOFbJNtLZP9dNYIZ/6izsSl66fx+jb0byO+pvhgViHrevNDX2OBzRQFEatdNidAGMHkryTpuv7YGyrK79ReF9Gl1xuaOpdCRnEmPV2qeu/jMXbtKe/BX+aNn13tKqeUU4WofAnjVCHM2zT2RpWah2LZkdyqQlbTtvKcvraWQkZ80cnj86EfrWYkTYqj75evthFfU7nMNrWkYQAl75R+VivfOJ5eKkgvsuzP2affluQ+/H/+St+xV0YPgRt7VTB5CFZVx5b5+8ov2F/HlixEuHwN8di1a8oeStvKN35OGUlxrXIEvOzUsEz8124H6+ps0m9aTn0A0vn7KGTpF+8RejpMpvTpmcNeVuRT3rpvt8M24msZH84qZMs0cJ++s2wd2T4x0JbNEViljmxzrZrnygrZPJzbuyhkM8I+CG+lkB2ETt+GyQrZNqgfPPdUyA4eX2/VUoVsq/j3/uYK2d67eDcMVMh2ww/72gqFbF89u2N2KWQ75pA9a45CtmcO3VVzFLJd9cx+tEsh2w8/7rwVCtnOuyh0AxWy0O6L03iFLI6vIrZUIYvoNdssAQlI4P8ELIg1FCQggfAEFLLwLtQACUhAITMGJCCB8AQUsvAu1AAJSEAhMwYkIIHwBBSy8C7UAAlIQCEzBiQggfAEFLLwLtQACUhAITMGJCCB8AQUsvAu1AAJSEAhMwYkIIHwBBSy8C7UAAlIQCEzBiQggfAEFLLwLtQACUhAITMGJCCB8AQUsvAu1AAJSEAhMwYkIIHwBBSy8C7UAAlIQCEzBiQggfAEFLLwLtQACUhAITMGJCCB8AQUsvAu1AAJSEAhMwYkIIHwBBSy8C7UAAlIQCEzBiQggfAEFLLwLtQACUhAITMGJCCB8AQUsvAu1AAJSEAhMwYkIIHwBBSy8C7UAAlIQCEzBiQggfAEFLLwLtQACUhAITMGJCCB8AQUsvAu1AAJSEAhMwYkIIHwBBSy8C7UAAlIQCEzBiQggfAEFLLwLtQACUhAITMGJCCB8AQUsvAu1AAJSEAhMwYkIIHwBBSy8C7UAAlIQCEzBiQggfAEFLLwLtQACUhAITMGJCCB8AQUsvAu1AAJSEAhMwYkIIHwBBSy8C7UAAlIQCEzBiQggfAEFLLwLtQACUhAITMGJCCB8AQUsvAu1AAJSEAhMwYkIIHwBBSy8C7UAAlIQCEzBiQggfAEFLLwLtQACUhAITMGJCCB8AQUsvAu1AAJSEAhMwYkIIHwBBSy8C7UAAlIQCEzBiQggfAEFLLwLtQACUhAITMGJCCB8AQUsvAu1AAJSEAhMwYkIIHwBBSy8C7UAAlIQCEzBiQggfAEFLLwLtQACUhAITMGJCCB8AQUsvAu1AAJSEAhMwYkIIHwBBSy8C7UAAlIQCEzBiQggfAEFLLwLtQACUhAITMGJCCB8AQUsvAu1AAJSEAhMwYkIIHwBBSy8C7UAAlIQCEzBiQggfAEFLLwLtQACUjgf4jexqwVMwLjAAAAAElFTkSuQmCC"}}]);