//Complete the following problems: 

/************************************************************* */

// Problem 1:
// Write a JavaScript function that determines whether a string is empty. 
//If the string is empty, the output should be true, otherwise it should return false. 
//your code...
console.log("Problem 1 Empty string test");
var stringtest = function(){
var string =prompt("Enter a string to test if its empty");
if(string==="") console.log(true + " the string is empty");
else console.log(false +" the string is not empty");
}
stringtest();

/************************************************************* */

// Problem 2:
// Declare a variable that holds a string (e.g., ‘Learning JavaScript is fun!’). 
//Replace a word so that the output uses the new word instead (e.g., ‘Learning JavaScript is cool!). 
//your code...
console.log("Problem 2 Replace a word in string");

var string = "Learning Javascript is fun";
var newString = string.replace("fun","cool");
console.log(newString);

var string = prompt("Enter a sentence that ends with the word fun");
var newString = string.replace("fun","cool");
console.log(newString);

/*if (string!==""){
    var pos = string.search("fun");
    if(pos=-1){
        console.log("Could not find the word 'fun' in the text entered");
    } else {
        var newString = string.replace("fun","cool");
        console.log(newString);
    }
} else console.log("Could not find the word 'fun' in the text entered");*/


/************************************************************* */
// Problem 3:
// Write a function that declares an array of numbers from one to five and 
//returns another array with the squared value of each number from the first array. 
//Use an arrow function and one of the built-in array methods. 
//your code...
console.log("Problem 3 Arrays");
let array1=()=>{
    var arr1 = [1,2,3,4,5];
    var arr2 =[];
    for (var i=0;i<5;i++){
        arr2[i]=arr1[i]**2;
    }
  return arr2.valueOf()  
}

console.log(array1());


/************************************************************* */
// Problem 4:
// Now declare another array of numbers that has the following numbers: 1, 3, 5, 7, 9, 1, 3, 5.
// Write a JavaScript program that returns an array of the numbers that are greater than 3.
// Use an arrow function and one of the built-in array methods.
//your code...
console.log("Problem 4");
const arrayA= [1, 3, 5, 7, 9, 1, 3, 5]
greater3 = (arrayA) =>{
    return arrayA >= 3;
}
console.log(arrayA);
console.log(arrayA.filter(greater3));



/************************************************************* */
// Problem 5:
// Now declare another array of numbers that has any 5 numbers.
// Write a JavaScript program that returns the sum of those numbers.
// Use an arrow function and one of the built-in array methods. 
//your code...
console.log("Problem 5");

let arrIni = [51,42,15,27,9]
addElements = (total, item)=>{
    return total+item;
}
const sum = arrIni.reduce(addElements, 0);
console.log("The sum of array elements is " + (sum));


/************************************************************* */
// Problem 6:
// DNA is made up of base pairs where every G is paired with a C and every T is paired with an A. 
// Write a function that takes in a DNA string as a parameter and returns an array with the complementary strand.
// For example, a string of "GCTA" would return an array of ["C", "G", "A", "T"].  
//your code...
console.log("Problem 6");
//var strand = "GCTA";
var input = prompt("Enter a DNA Strand with GCTA");
var strand = input.toUpperCase();
//console.log(test);
var arrStrand =strand.split("");
console.log(arrStrand);
var complement = function (arrStrand){
    var compStrand =[];
    for( var i=0; i< arrStrand.length; i++){
        compStrand[i]= complementitem(arrStrand[i]);
    }
    return compStrand;
}

var complementitem = function(el){
    switch(el){
        case "G":return "C"; break;
        case "T":return "A"; break;
        case "C":return "G"; break;
        case "A":return "T"; break;
        
    }
}

console.log(complement(arrStrand));
/************************************************************* */
// Problem 7:
// 7.a - Write a function to find the maximum numerical value of the given array.  
//Get rid of any non numerical values.  Convert the strings that are numbers to an actual number data type. 
// ("one" => 1) ("1" => 1).  Use array methods to perform this task.  
console.log("Problem 7");
const numbers = [2,23,1,2,1,1,1,2,2.5,20,200,2000,,{k:1},20000,19999,1878,140,23,4,"sk",true,true,"true-dat","nice","one","two","three","3","tea",[]];

//console.log(numbers);
function maxNumber(numbers) {
for(let i = 0; i<numbers.length; i++){
    if (typeof(numbers[i])==='number'){

    } else if (typeof(numbers[i])==='undefined'){
        numbers.splice(i,1); 
    }else if (typeof(numbers[i])==='string' && numbers[i]=="one"){
        numbers[i] = 1;
    } else if (typeof(numbers[i])==='string' && numbers[i]=="two"){
        numbers[i] = 2;
    }else if (typeof(numbers[i])==='string' && numbers[i]=="three"){
        numbers[i] = 3;
    }else if (typeof(numbers[i])==='string' && numbers[i]=="3"){
        numbers[i] = 3;
    }else if (typeof(numbers[i])==='string'){
        numbers.splice(i,1);
    }
}
for(let i = 0; i<numbers.length; i++){
    if (typeof(numbers[i])==='string'){
    numbers.splice(i,1);
}
for(let i = 0; i<numbers.length; i++){
    if (typeof(numbers[i])==='object'){
    let temp =Object.values(numbers[i]); numbers[i]=temp;
}
}
for(let i = 0; i<numbers.length; i++){
    if (typeof(numbers[i])==='object'){
    numbers.splice(i,1);
}
for(let i = 0; i<numbers.length; i++){
    if (typeof(numbers[i])==='boolean'){
    numbers.splice(i,1);}
}
}
}
numbers.sort(function(a, b){return a - b})
const maxNumber = numbers[numbers.length-1];
return maxNumber;

}
console.log("The maximun numerical value of the array " + numbers + " is " + maxNumber(numbers));
//console.log(numbers);

// 7.b -Write a function that sorts the given numbers array. 
// Allow the function to sort the array in descending order

function sortNums(numbers,desc=false) {
    numbers.sort(function(a, b){return b - a});
}
sortNums(numbers)
console.log("The array in descending order is " + numbers);


/************************************************************* */
// Problem 8:
//add an example of at least 5 JavaScript data types to the given mapObj. 
// The key is the example data type, and the value is the name of the data type.  
//An object data type has already been set as the 1st key / val pair.
console.log("Problem 8");
let mapObj = new Map();
const compObj ={"company" : "Teksystems"}

mapObj.set(compObj,"object");
mapObj.set("Myname","String");
mapObj.set(8,"Number");
mapObj.set(true,"Boolean");
mapObj.set([1,2,3,4,5],"Array");
mapObj.set("","Undefined");
console.log(mapObj.has({"company" : "Teksystems"}));  
console.log(mapObj.has("Myname"));  
console.log(mapObj.has(8));  
console.log(mapObj.has(compObj));  


//The above console.log() statmeent returns false.  Write another console.log() statement explaining why this line of code prints false. 
console.log("The previous line returns false as the has() property returns a boolean value depending on whether the specified key is present or not and objects are stored as tuples in maps");
// Refactor the code on line 106, so you can successfully check to see if {company : "TEKsystems"} exists in the mapObj.

//your code...

//loop through the mapObj and create a new array of only the data types, leaving out the example keys of the mapObj.  Use array methods to do this.  Example output : ['string',number','boolean',array','object']
var x = [...mapObj.values()];
console.log(x);


/************************************************************* */
//Problem 11:

let ones = [1,11,111,1111,11111,111111,1111111,11111111,111111111,1111111111];
function reverseArray(arr) {
    var newArray = [];
    for (var i = arr.length - 1; i >= 0; i--) {
      newArray.push(arr[i]);
    }
    return newArray;
  }
  console.log(reverseArray(ones));
console.log(ones);

//reverse the array, without modifying the ones array.


/************************************************************* */
//Problem 12:
//create a function called performer(cb) that takes in a callback function and runs that callback function. 
// It should return the output of the callback function.

function performer(cb) {
    var x= Number(prompt("Enter a number to be squared"))
    console.log("Square of the number " + x +" is " +cb(x));
}
function cb(y){
        return y*y;}
performer(cb);



/************************************************************* */
//Bonus assignment:
//research a new feature of ES6+ and create an example of it's use case here.  Be sure to write comments explaining what the feature is and why it is useful.
console.log("Arrow functions is a new feature in ES6. Arrow functions allows a short syntax for writing function expressions. ");
console.log("You don't need the function keyword, the return keyword, and the curly brackets.");
console.log("Arrow functions do not have their own this. They are not well suited for defining object methods.");
console.log("Arrow functions do not have their own this. They are not well suited for defining object methods.");
console.log("Arrow functions are not hoisted. They must be defined before they are used.");
// ES5
var x = function(x, y) {
    return x * y;
 }
console.log(x(2,3));
 // ES6
 const z = (x, y) => x * y;
 console.log(z(2,3)); 