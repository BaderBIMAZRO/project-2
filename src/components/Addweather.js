import React from 'react';
import WeatherContainer from './WeatherContainer'




export default class Addweather extends React.Component{
 
    

    render(){
        return(<div className="Addweather">
        <input type="text" onChange={e => this.props.handleCity(e)}></input>
        <button onClick={()=> this.props.getWeatherData()}>Enter City</button>
        <WeatherContainer  weather={this.props.weather} deleteList={this.props.deleteList} OnUpdate={this.props.OnUpdate} handleUpdate={this.props.handleUpdate} handleUpdateEvent ={this.props.handleUpdateEvent}/>
           
           
            </div>)
    }
}