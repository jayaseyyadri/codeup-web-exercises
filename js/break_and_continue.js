
do {
	var userNumber = Number(prompt("Enter an odd number between 1 & 50"));
	if(userNumber<1||userNumber >50){//ask for odd no 1-50
	    alert("Invalid number, Please enter a number between 1 & 50")
    }else if(userNumber%2===0){
	    alert(userNumber+" is not odd , Please enter an odd number")
    }else if(isNaN(userNumber)){
	    alert(userNumber +" is not a number , please enter a number")
    }else {
        alert(userNumber + " is valid .Thank you!");
        break;
    }
}while (true);//number is not odd keep prompting



for(var i=1;i<50;i++) {
	if (parseFloat(check)== i){
		console.log("Yikes skipping " + check)
		continue;
	}
	if (i % 2 !== 0) {//if odd generate
		console.log(i)
	}
}

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