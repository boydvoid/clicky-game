import React, { Component } from 'react';
import './App.css';
import ClickyImage from './Components/ClickyImage/ClickyImage'
import Navbar from './Components/Navbar/Navbar'

let originalArray =[
  {number: "1", class:"not-clicked"},
  {number: "2", class:"not-clicked"},
  {number: "3", class:"not-clicked"},
  {number: "4", class:"not-clicked"},
  {number: "5", class:"not-clicked"},
  {number: "6", class:"not-clicked"},
  {number: "7", class:"not-clicked"},
  {number: "8", class:"not-clicked"},
  {number: "9", class:"not-clicked"},
  {number: "10", class:"not-clicked"},
  {number: "11", class:"not-clicked"},
  {number: "12", class:"not-clicked"},
];
class App extends Component {
  state={
    numbers: originalArray,
    score: 0
  }

  componentDidMount = () => {
    this.randomizeNumbers();
  }

  randomizeNumbers =() => {
    //thanks google
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

  //clicks
  handleClick = (event) => {
    if(event.target.getAttribute('class').includes("not-clicked")){

      const number = event.target.getAttribute('data-num');
      let tempArray = this.state.numbers;
      for(let i = 0; i< tempArray.length; i++){
        if(tempArray[i].number == number){
          console.log(event.target)
          tempArray[i].class = "clicked";
          this.setState({
            numbers: tempArray
          })
          this.randomizeNumbers()
        }
      }
      this.setState({
        score: this.state.score + 1
      })

      this.checkWin();
    } else {
      alert("You lose");

      this.setState({
        number: originalArray,
        score: 0
      })

      this.randomizeNumbers();
    }
  }

  checkWin = () => {
    if(this.state.score == 11){
      alert("You Win");
  
      
      this.setState({
        number: originalArray,
        score: 0
      })
      this.randomizeNumbers();
    }
  }
  render() {
    return (
      <div className="App">
        <Navbar score={this.state.score}/> 
        {/* Container */}
        <div className="container">
          <div className="row">
            {this.state.numbers.map((number, i) => {
              return (
                <div key={i} className="col-3">
                  <ClickyImage click={this.handleClick} numbers={number.number} class={number.class}/>
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
