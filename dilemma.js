

const contant = document.querySelector('#boxer');

const btn1 = document.querySelector('#btnColor1');
const btn2 = document.querySelector('#btnColor2');
const btn0 = document.querySelector('#return');

const y1 = document.getElementById("year1");
const y2 = document.getElementById("year2");
const y3 = document.getElementById("year3");
const y4 = document.getElementById("year4");

const g0 = "석방";
const g3 = "징역 3년";
const g5 = "징역 5년";
const g10 = "징역 10년";

btn1.addEventListener('click', move1);
btn2.addEventListener('click', move2);
btn0.addEventListener('click', move0);

function move1()
{
    contant.style.transform = 'translateY(-420px)';
    btn1.setAttribute("id","btnColor1-2");
    btn2.setAttribute("id","btnColor2");
    y1.innerText=g5;
    y2.innerText=g5;
    y3.innerText=g10;
    y4.innerText=g0;
    
}

function move2()
{
    contant.style.transform = 'translateY(-420px)';
    btn1.setAttribute("id","btnColor1");
    btn2.setAttribute("id","btnColor2-2");
    y1.innerText=g0;
    y2.innerText=g10;
    y3.innerText=g3;
    y4.innerText=g3;
}


function move0()
{
    contant.style.transform = 'translateY(0px)';
    btn1.setAttribute('id',"btnColor1");
    btn2.setAttribute("id","btnColor2");
}
