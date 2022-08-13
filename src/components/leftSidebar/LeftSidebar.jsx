import React from 'react'
import Header from '../header/Header'
import './_leftSidebar.scss'
import Logo from '../../assets/icon.png'
import Profile from '../profile/Profile'
import OptionsList from '../optionsList/OptionsList'
import { optionDataTop, optionDataPage } from './optionData'

const LeftSidebar = () => {
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
          optionDataTop && optionDataTop.map(item => (
            <OptionsList option={item.option} icon={item.icon} count={3} />
          ))
        }
      </div>
      <div className='leftSidebar__lineBreak'>
        <hr />
      </div>
      <div className='leftSidebar__optionHeading' style={{marginBottom:'20px'}}>
          <Header title={`Pages`} fontSize={`18px`} />
      </div>
      <div className='leftSidebar__pageOptions'>
        {
          optionDataPage && optionDataPage.map(item => (
            <OptionsList option={item.option} icon={item.icon} count={3} />
          ))
        }
      </div>
      <div className='leftSidebar__lineBreak'>
        <hr />
      </div>
    </div>
  )
}

export default LeftSidebar