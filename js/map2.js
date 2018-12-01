let map = L.map('map2').setView([38.887, -77.043], 13.36)
L.tileLayer('https://api.mapbox.com/styles/v1/priyamohan17/cjp4mtpab09ne2sn28cc19rud/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoicHJpeWFtb2hhbjE3IiwiYSI6ImNqcDBnb3hnazAwcjcza21ya3h3eW1mZDIifQ.lxoJ5NUiLPciJRwDs1155A', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18
    }).addTo(map);
for (let i = 0; i < places.length; i++ ) {
  L.marker( [ places[i].latitude, places[i].longitude ] ).bindPopup( '<h3>' + places[i].name + '</h3>' + '<p>' + places[i].descrip + '</p>')
  .addTo( map );
}
