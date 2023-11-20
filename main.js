const form = document.getElementById("form-validacao")

form.addEventListener("submit", function (e) {
  e.preventDefault()

  const campoA = document.getElementById("campoA")
  const campoB = document.getElementById("campoB")
  const mensagemResposta = document.querySelector(".mensagemResposta")
  const MensagemCasoB = `O valor do campo <b>B</b> é maior que o valor do campo <b>A</b>. Formulario Válido e foi enviado corretamente.`
  const MensagemCasoA = `Formulario inválido, tente novamente.`
  

  if (campoB.value > campoA.value) {
    mensagemResposta.innerHTML = MensagemCasoB
    mensagemResposta.style.display = "block"
  } else {
    mensagemResposta.innerHTML = MensagemCasoA
    mensagemResposta.style.display = "block"
  } 
})
