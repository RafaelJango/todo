# Todo App

Este é um projeto de aplicativo de lista de tarefas (“Todo List”) desenvolvido em **React Native** utilizando **Expo**. Este projeto faz parte de um desafio prático do curso de **React Native** da **Rocketseat** e tem como objetivo consolidar os conceitos aprendidos, como componentes, estado, props e estilização.

---

## **Funcionalidades**

- Adicionar novas tarefas.
- Marcar tarefas como concluídas.
- Excluir tarefas da lista.
- Exibir o número total de tarefas criadas e concluídas.
- Interface responsiva e amigável, com mensagens de feedback para o usuário.

---

## **Tecnologias Utilizadas**

- **React Native**: Biblioteca para desenvolvimento de aplicativos móveis.
- **Expo**: Ferramenta para facilitar o desenvolvimento com React Native.
- **TypeScript**: Superset do JavaScript para tipagem estática.
- **React Native Vector Icons**: Biblioteca de ícones para React Native.
- **Google Fonts (Inter)**: Tipografia utilizada no aplicativo.

---

## **Instalação e Execução**

Siga as etapas abaixo para clonar e executar o projeto em sua máquina local:

### **1. Clone o repositório**
```bash
git clone https://github.com/seu-usuario/todo-list-app.git
```

### **2. Acesse o diretório do projeto**
```bash
cd todo-list-app
```

### **3. Instale as dependências**
Certifique-se de que o **Node.js** e o **Expo CLI** estão instalados em sua máquina.

```bash
yarn install
# ou
npm install
```

### **4. Execute o projeto**
Inicie o servidor de desenvolvimento do Expo.

```bash
npx expo start
```

### **5. Visualize no dispositivo ou emulador**
- Para visualizar no seu dispositivo, baixe o aplicativo Expo Go e escaneie o QR Code gerado.
- Para emuladores, certifique-se de que um emulador Android/iOS esteja configurado corretamente.

---

## **Estrutura de Pastas**

A estrutura do projeto segue a organização de componentes e telas:

```
├── components
│   ├── Header
│   ├── Loading
│   ├── TaskInput
│   └── TaskList
├── screens
│   └── Home
├── styles
│   ├── theme.ts
│   └── global.ts
├── App.tsx
```

- **components**: Contém os componentes reutilizáveis do projeto.
- **screens**: Contém as telas do aplicativo.
- **styles**: Contém os arquivos de estilização globais e temáticos.

---

## **Aprendizados**

Durante o desenvolvimento deste projeto, foram aplicados os seguintes conceitos:

- Criação de componentes reutilizáveis.
- Gerenciamento de estado com hooks como `useState`.
- Passagem de informações entre componentes utilizando **props**.
- Renderização de listas com `FlatList`.
- Manipulação de eventos de clique e interação com componentes.
- Estilização com **StyleSheet** e organização de cores temáticas.

---



## **Screenshots**

<div align="center">
  <img src="https://github.com/user-attachments/assets/4ea9e676-1dca-4739-a2d9-014619315a71" width="200px" />
  <img src="https://github.com/user-attachments/assets/cdbe020c-1d4c-4c45-bc3a-590750bb77b5" width="200px" />
  <img src="https://github.com/user-attachments/assets/656e68c5-f782-4a47-82c7-2c1154a573e7" width="200px" />
  <img src="https://github.com/user-attachments/assets/d23c7b2d-c7fd-4a97-b588-17f7a3dc524c" width="200px" />
</div>

---

Desenvolvido com 💜 durante o desafio prático do curso de React Native da Rocketseat! 🚀
