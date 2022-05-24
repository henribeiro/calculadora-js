const adicao = "+";
const subtracao = "-";
const multiplicacao = "*";
const divisao = "/";
const um = "1";
const dois = "2";
const tres = "3";
const quatro = "4";
const cinco = "5";
const seis = "6";
const sete = "7";
const oito = "8";
const nove = "9";
const zero = "0";
const ponto = ".";
function apagartudo(){
    document.getElementById('resultado').innerHTML = "";
}
function inserir(numero) {
    var num = document.getElementById('resultado').innerHTML;
        document.getElementById('resultado').innerHTML = num + numero;
}
function backspace(){
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
}
function operacao(operador) {
    var resultado = document.getElementById('resultado').innerHTML;
    //verifica se o caractere eh um numero ou ponto
    if((resultado.slice(-1) == um) || (resultado.slice(-1) == dois)||(resultado.slice(-1) == tres) || (resultado.slice(-1) == quatro)|| (resultado.slice(-1) == cinco)|| 
       (resultado.slice(-1) == seis)|| (resultado.slice(-1) == sete)|| (resultado.slice(-1) == oito)|| (resultado.slice(-1) == nove) || (resultado.slice(-1) == zero) || 
       (resultado.slice(-1) == ponto)) { //gambiarraaaaaa kkk
        var num = document.getElementById('resultado').innerHTML;
        document.getElementById('resultado').innerHTML = num + operador; //insere operador
    }   
    else{
        var resultado = document.getElementById('resultado').innerHTML;
        document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1) + operador; //apaga o ultimo sinal de operação
    }

}
function calcular(){
    if (resultado.textContent != ''){
        document.getElementById('resultado').innerHTML = eval(resultado.innerHTML);
    }
    else{
         document.getElementById('resultado').innerHTML = "Digite uma operação"
        }
}
