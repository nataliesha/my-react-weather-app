import React, {useState} from "react";
import axios from "axios";
import './Weather.css';

export default function Weather() {
    function handleResponse(response) {
        console.log(response.data);
    }
    const apiKey = "9c8bafe634beca68b8859c59c1ca6768";
    let city = "London";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return(
        <div className="weather">
            <form>
                <div className="row">
                    <div className="col-9">
                <input type="search" placeholder="Type a city..." className="form-control" autoFocus="on"/>
                </div><div className="col-3">
                <input type="submit" value="GO!" className="btn btn-primary w-100"/>
                </div>
                </div>
            </form>
            <h1>Tel Aviv</h1>
            <ul>
                <li>Wednsday 7:00</li>
                <li>Mostly Cloudy</li>
            </ul>
            <div className="row">
                <div className="col-6">
                   <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" alt="Mostly Cloudy" className="float-left"></img>
                   <span className="temperature">6</span><span className="unit">°C</span>
                </div>
                  <div className="col-6">
                    <ul>
                        <li>Precipitation: 0%</li>
                        <li>Humidity: 54%</li>
                        <li>Wind: 18 km/h</li>
                    </ul>
                </div>
            </div>
            
            </div>
    )

}