const protegido = document.getElementById('container_protegido');
const vulneravel = document.getElementById('container_vulneravel');

const btn_protegido = document.getElementById('btn_protegido');
const btn_vulneravel = document.getElementById('btn_vulneravel');

protegido.style.display='none';
vulneravel.style.display='block';

btn_vulneravel.classList.add('botao_ativo');

btn_protegido.addEventListener ('click', function() {
    vulneravel.style.display = 'none';
    protegido.style.display = 'block';

        btn_protegido.classList.add('botao_ativo');
        btn_vulneravel.classList.remove('botao_ativo');
});

btn_vulneravel.addEventListener ('click', function() {
    vulneravel.style.display = 'block';
    protegido.style.display = 'none';

    btn_vulneravel.classList.add('botao_ativo');
    btn_protegido.classList.remove('botao_ativo');

    btn_protegido.style.backgroud = '#00B4D8'; 
});
