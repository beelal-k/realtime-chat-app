import React from 'react'
import '../scss/Settings.scss'
// import man from '../images/man.jpeg'

const Settings = () => {
    return (
        <>

            <div className='profile-parent'>
                <main className='profile-main'>
                    <aside className='profile-aside'>
                        {/* <img src={man} className='profile-image flex-col'/> */}
                        <div className='profile-settings-image'></div>
                        {/* &emsp; */}
                    </aside>
                    <section className='profile-info'>
                        <div className='profile-name flex-row'>
                            <p>Tina Lopez</p>
                            <button className='profile-edit-button'>Edit name</button>

                        </div>
                        <div className='profile-about flex-row'>
                            <p>Lorem ipsum dolor whatever shit</p>
                            <button className='profile-edit-button'>Edit about</button>
                        </div>
                        <div classsName='profile-email flex-col'>
                            <p className='profile-label'>Email</p>
                            <input type="email" placeholder='tinalopez@gmail.com' disabled className='inputs profile-inputs' />
                        </div>
                        <div className='profile-password flex-col'>
                            <p className='profile-label'>Password</p>
                            <input type="password" placeholder='password' value="password" disabled className='inputs profile-inputs' />
                        </div>
                        <div className='profile-edit-password'>
                            <button className='profile-edit-password-btn'>Edit password</button>
                        </div>
                        <div className='profile-logout flex-row'>
                            <button className='profile-logout-btn'>Log out</button>
                            <button className='profile-delete-btn'>Delete account</button>
                        </div>
                    </section>
                </main>

            </div>
        </>

    )
}

export default Settings