// add
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
      // Get today's date and time
      // let now = new Date().getTime();
      console.log("#######################################################");
      let now = Date.now();
      console.log(`printing now ${now}`);
      // Find the distance between now and the count down date

      this.distance = countTo - now;
      console.log(`${distance} distance  = ${countTo} - ${now}`);
      // Time calculations for days, hours, minutes and seconds
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);
      console.log("#######################################################");

      document.querySelector("#clockH1").innerHTML =
        minutes + "m " + seconds + "s ";

      // If the count down is over, write some text
      if (distance < 0) {
        clearInterval(this.intervalID);
        document.querySelector("#clockH1").innerHTML = "get rest";
      }
    }, 1000);
  }
  get distanceGetter() {
    return this.distance;
  }
  killCountdown() {
    console.log(`killed countdown (${this.intervalID})`);
    // console.log(`killed at ${this.distance}`);

    clearInterval(this.intervalID);
  }
}

let countDownDate = new Date(Date.parse(new Date()) + 25 * 60 * 1000);
// main object
let pom = new Pomodoro(countDownDate);
pom.countdown(countDownDate);
// pom.opa();
console.log(pom.get_time);

// reset

document.querySelector("#reset").onclick = () => {
  pom.killCountdown();
  pom.countdown(new Date(Date.parse(new Date()) + 25 * 60 * 1000));
};

// stop
document.querySelector("#stop").onclick = () => {
  pom.killCountdown();
};
// start
document.querySelector("#start").onclick = () => {
  console.log("opa");
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
  // new date object start

  let oldDateObj = new Date();
  let newCountDate = new Date();
  newCountDate.setTime(
    oldDateObj.getTime() + timeArray[0] * timeArray[1] * 1000
  );

  // fin
  console.log("from start", newCountDate);
  pom.countdown(newCountDate);
};
// document.querySelector("#clockH1");
// pom.set_time = 9;
// console.log(pom.get_time);
// console.log(countDownDate);
