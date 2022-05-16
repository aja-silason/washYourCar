function fazLogin(url){
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}/*
function verifica(admins){
    
}*/
function main(){
    let data = fazLogin('http://localhost:5000/admin')
    let adm = JSON.parse(data)
    console.log(adm)

}
main()



function ConteinnerGeral(){
    const loginButton = document.getElementById("btnLogar")
    const email = document.getElementById("nome")
    const password = document.getElementById("pass")
 

    loginButton.addEventListener('click', ( event )=>{

        event.preventDefault()
        
        let emailValue = email.value
        let passwordValue = password.value
        
        const apiResponse = peformLogin()


        apiResponse.then(data =>{

            const {users} = data

            let selectedUser = users.find( user => {
                return user.email === emailValue
            })

            console.log(selectedUser)

            gerenciadorLogin(selectedUser,{
                email: emailValue,
                password: passwordValue
            })
        })
    })
}

async function peformLogin(){

    let result

    return await fetch('./db.json').then(response => response.json()).then(data =>{
        return data
    })

}

function gerenciadorLogin(apiResponse, userInput){
    const{password, email} = apiResponse
    const userInputPassword = userInput.password
    const userInputEmail = userInput.email

    if(userInputEmail === email && userInputPassword===password){
    //aqui chama outra tela exemplo a tela de página inicial
        window.location.href ='./admin/admin.html'
    }
    else{
        window.alert("Usuário não existe")
    }
}
window.onload = ConteinnerGeral