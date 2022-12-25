

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
      
    for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display = "none";
            continue;   
        }
        else {
            x[i].style.display = "list-item";  
        }  
    }
} 