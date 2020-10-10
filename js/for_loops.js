(function() {
    "use strict"

    function showMultiplicationTable(num) {

        for (var i = 1; i <= 10; i++) {

            console.log(num + " * " + i + " = " + num * i);
        }
    }

    showMultiplicationTable(6);

    for (var i = 0; i < 10; i++) {
        var randomNumber = Math.floor((Math.random() * (200 - 20 + 1)) + 20);
        var check = (randomNumber % 2 === 0) ? randomNumber + " is even " : randomNumber + " is odd ";
        console.log(check);
    }


    for (var i = 0; i <= 9; i++) {
        var row = '';
        for (var j = 0; j < i; j++) {
            row += i;
        }
        console.log(row);
    }

    for (var i = 100; i >= 5; i -= 5) {
        console.log(i)
    }

})();