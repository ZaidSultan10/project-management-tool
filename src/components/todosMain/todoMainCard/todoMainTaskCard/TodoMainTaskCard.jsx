import React from 'react'
import Header from '../../../header/Header'
import './_todoMainTaskCard.scss'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEllipsisH,faArrowAltCircleRight} from '@fortawesome/fontawesome-free-solid'
import { Avatar } from '@mui/material'

const TodoMainTaskCard = () => {
  return (
    <div className='todoMainTaskCard'>
        <div className='todoMainTaskCard__header'>
            <Header title={`Layout Design`} fontSize={`16px`} />
            <FontAwesomeIcon color='gray' icon={faEllipsisH} />
        </div>
        <div className='todoMainTaskCard__content'>
            <p>hello world</p>
        </div>
        <div className='todoMainTaskCard__tags'>
            <div className='todoMainTaskCard__tags__left'>
                <div className='todoMainTaskCard__tags__left__item'>
                    <p>tags</p>
                </div>
                <div className='todoMainTaskCard__tags__left__item'>
                    <p>tags</p>
                </div>
            </div>
            <div className='todoMainTaskCard__tags__right'>
                <FontAwesomeIcon style={{marginRight:'10px'}} icon={faArrowAltCircleRight} color='red' />
                <p>12-09-2022</p>
            </div>
        </div>
        <div className='todoMainTaskCard__footer'>
            <Avatar className='todoMainTaskCard__footer__avatar' />
            <Avatar className='todoMainTaskCard__footer__avatar' />
            <Avatar className='todoMainTaskCard__footer__avatar' />
        </div>
    </div>
  )
}

export default TodoMainTaskCard