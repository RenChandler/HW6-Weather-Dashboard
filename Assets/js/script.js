var apiKey = "&appid=18be08014d8d2f2d7af221e103531551"
//var geoURL =

var cityInput = document.querySelector("#city-search")
var searchBtn = document.querySelector("#search-id")
var date = moment().format("MMM Do, YYYY"); 




//Function to get latitude and longitude
function getCity (city){
    var cityURL = `http://api.openweathermap.org/geo/1.0/direct?q=${city}${apiKey}`
    fetch(cityURL)
        .then(
            function (response){
                return response.json()
            }
        ).then(function (data){
            getToday(data[0].lat, data[0].lon)
            getForecast(data[0].lat, data[0].lon)
        })

}

//Gets city information from the search
function handleInput(event){
    if (!cityInput.value){
        return 
    };
    event.preventDefault();
    var citySearch = cityInput.value.trim();
    getCity(citySearch);
}

//Activates the search
searchBtn.addEventListener("click",handleInput)

//finds weather information from longitude and latitude
function getToday(lat, lon){
    //Variables for DOM manipulation
    const todayEl = document.querySelector(".today")
    const card = document.createElement("div")
    const cardBody = document.createElement("div")
    const cardTitle = document.createElement("h2")
    const weatherIcon = document.createElement("img")
    const temp = document.createElement("p")
    const wind = document.createElement("p")
    const humidity = document.createElement("p")
    const UV = document.createElement("p")
    const column = document.createElement("div")
    
    
    //Add Classes to DOM variables
    column.setAttribute("class","col-md")
    card.setAttribute("class","card")
    cardBody.setAttribute("class","card-body")
    cardTitle.setAttribute("class","card-title")
    temp.setAttribute("class","card-text")
    wind.setAttribute("class","card-text")
    humidity.setAttribute("class","card-text")
    UV.setAttribute("class","card-text")
    //weatherIcon.setAttribute("src",iconImg)
    
    column.append(card)
    card.append(cardBody)
    cardBody.append(cardTitle,weatherIcon,temp,wind,humidity,UV)
    
    
    
    var todayURL =`http://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}${apiKey}&units=imperial`;
    fetch(todayURL)
    .then(
        function(response){
            return response.json()
        }
        ).then(function(data){
            console.log(data)
            //const iconImg = `https://openweathermap.org/img/w/${data.current.weather[0].icon}.png`
            cardTitle.textcontent = `${cityInput.value} ${date} ` 
            temp.textContent = `temp: ${data.current.temp}`
            wind.textContent = `wind: ${data.current.wind_speed}`
            humidity.textContent = `humidity: ${data.current.humidity}`
            UV.textContent = `UV: ${data.current.uvi}`
        })
        todayEl.innerHTML= " "
        todayEl.append(column)
}

function getForecast(lat, lon){
    const forecastEl = document.querySelector(".forecast")
    const card = document.createElement("div")
    const cardBody = document.createElement("div")
    const cardTitle = document.createElement("h2")
    const weatherIcon = document.createElement("img")
    const temp = document.createElement("p")
    const wind = document.createElement("p")
    const humidity = document.createElement("p")
    const column = document.createElement("div")
    

    column.setAttribute("class","col-md")
    card.setAttribute("class","card")
    cardBody.setAttribute("class","card-body")
    cardTitle.setAttribute("class","card-title")
    temp.setAttribute("class","card-text")
    wind.setAttribute("class","card-text")
    humidity.setAttribute("class","card-text")
    
    column.append(card)
    card.append(cardBody)
    cardBody.append(cardTitle,temp,wind,humidity)

    var forecastURL =`http://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}${apiKey}&units=imperial`;
    fetch(forecastURL)
    .then(
        function(response){
            return response.json()
        }
        ).then(function(data){
            console.log(data.daily)


        })
    // for (let i=1; i<data.daily.length; i += 5) {
    //     cardTitle.textcontent = `${cityInput.value} ${date} ` 
    //     temp.textContent = `temp: ${data.daily[i].temp}`
    //     wind.textContent = `wind: ${data.daily[i].wind_speed}`
    //     humidity.textContent = `humidity: ${data.daily[i].humidity}`
    //     forecastEl.innerHTML= " "
    //     forecastEl.append(column)
    //     return forecastEl


    }
