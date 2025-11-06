import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Team from './pages/Team';
import Donate from './pages/Donate';
import Contact from './pages/Contact';
import Events from './pages/Events';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/events" element={<Events />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;