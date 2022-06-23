window.onload= function() {



let matrizWoldle = [
    [0, 1, 2, 3, 4],
    [1, 2, 3, 4, 5],
    [2, 3, 4, 5, 6],
    [3, 4, 5, 6, 7],
    [4, 5, 6, 7, 8],
    [5, 6, 7, 8, 9],
]

console.log(matrizWoldle);


//se usa un for de otro for para meterse en todos los valores en una matriz
//un for para ese arreglo, nos posiciona en 0
/* y otro for para recorrer dentro de ese arreglo.
de la matriz i imprime el resultado-- cuando j llega al maximo sale
y vuelve a entrar hasta que el valor de i sea 1*/


for (i=0; i<matrizWoldle.length; i++) {
    for (j=0; j<matrizWoldle[i].length; j++){
        document.getElementById(`f${i}c${j}`).value = matrizWoldle[i][j];
        console.log(matrizWoldle[i][j]);
    }
}

}
