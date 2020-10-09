
// Math.random()
// // var mathComputations = new.Math()//Don't do this  since math is static
//
// let  randonNum=Math.random()//between 0 and 1 ie decimals
// randonNum=Math.random()*10//between 0 and 10
// randonNum=Math.random()*100// between 0 and 100
// console.log(randonNum);
// //split - split into array and find size and use that size to randomize
//
// console.log(Math.round(randonNum))  //between 0 and 3 ;can't use . asan index so round to nearest integer
// let index=Math.round(randonNum)*2
// console.log(Math.round(randonNum)*2)  //between 0 and 2
//
// //let randomWord=inputArray[index];
// console.log(randomWord);
// // Math.floor() - used to round down
//
// Math.ceil(randomWord);
// randomWord=inptArray[index];///anything above 3.99 will be 4
// randomWord=inptArray[index];///anything above 0.00001 will be 1
//
// Math.pow //raise one number to  the power of another number
// //to calculate the square of 8
// console.log(Math.pow(8, 2));
// //pi in math --> Math.pi

//Math.E is used in many financial scenarios and banks ,calculate intrest etc.
//Math.PI is used in UI
//scientific notation

///mathod to find a random number between range of two numbers (min & max)
function findRandom(min,max){
    return Math.random()* (max-min)+min
}

console.log(findRandom(10, 50));
