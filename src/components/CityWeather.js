import React from 'react'

const CityWeather = ({ location, locationWeather }) => {
    
    const icon_url = `http://openweathermap.org/img/wn/${locationWeather.weather[0].icon}@2x.png`;

    return (
        <div>
            <h4>{location}</h4> <img  id="wicon" src={icon_url} alt="Weather icon" />
            <p>{locationWeather.weather[0].description} {locationWeather.main.feels_like}</p>
        </div>
    )
}

export default CityWeather
