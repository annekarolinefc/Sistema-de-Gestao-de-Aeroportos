# Sistema de Gestão de Aeroportos

![image](https://img.shields.io/badge/license-MIT-blue)

![Capa do Projeto](/images/novo-front.jpg)

# Sobre o Projeto

Esse projeto é referente a um Sistema de Gerenciamento de Aeroportos. Foi criado uma API REST que fornece os dados no formato json e, posteriormente, essa API foi consumida por uma aplicação WEB para gerenciar o cadastro de aeroportos espalhados pelo mundo.

## API REST
Os endpoints da API REST, assim como as principais caracteristicas, estão apresentados na tabela abaixo:
| HTTP | URL | Descrição |
|---|---|---|
| GET | /api/v1/aeroportos | Obter todos os aeroportos. |
| GET | /api/v1/aeroportos/{iata} | Obter um aeroporto pelo código aeroportuário IATA.|
| POST | /api/v1/aeroportos | Adicionar um novo aeroporto. |
| POST | /api/v1/aeroportos/{iata} | Atualizar um aeroporto existente. |
| DELETE | /api/v1/aeroportos/{iata} | Excluir um aeroporto. |

## Dicionário de Dados
A próxima tabela é referente a um dicionário de dados, onde está apresentado as definições e representaçõe dos itens de dados que serão processados pela aplicação.
As informações de metadados apresentados neste dicionário de dados incluem o nome do campo, o tipo de dados, se o campo pode estar vazio ou não, ou seja, se ele é obrigatório ou não, os valores máximo e mínimo aceitos, o valor padrão inicial daquele determinado campo, bem como, informações adicionais na coluna observação.

| Campo | Tipo | Descrição |
|---|---|---|
| id_aeroporto | Inteiro | Chave primária que identifica de maneira única cada aeroporto. |
| nome_aeroporto | Texto | Nome do aeroporto. |
| codigo_iata | Texto | O código aeroportuário IATA é uma sigla composta por três letras, utilizada para designar os aeroportos em todo o mundo. |
| cidade | Texto | Nome da cidade onde está localizado o aeroporto. |
| codigo_pais_iso | Texto | Código (ISO 3166-1) para nomes de países que utiliza um sistema de 2 letras (alfa-2), por exemplo: Brasil (BR), Estados Unidos (US) |
| latitude | Real | Um número real representando a latitude. |
| longitude | Real| Um número real representando a longitude. |
| altitude | Real | Um número real representando a altitude. |

## Tecnologias

A API REST foi criada utilizando a linguagem de programação Python e o framework Flask para dar suporte ao padrão MVC.


# Índice/Sumário

* [Sobre](#sobre-o-projeto)
* [Sumário](#índice/sumário)
* [Requisitos Funcionais](#requisitos-funcionais)
* [Tecnologias Usadas](#tecnologias-usadas)
* [Contribuição](#contribuição)
* [Autores](#autores)
* [Licença](#licença)
* [Agradecimentos](#agradecimentos)


# Requisitos Funcionais 

- [ ] Visualizar Aeroportos
- [ ] Cadastrar Novo Aeroporto
- [ ] Visualizar Aeroporto por IATA
- [ ] Editar Aeroporto 
- [ ] Remover Aeroporto


# Tecnologias Usadas

- [![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)]()
- [![Flask](https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white)]()
- [![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)]()
- [![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)]()
- [![Javascript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)]()


# Contribuição

Leia o arquivo [CONTRIBUTING.md](CONTRIBUTING.md) para saber detalhes sobre o nosso código de conduta e o processo de envio de solicitações *pull* (*Pull Request*) para nós.

# Autores

<table>
  <tbody>
    <tr>
    <td align="center">
	  	<a href="https://github.com/annekarolinefc">
			<sub><b>Anne K. F. Carmo</b></sub>
		</a>
		<br />
		<a href="https://github.com/annekarolinefc" title="Code">💻</a>
	</td>
	<td align="center">
	  	<a href="LINK-DO-GIT-AQUI">
			<sub><b>Anderson Paulo</b></sub>
		</a>
		<br />
		<a href="LINK-DO-GIT-AQUI" title="Code">💻</a>
	</td>
	<td align="center">
	  	<a href="LINK-DO-GIT-AQUI">
			<sub><b>Daniel Augusto</b></sub>
		</a>
		<br />
		<a href="LINK-DO-GIT-AQUI" title="Code">💻</a>
	</td>
	<td align="center">
	  	<a href="LINK-DO-GIT-AQUI">
			<sub><b>Messias Reis</b></sub>
		</a>
		<br />
		<a href="LINK-DO-GIT-AQUI" title="Code">💻</a>
	</td>
	<td align="center">
	  	<a href="LINK-DO-GIT-AQUI">
			<sub><b>Rafael Dias</b></sub>
		</a>
		<br />
		<a href="LINK-DO-GIT-AQUI" title="Code">💻</a>
	</td>
    </tr>
	</tbody>
<table>

<!--
<table>
  <tbody>
    <tr>
    <td align="center">
	  	<a href="https://github.com/annekarolinefc">
			<img src="images/ft_Anne.jpg" width="100px;" alt="Anne Karoline"/>
			<br />
			<sub><b>Anne K. F. Carmo</b></sub>
		</a>
		<br />
		<a href="https://github.com/annekarolinefc" title="Code">💻</a>
	</td>
	<td align="center">
	  	<a href="LINK-DO-GIT-AQUI">
			<img src="FOTO-AQUI" width="100px;" alt="NOME-AQUI"/>
			<br />
			<sub><b>NOMEAQUI</b></sub>
		</a>
		<br />
		<a href="LINK-DO-GIT-AQUI" title="Code">💻</a>
	</td>
	<td align="center">
	  	<a href="LINK-DO-GIT-AQUI">
			<img src="FOTO-AQUI" width="100px;" alt="NOME-AQUI"/>
			<br />
			<sub><b>NOMEAQUI</b></sub>
		</a>
		<br />
		<a href="LINK-DO-GIT-AQUI" title="Code">💻</a>
	</td>
	<td align="center">
	  	<a href="LINK-DO-GIT-AQUI">
			<img src="FOTO-AQUI" width="100px;" alt="NOME-AQUI"/>
			<br />
			<sub><b>NOMEAQUI</b></sub>
		</a>
		<br />
		<a href="LINK-DO-GIT-AQUI" title="Code">💻</a>
	</td>
	<td align="center">
	  	<a href="LINK-DO-GIT-AQUI">
			<img src="FOTO-AQUI" width="100px;" alt="NOME-AQUI"/>
			<br />
			<sub><b>NOMEAQUI</b></sub>
		</a>
		<br />
		<a href="LINK-DO-GIT-AQUI" title="Code">💻</a>
	</td>
    </tr>
	</tbody>
<table>
-->

# Licença

Este projeto está licenciado sob a Licença MIT,  consulte o arquivo [LICENSE.md](LICENSE.md) para mais detalhes.
	


**Trabalhando com o json-server:** json-server --watch database.json