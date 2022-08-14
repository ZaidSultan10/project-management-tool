import React from 'react'
import Button from '../button/Button'
import Header from '../header/Header'
import './_todosMain.scss'

const TodosMain = () => {
  return (
    <div className='todosMain'>
        <div className='todosMain__header'>
          <div className='todosMain__header__left'>
            <Header title={`Team Tasks`} fontSize={`24px`} />
          </div>
          <div className='todosMain__header__right'>
            <div className='todosMain__header__right__search'>
              
            </div>
            <Button title={`Create Task`} backgroundColor={`rgba(4, 187, 111, 0.716)`} color={`white`} />
          </div>
        </div>
    </div>
  )
}

export default TodosMain