(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0ebd0919"],{"1e1d":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{ref:"container",staticClass:"container"})},i=[],r=n("22a2"),s={name:"pixi-data",mounted:function(){this.createCanvas()},methods:{createCanvas:function(e){var t=this,n=r["a"],a=r["e"].shared,i=(r["e"].shared.resources,r["i"],r["j"].TextureCache,r["g"],r["h"]),s=new n({width:512,height:512,antialiasing:!0,transparent:!1,resolution:1});this.$refs.container.appendChild(s.view),s.renderer.backgroundColor=0,a.add({name:"treasure",url:"./img/pixi/treasureHunter.json"}).load((function(e,n){var a,r,o,d,c=n["treasure"].textures;a=new i(c["dungeon.png"]),s.stage.addChild(a),r=new i(c["explorer.png"]),r.x=68,r.y=s.stage.height/2-r.height/2,s.stage.addChild(r),o=new i(c["treasure.png"]),o.x=s.stage.width-o.width-48,o.y=s.stage.height/2-o.height/2,s.stage.addChild(o),d=new i(c["door.png"]),d.position.set(32,0),s.stage.addChild(d);for(var l=10,h=40,u=30,g=0;g<l;g++){var p=new i(c["blob.png"]),f=h*g+u,b=t.randomInt(0,s.stage.height-p.height);p.position.set(f,b),s.stage.addChild(p)}e.reset()}))},randomInt:function(e,t){return Math.floor(Math.random()*(t-e+1))+e}}},o=s,d=(n("717b"),n("2877")),c=Object(d["a"])(o,a,i,!1,null,"44755bee",null);t["default"]=c.exports},"717b":function(e,t,n){"use strict";n("e779")},b72e:function(e,t,n){t=e.exports=n("2350")(!1),t.push([e.i,".container[data-v-44755bee]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}",""])},e779:function(e,t,n){var a=n("b72e");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var i=n("499e").default;i("36083695",a,!0,{sourceMap:!1,shadowMode:!1})}}]);