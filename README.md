# loginFunction

Projeto de estudo de uma função de login em JavaScript com testes automatizados usando Mocha.

## Sobre

Implementação da função `fazerLogin` que valida credenciais de usuários, com cobertura de testes para os principais cenários de uso.

## Estrutura

```
loginFunction/
├── src/
│   └── login.js        # Função principal de login
├── test/
│   └── login.test.js   # Testes automatizados
└── package.json
```

## Funcionalidade

A função `fazerLogin(email, senha)` valida as credenciais e retorna:

- **Sucesso** — retorna `'Login realizado com sucesso'`
- **Campos vazios** — lança erro: `'Os campos Email e senha não podem estar vazios'`
- **Credenciais expiradas** — lança erro: `'Suas credenciais expiraram. Renove suas credenciais'`
- **Credenciais incorretas** — lança erro: `'Suas credenciais estão incorretas'`

## Instalação

```bash
npm install
```

## Testes

```bash
npm test
```

O relatório HTML é gerado automaticamente em `reports/resultado.html` após a execução.

Os testes cobrem 6 cenários:

1. Login bem-sucedido
2. Credencial expirada
3. Usuário não encontrado
4. Senha incorreta para usuário existente
5. Email vazio
6. Senha vazia

## Tecnologias

- Node.js (ESModules)
- [Mocha](https://mochajs.org/) — framework de testes
- [Mochawesome](https://github.com/adamgruber/mochawesome) — reporter com relatório HTML
- `node:assert` — módulo nativo de asserções
