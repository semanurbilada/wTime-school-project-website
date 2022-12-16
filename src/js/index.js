const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

const currentDay = document.querySelector('.day');
const currentDate = document.querySelector('.date');

const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    const mins = now.getMinutes();
    const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90;
    minsHand.style.transform = `rotate(${minsDegrees}deg)`;

    const hour = now.getHours();
    const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;

    const date = now.getDate();
    const day = weekdays[now.getDay()];
    const month = months[now.getMonth()];
    const year = now.getFullYear(); 

    //adding 0 before the single numbers (one line coding)
    if(month < 9) { month = "0" + month; }

    currentDate.innerHTML = date + " " + month + " " + year;
    currentDay.innerHTML = "- " + day;
}

setInterval(setDate, 1000);
setDate();



//Digital Clock;
function currentTime() {
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    let period = "AM";

    if(h == 0) {
        h = 12;
    }

    //converting hours 24 to 12
    if(h > 12) {
        h = h - 12;
        period = "PM";
    }

    //adding 0 before the single numbers
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    let time ="Digital: " + h + ":" + m + ":" + s + " " + period; 
    document.getElementById("digital-clock").innerText = time;
    document.getElementById("digital-clock").textContent = time;

    setTimeout(currentTime, 1000);
}

currentTime(); 