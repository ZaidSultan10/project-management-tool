import React, { useState } from 'react'
import './_optionsList.scss'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { useEffect } from 'react'

const OptionsList = ({option,icon,count, color,id}) => {

    const [selectOption,setSelectOption] = useState(false)
    const [initialSelectedOption,setInitialSelectedOption] = useState('')
    const [theArray, setTheArray] = useState([]);

    const handleSelectOptionChange = () => {
        // setInitialSelectedOption(option)
        // if(theArray.length > 0){
        //     setTheArray([])
        // }
        setTheArray([...theArray,option])
        console.log('id -->',initialSelectedOption,'option -->',option)
    }

    // useEffect(() => {
    //     // if(option === initialSelectedOption){
    //     //     setSelectOption(true)
    //     // }else{
    //     //     setSelectOption(false)
    //     // }
    //     console.log('option -->',theArray)
    // },[theArray])

    // console.log('option -->',theArray)

  return (
    console.log('theArray.includes(option) -->',theArray.includes(option)),
    <div key={id} onClick={handleSelectOptionChange} className={`optionsList ${theArray.includes(option) ? `optionsList__active` : ''}`}>
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