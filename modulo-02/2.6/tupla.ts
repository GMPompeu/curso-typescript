//Tupla array de dados primitivos fixos.

let pessoa: [string, string, number];
pessoa = ['Guilherme Pompeu', 'FullStack', 18];

console.log(pessoa);

let pessoa1: [string, string, number];
pessoa1 = ['Guilherme Pompeu', 'FullStack', 18];
console.log(pessoa1[1]);

let pessoa2: [nome: string, posicao: string, idade: number];
pessoa2 = ['Guilherme Pompeu', 'FullStack', 18];

console.log(pessoa2);


let listafrutas: [string, ...string[]] = ['pera', 'maça', 'goiaba', 'melancia', 'mamão']
 console.log(...listafrutas)

let listaFruta2: [number, boolean, ...string[]] = [5, true, ...listafrutas];
console.log(listaFruta2)

function listarPessoas(nome: string[], idade: number[]){
    return[...nome, ...idade]
}

let resultado = listarPessoas(['guilherme', 'guilherme'], [34, 55])
console.log(resultado)

type Nome = 
    | [primeiroNome: string, sobreNome:string]
    | [primeiroNome: string, nomeMeio: string, sobreNome: string];

function lerNome(...nome: Nome){
    return [...nome]
}

console.log(lerNome('Gui', 'Mascarenhas'))
console.log(lerNome('Guilherme','Pompeu', 'Mascarenhas'))
