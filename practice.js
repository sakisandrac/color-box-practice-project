var button = document.querySelector('button');
var box = document.getElementById('changeMe');

button.onclick = function changeColor(){
    if(box.style.background == 'lightpink'){
        box.style.background = 'lightblue'}
    else {
        box.style.background = 'lightpink'
    }

}