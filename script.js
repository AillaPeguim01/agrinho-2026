// Guarda elementos importantes da página
const botaoEscuro = document.getElementById("modoEscuro");
const aumentarFonte = document.getElementById("aumentarFonte");
const diminuirFonte = document.getElementById("diminuirFonte");

const botaoCuriosidade = document.getElementById("mostrarCuriosidade");
const textoCuriosidade = document.getElementById("curiosidadeTexto");

const formulario = document.getElementById("formulario");
const mensagem = document.getElementById("mensagem");


// Alterna o modo escuro usando manipulação do DOM
botaoEscuro.addEventListener("click", function(){

    document.body.classList.toggle("dark");

});



// Alteração do tamanho da fonte
let tamanhoFonte = 16;


aumentarFonte.addEventListener("click", function(){

    tamanhoFonte += 2;

    document.body.style.fontSize = tamanhoFonte + "px";

});



diminuirFonte.addEventListener("click", function(){

    tamanhoFonte -= 2;

    document.body.style.fontSize = tamanhoFonte + "px";

});




// Lista de curiosidades
const curiosidades = [

    "Alguns cultivos indoor utilizam luzes de LED para economizar energia.",

    "Sistemas indoor permitem plantar durante todo o ano.",

    "A tecnologia ajuda agricultores em regiões com pouco espaço."

];


botaoCuriosidade.addEventListener("click", function(){

    let numero = Math.floor(
        Math.random() * curiosidades.length
    );


    textoCuriosidade.textContent = curiosidades[numero];

});




// Formulário com mensagem personalizada
formulario.addEventListener("submit", function(event){

    event.preventDefault();


    let nomeUsuario = document.getElementById("nome").value;


    mensagem.textContent =
    "Olá, " + nomeUsuario +
    "! Obrigado por conhecer o cultivo indoor.";

});