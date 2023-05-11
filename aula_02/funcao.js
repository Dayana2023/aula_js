function banana() {
    let resultado = 10 + 20
    console.log(resultado)
}
//banana()


function soma (n1, n2){
    let resultado = n1 + n2
    console.log ('soma:', resultado)

    return resultado
}

function media (n1, n2) {
    //let resultado= (n1+n2) /2
    let resultado= soma(n1, n2) /2
    console.log('media:', resultado)

}

media (123, 678)
