let array = new Array(3);
array[0]=10;
array[1]=22;
array[2]=1;
let array1 = "mario"
let array2 = "ariom"

// console.log(array1.split('').sort().join());
// console.log(array1.split());
// console.log(array1.split().join());
// console.log(array1.split("").sort());
// console.log(array1.split('').sort().join());
const a = array1.split('').sort().join()
const b = array2.split('').sort().join()
// console.log(a);
// console.log(b);
// if (a==b){
//     console.log("Eres Usuario Premiun");
// }else{
//     console.log("Eres Usuario Premiun");
// }
// (a===b)?console.log("Eres Usuario Premiun 1"): console.log("No Eres Usuario Premiun 1");

// const imprimir=(array3[0]%1)
// const array3 = [1,2,3,4,5,6];
//Hallar numeros pares y impares dentro de un array
function buscarNumeroPar(array3){
    for(let i = 0; i<array3.length;i++){
        const numero= (array3[i]%2);
        if(numero== 0){
            console.log(`El numero ${array3[i]} es numero par`);
        }else{
            console.log(`El numero ${array3[i]} es numero impar`);
        }
    };
};
buscarNumeroPar([13,21,3,41,53,61])


//Hallar si un numero es  par o impar 
function buscarNumeroPar(num){
    for(let i = num; i==num;i++){
        const numero= (num%2);
        if(numero== 0){
            console.log(`El numero ${num} es numero par`);
        }else{
            console.log(`El numero ${num} es numero impar`);
        }
    };
};
buscarNumeroPar(10)

// Hallar si cada numero es par o impar , si ambos son pares decir que son pares y si ambos son impares decir que ambos son impares
function buscarNumeroPar(num1, num2){
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

buscarNumeroPar(21,11)


