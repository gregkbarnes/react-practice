import React from 'react';
import Sortmate from './Librarygrid/Sortmate';
// import createSortmate from '../../createSortmate';

let libComponents = [];


class LibraryGrid extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      grid: {midpoint: 0},
      sortmates: Array(0),
      conveyors: Array(0),
      cursorX: 0,
      cursorY: 0
    }
  }

  componentDidMount() {
    //grab width of grid
    let gridElement = document.getElementById('library-grid');
    let gridWidth = (parseInt(window.getComputedStyle(gridElement).width.slice(0,-2)) / 2);
    let gridHeight = (parseInt(window.getComputedStyle(gridElement).height.slice(0,-2)) / 2);

    this.setState({
      grid: {midpoint: gridWidth}
    });

    this.addSortmate(gridWidth, gridHeight)

    // if (!libComponents.sortmate) {
    //   this.addComponent();
    // }
  }

  centerComponents() {
    let componentXPositions = [];
    let componentYPositions = [];

    for (var i = 0; i < this.state.sortmates.length; i++) {
      componentXPositions[i] = this.state.sortmates[i].xPosition;
      componentYPositions[i] = this.state.sortmates[i].yPosition;
    }

    console.log('MinX=' + Math.min.apply(Math, componentXPositions));
    console.log('MaxX=' + Math.max.apply(Math, componentXPositions));
    console.log('MinY=' + Math.min.apply(Math, componentYPositions));
    console.log('MaxY=' + Math.max.apply(Math, componentYPositions));

    let x = Math.max.apply(Math, componentXPositions);
    let y = Math.max.apply(Math, componentYPositions);
  }

  addSortmate(x,y){
    console.log("Function Called: LibraryGrid.addSortmate()");
    let mySortmate = {
      sortmateNumber: (1 + this.state.sortmates.length),
      xPosition: x,
      yPosition: y
    }

    this.state.sortmates.push(mySortmate);

    this.centerComponents();
  }

  addComponent(e){
    if (libComponents.sortmates) {
      libComponents.sortmates += 1;
    }
    else {
      libComponents.sortmates = 1;
    }
    var numSortmates = (libComponents.sortmates).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false}); //Sets to two-digit #
    libComponents.push( <Sortmate key={"SM"+numSortmates} nodeNumber={numSortmates} x={25} y={25} /> );
  }

  updateGridCursor(e){
    this.setState({
      cursorX: e.clientX,
      cursorY: e.clientY
    })
  }

  render(){
    return(
      <div className="container">
        <div id='library-grid' onMouseMove={this.updateGridCursor.bind(this)}>
          <div id='cursor-position'>{"Cursor Position: ("+this.state.cursorX+","+this.state.cursorY+")"}</div>
          <button onClick={this.addSortmate.bind(this)}>{'Add SortMate'}</button>
          {libComponents}
        </div>
      </div>
    )
  }
}

export default LibraryGrid;
