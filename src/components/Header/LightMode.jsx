import React from 'react'
import IconSun from "../../assets/icon-sun.svg"

import "../../styles/components/lightmode.sass"

function LightMode() {
  return (
    <div className="light-container">
      <h2>LIGHT</h2>
      <img src={IconSun} alt="" />
    </div>
  )
}

export default LightMode