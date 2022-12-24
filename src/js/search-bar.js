

document.getElementById('searchbar').onclick = function() {showList()};
document.getElementById('list').onclick = function() {showList()};


function showList() {
    document.getElementById('list').classList.toggle("show");   
    search();
}


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