import {API_KEY, API_HOST} from './config.js'

const options = {
	method: 'GET',
	headers: {  
		'X-RapidAPI-Key': API_KEY,		
        'X-RapidAPI-Host': API_HOST
	}
};
const getWeather = (city)=>{
    document.getElementById('city').innerText=city;
    const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city;
    fetch(url, options)
    .then(response => response.json())
    .then(response => {
        cloud_pct.innerHTML = response.cloud_pct
        temp.innerHTML = response.temp
        temp2.innerHTML = response.temp
        feels_like.innerHTML = response.feels_like
        humidity.innerHTML = response.humidity
        humidity2.innerHTML = response.humidity
        min_temp.innerHTML = response.min_temp
        max_temp.innerHTML = response.max_temp
        wind_speed.innerHTML = response.wind_speed
        wind_speed2.innerHTML = response.wind_speed
        wind_degrees.innerHTML = response.wind_degrees
        sunrise.innerHTML = response.sunrise
        sunset.innerHTML = response.sunset
        console.log(response)
    })
    .catch(err => console.log(err));
}

getWeather("Delhi");

let btn = document.getElementById('submit');
btn.addEventListener('click',(e)=>{
    e.preventDefault();
    if(document.getElementById('cityName').value=="")
        alert('Please enter a city name!');
    else{
        let newCity = document.getElementById('cityName').value;
        getWeather(newCity);
        document.getElementById('cityName').value="";
    }
});