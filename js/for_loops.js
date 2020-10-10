<<<<<<< HEAD
(function() {
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

    for (var i = 100; i >=5; i-=5) {
            console.log(i)
    }
})();
=======
// function showMultiplicationTable(number) {
//
//     for (var i = 1; i <= 10; i++) {
//
//       console.log(number + " * " + i + " = "+ number *i );
//     }
// }
// showMultiplicationTable(6);
//
//   for(var i=0;i<=10;i++) {
//    var randomNumber= Math.floor((Math.random() * (200 - 20 + 1)) + 20);
//     var check =(randomNumber%2===0)?randomNumber +" is even ":randomNumber+" is odd ";
//         console.log(check);
//   }
//
//
//     for(var i=0;i<=9;i++) {
// 	var row ='';
// 	for (var j = 0; j < i; j++) {
// 		row+=i;
// 	}
// 	console.log(row);
// }
//
//     for (var i = 100; i > 0; i--){
//         if (i % 5 === 0) {
//             console.log(i)
//         }}

function sum3s(numbers) {
    var output;
    numbers.forEach(function(number) {
        if (number === 3) {
            output += 3;
        } return output;
    });

}
>>>>>>> 4cc369fe17761a7f75288cc097a564e8943f5beb

console.log(sum3s(['a', 3, '3', 3, null])); // should see 6 in the console when written correctly