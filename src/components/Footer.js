import React from 'react';

class Footer extends React.Component{
  render(){
    return(
      <footer className="page-footer green darken-2">
        <div className="container">
          <div className="row">
            <div className="col l6 s12">
              <h5 className="white-text">Company Bio</h5>
              <p className="grey-text text-lighten-4">Lyngsoe Systems is at the cutting edge of advanced self-service lending, returns and sorting systems using RFID or barcode - integrating seamlessly with your integrated library system or library management system.</p>


            </div>
            <div className="col l3 s12">
              <h5 className="white-text">Settings</h5>
              <ul>
                <li><a className="white-text" href="#!">Link 1</a></li>
                <li><a className="white-text" href="#!">Link 2</a></li>
                <li><a className="white-text" href="#!">Link 3</a></li>
                <li><a className="white-text" href="#!">Link 4</a></li>
              </ul>
            </div>
            <div className="col l3 s12">
              <h5 className="white-text">Connect</h5>
              <ul>
                <li><a className="white-text" href="#!">Link 1</a></li>
                <li><a className="white-text" href="#!">Link 2</a></li>
                <li><a className="white-text" href="#!">Link 3</a></li>
                <li><a className="white-text" href="#!">Link 4</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-copyright green darken-4">
          <div className="container">
            <a className="yellow-text text-accent-3" href="http://www.lyngsoesystems.com/en/solutions/library/">Lyngsoe Systems</a>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer;
