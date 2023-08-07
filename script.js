function vericacaodeacesso(){
    const cartao = parseInt(document.getElementById("cartao").value);
    let resposta = ""

    if (cartao >= 1000 && cartao <= 1999){
        resposta = "Possuí um acesso geral a todas áreas restritas!"
        document.getElementById('resultado').style.color = 'green'

    } else if (cartao >= 2000 && cartao <= 2999){
        resposta = "Possuí um acesso limitado a algumas áreas restritas!"
        document.getElementById('resultado').style.color = 'chocolate'
    } else {
        resposta = "Não possuí um acesso a áreas restritas!"
        document.getElementById('resultado').style.color = 'red'   
    }

    document.getElementById('resultado').textContent = resposta;
}