
function factorial(){
    let num = parseFloat(prompt("Ingrese un número: " ));
    if (!isNaN(num)) {  
        let factorial = 1;
        for (let i = 1; i <= num; i++) {
          factorial *= i;
        }
        console.log("El factorial es", factorial);
    } else {
        alert ("Error: Ingrese un número"); 
    }
};
factorial();