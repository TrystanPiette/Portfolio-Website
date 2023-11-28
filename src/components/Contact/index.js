import { useEffect, useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script> 

const Contact = () => {
  
  const [letterClass, setLetterClass] = useState('text-animate');
  const form = useRef();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);

    return () => clearTimeout(timeoutId);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_trystanpiette', 'template_tuwglug', form.current, '04lYQO2LlR6Vi4RgE')
      .then(
        () => {
          alert('Le email a été envoyé avec succès!');
          window.location.reload(false);
        },
        () => {
          alert('Erreur lors du cheminement du email');
        }
      );
  };

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'O', 'N', 'T', 'A', 'C', 'T', 'E', 'Z','', 'M', 'O', 'I']}
              idx={15}
            />
          </h1>
          <p>
            Si vous avez des questions n'hésitez pas à me contacter si-dessous.
          </p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Nom, Prénom" type="text" name="user_name" required />
                </li>
                <li className="half">
                  <input placeholder="Votre Email" type="email" name="user_email" required />
                </li>
                <li>
                  <input placeholder="Sujet" type="text" name="user_sujet" required />
                </li>
                <li>
                  <textarea placeholder="Message" name="message" required></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="ENVOYER" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="map-wrap">
        <p><iframe title="MAP UQTR" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5508.253887913261!2d-72.58803690642097!3d46.34702489999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc7c8cb9aadbb03%3A0x36f5dd28a30395a8!2sTrois-Rivieres%20Campus!5e0!3m2!1sen!2sca!4v1699511291209!5m2!1sen!2sca" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></p>
        </div>
      </div>
    </>
  );
};

export default Contact;