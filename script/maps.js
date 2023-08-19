// Google maps function, including 11 markers corresponding to each quiz result 
function initMap() {
    const map = new google.maps.Map(document.getElementById("maps-container"), {
        zoom: 8,
        center: { lat: 51.80044850212119, lng: - 3.7944135216672383 },  
    });
    // Set LatLng and title text for the markers. The first marker (Rhossili)
    // receives the initial focus when tab is pressed. Use arrow keys to
    // move between markers; press tab again to cycle through the map controls.
    const southWalesLocations = [
        [{ lat: 51.579958806850016, lng: -4.291999384202944 }, "Rhossili", "https://www.visitswanseabay.com/inspirations/beach-guide/rhossili-bay-beach/"],
        [{ lat: 51.418522478498495, lng: -3.576441918485766 }, "Monknash"],
        [{ lat: 51.53696032335808, lng: -3.254880482895733 }, "Castle Coch Taff Trail"],
        [{ lat: 51.69749376467262, lng: -4.683001462694947 }, "Saundersfoot to Monkstone point"],
        [{ lat: 51.77730017586767, lng: - 3.587275105343132 }, "Sgwd ddwli uchaf Waterfall Walk"],
        [{ lat: 51.8772044249596, lng: - 3.4011289190848886 }, "Fan Y Big"],
        [{ lat: 51.86673591823695, lng: - 3.3819958359916416 }, "Gwaun Cerrig Llwydion"],
        [{ lat: 51.884470931881985, lng: - 3.436356918503445 }, "Pen Y Fan"],
        [{ lat: 51.771770210073846, lng: - 3.610112844138401 }, "Sgwd Einnion Gam (Follow Elidir Trail)"],
        [{ lat: 51.86396709184166, lng: - 3.4991761782958357 }, "Fan Fawr"],
        [{ lat: 51.840222514942944, lng: - 3.382304129256682 }, "Horseshow Ridge Walk"]
        
    ];
    // Create an info window to share between markers.
    const infoWindow = new google.maps.InfoWindow();

    // Create the markers.
    southWalesLocations.forEach(([position, title, url], i) => {
        const marker = new google.maps.Marker({
            position,
            map,
            title: `${i + 1}. ${title}`,
            label: `${i + 1}`,
            optimized: false,
        });

        // Add a click listener for each marker, and set up the info window.
        marker.addListener("mouseover", () => {
            infoWindow.close();
            infoWindow.setContent(marker.getTitle());
            infoWindow.open(marker.getMap(), marker);
        });

        // Add a click listener to open the specified URL when the marker is clicked.
        marker.addListener("click", () => {
            window.open(url, "_blank");
        });
    });
}

window.initMap = initMap;