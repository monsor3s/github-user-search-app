import React from 'react'
import Title from './Title'
import LightMode from './LightMode'

import "../../styles/components/header.sass"
import Inputs from './Inputs'

function Header() {
  return (
    <header className="container-navbar">
      <div className="main-navbar">
        <div className="top-navbar">
          <Title />
          <LightMode />
        </div>
        <Inputs />
      </div>
    </header>
  )
}

export default Header