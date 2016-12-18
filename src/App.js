import React from 'react';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      txt: "starting txt",
      fun:""
    }
  }

  updateTitle(e){
    this.setState({txt: e.target.value})
    console.log(e.target.value);
  }

  render(){
    console.log(this.state);
    return(
      <div>
        <h1>{this.state.txt}</h1>
        <Widget updateFunction={this.updateTitle.bind(this)} />
      </div>
    )
  }
}

class Widget extends React.Component {
  render(){
    return(
      <input type="text" onChange={this.props.updateFunction} />
    )
  }
}

export default App
