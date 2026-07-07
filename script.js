
// Tamanho da fonte

let tamanho = 16;

document.getElementById("maior").onclick = function () {
    tamanho += 2;
    document.body.style.fontSize = tamanho + "px";
};

document.getElementById("menor").onclick = function () {
    tamanho -= 2;
    document.body.style.fontSize = tamanho + "px";
};

// Curiosidades

const lista = [
    "👩🏻‍💻 Tecnologia da NASA: a iluminação e irrigação indoor foram aprimoradas para alimentar astronautas.",
    "💧 Sistemas indoor podem economizar até 95% de água.",
    "☀️ LEDs azuis favorecem folhas e LEDs vermelhos estimulam flores.",
    "⚡ Em ambiente controlado, algumas plantas crescem até duas vezes mais rápido.",
    "🌦️ É possível produzir alimentos durante todo o ano."
];

document.getElementById("curiosidade").onclick = function () {

    const numero = Math.floor(Math.random() * lista.length);

    document.getElementById("texto").innerHTML = lista[numero];

};

// Formulário

document.getElementById("form").onsubmit = function (event) {

    event.preventDefault();

    const nome = document.getElementById("nome").value;

    document.getElementById("resultado").innerHTML =
        `Olá, ${nome}! Obrigado por visitar o site.`;

};