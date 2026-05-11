import assert from 'node:assert';
import { fazerLogin } from '../src/login.js';

describe('fazerLogin', () => {
  it('1) Sucesso: deve retornar mensagem de login bem-sucedido', () => {

    // Arrange
    const email = 'luiz@email.com';
    const senha = 'luiz123';

    // Act
    const resultado = fazerLogin(email, senha);

    // Assert
    assert.strictEqual(resultado, 'Login realizado com sucesso');
  });

  it('2) Credencial expirada: deve informar que as credenciais expiraram', () => {

    // Arrange
    const email = 'luizao@email.com';
    const senha = 'luizao789';

    // Act
    const acao = () => fazerLogin(email, senha);

    // Assert
    assert.throws(
      acao,
      (erro) => erro instanceof Error && erro.message === 'Suas credenciais expiraram. Renove suas credenciais'
    );
  });

  it('3) Usuário não encontrado: deve retornar credenciais incorretas', () => {

    // Arrange
    const email = 'inexistente@email.com';
    const senha = 'qualquerSenha';

    // Act
    const acao = () => fazerLogin(email, senha);

    // Assert
    assert.throws(
      acao,
      (erro) => erro instanceof Error && erro.message === 'Suas credenciais estão incorretas'
    );
  });

  it('4) Senha incorreta: deve retornar credenciais incorretas para usuário existente', () => {
    
    // Arrange
    const email = 'luizinho@email.com';
    const senha = 'senhaErrada';

    // Act
    const acao = () => fazerLogin(email, senha);

    // Assert
    assert.throws(
      acao,
      (erro) => erro instanceof Error && erro.message === 'Suas credenciais estão incorretas'
    );
  });

  it('5) Email vazio: deve lançar erro de campos vazios', () => {

    // Arrange
    const email = '';
    const senha = 'luiz123';

    // Act
    const acao = () => fazerLogin(email, senha);

    // Assert
    assert.throws(
      acao,
      (erro) => erro instanceof Error && erro.message === 'Os campos Email e senha não podem estar vazios'
    );
  });

  it('6) Senha vazia: deve lançar erro de campos vazios', () => {
    
    // Arrange
    const email = 'luiz@email.com';
    const senha = '';

    // Act
    const acao = () => fazerLogin(email, senha);

    // Assert
    assert.throws(
      acao,
      (erro) => erro instanceof Error && erro.message === 'Os campos Email e senha não podem estar vazios'
    );
  });
});
