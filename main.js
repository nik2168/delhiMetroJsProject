const { MinHeap } = require("./DataStructures/MinHeap");
const { blueline } = require("./Stations/BlueLine");
const { blueline2 } = require("./Stations/BlueLine2");
const { greenline } = require("./Stations/GreenLine");
const { greenline2 } = require("./Stations/GreenLineIntersection");
const { greyline } = require("./Stations/GreyLine");
const { magentaline } = require("./Stations/MagentaLine");
const { orangeline } = require("./Stations/OrangeLine");
const { pinkline } = require("./Stations/PinkLine");
const { rapidmetro } = require("./Stations/RapidMetro");
const { redline } = require("./Stations/RedLine");
const { Line, m, StationsInfo } = require("./Stations/StationsClasses");
const { violetline } = require("./Stations/VioletLine");
const { yellowline } = require("./Stations/YellowLine");

let graph = [];
let totalDistance = 0;
let totalTime = 0;
let stationsMap = new Map();
let allStations = [];

let getEdges = (i, j) => {
  graph[i.dest].push(j);
  graph[j.dest].push(i);
};

// let display = () => {
//     for(let x = 0; x < graph.length; x++){
//         for(let keys in graph[x]){
//             c
//         }
//     }
// }

function makeUppercase(s) {
  return s.toUpperCase();
}

function finder(src, dst) {
  let mp = new Map(); // will store src & dist
  let q = new MinHeap();
  let vis = new Set(); // visited nodes
  let par = new Array(300).fill(null); // parent node;
  for (let i = 0; i < 300; i++) {
    let t = new StationsInfo();
    t.distance = Infinity;
    mp.set(i, t);
  }
  src.distance = 0;
  q.push({ 0: src.dest });
  mp.set(src.dest, src);
  par[src.dest] = src;

  while (q.size() > 0) {
    let cur = q.top();
    q.pop();
    if (vis.has(cur[Number(Object.keys(cur))])) continue;
    vis.add(cur[Number(Object.keys(cur))]);
    graph[cur[Number(Object.keys(cur))]].forEach((x) => {
      let td = Number(Object.keys(cur)) + x.distance;
      if (mp.get(x.dest).distance > td) {
        mp.get(x.dest).distance = td;
        q.push({ [td]: x.dest });
        par[x.dest] = allStations[cur[Number(Object.keys(cur))]];
      }
    });
  }
  totalDistance = mp.get(dst.dest).distance;
  let s = [];
  let path = new StationsInfo();
  path = dst;
  s.push(dst);
  totalTime += par[path.dest].time;

  while (path.dest !== src.dest) {
    s.push(par[path.dest]);
    totalTime += s[s.length - 1].time;
    path = par[path.dest];
  }
  return s;
}

// Processing
graph = new Array(300).fill(null).map(() => []);

let count = 0;

for (let i = 0; i < m.size(); i++) {
  let cur = new Line();
  cur = m.lineDetails(i);
  let a = new StationsInfo();
  (a.distance = cur.distance),
    (a.time = cur.time),
    (a.interchanges = cur.interchanges),
    (a.linename = cur.name);
  for (let j = 0; j < cur.stations.length - 1; j++) {
    let x = new StationsInfo();
    x = Object.assign({}, a);
    let y = new StationsInfo();
    y = Object.assign({}, a);

    x.name = cur.stations[j];
    y.name = cur.stations[j + 1];

    let aExists = stationsMap.has(x.name);
    let bExists = stationsMap.has(y.name);

    if (aExists && bExists) {
      x.dest = stationsMap.get(x.name).dest;
      y.dest = stationsMap.get(y.name).dest;
      getEdges(x, y);
    } else if (bExists) {
      x.dest = count++;
      y.dest = stationsMap.get(y.name).dest;
      getEdges(x, y);
      stationsMap.set(x.name, x);
      allStations.push(x);
    } else if (aExists) {
      x.dest = stationsMap.get(x.name).dest;
      y.dest = count++;
      getEdges(x, y);
      stationsMap.set(y.name, y);
      allStations.push(y);
    } else {
      x.dest = count++;
      y.dest = count++;
      getEdges(x, y);
      stationsMap.set(x.name, x);
      stationsMap.set(y.name, y);
      allStations.push(x);
      allStations.push(y);
    }
  }
}

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let from, to;
rl.question("From : ", function (answer) {
  from = makeUppercase(answer.trim());
  rl.question("To : ", function (answer) {
    to = makeUppercase(answer.trim());
    rl.close();
    let fromStation = {
      name: from,
      dest: stationsMap.get(from).dest,
    };
    let toStation = {
      name: to,
      dest: stationsMap.get(to).dest,
    };

    let result = finder(fromStation, toStation);

    console.log();
    console.log();
    console.log("Total Time : " + Math.trunc(totalTime) + " min");
    console.log("Total Distance : " + Math.trunc(totalDistance) + " km");
    console.log();

    let currLine = "";
    let ctr = 1;
    let rSize = result.length;
    while (result.length > 0) {
      if (ctr > 1 && ctr < rSize) {
        if (ctr === 2) currLine = result[result.length - 1].linename;
        else {
          let t = result[result.length - 1].linename;
          if (t !== currLine) {
            currLine = t;
            console.log(`( Change to ${currLine})`);
          }
        }
      }
      console.log(result.pop().name + " ");
      ctr++;
    }
    console.log();
  });
});
