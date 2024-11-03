const form = document.getElementById('form-atividade')
const imgAprovado = `<img src="./images/aprovado.png" alt="Emoji celebrando" />`
const imgReprovado = `<img src="./images/reprovado.png" alt="Emoji triste" />`

const atividade = [];
const notas = [];
const spanAprovado = '<span class="resultado aprovado">Aprovado</span>';
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>';
const notaMinima = parseFloat(prompt("Digite a nota mínima"));

let linhas = '';


form.addEventListener('submit', function(e) {
    e.preventDefault();

    AddLinha();

    atualizaTabela();

    calcularMedia();
})

function AddLinha(){
    const inputNomeAtividade = document.getElementById('nome-atividade');
    const inputNotaAtividade = document.getElementById('nota-atividade');

    if(atividade.includes(inputNomeAtividade.value)){
        alert('Atividade já cadastrada!');
    }else{
        atividade.push(inputNomeAtividade.value);
        notas.push(parseFloat(inputNotaAtividade.value));

        let linha = '<tr>';
        linha += `<td>${inputNomeAtividade.value}</td>`;
        linha += `<td>${inputNotaAtividade.value}</td>`;
        linha += `<td>${inputNotaAtividade.value >= notaMinima ? imgAprovado : imgReprovado}</td>`;
        linha += '</tr>';

        linhas += linha;

    }


    inputNomeAtividade.value = '';
    inputNotaAtividade.value = '';
}

function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function calcularMedia(){
    const mediaFinal = calcularMediaFinal();

    document.getElementById('media').innerHTML = mediaFinal;
    document.getElementById('media-resultado').innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado;
}

function calcularMediaFinal(){
    let somaNotas = 0;
    for(let i = 0; i < notas.length; i++){
        somaNotas += notas[i]
    }

    return somaNotas / notas.length;
}