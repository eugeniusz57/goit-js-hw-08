function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,u=/^0o[0-7]+$/i,a=parseInt,f="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=f||c||Function("return this")(),s=Object.prototype.toString,d=Math.max,m=Math.min,v=function(){return l.Date.now()};function p(e,t,n){var r,i,o,u,a,f,c=0,l=!1,s=!1,p=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=r,o=i;return r=i=void 0,c=t,u=e.apply(o,n)}function x(e){return c=e,a=setTimeout(j,t),l?y(e):u}function S(e){var n=e-f;return void 0===f||n>=t||n<0||s&&e-c>=o}function j(){var e=v();if(S(e))return E(e);a=setTimeout(j,function(e){var n=t-(e-f);return s?m(n,o-(e-c)):n}(e))}function E(e){return a=void 0,p&&r?y(e):(r=i=void 0,u)}function T(){var e=v(),n=S(e);if(r=arguments,i=this,f=e,n){if(void 0===a)return x(f);if(s)return a=setTimeout(j,t),y(f)}return void 0===a&&(a=setTimeout(j,t)),u}return t=g(t)||0,b(n)&&(l=!!n.leading,o=(s="maxWait"in n)?d(g(n.maxWait)||0,t):o,p="trailing"in n?!!n.trailing:p),T.cancel=function(){void 0!==a&&clearTimeout(a),c=0,r=f=i=a=void 0},T.flush=function(){return void 0===a?u:E(v())},T}function b(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function g(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(b(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=b(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=o.test(e);return n||u.test(e)?a(e.slice(2),n?2:8):i.test(e)?NaN:+e}t=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return b(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),p(e,t,{leading:r,maxWait:t,trailing:i})};const y={inputEmail:document.querySelector("input"),textArea:document.querySelector("textarea"),submitBtn:document.querySelector("button"),form:document.querySelector(".feedback-form")};let x={};function S(){const e=JSON.parse(localStorage.getItem("feedback-form-state"));if(e)return y.textArea.value=e.message||"",y.inputEmail.value=e.email||"",void(x=e);x={}}y.form.addEventListener("input",e(t)((function(e){x[e.target.name]=e.target.value;const t=JSON.stringify(x);localStorage.setItem("feedback-form-state",t)}),500)),y.form.addEventListener("submit",(function(e){e.preventDefault(),(""===y.inputEmail.value||""===y.textArea.value)&&alert("Enter all fields ");e.currentTarget.reset(),localStorage.removeItem("feedback-form-state"),S()})),S();
//# sourceMappingURL=03-feedback.c3917a8d.js.map
