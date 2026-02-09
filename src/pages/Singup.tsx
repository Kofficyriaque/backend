import type { FormEvent } from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Lock, User, MapPin, Loader2, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { regionsFrance } from '../utils/regionsFrance';

const Signup = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [region, setRegion] = useState("");
  const [accountType, setAccountType] = useState('seeker');
  const [marketing, setMarketing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    // TODO: branchement API d'inscription
    console.log({ firstName, lastName, email, password, marketing, accountType, region });
    setTimeout(() => {
      setIsLoading(false);
      navigate('/onboarding/candidate');
    }, 1500);
  };

  return (
    <div className="min-h-[calc(100vh-64px)] bg-slate-50 flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full"
      >
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">{t('signup.title')}</h1>
          <p className="text-slate-500">{t('signup.subtitle')}</p>
        </div>

        <div className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-100">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Account Type */}
            <div>
              <span className="block text-sm font-semibold text-slate-700 mb-3">{t('signup.accountType')}</span>
              <div className="flex gap-4">
                <label className="flex items-center gap-2 text-sm text-slate-700 cursor-pointer">
                  <input
                    type="radio"
                    name="accountType"
                    value="seeker"
                    checked={accountType === 'seeker'}
                    onChange={(e) => setAccountType(e.target.value)}
                    className="h-4 w-4"
                  />
                  {t('signup.candidate')}
                </label>
                <label className="flex items-center gap-2 text-sm text-slate-700 cursor-pointer">
                  <input
                    type="radio"
                    name="accountType"
                    value="recruiter"
                    checked={accountType === 'recruiter'}
                    onChange={(e) => setAccountType(e.target.value)}
                    className="h-4 w-4"
                  />
                  {t('signup.recruiter')}
                </label>
              </div>
            </div>

            {/* First Name */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">{t('signup.firstName')}</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                  <User size={20} />
                </div>
                <input 
                  type="text" 
                  required
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder={t('signup.firstNamePlaceholder')}
                  className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all text-slate-900"
                  autoComplete="given-name"
                />
              </div>
            </div>

            {/* Last Name */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">{t('signup.lastName')}</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                  <User size={20} />
                </div>
                <input 
                  type="text" 
                  required
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder={t('signup.lastNamePlaceholder')}
                  className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all text-slate-900"
                  autoComplete="family-name"
                />
              </div>
            </div>

            {/* Region */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">{t('signup.region')}</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                  <MapPin size={20} />
                </div>
                <select
                  required
                  value={region}
                  onChange={(e) => setRegion(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all text-slate-900 appearance-none"
                >
                  <option value="">{t('signup.regionPlaceholder')}</option>
                  {regionsFrance.map((r) => (
                    <option key={r} value={r}>{r}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">{t('signup.email')}</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                  <Mail size={20} />
                </div>
                <input 
                  type="email" 
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t('signup.emailPlaceholder')}
                  className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all text-slate-900"
                  autoComplete="email"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">{t('signup.password')}</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                  <Lock size={20} />
                </div>
                <input 
                  type="password" 
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder={t('signup.passwordPlaceholder')}
                  className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all text-slate-900"
                  autoComplete="new-password"
                />
              </div>
            </div>

            {/* Marketing Checkbox */}
            <label className="flex items-center gap-2 text-sm text-slate-700 cursor-pointer">
              <input
                type="checkbox"
                checked={marketing}
                onChange={(e) => setMarketing(e.target.checked)}
                className="h-4 w-4"
              />
              {t('signup.marketing')}
            </label>

            {/* Submit Button */}
            <button 
              disabled={isLoading}
              type="submit"
              className="w-full bg-blue-600 text-white py-4 rounded-2xl font-bold text-lg hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 disabled:opacity-70 flex items-center justify-center"
            >
              {isLoading ? (
                <Loader2 className="animate-spin" size={24} />
              ) : (
                <>{t('signup.submit')} <ArrowRight className="ml-2" size={20} /></>
              )}
            </button>
          </form>

          {/* Sign In Link */}
          <p className="text-center text-sm text-slate-600 mt-6">
            {t('signup.haveAccount')} <Link to="/login" className="text-blue-600 hover:text-blue-700 font-semibold">{t('signup.signIn')}</Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Signup;