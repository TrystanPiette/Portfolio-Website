import './index.scss'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faGithub,
} from '@fortawesome/free-brands-svg-icons'
import {
  faHome,
  faUser,
  faEnvelope,
  //faSuitcase,
  faFile
} from '@fortawesome/free-solid-svg-icons'

import { Link, NavLink } from 'react-router-dom'


const Sidebar = () => {
  const [showNav, setShowNav] = useState(false);

  const githubPdfUrl = 'https://github.com/TrystanPiette/resume/raw/main/TrystanPietteCV.pdf';

  const handleClick = () => {
    console.log('Opening GitHub PDF:', githubPdfUrl);

    // Open the GitHub PDF link in a new tab or window
    window.open(githubPdfUrl, '_blank');
  };

  
 /* <NavLink
  activeclassname="active"
  className="portfolio-link"
  to="/portfolio"
  onClick={() => setShowNav(false)}
>
  <FontAwesomeIcon icon={faSuitcase} color="#FFFFFF" />
</NavLink>
*/


  return (
    <div className="nav-bar">
      <Link 
        className="logo"
        to="/"
        onClick={() => setShowNav(false)}>
          
        
      </Link>
      <nav className={showNav ? 'mobile-show' : ''}>
        <NavLink 
          exact="true"
          activeclassname="active"
          to="/"
          onClick={() => setShowNav(false)}>
          <FontAwesomeIcon icon={faHome} color="#FFFFFF" />
          
        </NavLink>
        <NavLink 
          activeclassname="active"
          className="about-link"
          to="/about"
          onClick={() => setShowNav(false)}>
          <FontAwesomeIcon icon={faUser} color="#FFFFFF" />
        </NavLink>

        <NavLink
          activeclassname="active"
          className="contact-link"
          to="/contact"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faEnvelope} color="#FFFFFF" />
        </NavLink>
        
      </nav>
      <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/trystan-piette-307a02298/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              color="#FFFFFF"
              className="anchor-icon"
            />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/TrystanPiette"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faGithub}
              color="#FFFFFF"
              className="anchor-icon"
            />
          </a>
        </li>
        
        
       
      </ul>
       <FontAwesomeIcon
        onClick={handleClick}
        icon={faFile}
        color="#FFFFFF"
        size="3x"
        className='CV'
      />
      <h3 className=''>Resumé</h3>
    </div>
  )
  
}


export default Sidebar