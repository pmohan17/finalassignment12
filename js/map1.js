let map = L.map('map1').setView([40.855,-73.887], 16.71);
L.tileLayer('https://api.mapbox.com/styles/v1/priyamohan17/cjp0h2dno08w92rlm4eue07na/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoicHJpeWFtb2hhbjE3IiwiYSI6ImNqcDBnb3hnazAwcjcza21ya3h3eW1mZDIifQ.lxoJ5NUiLPciJRwDs1155A', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18
}).addTo(map);
var marker1 = L.marker([40.8548, -73.8885]).addTo(map);
  marker1.bindPopup("<b>Zero Otto Nove</b><br>It is the first Italian restaurant I visited in New York City.It has a very formal atmosphere, with amazing dishes.");
var marker2 = L.marker([40.8560, -73.8867]).addTo(map);
  marker2.bindPopup("<b>Ciccarone Park</b><br>This is a children's park right across my apartment. Through all ours of the day, I heard children playing and the ice cream truck's tune.");
var marker3 = L.marker([40.8544, -73.8887]).addTo(map);
  marker3.bindPopup("<b>Enzo's</b><br>I was vegan for the majority of the summer. However, in August, when I cheated of my vegan journey, Enzo's became my comfort food. The environment is very family friendly.");
var marker4 = L.marker([40.854940, -73.886890]).addTo(map);
  marker4.bindPopup("<b>Trattoria Tra di Noi</b><br>This was the one of many restaurants I wished I could visit. However, everyday I passed one of the workers at the restaurant, and we would have a conversation. It became our routine.");
