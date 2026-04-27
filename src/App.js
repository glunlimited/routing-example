
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Personnel from './pages/Personnel';
import PersonnelDetail from './pages/PersonnelDetail';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/personnel" element={<Personnel />} />
        <Route path="/personnel/:id" element={<PersonnelDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
