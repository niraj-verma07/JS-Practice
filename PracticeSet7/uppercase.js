//Create a new array whose elements are in uppercase of words present in the
// original array

let strings = ["adam", "bob", "catlyn", "donald", "eve"];

let newStrings = strings.map((str)=>{
   return str.toUpperCase()
});

console.log(newStrings);