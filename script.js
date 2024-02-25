import {API_KEY, API_HOST} from './config.js'

const options = {
	method: 'GET',
	headers: {  
		'X-RapidAPI-Key': API_KEY,		
        'X-RapidAPI-Host': API_HOST
	}
};
const getWeather = (city)=>{
    document.getElementById('city').innerText = city;
    const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city;
    fetch(url, options)
    .then(response => response.json())
    .then(response => {
        cloud_pct.innerText = response.cloud_pct
        temp.innerText = response.temp
        temp2.innerText = response.temp
        feels_like.innerText = response.feels_like
        humidity.innerText = response.humidity
        humidity2.innerText = response.humidity
        min_temp.innerText = response.min_temp
        max_temp.innerText = response.max_temp
        wind_speed.innerText = response.wind_speed
        wind_speed2.innerText = response.wind_speed
        wind_degrees.innerText = response.wind_degrees
        sunrise.innerText = response.sunrise
        sunset.innerText = response.sunset
        // console.log(response)
    })
    .catch(err => console.log(err));
}

const setTable = ()=>{
    const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+"Shanghai";
    fetch(url, options)
    .then(response => response.json())
    .then(response => {
        s_cloud_pct.innerHTML = response.cloud_pct
        s_temp.innerHTML = response.temp
        s_feels_like.innerHTML = response.feels_like
        s_humidity.innerHTML = response.humidity
        s_min_temp.innerHTML = response.min_temp
        s_max_temp.innerHTML = response.max_temp
        s_wind_speed.innerHTML = response.wind_speed
        s_wind_degrees.innerHTML = response.wind_degrees
        s_sunrise.innerHTML = response.sunrise
        s_sunset.innerHTML = response.sunset
        // console.log(response)
    })
    .catch(err => console.log(err));

    const url1 = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+"Lucknow";
    fetch(url1, options)
    .then(response => response.json())
    .then(response => {
        l_cloud_pct.innerHTML = response.cloud_pct
        l_temp.innerHTML = response.temp
        l_feels_like.innerHTML = response.feels_like
        l_humidity.innerHTML = response.humidity
        l_min_temp.innerHTML = response.min_temp
        l_max_temp.innerHTML = response.max_temp
        l_wind_speed.innerHTML = response.wind_speed
        l_wind_degrees.innerHTML = response.wind_degrees
        l_sunrise.innerHTML = response.sunrise
        l_sunset.innerHTML = response.sunset
        // console.log(response)
    })
    .catch(err => console.log(err));

    const url2 = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+"Bangalore";
    fetch(url2, options)
    .then(response => response.json())
    .then(response => {
        b_cloud_pct.innerHTML = response.cloud_pct
        b_temp.innerHTML = response.temp
        b_feels_like.innerHTML = response.feels_like
        b_humidity.innerHTML = response.humidity
        b_min_temp.innerHTML = response.min_temp
        b_max_temp.innerHTML = response.max_temp
        b_wind_speed.innerHTML = response.wind_speed
        b_wind_degrees.innerHTML = response.wind_degrees
        b_sunrise.innerHTML = response.sunrise
        b_sunset.innerHTML = response.sunset
        // console.log(response)
    })
    .catch(err => console.log(err));

    const url3 = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+"Kolkata";
    fetch(url3, options)
    .then(response => response.json())
    .then(response => {
        k_cloud_pct.innerHTML = response.cloud_pct
        k_temp.innerHTML = response.temp
        k_feels_like.innerHTML = response.feels_like
        k_humidity.innerHTML = response.humidity
        k_min_temp.innerHTML = response.min_temp
        k_max_temp.innerHTML = response.max_temp
        k_wind_speed.innerHTML = response.wind_speed
        k_wind_degrees.innerHTML = response.wind_degrees
        k_sunrise.innerHTML = response.sunrise
        k_sunset.innerHTML = response.sunset
        // console.log(response)
    })
    .catch(err => console.log(err));
};

getWeather("Delhi");
setTable();

let btn = document.getElementById('submit');
let aboutBtn = document.getElementById('about_app');
let usageBtn = document.getElementById('usage_guide');

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

aboutBtn.addEventListener('click',()=>{
    alert("This app gives you the weather of a city!");
});

usageBtn.addEventListener('click',()=>{
    alert("Enter a city in the search bar to get its weather!");
});