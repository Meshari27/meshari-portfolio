import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './components/Layout';

import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
//import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Messages from './pages/Messages';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          
          <Route path="/contact" element={<Contact />} />
          <Route path="/messages" element={<Messages />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
