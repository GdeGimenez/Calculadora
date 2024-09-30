let num1 = parseInt(prompt("Dime el número 1"));
let num2 = parseInt(prompt("Dime el número 2"));

let suma = num1 + num2;
console.log("Suma: " + suma);

let resta = num1 - num2;
console.log("Resta: " +resta);

let multiplicacion = num1 * num2;
console.log("Multiplicacion: " +multiplicacion);

if (num2 == 0){
    console.log("Error");
}else{
    let division = num1 / num2;
    console.log("Division: " +division);
}
