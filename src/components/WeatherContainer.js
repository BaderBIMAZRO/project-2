import React from 'react';
import WeatherList from './WeatherList' 

export default class WeatherContainer extends React.Component{
    render(){
        return(
        <div>
                <WeatherList weather={this.props.weather}/></div>
        )
    }
}