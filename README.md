# loginFunction

Projeto simples em JavaScript que simula autenticação de usuários e valida diferentes cenários de login com testes automatizados.

## Visão geral

Este projeto contém uma função chamada fazerLogin que recebe email e senha, busca o usuário em memória e retorna ou lança mensagens de acordo com o resultado da validação.

Os usuários possuem os campos:

- id
- nome
- email
- senha
- expirado

## Comportamento da função

A função trata os seguintes casos:

- Login válido: retorna Login realizado com sucesso
- Credencial expirada: lança erro com Suas credenciais expiraram. Renove suas credenciais
- Email inexistente: lança erro com Suas credenciais estão incorretas
- Senha incorreta: lança erro com Suas credenciais estão incorretas
- Campos vazios: lança erro com Os campos Email e senha não podem estar vazios

## Exemplo de uso

```js
import { fazerLogin } from './src/login.js';

const resultado = fazerLogin('luiz@email.com', 'luiz123');
console.log(resultado); // Login realizado com sucesso
```

## Estrutura do projeto

```text
loginFunction/
├── src/
│   └── login.js
├── test/
│   └── login.test.js
├── reports/
│   ├── resultado.json
│   └── resultado.html
├── package.json
└── README.md
```

## Como executar

```bash
npm install
npm test
```

Após rodar os testes, o relatório é gerado em:

- reports/resultado.json
- reports/resultado.html

## Cenários cobertos em teste

1. Sucesso
2. Credencial expirada
3. Usuário não encontrado
4. Senha incorreta para usuário existente
5. Email vazio
6. Senha vazia

## Tecnologias usadas

- Node.js (ES Modules)
- Mocha
- Mochawesome
- node:assert
