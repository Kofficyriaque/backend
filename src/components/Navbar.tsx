import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import i18n from '../i18n';

// --- Composants Drapeaux SVG ---
const FlagFR = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3 2" className="w-5 h-3.5 rounded-sm shadow-sm border border-slate-100">
    <rect width="1" height="2" fill="#002395"/>
    <rect width="1" height="2" x="1" fill="#fff"/>
    <rect width="1" height="2" x="2" fill="#ED2939"/>
  </svg>
);

const FlagEN = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30" className="w-5 h-3.5 rounded-sm shadow-sm border border-slate-100">
    <path d="M0,0 v30 h60 v-30 z" fill="#012169"/>
    <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6"/>
    <path d="M0,0 L60,30 M60,0 L0,30" stroke="#C8102E" strokeWidth="4"/>
    <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10"/>
    <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6"/>
  </svg>
);

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState<'FR' | 'EN'>(() => 
    i18n.language.startsWith('fr') ? 'FR' : 'EN'
  );
  const langRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const { t } = useTranslation();

   // Fermer le menu langue au clic extérieur
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(event.target as Node)) {
        setIsLangOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);


  const languages = [
    { code: 'FR' as const, label: 'Fr', flag: <FlagFR /> },
    { code: 'EN' as const, label: 'En', flag: <FlagEN /> }
  ];

  const currentLanguageData = languages.find(l => l.code === currentLang);

  const onChangeLanguage = (code: 'FR' | 'EN') => {
    const lng = code === 'FR' ? 'fr' : 'en';
    i18n.changeLanguage(lng);
    localStorage.setItem('lang', lng);
    setCurrentLang(code);
  };
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
            <Link to="/" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">{t('navbar.ourMission')}</Link>
            <Link to="/candidat" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">{t('navbar.forCandidates')}</Link>
            <Link to="/recruteur" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">{t('navbar.forRecruiters')}</Link>
            <div className="flex items-center space-x-4 pl-4 border-l border-slate-200">
              {/* Language Switcher Desktop */}
              <div className="relative mr-2" ref={langRef}>
                <button 
                  onClick={() => setIsLangOpen(!isLangOpen)}
                  className="flex flex-col items-center justify-center p-1 rounded-lg hover:bg-slate-50 transition-colors group"
                >
                  <div className="transform group-hover:scale-110 transition-transform">
                    {currentLanguageData?.flag}
                  </div>
                  <span className="text-[10px] font-bold text-slate-500 uppercase leading-none mt-1">
                    {currentLanguageData?.code}
                  </span>
                </button>

                {isLangOpen && (
                  <div className="absolute right-0 mt-2 w-32 bg-white rounded-xl shadow-xl border border-slate-100 overflow-hidden py-1">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          onChangeLanguage(lang.code);
                          setIsLangOpen(false);
                        }}
                        className={`w-full flex items-center space-x-2 px-3 py-2 text-xs font-semibold hover:bg-slate-50 transition-colors ${
                          currentLang === lang.code ? 'text-blue-600 bg-blue-50/50' : 'text-slate-600'
                        }`}
                      >
                        {lang.flag}
                        <span>{lang.code === 'FR' ? 'Français' : 'English'}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
              <button 
                onClick={() => navigate('/login')}
                className="text-sm font-medium text-slate-700 hover:text-slate-900"
              >
                {t('navbar.login')}
              </button>
              <button 
                onClick={() => navigate('/login')}
                className="bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-blue-700 transition-all shadow-sm hover:shadow-md"
              >
                {t('navbar.startAnalysis')}
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
            <Link to="/" className="block text-base font-medium text-slate-600 hover:text-blue-600 py-2">{t('navbar.ourMission')}</Link>
            <Link to="/candidat" className="block text-base font-medium text-slate-600 hover:text-blue-600 py-2">{t('navbar.forCandidates')}</Link>
            <Link to="/recruteur" className="block text-base font-medium text-slate-600 hover:text-blue-600 py-2">{t('navbar.forRecruiters')}</Link>
            
            <div className="pt-4 flex flex-col space-y-3">
              <div className="flex items-center justify-between py-2 border-t border-slate-50">
                <span className="text-sm font-medium text-slate-500">{t('navbar.language')}</span>
                <div className="flex space-x-2">
                  {languages.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => onChangeLanguage(l.code)}
                      className={`flex items-center space-x-2 px-3 py-1.5 rounded-lg border ${
                        currentLang === l.code 
                          ? 'border-blue-600 bg-blue-50 text-blue-600' 
                          : 'border-slate-200 text-slate-600'
                      }`}
                    >
                      {l.flag}
                      <span className="text-xs font-bold">{l.code}</span>
                    </button>
                  ))}
                </div>
              </div>
              <button 
                onClick={() => { navigate('/login'); setIsOpen(false); }}
                className="w-full text-center py-3 font-medium text-slate-700 border border-slate-200 rounded-xl"
              >
                {t('navbar.login')}
              </button>
              <button 
                onClick={() => { navigate('/login'); setIsOpen(false); }}
                className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold shadow-sm"
              >
                {t('navbar.startAnalysis')}
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
