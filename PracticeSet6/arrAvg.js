// Write an arrow function names arrayAverage that accepts an array of numbers and returns the average of those numbers

let arrayAverage = (arr)=>{
    let total = 0;
    for(let number of arr){
        total = total += number;
    }

    // console.log(total/arr.length);/
    return total/arr.length;
}

let arr =[1,2,3,4,5,6];

console.log(arrayAverage(arr));