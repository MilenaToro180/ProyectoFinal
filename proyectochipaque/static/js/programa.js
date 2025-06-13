var map = L.map('map').setView([4.443626718026901, -74.04593731929668], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
// click mapa

function onMapClick(e) {
   var marker = L.marker(e.latlng).addTo(map);    
}

map.on('click', onMapClick);