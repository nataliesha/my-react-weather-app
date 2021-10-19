import React, {useState} from "react";
import WeatherInfo from "./WeatherInfo";
import WeatherForcast from "./WeatherForcast";
import axios from "axios";
import './Weather.css';

export default function Weather(props) {   
    const [city, setCity] = useState(props.defaultCity);
    const [weatherData, setWeatherData] = useState({ready: false});
    function handleResponse(response) {
        setWeatherData({
            ready: true,
            temperature: response.data.main.temp,
            humidity: response.data.main.humidity,
            date: new Date(response.data.dt * 1000),
            description: response.data.weather[0].description,
            icon: response.data.weather[0].icon,
            wind: response.data.wind.speed,
            city: response.data.name
        });
    }

    function search() {
        const apiKey = "9c8bafe634beca68b8859c59c1ca6768";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);
      
    }

    function handleSubmit(event) {
        event.preventDefault();
        search();
        //Search for a city

    }

    function handleCityChange(event) {
        setCity(event.target.value);

    }



    if(weatherData.ready) {
        return(
            <div className="weather">
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-9">
                    <input 
                    type="search" 
                    placeholder="Type a city..." 
                    className="form-control" 
                    autoFocus="on" 
                    onChange={handleCityChange} />
                    </div><div className="col-3">
                    <input type="submit" value="GO!" className="btn btn-primary w-100"/>
                    </div>
                    </div>
                </form>
                <WeatherInfo data={weatherData} />
                <WeatherForcast />
               
                </div>
        )

    } else {
        search();
        return "Loading...";   
        
    }


    

}