import React from 'react'
import '../scss/Login.scss'

const Login = () => {
    return (
        <>
            <h2 className='login-title'>Log in</h2>
            <form className='login-form'>
                <input type="email" name='login_email' placeholder='Email' className='inputs login-credentials' />
                <input type="password" name="login_password" placeholder='Password' className='inputs login-credentials' />
                <button type="submit" placeholder='Log in' className='primary-buttons login-btn'>Log in</button>


            </form>

        </>
    )
}

export default Login