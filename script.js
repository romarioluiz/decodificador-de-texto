var textImput = document.querySelector("#imput-name");
var textOutput = document.querySelector("#output");

function criptografar() {
    var texto = textImput.value;
    var resultcripto = texto;

    function criptografarTexto(stringEncriptada) {
        let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
        
        stringEncriptada = stringEncriptada.toLowerCase();
        stringEncriptada = stringEncriptada.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
    
        console.log(stringEncriptada);
        for(let i = 0; i < matrizCodigo.length; i++) { 
            if(stringEncriptada.includes(matrizCodigo[i][0])) {
                stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
            }
        }

        return stringEncriptada;
    }

    resultcripto = criptografarTexto(resultcripto);

    if (resultcripto !== null) {
        textOutput.innerHTML = '<textarea readonly id="output-name">' + resultcripto + '</textarea>' + '<button class="button_copiar" id="copiar" onclick="copiar()">copiar</button>';
    } else {
        textOutput.innerHTML = '<textarea readonly id="output-name"></textarea>';
    }
}


function descriptografar() {
    var texto = textImput.value;
    var resultdescriptp = '';

    function descriptografarTexto(stringDesencriptada) {
        let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
        
        stringDesencriptada = stringDesencriptada.toLowerCase();
        stringDesencriptada = stringDesencriptada.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
    
        for(let i = 0; i < matrizCodigo.length; i++) {
            if(stringDesencriptada.includes(matrizCodigo[i][1])) {
                stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
            }
        }

        return stringDesencriptada;
    }

    resultdescriptp = descriptografarTexto(texto);

    if (resultdescriptp !== null) {
        textOutput.innerHTML = '<textarea readonly id="output-name">' + resultdescriptp + '</textarea>' + '<button class="button_copiar" id="copiar" onclick="copiar()">copiar</button>';
    } else {
        textOutput.innerHTML = '<textarea readonly id="output-name"></textarea>';
    }
}

function copiar() {
    var textOutput = document.getElementById('output').querySelector('textarea');
    textOutput.select();
    document.execCommand('copy');
    alert("Copiado");
}
