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
            console.log(data)
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
//cityInput.value = "";