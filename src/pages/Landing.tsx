
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { User, Briefcase, Database, Brain, ShieldCheck, Search,  TrendingUp, ArrowRight, CheckCircle2, Wand, MapPin, Target } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import FAQItem from '../components/FAQItem';

const Landing: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="bg-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 lg:pt-22 lg:pb-20 px-4 overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full -z-10 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50 translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-slate-50 rounded-full blur-3xl opacity-50 -translate-x-1/2 translate-y-1/2"></div>
        </div>

        <div className="max-w-7xl mx-auto text-center">
          
          <motion.h1 
            {...fadeInUp}
            className="text-5xl md:text-7xl font-bold text-slate-900 tracking-tight leading-[1.1] mb-6"
          >
            {t('landing.titleLine1')}<br />
            <span className="text-blue-600">{t('landing.titleLine2')}</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="max-w-2xl mx-auto text-lg md:text-xl text-slate-500 mb-12"
          >
            {t('landing.subtitle')}
          </motion.p>

          {/* Hero CTAs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto px-4">
            {/* Candidate Card */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => navigate('/onboarding/candidate')}
              className="relative group bg-blue-600 text-white p-8 rounded-[2rem] text-left overflow-hidden shadow-xl shadow-blue-200"
            >
              <div className="relative z-10">
                <span className="text-xs font-bold uppercase tracking-widest text-blue-100 opacity-80 mb-2 block">{t('landing.candidateBadge')}</span>
                <h3 className="text-2xl font-bold mb-4">{t('landing.candidateTitle')}</h3>
                <div className="flex items-center text-sm font-semibold text-blue-100 group-hover:translate-x-1 transition-transform">
                  {t('landing.candidateCta')} <ArrowRight size={16} className="ml-2" />
                </div>
              </div>
              <User className="absolute right-[-10px] bottom-[-10px] w-32 h-32 text-white/10 group-hover:scale-110 transition-transform duration-500" />
            </motion.button>

            {/* Recruiter Card */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => navigate('/login')}
              className="relative group bg-slate-900 text-white p-8 rounded-[2rem] text-left overflow-hidden shadow-xl shadow-slate-200"
            >
              <div className="relative z-10">
                <span className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2 block">{t('landing.recruiterBadge')}</span>
                <h3 className="text-2xl font-bold mb-4">{t('landing.recruiterTitle')}</h3>
                <div className="flex items-center text-sm font-semibold text-slate-300 group-hover:translate-x-1 transition-transform">
                  {t('landing.recruiterCta')} <ArrowRight size={16} className="ml-2" />
                </div>
              </div>
              <Briefcase className="absolute right-[-10px] bottom-[-10px] w-32 h-32 text-white/5 group-hover:scale-110 transition-transform duration-500" />
            </motion.button>
          </div>
        </div>
      </section>

      
      <section className="pt-10 pb-24 bg-white px-4">
        <div className="max-w-7xl mx-auto">
           <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div
              className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 group transition-transform duration-300 ease-out hover:-translate-y-2 hover:shadow-lg hover:border-blue-100"
           >
              <div
                className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-6 text-2xl transition-colors group-hover:bg-blue-600 group-hover:text-white"
              >
                <Wand size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">Prédiction IA</h3>
              <p className="text-slate-600 leading-relaxed">Estimation précise des salaires basée sur l'analyse NLP des descriptions de postes.</p>
            </div>

            <div
              className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 group transition-transform duration-300 ease-out hover:-translate-y-2 hover:shadow-lg hover:border-slate-200"
            >
              <div
                className="w-14 h-14 bg-slate-50 rounded-xl flex items-center justify-center text-slate-900 mb-6 text-2xl transition-colors group-hover:bg-slate-900 group-hover:text-white"
              >
                <MapPin size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">Cartographie</h3>
              <p className="text-slate-600 leading-relaxed">Visualisez les zones géographiques les plus attractives pour votre secteur d'activité.</p>
            </div>

            <div
              className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 group transition-transform duration-300 ease-out hover:-translate-y-2 hover:shadow-lg hover:border-blue-100"
            >
              <div
                className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center text-blue-700 mb-6 text-2xl transition-colors group-hover:bg-blue-600 group-hover:text-white"
              >
                <Target size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">Skills Hub</h3>
              <p className="text-slate-600 leading-relaxed">Identifiez les compétences rares et débloquez votre potentiel de gain.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Value for Everyone Section */}
      <section className="py-24 bg-slate-50 px-4">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4 tracking-tight">{t('landing.valueTitle')}</h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">{t('landing.valueSubtitle')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* For Candidates Detailed */}
          <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-100 flex flex-col h-full">
            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
              <Search size={24} />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-slate-900">{t('landing.forCandidatesTitle')}</h3>
            <p className="text-slate-500 mb-8 leading-relaxed">{t('landing.forCandidatesDesc')}</p>
            <ul className="space-y-4 mb-10 flex-grow">
              <li className="flex items-start">
                <CheckCircle2 size={18} className="text-blue-600 mt-1 mr-3 shrink-0" />
                <span className="text-slate-600">{t('landing.forCandidatesItem1')}</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 size={18} className="text-blue-600 mt-1 mr-3 shrink-0" />
                <span className="text-slate-600">{t('landing.forCandidatesItem2')}</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 size={18} className="text-blue-600 mt-1 mr-3 shrink-0" />
                <span className="text-slate-600">{t('landing.forCandidatesItem3')}</span>
              </li>
            </ul>
            <button 
              onClick={() => navigate('/onboarding/candidate')}
              className="text-blue-600 font-bold flex items-center hover:translate-x-1 transition-transform"
            >
              {t('landing.forCandidatesCTA')} <ArrowRight size={18} className="ml-2" />
            </button>
          </div>

          {/* For Recruiters Detailed */}
          <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-100 flex flex-col h-full">
            <div className="w-12 h-12 bg-slate-50 text-slate-900 rounded-2xl flex items-center justify-center mb-6">
              <TrendingUp size={24} />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-slate-900">{t('landing.forRecruitersTitle')}</h3>
            <p className="text-slate-500 mb-8 leading-relaxed">{t('landing.forRecruitersDesc')}</p>
            <ul className="space-y-4 mb-10 flex-grow">
              <li className="flex items-start">
                <CheckCircle2 size={18} className="text-slate-900 mt-1 mr-3 shrink-0" />
                <span className="text-slate-600">{t('landing.forRecruitersItem1')}</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 size={18} className="text-slate-900 mt-1 mr-3 shrink-0" />
                <span className="text-slate-600">{t('landing.forRecruitersItem2')}</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 size={18} className="text-slate-900 mt-1 mr-3 shrink-0" />
                <span className="text-slate-600">{t('landing.forRecruitersItem3')}</span>
              </li>
            </ul>
            <button 
              onClick={() => navigate('/login')}
              className="text-slate-900 font-bold flex items-center hover:translate-x-1 transition-transform"
            >
              {t('landing.forRecruitersCTA')} <ArrowRight size={18} className="ml-2" />
            </button>
          </div>
        </div>
      </section>

      
      
            {/* FAQ Section */}
      <section className="py-24 px-4 bg-white text-center overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4 tracking-tight">{t('faq.title')}</h2>
            <p className="text-slate-500 text-lg">{t('faq.subtitle')}</p>
          </div>

          <div className="space-y-4">
            <FAQItem 
              question={t('faq.q1')}
              answer={t('faq.a1')}
            />
            <FAQItem 
              question={t('faq.q2')}
              answer={t('faq.a2')}
            />
            <FAQItem 
              question={t('faq.q3')}
              answer={t('faq.a3')}
            />
            <FAQItem 
              question={t('faq.q4')}
              answer={t('faq.a4')}
            />
            <FAQItem 
              question={t('faq.q5')}
              answer={t('faq.a5')}
            />
          </div>

          <div className="mt-12 text-center">
            <p className="text-slate-600 mb-4">{t('faq.more')}</p>
            <button className="text-blue-600 font-semibold hover:underline flex items-center justify-center mx-auto">
              {t('faq.viewAll')} <ArrowRight size={18} className="ml-2" />
            </button>
          </div>
        </div>
      </section>
      
    </div>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  dark?: boolean;
  tags?: string[];
  footer?: string;
  footerColor?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, dark, tags, footer, footerColor }) => {
  return (
    <div className={`${dark ? 'bg-slate-900 text-white' : 'bg-white text-slate-900 border border-slate-100 shadow-sm'} p-10 rounded-[2.5rem] flex flex-col h-full min-h-[340px]`}>
      <div className={`w-12 h-12 ${dark ? 'bg-slate-800' : 'bg-blue-50'} rounded-2xl flex items-center justify-center mb-6 shrink-0`}>
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <p className={`${dark ? 'text-slate-400' : 'text-slate-500'} mb-auto leading-relaxed`}>{description}</p>
      
      {tags && (
        <div className="flex flex-wrap gap-2 mt-6">
          {tags.map((tag, i) => (
            <span key={i} className="px-3 py-1 bg-slate-800 text-slate-400 text-[10px] font-bold uppercase tracking-widest rounded-full">
              {tag}
            </span>
          ))}
        </div>
      )}

      {footer && (
        <div className="mt-8 flex items-center gap-2">
          {footerColor === 'blue' && <CheckCircle2 size={16} className="text-blue-600" />}
          <span className={`text-sm font-bold ${footerColor === 'blue' ? 'text-blue-600' : 'text-slate-500'}`}>{footer}</span>
        </div>
      )}
      {!footer && !tags && <div className="mt-8 h-1 bg-slate-100 rounded-full w-2/3 overflow-hidden">
        <div className="h-full bg-blue-600 w-2/3"></div>
      </div>}
    </div>
  );
};

export default Landing;
/*
<section className="py-24 px-4 bg-white text-center overflow-hidden">
</section>

*/