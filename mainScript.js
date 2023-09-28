//----------JavaScript Console----------
console.log("This is Excercise 1: Hello JavaScript!");

//------------------------FOR String EXAMPLES------------------------
//declaring & re-declaring var 
var greet1 = "hi, good day.";
greet2 = "good morning.";
console.log(greet2);

//understanding let
let greeting = "how are you?";  
if (false) {//if condition is true, it will both declare the greeting
    let greeting = "how is it going?";
    console.log(greeting); // "say Hello instead"
}//if condition is false, it will only declare the greeting outside the {}
console.log(greeting); // "say Hi"


//------------------------VAR, LET, & CONST------------------------
var x;
let y;

// How to use variables:
x = 10;
y = 98;
let z = x + y;

//PI = 10; 
//const PI = 3.141592653589793;
const PI = 9;

console.log("PI: " + PI);

//const PI2;
PI2 = 3.14159265359;

// using camelCase is the most common way of naming variables
var firstName = "Patty";
var lastName = "Bactad";
let fullName = firstName + " " + lastName;

console.log("First Name: " + firstName + " Last Name: " + lastName);
console.log("Full Name " + fullName);
console.log("X: " + x + "\n" + "Y: " + y + "\n" + "Z: " + z);
console.log("this is" + " a " + "combined string with an integer: " + z);

let incrementNum = 0;
console.log("the number: " + incrementNum);
incrementNum++;
console.log("the incremented number: " + incrementNum);
console.log("This is a test log.");

//----------BUTTON for Java console----------
function myClickFunction() {
    console.log("Exercise 2: The button was clicked.");
}

//----------BUTTON as a link redirection----------
function myClickFunction() {
    window.open("https://www.linkedin.com/in/patty-mae-bactad/");
}