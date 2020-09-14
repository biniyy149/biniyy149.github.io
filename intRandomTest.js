"use strict";
/* global sumOf assert */
describe("random integer", function() {

    it("random integer", function() {
      assert.equal(randomInteger(1,5), 5);
    });
  
    it("random integer", function() {
      assert.equal(randomInteger(1,5), 3);
    });  
  
  });