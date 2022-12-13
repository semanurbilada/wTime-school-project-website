
function search() {
    let input = document.getElementById('searchbar').value
    input = input.toLowerCase();
    let x = document.getElementsByClassName('city-country');
      
    for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display = "none";
        }
        else {
            x[i].style.display = "list-item";          
        }
    }
}

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