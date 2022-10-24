const num = document.getElementsByName('num');

const oper = document.getElementsByName('oper');

const result = document.getElementById('result');
//[0]
const reset = document.getElementById('reset');
//[0]
//console.log(reset);
var mostra = document.getElementById('screen');
//var pq el resultat cambia pero els bottons no.
var opActual = '';
var opAnterior = '';
var operacio = undefined;

//si es posa dins del addEventListener tambe executa l'operacio
//a mes ho mostra en la pantalla
//mostra.innerHTML = 'operacio';
//let result = mostra.innerHTML;

//alert(y.innerText); per comprobar que 
//funciona de l'ltre forma si poso alert(result) tmb es mostra
num.forEach(function(x){
    x.addEventListener('click', function(){
        afegeixnum(x.innerText);
    });
});

oper.forEach(function(y){
    y.addEventListener('click', function(){
        selectopera(y.innerText);
    });
});

result.addEventListener('click', function(){
    //console.log('hola igual');
    calcular();
}); 

reset.addEventListener('click', function(){
    //console.log('hola limpia');
    clean();
    actresultat();
});

function calcular(){
    mostra.innerText = eval(opActual);
}

function afegeixnum(num){
    opActual = opActual.toString() + num.toString();//si ho treballem com un num +, amb string concatena
    actresultat();
}

function selectopera(op){
    opActual = opActual.toString() + op.toString();
    actresultat();
}

function clean(){
    var opActual = '';
    var opAnterior = '';
    var operacio = undefined;
    console.log('hola natega2');
}

function actresultat(){
    mostra.innerText = opActual;
    //console.log('ns pq no va');
}

clean();