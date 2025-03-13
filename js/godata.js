document.querySelector("#form form").addEventListener("submit", async function (e) {
    e.preventDefault(); 

    const formData = {
        nome: document.querySelector("#nome").value,
        email: document.querySelector("#email").value
    };

    try {
        const resposta = await fetch("", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        });

        if (resposta.ok) {
            alert("Formulário enviado com sucesso!");
        } else {
            alert("Erro ao enviar formulário.");
        }
    } catch (error) {
        console.error("Erro na requisição:", error);
    }
});
