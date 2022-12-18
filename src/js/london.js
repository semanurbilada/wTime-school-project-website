
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
    document.getElementById('exact-time').innerText = 'Time in London, now;';
    document.getElementById("digital").innerText = "Digital => " + londonTimeNow;
}