// weather all status update function 
function updateWeathers(cityName, temperature, weatherStatus, weatherIcon) {
    let cityNameStatus = document.getElementById('cityName');
    let temperatureStatus = document.getElementById('temperature');
    let weatherSituation = document.getElementById('weatherStatus');
    let imageStatus = document.getElementById('weatherImage');
    let imageSource = `https://openweathermap.org/img/wn/${weatherIcon}@2x.png`;

    // update all weather status
    cityNameStatus.textContent = cityName;
    temperatureStatus.textContent = temperature;
    weatherSituation.textContent = weatherStatus;
    imageStatus.src = imageSource;
}


// get the weather data from api
function temperature(cityName = "dhaka") {
    // weather api url
    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=f787956b1d1344bb27194a8c42bf500b`
    // get weather data from openWeatherMap api 
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            // calculate & store data
            let temperature = ((data.main.temp) - 273.15).toFixed(2);
            let weatherStatus = data.weather[0].main;
            let weatherIcon = data.weather[0].icon;
            // call update weather function and pass parameter
            updateWeathers(cityName, temperature, weatherStatus, weatherIcon);
        }).catch(error=>{
            alert('please enter valid city name');
            console.log(error);
            
        });
}
temperature();


// added eventListener for search button
document.getElementById('searchButton').addEventListener('click', function () {
    // get user data and update input
    let userDataInput = document.getElementById('searchInput');
    let cityName = userDataInput.value;
    userDataInput.value = '';
    //call temperature function
    if(cityName!=''){
        temperature(cityName);
    }else{
        alert('please enter city name');
    }
})