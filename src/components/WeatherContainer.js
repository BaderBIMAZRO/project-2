import React from "react";
import WeatherList from "./WeatherList";

export default class WeatherContainer extends React.Component {
  constructor(props) {
    super(props);
    this.arrangeArr = [];
    this.state = {};
  }
  
  arrange() {
    this.arrangeArr = [];
    this.props.weather.map((item, index) => {
      item.key = index;
      if (item.isStar) {
        this.arrangeArr.unshift(item);
      } else {
        this.arrangeArr.push(item);
      }
    });
  }

  render() {
    this.arrange();
    return (
      <div className="container">
        {this.arrangeArr.map((item,index) => {
          return (
            <WeatherList
              key={index}
              index={item.key}
              city={item}
              deleteList={this.props.deleteList}
              OnUpdate={this.props.OnUpdate}
              handleUpdate={this.props.handleUpdate}
              handleUpdateEvent={this.props.handleUpdateEvent}
              handleStar={this.props.handleStar}
            />
          );
        })}
        
      </div>
    );
  }
}
