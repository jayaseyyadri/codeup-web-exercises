"use strict";

(function () {
    var multiply = 1;
    while (multiply <= 65536) {
        console.log(multiply);
        multiply*=2;
    }


    var totalConesToSell = Math.floor((Math.random() * (100 - 50 + 1)) + 50);//no of cones to sell for the day


    do {
        var numberOfConesToBuy = Math.floor(Math.random() * 5) + 1;// cones customer wants to buy

        if (numberOfConesToBuy <= totalConesToSell) {
            totalConesToSell -= numberOfConesToBuy;
            console.log(numberOfConesToBuy + " cones sold");
        } else if (numberOfConesToBuy > totalConesToSell) {
            console.log("cannot sell you  " + numberOfConesToBuy + " I only have  " + totalConesToSell)
        }
        if (totalConesToSell === 0) {
            console.log("Yay! I sold them all!");
        }
    } while (totalConesToSell > 0)
})();