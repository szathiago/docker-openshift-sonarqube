(window.webpackJsonp=window.webpackJsonp||[]).push([[256],{1050:function(e,t,n){var r=n(1415);"string"==typeof r&&(r=[[e.i,r,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n(539)(r,i);r.locals&&(e.exports=r.locals)},1051:function(e,t,n){"use strict";var r,i=n(534),a=n(556),l=n(7),o=n(612),s=n(955),c=n(563),p=n(655),d=(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),u=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.handleLanguageClick=function(e){e.preventDefault(),e.currentTarget.blur(),t.props.onFilterChange({languages:[t.props.rule.lang]})},t.handleTypeClick=function(e){e.preventDefault(),e.currentTarget.blur(),t.props.onFilterChange({types:[t.props.rule.type]})},t.handleSeverityClick=function(e){e.preventDefault(),e.currentTarget.blur(),t.props.rule.severity&&t.props.onFilterChange({severities:[t.props.rule.severity]})},t.handleTagClick=function(e){e.preventDefault(),e.currentTarget.blur();var n=e.currentTarget.dataset.tag;n&&t.props.onFilterChange({tags:[n]})},t}return d(t,e),t.prototype.render=function(){var e=this,t=this.props.rule,n=t.tags,r=void 0===n?[]:n,d=t.sysTags,u=void 0===d?[]:d,m=t.severity,g=r.concat(u);return i.createElement(a.b,{className:"display-inline-block",overlay:i.createElement(i.Fragment,null,i.createElement("ul",{className:"menu"},i.createElement("li",{className:"menu-header"},Object(l.l)("coding_rules.filter_similar_rules")),i.createElement("li",null,i.createElement("a",{"data-field":"language",href:"#",onClick:this.handleLanguageClick},t.langName)),i.createElement("li",null,i.createElement("a",{"data-field":"type",href:"#",onClick:this.handleTypeClick},Object(l.l)("issue.type",t.type))),m&&i.createElement("li",null,i.createElement("a",{"data-field":"severity",href:"#",onClick:this.handleSeverityClick},i.createElement(o.a,{severity:t.severity}))),g.length>0&&i.createElement(i.Fragment,null,i.createElement("li",{className:"divider"}),g.map(function(t){return i.createElement("li",{key:t},i.createElement("a",{"data-field":"tag","data-tag":t,href:"#",onClick:e.handleTagClick},i.createElement(p.a,{className:"icon-half-transparent little-spacer-right text-middle"}),i.createElement("span",{className:"text-middle"},t)))}))))},i.createElement("a",{className:"js-rule-filter link-no-underline spacer-left dropdown-toggle",href:"#",title:Object(l.l)("coding_rules.filter_similar_rules")},i.createElement(s.a,{className:"icon-half-transparent"}),i.createElement(c.a,{className:"icon-half-transparent"})))},t}(i.PureComponent);t.a=u},1415:function(e,t,n){(e.exports=n(540)(!1)).push([e.i,".coding-rules-extended-view .coding-rules-list{display:none}.coding-rules-extended-view .coding-rules-details{display:block}.coding-rules-detail-title{position:relative;display:inline-block;margin:16px 0;font-size:16px;font-weight:400}.coding-rules-detail-quality-profile-parameter{display:block;height:100%;padding-top:0;padding-right:10px}.coding-rules-detail-quality-profile-parameter .key,.coding-rules-detail-quality-profile-parameter .sep,.coding-rules-detail-quality-profile-parameter .value{display:inline;vertical-align:top}.coding-rules-detail-quality-profile-parameter .value{display:inline-block;vertical-align:top;line-height:23px;max-width:300px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font-family:Consolas,Liberation Mono,Menlo,Courier,monospace}.coding-rules-detail-quality-profile-parameter+.coding-rules-detail-quality-profile-parameter{margin-top:0}.coding-rules-detail-properties{display:flex;flex-wrap:wrap;align-items:center;margin-top:8px}.coding-rules-detail-properties+.coding-rules-detail-properties{margin-top:-10px}.coding-rules-detail-property{display:flex;align-items:center;margin-right:16px;margin-bottom:8px;font-size:12px}.coding-rules-detail-tag+.coding-rules-detail-tag{margin-left:10px}.coding-rules-detail-tags-change{cursor:pointer}.coding-rules-detail-tags-change:hover span{text-decoration:underline}.coding-rules-detail-tag-edit{line-height:1}.coding-rules-details-tag-edit-cancel{vertical-align:middle}.coding-rules-detail-description{margin:20px 0}.coding-rules-detail-description-extra{margin-top:-10px}.coding-rules-detail-extend-description-form{margin:10px 0}.coding-rules-detail-parameters{width:100%;margin:10px 0 20px}.coding-rules-detail-parameter-name{width:1px;vertical-align:top;padding:5px 10px 5px 0;font-weight:700}.coding-rules-detail-parameter-description{vertical-align:top;padding:5px}.coding-rules-detail-parameter-value{font-family:Consolas,Liberation Mono,Menlo,Courier,monospace;word-break:break-all}.coding-rules-detail-list,.coding-rules-detail-quality-profiles{width:100%;line-height:22px}.coding-rules-detail-list td,.coding-rules-detail-quality-profiles td{border-top:1px solid #e6e6e6}.coding-rules-detail-list tr:first-child td,.coding-rules-detail-quality-profiles tr:first-child td{border-top:none}.coding-rules-detail-list-name,.coding-rules-detail-quality-profile-name{vertical-align:top;width:1px;padding:8px 5px 8px 0;font-weight:600;white-space:nowrap}.coding-rules-detail-list-severity,.coding-rules-detail-quality-profile-severity{vertical-align:top;width:1px;padding:8px 5px;white-space:nowrap}.coding-rules-detail-quality-profile-severity i{margin-top:2px}.coding-rules-detail-list-parameters,.coding-rules-detail-quality-profile-parameters{vertical-align:top;padding:8px 5px}.coding-rules-detail-list-actions,.coding-rules-detail-quality-profile-actions{vertical-align:top;width:1px;padding:8px 0 8px 5px;text-align:right;white-space:nowrap}.coding-rules-detail-quality-profile-inheritance{font-size:12px;font-weight:400}.coding-rules-detail-quality-profiles-activation{margin-top:-3px;margin-left:10px}input.coding-rules-name-key{width:100%}textarea.coding-rules-markdown-description{width:100%;margin-bottom:4px}.coding-rules-most-violated-projects td{border-top-color:transparent}.coding-rules-most-violated-projects tr:first-child+tr td{border-top-color:#e6e6e6}.coding-rules-most-violated-projects .coding-rules-detail-list-name{font-weight:400}.coding-rule{padding:8px 10px 8px 8px;border:1px solid transparent;background-color:#fff}.coding-rule.selected{border-color:#4b9fd5!important}.coding-rule+.coding-rule{border-top-color:#e6e6e6}.coding-rule.selected+.coding-rule{border-top-color:transparent}.coding-rule-table{width:100%}.coding-rule-table td{vertical-align:top}.coding-rule-table+.coding-rule-table{margin-top:5px}.coding-rule-table-meta-cell{width:1px;white-space:nowrap}@media (max-width:1320px){.coding-rule-table .tags-list span{max-width:100px}}.coding-rule-title{line-height:20px;font-size:13px}.coding-rule-meta{padding:2px;padding-left:30px;font-size:12px}.coding-rule-activation{width:40px;line-height:19.5px}.coding-rule-activation-actions{padding-left:20px}.coding-rule-section-separator{height:0;margin:10px 0;border-top:1px solid #e6e6e6}",""])},1416:function(e,t){e.exports="Custom rules are created by administrators from templates, and are the only fully-editable rules.\n"},553:function(e,t,n){"use strict";n.d(t,"a",function(){return s});var r=n(534),i=n(535),a=n(543),l=n(580),o=n(542);n(560);function s(e){var t=e.children,n=void 0===t?r.createElement(l.a,{fill:o.gray71,size:12}):t,s=e.tagName,c=void 0===s?"div":s;return r.createElement(c,{className:i("help-tooltip",e.className)},r.createElement(a.a,{mouseLeaveDelay:.25,onShow:e.onShow,overlay:e.overlay},r.createElement("span",{className:"display-inline-flex-center"},n)))}},559:function(e,t,n){(e.exports=n(540)(!1)).push([e.i,".help-tooltip{display:inline-flex;align-items:center;vertical-align:middle}.help-toolip-link{display:block;width:12px;height:12px;border:none}",""])},560:function(e,t,n){var r=n(559);"string"==typeof r&&(r=[[e.i,r,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n(539)(r,i);r.locals&&(e.exports=r.locals)},562:function(e,t,n){"use strict";var r,i=n(534),a=n(553),l=n(549),o=(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),s=Object(l.a)(function(){return Promise.all([n.e(253),n.e(254)]).then(n.bind(null,18))}),c=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={open:!1},t.close=function(){t.setState({open:!1})},t}return o(t,e),t.prototype.componentDidMount=function(){var e=this;this.props.doc.then(function(t){var n=t.default;e.setState({content:n})},function(){}),document.addEventListener("scroll",this.close,!0)},t.prototype.componentWillUnmount=function(){document.removeEventListener("scroll",this.close,!0)},t.prototype.render=function(){return this.state.content?i.createElement(a.a,{className:this.props.className,overlay:i.createElement("div",{className:"abs-width-300"},i.createElement(s,{childProps:this.props.overlayProps,className:"cut-margins",content:this.state.content,isTooltip:!0}))},this.props.children):this.props.children||null},t}(i.PureComponent);t.a=c},567:function(e,t,n){"use strict";var r,i=n(534),a=n(548),l=(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),o=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.mounted=!1,t.state={submitting:!1},t.stopSubmitting=function(){t.mounted&&t.setState({submitting:!1})},t.handleCloseClick=function(e){e&&(e.preventDefault(),e.currentTarget.blur()),t.props.onClose()},t.handleFormSubmit=function(e){e.preventDefault(),t.submit()},t.handleSubmitClick=function(e){e&&(e.preventDefault(),e.currentTarget.blur()),t.submit()},t.submit=function(){var e=t.props.onSubmit();e&&(t.setState({submitting:!0}),e.then(t.stopSubmitting,t.stopSubmitting))},t}return l(t,e),t.prototype.componentDidMount=function(){this.mounted=!0},t.prototype.componentWillUnmount=function(){this.mounted=!1},t.prototype.render=function(){return i.createElement(a.a,{contentLabel:this.props.header,onRequestClose:this.props.onClose},this.props.children({onCloseClick:this.handleCloseClick,onFormSubmit:this.handleFormSubmit,onSubmitClick:this.handleSubmitClick,submitting:this.state.submitting}))},t}(i.Component);t.a=o},626:function(e,t,n){"use strict";n.d(t,"e",function(){return a}),n.d(t,"f",function(){return l}),n.d(t,"g",function(){return o}),n.d(t,"c",function(){return s}),n.d(t,"d",function(){return c}),n.d(t,"a",function(){return p}),n.d(t,"b",function(){return d}),n.d(t,"h",function(){return u});var r=n(17),i=n(552);function a(e){return Object(r.getJSON)("/api/rules/app",e).catch(i.a)}function l(e){return Object(r.getJSON)("/api/rules/search",e).catch(i.a)}function o(e,t){var n=e.facets.find(function(e){return e.property===t});return n?n.values:[]}function s(e){return Object(r.getJSON)("/api/rules/show",e).catch(i.a)}function c(e){return Object(r.getJSON)("/api/rules/tags",e).then(function(e){return e.tags},i.a)}function p(e){return Object(r.postJSON)("/api/rules/create",e).then(function(e){return e.rule},function(e){return e&&e.response&&409===e.response.status?Promise.reject(e.response):Object(i.a)(e)})}function d(e){return Object(r.post)("/api/rules/delete",e).catch(i.a)}function u(e){return Object(r.postJSON)("/api/rules/update",e).then(function(e){return e.rule},i.a)}},988:function(e,t,n){"use strict";var r=n(534),i=n(567),a=n(536),l=n(7);function o(e){var t=e.onCancel,n=e.onSubmit,o=Object(l.l)("coding_rules.remove_extended_description");return r.createElement(i.a,{header:o,onClose:t,onSubmit:n},function(e){var t=e.onCloseClick,n=e.onFormSubmit,i=e.submitting;return r.createElement("form",{onSubmit:n},r.createElement("header",{className:"modal-head"},r.createElement("h2",null,o)),r.createElement("div",{className:"modal-body"},Object(l.l)("coding_rules.remove_extended_description.confirm")),r.createElement("footer",{className:"modal-foot"},i&&r.createElement("i",{className:"spinner spacer-right"}),r.createElement(a.f,{className:"button-red",disabled:i,id:"coding-rules-detail-extend-description-remove-submit"},Object(l.l)("remove")),r.createElement(a.e,{onClick:t},Object(l.l)("cancel"))))})}var s,c=n(626),p=n(819),d=(s=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},function(e,t){function n(){this.constructor=e}s(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),u=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.mounted=!1,t.state={description:"",descriptionForm:!1,submitting:!1,removeDescriptionModal:!1},t.handleDescriptionChange=function(e){return t.setState({description:e.currentTarget.value})},t.handleCancelClick=function(){t.setState({descriptionForm:!1})},t.handleSaveClick=function(){t.updateDescription(t.state.description)},t.handleRemoveDescriptionClick=function(){t.setState({removeDescriptionModal:!0})},t.handleCancelRemoving=function(){return t.setState({removeDescriptionModal:!1})},t.handleConfirmRemoving=function(){t.setState({removeDescriptionModal:!1}),t.updateDescription("")},t.updateDescription=function(e){t.setState({submitting:!0}),Object(c.h)({key:t.props.ruleDetails.key,markdown_note:e,organization:t.props.organization}).then(function(e){t.props.onChange(e),t.mounted&&t.setState({submitting:!1,descriptionForm:!1})},function(){t.mounted&&t.setState({submitting:!1})})},t.handleExtendDescriptionClick=function(){t.setState({description:t.props.ruleDetails.mdNote||"",descriptionForm:!0})},t.renderDescription=function(){return r.createElement("div",{id:"coding-rules-detail-description-extra"},void 0!==t.props.ruleDetails.htmlNote&&r.createElement("div",{className:"rule-desc spacer-bottom markdown",dangerouslySetInnerHTML:{__html:t.props.ruleDetails.htmlNote}}),t.props.canWrite&&r.createElement(a.a,{id:"coding-rules-detail-extend-description",onClick:t.handleExtendDescriptionClick},Object(l.l)("coding_rules.extend_description")))},t.renderForm=function(){return r.createElement("div",{className:"coding-rules-detail-extend-description-form"},r.createElement("table",{className:"width100"},r.createElement("tbody",null,r.createElement("tr",null,r.createElement("td",{className:"width100",colSpan:2},r.createElement("textarea",{autoFocus:!0,id:"coding-rules-detail-extend-description-text",onChange:t.handleDescriptionChange,rows:4,style:{width:"100%",marginBottom:4},value:t.state.description}))),r.createElement("tr",null,r.createElement("td",null,r.createElement(a.a,{disabled:t.state.submitting,id:"coding-rules-detail-extend-description-submit",onClick:t.handleSaveClick},Object(l.l)("save")),void 0!==t.props.ruleDetails.mdNote&&r.createElement(r.Fragment,null,r.createElement(a.a,{className:"button-red spacer-left",disabled:t.state.submitting,id:"coding-rules-detail-extend-description-remove",onClick:t.handleRemoveDescriptionClick},Object(l.l)("remove")),t.state.removeDescriptionModal&&r.createElement(o,{onCancel:t.handleCancelRemoving,onSubmit:t.handleConfirmRemoving})),r.createElement(a.e,{className:"spacer-left",disabled:t.state.submitting,id:"coding-rules-detail-extend-description-cancel",onClick:t.handleCancelClick},Object(l.l)("cancel")),t.state.submitting&&r.createElement("i",{className:"spinner spacer-left"})),r.createElement("td",{className:"text-right"},r.createElement(p.a,null))))))},t}return d(t,e),t.prototype.componentDidMount=function(){this.mounted=!0},t.prototype.componentWillUnmount=function(){this.mounted=!1},t.prototype.render=function(){var e=this.props.ruleDetails,t=!e.isExternal||"UNKNOWN"!==e.type;return r.createElement("div",{className:"js-rule-description"},t?r.createElement("div",{className:"coding-rules-detail-description rule-desc markdown",dangerouslySetInnerHTML:{__html:e.htmlDesc||""}}):r.createElement("div",{className:"coding-rules-detail-description rule-desc markdown"},Object(l.m)("issue.external_issue_description",e.name)),!e.templateKey&&r.createElement("div",{className:"coding-rules-detail-description coding-rules-detail-description-extra"},!this.state.descriptionForm&&this.renderDescription(),this.state.descriptionForm&&this.props.canWrite&&this.renderForm()))},t}(r.PureComponent);t.a=u},989:function(e,t,n){"use strict";var r,i=n(534),a=n(541),l=n(634),o=n.n(l),s=n(583),c=n.n(s),p=n(571),d=n.n(p),u=n(821),m=n(626),g=(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),f=10,h=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.mounted=!1,t.state={searchResult:[]},t.onSearch=function(e){return Object(m.d)({q:e,ps:Math.min(t.props.tags.length+f,100),organization:t.props.organization}).then(function(e){t.mounted&&t.setState({searchResult:d.a.apply(void 0,[e].concat(t.props.sysTags))})},function(){})},t.onSelect=function(e){t.props.setTags(c()(t.props.tags.concat([e])))},t.onUnselect=function(e){t.props.setTags(d()(t.props.tags,e))},t}return g(t,e),t.prototype.componentDidMount=function(){this.mounted=!0},t.prototype.componentWillUnmount=function(){this.mounted=!1},t.prototype.render=function(){var e=o()(this.state.searchResult,this.props.tags);return i.createElement(u.a,{listSize:f,onSearch:this.onSearch,onSelect:this.onSelect,onUnselect:this.onUnselect,selectedTags:this.props.tags,tags:e})},t}(i.PureComponent),y=n(1051),v=n(558),b=n(547),x=n(682),E=n(537);function _(e){var t=e.className,n=e.fill,r=void 0===n?"currentColor":n,a=e.size;return i.createElement(E.a,{className:t,size:a},i.createElement("path",{d:"M8 3.071c2.724 0 4.929 2.204 4.929 4.929s-2.204 4.929-4.929 4.929c-2.724 0-4.929-2.204-4.929-4.929s2.204-4.929 4.929-4.929zM8 1.357c-3.669 0-6.643 2.974-6.643 6.643s2.974 6.643 6.643 6.643 6.643-2.974 6.643-6.643-2.974-6.643-6.643-6.643zM8 6.286c0.945 0 1.714 0.769 1.714 1.714s-0.769 1.714-1.714 1.714-1.714-0.769-1.714-1.714 0.769-1.714 1.714-1.714zM8 4.571c-1.893 0-3.429 1.535-3.429 3.429s1.535 3.429 3.429 3.429 3.429-1.535 3.429-3.429-1.535-3.429-3.429-3.429z",style:{fill:r}}))}var N=n(543),O=n(562),C=n(7),w=n(603),k=n(612),j=n(556),S=n(699),D=n(569),T=n(536),F=n(657),P=function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),R="external_",z=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.renderType=function(){var e=t.props.ruleDetails;return i.createElement(N.a,{overlay:Object(C.l)("coding_rules.type.tooltip",e.type)},i.createElement("li",{className:"coding-rules-detail-property","data-meta":"type"},i.createElement(w.a,{className:"little-spacer-right",query:e.type}),Object(C.l)("issue.type",e.type)))},t.renderSeverity=function(){return i.createElement(N.a,{overlay:Object(C.l)("default_severity")},i.createElement("li",{className:"coding-rules-detail-property","data-meta":"severity"},i.createElement(k.a,{className:"display-inline-flex-center",severity:t.props.ruleDetails.severity})))},t.renderStatus=function(){var e=t.props.ruleDetails;return"READY"===e.status?null:i.createElement(N.a,{overlay:Object(C.l)("status")},i.createElement("li",{className:"coding-rules-detail-property","data-meta":"status"},i.createElement("span",{className:"badge badge-normal-size badge-danger-light"},Object(C.l)("rules.status",e.status))))},t.renderTags=function(){var e=t.props,n=e.canWrite,r=e.ruleDetails,a=r.sysTags,l=void 0===a?[]:a,o=r.tags,s=void 0===o?[]:o,c=l.concat(s);return i.createElement("li",{className:"coding-rules-detail-property","data-meta":"tags"},t.props.canWrite?i.createElement(j.b,{closeOnClick:!1,closeOnClickOutside:!0,overlay:i.createElement(h,{organization:t.props.organization,setTags:t.props.onTagsChange,sysTags:l,tags:s}),overlayPlacement:F.b.BottomLeft},i.createElement(T.a,{className:"button-link"},i.createElement(S.a,{allowUpdate:n,tags:c.length>0?c:[Object(C.l)("coding_rules.no_tags")]}))):i.createElement(S.a,{allowUpdate:n,className:"display-flex-center",tags:c.length>0?c:[Object(C.l)("coding_rules.no_tags")]}))},t.renderCreationDate=function(){return i.createElement("li",{className:"coding-rules-detail-property","data-meta":"available-since"},i.createElement("span",{className:"little-spacer-right"},Object(C.l)("coding_rules.available_since")),i.createElement(D.a,{date:t.props.ruleDetails.createdAt}))},t.renderRepository=function(){var e=t.props,n=e.referencedRepositories,r=e.ruleDetails,a=n[r.repo];return a?i.createElement(N.a,{overlay:Object(C.l)("coding_rules.repository_language")},i.createElement("li",{className:"coding-rules-detail-property","data-meta":"repository"},a.name," (",r.langName,")")):null},t.renderTemplate=function(){return t.props.ruleDetails.isTemplate?i.createElement(N.a,{overlay:Object(C.l)("coding_rules.rule_template.title")},i.createElement("li",{className:"coding-rules-detail-property"},Object(C.l)("coding_rules.rule_template"))):null},t.renderParentTemplate=function(){var e=t.props.ruleDetails;return e.templateKey?i.createElement("li",{className:"coding-rules-detail-property"},Object(C.l)("coding_rules.custom_rule")," (",i.createElement(a.Link,{to:Object(b.x)(e.templateKey,t.props.organization)},Object(C.l)("coding_rules.show_template")),")",i.createElement(O.a,{className:"little-spacer-left",doc:Promise.resolve().then(n.t.bind(null,1416,7))})):null},t.renderRemediation=function(){var e=t.props.ruleDetails;return e.debtRemFnType?i.createElement(N.a,{overlay:Object(C.l)("coding_rules.remediation_function")},i.createElement("li",{className:"coding-rules-detail-property","data-meta":"remediation-function"},Object(C.l)("coding_rules.remediation_function",e.debtRemFnType),":",void 0!==e.debtRemFnOffset&&" "+e.debtRemFnOffset,void 0!==e.debtRemFnCoeff&&" +"+e.debtRemFnCoeff,void 0!==e.effortToFixDescription&&" "+e.effortToFixDescription)):null},t.renderScope=function(){var e=t.props.ruleDetails.scope||v.e.Main;return i.createElement(N.a,{overlay:Object(C.l)("coding_rules.scope.title")},i.createElement("li",{className:"coding-rules-detail-property"},i.createElement(_,{className:"little-spacer-right"}),Object(C.l)("coding_rules.scope",e)))},t.renderExternalBadge=function(){var e=t.props.ruleDetails;if(!e.repo)return null;var n=e.repo.replace(new RegExp("^"+R),"");return n?i.createElement(N.a,{overlay:Object(C.m)("coding_rules.external_rule.engine",n)},i.createElement("li",{className:"coding-rules-detail-property"},i.createElement("div",{className:"outline-badge badge-tiny-height spacer-left vertical-text-top"},n))):null},t}return P(t,e),t.prototype.render=function(){var e=this.props.ruleDetails,t=!e.isExternal||"UNKNOWN"!==e.type;return i.createElement("div",{className:"js-rule-meta"},i.createElement("header",{className:"page-header"},i.createElement("div",{className:"pull-right"},i.createElement("span",{className:"note text-middle"},e.key),!e.isExternal&&i.createElement(a.Link,{className:"coding-rules-detail-permalink link-no-underline spacer-left text-middle",title:Object(C.l)("permalink"),to:Object(b.x)(e.key,this.props.organization)},i.createElement(x.a,null)),!this.props.hideSimilarRulesFilter&&i.createElement(y.a,{onFilterChange:this.props.onFilterChange,rule:e})),i.createElement("h3",{className:"page-title coding-rules-detail-header"},i.createElement("big",null,e.name))),t&&i.createElement("ul",{className:"coding-rules-detail-properties"},this.renderType(),this.renderSeverity(),!e.isExternal&&i.createElement(i.Fragment,null,this.renderStatus(),this.renderScope()),this.renderTags(),!e.isExternal&&this.renderCreationDate(),this.renderRepository(),!e.isExternal&&i.createElement(i.Fragment,null,this.renderTemplate(),this.renderParentTemplate(),this.renderRemediation()),e.isExternal&&this.renderExternalBadge()))},t}(i.PureComponent);t.a=z}}]);
//# sourceMappingURL=256.f80af949.chunk.js.map