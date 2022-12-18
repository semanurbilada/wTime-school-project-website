const currentDay = document.querySelector('.day');
const currentDate = document.querySelector('.date');
const time = document.querySelector('.digital-clock');

const hourStick = document.querySelector('.hour-stick');
const minStick = document.querySelector('.min-stick');
const secondStick = document.querySelector('.second-stick');

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

//Analog Clock & Current Date;
function setDate() {

    const now = new Date();

    //Get the current times using local time
    const hour = now.getHours();
    const minute = now.getMinutes();
    const seconds = now.getSeconds();

    //Rotation calculations
    //hour * 30 = 360 + ... + 90deg (css)
    //... = 
    const hourDegree = (hour * 30) + (minute/2) + 90;
    hourStick.style.transform = `rotate(${hourDegree}deg)`;

    //minutes * 6 = 360 + ... + 90deg (css)
    //... = second stick position bc minute's depending on second stick
    const minDegree = (minute * 6) + (seconds/10) + 90;
    minStick.style.transform = `rotate(${minDegree}deg)`;

    //seconds * 6 = 360 + 90deg (css)
    const secondsDegree = (seconds * 6) + 90;
    secondStick.style.transform = `rotate(${secondsDegree}deg)`;
    

    //Get the current dates using local time
    const date = now.getDate();
    const day = weekdays[now.getDay()];
    const month = months[now.getMonth()];
    const year = now.getFullYear(); 

    //outputs
    currentDate.innerHTML = date + " " + month + " " + year;
    currentDay.innerHTML = "- " + day; 
}
//calling functions;
//executed repeatedly with every 1 second (1000 milliseconds)
setInterval(setDate, 1000);
setDate();



//Digital Clock;
function currentTime() {
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let seconds = date.getSeconds();
    let period = "AM";

    //default period = AM (one line coding)
    if(hour == 0) { hour = 12; }

    //converting period to PM & 24 hours to 12 (one line coding)
    if(hour > 12) { hour = hour - 12; period = "PM"; }

    //adding 0 before the single numbers with ternary operators:
    //simpler way to if-else statement
    hour = (hour < 10) ? "0" + hour : hour;
    minute = (minute < 10) ? "0" + minute : minute;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    //outputs
    time.innerHTML ="Digital => " + hour + ":" + minute + ":" + seconds + " " + period; 

    //executed once with every 1 second (1000 milliseconds)
    setTimeout(currentTime, 1000);
}
//calling function;
currentTime();