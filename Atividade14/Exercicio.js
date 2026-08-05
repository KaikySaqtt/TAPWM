function Sim(){
    const nome = document.Formulario.elements["name"].value
    const texto = document.getElementById('text')
    texto.innerHTML = "Que bom que você voltou, " + nome + "!"
}

function Nao(){
    const nome = document.Formulario.elements["name"].value
    const texto = document.getElementById('text')
    texto.innerHTML = "Volte sempre " + nome + "!"
}