import React from 'react'
import Title from './Title'
import LightMode from './LightMode'

import "../../styles/components/header.sass"

function Header() {
  return (
    <header className="container-header">
      <div className="main-header">
        <div className="top-header">
          <Title />
          <LightMode />
        </div>
      </div>
    </header>
  )
}

export default Header