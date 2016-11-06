function holaMundo(nombre:string) {
	return "Hola mundo soy: " + nombre; 
}

var nombre:string = "Jmocana";

document.getElementById('container').innerHTML = holaMundo(nombre);