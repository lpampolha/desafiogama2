window.onload = function(){
  var button = document.getElementById("button")

  button.onclick = saveUser
}

function saveUser(){
  var inputName = document.getElementById("name")
  var inputMail = document.getElementById("email")
  var inputPass = document.getElementById("password")
  var inputLogin = document.getElementById("login")
  var inputCode = document.getElementById("code")
  var inputProduct = document.getElementById("product")
  
  var name = inputName.value
  var email = inputMail.value
  var password = inputPass.value
  var login = inputLogin.value
  var code = inputCode.value
  var product = inputProduct.value

  localStorage.setItem("nameSave", name)
  localStorage.setItem("mailSave", email)
  localStorage.setItem("passSave", password)
  localStorage.setItem("loginSave", login)
  localStorage.setItem("codeSave", code)
  localStorage.setItem("productSave", product)

  var span = document.getElementById("message")
  span.innerHTML = "Dados salvos com sucesso"
}