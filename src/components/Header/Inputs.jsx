import React from 'react'
import SearchIcon from "../../assets/icon-search.svg"

import "../../styles/components/inputs.sass"

function Inputs() {
  return (
    <form action="" className="search-form">
      <img src={SearchIcon} alt="" />
      <input type="text" className="input-text" placeholder="Search GitHub username"/>
      <input type="text" className="input-submit" value="Search"/>
    </form>
  )
}

export default Inputs