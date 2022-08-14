import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPlus} from '@fortawesome/fontawesome-free-solid'
import './_button.scss'

const Button = ({title,backgroundColor,color}) => {
  return (
    <div className='button'>
        <button style={{backgroundColor:backgroundColor}}>
            <FontAwesomeIcon style={{color:color}} icon={faPlus} />
            <p style={{marginLeft:'1rem',color:color}}>{title}</p>
        </button>
    </div>
  )
}

export default Button