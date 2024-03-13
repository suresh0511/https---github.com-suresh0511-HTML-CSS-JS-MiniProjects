const apiKey = "9072f28a199d3f18155b47671985beb2";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather_icon");

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();

    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "&degc";
    document.querySelector('.humidity').innerHTML = data.main.humidity + "%";
    document.querySelector('.wind').innerHTML = data.wind.speed + "km/h";

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "Images/clouds.png";
    }else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "Images/clear.png";
    }else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "Images/rain.png";
    }else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "Images/mist.png";
    }else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "Images/drizzle.png";
    }else if(data.weather[0].main == "Snow"){
        weatherIcon.src = "Images/snow.png";
    }
}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
    document.getElementById("weather").style.display = "block";
})

