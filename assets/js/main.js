console.log('Estamos conectados al Javascript');

let colorActivo = true;

function cambiarFondo() {
    if (colorActivo) {
        document.body.style.backgroundColor = '#558b6e';
        colorActivo = false;
    } else {
        document.body.style.backgroundColor = '#ffffff';
        colorActivo = true;
    }
};

function resalta() {
    let texto = document.getElementById('nombre');
    texto.style.fontSize = "64px";
}

function achica() {
    let texto = document.getElementById('nombre');
    texto.style.fontSize = "36px";
}