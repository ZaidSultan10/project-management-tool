import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import './_todoFilters.scss'

const TodoFilters = ({leftIcon,title,rightIcon}) => {
  return (
    <div className='todoFilters'>
        {leftIcon && (
            <div className='todoFilters__left'>
                <FontAwesomeIcon style={{fontSize:'12px'}} color='grey' icon={leftIcon} />
            </div>
        )}
        <div className='todoFilters__center'>
            <p style={{fontWeight:'bold', color:'gray'}}>{title}</p>
        </div>
        <div className='todoFilters__right'>
            <FontAwesomeIcon color='grey' icon={rightIcon} />
        </div>
    </div>
  )
}

export default TodoFilters