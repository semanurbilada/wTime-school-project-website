
function londonTime() {
    const now = new Date();

    //time in miliseconds
    const localTime = now.getTime(); 

    //converting offset to miliseconds
    const localOffset = now.getTimezoneOffset() * 60000; 

    const utc = localTime + localOffset;
    const offset = 0; //London's UTC : +00.00
    const london = utc + (3600000 * offset);

    const londonTimeNow = new Date(london).toLocaleTimeString();
    document.getElementById('exact-time').innerText = 'Time in LONDON, now;';
    document.getElementById("digital").innerText = "Digital => " + londonTimeNow;
}


function parisTime() {
    const now = new Date();

    //time in miliseconds
    const localTime = now.getTime(); 

    //converting offset to miliseconds
    const localOffset = now.getTimezoneOffset() * 60000; 

    const utc = localTime + localOffset;
    const offset = 1; //Paris's UTC : +01.00
    const paris = utc + (3600000 * offset);

    const parisTimeNow = new Date(paris).toLocaleTimeString();
    document.getElementById('exact-time').innerText = 'Time in PARIS, now;';
    document.getElementById("digital").innerText = "Digital => " + parisTimeNow;
}


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
    document.getElementById('exact-time').innerText = 'Time in DUBAI, now;';
    document.getElementById("digital").innerText = "Digital => " + dubaiTimeNow;
}