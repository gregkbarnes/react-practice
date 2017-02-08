import React from 'react';
import LibraryGrid from './components/librarygrid/LibraryGrid';


class App extends React.Component {
  constructor(){
    super();
    this.state = {
      gridCursorX: "1",
      gridCursorY: "1"
    }
  }

  componentDidMount(){
  }

  render(){
    return(
      <div>
        <LibraryGrid/>
      </div>
    )
  }
}

export default App
