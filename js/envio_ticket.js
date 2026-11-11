let meus_tickets = JSON.parse(localStorage.getItem('tickets_parabellum')) || [];

const lista_tickets = document.querySelector('.tickets_list');
const modelo_ticket = document.getElementById('ticket_novo');

meus_tickets.slice().reverse().forEach(function(ticket_salvo) {
    const clone = modelo_ticket.cloneNode(true);
    clone.style.display = 'block'; 
    clone.classList.add('ticket_dinamico'); 
    
    const span_titulo_ticket = clone.querySelector('#span_titulo_ticket');
    span_titulo_ticket.textContent = ticket_salvo.resumo;
    span_titulo_ticket.removeAttribute('id'); 
    clone.removeAttribute('id');

    const span_badge = clone.querySelector('#span_badge'); 
    span_badge.textContent = ticket_salvo.prioridade;
    span_badge.removeAttribute('id'); 
    
    span_badge.className = "badge";
    if (ticket_salvo.prioridade === "Alta" ) {
        span_badge.classList.add("badge_alta");
    } else if (ticket_salvo.prioridade === "Média" ) {
        span_badge.classList.add("badge_media");
    } else if (ticket_salvo.prioridade === "Baixa" ) {
        span_badge.classList.add("badge_baixa");
    }

    clone.querySelector('.ticket_id').textContent = ticket_salvo.id;

    lista_tickets.insertBefore(clone, lista_tickets.firstChild);
});

const enviar_btn = document.getElementById('enviar_btn');

enviar_btn.addEventListener('click', function(event) { 
    event.preventDefault();

    const nome_completo = document.getElementById('nome_completo').value;
    const email_suporte = document.getElementById('email_suporte').value;
    const resumo_problema = document.getElementById('resumo_problema').value;
    const assunto = document.getElementById('assunto').value;

    if (nome_completo.trim() === "" || email_suporte.trim() ==="" || resumo_problema.trim() ===""  || assunto.trim() ==="") { 
        alert("Preencha todos os campos corretamente")
        return;
    }

    document.getElementById('nome_completo').value = "";
    document.getElementById('email_suporte').value = "";
    document.getElementById('resumo_problema').value = "";
    document.getElementById('assunto').value = "";

    const clone = modelo_ticket.cloneNode(true);
    clone.style.display = 'block';
    clone.classList.add('ticket_dinamico');

    const span_titulo_ticket = clone.querySelector('#span_titulo_ticket');
    span_titulo_ticket.textContent = resumo_problema;
    span_titulo_ticket.removeAttribute('id');
    clone.removeAttribute('id');

    const span_badge = clone.querySelector('#span_badge');
    const prioridade = document.getElementById('prioridade').value;
    span_badge.textContent = prioridade;
    span_badge.removeAttribute('id');
    span_badge.className = "badge";

    if (prioridade === "Alta" ) {
        span_badge.classList.add ("badge_alta");
    }
    else if (prioridade === "Média" ) {
        span_badge.classList.add ("badge_media");
    }
    else if (prioridade === "Baixa" ) {
        span_badge.classList.add ("badge_baixa");
    }

    lista_tickets.insertBefore(clone, lista_tickets.firstChild);

    const meu_ticket = {
        id: "#TK-" + Math.floor(Math.random() * 10000),
        resumo: resumo_problema,
        prioridade: prioridade,
        data: "Novo"
    };

    clone.querySelector('.ticket_id').textContent = meu_ticket.id;

    meus_tickets.unshift(meu_ticket);

    if (meus_tickets.length > 5) {
        meus_tickets.pop();
    
        const tickets_na_tela = document.querySelectorAll('.ticket_dinamico');
        if (tickets_na_tela.length > 0) {
        tickets_na_tela[tickets_na_tela.length - 1].remove(); 
        }
    }

    localStorage.setItem('tickets_parabellum', JSON.stringify(meus_tickets));

    alert("Ticket enviado com sucesso!");
});