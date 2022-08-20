import React from 'react'
import './_todoMainCard.scss'
import Header from '../../header/Header.jsx'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEllipsisH,faPlus} from '@fortawesome/fontawesome-free-solid'

const TodoMainCard = ({headingTitle, count}) => {
  return (
    <div className='todoMainCard'>
        <div className='todoMainCard__heading'>
            <div className='todoMainCard__heading__left'>
                <Header title={headingTitle} fontSize={`18px`} />
                <span>{count > 0 ? count : 0}</span>
            </div>
            <div className='todoMainCard__heading__right'>
                <FontAwesomeIcon color='gray' icon={faPlus} />
                <FontAwesomeIcon style={{marginLeft:'10px'}} color='gray' icon={faEllipsisH} />
            </div>
        </div>
        <div className='todoMainCard__footer'>
            <button>
               <span>
                <FontAwesomeIcon style={{marginRight:'10px'}} color='gray' icon={faPlus} />
               </span> {`Add Task`}
            </button>
        </div>
    </div>
  )
}

export default TodoMainCard