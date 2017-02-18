import React from 'react';
import LibraryGrid from './components/LibraryGrid';
import NavBar from './components/NavBar';
import Footer from './components/Footer';


class App extends React.Component {
  render(){
    return(
      <div>
        <NavBar />
        <LibraryGrid />
        <Footer />
      </div>
    )
  }
}

export default App
