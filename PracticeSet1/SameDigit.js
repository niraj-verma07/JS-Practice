// Write a program to check if 2 numbers have the same last digit. 
// Eg: 32 and 47852 have the same last digit  2

let num1 = 32;
let num2 = 4782;

if((num1 % 10) == (num2 % 10)){
    console.log(`${num1} and ${num2} have same last digit`);
}else{
    console.log(`${num1} and ${num2} have not same last digit`);
}