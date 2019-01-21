import React, { Component } from 'react';
import './App.css';
import ClickyImage from './Components/ClickyImage/ClickyImage'
import Navbar from './Components/Navbar/Navbar'
class App extends Component {
  state={
    numbers: [
      {number: 1, class:"not-clicked"},
      {number: 2, class:"not-clicked"},
      {number: 3, class:"not-clicked"},
      {number: 4, class:"not-clicked"},
      {number: 5, class:"not-clicked"},
      {number: 6, class:"not-clicked"},
      {number: 7, class:"not-clicked"},
      {number: 8, class:"not-clicked"},
      {number: 9, class:"not-clicked"},
      {number: 10, class:"not-clicked"},
      {number: 11, class:"not-clicked"},
      {number: 12, class:"not-clicked"},
    ]
  }

  randomizeNumbers =() => {
    let tempArray = this.state.numbers;
    for(let i = 0; i < this.state.numbers.length; i++){
      let j = Math.floor(Math.random() * (i + 1));
      var tempNum = tempArray[i];
      tempArray[i] = tempArray[j];
      tempArray[j] = tempNum;

    }

    this.setState({
      numbers: tempArray
    })
  }
  render() {
    return (
      <div className="App">
        <Navbar /> 
        {/* Container */}
        <div className="container">
          <div className="row">
            {this.state.numbers.map(number => {
              return (
                <div className="col-3">
                  <ClickyImage numbers={number.number} class={number.class}/>
                </div>
              )
            })}
               
          </div>
        </div>
      </div>
    );
  }
}

export default App;
