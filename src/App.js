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

  render(){
    return(
      <div>
        <LibraryGrid initialGridWidth={1000} initialGridHeight={500} />
      </div>
    )
  }
}

export default App
