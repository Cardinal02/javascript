//Complete the following problems: 

// Problem 1:
// Part 1: Write a JavaScript function that converts the current temperature from Fahrenheit to Celsius.
// Declare a variable for the current temperature then store the Celsius temperature into a variable. 
//Console log the variable.
console.log("Problem 1 temp conversion");
var tempCelcius, tempFar;
var convToCelcius = function(tempFar){
    tempCelcius = (tempFar-32)*5/9;
    return(tempFar +' Fahrenheit is '+ tempCelcius+' in Celcius');
}
tempFar = Number(prompt("Enter temperature in Fahrenheit"));
console.log(convToCelcius(tempFar));


// Part 2: Write another funciton that converts the Celsius temperature back to Fahrenheit. 

//your code...

var convToFar =function(tempCelcius){
    tempFar= (tempCelcius*9/5)+32;
    return (tempCelcius +' celcius is '+ tempFar+' in Fahrenheit');
}
tempCelcius = Number(prompt("Enter temperature in Celcius"));
console.log(convToFar(tempCelcius));


/************************************************************* */
// Problem 2:
// Write a JavaScript function to determine if someone is old enough to vote. Declare a variable for age and
// write a conditional statement for whether that age is old enough to vote. Console log "yes" or "no"
//your code...
console.log("Problem 2 Voting Age");

var age;
var votingAge= function(age){
    if (age>17){
        console.log("Yes")
    } else{
        console.log("No")
    }
}
age=Number(prompt("Enter age"));
votingAge(age);


/************************************************************* */
// Problem 3:
// Write a JavaScript function that converts a string to an array. 
//Declare a string variable with "The five boxing wizards jump quickly."
// Use the split() method to turn the string into an array of strings. 
//(Be sure you separate the string into words, not characters.)
// After you have finished, use the join() method to change the array back into a string.
//your code...
console.log("Problem 3 String split and join");

var str="The five boxing wizards jump quickly.";
var arr=str.split(" ");
console.log(arr);
var str1=arr.join(" ");
console.log(str1);

/************************************************************* */
// Problem 4:
// Write a JavaScript function with a function that reverses your telephone number. 
//Use the split() and join() methods from the previous problem as well as the toString()
// method to convert a number into a string and reverse() method to reverse an array in place.
//your code...

console.log("Problem 4");

var telNum, revtel;
var revTelNum = function(telNum){
var x = telNum.toString();
var revtel= x.split("").reverse().join("");

return revtel;
}
telNum=Number(prompt("Enter your telephone number"));

console.log("The reverse of the give telephone number " + telNum + " is "+ revTelNum(telNum));

/************************************************************* */
// Problem 5:
// Write a JavaScript function creates a car object using information about your car. 
//Include the make, model, year, and color. Write a function to get the year, color, make, and model in that order.
//your code...

/*var make, model,year,color;
class car {
    constructor(make, model, year, color) {
        this.make = make;
        this.model= model;
        this.year=year;
        this.color=color;
    }
}
  
make=prompt("Enter car's Make");
model=prompt("Enter car's Model");
year=prompt("Enter car's year");
color=prompt("Enter car's color");
var mycar= new car(make, model,year,color);
console.log(mycar);*/

/*----------------------------------------------------------------------------------------------*/
console.log("Problem 5 Car Object");

var make, model,year,color;
function car (year, color, make, model) {
        this.year=year;
        this.color=color;
        this.make = make;
        this.model= model;

    }
year=prompt("Enter car's year");
color=prompt("Enter car's color");
make=prompt("Enter car's Make");
model=prompt("Enter car's Model");
var mycar= new car(year,color, make, model);
console.log(mycar);
  
/************************************************************* */


// Problem 6:
// Write a JavaScript function with a loop that will iterate from 0 to 15. Each iteration,
// the for loop will check if the current number is odd or even and display the output.
//your code...
console.log("Problem 6 Loop Iteration even oddd");

for (var i=0;i<=15;i++){
    if(i==0)
    {
        console.log(i +" is neither even nor odd");
    }else if (i%2==0){
        console.log(i +" is even");
    }else{
        console.log(i +" is odd");
    }
}




/************************************************************* */
// Problem 7:
// Write a JavaScript function that iterates the integers from 1 to 100.
// For multiples of 3 print "TEK" instead of the number and for multiples of 5, print "camp." 
//For numbers that are multiples of both 3 and 5, print "TEKcamp."

//your code...
console.log("Problem 7 Loop Iteration TEKcamp");

for (var i=1;i<=100;i++){
if (i%5==0 && i%3==0){
console.log("TEKcamp");
} else if  (i%3==0){
    console.log("TEK");
}else if (i%5==0){
console.log("camp");
}else{
    console.log(i)
}
}




/************************************************************* */
// Problem 8:
//const nums = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
// Write a "for" loop that console.log()'s the first
// value in the nums array, and every 3rd number, i.e. 0, 3, 6,
// and 9: the zeroth, third, sixth, and ninth values.

//your code...
console.log("Problem 6 Log every 3rd Array element");

const nums = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
for (var i=0;i<=nums.length;i++){
    if (i%3==0){
        console.log(nums[i]);
    
}
}

/* Problem 9:
const foodArray = [ 'potatoes', 'tamales', 'lemon','strawberries','chocolate', 'pudding', {school : 'TEKcamp'} ];
//access the value of the last element of the array and set it to a variable called school.  
//print the school variable to the console.*/
console.log("Problem 6 Arrrays");

const foodArray = [ 'potatoes', 'tamales', 'lemon','strawberries','chocolate', 'pudding', {school : 'TEKcamp'} ];
var school=foodArray[foodArray.length-1];
console.log(school);


const adjectiveArray = [ 'salty', 'spicy', 'sour', 'sweet', 'rich','creamy','amazing'];
// Using both nameArray and adjectiveArray, make a
// "for" loop that console.log()'s a sentence for each
// corresponding value in the arrays. Add the word "is" or "are" depending on if the food is singular or plural.  "Potatoes are salty", "Lemon is sour".


for (var i =0;i<foodArray.length-1; i++)
{
    var lastchar =foodArray[i].charAt((foodArray[i].length)-1);

    if(lastchar =='s')
    {
        console.log(foodArray[i]+" are "+ adjectiveArray[i]);

    } else{
        console.log(foodArray[i]+" is "+ adjectiveArray[i]);

    }
    

}
/************************************************************* */
// Bonus Assignment: Create 4 mathematical function expressions, add,subtract,multiply,divide. 
// put them in an array, and create a doMath() function that randomly does one of the 4 operations whenever
// it is run.  the doMath() function should print out what mathetmatical function was carried out.  
//The doMath() function should return the computed value of any operation performed.
console.log("Bonus Problem ");

var a,b,i;
var arrayGen = function (a,b){
    const operations = [];
    operations[0] = a+b;
    operations[1] = a-b;
    operations[2] = a*b;
    operations[3] = a/b;
    return operations;
    }


    a=Number(prompt("Enter first number"));
    b=Number(prompt("Enter second number"));
    const operations= arrayGen(a,b);
   // console.log(operations);
    var i = Math.floor((Math.random() * 3) + 1);
    //console.log(i);
    //console.log(operations[i]);
    switch (i)
{
    case 0: console.log("Mathematical Addition");
    break;
    case 1: console.log("Mathematical Subtraction");
    break;
    case 2: console.log("Mathematical Multiplication");
    break;
    case 3: console.log("Mathematical Division");
    break;
}


var doMath = function(i) {
switch (i)
{
    case 0: console.log(a+" + " +b +" = "+ operations[i]);
    break;
    case 1: console.log(a+" - " +b +" = "+ operations[i]);
    break;
    case 2: console.log(a+" * " +b +" = "+ operations[i]);
    break;
    case 3: console.log(a+" / " +b +" = "+ operations[i]);
    break;
}
}
doMath(i);
