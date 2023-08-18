//Google maps API function 
//Code used from Google maps documentation - See readme credits
let map;

async function initMap() {
    const { Map } = await google.maps.importLibrary("maps");

    map = new Map(document.getElementById("maps-container"), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8,
    });
}

initMap();