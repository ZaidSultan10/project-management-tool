import React, { useState } from 'react'
import './_optionsList.scss'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { useEffect } from 'react'

const OptionsList = ({option,icon,count, color,key,id}) => {

    const [selectOption,setSelectOption] = useState(false)
    const [initialSelectedOption,setInitialSelectedOption] = useState('Dashboard')

    const handleSelectOptionChange = () => {
        console.log('option -->',option)
        setInitialSelectedOption(option)
    }

    // useEffect(() => {
    //     console.log('option -->',option,'initialSelectedOption -->',initialSelectedOption)
    //     if(option == initialSelectedOption){
    //         setSelectOption(true)
    //     }else{
    //         setSelectOption(false)
    //     }
    // },[initialSelectedOption])
    // console.log('option -->',option === initialSelectedOption ? option : '','initialSelectedOption -->',initialSelectedOption)

  return (
    <div onClick={handleSelectOptionChange} className={option == initialSelectedOption ? `optionsList optionsList__active` : option !== initialSelectedOption ? `optionsList` : `optionsList`}>
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