/*  Desarrolle un programa que sea una funcion que 
Halle los numeros pares y los numeros impares dentro de un array*/


function buscarNumeroParImpar(array3){
    for(let i = 0; i<array3.length;i++){
        const numero= (array3[i]%2);
        if(numero== 0){
            console.log(`El numero ${array3[i]} es numero par`);
        }else{
            console.log(`El numero ${array3[i]} es numero impar`);
        }
    };
};
buscarNumeroPar([13,21,3,41,53,61]);




/*Desarrolle un programa que sea una funcion que 
Halle si un numero es  par o impar*/ 

function buscarNumeroParImpar(num){
    for(let i = num; i==num;i++){
        const numero= (num%2);
        if(numero== 0){
            console.log(`El numero ${num} es numero par`);
        }else{
            console.log(`El numero ${num} es numero impar`);
        }
    };
};
buscarNumeroPar(10);



/* Desarrolle un programa que sea una funcion que 
Halle si cada numero es par o impar , si ambos son pares decir que son pares y si ambos son impares decir que ambos son impares*/

function buscarNumeroParImpar(num1, num2){
        const numero1= (num1%2);
        const numero2= (num2%2);

        if(numero1== 0 && numero2 == 0){
            console.log(`El numero ${num1} y el numero ${num2} son numeros pares`);
        }
        else if(numero1== 0){
            console.log(`El numero ${num1} es numero par`);
            console.log(`El numero ${num2} es numero impar`);
        }
        else if(numero2== 0){
            console.log(`El numero ${num2} es numero par`);
            console.log(`El numero ${num1} es numero impar`);
        }
        else{
            console.log(`El numero ${num1} y el numero ${num2} son numero impares`);
        }
    };

buscarNumeroPar(21,11);


