import React, { useEffect, useState } from "react";

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

  const [hours, setHours] = useState("");
  const [minutes, setMinutes] = useState("");
  const [day, setDay] = useState("");
  const [month, setMont] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    setInterval(() => {
      const time = new Date();
      setHours(time.getHours() < 10 ? `0${time.getHours()}` : time.getHours());
      setMinutes(
        time.getMinutes() < 10 ? `0${time.getMinutes()}` : time.getMinutes()
      );
      setDay(time.getDay());
      setMont(time.getMonth());
      setDate(time.getDate());
    }, 1000);
  }, []);

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
