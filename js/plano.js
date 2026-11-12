const botoesPagamento = document.querySelectorAll('.pagamento_cards button');

botoesPagamento.forEach(botao => {
    botao.addEventListener('click', (evento) => {
        evento.preventDefault(); 

        botoesPagamento.forEach(b => {
            b.classList.remove('botao_ativo'); 
        });


        evento.currentTarget.classList.add('botao_ativo');
        
        const metodoEscolhido = evento.currentTarget.className.replace('botao_ativo', '').trim();
        console.log("Selecionado:", metodoEscolhido);
    });
});

const enviar_btn = document.getElementById('enviar_btn');

enviar_btn.addEventListener('click', function(pagar) {
    pagar.preventDefault();
    
    const nome = document.getElementById('nome').value;
    const numero = document.getElementById('numero').value;
    const validade = document.getElementById('validade').value;
    const cvv = document.getElementById('cvv').value;
    const identidade = document.getElementById('identidade').value;

    if(nome.trim() === '' || numero.trim() === '' || validade.trim() === '' || cvv.trim() === '' || identidade.trim() === '') {
        alert("Preencha todos os campos.");
    } else { 
        alert("Pagamento realizado com sucesso!"); 
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const selectPlano = document.getElementById("tipo_solicitacao");
    
    const precos = [
        document.querySelector(".plano_escolhido h2"),
        document.querySelector(".plano_escolhido h3"),
        document.querySelector(".plano_escolhido h4")
    ];
    
    const beneficios = [
        document.querySelector(".beneficios ul:not([class])"), 
        document.querySelector(".beneficios .ul2"),            
        document.querySelector(".beneficios .ul3")             
    ];

    function atualizarVisibilidade(index) {
        precos.forEach(preco => {
            if (preco) preco.style.display = "none";
        });
        
        beneficios.forEach(lista => {
            if (lista) lista.style.display = "none";
        });
        
        if (precos[index]) precos[index].style.display = "block";
        if (beneficios[index]) beneficios[index].style.display = "block";
    }

    selectPlano.addEventListener("change", (e) => {
        atualizarVisibilidade(e.target.selectedIndex);
    });

    atualizarVisibilidade(selectPlano.selectedIndex);
});