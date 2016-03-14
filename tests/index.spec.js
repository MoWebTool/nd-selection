'use strict'

// var $ = require('nd-jquery')
var chai = require('chai')
var sinonChai = require('sinon-chai')
var selection = require('../index')

var expect = chai.expect
// var sinon = window.sinon

chai.use(sinonChai)

/*globals describe,it*/

describe('selection', function() {

  it('selection', function() {
    expect(selection).to.be.a('function')
  })

})
