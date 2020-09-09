"use strict";
/* global sumOf assert */
describe("sumOf", function() {

    it("sum of array elements", function() {
      assert.equal(sumOf([1,2,3,4,5]), 15);
    });
  
    it("sum of array elements", function() {
      assert.equal(sumOf([5,4,3,6]), 18);
    });  
  
  });