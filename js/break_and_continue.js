"use strict";
do {
    var userNumber = Number(prompt("Enter an odd number between 1 & 50"));
    if (userNumber < 1 || userNumber > 50) {//ask for odd no 1-50
        alert("Invalid number, Please enter a number between 1 & 50")
    } else if (userNumber % 2 === 0) {
        alert(userNumber + " is not odd , Please enter an odd number")
    } else if (isNaN(userNumber)) {
        alert(userNumber + " is not a number , please enter a number")
    } else {
        alert(userNumber + " is valid .Thank you!");
        break;
    }
}while (true);//number is not odd keep prompting

for(var i = 1; i <= 50; i++){
    if(i % 2 === 0){
        continue;
    }

    if(i === userNumber){
        console.log("Yikes! Skipping number: " + i);
    }else {
        console.log("Here is an odd number: " + i);
    }
}