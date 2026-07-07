// Variável para armazenar o tamanho padrão da fonte
let tamanho = 16;

// Função para aumentar o tamanho da fonte da página
document.getElementById("maior").onclick = function () {
    tamanho += 2;
    document.body.style.fontSize = tamanho + "px";
};

// Função para diminuir o tamanho da fonte da página
document.getElementById("menor").onclick = function () {
    tamanho -= 2;
    document.body.style.fontSize = tamanho + "px";
};

// Lista de dados contendo as curiosidades de cultivo indoor
const lista = [
    "👩🏻‍💻 Tecnologia da NASA: a iluminação e irrigação indoor foram aprimoradas para alimentar astronautas.",
    "💧 Sistemas indoor podem economizar até 95% de água.",
    "☀️ LEDs azuis favorecem folhas e LEDs vermelhos estimulam flores.",
    "⚡ Em ambiente controlado, algumas plantas crescem até duas vezes mais rápido.",
    "🌦️ É possível produzir alimentos durante todo o ano."
];

// Função para sortear e exibir uma curiosidade aleatória na tela
document.getElementById("curiosidade").onclick = function () {

    const numero = Math.floor(Math.random() * lista.length);

    document.getElementById("texto").innerHTML = lista[numero];

};

// Função para processar o formulário e exibir a saudação personalizada com o nome
document.getElementById("form").onsubmit = function (event) {

    event.preventDefault();

    const nome = document.getElementById("nome").value;

    document.getElementById("resultado").innerHTML =
        `Olá, ${nome}! Seja bem-vindo(a)`;

};