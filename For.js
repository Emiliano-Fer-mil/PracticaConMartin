console.log('----------FOR CON BREAK-----------------')

for (let i = 0; i < 10; i++) {
    // Simulamos una condición para salir del ciclo
    if (i === 5) {
      console.log('¡El valor 5 fue encontrado, saliendo del ciclo!');
      break; // Rompe el ciclo cuando i es igual a 5
    }
  
    console.log('Valor actual de i:', i);
  }
  
  console.log('El ciclo ha terminado.');

console.log('----------FOR CON CONTINUE-----------------')

for (let i = 0; i < 10; i++) {

    // si es verdadero, saltar el resto del cuerpo
    if (i % 2 == 0) continue;
  
    console.log(i); // 1, luego 3, 5, 7, 9
  }

  console.log('----------FOR IN-----------------')
// devuelve la key o el valor en un objeto
  let persona = {
    nombre: "Juancito",
    apellido: "Perez",
    edad: 30,
    leLlegaALaRodilla: false
  };
  
  for(let key in persona) {
    // claves
    console.log( key );  
    // valores de las claves
    console.log( persona[key] ); 
  }
  //las propiedades de números enteros se ordenan, los demás aparecen en el orden de la creación
  let codes = {
    "49": "Germany",
    "41": "Switzerland",
    "44": "Great Britain",
    // ..,
    "1": "USA"
  };
  
  for (let code in codes) {
   console.log(code); // 1, 41, 44, 49
  }
  console.log ('------------Array------------')
  //Los arrays en JavaScript pueden trabajar como colas o pilas. Ellos permiten agregar/quitar elementos al/del principio o al/del final
  console.log ('------------POP igual que PILA------------')
  let fruits = ["Apple", "Orange", "Pear"];

  console.log( fruits.pop() ); // quita "Pear" y lo muestra en un alert

  console.log( fruits ); // Apple, Orange
  console.log ('------------PUSH igual que PILA------------')

   fruits = ["Apple", "Orange"];

fruits.push("Pear");

console.log( fruits ); // Apple, Orange, Pear

console.log ('------------SHIFT igual que COLA. se lleva el primero------------')

fruits = ["Apple", "Orange", "Pear"];

console.log( fruits.shift() ); // quita Apple y lo muestra en un alert

console.log( fruits ); // Orange, Pear
console.log ('------------UNSHIFT igual que COLA. agrega el primero------------')
fruits = ["Orange", "Pear"];

fruits.unshift('Apple');

console.log( fruits ); // Apple, Orange, Pear
console.log ('------------LO TRATA COMO PILA Y COLA A LA VEZ------------')
console.log ('------------combina push y unshift------------')
fruits = ["Apple"];

fruits.push("Orange", "Peach");
fruits.unshift("Pineapple", "Lemon");

// ["Pineapple", "Lemon", "Apple", "Orange", "Peach"]
console.log( fruits );

console.log ('------------FOR OF (SOLO PARA ARRAYS)------------')
fruits = ["Apple", "Orange", "Plum"];

// itera sobre los elementos del array
for (let fruit of fruits) {
  console.log( fruit );
}