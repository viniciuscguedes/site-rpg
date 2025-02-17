document.addEventListener("DOMContentLoaded", function () {

    const botao = document.getElementById("acessoFicha");
    const botao2 = document.getElementById("acessoDado");


    if (botao) {
        botao.addEventListener("click", function () {
            window.location.href = "../html/designFicha.html";
        });
    }
    
    if(botao2){
        botao2.addEventListener("click", function(){
            window.location.href = "../html/dados.html";
    })};

    

});