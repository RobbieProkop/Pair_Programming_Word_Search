const chai = require('chai');
const assert = chai.assert;

const wordSearch = require('../wordsearch.js');

describe("#wordSearch()", function() {
  it("should return false if the word is not present", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'FRANK');

    assert.isFalse(result);
  });

  it("should return true if the word is present", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'SEINFELD');

    assert.isTrue(result);
  });

  it("should return true if the word is present Vertically", function() {
    const result = wordSearch([
      ['D', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['A', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['R', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['R', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['E', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['N', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'DARREN');

    assert.isTrue(result);
  });
  it("should return false if the word is not present Vertically", function() {
    const result = wordSearch([
      ['D', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['A', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['R', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['R', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['E', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['P', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'DARREN');

    assert.isFalse(result);
  });

  it("should return false if the array is empty", function() {
    const result = wordSearch([], 'DARREN');

    assert.isFalse(result);
  });

  it("should return true if the word is present", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'K', 'N', 'A', 'R', 'F'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'FRANK');

    assert.isTrue(result);
  });
  it("should return false if the word is not present", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'K', 'C', 'A', 'R', 'F'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'FRANK');

    assert.isFalse(result);
  });
  it("should return true if the word is vertically present", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'K', 'G', 'A', 'R', 'F'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'K'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'N'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'A'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'R'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'F'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'FRANK');

    assert.isTrue(result);
  });
  it("should return false if the word is not vertically present", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'K', 'C', 'A', 'R', 'F'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'R'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'N'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'L'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'R'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'F'],
    ], 'FRANK');

    assert.isFalse(result);
  });
  // it("should return true if the word is diagonally present", function() {
  //   const result = wordSearch([
  //     ['F', 'W', 'C', 'K', 'G', 'A', 'R', 'F'],
  //     ['S', 'R', 'I', 'N', 'F', 'E', 'R', 'D'],
  //     ['Y', 'F', 'A', 'F', 'Q', 'U', 'A', 'L'],
  //     ['H', 'M', 'J', 'N', 'E', 'V', 'R', 'K'],
  //     ['W', 'H', 'C', 'S', 'K', 'E', 'R', 'N'],
  //     ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'C'],
  //     ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'R'],
  //     ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'B'],
  //     ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
  //   ], 'FRANK');

  //   assert.isTrue(result);
  // });
  // it("should return false if the word is not diagonally present", function() {
  //   const result = wordSearch([
  //     ['A', 'W', 'C', 'K', 'C', 'A', 'R', 'F'],
  //     ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'R'],
  //     ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'N'],
  //     ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'L'],
  //     ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
  //     ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
  //     ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
  //     ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'R'],
  //     ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'F'],
  //   ], 'FRANK');

  //   assert.isFalse(result);
  // });


});