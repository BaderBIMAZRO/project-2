import React from 'react';
import WeatherContainer from './WeatherContainer'




export default class Addweather extends React.Component{
 
    

    render(){
        // passing props and set button and input on top
        return(<div className="Addweather">
        <div className="div-style">
        <input className="input-style" type="text" onChange={e => this.props.handleCity(e)}></input>
        <button className="btn-1" onClick={()=> this.props.getWeatherData()}>Enter City</button>
        <button className="btn-2" onClick={()=>this.props.deleteAll()} >Delete All</button>
        <button className="btn-3" onClick={()=>this.props.clearUnfave()} >Clear Unfave</button>
        </div>
        <WeatherContainer  weather={this.props.weather} 
        deleteList={this.props.deleteList} 
        OnUpdate={this.props.OnUpdate} 
        handleUpdate={this.props.handleUpdate} 
        handleUpdateEvent ={this.props.handleUpdateEvent}
        handleStar={this.props.handleStar}
        />
           
           
            </div>)
    }
}