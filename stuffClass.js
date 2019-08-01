// adding momentum
// console.log(moment().format("LTS"));

class Pomodoro {
  constructor(_time) {
    this.time = _time;
  }
  get get_time() {
    return this.time;
  }
  set set_time(new_time) {
    this.time = new_time;
  }

  // jump 1   o
  countdown(countDownDate) {
    // jump 2   p
    this.intervalID = setInterval(function(countTo = countDownDate) {
      // jump 3   a
      console.log("#######################################################");

      countDownDate.subtract(1, "s");
      console.log(countDownDate);
      console.log("#######################################################");
      document.querySelector("#clockH1").innerHTML = countDownDate.format(
        "mm:ss"
      );

      //      // If the count down is over, write some text
      // if (distance < 0) {
      //   clearInterval(this.intervalID);
      //   document.querySelector("#clockH1").innerHTML = "get rest";
      // }
    }, 1000);
  }
  // get distanceGetter() {
  //   return this.distance;
  // }
  killCountdown() {
    console.log(`killed countdown (${this.intervalID})`);
    // console.log(`killed at ${this.distance}`);

    clearInterval(this.intervalID);
  }
}

let countDownDate = moment({ hour: 14 }).add(25, "m");
// main object
let pom = new Pomodoro(countDownDate);
pom.countdown(countDownDate);
// pom.opa();
console.log(pom.get_time);

// reset

document.querySelector("#reset").onclick = () => {
  pom.killCountdown();
  pom.countdown(moment({ hour: 14 }).add(25, "m"));
};

// stop
document.querySelector("#stop").onclick = () => {
  pom.killCountdown();
};
// start
document.querySelector("#start").onclick = () => {
  // console.log("opa");
  // console.log(moment().format("mm ss"));
  // console.log(moment().format("LLLL"));
  // console.log(moment().format("LLLL"));
  currentTimeOnScreen = document.querySelector("#clockH1").textContent;
  // regex
  regex = /\d\d?/gi;
  timeArray = currentTimeOnScreen.match(regex);
  // regex
  pom.killCountdown();
  console.log(timeArray);
  // old date object
  // let newCountDate = Number(
  //   new Date(Date.parse(new Date()) + timeArray[0] * timeArray[1] * 1000)
  // );
  let newCountDate = moment({ hour: 14 });
  newCountDate.add(timeArray[0], "m");
  newCountDate.add(timeArray[1], "s");

  pom.countdown(newCountDate);
};
// document.querySelector("#clockH1");
// pom.set_time = 9;
// console.log(pom.get_time);
// console.log(countDownDate);
