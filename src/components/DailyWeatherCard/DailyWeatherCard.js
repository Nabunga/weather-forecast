import React from "react";
import "./DailyWeatherCard.scss";

const DailyWeatherCard = ({ apiResult }) => {
  const dateTimestamp = apiResult.daily[0].dt;
  const timeStampToDate = new Date(dateTimestamp * 1000);
  const monthName = timeStampToDate.toLocaleString("eng", { month: "long" });

  const date =
    `${timeStampToDate.getDay()} ` +
    `${monthName} ` +
    `${timeStampToDate.getFullYear()}`;
  const iconTemp = apiResult.daily[0].weather[0].icon;
  const weatherIcon = `http://openweathermap.org/img/wn/${iconTemp}@2x.png`;
  const dayTemp = "+ " + Math.round(apiResult.daily[0].temp.day) + "°";

  return (
    <div className="daily-card">
      <div className="daily-card__date">{date}</div>
      <img
        className="daily-card__img"
        src={weatherIcon}
        alt="current weather icon"
      />
      <div className="daily-card__temp">{dayTemp}</div>
    </div>
  );
};

export default DailyWeatherCard;
