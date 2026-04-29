
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Personnel from './pages/Personnel';
import PersonnelDetail from './pages/PersonnelDetail';
import Contact from './pages/Contact';
import Paths from './pages/Paths';
import Frontend from './pages/Frontend';
import Backend from './pages/Backend';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import { BrowserRouter,Routes,Route, Navigate } from 'react-router-dom';
import PrivateRouter from './pages/PrivateRouter';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/personnel" element={<Personnel />} />
        <Route path="/personnel/:id" element={<PersonnelDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<PrivateRouter />}>
            <Route path="" element={<Contact />} />
        </Route>
        <Route path="/paths" element={<Paths />}>
          <Route path="frontend" element={<Frontend />} />
          <Route path="backend" element={<Backend />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
