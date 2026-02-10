console.log('Estamos conectados al Javascript');

/** Función para cambiar el fondo de la página */
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
/** Función para agrandar el tamaño del texto */
function resalta() {
    let texto = document.getElementById('nombre');
    texto.style.fontSize = "64px";
}
/** Función para achicar el tamaño del texto */
function achica() {
    let texto = document.getElementById('nombre');
    texto.style.fontSize = "36px";
}

