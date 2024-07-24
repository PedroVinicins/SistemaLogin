function logar() {
    const login = document.getElementById('login').value.trim();
    const senha = document.getElementById('senha').value.trim();

    if (!login || !senha) {
        alert('Por favor, preencha ambos os campos.');
        return;
    }

    if (login === '123' && senha === '123') {
        alert('Vamos entrar!!');
        location.href = 'https://sisteamdoc.netlify.app/';
    } else {
        alert('Nome ou senha inválidos!!!');
    }
}
