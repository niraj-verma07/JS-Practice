// Write a program to find the largest of 3 numbers

let Num1 = 20;
let Num2 = 30;
let Num3 = 500;

if((Num1 > Num2) && (Num1 > Num3)){
    console.log(`${Num1} is Greatest`);
}else if((Num2 > Num3) && (Num2 > Num1)){
    console.log(`${Num2} is Greatest`);
}else{
    console.log(`${Num3} is Greatest`);
}