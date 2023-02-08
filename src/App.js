import { useEffect, useState } from "react";
import {
  GEO_API_URL,
  WEATHER_API_KEY,
  WEATHER_API_URL,
  geoApiOptions,
} from "./api";
import "./App.css";
import CurrentWeather from "./components/current-weather/CurrentWeather";
import DateTime from "./components/date-time/DateTime";
import ForecastItem from "./components/forecast-item/ForecastItem";
import Search from "./components/search/Search";
import Timezone from "./components/timezone/Timezone";

function App() {
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((success) => {
      const { latitude, longitude } = success.coords;

      const currentLocationFetch = fetch(
        `${GEO_API_URL}/cities?location=${
          latitude >= 0 ? "%2B" : "-"
        }${latitude}${
          longitude >= 0 ? "%2B" : "-"
        }${longitude}&minPopulation=1`,
        geoApiOptions
      );

      const currentWeatherFetch = fetch(
        `${WEATHER_API_URL}/onecall?lat=${latitude}&lon=${longitude}&units=metric&appid=${WEATHER_API_KEY}`
      );

      Promise.all([currentLocationFetch, currentWeatherFetch]).then(
        async (res) => {
          const locationRes = await res[0].json();
          const weatherRes = await res[1].json();

          setCurrentWeather({
            city: `${locationRes.data[0].name}, ${locationRes.data[0].countryCode}`,
            ...weatherRes,
          });
        }
      );
    });
  }, []);
  const [currentWeather, setCurrentWeather] = useState(null);

  const handleOnSearchChange = function (searchData) {
    const [lat, lon] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${WEATHER_API_KEY}`
    );

    Promise.all([currentWeatherFetch])
      .then(async (res) => {
        const weatherRes = await res[0].json();

        setCurrentWeather({ city: searchData.label, ...weatherRes });
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <>
      <div className="container">
        <div className="date__search__place__container">
          <DateTime />

          <div className="search">
            <Search onSearchChange={handleOnSearchChange} />
          </div>

          {currentWeather && <Timezone weatherData={currentWeather} />}
        </div>

        {currentWeather && <CurrentWeather weatherData={currentWeather} />}
      </div>

      <div className="future__forecast">
        <div className="weather__forecast" id="weather__forecast">
          {currentWeather &&
            currentWeather.daily.map((day, i) => (
              <ForecastItem dayData={day} key={i} />
            ))}
        </div>
      </div>
    </>
  );
}

export default App;
