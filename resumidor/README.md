
# **Resumidor App - Projeto de Desenvolvimento Web**

## **Sobre o Projeto**

O **Resumidor App** é uma aplicação web que permite aos usuários inserir um texto e obter um resumo gerado automaticamente, facilitando a revisão de conteúdos importantes. O projeto é dividido em duas partes principais: **Back-End** (API para gerar resumos) e **Front-End** (Interface interativa com o usuário).

## **Objetivo**

- Desenvolver uma API que recebe um texto do usuário e gera um resumo com base nesse texto.
- Criar uma interface de usuário (front-end) que permite interagir com a API, exibir o resumo gerado e fornecer funcionalidades adicionais (como compartilhar, gerar nova versão e salvar o resumo como PDF).
- Garantir que a interface seja responsiva e funcional para dispositivos móveis (principalmente iPhone 15).

## **Estrutura do Projeto**

O projeto é composto pelas seguintes partes:

1. **Back-End (API)**
   - A API é responsável por processar o texto enviado pelo usuário e gerar um resumo utilizando um modelo de IA.
   
2. **Front-End (Interface de Usuário)**
   - A interface permite ao usuário inserir um texto, visualizar o resumo gerado e realizar algumas ações, como compartilhar o resumo, gerar uma nova versão ou salvar o resumo como PDF.

---

## **Back-End (API)**

### **Tecnologias Utilizadas**
- **Node.js**: Plataforma para a construção do servidor.
- **Express.js**: Framework para construção da API.
- **Google Generative AI**: Usado para gerar o resumo do texto com base no modelo "gemini-pro".
- **Cors**: Para permitir requisições de diferentes origens.
- **Body-Parser**: Para processar dados enviados no corpo das requisições HTTP.

### **Arquivos Principais do Back-End**
- **`app.js`**: Arquivo principal que inicializa o servidor e configura o roteamento da aplicação.
- **`routes.js`**: Define as rotas da API (ex: POST para `/resumo`).
- **`controllers/summary.controller.js`**: Controlador que gerencia a lógica de geração de resumos.
- **`models/summary.model.js`**: Lógica para interação com o modelo de IA que gera o resumo.

### **Passos para Rodar o Back-End**

1. **Instalar as dependências**:
   No terminal, navegue até a pasta do projeto e execute:
   ```bash
   npm install
   ```

2. **Configuração da API**:
   - O arquivo `config.js` (não fornecido, mas necessário para armazenar a chave de API) deve ser configurado com a chave da API do Google Generative AI:
     ```js
     module.exports = {
       API_KEY: 'SUA_CHAVE_API'
     };
     ```

3. **Rodar o servidor**:
   Após configurar a chave da API, execute o servidor com o comando:
   ```bash
   node app.js
   ```

4. **Acessar a API**:
   A API estará disponível no `http://localhost:3000`. Você pode testar a geração de resumos enviando requisições POST para o endpoint `/resumo`.

---

## **Front-End (Interface de Usuário)**

### **Tecnologias Utilizadas**
- **HTML**: Estruturação da página.
- **CSS**: Estilização do layout, com ênfase na responsividade para dispositivos móveis.
- **JavaScript**: Para tornar a página interativa, permitindo a comunicação com o back-end e implementando funcionalidades dinâmicas.

### **Funcionalidades Implementadas**
1. **Campo de Entrada de Texto**: O usuário insere um texto para ser resumido.
2. **Botão de Envio**: Envia o texto para a API e exibe o resumo gerado.
3. **Exibição do Resumo**: O resumo gerado é exibido na tela.
4. **Ações Abaixo do Resumo**:
   - **Compartilhar**: Permite ao usuário compartilhar o resumo gerado.
   - **Gerar Outra Versão**: Altera o conteúdo do resumo gerado para simular uma nova versão.
   - **Salvar em PDF**: O resumo gerado é salvo como um arquivo PDF.

### **Estrutura de Arquivos**
- **`index.html`**: Arquivo principal que contém a estrutura da página.
- **`styles.css`**: Arquivo de estilo que define o layout e a responsividade.
- **`script.js`**: Arquivo de JavaScript que implementa as funcionalidades dinâmicas e a comunicação com o back-end.

### **Passos para Rodar o Front-End**

1. **Configuração do Ambiente**:
   - Nenhuma configuração extra é necessária para o front-end, basta abrir o arquivo `index.html` em um navegador.

2. **Interação com o Back-End**:
   - O front-end faz requisições POST para `http://localhost:3000/resumo` para gerar o resumo a partir do texto fornecido.

---

## **Funcionalidades Adicionais**

### **Ações Disponíveis**
- **Compartilhar Resumo**: Utiliza a API `navigator.share()` para permitir o compartilhamento do resumo com outros aplicativos compatíveis (como WhatsApp, Telegram, etc.).
- **Gerar Outra Versão**: Simula a geração de uma nova versão do resumo, alterando o texto exibido.
- **Salvar em PDF**: Usa a biblioteca `jsPDF` para gerar um arquivo PDF com o resumo gerado e permitir o download.

### **Responsividade**
A página foi projetada para ser responsiva e otimizada para iPhone 15. Ela se adapta bem a telas menores, com ajustes no layout e tamanho dos botões.

---

## **Desafios e Considerações**

- **Integração com a API de IA**: A integração com a API de geração de resumos da Google Generative AI foi configurada, mas a chave de API precisa ser configurada corretamente.
- **Funcionalidades de Compartilhamento**: A funcionalidade de compartilhamento pode não funcionar em todos os navegadores, pois depende do suporte da API `navigator.share()`.
- **Geração de PDF**: A biblioteca `jsPDF` foi utilizada para salvar o resumo em PDF, mas ela gera um PDF simples. Melhorias podem ser feitas para customizar o layout do PDF.

---

## **Como Contribuir**

Este projeto é de código aberto! Se você deseja contribuir com melhorias ou correções, basta seguir estes passos:

1. **Fork este repositório** para sua conta.
2. **Clone seu fork** para sua máquina local.
   ```bash
   git clone https://github.com/seu-usuario/resumidor-app.git
   ```
3. Faça as alterações desejadas.
4. **Commit suas alterações** e **envie um Pull Request**.

---

## **Licença**

Este projeto está licenciado sob a Licença MIT - consulte o arquivo [LICENSE](LICENSE) para mais detalhes.
