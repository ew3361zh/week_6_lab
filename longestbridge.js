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

bridges.forEach( function(info) {
    let coordinates = info.coordinates
    let name = info.name
    let span = info.spanlength
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
        labels: [bridges[0].name, bridges[1].name, bridges[2].name, bridges[3].name, bridges[4].name],
        datasets: [ { 
            label: 'Bridge Span (in meters)',
            data: [bridges[0].spanlength, bridges[1].spanlength, bridges[2].spanlength, bridges[3].spanlength, bridges[4].spanlength],
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