const botao = document.getElementById("btn")
const campos = document.querySelectorAll("#campo")
const obrigatorio = document.getElementsByClassName("obrigatorio")

botao.addEventListener("click", function (event) {
    event.preventDefault()
    campos.forEach(item => {
        item.classList.remove("valido")

        for (let i = 0; i < campos.length; i++) {
            if (!campos[i].value) {
                campos[i].classList.add("invalido")
                obrigatorio[i].classList.add("visivel")
            } else {
                obrigatorio[i].classList.remove("visivel")
                campos[i].classList.add("valido")
            }
        }
    })
})