import {API_KEY, API_HOST} from './config.js'

const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi';
const options = {
	method: 'GET',
	headers: {  
		'X-RapidAPI-Key': API_KEY,		
        'X-RapidAPI-Host': API_HOST
	}
};

fetch(url, options)
.then(response => response.json())
.then(response => {
	cloud_pct.innerHTML = response.cloud_pct
    temp.innerHTML = response.temp
    // feels_like.innerHTML = response.feels_like
    // humidity.innerHTML = response.humidity
    min_temp.innerHTML = response.min_temp
    max_temp.innerHTML = response.max_temp
    // wind_speed.innerHTML = response.wind_speed
    // wind_degrees.innerHTML = response.wind_degrees
    // sunrise.innerHTML = response.sunrise
    // sunset.innerHTML = response.sunset
	console.log(response)})
.catch(err => console.log(err))