import React from "react";

const Timezone = ({ weatherData }) => {
  return (
    <div className="place__container">
      <div className="time__zone" id="time__zone">
        {weatherData.timezone}
      </div>
      <div
        className="country"
        id="country"
      >{`${weatherData.lat}N + ${weatherData.lon}E`}</div>
    </div>
  );
};

export default Timezone;
