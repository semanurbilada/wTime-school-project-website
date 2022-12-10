const secondStick = document.querySelector('.second');
const minuteStick = document.querySelector('.minute');
const hourStick = document.querySelector('.hour');

function setDate() {
    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondStick.style.transform = `rotate(${secondsDegrees}deg)`;

    const minutes = now.getMinutes();
    const minuteDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90;
    minuteStick.style.transform = `rotate(${minuteDegrees}deg)`;

    const hour = now.getHours();
    const hourDegrees = ((hour / 12) * 360) + ((minutes/60)*30) + 90;
    hourStick.style.transform = `rotate(${hourDegrees}deg)`;
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


/*
function londonTime() {
    constd = new Date();
    const localTime = d.getTime();
    const localOffset = d.getTimezoneOffset() * 60000;

    const utc = localTime + localOffset;
    const offset = 0; //London's UTC : +00.00
    const london = utc + (3600000 * offset);

    const londonTimeNow = new Date(london).toLocaleString();
    console.log(londonTimeNow);

}
londonTime();

*/
/* 
function dubaiTime() { 

const d = new Date();
const localTime = d.getTime();
const localOffset = d.getTimezoneOffset() * 60000;
 
const utc = localTime + localOffset;
const offset = 4; //Dubai's UTC : +00.00
const dubai = utc + (3600000 * offset);
 
const dubaiTimeNow = new Date(dubai).toLocaleString();
console.log(dubaiTimeNow);
}
dubaiTime(); */
