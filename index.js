let heroi = {
    nome: "Boni Souza",
    vitorias: 101,
    derrotas: 10,
    nivel: "Desconhecido"
};

function calcularRanqueada(vitorias, derrotas){
    return vitorias - derrotas;
}

function calcularNivel(nome = "Desconhecido", vitorias = 0, derrotas = 0){
    let partida = calcularRanqueada(vitorias, derrotas);
    let resultado = 
    (partida <= 10) ? heroi.nivel = "Ferro" :
    (partida <= 20) ? heroi.nivel = "Bronze" :
    (partida <= 50) ? heroi.nivel = "Prata" :
    (partida <= 80) ? heroi.nivel = "Ouro" :
    (partida <= 90) ? heroi.nivel = "Diamante" :
    (partida <= 100) ? "Lendário" :
    "Imortal";

    return `O Herói ${nome}, tem de saldo de ${partida} está no nível de ${resultado}`;
}

let resultadoHeroi = calcularNivel(heroi.nome, heroi.vitorias, heroi.derrotas);

console.log(resultadoHeroi);