import React, { useState, useEffect } from "react";
import axios from "axios";
import "./WeatherForSevenDays.scss";
import DailyWeatherCard from "../DailyWeatherCard/DailyWeatherCard";
import CitySelect from "../CitySelect/CitySelect";
import FieldsAttention from "../FieldsAttention/FieldsAttention";

const WeatherForSevenDays = ({ options }) => {
  const [activeOption, setActiveOption] = useState("");
  const [activeLat, setActiveLat] = useState(0);
  const [activeLon, setActiveLon] = useState(0);
  const [apiResult, setApiResult] = useState([]);

  //Get latitude for selected city
  useEffect(() => {
    function getActiveLat() {
      switch (activeOption) {
        case "Samara":
          setActiveLat(options[0].lat);
          break;
        case "Togliatti":
          setActiveLat(options[1].lat);
          break;
        case "Saratov":
          setActiveLat(options[2].lat);
          break;
        case "Kazan":
          setActiveLat(options[3].lat);
          break;
        case "Krasnodar":
          setActiveLat(options[4].lat);
          break;
        default:
      }
    }
    getActiveLat();
  }, [activeOption]);

  //Get longitude for selected city
  useEffect(() => {
    function getActiveLon() {
      switch (activeOption) {
        case "Samara":
          setActiveLon(options[0].lon);
          break;
        case "Togliatti":
          setActiveLon(options[1].lon);
          break;
        case "Saratov":
          setActiveLon(options[2].lon);
          break;
        case "Kazan":
          setActiveLon(options[3].lon);
          break;
        case "Krasnodar":
          setActiveLon(options[4].lon);
          break;
        default:
      }
    }
    getActiveLon();
  }, [activeOption]);

  //Make API request
  useEffect(() => {
    const weatherRequest = async () => {
      const { data } = await axios.get(
        "https://api.openweathermap.org/data/2.5/onecall",
        {
          params: {
            lat: activeLat,
            lon: activeLon,
            appid: "1eb308e6ff37dc1cfbe5a711bb5963e8",
            exclude: "current,minutely,hourly,alerts",
            units: "metric",
          },
        }
      );
      setApiResult(data);
    };
    weatherRequest();
  }, [activeOption, activeLat, activeLon]);

  if (activeOption === "") {
    return (
      <section>
        <div className="seven-days-card">
          <h1 className="seven-days-card__header">7 Days Forecast</h1>
          <CitySelect options={options} setActiveOption={setActiveOption} />
          <FieldsAttention />
        </div>
      </section>
    );
  }
  return (
    <section>
      <div className="seven-days-card">
        <h1 className="seven-days-card__header">7 Days Forecast</h1>
        <CitySelect options={options} setActiveOption={setActiveOption} />
        <DailyWeatherCard apiResult={apiResult} />
      </div>
    </section>
  );
};

export default WeatherForSevenDays;
