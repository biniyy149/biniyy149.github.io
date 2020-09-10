"use strict";
/* global sumOf assert */
describe("maxOfThree", function() {

    it("max of the three numbers", function() {
      assert.equal(maxOfThree(5,0,3), 5);
    });
  
    it("max of three numbers", function() {
      assert.equal(maxOfThree(-4,-9,-12), -4);
    });  
  
  });