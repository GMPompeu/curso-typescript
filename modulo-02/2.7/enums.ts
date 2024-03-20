 enum Idioma{
    Portugues,
    Espanhol,
    Ingles,
    Frances
 }

 console.log(Idioma);

 enum Dia{
    Segunda = 'SEG',
    Terca = 'TER',
    Quarta = 'QUAR',
    Quinta = 'QUI',
    Sexta = 'SEX',
    Sabado = 'SAB',
    Domingo = 'DOM'
 }
 console.log(Dia.Sabado);

 const enum Comida{
    Hamburger = 'hamburger',
    Massa = 'massa',
    Pizza = 'pizza',
    Torta = 'torta',
    Churrasco = 'churrasco'
 }

 function comida(c: Comida){
    return "Comida muito apetitosa"
 }

 console.log(comida(Comida.Pizza))
 console.log(comida(Comida.Churrasco))
 //console.log(comida(5))

enum Tarefa {
    Todo,
    Progress,
    Done
}

const concluidaTarefa = {
    id: 1,
    status: Tarefa.Done ,
    descricao: 'Tarefa concluida com sucesso!'
};

if (concluidaTarefa.status === Tarefa.Done){
    console.log('Enviar e-mail: Tarefa Concluida!')
}