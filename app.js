function CuadroDeTexto() {
    //Ingresamos el mensajes del texto
    var texto = prompt("¿Cuál es el texto que deseas encriptar?", "");
    //Detectamos si el usuario ingreso un valor
    if (texto != "" && texto != null) {
    //Preguntamos el lenguaje del encriptamiento
    var codigo = parseInt(prompt("Escriba el numero del lenguaje al que desea encriptar su texto \n 1= Base64  2= ROT13  3= Hexadecimal  4= Binario", ""),0);
        switch (codigo) {
            case 1:
                //En caso de seleccionar la opcion 1 llama a una funcion
                var encodedString = btoa(texto);
                alert("El texto " + texto + " en BASE64 es '" + encodedString + "'");
                break;

            case 2:
                //En caso de seleccionar la opcion 2 llama a una funcion proporcionada de internet, se almacena en una variable para ser luego manejado en la impresion
                var encodedString = texto.replace(/[a-zA-Z]/g, function (c) { return String.fromCharCode((c <= "Z" ? 90 : 122) >= (c = c.charCodeAt(0) + 13) ? c : c - 26); });
                alert("El texto " + texto + " en ROT13 es '" + encodedString + "'");
                break;

            case 3:
                //En caso de seleccionar la opcion 3 llama a una funcion proporcionada de internet
                var encodedString = ascii_to_hexa(texto);
                alert("El texto " + texto + " en HEXADECIMAL es '" + encodedString + "'");
                break;

            case 4:
                //En caso de seleccionar la opcion 4 llama a una funcion proporcionada de internet
                var encodedString = textToBin(texto);
                alert("El texto " + texto + " en BINARIO es \n'" + encodedString + "'");
                break;

            default:
                //Se agrega mensaje de error en caso que el usuario no haya ingresado ninguna de las opciones esperadas
                alert("El numero dijitado no es valido");
                break;
        }
    }
    //Detectamos si el usuario NO ingreso un valor
    else {
        alert("Se te ha olvidado ingresar el texto amig@, intentalo nuevamente");
    }
}

//Funcion porporcionada de internet que nos retorna una cadena convertida en hexadecimales
function ascii_to_hexa(str) {
    var arr1 = [];
    for (var n = 0, l = str.length; n < l; n++) {
        var hex = Number(str.charCodeAt(n)).toString(16);
        arr1.push(hex);
    }
    return arr1.join('');
}

//Funcion porporcionada de internet que nos retorna una cadena convertida en binario
function textToBin(text) {
    return (
        Array
            .from(text)
            .reduce((acc, char) => acc.concat(char.charCodeAt().toString(2)), [])
            .map(bin => '0'.repeat(8 - bin.length) + bin)
            .join(' ')
    );
}