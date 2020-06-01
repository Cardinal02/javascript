//Complete the following problems:

/************************************************************* */
// Problem 1: Refactor the for() loop to be a while loop.
//

/*for(let i=0; i<10; i++) {
    console.log(" the value of i in the loop is : " + i);
}*/
//your code...
console.log("Problem 1 While loop");
var i =0;
while (i<10){
    console.log(" the value of i in the loop is : " + i);
    i++;
}
/************************************************************* */
// Problem 2:
// multiply the sum of 30 added to two by 20.  Divide the product by 10 raised to the power of 2
//use javascript to compute the value of the above statement.
// Each individual operation needs to be a function expression.
// run all the functions after defining them, and print the answer to the console.

//your code...
console.log("Problem 2 Function expression");

var firstNum,secondNum, multiplicant, sum, divisor, exp,radical, sum, product,exp;

function add(firstNum,secondNum){
    return firstNum + secondNum;
}
function multiply(multiplicant){
    sum = add(30,2);
    product= sum * multiplicant;
    return product;
}
function exponent(exp, radical){
    divisor = radical**exp;
return radical ** exp;
}
var finalNumber = multiply(20)/exponent(2,10);
console.log("Step1: "+sum+ " Step2: "+ product+" Step3: "+divisor );
console.log("Final answer is "+finalNumber);


/*************************************************************/
console.log("Problem 3 Truthy or Falsy");

//Problem 3:
//Determine whether the following values are "truthy" or "falsy".  console.log() the value, 
//whether the value is 'truthy' or 'falsy', along with your reasoning why using String interpolation.
// values : 
// 20
// 0
// "zero";
// const zero = 20;
// null
// "0"
// !""
// {}
// () => {console.log("hello TEKcamp!");
// 125
// undefined
// ""
//if(values : ){console.log("truthy")}
//else {"falsy"}

console.log("In JavaScript, a truthy value is a value that is considered true when encountered in a Boolean context.\n All values are truthy unless they are defined as falsy (i.e., except for false, 0, -0, 0n, \"\", null, undefined, and NaN).)");

let items, values;
truthyFalsy = (item)=>{
    if(item){
        console.log("TRUTHY:boolean conditional resolved to true")
    } else{
        console.log("FALSY: boolean conditional resolved to false")

    }
}
console.log(" If the term 'values' was a variable it will return falsy as it has not been initialized and will resolve to undefined. " + truthyFalsy(values));
console.log("All numbers are truthy. so number 20 is truthy " +truthyFalsy(20));
console.log("0 is falsy "+ truthyFalsy(0));
console.log("'const zero = 20' can't be coerced to boolean");
console.log("A  non empty string is truthy " + truthyFalsy("zero"));
console.log("A  non empty string is truthy " + truthyFalsy("0"));
console.log("Not of an empty string turns true in boolean " + truthyFalsy(!""));
console.log("An object type converts itself to true " + truthyFalsy({}));
console.log("() => {console.log(hello TEKcamp!); is a function and an object so it will be truthy");
console.log("125 is a numeric and it resolves to true " + truthyFalsy(125));
console.log("Undefined is falsy by definition" + truthyFalsy(undefined));
console.log("An empty string resolves itselves as false in boolean " + truthyFalsy(""));
console.log("'if(values : ){console.log(truthy)})' can't be type coerced to boolean");
console.log("'(else {falsy}))'can't be type coerced to boolean") ;
console.log("Null is Falsy in boolean" + truthyFalsy(null));


/************************************************************* */
// Problem 4:
// Refactor the following code using a switch statement:

console.log("Problem 4 Switch");

const day = "friday";
switch (day)
{
    case "monday":
        console.log("we got a long week ahead of us...");
        break;
    case "tuesday":
        console.log("tuesday's are still beterr than mondays, but LONG way to go still");
        break;
    case "wednesday":
        console.log("We are smack dab in the middle of the week");
        break;
    case "thursday":
        console.log("Thursday night... the mood is right");
        break;
    case "friday":
        console.log("TGIF.  Friday truly is the best day of the week!");
        break;
    default:
        console.log("It's a weekend!")

}

/*if(day === "monday") {
    console.log("we got a long week ahead of us...");
} else if(day === "tuesday") {
    console.log("tuesday's are still beterr than mondays, but LONG way to go still");
} else if (day === "wednesday") {
    console.log("We are smack dab in the middle of the week");
} else if (day === "thursday") {
    console.log("Thursday night... the mood is right");
} else if (day === "friday") {
    console.log("TGIF.  Friday truly is the best day of the week!")
} else {
    console.log("It's a weekend!")
}

/************************************************************* */
// Problem 5: Refactor the following functions to use a ternary expression:


/*if (age > 21) console.log("adult"); else {
    console.log("minor");
}

if (age > 13 && age < 19) console.log('teen'); else {
    console.log("not a teenager");
};

if (age > 65) console.log("retired"); else {
    console.log("still working...");
} */
console.log("Problem 5 ternary operator");

const age = 10;
(age >21)? console.log("adult"): console.log("minor");
(age > 13 && age < 19)?console.log('teen'): console.log("not a teenager");
(age > 65)? console.log("retired"): console.log("still working...");


/************************************************************* */
// Problem 6: Create an object literal that represents yourself.  
//set it to a variable that appropriately describes the object.  Include the following properties:
/*
-name
-age
-gender
-hobbies
-profession
-education

-add a method on your object, named learn. the learn method should print the value of the name property using the 'this' keyword.

-add another method on your object of any action you want to perform, using some property that exists on your object, making sure to utilize the 'this' keyword.
*/

//your code...
console.log("Problem 6 Object Method");
var Sabitha = {
    name:"Sabitha Radhakrishnan",
    age: 39,
    gender: "female",
    hobbies:["reading","baking","hiking"],
    profession: "student",
    education: "BE",
    calcYear: function(){
        return 2020-this.age;
    },
    learn: function(){
        console.log(this.name);
    }
};

Sabitha.year=Sabitha.calcYear();
Sabitha.learn();
console.log(Sabitha);
/************************************************************* */
// Problem 6: Create an object literal that represents any object in the real world that you like.  
//Try to come up with a realistic set of properties and methods that would accurately describe that object.  
//In at least one of your methods, use the this keyword to refer back to one of the properties you defined on this object literal.  

//your code...
console.log("Problem 7 Object Literal");

var discount;
var Lego = {
    name:"London",
    theme: "Architecture",
    price: "39.99",
    itemNo: 21034,
    noPieces:460,
    vipPoints: 260,
    calcDiscount: function(discount){
        return this.price*discount
    }
};
console.log(Lego);
console.log("The discount on this lego set is $" + Lego.calcDiscount(.15)+ " on the full price of "+ Lego.price);


/************************************************************* */
//Problem 7: create a function that outputs your 3 favorite data types, with a message explaining why you like that data type.

//your code...
console.log("Problem 8 Datatypes");

var data1, data2,data3;
console.log("Problem 8 Function data types");
var dataType = function(){
    var type1 = function myFunc(){};
    console.log("'Function is a datatype' " + type1 +" 'Functions are powerful'");
    var type2 = ["o","b","j","e","c","t","s"];
    console.log("'Arrays are objects' " + type2 +" 'Objects are containers for named values'");
    var type3 = true;
    console.log("'Boolean' " + type3 +" 'Booleans are often used in conditional statements'");
}
dataType();
//console.log(datatype.data1()+ "Functions are powerful");

/************************************************************* */
//Bonus assignments:

//1. Create a Higher Order Function called multiple(x) that takes a single parameter.  This HOF should return another function fn(y) that takes another single parameter y. 
// This inner function should compute the product of it's parameter with the parameter passed into multiple.  Use this returned "first-class" function to compute triples of any given number.

//your code...
console.log("Bonus 1 HOF");

var x,y,z;
function multiple(x){
    return function(y){
        return y*x;}
    }
var triple = multiple(3);
var z =Number(prompt("Enter number to be tripled"));
console.log("Triple of the number "+ z +" is "+ triple(z));



// 2. Write an outer function called stockGain that has cost basis (basis) as a parameter; 
//declare a variable called message that holds " is how much the stock has increased". 
// Return an inner function with years (yrs) as a parameter and declare a variable for growth rate (r) of 5%. 
//Console log your calculation.

// Once finished, declare a variable called futureValue that holds your stockGain function and enter any amount for the cost basis and
// a number for the number of years.  Run the function returned by the higher order function to display the future value of the stock.  

//your code...

console.log("Bonus 2 HOF Stockgain");

function stockGain(basis){
    var message=" is how much the stock has increased";
    return function(yrs){
        var r = .05;
        console.log("$" +basis*r*yrs, message +" on your investment of $"+basis+" over " + yrs + " years with a growth rate of " + r*100 + "%" );
    }
}
var basis = Number(prompt("Enter the amount(cost basis)"));
var futureValue = stockGain(basis);
var yrs = Number(prompt("Enter number of years to calculate future value" ));
futureValue(yrs);
