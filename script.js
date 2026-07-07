// ======================================
// AGRINHO 2026 - SCRIPT.JS
// ======================================

// ---------- MODO ESCURO ----------

// Seleciona o botão
const botaoModo = document.getElementById("modoEscuro");

// Quando clicar...
botaoModo.addEventListener("click", function () {

    // Adiciona ou remove a classe dark
    document.body.classList.toggle("dark");

    // Altera o texto do botão
    if (document.body.classList.contains("dark")) {

        botaoModo.textContent = "☀️ Modo Claro";

    } else {

        botaoModo.textContent = "🌙 Modo Escuro";

    }

});

// ---------- CURIOSIDADES ----------

// Lista de curiosidades
const curiosidades = [

    "💧 O cultivo indoor pode economizar até 90% de água em comparação ao cultivo tradicional.",

    "🌱 Muitas hortaliças crescem mais rápido em ambientes controlados.",

    "💡 As lâmpadas LED ajudam no crescimento das plantas gastando pouca energia.",

    "🥬 O cultivo indoor permite produzir alimentos durante todo o ano.",

    "🌎 Produzir perto das cidades reduz a emissão de gases causada pelo transporte."

];

// Variável que guarda a posição atual
let indice = 0;

// Botão
const btnCuriosidade = document.getElementById("btnCuriosidade");

// Texto
const textoCuriosidade = document.getElementById("curiosidade");

// Evento
btnCuriosidade.addEventListener("click", function () {

    textoCuriosidade.textContent = curiosidades[indice];

    indice++;

    if (indice >= curiosidades.length) {

        indice = 0;

    }

});

// ---------- CALCULADORA ----------

const botaoCalcular = document.getElementById("calcular");

botaoCalcular.addEventListener("click", function () {

    // Valor digitado
    let plantas = Number(document.getElementById("plantas").value);

    const resultado = document.getElementById("resultado");

    if (plantas <= 0 || isNaN(plantas)) {

        resultado.textContent = "Digite uma quantidade válida.";

        return;

    }

    // Cálculo simples
    let economia = plantas * 6;

    resultado.textContent =
        "🌿 Com aproximadamente " +
        plantas +
        " plantas, você poderá economizar cerca de " +
        economia +
        " litros de água por mês.";

});

// ---------- FORMULÁRIO ----------

const botaoEnviar = document.getElementById("enviar");

botaoEnviar.addEventListener("click", function () {

    let nome = document.getElementById("nome").value;

    let resposta = document.getElementById("resposta").value;

    let mensagem = document.getElementById("mensagem");

    if (nome === "") {

        mensagem.textContent = "Digite seu nome.";

        return;

    }

    mensagem.innerHTML =
        "<strong>Olá, " +
        nome +
        "!</strong><br><br>" +
        "Obrigado por visitar nosso projeto do Agrinho 2026.<br>" +
        "Sua resposta foi: <strong>" +
        resposta +
        "</strong>.";

});

// ---------- ROLAGEM SUAVE ----------

// Seleciona todos os links do menu
const links = document.querySelectorAll("nav a");

// Para cada link
links.forEach(function (link) {

    link.addEventListener("click", function (e) {

        e.preventDefault();

        const destino = document.querySelector(this.getAttribute("href"));

        destino.scrollIntoView({

            behavior: "smooth"

        });

    });

});