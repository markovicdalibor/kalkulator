'use strict'
let button = document.querySelectorAll('.brojevi,.fuje');
let plus = document.querySelector('#plus');
let zaglavlje = document.querySelector('#zaglavlje');
let jednako = document.querySelector('#jednako');
let provera = [];

document.addEventListener('keydown',function (e) {
    if (e.key=='Enter') {
        rezultat();
    }
})

for (let i = 0; i < button.length; i++) {
    button[i].addEventListener('click', logic);
};

function logic() {
    zaglavlje.focus();
    if (this.innerHTML=='=') {
        rezultat();
    }
    else{
        zaglavlje.value+=this.innerHTML;
     }
    if(this.innerHTML=='C'){
clean();
    }
}
function rezultat(){
    let resenje = zaglavlje.value;
    zaglavlje.value=(eval(resenje));
}
function clean(){
    zaglavlje.value='';
    zaglavlje.focus();
}