"use strict";!function(a){!function(){function b(a){this.element=a}var c=function(a){return new RegExp("(^| )"+a+"( |$)")},d=function(a,b,c){for(var d=0;d<a.length;d++)b.call(c,a[d])};b.prototype={add:function(){d(arguments,function(a){this.contains(a)||(this.element.className+=this.element.className.length>0?" "+a:a)},this)},remove:function(){d(arguments,function(a){this.element.className=this.element.className.replace(c(a),"")},this)},toggle:function(a){return this.contains(a)?(this.remove(a),!1):(this.add(a),!0)},contains:function(a){return c(a).test(this.element.className)},replace:function(a,b){this.remove(a),this.add(b)}},"classList"in Element.prototype||Object.defineProperty(Element.prototype,"classList",{get:function(){return new b(this)}}),a.DOMTokenList&&null==DOMTokenList.prototype.replace&&(DOMTokenList.prototype.replace=b.prototype.replace)}(),"serviceWorker"in navigator&&navigator.serviceWorker.register("/sw.js",{scope:"/"}).then(function(a){a.installing?console.log("Service worker installing"):a.waiting?console.log("Service worker waiting"):a.active&&console.log("Service worker active")}).catch(function(a){console.error("Registration failed with "+a)});var b=function(){function b(){e.header=document.querySelector(".header"),e.body=document.querySelector("body"),f.headerTop=30,f.classAdded=!1}function c(){a.addEventListener("scroll",d)}function d(){a.scrollY>=f.headerTop?!1===f.classAdded&&(e.body.classList.add(g.fixedClass),f.classAdded=!0):!0===f.classAdded&&(e.body.classList.remove(g.fixedClass),f.classAdded=!1)}var e={},f={},g={fixedClass:"is-fixed"};return{init:b,bind:c}}();a.document.addEventListener("DOMContentLoaded",function(){b.init(),b.bind()})}(window);