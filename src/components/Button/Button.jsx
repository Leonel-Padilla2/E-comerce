import React from 'react'
import './Button.css'

const Button = (props) => {
  const {className, ...remainingProps} = props
  return (
    <button {...remainingProps} className={`button ${className}`}>
      
    </button>
  )
}

export default Button