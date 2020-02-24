import React from "react";
import Mark from './Mark'

export default class WeatherList extends React.Component {
    
    

updateList=(id)=>{
    // console.log("upadte clicked")
    
    this.props.handleUpdate(id);
    // this.props.city[index].name="Update";
    // this.props.city[index].cityTemp="Update";

}
    
  render() {
    
    return (
      <div className="list-style">
  <p className="city-name"> {this.props.city.name}</p>
  <p className="temp"> {this.props.city.cityTemp}°c</p>
        <div>
        <Mark/>
        <input className="input-style" type="text" onChange={e => this.props.handleUpdateEvent(e)}></input>
         <button className="btn-1" onClick={()=>this.updateList(this.props.index)}>Update</button> 
         </div>
         <i onClick={()=> this.props.deleteList()} className="material-icons delete">delete_forever</i>
     </div>
    );
    
  }
}
