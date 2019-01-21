import React from 'react'

const Navbar = (props) => {
  return (
    <nav className="navbar navbar-light bg-light">
          <a className="navbar-brand" href="#">Clicky-Game</a>
          <span><h1>{props.outcome}</h1></span>
          <span><h1>SCORE: {props.score}</h1></span>
        </nav>
  )
}

export default Navbar;