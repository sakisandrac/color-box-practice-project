var button = document.querySelector('button');
var box = document.getElementById('changeMe');

function changeColor(){
    switch(box.style.background){
        case 'lightpink':
        box.style.background = 'lightblue';
        break;

        case 'lightblue':
        box.style.background = 'aquamarine'
        break;

        case 'aquamarine':
            box.style.background = 'grey'
            break;

        case 'grey':
            box.style.background = 'lightpink'
            break;

        default:
            box.innerHTML = 'what?'

    }

}