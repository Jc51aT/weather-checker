import React from 'react'


const WeatherResults = ({ results }) => {
    
    return (
        <div className='container'>
            <h4>{results.name}</h4>
                {results.cod !== '404' ? 
                results.weather[0].description :
                'City Not Found.'}
        </div>
    )
}

export default WeatherResults
