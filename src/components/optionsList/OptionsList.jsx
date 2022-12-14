import React from 'react'
import './_optionsList.scss'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const OptionsList = ({option,icon,count, color,id}) => {

  return (
    <div key={id} className={`optionsList`}>
        <div className='optionsList__left'>
            <FontAwesomeIcon style={{color:color}} icon={icon} />
            <p>{option}</p>
        </div>
        <div className='optionsList__right'>
            {
                count > 0  && (
                    <div className='optionsList__right__count'>
                        <span>{count}</span>
                    </div>
                )
            }
        </div>
    </div>
  )
}

export default OptionsList