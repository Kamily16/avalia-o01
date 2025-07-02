const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

// Seleciona a tela inicial e o botão
const telaInicial = document.querySelector(".tela-inicial");
const botaoIniciar = document.getElementById("botao-iniciar");

const perguntas = [
  {
    enunciado: "Você costuma participar de ações sociais ou comunitárias?",
    alternativas: [
      {
        texto: "Sim, sempre que posso.",
        afirmacao:
          "Você acredita que participar de ações sociais fortalece a comunidade e promove empatia entre as pessoas."
      },
      {
        texto: "Não, raramente participo.",
        afirmacao:
          "Você reconhece a importância das ações sociais, mas ainda busca maneiras de se envolver mais ativamente."
      }
    ]
  },
  // ... (as outras perguntas continuam iguais)
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Seu perfil social:";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

// Esconde a tela inicial e começa o questionário
botaoIniciar.addEventListener("click", () => {
    telaInicial.style.display = "none";
    mostraPergunta();
});