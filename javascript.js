function toCelsius(){
    var celsius = (document.getElementById('userInput').value - 32)*5/9;
    celsius = Math.round(celsius);
    document.getElementById("result").innerHTML = userInput.value +" Farenheit is "+ celsius+" Celsius.";
}

function toFarenheit(){
    var farenheit = document.getElementById('userInput').value *9 / 5 + 32;
    farenheit = Math.round(farenheit);
    document.getElementById("result").innerHTML = userInput.value +" Celsius is "+ farenheit+" Farenheit.";
}