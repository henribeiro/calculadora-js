function inserir(numero) {
    var num = document.getElementById('resultado').innerHTML;
        document.getElementById('resultado').innerHTML = num + numero;
}
function apagartudo(){
    document.getElementById('resultado').innerHTML = "";
}
function backspace(){
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
}
function calcular(){
    if (resultado.textContent != 'Erro'){
        document.getElementById('resultado').innerHTML = eval(resultado.innerHTML);
    }
    else{
         document.getElementById('resultado').innerHTML = "Digite uma operação"
        }
}
