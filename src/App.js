import { useState, useEffect } from 'react'
import SearchBar from './components/SearchBar'
import WeatherResults from './components/WeatherResults';
import WorldWeather from './components/WorldWeather';

// f9a9d367e665d5c38c32cefaf38d705b
const  App = () => {
  const [worldCitiesResults, setWorldCitiesResults] = useState([]);
  const API_KEY = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;

  useEffect(() => {
    const getWrldCtsRes = async () => {
      const res = await fetchWorldCities();
      const resUsrLoc = await fetchUserLocationWeather();
      if(resUsrLoc){
        setWorldCitiesResults([resUsrLoc, ...res]);
      }
      else{
        setWorldCitiesResults(res);
      }
    }
    getWrldCtsRes();
  }, []);


  //fetch weather results
  const fetchWeather = async (city) => {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
    try {
      if(!res.ok)
        throw new Error();
      const data = await res.json();
      setWorldCitiesResults([data, ...worldCitiesResults]);
    } catch (error) {
      alert('City Not Found.')
    }
     
  }

  const fetchWorldCities = async () => {
    
    const wrldCities = ["New York","London","Nairobi","Tokyo", "Sydney"]
    
    let results = [];
    
    wrldCities.forEach(async (city) => {
      const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
      const data = await res.json();
      results.push(data);
    });
    
    return results;
  }

  function getPosition() {
    return new Promise((res, rej) => {
      window.navigator.geolocation.getCurrentPosition(res, rej);
    });
  }
  const fetchUserLocationWeather = async () => {
    if (navigator.geolocation) {
      return getPosition().then( async (result) => {
        const coords = [result.coords.latitude, result.coords.longitude ];
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${coords[0]}&lon=${coords[1]}&appid=${API_KEY}&mode=json&units=metric`)
        const data = await res.json();
        return data;
      }).catch(e => {
        console.log(e);
        alert('Location Unavailable.');
      });
    }
  }

  

  //console.log(userWeather.length);
  //console.log(worldCitiesResults);
  return (
    <div className="App">
      <div className='item'>
        <h1 className="title">Weather Checker</h1>
        <SearchBar onSearch={fetchWeather}/>
      </div>
      <WorldWeather cities={worldCitiesResults}/>
    </div>
  );
}

export default App;
