import React, { Component } from 'react';

const Button = (props) => {
  return(
    <button className="button" type="submit">
      {props.name}
    </button>
  )
} 
export default Button;