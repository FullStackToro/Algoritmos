/* 
1.- Configura un array para que los valores negativos se transformen en 0. 
Por ejemplo, resetNegativos([1,2,-1,-3]) debiera dar como resultado [1,2,0,0].*/

function igualCero(x) {
    for (var i = 0; i < x.length; i++) {
        if (x[i] < 0) {
            x[i] = 0;
        }
    }
    return x
}
console.log(igualCero([1, 2, -1, -3]));

/*2.- Dado un array, mueve todos los valores un espacio de derecha a izquierda 
eliminando el primer valor y dejando un 0 para el último valor. Por ejemplo, 
moverAdelante([1,2,3]) debiera dar como resultado [2,3,0].*/

function moveIzq(x) {
    var array = [];
    for (var i = 1; i < x.length; i++) {
        array[i - 1] = x[i];
    }
    array.push(0);
    return array
}

console.log(moveIzq([1, 2, 3]));

/*3.- Configura un array para que el resultado sean los valores en el orden contrario. P
or ejemplo, returnReverso([1,2,3]) debe dar [3,2,1].
*/

function contrario(x) {
    var array = [];
    for (var i = 1; i <= x.length; i++) {
        array[x.length - i] = x[i - 1];
    }
    return array
}
console.log(contrario([1, 2, 3]));
/*4.- Crea una función que cambie un array repitiendo sus valores originales 
(manteniendo el mismo orden). Por ejemplo, repetirValores([4,”Ulysses”, 42, false]) debiera dar [4,4, “Ulysses”, “Ulysses”, 42, 42, false, false].
 */

function repite(x) {
    var array = [];
    for (var i = 1; i <= x.length; i++) {
        array.push(x[i - 1])
        array.push(x[i - 1])
    }
    return array
}
console.log(repite([4, "Ulysses", 42, false]));