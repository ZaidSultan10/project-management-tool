import React, { useState } from 'react'
import Header from '../header/Header'
import './_leftSidebar.scss'
import Logo from '../../assets/icon.png'
import Profile from '../profile/Profile'
import OptionsList from '../optionsList/OptionsList'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faChevronDown,faChevronUp} from '@fortawesome/fontawesome-free-solid'
import { optionDataTop, optionDataPage, optionDataLabel } from './optionData'

const LeftSidebar = () => {

  const [togglePageChevron, setTogglePageChevron] = useState(false)
  const [toggleLabelChevron, setToggleLabelChevron] = useState(false)

  const togglePageChev = () => {
    setTogglePageChevron(!togglePageChevron)
  }

  const toggleLabelChev = () => {
    setToggleLabelChevron(!toggleLabelChevron)
  }

  return (
    <div className='leftSidebar'>
      <div className='leftSidebar__heading'>
        <img src={Logo} alt='logo' width='30px' height='30px' />
        <Header title={`Taskero`} fontSize={`24px`} marginLeft={`15px`} />
      </div>
      <div className='leftSidebar__accountInfo'>
        <Profile />
      </div>
      <div className='leftSidebar__accountOptions'>
        {
          optionDataTop && optionDataTop.map((item) => (
            <OptionsList key={item.id} id={item.id} option={item.option} icon={item.icon} count={3} color={`gray`} />
          ))
        }
      </div>
      <div className='leftSidebar__lineBreak'>
        <hr />
      </div>
      <div className='leftSidebar__optionHeading' style={{marginBottom:'20px'}}>
          <Header title={`Pages`} fontSize={`18px`} />
          <FontAwesomeIcon style={{cursor:'pointer'}} onClick={togglePageChev} icon={togglePageChevron ? faChevronUp : faChevronDown} />
      </div>
      {
        !togglePageChevron && (
          <div className='leftSidebar__pageOptions'>
            {
              optionDataPage && optionDataPage.map((item) => (
                <OptionsList key={item.id} id={item.id} optionsProp={optionDataPage} option={item.option} icon={item.icon} count={3} color={`gray`} />
              ))
            }
          </div>
        )
      }
      <div className='leftSidebar__lineBreak'>
        <hr />
      </div>
      <div className='leftSidebar__optionHeading' style={{marginBottom:'20px'}}>
          <Header title={`Labels`} fontSize={`18px`} />
          <FontAwesomeIcon style={{cursor:'pointer'}} onClick={toggleLabelChev} icon={toggleLabelChevron ? faChevronUp : faChevronDown} />
      </div>
      {
        !toggleLabelChevron && (
          <div className='leftSidebar__labelOptions'>
            {
              optionDataLabel && optionDataLabel.map((item) => (
                <OptionsList key={item.id} id={item.id} optionsProp={optionDataLabel} option={item.option} icon={item.icon} count={3} color={item.color} />
              ))
            }
          </div>
        )
      }
    </div>
  )
}

export default LeftSidebar