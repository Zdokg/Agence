import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/navbar";
import Acceuil from './components/Acceuil';
import Service from "./components/service";
import Experience from "./components/experience";
import Footer from "./components/footer";
import Login from "./components/login";
import Register from "./components/register";
import FPass from "./components/FPass";
import Account from "./components/account";

function App() {
  return (
   <Router>
    <Navbar />
    <Routes>
      <Route path="/login" element={<Login />} /> 
      <Route path="/" element={<Acceuil />} />
      <Route path="/service" element={<Service />} />
      <Route path="/experience" element={<Experience />} />
      <Route path="/register" element={<Register />} />
      <Route path="/FPass" element={<FPass />} />
      <Route path="/account" element={<Account />} />
    </Routes>
    <Footer />
   </Router>
  );
}

export default App;
