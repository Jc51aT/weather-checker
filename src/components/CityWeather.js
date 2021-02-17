import React from 'react'

const CityWeather = ({ location, locationWeather }) => {
    
    const icon_url = `http://openweathermap.org/img/wn/${locationWeather.weather[0].icon}@2x.png`;
    return (
        <div className='container'>
            <div>
                <h4>{location}</h4> <img  id="wicon" src={icon_url} alt="Weather icon" />
                <p>{locationWeather.weather[0].description}</p>
            </div>
            <div className='weather-temps'>
                <p>High Today: {locationWeather.main.temp_max}° C</p>
                <p>Low Today: {locationWeather.main.temp_min}° C</p>
                <p>Feels like: {locationWeather.main.feels_like}° C</p>
            </div>
        </div>
    )
}

export default CityWeather
