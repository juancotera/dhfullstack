let nombre = 'Juan';
let apellido = 'Cotera';
let sueldoActual = 20000;
let porcentajeAumento = 25;
let calculoAumento = ((sueldoActual * porcentajeAumento)/100);
let nuevoSueldo = calculoAumento;

console.log('*--------------------------------*');
console.log('Hola, estimad@ ' + nombre+' '+apellido + '\n'+
            'En base a su sueldo actual \n' +
            '$' + sueldoActual + '\n' +
            'Ha recibido un aumento del 25%:' + '\n' +
            '$' + calculoAumento + '\n' +
            'Y su nuevo sueldo es de: ' + '$' + (sueldoActual + calculoAumento) );
console.log('*--------------------------------*');