import React from 'react'
import '../scss/Profile.scss'

const Profile = ({profileOpen}) => {

    if(profileOpen)
    return (
        <>
            <main className='miniProfile-wrapper'>
                <div className='miniProfile-main'>
                        <div className='miniProfile-image'></div>
                        <p className='miniProfile-name'>Tina lopez</p>
                        <p className='miniProfile-about'>This is Tina Lopez. From the hood, brr brrr nigga</p>
                </div>

                
            </main>


        </>
    )
}

export default Profile