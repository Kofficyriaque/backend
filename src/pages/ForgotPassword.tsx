import type { FormEvent } from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Loader2, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    // TODO: branchement API pour réinitialiser le mot de passe
    console.log({ email });
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
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
          <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-2">{t('forgotPassword.title')}</h1>
          <p className="text-slate-500 dark:text-slate-500">{t('forgotPassword.subtitle')}</p>
        </div>

        <div className="bg-white dark:bg-slate-950 p-8 md:p-10 rounded-[2.5rem] shadow-xl shadow-slate-200/50 dark:shadow-slate-900/50 border border-slate-100 dark:border-slate-800">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                  {t('forgotPassword.email')}
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 dark:text-slate-600">
                    <Mail size={20} />
                  </div>
                  <input 
                    type="email" 
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t('forgotPassword.emailPlaceholder')}
                    className="w-full pl-12 pr-4 py-4 bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white dark:focus:bg-slate-950 transition-all text-slate-900 dark:text-slate-100"
                    autoComplete="email"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button 
                disabled={isLoading}
                type="submit"
                className="w-full bg-blue-600 text-white py-4 rounded-2xl font-bold text-lg hover:bg-blue-700 transition-all shadow-lg dark:shadow-blue-950 disabled:opacity-70 flex items-center justify-center"
              >
                {isLoading ? (
                  <Loader2 className="animate-spin" size={24} />
                ) : (
                  <>{t('forgotPassword.submit')} <ArrowRight className="ml-2" size={20} /></>
                )}
              </button>
            </form>
          ) : (
            <div className="text-center py-8">
              <div className="mb-6 text-5xl">✉️</div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">
                {t('forgotPassword.success')}
              </h2>
              <p className="text-slate-600 dark:text-slate-400 mb-8">
                {email}
              </p>
              <button 
                onClick={() => navigate('/login')}
                className="w-full bg-blue-600 text-white py-4 rounded-2xl font-bold text-lg hover:bg-blue-700 transition-all shadow-lg dark:shadow-blue-950 flex items-center justify-center"
              >
                {t('forgotPassword.backToLogin')} <ArrowRight className="ml-2" size={20} />
              </button>
            </div>
          )}

          {/* Back to Login Link */}
          {!isSubmitted && (
            <p className="text-center text-sm text-slate-600 dark:text-slate-400 mt-6">
              <Link to="/login" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold">
                ← {t('forgotPassword.backToLogin')}
              </Link>
            </p>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default ForgotPassword;
