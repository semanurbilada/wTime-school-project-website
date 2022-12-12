

function dubaiTime() { 
    
    const d = new Date();
    const localTime = d.getTime();
    const localOffset = d.getTimezoneOffset() * 60000;
     
    const utc = localTime + localOffset;
    const offset = 4; //Dubai's UTC : +00.00
    const dubai = utc + (3600000 * offset);
     
    const dubaiTimeNow = new Date(dubai).toLocaleString();
    console.log(dubaiTimeNow);
}

dubaiTime();