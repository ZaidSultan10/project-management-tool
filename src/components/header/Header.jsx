import React from 'react'

const Header = ({title,fontSize,marginLeft,textAlign}) => {
  return (
    <div>
        <h1 style={{fontSize:fontSize, marginLeft:marginLeft, textAlign:textAlign}}>{title}</h1>
    </div>
  )
}

export default Header