"use strict";

// console.log("hello from conditionals lec.js!");
//
// // ================ REAL WORLD SCENARIO ================
// // If a user is an admin,show a specific navbar
// // If weather is rainy, show rain icon
// // If number of lives is 0, game is over
//
//
// // ================ IF STATEMENT SYNTAX ================
//
// // if(condition){
// // code here runs if condition evaluates to true
// // }
//
//
// // // ================ IF STATEMENT EXAMPLES ================
// // //TODO Together: Show a specific navbar if user is admin
// //
// // // if(isAdmin){
// // //      //show navbar
// // // }
// //
// //
// //
// // //TODO Together: Send a 20% off coupon if its users birthday
// //
// // // if(isBirthday){
// // //     send coupon
// // // }
// //
// // //TODO Together: Write an if statement that alerts "It's raining" if isRainy is true
// // //if(isRaining){
// // //alert("its raining");
// // //}
// //
// // //TODO Together: Write an if statement that alerts the user whether or not they have enough money to buy a new item. Assume there are no hidden fees or taxes.
// //
// // //if(cost>balance){
// // //console.log"not Enough balcance
// //
// //
// // }
// //
// //
// // //TODO: Write an if statement that alerts "Sorry, game over" if numberOfLives is 0
// // var  livesLeft=2
// // if(livesLeft===0){
// //     console.log("Sorry, game over");
// // }
// //
// //
// // //TODO: Write an if statement that alerts "It's snowing!" if weather is equal to "snowing"
// // var weather =sunny;
// // if(weather==='snowing') {
// //     alert("it's snowing");
// // }
// //
// // //TODO: Write an if statement that alerts true if numberInput is greater than but not equal to 10
// // var userInput = 20;
// // if(userInput > 10 && userInput!==10){
// //     alert("true");
// // }
// //
// //
// //
// // //TODO: EXTRA BONUS - Refactor each of the previous statements as functions.
// //
// //
// //
// //
// //
// // // =============== IF / ELSE SYNTAX ================
// //
// // // if(condition){
// // //     // code here runs if condition evaluates to true
// // // } else {
// // //     // code here runs if condition evaluates to false
// // // }
// //
// //
// //
// // // =============== IF / ELSE STATEMENT EXAMPLES ================
// // //TODO Together: Show a specific navbar if user is admin, else show a different navbar
// //
// // //if (isAdmin){
// // //"show navbar"
// // // }else{
// // //     console.log(bar);
// // // }
// //
// // //TODO Together: Write an if statement that alerts "It's raining" if isRainy is true, else return "have a nice day!"
// //  var isRainy=false;
// // if(isRainy){
// //     alert("It's raining" );
// // }else {
// //     alert(("have a nice day"));
// // }
// //
// //
// // //TODO: Write an if statement that alerts "Sorry, game over" if numberOfLives is 0, else alert "Next Level!"
// // var  livesLeft=2
// // if(livesLeft===0){
// //     alert("Sorry, game over");
// // }else
// // {
// //     alert("Next level");
// // }
// // //TODO: Write an if statement that alerts "It's snowing!" if weather is equal to "snowing", else alert "Check back later for more details!"
// // var weather =sunny;
// // if(weather==='snowing') {
// //     alert("it's snowing");
// // }else {
// //     alert('Check back later for more details');
// // }
// //
// //
// // //TODO: Write an if statement that alerts true if numberInput is greater than 10, else alert "the number is less than 10"
// // var userInput = 20;
// // if(userInput > 10 ){
// //     alert("true");
// // }else {
// //     alert('the number is less than ten');
// // }
// //
// //
// // //TODO: Refactor todo#1 as a function named checkIfGameIsOver, that accepts numberOfLives and returns "Sorry, game over" if numberOfLives is 0, else return "Next Level!.
// //
// // function checkIfGameIsOver(numberOfLives){
// //     if(numberOfLives===0){
// //         console.log("Sorry game is over ");
// //     }
// //     else {
// //         console.log("next level");
// //     }
// // }
// //
// // console.log(checkIfGameIsOver(3));
// //
// // //TODO: EXTRA BONUS - Refactor todo#2 from above as a function.
// //
// // var userInput = 20;
// //
// //
// // function greaterThanTen(userInput){
// //     if(userInput > 10 && userInput!==10){
// //        return true;
// //     }
// // }
// //
// // console.log(greaterThanTen(23));
// //
// // // SHOULD WE DELETE STUFF EXAMPLE
// //
// // var shouldWeDelete=confirm("should We Delete  ?")
// //
// // if(shouldWeDelete) {
// //     alert("We're deleting xys files");
// // }else{
// //     alert("Operation canceled");
// // }
// //
// //
// //
// // //TODO: Write a confirm asking the user if they are 13 years of age or older. If they are, alert "You may proceed", if they are not, alert "Sorry, you are not able to proceed"
// //  var ageOver13 =confirm( "Are you over 13?");
// // if(ageOver13){
// //     alert("You may proceed");
// // }else{
// //     alert("\"Sorry, you are not able to proceed");
// // }
// // // ================ IF / ELSE IF / ELSE STATEMENT SYNTAX ===============
// // // if(condition1){
// // //     // code here runs if condition evaluates to true
// // // }else if (condition2){
// // //     // code here runs if condition1 is false *and* condition2 evaluates to true
// // // }else {
// // //     // code here gets executed if condition1 nor condition2 evaluate to true
// // // }
// //
// //
// //
// // // =============== IF / ELSE IF/ELSE STATEMENT EXAMPLES ================
// // //TODO Together: Write an if/else if/else statement that alerts "It's snowing!" if weather is equal to "snowing", alerts "It's raining" if weather is equal to "raining", alerts "have a nice day" for all other cases
// // var weather = "sunny";
// // if (weather==="snowing"){
// //     console.log("It's snowing");
// // }else if(weather==="raining"){
// //     console.log("It's raining");
// // }
// // else {
// //     console.log("Have a nice day");
// // }
//
// //TODO Together: refactor the above statement as a function
//  function todayWeather(weather){
// if (weather==="snowing"){
//     console.log("It's snowing");
// }else if(weather==="raining"){
//     console.log("It's raining");
// }
// else {
//     console.log("Have a nice day");
// }
// return weather;}
//
// console.log(todayWeather("windy"));
// // Together: PIZZA PREFERENCE EXAMPLE
//
// // var pizzaPreference = prompt("What kind of pizza do you like?");
// // console.log("User pizza input: " + pizzaPreference);
// //
// // if (pizzaPreference === "pineapple and hot sauce") {
// //     alert("What a coincidence, that's my favorite!");
// // } else if (pizzaPreference === "cheese") {
// //     alert("Just plain cheese? Okay...");
// // }  else if (pizzaPreference === "ham"){
// //     alert("Ham is easy to spell and awesome!");
// // } else {
// //     alert(pizzaPreference + " isn't my favorite, but let's order some!");
// // }
//



//TODO: Write a function that accepts a string that is a traffic light color as an input. When this function is called, it should return a message informing the user what to do when approaching that color light at an intersection.

// function trafficColorLight(color){
//     color = color.toLowerCase();
//     if(color=== "red"){
//         return("Stop!");
//     }else if (color === "yellow"){
//        return("Wait!");
//     }else if(color === "green")
//         return("Go go goo");
//     else {
//         return("Sorry wrong color buddy!");
//     }
//     }
// console.log(trafficColorLight("blue"));
// console.log(trafficColorLight("Red"));
// console.log(trafficColorLight("green"));




// ================ NESTED STATEMENTS ===============
//TODO Together: If user is under 15, they are not eligible for a learners permit,
// else they are. If they are eligible, check age.
// If they are 15 they are eligible for a learners permit,
// if they are 16 or older and have a permit, they are eligible for license,
// if they are 16 or older and do not have a permit, they are not eligble for a license.

// var canHavePermit =true;
// if(age < 15){
//     alert( "Not Eligible for learner's permit" );
// }else{
//     if(age === 15 ) {
//       alert("Eligible for learner's permit");}
//     else if(age >= 16 && canHavePermit===false ){
//        alert("Eligible for License");
//     }else if{age >= 16 && canHavePermit===true){
//         alert("Not Eligible for License");
//         }
//         else{
//             alert("Check with the DMV");
//         }
//     }
//             }
// }
//




// ================ TERNARY STATEMENT ================

//TODO Together: Regular way

// var message;
// var success = true;
//
// if (success) {
//     message = "Operation was successful.";
// } else {
//     message = "Oops, something went wrong.";
// }
// console.log(message);


// var success = true;
// var message = (success) ? "Operation was successful from tern." : "Oops, something went wrong from tern.";
// console.log(message)


//TODO: Refactor the following conditional as a ternary

// var weather = "sunny";
// var weatherMessage;

// if(weather === "rainy"){
//    weatherMessage = "It's raining!";
// } else {
//     weatherMessage = "Have a nice day!";
// }

//WRITE YOUR TERNARY STATEMENT HERE!
=
var weather = "sunny";
var checkWeather=(weather==="rainy") ? "It's raining!" : "Have a nice day!";
console.log(checkWeather);

// =============== SWITCH STATEMENT ================
//TODO Together:

// var pizzaPreference = prompt("What kind of pizza do you like?");
//
// switch(pizzaPreference) {
//     case "pineapple and hot sauce":
//         alert("What a coincidence, that's my favorite!");
//         break;
//     case "cheese":
//         alert("Just plain cheese? Okay...");
//         break;
//     default:
//         alert(pizzaPreference + " isn't my favorite, but let's order some!");
//         break;
// }


//TODO: Write a switch statement that evaluates weather as the condition. Check for "rainy", "sunny", "snow", and a default case.
case (checkWeather){
    case "sunny":

    ""
}

//TODO: Rewrite the intersection function from earlier as a switch statement.




// ================ REVERSE ENGINEERING =================
// Visit each of these links, outline the steps required to achieve each of these demonstrations. You can write code or just write the logic steps that would achieve each output


// 1) https://mdn.github.io/learning-area/javascript/building-blocks/allowance-updater.html


// 2) https://mdn.github.io/learning-area/javascript/building-blocks/simple-else-if.html


// 3) https://mdn.github.io/learning-area/javascript/building-blocks/simple-ternary.html

