import React, { useState, useEffect } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PhotoTP from '../../assets/images/background-tp.png'


import {
    faJava,
    faJs,
    faHtml5,
    faCss3,
    faPython,
    faReact
  } from '@fortawesome/free-brands-svg-icons'

const About = () => {

const [letterClass, setLetterClass] = useState('text-animate')

useEffect(() => {
    const timeoutId = setTimeout(() => {
        setLetterClass('text-animate-hover');
    }, 3000);

    return () => clearTimeout(timeoutId);
}, []);
    return (
        <div className='container about-page'>
            <div className='text-zone'>       

                <h1>
                    <AnimatedLetters
                    letterClass={letterClass}
                    strArray={['À','','P','R','O','P','O','S','','D','E','','M','O','I']}
                    idx={15}
                    />
                </h1>
                <p className='test'>Je suis un étudiant en informatique à l'UQTR à la recherche d'un stage d'été afin d'obtenir l'opportunité de bonifier mes connaissances et mes apprentissages.</p>
                <p>Je suis déterminé, travaillant et persévérant. Ma nature plutôt curieuse m'influence à vouloir découvrir et faire des recherches afin de perfectionner la solution auquel je fais face. Je travaille également bien en équipe et la communication est très importante selon moi. </p>
                <p>Si j'étais pour me défénir en une phrase, ça serait que je suis un passioné de la technologie tout en étant un grand sportif. En conclusion, je suis vraiment motivié et j'ai beaucoup d'énergie à investir envers votre entreprise.
                </p> 
                    <div className='icons-about'>
                        <div className='icon1'>
                            <FontAwesomeIcon icon={faJs} color='#29A0B1' />
                        </div>
                        <div className='icon2'>
                            <FontAwesomeIcon icon={faJava} color="#FFFFFF " />    
                        </div>
                        <div className='icon3'>
                            <FontAwesomeIcon icon={faHtml5} color="#343434" />
                        </div>
                        <div className='icon4'>
                            <FontAwesomeIcon icon={faCss3} color="#29A0B1 " />
                        </div>
                        <div className='icon5'>
                            <FontAwesomeIcon icon={faPython} color="#FFFFFF" />
                        </div>
                        <div className='icon6'>
                            <FontAwesomeIcon icon={faReact} color='#343434' />
                    </div>
                </div>            
            </div>
          
                <div className='about-wrap'>
                    <img className='BGTP'
                    src={PhotoTP}
                    alt="Trystan Piette"
                    />

                    <img className='BGTP2'
                    src={PhotoTP}
                    alt="Trystan Piette Grey"
                    />
            </div>                   
        </div>
    )
}

export default About