"use strict";
console.log("Welcome to Intro to Objects!");

/*********************************************
*              INTRO TO OBJECTS
******************************************** */

/**
 * Objects are an unordered collection of related data in the form of
 * key:value pairs
 */

var rubberDuck = {
    color: "yellow",
    role: "emotional support",
    name: "cody"
};
console.log(rubberDuck);


/*********************************************
 *              CREATING NEW OBJECTS
 ******************************************** */

/**
 * Objects can be created in JavaScript through the use of the 'new
 * Object()' constructor, or Object literal notation using curly braces.
 */



/**
 * TODO TOGETHER: Create a new variable (of type Object) and call it 'myPhone'. Use either the constructor or Object literal notation.
 */
var myPhone=new Object();
console.log(myPhone);
myPhone.color="silver";
myPhone.model="android";
myPhone.storage="512GB";
console.log(myPhone.color);
console.log(myPhone.storage);
console.log(myPhone.model);
myPhone.ring=function (){
    console.log("ring phone");
}
myPhone.ring();
//
// var myPhone={
//     color:"gold",
//     model:"Iphone",
//     storage:"128GB",
//     ring: function() {
//         console.log("ring ring");
//     },
//     picture:function() {
//         console.log("take a picture");
//     }
// };
//
// console.log(myPhone.color);
// console.log(myPhone.model);
// console.log(myPhone.storage);
// myPhone.ring();
// myPhone .picture();


/**
 * TODO: Create a new Object and call it 'myMac'. use either the constructor or Object literal notation.
 */
var myMac={};

/*********************************************
 *              PROPERTIES
 ******************************************** */

/**
 * TO DO TOGETHER: Using dot notation, assign these properties to your phone
 * Object: 'model', 'color', 'storage'. Console log your phone variable to
 * check that the information was stored properly.
 */

/**
 * TO DO: Using dot notation, assign these properties to your Mac
 * Object: 'model', 'size', 'year', Console log the Object to check if the
 * information was stored properly
 */

myMac.model = "Mac book air";
myMac.size = "13 inch";
myMac.year = "2012";
console.log(myMac);
/**
 * TO DO TOGETHER: Assign a 'name' property to your phone. This should be of
 * type Object and store properties for the user's 'firstName' and
 * 'lastName'. Use console log to access the user's 'lastName'
 */

myPhone.name=
{
    firstName:'jaya',
     lastName:'seyyadri'
};

console.log(myPhone.name.firstName);
console.log(myPhone.name);

myPhone.apps=['calculator','youtube','slack'];
console.log(myPhone);
console.log(myPhone.apps[1]);
myPhone.apps.forEach(function (app){
    console.log(app);});
/**
 * TO DO: Using dot notation, assign a property called 'folders' that stores
 * an Array representing different folders in your system.
 */

myMac.folders=['Coding','Documents','IntelliJ','Sublimetext'];
console.log(myMac);
console.log(myMac.folders);

myMac.folders.forEach(function (folder){
   console.log(folder);
});

/**
 * TO DO: Assign a 'login' property. This should be an object that stores
 * 'username','fakePassword' and 'email'
 */

myMac.login ={
    username:"jaya",
    fakePassword:123,
    email:"a@bcd.com"
}

console.log(myMac);
/*********************************************
 *                  METHODS
 ******************************************** */

/**
 * TO DO TOGETHER: We are going to add functionality to our phone Object.
 * Using the dot notation, add a method named 'call' that console logs the
 * message: "Dialing..."
 */

/**
 * TO DO: Let's add functionality to our Mac Object. Create a method named
 * 'powerOn'. When called, this should display a console message that says
 * "Powering on..."
 */

/**
 * TO DO TOGETHER: Let's add one more piece of functionality. Create a
 * method on the phone object that returns a message displaying the user's
 * firstName and lastName. Hint: use the 'this' keyword.
 */

/**
 * TO DO: One last thing. Let's add a 'currentUser' method that displays the
 * Mac user's 'username' and 'email'. Use the 'this' keyword to reference
 * the properties we created earlier.
 */


/*********************************************
 *                  NESTED VALUES
 ******************************************** */

/**
 * Because an Object is a collection of data and functionality, very often
 * we will see nested values. This can mean an Array of Objects containing
 * Arrays, Objects containing other Objects and so on.
 *
 * It is important to understand the shape of our data so that we can
 * navigate through it.
 */


/*********************************************
 *                  ARRAYS OF OBJECTS
 ******************************************** */

/**
 * If we have an Array of Objects, we can iterate through it to access each
 * Object element and pull the properties and methods that we need.
 */
