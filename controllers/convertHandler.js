function ConvertHandler() {
  this.GAL_TO_L = 3.78541;
  this.LBS_TO_KG = 0.453592;
  this.MI_TO_KM = 1.60934;

  this.spelledUnits = {
    gal: "gallons",
    lbs: "pounds",
    mi: "miles",
    L: "liters",
    kg: "kilograms",
    km: "kilometers",
  };

  this.getNum = function (input) {
    let number = input.match(/[\d.\/]+/);

    if (number == null) return 1;
    else {
      if (number[0].split("/").length > 2) return "invalid number";
      else return parseFloat(eval(number[0]));
    }
  };

  this.getUnit = function (input) {
    let unit = input.match(/[a-zA-Z]+/);

    if (unit == null) return "invalid unit";
    else {
      unit = unit[0].toLowerCase() == "l" ? "L" : unit[0].toLowerCase();
      return this.spelledUnits[unit] == null ? "invalid unit" : unit;
    }
  };

  this.getReturnUnit = function (initUnit) {
    switch (initUnit) {
      case "gal":
        return "L";
      case "lbs":
        return "kg";
      case "mi":
        return "km";
      case "L":
        return "gal";
      case "kg":
        return "lbs";
      case "km":
        return "mi";
    }
  };

  this.spellOutUnit = function (unit) {
    return this.spelledUnits[unit];
  };

  this.convert = function (initNum, initUnit) {
    let returnNum;

    switch (initUnit) {
      case "gal":
        returnNum = initNum * this.GAL_TO_L;
        break;
      case "lbs":
        returnNum = initNum * this.LBS_TO_KG;
        break;
      case "mi":
        returnNum = initNum * this.MI_TO_KM;
        break;
      case "L":
        returnNum = initNum / this.GAL_TO_L;
        break;
      case "kg":
        returnNum = initNum / this.LBS_TO_KG;
        break;
      case "km":
        returnNum = initNum / this.MI_TO_KM;
        break;
    }

    return Math.round(returnNum * 100000) / 100000;
  };

  this.getString = function (initNum, initUnit, returnNum, returnUnit) {
    return `${initNum} ${this.spellOutUnit(
      initUnit
    )} converts to ${returnNum} ${this.spellOutUnit(returnUnit)}`;
  };
}

module.exports = ConvertHandler;
