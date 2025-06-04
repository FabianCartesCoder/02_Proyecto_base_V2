// Declaración de variables
let fechaNacimiento = 1934;
let proporciónÁurea = 1.6180;
let fraseMemorable = "En la persecución de lo grandioso, fallamos en hacer el bien."; //string
let datoInteresante = true; //Valor Verdadero o falso(0,1)
let arregloDeFrutas = ["manzanas","peras","mandarinas","kiwis"]; //array - Lista de elementos(puede ser cualquier cosa.)
let objetoPersona = { nombre: "Fabian", edad: 16 }; // object diccionario
let valorIndefinido; // Sin valor de asignado - undefined
let valorNulo = null; // Valor Nulo - Null
const mes = "octubre"; //Constate - No varia

// Funciones para mostrar cada valor con alert()
function mostrarFechaNacimiento() {
  alert("Fecha de nacimiento: " + fechaNacimiento);
}

function mostrarProporciónÁurea() {
  alert("Proporción Áurea: " + proporciónÁurea);
}

function mostrarFraseMemorable() {
  alert("Frase memorable: " + fraseMemorable);
}

function mostrarDatoInteresante() {
  alert("El agua hierve a 100°C a nivel del mar: " + datoInteresante);
}

function mostrarArregloDeFrutas() {
  alert("Hoy podrias comer: " + arregloDeFrutas);
}

function mostrarObjeto() {
  alert("Objeto persona: " + JSON.stringify(objetoPersona));
}

function mostrarIndefinido() {
  alert("Valor indefinido: " + valorIndefinido);
}

function mostrarNulo() {
  alert("Valor nulo: " + valorNulo);
}

function mostrarConstante() {
  alert("Constante mes: " + mes);
}
