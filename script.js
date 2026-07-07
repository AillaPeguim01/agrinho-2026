// Lista de curiosidades sobre cultivo indoor

const curiosidades = [

"🌱 Algumas fazendas indoor utilizam inteligência artificial para monitorar o crescimento das plantas.",

"🏢 Existem fazendas verticais que cultivam alimentos em prédios e espaços urbanos pequenos.",

"🥬 Alfaces, ervas e temperos estão entre as plantas mais cultivadas em sistemas indoor.",

"🚀 A tecnologia de cultivo indoor também é estudada para produzir alimentos em missões espaciais.",

"🌿 O primeiro conceito de agricultura vertical surgiu para aproveitar melhor os espaços das grandes cidades."

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