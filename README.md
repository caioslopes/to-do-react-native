
# To-do List React Native 🗒

Este projeto consiste em um aplicativo mobile de lista de tarefas (To-do List).

## Como executar

1. Clone o repositório

   ```bash
   git clone https://github.com/caioslopes/to-do-react-native.git
   ```
2. Baixe as dependências
   ```bash
   npm install
   ```
   ou

   ```bash
   yarn install
   ```

2. Inicie o aplicativo

   ```bash
    yarn start
   ```
   ou
   ```bash
    npx expo start
   ```

A saída do comando acima exibirá um QRCode no qual você poderá executar o aplicativo em um dispositivo móvel, basta ter o aplicativo **Expo Go** instalado no dispositivo móvel.

## Requisitos📝
### Principais
- **Adicionar tarefas:** Um campo de texto para inserir uma nova tarefa e um botão para adicionar à lista.
- **Exibir tarefas:** Uma lista dinâmica que mostra as tarefas adicionadas.
- **Marcar como concluída:** Opção para marcar/desmarcar uma tarefa como concluída.
- **Remover tarefas:** Botão para excluir uma tarefa.
- **Persistência de dados:** Salvar e carregar as tarefas usando AsyncStorage.
- **Estilização básica:** Interface agradável e funcional.
- **Consumo de API:** Integrar com uma API pública como a [JSONPlaceholder](https://jsonplaceholder.typicode.com/) para exibir uma lista inicial de tarefas
### Extras
- **Selecionar a data para executar a tarefa:** Um campo de data para selecionar a data em que a tarefa deverá ser executada.
- **Filtrar tarefas por data:** Opção de filtrar tarefas por datas.
## Desenvolvimento 💻

### Tecnologias & Ferramentas
- **React Native**: Biblioteca para desenvolvimento nativo utilizando React;
- **Expo**: Framework que engloba diversas ferramentas nativas e React Native;
- **Gluestack UI**: Biblioteca de componentes;
- **Nativewind**: Biblioteca de estilização baseada no tailwind;

### Armazenamento 🗄
Para efetuar o armazenamento das informações, foi utilizado o AsyncStorage.

**Funções AsyncStorage**
- **storeTodos(todos):** Armazena a lista de tarefas;
- **storedTodos():** Recupera a lista de tarefas.

**To-do Context & To-do Provider**

Um dos desafios era poder fornecer as informações por toda a aplicação, para solucionar este problema, foi desenvolvido um contexto e um provedor.
Este provedor foi adicionado envolta da aplicação, logo após o provedor da biblioteca de estilização `Gluestack UI`.

**Populando lista de tarefas**

**Requisição a API**

No provedor de tarefas (TodoProvider) possuo uma função que realiza o *fetch*   a API [JSONPlaceholder](https://jsonplaceholder.typicode.com/), a função limita propositalmente a quantidade de dados. Utilizando a método `slice(0, 20)` seleciono as primeiras 20 posições do retorno.

**Recuperando dados do AsyncStorage**

Atribuí a responsabilidade de recuperar ou popular os dados da aplicação ao `TodoProvider`.

Quando o *provider* for montado, o `useEffect` irá chamar a função `loadTodos()` que recupera os dados armazenados no AsyncStorage (chamando `storedTodos()`), caso não haja dados, será feito uma requisição para a API [JSONPlaceholder](https://jsonplaceholder.typicode.com/).
Em ambos os casos, os dados recuperados/retornados são atribuídos ao estado `[todos, setTodos]` presente no *provider*.

**Manipulando dados (DAL)**

Com o contexto criado, o passo seguinte foi implementar uma camada para acessar e manipular os dados (DAL). Foi desenvolvido um hook chamado, `useTodos` que centraliza as operações para manipular a lista de tarefas.

Funções de repositório (*Repositories*)
- **add(todo):** Adicionar uma tarefa;
- **remove(id):** Remover uma tarefa específica;
- **update(id, todo):** Atualizar uma tarefa específica;
- **findAll(query?):** Buscar todas tarefas, sendo possível passar filtros.

O hook encapsula a lista de tarefas, fornecendo apenas os métodos que atuaram sobre esses dados.

**Salvando no AsyncStorage**

Cada modificação na lista de tarefas a nova coleção de dados é armazenada no AsyncStorage utilizando a função `storeTodos(todos)`.

## Telas

<div style="display: flex; gap: 10px; width: 100%">
   <img width="200" src="https://github.com/user-attachments/assets/fb2cb5b5-e57b-4e9e-b804-f2f100cde967" />
   <img width="200" src="https://github.com/user-attachments/assets/484b8711-bed3-4ad1-a4af-c6c952039f81" />
   <img width="200" src="https://github.com/user-attachments/assets/9df185f0-1661-45df-b9cd-062720571a6a" />
   <img width="200" src="https://github.com/user-attachments/assets/efc7b9d1-58ac-4a68-aeea-7f66232e381d" />
   <img width="200" src="https://github.com/user-attachments/assets/344113b8-8aef-41b6-b516-fe57c19fd700"/>
</div>

### Feedbacks (UX)

<div style="display: flex; gap: 10px; width: 100%">
   <img width="200" src="https://github.com/user-attachments/assets/bcf1de6b-eb21-4e87-9afa-0f35a1ad3b1c" />
   <img width="200" src="https://github.com/user-attachments/assets/d5d3db47-d437-43e0-b9e8-2cc4479fd614" />
   <img width="200" src="https://github.com/user-attachments/assets/eafda51a-b89a-4d74-be7e-d39290176650" />
   <img width="200" src="https://github.com/user-attachments/assets/fc561dc5-5c91-44c6-902b-6750c8dd6a12" />
   <img width="200" src="https://github.com/user-attachments/assets/2092aa0a-4732-4bd7-9139-fefe9776b57a" />
   <img width="200" src="https://github.com/user-attachments/assets/f45ca015-4901-43f1-8d8b-0034394c355a" />
</div>



