 

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Weather = () => {
  const [weatherData, setWeatherData] = useState({});
  const [cloudsData, setCloudsData] = useState({});
  const [sysData, setSysData] = useState({});
  const [windData, setWindData] = useState({});
  const [weatherDesc, setWeatherDesc] = useState([]);
  const [location, setLocation] = useState('');
  const [forecastData, setForecastData] = useState([]);

  useEffect(() => {
    updateWeather();  
  }, []);

  const updateWeather = (e) => {
    if (e) {
      e.preventDefault(); 
    }

    axios
      .get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=11c15604a23bd024c1c83c12bf0a9e6f`)
      .then((res) => {
        setWeatherData(res.data.main);
        setCloudsData(res.data.clouds);
        setSysData(res.data.sys);
        setWindData(res.data.wind);
        setWeatherDesc(res.data.weather);
        fetchForecast(); 
      })
      .catch((error) => {
        console.error('Error fetching data: ', error);
      });
  };

  const fetchForecast = () => {
    axios
      .get(`https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=11c15604a23bd024c1c83c12bf0a9e6f`)
      .then((res) => {
      
        const next5DaysForecast = res.data.list.filter(item => {
          return item.dt_txt.includes('12:00:00');
        });
        setForecastData(next5DaysForecast);  
      })
      .catch((error) => {
        console.error('Error fetching forecast data: ', error);
      });
  };

  const formatDate = (timestamp) => {
    const weekdayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const date = new Date(timestamp * 1000);
    const day = date.getDate();
    const dayOfWeek = date.getDay();
    const month = date.getMonth() + 1;
    return `${weekdayNames[dayOfWeek]} ${day}/${month}`;
  };

  const weatherIconUrl = `http://openweathermap.org/img/w/${weatherDesc.length > 0 ? weatherDesc[0].icon : ''}.png`;

  return (
    <div className='container' id='weather_report'>
      <div className='row'>
        <div className="col-md-12">
          <div className="wetherBg">
            <h1 className="heading" style={{ color: 'white' }}>Weather App</h1>
            <div className="d-grid gap-3 col-4 mt-4">
              <input
                type="text"
                id="locationInput"
                className="form-control"
                placeholder="Enter your city"
                onChange={(e) => setLocation(e.target.value)}
              />
              <button className="btn btn-primary" onClick={updateWeather}>Get Data</button>
            </div>
          </div>
        </div>

        <div className="data col-md-10 text-center mt-5">
          <div className="shadow rounded wetherResultBox">
            <div className="row">
              <h4 className="text-center" style={{ marginTop: '20px' }}>CURRENT WEATHER ,<br /> {sysData.country}</h4>
              {sysData.name}
              <div className="row">
                <div className="col-md-6">
                  <h5 style={{ paddingRight: '70%' }}>Today<br /><span style={{ color: 'blue' }}>{formatDate(sysData.sunrise)}</span></h5>
                </div>
                <div className="col-md-6">
                  <h5 style={{ paddingLeft: '70%' }}>Wind <br /><span style={{ color: 'blue' }}>{windData.speed} m/s</span></h5>
                </div>
              </div>
              <div>
                <img src={weatherIconUrl} alt="" /><br />
                <h5 style={{ color: "white" }}>{location}</h5>
                <h5>Temp <br /><span style={{ color: 'blue' }}>{Math.round(weatherData.temp - 273.15)} <sup>o</sup>C</span></h5>
              </div>
              <div className='row'>
                <div className="col-md-6">
                  <h5 style={{ paddingRight: '70%' }}>Clouds <br /><span style={{ color: 'blue' }}>{cloudsData.all} %</span></h5>
                </div>
                <div className="col-md-6">
                  <h5 style={{ paddingLeft: '70%' }}>Humidity <br /><span style={{ color: 'blue' }}>{weatherData.humidity} %</span></h5>
                </div>
              </div>
              <h2 className="text-center">Next 5 Days Forecast</h2>
              <div className="row justify-content-center">
                {forecastData.map((forecast, index) => (
                  <div key={index} className="qqq col-md-2 text-center mt-3 m-1" style={{ border: '2px solid black', background: 'blur' }}>
                    <h4><span style={{ color: 'blue' }}>{formatDate(forecast.dt)}</span></h4>
                    <img src={`http://openweathermap.org/img/w/${forecast.weather[0].icon}.png`} alt="" /><br />
                    <h5>Temp: <span style={{ color: 'blue' }}>{Math.round(forecast.main.temp - 273.15)} °C</span></h5>
                    <h5>Wind: <span style={{ color: 'blue' }}>{forecast.wind.speed} m/s</span></h5>
                    <h5>Clouds:<span style={{ color: 'blue' }}> {forecast.clouds.all} %</span></h5>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;

