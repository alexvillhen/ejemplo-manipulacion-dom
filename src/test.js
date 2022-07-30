//VARIABLES
let firstName = "Alejandro";
let lastName = "Villaescusa";
let user = "Alexvillhen";
let age = 20;
let email = "alexvillhen@gmail.com";
let overAge = age >= 18 ? true : false;
let savedMoney = 7500;
let debt = 0;

//FUNCIONES
function completeName(name, lastName){
    return name + " " + lastName;
}

function greeting(nickname, name, lastName, callback){
    return `Mi nombre es ${callback(name, lastName)}, pero prefiero que me digan ${nickname}`
}

console.log(greeting("Ale", "Alejandro", "Villaescusa", completeName));

//CONDICIONALES
const suscripciones = {
    Free: "Puedes tomar los cursos gratis",
    Basic: "Puedes tomar casi todos los curso por un mes",
    Expert: "Puedes tomar casi todos los cursos por un año",
    ExpertPlus: "Puedes tomar TODOS los cursos junto con alguien más"
}

const suscriptionType = "Basic";

function validateSuscription(suscripciones, suscription){
    if(suscripciones[suscription]){
        console.log(suscripciones[suscription]);
        return; 
    }

    return console.log("la suscripción no existe");
}

validateSuscription(suscripciones, suscriptionType);



//CICLOS
let i = 0;
while(i < 5){
    console.log("El valor de i es " + i);
    i++;
}

console.log("\n");

i = 10;
while(i >= 2){
    console.log("El valor de i es " + i);
    i--;
}


let answer = prompt("¿Cuanto es 2 + 2"); 

while(answer != 4){
    alert("Tu respuesta es incorrecta")
    answer = prompt("¿Cuanto es 2 + 2");
}

alert("Respuesta correcta");

//ARRAYS Y OBJETOS
const arr = [1, 'Alex', true, false];

const obj = {
    name: "Alex",
    edad: 20,
    materiasFavoritas: ["programación", "fisica", "cálculo"] 
}

const imprimirElemento = n => console.log(arr[n - 1]);

const printAllElements = arr => {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
        
    }
}

printAllElements(arr);

console.log("\n");

const printValues = obj => {
    for (const i in obj) {
        console.log(obj[i]);
    }
}

printValues(obj);