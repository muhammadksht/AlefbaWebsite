(this["webpackJsonpalefba-website"]=this["webpackJsonpalefba-website"]||[]).push([[5],{34:function(e,t,r){"use strict";function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,i=new Array(t);r<t;r++)i[r]=e[r];return i}function n(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var r=[],i=!0,n=!1,s=void 0;try{for(var o,a=e[Symbol.iterator]();!(i=(o=a.next()).done)&&(r.push(o.value),!t||r.length!==t);i=!0);}catch(c){n=!0,s=c}finally{try{i||null==a.return||a.return()}finally{if(n)throw s}}return r}}(e,t)||function(e,t){if(e){if("string"===typeof e)return i(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?i(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r.d(t,"a",(function(){return n}))},35:function(e,t,r){"use strict";r.d(t,"a",(function(){return b}));var i=r(0);function n(){return n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e},n.apply(this,arguments)}function s(e,t){return s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},s(e,t)}var o=new Map,a=new WeakMap,c=0;function u(e){return Object.keys(e).sort().filter((function(t){return void 0!==e[t]})).map((function(t){return t+"_"+("root"===t?(r=e.root)?(a.has(r)||(c+=1,a.set(r,c.toString())),a.get(r)):"0":e[t]);var r})).toString()}function l(e,t,r){if(void 0===r&&(r={}),!e)return function(){};var i=function(e){var t=u(e),r=o.get(t);if(!r){var i,n=new Map,s=new IntersectionObserver((function(t){t.forEach((function(t){var r,s=t.isIntersecting&&i.some((function(e){return t.intersectionRatio>=e}));e.trackVisibility&&"undefined"===typeof t.isVisible&&(t.isVisible=s),null==(r=n.get(t.target))||r.forEach((function(e){e(s,t)}))}))}),e);i=s.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),r={id:t,observer:s,elements:n},o.set(t,r)}return r}(r),n=i.id,s=i.observer,a=i.elements,c=a.get(e)||[];return a.has(e)||a.set(e,c),c.push(t),s.observe(e),function(){c.splice(c.indexOf(t),1),0===c.length&&(a.delete(e),s.unobserve(e)),0===a.size&&(s.disconnect(),o.delete(n))}}var d=["children","as","tag","triggerOnce","threshold","root","rootMargin","onChange","skip","trackVisibility","delay","initialInView"];function h(e){return"function"!==typeof e.children}var p=function(e){var t,r;function o(t){var r;return(r=e.call(this,t)||this).node=null,r._unobserveCb=null,r.handleNode=function(e){r.node&&(r.unobserve(),e||r.props.triggerOnce||r.props.skip||r.setState({inView:!!r.props.initialInView,entry:void 0})),r.node=e||null,r.observeNode()},r.handleChange=function(e,t){e&&r.props.triggerOnce&&r.unobserve(),h(r.props)||r.setState({inView:e,entry:t}),r.props.onChange&&r.props.onChange(e,t)},r.state={inView:!!t.initialInView,entry:void 0},r}r=e,(t=o).prototype=Object.create(r.prototype),t.prototype.constructor=t,s(t,r);var a=o.prototype;return a.componentDidUpdate=function(e){e.rootMargin===this.props.rootMargin&&e.root===this.props.root&&e.threshold===this.props.threshold&&e.skip===this.props.skip&&e.trackVisibility===this.props.trackVisibility&&e.delay===this.props.delay||(this.unobserve(),this.observeNode())},a.componentWillUnmount=function(){this.unobserve(),this.node=null},a.observeNode=function(){if(this.node&&!this.props.skip){var e=this.props,t=e.threshold,r=e.root,i=e.rootMargin,n=e.trackVisibility,s=e.delay;this._unobserveCb=l(this.node,this.handleChange,{threshold:t,root:r,rootMargin:i,trackVisibility:n,delay:s})}},a.unobserve=function(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)},a.render=function(){if(!h(this.props)){var e=this.state,t=e.inView,r=e.entry;return this.props.children({inView:t,entry:r,ref:this.handleNode})}var s=this.props,o=s.children,a=s.as,c=s.tag,u=function(e,t){if(null==e)return{};var r,i,n={},s=Object.keys(e);for(i=0;i<s.length;i++)r=s[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(s,d);return i.createElement(a||c||"div",n({ref:this.handleNode},u),o)},o}(i.Component);function b(e){var t=void 0===e?{}:e,r=t.threshold,n=t.delay,s=t.trackVisibility,o=t.rootMargin,a=t.root,c=t.triggerOnce,u=t.skip,d=t.initialInView,h=i.useRef(),p=i.useState({inView:!!d}),b=p[0],f=p[1],v=i.useCallback((function(e){void 0!==h.current&&(h.current(),h.current=void 0),u||e&&(h.current=l(e,(function(e,t){f({inView:e,entry:t}),t.isIntersecting&&c&&h.current&&(h.current(),h.current=void 0)}),{root:a,rootMargin:o,threshold:r,trackVisibility:s,delay:n}))}),[Array.isArray(r)?r.toString():r,a,o,c,u,s,n]);Object(i.useEffect)((function(){h.current||!b.entry||c||u||f({inView:!!d})}));var g=[v,b.inView,b.entry];return g.ref=g[0],g.inView=g[1],g.entry=g[2],g}p.displayName="InView",p.defaultProps={threshold:0,triggerOnce:!1,initialInView:!1}},38:function(e,t,r){},48:function(e,t,r){"use strict";r.r(t);var i=r(34),n=(r(38),r.p+"static/media/businesses.f577862c.png"),s=r.p+"static/media/organizations.abd53ade.png",o=r.p+"static/media/libraries.cd45f964.png",a=r(35),c=r(1);t.default=function(){var e={delay:1e3},t={opacity:0},r={opacity:1},u=Object(a.a)(e),l=Object(i.a)(u,2),d=l[0],h=l[1],p=Object(a.a)(e),b=Object(i.a)(p,2),f=b[0],v=b[1],g=Object(a.a)(e),y=Object(i.a)(g,2),j=y[0],O=y[1];return Object(c.jsxs)("div",{children:[Object(c.jsx)("p",{id:"usages-title",children:"\u06a9\u0627\u0631\u0628\u0631\u062f \u0647\u0627\u06cc \u0627\u0644\u0641\u0628\u0627"}),Object(c.jsx)("div",{id:"space-4"}),Object(c.jsxs)("div",{id:"usages-section",children:[Object(c.jsx)("div",{id:"space-1"}),Object(c.jsxs)("div",{id:"in-businesses",ref:d,style:h?r:t,children:[Object(c.jsx)("img",{src:n,id:"business-image",alt:""}),Object(c.jsx)("p",{className:"orange-text-usages",children:"\u062f\u0631 \u06a9\u0633\u0628\u200c\u0648\u200c\u06a9\u0627\u0631\u200c\u0647\u0627"}),Object(c.jsx)("p",{className:"white-text-usages",children:"\u06a9\u0627\u063a\u0630 \u0648 \u0646\u0648\u0634\u062a\u0647 \u0647\u0645\u0647 \u062c\u0627 \u067e\u06cc\u062f\u0627 \u0645\u06cc\u200c\u0634\u0648\u062f"})]}),Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{id:"space-2"}),Object(c.jsxs)("div",{id:"in-organizations",ref:f,style:v?r:t,children:[Object(c.jsx)("img",{src:s,id:"organization-image",alt:""}),Object(c.jsx)("p",{className:"orange-text-usages",children:"\u062f\u0631 \u0633\u0627\u0632\u0645\u0627\u0646 \u0647\u0627"}),Object(c.jsx)("p",{className:"white-text-usages",children:"\u067e\u0631\u0648\u0646\u062f\u0647\u200c\u0647\u0627 \u0648 \u0646\u0627\u0645\u0647\u200c\u0647\u0627 \u0631\u0648\u06cc \u0647\u0645 \u0627\u0646\u0628\u0627\u0634\u062a\u0647 \u0634\u062f\u0647 \u0648 \u062f\u0631 \u0627\u062a\u0627\u0642\u200c\u0647\u0627\u06cc \u0628\u0627\u06cc\u06af\u0627\u0646\u06cc \u062e\u0627\u06a9 \u0645\u06cc\u200c\u062e\u0648\u0631\u0646\u062f. \u0645\u0633\u06cc\u0631 ((\u062f\u0648\u0644\u062a \u0627\u0644\u06a9\u062a\u0631\u0648\u0646\u06cc\u06a9)) \u0627\u0632 \u0648\u0631\u0648\u062f \u0627\u06cc\u0646 \u0627\u0633\u0646\u0627\u062f \u0628\u0647 \u062f\u0646\u06cc\u0627\u06cc \u062f\u06cc\u062c\u06cc\u062a\u0627\u0644 \u0645\u06cc\u06af\u0630\u0631\u062f:"})]})]}),Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{id:"space-3"}),Object(c.jsxs)("div",{id:"in-libraries",ref:j,style:O?r:t,children:[Object(c.jsx)("img",{src:o,id:"library-image",alt:""}),Object(c.jsx)("p",{className:"orange-text-usages",children:"\u062f\u0631 \u06a9\u062a\u0627\u0628\u062e\u0627\u0646\u0647"}),Object(c.jsx)("p",{className:"white-text-usages",children:"\u0635\u0641\u062d\u0647\u200c\u0647\u0627\u06cc \u0644\u0627\u200c\u0628\u0647\u200c\u0644\u0627\u06cc \u0642\u0641\u0633\u0647\u200c\u0647\u0627\u06cc \u06a9\u062a\u0627\u0628\u062e\u0627\u0646\u0647 \u0645\u0646\u062a\u0638\u0631 \u0648\u0631\u0648\u062f \u0628\u0647 \u062f\u0646\u06cc\u0627\u06cc \u0646\u0648 \u0647\u0633\u062a\u0646\u062f."})]})]})]})]})}}}]);