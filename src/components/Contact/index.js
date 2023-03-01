import { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss'
import emailjs from '@emailjs/browser'

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate');

    const refForm = useRef();

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
            .sendForm(
                'service_lx2474t',
                'template_yhe0tpx',
                refForm.current,
                'g3BOsN7rrCAc54cf6'
            )
            .then(
                () => {
                    alert('Message succesfully sent!')
                    window.location.reload(false)
                },
                () => {
                    alert('Failed to send the message')
                }
            )
    }

    /*useEffect(() => {
        return setTimeout(() => {
            setLetterClass('text-class-animate')
        }, 3000)
    }, [] );*/


    return(
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters letterClass={letterClass}
                        strArray={['C','o','n','t','a','c','t',' ','m','e','.']}
                        idx={15}
                        />
                    </h1>
                    <p>
                        Paragraph 1 
                    </p>
                    <div className='contact-form'>
                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul>
                                <li className='half'>
                                    <input type='text' name='name' placeholder='Name' required/>
                                </li>
                                <li className='half'>
                                    <input type='email' name='email' placeholder='Email' required/>
                                </li>
                                <li>
                                    <input type='text' name='subject' placeholder='Subject' required/>
                                </li>
                                <li>
                                    <textarea  name='message' placeholder='Message' required/>
                                </li>
                                <li>
                                    <input type='submit' className='flat-button' value='SEND'/>
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
            </div>
            <Loader type='pacman'/>
        </>
    )
}

export default Contact;