import React from 'react';
import Addweather from './components/Addweather';
import WDATA from './WDATA'
import axios from "axios";

export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      api_key:WDATA.access_key,
      weather:[],
      city:"Riyadh",
      newCity:'',
    }

  }
  getWeatherData = () =>{

    const url =`http://api.weatherstack.com/current?access_key=${this.state.api_key}&query=${this.state.city}`
    axios({
      methos:"GET",
      url:url,
    }).then(response=>{
      console.log(response)
    });
  };

  handleCity=e=>{
    this.setState({city:e.target.value})
    
    
}



  render(){
    console.log(this.state.city)
    // console.log(WDATA.access_key)
    // console.log(this.state.api_key)
     console.log(this.getWeatherData())
  

    return(
      
    <div>
      
      <h1>Weather data</h1>
      <Addweather city={this.state.city}
      handleCity={this.handleCity}
      handleClick={this.handleClick}/>
    </div>)
  }

}
