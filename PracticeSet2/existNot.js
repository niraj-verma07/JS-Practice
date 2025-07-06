// Write a js program to check if an element exists in an array or not

let elem = ['Niraj', 100, 8.9];
let item = 856

if(elem.indexOf(item) != -1){ //return -1 when item is not found in elem array
    console.log("Element Exist on Array");
}else{
   console.log("Element doesnot Exist on Array");
}