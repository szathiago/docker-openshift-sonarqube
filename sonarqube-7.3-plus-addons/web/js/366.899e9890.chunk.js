(window.webpackJsonp=window.webpackJsonp||[]).push([[366],{1626:function(t,e,r){"use strict";r.r(e);var o,n=r(534),c=r(538),p=r(544),u=r(558),i=r(545),s=r(547),a=(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])},function(t,e){function r(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}),f=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return a(e,t),e.prototype.componentDidMount=function(){var t=this.props.currentUser;if(t&&Object(u.h)(t))if(t.homepage){var e=Object(s.k)(t.homepage);this.context.router.replace(e)}else this.context.router.replace("/projects");else this.context.router.replace("/about")},e.prototype.render=function(){return null},e.contextTypes={router:c.object.isRequired},e}(n.PureComponent);e.default=Object(p.connect)(function(t){return{currentUser:Object(i.getCurrentUser)(t)}})(f)}}]);
//# sourceMappingURL=366.899e9890.chunk.js.map