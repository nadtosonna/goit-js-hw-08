!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={};Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var r="Expected a function",o=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,s="object"==typeof self&&self&&self.Object===Object&&self,d=c||s||Function("return this")(),m=Object.prototype.toString,v=Math.max,p=Math.min,g=function(){return d.Date.now()};function y(e,t,n){var i,o,a,u,f,l,c=0,s=!1,d=!1,m=!0;if("function"!=typeof e)throw new TypeError(r);function y(t){var n=i,r=o;return i=o=void 0,c=t,u=e.apply(r,n)}function j(e){return c=e,f=setTimeout(x,t),s?y(e):u}function O(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-c>=a}function x(){var e=g();if(O(e))return T(e);f=setTimeout(x,function(e){var n=t-(e-l);return d?p(n,a-(e-c)):n}(e))}function T(e){return f=void 0,m&&i?y(e):(i=o=void 0,u)}function h(){var e=g(),n=O(e);if(i=arguments,o=this,l=e,n){if(void 0===f)return j(l);if(d)return f=setTimeout(x,t),y(l)}return void 0===f&&(f=setTimeout(x,t)),u}return t=S(t)||0,b(n)&&(s=!!n.leading,a=(d="maxWait"in n)?v(S(n.maxWait)||0,t):a,m="trailing"in n?!!n.trailing:m),h.cancel=function(){void 0!==f&&clearTimeout(f),c=0,i=l=o=f=void 0},h.flush=function(){return void 0===f?u:T(g())},h}function b(t){var n=void 0===t?"undefined":e(i)(t);return!!t&&("object"==n||"function"==n)}function S(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(i)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==m.call(t)}(t))return NaN;if(b(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=b(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var r=u.test(t);return r||f.test(t)?l(t.slice(2),r?2:8):a.test(t)?NaN:+t}t=function(e,t,n){var i=!0,o=!0;if("function"!=typeof e)throw new TypeError(r);return b(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),y(e,t,{leading:i,maxWait:t,trailing:o})};var j={form:document.querySelector(".feedback-form"),textarea:document.querySelector(".feedback-form textarea"),email:document.querySelector(".feedback-form input[type=email]")},O=j.form.elements,x="feedback-form-state",T=localStorage.getItem(x),h={};if(j.form.addEventListener("submit",(function(e){e.preventDefault(),h.email=O.email.value,h.message=O.message.value,""===O.email.value||""===O.message.value?alert("EMAIL and MESSAGE field can not be empty! Please fill in BOTH fields."):(console.log(h),j.form.reset(),localStorage.removeItem(x))})),j.email.addEventListener("input",e(t)(E,500)),j.textarea.addEventListener("input",e(t)(E,500)),null!=T){var w=JSON.parse(T);j.email.value=w.email,j.textarea.value=w.message}function E(e){h.email=O.email.value,h.message=O.message.value,localStorage.setItem(x,JSON.stringify(h))}}();
//# sourceMappingURL=03-feedback.dd0fa54a.js.map
