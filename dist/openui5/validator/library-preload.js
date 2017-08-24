jQuery.sap.registerPreloadedModules({
	"version": "2.0",
	"name": "openui5.validator.openui5.validator.library-preload",
	"modules": {
		"openui5.validator/openui5/validator/library.js": "sap.ui.define([\"sap/ui/core/library\"],function(){\"use strict\";var i={};return sap.ui.getCore().initLibrary({name:\"openui5.validator\",dependencies:[\"sap.ui.core\"],controls:[\"openui5.validator.Validator\"],noLibraryCSS:!0,version:\"${version}\"}),i.validator},!1);",
		"openui5.validator/openui5/validator/Validator.js": "sap.ui.define([\"jquery.sap.global\",\"sap/ui/base/Object\",\"sap/ui/core/Control\",\"sap/ui/core/ValueState\",\"sap/ui/core/MessageType\",\"sap/ui/core/message/Message\",\"./thirdparty/ajv.min\",\"./library\"],function(t,e,r,a,o,s){\"use strict\";var i=[\"dateValue\",\"value\",\"selectedKey\"],n=e.extend(\"openui5.validator\",{constructor:function(t,r){if(!t||!r)throw new Error(\"Missing parameters!\");e.apply(this,arguments);var a=new Ajv({allErrors:!0,coerceTypes:!0,errorDataPath:\"property\"});this._validate=a.compile(r),this._view=t,this._validProperties=i.map(function(t){return t})}});return n.prototype.validate=function(){var t=this._getControls(),e=this._getPayload(t);return this._clearControlStatus(t),this._validate(e)?null:{payloadUsed:e,originalErrorMessages:this._validate.errors,ui5ErrorMessageObjects:this._processValidationErrors(this._validate.errors)}},n.prototype.getValidProperties=function(){return this._validProperties},n.prototype.addValidProperties=function(t){var e=this;t.forEach(function(t){e._validProperties.push(t)})},n.prototype._getControls=function(){var t=this,e=[];return this._validate.schema&&this._validate.schema.properties&&(e=Object.keys(this._validate.schema.properties).map(function(e){var a=t._view.byId(e);return a instanceof r?a:null}).filter(function(t){return t})),e},n.prototype._getPayload=function(t){var e=this,r={};return t.forEach(function(t){var a=t.getId().lastIndexOf(\"-\")+1,o=t.getId().substring(a);r[o]=e._getControlValue(t)}),r},n.prototype._getControlValue=function(t){var e=null,r=Object.keys(t.mProperties);return this._validProperties.forEach(function(a){if(!e){if(r.find(function(t){return t===a})){var o=[\"get\",a.substring(0,1).toUpperCase(),a.substring(1)].join(\"\");t[o]&&(e=t[o]())}}}),e},n.prototype._clearControlStatus=function(t){t.forEach(function(t){t&&t.setValueState&&t.setValueState(a.None),t&&t.setValueStateText&&t.setValueStateText()})},n.prototype._setControlErrorStatus=function(t,e){t&&t.setValueState&&t.setValueState(a.Error),t&&t.setValueStateText&&t.setValueStateText(e)},n.prototype._processValidationErrors=function(t){var e=this,r=[];return t.forEach(function(t){var a=t.dataPath.substring(1),o=e._view.byId(a);if(o){var s=e._getControlCustomErrorMessage(o)||t.message;e._setControlErrorStatus(o,s),r.push(e._createErrorMessageObject(o,s,\"\"))}}),r},n.prototype._getControlCustomErrorMessage=function(t){return\"\"},n.prototype._createErrorMessageObject=function(t,e,r){return new s({message:e,description:r,type:o.Error,date:(new Date).getTime(),target:t.getId()})},n},!0);"
	}
});