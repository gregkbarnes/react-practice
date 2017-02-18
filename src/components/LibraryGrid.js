import React from 'react';
import Sortmate from './Librarygrid/Sortmate';
// import createSortmate from '../../createSortmate';

var libComponents = []


class LibraryGrid extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      cursorX: 0,
      cursorY: 0
    }
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
          <button onClick={this.addComponent}>{'Add SortMate'}</button>
          {libComponents}
        </div>
      </div>
    )
  }
}

export default LibraryGrid;
