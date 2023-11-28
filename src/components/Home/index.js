import { Link } from 'react-router-dom';
import './index.scss';

const Home = () => {

  return (
    <>
      <div className="container home-page">
        <div className="page-bg"></div>

        <div className="animation-wrapper">
          <div className="particle particle-1"></div>
          <div className="particle particle-2"></div>
          <div className="particle particle-3"></div>
          <div className="particle particle-4"></div>
        </div>

        <div className="text-zone">
          <h1>          
            <span className='info'>BIENVENUE AU PORTFOLIO DE </span><span className='name'>TRYSTAN PIETTE</span>
          </h1>

          <h2>ÉTUDIANT EN INFORMATIQUE À L'UQTR</h2>
          
          <Link to="/contact" className="flat-button">
            contactez-moi
          </Link>
          
        </div>
      </div>
    </>
  );
};

export default Home;