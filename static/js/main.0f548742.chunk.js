(this.webpackJsonpcolors=this.webpackJsonpcolors||[]).push([[0],{24:function(e,t,a){e.exports=a(52)},25:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},52:function(e,t,a){"use strict";a.r(t),a.d(t,"history",(function(){return L}));a(25);var o=a(0),c=a.n(o),r=a(10),n=a.n(r),l=a(5),s=a(6),i=a(23),m=a(13),u=Object(m.b)({name:"theme",initialState:{value:"dark"},reducers:{toggle:function(e){e.value="dark"===e.value?"light":"dark"}}}),d=function(e){return e.theme.value},f=u.actions.toggle,h=u.reducer,v=Object(m.a)({reducer:{theme:h}});function E(e){return p("/info/".concat(encodeURIComponent(e)))}function p(e){return"/colors"+e}a(37),a(38),a(39);var b=a(11),_=a(9);a(43);function N(e){var t=e.className,a=Object(s.b)(),o=Object(s.c)(d);return c.a.createElement("div",{className:"colors-theme-chooser ".concat(t),onClick:function(){return a(f())}},c.a.createElement(b.a,{icon:"light"===o?_.c:_.b,size:"lg"}))}function k(e){var t=e.showBack,a=e.children;return c.a.createElement("div",{className:"colors-header"},c.a.createElement("div",{className:"colors-header__wrapper"},t&&c.a.createElement("div",{className:"colors-header__showback",onClick:function(){return window.history.back()}},c.a.createElement(b.a,{icon:_.a,size:"lg"})),c.a.createElement(l.a,{to:p("/"),className:"colors-header__link"},c.a.createElement("div",{className:"colors-header__title"},"Colors")),c.a.createElement("div",{className:"colors-header__extra"},a),c.a.createElement(N,{className:"colors-header__themechooser"})))}var w=a(12);a(44);function g(e){var t=e.className,a=e.label,r=Object(o.useState)(""),n=Object(w.a)(r,2),s=n[0],i=n[1],m=Object(l.c)();return c.a.createElement("div",{className:"colors-colorinput ".concat(t)},c.a.createElement("input",{className:"colors-colorinput__input",value:s,onChange:function(e){return i(e.target.value)}}),c.a.createElement("span",{className:"colors-colorinput__preview",style:{backgroundColor:s}}),c.a.createElement("button",{className:"colors-colorinput__button",onClick:function(){s&&m(E(s.toLowerCase()))}},a))}function C(e){var t=e.showBack,a=(e.className,e.children),o=Object(s.c)(d);return c.a.createElement("div",{className:"colors-view colors-".concat(o,"-theme")},c.a.createElement(k,{showBack:t},c.a.createElement(g,{className:"colors-view-colorinput",label:"Analizar"})),c.a.createElement("div",{className:"colors-view__scrollview"},c.a.createElement("div",{className:"colors-view__content"},a)))}a(45);function j(e){var t=e.mode,a=void 0===t?"large":t,o=e.color;return c.a.createElement("div",{className:"colors-tile colors-tile--".concat(a)},c.a.createElement("div",{className:"colors-tile__color",style:{backgroundColor:o}}),c.a.createElement("div",{className:"colors-tile__caption"},o))}var x=["#e0ece4","#ff4b5c","#056674","#66bfbf","#f1f3de","#eb8f8f","#ec0101","#cd0a0a","#ffc93c","#07689f","#40a8c4","#a2d5f2","#ff7171","#ffaa71","#6e6d6d"];function O(e){var t=e.mode,a=void 0===t?"large":t,o=e.colors,r=void 0===o?x:o;return c.a.createElement("div",{className:"colors-tileset colors-tileset--{mode}"},r.map((function(e,t){return c.a.createElement(l.a,{key:t,to:E(e)},c.a.createElement(j,{color:e,mode:a}))})))}function y(){return c.a.createElement(C,null,c.a.createElement(O,null))}a(46);var B=a(3),S=a.n(B);function T(e,t){for(var a=S()(e),o=[a.hex()],c=1;c<11;c++)o.push(t.call(a,c/10).hex());return o}function z(e){var t=e.color;return c.a.createElement(O,{mode:"compact",colors:T(t,S.a.prototype.darken)})}function I(e){var t=e.color;return c.a.createElement(O,{mode:"compact",colors:T(t,S.a.prototype.whiten)})}function A(e){var t=e.color;return c.a.createElement(O,{mode:"compact",colors:[t,S()(t).rotate(180).hex()]})}function J(e){var t=e.color;return c.a.createElement(O,{mode:"compact",colors:[t,S()(t).rotate(120).hex(),S()(t).rotate(240).hex()]})}function R(e){var t=e.color;return c.a.createElement(O,{mode:"compact",colors:[t,S()(t).rotate(30).hex(),S()(t).rotate(330).hex()]})}function U(e){var t=e.color,a=function(){try{return S()(decodeURIComponent(t)).hex()}catch(e){return null}}(),r=Object(o.useState)(!a),n=Object(w.a)(r,2),l=n[0],s=n[1],i=a||S()("black").hex();return setTimeout((function(){return s(!1)}),4e3),c.a.createElement(C,{showBack:!0},l&&c.a.createElement("div",{class:"error-msg"},"The color ",t," is not a real color"),c.a.createElement("h3",null,"Analogous Colors"),c.a.createElement(R,{color:i}),c.a.createElement("h3",null,"Triadic Colors"),c.a.createElement(J,{color:i}),c.a.createElement("h3",null,"Complementary Color"),c.a.createElement(A,{color:i}),c.a.createElement("h3",null,"Shades of ",i),c.a.createElement(z,{color:i}),c.a.createElement("h3",null,"Tints of ",i),c.a.createElement(I,{color:i}))}var L=Object(i.a)({basename:"/colors"});n.a.render(c.a.createElement(s.a,{store:v},c.a.createElement(l.b,null,c.a.createElement(U,{path:p("/info/:color")}),c.a.createElement(y,{path:p("/")}))),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.0f548742.chunk.js.map