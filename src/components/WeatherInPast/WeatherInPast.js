import React, { useState, useEffect } from "react";
import "../WeatherInPast/WeatherInPast.scss";
import axios from "axios";
import InputMask from "react-input-mask";
import "./WeatherInPast.scss";
// import WeatherInPastCard from '../WeatherInPastCard/WeatherInPastCard'
import FieldsAttention from "../FieldsAttention/FieldsAttention";
import CitySelect from "../CitySelect/CitySelect";

const WeatherInPast = ({ options }) => {
  const [activeOption, setActiveOption] = useState("");
  const [apiResult, setApiResult] = useState([]);
  const [inputDate, setInputDate] = useState("");

  //Get latitude for selected city
  const [activeLat, setActiveLat] = useState(0);
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
  const [activeLon, setActiveLon] = useState(0);
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

  //Convert inputed date to UNIX timestamp for API request parameter calls 'dt'
  const date = new Date(inputDate).getTime() / 1000;

  //API request for the weather in past
  useEffect(() => {
    const searchWeatherInPast = async () => {
      const { data } = await axios.get(
        "https://api.openweathermap.org/data/2.5/onecall/timemachine",
        {
          params: {
            lat: activeLat,
            lon: activeLon,
            dt: date,
            appid: "1eb308e6ff37dc1cfbe5a711bb5963e8",
            units: "metric",
          },
        }
      );
      setApiResult(data);
    };
    searchWeatherInPast();
  }, [activeOption, inputDate]);

  return (
    <section className="weather-in-past-card">
      <h1 className="weather-in-past-card__header">
        Forecast for a Date in the Past
      </h1>
      <CitySelect options={options} setActiveOption={setActiveOption} />
      <div className="weather-in-past-card__date-input">
        <InputMask
          mask="9999/99/99"
          placeholder="Select date"
          value={inputDate}
          onChange={(e) => setInputDate(e.target.value)}
        />
      </div>
      <FieldsAttention />
    </section>
  );
};

export default WeatherInPast;
