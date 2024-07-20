import { Line, m } from "./StationsClasses.js";

export let rapidmetro = new Line();
rapidmetro.stations = [
  "SECTOR 55-56",
  "SECTOR-54 CHOWK",
  "SECTOR-53-54",
  "SECTOR-42-43",
  "PHASE-1",
  "SIKANDERPUR",
  "PHASE-2",
  "BELVEDERE TOWERS",
  "CYBER CITY",
  "MOULSARI AVENUE",
  "PHASE-3",
];
rapidmetro.distance = 0.96;
rapidmetro.time = 1.27;
rapidmetro.interchanges = 1;
rapidmetro.name = "rapidmetro";
