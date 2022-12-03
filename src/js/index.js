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



function londonTime() {
/* 
const d = new Date();
const localTime = d.getTime();
const localOffset = d.getTimezoneOffset() * 60000;
 
const utc = localTime + localOffset;
const offset = 0; //London's UTC : +00.00
const london = utc + (3600000 * offset);
 
const londonTimeNow = new Date(london).toLocaleString();
console.log(londonTimeNow);
*/
}
londonTime();



function dubaiTime() { 
/* 
const d = new Date();
const localTime = d.getTime();
const localOffset = d.getTimezoneOffset() * 60000;
 
const utc = localTime + localOffset;
const offset = 4; //Dubai's UTC : +00.00
const dubai = utc + (3600000 * offset);
 
const dubaiTimeNow = new Date(dubai).toLocaleString();
console.log(dubaiTimeNow);
*/
}
dubaiTime();
