(window.webpackJsonp=window.webpackJsonp||[]).push([[287],{1595:function(e,t,n){"use strict";n.r(t);var o,a=n(534),s=n(529),r=n(629),i=n(542),l=n(781),c=n(7),d=n(547),p=(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},function(e,t){function n(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),u=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.mounted=!1,t.state={identityProviders:[],loading:!0},t.fetchIdentityProviders=function(){t.setState({loading:!0}),Object(r.e)().then(function(e){var n=e.identityProviders;t.mounted&&t.setState({identityProviders:n,loading:!1})},function(){t.mounted&&t.setState({loading:!1})})},t.renderIdentityProvier=function(e,n){var o=t.state.identityProviders.find(function(t){return t.key===e});return o?a.createElement("div",{className:"identity-provider",style:{backgroundColor:o.backgroundColor,color:Object(l.a)(o.backgroundColor,i.secondFontColor)}},a.createElement("img",{alt:o.name,className:"little-spacer-right",src:Object(d.b)()+o.iconPath,width:"14",height:"14"}),n):a.createElement("div",null,"sonarqube"!==e&&e," ",n)},t}return p(t,e),t.prototype.componentDidMount=function(){this.mounted=!0,this.fetchIdentityProviders()},t.prototype.componentWillUnmount=function(){this.mounted=!1},t.prototype.render=function(){var e=this.props.location.query;return a.createElement("div",{id:"bd",className:"page-wrapper-simple"},a.createElement("div",{id:"nonav",className:"page-simple"},a.createElement("div",{className:"big-spacer-bottom js-provider-name"},a.createElement("p",{className:"little-spacer-bottom"},a.createElement(s.FormattedMessage,{defaultMessage:Object(c.l)("sessions.update_login.1"),id:"sessions.update_login.1",values:{providerName:a.createElement("strong",null,e.providerName)}}))),a.createElement("div",{className:"big-spacer-bottom js-new-account"},a.createElement("p",{className:"little-spacer-bottom"},Object(c.l)("sessions.update_login.2")),this.renderIdentityProvier(e.providerKey,e.login)),a.createElement("div",{className:"alert alert-warning"},Object(c.l)("sessions.update_login.3"),a.createElement("ul",{className:"list-styled"},a.createElement("li",{className:"spacer-top js-old-organization-key"},a.createElement(s.FormattedMessage,{defaultMessage:Object(c.l)("sessions.update_login.4"),id:"sessions.update_login.4",values:{organizationKey:a.createElement("strong",null,e.oldOrganizationKey)}})),a.createElement("li",{className:"spacer-top js-old-login"},a.createElement(s.FormattedMessage,{defaultMessage:Object(c.l)("sessions.update_login.5"),id:"sessions.update_login.5",values:{login:a.createElement("strong",null,e.oldLogin)}})))),a.createElement("div",{className:"big-spacer-top text-right"},a.createElement("a",{className:"button js-continue",href:Object(d.b)()+"/sessions/init/"+e.providerKey+"?allowUpdateLogin=true"},Object(c.l)("continue")),a.createElement("a",{className:"big-spacer-left js-cancel",href:Object(d.b)()+"/"},Object(c.l)("cancel")))))},t}(a.PureComponent);t.default=u}}]);
//# sourceMappingURL=287.2e67e1a8.chunk.js.map