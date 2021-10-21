import './App.css';
import Weather from './Weather';

import "./Global.css";

export default function App() {
  return (
  
  <div className="App">
    <div className="container">

    <Weather defaultCity = "New York"/>
    <footer> 
      See project on {""} 
      <a href="https://github.com/nataliesha/my-react-weather-app" target="_blank" rel="noreferrer">
        
        github
        </a>

    </footer>
    </div>
    </div>
  );
}

