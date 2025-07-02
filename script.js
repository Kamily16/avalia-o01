const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
  {
    enunciado: "Você costuma considerar a origem dos produtos antes de comprá-los?",
    alternativas: [
      {
        texto: "Sim, prefiro comprar de marcas transparentes e éticas.",
        afirmacao:
          "Você valoriza a transparência e a ética por trás da produção dos produtos que consome."
      },
      {
        texto: "Não, priorizo apenas o preço e a praticidade.",
        afirmacao:
          "Você tende a priorizar o custo-benefício e a conveniência na hora de comprar."
      }
    ]
  },
  {
    enunciado: "Você faz separação de lixo em casa?",
    alternativas: [
      {
        texto: "Sim, separo orgânicos de recicláveis e resíduos especiais.",
        afirmacao:
          "Você contribui ativamente para a redução do impacto ambiental por meio da correta gestão do lixo."
      },
      {
        texto: "Não, não tenho esse hábito ou não tenho acesso à coleta seletiva.",
        afirmacao:
          "Você ainda não tem o hábito ou condições adequadas para separar o lixo de forma consciente."
      }
    ]
  },
  {
    enunciado: "Você compra roupas com frequência de marcas fast fashion?",
    alternativas: [
      {
        texto:
          "Não, evito marcas que exploram mão de obra ou prejudicam o meio ambiente.",
        afirmacao:
          "Você busca consumir moda de forma mais responsável e consciente."
      },
      {
        texto:
          "Sim, compro com frequência por causa do baixo custo e da variedade.",
        afirmacao:
          "Você valoriza a acessibilidade e a diversidade de opções oferecidas pela indústria fast fashion."
      }
    ]
  },
  {
    enunciado:
      "Você já participou ou incentivou alguma campanha ambiental ou social?",
    alternativas: [
      {
        texto:
          "Sim, participei de mutirões de limpeza, coletas solidárias ou movimentos sociais.",
        afirmacao:
          "Você se envolve diretamente em ações que promovem mudanças positivas na sociedade e no meio ambiente."
      },
      {
        texto:
          "Não, nunca participei ou me interessei por essas iniciativas.",
        afirmacao:
          "Você ainda não teve contato ou não sentiu motivação para se engajar em causas sociais ou ambientais."
      }
    ]
  },
  {
    enunciado:
      "Você acredita que pequenos gestos individuais podem impactar o planeta?",
    alternativas: [
      {
        texto:
          "Sim, acredito que cada ação conta para um mundo melhor.",
        afirmacao:
          "Você acredita no poder transformador das ações individuais e cotidianas."
      },
      {
        texto:
          "Não, acho que só mudanças grandes e políticas públicas têm impacto real.",
        afirmacao:
          "Você entende que somente ações estruturais e políticas públicas podem gerar transformações significativas."
      }
    ]
  }
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
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
