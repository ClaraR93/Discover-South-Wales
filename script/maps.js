/Allow long lines
/*jslint long*/

//Assume Browswer environment
/*jslint browser*/

//Allow unodered cases, params, properties, variables, and exports.
/*jslint unordered*/

//A directive is used to specify a set of globals
/*global google*/

//Wait for the DOM to finish loading before running maps
document.addEventListener("DOMContentLoaded", function () {
    // Hide the loading span
    const loadingSpan = document.getElementById("loading");
    loadingSpan.style.display = "none";

    // Initialize Google Maps
    initMap();
});

//Loading dots initiated if Google maps takes some time to load - Code used from stack overflow - See readme credits
window.dotsGoingUp = true;
window.setInterval(function () {
    const wait = document.getElementById("loading");
    if (window.dotsGoingUp) {
        wait.innerHTML += ".";
    } else {
        wait.innerHTML = wait.innerHTML.substring(1, wait.innerHTML.length);
        if (wait.innerHTML === "") {
            window.dotsGoingUp = true;
        }
        if (wait.innerHTML.length > 5) {
            window.dotsGoingUp = false;
        }
    }
}, 400);

// Google maps function, including 11 markers corresponding to each quiz result
function initMap() {
    const map = new google.maps.Map(document.getElementById("maps-container"), {
        zoom: 8,
        center: {lat: 51.80044850212119, lng: -3.7944135216672383}
    });
    // Set LatLng and title text for the markers. The first marker (Rhossili)
    // receives the initial focus when tab is pressed. Use arrow keys to
    // move between markers; press tab again to cycle through the map controls.
    const southWalesLocations = [
        [{lat: 51.579958806850016, lng: -4.291999384202944}, "Rhossili", "https://www.visitswanseabay.com/inspirations/beach-guide/rhossili-bay-beach/"],
        [{lat: 51.418522478498495, lng: -3.576441918485766}, "Monknash", "https://discovertheoutdoors.co.uk/monknash-beach/"],
        [{lat: 51.53696032335808, lng: -3.254880482895733}, "Castle Coch Taff Trail", "http://edtechie.net/tonwalks/castell-coch/castell-coch-taff-trail/"],
        [{lat: 51.69749376467262, lng: -4.683001462694947}, "Saundersfoot to Monkstone point", "https://www.visitpembrokeshire.com/explore-pembrokeshire/beaches/monkstone"],
        [{lat: 51.77730017586767, lng: -3.587275105343132}, "Sgwd ddwli uchaf Waterfall", "https://www.waymarking.com/waymarks/WMA9ZE_Sgwd_Ddwli_Uchaf_Upper_Gushing_Falls_Pontneddfechan_Powys_Wales"],
        [{lat: 51.8772044249596, lng: -3.4011289190848886}, "Fan Y Big", "https://www.walkmyworld.com/posts/fan-y-big"],
        [{lat: 51.86673591823695, lng: -3.3819958359916416}, "Gwaun Cerrig Llwydion", "https://www.themountainguide.co.uk/wales/gwaun-cerrig-llwydion.htm"],
        [{lat: 51.884470931881985, lng: -3.436356918503445}, "Pen Y Fan", "https://www.visitwales.com/things-do/adventure-and-activities/walking/crowning-glory-4-ways-walk-pen-y-fan"],
        [{lat: 51.771770210073846, lng: -3.610112844138401}, "Elidir Trail secret waterfall walk", "https://ohwhataknight.co.uk/blog/how-to-reach-sgwd-einion-gam-waterfall"],
        [{lat: 51.86396709184166, lng: -3.4991761782958357}, "Fan Fawr", "https://www.alltrails.com/en-gb/trail/wales/powys/fan-fawr-and-beacons-reservoir"],
        [{lat: 51.840222514942944, lng: -3.382304129256682}, "Horseshow Ridge", "https://www.nationaltrust.org.uk/visit/wales/brecon-beacons/brecon-beacons-horseshoe-ridge-walk"]
    ];
    // Create an info window to share between markers.
    const infoWindow = new google.maps.InfoWindow();

    // Create the markers.
    southWalesLocations.forEach(function ([position, title, url], i) {
        const marker = new google.maps.Marker({
            position,
            map,
            title: `${i + 1}. ${title}`,
            label: `${i + 1}`,
            optimized: false
        });

        // Add a click listener for each marker, and set up the info window.
        marker.addListener("click", function () {
            infoWindow.close();
            infoWindow.setContent(marker.getTitle());
            infoWindow.open(marker.getMap(), marker);
        });

        // Add a click listener to open the specified URL when the marker is clicked.
        //Used window.open() method as explained in Stack overflows - See readme credits
        marker.addListener("dblclick", function () {
            window.open(url, "_blank");
        });
    });
}

window.initMap = initMap;