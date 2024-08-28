

window.onload = function() {
    imprimeNumerosImpares()
}

//ex01
function executar(){
    let elementoPrimeiroNumero = document.getElementById("primeiroNumero");
    let elementoSegundoNumero = document.getElementById("segundoNumero");
    let elementoTerceiroNumero = document.getElementById("terceiroNumero");
    let elementoResultado = document.getElementById("resultado");

    let parametrosCalculo = {
        primeiroNumero: Number(elementoPrimeiroNumero.value),
        segundoNumero: Number(elementoSegundoNumero.value),
        terceiroNumero: Number(elementoTerceiroNumero.value),
        mediaCalculada: () => {return calculaMedia(parametrosCalculo)},
        resultado: () => {return configuraResultado(parametrosCalculo.mediaCalculada(), elementoResultado)}
    }
    let texto = `Resultado : ${parametrosCalculo.resultado()} `
}

function calculaMedia(obj){
    return (obj.primeiroNumero + obj.segundoNumero + obj.terceiroNumero) / 3
}

function configuraResultado(media, res){
    if(media > 5.9){
        res.style.color = "green"
        res.innerHTML = "Aprovado"
    }else{
        res.style.color = "red"
        res.innerHTML = "Reprovado"
    }
}

//ex02
function imprimeNumerosImpares(){
    let elementoResultado2 = document.getElementById("resultado2")
    let textoResultado = "";

    for (let i = 1; i < 100; i++) {
        if(i%2 != 0){
            textoResultado += `${i}, `
        }
    }
    if(textoResultado.includes(", ")){
        textoResultado = textoResultado.substring(0, textoResultado.length -2)
    }
    elementoResultado2.innerHTML = `${textoResultado}`
}

//ex03
function exibeMenorNumero(){
    let elementoUm = document.getElementById("num1")
    let elementoDois = document.getElementById("num2")
    let elementoResultado3 = document.getElementById("resultado3")

    let num1 = Number(elementoUm.value)
    let num2 = Number(elementoDois.value)
    let resultado = ""
    
    if(num1 < num2){
        resultado = `${num1}`
    } else if(num1 > num2){
        resultado = `${num2}`
    } else {
        resultado = `Os Números são iguais`
    }
    elementoResultado3.innerHTML = resultado
}

//ex04
function exibeMaiorNumero(){
    let elementoUm = document.getElementById("valor1")
    let elementoDois = document.getElementById("valor2")
    let elementoResultado3 = document.getElementById("resultado4")

    let num1 = Number(elementoUm.value)
    let num2 = Number(elementoDois.value)
    let resultado = ""
    
    if(num1 < num2){
        resultado = `${num2}`
    } else if(num1 > num2){
        resultado = `${num1}`
    } else {
        resultado = `Os Números são iguais`
    }
    elementoResultado3.innerHTML = resultado
}

// extra
var numerosConcatenados = ["3", "5", "7", "9", "11"]
function inverteArray(meuArray) {
    return meuArray.reverse()
}

let arrayInvertido = inverteArray(numerosConcatenados)
console.log(arrayInvertido)

// extra
function encontrarNumero(x){
    let numeros = ["2", "7", "8", "3"]
    let retorno = numeros.find((element) => element > x)
    if(retorno == undefined){
        return `${x} Não Existe no array`
    }else{
        return `${x} Existe no array`
    }
}

console.log(encontrarNumero(2))
console.log(encontrarNumero(9))