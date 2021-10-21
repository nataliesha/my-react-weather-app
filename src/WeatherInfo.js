import React from "react";
import WeatherIcon from "./WeatherIcon";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";

import "./Global.css";
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
    return (          
    <div className="weatherinfo-container text-capitalize"> 
    <div className="weatherinfo-1">
    <div className="weatherinfo-1-left">
    <h1>{props.data.city}</h1>
    <h5><FormattedDate date={props.data.date} /></h5>
    <h5 className="text-capitalize">{props.data.description}</h5>
    </div>
    <div className="weatherinfo-1-center">
    <h2><WeatherTemperature celsius={props.data.temperature}/></h2>
    </div>
    <div className="weatherinfo-1-right">
    <WeatherIcon code={props.data.icon} size={100} />
    </div>
    </div>   
    <div className="">
        <div className="weatherinfo-2">
        <div className="weatherinfo-2-info"> 
              <em><h6>Humidity: {props.data.humidity}%</h6></em>
                <em><h6>Wind: {props.data.wind}km/h</h6></em>
            </div>
          </div>
          <div className="weatherinfo-3">
        <h3>Weekly Forecast:</h3>
          </div>
        
    </div>
    </div>
    );
}