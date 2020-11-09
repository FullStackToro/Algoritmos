// //1.-  Dados un array y un valor Y, cuenta e imprime (print) el 
// número de valores del array que sean mayores que Y. 

function cuenta(x, y) {
    var array = [];
    for (var i = 0; i < x.length; i++) {

        if (x[i] > y) {
            array.push(x[i])
            console.log(array);
        }
    }
    return array
}
array = cuenta([2, 4, 7, 8], 4)
console.log(array.length);
console.log(array);


// 2.- Dado un array, imprime los valores máximos (max), 
// mínimos (min) y promedio (average) para el array.

function opArray(x) {
    var array = [];
    var max;
    var min;
    var prom = 0;
    for (var i = 0; i < x.length; i++) {
        if (i == 0) {
            max = x[i];
            min = x[i];
        }
        if (x[i] > max) {
            max = x[i];
        }
        if (x[i] < min) {
            min = x[i];
            console.log(min)
        }
        prom = prom + x[i];
    }
    console.log("el valor minimo es", min);
    console.log("el valor maximo es", max);
    console.log("el valor promedio es ", prom / x.length);
}
y = opArray([1, 2, 3, 4, 5, 4, 3, 2])


//3.- Dado un array de números, crea una función que dé como resultado 
//un nuevo array donde los valores negativos se reemplacen por el texto 
//(string) ‘Dojo’. Por ejemplo, reemplazarNegativos([1,2,-3,-5,5]) 
//debiera devolver [1,2, “Dojo”, “Dojo”, 5].
function sinNegativos(x) {
    for (var i = 0; i < x.length; i++) {
        if (x[i] < 0) {
            x[i] = "Dojo";
        }
    }
    console.log(x);
}
sinNegativos([1, 2, -3, -5, 5]);




// Dado un array y su respectivo índice, remueve los valores en el 
//rango del índice dado( acortando el array). Por ejemplo, 
//removerRango([20,30,40,50,60,70],2,4)debiera devolver [20,30,70].

function acotar(x, y, z) {
    var array = [];
    for (var i = 0; i < x.length; i++) {
        if (i < y) {
            array.push(x[i])
        }
        if (i > z) {
            array.push(x[i])
        }
    }
    console.log(array);
}
acotar([20, 30, 40, 50, 60, 70], 2, 4);