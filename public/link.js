function abrirHTML(pagina) {

    if (pagina === 'cadastra') {
        window.open('http://localhost:3000/home/cadastra.html', '_blank');
    }

    if(pagina === 'usuariotest'){
        location.href = 'https://sisteamdoc.netlify.app/';
    }
};