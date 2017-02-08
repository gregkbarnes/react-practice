import React from 'react';
import Cell from './Cell';

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
        <Cell/>
        <p>{"Cursor Position: ("+this.state.cursorX+","+this.state.cursorY+")"}</p>
      </div>
    )
  }
}

export default LibraryGrid;
