
import LogoTitle from '../../assets/images/c-logo.png'
import Photo from '../../assets/images/photo.JPG'
import {Link} from 'react-router-dom'
import './index.scss'
import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import Logo from './Logo'
import Loader from 'react-loaders';

const Home = () => {
    const[letterClass, setLetterClass] = useState('text-animate');
    const nameArray = ['a','r','l','o','s',' ', 'T','r','i','a','n','a']
    const jobArray = ['S','o','f','t','w','a','r','e',' ', 'D','e','v','e','l','o','p','e','r','.']

    //PENDING IMPLEMENTATION
    /*useEffect(() => {
        return setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    }, [])*/

    return(
        <>
            <div className='container home-page'>
            <div className='text-zone'>
                <div className='top-lettering'>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i,</span>
                    <span> </span>
                    <span className={`${letterClass} _13`}>I</span>
                    <span className={`${letterClass} _14`}>'m</span>
                </div>
                <br/>
                <div className='animated-name'>
                    <h1>
                        <img src={LogoTitle} alt='developer'/>
                        <AnimatedLetters letterClass={letterClass}
                            strArray={nameArray}
                            idx={15}/>
                    </h1>
                </div>
                <br/>
                <div className='image-section'>
                    <img src={Photo} className='photo'/>
                </div>
               
                <div className='animated-job'>
                    <AnimatedLetters letterClass={letterClass}
                        strArray={jobArray}
                        idx={10}/>
                </div>
                <br/>
                <div className='stack-info'>
                    Frontend Developer / JavaScript  / Python / ReactJS
                </div>
               
                
                <Link to='/Contact' className='flat-button'>CONTACT ME </Link>
            </div>
            <Logo/>
            </div>
            <Loader type='ball-scale-ripple-multiple'/>
        </>
        
    );
    
}

export default Home 