import React from "react";
import './Weather.css';

export default function Weather() {

    return(
        <div className="weather">
            <form>
                <div className="row">
                    <div className="col-9">
                <input type="search" placeholder="Type a city..." className="form-control"/>
                </div><div className="col-3">
                <input type="submit" value="GO!" className="btn btn-primary"/>
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
                    <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" alt="Mostly Cloudy"></img>
                    6°C
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