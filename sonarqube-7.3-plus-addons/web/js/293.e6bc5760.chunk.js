(window.webpackJsonp=window.webpackJsonp||[]).push([[293],{1547:function(e,t,o){"use strict";o.r(t);var n=o(534),i=o(557),l=o.n(i),r=o(562),a=o(7);function c(){return n.createElement("header",{className:"page-header"},n.createElement("div",{className:"page-title display-flex-center"},n.createElement("h1",null,Object(a.l)("project_quality_gate.page")),n.createElement(r.a,{className:"spacer-left",doc:Promise.resolve().then(o.t.bind(null,897,7))})),n.createElement("div",{className:"page-description"},Object(a.l)("project_quality_gate.page.description")))}var s,u=o(554),p=(s=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o])},function(e,t){function o(){this.constructor=e}s(e,t),e.prototype=null===t?Object.create(t):(o.prototype=t.prototype,new o)}),d=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.mounted=!1,t.state={loading:!1},t.stopLoading=function(){t.mounted&&t.setState({loading:!1})},t.handleChange=function(e){var o=t.props.gate,n=null==o&&null!=e.value,i=null!=o&&null==e.value,l=null!=o&&o.id!==Number(e.value);(n||i||l)&&(t.setState({loading:!0}),t.props.onChange(o&&o.id,Number(e.value)).then(t.stopLoading,t.stopLoading))},t.renderGateName=function(e){return e.isDefault?n.createElement("span",null,n.createElement("strong",null,Object(a.l)("default")),": ",e.label):n.createElement("span",null,e.label)},t}return p(t,e),t.prototype.componentDidMount=function(){this.mounted=!0},t.prototype.componentWillUnmount=function(){this.mounted=!1},t.prototype.renderSelect=function(){var e=this.props,t=e.gate,o=e.allGates.map(function(e){return{value:String(e.id),label:e.name,isDefault:e.isDefault}});return n.createElement(u.c,{clearable:!1,disabled:this.state.loading,onChange:this.handleChange,optionRenderer:this.renderGateName,options:o,style:{width:300},value:t&&String(t.id),valueRenderer:this.renderGateName})},t.prototype.render=function(){return n.createElement("div",null,this.renderSelect(),this.state.loading&&n.createElement("i",{className:"spinner spacer-left"}))},t}(n.PureComponent),g=o(631),b=o(555),f=o(755),h=o(672),m=function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o])};return function(t,o){function n(){this.constructor=t}e(t,o),t.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}(),v=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.mounted=!1,t.state={loading:!0},t.handleChangeGate=function(e,o){var n=t.state.allGates;if(!e&&!o||!n)return Promise.resolve();var i=t.props.component,l={gateId:o||e,organization:i.organization,projectKey:i.key};return(o?Object(g.a)(l):Object(g.g)(l)).then(function(){if(t.mounted)if(Object(f.a)(Object(a.l)("project_quality_gate.successfully_updated")),o){var e=n.find(function(e){return e.id===o});e&&(t.setState({gate:e}),t.props.onComponentChange({qualityGate:e}))}else t.setState({gate:void 0})})},t}return m(t,e),t.prototype.componentDidMount=function(){this.mounted=!0,this.checkPermissions()?this.fetchQualityGates():Object(h.a)()},t.prototype.componentWillUnmount=function(){this.mounted=!1},t.prototype.checkPermissions=function(){var e=this.props.component.configuration;return!!(e&&e.showQualityGates)},t.prototype.fetchQualityGates=function(){var e=this,t=this.props.component;this.setState({loading:!0}),Promise.all([Object(g.i)({organization:t.organization}),Object(g.k)({organization:t.organization,project:t.key})]).then(function(t){var o=t[0].qualitygates,n=t[1];e.mounted&&e.setState({allGates:o,gate:n,loading:!1})},function(){e.mounted&&e.setState({loading:!1})})},t.prototype.render=function(){if(!this.checkPermissions())return null;var e=this.state,t=e.allGates,o=e.gate,i=e.loading;return n.createElement("div",{className:"page page-limited",id:"project-quality-gate"},n.createElement(b.a,{suggestions:"project_quality_gate"}),n.createElement(l.a,{title:Object(a.l)("project_quality_gate.page")}),n.createElement(c,null),i?n.createElement("i",{className:"spinner"}):t&&n.createElement(d,{allGates:t,gate:o,onChange:this.handleChangeGate}))},t}(n.PureComponent);t.default=v},553:function(e,t,o){"use strict";o.d(t,"a",function(){return c});var n=o(534),i=o(535),l=o(543),r=o(580),a=o(542);o(560);function c(e){var t=e.children,o=void 0===t?n.createElement(r.a,{fill:a.gray71,size:12}):t,c=e.tagName,s=void 0===c?"div":c;return n.createElement(s,{className:i("help-tooltip",e.className)},n.createElement(l.a,{mouseLeaveDelay:.25,onShow:e.onShow,overlay:e.overlay},n.createElement("span",{className:"display-inline-flex-center"},o)))}},554:function(e,t,o){"use strict";o.d(t,"c",function(){return f}),o.d(t,"b",function(){return h}),o.d(t,"a",function(){return m});var n=o(534),i=o(542),l=o(574),r=o(536),a=o(549),c=(o(565),Object.assign||function(e){for(var t,o=1,n=arguments.length;o<n;o++)for(var i in t=arguments[o])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}),s=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&(o[n[i]]=e[n[i]])}return o},u=o.e(268).then(o.bind(null,604)),p=Object(a.a)(function(){return u}),d=Object(a.a)(function(){return u.then(function(e){return{default:e.Creatable}})}),g=Object(a.a)(function(){return u.then(function(e){return{default:e.Async}})});function b(){return n.createElement(r.b,{className:"button-tiny spacer-left text-middle",color:i.gray60},n.createElement(l.a,{size:12}))}function f(e){var t=e.innerRef,o=s(e,["innerRef"]),i=p,l=!!o.clearable&&Boolean(o.value);return n.createElement(i,c({},o,{clearRenderer:b,clearable:l,ref:t}))}function h(e){var t=d;return n.createElement(t,c({},e,{clearRenderer:b}))}function m(e){return n.createElement(g,c({},e))}},555:function(e,t,o){"use strict";var n,i=o(534),l=o(538),r=(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o])},function(e,t){function o(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(o.prototype=t.prototype,new o)}),a=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r(t,e),t.prototype.componentDidMount=function(){this.context.suggestions.addSuggestions(this.props.suggestions)},t.prototype.componentDidUpdate=function(e){e.suggestions!==this.props.suggestions&&(this.context.suggestions.removeSuggestions(this.props.suggestions),this.context.suggestions.addSuggestions(e.suggestions))},t.prototype.componentWillUnmount=function(){this.context.suggestions.removeSuggestions(this.props.suggestions)},t.prototype.render=function(){return null},t.contextTypes={suggestions:l.object.isRequired},t}(i.PureComponent);t.a=a},559:function(e,t,o){(e.exports=o(540)(!1)).push([e.i,".help-tooltip{display:inline-flex;align-items:center;vertical-align:middle}.help-toolip-link{display:block;width:12px;height:12px;border:none}",""])},560:function(e,t,o){var n=o(559);"string"==typeof n&&(n=[[e.i,n,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};o(539)(n,i);n.locals&&(e.exports=n.locals)},562:function(e,t,o){"use strict";var n,i=o(534),l=o(553),r=o(549),a=(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o])},function(e,t){function o(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(o.prototype=t.prototype,new o)}),c=Object(r.a)(function(){return Promise.all([o.e(253),o.e(254)]).then(o.bind(null,18))}),s=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={open:!1},t.close=function(){t.setState({open:!1})},t}return a(t,e),t.prototype.componentDidMount=function(){var e=this;this.props.doc.then(function(t){var o=t.default;e.setState({content:o})},function(){}),document.addEventListener("scroll",this.close,!0)},t.prototype.componentWillUnmount=function(){document.removeEventListener("scroll",this.close,!0)},t.prototype.render=function(){return this.state.content?i.createElement(l.a,{className:this.props.className,overlay:i.createElement("div",{className:"abs-width-300"},i.createElement(c,{childProps:this.props.overlayProps,className:"cut-margins",content:this.state.content,isTooltip:!0}))},this.props.children):this.props.children||null},t}(i.PureComponent);t.a=s},564:function(e,t,o){(e.exports=o(540)(!1)).push([e.i,".Select{position:relative;display:inline-block;vertical-align:middle;font-size:12px;text-align:left}.Select,.Select div,.Select input,.Select span{box-sizing:border-box}.Select.is-disabled>.Select-control{background-color:#ebebeb!important;border-color:#ddd!important}.Select.is-disabled>.Select-control:hover{box-shadow:none!important}.Select.is-disabled .Select-arrow-zone{cursor:not-allowed!important;pointer-events:none!important}.Select.is-disabled .Select-placeholder,.Select.is-disabled .Select-value{color:#bbb!important}.Select-control{position:relative;display:table;width:100%;height:24px;line-height:22px;border:1px solid #cdcdcd;border-collapse:separate;border-radius:2px;background-color:#fff;color:#444;cursor:default;outline:none;overflow:hidden}.is-searchable.is-open>.Select-control{cursor:text}.is-open>.Select-control{border-bottom-right-radius:0;border-bottom-left-radius:0;background:#fff}.is-open>.Select-control>.Select-arrow{border-color:transparent transparent #999;border-width:0 5px 5px}.is-searchable.is-focused:not(.is-open)>.Select-control{cursor:text}.is-focused:not(.is-open)>.Select-control{border-color:#4b9fd5}.Select-placeholder,:not(.Select--multi)>.Select-control .Select-value{bottom:0;left:0;line-height:23px;padding-left:8px;padding-right:24px;position:absolute;right:0;top:0;max-width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.Select-value [class^=icon-]{padding-top:5px}.Select-value img,.Select-value svg{padding-top:3px}.Select-option [class^=icon-],.Select-option img,.Select-option svg{padding-top:2px}.has-value.is-pseudo-focused:not(.Select--multi)>.Select-control>.Select-value .Select-value-label,.has-value:not(.Select--multi)>.Select-control>.Select-value .Select-value-label{color:#444}.has-value.is-pseudo-focused:not(.Select--multi)>.Select-control>.Select-value a.Select-value-label,.has-value:not(.Select--multi)>.Select-control>.Select-value a.Select-value-label{cursor:pointer;text-decoration:none}.has-value.is-pseudo-focused:not(.Select--multi)>.Select-control>.Select-value a.Select-value-label:focus,.has-value.is-pseudo-focused:not(.Select--multi)>.Select-control>.Select-value a.Select-value-label:hover,.has-value:not(.Select--multi)>.Select-control>.Select-value a.Select-value-label:focus,.has-value:not(.Select--multi)>.Select-control>.Select-value a.Select-value-label:hover{color:#007eff;outline:none;text-decoration:underline}.Select-input{vertical-align:top;height:22px;padding-left:8px;padding-right:8px;outline:none}.Select-input>input{background:none transparent;border:0 none;cursor:default;display:inline-block;font-family:inherit;font-size:12px;height:22px;margin:0;outline:none;padding:0;-webkit-appearance:none}.is-focused .Select-input>input{cursor:text}.has-value.is-pseudo-focused .Select-input{opacity:0}.Select-control:not(.is-searchable)>.Select-input{outline:none}.Select-loading-zone{cursor:pointer;display:table-cell;position:relative;text-align:center;vertical-align:middle;width:16px}.Select-loading{animation:Select-animation-spin .4s infinite linear;box-sizing:border-box;border-radius:50%;border:2px solid #ccc;border-right-color:#444;display:inline-block}.Select-clear-zone,.Select-loading{width:16px;height:16px;position:relative;vertical-align:middle}.Select-clear-zone{animation:Select-animation-fadeIn .2s;color:#999;cursor:pointer;display:table-cell;text-align:center;padding-right:4px}.Select-clear-zone:hover .Select-clear{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj48c3ZnIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIHZpZXdCb3g9IjAgMCAxNCAxNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4bWw6c3BhY2U9InByZXNlcnZlIiBzdHlsZT0iZmlsbC1ydWxlOmV2ZW5vZGQ7Y2xpcC1ydWxlOmV2ZW5vZGQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjEuNDE0MjE7Ij4gICAgPGcgdHJhbnNmb3JtPSJtYXRyaXgoMC4wMjM0Mzc1LDAsMCwwLjAyMzQzNzUsLTUuMDE1NjIsLTUuMDE1NjIpIj4gICAgICAgIDxwYXRoIGQ9Ik04MTAsMjc0TDU3Miw1MTJMODEwLDc1MEw3NTAsODEwTDUxMiw1NzJMMjc0LDgxMEwyMTQsNzUwTDQ1Miw1MTJMMjE0LDI3NEwyNzQsMjE0TDUxMiw0NTJMNzUwLDIxNEw4MTAsMjc0WiIgc3R5bGU9ImZpbGw6cmdiKDIzMSwyMCw1Nik7ZmlsbC1ydWxlOm5vbnplcm87Ii8+ICAgIDwvZz48L3N2Zz4=)}.Select-clear{display:block;width:9px;height:9px;background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj48c3ZnIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIHZpZXdCb3g9IjAgMCAxNCAxNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4bWw6c3BhY2U9InByZXNlcnZlIiBzdHlsZT0iZmlsbC1ydWxlOmV2ZW5vZGQ7Y2xpcC1ydWxlOmV2ZW5vZGQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjEuNDE0MjE7Ij4gICAgPGcgdHJhbnNmb3JtPSJtYXRyaXgoMC4wMjM0Mzc1LDAsMCwwLjAyMzQzNzUsLTUuMDE1NjIsLTUuMDE1NjIpIj4gICAgICAgIDxwYXRoIGQ9Ik04MTAsMjc0TDU3Miw1MTJMODEwLDc1MEw3NTAsODEwTDUxMiw1NzJMMjc0LDgxMEwyMTQsNzUwTDQ1Miw1MTJMMjE0LDI3NEwyNzQsMjE0TDUxMiw0NTJMNzUwLDIxNEw4MTAsMjc0WiIgc3R5bGU9ImZpbGw6cmdiKDE1MywxNTMsMTUzKTtmaWxsLXJ1bGU6bm9uemVybzsiLz4gICAgPC9nPjwvc3ZnPg==);background-size:9px 9px;text-indent:-9999px}.Select--multi .Select-clear-zone{width:17px}.Select-arrow-zone{cursor:pointer;display:table-cell;position:relative;text-align:center;vertical-align:middle;width:20px;padding-right:5px}.Select-arrow{border-color:#999 transparent transparent;border-style:solid;border-width:4px 4px 2px;display:inline-block;height:0;width:0}.is-open .Select-arrow,.Select-arrow-zone:hover>.Select-arrow{border-top-color:#666}@keyframes Select-animation-fadeIn{0%{opacity:0}to{opacity:1}}.Select-menu-outer{border-bottom-right-radius:4px;border-bottom-left-radius:4px;background-color:#fff;border:1px solid #ccc;border-top-color:#e6e6e6;box-sizing:border-box;margin-top:-1px;max-height:200px;position:absolute;top:100%;width:100%;z-index:7500;-webkit-overflow-scrolling:touch;box-shadow:0 6px 12px rgba(0,0,0,.175)}.Select-menu{max-height:198px;padding:5px 0;overflow-y:auto}.Select-option{display:block;line-height:20px;padding:0 8px;box-sizing:border-box;color:#444;font-size:12px;cursor:pointer;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.Select-option:last-child{border-bottom-right-radius:2px;border-bottom-left-radius:2px}.Select-option.is-focused{background-color:#f3f3f3}.Select-option.is-disabled{font-weight:600;cursor:default}.Select-noresults{box-sizing:border-box;color:#999;cursor:default;display:block;padding:8px 10px}.Select--multi .Select-value{background-color:rgba(0,126,255,.08);border-radius:2px;border:1px solid rgba(0,126,255,.24);color:#444;display:inline-block;font-size:12px;line-height:14px;margin:1px 4px 1px 1px;vertical-align:top}.Select-value-label{font-size:12px}.is-searchable.is-open .Select-value-label{opacity:.5}.Select-big .Select-control{padding-top:4px;padding-bottom:4px}.Select-big .Select-placeholder{margin-top:4px;margin-bottom:4px}.Select-big .Select-value-label{display:inline-block;margin-top:7px;line-height:16px}.Select-big .Select-option{padding:7px 8px;line-height:16px}.Select-big img,.Select-big svg{padding-top:0}.Select--multi .Select-value-icon,.Select--multi .Select-value-label{display:inline-block;vertical-align:middle}.Select--multi .Select-value-label{display:inline-block;max-width:200px;border-bottom-right-radius:2px;border-top-right-radius:2px;cursor:default;padding:2px 5px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.Select--multi a.Select-value-label{color:#007eff;cursor:pointer;text-decoration:none}.Select--multi a.Select-value-label:hover{text-decoration:underline}.Select--multi .Select-value-icon{cursor:pointer;border-bottom-left-radius:2px;border-top-left-radius:2px;border-right:1px solid rgba(0,126,255,.24);padding:1px 5px}.Select--multi .Select-value-icon:focus,.Select--multi .Select-value-icon:hover{background-color:rgba(0,113,230,.08);color:#0071e6}.Select--multi .Select-value-icon:active{background-color:rgba(0,126,255,.24)}.Select--multi.is-disabled .Select-value{background-color:#fcfcfc;border:1px solid #e3e3e3;color:#444}.Select--multi.is-disabled .Select-value-icon{cursor:not-allowed;border-right:1px solid #e3e3e3}.Select--multi.is-disabled .Select-value-icon:active,.Select--multi.is-disabled .Select-value-icon:focus,.Select--multi.is-disabled .Select-value-icon:hover{background-color:#fcfcfc}.Select-aria-only{display:none}@keyframes Select-animation-spin{to{transform:rotate(1turn)}}",""])},565:function(e,t,o){var n=o(564);"string"==typeof n&&(n=[[e.i,n,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};o(539)(n,i);n.locals&&(e.exports=n.locals)},631:function(e,t,o){"use strict";o.d(t,"i",function(){return r}),o.d(t,"h",function(){return a}),o.d(t,"d",function(){return c}),o.d(t,"f",function(){return s}),o.d(t,"l",function(){return u}),o.d(t,"b",function(){return p}),o.d(t,"n",function(){return d}),o.d(t,"c",function(){return g}),o.d(t,"o",function(){return b}),o.d(t,"e",function(){return f}),o.d(t,"k",function(){return h}),o.d(t,"m",function(){return m}),o.d(t,"a",function(){return v}),o.d(t,"g",function(){return S}),o.d(t,"j",function(){return y});var n=o(17),i=o(552),l=Object.assign||function(e){for(var t,o=1,n=arguments.length;o<n;o++)for(var i in t=arguments[o])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e};function r(e){return Object(n.getJSON)("/api/qualitygates/list",e).catch(i.a)}function a(e){return Object(n.getJSON)("/api/qualitygates/show",e).catch(i.a)}function c(e){return Object(n.postJSON)("/api/qualitygates/create",e).catch(i.a)}function s(e){return Object(n.post)("/api/qualitygates/destroy",e).catch(i.a)}function u(e){return Object(n.post)("/api/qualitygates/rename",e).catch(i.a)}function p(e){return Object(n.postJSON)("/api/qualitygates/copy",e).catch(i.a)}function d(e){return Object(n.post)("/api/qualitygates/set_as_default",e).catch(i.a)}function g(e){return Object(n.postJSON)("/api/qualitygates/create_condition",e)}function b(e){return Object(n.postJSON)("/api/qualitygates/update_condition",e)}function f(e){return Object(n.post)("/api/qualitygates/delete_condition",e)}function h(e){return Object(n.getJSON)("/api/qualitygates/get_by_project",e).then(function(e){var t=e.qualityGate;return t&&l({},t,{isDefault:t.default})},i.a)}function m(e){return Object(n.getJSON)("/api/qualitygates/search",e).catch(i.a)}function v(e){return Object(n.post)("/api/qualitygates/select",e).catch(i.a)}function S(e){return Object(n.post)("/api/qualitygates/deselect",e).catch(i.a)}function y(e){return Object(n.getJSON)("/api/qualitygates/application_status",e).catch(i.a)}},672:function(e,t,o){"use strict";var n=o(637),i=o(643),l=o(677);t.a=function(){var e=Object(n.default)(),t=Object(i.a)(),o=window.location.pathname+window.location.search+window.location.hash;e.dispatch(Object(l.c)()),t.replace({pathname:"/sessions/new",query:{return_to:o}})}},755:function(e,t,o){"use strict";o.d(t,"a",function(){return l});var n=o(637),i=o(582);function l(e){Object(n.default)().dispatch(i.b(e))}},897:function(e,t){e.exports="The Default gate is applied to all projects not explicitly assigned to a gate. Quality Profile and Gate administrators can assign projects to a gate from the Quality Profile page. Project administrators can also choose a non-default gate.\n"}}]);
//# sourceMappingURL=293.e6bc5760.chunk.js.map