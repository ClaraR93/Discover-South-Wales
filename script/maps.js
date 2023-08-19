// Google maps function, including 11 markers corresponding to each quiz result 
function initMap() {
    const map = new google.maps.Map(document.getElementById("maps-container"), {
        zoom: 9,
        center: { lat: 51.80044850212119, lng: - 3.7944135216672383 },  
    });
    // Set LatLng and title text for the markers. The first marker (Rhossili)
    // receives the initial focus when tab is pressed. Use arrow keys to
    // move between markers; press tab again to cycle through the map controls.
    const tourStops = [
        [{ lat: 51.579958806850016, lng: -4.291999384202944 }, "Rhossili"],
        [{ lat: 51.418522478498495, lng: -3.576441918485766 }, "Monknash"],
        [{ lat: 51.53696032335808, lng: -3.254880482895733 }, "Castle Coch Taff Trail"]
    ];
    // Create an info window to share between markers.
    const infoWindow = new google.maps.InfoWindow();

    // Create the markers.
    tourStops.forEach(([position, title], i) => {
        const marker = new google.maps.Marker({
            position,
            map,
            title: `${i + 1}. ${title}`,
            label: `${i + 1}`,
            optimized: false,
        });

        // Add a click listener for each marker, and set up the info window.
        marker.addListener("click", () => {
            infoWindow.close();
            infoWindow.setContent(marker.getTitle());
            infoWindow.open(marker.getMap(), marker);
        });
    });
}

window.initMap = initMap;