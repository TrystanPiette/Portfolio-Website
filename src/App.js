import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './App.scss';
import { Routes, Route, useLocation, BrowserRouter  } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
// import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

function App() {
  const location = useLocation();
// <Route path="portfolio" element={<Portfolio />} /> 

return (
  <>
      <TransitionGroup>
        <CSSTransition key={location.key} classNames="fade" timeout={600}>
          <Routes location={location}>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="contact" element={<Contact />} />
            </Route>
          </Routes>
        </CSSTransition>
      </TransitionGroup>
  </>
);
}

export default App;
