function n(n){return function(r){for(var t=[],e=arguments.length-1;e-- >0;)t[e]=arguments[e+1];var o=0;return n.apply(null,[function(){for(var n=[],t=arguments.length;t--;)n[t]=arguments[t];return r.apply(null,n.concat([o++]))}].concat(t))}}function r(n,t){if(void 0===t)return function(t){return r(n,t)};if(void 0===t.length)return function(n,r){var t={};for(var e in r)n(r[e],e)&&(t[e]=r[e]);return t}(n,t);for(var e=-1,o=0,u=t.length,i=[];++e<u;){var f=t[e];n(f)&&(i[o++]=f)}return i}function t(n,r){if(void 0===r)return function(r){return t(n,r)};for(var e=0;e<r.length;){if(n(r[e]))return!0;e++}return!1}function e(n,r){return void 0===r&&(r=[]),function(){for(var t,o=[],u=arguments.length;u--;)o[u]=arguments[u];return(t=r.concat(o)).length>=n.length?n.apply(void 0,t):e(n,t)}}var o=e(function(n,r,t){var e;return Object.assign({},t,((e={})[n]=r,e))});function u(){for(var n=[],r=arguments.length;r--;)n[r]=arguments[r];return function(){for(var r=[],t=arguments.length;t--;)r[t]=arguments[t];var e=n.slice();if(e.length>0){for(var o=e.pop().apply(void 0,r);e.length>0;)o=e.pop()(o);return o}}}function i(n){var r=typeof n;if(null===n)return"Null";if(void 0===n)return"Undefined";if("boolean"===r)return"Boolean";if("number"===r)return"Number";if("string"===r)return"String";if(Array.isArray(n))return"Array";if(n instanceof RegExp)return"RegExp";var t=n.toString();return t.startsWith("async")?"Async":"[object Promise]"===t?"Promise":t.includes("function")||t.includes("=>")?"Function":"Object"}function f(n,r){if(1===arguments.length)return function(r){return f(n,r)};if(n===r)return!0;var t=i(n);if(t!==i(r))return!1;if("Array"===t){var e=Array.from(n),o=Array.from(r);if(e.toString()!==o.toString())return!1;var u=!0;return e.forEach(function(n,r){u&&(n===o[r]||f(n,o[r])||(u=!1))}),u}if("Object"===t){var c=Object.keys(n);if(c.length!==Object.keys(r).length)return!1;var s=!0;return c.forEach(function(t){if(s){var e=n[t],o=r[t];e===o||f(e,o)||(s=!1)}}),s}return!1}function c(n,r){if(void 0===r)return function(r){return c(n,r)};for(var t=-1,e=!1;++t<r.length&&!e;)f(r[t],n)&&(e=!0);return e}function s(n,r){return 1===arguments.length?function(r){return s(n,r)}:void 0===r||null===r||!0===Number.isNaN(r)?n:r}function p(n,r){return void 0===r?function(r){return p(n,r)}:r.slice(n)}function a(n,r,t){var e=-1,o=n.length;(t=t>o?o:t)<0&&(t+=o),o=r>t?0:t-r>>>0,r>>>=0;for(var u=Array(o);++e<o;)u[e]=n[e+r];return u}function l(n,r){if(void 0===r)return function(r){return l(n,r)};var t=r.length,e=n>t?t:n;return"string"==typeof r?r.slice(t-e):a(r,e=t-e,t)}function v(n,r){if(1===arguments.length)return function(r){return v(n,r)};if(void 0===r)return[];if(void 0===r.length)return function(n,r){var t={};for(var e in r)t[e]=n(r[e],e);return t}(n,r);for(var t=-1,e=r.length,o=Array(e);++t<e;)o[t]=n(r[t]);return o}function d(n,r){return 1===arguments.length?function(r){return d(n,r)}:Object.assign({},n||{},r||{})}function x(n,r){if(1===arguments.length)return function(r){return x(n,r)};if(null!==r&&void 0!==r){for(var t=r,e=0,o="string"==typeof n?n.split("."):n;e<o.length;){if(null===t||void 0===t)return;t=t[o[e]],e++}return t}}var h=e(function(n,r,t){return s(n,x(r,t))});function g(n,r){if(void 0===r)return function(r){return g(n,r)};for(var t=[],e=n;e<r;e++)t.push(e);return t}function y(n,r,t){return void 0===r?function(r,t){return y(n,r,t)}:void 0===t?function(t){return y(n,r,t)}:t.reduce(n,r)}exports.add=function n(r,t){return void 0===t?function(t){return n(r,t)}:r+t},exports.addIndex=n,exports.adjust=function n(r,t,e){return void 0===t?function(t,e){return n(r,t,e)}:void 0===e?function(e){return n(r,t,e)}:e.concat().map(function(n,o){return o===t?r(e[t]):n})},exports.all=function n(t,e){return void 0===e?function(r){return n(t,r)}:r(t,e).length===e.length},exports.allPass=function n(r,e){return 1===arguments.length?function(t){return n(r,t)}:!t(function(n){return!n(e)},r)},exports.always=function(n){return function(){return n}},exports.any=t,exports.anyPass=function n(r,e){return 1===arguments.length?function(t){return n(r,t)}:t(function(n){return n(e)})(r)},exports.append=function n(r,t){if(void 0===t)return function(t){return n(r,t)};if("string"==typeof t)return""+t+r;var e=t.concat();return e.push(r),e},exports.assoc=o,exports.both=function n(r,t){return void 0===t?function(t){return n(r,t)}:function(n){return r(n)&&t(n)}},exports.complement=function(n){return function(r){return!n(r)}},exports.compose=u,exports.concat=function n(r,t){return void 0===t?function(t){return n(r,t)}:"string"==typeof r?""+r+t:r.concat(t)},exports.contains=c,exports.curry=e,exports.dec=function(n){return n-1},exports.defaultTo=s,exports.dissoc=function n(r,t){if(1===arguments.length)return function(t){return n(r,t)};if(null===t||void 0===t)return{};var e={};for(var o in t)e[o]=t[o];return delete e[r],e},exports.divide=function n(r,t){return void 0===t?function(t){return n(r,t)}:r/t},exports.drop=p,exports.dropLast=function n(r,t){return void 0===t?function(t){return n(r,t)}:t.slice(0,-r)},exports.either=function n(r,t){return void 0===t?function(t){return n(r,t)}:function(n){return r(n)||t(n)}},exports.endsWith=function n(r,t){return 1===arguments.length?function(t){return n(r,t)}:f(r,l(r.length,t))},exports.equals=f,exports.F=function(){return!1},exports.filter=r,exports.find=function n(r,t){return void 0===t?function(t){return n(r,t)}:t.find(r)},exports.findIndex=function n(r,t){if(void 0===t)return function(t){return n(r,t)};for(var e=t.length,o=-1;++o<e;)if(r(t[o]))return o;return-1},exports.flatten=function n(r,t){t=void 0===t?[]:t;for(var e=0;e<r.length;e++)Array.isArray(r[e])?n(r[e],t):t.push(r[e]);return t},exports.flip=function(n){for(var r=[],t=arguments.length-1;t-- >0;)r[t]=arguments[t+1];return function(n){return function(){for(var r=[],t=arguments.length;t--;)r[t]=arguments[t];return 1===r.length?function(t){return n(t,r[0])}:2===r.length?n(r[1],r[0]):void 0}}(n)},exports.forEach=function n(r,t){return void 0===t?function(t){return n(r,t)}:(v(r,t),t)},exports.groupBy=function n(r,t){if(void 0===t)return function(t){return n(r,t)};for(var e={},o=0;o<t.length;o++){var u=t[o],i=r(u);e[i]||(e[i]=[]),e[i].push(u)}return e},exports.has=function n(r,t){return void 0===t?function(t){return n(r,t)}:void 0!==t[r]},exports.head=function(n){return"string"==typeof n?n[0]||"":n[0]},exports.identity=function(n){return n},exports.ifElse=function n(r,t,e){return void 0===t?function(t,e){return n(r,t,e)}:void 0===e?function(e){return n(r,t,e)}:function(n){return!0===("boolean"==typeof r?r:r(n))?t(n):e(n)}},exports.inc=function(n){return n+1},exports.includes=function n(r,t){return void 0===t?function(t){return n(r,t)}:t.includes(r)},exports.indexBy=function n(r,t){if(void 0===t)return function(t){return n(r,t)};for(var e={},o=0;o<t.length;o++){var u=t[o];e[r(u)]=u}return e},exports.indexOf=function n(r,t){if(void 0===t)return function(t){return n(r,t)};for(var e=-1,o=t.length;++e<o;)if(t[e]===r)return e;return-1},exports.init=function(n){return"string"==typeof n?n.slice(0,-1):n.length?a(n,0,-1):[]},exports.is=function n(r,t){return 1===arguments.length?function(t){return n(r,t)}:null!=t&&t.constructor===r||t instanceof r},exports.isNil=function(n){return void 0===n||null===n},exports.join=function n(r,t){return void 0===t?function(t){return n(r,t)}:t.join(r)},exports.keys=function(n){return Object.keys(n)},exports.last=function(n){return"string"==typeof n?n[n.length-1]||"":n[n.length-1]},exports.lastIndexOf=function n(r,t){if(void 0===t)return function(t){return n(r,t)};var e=-1;return t.map(function(n,t){f(n,r)&&(e=t)}),e},exports.length=function(n){return n.length},exports.map=v,exports.match=function n(r,t){if(void 0===t)return function(t){return n(r,t)};var e=t.match(r);return null===e?[]:e},exports.merge=d,exports.max=function n(r,t){return 1===arguments.length?function(t){return n(r,t)}:t>r?t:r},exports.maxBy=function n(r,t,e){return 2===arguments.length?function(e){return n(r,t,e)}:1===arguments.length?function(t,e){return n(r,t,e)}:r(e)>r(t)?e:t},exports.min=function n(r,t){return 1===arguments.length?function(t){return n(r,t)}:t<r?t:r},exports.minBy=function n(r,t,e){return 2===arguments.length?function(e){return n(r,t,e)}:1===arguments.length?function(t,e){return n(r,t,e)}:r(e)<r(t)?e:t},exports.modulo=function n(r,t){return void 0===t?function(t){return n(r,t)}:r%t},exports.multiply=function n(r,t){return void 0===t?function(t){return n(r,t)}:r*t},exports.none=function n(r,t){return void 0===t?function(t){return n(r,t)}:0===t.filter(r).length},exports.not=function(n){return!n},exports.nth=function n(r,t){if(void 0===t)return function(t){return n(r,t)};var e=r<0?t.length+r:r;return"[object String]"===Object.prototype.toString.call(t)?t.charAt(e):t[e]},exports.omit=function n(r,t){if(1===arguments.length)return function(t){return n(r,t)};if(null!==t&&void 0!==t){var e="string"==typeof r?r=r.split(","):r,o={};for(var u in t)e.includes(u)||(o[u]=t[u]);return o}},exports.partialCurry=function(n,r){return void 0===r&&(r={}),function(t){return"Async"===i(n)||"Promise"===i(n)?new Promise(function(e,o){n(d(t,r)).then(e).catch(o)}):n(d(t,r))}},exports.path=x,exports.pathOr=h,exports.pick=function n(r,t){if(1===arguments.length)return function(t){return n(r,t)};if(null!==t&&void 0!==t){for(var e="string"==typeof r?r.split(","):r,o={},u=0;u<e.length;)e[u]in t&&(o[e[u]]=t[e[u]]),u++;return o}},exports.pickAll=function n(r,t){if(1===arguments.length)return function(t){return n(r,t)};if(null!==t&&void 0!==t){for(var e="string"==typeof r?r.split(","):r,o={},u=0;u<e.length;)o[e[u]]=e[u]in t?t[e[u]]:void 0,u++;return o}},exports.pipe=function(){for(var n=[],r=arguments.length;r--;)n[r]=arguments[r];return u.apply(void 0,n.reverse())},exports.pluck=function n(r,t){if(void 0===t)return function(t){return n(r,t)};var e=[];return v(function(n){void 0!==n[r]&&e.push(n[r])},t),e},exports.prepend=function n(r,t){if(void 0===t)return function(t){return n(r,t)};if("string"==typeof t)return""+r+t;var e=t.concat();return e.unshift(r),e},exports.prop=function n(r,t){return void 0===t?function(t){return n(r,t)}:t[r]},exports.propEq=function n(r,t,e){return void 0===t?function(t,e){return n(r,t,e)}:void 0===e?function(e){return n(r,t,e)}:e[r]===t},exports.range=g,exports.reduce=y,exports.reject=function n(t,e){return void 0===e?function(r){return n(t,r)}:r(function(n){return!t(n)},e)},exports.repeat=function n(r,t){return void 0===t?function(t){return n(r,t)}:Array(t).fill(r)},exports.replace=function n(r,t,e){return void 0===t?function(t,e){return n(r,t,e)}:void 0===e?function(e){return n(r,t,e)}:e.replace(r,t)},exports.reverse=function(n){return n.concat().reverse()},exports.sort=function n(r,t){return void 0===t?function(t){return n(r,t)}:t.concat().sort(r)},exports.sortBy=function n(r,t){return void 0===t?function(t){return n(r,t)}:t.concat().sort(function(n,t){var e=r(n),o=r(t);return e<o?-1:e>o?1:0})},exports.split=function n(r,t){return void 0===t?function(t){return n(r,t)}:t.split(r)},exports.splitEvery=function n(r,t){if(void 0===t)return function(t){return n(r,t)};for(var e=r>1?r:1,o=[],u=0;u<t.length;)o.push(t.slice(u,u+=e));return o},exports.startsWith=function n(r,t){return void 0===t?function(t){return n(r,t)}:t.startsWith(r)},exports.subtract=function n(r,t){return void 0===t?function(t){return n(r,t)}:r-t},exports.T=function(){return!0},exports.tail=function(n){return p(1,n)},exports.take=function n(r,t){return void 0===t?function(t){return n(r,t)}:"string"==typeof t?t.slice(0,r):a(t,0,r)},exports.takeLast=l,exports.tap=function n(r,t){return void 0===t?function(t){return n(r,t)}:(r(t),t)},exports.test=function n(r,t){return void 0===t?function(t){return n(r,t)}:-1!==t.search(r)},exports.times=function n(r,t){return void 0===t?function(t){return n(r,t)}:v(r,g(0,t))},exports.toLower=function(n){return n.toLowerCase()},exports.toString=function(n){return n.toString()},exports.toUpper=function(n){return n.toUpperCase()},exports.trim=function(n){return n.trim()},exports.type=i,exports.uniq=function(n){for(var r=-1,t=[];++r<n.length;){var e=n[r];c(e,t)||t.push(e)}return t},exports.uniqWith=function n(r,e){if(1===arguments.length)return function(t){return n(r,t)};for(var o=-1,u=[],i=function(){var n=e[o];t(function(t){return r(n,t)},u)||u.push(n)};++o<e.length;)i();return u},exports.update=function n(r,t,e){return void 0===t?function(t,e){return n(r,t,e)}:void 0===e?function(e){return n(r,t,e)}:e.concat().fill(t,r,r+1)},exports.values=function(n){var r=[];for(var t in n)r.push(n[t]);return r},exports.without=function(n,r){return y(function(r,t){return c(t,n)?r:r.concat(t)},[],r)},exports.zip=function r(t,e){return void 0===e?function(n){return r(t,n)}:n(y)(function(n,r,t){return e[t]?n.concat([[r,e[t]]]):n},[],t)},exports.zipObj=function n(r,t){return void 0===t?function(t){return n(r,t)}:r.reduce(function(n,r,e){return n[r]=t[e],n},{})};
//# sourceMappingURL=rambda.js.map
