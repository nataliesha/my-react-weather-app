import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
    return (<div className="weatherinfo"> 
        <h1>{props.data.city}</h1>
    <ul>
        <li>
            <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
    </ul>
    <div className="row">
        <div className="col-6">
           <img src={props.data.iconUrl} alt={props.data.description} className="float-left"></img>
           <span className="temperature">{Math.round(props.data.temperature)}</span><span className="unit">°C</span>
        </div>
          <div className="col-6">
            <ul>
                <li>Humidity: {props.data.humidity} 54%</li>
                <li>Wind: {props.data.wind}18 km/h</li>
            </ul>
        </div>
    </div>
    </div>
    );
}