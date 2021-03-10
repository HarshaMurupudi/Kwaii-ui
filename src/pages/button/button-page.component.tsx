import React from 'react'

import SimpleBtn from '../../components/button/simple-btn.component';

const Button = () => {
  return (
    <div>
      <SimpleBtn classes="btn" onClickHandler={() => null}>Click me</SimpleBtn>
    </div>
  )
}

export default Button;