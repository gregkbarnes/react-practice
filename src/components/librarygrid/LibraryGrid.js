import React from 'react';
import SortMate from '../SortMate';
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

  dragComponent(e){
    console.log(e.clientX);
    console.log(e.screenX);
    /* { e.target.style.left = (e.screenX-e.clientX) + 'px' } */

  }

  render(){
    return(
      <div id='library-grid' className="poop" onMouseMove={this.updateGridCursor.bind(this)}>
        <Cell updateFunction={this.dragComponent.bind(this)}/>
      </div>
    )
  }
}

export default LibraryGrid;
