import React from 'react'
import Login from '../components/Login'
import Signup from '../components/Signup'
import '../scss/Home.scss';
const Home = () => {
    return (
        <>


            <h1 className='home-title'>Realtime Chat App</h1>
            <main className='home-parent'>

                <div className='signup-section'>
                    <Signup />
                </div>

                <div>
                    <Login />
                </div>

            </main>
        </>

    )

}

export default Home