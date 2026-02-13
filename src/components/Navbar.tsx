
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const navigate = useNavigate();

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-1">
              <span className="text-xl font-bold tracking-tight text-slate-900">PrediSalaire</span>
              <span className="text-xl font-bold tracking-tight text-blue-600">.ai</span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Our Mission</Link>
            <Link to="/" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">For Candidates</Link>
            <Link to="/" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">For Recruiters</Link>
            <div className="flex items-center space-x-4 pl-4 border-l border-slate-200">
              <button 
                onClick={() => navigate('/login')}
                className="text-sm font-medium text-slate-700 hover:text-slate-900"
              >
                Log In
              </button>
              <button 
                onClick={() => navigate('/login')}
                className="bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-blue-700 transition-all shadow-sm hover:shadow-md"
              >
                Start Analysis
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-slate-900 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-100 animate-in slide-in-from-top duration-300">
          <div className="px-4 pt-2 pb-6 space-y-3">
            <Link to="/" className="block text-base font-medium text-slate-600 hover:text-blue-600 py-2">Our Mission</Link>
            <Link to="/" className="block text-base font-medium text-slate-600 hover:text-blue-600 py-2">For Candidates</Link>
            <Link to="/" className="block text-base font-medium text-slate-600 hover:text-blue-600 py-2">For Recruiters</Link>
            <div className="pt-4 flex flex-col space-y-3">
              <button 
                onClick={() => { navigate('/login'); setIsOpen(false); }}
                className="w-full text-center py-3 font-medium text-slate-700 border border-slate-200 rounded-xl"
              >
                Log In
              </button>
              <button 
                onClick={() => { navigate('/login'); setIsOpen(false); }}
                className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold shadow-sm"
              >
                Start Analysis
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
