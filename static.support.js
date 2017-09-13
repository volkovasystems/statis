"use strict";

/*;
              	@submodule-license:
              		The MIT License (MIT)
              		@mit-license
              
              		Copyright (@c) 2017 Richeve Siodina Bebedor
              		@email: richeve.bebedor@gmail.com
              
              		Permission is hereby granted, free of charge, to any person obtaining a copy
              		of this software and associated documentation files (the "Software"), to deal
              		in the Software without restriction, including without limitation the rights
              		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
              		copies of the Software, and to permit persons to whom the Software is
              		furnished to do so, subject to the following conditions:
              
              		The above copyright notice and this permission notice shall be included in all
              		copies or substantial portions of the Software.
              
              		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
              		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
              		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
              		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
              		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
              		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
              		SOFTWARE.
              	@end-submodule-license
              
              	@submodule-configuration:
              		{
              			"package": "statis",
              			"path": "statis/static.module.js",
              			"file": "static.module.js",
              			"module": "statis",
              			"author": "Richeve S. Bebedor",
              			"eMail": "richeve.bebedor@gmail.com",
              			"contributors": [
              				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
              				"Vinse Vinalon <vinsevinalon@gmail.com>"
              			],
              			"repository": "https://github.com/volkovasystems/statis.git",
              			"test": "statis-test.js",
              			"global": false,
              			"internal": true,
              			"class": true
              		}
              	@end-submodule-configuration
              
              	@submodule-documentation:
              		Static wrapper for class.
              
              		This will implement necessary methods to facilitate static specification.
              
              		This will not facilitate any instance procedures.
              	@end-submodule-documentation
              
              	@include:
              		{
              			"arid": "arid",
              			"diatom": "diatom",
              			"falzy": "falzy",
              			"ferge": "ferge",
              			"harden": "harden",
              			"protype": "protype",
              			"raze": "raze",
              			"stagn": "stagn",
              			"vound": "vound"
              		}
              	@end-include
              */var _symbol = require("babel-runtime/core-js/symbol");var _symbol2 = _interopRequireDefault(_symbol);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var arid = require("arid");
var diatom = require("diatom");
var falzy = require("falzy");
var ferge = require("ferge");
var harden = require("harden");
var protype = require("protype");
var raze = require("raze");
var stagn = require("stagn");
var vound = require("vound");

var Static = diatom("Static");

var BLUEPRINT = (0, _symbol2.default)("blueprint");

Static.prototype.initialize = function initialize(blueprint) {
	/*;
                                                              	@meta-configuration:
                                                              		{
                                                              			"blueprint:required": "function"
                                                              		}
                                                              	@end-meta-configuration
                                                              */

	if (falzy(blueprint) || typeof blueprint != "function") {
		throw new Error("invalid blueprint");
	}

	this[BLUEPRINT] = blueprint;

	return this;
};

/*;
   	@method-documentation:
   		This will be used for multiple attachment of static properties.
   	@end-method-documentation
   */
Static.prototype.bind = function bind(set) {
	/*;
                                            	@meta-configuration:
                                            		{
                                            			"set:required": [
                                            				Array,
                                            				"object",
                                            				"..."
                                            			]
                                            		}
                                            	@end-meta-configuration
                                            */

	if (falzy(this[BLUEPRINT])) {
		throw new Error("cannot bind, blueprint empty");
	}

	if (arid(arguments)) {
		throw new Error("invalid set");
	}

	stagn.apply(null, [this[BLUEPRINT]].concat(raze(arguments)));

	return this;
};

/*;
   	@method-documentation:
   		This will be used to attach single static property.
   	@end-method-documentation
   */
Static.prototype.attach = function attach(property, value) {
	/*;
                                                            	@meta-configuration:
                                                            		{
                                                            			"property:required": [
                                                            				"number",
                                                            				"string",
                                                            				"symbol"
                                                            			],
                                                            			"value:required": "*"
                                                            		}
                                                            	@end-meta-configuration
                                                            */

	if (falzy(this[BLUEPRINT])) {
		throw new Error("cannot attach property, blueprint empty");
	}

	if (falzy(property) || !protype(property, NUMBER + STRING + SYMBOL)) {
		throw new Error("invalid property");
	}

	harden(property, value, this[BLUEPRINT]);

	return this;
};

/*;
   	@method-documentation:
   		Attach static method to the blueprint with binding.
   	@end-method-documentation
   */
Static.prototype.implement = function implement(name, method) {
	/*;
                                                               	@meta-configuration:
                                                               		{
                                                               			"name:required": "string",
                                                               			"method:required": "function"
                                                               		}
                                                               	@end-meta-configuration
                                                               */

	if (falzy(this[BLUEPRINT])) {
		throw new Error("cannot implement method, blueprint empty");
	}

	if (falzy(name) || typeof name != "string") {
		throw new Error("invalid method name");
	}

	if (falzy(method) || typeof method != "function") {
		throw new Error("invalid method");
	}

	harden(name, vound(method, this[BLUEPRINT]), this[BLUEPRINT]);

	return this;
};

/*;
   	@method-documentation:
   		Merge instance methods as static methods but still bounded to the entity.
   	@end-method-documentation
   */
Static.prototype.merge = function merge(entity) {
	/*;
                                                 	@meta-configuration:
                                                 		{
                                                 			"entity:required": [
                                                 				"function",
                                                 				"object"
                                                 			]
                                                 		}
                                                 	@end-meta-configuration
                                                 */

	if (falzy(entity) || !protype(entity, FUNCTION + OBJECT)) {
		throw new Error("invalid entity");
	}

	ferge(entity, this[BLUEPRINT]);

	return this;
};

/*;
   	@method-documentation:
   		Retrieve the blueprint from the static context.
   	@end-method-documentation
   */
Static.prototype.eject = function eject() {
	try {
		return this[BLUEPRINT];

	} finally {
		delete this[BLUEPRINT];
	}
};

module.exports = Static;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YXRpYy5zdXBwb3J0LmpzIl0sIm5hbWVzIjpbImFyaWQiLCJyZXF1aXJlIiwiZGlhdG9tIiwiZmFsenkiLCJmZXJnZSIsImhhcmRlbiIsInByb3R5cGUiLCJyYXplIiwic3RhZ24iLCJ2b3VuZCIsIlN0YXRpYyIsIkJMVUVQUklOVCIsInByb3RvdHlwZSIsImluaXRpYWxpemUiLCJibHVlcHJpbnQiLCJFcnJvciIsImJpbmQiLCJzZXQiLCJhcmd1bWVudHMiLCJhcHBseSIsImNvbmNhdCIsImF0dGFjaCIsInByb3BlcnR5IiwidmFsdWUiLCJOVU1CRVIiLCJTVFJJTkciLCJTWU1CT0wiLCJpbXBsZW1lbnQiLCJuYW1lIiwibWV0aG9kIiwibWVyZ2UiLCJlbnRpdHkiLCJGVU5DVElPTiIsIk9CSkVDVCIsImVqZWN0IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFzRUEsSUFBTUEsT0FBT0MsUUFBUyxNQUFULENBQWI7QUFDQSxJQUFNQyxTQUFTRCxRQUFTLFFBQVQsQ0FBZjtBQUNBLElBQU1FLFFBQVFGLFFBQVMsT0FBVCxDQUFkO0FBQ0EsSUFBTUcsUUFBUUgsUUFBUyxPQUFULENBQWQ7QUFDQSxJQUFNSSxTQUFTSixRQUFTLFFBQVQsQ0FBZjtBQUNBLElBQU1LLFVBQVVMLFFBQVMsU0FBVCxDQUFoQjtBQUNBLElBQU1NLE9BQU9OLFFBQVMsTUFBVCxDQUFiO0FBQ0EsSUFBTU8sUUFBUVAsUUFBUyxPQUFULENBQWQ7QUFDQSxJQUFNUSxRQUFRUixRQUFTLE9BQVQsQ0FBZDs7QUFFQSxJQUFNUyxTQUFTUixPQUFRLFFBQVIsQ0FBZjs7QUFFQSxJQUFNUyxZQUFZLHNCQUFRLFdBQVIsQ0FBbEI7O0FBRUFELE9BQU9FLFNBQVAsQ0FBaUJDLFVBQWpCLEdBQThCLFNBQVNBLFVBQVQsQ0FBcUJDLFNB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c0IsS0FBakIsR0FBeUIsU0FBU0EsS0FBVCxHQUFpQjtBQUN6QyxLQUFHO0FBQ0YsU0FBTyxLQUFNdkIsU0FBTixDQUFQOztBQUVBLEVBSEQsU0FHUTtBQUNQLFNBQU8sS0FBTUEsU0FBTixDQUFQO0FBQ0E7QUFDRCxDQVBEOztBQVNBd0IsT0FBT0MsT0FBUCxHQUFpQjFCLE1BQWpCIiwiZmlsZSI6InN0YXRpYy5zdXBwb3J0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qO1xuXHRAc3VibW9kdWxlLWxpY2Vuc2U6XG5cdFx0VGhlIE1JVCBMaWNlbnNlIChNSVQpXG5cdFx0QG1pdC1saWNlbnNlXG5cblx0XHRDb3B5cmlnaHQgKEBjKSAyMDE3IFJpY2hldmUgU2lvZGluYSBCZWJlZG9yXG5cdFx0QGVtYWlsOiByaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXG5cblx0XHRQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG5cdFx0b2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuXHRcdGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcblx0XHR0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG5cdFx0Y29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG5cdFx0ZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuXHRcdFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuXHRcdGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblx0XHRUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG5cdFx0SU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG5cdFx0RklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG5cdFx0QVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuXHRcdExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG5cdFx0T1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcblx0XHRTT0ZUV0FSRS5cblx0QGVuZC1zdWJtb2R1bGUtbGljZW5zZVxuXG5cdEBzdWJtb2R1bGUtY29uZmlndXJhdGlvbjpcblx0XHR7XG5cdFx0XHRcInBhY2thZ2VcIjogXCJzdGF0aXNcIixcblx0XHRcdFwicGF0aFwiOiBcInN0YXRpcy9zdGF0aWMubW9kdWxlLmpzXCIsXG5cdFx0XHRcImZpbGVcIjogXCJzdGF0aWMubW9kdWxlLmpzXCIsXG5cdFx0XHRcIm1vZHVsZVwiOiBcInN0YXRpc1wiLFxuXHRcdFx0XCJhdXRob3JcIjogXCJSaWNoZXZlIFMuIEJlYmVkb3JcIixcblx0XHRcdFwiZU1haWxcIjogXCJyaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXCIsXG5cdFx0XHRcImNvbnRyaWJ1dG9yc1wiOiBbXG5cdFx0XHRcdFwiSm9obiBMZW5vbiBNYWdoYW5veSA8am9obmxlbm9ubWFnaGFub3lAZ21haWwuY29tPlwiLFxuXHRcdFx0XHRcIlZpbnNlIFZpbmFsb24gPHZpbnNldmluYWxvbkBnbWFpbC5jb20+XCJcblx0XHRcdF0sXG5cdFx0XHRcInJlcG9zaXRvcnlcIjogXCJodHRwczovL2dpdGh1Yi5jb20vdm9sa292YXN5c3RlbXMvc3RhdGlzLmdpdFwiLFxuXHRcdFx0XCJ0ZXN0XCI6IFwic3RhdGlzLXRlc3QuanNcIixcblx0XHRcdFwiZ2xvYmFsXCI6IGZhbHNlLFxuXHRcdFx0XCJpbnRlcm5hbFwiOiB0cnVlLFxuXHRcdFx0XCJjbGFzc1wiOiB0cnVlXG5cdFx0fVxuXHRAZW5kLXN1Ym1vZHVsZS1jb25maWd1cmF0aW9uXG5cblx0QHN1Ym1vZHVsZS1kb2N1bWVudGF0aW9uOlxuXHRcdFN0YXRpYyB3cmFwcGVyIGZvciBjbGFzcy5cblxuXHRcdFRoaXMgd2lsbCBpbXBsZW1lbnQgbmVjZXNzYXJ5IG1ldGhvZHMgdG8gZmFjaWxpdGF0ZSBzdGF0aWMgc3BlY2lmaWNhdGlvbi5cblxuXHRcdFRoaXMgd2lsbCBub3QgZmFjaWxpdGF0ZSBhbnkgaW5zdGFuY2UgcHJvY2VkdXJlcy5cblx0QGVuZC1zdWJtb2R1bGUtZG9jdW1lbnRhdGlvblxuXG5cdEBpbmNsdWRlOlxuXHRcdHtcblx0XHRcdFwiYXJpZFwiOiBcImFyaWRcIixcblx0XHRcdFwiZGlhdG9tXCI6IFwiZGlhdG9tXCIsXG5cdFx0XHRcImZhbHp5XCI6IFwiZmFsenlcIixcblx0XHRcdFwiZmVyZ2VcIjogXCJmZXJnZVwiLFxuXHRcdFx0XCJoYXJkZW5cIjogXCJoYXJkZW5cIixcblx0XHRcdFwicHJvdHlwZVwiOiBcInByb3R5cGVcIixcblx0XHRcdFwicmF6ZVwiOiBcInJhemVcIixcblx0XHRcdFwic3RhZ25cIjogXCJzdGFnblwiLFxuXHRcdFx0XCJ2b3VuZFwiOiBcInZvdW5kXCJcblx0XHR9XG5cdEBlbmQtaW5jbHVkZVxuKi9cblxuY29uc3QgYXJpZCA9IHJlcXVpcmUoIFwiYXJpZFwiICk7XG5jb25zdCBkaWF0b20gPSByZXF1aXJlKCBcImRpYXRvbVwiICk7XG5jb25zdCBmYWx6eSA9IHJlcXVpcmUoIFwiZmFsenlcIiApO1xuY29uc3QgZmVyZ2UgPSByZXF1aXJlKCBcImZlcmdlXCIgKTtcbmNvbnN0IGhhcmRlbiA9IHJlcXVpcmUoIFwiaGFyZGVuXCIgKTtcbmNvbnN0IHByb3R5cGUgPSByZXF1aXJlKCBcInByb3R5cGVcIiApO1xuY29uc3QgcmF6ZSA9IHJlcXVpcmUoIFwicmF6ZVwiICk7XG5jb25zdCBzdGFnbiA9IHJlcXVpcmUoIFwic3RhZ25cIiApO1xuY29uc3Qgdm91bmQgPSByZXF1aXJlKCBcInZvdW5kXCIgKTtcblxuY29uc3QgU3RhdGljID0gZGlhdG9tKCBcIlN0YXRpY1wiICk7XG5cbmNvbnN0IEJMVUVQUklOVCA9IFN5bWJvbCggXCJibHVlcHJpbnRcIiApO1xuXG5TdGF0aWMucHJvdG90eXBlLmluaXRpYWxpemUgPSBmdW5jdGlvbiBpbml0aWFsaXplKCBibHVlcHJpbnQgKXtcblx0Lyo7XG5cdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdHtcblx0XHRcdFx0XCJibHVlcHJpbnQ6cmVxdWlyZWRcIjogXCJmdW5jdGlvblwiXG5cdFx0XHR9XG5cdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0Ki9cblxuXHRpZiggZmFsenkoIGJsdWVwcmludCApIHx8IHR5cGVvZiBibHVlcHJpbnQgIT0gXCJmdW5jdGlvblwiICl7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCBcImludmFsaWQgYmx1ZXByaW50XCIgKTtcblx0fVxuXG5cdHRoaXNbIEJMVUVQUklOVCBdID0gYmx1ZXByaW50O1xuXG5cdHJldHVybiB0aGlzO1xufTtcblxuLyo7XG5cdEBtZXRob2QtZG9jdW1lbnRhdGlvbjpcblx0XHRUaGlzIHdpbGwgYmUgdXNlZCBmb3IgbXVsdGlwbGUgYXR0YWNobWVudCBvZiBzdGF0aWMgcHJvcGVydGllcy5cblx0QGVuZC1tZXRob2QtZG9jdW1lbnRhdGlvblxuKi9cblN0YXRpYy5wcm90b3R5cGUuYmluZCA9IGZ1bmN0aW9uIGJpbmQoIHNldCApe1xuXHQvKjtcblx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0e1xuXHRcdFx0XHRcInNldDpyZXF1aXJlZFwiOiBbXG5cdFx0XHRcdFx0QXJyYXksXG5cdFx0XHRcdFx0XCJvYmplY3RcIixcblx0XHRcdFx0XHRcIi4uLlwiXG5cdFx0XHRcdF1cblx0XHRcdH1cblx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHQqL1xuXG5cdGlmKCBmYWx6eSggdGhpc1sgQkxVRVBSSU5UIF0gKSApe1xuXHRcdHRocm93IG5ldyBFcnJvciggXCJjYW5ub3QgYmluZCwgYmx1ZXByaW50IGVtcHR5XCIgKTtcblx0fVxuXG5cdGlmKCBhcmlkKCBhcmd1bWVudHMgKSApe1xuXHRcdHRocm93IG5ldyBFcnJvciggXCJpbnZhbGlkIHNldFwiICk7XG5cdH1cblxuXHRzdGFnbi5hcHBseSggbnVsbCwgWyB0aGlzWyBCTFVFUFJJTlQgXSBdLmNvbmNhdCggcmF6ZSggYXJndW1lbnRzICkgKSApO1xuXG5cdHJldHVybiB0aGlzO1xufTtcblxuLyo7XG5cdEBtZXRob2QtZG9jdW1lbnRhdGlvbjpcblx0XHRUaGlzIHdpbGwgYmUgdXNlZCB0byBhdHRhY2ggc2luZ2xlIHN0YXRpYyBwcm9wZXJ0eS5cblx0QGVuZC1tZXRob2QtZG9jdW1lbnRhdGlvblxuKi9cblN0YXRpYy5wcm90b3R5cGUuYXR0YWNoID0gZnVuY3Rpb24gYXR0YWNoKCBwcm9wZXJ0eSwgdmFsdWUgKXtcblx0Lyo7XG5cdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdHtcblx0XHRcdFx0XCJwcm9wZXJ0eTpyZXF1aXJlZFwiOiBbXG5cdFx0XHRcdFx0XCJudW1iZXJcIixcblx0XHRcdFx0XHRcInN0cmluZ1wiLFxuXHRcdFx0XHRcdFwic3ltYm9sXCJcblx0XHRcdFx0XSxcblx0XHRcdFx0XCJ2YWx1ZTpyZXF1aXJlZFwiOiBcIipcIlxuXHRcdFx0fVxuXHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdCovXG5cblx0aWYoIGZhbHp5KCB0aGlzWyBCTFVFUFJJTlQgXSApICl7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCBcImNhbm5vdCBhdHRhY2ggcHJvcGVydHksIGJsdWVwcmludCBlbXB0eVwiICk7XG5cdH1cblxuXHRpZiggZmFsenkoIHByb3BlcnR5ICkgfHwgIXByb3R5cGUoIHByb3BlcnR5LCBOVU1CRVIgKyBTVFJJTkcgKyBTWU1CT0wgKSApe1xuXHRcdHRocm93IG5ldyBFcnJvciggXCJpbnZhbGlkIHByb3BlcnR5XCIgKTtcblx0fVxuXG5cdGhhcmRlbiggcHJvcGVydHksIHZhbHVlLCB0aGlzWyBCTFVFUFJJTlQgXSApO1xuXG5cdHJldHVybiB0aGlzO1xufTtcblxuLyo7XG5cdEBtZXRob2QtZG9jdW1lbnRhdGlvbjpcblx0XHRBdHRhY2ggc3RhdGljIG1ldGhvZCB0byB0aGUgYmx1ZXByaW50IHdpdGggYmluZGluZy5cblx0QGVuZC1tZXRob2QtZG9jdW1lbnRhdGlvblxuKi9cblN0YXRpYy5wcm90b3R5cGUuaW1wbGVtZW50ID0gZnVuY3Rpb24gaW1wbGVtZW50KCBuYW1lLCBtZXRob2QgKXtcblx0Lyo7XG5cdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdHtcblx0XHRcdFx0XCJuYW1lOnJlcXVpcmVkXCI6IFwic3RyaW5nXCIsXG5cdFx0XHRcdFwibWV0aG9kOnJlcXVpcmVkXCI6IFwiZnVuY3Rpb25cIlxuXHRcdFx0fVxuXHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdCovXG5cblx0aWYoIGZhbHp5KCB0aGlzWyBCTFVFUFJJTlQgXSApICl7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCBcImNhbm5vdCBpbXBsZW1lbnQgbWV0aG9kLCBibHVlcHJpbnQgZW1wdHlcIiApO1xuXHR9XG5cblx0aWYoIGZhbHp5KCBuYW1lICkgfHwgdHlwZW9mIG5hbWUgIT0gXCJzdHJpbmdcIiApe1xuXHRcdHRocm93IG5ldyBFcnJvciggXCJpbnZhbGlkIG1ldGhvZCBuYW1lXCIgKTtcblx0fVxuXG5cdGlmKCBmYWx6eSggbWV0aG9kICkgfHwgdHlwZW9mIG1ldGhvZCAhPSBcImZ1bmN0aW9uXCIgKXtcblx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiaW52YWxpZCBtZXRob2RcIiApO1xuXHR9XG5cblx0aGFyZGVuKCBuYW1lLCB2b3VuZCggbWV0aG9kLCB0aGlzWyBCTFVFUFJJTlQgXSApLCB0aGlzWyBCTFVFUFJJTlQgXSApO1xuXG5cdHJldHVybiB0aGlzO1xufTtcblxuLyo7XG5cdEBtZXRob2QtZG9jdW1lbnRhdGlvbjpcblx0XHRNZXJnZSBpbnN0YW5jZSBtZXRob2RzIGFzIHN0YXRpYyBtZXRob2RzIGJ1dCBzdGlsbCBib3VuZGVkIHRvIHRoZSBlbnRpdHkuXG5cdEBlbmQtbWV0aG9kLWRvY3VtZW50YXRpb25cbiovXG5TdGF0aWMucHJvdG90eXBlLm1lcmdlID0gZnVuY3Rpb24gbWVyZ2UoIGVudGl0eSApe1xuXHQvKjtcblx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0e1xuXHRcdFx0XHRcImVudGl0eTpyZXF1aXJlZFwiOiBbXG5cdFx0XHRcdFx0XCJmdW5jdGlvblwiLFxuXHRcdFx0XHRcdFwib2JqZWN0XCJcblx0XHRcdFx0XVxuXHRcdFx0fVxuXHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdCovXG5cblx0aWYoIGZhbHp5KCBlbnRpdHkgKSB8fCAhcHJvdHlwZSggZW50aXR5LCBGVU5DVElPTiArIE9CSkVDVCApICl7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCBcImludmFsaWQgZW50aXR5XCIgKTtcblx0fVxuXG5cdGZlcmdlKCBlbnRpdHksIHRoaXNbIEJMVUVQUklOVCBdICk7XG5cblx0cmV0dXJuIHRoaXM7XG59O1xuXG4vKjtcblx0QG1ldGhvZC1kb2N1bWVudGF0aW9uOlxuXHRcdFJldHJpZXZlIHRoZSBibHVlcHJpbnQgZnJvbSB0aGUgc3RhdGljIGNvbnRleHQuXG5cdEBlbmQtbWV0aG9kLWRvY3VtZW50YXRpb25cbiovXG5TdGF0aWMucHJvdG90eXBlLmVqZWN0ID0gZnVuY3Rpb24gZWplY3QoICl7XG5cdHRyeXtcblx0XHRyZXR1cm4gdGhpc1sgQkxVRVBSSU5UIF07XG5cblx0fWZpbmFsbHl7XG5cdFx0ZGVsZXRlIHRoaXNbIEJMVUVQUklOVCBdO1xuXHR9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFN0YXRpYztcbiJdfQ==
//# sourceMappingURL=static.support.js.map
