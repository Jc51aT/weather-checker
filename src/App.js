import { useState, useEffect } from 'react'
import Header from './components/Header'
import WeatherResults from './components/WeatherResults';

// f9a9d367e665d5c38c32cefaf38d705b
const  App = () => {
  const [resultsWeather, setResultsWeather] = useState([]);
  const API_KEY = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;

  //fetch weather results
  const fetchWeather = async (city) => {
    
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
    
    const data = await res.json();
    console.log(data);
    setResultsWeather(data);

  }

  //fetchWeather('place');
  console.log(Object.keys(resultsWeather).length);
  return (
    <div className="App">
      <Header onSearch={fetchWeather}/>
      {Object.keys(resultsWeather).length > 0 && <WeatherResults results={resultsWeather}/>}
    </div>
  );
}

export default App;
