

function londonTime() {

    const d = new Date();

    //time in miliseconds
    const localTime = d.getTime(); 

    //converting offset to miliseconds
    const localOffset = d.getTimezoneOffset() * 60000; 

    const utc = localTime + localOffset;
    const offset = 0; //London's UTC : +00.00
    const london = utc + (3600000 * offset);

    const londonTimeNow = new Date(london).toLocaleString();
    console.log(londonTimeNow);
}

londonTime();