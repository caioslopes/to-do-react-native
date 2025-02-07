
# To-do List React Native 🗒
<div>
   <img width="200" src="https://github.com/user-attachments/assets/a5c48252-480d-4e00-8918-3b59f05a7f2c" />
</div>

Este projeto consiste em um aplicativo mobile de lista de tarefas (To-do List).

## Como executar

1. Clone o repositório

   ```bash
   git clone https://github.com/caioslopes/to-do-react-native.git
   ```
2. Baixe as dependências
   `npm install` ou `yarn install`

2. Inicie o aplicativo
   `yarn start` ou `npx expo start`

A saída do comando acima exibirá um QRCode. Para executar a aplicação, é necessário baixar e instalar o aplicativo **Expo Go** em um dispositivo móvel e escanear o QRCode gerado.

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

Durante o desenvolvimento, um dos desafios era fornecer as informações por toda a aplicação. Para solucionar este problema, foi desenvolvido um contexto e um provedor.
O provedor foi adicionado em volta da aplicação logo após o provedor da biblioteca de estilização `Gluestack UI`.

<div>
   <img width="600" src="https://github.com/user-attachments/assets/d840b815-9d34-41c4-b5e4-772600107f07" />
</div>

**Populando lista de tarefas**

**Requisição a API**

No provedor de tarefas (TodoProvider) há uma função que realiza o *fetch* à API [JSONPlaceholder](https://jsonplaceholder.typicode.com/). A função limita propositalmente a quantidade de dados, utilizando o método `slice(0, 20)` as primeiras 20 posições do retorno são selecionadas.

**Recuperando dados do AsyncStorage**

A responsabilidade de recuperar ou popular os dados da aplicação foi atribuída ao `TodoProvider`.

Quando o *provider* é montado, o `useEffect` chama a função `loadTodos()`, que recupera os dados armazenados no AsyncStorage (chamando `storedTodos()`). Caso não haja dados, será feito uma requisição para a API [JSONPlaceholder](https://jsonplaceholder.typicode.com/).
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

A cada alteração na lista de tarefas, seja adição, atualização ou remoção escrevo as atualizações no AsyncStorage utilizando a função de `storeTodos(todos)`.

## Telas

<div>
   <img width="200" src="https://github.com/user-attachments/assets/e46bf8c3-35b9-4bde-98a0-591f8bc27f31" />
   <img width="200" src="https://github.com/user-attachments/assets/bd5d79ca-9d5b-49d3-b7b5-944c7ded6c8f" />
   <img width="200" src="https://github.com/user-attachments/assets/4f5c2bb2-0f7f-4329-a17a-9fffe0e5a4cc" />
</div>

### Feedbacks (UX)

<div style="display: flex; gap: 10px; width: 100%">
   <img width="200" src="https://github.com/user-attachments/assets/19c7a247-b55b-41a8-9199-0b5dd4097dc3" />
   <img width="200" src="https://github.com/user-attachments/assets/2d1409ec-18e5-404e-98b9-a4362ca16d05" />
   <img width="200" src="https://github.com/user-attachments/assets/9a4e7ac8-67ce-4604-884a-1a57f110a58d" />
   <img width="200" src="https://github.com/user-attachments/assets/dba12c8a-dea0-492f-8600-aed19faad0b0" />
   <img width="200" src="https://github.com/user-attachments/assets/2548aaf9-5929-4190-884d-33e1348d2b29" />
   <img width="200" src="https://github.com/user-attachments/assets/7d96e1a8-e38d-4392-934a-9fe0e1841954" />
   <img width="200" src="https://github.com/user-attachments/assets/e15bc75d-801e-49f0-8b59-094d699aee08" />
   <img width="200" src="https://github.com/user-attachments/assets/3266270d-81d2-47dd-b0e0-f246e4ac35c9" />
</div>
