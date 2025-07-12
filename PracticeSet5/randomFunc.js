//Write a JavaScript function to generate a random number within a range
// (start, end)

let start = 1000;
let end = 200;

function generateRandom(start, end){
    let diff = end - start;

    console.log(Math.floor(Math.random() * diff) + start)
}

generateRandom(start, end);