let nome: string = 'Guilherme Pompeu';
console.log(nome)

let animais: string[] = ['cachorro', 'gato', 'urso', 'panda'];
console.log(animais);

// =======> Objetos
let carro:{
    nome: string,
    ano: number,
    preco: number
}

carro = {nome: 'Polo', ano: 2007, preco: 20000}
console.log(carro)

function multiplicarNumeros(num1: number, num2: number){
    return num1 * num2;
}
console.log(multiplicarNumeros(5, 10))
