import React from 'react'
import './_todoMainCard.scss'
import Header from '../../header/Header.jsx'

const TodoMainCard = ({headingTitle, count}) => {
  return (
    <div className='todoMainCard'>
        <div className='todoMainCard__heading'>
            <div className='todoMainCard__heading__left'>
                <Header title={headingTitle} fontSize={`18px`} />
                <span>{count > 0 ? count : 0}</span>
            </div>
            <div className='todoMainCard__heading__right'>

            </div>
        </div>
    </div>
  )
}

export default TodoMainCard