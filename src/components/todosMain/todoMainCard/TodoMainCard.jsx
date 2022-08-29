import React, { useState } from 'react'
import './_todoMainCard.scss'
import Header from '../../header/Header.jsx'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEllipsisH,faPlus,faChevronCircleLeft,faChevronCircleRight} from '@fortawesome/fontawesome-free-solid'
import TodoMainTaskCard from './todoMainTaskCard/TodoMainTaskCard'
import Modal from 'react-modal'
import AddTodoModal from '../addTodoModal/AddTodoModal'

const TodoMainCard = ({headingTitle, count}) => {

    const [paginationCount, setPaginationCount] = useState(1)
    const [isModalOpen,setIsModalOpen] = useState(false)

    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          width:'600px',
          transform: 'translate(-50%, -50%)',
        },
      };

    const closeModal = () => {
        setIsModalOpen(false)
    }

    const openModal = () => {
        setIsModalOpen(true)
    }

  return (
    <React.Fragment>
        <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="add todo modal"
        >
            <AddTodoModal 
                closeModal = {closeModal} 
            />
        </Modal>
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
            <div className='todoMainCard__center'>
                <TodoMainTaskCard />
            </div>
            <div className='todoMainCard__center'>
                <TodoMainTaskCard />
            </div>
            <div className='todoMainCard__footer'>
                <div className='todoMainCard__footer__left'>
                    <button onClick={openModal}>
                        <span>
                            <FontAwesomeIcon style={{marginRight:'10px'}} color='gray' icon={faPlus} />
                        </span> {`Add Task`}
                    </button>
                </div>
                <div className='todoMainCard__footer__right'>
                    <div className='todoMainCard__footer__right__prev'>
                        <FontAwesomeIcon color='#d5d5d5' style={{fontSize:'22px'}} icon={faChevronCircleLeft} />
                    </div>
                    <div className='todoMainCard__footer__right__start'>
                        <div style={{backgroundColor:'#d5d5d5',borderRadius:'50%',width:'22px',height:'22px', display:'flex',justifyContent:'center',alignItems:'center'}} className='todoMainCard__footer__right__start__style'>
                            <p style={{fontSize:'10px',fontWeight:'bold',color:'gray'}}>{paginationCount}</p>
                        </div>
                    </div>
                    <div className='todoMainCard__footer__right__truncate'>
                        <h3>{`. . .`}</h3>
                    </div>
                    <div style={{backgroundColor:'#d5d5d5',borderRadius:'50%',width:'22px',height:'22px', display:'flex',justifyContent:'center',alignItems:'center'}} className='todoMainCard__footer__right__end'>
                        <div className='todoMainCard__footer__right__end__style'>
                            <p style={{fontSize:'10px',fontWeight:'bold',color:'gray'}}>10</p>
                        </div>
                    </div>
                    <div className='todoMainCard__footer__right__next'>
                        <FontAwesomeIcon color='#d5d5d5' style={{fontSize:'22px'}} icon={faChevronCircleRight} />
                    </div>
                </div>
            </div>
        </div>
    </React.Fragment>
  )
}

export default TodoMainCard