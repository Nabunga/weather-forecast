(this["webpackJsonpweather-forecast"]=this["webpackJsonpweather-forecast"]||[]).push([[0],{17:function(e,t,a){},23:function(e,t,a){},24:function(e,t,a){},25:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},51:function(e,t,a){"use strict";a.r(t);var c=a(1),s=a.n(c),n=a(8),i=a.n(n),r=(a(23),a(24),a(25),a(4)),o=a.n(r),l=a(5),d=a(3),j=a(6),b=a.n(j),O=(a(45),a(46),a(0)),f=function(e){var t=e.apiResult,a=t.daily[0].dt,c=new Date(1e3*a),s=c.toLocaleString("eng",{month:"long"}),n="".concat(c.getDay()," ")+"".concat(s," ")+"".concat(c.getFullYear()),i=t.daily[0].weather[0].icon,r="http://openweathermap.org/img/wn/".concat(i,"@2x.png"),o="+ "+Math.round(t.daily[0].temp.day)+"\xb0";return Object(O.jsxs)("div",{className:"daily-card",children:[Object(O.jsx)("div",{className:"daily-card__date",children:n}),Object(O.jsx)("img",{className:"daily-card__img",src:r,alt:"current weather icon"}),Object(O.jsx)("div",{className:"daily-card__temp",children:o})]})},u=(a(48),function(e){var t=e.options,a=e.setActiveOption,c=t.map((function(e){return Object(O.jsx)("option",{className:"select__option",value:e.city,children:e.city},e.city)}));return Object(O.jsxs)("select",{className:"select",onChange:function(e){a(e.target.value)},children:[Object(O.jsx)("option",{hidden:!0,children:"Select city"}),c]})}),h=(a(49),function(){return Object(O.jsxs)("div",{className:"fields-attention",children:[Object(O.jsx)("div",{className:"fields-attention__image",children:Object(O.jsx)("img",{src:"data:image/png;base64,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",alt:"cloud"})}),Object(O.jsx)("div",{className:"fields-attention__text",children:Object(O.jsx)("p",{children:"Fill in all the fields and the weather will be displayed"})})]})}),A=function(e){var t=e.options,a=Object(c.useState)(""),s=Object(d.a)(a,2),n=s[0],i=s[1],r=Object(c.useState)(0),j=Object(d.a)(r,2),A=j[0],m=j[1],x=Object(c.useState)(0),p=Object(d.a)(x,2),v=p[0],y=p[1],g=Object(c.useState)([]),L=Object(d.a)(g,2),w=L[0],X=L[1];return Object(c.useEffect)((function(){!function(){switch(n){case"Samara":m(t[0].lat);break;case"Togliatti":m(t[1].lat);break;case"Saratov":m(t[2].lat);break;case"Kazan":m(t[3].lat);break;case"Krasnodar":m(t[4].lat)}}()}),[n]),Object(c.useEffect)((function(){!function(){switch(n){case"Samara":y(t[0].lon);break;case"Togliatti":y(t[1].lon);break;case"Saratov":y(t[2].lon);break;case"Kazan":y(t[3].lon);break;case"Krasnodar":y(t[4].lon)}}()}),[n]),Object(c.useEffect)((function(){(function(){var e=Object(l.a)(o.a.mark((function e(){var t,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("https://api.openweathermap.org/data/2.5/onecall",{params:{lat:A,lon:v,appid:"1eb308e6ff37dc1cfbe5a711bb5963e8",exclude:"current,minutely,hourly,alerts",units:"metric"}});case 2:t=e.sent,a=t.data,X(a);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[n,A,v]),""===n?Object(O.jsx)("section",{children:Object(O.jsxs)("div",{className:"seven-days-card",children:[Object(O.jsx)("h1",{className:"seven-days-card__header",children:"7 Days Forecast"}),Object(O.jsx)(u,{options:t,setActiveOption:i}),Object(O.jsx)(h,{})]})}):Object(O.jsx)("section",{children:Object(O.jsxs)("div",{className:"seven-days-card",children:[Object(O.jsx)("h1",{className:"seven-days-card__header",children:"7 Days Forecast"}),Object(O.jsx)(u,{options:t,setActiveOption:i}),Object(O.jsx)(f,{apiResult:w})]})})},m=(a(17),a(18)),x=a.n(m),p=function(e){var t=e.options,a=Object(c.useState)(""),s=Object(d.a)(a,2),n=s[0],i=s[1],r=Object(c.useState)([]),j=Object(d.a)(r,2),f=(j[0],j[1]),A=Object(c.useState)(""),m=Object(d.a)(A,2),p=m[0],v=m[1],y=Object(c.useState)(0),g=Object(d.a)(y,2),L=g[0],w=g[1];Object(c.useEffect)((function(){!function(){switch(n){case"Samara":w(t[0].lat);break;case"Togliatti":w(t[1].lat);break;case"Saratov":w(t[2].lat);break;case"Kazan":w(t[3].lat);break;case"Krasnodar":w(t[4].lat)}}()}),[n]);var X=Object(c.useState)(0),V=Object(d.a)(X,2),D=V[0],I=V[1];Object(c.useEffect)((function(){!function(){switch(n){case"Samara":I(t[0].lon);break;case"Togliatti":I(t[1].lon);break;case"Saratov":I(t[2].lon);break;case"Kazan":I(t[3].lon);break;case"Krasnodar":I(t[4].lon)}}()}),[n]);var Z=new Date(p).getTime()/1e3;return Object(c.useEffect)((function(){(function(){var e=Object(l.a)(o.a.mark((function e(){var t,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("https://api.openweathermap.org/data/2.5/onecall/timemachine",{params:{lat:L,lon:D,dt:Z,appid:"1eb308e6ff37dc1cfbe5a711bb5963e8",units:"metric"}});case 2:t=e.sent,a=t.data,f(a);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[n,p]),Object(O.jsxs)("section",{className:"weather-in-past-card",children:[Object(O.jsx)("h1",{className:"weather-in-past-card__header",children:"Forecast for a Date in the Past"}),Object(O.jsx)(u,{options:t,setActiveOption:i}),Object(O.jsx)("div",{className:"weather-in-past-card__date-input",children:Object(O.jsx)(x.a,{mask:"9999/99/99",placeholder:"Select date",value:p,onChange:function(e){return v(e.target.value)}})}),Object(O.jsx)(h,{})]})},v=[{city:"Samara",lat:53.195873,lon:50.100193},{city:"Togliatti",lat:53.507836,lon:49.420393},{city:"Saratov",lat:51.533557,lon:46.034257},{city:"Kazan",lat:55.796127,lon:49.106405},{city:"Krasnodar",lat:45.03547,lon:38.975313}],y=function(){return Object(O.jsxs)(s.a.Fragment,{children:[Object(O.jsx)("header",{children:Object(O.jsxs)("div",{className:"header",children:[Object(O.jsx)("p",{className:"header__first-item",children:"Weather"}),Object(O.jsx)("p",{className:"header__second-item",children:"forecast"})]})}),Object(O.jsx)("main",{children:Object(O.jsxs)("div",{className:"main",children:[Object(O.jsx)(A,{options:v}),Object(O.jsx)(p,{options:v})]})}),Object(O.jsx)("footer",{children:Object(O.jsx)("div",{className:"footer",children:Object(O.jsx)("p",{className:"footer__text",children:"\u0441 \u043b\u044e\u0431\u043e\u0432\u044c\u044e \u043e\u0442 mercury development"})})})]})};i.a.render(Object(O.jsx)(y,{}),document.getElementById("root"))}},[[51,1,2]]]);
//# sourceMappingURL=main.bfac3ee5.chunk.js.map