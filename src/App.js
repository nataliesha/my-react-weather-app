import './App.css';
import Weather from './Weather';

import "./Global.css";

export default function App() {
  return (
  
  <div className="App">
    <div className="container">

    <Weather defaultCity = "New York"/>
    <footer> 
      This project was coded by Natalie Sharoni and is {""} 
      <a href="https://github.com/nataliesha/my-react-weather-app" target="_blank" rel="noreferrer">
        
       open-sourced on GitHub
        </a>

    </footer>
    </div>
    </div>
  );
}

