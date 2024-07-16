import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import Home from '../src/pages/home'
import About from '../src/pages/about'
import Contact from '../src/pages/contactUs'
import Header from './pages/navBar'



function App() {
  return (
    <div className="App">
      
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
