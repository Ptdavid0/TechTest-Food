# Aiqfome

## Descrição

Projeto desenvolvido para o desafio da Aiqfome.

## Tecnologias

- [Vite](https://vitejs.dev/)
- [React](https://pt-br.react.dev/)
- [Typescript](https://www.typescriptlang.org/)
- [React Router](https://reactrouter.com/)
- [Vite Plugin SVGR](https://github.com/pd4d10/vite-plugin-svgr)
- [Styled Components](https://styled-components.com/)
- [Vite Tsconfig Paths](https://www.npmjs.com/package/vite-tsconfig-paths)

## Como rodar

- Clone o repositório
- Instale as dependências com `yarn`
- Inicie o servidor com `yarn dev`
- Acesse `http://localhost:3000`

## Estrutura de pastas

Estrutura principal de pastas do projeto:

```
	@assets -> Arquivos estáticos como imagens e icones
	@components -> Componentes reutilizáveis e customizados
	@contexts -> Contextos da aplicação, utilizado nesse projeto para gerenciar o ticket
	@mocks -> Mocks de dados, utilizado nesse projeto para simular uma API
	@routes -> Rotas da aplicação, utilizado nesse projeto para gerenciar a rota da tela de item
	@screens -> Telas da aplicação, utilizado nesse projeto para gerenciar a tela de item
	@theme -> Temas da aplicação, como cores e fontes
	@types -> Tipos da aplicação
	@utils -> Funções utilitárias, utilizadas nesse projeto para formatar valores e funções de estilo

```

## FAQ

- Qual foi seu ponto focal ao desenvolver o projeto?

  R: Ao lidar com as sections do ticket, o foco foi em criar um código que fosse capaz de lidar com qualquer quantidade de sections e options, dentro da secção, sem precisar adicionar mais código.

  Inicialmente, foram aplicados 3 tipos de sections: Checkbox, Radio Button e Counter. Mas, se houver a necessidade de adicionar mais tipos, basta:

  Criar um componente customizado(caso desejado):

  - `src/components`

  Adicionar suporte a ele em:

  - `src/screens/ItemScreen/ItemScreen.tsx`
  - `src/screens/ItemScreen/components/OptionComponent.tsx`
  - `src/contexts/TicketContext/TicketContext.tsx`

  Caso tenha um comportamento de nome e preço diferente dos atuais, modifique os arquivos:

  - `src/screens/ItemScreen/components/OptionNameComponent/OptionNameComponent.tsx`
  - `src/screens/ItemScreen/components/OptionPriceComponent/OptionPriceComponent.tsx`

- Porque usar um Mock para os dados?

  R: Como não há uma API para consumir os dados, foi utilizado um Mock para simular o consumo de uma API. Mas poderia ser utilizado o [Json Server](https://www.npmjs.com/package/json-server) para simular uma API.

- Porque usar Component, Screen e outros no nome dos componentes?

  R: Para facilitar a identificação de onde o componente está sendo utilizado, além de facilitar a busca por componentes.

- Porque não foi utilizado o [Create React App](https://create-react-app.dev/) e sim o [Vite](https://vitejs.dev/)?

  R: O Vite é um bundler mais rápido que o CRA, além de ser mais simples de configurar. Mas, as SVGs deram um pouco de trabalho para serem configuradas. Por isso, foi utilizado o [Vite Plugin SVGR](https://github.com/pd4d10/vite-plugin-svgr)

- Porque adicionar rotas se só há uma tela?

  R: Para que o projeto possa ser escalável, foi adicionado o React Router.

- Porque a estrutura de pastas está assim?

  R: A estrutura de pastas foi pensada para que o projeto possa ser escalável. Por exemplo, se houver a necessidade de adicionar mais telas, basta adicionar uma pasta dentro de screens e adicionar a rota no arquivo Router.tsx.

## Autor

- [Pedro Antônio David Jorge Gomes Pereira](https://www.linkedin.com/in/pedro-antonio-david-914aa1129/)
