const { Line, m } = require("./StationsClasses");

let greenline2 = new Line();
greenline2.stations = ["INDERLOK", "ASHOK PARK MAIN"];
greenline2.distance = 1.16;
greenline2.time = 1.5;
greenline2.interchanges = 4;
greenline2.name = "greenline";
m.insert(greenline2);

module.exports = {
  greenline2,
};