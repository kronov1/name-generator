function gerarNome() {
    document.getElementById('gerar-btn').disabled = true; // Desabilita o botão
    fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(data => {
            const nome = `${data.results[0].name.first} ${data.results[0].name.last}`; // Nome completo
            const email = data.results[0].email; // E-mail

            document.getElementById('nome').innerText = nome;
            document.getElementById('email').innerText = email; // Exibe o e-mail
        })
        .catch(error => console.error('Erro ao gerar nome:', error))
        .finally(() => {
            document.getElementById('gerar-btn').disabled = false; // Reabilita o botão
        });
}
