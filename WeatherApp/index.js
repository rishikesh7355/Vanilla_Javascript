const city = document.getElementById('cityInput')
const temp = document.getElementById('temp');
const speed = document.getElementById('windSpeed');
const humidity = document.getElementById('humidity');
const btn = document.getElementById('searchButton');
const cityName = document.getElementById('cityName');
const details = document.getElementById('details');
const url ='https://api.openweathermap.org/data/2.5/weather';
const apiKey = 'f00c38e0279b7bc85480c3fe775d518c';

btn.addEventListener('click', function(){
    const location = city.value.trim();
    if (location !== '') {
        getInfo(location);
    }
})

async function getInfo(location) {
    const api = `${url}?q=${location}&appid=${apiKey}&units=metric`;
   if(location){
        try {
            const response = await fetch(api);
            const data = await response.json();
            cityName.textContent = data?.name;
            temp.textContent =  `${data?.main?.temp} °C`;
            details.textContent = data?.weather[0]?.description;
            speed.textContent = `Wind Speed: ${data?.wind?.speed} m/s`;
            humidity.textContent = `Humidity: ${data?.main?.humidity}%`;
        } catch (error) {
            console.error('Error fetching weather data:', error);
        }
   }else {
        console.error('Please enter a valid city name.');
    }
};


