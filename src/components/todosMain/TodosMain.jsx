import React from 'react'
import Button from '../button/Button'
import Header from '../header/Header'
import './_todosMain.scss'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSearch} from '@fortawesome/fontawesome-free-solid'
import { useState } from 'react'

const TodosMain = () => {

  const [search,setSearch] = useState('')

  const handleSearchChange = (e) => {
    e.preventDefault()
    setSearch(e.target.value)
  }

  const handleSearchSubmit =() => {
    console.log('search--->',search)
    setSearch('')
  }

  return (
    <div className='todosMain'>
        <div className='todosMain__header'>
          <div className='todosMain__header__left'>
            <Header title={`Team Tasks`} fontSize={`24px`} />
          </div>
          <div className='todosMain__header__right'>
            <div className='todosMain__header__right__search'>
              <input placeholder='Search...' value={search} onChange={(e) => handleSearchChange(e)} />
              <FontAwesomeIcon onClick={handleSearchSubmit} icon={faSearch} style={{position:'absolute',left:'15px',top:'13px',color:'gray',fontSize:'18px',cursor:'pointer'}} />
            </div>
            <Button title={`Create Task`} backgroundColor={`rgba(4, 187, 111, 0.716)`} color={`white`} />
          </div>
        </div>
    </div>
  )
}

export default TodosMain