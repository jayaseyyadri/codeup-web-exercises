"use strict"

console.log("Hello from external JavaScript.");

alert("Welcome to my Website!");

var userInput = prompt("What is your favorite color ?");
var alertMessage = "Great, " + userInput + " is my favorite color too !";
alert(alertMessage);


var dailyRentalRate = prompt("What is the daily rental rate?");
var daysLittleMermaid = Number(prompt("How many days would you like to rent the little Mermaid ?"));
var daysBrotherBear = Number(prompt("How many days would you like to rent the Brother Bear ?"));
var daysHercules = Number(prompt("How many days would you like to rent the Hercules? "));
var totalCost = ((daysLittleMermaid + daysBrotherBear + daysHercules) * dailyRentalRate);
var alert = alert("You owe $" + totalCost.toFixed(2));

var facebookRatePerHour = Number(prompt("What is your facebook hourly pay rate ?"));
var googleRatePerHour = Number(prompt("What is your google hourly pay rate ?"));
var amazonRatePerHour = Number(prompt("What is your amazon hourly pay rate ?"));
var facebookWorkHours = Number(prompt("Please input number of hours worked at facebook : "));
var googleWorkHours = Number(prompt("Please input number of hours worked at google"));
var amazonWorkHours = Number(prompt("Please input number of hours worked at amazon:"));

var faceBookPay = (facebookWorkHours * facebookRatePerHour);
var googlePay = (googleWorkHours * googleRatePerHour);
var amazonPay = (amazonRatePerHour * amazonWorkHours);

var totalPay = Number(faceBookPay + googlePay + amazonPay);
alert(" You total pay is  $ "+ totalPay.toFixed(3));

var classNotFull = confirm("Class is not full");
var noConflict = confirm("No conflicting schedule");
var canEnroll = (classNotFull) && (noConflict);
alert=(" Student Enrolled" +canEnroll);

var offerValid = confirm("Is the offer valid ?");
var isPremium = confirm("Are you a premium user !");
var numberOfItems = Number(prompt("How many items do you have? "));

var discountApplied = (offerValid && (isPremium)|| numberOfItems>2);
alert("You qualify for discount ," + discountApplied);
