const { Line, m } = require("./StationsClasses");

let greenline = new Line();
greenline.stations = [
  "KIRTI NAGAR",
  "SATGURU RAM SINGH MARG",
  "INDERLOK",
  "ASHOK PARK MAIN",
  "PUNJABI BAGH",
  "PUNJABI BAGH WEST",
  "SHIVAJI PARK",
  "MADIPUR",
  "PASCHIM VIHAR EAST",
  "PASCHIM VIHAR WEST",
  "PEERAGARHI",
  "UDYOG NAGAR",
  "MAHARAJA SURAJMAL STADIUM",
  "NANGLOI",
  "NANGLOI RAILWAY STATION",
  "RAJDHANI PARK",
  "MUNDKA",
  "MUNDKA INDUSTRIAL AREA (MIA)",
  "GHEVRA METRO STATION",
  "TIKRI KALAN",
  "TIKRI BORDER",
  "PANDIT SHREE RAM SHARMA",
  "BAHADURGARH CITY",
  "BRIG. HOSHIAR SINGH",
];
greenline.distance = 1.16;
greenline.time = 1.5;
greenline.interchanges = 4;
greenline.name = "greenline";
m.insert(greenline);


module.exports = {
  greenline,
};