import React from "react";
import Addweather from "./components/Addweather";
import "./App.css";


import axios from "axios";
//http://api.openweathermap.org/data/2.5/weather?units=metric&q=riyadh&appid=eb5bd4d86c7e903cafc2a54851c97a11

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.api_key = "eb5bd4d86c7e903cafc2a54851c97a11";
    this.unfaveClear=[];

    this.state = {
      weather: [],
      
    };
  }
  
  // get api data to weather and fave state
  getWeatherData = () => {
    const url = `http://api.openweathermap.org/data/2.5/weather?units=metric&q=${this.state.city}&appid=${this.api_key}`;
    axios({
      methos: "GET",
      url: url
    }).then(response => {
      this.setState({
        weather: [
          ...this.state.weather,
          {
            cityTemp: response.data.main.temp,
            name: response.data.name,
            isStar: false
          }
        ]
      });
    });
  };

  // delete function for specific item

  deleteList = id => {
    
    const deleteBtn = Object.assign([], this.state.weather);
    deleteBtn.splice(id, 1);
    this.setState({ weather: deleteBtn });
  };

  deleteAll =()=>{
    console.log("delete all")
    this.setState({weather:[]})
  }

  clearUnfave=()=>{
    this.unfaveClear=[];
    console.log("Unfave button")
    this.state.weather.map((item,index)=>{
      item.key=index
      if (item.isStar) {
        this.unfaveClear.push(item);
      } 
      
    });
    this.setState({weather:this.unfaveClear})
  }


  // get the input from input  value that's on top  
  handleCity = e => {
    this.setState({ city: e.target.value });
  };

  // get the input from the modal that's inside modal pop up for updating city api
  handleUpdateEvent = e => {
    this.setState({ newCity: e.target.value });
  };

  // get api that has been set by newCity
  handleUpdate = id => {
    
    const updateData = Object.assign([], this.state.weather);
    const url = `http://api.openweathermap.org/data/2.5/weather?units=metric&q=${this.state.newCity}&appid=${this.api_key}`;
    axios({
      methos: "GET",
      url: url
    }).then(response => {
     

      updateData[id].name = response.data.name;
      updateData[id].cityTemp = response.data.main.temp;
      this.setState({ weather: updateData });
    });
  };

  // this set the functoinality of the isStar to move the item on top of the other elements from weather array
  handleStar = id => {
  
    const newWeather = [...this.state.weather];
    console.log(newWeather, "handle star");
    newWeather[id].isStar = !this.state.weather[id].isStar;

    this.setState({
      weather: newWeather
    });

  };


  render() {
    
    console.log(this.state.weather);
    return (
      <div className="App">
        <h1>
          <i className="material-icons icon">brightness_7</i>Weather Applicaton
        </h1>

        <Addweather
          isStar={this.state.isStar}
          city={this.state.city}
          handleCity={this.handleCity}
          handleUpdate={this.handleUpdate}
          handleUpdateEvent={this.handleUpdateEvent}
          getWeatherData={this.getWeatherData}
          weather={this.state.weather}
          deleteList={this.deleteList}
          OnUpdate={this.handleUpdate}
          handleStar={this.handleStar}
          deleteAll={this.deleteAll}
          clearUnfave={this.clearUnfave}
        />
      </div>
    );
  }
}
