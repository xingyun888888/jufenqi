webpackJsonp([2],{0:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}var o=n(49),r=i(o),u=n(312),s=i(u);new r["default"]({el:"body",components:{App:s["default"]}})},2:function(t,e){e.f={}.propertyIsEnumerable},3:function(t,e,n){var i=n(12),o=n(6),r=n(22),u=n(4),s=n(8).f;t.exports=function(t){var e=o.Symbol||(o.Symbol=r?{}:i.Symbol||{});"_"==t.charAt(0)||t in e||s(e,t,{value:u.f(t)})}},4:function(t,e,n){e.f=n(13)},9:function(t,e){e.f=Object.getOwnPropertySymbols},10:function(t,e,n){var i=n(70),o=n(63).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return i(t,o)}},15:function(t,e){},16:function(t,e){t.exports=' <div> <div class=weui_cells_title v-if=title :style={color:titleColor} v-html=title></div> <div class=weui_cells :class="{\'vux-no-group-title\':!title}" :style="{marginTop: gutter}"> <slot></slot> </div> </div> '},17:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={props:{title:String,titleColor:String,labelWidth:String,labelAlign:String,labelMarginRight:String,gutter:String}}},18:function(t,e,n){var i,o,r={};n(15),i=n(17),o=n(16),t.exports=i||{},t.exports.__esModule&&(t.exports=t.exports["default"]);var u="function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports;o&&(u.template=o),u.computed||(u.computed={}),Object.keys(r).forEach(function(t){var e=r[t];u.computed[t]=function(){return e}})},19:function(t,e,n){var i,o,r={};n(27),o=n(30),t.exports=i||{},t.exports.__esModule&&(t.exports=t.exports["default"]);var u="function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports;o&&(u.template=o),u.computed||(u.computed={}),Object.keys(r).forEach(function(t){var e=r[t];u.computed[t]=function(){return e}})},24:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}e.__esModule=!0;var o=n(45),r=i(o),u=n(44),s=i(u),l="function"==typeof s["default"]&&"symbol"==typeof r["default"]?function(t){return typeof t}:function(t){return t&&"function"==typeof s["default"]&&t.constructor===s["default"]?"symbol":typeof t};e["default"]="function"==typeof s["default"]&&"symbol"===l(r["default"])?function(t){return"undefined"==typeof t?"undefined":l(t)}:function(t){return t&&"function"==typeof s["default"]&&t.constructor===s["default"]?"symbol":"undefined"==typeof t?"undefined":l(t)}},26:function(t,e,n){var i,o,r={};n(28),i=n(47),o=n(29),t.exports=i||{},t.exports.__esModule&&(t.exports=t.exports["default"]);var u="function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports;o&&(u.template=o),u.computed||(u.computed={}),Object.keys(r).forEach(function(t){var e=r[t];u.computed[t]=function(){return e}})},27:function(t,e){},28:function(t,e){},29:function(t,e){t.exports=" <div class=weui_cell :class=\"{'vux-tap-active': isLink || !!link}\" @click=onClick> <div class=weui_cell_hd> <slot name=icon></slot> </div> <div class=weui_cell_bd :class=\"{'weui_cell_primary':primary==='title'}\"> <p> {{title}} <slot name=after-title></slot> </p> <inline-desc>{{inlineDesc}}</inline-desc> </div> <div class=weui_cell_ft :class=\"{'weui_cell_primary':primary==='content', 'with_arrow': isLink || !!link}\"> {{value}} <slot name=value></slot> <slot></slot> </div> <slot name=child></slot> </div> "},30:function(t,e){t.exports=" <span class=vux-label-desc><slot></slot></span> "},31:function(t,e,n){n(40),n(39),n(41),n(42),t.exports=n(6).Symbol},32:function(t,e,n){n(72),n(73),t.exports=n(4).f("iterator")},33:function(t,e,n){var i=n(5),o=n(9),r=n(2);t.exports=function(t){var e=i(t),n=o.f;if(n)for(var u,s=n(t),l=r.f,a=0;s.length>a;)l.call(t,u=s[a++])&&e.push(u);return e}},34:function(t,e,n){var i=n(62);t.exports=Array.isArray||function(t){return"Array"==i(t)}},35:function(t,e,n){var i=n(5),o=n(1);t.exports=function(t,e){for(var n,r=o(t),u=i(r),s=u.length,l=0;s>l;)if(r[n=u[l++]]===e)return n}},36:function(t,e,n){var i=n(21)("meta"),o=n(61),r=n(7),u=n(8).f,s=0,l=Object.isExtensible||function(){return!0},a=!n(11)(function(){return l(Object.preventExtensions({}))}),c=function(t){u(t,i,{value:{i:"O"+ ++s,w:{}}})},f=function(t,e){if(!o(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!r(t,i)){if(!l(t))return"F";if(!e)return"E";c(t)}return t[i].i},d=function(t,e){if(!r(t,i)){if(!l(t))return!0;if(!e)return!1;c(t)}return t[i].w},p=function(t){return a&&h.NEED&&l(t)&&!r(t,i)&&c(t),t},h=t.exports={KEY:i,NEED:!1,fastKey:f,getWeak:d,onFreeze:p}},37:function(t,e,n){var i=n(2),o=n(20),r=n(1),u=n(23),s=n(7),l=n(68),a=Object.getOwnPropertyDescriptor;e.f=n(14)?a:function(t,e){if(t=r(t),e=u(e,!0),l)try{return a(t,e)}catch(n){}if(s(t,e))return o(!i.f.call(t,e),t[e])}},38:function(t,e,n){var i=n(1),o=n(10).f,r={}.toString,u="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],s=function(t){try{return o(t)}catch(e){return u.slice()}};t.exports.f=function(t){return u&&"[object Window]"==r.call(t)?s(t):o(i(t))}},39:function(t,e){},40:function(t,e,n){"use strict";var i=n(12),o=n(7),r=n(14),u=n(51),s=n(71),l=n(36).KEY,a=n(11),c=n(65),f=n(64),d=n(21),p=n(13),h=n(4),v=n(3),y=n(35),x=n(33),m=n(34),b=n(60),_=n(1),g=n(23),w=n(20),S=n(69),F=n(38),E=n(37),O=n(8),j=n(5),A=E.f,M=O.f,P=F.f,$=i.Symbol,N=i.JSON,k=N&&N.stringify,D="prototype",q=p("_hidden"),C=p("toPrimitive"),B={}.propertyIsEnumerable,L=c("symbol-registry"),W=c("symbols"),R=c("op-symbols"),T=Object[D],J="function"==typeof $,U=i.QObject,z=!U||!U[D]||!U[D].findChild,V=r&&a(function(){return 7!=S(M({},"a",{get:function(){return M(this,"a",{value:7}).a}})).a})?function(t,e,n){var i=A(T,e);i&&delete T[e],M(t,e,n),i&&t!==T&&M(T,e,i)}:M,Y=function(t){var e=W[t]=S($[D]);return e._k=t,e},I=J&&"symbol"==typeof $.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof $},K=function(t,e,n){return t===T&&K(R,e,n),b(t),e=g(e,!0),b(n),o(W,e)?(n.enumerable?(o(t,q)&&t[q][e]&&(t[q][e]=!1),n=S(n,{enumerable:w(0,!1)})):(o(t,q)||M(t,q,w(1,{})),t[q][e]=!0),V(t,e,n)):M(t,e,n)},G=function(t,e){b(t);for(var n,i=x(e=_(e)),o=0,r=i.length;r>o;)K(t,n=i[o++],e[n]);return t},Z=function(t,e){return void 0===e?S(t):G(S(t),e)},H=function(t){var e=B.call(this,t=g(t,!0));return!(this===T&&o(W,t)&&!o(R,t))&&(!(e||!o(this,t)||!o(W,t)||o(this,q)&&this[q][t])||e)},Q=function(t,e){if(t=_(t),e=g(e,!0),t!==T||!o(W,e)||o(R,e)){var n=A(t,e);return!n||!o(W,e)||o(t,q)&&t[q][e]||(n.enumerable=!0),n}},X=function(t){for(var e,n=P(_(t)),i=[],r=0;n.length>r;)o(W,e=n[r++])||e==q||e==l||i.push(e);return i},tt=function(t){for(var e,n=t===T,i=P(n?R:_(t)),r=[],u=0;i.length>u;)!o(W,e=i[u++])||n&&!o(T,e)||r.push(W[e]);return r};J||($=function(){if(this instanceof $)throw TypeError("Symbol is not a constructor!");var t=d(arguments.length>0?arguments[0]:void 0),e=function(n){this===T&&e.call(R,n),o(this,q)&&o(this[q],t)&&(this[q][t]=!1),V(this,t,w(1,n))};return r&&z&&V(T,t,{configurable:!0,set:e}),Y(t)},s($[D],"toString",function(){return this._k}),E.f=Q,O.f=K,n(10).f=F.f=X,n(2).f=H,n(9).f=tt,r&&!n(22)&&s(T,"propertyIsEnumerable",H,!0),h.f=function(t){return Y(p(t))}),u(u.G+u.W+u.F*!J,{Symbol:$});for(var et="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),nt=0;et.length>nt;)p(et[nt++]);for(var et=j(p.store),nt=0;et.length>nt;)v(et[nt++]);u(u.S+u.F*!J,"Symbol",{"for":function(t){return o(L,t+="")?L[t]:L[t]=$(t)},keyFor:function(t){if(I(t))return y(L,t);throw TypeError(t+" is not a symbol!")},useSetter:function(){z=!0},useSimple:function(){z=!1}}),u(u.S+u.F*!J,"Object",{create:Z,defineProperty:K,defineProperties:G,getOwnPropertyDescriptor:Q,getOwnPropertyNames:X,getOwnPropertySymbols:tt}),N&&u(u.S+u.F*(!J||a(function(){var t=$();return"[null]"!=k([t])||"{}"!=k({a:t})||"{}"!=k(Object(t))})),"JSON",{stringify:function(t){if(void 0!==t&&!I(t)){for(var e,n,i=[t],o=1;arguments.length>o;)i.push(arguments[o++]);return e=i[1],"function"==typeof e&&(n=e),!n&&m(e)||(e=function(t,e){if(n&&(e=n.call(this,t,e)),!I(e))return e}),i[1]=e,k.apply(N,i)}}}),$[D][C]||n(57)($[D],C,$[D].valueOf),f($,"Symbol"),f(Math,"Math",!0),f(i.JSON,"JSON",!0)},41:function(t,e,n){n(3)("asyncIterator")},42:function(t,e,n){n(3)("observable")},43:function(t,e){"use strict";function n(t){if("string"!=typeof t)throw new TypeError("This library (validator.js) validates strings only")}Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=n,t.exports=e["default"]},44:function(t,e,n){t.exports={"default":n(31),__esModule:!0}},45:function(t,e,n){t.exports={"default":n(32),__esModule:!0}},46:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}function o(t,e){if(!/^javas/.test(t)&&t){var n="object"===("undefined"==typeof t?"undefined":(0,s["default"])(t))||e&&"string"==typeof t&&!/http/.test(t);n?e.go(t):window.location.href=t}}function r(t,e){return!e||e._history||"string"!=typeof t||/http/.test(t)?t&&"object"!==("undefined"==typeof t?"undefined":(0,s["default"])(t))?t:"javascript:void(0);":"#!"+t}Object.defineProperty(e,"__esModule",{value:!0});var u=n(24),s=i(u);e.go=o,e.getUrl=r},47:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(19),r=i(o),u=n(46);e["default"]={components:{InlineDesc:r["default"]},props:{title:String,value:[String,Number],isLink:Boolean,inlineDesc:String,primary:{type:String,"default":"title"},link:{type:[String,Object]}},methods:{onClick:function(){(0,u.go)(this.link,this.$router)}}}},48:function(t,e){},50:function(t,e){t.exports=" <button class=weui_btn :class=classes :disabled=disabled> {{text}}<slot></slot> </button> "},52:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={props:{type:{"default":"default"},disabled:Boolean,mini:Boolean,plain:Boolean,text:String},computed:{classes:function(){return[{weui_btn_disabled:this.disabled,weui_btn_mini:this.mini},"weui_btn_"+this.type,this.plain?"weui_btn_plain_"+this.type:""]}}}},53:function(t,e,n){var i,o,r={};n(48),i=n(52),o=n(50),t.exports=i||{},t.exports.__esModule&&(t.exports=t.exports["default"]);var u="function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports;o&&(u.template=o),u.computed||(u.computed={}),Object.keys(r).forEach(function(t){var e=r[t];u.computed[t]=function(){return e}})},54:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAjRJREFUOBGdlM1PE0EYxp8ulbVF22L8qLY1iBAgYOLRi8SAUTkYLx6MBzWQyEES/xYTEDGRD6Ne9KAHNVESNfEPMLECWtBqsUqMpR9Q2G4p7jNhN+yy21bey2Te55lf3pl5Z1ypVGodG/HmfRLPJ38gFPSi93Ir/L5aXap6dOnAV2/n8exl3Fh4YJ8HN68f+2+oRMLkOzOMuYU/K7h19yMy2QKnVYe0nC9q20zYLtgOVIp9zaBQWLMFMkno4L0o1o2TdrQKQVLVUnmHpiZ/55HOKBV9NEiRUF1FY0tTAPUBuaJPAIP7vTgc3uVoPtrgQ/+VNkfdKohbPt6x15oX8+ZGP270tkOWa2x1u6SbyZMngnit9eHKalF4znVFQFhrc8BujcgtphUE/DJcLrNFAL0eN852hfH0RVyoPAYnmKKsYeT+ND7PpnFIe1EDfR2m5hdbJuV0ZxhNR3wC+PBJDGwnaxA2NPpJwKjx9q3NbwBZ+rVLLfDtroVaLGF4bApz8ayJOTy+NWdtfgPIlWyNgb52eHa6oWjNflur5nsiJ6Cs2K5qipuhJiDF0ME69F9tww63hNWNLf5ayOPL3NYjoF8PQkcfzcD4bXRBHwm4MzEFnhsvbU+9jPnksi7bjh7N5wjkisTPJYxMTGOxymd38XxjeSChuSUVDx7HEJ1JceoYF3oacOZUuDJQJ3yI/gV/9Nlv5rPkBfZ0R9DdGRLWslvWYZtHVsyfJ5tTUdL+ND4AXqAe/wBBb/GKR+gCPAAAAABJRU5ErkJggg=="},55:function(t,e){},56:function(t,e,n){t.exports=' <div class=tel-line _v-7102e57a=""> <div class=tel _v-7102e57a=""><img src='+n(54)+' width=12px height=12px _v-7102e57a="">客服中心</div> </div> '},59:function(t,e,n){var i,o,r={};n(55),o=n(56),t.exports=i||{},t.exports.__esModule&&(t.exports=t.exports["default"]);var u="function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports;o&&(u.template=o),u.computed||(u.computed={}),Object.keys(r).forEach(function(t){var e=r[t];u.computed[t]=function(){return e}})},66:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(67),r=i(o);e["default"]={mixins:[r["default"]],props:{required:{type:Boolean,"default":!0}},created:function(){this.handleChangeEvent=!1},computed:{dirty:function(){return!this.prisine},invalid:function(){return!this.valid}},methods:{setTouched:function(){this.touched=!0}},watch:{value:function(t){this.prisine===!0&&(this.prisine=!1),this.handleChangeEvent||this.$emit("on-change",t)}},data:function(){return{errors:{},prisine:!0,touched:!1,valid:!0}}}},67:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={created:function(){this.uuid=Math.random().toString(36).substring(3,8)}}},75:function(t,e){"use strict";function n(){var t=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],e=arguments[1];for(var n in e)"undefined"==typeof t[n]&&(t[n]=e[n]);return t}Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=n,t.exports=e["default"]},76:function(t,e){},77:function(t,e){t.exports=' <div class=apply-header _v-313bbcd2=""> <div class=apply-step _v-313bbcd2=""> <div class=step v-bind:class="{\'active\':thisStep>=1}" _v-313bbcd2="">验证身份 <div class=bottom-line _v-313bbcd2=""></div> </div> <div class=step style="margin:0 10px" v-bind:class="{\'active\':thisStep>=2}" _v-313bbcd2="">装修信息 <div class=bottom-line _v-313bbcd2=""></div> </div> <div class=step v-bind:class="{\'active\':thisStep>=3}" _v-313bbcd2="">个人信息 <div class=bottom-line _v-313bbcd2=""></div> </div> </div> </div> '},78:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={components:{},props:{step:{type:Number,"default":1}},computed:{thisStep:function(t){return this.step}}}},79:function(t,e,n){var i,o,r={};n(76),i=n(78),o=n(77),t.exports=i||{},t.exports.__esModule&&(t.exports=t.exports["default"]);var u="function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports;o&&(u.template=o),u.computed||(u.computed={}),Object.keys(r).forEach(function(t){var e=r[t];u.computed[t]=function(){return e}})},80:function(t,e,n){t.exports={"default":n(85),__esModule:!0}},81:function(t,e){},82:function(t,e){},83:function(t,e){t.exports=" <i class={{className}}></i> "},84:function(t,e){t.exports=' <div class=weui_cell :class="{\'weui_cell_warn\': !valid}"> <div class=weui_cell_hd> <label class=weui_label :style="{width: $parent.labelWidth || (labelWidth + \'em\'), textAlign: $parent.labelAlign, marginRight: $parent.labelMarginRight}" v-if=title>{{title}}</label> <inline-desc v-if=inlineDesc>{{inlineDesc}}</inline-desc> </div> <div class="weui_cell_bd weui_cell_primary"> <input class=weui_input :autocomplete=autocomplete :autocapitalize=autocapitalize :autocorrect=autocorrect :spellcheck=spellcheck :style=inputStyle :type=type :name=name :pattern=pattern :placeholder=placeholder :readonly=readonly v-model=value @blur=blur v-el:input/> </div> <div class=weui_cell_ft> <icon type=clear v-show="showClear && value && !readonly" @click=clear></icon> <icon type=warn title="{{!valid ? firstError : \'\'}}" v-show="!equalWith && ((touched && !valid && firstError) || (forceShowError && !valid && firstError))"></icon> <icon type=warn v-show="hasLengthEqual && dirty && equalWith && !valid"></icon> <icon type=success v-show="equalWith && equalWith===value && valid"></icon> <slot name=right><slot> </slot></slot></div> </div> '},85:function(t,e,n){n(87),t.exports=n(6).Object.keys},86:function(t,e,n){var i=n(51),o=n(6),r=n(11);t.exports=function(t,e){var n=(o.Object||{})[t]||Object[t],u={};u[t]=e(n),i(i.S+i.F*r(function(){n(1)}),"Object",u)}},87:function(t,e,n){var i=n(96),o=n(5);n(86)("keys",function(){return function(t){return o(i(t))}})},88:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}function o(t,e){(0,s["default"])(t);var n=void 0,i=void 0;"object"===("undefined"==typeof e?"undefined":r(e))?(n=e.min||0,i=e.max):(n=arguments[1],i=arguments[2]);var o=encodeURI(t).split(/%..|./).length-1;return o>=n&&("undefined"==typeof i||o<=i)}Object.defineProperty(e,"__esModule",{value:!0});var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol?"symbol":typeof t};e["default"]=o;var u=n(43),s=i(u);t.exports=e["default"]},89:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}function o(t,e){if((0,u["default"])(t),e=(0,l["default"])(e,p),e.allow_display_name){var n=t.match(h);n&&(t=n[1])}var i=t.split("@"),o=i.pop(),r=i.join("@"),s=o.toLowerCase();if("gmail.com"!==s&&"googlemail.com"!==s||(r=r.replace(/\./g,"").toLowerCase()),!(0,c["default"])(r,{max:64})||!(0,c["default"])(o,{max:256}))return!1;if(!(0,d["default"])(o,{require_tld:e.require_tld}))return!1;if('"'===r[0])return r=r.slice(1,r.length-1),e.allow_utf8_local_part?m.test(r):y.test(r);for(var a=e.allow_utf8_local_part?x:v,f=r.split("."),b=0;b<f.length;b++)if(!a.test(f[b]))return!1;return!0}Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=o;var r=n(43),u=i(r),s=n(75),l=i(s),a=n(88),c=i(a),f=n(90),d=i(f),p={allow_display_name:!1,allow_utf8_local_part:!0,require_tld:!0},h=/^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\.\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\.\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF\s]*<(.+)>$/i,v=/^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~]+$/i,y=/^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f]))*$/i,x=/^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+$/i,m=/^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*$/i;t.exports=e["default"]},90:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}function o(t,e){(0,u["default"])(t),e=(0,l["default"])(e,a),e.allow_trailing_dot&&"."===t[t.length-1]&&(t=t.substring(0,t.length-1));var n=t.split(".");if(e.require_tld){var i=n.pop();if(!n.length||!/^([a-z\u00a1-\uffff]{2,}|xn[a-z0-9-]{2,})$/i.test(i))return!1}for(var o,r=0;r<n.length;r++){if(o=n[r],e.allow_underscores&&(o=o.replace(/_/g,"")),!/^[a-z\u00a1-\uffff0-9-]+$/i.test(o))return!1;if(/[\uff01-\uff5e]/.test(o))return!1;if("-"===o[0]||"-"===o[o.length-1])return!1}return!0}Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=o;var r=n(43),u=i(r),s=n(75),l=i(s),a={require_tld:!0,allow_underscores:!1,allow_trailing_dot:!1};t.exports=e["default"]},91:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}function o(t,e){return(0,u["default"])(t),e in s&&s[e].test(t)}Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=o;var r=n(43),u=i(r),s={"ar-DZ":/^(\+?213|0)(5|6|7)\d{8}$/,"ar-SY":/^(!?(\+?963)|0)?9\d{8}$/,"ar-SA":/^(!?(\+?966)|0)?5\d{8}$/,"en-US":/^(\+?1)?[2-9]\d{2}[2-9](?!11)\d{6}$/,"cs-CZ":/^(\+?420)? ?[1-9][0-9]{2} ?[0-9]{3} ?[0-9]{3}$/,"de-DE":/^(\+?49[ \.\-])?([\(]{1}[0-9]{1,6}[\)])?([0-9 \.\-\/]{3,20})((x|ext|extension)[ ]?[0-9]{1,4})?$/,"da-DK":/^(\+?45)?(\d{8})$/,"el-GR":/^(\+?30)?(69\d{8})$/,"en-AU":/^(\+?61|0)4\d{8}$/,"en-GB":/^(\+?44|0)7\d{9}$/,"en-HK":/^(\+?852\-?)?[569]\d{3}\-?\d{4}$/,"en-IN":/^(\+?91|0)?[789]\d{9}$/,"en-NZ":/^(\+?64|0)2\d{7,9}$/,"en-ZA":/^(\+?27|0)\d{9}$/,"en-ZM":/^(\+?26)?09[567]\d{7}$/,"es-ES":/^(\+?34)?(6\d{1}|7[1234])\d{7}$/,"fi-FI":/^(\+?358|0)\s?(4(0|1|2|4|5)?|50)\s?(\d\s?){4,8}\d$/,"fr-FR":/^(\+?33|0)[67]\d{8}$/,"hu-HU":/^(\+?36)(20|30|70)\d{7}$/,"it-IT":/^(\+?39)?\s?3\d{2} ?\d{6,7}$/,"ja-JP":/^(\+?81|0)\d{1,4}[ \-]?\d{1,4}[ \-]?\d{4}$/,"ms-MY":/^(\+?6?01){1}(([145]{1}(\-|\s)?\d{7,8})|([236789]{1}(\s|\-)?\d{7}))$/,"nb-NO":/^(\+?47)?[49]\d{7}$/,"nl-BE":/^(\+?32|0)4?\d{8}$/,"nn-NO":/^(\+?47)?[49]\d{7}$/,"pl-PL":/^(\+?48)? ?[5-8]\d ?\d{3} ?\d{2} ?\d{2}$/,"pt-BR":/^(\+?55|0)\-?[1-9]{2}\-?[2-9]{1}\d{3,4}\-?\d{4}$/,"pt-PT":/^(\+?351)?9[1236]\d{7}$/,"ru-RU":/^(\+?7|8)?9\d{9}$/,"sr-RS":/^(\+3816|06)[- \d]{5,9}$/,"tr-TR":/^(\+?90|0)?5\d{9}$/,"vi-VN":/^(\+?84|0)?((1(2([0-9])|6([2-9])|88|99))|(9((?!5)[0-9])))([0-9]{7})$/,"zh-CN":/^(\+?0?86\-?)?1[345789]\d{9}$/,"zh-TW":/^(\+?886\-?|0)?9\d{8}$/};s["en-CA"]=s["en-US"],s["fr-BE"]=s["nl-BE"],t.exports=e["default"]},92:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={props:{type:String},computed:{className:function(){return"weui_icon weui_icon_"+this.type}}}},93:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(80),r=i(o),u=n(66),s=i(u),l=n(94),a=i(l),c=n(19),f=i(c),d=n(89),p=i(d),h=n(91),v=i(h),y={email:{fn:p["default"],msg:"邮箱格式"},"china-mobile":{fn:function(t){return(0,v["default"])(t,"zh-CN")},msg:"手机号码"},"china-name":{fn:function(t){return t.length>=2&&t.length<=6},msg:"中文姓名"}};e["default"]={ready:function(){this.title||this.placeholder||this.value||console.warn("no title and no placeholder?"),this.equalWith&&(this.showClear=!1),this.required&&!this.value&&(this.valid=!1),"email"===this.isType&&(this.type="email")},mixins:[s["default"]],components:{Icon:a["default"],InlineDesc:f["default"]},props:{title:{type:String,"default":""},placeholder:String,value:{type:String,"default":"",twoWay:!0},name:String,readonly:{type:Boolean,"default":!1},keyboard:String,inlineDesc:String,isType:String,min:Number,max:Number,showClear:{type:Boolean,"default":!0},equalWith:String,type:{type:String,"default":"text"},textAlign:String,autocomplete:"off",autocapitalize:"off",autocorrect:"off",spellcheck:"false"},computed:{pattern:function(){if("number"===this.keyboard||"china-mobile"===this.isType)return"[0-9]*"},labelWidth:function(){return this.title.replace(/[^x00-xff]/g,"00").length/2+1},hasErrors:function(){return(0,r["default"])(this.errors).length>0},inputStyle:function(){if(this.textAlign)return{textAlign:this.textAlign}}},methods:{clear:function(){this.value="",this.focus=!0},blur:function(){this.setTouched(),this.validate()},getError:function(){var t=(0,r["default"])(this.errors)[0];this.firstError=this.errors[t]},validate:function(){if(this.equalWith)return void this.validateEqual();if(this.errors={},!this.value&&!this.required)return void(this.valid=!0);if(!this.value&&this.required)return this.valid=!1,void(this.errors.required="必填哦");var t=y[this.isType];if(t){if(this.valid=t.fn(this.value),!this.valid)return void(this.errors.format=t.msg+"格式不对哦~");delete this.errors.format}if(this.min){if(this.value.length<this.min)return this.errors.min=this.$interpolate("最少应该输入{{min}}个字符哦"),void(this.valid=!1);delete this.errors.min}if(this.max){if(this.value.length>this.max)return this.errors.max=this.$interpolate("最多可以输入{{max}}个字符哦"),this.valid=!1,void(this.forceShowError=!0);this.forceShowError=!1,delete this.errors.max}this.valid=!0},validateEqual:function(){var t=this.dirty||this.value.length>=this.equalWith.length;return t&&this.value!==this.equalWith?(this.valid=!1,void(this.errors.equal="输入不一致")):(this.valid=!0,void delete this.errors.equal)}},data:function x(){var x={firstError:"",forceShowError:!1,hasLengthEqual:!1,focus:!1};return x},watch:{focus:function(t){t&&this.$els.input.focus()},valid:function(){this.getError()},value:function(t){this.equalWith?(t.length===this.equalWith.length&&(this.hasLengthEqual=!0),this.validateEqual()):this.validate()}}}},94:function(t,e,n){var i,o,r={};n(81),i=n(92),o=n(83),t.exports=i||{},t.exports.__esModule&&(t.exports=t.exports["default"]);var u="function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports;o&&(u.template=o),u.computed||(u.computed={}),Object.keys(r).forEach(function(t){var e=r[t];u.computed[t]=function(){return e}})},95:function(t,e,n){var i,o,r={};n(82),i=n(93),o=n(84),t.exports=i||{},t.exports.__esModule&&(t.exports=t.exports["default"]);var u="function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports;o&&(u.template=o),u.computed||(u.computed={}),Object.keys(r).forEach(function(t){var e=r[t];u.computed[t]=function(){return e}})},180:function(t,e){},211:function(t,e){t.exports=' <j-apply-process :step=1> </j-apply-process> <group title=身份信息> <x-input title=姓名 name=username placeholder=请输入您的真实姓名 is-type=china-name></x-input> <x-input title=身份证 type=number placeholder=请输入正确的身份证号码></x-input> <x-input title=手机号码 class=weui_vcode name=mobile placeholder=请输入手机号码 keyboard=number is-type=china-mobile> <x-button slot=right mini plain style=color:rgb(89,101,178);border:none>获取验证码</x-button> </x-input> <x-input title=验证码 placeholder=请输入您收到的验证码></x-input> </group> <x-button slot=right style="background-color:rgba(89,101,178,.5);color:#fff;margin:20px 20px;width:calc( 100% - 40px )" onclick="location.href=\'./ins-apply-step2.html\'">下一步</x-button> <j-tel></j-tel> '},287:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(25),r=(i(o),n(79)),u=i(r),s=n(95),l=i(s),a=n(18),c=i(a),f=n(26),d=i(f),p=n(53),h=i(p),v=n(59),y=i(v);e["default"]={data:function(){return{}},components:{JApplyProcess:u["default"],XInput:l["default"],Group:c["default"],Cell:d["default"],XButton:h["default"],JTel:y["default"]},ready:function(){},methods:{}}},312:function(t,e,n){var i,o,r={};n(180),i=n(287),o=n(211),t.exports=i||{},t.exports.__esModule&&(t.exports=t.exports["default"]);var u="function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports;o&&(u.template=o),u.computed||(u.computed={}),Object.keys(r).forEach(function(t){var e=r[t];u.computed[t]=function(){return e}})}});