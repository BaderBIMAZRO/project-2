import React from "react";

export default class Mark extends React.Component {
  toggleStar = id => {
    console.log("star click");
    console.log(this.props);
    this.props.handleStar(id);
  };

  // create function that move the clicked star item to the top

  render() {
    const isStar = this.props.isStar ? "star" : "star_border";
    console.log(this.props.index);
    return (
      <div>
        <div>
          <i
            onClick={() => this.toggleStar(this.props.index)}
            className="material-icons Star"
          >
            {isStar}
          </i>
        </div>
      </div>
    );
  }
}
