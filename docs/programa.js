var map = L.map('map').setView([4.443829288974173, -74.04701794059552], 17);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

let miObjeto=document.getElementById("MiEtiqueta")
miObjeto.innerHTML="ig: @mileettt";