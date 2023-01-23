var button = document.querySelector('button');
var box = document.getElementById('changeMe');

function changeColor(){
    if (box.style.background == 'lightpink'){
        box.style.background = 'lightblue';
    }else if (box.style.background == 'lightblue'){
        box.style.background = 'purple';
    } else {
        box.style.background = 'lightpink';
    }
    

}