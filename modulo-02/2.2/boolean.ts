
let tarefaConcluida: boolean = true;
let tarefaPendente: boolean = false;

console.log(tarefaConcluida, tarefaPendente)

let concluido: boolean = true;

if (concluido){
    console.log("Tarefa concluida com sucesso!")
}else{
    console.log("Tarefa pendente")
}

//===> Função para receber tarefa. 
function tfConc(concluido: boolean){
    return concluido? "Tarefea concluida" : "erro"
}

console.log(tfConc(concluido));  