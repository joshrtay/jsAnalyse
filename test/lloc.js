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
  t.equal(a.lloc(), 9);
  t.end();
});
