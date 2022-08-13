import React from 'react'
import './_profile.scss'
import Avatar from '@mui/material/Avatar';
import Header from '../header/Header';

const Profile = () => {
  return (
    <div className='profile'>
        <div className='profile__left'>
            <Avatar className='profile__left__avatar' />
        </div>
        <div className='profile__right'>
            <Header title={'Matt Henry'} fontSize={`16px`} />
            <p>{`Premium Account`}</p>
        </div>
    </div>
  )
}

export default Profile