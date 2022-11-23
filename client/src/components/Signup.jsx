import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import '../scss/Signup.scss'
import { updateUsername, updateEmail, updatePassword } from '../store/user/userSlice'
import axios from 'axios';

const Signup = () => {


    const handleInput = () => {
        // console.log(userSlice.username);
        // console.log(userSlice.email);
        console.log(userSlice);
        axios.post('http://localhost:8080/create-user', userSlice)
            .then(response => {
                console.log(response.data)
            })

    }


    const dispatch = useDispatch();
    const userSlice = useSelector((state) => state.user);


    return (
        <>
            <h2 className='signup-title'>Create an account</h2>
            <span className='login-form'>
                <input type="text" name='signup_username' autoComplete="off" placeholder='Username' className='inputs signup-credentials' onChange={(e) => dispatch(updateUsername(e.target.value))} />
                <input type="email" name='signup_email' autoComplete="off" placeholder='Email' className='inputs signup-credentials' onChange={(e) => dispatch(updateEmail(e.target.value))} />
                <input type="password" name="signup_password" autoComplete="off" placeholder='Password' className='inputs signup-credentials' onChange={(e) => dispatch(updatePassword(e.target.value))} />
                <button type="submit" placeholder='Log in' className='primary-buttons signup-btn' onClick={handleInput}>Sign up</button>


            </span>
        </>
    )
}

export default Signup