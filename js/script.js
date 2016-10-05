// Google map. Mishka
function initMap() {
    var myLatLng = {lat: 59.938805, lng: 30.323099};
    var mapDiv = document.getElementById('mishka-map');
    var map = new google.maps.Map(mapDiv, {
        center: myLatLng,
    zoom: 17
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: "Ждем Вас у Мишки!"
    });
}
