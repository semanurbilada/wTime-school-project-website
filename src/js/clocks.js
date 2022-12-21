const offsets = {
    london: 0,
    paris: 1,
    dubai: 4,
    new_york: -5,
    seoul: 9,
    istanbul: 3,
    tokyo: 9,
}

let myInterval;

let activeClock = "current";

function timeHandler(city) {
    activeClock = city

    const now = new Date();

    //time in miliseconds
    const localTime = now.getTime(); 

    //converting offset to miliseconds
    const localOffset = now.getTimezoneOffset() * 60000; 

    const utc = localTime + localOffset;
    const offset = offsets[city];
    const cityTime = utc + (3600000 * offset);

    const cityTimeNow = new Date(cityTime).toLocaleString();
    document.getElementById('exact-time').innerText = `Time in ${city.toLocaleUpperCase()}, now;`;
    document.getElementById("digital").innerText = "Digital => " + cityTimeNow;
    console.log("working", city);
}

const setTime = (city2) => {
    activeClock === "current" ? clearInterval(stopCurrentTime) : clearInterval(myInterval);
    myInterval = setInterval(timeHandler(city2), 1000)
    console.log("working2", city2);

    window.location.href='#start';
}