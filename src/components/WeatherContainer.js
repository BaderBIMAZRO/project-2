import React from 'react';
import WeatherList from './WeatherList' 

export default class WeatherContainer extends React.Component{
    constructor(props){
        super(props);
        this.state={
            
        }
    }
    render(){
        
        return(
        <div className="container">
             {this.props.weather.map((item, index)=> {
          return <WeatherList key={index} 
           index={index} city={item} 
           deleteList={this.props.deleteList} 
           OnUpdate={this.props.OnUpdate} 
           handleUpdate={this.props.handleUpdate} 
           handleUpdateEvent ={this.props.handleUpdateEvent}/> 
             })}
             </div>
        )
    }
}
        