
const contant = document.querySelector('#boxer');

const btn3 = document.querySelector('#btnColor3');
const btn0 = document.querySelector('#return');

btn0.addEventListener('click', move0);
btn3.addEventListener('click', move3);


function move0()
{
    contant.style.transform = 'translateY(0px)';
}

function move3()
{
    contant.style.transform = 'translateY(-625px)';
}