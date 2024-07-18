const { m, Line } = require("./StationsClasses");



let orangeline = new Line();
orangeline.stations = [
  "NEW DELHI (YELLOW & AIRPORT LINE)",
  "SHIVAJI STADIUM",
  "DHAULA KUAN",
  "DELHI AEROCITY",
  "AIRPORT (T-3)",
  "DWARKA SECTOR-21",
  "YASHOBHOOMI DWARKA SECTOR-25",
];
orangeline.distance = 3.55;
orangeline.time = 2.71;
orangeline.interchanges = 3;
orangeline.name = "orangeline";
m.insert(orangeline);

module.exports = {
  orangeline,
};
