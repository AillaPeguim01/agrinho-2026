// Captura elementos do HTML

let botaoNome = document.getElementById("botaoNome");
let campoNome = document.getElementById("nome");
let mensagem = document.getElementById("mensagem");


// Função para criar mensagem personalizada

botaoNome.addEventListener("click", function(){

    let nomeUsuario = campoNome.value;


    if(nomeUsuario == ""){

        mensagem.textContent =
        "Digite seu nome para continuar.";

    }

    else{

        mensagem.textContent =
        "Olá, " + nomeUsuario +
        "! Bem-vindo ao mundo do cultivo indoor.";

    }

});



// Modo escuro

let modo = document.getElementById("modoEscuro");


modo.addEventListener("click", function(){

    document.body.classList.toggle("escuro");

});




// Contador de plantas

let botaoContador =
document.getElementById("contador");


let quantidade = 0;


botaoContador.addEventListener("click", function(){

    quantidade++;


    botaoContador.textContent =
    "Plantas cultivadas: " + quantidade;

});