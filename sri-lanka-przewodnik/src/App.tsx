import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Places from './pages/Places';
import About from './pages/About';
import Contact from './pages/Contact';
import Header from './components/Header';
import Home from './pages/Home';
import MapPage from './pages/Map';


function App() {
  return (
    <Router>
      <Header /> { }
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mapa" element={<MapPage />} />
        <Route path="/miejsca" element={<Places />} />
        <Route path="/o-kraju" element={<About />} />
        <Route path="/kontakt" element={<Contact />} />
      </Routes>
    </Router>
  );
}


export default App;
