const { m, Line } = require("./StationsClasses");

let pinkline = new Line();
pinkline.stations = [
  "MAJLIS PARK",
  "AZADPUR",
  "SHALIMAR BAGH",
  "NETAJI SUBHASH PLACE",
  "SHAKURPUR",
  "PUNJABI BAGH WEST",
  "ESI-BASAIDARAPUR",
  "RAJOURI GARDEN",
  "MAYAPURI",
  "NARAINA VIHAR",
  "DELHI CANTT.",
  "DURGABAI DESHMUKH SOUTH CAMPUS",
  "SIR M. VISHWESHWARAIAH MOTI BAGH",
  "BHIKAJI CAMA PLACE",
  "SAROJINI NAGAR",
  "DILLI HAAT - INA",
  "SOUTH EXTENSION",
  "LAJPAT NAGAR",
  "VINOBAPURI",
  "ASHRAM",
  "SARAI KALE KHAN - NIZAMUDDIN",
  "MAYUR VIHAR-I",
  "MAYUR VIHAR POCKET-1",
  "TRILOKPURI-SANJAY LAKE",
  "EAST VINOD NAGAR-MAYUR VIHAR-II",
  "MANDAWALI-WEST VINOD NAGAR",
  "I.P. EXTENSION",
  "ANAND VIHAR ISBT",
  "KARKARDUMA",
  "KARKARDUMA COURT",
  "KRISHNA NAGAR",
  "EAST AZAD NAGAR",
  "WELCOME",
  "JAFRABAD",
  "MAUJPUR-BABARPUR",
  "GOKULPURI",
  "JOHRI ENCLAVE",
  "SHIV VIHAR",
];
pinkline.distance = 1.51;
pinkline.time = 2.21;
pinkline.interchanges = 11;
pinkline.name = "pinkline";
m.insert(pinkline);

module.exports = {
  pinkline,
};