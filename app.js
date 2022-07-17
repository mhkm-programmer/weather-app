//Weather api
const API='b741fcea80de563ff8472ae42d2b29fb'

// Using fetch to get data

async function searchWeather(){
const searchCity=document.getElementById('searchInput').value
const url=`https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=${API}&units=metric` 

const res = await fetch(url)
const data = await res.json()
displayData(data)
console.log(data)
}

// Interacting with DOM to show data

function setInnerText(id, text){
    document.getElementById(id).innerText = text
}

const displayData= (data)=>{
    setInnerText("city", data.name)
    setInnerText("temp", data.main.temp)
    setInnerText("feels_like", data.main.feels_like)
    setInnerText("condition", data.weather[0].main)
    setInnerText("description", data.weather[0].description)


    const url=`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    document.getElementById("weather-icon").src = url



}

document.getElementById('search-btn').addEventListener("click", searchWeather)