// Creating our initial map object:
// We set the longitude, latitude, and starting zoom level.
let myMap = L.map("map", {
  center: [28.417665, -81.581238],
  zoom: 13
});

// Adding a tile layer (the background map image) to our map:
// We use the addTo() method to add objects to our map.
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

// Creating a new marker:
// We pass in some initial options, and then add the marker to the map by using the addTo() method.
let marker = L.marker([28.417665, -81.581238], {
  draggable: true,
  title: "My First Marker"
}).addTo(myMap);

// Binding a popup to our marker with options for offset and auto panning
marker.bindPopup("Hey there, Adalyn and Oliver!<br><br>" +
            "Gosh, it’s great to see you here at Disney World! I just know we’re gonna have a whole lot of fun together. So grab your mouse ears and get ready for some magical adventures with all your favorite pals!<br><br>" +
            "See ya real soon!<br><br>" +
            "Your friend, Mickey Mouse", {
              autoPan: true,
              autoPanPadding: [50, 50], // Tune this to get the desired effect
              offset: L.point(-700, -200) // Shifts the popup leftward
            });

