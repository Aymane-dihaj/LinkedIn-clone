import React from 'react'
import "./InputOption.css"

function InputOption({type, title, Icon, color}) {
  return (

    <div  className='input-option'>
      <Icon className='like-btn' style={{color: color}}/>
        <h4>{title}</h4>
    </div>
  )
}

export default InputOption
