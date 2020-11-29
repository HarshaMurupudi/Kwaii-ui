import React, { useState } from 'react';

import onFaceImg from '../../assets/smiley-toggle/onFace.svg'
import offFaceImg from '../../assets/smiley-toggle/offFace.svg'

import './smiley-toggle.styles.scss'

const SmileyToggle: React.FC = () => {

  const [isToggled, setToggled] = useState(false);
  return (
    <div>
      <p>
        <a href="https://levelup.gitconnected.com/smiley-toggle-wotw-a3bf7cc1b5c3" target="blank">Inspiration from</a>
      </p>


      <div id="widget" className="center">
        <div
          onClick={() => setToggled(!isToggled)}
          className="toggle-container"
          role="checkbox"
          aria-checked={isToggled}
          id="toggleControl">

          {/* backgrounds active  */}
          <div className="toggle-color-bg"></div>
          <div className={`toggle-gray-bg ${isToggled ? "fade" : ""}`}></div>
          {/* ball */}
          <div className={`ball-face ${isToggled ? "active" : ""}`}>
            <div className="faces-container">
              <div className={`faces-together ${isToggled ? "active" : ""}`}>
                {/* Happy face */}
                <img className="happy-face" src={onFaceImg} alt="" />

                {/* sleepy face svg */}
                <img className="sleepy-face" src={offFaceImg} alt="" />
              </div>
            </div>
          </div >
        </div>
      </div>
    </div>
  )
}

export default SmileyToggle;