const offsets = {
    los_angeles: -8,
    new_york: -5,
    toronto: -5,
    brazilia: -3,
    london: 0,
    oslo: 1,
    rome: 1,
    paris: 1,
    amsterdam: 1,
    cape_town: 2,
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
  
        //outputs
        //current date - day changing
        const cityDateNow = new Date(cityTime).toLocaleDateString('en-GB', options);
        document.getElementById("date").innerHTML = cityDateNow;
        
        //current time zone changing (digital-clock)
        const cityTimeNow = new Date(cityTime).toLocaleTimeString();
        document.getElementById("exact-time").innerText = `Time in ${city.toLocaleUpperCase()}, now;`;
        document.getElementById("digital").innerText = "Digital => " + cityTimeNow;
    }, 1000);


    //go back button shows up when the user clicks on the other buttons
    document.getElementById('clocks').onclick = function() {
        document.getElementById("go-back").style.display = "block";
    };


    //Offset value of UTC doesn't exist (go-back to current time button)
    document.getElementById("go-back").onclick = () => {
        window.location.href = "#start";

        clearInterval(activeInterval);  
        activeInterval = setInterval(function() {currentTime()}, 1000);

        //output
        document.getElementById("exact-time").innerText = "Your exact time, now;"
    };
}