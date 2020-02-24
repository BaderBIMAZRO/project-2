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
  <p>City {this.props.city.name}</p>
  <p>temp {this.props.city.cityTemp}</p>
         
 <button onClick={()=> this.props.deleteList()}>Delete</button>
        <Mark/>
        <input type="text" onChange={e => this.props.handleUpdateEvent(e)}></input>
         <button onClick={()=>this.updateList(this.props.index)}>Update</button> 
     </div>
    );
    
  }
}
