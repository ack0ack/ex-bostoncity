// Testing file for JSON examples
var should = require('chai').should();
var ex = require('./ex.js').load('./exercise.js');
var data = require('../data.json');

ex.data = data;

describe('JSON Exercises - ex-highestSalary', function() {
    it('Finds the largest salary', function() {
        ex.maxSalary().should.equal(415709.53);
    });
});

describe('JSON Exercises - ex-highestSalary', function() {
    it('Count of salaries above "x" ', function() {
        ex.salariesAbove(150000).should.equal(1198);
    });
});
