function mostrarMensagem() {
    alert(
        "O cultivo indoor é uma alternativa moderna que une tecnologia, produção de alimentos e preservação ambiental."
    );
}

let contador = 0;
const numero = document.getElementById("numero");

const animacao = setInterval(() => {
    contador += 25;

    numero.textContent = contador;

    if (contador >= 5000) {
        clearInterval(animacao);
    }
}, 20);