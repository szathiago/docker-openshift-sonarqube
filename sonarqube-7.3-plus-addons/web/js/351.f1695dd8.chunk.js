(window.webpackJsonp=window.webpackJsonp||[]).push([[351,347],{1540:function(e,t,n){"use strict";n.r(t);var a=n(534),r=n(538),o=n(34),i=n(537);function c(e){var t=e.className,n=e.fill,r=void 0===n?"currentColor":n,o=e.size;return a.createElement(i.a,{className:t,size:o},a.createElement("path",{d:"M1,7L7,7L7,1L9,1L9,7L15,7L15,9L9,9L9,15L7,15L7,9L1,9L1,7Z",style:{fill:r}}))}var l,s=n(556),u=n(7),p=(l=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},function(e,t){function n(){this.constructor=e}l(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),m=function(e){function t(t){var n=e.call(this,t)||this;return n.handleNewProjectClick=function(e){e.preventDefault(),n.props.openProjectOnboarding()},n.openCreateOrganizationForm=function(){return n.setState({createOrganization:!0})},n.closeCreateOrganizationForm=function(){return n.setState({createOrganization:!1})},n.handleNewOrganizationClick=function(e){e.preventDefault(),e.currentTarget.blur(),n.openCreateOrganizationForm()},n.handleCreateOrganization=function(e){var t=e.key;n.closeCreateOrganizationForm(),n.context.router.push("/organizations/"+t)},n.state={createOrganization:!1},n}return p(t,e),t.prototype.render=function(){var e=this;return a.createElement(s.b,{overlay:a.createElement("ul",{className:"menu"},a.createElement("li",null,a.createElement("a",{className:"js-new-project",href:"#",onClick:this.handleNewProjectClick},Object(u.l)("my_account.analyze_new_project"))),a.createElement("li",{className:"divider"}),a.createElement("li",null,a.createElement("a",{className:"js-new-organization",href:"#",onClick:this.handleNewOrganizationClick},Object(u.l)("my_account.create_new_organization")))),tagName:"li"},function(t){var n=t.onToggleClick,r=t.open;return a.createElement(a.Fragment,null,a.createElement("a",{"aria-expanded":String(r),"aria-haspopup":"true",className:"navbar-plus",href:"#",onClick:n},a.createElement(c,null)),e.state.createOrganization&&a.createElement(o.default,{onClose:e.closeCreateOrganizationForm,onCreate:e.handleCreateOrganization}))})},t.contextTypes={router:r.object},t}(a.PureComponent);t.default=m},34:function(e,t,n){"use strict";n.r(t);var a,r=n(591),o=n.n(r),i=n(534),c=n(544),l=n(538),s=n(619),u=n(548),p=n(562),m=n(7),d=n(536),f=(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},function(e,t){function n(){this.constructor=e}a(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),g=function(e){function t(t){var n=e.call(this,t)||this;return n.mounted=!1,n.stopProcessing=function(){n.mounted&&n.setState({loading:!1})},n.handleAvatarInputChange=function(e){var t=e.currentTarget.value;n.setState({avatar:t}),n.changeAvatarImage(t)},n.changeAvatarImage=function(e){n.setState({avatarImage:e})},n.handleNameChange=function(e){return n.setState({name:e.currentTarget.value})},n.handleKeyChange=function(e){return n.setState({key:e.currentTarget.value})},n.handleDescriptionChange=function(e){return n.setState({description:e.currentTarget.value})},n.handleUrlChange=function(e){return n.setState({url:e.currentTarget.value})},n.handleSubmit=function(e){e.preventDefault();var t={name:n.state.name};n.state.avatar&&Object.assign(t,{avatar:n.state.avatar}),n.state.description&&Object.assign(t,{description:n.state.description}),n.state.key&&Object.assign(t,{key:n.state.key}),n.state.url&&Object.assign(t,{url:n.state.url}),n.setState({loading:!0}),n.props.createOrganization(t).then(n.props.onCreate,n.stopProcessing)},n.state={avatar:"",avatarImage:"",description:"",key:"",loading:!1,name:"",url:""},n.changeAvatarImage=o()(n.changeAvatarImage,500),n}return f(t,e),t.prototype.componentDidMount=function(){this.mounted=!0},t.prototype.componentWillUnmount=function(){this.mounted=!1},t.prototype.render=function(){return i.createElement(u.a,{contentLabel:"modal form",onRequestClose:this.props.onClose},i.createElement("header",{className:"modal-head"},i.createElement("h2",null,Object(m.l)("my_account.create_organization"),i.createElement(p.a,{className:"spacer-left",doc:Promise.resolve().then(n.t.bind(null,751,7))}))),i.createElement("form",{onSubmit:this.handleSubmit},i.createElement("div",{className:"modal-body"},i.createElement("div",{className:"modal-field"},i.createElement("label",{htmlFor:"organization-name"},Object(m.l)("organization.name"),i.createElement("em",{className:"mandatory"},"*")),i.createElement("input",{autoFocus:!0,disabled:this.state.loading,id:"organization-name",maxLength:64,minLength:2,name:"name",onChange:this.handleNameChange,required:!0,type:"text",value:this.state.name}),i.createElement("div",{className:"modal-field-description"},Object(m.l)("organization.name.description"))),i.createElement("div",{className:"modal-field"},i.createElement("label",{htmlFor:"organization-key"},Object(m.l)("organization.key")),i.createElement("input",{disabled:this.state.loading,id:"organization-key",maxLength:64,minLength:2,name:"key",onChange:this.handleKeyChange,type:"text",value:this.state.key}),i.createElement("div",{className:"modal-field-description"},Object(m.l)("organization.key.description"))),i.createElement("div",{className:"modal-field"},i.createElement("label",{htmlFor:"organization-avatar"},Object(m.l)("organization.avatar")),i.createElement("input",{disabled:this.state.loading,id:"organization-avatar",maxLength:256,name:"avatar",onChange:this.handleAvatarInputChange,type:"text",value:this.state.avatar}),i.createElement("div",{className:"modal-field-description"},Object(m.l)("organization.avatar.description")),!!this.state.avatarImage&&i.createElement("div",{className:"spacer-top spacer-bottom"},i.createElement("div",{className:"little-spacer-bottom"},Object(m.l)("organization.avatar.preview"),":"),i.createElement("img",{alt:"",height:30,src:this.state.avatarImage}))),i.createElement("div",{className:"modal-field"},i.createElement("label",{htmlFor:"organization-description"},Object(m.l)("description")),i.createElement("textarea",{disabled:this.state.loading,id:"organization-description",maxLength:256,name:"description",onChange:this.handleDescriptionChange,rows:3,value:this.state.description}),i.createElement("div",{className:"modal-field-description"},Object(m.l)("organization.description.description"))),i.createElement("div",{className:"modal-field"},i.createElement("label",{htmlFor:"organization-url"},Object(m.l)("organization.url")),i.createElement("input",{disabled:this.state.loading,id:"organization-url",maxLength:256,name:"url",onChange:this.handleUrlChange,type:"text",value:this.state.url}),i.createElement("div",{className:"modal-field-description"},Object(m.l)("organization.url.description")))),i.createElement("footer",{className:"modal-foot"},i.createElement("div",null,this.state.loading&&i.createElement("i",{className:"spinner spacer-right"}),i.createElement(d.f,{disabled:this.state.loading},Object(m.l)("create")),i.createElement(d.e,{onClick:this.props.onClose},Object(m.l)("cancel"))))))},t.contextTypes={router:l.object},t}(i.PureComponent),h={createOrganization:s.b};t.default=Object(c.connect)(null,h)(g)},548:function(e,t,n){"use strict";n.d(t,"a",function(){return c});var a=n(534),r=n(570),o=n(535),i=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e};function c(e){return a.createElement(r,i({className:o("modal",{"modal-medium":e.medium,"modal-large":e.large}),isOpen:!0,overlayClassName:"modal-overlay"},e))}r.setAppElement("#content")},553:function(e,t,n){"use strict";n.d(t,"a",function(){return l});var a=n(534),r=n(535),o=n(543),i=n(580),c=n(542);n(560);function l(e){var t=e.children,n=void 0===t?a.createElement(i.a,{fill:c.gray71,size:12}):t,l=e.tagName,s=void 0===l?"div":l;return a.createElement(s,{className:r("help-tooltip",e.className)},a.createElement(o.a,{mouseLeaveDelay:.25,onShow:e.onShow,overlay:e.overlay},a.createElement("span",{className:"display-inline-flex-center"},n)))}},559:function(e,t,n){(e.exports=n(540)(!1)).push([e.i,".help-tooltip{display:inline-flex;align-items:center;vertical-align:middle}.help-toolip-link{display:block;width:12px;height:12px;border:none}",""])},560:function(e,t,n){var a=n(559);"string"==typeof a&&(a=[[e.i,a,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(539)(a,r);a.locals&&(e.exports=a.locals)},562:function(e,t,n){"use strict";var a,r=n(534),o=n(553),i=n(549),c=(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},function(e,t){function n(){this.constructor=e}a(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),l=Object(i.a)(function(){return Promise.all([n.e(253),n.e(254)]).then(n.bind(null,18))}),s=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={open:!1},t.close=function(){t.setState({open:!1})},t}return c(t,e),t.prototype.componentDidMount=function(){var e=this;this.props.doc.then(function(t){var n=t.default;e.setState({content:n})},function(){}),document.addEventListener("scroll",this.close,!0)},t.prototype.componentWillUnmount=function(){document.removeEventListener("scroll",this.close,!0)},t.prototype.render=function(){return this.state.content?r.createElement(o.a,{className:this.props.className,overlay:r.createElement("div",{className:"abs-width-300"},r.createElement(l,{childProps:this.props.overlayProps,className:"cut-margins",content:this.state.content,isTooltip:!0}))},this.props.children):this.props.children||null},t}(r.PureComponent);t.a=s},595:function(e,t,n){"use strict";n.d(t,"f",function(){return o}),n.d(t,"d",function(){return i}),n.d(t,"a",function(){return c}),n.d(t,"e",function(){return l}),n.d(t,"b",function(){return s}),n.d(t,"g",function(){return u}),n.d(t,"c",function(){return p});var a=n(17),r=n(552);function o(e){return Object(a.getJSON)("/api/user_groups/search",e).catch(r.a)}function i(e){return Object(a.getJSON)("/api/user_groups/users",e).catch(r.a)}function c(e){return Object(a.post)("/api/user_groups/add_user",e).catch(r.a)}function l(e){return Object(a.post)("/api/user_groups/remove_user",e).catch(r.a)}function s(e){return Object(a.postJSON)("/api/user_groups/create",e).then(function(e){return e.group},r.a)}function u(e){return Object(a.post)("/api/user_groups/update",e).catch(r.a)}function p(e){return Object(a.post)("/api/user_groups/delete",e).catch(r.a)}},619:function(e,t,n){"use strict";n.d(t,"e",function(){return d}),n.d(t,"f",function(){return f}),n.d(t,"b",function(){return g}),n.d(t,"i",function(){return h}),n.d(t,"c",function(){return v}),n.d(t,"g",function(){return O}),n.d(t,"d",function(){return y}),n.d(t,"a",function(){return j}),n.d(t,"h",function(){return z}),n.d(t,"j",function(){return E});var a=n(610),r=n(644),o=n(676),i=n(595),c=n(616),l=n(588),s=n(545),u=n(582),p=n(7),m=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},d=function(e){return function(t){return Promise.all([a.d(e),a.f(e)]).then(function(e){var n=e[0],a=e[1];if(n){var o=m({},n,a);t(r.i([o]))}},Object(l.f)(t))}},f=function(e){return function(t){return Object(i.f)({organization:e}).then(function(n){t(r.h(e,n.groups))},Object(l.f)(t))}},g=function(e){return function(t){return a.b(e).then(function(e){return t(r.a(e)),t(Object(u.b)(Object(p.m)("organization.created",e.name))),e},function(e){return function(t){return Object(l.f)(e)(t),Promise.reject(t)}}(t))}},h=function(e,t){return function(n){return a.j(e,t).then(function(){n(r.j(e,t)),n(Object(u.b)(Object(p.l)("organization.updated")))},Object(l.f)(n))}},v=function(e){return function(t){return a.c(e).then(function(){t(r.c(e)),t(Object(u.b)(Object(p.l)("organization.deleted")))},Object(l.f)(t))}},b=function(e,t,n){return t(o.f(e.organization,{loading:!0})),void 0===e.ps&&(e.ps=50),e.q||(e.q=void 0),a.i(e).then(function(a){t(n(e.organization,a.users,{loading:!1,total:a.paging.total,pageIndex:a.paging.pageIndex,query:e.q||null}))},function(n){Object(l.f)(t)(n),t(o.f(e.organization,{loading:!1}))})},O=function(e,t){return function(n){return b({organization:e,q:t},n,o.c)}},y=function(e,t){return function(n,a){return b({organization:e,p:Object(s.getOrganizationMembersState)(a(),e).pageIndex+1,q:t},n,o.d)}},j=function(e,t){return function(n){return a.a({login:t.login,organization:e}).then(function(t){return n(o.b(e,t))},Object(l.f)(n))}},z=function(e,t){return function(n){return n(o.e(e,t)),a.h({login:t.login,organization:e}).catch(function(a){Object(l.f)(n)(a),n(o.b(e,t))})}},E=function(e,t,n,a){return function(r){r(Object(c.f)(m({},t,{groupCount:(t.groupCount||0)+n.length-a.length})));var o=n.map(function(n){return Object(i.a)({name:n,login:t.login,organization:e.key})}).concat(a.map(function(n){return Object(i.e)({name:n,login:t.login,organization:e.key})}));return Promise.all(o).catch(function(e){r(Object(c.f)(t)),Object(l.f)(r)(e)})}}},751:function(e,t){e.exports="An organization is a space where a team or a whole company can collaborate across many projects. A new organization is on a free plan by default, which means its projects will be public. Subscribe to paid plan to analyze projects privately\n\n---\n\nSee also: [Organizations](/organizations/index) and [Pricing](/sonarcloud-pricing)\n"}}]);
//# sourceMappingURL=351.f1695dd8.chunk.js.map