import React, { useState } from 'react'
import Header from '../../../header/Header'
import './_todoMainTaskCard.scss'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEllipsisH,faArrowAltCircleRight} from '@fortawesome/fontawesome-free-solid'
import { Avatar } from '@mui/material'
import moment from 'moment'
import { useDispatch } from 'react-redux'
import {deleteTask} from '../../../../actions/task.js'

const TodoMainTaskCard = ({title,desc,duration,endDate,tags,id}) => {

    const [toggleElipse, setToggleElipse] = useState(false)
    const dispatch = useDispatch()

    const toggleOptions = () => {
        setToggleElipse(!toggleElipse)
    }

    const deleteTasks = async () => {
        await dispatch(deleteTask(id))
        setToggleElipse(false)
    }

    const editTasks = () => {
        console.log('edit id ===>',id)
        setToggleElipse(false)
    }

  return (
    <div className='todoMainTaskCard'>
        <div className='todoMainTaskCard__header'>
            <Header title={title} fontSize={`16px`} />
            <FontAwesomeIcon style={{cursor:'pointer'}} onClick={toggleOptions} color='gray' icon={faEllipsisH} />
            <div style={{display:`${toggleElipse ? 'block' : 'none'}`}} className={`todoMainTaskCard__header__options`}>
                <button onClick={deleteTasks}>{`Delete`}</button>
                <button onClick={editTasks}>{`Edit`}</button>
            </div>
        </div>
        <div className='todoMainTaskCard__content'>
            <p>{desc}</p>
        </div>
        <div className='todoMainTaskCard__tags'>
            <div className='todoMainTaskCard__tags__left'>
                {
                    tags && tags.split(',').map((item,i) =>(
                        <div className='todoMainTaskCard__tags__left__item'>
                            <p>{item}</p>
                        </div>
                    ))
                }
            </div>
            {
                Number(duration) >= 0 && (
                    <div className='todoMainTaskCard__tags__right'>
                        <FontAwesomeIcon style={{marginRight:'10px'}} icon={faArrowAltCircleRight} 
                        color={Number(duration) > 15 ? 'green' : 
                        Number(duration) < 15 && Number(duration) >= 12 ? `yellow`:
                        Number(duration) < 12 && Number(duration) >= 6 ? `orange` :
                        `red`} />
                        <p>{moment(endDate).format('DD-MM-YYYY')}</p>
                    </div>
                )
            }
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