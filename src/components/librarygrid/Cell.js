import React from 'react';
import Draggable from 'react-draggable';

class Cell extends React.Component {
  render(){
    return(
      <Draggable
        axis="both"
        bounds={
          {
            left: 0,
            right: 550,
            top:0,
            bottom: 350
          }
        }
        handle=".handle"
        position={null}
        grid={[10, 10]}
        zIndex={100}
        onStart={this.handleStart}
        onDrag={this.handleDrag}
        onStop={this.handleStop}>
        <div className="handle">
          <div  id="test" onClick={this.props.updateFunction} className={'cell'}>{'Cell'}</div>
        </div>
      </Draggable>
    )
  }
}

export default Cell;
