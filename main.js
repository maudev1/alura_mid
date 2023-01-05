function tocaSom(id_elemento) {
    const elemento = document.querySelector(id_elemento);

    if (elemento != null && elemento.localName === 'audio') {
        elemento.play();
    } else {
        console.error('Elemento não encontrado ou inválido!');
    }
}

const teclas = document.querySelectorAll('.tecla');

teclas.forEach((button) => {

    let nomeTecla = button.className.split(" ")[1];

    button.onclick = function () {
        tocaSom(`#som_${nomeTecla}`);
    }

    button.onkeydown = function (e) {
        if (e.code === 'Space') {
            button.classList.add('ativa');
        }
    }

    button.onkeyup = function () {
        button.classList.remove('ativa');
    }
});

onkeydown = function (i) {
    let button = teclas[i.key];
    button.classList.add('ativa');
    let nomeTecla = button.className.split(" ")[1];
    tocaSom(`#som_${nomeTecla}`);
};

onkeyup = function (i) {
    let button = teclas[i.key];
    button.classList.remove('ativa');
}
