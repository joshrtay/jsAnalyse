/**
 * Module dependencies
 */

var fs = require('fs');
var test = require('tape');

/**
 * Analysis Lib
 */

var Analysis = require('../');

test('Expression call count should count the number of times certain expression are used', function (t) {
  var code = fs.readFileSync('./test/files/code.js').toString('utf8');

  var a = new Analysis(code);
  t.equal(a.expressionCount('foo'), 3);
  t.end();
});
