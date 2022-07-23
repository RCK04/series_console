const colecao_series_programacao = [
    { nome: "One Piece", horario: "21h",     sinopse: "One Piece segue a história de um grupo de piratas liderado por Monkey D. Luffy. O garoto, que possui um corpo elástico, pretende se tornar o Rei dos Piratas e para isso deve encontrar o One pPiece, tesouro misterioso capaz de torná-lo imbatível, segundo as lendas."},

    { nome: "Dragon Ball Z", horario: "22h",     sinopse: "Criada por Akira Toryiama, a franquia conta a história de Son Goku, guerreiro que descobre ser parte de um legado de poderosos conquistadores alienígenas - e passa a defender seu planeta adotivo, a Terra, de outros seres igualmente superfortes e capazes de feitos descomunais."},

    { nome: "Kimetsu no Yaiba", horario: "20h",     sinopse: "O anime apresenta Tanjiro, um menino que trabalha em uma mina de carvão para ajudar sua família a se sustentar. Entretanto, um dia após voltar do serviço, ele encontra sua família brutalmente assassinada, o que desperta em Tanjiro uma enorme sede de vingança." },

    { nome: "Prison Break", horario: "23h",     sinopse: "Um homem cria um plano para tirar o irmão sentenciado à morte por um suposto assassinato do vice-presidente dos EUA"},

    { nome: "Black Mirror", horario: "23h",     sinopse: "Contos de ficção científica que refletem o lado negro da tecnologia, mostrando que nem toda novidade traz só benefícios." },

    { nome: "Pessoa de interesse ", horario: "20h",     sinopse: "Um ex-agente da CIA, dado como morto pelo governo dos EUA, é recrutado por um milionário, para um projeto ultrassecreto."},

    { nome: "Dark", horario: "22h",     sinopse: "O desaparecimento de crianças na cidade alemã de Winden remete a acontecimentos idênticos ocorridos há 33 anos e 66 anos."}
];

const data_atual = new Date();

const dia_semana = data_atual.getDay();

const serie_do_dia = colecao_series_programacao[dia_semana];

const nome_serie = serie_do_dia.nome;
const horario_serie = serie_do_dia.horario;
const sinopse_serie = serie_do_dia.sinopse;

console.log("Hoje é dia de " + nome_serie + " às " + horario_serie);
console.log("A seguir uma visão geral da série: " + sinopse_serie);