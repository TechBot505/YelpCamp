mapboxgl.accessToken = mapToken;
const map = new mapboxgl.Map({
     container: 'map',
     style: 'mapbox://styles/mapbox/streets-v11', 
     center: campground.geometry.coordinates, 
     zoom: 9,
     projection: 'globe'
});

new mapboxgl.Marker()
    .setLngLat(campground.geometry.coordinates)
    .setPopup(new mapboxgl.Popup().setHTML("<h5><%=campground.title%></h5>"))
    .addTo(map)


    // [ 75.8682, 22.720362 ]