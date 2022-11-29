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
    //s = (s < 10) ? "0" + s : s;

    const time = h + ":" + m + " " + period; 
    document.getElementById("currentClock").innerText = time;
    document.getElementById("currentClock").textContent = time;

    setTimeout(currentTime, 1000);
}
currentTime(); 



function londonTime() {
    pass 
}


function dubaiTime() {
    pass
}
