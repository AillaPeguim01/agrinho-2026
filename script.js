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

    Aqui estão 10 curiosidades sobre o cultivo indoor, com frases mais detalhadas para você entender melhor os benefícios e o funcionamento desse sistema:

Economia extrema de água: O cultivo indoor que utiliza sistemas hidropônicos ou aeropônicos pode economizar até 90% de água em comparação à agricultura tradicional, pois a água é constantemente reaproveitada e reciclada dentro do sistema em vez de evaporar ou sumir na terra.,
Crescimento acelerado: Muitas hortaliças, como alfaces e temperos, crescem até 50% mais rápido em ambientes controlados porque recebem a quantidade exata de luz, água e nutrientes de que precisam, sem sofrer com o estresse do clima.,
Eficiência energética com LEDs: As lâmpadas de LED modernas ajudam no crescimento saudável das plantas gastando pouca energia elétrica, já que emitem apenas as cores específicas de luz que os vegetais realmente usam para fazer fotossíntese.,
Produção sem pausas no ano: O cultivo indoor permite produzir alimentos frescos durante todo o ano, permitindo colher morangos no inverno ou folhas verdes no verão extremo, sem depender das estações do ano.,
Sustentabilidade urbana: Produzir alimentos em fazendas verticais perto ou dentro das grandes cidades reduz drasticamente a emissão de gases poluentes na atmosfera, já que diminui a necessidade de caminhões transportarem a comida por longas distâncias.,
Alimentos livres de agrotóxicos: Como as plantas ficam isoladas em ambientes fechados e protegidos, o risco de surgimento de pragas e insetos é muito menor, eliminando quase totalmente a necessidade de usar pesticidas ou defensivos químicos.,
Aproveitamento máximo de espaço: Através do cultivo vertical (onde as plantas são empilhadas em prateleiras), é possível produzir até 10 vezes mais alimentos por metro quadrado do que em uma plantação convencional no campo.,
Controle total do sabor e nutrientes: Cientistas e produtores conseguem ajustar a "receita de luz" e a quantidade de minerais na água para fazer com que as plantas fiquem mais saborosas, crocantes ou até mesmo mais nutritivas.,
Menos desperdício de comida:Como o ambiente é monitorado por computadores e sensores, as plantas crescem com um padrão de qualidade muito alto, o que diminui o desperdício de alimentos que normalmente seriam descartados por imperfeições.,
Independência de solo fértil: Esse método permite cultivar vegetais em locais onde a agricultura tradicional seria impossível, como no meio de desertos, em regiões congeladas ou até mesmo dentro de galpões abandonados em centros urbanos.,
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