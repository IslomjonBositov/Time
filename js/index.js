// New Date

// const date = new Date();
// console.log(date.getDate());
// console.log(date.getDay());
// console.log(date.getFullYear());
// console.log(date.getHours());
// console.log(date.getMilliseconds());
// console.log(date.getMinutes());
// console.log(date.getMonth());
// console.log(date.getSeconds());
// console.log(date.getTime());

// console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} Shu vaqt bo'ldi. Bugun ${date.getDate()} ${date.getMonth() === 3 ? "Aprel" : "May"} va haftaning ${date.getDay() === 3 ? "Chorshanba" : "Payshanba"} kuni`);

// // SetTimeout
// setTimeout(() => {
//   console.log("SetTimeOut");
// }, 1000);

// // SetInterval
// setInterval(() => {
//   console.log("SetInterval");
// }, 5000);

function ShowClock() {
  const clock = document.querySelector("#clock");
  const dateRusult = new Date();

  let hours = dateRusult.getHours();
  let minutes = dateRusult.getMinutes();
  let seconds = dateRusult.getSeconds();
  // console.log(hours, minutes, seconds);

  clock.innerHTML = `${hours < 10 ? "0" + hours : hours}:${minutes < 10 ? "0" + minutes : minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
  // clock.innerHTML = `${hours > 12 ? "pm" : hours}`
  setInterval(ShowClock, 1000);
}
ShowClock();

function ShowInfo() {
  const info = document.querySelector(".info");
  const time = new Date();

  let day = time.getDate();
  let month = time.getMonth() + 1;
  let year = time.getFullYear();

  // console.log(day, month, year);

  info.innerHTML = `${day < 10 ? "0" + day : day}. ${month < 10 ? "0" + month : month}. ${year}`;

  setInterval(ShowInfo, 1000);
}
ShowInfo();

let body = document.getElementsByTagName("body")[0];
// console.log(body);

function lightMode() {
  body.style.background = "linear-gradient(to top, wheat, white)";
}
function darkMode() {
  body.style.background =
    "linear-gradient(365deg, rgb(17, 17, 87), rgb(38, 64, 109)";
}
