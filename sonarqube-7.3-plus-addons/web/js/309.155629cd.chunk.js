(window.webpackJsonp=window.webpackJsonp||[]).push([[309],{1602:function(t,n,e){"use strict";e.r(n),e.d(n,"OrganizationDelete",function(){return g});var o,r=e(534),i=e(538),u=e(557),a=e.n(u),c=e(544),s=e(664),l=e(641),p=e(7),f=e(619),d=e(536),m=e(610),h=e(64),b=(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])},function(t,n){function e(){this.constructor=t}o(t,n),t.prototype=null===n?Object.create(n):(e.prototype=n.prototype,new e)}),g=function(t){function n(){var n=null!==t&&t.apply(this,arguments)||this;return n.mounted=!1,n.state={},n.fetchOrganizationPlanInfo=function(){Object(h.isSonarCloud)()&&Object(m.e)(n.props.organization.key).then(function(t){n.mounted&&n.setState({hasPaidPlan:"inactive"!==t.subscription.status})},function(){n.mounted&&n.setState({hasPaidPlan:!1})})},n.onDelete=function(){return n.props.deleteOrganization(n.props.organization.key).then(function(){n.context.router.replace("/")})},n}return b(n,t),n.prototype.componentDidMount=function(){this.mounted=!0,this.fetchOrganizationPlanInfo()},n.prototype.componentWillUnmount=function(){this.mounted=!1},n.prototype.render=function(){var t=this.state.hasPaidPlan,n=Object(p.l)("organization.delete");return r.createElement(r.Fragment,null,r.createElement(a.a,{title:n}),r.createElement("div",{className:"page page-limited"},r.createElement("header",{className:"page-header"},r.createElement("h1",{className:"page-title"},n),r.createElement("div",{className:"page-description"},r.createElement(l.a,{message:Object(p.l)("organization.delete.description")}))),r.createElement(s.a,{confirmButtonText:Object(p.l)("delete"),isDestructive:!0,modalBody:r.createElement("div",null,t&&r.createElement("div",{className:"alert alert-warning modal-alert"},Object(p.l)("organization.delete.sonarcloud.paid_plan_info")),r.createElement("p",null,Object(p.l)("organization.delete.question"))),modalHeader:Object(p.l)("organization.delete"),onConfirm:this.onDelete},function(t){var n=t.onClick;return r.createElement(d.a,{className:"js-custom-measure-delete button-red",onClick:n},Object(p.l)("delete"))})))},n.contextTypes={router:i.object},n}(r.PureComponent),O={deleteOrganization:f.c};n.default=Object(c.connect)(null,O)(g)},548:function(t,n,e){"use strict";e.d(n,"a",function(){return a});var o=e(534),r=e(570),i=e(535),u=Object.assign||function(t){for(var n,e=1,o=arguments.length;e<o;e++)for(var r in n=arguments[e])Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r]);return t};function a(t){return o.createElement(r,u({className:i("modal",{"modal-medium":t.medium,"modal-large":t.large}),isOpen:!0,overlayClassName:"modal-overlay"},t))}r.setAppElement("#content")},567:function(t,n,e){"use strict";var o,r=e(534),i=e(548),u=(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])},function(t,n){function e(){this.constructor=t}o(t,n),t.prototype=null===n?Object.create(n):(e.prototype=n.prototype,new e)}),a=function(t){function n(){var n=null!==t&&t.apply(this,arguments)||this;return n.mounted=!1,n.state={submitting:!1},n.stopSubmitting=function(){n.mounted&&n.setState({submitting:!1})},n.handleCloseClick=function(t){t&&(t.preventDefault(),t.currentTarget.blur()),n.props.onClose()},n.handleFormSubmit=function(t){t.preventDefault(),n.submit()},n.handleSubmitClick=function(t){t&&(t.preventDefault(),t.currentTarget.blur()),n.submit()},n.submit=function(){var t=n.props.onSubmit();t&&(n.setState({submitting:!0}),t.then(n.stopSubmitting,n.stopSubmitting))},n}return u(n,t),n.prototype.componentDidMount=function(){this.mounted=!0},n.prototype.componentWillUnmount=function(){this.mounted=!1},n.prototype.render=function(){return r.createElement(i.a,{contentLabel:this.props.header,onRequestClose:this.props.onClose},this.props.children({onCloseClick:this.handleCloseClick,onFormSubmit:this.handleFormSubmit,onSubmitClick:this.handleSubmitClick,submitting:this.state.submitting}))},n}(r.Component);n.a=a},593:function(t,n,e){"use strict";var o,r=e(534),i=(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])},function(t,n){function e(){this.constructor=t}o(t,n),t.prototype=null===n?Object.create(n):(e.prototype=n.prototype,new e)}),u=function(t){function n(){var n=null!==t&&t.apply(this,arguments)||this;return n.mounted=!1,n.state={modal:!1},n.handleButtonClick=function(){n.setState({modal:!0})},n.handleFormSubmit=function(t){t&&t.preventDefault(),n.setState({modal:!0})},n.handleCloseModal=function(){n.mounted&&n.setState({modal:!1})},n}return i(n,t),n.prototype.componentDidMount=function(){this.mounted=!0},n.prototype.componentWillUnmount=function(){this.mounted=!1},n.prototype.render=function(){return r.createElement(r.Fragment,null,this.props.children({onClick:this.handleButtonClick,onFormSubmit:this.handleFormSubmit}),this.state.modal&&this.props.modal({onClose:this.handleCloseModal}))},n}(r.PureComponent);n.a=u},595:function(t,n,e){"use strict";e.d(n,"f",function(){return i}),e.d(n,"d",function(){return u}),e.d(n,"a",function(){return a}),e.d(n,"e",function(){return c}),e.d(n,"b",function(){return s}),e.d(n,"g",function(){return l}),e.d(n,"c",function(){return p});var o=e(17),r=e(552);function i(t){return Object(o.getJSON)("/api/user_groups/search",t).catch(r.a)}function u(t){return Object(o.getJSON)("/api/user_groups/users",t).catch(r.a)}function a(t){return Object(o.post)("/api/user_groups/add_user",t).catch(r.a)}function c(t){return Object(o.post)("/api/user_groups/remove_user",t).catch(r.a)}function s(t){return Object(o.postJSON)("/api/user_groups/create",t).then(function(t){return t.group},r.a)}function l(t){return Object(o.post)("/api/user_groups/update",t).catch(r.a)}function p(t){return Object(o.post)("/api/user_groups/delete",t).catch(r.a)}},596:function(t,n,e){"use strict";var o,r=e(534),i=e(567),u=e(550),a=e(7),c=e(536),s=(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])},function(t,n){function e(){this.constructor=t}o(t,n),t.prototype=null===n?Object.create(n):(e.prototype=n.prototype,new e)}),l=function(t){function n(){var n=null!==t&&t.apply(this,arguments)||this;return n.mounted=!1,n.handleSubmit=function(){var t=n.props.onConfirm(n.props.confirmData);return t?t.then(n.props.onClose,function(){}):void n.props.onClose()},n.renderModalContent=function(t){var e=t.onCloseClick,o=t.onFormSubmit,i=t.submitting,s=n.props,l=s.children,p=s.confirmButtonText,f=s.confirmDisable,d=s.header,m=s.isDestructive;return r.createElement("form",{onSubmit:o},r.createElement("header",{className:"modal-head"},r.createElement("h2",null,d)),r.createElement("div",{className:"modal-body"},l),r.createElement("footer",{className:"modal-foot"},r.createElement(u.a,{className:"spacer-right",loading:i}),r.createElement(c.f,{autoFocus:!0,className:m?"button-red":void 0,disabled:i||f},p),r.createElement(c.e,{disabled:i,onClick:e},Object(a.l)("cancel"))))},n}return s(n,t),n.prototype.componentDidMount=function(){this.mounted=!0},n.prototype.componentWillUnmount=function(){this.mounted=!1},n.prototype.render=function(){var t=this.props.header;return r.createElement(i.a,{header:t,onClose:this.props.onClose,onSubmit:this.handleSubmit},this.renderModalContent)},n}(r.PureComponent);n.a=l},619:function(t,n,e){"use strict";e.d(n,"e",function(){return d}),e.d(n,"f",function(){return m}),e.d(n,"b",function(){return h}),e.d(n,"i",function(){return b}),e.d(n,"c",function(){return g}),e.d(n,"g",function(){return y}),e.d(n,"d",function(){return j}),e.d(n,"a",function(){return v}),e.d(n,"h",function(){return _}),e.d(n,"j",function(){return C});var o=e(610),r=e(644),i=e(676),u=e(595),a=e(616),c=e(588),s=e(545),l=e(582),p=e(7),f=Object.assign||function(t){for(var n,e=1,o=arguments.length;e<o;e++)for(var r in n=arguments[e])Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r]);return t},d=function(t){return function(n){return Promise.all([o.d(t),o.f(t)]).then(function(t){var e=t[0],o=t[1];if(e){var i=f({},e,o);n(r.i([i]))}},Object(c.f)(n))}},m=function(t){return function(n){return Object(u.f)({organization:t}).then(function(e){n(r.h(t,e.groups))},Object(c.f)(n))}},h=function(t){return function(n){return o.b(t).then(function(t){return n(r.a(t)),n(Object(l.b)(Object(p.m)("organization.created",t.name))),t},function(t){return function(n){return Object(c.f)(t)(n),Promise.reject(n)}}(n))}},b=function(t,n){return function(e){return o.j(t,n).then(function(){e(r.j(t,n)),e(Object(l.b)(Object(p.l)("organization.updated")))},Object(c.f)(e))}},g=function(t){return function(n){return o.c(t).then(function(){n(r.c(t)),n(Object(l.b)(Object(p.l)("organization.deleted")))},Object(c.f)(n))}},O=function(t,n,e){return n(i.f(t.organization,{loading:!0})),void 0===t.ps&&(t.ps=50),t.q||(t.q=void 0),o.i(t).then(function(o){n(e(t.organization,o.users,{loading:!1,total:o.paging.total,pageIndex:o.paging.pageIndex,query:t.q||null}))},function(e){Object(c.f)(n)(e),n(i.f(t.organization,{loading:!1}))})},y=function(t,n){return function(e){return O({organization:t,q:n},e,i.c)}},j=function(t,n){return function(e,o){return O({organization:t,p:Object(s.getOrganizationMembersState)(o(),t).pageIndex+1,q:n},e,i.d)}},v=function(t,n){return function(e){return o.a({login:n.login,organization:t}).then(function(n){return e(i.b(t,n))},Object(c.f)(e))}},_=function(t,n){return function(e){return e(i.e(t,n)),o.h({login:n.login,organization:t}).catch(function(o){Object(c.f)(e)(o),e(i.b(t,n))})}},C=function(t,n,e,o){return function(r){r(Object(a.f)(f({},n,{groupCount:(n.groupCount||0)+e.length-o.length})));var i=e.map(function(e){return Object(u.a)({name:e,login:n.login,organization:t.key})}).concat(o.map(function(e){return Object(u.e)({name:e,login:n.login,organization:t.key})}));return Promise.all(i).catch(function(t){r(Object(a.f)(n)),Object(c.f)(r)(t)})}}},664:function(t,n,e){"use strict";var o,r=e(534),i=e(593),u=e(596),a=(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])},function(t,n){function e(){this.constructor=t}o(t,n),t.prototype=null===n?Object.create(n):(e.prototype=n.prototype,new e)}),c=function(t){function n(){var n=null!==t&&t.apply(this,arguments)||this;return n.renderConfirmModal=function(t){var e=t.onClose;return r.createElement(u.a,{confirmButtonText:n.props.confirmButtonText,confirmData:n.props.confirmData,confirmDisable:n.props.confirmDisable,header:n.props.modalHeader,isDestructive:n.props.isDestructive,onClose:e,onConfirm:n.props.onConfirm},n.props.modalBody)},n}return a(n,t),n.prototype.render=function(){return r.createElement(i.a,{modal:this.renderConfirmModal},this.props.children)},n}(r.PureComponent);n.a=c}}]);
//# sourceMappingURL=309.155629cd.chunk.js.map