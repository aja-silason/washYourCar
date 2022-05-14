async function Entrar(){
    var login = document.getElementById("email").value;
    var senha = document.getElementById("password").value;
     
    if(email === "" && password === ""){
      alert("Preencha o formulário para acessares a tua conta!")
      
    }
    if((email=='joelson@123' && password == '1234' )||( email==="josemar@123" && password === "5678") || email==="germano@123" 
    && password === "4321"){

    } 
   
    else {
      alert("Esse Usuário não existe, tente novamente")
    } 
  }
  