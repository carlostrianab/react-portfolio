import { faCss3, faGitAlt, faHtml5, faJsSquare, faNodeJs, faReact } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState, useEffect } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss'

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate');

    /*useEffect(() => {
        return setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, []);*/

    
    return(
        <>
            <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                        strArray={['A','b','o','u','t',' ','m','e','.']}
                        idx={15}
                    />
                </h1>
                <p>
                    I’m Carlos Triana, a junior front-end developer with an MSc in computing at Roehampton university. <br/> 
                    I’m a hardworking, honest individual with good time management skills, that can work independently <br/> 
                    in busy environments but also within a team setting. I consider myself a friendly individual that is open <br/>
                    and listens effectively when solving problems and a good communicator, able to identify or <br/>
                    communicate the requirement that a project has. 
                </p>
                <p>
                    I have an always student mentality, which enables me to be highly enthusiastic to learn new things <br/>
                    and undertake new challenges. My current skillset includes Python and JavaScript programming languages, <br/> 
                    being able to achieve clever solutions to complex problems using algorithms and data structures. Frontend  <br/>
                    frameworks and libraries like ReactJS, and Bootstrap as well as a deep understanding of HTML5 and CSS3. 
                </p>
                <p>
                    Also, I have a clear understanding of all the components of a full-stack application, having worked with nodeJS <br/> 
                    and its library expressJS to connect APIs and Databases (MySQL and MongoDB) with the front end.
                </p>

            </div>
            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faReact} color='#5ED4F4' />
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faHtml5} color='#F06529' />
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faCss3} color='#28A4D9' />
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faJsSquare} color='#EFD81D' />
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faGitAlt} color='#EC4D28' />
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faNodeJs} color='#68a063' />
                    </div>
                </div>
            </div>
            </div>
            <Loader type= "ball-scale-ripple-multiple"/>
        </>
        
    )
};

export default About

