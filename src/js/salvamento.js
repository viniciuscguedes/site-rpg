document.addEventListener("DOMContentLoaded", function () {
    const campos = document.querySelectorAll("input, select, textarea");

    campos.forEach(campo => {
        const valorSalvo = localStorage.getItem(campo.id);

        if (valorSalvo !== null) {
            if (campo.type === "checkbox") {
                campo.checked = valorSalvo === "true";
            } else {
                campo.value = valorSalvo;
            }
        }

        campo.addEventListener("input", () => {
            if (campo.type === "checkbox") {
                localStorage.setItem(campo.id, campo.checked);
            } else {
                localStorage.setItem(campo.id, campo.value);
            }
        });
    });

    const nomeJogador = document.getElementById("nomeJogador");
    const nomePersonagem = document.getElementById("nomePersonagem");

    if (nomeJogador) {
        nomeJogador.value = localStorage.getItem("nomeJogador") || "";
        nomeJogador.addEventListener("input", () => {
            localStorage.setItem("nomeJogador", nomeJogador.value);
        });
    }

    if (nomePersonagem) {
        nomePersonagem.value = localStorage.getItem("nomePersonagem") || "";
        nomePersonagem.addEventListener("input", () => {
            localStorage.setItem("nomePersonagem", nomePersonagem.value);
        });
    }

    const periciaCheckboxes = document.querySelectorAll('.pericia-checkbox');
    periciaCheckboxes.forEach((checkbox, index) => {
        const estadoSalvo = localStorage.getItem(`pericia_${index}`);
        if (estadoSalvo !== null) {
            checkbox.checked = estadoSalvo === "true";
        }
        checkbox.addEventListener("change", () => {
            localStorage.setItem(`pericia_${index}`, checkbox.checked);
        });
    });

    const testeMorteCheckboxes = document.querySelectorAll('.teste-morte-checkbox');
    testeMorteCheckboxes.forEach((checkbox, index) => {
        const estadoSalvo = localStorage.getItem(`teste_morte_${index}`);
        if (estadoSalvo !== null) {
            checkbox.checked = estadoSalvo === "true";
        }
        checkbox.addEventListener("change", () => {
            localStorage.setItem(`teste_morte_${index}`, checkbox.checked);
        });
    });

    const atributos = ["classeArmadura", "deslocamento", "iniciativa"];

    atributos.forEach(atributo => {
        const campo = document.getElementById(atributo);
        if (campo) {
            campo.value = localStorage.getItem(atributo) || "";
            campo.addEventListener("input", () => {
                localStorage.setItem(atributo, campo.value);
            });
        }
    });

    const ataquesMagiasRows = document.querySelectorAll('.table-table-bordered tbody tr');
    ataquesMagiasRows.forEach((row, index) => {
        const inputs = row.querySelectorAll('td input[type="text"]');

        if (inputs.length >= 3) {
            const [nomeInput, bonusInput, danoInput] = inputs;

            nomeInput.value = localStorage.getItem(`ataque_nome_${index}`) || "";
            bonusInput.value = localStorage.getItem(`ataque_bonus_${index}`) || "";
            danoInput.value = localStorage.getItem(`ataque_dano_${index}`) || "";

            nomeInput.addEventListener("input", () => {
                localStorage.setItem(`ataque_nome_${index}`, nomeInput.value);
            });

            bonusInput.addEventListener("input", () => {
                localStorage.setItem(`ataque_bonus_${index}`, bonusInput.value);
            });

            danoInput.addEventListener("input", () => {
                localStorage.setItem(`ataque_dano_${index}`, danoInput.value);
            });
        }
    });

    const resistenciaCheckboxes = document.querySelectorAll('.resistencia-checkbox');
    resistenciaCheckboxes.forEach((checkbox, index) => {
        const estadoSalvo = localStorage.getItem(`resistencia_${index}`);
        if (estadoSalvo !== null) {
            checkbox.checked = estadoSalvo === "true";
        }
        checkbox.addEventListener("change", () => {
            localStorage.setItem(`resistencia_${index}`, checkbox.checked);
        });
    });

    const habilidadeCheckboxes = document.querySelectorAll('.circular-checkbox');
    habilidadeCheckboxes.forEach((checkbox, index) => {
        const estadoSalvo = localStorage.getItem(`habilidade_${index}`);
        if (estadoSalvo !== null) {
            checkbox.checked = estadoSalvo === "true";
        }
        checkbox.addEventListener("change", () => {
            localStorage.setItem(`habilidade_${index}`, checkbox.checked);
        });
    });

    const textareas = document.querySelectorAll('textarea');
    textareas.forEach((textarea, index) => {
        textarea.value = localStorage.getItem(`textarea_${index}`) || "";
        textarea.addEventListener("input", () => {
            localStorage.setItem(`textarea_${index}`, textarea.value);
        });
    });
});
