url = 'http://127.0.0.1:5000/aeroporto'
//url='https://api-flask-aeroporto.herokuapp.com/aeroporto'
window.addEventListener('load', () => {
    fetch(url)
    .then((res) => res.json()) //converte para json
    .then((data) => {console.log(data)}) //imprime os dados no console
    .catch(err => console.log('Erro de Solicitação', err));
})