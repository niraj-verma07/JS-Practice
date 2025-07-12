// Create a function that returns the concatenation of all strings in an array.

let str = ["hello", "hello", "bye", "!"];

function concat(str){
    let result = "";
    for(let i =0; i<str.length; i++){
        result = result + " " + str[i];
    }
    console.log(result);
}

concat(str);
