import React, { useState, useEffect } from 'react';
import searchicon from './img/search.svg';
import cloud from './img/cloud.svg';
import cloudy from './img/cloudy.svg';
import drizzle from './img/cloud-drizzle-fill.svg';
import rain from './img/cloud-rain.svg';
import snow from './img/snow.svg';
import wind from './img/wind.svg';
import water from './img/water.svg';

const WeatherAPI = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null); 

  const allIcons = {
    "02d": cloud,
    "02n": cloud,
    "03d": cloudy,
    "03n": drizzle,
    "04d": drizzle,
    "09d": rain,
    "09n": rain,
    "10d": rain,
    "10n": rain,
    "13d": snow,
    "13n": snow
  };

  const search = async (city) => {
    if (city === "") {
      alert("Enter city Name");
      return;
    }
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=eeffe358d44dae49b0ebfaa02aeb051e&units=metric`;
      const response = await fetch(url);
      const data = await response.json();
      
      if (!response.ok) {
         alert(data.message);
         return;
      }
      
      const icon = allIcons[data.weather[0].icon] || null;
      setWeatherData({
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        temperature: Math.floor(data.main.temp),
        location: data.name,
        icon: icon
      });

    
      setCity('');

    } catch (error) {
      setWeatherData(null);
      console.error("Error in fetching weather data", error);
    }
  };

  useEffect(() => {
    search("London"); 
  }, []);

  return (
    <div className='container' id='weather_report'>
      <div className='row'>
        <div className='col-md-4'>
          <div className='weather'>
            <input type='text' value={city} onChange={(e) => setCity(e.target.value)} placeholder='search' />
            <img src={searchicon} alt="" onClick={() => search(city)} className='search' />
          </div>
        </div>
        
        {weatherData && (
          <div className='col-md-4' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', height: '100%' }}>
            <div className='weather-details'>
              <img src={weatherData.icon} alt="" className='weather-icon' style={{ width: '80px', height: '80px' }} />
              <p className='temperature'> {weatherData.temperature}°C</p>
              <p className='location'>{weatherData.location}</p>
              <div className='row' id='weather-data' >
                <div className='col'>
                  <img src={water} alt="" />
                  <h5>{weatherData.humidity}%</h5>
                  <h4>Humidity</h4>
                </div>
                <div className='col'>
                  <img src={wind} alt="" />
                  <h5>{weatherData.windSpeed} km/h</h5>
                  <h4>Wind Speed</h4>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WeatherAPI;
