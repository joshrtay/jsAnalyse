/**
 * Module dependencies
 */

var fs = require('fs');
var test = require('tape');

/**
 * Analysis Lib
 */
var Analysis = require('../');


test('Logical line count should count exporession, variable declarations, and while statments', function(t) {
  var code = fs.readFileSync('./test/files/code.js').toString('utf8');
  var a = new Analysis(code);
  t.equal(a.lloc(), 13);
  t.end();
});

test('Expression call count should count the number of times certain expression are used', function (t) {
  var code = fs.readFileSync('./test/files/code.js').toString('utf8');

  var a = new Analysis(code);
  t.equal(a.getExpressionCount()['foo'], 3);
  t.end();
})
