document.write("<h1>Hola Mundo</h1>");

function CuadroDeTexto() {
    //Ingresamos los mensajes a mostrar
    var texto = prompt("¿Cuál es el texto que deseas encriptar?", "");
    //Detectamos si el usuario ingreso un valor
    if (texto != "") {
    var codigo = parseInt(prompt("Escriba el numero del lenguaje al que desea encriptar su texto \n 1= Base64  2= ROT13  3= Hexadecimal  4= Binario", ""),0);
        switch (codigo) {
            case 1:
                var encodedString = btoa(texto);
                alert("El texto " + texto + " en BASE64 es '" + encodedString + "'");
                break;

            case 2:
                var encodedString = texto.replace(/[a-zA-Z]/g, function (c) { return String.fromCharCode((c <= "Z" ? 90 : 122) >= (c = c.charCodeAt(0) + 13) ? c : c - 26); });
                alert("El texto " + texto + " en ROT13 es '" + encodedString + "'");
                break;

            case 3:
                var encodedString = ascii_to_hexa(texto);
                alert("El texto " + texto + " en HEXADECIMAL es '" + encodedString + "'");
                break;

            case 4:
                var encodedString = textToBin(texto);
                alert("El texto " + texto + " en BINARIO es \n'" + encodedString + "'");
                break;

            default:
                alert("El numero dijitado no es valido");
                break;
        }
    }
    //Detectamos si el usuario NO ingreso un valor
    else {
        alert("Se te ha olvidado ingresar el texto amig@, intentalo nuevamente");
    }
}

function ascii_to_hexa(str) {
    var arr1 = [];
    for (var n = 0, l = str.length; n < l; n++) {
        var hex = Number(str.charCodeAt(n)).toString(16);
        arr1.push(hex);
    }
    return arr1.join('');
}

function rot5(str) {
    var s = [];
    for (i = 0; i < str.length; i++) {
        idx = str.charCodeAt(i);
        if ((idx >= 48) && (idx <= 57)) {
            if (idx <= 52) {
                s[i] = String.fromCharCode(((idx + 5)));
            }
            else {
                s[i] = String.fromCharCode(((idx - 5)));
            }
        }
        else {
            s[i] = String.fromCharCode(idx);
        }
    }
    return s.join('');
}

function textToBin(text) {
    return (
        Array
            .from(text)
            .reduce((acc, char) => acc.concat(char.charCodeAt().toString(2)), [])
            .map(bin => '0'.repeat(8 - bin.length) + bin)
            .join(' ')
    );
}