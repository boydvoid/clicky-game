import React from 'react'

const ClickyImage = (props) => {
  return (
    <div className={"numberDiv " + props.class}>
      <h1>{props.numbers}</h1>
    </div>
  )
}

export default ClickyImage;