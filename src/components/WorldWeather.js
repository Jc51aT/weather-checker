import React from 'react'
import CityWeather from './CityWeather'

const WorldWeather = ({ cities }) => {
    const generateKey = (city) => {
        return `${city}_${ new Date().getTime() }`;
    }

    return (
        <div >
            {cities.map((city) => (
                <CityWeather key={generateKey(city.name)} location={city.name} locationWeather={city}/>
            ))}
        </div>
    )
}

export default WorldWeather
