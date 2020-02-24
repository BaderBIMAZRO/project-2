import React from "react";
import Mark from './Mark'
import ReactModal from 'react-modal';
ReactModal.setAppElement('body')


export default class WeatherList extends React.Component {
     constructor(){
         super();
         this.state = {
           showModal: false
         };
        
       }
      
       handleOpenModal=()=>{
         this.setState({ showModal: true });
       }
      
       handleCloseModal=()=>{
        this.setState({ showModal: false });
     }
      

updateList=(id)=>{
    // console.log("upadte clicked")
    
    this.props.handleUpdate(id);
    // this.props.city[index].name="Update";
    // this.props.city[index].cityTemp="Update";

}

    
  render() {

    
    return (
      <div className="list-style">
           <img className="sunny" src="https://i.gifer.com/ZIZ1.gif" alt="sunny"/>
  <p className="city-name"> {this.props.city.name}</p>
  <p className="temp">{this.props.city.cityTemp}°c</p>
        <div>
        <Mark/>

        <button   className="btn-1" onClick={this.handleOpenModal}>Edit</button>
         <ReactModal  
           isOpen={this.state.showModal}
           className="modal">
            
            <h1>Update City</h1>
            <input className="input-style" type="text" onChange={e => this.props.handleUpdateEvent(e)}></input>
            <button className="btn-1" onClick={()=>this.updateList(this.props.index)}>Update</button> 
         <div>
         <button className="close-btn" onClick={this.handleCloseModal}>Close</button>
         </div>
        </ReactModal>
         </div>
         <i onClick={()=> this.props.deleteList()} className="material-icons delete">delete_forever</i>
     </div>
    );
    
  }
}
