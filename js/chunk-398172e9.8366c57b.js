(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-398172e9"],{4514:function(t,n,r){"use strict";r("cf2b")},4561:function(t,n,r){"use strict";r.r(n);var a=function(){var t=this,n=t.$createElement;t._self._c;return t._m(0)},e=[function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("div",{staticClass:"function-wrap"},[r("canvas",{attrs:{id:"c1",width:"500",height:"300"}}),r("canvas",{attrs:{id:"c2",width:"300",height:"300"}}),r("canvas",{attrs:{id:"c3",width:"300",height:"300"}})])}];function i(t){var n=this;this.canvas=t;var r=t.width,a=t.height,e=t.getContext("2d"),i=[],o=.01,c=100;this.setConfig=function(t,n){o=t,c=n},this.clear=function(){var t=i.length;if(0!==t){for(var n=0;n<t;n++)clearInterval(i[n]);i=[]}e.clearRect(0,0,r,a)},this.setColor=function(t,n){e.strokeStyle=t,e.fillStyle=n},this.drawLine=function(t,n,i,o){var c=t+r/2,s=i+r/2,d=a/2-n,l=a/2-o;e.moveTo(c,d),e.lineTo(s,l),e.stroke()},this.drawPoint=function(t,n){var i=t+r/2,o=a/2-n;e.fillRect(i,o,1,1)},this.drawCoords=function(){n.drawLine(-r/2,0,r/2,0),n.drawLine(0,a/2,0,-a/2)},this.drawFxNow=function(t,a,e){for(var i=-r/2;i<r/2;i+=o)n.drawPoint(i,t(i*a)*e)},this.drawFx=function(t,a,e){var s=n.drawPoint,d=-r/2,l=setInterval((function(){for(var n=0;n<c;n++)s(d,t(d*a)*e),d+=o;d>r/2&&clearInterval(l)}),1);i.push(l)},this.drawPolarFxNow=function(t,r,a){for(var e=0;e<6*Math.PI;e+=.01){var i=t(e),o=i*Math.cos(e),c=i*Math.sin(e);n.drawPoint(o*r,c*a)}},this.drawPolarFx=function(t,r,a){var e=n.drawPoint,s=0,d=setInterval((function(){for(var n=0;n<c;n++){var i=t(s),l=i*Math.cos(s),u=i*Math.sin(s);e(l*r,u*a),s+=o}s>100*Math.PI&&clearInterval(d)}),1);i.push(d)}}var o={name:"functionMath",mounted:function(){this.draw2X(),this.drawKx(2,-1),this.drawAbsKx(2)},methods:{draw2X:function(){var t=document.getElementById("c1"),n=new i(t);n.setColor("lightgrey","red"),t.onclick=function(){n.clear(),n.drawCoords(),n.drawFx((function(t){return t*t}),1,.005)},t.click()},drawKx:function(t,n){var r=document.getElementById("c2"),a=new i(r);a.setColor("lightgrey","red"),r.onclick=function(){a.clear(),a.drawCoords(),a.drawFx((function(r){return t*r+n}),1,1)},r.click()},drawAbsKx:function(t){var n=document.getElementById("c3"),r=new i(n);r.setColor("lightgrey","red"),n.onclick=function(){r.clear(),r.drawCoords(),r.drawFx((function(n){return Math.abs(t/4*n)}),1,1)},n.click()}}},c=o,s=(r("4514"),r("2877")),d=Object(s["a"])(c,a,e,!1,null,"0d9c89ac",null);n["default"]=d.exports},"7f31":function(t,n,r){n=t.exports=r("2350")(!1),n.push([t.i,".function-wrap[data-v-0d9c89ac]{width:100%;height:100%}",""])},cf2b:function(t,n,r){var a=r("7f31");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var e=r("499e").default;e("a52e154a",a,!0,{sourceMap:!1,shadowMode:!1})}}]);