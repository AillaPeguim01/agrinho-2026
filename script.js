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

    "Tecnologia da NASA: A iluminação e irrigação indoor foram aprimoradas para alimentar astronautas no espaço.",

    "95% menos água: Sistemas fechados reciclam a água, gastando muito menos que a agricultura comum.",

    "Luz sob medida: LEDs azuis aceleram o crescimento das folhas e os vermelhos estimulam as flores.",

    "Super velocidade: Com clima e luz controlados, as plantas crescem até duas vezes mais rápido.",

    "Sem estações: É possível colher qualquer vegetal o ano todo, ignorando o inverno ou o verão."

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