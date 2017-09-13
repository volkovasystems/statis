"use strict";

/*;
              	@test-license:
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
              	@end-test-license
              
              	@test-configuration:
              		{
              			"package": "statis",
              			"path": "statis/test.module.js",
              			"file": "test.module.js",
              			"module": "test",
              			"author": "Richeve S. Bebedor",
              			"eMail": "richeve.bebedor@gmail.com",
              			"repository": "https://github.com/volkovasystems/statis.git"
              		}
              	@end-test-configuration
              
              	@test-documentation:
              
              	@end-test-documentation
              
              	@include:
              		{
              			"assert": "should/as-function",
              			"statis": "statis"
              		}
              	@end-include
              */var _typeof2 = require("babel-runtime/helpers/typeof");var _typeof3 = _interopRequireDefault(_typeof2);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var assert = require("should/as-function");



//: @client:
var statis = require("./statis.support.js");
//: @end-client







//: @client:
describe("statis", function () {

	describe("`statis with blueprint`", function () {
		it("should chain static attachment", function () {
			var Test = statis(function Test() {}).
			attach("hello", "world").
			attach(123, "yeah").
			bind({
				"test": "test123" }).

			implement("testing", function testing() {
				return "test value";
			}).
			merge([1, 2, 3]).
			eject();


			assert.equal(Test.hello, "world");

			assert.equal(Test[123], "yeah");

			assert.equal(Test.test, "test123");

			assert.equal((0, _typeof3.default)(Test.testing), "function");

			assert.equal(Test.testing(), "test value");

			assert.deepEqual(Test.slice(), [1, 2, 3]);
		});
	});

});
//: @end-client
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3Quc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJhc3NlcnQiLCJyZXF1aXJlIiwic3RhdGlzIiwiZGVzY3JpYmUiLCJpdCIsIlRlc3QiLCJhdHRhY2giLCJiaW5kIiwiaW1wbGVtZW50IiwidGVzdGluZyIsIm1lcmdlIiwiZWplY3QiLCJlcXVhbCIsImhlbGxvIiwidGVzdCIsImRlZXBFcXVhbCIsInNsaWNlIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBbURBLElBQU1BLFNBQVNDLFFBQVMsb0JBQVQsQ0FBZjs7OztBQUlBO0FBQ0EsSUFBTUMsU0FBU0QsUUFBUyxxQkFBVCxDQUFmO0FBQ0E7Ozs7Ozs7O0FBUUE7QUFDQUUsU0FBVSxRQUFWLEVBQW9CLFlBQU87O0FBRTFCQSxVQUFVLHlCQUFWLEVBQXFDLFlBQU87QUFDM0NDLEtBQUksZ0NBQUosRUFBc0MsWUFBTztBQUM1QyxPQUFJQyxPQUFPSCxPQUFRLFNBQVNHLElBQVQsR0FBZ0IsQ0FBRyxDQUEzQjtBQUNWQyxTQURVLENBQ0YsT0FERSxFQUNPLE9BRFA7QUFFVkEsU0FGVSxDQUVGLEdBRkUsRUFFRyxNQUZIO0FBR1ZDLE9BSFUsQ0FHSjtBQUNOLFlBQVEsU0FERixFQUhJOztBQU1WQyxZQU5VLENBTUMsU0FORCxFQU1ZLFNBQVNDLE9BQVQsR0FBbUI7QUFDekMsV0FBTyxZQUFQO0FBQ0EsSUFSVTtBQVNWQyxRQVRVLENBU0gsQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsQ0FURztBQVVWQyxRQVZVLEVBQVg7OztBQWFBWCxVQUFPWSxLQUFQLENBQWNQLEtBQUtRLEtBQW5CLEVBQTBCLE9BQTFCOztBQUVBYixVQUFPWSxLQUFQLENBQWNQLEtBQU0sR0FBTixDQUFkLEVBQTJCLE1BQTNCOztBQUVBTCxVQUFPWSxLQUFQLENBQWNQLEtBQUtTLElBQW5CLEVBQXlCLFNBQXpCOztBQUVBZCxVQUFPWSxLQUFQLHVCQUFxQlAsS0FBS0ksT0FBMUIsR0FBbUMsVUFBbkM7O0FBRUFULFVBQU9ZLEtBQVAsQ0FBY1AsS0FBS0ksT0FBTCxFQUFkLEVBQStCLFlBQS9COztBQUVBVCxVQUFPZSxTQUFQLENBQWtCVixLQUFLVyxLQUFMLEVBQWxCLEVBQWlDLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLENBQWpDO0FBQ0EsR0F6QkQ7QUEwQkEsRUEzQkQ7O0FBNkJBLENBL0JEO0FBZ0NBIiwiZmlsZSI6InRlc3Quc3VwcG9ydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vKjtcblx0QHRlc3QtbGljZW5zZTpcblx0XHRUaGUgTUlUIExpY2Vuc2UgKE1JVClcblx0XHRAbWl0LWxpY2Vuc2VcblxuXHRcdENvcHlyaWdodCAoQGMpIDIwMTcgUmljaGV2ZSBTaW9kaW5hIEJlYmVkb3Jcblx0XHRAZW1haWw6IHJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cblxuXHRcdFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcblx0XHRvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG5cdFx0aW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuXHRcdHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcblx0XHRjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcblx0XHRmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5cdFx0VGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG5cdFx0Y29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuXHRcdFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcblx0XHRJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcblx0XHRGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcblx0XHRBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG5cdFx0TElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcblx0XHRPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuXHRcdFNPRlRXQVJFLlxuXHRAZW5kLXRlc3QtbGljZW5zZVxuXG5cdEB0ZXN0LWNvbmZpZ3VyYXRpb246XG5cdFx0e1xuXHRcdFx0XCJwYWNrYWdlXCI6IFwic3RhdGlzXCIsXG5cdFx0XHRcInBhdGhcIjogXCJzdGF0aXMvdGVzdC5tb2R1bGUuanNcIixcblx0XHRcdFwiZmlsZVwiOiBcInRlc3QubW9kdWxlLmpzXCIsXG5cdFx0XHRcIm1vZHVsZVwiOiBcInRlc3RcIixcblx0XHRcdFwiYXV0aG9yXCI6IFwiUmljaGV2ZSBTLiBCZWJlZG9yXCIsXG5cdFx0XHRcImVNYWlsXCI6IFwicmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVwiLFxuXHRcdFx0XCJyZXBvc2l0b3J5XCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3ZvbGtvdmFzeXN0ZW1zL3N0YXRpcy5naXRcIlxuXHRcdH1cblx0QGVuZC10ZXN0LWNvbmZpZ3VyYXRpb25cblxuXHRAdGVzdC1kb2N1bWVudGF0aW9uOlxuXG5cdEBlbmQtdGVzdC1kb2N1bWVudGF0aW9uXG5cblx0QGluY2x1ZGU6XG5cdFx0e1xuXHRcdFx0XCJhc3NlcnRcIjogXCJzaG91bGQvYXMtZnVuY3Rpb25cIixcblx0XHRcdFwic3RhdGlzXCI6IFwic3RhdGlzXCJcblx0XHR9XG5cdEBlbmQtaW5jbHVkZVxuKi9cblxuY29uc3QgYXNzZXJ0ID0gcmVxdWlyZSggXCJzaG91bGQvYXMtZnVuY3Rpb25cIiApO1xuXG5cblxuLy86IEBjbGllbnQ6XG5jb25zdCBzdGF0aXMgPSByZXF1aXJlKCBcIi4vc3RhdGlzLnN1cHBvcnQuanNcIiApO1xuLy86IEBlbmQtY2xpZW50XG5cblxuXG5cblxuXG5cbi8vOiBAY2xpZW50OlxuZGVzY3JpYmUoIFwic3RhdGlzXCIsICggKSA9PiB7XG5cblx0ZGVzY3JpYmUoIFwiYHN0YXRpcyB3aXRoIGJsdWVwcmludGBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgY2hhaW4gc3RhdGljIGF0dGFjaG1lbnRcIiwgKCApID0+IHtcblx0XHRcdGxldCBUZXN0ID0gc3RhdGlzKCBmdW5jdGlvbiBUZXN0KCApeyB9IClcblx0XHRcdC5hdHRhY2goIFwiaGVsbG9cIiwgXCJ3b3JsZFwiIClcblx0XHRcdC5hdHRhY2goIDEyMywgXCJ5ZWFoXCIgKVxuXHRcdFx0LmJpbmQoIHtcblx0XHRcdFx0XCJ0ZXN0XCI6IFwidGVzdDEyM1wiXG5cdFx0XHR9IClcblx0XHRcdC5pbXBsZW1lbnQoIFwidGVzdGluZ1wiLCBmdW5jdGlvbiB0ZXN0aW5nKCApe1xuXHRcdFx0XHRyZXR1cm4gXCJ0ZXN0IHZhbHVlXCI7XG5cdFx0XHR9IClcblx0XHRcdC5tZXJnZSggWyAxLCAyLCAzIF0gKVxuXHRcdFx0LmVqZWN0KCApO1xuXG5cblx0XHRcdGFzc2VydC5lcXVhbCggVGVzdC5oZWxsbywgXCJ3b3JsZFwiICk7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggVGVzdFsgMTIzIF0sIFwieWVhaFwiICk7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggVGVzdC50ZXN0LCBcInRlc3QxMjNcIiApO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHR5cGVvZiBUZXN0LnRlc3RpbmcsIFwiZnVuY3Rpb25cIiApO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIFRlc3QudGVzdGluZyggKSwgXCJ0ZXN0IHZhbHVlXCIgKTtcblxuXHRcdFx0YXNzZXJ0LmRlZXBFcXVhbCggVGVzdC5zbGljZSggKSwgWyAxLCAyLCAzIF0gKTtcblx0XHR9ICk7XG5cdH0gKTtcblxufSApO1xuLy86IEBlbmQtY2xpZW50XG5cblxuXG4iXX0=
//# sourceMappingURL=test.support.js.map
