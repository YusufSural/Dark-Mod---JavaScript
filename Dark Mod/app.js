const buton = document.getElementById('buton1');
const h1 = document.getElementById('tag');
const buton2 = document.getElementById('buton2');
let p1 = document.querySelector('p');

buton.addEventListener('click', dark);
buton2.addEventListener('click', white);
buton.style.backgroundColor = 'black';
buton.style.color = 'white';
buton.style.borderRadius = '5px';
buton2.style.borderRadius = '5px';

function dark(){

    document.body.style.backgroundColor = 'black';
    buton.style.backgroundColor = 'black';
    buton.style.color = 'white';
    p1.style.color = 'white';
    p1.style.borderBottom = '1px solid';
    p1.style.padding = '0px';
    buton.style.border = '1px solid gray';
    
}
function white(){
    
    document.body.style.backgroundColor = '';
    buton2.style.color = 'black';
    p1.style.color = 'black';
    p1.style.border = 'none';
    p1.style.padding = '0px';
}