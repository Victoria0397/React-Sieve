import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Prime from './Prime/Prime';

class App extends Component {
  sendToServer(start, end){
    fetch('http://localhost:80/?start='+start+'&end='+end+'')
      .then(function(response) {
        return response.json();
      })
      .then(function(data){
        console.log(data);
      });
  }

  state = {
    start: 2,
    end: 100
  }

  handleStartValue(event){
    this.setState({
      start: event.target.value
    });
  }

  handleEndValue(event){
    this.setState({
      end: event.target.value
    });
  }

  

  render(){
    
    return (
      <div className="App">
        <h1>Its for test Eratosphene</h1>
        <input type="text" onChange={this.handleStartValue.bind(this)}/>
        <input type="text" onChange={this.handleEndValue.bind(this)}/>
        <Prime onSendToServer={this.sendToServer.bind(this, this.state.start, this.state.end)}/>
      </div>
    );
  }

}

export default App;
