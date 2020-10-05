// function isEven(check){
//     return check%2===0;
// }
// do{
//     var check =parseFloat(prompt("Enter an odd number between 1 and 50"));
//         for(var i =0;i<50;i++) {
//             if (!isEven(i)) {
//                 console.log(i);
//             }
//             }if (check === i) {
//         console.log(check + " Yikes you picked ");
//         }
// }while(check%2===0)


do {
	var check = prompt("Enter a number between 1 & 50");//ask for odd no 1-50
}while (check %2===0);//number is not odd keep prompting
for(var i=1;i<50;i++) {
	if (parseFloat(check)== i){
		console.log("Yikes skipping " + check)
		continue;
	}
	if (i % 2 !== 0) {//if odd generate
		console.log(i)
	}
}

var i =2 ;

var multiply=1;
 while( multiply <65536){
	 multiply=i*multiply;
 	console.log(multiply);
 }
var totalConesToSell = Math.floor((Math.random() * (100 - 50 + 1)) + 50);//no of cones to sell for the day
do {
    var numberOfConesToBuy = Math.floor(Math.random() * 5) + 1;// cones customer wants to buy
    //console.log(numberOfConesToBuy);

    //var remainingCones -= totalConesToSell - numberOfConesToBuy; //cones left
    //console.log(remainingCones);

    if (numberOfConesToBuy <= totalConesToSell) {
        totalConesToSell-=numberOfConesToBuy;
        console.log(numberOfConesToBuy + " cones sold");
    }
else if(numberOfConesToBuy>totalConesToSell) {
        console.log("cannot sell you  " +numberOfConesToBuy+ " I only have  " + totalConesToSell )}
    if (totalConesToSell===0){
        console.log("Yay! I sold them all!");
    }
}while (totalConesToSell>0)