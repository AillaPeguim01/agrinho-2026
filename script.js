// DOCUMENTO JAVASCRIPT - PROJETO AGRINHO

// 1. Variáveis de estado e armazenamento de informações
let cliquesUtil = 0;
const textosAbas = {
    beneficios: "<strong>Benefícios:</strong> Permite cultivar alimentos frescos o ano todo, economiza até 95% de água em sistemas hidropônicos, elimina a necessidade de agrotóxicos pesados e reduz a pegada de carbono do transporte.",
    maleficios: "<strong>Desafios:</strong> O custo inicial com lâmpadas LED e estufas pode ser alto, além do consumo constante de energia elétrica para simular o sol, exigindo planejamento financeiro."
};

// 2. Seletores do DOM
const btnTema = document.getElementById('btn-tema');
const btnSaudar = document.getElementById('btn-saudar');
const inputNome = document.getElementById('nome-usuario');
const txtBoasVindas = document.getElementById('boas-vindas');
const abaBeneficios = document.getElementById('aba-beneficios');
const abaMaleficios = document.getElementById('aba-maleficios');
const conteudoAba = document.getElementById('conteudo-aba');
const btnContador = document.getElementById('btn-contador');
const numContador = document.getElementById('num-contador');

// 3. Função para Alternar Modo Claro / Escuro (Melhoria de Usabilidade)
btnTema.addEventListener('click', () => {
    document.body.classList.toggle('modo-escuro');
});

// 4. Função para Personalizar as Boas-Vindas usando variáveis
btnSaudar.addEventListener('click', () => {
    const nome = inputNome.value.trim();
    if (nome !== "") {
        txtBoasVindas.innerText = `Olá, ${nome}! Seja bem-vindo à evolução da agricultura!`;
        inputNome.value = ""; // Limpa o campo
    } else {
        alert("Por favor, digite um nome válido!");
    }
});

// 5. Função para Controlar as Abas de Conteúdo Dinâmico
function alternarAba(abaSelecionada) {
    if (abaSelecionada === 'beneficios') {
        abaBeneficios.classList.add('ativo');
        abaMaleficios.classList.remove('ativo');
        conteudoAba.innerHTML = textosAbas.beneficios;
    } else {
        abaMaleficios.classList.add('ativo');
        abaBeneficios.classList.remove('ativo');
        conteudoAba.innerHTML = textosAbas.maleficios;
    }
}

abaBeneficios.addEventListener('click', () => alternarAba('beneficios'));
abaMaleficios.addEventListener('click', () => alternarAba('maleficios'));

// 6. Função do Contador de Utilidade (Interação funcional)
btnContador.addEventListener('click', () => {
    cliquesUtil++;
    numContador.innerText = cliquesUtil;
});

// Inicializa o conteúdo da primeira aba ao carregar a página
alternarAba('beneficios');