let map;

async function initMap() {
  // The location of Rhossili
    const rhossili = { lat: 51.57882931112593, lng: -4.292492257856478 };  
  // Request needed libraries.
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  // The map, centered at Uluru
  map = new Map(document.getElementById("maps-container"), {
    zoom: 9,
    center: { lat: 51.78009226078144, lng: - 3.9205687076682825},
    mapId: "DEMO_MAP_ID",
  });

  // The marker, positioned at Rhossili
  const marker = new AdvancedMarkerElement({
    map: map,
    position: rhossili,
    title: "Rhossili",
  });
}

initMap();
