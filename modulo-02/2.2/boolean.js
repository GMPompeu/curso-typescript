"use strict";
let tarefaConcluida = true;
let tarefaPendente = false;
console.log(tarefaConcluida, tarefaPendente);
let concluido = true;
if (concluido) {
    console.log("Tarefa concluida com sucesso!");
}
else {
    console.log("Tarefa pendente");
}
//===> Função para receber tarefa. 
function tfConc(concluido) {
    return concluido ? "Tarefea concluida" : "erro";
}
console.log(tfConc(concluido));
