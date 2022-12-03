import React, { useEffect, useState, } from 'react'
import '../scss/Main_chat.scss'
import Friend_bar from '../components/Friend_bar';
import Member_bar from '../components/Member_bar';
import addMemberIcon from '../images/addMember.svg'
import addAttachment from '../images/addAttachment.svg'
import emojiIcon from '../images/emojiIcon.svg'
import io from 'socket.io-client'
import { useSelector } from 'react-redux'

const Main_chat = () => {

    const [text, setText] = useState();
    // const [receivedMessage, setReceivedMessage] = useState()

    const userSlice = useSelector((state) => state.user);

    const socket = io.connect('http://localhost:8080');


    const send_message = () => {
        socket.emit('send-message', { text: text, username: userSlice.username })
    }

    useEffect(() => {

        socket.on('receive-message', (data) => {
            const text_template = document.createElement('div');
            console.log(data);
            // WROTE 'class' IN INNERHTML BECAUSE AFTER COMPILATION JSX WILL TRANSLATE TO HTML
            text_template.innerHTML = `
                    <div class='flex-row main-chat-message'>
                         <div class='chat-profile-image'></div>
                             <div class='flex-col chat-message-text'>
                                 <p class='chat-sender-name'>${data.username}</p>
                                 <p>${data.text}</p>
                             </div>
                       </div>`

            document.getElementById('main-chat').appendChild(text_template);
            document.getElementById('sendMessageInput').value = '';
        })
    }, [])

    return (

        <>
            <div className='main-chat flex-row'>
                <Friend_bar />
                <main className='main-chat-center flex-col'>
                    <div className='chat-title flex-row'>
                        <h4>Tina's Group Chat</h4>
                        <img src={addMemberIcon} />
                    </div>
                    <div className='main-chat-page' id="main-chat">
                        {/* <div className='flex-row main-chat-message'>
                            <div className='chat-profile-image'></div>
                            <div className='flex-col chat-message-text'>
                                <p className='chat-sender-name'>Tina Lopez</p>
                                <p>{receivedMessage}</p>
                            </div>
                        </div> */}


                    </div>
                    <div className='chat-input-box flex-row'>
                        <img src={addAttachment} />
                        <input type='text' placeholder='Send a message' autoComplete='off' id='sendMessageInput' onKeyDown={(e) => e.keyCode === 13 ? send_message() : null} onChange={(e) => setText(e.target.value)} />
                        <img src={emojiIcon} />

                    </div>

                </main>
                <Member_bar />
            </div>
        </>

    )

}

export default Main_chat