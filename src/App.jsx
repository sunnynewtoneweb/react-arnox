// import Home from "./pages/Home";
import { Routes, Route } from 'react-router-dom'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import ServiceDetail from "./pages/services/ServiceDetail";
import Projects from './pages/Projects.jsx'
import ProjectDetail from "./pages/projects/ProjectDetail";
import Contact from './pages/Contact'
import Error from "./pages/Error.jsx";


function App() {
  return (
    <>
      <Header/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:slug" element={<ServiceDetail />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:slug" element={<ProjectDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
      </Routes>

      <Footer/>
    </>
  )
}

export default App