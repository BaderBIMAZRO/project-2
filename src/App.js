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
      name: "",
    

      
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

 // [...this.state.weather,{cityTemp:response.data.main.temp, name:response.data.name}]

  deleteList =(index)=>{
      console.log("delete button");
      const deletebtn = Object.assign([],this.state.weather);
      deletebtn.splice(index,1);
      this.setState({weather:deletebtn}) 
  }

  handleCity = e => {
    this.setState({ city: e.target.value });
  };

  handleUpdateEvent = e => {
    this.setState({ newCity: e.target.value });
   
  };

 
  handleUpdate=(id)=>{
      console.log(id)
    console.log("App clicked")
    // this.setState({ cityTemp:"Update"
    const updateData = Object.assign([], this.state.weather);
    const url = `http://api.openweathermap.org/data/2.5/weather?units=metric&q=${this.state.newCity}&appid=${this.state.api_key}`;
    axios({
      methos: "GET",
      url: url
    }).then(response => {
      console.log(response)
   
     updateData[id].name = response.data.name;
     updateData[id].cityTemp=response.data.main.temp;
    this.setState({weather:updateData})
  });
   
  }
 

  render() {
     
   
    // console.log(WDATA.access_key)
     
    //console.log(this.state.weather)
console.log(this.state.weather)
    return (<div className="App">
     
        <h1><i class="material-icons icon">brightness_7</i>Weather Applicaton</h1>
        
        <Addweather
          city={this.state.city}

          handleCity={this.handleCity}
          handleUpdate={this.handleUpdate}

          handleUpdateEvent={this.handleUpdateEvent}
          getWeatherData={this.getWeatherData}
          weather={this.state.weather}
          deleteList={this.deleteList}
          OnUpdate={this.handleUpdate}
        />
  
      </div>
    );
  }
}
