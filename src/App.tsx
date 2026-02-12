import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Login from './pages/Login';
import CandidateOnboarding from './pages/CandidateOnboarding';
import Candidat from './pages/Candidat';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Recruteur from './pages/Recruteur';
import Singup from './pages/Singup';
import ForgotPassword from './pages/ForgotPassword';
import About from './pages/About';



const App: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    return (localStorage.getItem('theme') as 'light' | 'dark') || 'light';
  });

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  return (
    <BrowserRouter>
      <div className={`flex flex-col min-h-screen ${theme === 'dark' ? 'dark' : ''}`}>
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <main className="flex-grow pt-16">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/signup" element={<Singup />} />
            <Route path="/onboarding/candidate" element={<CandidateOnboarding />} />
            <Route path="/candidat" element={<Candidat />} />
            <Route path="/recruteur" element={<Recruteur />} />
            <Route path="*" element={<Landing />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
