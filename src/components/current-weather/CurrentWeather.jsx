import React from "react";

const CurrentWeather = ({ weatherData }) => {
  const { humidity, pressure, sunrise, sunset, wind_speed } =
    weatherData.current;
  const day = weatherData.daily[0];
  return (
    <div className="current__info">
      <div className="current__weather__container">
        <div className="title">{weatherData && weatherData.city}</div>
        <div className="current__weather__info">
          <div className="today" id="current__temp">
            <img
              src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@4x.png`}
              alt="weather icon"
              className="w__icon"
            />
            <div className="other">
              <div className="day">
                {window.moment(day.dt * 1000).format("ddd")}
              </div>
              <div className="temp">Night - {day.temp.night}&#176;C</div>
              <div className="temp">Day - {day.temp.day}&#176;C</div>
            </div>
          </div>
          <div className="current__others" id="current__weather__items">
            <div className="weather__item">
              <div>Humidity</div>
              <div>{humidity}%</div>
            </div>
            <div className="weather__item">
              <div>Pressure</div>
              <div>{pressure}</div>
            </div>
            <div className="weather__item">
              <div>Wind Speed</div>
              <div>{wind_speed}</div>
            </div>
            <div className="weather__item">
              <div>Sunrise</div>
              <div>{window.moment(sunrise * 1000).format("HH:mm")}</div>
            </div>
            <div className="weather__item">
              <div>Sunset</div>
              <div>{window.moment(sunset * 1000).format("HH:mm")}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
