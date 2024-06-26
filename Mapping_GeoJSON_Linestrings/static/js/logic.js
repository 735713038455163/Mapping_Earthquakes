// Add console.log to check to see if our code is working.
console.log("working");
// Create the map object with center and zoom level.
let map = L.map('mapid').setView([30, 30], 2);
// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
 attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
 maxZoom: 18,
 accessToken: API_KEY
});

// Then we add our 'streets', also called 'graymap' tile layer to the map.
streets.addTo(map);
// Accessing the airport GeoJSON URL
let torontoData = "https://raw.githubusercontent.com/735713038455163/Mapping_Earthquakes/main/torontoRoutes.json";

// Create a style for the lines. 
let myStyle = {
  color: "#ffffa1",
  weight: 2
}



// Grabbing our GeoJSON data.
d3.json(torontoData).then(function(data) {
  console.log(data);

// Creating a GeoJSON layer with the retrieved data.
L.geoJSON(data, {
  
  onEachFeature: function(feature,layer) {
    console.log(layer);
    layer.bindPopup("<h3> Airline: " + feature.properties.airline + "</h3> <hr><h3> Destination: " +
    feature.properties.dst + "</h3>");
  }
}).addTo(map)
});
