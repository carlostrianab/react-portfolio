import { useEffect } from 'react';
import { useState } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss'

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate');

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
                    </div>
                </div>
            </div>
            <Loader type='pacman'/>
        </>
    )
}

export default Contact;