// Write a function called doubleAndReturnArgs which accepts an array and a
// variable number of arguments. The function should return a new array with the original
// array values and all of the additional arguments doubled

const doubleAndReturnAgrs = (arr, ...args)=>{
    console.log([...arr, ...args.map((v)=> v*2)]);
}

doubleAndReturnAgrs([1,2,3,4,5], 4,4);
doubleAndReturnAgrs([2], 10, 4);