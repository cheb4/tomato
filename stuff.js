function Pomodoro() {
  // Set the date we're counting down to
  let countDownDate = new Date(Date.parse(new Date()) + 25 * 60 * 1000);
  // Update the count down every 1 second
  let intervalID = setInterval(function() {
    // Get today's date and time
    let now = new Date().getTime();

    // Find the distance between now and the count down date
    let distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element with id="clockH1"document.querySelector("body > div > div.clock > h1")
    document.querySelector("body > div > div.clock > h1").innerHTML =
      minutes + "m " + seconds + "s ";

    // If the count down is over, write some text
    if (distance < 0) {
      clearInterval(intervalID);
      document.querySelector("body > div > div.clock > h1").innerHTML =
        "get rest";
    }
    // if (reset) {
    //   clearInterval(intervalID);
    //   console.log("reseting");
    // }
  }, 1000);
  //   console.log(intervalID);
  return intervalID;
}
let intervalIDarray = [];

let pom = Pomodoro();

intervalIDarray.push(pom);

console.log("opa");

// reseting

document.querySelector("#reset").onclick = () => {
  console.log("gg pradedu per nauja");
  if (intervalIDarray.length >= 1) {
    clearInterval(intervalIDarray.shift());
  }
  pom = Pomodoro();
  intervalIDarray.push(pom);
};
console.log("po reseto", intervalIDarray);
