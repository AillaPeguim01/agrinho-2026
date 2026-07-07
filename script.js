// Botão de modo escuro
let tema = document.getElementById("tema");


tema.onclick = function(){

    document.body.classList.toggle("escuro");

};



// Alterar tamanho da fonte

let tamanho = 16;


document.getElementById("maior").onclick = function(){

    tamanho = tamanho + 2;

    document.body.style.fontSize = tamanho + "px";

};


document.getElementById("menor").onclick = function(){

    tamanho = tamanho - 2;

    document.body.style.fontSize = tamanho + "px";

};



// Mostrar curiosidade

let curiosidade = document.getElementById("curiosidade");

let texto = document.getElementById("texto");


let lista = [

"Algumas plantas podem crescer usando apenas luz artificial.",

"O cultivo indoor permite plantar em apartamentos.",

"A tecnologia ajuda a economizar água."

];


curiosidade.onclick = function(){

    let numero = Math.floor(Math.random()*lista.length);

    texto.innerHTML = lista[numero];

};



// Formulário

let formulario = document.getElementById("form");


formulario.onsubmit = function(event){

    event.preventDefault();


    let nome = document.getElementById("nome").value;


    document.getElementById("resultado").innerHTML =
    "Olá, " + nome + "! Obrigado por visitar o site.";

};