
import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white py-12 border-t border-slate-100 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-1 mb-4">
              <span className="text-lg font-bold tracking-tight text-slate-900">PrediSalaire</span>
              <span className="text-lg font-bold tracking-tight text-blue-600">.ai</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">
              Democratizing salary data for everyone. We believe in transparency, fairness, and the power of artificial intelligence.
            </p>
          </div>
          
          <div>
            <h4 className="text-sm font-bold text-slate-900 mb-4 uppercase tracking-wider">Platform</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-slate-500 text-sm hover:text-blue-600 transition-colors">Features</a></li>
              <li><a href="#" className="text-slate-500 text-sm hover:text-blue-600 transition-colors">For Candidates</a></li>
              <li><a href="#" className="text-slate-500 text-sm hover:text-blue-600 transition-colors">For Recruiters</a></li>
              <li><a href="#" className="text-slate-500 text-sm hover:text-blue-600 transition-colors">Pricing</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-slate-900 mb-4 uppercase tracking-wider">Company</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-slate-500 text-sm hover:text-blue-600 transition-colors">About Us</a></li>
              <li><a href="#" className="text-slate-500 text-sm hover:text-blue-600 transition-colors">Careers</a></li>
              <li><a href="#" className="text-slate-500 text-sm hover:text-blue-600 transition-colors">Blog</a></li>
              <li><a href="#" className="text-slate-500 text-sm hover:text-blue-600 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-slate-900 mb-4 uppercase tracking-wider">Legal</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-slate-500 text-sm hover:text-blue-600 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-slate-500 text-sm hover:text-blue-600 transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center text-slate-400 text-xs gap-4">
          <p>© 2024 PrediSalaire.ai. All rights reserved.</p>
          <div className="flex items-center gap-1">
            Made with <Heart size={12} className="text-red-500 fill-red-500" /> by Python & Passion
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
