const form = document.getElementById('form-contatos');
let linhas = '';
const telefone = [];

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
});

function adicionaLinha() {
    const inputNomeContato = document.getElementById('nome-contato');
    const inputTelContato = document.getElementById('tel-contato');

    if (telefone.includes(inputTelContato.value)) {
        alert(`O telefone: ${inputTelContato.value} já existe`);
    } else {
        telefone.push(inputTelContato.value);

        let linha = '<tr>';
        linha += `<td>${inputNomeContato.value}</td>`;
        linha += `<td>${inputTelContato.value}</td>`;
        linha += '</tr>';

        linhas += linha;

    }

    inputNomeContato.value = '';
    inputTelContato.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}