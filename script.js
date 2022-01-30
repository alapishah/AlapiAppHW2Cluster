var map = L.map('mapid').setView([37.7749, -122.4194], 13);

L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; National Geographic, Esri, DeLorme, NAVTEQ, UNEP-WCMC, USGS, NASA, ESA, METI, NRCAN, GEBCO, NOAA, iPC',
	maxZoom: 16,
ext: 'png'
}).addTo(map);

  // load GeoJSON from an external file
  $.getJSON("https://raw.githubusercontent.com/gbrunner/adv-programming-for-gis-and-rs/master/Web%20Development%20Module/Unit%201%20-%20GitHub%20and%20Leaflet/sf_crime.geojson",function(data){
         var ratIcon = L.icon({
    iconUrl: 'https://e7.pngegg.com/pngimages/170/541/png-clipart-robbery-burglary-crime-theft-thief-mammal-people.png',
    iconSize: [30,30]
  });    
	  
	  var crimes = L.geoJson(data,{
      pointToLayer: function(feature,latlng){
        var marker = L.marker(latlng,{icon: ratIcon});
        marker.bindPopup(feature.properties.Location + '<br/>' + feature.properties.OPEN_DT);
        return marker;
      }
    });
    var clusters = L.markerClusterGroup();
    clusters.addLayer(crimes);
    map.addLayer(clusters);
});

    var clusters = L.markerClusterGroup();
    clusters.addLayer(ratIcon);
    map.addLayer(clusters);
});
