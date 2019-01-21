import React from 'react'

const ClickyImage = (props) => {
  return (
    <div >
      <h1 className={"numberDiv " + props.class} onClick={props.click} data-num={props.numbers}>{props.numbers}</h1>
    </div>
  )
}

export default ClickyImage;