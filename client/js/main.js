/************************** URL DA API DE DADOS***************************/
//const url = 'https://api-flask-aeroporto.herokuapp.com/aeroporto/'
const url = 'http://127.0.0.1:5000/aeroporto'

// CRIA OS ELEMENTOS DA TABELA
const table = document.createElement('table');
const thead = document.createElement('thead');
const tbody = document.createElement('tbody');
const tableContainer = document.querySelector('#tabela');

//CAPTURA O ELEMENTO DE TOTAL DE AEROPORTOS
const totalRegistros = document.querySelector('#total-aeroportos');

//CABEÇALHO DA TABELA
const CABECALHO = ["ID Aeroporto", "Nome", "Codigo IATA",  "Cidade", "Codigo Pais ISO", "Latitude", "Longitude", "Altitude", "Ações"];

//CRIACAO DE UM ARRAY
let aeroportos = []

//QUANDO A PAGINA É CARREGADA, CRIA-SE A TABELA, CRIA O CABEÇALHO E INCLUI OS DADOS
window.addEventListener('load', function() {
    criarTabela();
    criarCabecalho(CABECALHO);
    carregarDados();
});

//FUNÇÃO PARA CRIAR A TABELA
function criarTabela() {
    thead.setAttribute('id', 'cabecalho-tabela');
    tbody.setAttribute('id', 'corpo-tabela');
    table.appendChild(thead);
    table.appendChild(tbody);
    tableContainer.appendChild(table);   
}

// FUNÇÃO PARA CRIAR O CABEÇALHO
function criarCabecalho(dados) {
    let linha = thead.insertRow(0);
    for (let celula = 0; celula < CABECALHO.length; celula++) {

        let th = document.createElement('th');
        th.textContent = CABECALHO[celula];
        linha.appendChild(th);
    }
    let ths = thead.children[0].childNodes;
    for (let i = 1; i < ths.length; i++) {
        
        if (i == (ths.length - 2)) {
            ths[i].setAttribute('class', 'texto-alinhado-direita');
        } else {
            ths[i].setAttribute('class', 'texto-alinhado-esquerda');
        }
    }    
}

//FUNÇÃO PARA ADICIONAR LINHA 
function adicionarLinhas(dados) {
    for (let i = 0; i < dados.length; i++) {
        let linha = tbody.insertRow();
        linha.setAttribute('id', 'aeroporto-' + dados[i].id_aeroporto)
        aeroportos.push(dados[i])

        let registro = [
            dados[i].id_aeroporto.toString().padStart(2,  0),
            dados[i].nome_aeroporto,
            dados[i].codigo_iata,
            dados[i].cidade,
            dados[i].codigo_pais_iso,
            dados[i].latitude,
            dados[i].longitude,
            dados[i].altitude
        ]

        //CRIAÇÃO DE UM CAMPO PARA OS BOTÕES
        let celulaOpcoes = document.createElement('td');
        
        /*
        //BOTÃO DE VISUALIZAR
        let botaoVer = document.createElement('button');
        botaoVer.setAttribute('type', 'button');
        botaoVer.value = dados[i].id_aeroporto;
        botaoVer.textContent = "Ver";
        botaoVer.addEventListener('click', function(){
            alert("FUNCAO DE VISUALIZAR O AEROPORTO")
        });
        celulaOpcoes.appendChild(botaoVer);
        */


        //BOTÃO EDITAR
        let botaoEditar = document.createElement('button');
        botaoEditar.setAttribute('type', 'button');
        botaoEditar.value = dados[i].id_aeroporto;
        botaoEditar.textContent = "Editar";
        botaoEditar.addEventListener('click', function(){
            //alert("COLOCAR FUNÇÃO DE EDICAO AQUI")

            if (confirm('Tem certeza que deseja editar esse Aeroporto?')) {
                editarAeroporto(dados[i].id_aeroporto);
            }
            // **************** COLOCAR FUNCAO DE EDICAO *****************
        });
        celulaOpcoes.appendChild(botaoEditar);
        
       
        //BOTÃO APAGAR
        let botaoApagar = document.createElement('button');
        botaoApagar.setAttribute('type', 'button');
        botaoApagar.value = dados[i].id_aeroporto;
        botaoApagar.textContent = "Excluir";
        botaoApagar.addEventListener('click', function(){
            
            let id_aeroporto = +this.value;
            console.log(id_aeroporto);

            if (confirm('Tem certeza que deseja excluir este item?')) {
                excluirAeroporto(id_aeroporto);
            }
        });

        celulaOpcoes.appendChild(botaoApagar);
        
        
        for (let j = 0; j < registro.length; j++) {
            
            let celula = linha.insertCell();
            celula.innerText = registro[j];
            celula.setAttribute('title', registro[j])
            
            if (j == 1) {

                celula.addEventListener('click', function() {

                    let id_aeroporto = this.parentElement.id_aeroporto.split('-')[1]
                    let aeroporto = aeroportos.find(function(d) { return d.id_aeroporto == id_aeroporto; });
        
                    sessionStorage.clear();
                    sessionStorage.setItem("id_aeroporto", aeroporto.id_aeroporto);
                    sessionStorage.setItem("nome_aeroporto", aeroporto.nome_aeroporto );
                    sessionStorage.setItem("codigo_iata", aeroporto.codigo_iata);
                    sessionStorage.setItem("cidade", aeroporto.cidade);
                    sessionStorage.setItem("codigo_pais_iso", aeroporto.codigo_pais_iso);
                    sessionStorage.setItem("latitude", aeroporto.latitude);
                    sessionStorage.setItem("longitude", aeroporto.longitude);
                    sessionStorage.setItem("altitude", aeroporto.altitude);
                    window.open("exibir.html","_self")
                });   
            }
            linha.appendChild(celula);
            linha.appendChild(celulaOpcoes)

        } // fim for j
        
    } // fim for i

    document.querySelectorAll('tr td:nth-child(3)').forEach(function(d) {
        d.setAttribute('class', 'texto-alinhado-direita');
    });    
}
//FUNÇÃO PARA CARREGAR OS DADOS NA TABELA
function carregarDados() {
    fetch(url) //, { method: 'GET', mode: 'no-cors', headers: {'Access-Control-Allow-Origin': '*'},}
        .then(function(resposta) { return resposta.json(); })
        .then(function(dados) {  
            adicionarLinhas(dados);
            atualizarBarraDeFerramentas(dados)
        }).catch(function(erro) {
            console.error("Não foi possível carregar os dados: " + erro.message);
        });
}

function atualizarBarraDeFerramentas(dados) {
    totalRegistros.textContent = dados.length
}


//FUNÇÃO PARA EXCLUIR 
function excluirAeroporto(id_aeroporto) {
    //pego o indice do aeroporto
    let indice = aeroportos.findIndex(function(d) { return d.id_aeroporto == id_aeroporto; });
    //removo
    aeroportos.splice(indice, 1)
    //deleto no tbody
    tbody.deleteRow(indice);
}

//FUNÇÃO PARA ADICIONAR NOVO AEROPORTO
var cadastrarBtn = document.getElementById('cadastrarBtn')
cadastrarBtn.addEventListener("submit", (evento) => {
    evento.preventDefault();

    //capturando dados do formulario
    var id_aeroporto = document.getElementById('id_aeroporto').value;
    console.log(document.getElementById('id_aeroporto').value);

    var nome_aeroporto = document.getElementById('nome_aeroporto').value;
    console.log(document.getElementById('nome_aeroporto').value);

    var codigo_iata = document.getElementById('codigo_iata').value
    console.log( document.getElementById('codigo_iata').value)

    var cidade = document.getElementById('cidade').value
    console.log(document.getElementById('cidade').value
    )
    var codigo_pais_iso = document.getElementById('codigo_pais_iso').value
    console.log(document.getElementById('codigo_pais_iso').value)

    var longitude = document.getElementById('longitude').value
    console.log(document.getElementById('longitude').value)

    var latitude = document.getElementById('latitude').value
    console.log(document.getElementById('latitude').value)

    var altitude = document.getElementById('altitude').value
    console.log(document.getElementById('altitude').value)

    //Criando o Json do aeroporto
    json_aeroporto = {
        id_aeroporto: id_aeroporto,
        nome_aeroporto: nome_aeroporto,
        codigo_iata: codigo_iata,
        cidade: cidade,
        codigo_pais_iso: codigo_pais_iso,
        longitude: longitude,
        latitude: latitude,
        altitude: altitude
    }

    console.log("JSON CRIADO: " + json_aeroporto)
    aeroportos.push(json_aeroporto)
    console.log("DADOS: " + aeroportos)
    //const tr = document.createElement('tr');

    /*
    let aeroporto= capturaDadosForm()
    
    capturaDadosForm()
  
    tr.innerHTML = `
        <td>${aeroporto.id_aeroporto}</td>
        <td>${aeroporto.nome_aeroporto}</td>
        <td>${aeroporto.codigo_iata}</td>
        <td>${aeroporto.cidade}</td>
        <td>${aeroporto.codigo_pais_iso}</td>
        <td>${aeroporto.longitude}</td>
        <td>${aeroporto.latitude}</td>
        <td>${aeroporto.altitude}</td>
        `;
    tbody.appendChild(tr);
    tbody.insertRow(tr)*/
})


function capturaDadosForm(){
    var formData = {};
    formData["id_aeroporto"] = document.getElementById('id_aeroporto').value;
    console.log(formData["id_aeroporto"])
    formData["nome_aeroporto"] = document.getElementById('nome_aeroporto').value
    formData["codigo_iata"] = document.getElementById('codigo_iata').value
    formData["cidade"] = document.getElementById('cidade').value
    formData["codigo_pais_iso"] = document.getElementById('codigo_pais_iso').value
    formData["longitude"] = document.getElementById('longitude').value
    formData["latitude"] = document.getElementById('latitude').value
    formData["altitude"] = document.getElementById('altitude').value
    console.log("Dados formulário: " + formData)
    return formData;
}


function resetaFormulario() {
    document.getElementById('id_aeroporto').value= "";
    document.getElementById('nome_aeroporto').value= "";
    document.getElementById('codigo_iata').value= "";
    document.getElementById('cidade').value= "";
    document.getElementById('codigo_pais_iso').value= "";
    document.getElementById('longitude').value= "";
    document.getElementById('latitude').value= "";
    document.getElementById('altitude').value= "";
}


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

/*
//FUNÇÃO QUE BUSCA AEROPORTO POR IATA
var buscaBtn = document.querySelector('#buscarBtn')
var iata_aeroporto = document.getElementById('buscarBtn').value;
buscaBtn.addEventListener('click', () => {
    alert("INSIRA A FUNÇÃO DE BUSCA");
})

//function buscaAeroportoPorIATA(iata){}
*/