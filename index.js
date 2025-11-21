// Armanzenar o Nome do Herói e Experiencia (XP)
// Estrutura de decisão pra apresentar uma mensagem
// <= 1000 Ferro; <= 2000 Bronze <= 5000 Prata 
// <= 7000 Ouro; 8000 <= Platina 
// <= 9000 Ascendente; <= 10000 Imortal else radiante

let nomeHeroi = "José Roberto"
let xp = 10001
let rank

if (xp <= 1000) {
    rank = "Ferro"
} 
else if (xp <= 2000) {
    rank = "Bronze"
}
else if (xp <= 5000) {
    rank = "Prata"
}
else if (xp <= 7000) {
    rank = "Ouro"
}
else if (xp <= 8000) {
    rank = "Platina"
}
else if (xp <= 9000) {
    rank = "Ascendente"
}
else if (xp <= 10000) {
    rank = "Imortal"
}
else {
    rank = "Radiante"
}
console.log("O Herói " + nomeHeroi + " está no nível de " + rank)