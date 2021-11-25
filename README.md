# Live Coding - Pulsus

Esse repositório é o seu ponto de partida e contém tudo que é necessário para começar a desenvolver o desafio.


## 1. INTRODUÇÃO

Pair programming (programação em pares) é uma prática adotada por muitas equipes de desenvolvimento de software visando melhorar a qualidade do código e a comunicação entre a equipe.

Portanto, o objetivo dessa etapa é simular esse cenário para que você possa demonstrar os seus conhecimentos através de uma pequena implementação em tempo real utilizando a biblioteca de construção de interfaces ReactJS.

Incentivamos fortemente que o candidato desenvolva sua capacidade de comunicação com o colega que estará avaliando, além de mostrar as suas habilidades técnicas.

## 2. O PROJETO

O projeto consiste em criar uma interface utilizando ReactJS que irá consumir uma API pública de filmes para realizar a busca de títulos de acordo com um parâmetro de texto informado pelo usuário do sistema.


## 3. REQUISITOS MÍNIMOS


- Realizar buscas através da API de filmes utilizando um parâmetro de texto informado pelo usuário;
- Exibir quantidade de itens encontrados:
  - Caso a quantidade de itens for maior que 0 exibir o texto: `10 itens encontrados`
  - Caso a quantidade de itens for igual a 0 exibir o texto: `Nenhum item foi encontrado com o texto informado`
- Exibir listagem dos filmes contendo:
  - Poster do filme;
  - Título do filme.


## 4. REQUISITOS BÔNUS


- Ao clicar em um filme redirecionar para uma página contendo mais detalhes do título selecionado;
- Link para voltar para a página de busca de filmes;
- Dropdown para seleção do tipo de conteúdo a ser buscado [filmes, series, episódios].


## 5. DICAS E INSTRUÇÕES


- O layout para exibição dos filmes é de livre criatividade do candidato;
- O modo como o usuário irá informar o parâmetro para busca através da API é de escolha do candidato;
- Para a estilização dos componentes utilizar a biblioteca [Styled Components](https://styled-components.com/);
- Para o roteamento das páginas utilizar [React Router](https://v5.reactrouter.com/web/guides/quick-start);
- Para realizar as requisições HTTP utilizar [Axios](https://axios-http.com/docs/intro).


## 6. API DE BUSCA DE FILMES

- Método HTTP: GET
- URL: https://www.omdbapi.com
- Parâmetros da busca:
  - s - texto de busca dos filmes
  - type - tipo do título buscado [movie, series, episode]
  - apikey - token de acesso `cfbeb247`

Exemplo: `https://www.omdbapi.com?s=avengers&type=movie&apikey=cfbeb247`

## 7. EXECUÇÃO E INSTALAÇÃO DO PROJETO

- Instalação de dependências: `yarn install` ou `npm install`
- Execução: `yarn start` ou `npm run start`
