const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");

// La letra "e" es convertida para "ekmlj"
// La letra "i" es convertida para "ipxba"
// La letra "a" es convertida para "alzzm"
// La letra "o" es convertida para "oeuqq"
// La letra "u" es convertida para "ulklb"

function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
}

function encriptar(stringEncriptado){
    let matrizCodigo = [["e", "kmlj"], ["i", "pxvk"], ["a", "lzzm"], ["o", "xhrq"], ["u", "vklb"]];
    stringEncriptado = stringEncriptado.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptado.includes(matrizCodigo[i][0])){
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0] , matrizCodigo[i][1])
        }
    }
    return stringEncriptado
}

function btnDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
}

function desencriptar(stringDesencriptado){
    let matrizCodigo = [["e", "kmlj"], ["i", "pxvk"], ["a", "lzzm"], ["o", "xhrq"], ["u", "vklb"]];
    stringDesencriptado = stringDesencriptado.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptado.includes(matrizCodigo[i][1])){
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1] , matrizCodigo[i][0])
        }
    }
    return stringDesencriptado
}

function btnCopiar(){
    let input = document.getElementById("mensaje").value;
    navigator.clipboard.writeText(input).then(() => {
        alert("Texto copiado al portapapeles");
    });
}