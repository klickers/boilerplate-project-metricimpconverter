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
      "fraction with numerator decimal not read correctly"
    );
    assert.equal(
      convertHandler.getNum("325/4.5mi"),
      325 / 4.5,
      "fraction with denominator decimal not read correctly"
    );
    assert.equal(
      convertHandler.getNum("3.25/4.5mi"),
      3.25 / 4.5,
      "fraction with double decimals not read correctly"
    );
  });
  test("getNum() returns an error on a double fraction", function () {
    assert.equal(
      convertHandler.getNum("3/4/5mi"),
      "invalid number",
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

suite("convertHandler.getUnit() tests", function () {
  test("getUnit() can correctly read each valid input unit", function () {
    assert.equal(
      convertHandler.getUnit("34gal"),
      "gal",
      "input value of mi not read correctly"
    );
    assert.equal(
      convertHandler.getUnit("65.5lbs"),
      "lbs",
      "input value of mi not read correctly"
    );
    assert.equal(
      convertHandler.getUnit("3.5/3.4mi"),
      "mi",
      "input value of mi not read correctly"
    );
  });
  test("getUnit() returns an error for an invalid input unit", function () {
    assert.equal(
      convertHandler.getUnit("34kmwe"),
      "invalid unit",
      "invalid input unit not returning error"
    );
  });
});

suite("convertHandler.getReturnUnit() tests", function () {
  test("getReturnUnit() returns the correct return unit for each valid input unit", function () {
    assert.equal(
      convertHandler.getReturnUnit("gal"),
      "L",
      "not returning correct unit for gal"
    );
    assert.equal(
      convertHandler.getReturnUnit("lbs"),
      "kg",
      "not returning correct unit for lbs"
    );
    assert.equal(
      convertHandler.getReturnUnit("mi"),
      "km",
      "not returning correct unit for mi"
    );
  });
});

suite("convertHandler.spellOutUnit() tests", function () {
  test("spellOutUnit() returns the spelled-out string unit for each valid input unit", function () {
    assert.equal(
      convertHandler.spellOutUnit("gal"),
      "gallons",
      "not returning correct spelled out unit for gal"
    );
    assert.equal(
      convertHandler.spellOutUnit("lbs"),
      "pounds",
      "not returning correct spelled out unit for lbs"
    );
    assert.equal(
      convertHandler.spellOutUnit("mi"),
      "miles",
      "not returning correct spelled out unit for mi"
    );
  });
});

suite("convertHandler.convert() tests", function () {
  test("spellOutUnit() correctly converts gal to L", function () {
    assert.equal(
      convertHandler.convert(34, "gal"),
      "128.70394",
      "gal to L conversion not working correctly"
    );
  });
  test("spellOutUnit() correctly converts L to gal", function () {
    assert.equal(
      convertHandler.convert(128.7, "L"),
      "33.99896",
      "L to gal conversion not working correctly"
    );
  });
  test("spellOutUnit() correctly converts mi to km", function () {
    assert.equal(
      convertHandler.convert(1.2, "mi"),
      "1.93121",
      "mi to km conversion not working correctly"
    );
  });
  test("spellOutUnit() correctly converts km to mi", function () {
    assert.equal(
      convertHandler.convert(1.61, "km"),
      "1.00041",
      "km to mi conversion not working correctly"
    );
  });
  test("spellOutUnit() correctly converts lbs to kg", function () {
    assert.equal(
      convertHandler.convert("34", "lbs"),
      "15.42213",
      "lbs to kg conversion not working correctly"
    );
  });
  test("spellOutUnit() correctly converts kg to lbs", function () {
    assert.equal(
      convertHandler.convert("4", "kg"),
      "8.8185",
      "kg to lbs conversion not working correctly"
    );
  });
});
