

//list shows up when the user clicks on the searchbar
document.getElementById('searchbar').onclick = function showList() {
    
    document.getElementById('list').classList.toggle("show");   
    search();
}


//Note: search function only works when the list shows up...


function search() {
    let input = document.getElementById('searchbar').value
    input = input.toLowerCase();
    
    let x = document.getElementsByClassName('city-country');

    //optimization
    const max = x.length;
      
    for (let i = 0; i < max; i++) { 
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display = "none";
            continue;   
        }
        else {
            x[i].style.display = "list-item";  
        }  
    }
} 



/* 
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
]
*/