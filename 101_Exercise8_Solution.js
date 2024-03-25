// Solution 1
/* function play() {
  let audioElement = new Audio(
    "https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3"
  );
  audioElement.play();
}

let time = document.getElementById("time");
let alarm = document.getElementById("alarm");
setInterval(() => {
  let d = new Date();
  time.innerHTML = d.toDateString() + " " + d.toTimeString();
}, 1000);

const setAlarm = (seconds) => {
  let d = new Date().getTime();
  setTimeout(() => {
    play();
  }, seconds * 1000);

  setInterval(() => {
    let secondsLeft = -(new Date().getTime() - (d + seconds * 1000));
    if (secondsLeft > 0) {
      alarm.innerHTML = `Alarm ringing in ${Math.floor(
        secondsLeft / 1000
      )} seconds`;
    }
  });
};

let s = prompt("After how many seconds do you want an alarm");
setAlarm(parseInt(s)); */

// Solution 2
const audioElement = new Audio("./101_Alert-alarm.wav");

// For hours
for (let i = 0; i < 24; i++) {
  hours.innerHTML =
    hours.innerHTML + `<option value="${i}" id="">${i}</option>`;
}
// For minutes
for (let i = 0; i < 60; i++) {
  mins.innerHTML = mins.innerHTML + `<option value="${i}" id="">${i}</option>`;
}
// For seconds
for (let i = 0; i < 60; i++) {
  secs.innerHTML = secs.innerHTML + `<option value="${i}" id="">${i}</option>`;
}

// Get Timer
let timer = new Date();
let year = timer.getFullYear();
let month = timer.getMonth() + 1;
let date = timer.getDate();

// Real time
let rtime;
let realTime = document.getElementById("rTime");
setInterval(() => {
  rtime = new Date();
  realTime.innerHTML = rtime;
}, 1000);

// Audio
function tringTring() {
  audioElement.play();
  setTimeout(() => {
    img.src = "./Images/Alarm_Clock.jpg";
    para.innerHTML = "🔔 Bajane wali ⏰ Ghadi 💛";
  }, 10000);
}

const para = document.getElementById("para");
const setAlarm = document.getElementById("setAlarm");
const imgbox = document.getElementById("imgbox");
setAlarm.addEventListener("click", () => {
  let alarmDate = new Date(
    `${year}-${month}-${date} ${hours.value}:${mins.value}:${secs.value}`
  );
  let timeForAlarm = new Date();
  let alarmTime = alarmDate - timeForAlarm;
  console.log(alarmTime);
  if (alarmTime >= 0) {
    alert("Apka anokha alarm darz kiya ja chuka hai!!");
  } else {
    alert(
      "Samay se piche chalane ka shouk kyun hai apko? Sahi se samay daalo!! "
    );
  }

  if (alarmTime >= 0) {
    setTimeout(() => {
      tringTring();
      img.src =
        "./Images/cute-little-child-boy-sleeping-good-night-in-bed-at-home-vector.jpg";
      para.innerHTML = "Arey bhai sone do na.. mat jagao!!";
    }, alarmTime);
  }
});

// Clear Alarm
const clearAlarm = document.getElementById("clearAlarm");
clearAlarm.addEventListener("click", () => {
  audioElement.pause();
  alert("Alarm cleared");
  img.src = "./Images/Alarm_Clock.jpg";
});
