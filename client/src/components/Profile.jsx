import React from 'react'
import { useSelector } from 'react-redux'
import '../scss/Profile.scss'

const Profile = () => {

    const miniProfileSlice = useSelector((state) => state.miniProfile)
    

    if(miniProfileSlice.open)
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