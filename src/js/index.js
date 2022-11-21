const botao = document.getElementById("btn")

botao.addEventListener("click", validacao)

function validacao(evento) {
    evento.preventDefault()

    const nome = document.querySelector("#nome")
    const obrigatorioNome = document.querySelector(".obrigatorio-nome") 
    if (!nome.value) {               
        obrigatorioNome.classList.add("visivel")
        nome.classList.add("invalido")
    } else {        
        obrigatorioNome.classList.remove("visivel")
        nome.classList.add("valido")
    }

    const email = document.querySelector("#email")
    const obrigatorioEmail = document.querySelector(".obrigatorio-email")
    if (!email.value) {        
        obrigatorioEmail.classList.add("visivel")
        email.classList.add("invalido")
    } else {
        obrigatorioEmail.classList.remove("visivel")
        email.classList.add("valido")
    }

    const telefone = document.querySelector("#telefone")
    const obrigatorioTelefone = document.querySelector(".obrigatorio-telefone")
    if (!telefone.value) {        
        obrigatorioTelefone.classList.add("visivel")
        telefone.classList.add("invalido")
    } else {
        obrigatorioTelefone.classList.remove("visivel")
        telefone.classList.add("valido")
    }

    const mensagem = document.querySelector("#mensagem")
    const obrigatorioMensagem = document.querySelector(".obrigatorio-mensagem")
    if (!mensagem.value) {        
        obrigatorioMensagem.classList.add("visivel")
        mensagem.classList.add("invalido")
    } else {
        obrigatorioMensagem.classList.remove("visivel")
        mensagem.classList.add("valido")
    }
}