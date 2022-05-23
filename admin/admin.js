function get(url){
    let request = new XMLHttpRequest()
    request.open('GET',url,false)
    request.send()
    return request.responseText
}

function main(){
    let data = get("http://localhost:5000/reservas")
    let objData = JSON.parse(data)
    let tabela = document.getElementById("tabelas")

    /*objData.forEach(element => {
        let linha = criarLinha(element)
        //tabela.appendChild(linha)
    });*/

    objData.map((reserva) => {
        //console.log(reserva.name)

        document.writeln("<div class='cards'>")
        
        document.writeln("<p class='id'>",reserva.id,"</p>")
        document.write("<p class='nome'>",reserva.name,"</p>")
        document.writeln("<p class='numero'>",reserva.numero,"</p>")
        document.writeln("<p class='email'>",reserva.email,"</p>")
        document.writeln("<p class='marca'>",reserva.marca,"</p>")
        document.writeln("<p class='cor'>",reserva.cor,"</p>")
        document.writeln("<p class='tipo'>",reserva.tipo,"</p>")
        document.writeln("<p class='nivel'>",reserva.niveldeservico,"</p>")
        document.writeln("</div>")
    })

}
main()