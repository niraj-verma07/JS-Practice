// Create an object Person with their name, age and city.
// Edit their city’s original value to change it to “New York”.
// Add a new property country and set it to the United States.

let person = {
    name : "Niraj",
    age : 22,
    city : "Ranchi"
};

console.log(person.city);
person.city = "New York";
person.country = "United States";
console.log(person.city);
console.log(person.country);