function ligar(){
    if(!quebrada()){
    lamp.src = './img/ligada.jpg';
    }
}

function desligar(){
    if(!quebrada()){
    lamp.src = './img/desligada.jpg';
    }
}

function clique(){

    lamp.src = './img/quebrada.jpg';
}

function quebrada(){

    return lamp.src.indexOf('quebrada') > -1;
}

lamp.addEventListener('mouseover', ligar)
lamp.addEventListener('mouseleave', desligar)
lamp.addEventListener('dblclick',clique)