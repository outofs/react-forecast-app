import React from "react";

const ForecastItem = ({ dayData }) => {
  return (
    <div className="weather__forecast__item">
      <div className="day">
        {window.moment(dayData.dt * 1000).format("ddd")}
      </div>
      <img
        src={`http://openweathermap.org/img/wn/${dayData.weather[0].icon}@2x.png`}
        alt="weather icon"
        className="w__icon"
      />
      <div className="temp">Night {Math.round(dayData.temp.night)}&#176;C</div>
      <div className="temp">Day {Math.round(dayData.temp.day)}&#176;C</div>
    </div>
  );
};

export default ForecastItem;
