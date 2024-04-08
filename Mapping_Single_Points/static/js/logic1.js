// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([34.0522, -118.2437],14);


// M'Chigeeng First Nation · Geolocation
// 45.833° N, -82.167° E

//  Add a marker to the map for Los Angeles, California.

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
 attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
 maxZoom: 18,
 accessToken: API_KEY
});

// Then we add our 'streets', also called 'graymap' tile layer to the map.
streets.addTo(map);


// Create a new marker
// Pass in some initial options, and then add it to the map using the addTo method

// MARKER 
// var marker = L.marker([34.0522, -118.2437], {

// CIRCLE

L.circle([34.0522, -118.2437], {
    radius: 300,
    color: "black",
    fillColor: '#ffffa1'
 }).addTo(map);
  