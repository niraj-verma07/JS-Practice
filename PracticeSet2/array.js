let months = ["January", "July", "March", "August"];

months.shift();
console.log(months);
months.shift();
console.log(months);
months.unshift("june");
console.log(months);
months.unshift("July");
console.log(months);

// Using Splice

let month =  ["january", "july", "march", "august"];
console.log("After Splice")
month.splice(0,2, "july", "june"); // delete 2 elements from starting and add two element into it

console.log(month);