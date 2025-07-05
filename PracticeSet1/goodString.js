// A "good String" is a string that starts with the letter 'a' and has length > 3. Write a program to find if a string is good or not.

let str = "Apple";

if((str[0] === "a" || str[0] === "A") && str.length > 3){
    console.log(`${str} is a good string`);
}else{
    console.log(`${str} is not a good string`);
}