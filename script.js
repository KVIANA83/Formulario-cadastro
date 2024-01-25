function validarFormulario() {
    var nome = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;
    var confirmarSenha = document.getElementById('confirmarSenha').value;
    var dataNascimento = document.getElementById('data-nascimento').value;
    var telefone = document.getElementById('telefone').value;
    var celular = document.getElementById('celular').value;

    // Verificar se todos os campos obrigatórios estão preenchidos
    if (nome === '' || email === '' || senha === '' || confirmarSenha === '' || dataNascimento === '' || telefone === '' || celular === '') {
        alert('Por favor, preencha todos os campos obrigatórios.');
        return false;
    }

    // Validar formato da data de nascimento (DD/MM/AAAA)
    var regexDataNascimento = /^\d{2}\/\d{2}\/\d{4}$/;
    if (!regexDataNascimento.test(dataNascimento)) {
        alert('Formato inválido para a data de nascimento. Use DD/MM/AAAA.');
        return false;
    }

    // Validar formato do número de telefone (XX) XXXX-XXXX
    var regexTelefone = /^\(\d{2}\) \d{4}-\d{4}$/;
    if (!regexTelefone.test(telefone)) {
        alert('Formato inválido para o número de telefone. Use (XX) XXXX-XXXX.');
        return false;
    }

    // Validar formato do número de celular (XX) 9XXXX-XXXX
    var regexCelular = /^\(\d{2}\) 9\d{4}-\d{4}$/;
    if (!regexCelular.test(celular)) {
        alert('Formato inválido para o número de celular. Use (XX) 9XXXX-XXXX.');
        return false;
    }

    // Validar formato do e-mail
    var regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexEmail.test(email)) {
        alert('Formato inválido para o endereço de e-mail.');
        return false;
    }

    // Validar se as senhas coincidem
    if (senha !== confirmarSenha) {
        alert('As senhas não coincidem.');
        return false;
    }

    alert('Cadastro realizado com sucesso!');
    return true;
}


