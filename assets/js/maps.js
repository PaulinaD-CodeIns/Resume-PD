function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 3,
        center: {
            lat: 49.0000,
            lng: 15.2551
        }
    });

    var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var locations = [
        { lat: 51.7592, lng: 19.4550 },
        { lat: 38.7169, lng: -9.1399 },
        { lat: 53.3498, lng: -6.2603 },
        { lat: 39.5895, lng: 19.9192 },
        { lat: 55.6761, lng: 12.5683 },
        { lat: 28.1235, lng: -15.4363 },
        { lat: 35.8997, lng: 14.5146 }
    ];

    var markers = locations.map(function (location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length],
            map: map
        });
    });
}
