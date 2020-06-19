var frase = document.getElementById('cajita') 
var boton = document.getElementById('botoncito')
boton.addEventListener('click', texto)
var result = document.getElementById('resultado')
document.getElementById('borrar').onclick = function borrar() {
	result.innerHTML = ""
}

function texto(){

	var palabra = frase.value.toLowerCase();	
	// eliminamos los espacios en blanco
	palabra = palabra.replace(/ /g, "");

	for (var i = 0; i<palabra.length; i++){
		if(palabra[i] != palabra[palabra.length-i-1]){
			return result.innerHTML = "Esto no es palíndromo"
		}
    }

	return result.innerHTML = "Esto es un palíndromo"
} 
