const offsets = {
    los_angeles: -8,
    new_york: -5,
    toronto: -5,
    london: 0,
    oslo: 1,
    rome: 1,
    paris: 1,
    berlin: 1,
    amsterdam: 1,
    ankara: 3,
    moscow: 3,
    istanbul: 3,
    dubai: 4,
    singapore: 8,
    seoul: 9,
    tokyo: 9,
};
  
let activeInterval;
  
let activeTime = "current";
  
const setTime = (city) => {
    activeTime === "current" ? clearInterval(stopCurrentTime) : clearInterval(activeInterval);

    activeInterval = setInterval(function () {
        activeTime = city;
        const now = new Date();

        //time in miliseconds
        const localTime = now.getTime();
  
        //converting offset to miliseconds
        const localOffset = now.getTimezoneOffset() * 60000;
  
        const utc = localTime + localOffset;
        const offset = offsets[city];
        const cityTime = utc + (3600000 * offset);
  
        const cityTimeNow = new Date(cityTime).toLocaleString();
        document.getElementById("exact-time").innerText = `Time in ${city.toLocaleUpperCase()}, now;`;
        document.getElementById("digital").innerText = "Digital => " + cityTimeNow;
        console.log("working", city);
    }, 1000);

    console.log("working2", city);
  
    window.location.href = "#start";
};