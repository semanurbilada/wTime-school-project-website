
function dubaiTime() { 
    
    const now = new Date();

    //time in miliseconds
    const localTime = now.getTime();

    //converting offset to miliseconds
    const localOffset = now.getTimezoneOffset() * 60000;
     
    const utc = localTime + localOffset;
    const offset = 4; //Dubai's UTC : +04.00
    const dubai = utc + (3600000 * offset);
     
    const dubaiTimeNow = new Date(dubai).toLocaleTimeString();
    document.getElementById('exact-time').innerText = 'Time in Dubai, now;';
    document.getElementById("digital").innerText = "Digital => " + dubaiTimeNow;
}