
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Lock, Mail, Loader2, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Login: React.FC = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulation d'un chargement de 1 seconde
    setTimeout(() => {
      setIsLoading(false);
      navigate('/onboarding/candidate');
    }, 1500);
  };

  return (
    <div className="min-h-[calc(100vh-64px)] bg-slate-50 dark:bg-slate-900 flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full"
      >
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-2">{t('login.title')}</h1>
          <p className="text-slate-500 dark:text-slate-500">{t('login.subtitle')}</p>
        </div>

        <div className="bg-white dark:bg-slate-950 p-8 md:p-10 rounded-[2.5rem] shadow-xl shadow-slate-200/50 dark:shadow-slate-900/50 border border-slate-100 dark:border-slate-800">
          <form onSubmit={handleSignIn} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">{t('login.email')}</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 dark:text-slate-600">
                  <Mail size={20} />
                </div>
                <input 
                  type="email" 
                  required
                  placeholder={t('login.emailPlaceholder')}
                  className="w-full pl-12 pr-4 py-4 bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white dark:focus:bg-slate-950 transition-all text-slate-900 dark:text-slate-100"
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300">{t('login.password')}</label>
                <a href="/forgot-password" className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline dark:hover:text-blue-300">{t('login.forgot')}</a>
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 dark:text-slate-600">
                  <Lock size={20} />
                </div>
                <input 
                  type="password" 
                  required
                  placeholder="••••••••"
                  className="w-full pl-12 pr-4 py-4 bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white dark:focus:bg-slate-950 transition-all text-slate-900 dark:text-slate-100"
                />
              </div>
            </div>

            <button 
              disabled={isLoading}
              type="submit"
              className="w-full bg-blue-600 text-white py-4 rounded-2xl font-bold text-lg hover:bg-blue-700 transition-all shadow-lg dark:shadow-blue-950 disabled:opacity-70 flex items-center justify-center"
            >
              {isLoading ? (
                <Loader2 className="animate-spin" size={24} />
              ) : (
                <>{t('login.signIn')} <ArrowRight className="ml-2" size={20} /></>
              )}
            </button>
          </form>

          <div className="mt-10 pt-8 border-t border-slate-100 dark:border-slate-800 text-center">
            <p className="text-slate-500 dark:text-slate-500">
              {t('login.noAccount')}{' '}
              <a href="/signup" className="text-blue-600 dark:text-blue-400 font-bold hover:underline dark:hover:text-blue-300">{t('login.create')}</a>
            </p>
          </div>
        </div>

        <p className="mt-8 text-center text-slate-400 dark:text-slate-600 text-xs px-4">
          {t('login.tos')}
        </p>
      </motion.div>
    </div>
  );
};

export default Login;
