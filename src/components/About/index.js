import AnimatedLetters from '../AnimatedLetters';
import './index.scss'

const About = () => {
    return(
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                        strArray={['A','b','o','u','t',' ','m','e','.']}
                        idx={15}
                    />
                </h1>
                <p>
                    Paragraph 1
                </p>
                <p>
                    Paragraph 2
                </p>
                <p>
                    Paragraph 3
                </p>

            </div>

        </div>
    )
};

export default About

