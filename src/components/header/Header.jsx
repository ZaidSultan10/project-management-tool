import React from 'react'

const Header = ({title,fontSize,marginLeft}) => {
  return (
    <div>
        <h1 style={{fontSize:fontSize, marginLeft:marginLeft}}>{title}</h1>
    </div>
  )
}

export default Header