(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4981389e"],{"33a5":function(n,e,t){"use strict";t.r(e);var r=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{ref:"container"})},a=[],i=(t("8449"),t("22a2")),o={name:"pixiContainer",mounted:function(){var n=this.$refs.container;this.addBunny({el:n,width:200,height:200,bg:16562691,imgSrc:"./img/cat.png",transparent:!1})},methods:{addBunny:function(n){var e=new i["a"]({width:n.width,height:n.height,backgroundColor:n.bg,resolution:window.devicePixelRatio||1,transparent:n.transparent});n.el.appendChild(e.view);var t=new i["c"];setInterval((function(){398905===e.renderer.backgroundColor?e.renderer.backgroundColor=16562691:e.renderer.backgroundColor=398905}),1e3),e.stage.addChild(t);var r=i["i"].from(n.imgSrc),a=new i["h"](r);a.anchor.set(.5),a.x=40,a.y=40*Math.floor(.2),t.addChild(a),t.x=e.screen.width/2,t.y=e.screen.height/2,t.pivot.x=t.width/2,t.pivot.y=t.height/2,e.ticker.add((function(n){t.rotation-=.01*n}))}}},c=o,u=(t("96b2"),t("2877")),d=Object(u["a"])(c,r,a,!1,null,"4623a30c",null);e["default"]=d.exports},"386b":function(n,e,t){var r=t("5ca1"),a=t("79e5"),i=t("be13"),o=/"/g,c=function(n,e,t,r){var a=String(i(n)),c="<"+e;return""!==t&&(c+=" "+t+'="'+String(r).replace(o,"&quot;")+'"'),c+">"+a+"</"+e+">"};n.exports=function(n,e){var t={};t[n]=e(c),r(r.P+r.F*a((function(){var e=""[n]('"');return e!==e.toLowerCase()||e.split('"').length>3})),"String",t)}},"7eca":function(n,e,t){e=n.exports=t("2350")(!1),e.push([n.i,"canvas[data-v-4623a30c]{position:relative}",""])},8449:function(n,e,t){"use strict";t("386b")("anchor",(function(n){return function(e){return n(this,"a","name",e)}}))},"96b2":function(n,e,t){"use strict";t("ca4c")},ca4c:function(n,e,t){var r=t("7eca");r.__esModule&&(r=r.default),"string"===typeof r&&(r=[[n.i,r,""]]),r.locals&&(n.exports=r.locals);var a=t("499e").default;a("a84128fc",r,!0,{sourceMap:!1,shadowMode:!1})}}]);