import React from "react";
import Search from "./components/search";
import CurrentWeather from "./components/currentweather";
import "./css/main.css";

const App = () => {

  const handleOnSearchChange = (searchData) => {
    console.log(searchData);
  }

  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange} />
      <CurrentWeather/>
    </div>
  );
};

export default App;
