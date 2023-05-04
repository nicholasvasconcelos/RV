usuario = document.getElementById("usuario")
senha = document.getElementById("senha")
btn = document.getElementById("btn_login")
mensagem = document.getElementById("mensagem")

btn.addEventListener("click", function(evento)
{
    evento.preventDefault()
    if(usuario.value === "admin" && senha.value === "admin")
    {
        mensagem.classList.remove("mensagem-erro")
        usuario.classList.remove("invalida")
        mensagem.classList.add("mensagem-sucesso")
        mensagem.innerHTML = "Login realizado com sucesso"
    } 
    else
    {
        mensagem.classList.remove("mensagem-sucesso")
        usuario.classList.add("invalida")
        mensagem.classList.add("mensagem-erro")
        mensagem.innerHTML = "Login ou senha incorretos"
    }
})