const taxa_conversao = 0.02;
const custo_por_funcionario = 3000;

const calcular = document.getElementById('calcular');

calcular.addEventListener('click', function(event) {
event.preventDefault();

const funcionarios = Number(document.getElementById("num_funcionarios").value);
const ticket = Number(document.getElementById("ticket_medio").value);
const visitantes = Number(document.getElementById("vis_mensais").value);

if (funcionarios <=0 || ticket <=0 || visitantes <=0) { 
    alert("Preencha todos os campos corretamente")
    return;
}

let receita = visitantes * taxa_conversao * ticket;
let custo = funcionarios * custo_por_funcionario;

let roi = ((receita - custo) / custo) * 100;

document.getElementById('resultado').style.display = 'block';   
document.getElementById('resultado_calculo').innerHTML = `${roi.toFixed(2)}%`;

});