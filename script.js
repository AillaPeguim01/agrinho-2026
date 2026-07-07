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

// Calculadora de consumo da iluminação LED

const botaoCalcular = document.getElementById("calcular");


botaoCalcular.addEventListener("click", function(){


    // Recebe os valores digitados pelo usuário

    let potencia = Number(
        document.getElementById("potencia").value
    );


    let horas = Number(
        document.getElementById("horas").value
    );


    let resultado = document.getElementById("resultado");



    // Verifica se os valores são válidos

    if(potencia <= 0 || horas <= 0){

        resultado.textContent =
        "Digite valores válidos.";

        return;

    }



    // Calcula o consumo mensal em kWh

    let consumo = (potencia / 1000) * horas * 30;




    resultado.textContent =

    "💡 O sistema de iluminação consumirá aproximadamente "
    + consumo.toFixed(2)
    + " kWh por mês.";

});