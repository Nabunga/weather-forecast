import React from "react";
import "../../styles/main.scss";
import "../../styles/normalize.css";
import "./App.scss";
import WeatherForSevenDays from "../WeatherForSevenDays/WeatherForSevenDays";
import WeatherInPast from "../WeatherInPast/WeatherInPast";

const options = [
  {
    city: "Samara",
    lat: 53.195873,
    lon: 50.100193,
  },
  {
    city: "Togliatti",
    lat: 53.507836,
    lon: 49.420393,
  },
  {
    city: "Saratov",
    lat: 51.533557,
    lon: 46.034257,
  },
  {
    city: "Kazan",
    lat: 55.796127,
    lon: 49.106405,
  },
  {
    city: "Krasnodar",
    lat: 45.03547,
    lon: 38.975313,
  },
];

const App = () => {
  return (
    <React.Fragment>
      <header>
        <div className="header">
          <p className="header__first-item">Weather</p>
          <p className="header__second-item">forecast</p>
        </div>
      </header>
      <main>
        <div className="main">
          <WeatherForSevenDays options={options} />
          <WeatherInPast options={options} />
        </div>
      </main>
      <footer>
        <div className="footer">
          <p className="footer__text">с любовью от mercury development</p>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default App;
