import React from "react";

export default class WeatherList extends React.Component {
    constructor(props){
        super(props);
        this.state={
            isStar: false,
        }
    }

    handleStar=()=>{
        console.log("star click")
        this.setState({isStar:!this.state.isStar})
      }
  render() {
    const isStar = this.state.isStar ? "star": "star_border";
    return (
      <div>
  <p>City {this.props.city.name}</p>
  <p>temp {this.props.city.cityTemp}</p>
         
         <button onClick={()=> this.props.deleteList()}>Delete</button>
         <div><i onClick={this.handleStar } className="material-icons">{isStar}</i></div>
         {/* <button onClick={()=>this.props.updateList()}>Update</button> */}
     </div>
    );
    
  }
}
