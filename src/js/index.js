const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

const currentDay = document.querySelector('.day');
const currentDate = document.querySelector('.date');

function setDate() {
    const now = new Date();
    const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

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
    const month = now.getMonth() + 1;
    const year = now.getFullYear(); 
    
    let day = weekdays[now.getDay()];

    if(month < 9) { month = "0" + month; }

    currentDate.innerHTML = date + "/" + month + "/" + year;
    currentDay.innerHTML = day;
}

setInterval(setDate, 1000);
setDate();


/*
function currentTime() {
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    let period = "AM";

    if(h == 0) {
        h = 12;
    }

    if(h > 12) {
        h = h - 12;
        period = "PM";
    }

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    let time = h + ":" + m + ":" + s + " " + period; 
    document.getElementById("currentClock").innerText = time;
    document.getElementById("currentClock").textContent = time;

    setTimeout(currentTime, 1000);
}
currentTime(); 
*/