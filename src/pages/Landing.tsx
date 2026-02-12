
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Briefcase, Search, TrendingUp, ArrowRight, CheckCircle2, Wand, MapPin, Target } from 'lucide-react';

import { useTranslation } from 'react-i18next';
import FAQItem from '../components/FAQItem';

const Landing: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className="bg-white dark:bg-slate-950 overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full -z-10 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50 dark:bg-blue-900/10 rounded-full blur-3xl opacity-60 translate-x-1/3 -translate-y-1/3"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-50 dark:bg-slate-900/50 rounded-full blur-3xl opacity-40 -translate-x-1/3 translate-y-1/3"></div>
        </div>

        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-8xl font-black text-slate-900 dark:text-white tracking-tighter leading-[0.9] mb-8">
            {t('landing.titleLine1')}<br />
            <span className="text-blue-600 dark:text-blue-500">{t('landing.titleLine2')}</span>
          </h1>
          
          <p className="max-w-2xl mx-auto text-xl text-slate-500 dark:text-slate-400 mb-16 font-medium italic">
            {t('landing.subtitle')}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto px-4">
            {/* Candidate Card */}
            <button
              onClick={() => navigate('/onboarding/candidate')}
              className="relative group bg-blue-600 text-white p-12 rounded-[3rem] text-left overflow-hidden shadow-2xl hover:-translate-y-2 transition-all duration-500"
            >
              <div className="relative z-10">
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-100/70 mb-4 block">{t('landing.candidateBadge')}</span>
                <h3 className="text-3xl font-black mb-6 leading-tight">{t('landing.candidateTitle')}</h3>
                <div className="flex items-center text-sm font-black uppercase tracking-widest text-white group-hover:translate-x-2 transition-transform">
                  {t('landing.candidateCta')} <ArrowRight size={18} className="ml-3" />
                </div>
              </div>
              <User className="absolute right-[-20px] bottom-[-20px] w-48 h-48 text-white/10 group-hover:scale-110 transition-transform duration-700" />
            </button>

            {/* Recruiter Card */}
            <button
              onClick={() => navigate('/login')}
              className="relative group bg-slate-900 dark:bg-slate-800 text-white p-12 rounded-[3rem] text-left overflow-hidden shadow-2xl hover:-translate-y-2 transition-all duration-500"
            >
              <div className="relative z-10">
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-4 block">{t('landing.recruiterBadge')}</span>
                <h3 className="text-3xl font-black mb-6 leading-tight">{t('landing.recruiterTitle')}</h3>
                <div className="flex items-center text-sm font-black uppercase tracking-widest text-slate-300 group-hover:translate-x-2 transition-transform">
                  {t('landing.recruiterCta')} <ArrowRight size={18} className="ml-3" />
                </div>
              </div>
              <Briefcase className="absolute right-[-20px] bottom-[-20px] w-48 h-48 text-white/5 group-hover:scale-110 transition-transform duration-700" />
            </button>
          </div>
        </div>
      </section>

      
      {/* Feature Icons Section */}
      <section className="py-24 bg-white dark:bg-slate-950 px-6 transition-colors">
        <div className="max-w-7xl mx-auto">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-slate-50 dark:bg-slate-900 p-10 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 group hover:border-blue-200 dark:hover:border-blue-700 transition-all">
              <div className="w-16 h-16 bg-blue-50 dark:bg-blue-950/50 rounded-2xl flex items-center justify-center text-blue-600 dark:text-blue-400 mb-8 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                <Wand size={28} />
              </div>
              <h3 className="text-2xl font-black mb-4 text-slate-900 dark:text-white tracking-tight">Prédiction IA</h3>
              <p className="text-slate-500 dark:text-slate-400 font-medium leading-relaxed italic">Estimation précise des salaires basée sur l'analyse NLP des descriptions de postes.</p>
            </div>

            <div className="bg-slate-50 dark:bg-slate-900 p-10 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 group hover:border-slate-300 dark:hover:border-slate-700 transition-all">
              <div className="w-16 h-16 bg-slate-100 dark:bg-slate-800 rounded-2xl flex items-center justify-center text-slate-900 dark:text-slate-100 mb-8 transition-colors group-hover:bg-slate-950 dark:group-hover:bg-white group-hover:text-white dark:group-hover:text-slate-950">
                <MapPin size={28} />
              </div>
              <h3 className="text-2xl font-black mb-4 text-slate-900 dark:text-white tracking-tight">Cartographie</h3>
              <p className="text-slate-500 dark:text-slate-400 font-medium leading-relaxed italic">Visualisez les zones géographiques les plus attractives pour votre secteur d'activité.</p>
            </div>

            <div className="bg-slate-50 dark:bg-slate-900 p-10 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 group hover:border-blue-200 dark:hover:border-blue-700 transition-all">
              <div className="w-16 h-16 bg-blue-50 dark:bg-blue-950/50 rounded-2xl flex items-center justify-center text-blue-700 dark:text-blue-400 mb-8 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                <Target size={28} />
              </div>
              <h3 className="text-2xl font-black mb-4 text-slate-900 dark:text-white tracking-tight">Skills Hub</h3>
              <p className="text-slate-500 dark:text-slate-400 font-medium leading-relaxed italic">Identifiez les compétences rares et débloquez votre potentiel de gain.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Value for Everyone Section */}
      <section className="py-32 bg-slate-50 dark:bg-slate-900 px-6 transition-colors">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white tracking-tighter mb-6">{t('landing.valueTitle')}</h2>
            <p className="text-xl text-slate-500 dark:text-slate-400 font-medium italic max-w-2xl mx-auto">{t('landing.valueSubtitle')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* For Candidates Detailed */}
            <div className="bg-white dark:bg-slate-950 p-12 rounded-[3.5rem] shadow-xl border border-slate-100 dark:border-slate-800 flex flex-col transition-colors">
              <div className="w-14 h-14 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-2xl flex items-center justify-center mb-8 shadow-sm">
                <Search size={28} />
              </div>
              <h3 className="text-3xl font-black mb-6 text-slate-900 dark:text-white tracking-tight">{t('landing.forCandidatesTitle')}</h3>
              <p className="text-slate-500 dark:text-slate-400 mb-10 leading-relaxed font-medium text-lg italic">{t('landing.forCandidatesDesc')}</p>
              <ul className="space-y-6 mb-12 flex-grow">
                <li className="flex items-center group">
                  <CheckCircle2 size={20} className="text-blue-600 dark:text-blue-400 mr-4 shrink-0 transition-transform group-hover:scale-125" />
                  <span className="text-slate-600 dark:text-slate-300 font-bold">{t('landing.forCandidatesItem1')}</span>
                </li>
                <li className="flex items-center group">
                  <CheckCircle2 size={20} className="text-blue-600 dark:text-blue-400 mr-4 shrink-0 transition-transform group-hover:scale-125" />
                  <span className="text-slate-600 dark:text-slate-300 font-bold">{t('landing.forCandidatesItem2')}</span>
                </li>
                <li className="flex items-center group">
                  <CheckCircle2 size={20} className="text-blue-600 dark:text-blue-400 mr-4 shrink-0 transition-transform group-hover:scale-125" />
                  <span className="text-slate-600 dark:text-slate-300 font-bold">{t('landing.forCandidatesItem3')}</span>
                </li>
              </ul>
              <button 
                onClick={() => navigate('/onboarding/candidate')}
                className="text-blue-600 dark:text-blue-400 font-bold flex items-center hover:translate-x-1 transition-transform"
              >
                {t('landing.forCandidatesCTA')} <ArrowRight size={18} className="ml-2" />
              </button>
            </div>

            {/* For Recruiters Detailed */}
            <div className="bg-slate-950 dark:bg-slate-800 p-12 rounded-[3.5rem] shadow-2xl text-white flex flex-col transition-colors">
              <div className="w-14 h-14 bg-white/10 text-indigo-400 rounded-2xl flex items-center justify-center mb-8">
                <TrendingUp size={28} />
              </div>
              <h3 className="text-3xl font-black mb-6 tracking-tight">{t('landing.forRecruitersTitle')}</h3>
              <p className="text-slate-400 mb-10 leading-relaxed font-medium text-lg italic">{t('landing.forRecruitersDesc')}</p>
              <ul className="space-y-6 mb-12 flex-grow">
                <li className="flex items-center group">
                  <CheckCircle2 size={20} className="text-indigo-400 mr-4 shrink-0 transition-transform group-hover:scale-125" />
                  <span className="text-slate-200 font-bold">{t('landing.forRecruitersItem1')}</span>
                </li>
                <li className="flex items-center group">
                  <CheckCircle2 size={20} className="text-indigo-400 mr-4 shrink-0 transition-transform group-hover:scale-125" />
                  <span className="text-slate-200 font-bold">{t('landing.forRecruitersItem2')}</span>
                </li>
                <li className="flex items-center group">
                  <CheckCircle2 size={20} className="text-indigo-400 mr-4 shrink-0 transition-transform group-hover:scale-125" />
                  <span className="text-slate-200 font-bold">{t('landing.forRecruitersItem3')}</span>
                </li>
              </ul>
              <button 
                onClick={() => navigate('/login')}
                className="text-white font-bold flex items-center hover:translate-x-1 transition-transform"
              >
                {t('landing.forRecruitersCTA')} <ArrowRight size={18} className="ml-2" />
              </button>
            </div>
          </div>
        </div>
      </section>

      
      
            {/* FAQ Section */}
      <section className="py-24 px-4 bg-white dark:bg-slate-950 text-center overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4 tracking-tight">{t('faq.title')}</h2>
            <p className="text-slate-500 dark:text-slate-400 text-lg">{t('faq.subtitle')}</p>
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
            <p className="text-slate-600 dark:text-slate-400 mb-4">{t('faq.more')}</p>
            <button className="text-blue-600 dark:text-blue-400 font-semibold hover:underline flex items-center justify-center mx-auto">
              {t('faq.viewAll')} <ArrowRight size={18} className="ml-2" />
            </button>
          </div>
        </div>
      </section>
      
    </div>
  );
};

/* Interface pour FeatureCard
interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  dark?: boolean;
  tags?: string[];
  footer?: string;
  footerColor?: string;
}
*/

/* const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, dark, tags, footer, footerColor }) => {
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
}; */

export default Landing;
