import React from 'react';

export default class Mark extends React.Component{
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
   
    render(){
        const isStar = this.state.isStar ? "star": "star_border";
        return(<div>
             <div><i onClick={this.handleStar } className="material-icons">{isStar}</i></div>
        </div>)
    }
}