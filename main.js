let celsius = document.getElementById('celsius');
let fahrenhiet = document.getElementById('fahrenhiet');

celsius.oninput =() =>{
    let output =(parseFloat(celsius.value)*9)/5+32;
    fahrenhiet.value =parseFloat(output.toFixed(2));
}
fahrenhiet.oninput = () =>{
    let output=5/9*(parseFloat(fahrenhiet.value)-32);
    celsius.value=parseFloat(output.toFixed(3));
}