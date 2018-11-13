var App=function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var r={};return t.m=e,t.c=r,t.i=function(e){return e},t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=1)}([function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),i=r(2),u=function(e){return e&&e.__esModule?e:{default:e}}(i),a=function(){function e(){n(this,e),this.storageKey="server",this.defaultServer="Phoenix",this.serverElement=$(".server-select-box")}return o(e,[{key:"setServerList",value:function(){var e=this;u.default.getServerList(function(t){t.forEach(function(t,r){var n=[];t.forEach(function(e){n.push('<option value="'+e+'">'+e+"</option>")}),e.serverElement.append('<optgroup label="'+r+'">'+n.join("")+"</optgroup>")}),e.setUserServer()})}},{key:"setUserServer",value:function(){var e=localStorage.getItem(this.storageKey);e=e||this.defaultServer,this.serverElement.val(e)}},{key:"watchForSelection",value:function(){var e=this;this.serverElement.on("change",function(t){var r=$(t.currentTarget).val();localStorage.setItem(e.storageKey,r),location.reload()})}}]),e}();t.default=new a},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}var o=r(3),i=(n(o),r(0)),u=n(i);u.default.setServerList(),u.default.watchForSelection()},function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),i=function(){function e(){n(this,e)}return o(e,[{key:"get",value:function(e,t){fetch("https://xivapi.com"+e,{mode:"cors"}).then(function(e){return e.json()}).then(function(e){return t(e)})}},{key:"search",value:function(e,t){var r={indexes:"item",filters:"ItemSearchCategory.ID>=1",columns:"ID,Icon,Name,Rarity,ItemSearchCategory.Name,ItemKind.Name",string:e.trim()},n=Object.keys(r).map(function(e){return esc(e)+"="+encodeURIComponent(r[e])}).join("&");this.get("/search?"+n,t)}},{key:"getItem",value:function(e,t){this.get("/Item/"+e,t)}},{key:"getItemPrices",value:function(e,t,r){this.get("/market/"+t+"/items/"+e,r)}},{key:"getItemPriceHistory",value:function(e,t,r){this.get("/market/"+t+"/items/"+e+"/history",r)}},{key:"getCategoryListings",value:function(e,t,r){this.get("/market/"+t+"/category/"+e,r)}},{key:"getServerList",value:function(e){this.get("/servers/dc",e)}}]),e}();t.default=new i},function(e,t,r){"use strict";/**
 * Object.prototype.forEach() polyfill
 * https://gomakethings.com/looping-through-objects-with-es6/
 * @author Chris Ferdinandi
 * @license MIT
 */
Object.prototype.forEach||Object.defineProperty(Object.prototype,"forEach",{value:function(e,t){if(null===this)throw new TypeError("Not an object");t=t||window;for(var r in this)this.hasOwnProperty(r)&&e.call(t,this[r],r,this)}})}]);