(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ad58bff8"],{"0124":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("canvas",{attrs:{width:"500",height:"500",id:"depthCanvas"}})])}],o=n("b0b4"),u=n("d225"),a=function(){function t(e,n,i){Object(u["a"])(this,t),this.x=e,this.y=n,this.z=i}return Object(o["a"])(t,[{key:"copy",value:function(){return new t(this.x,this.y,this.z)}},{key:"length",value:function(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}},{key:"sqrLength",value:function(){return this.x*this.x+this.y*this.y+this.z*this.z}},{key:"normalize",value:function(){var e=1/this.length();return new t(this.x*e,this.y*e,this.z*e)}},{key:"negate",value:function(){return new t(-this.x,-this.y,-this.z)}},{key:"add",value:function(e){return new t(this.x+e.x,this.y+e.y,this.z+e.z)}},{key:"subtract",value:function(e){return new t(this.x-e.x,this.y-e.y,this.z-e.z)}},{key:"multiply",value:function(e){return new t(this.x*e,this.y*e,this.z*e)}},{key:"divide",value:function(e){var n=1/e;return new t(this.x*n,this.y*n,this.z*n)}},{key:"dot",value:function(t){return this.x*t.x+this.y*t.y+this.z*t.z}},{key:"cross",value:function(e){return new t(-this.z*e.y+this.y*e.z,this.z*e.x-this.x*e.z,-this.y*e.x+this.x*e.y)}}]),t}();a.zero=new a(0,0,0);var c=a,s=function t(){Object(u["a"])(this,t),this.geometry=null,this.distance=0,this.position=c.zero,this.normal=c.zero};s.noHit=new s;var f=function(){function t(e,n){Object(u["a"])(this,t),this.center=e,this.radius=n}return Object(o["a"])(t,[{key:"copy",value:function(){return new t(this.center.copy(),this.radius.copy())}},{key:"initialize",value:function(){this.sqrRadius=this.radius*this.radius}},{key:"intersect",value:function(t){var e=t.origin.subtract(this.center),n=e.sqrLength()-this.sqrRadius,i=t.direction.dot(e);if(i<=0){var r=i*i-n;if(r>=0){var o=new s;return o.geometry=this,o.distance=-i-Math.sqrt(r),o.position=t.getPoint(o.distance),o.normal=o.position.subtract(this.center).normalize(),o}}return s.noHit}}]),t}(),h=f,l=function(){function t(e,n){Object(u["a"])(this,t),this.origin=e,this.direction=n}return Object(o["a"])(t,[{key:"getPoint",value:function(t){return this.origin.add(this.direction.multiply(t))}}]),t}(),d=l,y=function(){function t(e,n,i,r){Object(u["a"])(this,t),this.eye=e,this.front=n,this.refUp=i,this.fov=r}return Object(o["a"])(t,[{key:"initialize",value:function(){this.right=this.front.cross(this.refUp),this.up=this.right.cross(this.front),this.fovScale=2*Math.tan(.5*this.fov*Math.PI/180)}},{key:"generateRay",value:function(t,e){var n=this.right.multiply((t-.5)*this.fovScale),i=this.up.multiply((e-.5)*this.fovScale);return new d(this.eye,this.front.add(n).add(i).normalize())}}]),t}(),p=y,v={name:"ball",mounted:function(){this.renderDepth(document.getElementById("depthCanvas"),new h(new c(0,10,-10),10),new p(new c(0,10,10),new c(0,0,-1),new c(0,1,0),110),18)},methods:{renderDepth:function(t,e,n,i){var r=t.getContext("2d"),o=t.attributes.width.value,u=t.attributes.width.value;r.fillStyle="rgba(0,0,0,1)",r.fillRect(0,0,o,u);var a=r.getImageData(0,0,o,u),c=a.data;e.initialize(),n.initialize();for(var s=0,f=0;f<u;f++)for(var h=1-f/u,l=0;l<o;l++){var d=l/o,y=n.generateRay(d,h),p=e.intersect(y);if(p.geometry){var v=255-Math.min(p.distance/i*255,255);c[s]=v,c[s+1]=v,c[s+2]=v,c[s+3]=255}s+=4}r.putImageData(a,0,0)}}},b=v,w=(n("ff78"),n("2877")),x=Object(w["a"])(b,i,r,!1,null,"7ad97b6a",null);e["default"]=x.exports},"07e3":function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},"1bc3":function(t,e,n){var i=n("f772");t.exports=function(t,e){if(!i(t))return t;var n,r;if(e&&"function"==typeof(n=t.toString)&&!i(r=n.call(t)))return r;if("function"==typeof(n=t.valueOf)&&!i(r=n.call(t)))return r;if(!e&&"function"==typeof(n=t.toString)&&!i(r=n.call(t)))return r;throw TypeError("Can't convert object to primitive value")}},"1ec9":function(t,e,n){var i=n("f772"),r=n("e53d").document,o=i(r)&&i(r.createElement);t.exports=function(t){return o?r.createElement(t):{}}},"294c":function(t,e){t.exports=function(t){try{return!!t()}catch(e){return!0}}},"2fe1":function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,"#depthCanvas[data-v-7ad97b6a]{width:100%;height:100%}",""])},"35e8":function(t,e,n){var i=n("d9f6"),r=n("aebd");t.exports=n("8e60")?function(t,e,n){return i.f(t,e,r(1,n))}:function(t,e,n){return t[e]=n,t}},"454f":function(t,e,n){n("46a7");var i=n("584a").Object;t.exports=function(t,e,n){return i.defineProperty(t,e,n)}},"46a7":function(t,e,n){var i=n("63b6");i(i.S+i.F*!n("8e60"),"Object",{defineProperty:n("d9f6").f})},"584a":function(t,e){var n=t.exports={version:"2.6.12"};"number"==typeof __e&&(__e=n)},"63b6":function(t,e,n){var i=n("e53d"),r=n("584a"),o=n("d864"),u=n("35e8"),a=n("07e3"),c="prototype",s=function(t,e,n){var f,h,l,d=t&s.F,y=t&s.G,p=t&s.S,v=t&s.P,b=t&s.B,w=t&s.W,x=y?r:r[e]||(r[e]={}),g=x[c],m=y?i:p?i[e]:(i[e]||{})[c];for(f in y&&(n=e),n)h=!d&&m&&void 0!==m[f],h&&a(x,f)||(l=h?m[f]:n[f],x[f]=y&&"function"!=typeof m[f]?n[f]:b&&h?o(l,i):w&&m[f]==l?function(t){var e=function(e,n,i){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,i)}return t.apply(this,arguments)};return e[c]=t[c],e}(l):v&&"function"==typeof l?o(Function.call,l):l,v&&((x.virtual||(x.virtual={}))[f]=l,t&s.R&&g&&!g[f]&&u(g,f,l)))};s.F=1,s.G=2,s.S=4,s.P=8,s.B=16,s.W=32,s.U=64,s.R=128,t.exports=s},"794b":function(t,e,n){t.exports=!n("8e60")&&!n("294c")((function(){return 7!=Object.defineProperty(n("1ec9")("div"),"a",{get:function(){return 7}}).a}))},"79aa":function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},"85f2":function(t,e,n){t.exports=n("454f")},"8e60":function(t,e,n){t.exports=!n("294c")((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},aebd:function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},b0b4:function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var i=n("85f2"),r=n.n(i);function o(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),r()(t,i.key,i)}}function u(t,e,n){return e&&o(t.prototype,e),n&&o(t,n),t}},ca83:function(t,e,n){var i=n("2fe1");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var r=n("499e").default;r("3e33c425",i,!0,{sourceMap:!1,shadowMode:!1})},d225:function(t,e,n){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,"a",(function(){return i}))},d864:function(t,e,n){var i=n("79aa");t.exports=function(t,e,n){if(i(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,i){return t.call(e,n,i)};case 3:return function(n,i,r){return t.call(e,n,i,r)}}return function(){return t.apply(e,arguments)}}},d9f6:function(t,e,n){var i=n("e4ae"),r=n("794b"),o=n("1bc3"),u=Object.defineProperty;e.f=n("8e60")?Object.defineProperty:function(t,e,n){if(i(t),e=o(e,!0),i(n),r)try{return u(t,e,n)}catch(a){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},e4ae:function(t,e,n){var i=n("f772");t.exports=function(t){if(!i(t))throw TypeError(t+" is not an object!");return t}},e53d:function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},f772:function(t,e){t.exports=function(t){return"object"===typeof t?null!==t:"function"===typeof t}},ff78:function(t,e,n){"use strict";n("ca83")}}]);