import React from "react";

export default class WeatherList extends React.Component {
  render() {
    return (
      <div>
        {/* <p>
          {this.props.weather[0] ? this.props.weather[0].name : "no 0 index"}
        </p> */}
         {this.props.weather.map(function(item,index){
         return <p key={index}>Name of city {item.name} The temp {item.cityTemp}</p>
        })} 
      </div>
    );
  }
}
