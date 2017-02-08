import React from 'react';

class Cell extends React.Component {
  clickHandler(event){
    console.log('CLICK');
  }

  enterCell(event){
    var myCell = document.querySelector(".cell");
    myCell.classList.add("highlighted");
    event.stopPropagation();
  }

  leaveCell(event){
    var myCell = document.querySelector(".cell");
    myCell.classList.remove("highlighted");
    event.stopPropagation();
  }

  render(){
    return(
      <div
        className="cell"
        onClick={this.clickHandler}
        onMouseEnter={this.enterCell}
        onMouseLeave={this.leaveCell}
      >
      </div>
    )
  }
}

export default Cell;
