# Gitbook

## O Projeto

Esse projeto foi pensado e desenvolvido durante o curso de ReactJs da DIO, mas com implementações e ideias minhas de fazer uma réplica da página oficial do Facebook e trazer de maneira mais divertida os conteúdos da API oficial do Github.

Esse projeto foi desenvolvido apenas para fins didáticos, não possuindo nenhuma intenção de uso além desse fim.

## Ferramentas

Para a confecção desse projeto, utilizei a linguagem de programação **Typescript** que torna o JavaScript uma linguagem mais segura através de novos elementos e da typagem dinâmica dos elementos.

Utilizei também a lib **ReactJs** com **Styled-Components** que tornam a programação em forma de elementos muito mais performática, dadas as inúmeras possibilidades de passagem de propriedas e argumentos dentro dos componentes criados.
 - Dentro do ReactJs utilizei tambem o hook **useContext** para fazer um provider com todas as informações do usuário, melhorando a performance e diminuindo as prop-drillings.

Outra ferramenta utilizada foi o localstorage do navegador para manter as informações de login, para evitar a necessidade de estar sempre logando na página. Apenas no momento do Logout esse registro do localstorage é desfeito, havendo assim a necessidade do login novamente.

Para entrar na plataforma é necessário digitar um usuário válido do Github, pois há uma etapa de verificação.

A aplicação é totalmente responsiva!! Faça um teste também em seu celular!!

## Screen Shots
<p align="center">
  <img width="700px" height="450px" src="https://github.com/ASOCezar/gitbook/blob/main/public/screenshots/Screenshot%20from%202021-10-19%2021-58-58.png" />
  
  <img width="700px" height="450px" src="https://github.com/ASOCezar/gitbook/blob/main/public/screenshots/Screenshot%20from%202021-10-19%2021-59-10.png" />
  
  <img width="700px" height="450px" src="https://github.com/ASOCezar/gitbook/blob/main/public/screenshots/Screenshot%20from%202021-10-19%2021-59-22.png" />
  
  <img width="700px" height="450px" src="https://github.com/ASOCezar/gitbook/blob/main/public/screenshots/Screenshot%20from%202021-10-19%2021-59-40.png" />
</p>

---------

## Como compilar e rodar o projeto

- Primeiramente, é necessário fazer um clone dessa fork para a máquina. Para isso, se possuir o git instalado, é possível utilizar o terminal com o comando:

```Bash
git clone https://github.com/ASOCezar/gitbook.git
```

- Depois de baixado, na pasta master (geralmente a pasta raíz) do projeto deve ser feita a instalação dos pacotes utilizados no projeto, de acordo com seu gerenciador de pacotes, utilize:

```Bash
npm install
```

- Ao final da instalação dos pacotes, pode ser utilizado o comando:

```Bash
npm start
```

## Deploy

[Vercel](https://gitbook.asocezar.online)
