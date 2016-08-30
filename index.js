/**
 * Modules
 */
var esprima = require('esprima')
var _ = require('lodash')

/**
 * Locals
 */
var nonLogicalNodes = ['Program', 'BlockStatement']

/**
 * Exports
 */
module.exports = Analysis

/**
 * Analysis
 */
function Analysis (code) {
  this.types = {}
  this.code = code
  this.expressions = {}
  this.run()
}

Analysis.prototype.run = function () {
  var self = this
  traverse(esprima.parse(this.code), function (node) {
    var type = node.type || node
    if (!self.types[type]) {
      self.types[type] = 0
    }
    self.types[type] ++
    if (type === 'VariableDeclaration') {
      self.types[type] += node.declarations.length - 1
    }
    if (type === 'ExpressionStatement' && node.expression.type === 'CallExpression') {
      self.addExpression(node.expression.callee.name)
    }
  })
}

Analysis.prototype.addExpression = function (name) {
  if (!this.expressions[name]) {
    this.expressions[name] = 0
  }
  this.expressions[name]++
}

Analysis.prototype.getExpressionCount = function () {
  return this.expressions
}

Analysis.prototype.lloc = function () {
  var count = 0
  _.each(this.types, function (val, type) {
    if (nonLogicalNodes.indexOf(type) === -1) {
      count += val
    }
  })
  return count
}

function traverse (tree, nodeFn) {
  nodeFn(tree)
  if (_.isArray(tree.body)) {
    _.each(tree.body, function (node) {
      traverse(node, nodeFn)
    })
  } else if (tree.body) {
    traverse(tree.body, nodeFn)
  } else if (tree.expression && tree.expression.arguments && tree.expression.arguments.length > 0) {
    _.each(tree.expression.arguments, function (arg) {
      if (arg.type === 'FunctionExpression') {
        traverse(arg.body, nodeFn)
      }
    })
  }
}
