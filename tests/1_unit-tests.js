const chai = require("chai");
let assert = chai.assert;
const ConvertHandler = require("../controllers/convertHandler.js");

let convertHandler = new ConvertHandler();

suite("convertHandler.getNum() tests", function () {
  test("getNum() can correctly read a whole number input", function () {
    assert.equal(
      convertHandler.getNum("34mi"),
      34,
      "whole number not read correctly"
    );
  });
  test("getNum() can correctly read a decimal input", function () {
    assert.equal(
      convertHandler.getNum("3.4mi"),
      3.4,
      "decimal not read correctly"
    );
  });
  test("getNum() can correctly read a fractional input", function () {
    assert.equal(
      convertHandler.getNum("3/4mi"),
      3 / 4,
      "fraction not read correctly"
    );
  });
  test("getNum() can correctly read a fractional input with a decimal", function () {
    assert.equal(
      convertHandler.getNum("3.25/4mi"),
      3.25 / 4,
      "fraction with decimal not read correctly"
    );
    assert.equal(
      convertHandler.getNum("325/4.5mi"),
      325 / 4.5,
      "fraction with decimal not read correctly"
    );
    assert.equal(
      convertHandler.getNum("3.25/4.5mi"),
      3.25 / 4.5,
      "fraction with decimal not read correctly"
    );
  });
  test("getNum() returns an error on a double fraction", function () {
    assert.equal(
      convertHandler.getNum("3/4/5mi"),
      "error",
      "double fraction error not caught"
    );
  });
  test("getNum() defaults to a numerical input of 1 when no numerical input is provided", function () {
    assert.equal(
      convertHandler.getNum("mi"),
      1,
      "default value of 1 not returning"
    );
  });
});
