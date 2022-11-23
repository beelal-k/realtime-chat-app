import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import '../scss/Member_bar.scss'
import Profile from './Profile'
import { showMiniProfile } from '../store/miniProfile/miniProfileSlice'
// import friendsIcon from '../images/friendsIcon.svg';
// import newConvoIcon from '../images/newConvo.svg';

const Member_bar = () => {

    const [profileOpen, setProfileOpen] = useState(false)

    const openMiniProfile = () => {
        setProfileOpen(!profileOpen);

    }

    const userSlice = useSelector((state) => state.user);
    const miniProfileSlice = useSelector((state) => state.miniProfile)
    const dispatch = useDispatch();
    // TRY TO SEE WHY U CANT INVERT BOOLEANS IN REDUX

    return (
        <>
            <section className='main-chat-member-bar flex-col'>
                <h6>ONLINE USERS</h6>
                <div className='members-bar-members-list flex-col'>


                    <div className='flex-row members-bar-member-template' >
                        <Profile profileOpen={profileOpen} />
                        <div className='members-bar-member-image'></div>
                        <p>Tina Lopez</p>
                    </div>

                    <div className='flex-row members-bar-member-template' onClick={openMiniProfile}>
                        <Profile profileOpen={profileOpen} />
                        <div className='members-bar-member-image'></div>
                        <p>Tina Lopez</p>
                    </div>
                    <div className='flex-row members-bar-member-template'>
                        <div className='members-bar-member-image'></div>
                        <p>Tina Lopez</p>
                    </div>
                    <div className='flex-row members-bar-member-template'>
                        <div className='members-bar-member-image'></div>
                        <p>Tina Lopez</p>
                    </div>

                </div>
                <h6>OFFLINE USERS</h6>
            </section>

        </>

    )
}

export default Member_bar