import React from 'react';
import WeatherData from './WeatherContainer'




export default class Addweather extends React.Component{
 
    addWeatherData=()=>{
        console.log("clicked")
        
      
      }

    render(){
        return(<div>
        <input type="text" onChange={e => this.props.handleCity(e)}  ></input>
        <button onClick={()=> this.addWeatherData()}>Enter City</button>
            <WeatherData/>    
            </div>)
    }
}