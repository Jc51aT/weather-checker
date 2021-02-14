import React from 'react'


const WeatherResults = ({ results }) => {
    
    return (
        <div>
            {results.cod !== '404' ? 
            results.weather[0].description :
            'City Not Found.'}
        </div>
    )
}

export default WeatherResults
