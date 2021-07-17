var apiKey = "&appid=18be08014d8d2f2d7af221e103531551"
//var geoURL =

var cityInput = document.querySelector("#city-search")
var searchBtn = document.querySelector("#search-id")




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

function handleInput(event){
    if (!cityInput.value){
        return 
    };
    event.preventDefault();
    var citySearch = cityInput.value.trim();
    getCity(citySearch);
}

searchBtn.addEventListener("click",handleInput)


function getToday(lat, lon){
    var todayURL =`http://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}${apiKey}&units=imperial`;
    fetch(todayURL)
        .then(
            function(response){
                return response.json()
            }
        ).then(function(data){
            console.log(data)
        })
}