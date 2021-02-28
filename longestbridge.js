let metroAreaCenterCoordinates = [39.96, -98] //lat, lon
let zoomLevel = 3.5 //large city - zoom levels start at 1 (whole world), got to 20 (few city blocks)

//create map
let map = L.map('bridge-map').setView(metroAreaCenterCoordinates, zoomLevel) //leaflet function and variable from js library imported in html

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

bridges =  [
    {"name": "Verrazano-Narrows Bridge", "spanlength": 1298.4, "coordinates": [40.6066, -74.0447] }, 
    {"name": "Golden Gate Bridge", "spanlength": 1280.2, "coordinates": [37.8199, -122.4783] }, 
    {"name": "Mackinac Bridge", "spanlength": 1158.0, "coordinates": [45.8174, -84.7278] }, 
    {"name": "George Washington Bridge", "spanlength": 1067.0, "coordinates": [40.8517, -73.9527] }, 
    {"name": "Tacoma Narrows Bridge", "spanlength": 853.44, "coordinates": [47.2690, -122.5517] }
]

//create blank arrays for chart 'data' and 'labels' arrays data
let spanLengthArray = []
let bridgeNameArray = []
bridges.forEach( function(info) {
    let coordinates = info.coordinates
    let name = info.name
    //add bridge name and span data from forEach loop
    bridgeNameArray.push(name)
    let span = info.spanlength
    spanLengthArray.push(span)
    let popupString = `<b>${name}</b><br>Span-length: ${span} meters`
    let marker = L.marker(coordinates)
        .bindPopup(popupString)
        .addTo(map)
})


let canvas = document.querySelector('#bridge-chart')
let ctx = canvas.getContext('2d')
let chart = new Chart(ctx, {
    type: 'bar',
    data: {
        // substitute in new arrays initialized and populated above as data sources for chart arrays
        labels: bridgeNameArray,
        datasets: [ { 
            label: 'Bridge Span (in meters)',
            data: spanLengthArray,
            backgroundColor: ['fuchsia', 'gold', 'chartreuse', 'darkturquoise', 'maroon']
        } ]
    },
    options: {
        scales: {
            yAxes: [ {
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
})

