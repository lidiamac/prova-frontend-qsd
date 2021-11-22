let senha = document.getElementById("login_senha");


senha.onblur = function() {
    let regexSenha = /^.{8,}$/;
    let msgSenhaError = document.querySelector(".senha-msg-error");
    let msgSenhaOk = document.querySelector(".senha-msg-success");

    if (regexSenha.test(senha.value)) {
        msgSenhaError.style.display = "none";
        msgSenhaOk.style.color = "green";
        msgSenhaOk.style.display = "block";
    } else {
        msgSenhaOk.style.display = "none";
        msgSenhaError.style.color = "red";
        msgSenhaError.style.display = "block";
    }
}

