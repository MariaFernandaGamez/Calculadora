/*  
    --document--
        Objeto que proporciona metodos y propiedades para interactuar con los elemetos del HTML.

    --getElementById--
        Metodo del objeto document.
        Seleccionar un unico elemento HTML con un identificador específico y luego asigno ese elemento a la constante displaylastValue.
    
    --querySelectorAll--
        Metodo del objeto document.
        Seleccionar y manipular elementos HTML en un documento que coinciden con el selector.

    --const xxxx-
        Declara la consante que almacenara el resultado que arroje el metodo. Y me aseguro de que ese valor no sea reasignable.
*/

const displayLastValue = document.getElementById('lastValue');
const displayCurrentValue = document.getElementById('currentValue');
const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');

/*
    --new--
        Se utiliza para crear un nuevo objeto, se invoca una *funcion constructora*, se crea un nuevo objeto y se ejecuta el codigo de la funcion con el valor creado. al final se devuelve el nuevo objeto.

    *funcion constructora*
        Crear multiples objetos con la misma estructura y comportamiento.
*/
const calculator = new Calculator();

// Prueba en consola para ver que las funciones de mi archivo Calculator.js si esten funcionando
console.log(calculator.addition(2,3))
console.log(calculator.substraction(80,25))
console.log(calculator.multiplication(9,6))
console.log(calculator.division(100,4))

numberButtons.forEach(button => {
    button.addEventListener('click', () => display.addNumber(button.innerHTML));
});
    