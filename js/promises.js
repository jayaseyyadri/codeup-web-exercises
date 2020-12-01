/*
function userName(){
    let p = fetch('https://api.github.com/users/jayaseyyadri/events', {headers: {'Authorization': gitToken}})

        p.then(response => response.json())
        .then (response => {
           return response.filter(evt=> evt.type==="PushEvent");
        }).then(result => console.log(result[0].created_at));
}*/


function userName(){
    let promise = fetch('https://api.github.com/users/jayaseyyadri/events', {headers: {'Authorization': gitToken}});
    let responseHandler = function(response){
        return response.json();
    };

    let jsonHandler = function(jsonData) {
        let returnArray = [];
        for(var i=0; i < jsonData.length; i++){
            let elt = jsonData[i];
            if(elt.type === 'PushEvent'){
                returnArray.push(elt);
            }
        }
        return returnArray[0];
    }

    let printCreatedAt = function (event) {
        console.log("Last Push Happened at " + JSON.stringify(event));
    }

    promise.then(responseHandler).then(jsonHandler).then(printCreatedAt);

}
userName();
