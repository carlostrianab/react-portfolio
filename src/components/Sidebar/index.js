import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import cLogo from '../../assets/images/c-logo.png'
import LogoSubtitle from '../../assets/images/carlos-sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import { Container} from 'react-bootstrap'


const Sidebar = () =>(
<div className='show-for-small-only'>
    <div className="nav-bar">
                <Link className="logo" to='/'>
                                <img src={cLogo} alt="logo" />
                                <img className="sub-logo" src={LogoSubtitle} alt="slobodan" />
                            </Link>
                        <nav>
                            <NavLink exact="true" activeclassname="active" to="/">
                                <FontAwesomeIcon icon={faHome} color="#FFFFFF"/>
                            </NavLink>
                            <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                                <FontAwesomeIcon icon={faUser} color='#FFFFFF'/>
                            </NavLink>
                            <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                                <FontAwesomeIcon icon={faEnvelope} color='#FFFFFF'/>
                            </NavLink>
                        </nav>
                        <ul>
                            <li>
                            <a target="_blank" rel="noreferrer" href='https://www.linkedin.com/in/carlosalbertotrianabrigante-frontenddeveloper/'>
                                    <FontAwesomeIcon icon={faLinkedin} color="#FFFFFF"/>

                                </a> 
                                <a target="_blank" rel="noreferrer" href='https://github.com/carlostrianab'>
                                    <FontAwesomeIcon icon={faGithub} color="#FFFFFF"/>
                                </a> 
                            </li>
                    </ul>
        </div>
</div>
    
)

export default Sidebar