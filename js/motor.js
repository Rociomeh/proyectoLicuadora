var estadoLicuadora = "apagada"; //para asignar valor se utiliza solo un signo igual
var sonidoLicuadora = document.getElementById("blender-sound");
var botonLicuadora = document.getElementById("blender-button-sound");
var licuadora = document.getElementById("blender");

function controlarLicuadora() {
    if (estadoLicuadora == "apagada") { //para preguntar el estado de algo se utilizan dos signos igual
        estadoLicuadora = "encendido";
        haceBrrBrr();
        licuadora.classList.add("active");
        console.log("prendido");
    } else { //si el estado es diferente al del principio
        estadoLicuadora = "apagado"
        haceBrrBrr();
        licuadora.classList.remove("active");
        console.log("apagado");
    }
}

function haceBrrBrr(){
    if( sonidoLicuadora.paused ) {
        botonLicuadora.play();
        sonidoLicuadora.play();
    } else {
        botonLicuadora.play();
        sonidoLicuadora.pause();
        sonidoLicuadora.currentTime = 0;
    }
}