//Google maps API function 
//Code used from Google maps documentation - See readme credits
let map;

async function initMap() {
    const { Map } = await google.maps.importLibrary("maps");

    map = new Map(document.getElementById("maps-container"), {
        center: { lat: 51.840674510742, lng: -3.7255938139578 },
        zoom: 9,
    });
}

initMap();

