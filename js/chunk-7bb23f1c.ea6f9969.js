(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7bb23f1c"],{"386b":function(e,n,t){var r=t("5ca1"),i=t("79e5"),a=t("be13"),o=/"/g,s=function(e,n,t,r){var i=String(a(e)),s="<"+n;return""!==t&&(s+=" "+t+'="'+String(r).replace(o,"&quot;")+'"'),s+">"+i+"</"+n+">"};e.exports=function(e,n){var t={};t[e]=n(s),r(r.P+r.F*i((function(){var n=""[e]('"');return n!==n.toLowerCase()||n.split('"').length>3})),"String",t)}},"3f41":function(e,n,t){n=e.exports=t("2350")(!1),n.push([e.i,".container[data-v-1eb5ff27]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}",""])},8449:function(e,n,t){"use strict";t("386b")("anchor",(function(e){return function(n){return e(this,"a","name",n)}}))},"9c4c":function(e,n,t){"use strict";t.r(n);var r=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{ref:"container",staticClass:"container"})},i=[],a=(t("8449"),t("22a2")),o={name:"pixi-init",mounted:function(){this.hello(),this.createCanvas()},methods:{hello:function(){var e="WebGL";a["j"].isWebGLSupported()||(e="canvas"),a["j"].sayHello(e)},createCanvas:function(e){var n=a["a"],t=a["e"].shared,r=a["e"].shared.resources,i=(a["i"],a["h"]),o=new n({width:256,height:256,antialiasing:!0,transparent:!1,resolution:1});this.$refs.container.appendChild(o.view),o.renderer.view.style.border="1px dashed black",o.renderer.resize(512,512),o.renderer.backgroundColor=0,t.add(["./img/pixi/cat.png","./img/pixi/blob.png","./img/pixi/explorer.png"]).on("progress",this.loadProgressHandler).load((function(){console.log("setup");var e=new i(r["./img/pixi/cat.png"].texture),n=new i(r["./img/pixi/blob.png"].texture),a=new i(r["./img/pixi/explorer.png"].texture);o.stage.addChild(e),o.stage.addChild(n),o.stage.addChild(a),n.position.set(82,82),a.position.set(128,128),e.scale.set(1.2,1.2),e.rotation=.5,e.anchor.set(0,0),t.reset()}))},loadProgressHandler:function(e,n){console.log("loading: "+n.url),console.log("progress: "+e.progress+"%")}}},s=o,c=(t("d215"),t("2877")),l=Object(c["a"])(s,r,i,!1,null,"1eb5ff27",null);n["default"]=l.exports},d215:function(e,n,t){"use strict";t("eeca")},eeca:function(e,n,t){var r=t("3f41");r.__esModule&&(r=r.default),"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var i=t("499e").default;i("0b0258ea",r,!0,{sourceMap:!1,shadowMode:!1})}}]);