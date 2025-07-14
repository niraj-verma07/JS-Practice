// Add a <p> with red text that says "Hey I'm red!"

let body = document.querySelector("body");
let para1 = document.createElement('p');
para1.innerText = "Hey I'm red!";

body.append(para1);
para1.style.color = "red";

// Add <h3> with blue text that says "I'm a blue h3!";

let h3 = document.createElement("h3");
h3.innerText = "I'm a blue h3!"
body.append(h3);
h3.style.color = "blue";

// A <div> with a black border and pink background color with the following elements inside of it

// another <h1> thats says "I'm in a div"
// a <p> that says "MEE TOO!"

let div = document.createElement("div");
let h1 = document.createElement("h1");
let para2 = document.querySelector("p");

h1.innerText = "I'm in a div";
para2.innerText = "MEE TOO!";

div.append(h1);
div.append(para2);
div.classList.add("box");

body.append(div);


// Create a new input and button element on the page using JavaScript only. Set the text of button to "Click me"

let input = document.createElement("input");
let button = document.createElement("button");

button.innerText = "Click me";

body.append(input);
body.append(button);

// Add following attributes to the element :
// Change placeholder value of input to "username"
// Change the id of button to "btn'

button.setAttribute("id", "btn");
input.setAttribute("placeholder", "username");

//  Access the btn using the querySelector and button id. Change the button background
// color to blue and text color to white

let btn = document.querySelector("#btn");
btn.classList.add("btnStyle");

// Create an hl element on the page and set its text to "DOM Practice" underlined.
// Change its color to purple

let heading = document.createElement("h1");

heading.innerHTML = "<u> DOM Practice</u>";
heading.style.color = "purple";

body.append(heading);

// Create a p tag on the page and set its text to "Niraj Kumar Verma",
// where Niraj is bold

let para3 = document.createElement("p");
para3.innerHTML = " <b>Niraj</b> Kumar Verma";

body.append(para3)