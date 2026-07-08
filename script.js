// tamanho padrão fonte
let tamanho = 16;

// aumentar tamanho fonte 
document.getElementById("maior").onclick = function () {
    tamanho += 2;
    document.body.style.fontSize = tamanho + "px";
};

// diminuir tamanho fonte
document.getElementById("menor").onclick = function () {
    tamanho -= 2;
    document.body.style.fontSize = tamanho + "px";
};

// curiosidades de cultivo indoor
const lista = [
    "👩🏻‍💻 Tecnologia da NASA: a iluminação e irrigação indoor foram aprimoradas para alimentar astronautas.",
    "💧 Sistemas indoor podem economizar até 95% de água.",
    "☀️ LEDs azuis favorecem folhas e LEDs vermelhos estimulam flores.",
    "⚡ Em ambiente controlado, algumas plantas crescem até duas vezes mais rápido.",
    "🌦️ É possível produzir alimentos durante todo o ano."
];

// sortear e exibir curiosidade aleatória
document.getElementById("curiosidade").onclick = function () {

    const numero = Math.floor(Math.random() * lista.length);

    document.getElementById("texto").innerHTML = lista[numero];

};

// processar o formulário e exibir a saudação personalizada com o nome
document.getElementById("form").onsubmit = function (event) {

    event.preventDefault();

    const nome = document.getElementById("nome").value;

    document.getElementById("resultado").innerHTML =
        `Olá, ${nome}! Seja bem-vindo(a)`;

};