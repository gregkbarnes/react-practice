import React from 'react';

class Sortmate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nodeNumber: "01"
    }
  }

  clickHandler(event){
    console.log('CLICK');
  }

  enterCell(event){
    var myCell = document.querySelector(".sortmate");
    myCell.classList.add("highlighted");
    event.stopPropagation();
  }

  leaveCell(event){
    var myCell = document.querySelector(".sortmate");
    myCell.classList.remove("highlighted");
    event.stopPropagation();
  }

  render(){
    return(
      <div
        className="sortmate"
        onClick={this.clickHandler}
        onMouseEnter={this.enterCell}
        onMouseLeave={this.leaveCell}
      >
        <div className="node-label">{"SM"+this.state.nodeNumber}</div>
      </div>
    )
  }
}

export default Sortmate;
