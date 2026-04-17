let body = document.getElementsByTagName("body")[0];

function lightMode() {
  body.style.background = "linear-gradient(to top, wheat, white)";
}
function darkMode() {
  body.style.background =
  "linear-gradient(365deg, rgb(17, 17, 87), rgb(38, 64, 109)";
}
  
function ShowClock() {
  const clock = document.querySelector("#clock");
  const dateRusult = new Date();

  let hours = dateRusult.getHours();
  let minutes = dateRusult.getMinutes();
  let seconds = dateRusult.getSeconds();
  // console.log(hours, minutes, seconds);

  clock.innerHTML = `${hours < 10 ? "0" + hours : hours}:${minutes < 10 ? "0" + minutes : minutes}:${seconds < 10 ? "0" + seconds : seconds} ${hours < 12 ? "a.m." + hours : "p.m."}`;
  setInterval(ShowClock, 1000);
}
ShowClock();

function ShowInfo() {
  const info = document.querySelector(".info");
  const time = new Date();

  let day = time.getDate();
  // let month = time.getMonth() + 1;
  let year = time.getFullYear();

  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

  let dayName = days[time.getDay()]
  let monthName = month[time.getMonth()]

  info.innerHTML = ` ${dayName}, ${day < 10 ? "0" + day : day} ${monthName}, ${year}.`;

  setInterval(ShowInfo, 1000);
}
ShowInfo();