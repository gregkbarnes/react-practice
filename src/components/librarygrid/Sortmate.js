import React from 'react';

class Sortmate extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      nodeNumber: this.props.nodeNumber,
      xPosition: this.props.x,
      yPosition: this.props.y
    }

    console.log('constructor done...');
  }

  componentDidMount() {
    console.log("Create: SM" + this.state.nodeNumber + " [" + this.state.xPosition + "," + this.state.yPosition + "]");
    if (this.props.nodeNumber === '01') {
      console.log('Master sortmate found');
      this.setState({
        xPosition: 150,
        yPosition: 150
      });
      console.log('test' + this.state.xPosition);
    }
    console.log("Create: SM" + this.state.nodeNumber + " [" + this.state.xPosition + "," + this.state.yPosition + "]");
  }

  render(){
    return(
      <div className="sortmate">
        {/*<div className="node-label">{"SM"+this.props.nodeNumber}</div>*/}
        {"SM"+this.props.nodeNumber+"["+this.state.xPosition+"]"}
      </div>
    )
  }
}

export default Sortmate;
