(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{76:function(e,t,n){e.exports=n(95)},81:function(e,t,n){},95:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(13),i=n.n(r),c=(n(81),n(39)),s=n(19),l=n(38),u=n(136);var m=n(138),g=n(151),d=n(96),f=n(135),b=Object(f.a)(function(e){return{selectEmpty:{marginTop:e.spacing(2),alignItems:"flex-end"},button:{margin:e.spacing(1)},section:{padding:e.spacing(1,3),margin:e.spacing(5,5)}}});function p(e){var t=b(),n=e.numberOfSeats,a=e.searchSeats,r=e.specifyNumberOfSeats;return o.a.createElement(u.a,{item:!0},o.a.createElement(d.a,{className:t.section,elevation:5},o.a.createElement(u.a,{container:!0,direction:"row",justify:"center",alignItems:"center"},o.a.createElement(u.a,{item:!0,xs:9},"How many tickets do you want to buy?"),o.a.createElement(u.a,{container:!0,xs:3,justify:"flex-end"},o.a.createElement(g.a,{className:t.selectEmpty,name:"ticket-number",value:n,onChange:function(e){return r(Number.parseInt(e.target.value,10))}},o.a.createElement("option",{value:"Unknown",disabled:!!n},"#"),o.a.createElement("option",{value:1},"1"),o.a.createElement("option",{value:2},"2"),o.a.createElement("option",{value:3},"3"),o.a.createElement("option",{value:4},"4"),o.a.createElement("option",{value:5},"5"),o.a.createElement("option",{value:6},"6"),o.a.createElement("option",{value:7},"7"),o.a.createElement("option",{value:8},"8"),o.a.createElement("option",{value:9},"9"),o.a.createElement("option",{value:10},"10"),o.a.createElement("option",{value:11},"11"),o.a.createElement("option",{value:12},"12"))),o.a.createElement(u.a,{item:!0,alignContent:"flex-end"},o.a.createElement(m.a,{disabled:!n,variant:"contained",color:"primary",className:t.button,onClick:function(){return a()}},"SEARCH")))))}var h=n(4),E=n(154),v=n(141),w=n(142),y=n(70),O=n(61),S=n(140);function k(e){var t=Object(S.a)("(min-width:768px)")?42:18;return o.a.createElement(O.a,Object.assign({},e,{style:Object(s.a)({},e.style,{fontSize:t})}),o.a.createElement("path",{d:"M4,18V21H7V18H17V21H20V15H4V18M19,10H22V13H19V10M2,10H5V13H2V10M17,13H7V5A2,2 0 0,1 9,3H15A2,2 0 0,1 17,5V13Z"}))}var j=Object(h.a)({root:{border:"1px solid rgba(0, 0, 0, .125)",boxShadow:"none","&:not(:last-child)":{borderBottom:0},"&:before":{display:"none"},"&$expanded":{margin:"auto"}},expanded:{}})(E.a),C=Object(h.a)({root:{backgroundColor:"rgba(0, 0, 0, .03)",borderBottom:"1px solid rgba(0, 0, 0, .125)",marginBottom:-1,minHeight:56,"&$expanded":{minHeight:56}},content:{"&$expanded":{margin:"12px 0"}},expanded:{}})(v.a),x=Object(h.a)(function(e){return{root:{padding:e.spacing(2)}}})(w.a),N=Object(h.a)(function(e){return{root:{margin:e.spacing(2)}}})(m.a),H=function(e){return"Suggestion for ".concat(e.category," - ").concat(e.totalPrice,"\u20ac - ").concat(e.seats.join(", "))},B=function(e){return e.reservationStatus>0?"#b71c1c":1===e.category?"#ffa000":2===e.category?"#607d8b":"#009688"},I=function(e,t){return t.seats.includes(e.name)?"#ffcdd2":"white"};function V(e){var t=e.auditorium;return t?0===e.suggestions.length?o.a.createElement(u.a,{container:!0,direction:"column"},Object.entries(t.rows).map(function(e){var t=Object(l.a)(e,2),n=t[0],a=t[1];return o.a.createElement("div",{key:"auditorium_row_".concat(n),style:{display:"flex",justifyContent:"center"}},a.map(function(e){return o.a.createElement(k,{key:e.name,htmlColor:B(e)})}))})):o.a.createElement("div",null,e.suggestions.map(function(n,a){return o.a.createElement(j,{key:"suggestion_".concat(a),expanded:a===e.currentSuggestion,onChange:(r=a,function(t,n){n&&e.selectSuggestion(r)})},o.a.createElement(C,{"aria-controls":"panel1a-content",id:"panel1a-header"},o.a.createElement(y.a,null,H(n))),o.a.createElement(x,null,o.a.createElement(u.a,{container:!0,direction:"column"},Object.entries(t.rows).map(function(e){var t=Object(l.a)(e,2),r=t[0],i=t[1];return o.a.createElement("div",{key:"row_".concat(a,"_").concat(r),style:{display:"flex",justifyContent:"center"}},i.map(function(e){return o.a.createElement(k,{key:e.name,htmlColor:B(e),style:{backgroundColor:I(e,n)}})}))}),o.a.createElement(u.a,{container:!0,direction:"row",justify:"center"},o.a.createElement(N,{variant:"contained",color:"primary",onClick:e.bookAction},"BOOK SEATS")))));var r})):o.a.createElement("div",null)}var A=n(42),M=n(143),D=n(144),F=n(53),P=Object(f.a)(function(e){return{formControl:{margin:e.spacing(1)},selectShow:Object(A.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(F.fade)(e.palette.common.white,.85),"&:hover":{backgroundColor:Object(F.fade)(e.palette.common.white,.55)},marginRight:e.spacing(2),marginLeft:0,width:"75%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(3),width:"auto"})}});function R(e){var t=P(),n=e.currentShow,a=e.shows,r=e.selectShow;return o.a.createElement(M.a,{position:"sticky",style:{width:"100%"}},o.a.createElement(D.a,{className:t.formControl},o.a.createElement(g.a,{className:t.selectShow,name:"showId",onChange:function(e){return r(Number.parseInt(e.target.value,10))}},o.a.createElement("option",{value:"",disabled:!!n},"Show id"),a.map(function(e){return o.a.createElement("option",{key:e,value:e},"Show ",e)}))))}var T=n(150),_=n(148),$=n(146),J=n(147),L=n(145),z=n(153);var K=Object(z.a)()(function(e){var t=e.fullScreen;return o.a.createElement("div",null,o.a.createElement(T.a,{fullScreen:t,open:!0,onClose:e.cancelBooking,"aria-labelledby":"responsive-dialog-title"},o.a.createElement(L.a,{id:"responsive-dialog-title"},"BOOKING CONFIRMATION"),o.a.createElement($.a,null,o.a.createElement(J.a,null,"Do you confirm booking of seats ",e.suggestion.seats.join(", ")," for a total price of ",e.suggestion.totalPrice,"\u20ac ?")),o.a.createElement(_.a,null,o.a.createElement(m.a,{onClick:e.cancelBooking,color:"primary"},"No"),o.a.createElement(m.a,{onClick:e.bookAction,color:"primary",autoFocus:!0},"Yes"))))}),W=n(155),G=n(152),U=n(97),Y=n(69),Z=n.n(Y),q=n(149),Q=Object(f.a)(function(e){return Object(W.a)({close:{padding:e.spacing(.5)},notification:{backgroundColor:q.a[600]}})});function X(e){var t=Q();function n(t,n){"clickaway"!==n&&e.onClose()}return o.a.createElement(G.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:e.open,autoHideDuration:2e3,onClose:n,ContentProps:{"aria-describedby":"message-id",classes:{root:t.notification}},message:o.a.createElement("span",{id:"message-id",className:t.notification},"Booking CONFIRMED!"),className:t.notification,classes:{root:t.close},style:{backgroundColor:q.a[600]},action:[o.a.createElement(U.a,{key:"close","aria-label":"Close",color:"inherit",className:t.close,onClick:n},o.a.createElement(Z.a,null))]})}var ee={loading:!0,shows:[],currentShow:void 0,auditorium:void 0,numberOfSeats:void 0,suggestions:[],currentSuggestion:void 0,bookingDialog:!1,bookingConfirmed:!1},te=window.location.href.indexOf("github")>-1?"https://e02a4dce.ngrok.io/api":"http://localhost:4243/api";var ne=function(){var e=o.a.useState(ee),t=Object(l.a)(e,2),n=t[0],a=t[1],r=function(e,t){if(!t)return[];var n="Mixed"===e?"Mixed":"Category ".concat(e);return t.map(function(e){return{category:n,seats:e.seats,totalPrice:e.totalPrice}})};if(n.loading)return fetch("".concat(te,"/shows")).then(function(e){return e.json()}).then(function(e){return a(Object(s.a)({},ee,{loading:!1,shows:e.map(function(e){return Number.parseInt(e,10)}).sort(function(e,t){return e-t})}))}),o.a.createElement("div",null,"Loading...");var i=n.currentShow&&0===n.suggestions.length;return o.a.createElement("div",null,o.a.createElement(R,{currentShow:n.currentShow,shows:n.shows,selectShow:function(e){fetch("".concat(te,"/shows/").concat(e)).then(function(e){return e.json()}).then(function(t){a(Object(s.a)({},n,{currentShow:e,auditorium:t,numberOfSeats:void 0,suggestions:[],currentSuggestion:void 0}))})}}),o.a.createElement(u.a,{container:!0,direction:"column",justify:"center"},o.a.createElement("br",null)," ",o.a.createElement(V,{suggestions:n.suggestions,currentSuggestion:n.currentSuggestion,auditorium:n.auditorium,selectSuggestion:function(e){a(Object(s.a)({},n,{currentSuggestion:e}))},bookAction:function(){a(Object(s.a)({},n,{bookingDialog:!0}))}}),i&&o.a.createElement(p,{numberOfSeats:n.numberOfSeats,searchSeats:function(){fetch("".concat(te,"/shows/").concat(n.currentShow,"/suggestions?&party=").concat(n.numberOfSeats)).then(function(e){return e.json()}).then(function(e){a(Object(s.a)({},n,{currentSuggestion:0,suggestions:[].concat(Object(c.a)(r(1,e.suggestionsForFirstCategory)),Object(c.a)(r(2,e.suggestionsForSecondCategory)),Object(c.a)(r(3,e.suggestionsForThirdCategory)),Object(c.a)(r("Mixed",e.suggestionsForMixedCategory)))}))})},specifyNumberOfSeats:function(e){a(Object(s.a)({},n,{numberOfSeats:e}))}})),n.bookingDialog&&o.a.createElement(K,{suggestion:n.suggestions[n.currentSuggestion||0],bookAction:function(){var e=n.suggestions[n.currentSuggestion||0].seats;fetch("".concat(te,"/shows/").concat(n.currentShow,"/reservations"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(e)}).then(function(e){a(Object(s.a)({},n,{numberOfSeats:void 0,suggestions:[],currentSuggestion:void 0,bookingDialog:!1,bookingConfirmed:!0}))})},cancelBooking:function(){a(Object(s.a)({},n,{bookingDialog:!1}))}}),o.a.createElement(X,{open:n.bookingConfirmed,onClose:function(){return a(Object(s.a)({},n,{bookingConfirmed:!1}))}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(ne,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[76,1,2]]]);
//# sourceMappingURL=main.83ef3233.chunk.js.map