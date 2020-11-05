mapboxgl.accessToken=mapboxToken;

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/satellite-streets-v11',
    center: [-98.568736, 29.524087],
    zoom: 10
});
//------------------------------------------------------------
var markerOptionA ={
    color:'#ff0000',
    draggable:true
}
var popup1 = new mapboxgl.Popup()
    .setHTML("<h6>Best Pho in town!</h6>")

var berni =new mapboxgl.Marker(markerOptionA)
    .setLngLat([-98.568736, 29.524087])
    .addTo(map)
    .setPopup(popup1);
//------------------------------------------------------------
var markerOptionB ={
    color:'#0040ff',
    draggable:true
}
var popup2 = new mapboxgl.Popup()
    .setHTML("<h6>beast tacos in town !</h6>")


var palapas =new mapboxgl.Marker(markerOptionB)
    .setLngLat([-98.650550, 29.569070])
    .addTo(map)
    .setPopup(popup2)


//------------------------------------------------------------
var markerOptionC ={
    color:'#ffaa00',
    draggable:true
}

var popup3 = new mapboxgl.Popup()
    .setHTML("<h6>beast shwarma in town !</h6>")

var shwarma =new mapboxgl.Marker(markerOptionC)
    .setLngLat([-98.62473435, 29.57668415])
    .addTo(map)
    .setPopup(popup3)






