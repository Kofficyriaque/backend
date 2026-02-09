import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Login from './pages/Login';
import CandidateOnboarding from './pages/CandidateOnboarding';
import Candidat from './pages/Candidat';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Recruteur from './pages/Recruteur';
import Signup from './pages/Singup';
import ForgotPassword from './pages/ForgotPassword';



const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-16">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/signup" element={<Signup />} />
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
