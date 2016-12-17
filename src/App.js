import React from 'react';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      txt: "",
      fun:""
    }
  }

  updateTitle(e){
    this.setState({txt: e.target.value})
  }
  render(){
    return(
      <div>
        <h1>{this.state.txt}</h1>
        <Widget update={this.updateTitle.bind(this)}/>
      </div>
    )
  }
}

// class Widget extends React.Component {
//   render(){
//     this.props = App.props;
//     return(
//       <input type="text" onChange={props.update} />
//     )
//   }
// }

const Widget = (props) => <input type="text" onChange={props.update} />

export default App
