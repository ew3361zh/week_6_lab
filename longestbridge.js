let metroAreaCenterCoordinates = [38.96, -98] //lat, lon
let zoomLevel = 4 //large city - zoom levels start at 1 (whole world), got to 20 (few city blocks)

//create map
let map = L.map('bridge-map').setView(metroAreaCenterCoordinates, zoomLevel) //leaflet function and variable from js library imported in html

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

campuses =  [
    {"name": "MinneapVerrazano-Narrows Bridge", "spanlength": 1298.4, "coordinates": [40.6066, -74.0447] }, 
    {"name": "Golden Gate Bridge", "spanlength": 1280.2, "coordinates": [37.8199, -122.4783] }, 
    {"name": "Mackinac Bridge", "spanlength": 1158.0, "coordinates": [45.8174, -84.7278] }, 
    {"name": "George Washington Bridge", "spanlength": 1067.0, "coordinates": [40.8517, -73.9527] }, 
    {"name": "Tacoma Narrows Bridge", "spanlength": 853.44, "coordinates": [47.2690, -122.5517] }
]

campuses.forEach( function(info) {
    let coordinates = info.coordinates
    let name = info.name
    let span = info.spanlength
    let popupString = `${name}<br>Span-length: ${span} meters`
    let marker = L.marker(coordinates)
        .bindPopup(popupString)
        .addTo(map)
})

//add marker for mctc
// let mctcCoordinates = [44.9724, -93.2844] //available on google maps
// let mctcMarker = L.marker(mctcCoordinates)
//     .bindPopup('Minneapolis College<br><a href="https://minneapolis.edu">Website</a>')
//     .addTo(map)

// let stPaulCoordinates = [44.9483, -93.1099]
// let stpMarker = L.marker(stPaulCoordinates)
//     .bindPopup('St. Paul College<br><a href="https://saintpaul.edu">Website</a>')
//     .addTo(map)

// let normandaleCoordinates = [44.8297, -93.3312]
// let normandaleMarker = L.marker(normandaleCoordinates)
//     .bindPopup('Normandale Community College<br><a href="https://www.normandale.edu/">Website</a>')
//     .addTo(map)

// let metroAreaCircle = L.circle(metroAreaCenterCoordinates, {
//         color: 'purple',
//         radius: 15000, //in meters
//         fillOpacity: 0.3
//     })
    .bindPopup('Twin Cities Metro')
    .addTo(map)