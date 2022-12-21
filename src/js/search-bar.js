

document.getElementById('searchbar').onclick = function() {showList()};
document.getElementById('list').onclick = function() {showList()};


function showList() {
    document.getElementById('list').classList.toggle("show");   
    search();
    console.log("showing")
}


function search() {
    console.log("searching")
    let input = document.getElementById('searchbar').value
    input = input.toLowerCase();
    
    let x = document.getElementsByClassName('city-country');
      
    for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display = "none";
            console.log("if")
        }
        else {
            x[i].style.display = "list-item";  
            console.log("else")
        }
    }
} 


/*
input.onclick = function show() {
    let showList = document.getElementById('list');
    if (showList.style.display !== 'none') {
        showList.style.display = 'list-item';
        console.log("showing list")
    }
};
/*
input.onblur = function() {
    let hideList = document.getElementById('list');
    if (hideList.style.display === 'list-item') {
        hideList.style.display = 'none';
        console.log("hiding list")
    }
};
*/


/*
let input = document.getElementById('searchbar'); 
input.onclick = function() {
    var div = document.getElementById('list');
    
    if (div.style.display === 'none') {
        div.style.display = 'list-item';
        console.log("if")
    }
    else if(div.style.display !== 'none') {
        div.style.display = 'list-item';
        console.log("else if")
    }
    else{
        div.style.display == 'none'
        console.log("else")
    }
};
*/


/* 
var input = document.getElementById('searchbar'); 
input.onclick = function() {
    var div = document.getElementById('list');
    if (div.style.display !== 'none') {
        div.style.display = 'none';
    }
    else {
        div.style.display = 'block';
    }
};*/



// Nothing found eklendi ancak search optimization çok stabil çalışmıyor ama çalışıyor!

/*
function toggle() {
    let list = document.getElementById('input');
    list.classList.toggle('active');
}

const searchList = [
    {city: 'Singapore'},
    {city: 'Rome'},         {country: 'Italy'},
    {city: 'Seoul'},        {country: 'Korea'},
    {city: 'Tokyo'},        {country: 'Japan'},
    {city: 'Oslo'},         {country: 'Norway'},
    {city: 'Paris'},        {country: 'France'},
    {city: 'Moscow'},       {country: 'Russia'},
    {city: 'Berlin'},       {country: 'Germany'},
    {city: 'Ankara'},       {country: 'Turkiye'},
    {city: 'Toronto'},      {country: 'Canada'},
    {city: 'Istanbul'},     {country: 'Turkiye'},
    {city: 'London'},       {country: 'United Kingdom'},
    {city: 'Amsterdam'},    {country: 'Netherlands'},
    {city: 'New York'},     {country: 'United States'},
    {city: 'Los Angeles'},  {country: 'United States'},
    {city: 'Dubai'},        {country: 'United Arab Emirates'}
] */