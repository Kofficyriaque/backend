import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';
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

interface NavbarProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
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

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
    <nav className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/80 dark:bg-slate-950/90 backdrop-blur-md border-slate-200/40 dark:border-slate-800 shadow-sm dark:shadow-slate-900/20' 
        : 'bg-white dark:bg-slate-950 border-slate-200/0 dark:border-slate-900/0'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-1">
              <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-slate-100">PrediSalaire</span>
              <span className="text-xl font-bold tracking-tight text-blue-600">. ai</span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/about" className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">{t('navbar.forAbout')}</Link>
            <Link to="/candidat" className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">{t('navbar.forCandidates')}</Link>
            <Link to="/recruteur" className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">{t('navbar.forRecruiters')}</Link>
            <div className="flex items-center space-x-4 pl-4 border-l border-slate-200 dark:border-slate-700">
              {/* Theme Toggle Button */}
              <button 
                onClick={toggleTheme}
                aria-label="Toggle Theme"
                className="p-2.5 rounded-full bg-slate-100 dark:bg-slate-900 text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all border border-slate-200 dark:border-slate-800"
              >
                {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
              </button>
              
              {/* Language Switcher Desktop */}
              <div className="relative mr-2" ref={langRef}>
                <button 
                  onClick={() => setIsLangOpen(!isLangOpen)}
                  className="flex flex-col items-center justify-center p-1 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors group"
                >
                  <div className="transform group-hover:scale-110 transition-transform">
                    {currentLanguageData?.flag}
                  </div>
                  <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase leading-none mt-1">
                    {currentLanguageData?.code}
                  </span>
                </button>

                {isLangOpen && (
                  <div className="absolute right-0 mt-2 w-32 bg-white dark:bg-slate-900 rounded-xl shadow-xl border border-slate-100 dark:border-slate-800 overflow-hidden py-1">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          onChangeLanguage(lang.code);
                          setIsLangOpen(false);
                        }}
                        className={`w-full flex items-center space-x-2 px-3 py-2 text-xs font-semibold transition-colors dark:hover:bg-slate-800 ${
                          currentLang === lang.code ? 'text-blue-600 bg-blue-50/50 dark:bg-blue-950/50' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50'
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
                className="text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100"
              >
                {t('navbar.login')}
              </button>
              <button 
                onClick={() => navigate('/login')}
                className="bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-blue-700 dark:hover:bg-blue-600 transition-all shadow-sm hover:shadow-md"
              >
                {t('navbar.startAnalysis')}
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 animate-in slide-in-from-top duration-300">
          <div className="px-4 pt-2 pb-6 space-y-3">
            <Link to="/" className="block text-base font-medium text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 py-2">{t('navbar.ourMission')}</Link>
            <Link to="/candidat" className="block text-base font-medium text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 py-2">{t('navbar.forCandidates')}</Link>
            <Link to="/recruteur" className="block text-base font-medium text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 py-2">{t('navbar.forRecruiters')}</Link>
            
            <div className="pt-4 flex flex-col space-y-3">
              <div className="flex items-center justify-between py-2 border-t border-slate-50 dark:border-slate-800">
                <span className="text-sm font-medium text-slate-500 dark:text-slate-400">{t('navbar.language')}</span>
                <div className="flex items-center space-x-2">
                  {/* Theme Toggle Mobile */}
                  <button 
                    onClick={toggleTheme}
                    aria-label="Toggle Theme"
                    className="p-2.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all border border-slate-200 dark:border-slate-700"
                  >
                    {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
                  </button>
                  
                  {/* Language Selector Mobile */}
                  <div className="flex space-x-2">
                    {languages.map((l) => (
                      <button
                        key={l.code}
                        onClick={() => onChangeLanguage(l.code)}
                        className={`flex items-center space-x-2 px-3 py-1.5 rounded-lg border transition-colors ${
                          currentLang === l.code 
                            ? 'border-blue-600 bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400' 
                            : 'border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800'
                        }`}
                      >
                        {l.flag}
                        <span className="text-xs font-bold">{l.code}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              <button 
                onClick={() => { navigate('/login'); setIsOpen(false); }}
                className="w-full text-center py-3 font-medium text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800"
              >
                {t('navbar.login')}
              </button>
              <button 
                onClick={() => { navigate('/login'); setIsOpen(false); }}
                className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold shadow-sm hover:bg-blue-700 dark:hover:bg-blue-600"
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
