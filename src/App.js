import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import Home from '../src/pages/home'
import About from '../src/pages/about'
import Contact from '../src/pages/contactUs'
import Header from './pages/navBar'
import Mission from './pages/Mission';
import Team from './pages/Team';
import Value from './pages/value';



function App() {
 
  return (
    <div className="App">
      
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/Mission" element={<Mission/>}/>
          <Route path="/Team" element={<Team/>}/>
          <Route path="/value" element={<Value/>}/>
        </Routes>
      </Router>
    </div>
  );
}



export default App;

/* import React,{useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from '../src/pages/home';
import About from '../src/pages/about';
import Contact from '../src/pages/contactUs';
import Header from './pages/navBar';
import ThemeToggleButton from './pages/toggleButton';
import { useTheme } from './pages/';

function App() {
  const { theme } = useTheme();

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className="App">
      <Router>
        <Header />
        <ThemeToggleButton />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App; */
