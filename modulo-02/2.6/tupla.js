"use strict";
//Tupla array de dados primitivos fixos.
let pessoa;
pessoa = ['Guilherme Pompeu', 'FullStack', 18];
console.log(pessoa);
let pessoa1;
pessoa1 = ['Guilherme Pompeu', 'FullStack', 18];
console.log(pessoa1[1]);
let pessoa2;
pessoa2 = ['Guilherme Pompeu', 'FullStack', 18];
console.log(pessoa2);
let listafrutas = ['pera', 'maça', 'goiaba', 'melancia', 'mamão'];
console.log(...listafrutas);
let listaFruta2 = [5, true, ...listafrutas];
console.log(listaFruta2);
function listarPessoas(nome, idade) {
    return [...nome, ...idade];
}
let resultado = listarPessoas(['guilherme', 'guilherme'], [34, 55]);
console.log(resultado);
function lerNome(...nome) {
    return [...nome];
}
console.log(lerNome('Guilherme', 'Mascarenhas'));
console.log(lerNome('Guilherme', 'Pompeu', 'Mascarenhas'));
