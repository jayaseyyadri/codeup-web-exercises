// fetch(url, {headers: {'Authorization': 'token 93108def88e8774dddeba303aaeece466a0ac345'}})
"use strict";


function wait(numberMilliSeconds) {
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
        resolve()
            }, numberMilliSeconds);
    }) ;
}

    var a=wait(1000);
    var b=wait(3000);
        a.then(() => console.log('You\'ll see this after 1 second '));
        b.then(() => console.log('You\'ll see this after 3 seconds'));