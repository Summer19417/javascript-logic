/*
* What do these expressions evaluate to? 
* Run your program in the terminal using the command `node app.js`
* Check your answers using console.log();
*/

/*
* Arithmetic Operators
*/

// Addition (+)
console.log(5 + 9); //14

console.log("one" + "one");"" // 'oneone'

// Subtraction (-)
console.log(8 - 20); //-12

// Multiplication (*)
console.log(2 * 0); //0
// Division (/)
console.log(15/50); //0.3

// Modulus (%)
console.log(5 % 2); //1

// Increment (++)
//console.log(!false); //true

var a = 2;
console.log(a++);
console.log("increment", a);
//console.log(-1++); //invalid 
var b = -1
console.log(b++);
console.log(b);

// Decrement (--)
//console.log(5--); //invalid 
var c = 5
console.log(c--);
console.log(c);


/*
* Comparison Operators (These return a boolean value of true or false)
* For those with the boolean answer false, change the expression to evaluate to true
*/

// Strict Equal (===)
console.log(5 === 5); //it is now true

// Not Equal (!==)
console.log(5!== "five"); // true

// Greater Than (>)
console.log(5 < 10); //true
console.log(a);
console.log(a);
console.log(a);
console.log(a);
console.log(a);


// Less Than (<)
console.log(10 < 20); //true

// Greater than or Equal to (>=)
console.log(null >= null); //true

// Less than or Equal to (<=)s
console.log(null <= null); //true

/*
* Logical (or Relational) Operators
*/

// And (&&) - If both the operands satisfy the statment, then the condition becomes true
console.log(1 > 0 && 1 < 2); //true

// Or (||) - If any of the two operands satisfy the statement, then the condition becomes true.
console.log(2 > 0 || 2 > 0); //true 

// Not (!) - Reverses the logical state of its operand.
console.log(!false); //true 

/*
* Conditionals
* Using the variables given to you, create if, else, and else if statements
*/
var a = "apple";
var b = 2;