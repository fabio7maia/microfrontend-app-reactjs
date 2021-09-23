/*! For license information please see 407.js.LICENSE.txt */
(self.webpackChunkmicrofrontend_app_reactjs=self.webpackChunkmicrofrontend_app_reactjs||[]).push([[407],{146:function(e){var t,n,o=Function.prototype,i=Object.prototype,r=o.toString,s=i.hasOwnProperty,a=r.call(Object),c=i.toString,d=(t=Object.getPrototypeOf,n=Object,function(e){return t(n(e))});e.exports=function(e){if(!function(e){return!!e&&"object"==typeof e}(e)||"[object Object]"!=c.call(e)||function(e){var t=!1;if(null!=e&&"function"!=typeof e.toString)try{t=!!(e+"")}catch(e){}return t}(e))return!1;var t=d(e);if(null===t)return!0;var n=s.call(t,"constructor")&&t.constructor;return"function"==typeof n&&n instanceof n&&r.call(n)==a}},251:function(e,t,n){"use strict";n(418);var o=n(417),i=60103;if(t.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var r=Symbol.for;i=r("react.element"),t.Fragment=r("react.fragment")}var s=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a=Object.prototype.hasOwnProperty,c={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,n){var o,r={},d=null,l=null;for(o in void 0!==n&&(d=""+n),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(l=t.ref),t)a.call(t,o)&&!c.hasOwnProperty(o)&&(r[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps)void 0===r[o]&&(r[o]=t[o]);return{$$typeof:i,type:e,key:d,ref:l,props:r,_owner:s.current}}t.jsx=d,t.jsxs=d},893:function(e,t,n){"use strict";e.exports=n(251)},500:function(e,t,n){"use strict";var o=n(797).compose;t.Uo="undefined"!=typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(0!==arguments.length)return"object"==typeof arguments[0]?o:o.apply(null,arguments)},"undefined"!=typeof window&&window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__},68:function(e,t,n){"use strict";var o;n(797),(o=n(146))&&o.__esModule},407:function(e,t,n){"use strict";n.r(t);var o=n(893),i=n(417),r=n.n(i),s=n(91),a=n.n(s),c=n(18),d=n(243),l=n(398);const u="@@Base/changeLanguage",v={language:"pt"},f=(e=v,t)=>{if(t.type===u){const n=t.payload;return Object.assign(Object.assign({},e),{language:n})}return e};Object.assign({},v);var p=n(797);const g=()=>{const e=(0,d.useSelector)((e=>e.baseState.language)),t=(0,d.useDispatch)(),n=r().useCallback((e=>{t((e=>(0,l.action)(u,e))(e.currentTarget.value))}),[t]);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("div",Object.assign({style:{position:"fixed",top:0,minHeight:"55px",width:"calc(100vw - 60px)",backgroundColor:"red",display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 30px"}},{children:[(0,o.jsx)(c.Link,Object.assign({to:"/dashboard"},{children:"Dashboard"}),void 0),(0,o.jsxs)("select",Object.assign({value:e,onChange:n},{children:[(0,o.jsx)("option",Object.assign({value:"en"},{children:"EN"}),void 0),(0,o.jsx)("option",Object.assign({value:"pt"},{children:"PT"}),void 0)]}),void 0)]}),void 0),(0,o.jsx)("div",{style:{height:"55px"}},void 0)]},void 0)};window,n(68);const _={init:!1,saveData:{store:void 0}},j=e=>{const t=e;return e=>((()=>{if(!_.init)throw new Error("It's required initialize micro frontend library first!")})(),(0,o.jsx)(r().Suspense,Object.assign({fallback:(0,o.jsx)(o.Fragment,{},void 0)},{children:(0,o.jsx)(t,Object.assign({},e,{store:_.saveData.store}),void 0)}),void 0))},h=j(r().lazy((()=>n.e(240).then(n.t.bind(n,240,23))))),b=j(r().lazy((()=>n.e(569).then(n.t.bind(n,569,23))))),O=()=>{(0,c.useHistory)();const[e,t]=r().useState();return(0,o.jsxs)("div",Object.assign({style:{backgroundColor:"#eeeeee",minHeight:"100vh",width:"100vw"}},{children:[(0,o.jsx)(g,{},void 0),(0,o.jsxs)("div",Object.assign({style:{padding:"20px",display:"flex",flexDirection:"row",justifyContent:"space-between"}},{children:[(0,o.jsx)("div",Object.assign({style:{width:"calc(50vw - 40px)",backgroundColor:"yellow",minHeight:"50vh"}},{children:(0,o.jsx)(h,{},void 0)}),void 0),(0,o.jsx)("div",Object.assign({style:{width:"calc(50vw - 40px)",backgroundColor:"orange",minHeight:"50vh"}},{children:(0,o.jsx)(b,{},void 0)}),void 0)]}),void 0),(0,o.jsx)("div",{style:{margin:"20px",display:"flex",flexDirection:"row",justifyContent:"space-between",backgroundColor:"blue"}},void 0),(0,o.jsx)("div",Object.assign({style:{position:"fixed",bottom:0,minHeight:"55px",width:"100vw",backgroundColor:"red"}},{children:"Footer"}),void 0)]}),void 0)};var x=n(500);const y={debug:"false"!=="MISSING_ENV_VAR".REACT_APP_LOGGER_DEBUG,error:"false"!=="MISSING_ENV_VAR".REACT_APP_LOGGER_ERROR,log:"false"!=="MISSING_ENV_VAR".REACT_APP_LOGGER_LOG},w=function(){const e=(0,x.Uo)({}),t=y.debug;return(0,p.createStore)(((e,t)=>{const n=Object.assign({},e);return(0,p.combineReducers)({baseState:f})(n,t)}),{baseState:{language:"pt"}},t?e():void 0)}();(({store:e})=>{_.saveData={store:e},_.init=!0})({store:w}),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)),a().render((0,o.jsx)(r().StrictMode,{children:(0,o.jsx)((()=>(0,o.jsx)(d.Provider,Object.assign({store:w},{children:(0,o.jsx)(c.BrowserRouter,{children:(0,o.jsx)(r().Fragment,{children:(0,o.jsxs)(c.Switch,{children:[(0,o.jsx)(c.Route,{exact:!0,path:"/",component:O},void 0),(0,o.jsx)(c.Route,{exact:!0,path:"/dashboard",component:O},void 0)]},void 0)},void 0)},void 0)}),void 0)),{},void 0)},void 0),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((e=>{e.unregister()})).catch((e=>{console.error(e.message)}))}}]);