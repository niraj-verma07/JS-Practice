// Write a js program to test the whether the character at given (Character) index is lover case

let str = 'NiRaJ'
let idx = 2;

if(str[idx] == str[idx].toLowerCase()){
    console.log(`${str[idx]} is lower case`);
}else{
    console.log(`${str[idx]} is not lower case`);
}