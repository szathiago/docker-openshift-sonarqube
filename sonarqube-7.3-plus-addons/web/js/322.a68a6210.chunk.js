(window.webpackJsonp=window.webpackJsonp||[]).push([[322],{1606:function(e,n,t){"use strict";t.r(n);var o,r=t(534),i=t(681),c=t(561),u=(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var t in n)n.hasOwnProperty(t)&&(e[t]=n[t])},function(e,n){function t(){this.constructor=e}o(e,n),e.prototype=null===n?Object.create(n):(t.prototype=n.prototype,new t)}),a=function(e){function n(){var n=null!==e&&e.apply(this,arguments)||this;return n.scrollToLine=function(){var e=n.props.location.query.line;if(e){var t=document.querySelector('.source-line[data-line-number="'+e+'"]');if(t){var o=t.getBoundingClientRect(),r=window.innerHeight/2-60,i=o.top-r;window.scrollTo(0,i)}}},n}return u(n,e),n.prototype.render=function(){var e=this.props.location.query,n=e.branch,t=e.id,o=e.line,u=e.pullRequest,a=o?Number(o):void 0,l=Object(c.a)(n,u);return r.createElement("div",{className:"page page-limited"},r.createElement(i.a,{aroundLine:a,branchLike:l,component:t,highlightedLine:a,onLoaded:this.scrollToLine}))},n}(r.PureComponent);n.default=a},681:function(e,n,t){"use strict";var o=t(544),r=t(549),i=t(686),c={onReceiveComponent:function(e){return function(n){if(e.canMarkAsFavorite){var t=[],o=[];e.fav?t.push({key:e.key}):o.push({key:e.key}),n(Object(i.d)(t,o))}}}};n.a=Object(o.connect)(null,c)(Object(r.a)(function(){return Promise.all([t.e(245),t.e(251),t.e(276)]).then(t.bind(null,789))}))}},0,[245,251,276]]);
//# sourceMappingURL=322.a68a6210.chunk.js.map