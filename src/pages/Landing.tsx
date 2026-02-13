
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { User, Briefcase, Database, Brain, ShieldCheck, Search,  TrendingUp, ArrowRight, CheckCircle2 } from 'lucide-react';

const Landing: React.FC = () => {
  const navigate = useNavigate();

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="bg-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 lg:pt-32 lg:pb-24 px-4 overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full -z-10 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50 translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-slate-50 rounded-full blur-3xl opacity-50 -translate-x-1/2 translate-y-1/2"></div>
        </div>

        <div className="max-w-7xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 border border-blue-100 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse mr-2"></span>
            <span className="text-xs font-semibold text-blue-700 uppercase tracking-wider">V2.0 Model Live</span>
          </motion.div>
          
          <motion.h1 
            {...fadeInUp}
            className="text-5xl md:text-7xl font-bold text-slate-900 tracking-tight leading-[1.1] mb-6"
          >
            The truth about IT salaries.<br />
            <span className="text-blue-600">Revealed by Data.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="max-w-2xl mx-auto text-lg md:text-xl text-slate-500 mb-12"
          >
            Stop guessing. Start knowing. The first AI engine that decodes market reality by analyzing millions of real-time data points.
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
                <span className="text-xs font-bold uppercase tracking-widest text-blue-100 opacity-80 mb-2 block">For Talent</span>
                <h3 className="text-2xl font-bold mb-4">I am a Candidate</h3>
                <div className="flex items-center text-sm font-semibold text-blue-100 group-hover:translate-x-1 transition-transform">
                  Get my worth <ArrowRight size={16} className="ml-2" />
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
                <span className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2 block">For Hiring</span>
                <h3 className="text-2xl font-bold mb-4">I am a Recruiter</h3>
                <div className="flex items-center text-sm font-semibold text-slate-300 group-hover:translate-x-1 transition-transform">
                  Find data <ArrowRight size={16} className="ml-2" />
                </div>
              </div>
              <Briefcase className="absolute right-[-10px] bottom-[-10px] w-32 h-32 text-white/5 group-hover:scale-110 transition-transform duration-500" />
            </motion.button>
          </div>
        </div>
      </section>

      {/* Why This Model? Section */}
      <section className="py-24 bg-white px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-4 tracking-tight">Why this Model?</h2>
              <p className="text-slate-500 text-lg">Our technology removes human bias to give you the raw market truth.</p>
            </div>
            <a href="#" className="text-blue-600 font-semibold flex items-center hover:underline">
              Read the whitepaper <ArrowRight size={18} className="ml-2" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Database className="text-blue-600" size={24} />}
              title="Big Data Ingestion"
              description="Analyzing millions of job offers in real-time across 50+ platforms to capture the entire market spectrum."
              footer="Market Coverage"
              footerColor="blue"
            />
            <FeatureCard 
              icon={<Brain className="text-white" size={24} />}
              title="Advanced NLP"
              description="Understanding context, seniority, and stack requirements beyond just keywords using Transformers."
              dark
              tags={['spaCy', 'BERT', 'LLM']}
            />
            <FeatureCard 
              icon={<ShieldCheck className="text-blue-600" size={24} />}
              title="Zero Human Bias"
              description="Pure data-driven insights without subjective filtering. No recruiter intuition, just statistical facts."
              footer="99.8% Accuracy"
              footerColor="blue"
            />
          </div>
        </div>
      </section>

      {/* Value for Everyone Section */}
      <section className="py-24 bg-slate-50 px-4">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4 tracking-tight">Value for Everyone</h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">Whether you are hiring or looking to be hired, data is your leverage.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* For Candidates Detailed */}
          <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-100 flex flex-col h-full">
            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
              <Search size={24} />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-slate-900">For Candidates</h3>
            <p className="text-slate-500 mb-8 leading-relaxed">
              Stop underselling yourself. Use data to negotiate with proof. Know your worth down to the percentile based on your specific stack and city.
            </p>
            <ul className="space-y-4 mb-10 flex-grow">
              <li className="flex items-start">
                <CheckCircle2 size={18} className="text-blue-600 mt-1 mr-3 shrink-0" />
                <span className="text-slate-600">Real-time salary benchmarking</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 size={18} className="text-blue-600 mt-1 mr-3 shrink-0" />
                <span className="text-slate-600">Negotiation cheat-sheets generated by AI</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 size={18} className="text-blue-600 mt-1 mr-3 shrink-0" />
                <span className="text-slate-600">Skill-gap analysis to boost income</span>
              </li>
            </ul>
            <button 
              onClick={() => navigate('/onboarding/candidate')}
              className="text-blue-600 font-bold flex items-center hover:translate-x-1 transition-transform"
            >
              Start Free Analysis <ArrowRight size={18} className="ml-2" />
            </button>
          </div>

          {/* For Recruiters Detailed */}
          <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-100 flex flex-col h-full">
            <div className="w-12 h-12 bg-slate-50 text-slate-900 rounded-2xl flex items-center justify-center mb-6">
              <TrendingUp size={24} />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-slate-900">For Recruiters</h3>
            <p className="text-slate-500 mb-8 leading-relaxed">
              Attract top talent without breaking the bank. Offer competitive packages grounded in reality and close candidates faster.
            </p>
            <ul className="space-y-4 mb-10 flex-grow">
              <li className="flex items-start">
                <CheckCircle2 size={18} className="text-slate-900 mt-1 mr-3 shrink-0" />
                <span className="text-slate-600">Market-aligned offer generation</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 size={18} className="text-slate-900 mt-1 mr-3 shrink-0" />
                <span className="text-slate-600">Budget forecasting for Q1/Q2</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 size={18} className="text-slate-900 mt-1 mr-3 shrink-0" />
                <span className="text-slate-600">Competitor salary analysis</span>
              </li>
            </ul>
            <button 
              onClick={() => navigate('/login')}
              className="text-slate-900 font-bold flex items-center hover:translate-x-1 transition-transform"
            >
              Get Business Access <ArrowRight size={18} className="ml-2" />
            </button>
          </div>
        </div>
      </section>

      {/* Engineered for Clarity Section */}
      <section className="py-24 px-4 bg-white text-center overflow-hidden">
        <h2 className="text-4xl font-bold text-slate-900 mb-4 tracking-tight">Engineered for Clarity</h2>
        <p className="text-slate-500 text-lg mb-16 max-w-xl mx-auto">Complex data turned into actionable insights. See the future of your earnings.</p>
        
        <div className="max-w-4xl mx-auto relative group">
          <div className="absolute inset-0 bg-blue-600/5 blur-3xl rounded-full scale-110 -z-10 group-hover:scale-125 transition-transform duration-700"></div>
          <div className="bg-white rounded-[2rem] border border-slate-100 shadow-2xl p-4 overflow-hidden">
             <img 
               src="https://picsum.photos/seed/dashboard/1200/800" 
               alt="Dashboard Preview" 
               className="rounded-2xl w-full h-auto"
             />
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
