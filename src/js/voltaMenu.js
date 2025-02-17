document.addEventListener("DOMContentLoaded", function () {
    const botao = document.getElementById("voltarMenu");
    if (botao) {
        botao.addEventListener("click", function () {
            window.location.href = "../html/index.html";
        });
    }
});