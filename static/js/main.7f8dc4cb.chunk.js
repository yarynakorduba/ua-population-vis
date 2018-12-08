(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{31:function(e,t,a){e.exports=a(58)},36:function(e,t,a){},42:function(e,t,a){},46:function(e,t,a){},56:function(e,t,a){},58:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(11),c=a.n(o),l=(a(36),a(22)),i=a(23),u=a(29),m=a(24),f=a(30),s=a(16),p=a.n(s),b=a(25),h=a(4),g=a(60),d=a(61),v=a(62),E=a(8),y=a(5),O=a(28),j=a(63),w=a(59),x=a(13),k=(a(42),Object(E.c)("~s")),S=r.a.createContext({}),L=S.Consumer,D=S.Provider,_=Object(j.b)(function(e){var t=e.children,a=Object(O.a)(e,["children"]);return r.a.createElement(D,{value:a},t)}),N=Object(y.b)(Object(y.d)(L,function(e){return e}),Object(y.g)({handleTooltip:function(e){var t=e.margin,a=e.xScale,n=e.data,r=e.year,o=e.showTooltip;return function(e){var c=Object(w.a)(e).x,l=Math.round(a.invert(c-t.left)),i=n.find(function(e){var t=e.year,a=e.age;return t===r&&a===l});o({tooltipData:i,tooltipLeft:a(l)})}}}))(function(e){var t=e.width,a=e.height,n=e.margin,o=e.hideTooltip,c=e.handleTooltip,l=e.tooltipOpen,i=e.tooltipLeft;return r.a.createElement(h.a,null,r.a.createElement(x.b,{x:0,y:0,width:t-n.left-n.top,height:a-n.top-n.bottom,fill:"transparent",onMouseMove:c,onMouseLeave:o}),l&&r.a.createElement(x.c,{from:{x:i,y:0},to:{x:i,y:a-n.top-n.bottom},stroke:"black",strokeWidth:1,style:{pointerEvents:"none"},strokeDasharray:"2,2"}))}),C=Object(y.b)(Object(y.d)(L,function(e){return e}),Object(y.a)(function(e){return!e.tooltipOpen},y.f)),W=Object(y.b)(C,Object(y.h)(function(e){return{top:(0,e.yScale)(e.tooltipData.men)}})),T=Object(y.b)(C,Object(y.h)(function(e){return{top:(0,e.yScale)(e.tooltipData.women)}})),F=Object(y.b)(C,Object(y.h)(function(e){var t=e.yScale,a=e.tooltipData;return{top:t(a.women+a.men)}})),M=W(function(e){var t=e.top,a=e.tooltipLeft;return r.a.createElement("circle",{cy:t-1,cx:a,r:4,fill:"rgba(41, 128, 185, 1.000)",stroke:"white",strokeWidth:2,style:{pointerEvents:"none"}})}),Y=W(function(e){var t=e.tooltipData.men,a=(e.margin,e.tooltipLeft),n=e.top;return r.a.createElement(j.a,{top:n+26,left:a-5},k(t))}),P=T(function(e){var t=e.tooltipData.women,a=(e.margin,e.tooltipLeft),n=e.top;return r.a.createElement(j.a,{top:n+26,left:a+90},k(t))}),A=T(function(e){var t=e.top,a=e.tooltipLeft;return r.a.createElement("circle",{cy:t-1,cx:a,r:4,fill:"rgba(231, 76, 60, 1.000)",stroke:"white",strokeWidth:2,style:{pointerEvents:"none"}})}),B=F(function(e){var t=e.top,a=e.tooltipLeft;return r.a.createElement("circle",{cy:t-1,cx:a,r:4,fill:"rgba(0, 0, 0, 1.000)",stroke:"white",strokeWidth:2,style:{pointerEvents:"none"}})}),H=F(function(e){var t=e.tooltipData,a=t.women,n=t.men,o=e.top,c=e.margin,l=e.tooltipLeft;return r.a.createElement(j.a,{top:o+c.top-35,left:l+c.left-30},k(n+a))}),J=C(function(e){var t=e.tooltipData,a=e.height,n=e.margin,o=e.tooltipLeft;return r.a.createElement(j.a,{top:a-n.bottom,left:o+n.left-13},t.age)}),R=C(function(e){var t=e.tooltipData,a=(e.height,e.margin),n=e.tooltipLeft,o=e.year;return r.a.createElement(j.a,{top:a.top-20,left:n+a.left-23},o-t.age)}),I=(a(46),function(e){return r.a.createElement(x.a,Object.assign({},e,{className:"Chart__men-area",y:function(t){var a=t.men;return e.yScale(a)},curve:E.b}))}),$=function(e){return r.a.createElement(x.a,Object.assign({},e,{className:"Chart__women-area",y:function(t){var a=t.women;return e.yScale(a)},curve:E.b}))},q=function(e){return r.a.createElement(x.a,Object.assign({},e,{className:"Chart__common-area",y:function(t){var a=t.women,n=t.men;return e.yScale(a+n)},curve:E.b}))},z=Object(y.b)(Object(y.c)({margin:{top:40,bottom:40,left:80,right:40},year:1989}),Object(y.i)("data","setData"),v.a,Object(y.h)(function(){var e=Object(b.a)(p.a.mark(function e(t){var a,n,r,o;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(a=t.data,n=t.setData,a){e.next=7;break}return e.next=4,Object(E.a)("population_by_age_sex_year.csv",function(e){var t=e.age,a=e.men,n=e.women,r=e.year;return{age:Number(t),men:Number(a),women:Number(n),year:Number(r)}});case 4:r=e.sent,o=r.filter(function(e){return e.age>=0}),n(o);case 7:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()),Object(y.a)(function(e){return!e.data},Object(y.e)(function(){return"Loading..."})),Object(y.h)(function(e){var t=e.data,a=e.parentHeight,n=(e.parentWidth,e.margin);return{yScale:Object(E.e)().range([a-n.top-n.bottom,0]).domain([0,Object(E.d)(t.map(function(e){return e.men+e.women}))+1e5])}}),Object(y.h)(function(e){var t=e.data,a=e.year;return{data:t.filter(function(e){return e.year===a})}}),Object(y.h)(function(e){e.data;var t=e.parentWidth,a=e.margin,n=e.year;return{xScale:Object(E.e)().range([0,t-a.left-a.right]).domain([0,79]),xScaleYears:Object(E.e)().range([0,t-a.left-a.right]).domain([n,n-79])}}))(function(e){var t=e.parentWidth,a=e.parentHeight,n=e.margin,o=e.data,c=e.xScale,l=e.xScaleYears,i=e.yScale,u=e.year;return r.a.createElement("div",{className:"Chart"},r.a.createElement(_,{width:t,height:a,margin:n,xScale:c,yScale:i,data:o,year:u},r.a.createElement("svg",{width:t,height:a},r.a.createElement(h.a,{top:n.top,left:n.left},r.a.createElement(g.b,{scale:i,width:t-n.left-n.right}),r.a.createElement(g.a,{numTicks:20,scale:c,height:a-n.top-n.bottom}),r.a.createElement(d.d,{numTicks:20,scale:l,top:0,tickFormat:Object(E.c)("")}),r.a.createElement(d.a,{numTicks:20,scale:c,top:a-n.bottom-n.top,label:"Age"}),r.a.createElement(d.b,{scale:i,label:"Population",tickFormat:Object(E.c)("~s")}),r.a.createElement(d.c,{left:t-n.left-n.right,scale:i,label:"Population",tickFormat:Object(E.c)("~s")}),r.a.createElement(q,{data:o,yScale:i,x:function(e){var t=e.age;return c(t)}}),r.a.createElement($,{data:o,yScale:i,x:function(e){var t=e.age;return c(t)}}),r.a.createElement(I,{data:o,yScale:i,x:function(e){var t=e.age;return c(t)}}),r.a.createElement(N,null),r.a.createElement(M,null),r.a.createElement(A,null),r.a.createElement(B,null))),r.a.createElement(J,null),r.a.createElement(R,null),r.a.createElement(Y,null),r.a.createElement(P,null),r.a.createElement(H,null)))}),G=(a(56),function(e){var t=e.onChange,a=e.value;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement("h4",null,a),"1989  ",r.a.createElement("input",{onChange:function(e){var a=e.target;return t(Number(a.value))},type:"range",step:1,max:2018,min:1989}),"  2018"))}),K=Object(y.b)(Object(y.c)({Diagram:z,Range:G}),Object(y.i)("year","setYear",1989))(function(e){var t=e.year,a=e.setYear,n=e.Diagram,o=e.Range;return r.a.createElement("div",{className:"Layout"},r.a.createElement("div",{className:"Layout__range-placeholder"},r.a.createElement(o,{value:t,onChange:a})),r.a.createElement("div",{className:"Layout__chart-placeholder"},r.a.createElement(n,{year:t})))}),Q=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(K,null)}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(Q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[31,2,1]]]);
//# sourceMappingURL=main.7f8dc4cb.chunk.js.map