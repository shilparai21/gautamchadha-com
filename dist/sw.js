!function(a){a.addEventListener("install",function(b){b.waitUntil(caches.open("v1").then(function(a){return a.addAll(["/","/index.html","/css/style.css","/css/style.css.min","/js/main.js"])})),a.addEventListener("fetch",function(a){var b;a.respondWith(caches.match(a.request).catch(function(){return fetch(a.request)}).then(function(c){return b=c,caches.open("v1").then(function(c){c.put(a.request,b)}),b.clone()}).catch(function(){}))})})}(this);