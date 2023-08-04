function vericacaodeacesso(){
    const cartao = parseInt(document.getElementById("cartao").value);
    let resposta = ""

    if (cartao >= 1000 && cartao <= 1999){
        resposta = "Possuí um acesso geral a todas áreas restritas!"
    } else if (cartao >= 2000 && cartao <= 2999){
        resposta = "Possuí um acesso limitado a algumas áreas restritas!"
    } else {
        resposta = "Não possuí um acesso a áreas restritas!"
        
    }

    document.getElementById("resultado").textContent = resposta;
}