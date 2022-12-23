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

const options = {
    weekday: 'long',
    month: 'long',
    year: 'numeric',
    day: 'numeric'
}; 
  
let activeInterval;
let activeTime = "current";
  
const setTime = (city) => {
    window.location.href = "#start";  
    activeTime === "current" ? clearInterval(stopCurrentTime) : clearInterval(activeInterval);
    console.log('clear')

    activeInterval = setInterval(function() {
        activeTime = city;
        const now = new Date();

        //time in miliseconds
        const localTime = now.getTime();
  
        //converting offset to miliseconds
        const localOffset = now.getTimezoneOffset() * 60000;
  
        const utc = localTime + localOffset;
        const offset = offsets[city];
        const cityTime = utc + (3600000 * offset);
  
        //current time zone changing (digital-clock)
        const cityTimeNow = new Date(cityTime).toLocaleTimeString();
        document.getElementById("exact-time").innerText = `Time in ${city.toLocaleUpperCase()}, now;`;
        document.getElementById("digital").innerText = "Digital => " + cityTimeNow;
        console.log("working", city);

        //current date - day changing
        const cityDateNow = new Date(cityTime).toLocaleDateString('en-GB', options);
        document.getElementById("date").innerHTML = cityDateNow;
        document.getElementById("day").style.display = 'none';
    }, 1000);


    //Offset value of UTC doesn't exist (go-back to current time button)
    document.getElementById("go-back").onclick = () => {
        window.location.href = "#start";

        clearInterval(activeInterval);  
        activeInterval = setInterval(function() {currentTime()}, 1000);

        //outputs
        document.getElementById("exact-time").innerText = "Your exact time, now;"
        document.getElementById("day").style.display = 'inline';
    };
}