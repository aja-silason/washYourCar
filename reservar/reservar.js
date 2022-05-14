function fazerReserva(url, reservas){

    console.log("Reservas = ", reservas)

    let request = new XMLHttpRequest()
    request.open("POST", url, true)
    request.setRequestHeader("Content-type", "application/json")
    request.send(JSON.stringify(reservas))

    request.onload = function() {
        console.log(this.responseText)
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
    let tipolavagem = document.getElementById("tipolavagem").value

    console.log(nome)
    console.log(tipolavagem)

    reservas = {
        "name": nome,
        "numero": numero,
        "email": email,
        "marca": marca,
        "tipo": tipo,
        "tipolavagem": tipolavagem
    }

    fazerReserva(url, reservas)


}