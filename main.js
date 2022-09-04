let celsius = document.getElementById('celsius');
let fahrenhiet = document.getElementById('fahrenhiet');
let kelvin = document.getElementById('kelvin');
celsius.oninput = () => {
    //let output =(parseFloat(celsius.value)*9)/5+32;
    // fahrenhiet.value =parseFloat(output.toFixed(2));
    var f;
    f = (celsius.value * 9) / 5 + 32;
    fahrenhiet.value = f.toFixed(2);
    kelvin.value = (((fahrenhiet.value - 32) * 5) / 9 + 273.15).toFixed(2);
}

fahrenhiet.oninput = () => {
    //let output=5/9*(parseFloat(fahrenhiet.value)-32);
    //  celsius.value=parseFloat(output.toFixed(3));
    var c;
    c = ((fahrenhiet.value - 32) * 5) / 9;
    celsius.value = c.toFixed(2);
    kelvin.value = (((fahrenhiet.value - 32) * 5) / 9 + 273.15).toFixed(2);
}

kelvin.oninput = () => {
    var far;
    far = (((kelvin.value - 273.15) * 9) / 5) + 32;
    fahrenhiet.value = far.toFixed(2);
    var c;
    c = ((fahrenhiet.value - 32) * 5) / 9;
    celsius.value = c.toFixed(2);


}