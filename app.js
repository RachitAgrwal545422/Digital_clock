let day = ["sun", "mon", "tues", "wed", "thurs", "fri", "sat"];
var month_day = Array.from(document.getElementsByClassName("current_day"));
var current_time = new Date();
month_day[current_time.getDay()].classList.add("color");
let hour = document.querySelector(".hour");
let min = document.querySelector(".min");
let sec = document.querySelector(".sec");
let daypart = document.querySelector(".day_part");
setInterval(() => {
  var current_time = new Date();
  if (current_time.getHours() < 10) {
    hour.innerHTML = `0${current_time.getHours()}`;
  } else {
    hour.innerHTML = `${current_time.getHours()}`;
  }
  if (current_time.getMinutes() < 10) {
    min.innerHTML = `0${current_time.getMinutes()}`;
  } else {
    min.innerHTML = `${current_time.getMinutes()}`;
  }
  if (current_time.getSeconds() < 10) {
    sec.innerHTML = `0${current_time.getSeconds()}`;
  } else {
    sec.innerHTML = `${current_time.getSeconds()}`;
  }
  if (current_time.getHours() >= 11) {
    daypart.innerHTML = "PM";
  } else {
    daypart.innerHTML = "AM";
  }
}, 1);
