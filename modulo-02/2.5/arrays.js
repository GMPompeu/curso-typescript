"use strict";
let frutas = ['a', 'l', 'm', 'b'];
console.log(frutas[2]);
let frutas2 = ['a', 'l', 'm', 'b'];
console.log(frutas2[2]);
//push adiciona um novo valor sempre no final do array
let idiomas = ['pt', 'es', 'en', 'jp'];
console.log(idiomas);
idiomas.push('Mandarim', 'italiano');
console.log(idiomas);
//Saber tamanho do array = length
let idiomas1 = ['pt', 'es', 'en', 'jp'];
console.log(idiomas1.length);
let listaNumeros = [1, 2, 3, 4, 5];
listaNumeros = [...listaNumeros, 6, 7, 8, 9];
console.log(listaNumeros);
let linguagens = ['JavaScript', 'Python', 'php', 'c#'];
function funcaoLinguagens(linguagens) {
    for (let i = 0; i < linguagens.length; i++) {
        console.log(linguagens[i]);
    }
}
funcaoLinguagens(linguagens);
