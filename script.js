const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

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
  {
    enunciado: "O que você considera mais importante em ações coletivas?",
    alternativas: [
      {
        texto: "Ajudar quem mais precisa.",
        afirmacao:
          "Você valoriza o impacto direto que as ações coletivas têm na vida de pessoas em situação de vulnerabilidade."
      },
      {
        texto: "Criar união entre os membros da comunidade.",
        afirmacao:
          "Você acredita que as ações coletivas têm o poder de unir as pessoas e criar redes de apoio."
      }
    ]
  },
  {
    enunciado: "Como você costuma contribuir para o bem-estar social?",
    alternativas: [
      {
        texto: "Com doações (alimentos, roupas, dinheiro).",
        afirmacao:
          "Sua forma de ajudar está ligada a gestos práticos e solidários que fazem diferença na vida de quem precisa."
      },
      {
        texto: "Com o seu tempo e presença (voluntariado, visitas, apoio emocional).",
        afirmacao:
          "Você acredita que estar presente e oferecer apoio emocional é tão importante quanto doações materiais."
      }
    ]
  },
  {
    enunciado: "Qual seu sentimento ao ver uma comunidade se mobilizando por uma causa?",
    alternativas: [
      {
        texto: "Inspiração.",
        afirmacao:
          "Você se sente inspirado ao ver pessoas se unindo por algo maior, acreditando na força da coletividade."
      },
      {
        texto: "Esperança.",
        afirmacao:
          "Você sente que, quando a comunidade se une, há esperança de um futuro mais justo e solidário."
      }
    ]
  },
  {
    enunciado: "Você acredita que pequenas atitudes coletivas podem gerar grandes mudanças sociais?",
    alternativas: [
      {
        texto: "Sim, com certeza.",
        afirmacao:
          "Você acredita que a transformação social começa com pequenas atitudes que, somadas, geram grandes impactos."
      },
      {
        texto: "Depende do engajamento de todos.",
        afirmacao:
          "Você entende que as mudanças sociais só acontecem de verdade quando há participação ativa da maioria."
      }
    ]
  }
];
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
