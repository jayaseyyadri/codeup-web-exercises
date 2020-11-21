// "use strict";
//
//
// /*********************************************
//  *              .map
//  ******************************************** */
// //
// // const numbers = [1,2,3,4,5,6,7,8,9,10];
// //
// // // let newArray = [];
// // // numbers.forEach(function(number){
// // //     newArray.push(number + 1);
// // // });
// // //
// // // console.log(newArray);
// //
// //
// // // TODO TOGETHER: Let's map through the array of numbers and add 1 to each element. Console log the new copy of the array.
// // //
// // // let newArray=numbers.map(function (num ){
// // //     return num+1;
// // //
// // // })
// //
// // // console.log(newArray);
// // // //TODO: Map through the new array of numbers and this time multiply each element by 3. Console log the new copy.
// //
// // let newArray1=newArray.map(function (intoThree ){
// //     return intoThree*3;
// // })
// //
// // console.log(newArray1);
// //
// // //.map can be used for double checking for user input
// //
// //
// // // //Bonus: Refactor your functions using ES6
// //
// // let newArray=numbers.map (num=> num+1);
// //
// // let newArray1=newArray.map(intoThree=>intoThree*3);
// //
//
//
// // /*********************************************
// //  *              .filter
// //  ******************************************** */
//
// //.filter iterates & as long as whatever we are returning is a boolean you return it
// const binary = [1,1,1,1,0,0,1,1,1,1];
// // //
// // // // TODO TOGETHER: Let's filter through our binary and return all the true values. We'll store the new array in a variable named 'ones'
// // const ones=binary.filter(function (x){
// //     return x;
// // })
// // console.log(ones);
// // // // TODO: filter through binary again and this time, return all the false values.
// //or !x since ! is falsy value (loose equality
// //
// // const ones=binary.filter(function (y){
// //     return y===0;
// // })
// // console.log(ones);
//
// // // //Bonus: Refactor your functions using ES6
//
// // const ones=binary.filter(x=>x)
// // // console.log(ones);
// // const twos=binary.filter(y=>y===0)
// // console.log(twos);
//
// const fruitsAndVeggies = [
//     {
//         name: "banana",
//         type: "fruit"
//     },
//     {
//         name: "broccoli",
//         type: "vegetable"
//     },
//     {
//         name: "tomato",
//         type: "fruit"
//     },
//     {
//         name: "carrot",
//         type: "vegetable"
//     },
//     {
//         name: "apple",
//         type: "fruit"
//     },
//     {
//         name: "spinach",
//         type: "vegetable"
//     },
// ];
//
// // //
// // // // TODO: filter through the array of objects and return all fruit type object
// let fruitObj=fruitsAndVeggies.filter(function (a){
//     return a.type === 'fruit'
// })
// console.log(fruitObj);
// // // // TODO: filter through the array of objects and return all vegetable type objects.
// let fruitObj1=fruitsAndVeggies.filter(function (b){
//     return b.type === 'vegetable'
// })
// console.log(fruitObj1);
//
// fruitObj=fruitsAndVeggies.map(a=>a.type==='fruit')
// fruitObj=fruitsAndVeggies.map(a=>b.type==='vegetable')

// // /*********************************************
// //  *              .reduce
// //  ******************************************** */
//the initial value takes on the datatype of the element of what we are iterating

const numbersArray = [1, 2, 3, 4, 5];
// //
// // accumalator & element are parameters
// // //accumulation = 0
// // // add 1
// // //accumulation = 1
// // //add 2
// // //accumulation = 3
// // //add 3
// // //accumulation = 6
// // //add 4
// // //accumulation = 10
// // //add 5
// //
// // // final accumulation = 15
// //
// //
// // // TODO TOGETHER: Let's reduce our original numbers Array into one single value.
// //
// // // TODO: Using .reduce, subtract all numbers in the numbers Array from a starting point of 100.
// //

// const diff=numbersArray.reduce(function (currentDiff,currentNum){
//     return (currrentDiff-currentNum)
// },100)
//
// const diff=numbersArray.reduce(((currentDiff,currentNum)=>)
// currrentDiff-currentNum),100)


const shoppingCarts = [
    {
        apples: 8,
        bananas: 2,
        oranges: 4,
        grapes: 24
    }, {
        apples: 3,
        bananas: 6,
        oranges: 8,
        grapes: 12
    } , {
        apples: 0,
        bananas: 12,
        oranges: 0,
        grapes: 0
    } , {
        apples: 4,
        bananas: 0,
        oranges: 12,
        grapes: 10
    }
];

    // const totalApples=shoppingCarts.reduce(function (total, cart){
    // return (total + cart.apples)
    // },0);


    //
    // let totalFruits=shoppingCarts.reduce(function (currentTotal,carst){
    //     let apples=carst.apples;
    //     let bananas=carst.bananas;
    //     let orange=carst.oranges;
    //     let grapes=carst.grapes
    //
    // })


// // //
// // // // TODO: Using .reduce, return the total number of apples.
// // //
// // //
// const colors = ['red','orange','red','blue','blue','green','red'];
// let colorCount=colors.reduce(function (colorCount,color){
//     if (typeof colorCount[color] === 'undefined'){
//         colorCount[color] =1;
//     }else {
//         colorCount[color] +=1;
//     }
//     console.log(colorCount);
//     return colorCount;
//
// },{});
// console.log(colorCount);
// // // TODO: Count the number of times a color appears in this Array. Hint: your initial value should be an empty object.
// //
// //
const lyrics = ['we','all','live','in','a','yellow','submarine'];
// //
// // //TODO TOGETHER: Using reduce, let's turn this into a string.
// //
// // // Bonus: Create an Array of all the unique fur colors! Hint: check out the ES6 'Set' data type.
// //
// var hamsters = [
//     {
//         name: "Hamtaro",
//         heightInMM: 86,
//         fur: ['orange', 'white'],
//         gender: "male",
//         dateOfBirth: "August 6"
//     } , {
//         name: "Bijou",
//         heightInMM: 75,
//         fur: ['white'],
//         gender: "female",
//         dateOfBirth: "July 10"
//     } , {
//         name: "Oxnard",
//         heightInMM: 100,
//         fur: ['grey', 'white'],
//         gender: "male",
//         dateOfBirth: "May 3"
//     } , {
//         name: "Boss",
//         heightInMM: 120,
//         fur: ['brown', 'white'],
//         gender: "male",
//         dateOfBirth: "Spetember 21"
//     } , {
//         name: "Snoozer",
//         heightInMM: 85,
//         fur: ['brown', 'white', "pink"],
//         gender: "male",
//         dateOfBirth: "January 14"
//     }
// ];

var check=lyrics.filter(function (currentString,word){
return currentString +''+word
})
console.log(check);

var check=lyrics.filter((currentString,word)=>`${currentString} ${word}`
    )