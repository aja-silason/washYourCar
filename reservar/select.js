function fazGet(url){
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}
function selectLinha(){

}
function main(){
    data = fazGet("http://localhost:5000/cores/")
    cores = JSON.parse(data)
    console.log(cores)
}

main()