

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
