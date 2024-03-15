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