import React from 'react';
import WeatherList from './WeatherList' 

export default class WeatherContainer extends React.Component{
    render(){
        return(
        <div className="container">
             {this.props.weather.map((item, index)=> {
          return <WeatherList key={index} city={item} deleteList={this.props.deleteList} /> 
             })}
             </div>
        )
    }
}
        