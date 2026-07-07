// Lista de curiosidades sobre cultivo indoor

const curiosidades = [

    "💧 O cultivo indoor pode economizar muita água comparado ao cultivo tradicional.",

    "💡 As lâmpadas LED ajudam as plantas a crescer usando menos energia.",

    "🌱 O ambiente controlado diminui o aparecimento de pragas.",

    "🌎 O cultivo próximo das cidades reduz o transporte e a poluição."

];


// Guarda a posição da curiosidade atual

let indice = 0;


// Seleciona os elementos do HTML

const botaoCuriosidade = document.getElementById("botaoCuriosidade");

const textoCuriosidade = document.getElementById("textoCuriosidade");



// Quando clicar no botão, muda a curiosidade

botaoCuriosidade.addEventListener("click", function(){


    textoCuriosidade.textContent = curiosidades[indice];


    indice++;


    if(indice >= curiosidades.length){

        indice = 0;

    }


});




// Calculadora de economia de água


const botaoCalcular = document.getElementById("calcular");


botaoCalcular.addEventListener("click", function(){


    // Pega o valor digitado pelo usuário

    let quantidadePlantas = Number(
        document.getElementById("plantas").value
    );


    let resultado = document.getElementById("resultado");



    // Verifica se o número é válido

    if(quantidadePlantas <= 0 || isNaN(quantidadePlantas)){


        resultado.textContent = 
        "Digite uma quantidade válida de plantas.";


        return;

    }



    // Cálculo simples

    let economia = quantidadePlantas * 6;



    // Mostra o resultado na tela

    resultado.textContent =

    "🌱 Com " + quantidadePlantas +
    " plantas, a economia estimada é de aproximadamente "
    + economia +
    " litros de água por mês.";

});