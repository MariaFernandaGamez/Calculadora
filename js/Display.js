/*
    --class-- 
        Definir un tipo de objeto y sus metodos asociados.
    
    --constructor--
        Crear e inicializar multiples objetos, con la misma estrcutura y comportamiento. Esta puede recibir parametros.
    
    --this--
        Dentro de un constructor, se refiere al objeto que se está creando. Se utiliza para asignar propiedades al nuevo objeto que se crea.
    
La clase Display maneja la visualización de valores en la interfaz de usuario, mientras que la clase Calculator maneja las operaciones matemáticas y los cálculos.
*/


class Display {
    constructor (displayLastValue, displayCurrentValue){
        this.displayCurrentValue = displayCurrentValue;  
        this.displayLastValue = displayLastValue;  
        this.calculator = new Calculator();  
        this.LastValue = '';
        this.currentValue = '';
    }

    /*Este metodo modifica el valor de --Value-- por el que se ingrese en el parametro --number--
    */
    addNumber(number){
        this.currentValue = this.currentValue + number;
        this.printValues();
    }

    printValues() {
        this.displayCurrentValue.textContent = this.currentValue;
        this.displayLastValue.textContent = this.LastValue;
    }

}

//displayValue ---> Valores a modificar 
//value ---> Valores que estamos guardando



