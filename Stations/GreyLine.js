const { m, Line } = require("./StationsClasses");

let greyline = new Line();
greyline.stations = ["DWARKA", "NANGLI", "NAJAFGARH", "DHANSA BUS STAND"];
greyline.distance = 1.25;
greyline.time = 2.5;
greyline.interchanges = 1;
greyline.name = "greyline";
m.insert(greyline);

module.exports = {
  greyline,
};