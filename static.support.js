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

	if (falzy(blueprint) || !protype(blueprint, FUNCTION)) {
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

	if (falzy(name) || !protype(name, STRING)) {
		throw new Error("invalid method name");
	}

	if (falzy(method) || !protype(method, FUNCTION)) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YXRpYy5zdXBwb3J0LmpzIl0sIm5hbWVzIjpbImFyaWQiLCJyZXF1aXJlIiwiZGlhdG9tIiwiZmFsenkiLCJmZXJnZSIsImhhcmRlbiIsInByb3R5cGUiLCJyYXplIiwic3RhZ24iLCJ2b3VuZCIsIlN0YXRpYyIsIkJMVUVQUklOVCIsInByb3RvdHlwZSIsImluaXRpYWxpemUiLCJibHVlcHJpbnQiLCJGVU5DVElPTiIsIkVycm9yIiwiYmluZCIsInNldCIsImFyZ3VtZW50cyIsImFwcGx5IiwiY29uY2F0IiwiYXR0YWNoIiwicHJvcGVydHkiLCJ2YWx1ZSIsIk5VTUJFUiIsIlNUUklORyIsIlNZTUJPTCIsImltcGxlbWVudCIsIm5hbWUiLCJtZXRob2QiLCJtZXJnZSIsImVudGl0eSIsIk9CSkVDVCIsImVqZWN0IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFzRUEsSUFBTUEsT0FBT0MsUUFBUyxNQUFULENBQWI7QUFDQSxJQUFNQyxTQUFTRCxRQUFTLFFBQVQsQ0FBZjtBQUNBLElBQU1FLFFBQVFGLFFBQVMsT0FBVCxDQUFkO0FBQ0EsSUFBTUcsUUFBUUgsUUFBUyxPQUFULENBQWQ7QUFDQSxJQUFNSSxTQUFTSixRQUFTLFFBQVQsQ0FBZjtBQUNBLElBQU1LLFVBQVVMLFFBQVMsU0FBVCxDQUFoQjtBQUNBLElBQU1NLE9BQU9OLFFBQVMsTUFBVCxDQUFiO0FBQ0EsSUFBTU8sUUFBUVAsUUFBUyxPQUFULENBQWQ7QUFDQSxJQUFNUSxRQUFRUixRQUFTLE9BQVQsQ0FBZDs7QUFFQSxJQUFNUyxTQUFTUixPQUFRLFFBQVIsQ0FBZjs7QUFFQSxJQUFNUyxZQUFZLHNCQUFRLFdBQVIsQ0FBbEI7O0FBRUFELE9BQU9FLFNBQVAsQ0FBaUJDLFVBQWpCLEdBQThCLFNBQVNBLFVBQVQsQ0FBcUJDLFNB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UDtBQUNBLENBbkJEOztBQXFCQTs7Ozs7QUFLQUQsT0FBT0UsU0FBUCxDQUFpQnNCLEtBQWpCLEdBQXlCLFNBQVNBLEtBQVQsR0FBaUI7QUFDekMsS0FBRztBQUNGLFNBQU8sS0FBTXZCLFNBQU4sQ0FBUDs7QUFFQSxFQUhELFNBR1E7QUFDUCxTQUFPLEtBQU1BLFNBQU4sQ0FBUDtBQUNBO0FBQ0QsQ0FQRDs7QUFTQXdCLE9BQU9DLE9BQVAsR0FBaUIxQixNQUFqQiIsImZpbGUiOiJzdGF0aWMuc3VwcG9ydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuLyo7XHJcblx0QHN1Ym1vZHVsZS1saWNlbnNlOlxyXG5cdFx0VGhlIE1JVCBMaWNlbnNlIChNSVQpXHJcblx0XHRAbWl0LWxpY2Vuc2VcclxuXHJcblx0XHRDb3B5cmlnaHQgKEBjKSAyMDE3IFJpY2hldmUgU2lvZGluYSBCZWJlZG9yXHJcblx0XHRAZW1haWw6IHJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cclxuXHJcblx0XHRQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XHJcblx0XHRvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXHJcblx0XHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXHJcblx0XHR0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXHJcblx0XHRjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcclxuXHRcdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XHJcblxyXG5cdFx0VGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXHJcblx0XHRjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxyXG5cclxuXHRcdFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcclxuXHRcdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxyXG5cdFx0RklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXHJcblx0XHRBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXHJcblx0XHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxyXG5cdFx0T1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcclxuXHRcdFNPRlRXQVJFLlxyXG5cdEBlbmQtc3VibW9kdWxlLWxpY2Vuc2VcclxuXHJcblx0QHN1Ym1vZHVsZS1jb25maWd1cmF0aW9uOlxyXG5cdFx0e1xyXG5cdFx0XHRcInBhY2thZ2VcIjogXCJzdGF0aXNcIixcclxuXHRcdFx0XCJwYXRoXCI6IFwic3RhdGlzL3N0YXRpYy5tb2R1bGUuanNcIixcclxuXHRcdFx0XCJmaWxlXCI6IFwic3RhdGljLm1vZHVsZS5qc1wiLFxyXG5cdFx0XHRcIm1vZHVsZVwiOiBcInN0YXRpc1wiLFxyXG5cdFx0XHRcImF1dGhvclwiOiBcIlJpY2hldmUgUy4gQmViZWRvclwiLFxyXG5cdFx0XHRcImVNYWlsXCI6IFwicmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVwiLFxyXG5cdFx0XHRcImNvbnRyaWJ1dG9yc1wiOiBbXHJcblx0XHRcdFx0XCJKb2huIExlbm9uIE1hZ2hhbm95IDxqb2hubGVub25tYWdoYW5veUBnbWFpbC5jb20+XCIsXHJcblx0XHRcdFx0XCJWaW5zZSBWaW5hbG9uIDx2aW5zZXZpbmFsb25AZ21haWwuY29tPlwiXHJcblx0XHRcdF0sXHJcblx0XHRcdFwicmVwb3NpdG9yeVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS92b2xrb3Zhc3lzdGVtcy9zdGF0aXMuZ2l0XCIsXHJcblx0XHRcdFwidGVzdFwiOiBcInN0YXRpcy10ZXN0LmpzXCIsXHJcblx0XHRcdFwiZ2xvYmFsXCI6IGZhbHNlLFxyXG5cdFx0XHRcImludGVybmFsXCI6IHRydWUsXHJcblx0XHRcdFwiY2xhc3NcIjogdHJ1ZVxyXG5cdFx0fVxyXG5cdEBlbmQtc3VibW9kdWxlLWNvbmZpZ3VyYXRpb25cclxuXHJcblx0QHN1Ym1vZHVsZS1kb2N1bWVudGF0aW9uOlxyXG5cdFx0U3RhdGljIHdyYXBwZXIgZm9yIGNsYXNzLlxyXG5cclxuXHRcdFRoaXMgd2lsbCBpbXBsZW1lbnQgbmVjZXNzYXJ5IG1ldGhvZHMgdG8gZmFjaWxpdGF0ZSBzdGF0aWMgc3BlY2lmaWNhdGlvbi5cclxuXHJcblx0XHRUaGlzIHdpbGwgbm90IGZhY2lsaXRhdGUgYW55IGluc3RhbmNlIHByb2NlZHVyZXMuXHJcblx0QGVuZC1zdWJtb2R1bGUtZG9jdW1lbnRhdGlvblxyXG5cclxuXHRAaW5jbHVkZTpcclxuXHRcdHtcclxuXHRcdFx0XCJhcmlkXCI6IFwiYXJpZFwiLFxyXG5cdFx0XHRcImRpYXRvbVwiOiBcImRpYXRvbVwiLFxyXG5cdFx0XHRcImZhbHp5XCI6IFwiZmFsenlcIixcclxuXHRcdFx0XCJmZXJnZVwiOiBcImZlcmdlXCIsXHJcblx0XHRcdFwiaGFyZGVuXCI6IFwiaGFyZGVuXCIsXHJcblx0XHRcdFwicHJvdHlwZVwiOiBcInByb3R5cGVcIixcclxuXHRcdFx0XCJyYXplXCI6IFwicmF6ZVwiLFxyXG5cdFx0XHRcInN0YWduXCI6IFwic3RhZ25cIixcclxuXHRcdFx0XCJ2b3VuZFwiOiBcInZvdW5kXCJcclxuXHRcdH1cclxuXHRAZW5kLWluY2x1ZGVcclxuKi9cclxuXHJcbmNvbnN0IGFyaWQgPSByZXF1aXJlKCBcImFyaWRcIiApO1xyXG5jb25zdCBkaWF0b20gPSByZXF1aXJlKCBcImRpYXRvbVwiICk7XHJcbmNvbnN0IGZhbHp5ID0gcmVxdWlyZSggXCJmYWx6eVwiICk7XHJcbmNvbnN0IGZlcmdlID0gcmVxdWlyZSggXCJmZXJnZVwiICk7XHJcbmNvbnN0IGhhcmRlbiA9IHJlcXVpcmUoIFwiaGFyZGVuXCIgKTtcclxuY29uc3QgcHJvdHlwZSA9IHJlcXVpcmUoIFwicHJvdHlwZVwiICk7XHJcbmNvbnN0IHJhemUgPSByZXF1aXJlKCBcInJhemVcIiApO1xyXG5jb25zdCBzdGFnbiA9IHJlcXVpcmUoIFwic3RhZ25cIiApO1xyXG5jb25zdCB2b3VuZCA9IHJlcXVpcmUoIFwidm91bmRcIiApO1xyXG5cclxuY29uc3QgU3RhdGljID0gZGlhdG9tKCBcIlN0YXRpY1wiICk7XHJcblxyXG5jb25zdCBCTFVFUFJJTlQgPSBTeW1ib2woIFwiYmx1ZXByaW50XCIgKTtcclxuXHJcblN0YXRpYy5wcm90b3R5cGUuaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uIGluaXRpYWxpemUoIGJsdWVwcmludCApe1xyXG5cdC8qO1xyXG5cdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcclxuXHRcdFx0e1xyXG5cdFx0XHRcdFwiYmx1ZXByaW50OnJlcXVpcmVkXCI6IFwiZnVuY3Rpb25cIlxyXG5cdFx0XHR9XHJcblx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxyXG5cdCovXHJcblxyXG5cdGlmKCBmYWx6eSggYmx1ZXByaW50ICkgfHwgIXByb3R5cGUoIGJsdWVwcmludCwgRlVOQ1RJT04gKSApe1xyXG5cdFx0dGhyb3cgbmV3IEVycm9yKCBcImludmFsaWQgYmx1ZXByaW50XCIgKTtcclxuXHR9XHJcblxyXG5cdHRoaXNbIEJMVUVQUklOVCBdID0gYmx1ZXByaW50O1xyXG5cclxuXHRyZXR1cm4gdGhpcztcclxufTtcclxuXHJcbi8qO1xyXG5cdEBtZXRob2QtZG9jdW1lbnRhdGlvbjpcclxuXHRcdFRoaXMgd2lsbCBiZSB1c2VkIGZvciBtdWx0aXBsZSBhdHRhY2htZW50IG9mIHN0YXRpYyBwcm9wZXJ0aWVzLlxyXG5cdEBlbmQtbWV0aG9kLWRvY3VtZW50YXRpb25cclxuKi9cclxuU3RhdGljLnByb3RvdHlwZS5iaW5kID0gZnVuY3Rpb24gYmluZCggc2V0ICl7XHJcblx0Lyo7XHJcblx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxyXG5cdFx0XHR7XHJcblx0XHRcdFx0XCJzZXQ6cmVxdWlyZWRcIjogW1xyXG5cdFx0XHRcdFx0QXJyYXksXHJcblx0XHRcdFx0XHRcIm9iamVjdFwiLFxyXG5cdFx0XHRcdFx0XCIuLi5cIlxyXG5cdFx0XHRcdF1cclxuXHRcdFx0fVxyXG5cdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cclxuXHQqL1xyXG5cclxuXHRpZiggZmFsenkoIHRoaXNbIEJMVUVQUklOVCBdICkgKXtcclxuXHRcdHRocm93IG5ldyBFcnJvciggXCJjYW5ub3QgYmluZCwgYmx1ZXByaW50IGVtcHR5XCIgKTtcclxuXHR9XHJcblxyXG5cdGlmKCBhcmlkKCBhcmd1bWVudHMgKSApe1xyXG5cdFx0dGhyb3cgbmV3IEVycm9yKCBcImludmFsaWQgc2V0XCIgKTtcclxuXHR9XHJcblxyXG5cdHN0YWduLmFwcGx5KCBudWxsLCBbIHRoaXNbIEJMVUVQUklOVCBdIF0uY29uY2F0KCByYXplKCBhcmd1bWVudHMgKSApICk7XHJcblxyXG5cdHJldHVybiB0aGlzO1xyXG59O1xyXG5cclxuLyo7XHJcblx0QG1ldGhvZC1kb2N1bWVudGF0aW9uOlxyXG5cdFx0VGhpcyB3aWxsIGJlIHVzZWQgdG8gYXR0YWNoIHNpbmdsZSBzdGF0aWMgcHJvcGVydHkuXHJcblx0QGVuZC1tZXRob2QtZG9jdW1lbnRhdGlvblxyXG4qL1xyXG5TdGF0aWMucHJvdG90eXBlLmF0dGFjaCA9IGZ1bmN0aW9uIGF0dGFjaCggcHJvcGVydHksIHZhbHVlICl7XHJcblx0Lyo7XHJcblx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxyXG5cdFx0XHR7XHJcblx0XHRcdFx0XCJwcm9wZXJ0eTpyZXF1aXJlZFwiOiBbXHJcblx0XHRcdFx0XHRcIm51bWJlclwiLFxyXG5cdFx0XHRcdFx0XCJzdHJpbmdcIixcclxuXHRcdFx0XHRcdFwic3ltYm9sXCJcclxuXHRcdFx0XHRdLFxyXG5cdFx0XHRcdFwidmFsdWU6cmVxdWlyZWRcIjogXCIqXCJcclxuXHRcdFx0fVxyXG5cdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cclxuXHQqL1xyXG5cclxuXHRpZiggZmFsenkoIHRoaXNbIEJMVUVQUklOVCBdICkgKXtcclxuXHRcdHRocm93IG5ldyBFcnJvciggXCJjYW5ub3QgYXR0YWNoIHByb3BlcnR5LCBibHVlcHJpbnQgZW1wdHlcIiApO1xyXG5cdH1cclxuXHJcblx0aWYoIGZhbHp5KCBwcm9wZXJ0eSApIHx8ICFwcm90eXBlKCBwcm9wZXJ0eSwgTlVNQkVSICsgU1RSSU5HICsgU1lNQk9MICkgKXtcclxuXHRcdHRocm93IG5ldyBFcnJvciggXCJpbnZhbGlkIHByb3BlcnR5XCIgKTtcclxuXHR9XHJcblxyXG5cdGhhcmRlbiggcHJvcGVydHksIHZhbHVlLCB0aGlzWyBCTFVFUFJJTlQgXSApO1xyXG5cclxuXHRyZXR1cm4gdGhpcztcclxufTtcclxuXHJcbi8qO1xyXG5cdEBtZXRob2QtZG9jdW1lbnRhdGlvbjpcclxuXHRcdEF0dGFjaCBzdGF0aWMgbWV0aG9kIHRvIHRoZSBibHVlcHJpbnQgd2l0aCBiaW5kaW5nLlxyXG5cdEBlbmQtbWV0aG9kLWRvY3VtZW50YXRpb25cclxuKi9cclxuU3RhdGljLnByb3RvdHlwZS5pbXBsZW1lbnQgPSBmdW5jdGlvbiBpbXBsZW1lbnQoIG5hbWUsIG1ldGhvZCApe1xyXG5cdC8qO1xyXG5cdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcclxuXHRcdFx0e1xyXG5cdFx0XHRcdFwibmFtZTpyZXF1aXJlZFwiOiBcInN0cmluZ1wiLFxyXG5cdFx0XHRcdFwibWV0aG9kOnJlcXVpcmVkXCI6IFwiZnVuY3Rpb25cIlxyXG5cdFx0XHR9XHJcblx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxyXG5cdCovXHJcblxyXG5cdGlmKCBmYWx6eSggdGhpc1sgQkxVRVBSSU5UIF0gKSApe1xyXG5cdFx0dGhyb3cgbmV3IEVycm9yKCBcImNhbm5vdCBpbXBsZW1lbnQgbWV0aG9kLCBibHVlcHJpbnQgZW1wdHlcIiApO1xyXG5cdH1cclxuXHJcblx0aWYoIGZhbHp5KCBuYW1lICkgfHwgIXByb3R5cGUoIG5hbWUsIFNUUklORyApICl7XHJcblx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiaW52YWxpZCBtZXRob2QgbmFtZVwiICk7XHJcblx0fVxyXG5cclxuXHRpZiggZmFsenkoIG1ldGhvZCApIHx8ICFwcm90eXBlKCBtZXRob2QsIEZVTkNUSU9OICkgKXtcclxuXHRcdHRocm93IG5ldyBFcnJvciggXCJpbnZhbGlkIG1ldGhvZFwiICk7XHJcblx0fVxyXG5cclxuXHRoYXJkZW4oIG5hbWUsIHZvdW5kKCBtZXRob2QsIHRoaXNbIEJMVUVQUklOVCBdICksIHRoaXNbIEJMVUVQUklOVCBdICk7XHJcblxyXG5cdHJldHVybiB0aGlzO1xyXG59O1xyXG5cclxuLyo7XHJcblx0QG1ldGhvZC1kb2N1bWVudGF0aW9uOlxyXG5cdFx0TWVyZ2UgaW5zdGFuY2UgbWV0aG9kcyBhcyBzdGF0aWMgbWV0aG9kcyBidXQgc3RpbGwgYm91bmRlZCB0byB0aGUgZW50aXR5LlxyXG5cdEBlbmQtbWV0aG9kLWRvY3VtZW50YXRpb25cclxuKi9cclxuU3RhdGljLnByb3RvdHlwZS5tZXJnZSA9IGZ1bmN0aW9uIG1lcmdlKCBlbnRpdHkgKXtcclxuXHQvKjtcclxuXHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XHJcblx0XHRcdHtcclxuXHRcdFx0XHRcImVudGl0eTpyZXF1aXJlZFwiOiBbXHJcblx0XHRcdFx0XHRcImZ1bmN0aW9uXCIsXHJcblx0XHRcdFx0XHRcIm9iamVjdFwiXHJcblx0XHRcdFx0XVxyXG5cdFx0XHR9XHJcblx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxyXG5cdCovXHJcblxyXG5cdGlmKCBmYWx6eSggZW50aXR5ICkgfHwgIXByb3R5cGUoIGVudGl0eSwgRlVOQ1RJT04gKyBPQkpFQ1QgKSApe1xyXG5cdFx0dGhyb3cgbmV3IEVycm9yKCBcImludmFsaWQgZW50aXR5XCIgKTtcclxuXHR9XHJcblxyXG5cdGZlcmdlKCBlbnRpdHksIHRoaXNbIEJMVUVQUklOVCBdICk7XHJcblxyXG5cdHJldHVybiB0aGlzO1xyXG59O1xyXG5cclxuLyo7XHJcblx0QG1ldGhvZC1kb2N1bWVudGF0aW9uOlxyXG5cdFx0UmV0cmlldmUgdGhlIGJsdWVwcmludCBmcm9tIHRoZSBzdGF0aWMgY29udGV4dC5cclxuXHRAZW5kLW1ldGhvZC1kb2N1bWVudGF0aW9uXHJcbiovXHJcblN0YXRpYy5wcm90b3R5cGUuZWplY3QgPSBmdW5jdGlvbiBlamVjdCggKXtcclxuXHR0cnl7XHJcblx0XHRyZXR1cm4gdGhpc1sgQkxVRVBSSU5UIF07XHJcblxyXG5cdH1maW5hbGx5e1xyXG5cdFx0ZGVsZXRlIHRoaXNbIEJMVUVQUklOVCBdO1xyXG5cdH1cclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gU3RhdGljO1xyXG4iXX0=
//# sourceMappingURL=static.support.js.map
