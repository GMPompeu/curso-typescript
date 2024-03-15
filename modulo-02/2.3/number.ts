let num1: number = 23.0;
let num2: number = 0x78CF;
let num3: number = 0o577;
let num4: number = 0b110001;

console.log('Number - Ponto flutuante..:',num1)
console.log('Number - Hexadecimal..:',num2)
console.log(typeof(num2))
console.log('Number - Octal..:',num3)
console.log(typeof(num3))
console.log('Number - Binário..:',num4)


// Bigint

let big1: bigint = 90071291029n;
let big: bigint = 0b100000000000000000000000000000011n;
let big2: bigint = 0x200712910021n;
let big3: bigint = 0o40000000003n;

console.log('Bigint..:',big1) 
console.log('Bigint.. Binário..:',big2)
console.log('Bigint.. Hexa..:',big2)
console.log('Bigint.. Octal..:',big2)