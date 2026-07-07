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

// Calculadora de consumo da iluminação LED

const botaoCalcular = document.getElementById("calcular");


botaoCalcular.addEventListener("click", function(){


    // Recebe os valores digitados

    let potencia = Number(
        document.getElementById("potencia").value
    );


    let horas = Number(
        document.getElementById("horas").value
    );


    let resultado = document.getElementById("resultado");



    // Potências de LED aceitas no sistema

    const potenciasPermitidas = [
        20,
        30,
        40,
        50,
        100,
        150,
        200
    ];



    // Verifica se a potência existe na lista

    if(!potenciasPermitidas.includes(potencia)){


        resultado.textContent =
        "Escolha uma potência LED disponível: 20W, 30W, 40W, 50W, 100W, 150W ou 200W.";


        return;

    }



    // Verifica se as horas estão corretas

    if(horas <= 0 || horas > 24){


        resultado.textContent =
        "A iluminação deve funcionar entre 1 e 24 horas por dia.";


        return;

    }



    // Cálculo do consumo mensal

    let consumo =
    (potencia / 1000) * horas * 30;



    // Mostra resultado

    resultado.textContent =

    "💡 Uma lâmpada LED de "
    + potencia
    + "W ligada "
    + horas
    + " horas por dia consumirá aproximadamente "
    + consumo.toFixed(2)
    + " kWh por mês.";

});