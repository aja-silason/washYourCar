function fazerReserva(url, reservas){

    //console.log("Reservas = ", reservas)

    let request = new XMLHttpRequest()
    request.open("POST", url, true)
    request.setRequestHeader("Content-type", "application/json")
    request.send(JSON.stringify(reservas))

    request.onload = function() {
        console.log(this.responseText)
        window.location.href = '../index.html'
    }

    return request.responseText

}

function submitReserva() {
    event.preventDefault()
    let url = "http://localhost:5000/reservas"
    //dados dono
    let nome = document.getElementById("nome").value
    let numero = document.getElementById("numero").value
    let email = document.getElementById("email").value
    
    //dados veiculo
    let marca = document.getElementById("marca").value
    let cor = document.getElementById("cor").value
    let tipo = document.getElementById("tipo").value

    //tipo lavagem
    let niveldeservico = document.getElementById("niveldeservico").value

    //inserindo na base de dados
    reservas = {
        "name": nome,
        "numero": numero,
        "email": email,
        "marca": marca,
        "cor": cor,
        "tipo": tipo,
        "niveldeservico": niveldeservico
    }

    let btnSubmit = document.getElementById("btnSubmit")

    //confirmando o envio
    fazerReserva(url, reservas)
}

   

