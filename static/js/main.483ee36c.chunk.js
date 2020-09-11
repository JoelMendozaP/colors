(this.webpackJsonpcolors=this.webpackJsonpcolors||[]).push([[0],{22:function(e,t,a){e.exports=a(50)},23:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},50:function(e,t,a){"use strict";a.r(t);a(23);var o=a(0),c=a.n(o),r=a(9),n=a.n(r),l=a(4),s=a(5),i=a(12),m=Object(i.b)({name:"theme",initialState:{value:"dark"},reducers:{toggle:function(e){e.value="dark"===e.value?"light":"dark"}}}),u=function(e){return e.theme.value},d=m.actions.toggle,f=m.reducer,h=Object(i.a)({reducer:{theme:f}});function v(e){return E("/info/".concat(encodeURIComponent(e)))}function E(e){return"/colors"+e}a(35),a(36),a(37);var p=a(10),b=a(8);a(41);function _(e){var t=e.className,a=Object(s.b)(),o=Object(s.c)(u);return c.a.createElement("div",{className:"colors-theme-chooser ".concat(t),onClick:function(){return a(d())}},c.a.createElement(p.a,{icon:"light"===o?b.c:b.b,size:"lg"}))}function w(e){var t=e.showBack,a=e.children;return c.a.createElement("div",{className:"colors-header"},c.a.createElement("div",{className:"colors-header__wrapper"},t&&c.a.createElement("div",{className:"colors-header__showback",onClick:function(){return window.history.back()}},c.a.createElement(p.a,{icon:b.a,size:"lg"})),c.a.createElement(l.a,{to:E("/"),className:"colors-header__link"},c.a.createElement("div",{className:"colors-header__title"},"Colors")),c.a.createElement("div",{className:"colors-header__extra"},a),c.a.createElement(_,{className:"colors-header__themechooser"})))}var N=a(11);a(42);function k(e){var t=e.className,a=e.label,r=Object(o.useState)(""),n=Object(N.a)(r,2),s=n[0],i=n[1],m=Object(l.d)();return c.a.createElement("div",{className:"colors-colorinput ".concat(t)},c.a.createElement("input",{className:"colors-colorinput__input",value:s,onChange:function(e){return i(e.target.value)}}),c.a.createElement("span",{className:"colors-colorinput__preview",style:{backgroundColor:s}}),c.a.createElement("button",{className:"colors-colorinput__button",onClick:function(){s&&m(v(s.toLowerCase()))}},a))}function g(e){var t=e.showBack,a=(e.className,e.children),o=Object(s.c)(u);return c.a.createElement("div",{className:"colors-view colors-".concat(o,"-theme")},c.a.createElement(w,{showBack:t},c.a.createElement(k,{className:"colors-view-colorinput",label:"Analizar"})),c.a.createElement("div",{className:"colors-view__scrollview"},c.a.createElement("div",{className:"colors-view__content"},a)))}a(43);function C(e){var t=e.mode,a=void 0===t?"large":t,o=e.color;return c.a.createElement("div",{className:"colors-tile colors-tile--".concat(a)},c.a.createElement("div",{className:"colors-tile__color",style:{backgroundColor:o}}),c.a.createElement("div",{className:"colors-tile__caption"},o))}var j=["#e0ece4","#ff4b5c","#056674","#66bfbf","#f1f3de","#eb8f8f","#ec0101","#cd0a0a","#ffc93c","#07689f","#40a8c4","#a2d5f2","#ff7171","#ffaa71","#6e6d6d"];function x(e){var t=e.mode,a=void 0===t?"large":t,o=e.colors,r=void 0===o?j:o;return c.a.createElement("div",{className:"colors-tileset colors-tileset--{mode}"},r.map((function(e,t){return c.a.createElement(l.a,{key:t,to:v(e)},c.a.createElement(C,{color:e,mode:a}))})))}function O(){return c.a.createElement(g,null,c.a.createElement(x,null))}a(44);var y=a(2),B=a.n(y);function S(e,t){for(var a=B()(e),o=[a.hex()],c=1;c<11;c++)o.push(t.call(a,c/10).hex());return o}function T(e){var t=e.color;return c.a.createElement(x,{mode:"compact",colors:S(t,B.a.prototype.darken)})}function z(e){var t=e.color;return c.a.createElement(x,{mode:"compact",colors:S(t,B.a.prototype.whiten)})}function I(e){var t=e.color;return c.a.createElement(x,{mode:"compact",colors:[t,B()(t).rotate(180).hex()]})}function q(e){var t=e.color;return c.a.createElement(x,{mode:"compact",colors:[t,B()(t).rotate(120).hex(),B()(t).rotate(240).hex()]})}function A(e){var t=e.color;return c.a.createElement(x,{mode:"compact",colors:[t,B()(t).rotate(30).hex(),B()(t).rotate(330).hex()]})}function J(e){var t=e.color,a=function(){try{return B()(decodeURIComponent(t)).hex()}catch(e){return null}}(),r=Object(o.useState)(!a),n=Object(N.a)(r,2),l=n[0],s=n[1],i=a||B()("black").hex();return setTimeout((function(){return s(!1)}),4e3),c.a.createElement(g,{showBack:!0},l&&c.a.createElement("div",{className:"error-msg"},"The color ",t," is not a real color"),c.a.createElement("h3",null,"Analogous Colors"),c.a.createElement(A,{color:i}),c.a.createElement("h3",null,"Triadic Colors"),c.a.createElement(q,{color:i}),c.a.createElement("h3",null,"Complementary Color"),c.a.createElement(I,{color:i}),c.a.createElement("h3",null,"Shades of ",i),c.a.createElement(T,{color:i}),c.a.createElement("h3",null,"Tints of ",i),c.a.createElement(z,{color:i}))}!function(){var e=window.location;if(e.search){var t={};e.search.slice(1).split("&").forEach((function(e){var a=e.split("=");t[a[0]]=a.slice(1).join("=").replace(/~and~/g,"&")})),void 0!==t.p&&window.history.replaceState(null,null,e.pathname.slice(0,-1)+(t.p||"")+(t.q?"?"+t.q:"")+e.hash)}Object(l.c)(window)}(),n.a.render(c.a.createElement(s.a,{store:h},c.a.createElement(l.b,null,c.a.createElement(J,{path:E("/info/:color")}),c.a.createElement(O,{path:E("/")}))),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.483ee36c.chunk.js.map