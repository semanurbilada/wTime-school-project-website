
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

    setInterval(londonTime, 1000);
    detection();
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

    
    setInterval(parisTime, 1000);
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

    
    setInterval(dubaiTime, 1000);
}


function newyorkTime() { 
    const now = new Date();
    const localTime = now.getTime();
    const localOffset = now.getTimezoneOffset() * 60000;
     
    const utc = localTime + localOffset;
    const offset = -5; //New York's UTC : -05.00
    const newyork = utc + (3600000 * offset);
     
    const newyorkTimeNow = new Date(newyork).toLocaleTimeString();
    document.getElementById('exact-time').innerText = 'Time in NEW YORK, now;';
    document.getElementById("digital").innerText = "Digital => " + newyorkTimeNow;

   
    setInterval(newyorkTime, 1000);
}


function seoulTime() { 
    const now = new Date();
    const localTime = now.getTime();
    const localOffset = now.getTimezoneOffset() * 60000;
     
    const utc = localTime + localOffset;
    const offset = 9; //Seoul's UTC : +09.00
    const seoul = utc + (3600000 * offset);
     
    const seoulTimeNow = new Date(seoul).toLocaleTimeString();
    document.getElementById('exact-time').innerText = 'Time in SEOUL, now;';
    document.getElementById("digital").innerText = "Digital => " + seoulTimeNow;


    setInterval(seoulTime, 1000);
}


function istanbulTime() { 
    const now = new Date();
    const localTime = now.getTime();
    const localOffset = now.getTimezoneOffset() * 60000;
     
    const utc = localTime + localOffset;
    const offset = 3; //Istanbul's UTC : +03.00
    const istanbul = utc + (3600000 * offset);
     
    const istanbulTimeNow = new Date(istanbul).toLocaleTimeString();
    document.getElementById('exact-time').innerText = 'Time in ISTANBUL, now;';
    document.getElementById("digital").innerText = "Digital => " + istanbulTimeNow;

    setInterval(istanbulTime, 1000);
}


function tokyoTime() { 
    const now = new Date();
    const localTime = now.getTime();
    const localOffset = now.getTimezoneOffset() * 60000;
        
    const utc = localTime + localOffset;
    const offset = 9; //Tokyo's UTC : +09.00
    const tokyo = utc + (3600000 * offset);
        
    const tokyoTimeNow = new Date(tokyo).toLocaleTimeString();
    document.getElementById('exact-time').innerText = 'Time in TOKYO, Japan now;';
    document.getElementById("digital").innerText = "Digital => " + tokyoTimeNow;

    setInterval(tokyoTime, 1000);
    detection();
}


function detection() {
    if(onclick != currentTime) {
        clearInterval(stopCurrentTime);

        if(onclick == tokyoTime) {
            setInterval(tokyoTime);
        }
        if(onclick == londonTime) {
            setInterval(londonTime);
        }   
    }
}