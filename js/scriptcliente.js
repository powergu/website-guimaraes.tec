document.getElementById("entrar-btn").addEventListener("click", function() {
    let login = document.getElementById("login").value;
    let senha = document.getElementById("senha").value;

    if (login === "gustavo" && senha === "123") {
        alert("Login realizado com sucesso!");
    } else if (login === "" || senha === "") {
        alert("Por favor, preencha todos os campos!");
    } else {
        alert("Usuário ou senha incorretos!");
    }
});

document.getElementById("cadastro-btn").addEventListener("click", function() {
    let login = document.getElementById("login").value;
    let senha = document.getElementById("senha").value;

    if (login === "" || senha === "") {
        alert("Por favor, preencha todos os campos para cadastro!");
    } else {
        // Simulação de cadastro
        alert("Cadastro realizado com sucesso!");
    }
});
