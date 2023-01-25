let functionOne = function(number){
    let digitsOfNumber = number.toString().length
    console.log(`The number has ${digitsOfNumber} digits`)
};
functionOne(46565);

let functionTwo = function(inputedNumber){

    console.log(inputedNumber);

    if(inputedNumber % 2 == 0){
            console.log("The number is even")
        }else{
            console.log("The number is odd")
        };
}
functionTwo(prompt("Please enter number"));


let functionThree = function(possOrNeg){

    console.log(possOrNeg)

    if(possOrNeg > 0){
        console.log("The number is positive")
    }else if(possOrNeg == 0){
        console.log("The number is 0")
    }else{
        console.log("The number is negative")
    }
};

functionThree(prompt("Please enter Number"));



//Exercise 2

let usersInput = document.getElementById("exerciseTwo");
let btn = document.getElementById("myBtn");
let resultDiv = document.getElementById("result");

let exerciseTwo = (str) => {
   let counter = 0;
   let vowels = "aeiou"

   for(let i = 0; i < str.length; i++){
    if(vowels.indexOf(str[i].toLowerCase()) > -1){
        counter++;
    }
   }
   console.log(`This string has ${counter} vowels`)
}
exerciseTwo("This is a random message");

