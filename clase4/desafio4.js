let num1 = 20;
let num2 = 36;
let operador = "+";

switch(operador){
  case '+':
    console.log("el resultado de sumar "  + num1 + " + " + num2 +" es "+ (num1 + num2));
    break;
  case '-':
    console.log("el resultado de restar "  + num1 + " - " + num2 +" es "+ (num1 - num2));
    break;
  case '*':
    console.log("el resultado de multiplicar "  + num1 + " * " + num2 +" es "+ (num1 * num2));
    break;
  case '/':
  console.log("el resultado de sumar "  + num1 + " / " + num2 +" es "+ (num1 / num2));
  break;
  default:
    console.log("Las opciones aceptadas son: sumar - restar - multiplicar - dividir");
}