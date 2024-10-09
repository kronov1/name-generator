function gerarNome() {
    fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(data => {
            const nome = data.results[0].name.first;
            document.getElementById('nome').innerText = nome;
        })
        .catch(error => console.error('Erro ao gerar nome:', error));
}