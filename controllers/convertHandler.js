function ConvertHandler() {
  this.getNum = function (input) {
    let number = input.match(/[\d.\/]+/);

    if (number == null) return 1;
    else {
      if (number[0].split("/").length > 2) return "error";
      else return parseFloat(eval(number[0]));
    }
  };

  this.getUnit = function (input) {
    let unit = input.match(/[a-zA-Z]+/);

    if (unit == null || (unit != "gal" && unit != "lbs" && unit != "mi"))
      return "error";
    else return unit[0];
  };

  this.getReturnUnit = function (initUnit) {
    let result;

    return result;
  };

  this.spellOutUnit = function (unit) {
    let result;

    return result;
  };

  this.convert = function (initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;

    return result;
  };

  this.getString = function (initNum, initUnit, returnNum, returnUnit) {
    let result;

    return result;
  };
}

module.exports = ConvertHandler;
