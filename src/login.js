const usuarios = [
  { id: 1, nome: 'Luiz', email: 'luiz@email.com', senha: 'luiz123', expirado: false },
  { id: 2, nome: 'Luizinho', email: 'luizinho@email.com', senha: 'luizinho456', expirado: false },
  { id: 3, nome: 'Luizao', email: 'luizao@email.com', senha: 'luizao789', expirado: true },
];

function fazerLogin(email, senha) {
  
  // Validação para campos vazios
  if (email === '' || senha === '') {
    throw new Error('Os campos Email e senha não podem estar vazios');
  }

  for (let i = 0; i < usuarios.length; i++) {
    const usuario = usuarios[i];

    if (usuario.email === email && usuario.senha === senha) {
      // A função deve dizer que as credenciais expiraram caso expirado for true
      if (usuario.expirado === true) {
        throw new Error('Suas credenciais expiraram. Renove suas credenciais');
      }
      return 'Login realizado com sucesso';
    }
  }

  throw new Error('Suas credenciais estão incorretas');
}

export { fazerLogin, usuarios };
