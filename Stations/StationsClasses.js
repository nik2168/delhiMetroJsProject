 class Line {
  constructor(stations, name, distance, time, interchanges) {
    this.stations = stations;
    this.name = name;
    this.distance = distance;
    this.time = time;
    this.interchanges = interchanges;
  }
}


class StationsInfo{
  constructor(){
    this.name = ''
    this.distance = 0
    this.time = 0
    this.interchanges = 0
    this.dest = 0
    this.linename = ''
  }
};


 class Metro {
  constructor() {
    this.m = [];
  }

  insert(line) {
    this.m.push(line);
  }

  size() {
    return this.m.length;
  }

  lineDetails(i) {
    return this.m[i];
  }

  print() {
    this.m.forEach((x) => {
      console.log("Name : " + x.name);
      x.stations.forEach((station) => {
        console.log(station + " ");
      });
      console.log();
      console.log("Distance : " + x.distance);
      console.log("Time : " + x.time);
      console.log("Interchange : " + x.interchanges);
    });
  }
}

 let m = new Metro();

module.exports = {
    Line, 
    m,
    StationsInfo,
}