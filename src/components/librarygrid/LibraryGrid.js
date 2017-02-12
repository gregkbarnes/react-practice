import React from 'react';
import Sortmate from './Sortmate';

class LibraryGrid extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      cursorX: 0,
      cursorY: 0,
      gridWidth: props.initialGridWidth,
      gridHeight: props.initialGridHeight
    }
  }

  componentDidMount(){

  }

  updateGridCursor(e){
    this.setState({
      cursorX: e.clientX,
      cursorY: e.clientY
    })
  }

  render(){
    return(
      <div id='library-grid' className="poop" onMouseMove={this.updateGridCursor.bind(this)}>
        <div id='cursor-position'>{"Cursor Position: ("+this.state.cursorX+","+this.state.cursorY+")"}</div>
      </div>
    )
  }
}

export default LibraryGrid;
