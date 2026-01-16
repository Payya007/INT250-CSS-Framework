
function temperature() {
    let celsius = document.getElementById('celsius').value; 
    let fahrenheit = (celsius * 9 / 5) + 32; 
    document.getElementById('fahrenheit').value = fahrenheit; 
}

function weight() {
    let kilo = document.getElementById('kilograms').value; 
    let pounds = kilo * 2.2; 
    console.log(pounds.innerHTML);
    document.getElementById('pounds-result').innerHTML = pounds; 
}


function distance() {
    let km = document.getElementById("kilometers").value;
    let miles = km * 0.62137;
    document.getElementById("miles-result").innerHTML = miles;
}