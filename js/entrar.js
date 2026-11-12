const login_botao = document.getElementById('login_botao');

if (login_botao) {
    login_botao.addEventListener('click', function(event) { 
        event.preventDefault();

        const email = document.getElementById('email_login').value;
        const senha = document.getElementById('senha_login').value;

        if (email.trim() === "" || senha.trim() === ""){ 
            alert("Preencha todos os campos.");
        } else { 
            alert("Login realizado com sucesso");
            window.location.href = "index.html";
        }
    });
}

const botao_lembrar = document.getElementById('botao_lembrar');

if (botao_lembrar) {
    botao_lembrar.addEventListener('click', function(preencher) {
        preencher.preventDefault();
        if (botao_lembrar.style.backgroundColor === 'rgb(0, 180, 216)') {
            botao_lembrar.style.backgroundColor = ''; 
        } else {
            botao_lembrar.style.backgroundColor = '#00B4D8';
        }
    });
}

const registro_botao = document.getElementById('registro_botao');

if (registro_botao) {
    registro_botao.addEventListener('click', function(event2) { 
        event2.preventDefault();

        const nome_completo = document.getElementById('nome_completo').value;
        const email_corporativo = document.getElementById('email_corporativo').value;
        const telefone_corporativo = document.getElementById('telefone_corporativo').value;
        const nome_empresa = document.getElementById('nome_empresa').value;
        const senha_registro = document.getElementById('senha_registro').value;
        const confirmar_senha = document.getElementById('confirmar_senha').value;

        if (nome_completo.trim() === "" || email_corporativo.trim() === "" || telefone_corporativo.trim() === "" || nome_empresa.trim() === "" || senha_registro.trim() === "" || confirmar_senha.trim() === "") { 
            alert("Preencha todos os campos.");
        } else { 
            alert("Cadastro realizado com sucesso"); 
            window.location.href = "index.html";
        }
    });
}