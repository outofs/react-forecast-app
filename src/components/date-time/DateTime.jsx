import React from "react";

const DateTime = () => {
  const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const time = new Date();
  const hours = time.getHours() < 10 ? `0${time.getHours()}` : time.getHours();
  const minutes =
    time.getMinutes() < 10 ? `0${time.getMinutes()}` : time.getMinutes();
  const day = time.getDay();
  const month = time.getMonth();
  const date = time.getDate();
  return (
    <div className="current__date__container">
      <div className="current__time" id="time">{`${hours}:${minutes}`}</div>
      <div
        className="current__date"
        id="date"
      >{`${dayNames[day]}, ${monthNames[month]} ${date}`}</div>
    </div>
  );
};

export default DateTime;
