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

//Analog Clock (Current Time);
function setDate() {
    const now = new Date();

    //Get the current times using local time
    const hour = now.getHours();
    const minute = now.getMinutes();
    const seconds = now.getSeconds();

    //Rotation calculations
    //hour * 30 = 360 + ... + 90deg (css)
    const hourDegree = (hour * 30) + (minute/2) + 90;
    hourStick.style.transform = `rotate(${hourDegree}deg)`;

    //minutes * 6 = 360 + ... + 90deg (css)
    //... = second stick position bc minute's depending on second stick
    const minDegree = (minute * 6) + (seconds/10) + 90;
    minStick.style.transform = `rotate(${minDegree}deg)`;

    //seconds * 6 = 360 + 90deg (css)
    const secondsDegree = (seconds * 6) + 90;
    secondStick.style.transform = `rotate(${secondsDegree}deg)`;
}

//executed repeatedly with every 1 second (1000 milliseconds)
setInterval(setDate, 1000);
setDate();



//Digital Clock & Current Date;
function currentTime() {
    let clock = new Date();
    let hour = clock.getHours();
    let minute = clock.getMinutes();
    let seconds = clock.getSeconds();
    let period = "AM";

    let date = clock.getDate(); //day in number
    let month = months[clock.getMonth()]; //month in string
    let year = clock.getFullYear(); //year in number
    let day = weekdays[clock.getDay()]; //day in string

    //midnight 00 must be 12 & period must be AM
    if (hour === 0) { hour = 12; period = "AM"; } 

    //noon time period must be PM
    else if(hour === 12) { period = "PM"; }

    //converting period to PM & 24 hours to 12
    if (hour > 12) { hour = hour - 12; period = "PM"; } 

    //adding 0 before the single numbers with ternary operators:
    //simpler way to if-else statement
    hour = (hour < 10) ? "0" + hour : hour;
    minute = (minute < 10) ? "0" + minute : minute;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    //outputs
    currentDate.innerHTML = day + ", " + date + " " + month + " " + year;
    time.innerHTML ="Digital => " + hour + ":" + minute + ":" + seconds + " " + period; 
}

//variable declaration for using clearInterval, later
const stopCurrentTime = setInterval(currentTime, 1000);
currentTime();  