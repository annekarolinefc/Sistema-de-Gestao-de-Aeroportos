let aeroporto = {};

//Capturando um Aeroporto ao clicar no nome
const nome = document.querySelector("#nome-aeroporto")

window.addEventListener('load', function() {
    aeroporto = carregarAeroporto();
    nome.textContent = aeroporto.nome_aeroporto;
    console.log(aeroporto);
});

function carregarAeroporto() {
    return {
        id_aeroporto: sessionStorage.getItem("id_aeroporto"),
        nome_aeroporto: sessionStorage.getItem("nome_aeroporto"),
        codigo_iata: sessionStorage.getItem("codigo_iata"),
        cidade: sessionStorage.getItem("cidade"),
        codigo_pais_iso: sessionStorage.getItem("codigo_pais_iso"),
        latitude: sessionStorage.getItem("latitude"),
        longitude: sessionStorage.getItem("longitude"),
        altitude: sessionStorage.getItem("altitude"),
    }

}