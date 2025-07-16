const city = document.getElementById('cityInput')
// document.getElementById('cityInput');
console.log(city.textContent);
const tMax = document.getElementById('tempMax');
const tMin = document.getElementById('tempMin');
const humidity = document.getElementById('humidity');

function getLocation() {
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(success);
    }
};
function success(position) {
    console.log('latitude: ' + position.coords.latitide);
    console.log('longitude:' + position.coords.longitude);
}

