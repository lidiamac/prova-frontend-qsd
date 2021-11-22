// validação do nome
let nome = document.getElementById("cadastro_nome");

nome.onblur = function() {
    let regexNome = /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ'\s]+$/;
    let msgNomeError = document.querySelector(".nome-msg-error");
    let msgNomeOk = document.querySelector(".nome-msg-success");

    if (regexNome.test(nome.value)) {
        msgNomeError.style.display = "none";
        msgNomeOk.style.color = "green";
        msgNomeOk.style.display = "block";
    } else {
        msgNomeOk.style.display = "none";
        msgNomeError.style.color = "red";
        msgNomeError.style.display = "block";
    }
}
// ----------------------------------
// validacao do cpf
let cpf = document.getElementById("cadastro_cpf");

cpf.onblur = function() {
    let regexCpf = /^[0-9]{3}.?[0-9]{3}.?[0-9]{3}-?[0-9]{2}/;
    let msgCpfError = document.querySelector(".cpf-msg-error");
    let msgCpfOk = document.querySelector(".cpf-msg-success");

    if (regexCpf.test(cpf.value)) {
        msgCpfError.style.display = "none";
        msgCpfOk.style.color = "green";
        msgCpfOk.style.display = "block";
    } else {
        msgCpfOk.style.display = "none";
        msgCpfError.style.color = "red";
        msgCpfError.style.display = "block";
    }
}

// ----------------------------------
// validacao do cep
let cep = document.getElementById("cadastro_cep");

cep.onblur = function() {
    let regexCep = /^[0-9]{5}-[0-9]{3}$/;
    let msgCepError = document.querySelector(".cep-msg-error");
    let msgCepOk = document.querySelector(".cep-msg-success");

    if (regexCep.test(cep.value)) {
        msgCepError.style.display = "none";
        msgCepOk.style.color = "green";
        msgCepOk.style.display = "block";
    } else {
        msgCepOk.style.display = "none";
        msgCepError.style.color = "red";
        msgCepError.style.display = "block";
    }
}


