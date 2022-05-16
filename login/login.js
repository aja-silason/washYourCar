var objAdmin = [
    {
        nome: "laveoteucarrohoje",
        pass: "pass"
    }
]

function logar(){
    var nome = document.getElementById("nome").value
    var pass = document.getElementById("pass").value

    for(a = 0; a < objAdmin.length; a ++) {
        
        //dados corretos
        if(nome == objAdmin[a].nome && pass == objAdmin[a].pass){
            location.href = '../admin/admin.html'
        }
        //todos campos vazios 
        else if(nome == '' && pass == '') {
            alert('Os campos estão vazios!')
        }
        //campo nome vazio
        else if(nome == '' && pass == objAdmin[a].pass ) {
            alert('Campo nome vazio!')
        }
        //campos errados
        else {
            alert("Erro de acesso! área restrita, apenas admin")
            location.href = '../index.html'
        }

    }
}