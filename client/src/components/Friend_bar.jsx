import React from 'react'
import '../scss/Friend_bar.scss'
import friendsIcon from '../images/friendsIcon.svg';
import newConvoIcon from '../images/newConvo.svg';

const Friend_bar = () => {
  
  
  return (
    <>
      <section className='main-chat-friend-bar flex-col'>

        <input type='text' placeholder='Search conversations' className='inputs' />
        <div className='main-chat-top-btns flex-row'>
          <button classsName='' title='Friend list'><img src={friendsIcon} /></button>
          <button title="Start a new chat"><img src={newConvoIcon} /></button>
        </div>
        <div className='friends-bar-friends-list flex-col'>
          
          <div className='flex-row friends-bar-friend-template'>
            <div className='friends-bar-friend-image'></div>
            <p>Tina Lopez</p>
          </div>

          <div className='flex-row friends-bar-friend-template'>
            <div className='friends-bar-friend-image'></div>
            <p>Tina Lopez</p>
          </div>
          <div className='flex-row friends-bar-friend-template'>
            <div className='friends-bar-friend-image'></div>
            <p>Tina Lopez</p>
          </div>
           <div className='flex-row friends-bar-friend-template'>
            <div className='friends-bar-friend-image'></div>
            <p>Tina Lopez</p>
          </div>
           <div className='flex-row friends-bar-friend-template'>
            <div className='friends-bar-friend-image'></div>
            <p>Tina Lopez</p>
          </div>
           <div className='flex-row friends-bar-friend-template'>
            <div className='friends-bar-friend-image'></div>
            <p>Tina Lopez</p>
          </div>
           <div className='flex-row friends-bar-friend-template'>
            <div className='friends-bar-friend-image'></div>
            <p>Tina Lopez</p>
          </div>
           <div className='flex-row friends-bar-friend-template'>
            <div className='friends-bar-friend-image'></div>
            <p>Tina Lopez</p>
          </div>
           <div className='flex-row friends-bar-friend-template'>
            <div className='friends-bar-friend-image'></div>
            <p>Tina Lopez</p>
          </div>
           <div className='flex-row friends-bar-friend-template'>
            <div className='friends-bar-friend-image'></div>
            <p>Tina Lopez</p>
          </div>
           <div className='flex-row friends-bar-friend-template'>
            <div className='friends-bar-friend-image'></div>
            <p>Tina Lopez</p>
          </div>
        </div>
        <div className='flex-row bottom-profile'>
          <div className='bottom-profile-image-div'>
            <div className='profile-image'></div>
          </div>
          <div className='friends-bar-bottom-profile flex-col'>
            <p>Tina Lopez</p>
            <button>Settings</button>
            <button>Logout</button>
          </div>
        </div>

      </section>
    </>

  )
}

export default Friend_bar