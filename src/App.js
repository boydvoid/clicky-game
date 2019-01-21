import React, { Component } from 'react';
import './App.css';
import ClickyImage from './Components/ClickyImage/ClickyImage'
import Navbar from './Components/Navbar/Navbar'


class App extends Component {
  state={
    numbers: [
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
    ],
    score: 0,
    outcome: ""
  }

  componentDidMount = () => {
    this.randomizeNumbers();
  }

  checkWin = () => {
    if(this.state.score === 11){

      this.setState({
        numbers: [
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
        ],
        score: 0
      })
      
      this.setState({
        outcome: "You WIN, The game has restarted"
      })

      setTimeout(() => {
        this.setState({
          outcome: ""
        }) 
      }, 3000)
      
    }
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
      numbers: tempArray,
     
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
            numbers: tempArray,
            score: this.state.score + 1
          })
          this.randomizeNumbers()
          
        }
        console.log(this.state.score)
        this.checkWin();
      }
      
    } else {
      
      this.setState({
        numbers: [
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
          {number: "12", class:"not-clicked"}
        ],
        score: 0
      })

      this.setState({
        outcome: "YOU LOSE, The game has restarted"
      })
      
      setTimeout(() => {
        this.setState({
          outcome: ""
        }) 
      }, 3000)
    }
  }

  
  render() {
    return (
      <div className="App">
        <Navbar outcome={this.state.outcome} score={this.state.score}/> 
        {/* Container */}
        <div className="container">
          <div className="row">
            {this.state.numbers.map((number, i) => {
              return (
                <div key={i} className="col-3">
                  <ClickyImage click={this.handleClick}  numbers={number.number} class={number.class}/>
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
