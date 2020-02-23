import React from "react";
import Addweather from "./components/Addweather";
import './App.css';

import axios from "axios";
//http://api.openweathermap.org/data/2.5/weather?units=metric&q=riyadh&appid=eb5bd4d86c7e903cafc2a54851c97a11

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      api_key: 'eb5bd4d86c7e903cafc2a54851c97a11',
      weather: [],
      city: "Riyadh",
      newCity: ""
    };
  }
  getWeatherData = () => {
    const url = `http://api.openweathermap.org/data/2.5/weather?units=metric&q=${this.state.city}&appid=${this.state.api_key}`;
    axios({
      methos: "GET",
      url: url
    }).then(response => {
      console.log(response);
      this.setState({weather:[...this.state.weather,{cityTemp:response.data.main.temp, name:response.data.name}]})
    });
  };

  handleCity = e => {
    this.setState({ city: e.target.value });
  };

  render() {
   
    // console.log(WDATA.access_key)
     
    //console.log(this.state.weather)
console.log(this.state.weather)
    return (<div>
        <h1>Weather data</h1>
        <Addweather
          city={this.state.city}
          handleCity={this.handleCity}
          getWeatherData={this.getWeatherData}
          weather={this.state.weather}
        />
      </div>
    );
  }
}
