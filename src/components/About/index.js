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

                <div className='stage-cube-cont'>
                    <div className='cubespinner'>
                        <div className='face1'>
                            <FontAwesomeIcon icon={faJs} color='#29A0B1' />
                        </div>
                        <div className='face2'>
                            <FontAwesomeIcon icon={faJava} color="#FFFFFF " />    
                        </div>
                        <div className='face3'>
                            <FontAwesomeIcon icon={faHtml5} color="#343434" />
                        </div>
                        <div className='face4'>
                            <FontAwesomeIcon icon={faCss3} color="#29A0B1 " />
                        </div>
                        <div className='face5'>
                            <FontAwesomeIcon icon={faPython} color="#FFFFFF" />
                        </div>
                        <div className='face6'>
                            <FontAwesomeIcon icon={faReact} color='#343434' />
                        </div>
                    </div>
                </div>

                <div className='text-info'>
                <h1>
                    <AnimatedLetters
                    letterClass={letterClass}
                    strArray={['À','','P','R','O','P','O','S','','D','E','','M','O','I']}
                    idx={15}
                    />
                </h1>
                <p className='test'>Je suis un étudiant en informatique à l'UQTR puis je suis à la recherche d'un stage d'été afin d'obtenir l'opportunité de bonifier mes connaissances et d'apprendre.</p>
                <p>Je suis déterminé, travaillant et ma nature plutôt curieuse m'influence à vouloir découvrir et de faire des recherches afin de perfectionner la solution au quel je fais face. Je travaille également bien en équipe et la communication est très importante selon moi. </p>
                <p>Si je devais me défénir en une phrase ça serait que je suis un passioné de la technologie qui adore le sport, en revanche je suis vraiment motivié et j'ai beaucoup d'énergie à investir.
                </p>
                </div>
            </div>
            
          <img className='BGTP'
              src={PhotoTP}
              alt="Trystan Piette"
            />
        </div>

        


    )

}

export default About