const readline = require('readline');

// Configuramos readline para recibir entradas del usuario
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function contarVocalesYNumeros(cadena) {
    let vocales = 0;
    let numeros = 0;
    
    for (let i = 0; i < cadena.length; i++) {
        let caracter = cadena[i];
        
        // Contamos las vocales
        if (caracter === 'a' || caracter === 'e' || caracter === 'i' || caracter === 'o' || caracter === 'u' ||
            caracter === 'A' || caracter === 'E' || caracter === 'I' || caracter === 'O' || caracter === 'U') {
            vocales++;
        }
        
        // Contamos los números
        if (caracter >= '0' && caracter <= '9') {
            numeros++;
        }
    }

    console.log("Número de vocales: " + vocales);
    console.log("Número de números: " + numeros);
}

function pedirCadena() {
    rl.question("Introduce una cadena de texto: ", function(cadena) {
        if (cadena.length > 0) {
            contarVocalesYNumeros(cadena);
            rl.close();
        } else {
            console.log("La cadena no puede estar vacía. Inténtalo de nuevo.");
            pedirCadena(); // Volvemos a pedir la cadena si está vacía
        }
    });
}

// Iniciar el programa
pedirCadena();
