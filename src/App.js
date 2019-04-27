import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Prime from './Prime/Prime';

class App extends Component {
  sendToServer(){
    fetch('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5')
      .then(function(response) {
        console.log(response);
      });
  }
  render(){
    
    return (
      <div className="App">
        <Prime onSendToServer={this.sendToServer.bind(this)}/>
      </div>
    );
  }

}

export default App;
