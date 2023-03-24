const form = document.querySelector('#anotar')
const lista = document.querySelector('#lista');
const boxTarefa = document.querySelector('#tarefa')
const tarefas = JSON.parse(localStorage.getItem('tarefas')) || []

tarefas.forEach( (tarefa) => {

    createCheck(tarefa)
    
});

form.addEventListener('submit', (evento) =>{

    evento.preventDefault();

    const tarefa = evento.target.elements['tarefa'];

    tarefas.push(tarefa.value)

    localStorage.setItem("tarefas", JSON.stringify(tarefas))

    createCheck(tarefa.value)
    tarefa.value = ''

})

function createCheck(tarefa){

    const novoItem = document.createElement('li');
    novoItem.classList.add('typing-animation')
    novoItem.innerHTML += tarefa;
    novoItem.appendChild(btnCheck())
    lista.appendChild(novoItem)

}

function btnCheck(){

    const elementoBtn = document.createElement('button')
    elementoBtn.classList.add('uil-check')

    elementoBtn.addEventListener("click", function(){
        checkElement(this.parentNode, this.parentNode.firstChild.data)
    })

    return elementoBtn

}

function checkElement(tag, elemento){

    tag.remove()
    let position = tarefas.indexOf(elemento)
    tarefas.splice(position, 1)
    localStorage.setItem("tarefas", JSON.stringify(tarefas))

}