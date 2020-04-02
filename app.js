document.write("<h1>Hola Mundo</h1>");

function PromptDemo() {
    //Ingresamos los mensajes a mostrar
    var texto = prompt("¿Cuál es el texto que deseas encriptar?", "");
    var codigo = parseInt(prompt("Escriba el numero del lenguaje al que desea encriptar su texto \n 0= Base64  1= ROT13  2= Hexadecimal  3= Binario", ""),0);
    //Detectamos si el usuario ingreso un valor
    if (texto != null && codigo != null) {
        switch (codigo) {
            case 0:
                var encodedString = btoa(texto);
                alert("El texto " + texto + " en BASE64 es '" + encodedString + "'");
                break;

            case 1:
                var encodedString = texto.replace(/[a-zA-Z]/g, function (c) { return String.fromCharCode((c <= "Z" ? 90 : 122) >= (c = c.charCodeAt(0) + 13) ? c : c - 26); });
                alert("El texto " + texto + " en ROT13 es '" + encodedString + "'");
                break;

            case 2:
                var encodedString = ascii_to_hexa(texto);
                alert("El texto " + texto + " en HEXADECIMAL es '" + encodedString + "'");
                break;

            case 3:
                var encodedString = textToBin(texto);
                alert("El texto " + texto + " en BINARIO es '" + encodedString + "'");
                break;

            default:
                break;
        }
    }
    //Detectamos si el usuario NO ingreso un valor
    else {
        alert("No has ingresado un valor");
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