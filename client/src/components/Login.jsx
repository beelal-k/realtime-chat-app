import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../scss/Login.scss'
import { updateUsername, updateEmail, updatePassword } from '../store/user/userSlice'
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux'

const Login = () => {

    const navigate = useNavigate();
    const handleInput = async () => {
        await axios.get('http://localhost:8080/login-user', {
            headers: {
                email: userSlice.email,
                password: userSlice.password
            }
        })
            .then(response => {
                if (response.data.length > 0) {
                    navigate('/main-chat');
                    dispatch(updateUsername(response.data[0].user_name));
                    dispatch(updateEmail(response.data[0].user_email));
                }
                console.log('response: ', response.data);
            })


    }


    const dispatch = useDispatch();
    const userSlice = useSelector((state) => state.user);




    return (
        <>
            <h2 className='login-title'>Log in</h2>
            <span className='login-form'>
                <input type="email" name='login_email' placeholder='Email' className='inputs login-credentials' onChange={(e) => dispatch(updateEmail(e.target.value))} />
                <input type="password" name="login_password" placeholder='Password' className='inputs login-credentials' onChange={(e) => dispatch(updatePassword(e.target.value))} />
                <button type="submit" placeholder='Log in' className='primary-buttons login-btn' onClick={handleInput}>Log in</button>


            </span>

        </>
    )
}

export default Login