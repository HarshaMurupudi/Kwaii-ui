import React from 'react'

const SimpleBtn: React.FC = () => {
  return (<div>
    <button type="button" className="btn">
      <i className="btn__icon">

      </i>
      <span className="btn__label">Change Language</span>
      <div className="ripple__inner"></div>
    </button>
  </div>)
}

export default SimpleBtn;