import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import './_todoFilters.scss'

const TodoFilters = ({leftIcon,title,rightIcon}) => {
  return (
    <div className='todoFilters'>
        {leftIcon && (
            <div className='todoFilters__left'>
                <FontAwesomeIcon color='grey' icon={leftIcon} />
            </div>
        )}
        <div className='todoFilters__center'>
            <p style={{fontWeight:'bold'}}>{title}</p>
        </div>
        <div className='todoFilters__right'>
            <FontAwesomeIcon color='grey' icon={rightIcon} />
        </div>
    </div>
  )
}

export default TodoFilters