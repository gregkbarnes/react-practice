import React from 'react';

class SortMate extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      nodeNumber: this.props.initialNodeNumber,
      orientation: this.props.initialOrientation
    }
  }

  render(){
    return (
      <div className={'sortmate'}>
        {'SM'+this.state.nodeNumber}
      </div>
    )
  }
};

export default SortMate;
