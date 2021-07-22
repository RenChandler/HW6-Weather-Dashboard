var apiKey = "&appid=18be08014d8d2f2d7af221e103531551"
//var geoURL =

var cityInput = document.querySelector("#city-search")
var searchBtn = document.querySelector("#search-id")



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


    card.append(cardBody)
    cardBody.append(cardTitle,temp,wind,humidity)

    //var iconImg = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`

    var todayURL =`http://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}${apiKey}&units=imperial`;
    fetch(todayURL)
        .then(
            function(response){
                return response.json()
            }
        ).then(function(data){
            console.log(data.current.temp)
            temp.textContent = `temp: ${data.current.temp}`
            wind.textContent = `temp: ${data.current.wind_speed}`
            humidity.textContent = `temp: ${data.current.humidity}`
        })
}