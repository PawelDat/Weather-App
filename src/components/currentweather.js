import React from "react";
import img from "../assets/01d.png";
const CurrentWeather = () => {
  return (
    <div className="weather">
      <div className="top">
        <div className="paragraphs">
          <p className="city">Katowice</p>
          <p className="weather-description">Rainy</p>
        </div>
        <img src={img} alt="weather" className="weather-icon" />
      </div>
      <div className="bottom">
        <p className="temperature">18°C</p>
        <div className="details">
          <div className="parameter-row">
            <span className="parameter-label">Feels like</span>
            <span className="parameter-value">19°C</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Wind</span>
            <span className="parameter-value">3m/s</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Humidity</span>
            <span className="parameter-value">15%</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Pressure</span>
            <span className="parameter-value">15 hPa</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
