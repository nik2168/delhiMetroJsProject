const { Line, m } = require("./StationsClasses");

let blueline2 = new Line();
blueline2.stations = [
  "YAMUNA BANK",
  "LAXMI NAGAR",
  "NIRMAN VIHAR",
  "PREET VIHAR",
  "KARKARDUMA",
  "ANAND VIHAR ISBT",
  "KAUSHAMBI",
  "VAISHALI",
];
blueline2.distance = 1.02;
blueline2.time = 1.62;
blueline2.interchanges = 3;
blueline2.name = "blueline2";
m.insert(blueline2);

module.exports = {
  blueline2,
};
