/** This file is part of the Nexcess MAPPS MU plugin and was generated automatically */
(()=>{"use strict";var t={7418:t=>{var e=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;t.exports=function(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;for(var e={},r=0;r<10;r++)e["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(e).map((function(t){return e[t]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(t){n[t]=t})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(t){return!1}}()?Object.assign:function(t,o){for(var i,s,a=function(t){if(null==t)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}(t),c=1;c<arguments.length;c++){for(var u in i=Object(arguments[c]))r.call(i,u)&&(a[u]=i[u]);if(e){s=e(i);for(var l=0;l<s.length;l++)n.call(i,s[l])&&(a[s[l]]=i[s[l]])}}return a}},5251:(t,e,r)=>{r(7418);var n=r(7363),o=60103;if(60107,"function"==typeof Symbol&&Symbol.for){var i=Symbol.for;o=i("react.element"),i("react.fragment")}var s=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a=Object.prototype.hasOwnProperty,c={key:!0,ref:!0,__self:!0,__source:!0};function u(t,e,r){var n,i={},u=null,l=null;for(n in void 0!==r&&(u=""+r),void 0!==e.key&&(u=""+e.key),void 0!==e.ref&&(l=e.ref),e)a.call(e,n)&&!c.hasOwnProperty(n)&&(i[n]=e[n]);if(t&&t.defaultProps)for(n in e=t.defaultProps)void 0===i[n]&&(i[n]=e[n]);return{$$typeof:o,type:t,key:u,ref:l,props:i,_owner:s.current}}e.jsx=u,e.jsxs=u},5893:(t,e,r)=>{t.exports=r(5251)},7363:t=>{t.exports=React}},e={};function r(n){var o=e[n];if(void 0!==o)return o.exports;var i=e[n]={exports:{}};return t[n](i,i.exports,r),i.exports}(()=>{const t=wp.i18n;const e=function(t){return t.split("?")[0].replace(/\/+$/,"")};var n=r(5893);function o(t){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}function i(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(i=n.key,s=void 0,s=function(t,e){if("object"!==o(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!==o(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(i,"string"),"symbol"===o(s)?s:String(s)),n)}var i,s}function s(t,e){return s=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},s(t,e)}function a(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=c(t);if(e){var i=c(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return function(t,e){if(e&&("object"===o(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,r)}}function c(t){return c=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},c(t)}var u=function(r){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&s(t,e)}(p,wp.element.Component);var o,c,u,l=a(p);function p(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,p),(e=l.call(this,t)).state={status:{name:"default",title:""}},e}return o=p,(c=[{key:"checkUrl",value:function(r){var n;this.setState({status:{name:"loading",title:""}});try{var o=new URL(r,this.props.baseUrl);n="".concat(o.path,"?").concat(o.query)}catch(t){n=r.startsWith("/")?r:"/"+r}var i=this;fetch(n,{method:"HEAD"}).then((function(r){var o=i.setState({status:{name:"failure",title:(0,t.__)("This path was unreachable, did you enter it correctly?","nexcess-mapps")}});if(!r.ok)return document.getElementById("submit").disabled=!0,o;if(r.redirected){var s="";if(r.url.includes(i.props.baseUrl)){var a=r.url.indexOf(i.props.baseUrl)+i.props.baseUrl.length;s=r.url.slice(a)}if(e(s)!==e(n))return document.getElementById("submit").disabled=!0,o}return document.getElementById("submit").disabled=!1,i.setState({status:{name:"success",title:(0,t.__)("The path resolves successfully","nexcess-mapps")}})})).catch((function(t){i.setState({status:{name:"error",title:t}})}))}},{key:"inputName",value:function(t){return"".concat(this.props.setting,"[").concat(t,"][]")}},{key:"render",value:function(){var e=this;return(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{className:"mapps-visual-comparison-base",children:(0,n.jsx)("code",{children:this.props.baseUrl})}),(0,n.jsxs)("td",{className:"mapps-visual-comparison-input",children:[(0,n.jsx)("input",{name:this.inputName("path"),type:"text",className:"large-text code",defaultValue:this.props.url.path,placeholder:"/",onBlur:function(t){return e.checkUrl(t.target.value)},readOnly:this.props.disabled}),(0,n.jsx)("span",{className:"mapps-visual-comparison-url-check status-"+this.state.status.name,title:this.state.status.title})]}),(0,n.jsx)("td",{className:"mapps-visual-comparison-input",children:(0,n.jsx)("input",{name:this.inputName("description"),type:"text",className:"large-text mapps-status-icon",defaultValue:this.props.url.description,placeholder:(0,t.__)("Some important page","nexcess-mapps"),readOnly:this.props.disabled})}),(0,n.jsx)("td",{children:(0,n.jsx)("button",{type:"button",className:"mapps-delete-row-btn button-link button-link-delete",onClick:this.props.removeRow,children:(0,t.__)("Delete","nexcess-mapps")})})]})}}])&&i(o.prototype,c),u&&i(o,u),Object.defineProperty(o,"prototype",{writable:!1}),p}();function l(t){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},l(t)}function p(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(o=n.key,i=void 0,i=function(t,e){if("object"!==l(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!==l(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(o,"string"),"symbol"===l(i)?i:String(i)),n)}var o,i}function f(t,e){return f=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},f(t,e)}function d(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=m(t);if(e){var o=m(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return function(t,e){if(e&&("object"===l(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,r)}}function m(t){return m=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},m(t)}var b=function(e){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&f(t,e)}(a,wp.element.Component);var r,o,i,s=d(a);function a(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a),(e=s.call(this,t)).state={rows:t.urls},e}return r=a,(o=[{key:"addRow",value:function(){this.setState({rows:this.state.rows.concat([{id:Date.now(),path:null,description:null}])})}},{key:"removeRow",value:function(t){this.setState({rows:this.state.rows.filter((function(e){return e.id!==t}))})}},{key:"render",value:function(){var e=this;return(0,n.jsxs)("div",{className:"mapps-repeating-table",children:[(0,n.jsxs)("table",{id:"mapps-visual-comparison-urls",className:"wp-list-table widefat striped",children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{className:"mapps-visual-comparison-base"}),(0,n.jsx)("th",{className:"mapps-visual-comparison-input",children:(0,t._x)("Path","table heading","nexcess-mapps")}),(0,n.jsx)("th",{className:"mapps-visual-comparison-input",children:(0,t._x)("Description","table heading","nexcess-mapps")}),(0,n.jsx)("th",{className:"mapps-visual-comparison-actions",children:(0,n.jsx)("span",{className:"screen-reader-text",children:(0,t._x)("Actions","table heading","nexcess-mapps")})})]})}),(0,n.jsx)("tbody",{children:this.state.rows.map((function(t,r){return(0,n.jsx)(u,{baseUrl:e.props.baseUrl,setting:e.props.setting,url:t,removeRow:e.removeRow.bind(e,t.id),disabled:r>=e.props.limit},t.id)}))})]}),(0,n.jsx)("p",{className:"submit",children:(0,n.jsx)("button",{type:"button",className:"mapps-add-row-btn button",onClick:this.addRow.bind(this),disabled:this.state.rows.length>=this.props.limit,children:(0,t.__)("Add URL","nexcess-mapps")})})]})}}])&&p(r.prototype,o),i&&p(r,i),Object.defineProperty(r,"prototype",{writable:!1}),a}();wp.element.render(wp.element.createElement(b,window.MAPPS.visualComparison),document.getElementById("mapps-visual-comparison-urls"))})()})();