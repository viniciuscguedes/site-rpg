document.addEventListener("DOMContentLoaded", function () {
    const atributos = ["forca", "destreza", "constituicao", "inteligencia", "sabedoria", "carisma"];

    atributos.forEach(attr => {
        const inputAtributo = document.getElementById(attr);
        const inputBonus = document.getElementById(`bonus-${attr}`);

        if (inputAtributo && inputBonus) {
            inputAtributo.addEventListener("input", function () {
                let valor = parseInt(inputAtributo.value) || 0;
                let bonus = Math.floor((valor - 10) / 2);
                inputBonus.value = bonus;
            });
        }
    });
});
