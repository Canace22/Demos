(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4df187a6"],{"07e3":function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},"0eb1":function(t,n,e){"use strict";e.r(n);var r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"leaf-wrap",attrs:{id:"leaf-wrap"}},[e("button",{on:{click:t.add}},[t._v("添加精灵")]),e("button",{on:{click:t.remove}},[t._v("移除精灵")])])},i=[],o=(e("ac6a"),e("8449"),e("d225")),a=e("b0b4"),u=e("22a2"),c=function(){function t(n){var e=n.dom,r=n.bg;Object(o["a"])(this,t),this.dom=e,this.app=new u["a"]({backgroundColor:r||1087931})}return Object(a["a"])(t,[{key:"initView",value:function(){this.dom.appendChild(this.app.view)}},{key:"removeBunny",value:function(){this.app.stage.children.pop(),console.log(this.app.stage.children)}},{key:"createSingleBunny",value:function(t){var n=t.img,e=t.pos,r=t.dragData,i=null,o=null;return o=u["i"].from(n),i=new u["h"](o),i.interactive=!0,i.buttonMode=!0,i.anchor.set(.5),i.x=e.x||this.app.screen.width/2,i.y=e.y||this.app.screen.height/2,-1===r&&i.on("pointerdown",this.onDragStart).on("pointerup",this.onDragEnd).on("pointerupoutside",this.onDragEnd).on("pointermove",this.onDragMove),i.romove=function(){i.visible=!1},this.app.stage.addChild(i),new Promise((function(t){return t(i)}))}},{key:"createBunny",value:function(t){var n=this,e=t.img,r=t.pos,i=t.dragData,o=[],a=[];return e.forEach((function(t,n){a.push(u["i"].from(t)),o.push(new u["h"](a[n]))})),o.forEach((function(t,e){o[e].interactive=!0,o[e].buttonMode=!0,o[e].anchor.set(.5),-1===i.indexOf(e)&&o[e].on("pointerdown",n.onDragStart).on("pointerup",n.onDragEnd).on("pointerupoutside",n.onDragEnd).on("pointermove",n.onDragMove),o[e].x=r[e].x||n.app.screen.width/2,o[e].y=r[e].y||n.app.screen.height/2,n.app.stage.addChild(o[e])})),new Promise((function(t){return t(o)}))}},{key:"onDragStart",value:function(t){this.data=t.data,this.alpha=.5,this.dragging=!0}},{key:"onDragEnd",value:function(){this.alpha=1,this.dragging=!1,this.data=null}},{key:"onDragMove",value:function(){if(this.dragging){var t=this.data.getLocalPosition(this.parent);this.x=t.x,this.y=t.y}}}]),t}(),s={name:"pixi",data:function(){return{cat:null,imgArr:[],dragData:[],pos:[],bunny:[],rotation:0,visible:!0}},mounted:function(){var t=document.getElementById("leaf-wrap");this.cat=new c({dom:t,bg:0}),this.cat.initView()},methods:{addSprite:function(t){var n=this;this.imgArr.push(t.img),this.pos.push(t.pos),this.dragData.push(t.dragData);var e={img:this.imgArr,pos:this.pos,dragData:this.dragData};this.cat.createBunny(e).then((function(t){n.bunny=t,console.log(n.bunny)}))},add:function(){var t=this,n={img:"./img/cat.png",pos:{x:183,y:185},dragData:-1};this.cat.createSingleBunny(n).then((function(n){n.transform.rotation=t.rotation,n.visible=t.visible}))},remove:function(){this.visible=!1}}},f=s,l=(e("62fd"),e("2877")),p=Object(l["a"])(f,r,i,!1,null,"a0d328b8",null);n["default"]=p.exports},"1bc3":function(t,n,e){var r=e("f772");t.exports=function(t,n){if(!r(t))return t;var e,i;if(n&&"function"==typeof(e=t.toString)&&!r(i=e.call(t)))return i;if("function"==typeof(e=t.valueOf)&&!r(i=e.call(t)))return i;if(!n&&"function"==typeof(e=t.toString)&&!r(i=e.call(t)))return i;throw TypeError("Can't convert object to primitive value")}},"1ec9":function(t,n,e){var r=e("f772"),i=e("e53d").document,o=r(i)&&r(i.createElement);t.exports=function(t){return o?i.createElement(t):{}}},"294c":function(t,n){t.exports=function(t){try{return!!t()}catch(n){return!0}}},"35e8":function(t,n,e){var r=e("d9f6"),i=e("aebd");t.exports=e("8e60")?function(t,n,e){return r.f(t,n,i(1,e))}:function(t,n,e){return t[n]=e,t}},"386b":function(t,n,e){var r=e("5ca1"),i=e("79e5"),o=e("be13"),a=/"/g,u=function(t,n,e,r){var i=String(o(t)),u="<"+n;return""!==e&&(u+=" "+e+'="'+String(r).replace(a,"&quot;")+'"'),u+">"+i+"</"+n+">"};t.exports=function(t,n){var e={};e[t]=n(u),r(r.P+r.F*i((function(){var n=""[t]('"');return n!==n.toLowerCase()||n.split('"').length>3})),"String",e)}},4306:function(t,n,e){var r=e("f7db");r.__esModule&&(r=r.default),"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var i=e("499e").default;i("d3e19acc",r,!0,{sourceMap:!1,shadowMode:!1})},"454f":function(t,n,e){e("46a7");var r=e("584a").Object;t.exports=function(t,n,e){return r.defineProperty(t,n,e)}},"46a7":function(t,n,e){var r=e("63b6");r(r.S+r.F*!e("8e60"),"Object",{defineProperty:e("d9f6").f})},"584a":function(t,n){var e=t.exports={version:"2.6.12"};"number"==typeof __e&&(__e=e)},"62fd":function(t,n,e){"use strict";e("4306")},"63b6":function(t,n,e){var r=e("e53d"),i=e("584a"),o=e("d864"),a=e("35e8"),u=e("07e3"),c="prototype",s=function(t,n,e){var f,l,p,d=t&s.F,h=t&s.G,g=t&s.S,v=t&s.P,b=t&s.B,y=t&s.W,m=h?i:i[n]||(i[n]={}),w=m[c],x=h?r:g?r[n]:(r[n]||{})[c];for(f in h&&(e=n),e)l=!d&&x&&void 0!==x[f],l&&u(m,f)||(p=l?x[f]:e[f],m[f]=h&&"function"!=typeof x[f]?e[f]:b&&l?o(p,r):y&&x[f]==p?function(t){var n=function(n,e,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(n);case 2:return new t(n,e)}return new t(n,e,r)}return t.apply(this,arguments)};return n[c]=t[c],n}(p):v&&"function"==typeof p?o(Function.call,p):p,v&&((m.virtual||(m.virtual={}))[f]=p,t&s.R&&w&&!w[f]&&a(w,f,p)))};s.F=1,s.G=2,s.S=4,s.P=8,s.B=16,s.W=32,s.U=64,s.R=128,t.exports=s},"794b":function(t,n,e){t.exports=!e("8e60")&&!e("294c")((function(){return 7!=Object.defineProperty(e("1ec9")("div"),"a",{get:function(){return 7}}).a}))},"79aa":function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},8449:function(t,n,e){"use strict";e("386b")("anchor",(function(t){return function(n){return t(this,"a","name",n)}}))},"85f2":function(t,n,e){t.exports=e("454f")},"8e60":function(t,n,e){t.exports=!e("294c")((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},ac6a:function(t,n,e){for(var r=e("cadf"),i=e("0d58"),o=e("2aba"),a=e("7726"),u=e("32e9"),c=e("84f2"),s=e("2b4c"),f=s("iterator"),l=s("toStringTag"),p=c.Array,d={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},h=i(d),g=0;g<h.length;g++){var v,b=h[g],y=d[b],m=a[b],w=m&&m.prototype;if(w&&(w[f]||u(w,f,p),w[l]||u(w,l,b),c[b]=p,y))for(v in r)w[v]||o(w,v,r[v],!0)}},aebd:function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},b0b4:function(t,n,e){"use strict";e.d(n,"a",(function(){return a}));var r=e("85f2"),i=e.n(r);function o(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),i()(t,r.key,r)}}function a(t,n,e){return n&&o(t.prototype,n),e&&o(t,e),t}},d225:function(t,n,e){"use strict";function r(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}e.d(n,"a",(function(){return r}))},d864:function(t,n,e){var r=e("79aa");t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,i){return t.call(n,e,r,i)}}return function(){return t.apply(n,arguments)}}},d9f6:function(t,n,e){var r=e("e4ae"),i=e("794b"),o=e("1bc3"),a=Object.defineProperty;n.f=e("8e60")?Object.defineProperty:function(t,n,e){if(r(t),n=o(n,!0),r(e),i)try{return a(t,n,e)}catch(u){}if("get"in e||"set"in e)throw TypeError("Accessors not supported!");return"value"in e&&(t[n]=e.value),t}},e4ae:function(t,n,e){var r=e("f772");t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},e53d:function(t,n){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)},f772:function(t,n){t.exports=function(t){return"object"===typeof t?null!==t:"function"===typeof t}},f7db:function(t,n,e){n=t.exports=e("2350")(!1),n.push([t.i,".leaf-wrap[data-v-a0d328b8]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%;height:100%}",""])}}]);