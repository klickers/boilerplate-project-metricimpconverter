const chaiHttp = require("chai-http");
const chai = require("chai");
let assert = chai.assert;
const server = require("../server");

chai.use(chaiHttp);

suite("Functional Tests", function () {
  this.timeout(5000);

  test("Test GET request to /api/convert with valid input", function (done) {
    chai
      .request(server)
      .get("/api/convert?input='34gal'")
      .end(function (err, res) {
        assert.equal(res.status, 200);
        assert.equal(res.type, "application/json");
        assert.equal(res.body.initNum, 34);
        assert.equal(res.body.initUnit, "gal");
        assert.equal(res.body.returnNum, 128.70394);
        assert.equal(res.body.returnUnit, "L");
        assert.equal(
          res.body.string,
          "34 gallons converts to 128.70394 liters"
        );
        done();
      });
  });

  test("Test GET request to /api/convert with invalid input", function (done) {
    chai
      .request(server)
      .get("/api/convert?input='32g'")
      .end(function (err, res) {
        assert.equal(res.status, 200);
        assert.equal(res.text, "invalid unit");
        done();
      });
  });

  test("Test GET request to /api/convert with invalid number", function (done) {
    chai
      .request(server)
      .get("/api/convert?input='3/7.2/4kg'")
      .end(function (err, res) {
        assert.equal(res.status, 200);
        assert.equal(res.text, "invalid number");
        done();
      });
  });

  test("Test GET request to /api/convert with invalid number and unit", function (done) {
    chai
      .request(server)
      .get("/api/convert?input='3/7.2/4kilomegagram'")
      .end(function (err, res) {
        assert.equal(res.status, 200);
        assert.equal(res.text, "invalid number and unit");
        done();
      });
  });

  test("Test GET request to /api/convert with no number", function (done) {
    chai
      .request(server)
      .get("/api/convert?input='kg'")
      .end(function (err, res) {
        assert.equal(res.status, 200);
        assert.equal(res.type, "application/json");
        assert.equal(res.body.initNum, 1);
        assert.equal(res.body.initUnit, "kg");
        assert.equal(res.body.returnNum, 2.20462);
        assert.equal(res.body.returnUnit, "lbs");
        assert.equal(res.body.string, "1 kilograms converts to 2.20462 pounds");
        done();
      });
  });
});
