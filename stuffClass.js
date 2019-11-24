class Pomodoro {
  constructor(_time) {
    this.time = _time;
    this.interval = 0;
  }
  get get_time() {
    return this.time;
  }
  set set_time(new_time) {
    this.time = new_time;
  }

  // get future date and countdown by 1s increments
  countdown(countDownDate) {
    let intervalID = setInterval(function(countTo = countDownDate) {
      countDownDate.subtract(1, "s");
      let time = countDownDate.format("mm:ss");
      document.title = time;
      document.querySelector("#clockH1").innerHTML = time;
      if (countDownDate.format("mm:ss") == "00:00") {
        document.querySelector("#clockH1").innerHTML = "opa";
        clearInterval(intervalID);
        // opa
        Notification.requestPermission();
        new Notification("timer is up");
        // opa
      }
    }, 1000);
    this.interval = intervalID;
  }

  killCountdown() {
    console.log(`killed countdown (${this.interval})`);
    clearInterval(this.interval);
  }
}

let whatTimeToDisplayByDefault = 25;
let countDownDate = moment({ hour: 14 }).add(25, "m");
// main object
let pom = new Pomodoro(countDownDate);
pom.countdown(countDownDate);

// short break
let shortBreak = (document.querySelector("#shortBreak").onclick = () => {
  pom.killCountdown();
  whatTimeToDisplayByDefault = 5;
  pom.countdown(moment({ hour: 14 }).add(whatTimeToDisplayByDefault, "m"));
});

// long break
let longBreak = (document.querySelector("#longBreak").onclick = () => {
  pom.killCountdown();
  whatTimeToDisplayByDefault = 15;
  pom.countdown(moment({ hour: 14 }).add(whatTimeToDisplayByDefault, "m"));
});

// pomodoro
let pomodoroBTN = (document.querySelector("#pomodoro").onclick = () => {
  pom.killCountdown();
  whatTimeToDisplayByDefault = 25;
  pom.countdown(moment({ hour: 14 }).add(whatTimeToDisplayByDefault, "m"));
});

// reset

document.querySelector("#reset").onclick = () => {
  pom.killCountdown();
  pom.countdown(moment({ hour: 14 }).add(whatTimeToDisplayByDefault, "m"));
};

// stop
document.querySelector("#stop").onclick = () => {
  pom.killCountdown();
};
// start
document.querySelector("#start").onclick = () => {
  currentTimeOnScreen = document.querySelector("#clockH1").textContent;
  // regex
  regex = /\d\d?/gi;
  timeArray = currentTimeOnScreen.match(regex);
  // regex
  pom.killCountdown();
  console.log(timeArray);
  let newCountDate = moment({ hour: 14 });
  // working
  newCountDate.add(timeArray[0], "m");
  newCountDate.add(timeArray[1], "s");

  pom.countdown(newCountDate);
};

// current local time

//
