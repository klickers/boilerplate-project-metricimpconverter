function ConvertHandler() {
  this.GAL_TO_L = 3.78541;
  this.LBS_TO_KG = 0.453592;
  this.MI_TO_KM = 1.60934;

  this.spelledUnits = {
    gal: "gallons",
    lbs: "pounds",
    mi: "miles",
  };

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
    switch (initUnit) {
      case "gal":
        return this.GAL_TO_L;
      case "lbs":
        return this.LBS_TO_KG;
      case "mi":
        return this.MI_TO_KM;
    }
  };

  this.spellOutUnit = function (unit) {
    return this.spelledUnits[unit];
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
