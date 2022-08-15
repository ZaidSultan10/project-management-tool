import React, { useState } from 'react'
import './_optionsList.scss'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { useEffect } from 'react'

const OptionsList = ({option,icon,count, color,id}) => {

    const [initialSelectedOption,setInitialSelectedOption] = useState('')

    const handleSelectOptionChange = () => {
        setInitialSelectedOption(id)
        console.log('id -->',id)
    }

    useEffect(() => {
        setInitialSelectedOption(3)
    },[])

    useEffect(() => {
        if(initialSelectedOption === id){
            console.log('initialSelectedOption -->',option)
        }
    },[initialSelectedOption])


  return (
    <div key={id} onClick={handleSelectOptionChange} className={`optionsList ${initialSelectedOption === id ? `optionsList__active` : ''}`}>
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