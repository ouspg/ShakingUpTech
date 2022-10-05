/*! For license information please see editor-css.js.LICENSE.txt */
(()=>{var t={152:function(t){var e;e=function(){return function(){var t={686:function(t,e,n){"use strict";n.d(e,{default:function(){return L}});var r=n(279),o=n.n(r),i=n(370),c=n.n(i),a=n(817),u=n.n(a);function s(t){try{return document.execCommand(t)}catch(t){return!1}}var l=function(t){var e=u()(t);return s("cut"),e},d=function(t,e){var n=function(t){var e="rtl"===document.documentElement.getAttribute("dir"),n=document.createElement("textarea");n.style.fontSize="12pt",n.style.border="0",n.style.padding="0",n.style.margin="0",n.style.position="absolute",n.style[e?"right":"left"]="-9999px";var r=window.pageYOffset||document.documentElement.scrollTop;return n.style.top="".concat(r,"px"),n.setAttribute("readonly",""),n.value=t,n}(t);e.container.appendChild(n);var r=u()(n);return s("copy"),n.remove(),r},f=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{container:document.body},n="";return"string"==typeof t?n=d(t,e):t instanceof HTMLInputElement&&!["text","search","url","tel","password"].includes(null==t?void 0:t.type)?n=d(t.value,e):(n=u()(t),s("copy")),n};function p(t){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},p(t)}function y(t){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},y(t)}function m(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function v(t,e){return v=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},v(t,e)}function h(t,e){return!e||"object"!==y(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function g(t){return g=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},g(t)}function b(t,e){var n="data-clipboard-".concat(t);if(e.hasAttribute(n))return e.getAttribute(n)}var E=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&v(t,e)}(u,t);var e,n,r,o,i,a=(o=u,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=g(o);if(i){var n=g(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return h(this,t)});function u(t,e){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(n=a.call(this)).resolveOptions(e),n.listenClick(t),n}return e=u,n=[{key:"resolveOptions",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action="function"==typeof t.action?t.action:this.defaultAction,this.target="function"==typeof t.target?t.target:this.defaultTarget,this.text="function"==typeof t.text?t.text:this.defaultText,this.container="object"===y(t.container)?t.container:document.body}},{key:"listenClick",value:function(t){var e=this;this.listener=c()(t,"click",(function(t){return e.onClick(t)}))}},{key:"onClick",value:function(t){var e=t.delegateTarget||t.currentTarget,n=this.action(e)||"copy",r=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.action,n=void 0===e?"copy":e,r=t.container,o=t.target,i=t.text;if("copy"!==n&&"cut"!==n)throw new Error('Invalid "action" value, use either "copy" or "cut"');if(void 0!==o){if(!o||"object"!==p(o)||1!==o.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===n&&o.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===n&&(o.hasAttribute("readonly")||o.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes')}return i?f(i,{container:r}):o?"cut"===n?l(o):f(o,{container:r}):void 0}({action:n,container:this.container,target:this.target(e),text:this.text(e)});this.emit(r?"success":"error",{action:n,text:r,trigger:e,clearSelection:function(){e&&e.focus(),window.getSelection().removeAllRanges()}})}},{key:"defaultAction",value:function(t){return b("action",t)}},{key:"defaultTarget",value:function(t){var e=b("target",t);if(e)return document.querySelector(e)}},{key:"defaultText",value:function(t){return b("text",t)}},{key:"destroy",value:function(){this.listener.destroy()}}],r=[{key:"copy",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{container:document.body};return f(t,e)}},{key:"cut",value:function(t){return l(t)}},{key:"isSupported",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["copy","cut"],e="string"==typeof t?[t]:t,n=!!document.queryCommandSupported;return e.forEach((function(t){n=n&&!!document.queryCommandSupported(t)})),n}}],n&&m(e.prototype,n),r&&m(e,r),u}(o()),L=E},828:function(t){if("undefined"!=typeof Element&&!Element.prototype.matches){var e=Element.prototype;e.matches=e.matchesSelector||e.mozMatchesSelector||e.msMatchesSelector||e.oMatchesSelector||e.webkitMatchesSelector}t.exports=function(t,e){for(;t&&9!==t.nodeType;){if("function"==typeof t.matches&&t.matches(e))return t;t=t.parentNode}}},438:function(t,e,n){var r=n(828);function o(t,e,n,r,o){var c=i.apply(this,arguments);return t.addEventListener(n,c,o),{destroy:function(){t.removeEventListener(n,c,o)}}}function i(t,e,n,o){return function(n){n.delegateTarget=r(n.target,e),n.delegateTarget&&o.call(t,n)}}t.exports=function(t,e,n,r,i){return"function"==typeof t.addEventListener?o.apply(null,arguments):"function"==typeof n?o.bind(null,document).apply(null,arguments):("string"==typeof t&&(t=document.querySelectorAll(t)),Array.prototype.map.call(t,(function(t){return o(t,e,n,r,i)})))}},879:function(t,e){e.node=function(t){return void 0!==t&&t instanceof HTMLElement&&1===t.nodeType},e.nodeList=function(t){var n=Object.prototype.toString.call(t);return void 0!==t&&("[object NodeList]"===n||"[object HTMLCollection]"===n)&&"length"in t&&(0===t.length||e.node(t[0]))},e.string=function(t){return"string"==typeof t||t instanceof String},e.fn=function(t){return"[object Function]"===Object.prototype.toString.call(t)}},370:function(t,e,n){var r=n(879),o=n(438);t.exports=function(t,e,n){if(!t&&!e&&!n)throw new Error("Missing required arguments");if(!r.string(e))throw new TypeError("Second argument must be a String");if(!r.fn(n))throw new TypeError("Third argument must be a Function");if(r.node(t))return function(t,e,n){return t.addEventListener(e,n),{destroy:function(){t.removeEventListener(e,n)}}}(t,e,n);if(r.nodeList(t))return function(t,e,n){return Array.prototype.forEach.call(t,(function(t){t.addEventListener(e,n)})),{destroy:function(){Array.prototype.forEach.call(t,(function(t){t.removeEventListener(e,n)}))}}}(t,e,n);if(r.string(t))return function(t,e,n){return o(document.body,t,e,n)}(t,e,n);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}},817:function(t){t.exports=function(t){var e;if("SELECT"===t.nodeName)t.focus(),e=t.value;else if("INPUT"===t.nodeName||"TEXTAREA"===t.nodeName){var n=t.hasAttribute("readonly");n||t.setAttribute("readonly",""),t.select(),t.setSelectionRange(0,t.value.length),n||t.removeAttribute("readonly"),e=t.value}else{t.hasAttribute("contenteditable")&&t.focus();var r=window.getSelection(),o=document.createRange();o.selectNodeContents(t),r.removeAllRanges(),r.addRange(o),e=r.toString()}return e}},279:function(t){function e(){}e.prototype={on:function(t,e,n){var r=this.e||(this.e={});return(r[t]||(r[t]=[])).push({fn:e,ctx:n}),this},once:function(t,e,n){var r=this;function o(){r.off(t,o),e.apply(n,arguments)}return o._=e,this.on(t,o,n)},emit:function(t){for(var e=[].slice.call(arguments,1),n=((this.e||(this.e={}))[t]||[]).slice(),r=0,o=n.length;r<o;r++)n[r].fn.apply(n[r].ctx,e);return this},off:function(t,e){var n=this.e||(this.e={}),r=n[t],o=[];if(r&&e)for(var i=0,c=r.length;i<c;i++)r[i].fn!==e&&r[i].fn._!==e&&o.push(r[i]);return o.length?n[t]=o:delete n[t],this}},t.exports=e,t.exports.TinyEmitter=e}},e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={exports:{}};return t[r](o,o.exports,n),o.exports}return n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,{a:e}),e},n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n(686)}().default},t.exports=e()}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={exports:{}};return t[r].call(i.exports,i,i.exports,n),i.exports}(()=>{"use strict";var t=n(152);function e(t){for(var e=t.querySelector(".copy"),n=document.querySelectorAll(".copy"),r=0,o=n.length;r<o;r++)n[r].classList.add("hidden"),n[r].setAttribute("aria-hidden",!0);e.classList.remove("hidden"),e.setAttribute("aria-hidden",!1)}let r;function o(t,e,n){var o=n||document.getElementById("example-element");t.replace(/(\/\*)[\s\S]+(\*\/)/g,""),o.style.cssText=t,clearTimeout(r),r=setTimeout((function(){o.style.cssText?e.parentNode.classList.remove("invalid"):e.parentNode.classList.add("invalid")}),500)}function i(){parent&&parent.postMessage({url:window.location.href,height:document.body.scrollHeight},"*")}function c(t){var e=window.getSelection().getRangeAt(0);t.preventDefault(),t.stopPropagation(),t.clipboardData.setData("text/plain",e.toString()),t.clipboardData.setData("text/html",e.toString())}function a(t){for(var e=t.target;!e.classList.contains("language-css");)e=e.offsetParent;setTimeout((()=>{Prism.highlightElement(e)}),0)}function u(){s(this)}function s(t){var n=document.querySelector(".selected");if(n&&!t.classList.contains("selected")){var r=Prism.highlight(n.firstChild.textContent,Prism.languages.css);n.firstChild.innerHTML=r,function(){var t=document.getElementById("default-example"),e=document.getElementById("output");if(t.classList.contains("hidden")){for(var n=e.querySelectorAll("section"),r=0,o=n.length;r<o;r++)n[r].classList.add("hidden"),n[r].setAttribute("aria-hidden",!0);t.classList.remove("hidden"),t.setAttribute("aria-hidden",!1)}!function(){for(var t=document.getElementById("example-choice-list").querySelectorAll(".example-choice"),e=0,n=t.length;e<n;e++)t[e].classList.remove("selected")}()}()}!function(t){var e=t.querySelector("code");t.classList.add("selected"),e.setAttribute("contentEditable",!0),e.setAttribute("spellcheck",!1),o(e.textContent,t)}(t),e(t)}document.addEventListener("DOMContentLoaded",(function(){const t=localStorage.getItem("theme");null!==t&&document.querySelector("body").classList.add("theme-"+t)})),function(){var n=document.getElementById("example-choice-list"),r=n.querySelectorAll(".example-choice"),l=document.getElementById("editor-wrapper"),d=0,f=[],p=document.getElementById("output"),y=document.getElementById("warning-no-support");function m(t,e){for(var n=0,r=t.length;n<r;n++)if(t[n]===e)return n;return-1}!function(t){if(void 0===t.property)return!0;for(var e=t.property.split(" "),n=!1,r=document.createElement("div"),o=0,i=e.length;o<i;o++)void 0!==r.style[e[o]]&&(n=!0);return n}(n.dataset)||document.all?y.classList.remove("hidden"):(function(){l.classList.remove("hidden"),n.classList.add("live"),p.classList.remove("hidden");for(var y=0,v=r.length;y<v;y++){var h=r[y],g=document.createElement("button"),b=document.createElement("span");g.setAttribute("type","button"),g.classList.add("example-choice-button"),b.classList.add("visually-hidden"),b.textContent="Choose example "+(y+1),g.append(b),h.append(g),f.push(h.querySelector("code").textContent),h.getAttribute("initial-choice")&&(d=m(r,h))}(function(){var t=document.getElementById("example-choice-list");window.addEventListener("message",(function(t){if(void 0!==t.data.theme){var e=document.querySelector("body");for(let t=e.classList.length-1;t>=0;t--){const n=e.classList[t];n.startsWith("theme-")&&e.classList.remove(n)}e.classList.add("theme-"+t.data.theme),localStorage.setItem("theme",t.data.theme)}}),!1),"loading"!=document.readyState?i():document.addEventListener("DOMContentLoaded",i),t&&function(t){t.addEventListener("cut",c),t.addEventListener("copy",c),t.addEventListener("paste",a),t.addEventListener("keyup",(function(t){var e=t.target.parentElement;o(e.textContent,e)}));var e=t.querySelectorAll(".example-choice");Array.from(e).forEach((t=>{t.addEventListener("click",u)}))}(t)})(),document.getElementById("reset").addEventListener("click",(function(){for(var t=0,n=r.length;t<n;t++){var o=Prism.highlight(f[t],Prism.languages.css);r[t].classList.remove("invalid"),r[t].classList.remove("selected"),r[t].querySelector("code").innerHTML=o}d?(s(r[d]),e(r[d])):(s(r[0]),e(r[0]))})),function(){for(var t=0,e=r.length;t<e;t++){var n=r[t],o=n.querySelector(".copy");o.setAttribute("aria-label","Copy to clipboard"),n.addEventListener("mouseover",(()=>{o.setAttribute("aria-hidden",!1)})),n.addEventListener("mouseout",(()=>{o.setAttribute("aria-hidden",!0)}))}}(),new t(".copy",{target:function(t){var e=t.dataset.clipboardTarget;return e?document.querySelector(e):function(t){for(var e=t.parentElement,n=e.classList;e&&!n.contains("example-choice");)n=(e=e.parentElement).classList;return e}(t).getElementsByTagName("code")[0]}}).on("success",(function(t){var e=document.getElementById("user-message");e.classList.add("show"),e.setAttribute("aria-hidden",!1),function(t,e){var n=t.trigger,r=n.offsetParent.offsetTop+n.clientHeight+10+"px",o=n.offsetLeft+"px";e.style.top=r,e.style.left=o}(t,e),window.setTimeout((function(){e.classList.remove("show"),e.setAttribute("aria-hidden",!0)}),1e3),t.clearSelection()}))}(),s(r[d]),e(r[d]))}()})()})();