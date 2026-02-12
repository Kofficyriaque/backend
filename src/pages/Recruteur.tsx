import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Database, ShieldCheck, TrendingUp, FileJson, ArrowRight, Target, BarChart3, AlertCircle, Info, CheckCircle2, Cpu, Globe, Activity } from 'lucide-react';

const Recruteur: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  // Benchmarking Items
  const benchmarkItems = [
    t('recruiter.rec_bench_item1'),
    t('recruiter.rec_bench_item2'),
    t('recruiter.rec_bench_item3'),
  ];

  // Skills Data
  const skillsList = [
    { name: t('recruiter.rec_skills_genai'), scarcity: "9.8/10", impact: t('recruiter.rec_skills_genai_impact') },
    { name: t('recruiter.rec_skills_rust'), scarcity: "9.2/10", impact: t('recruiter.rec_skills_rust_impact') },
    { name: t('recruiter.rec_skills_cyber'), scarcity: "8.9/10", impact: t('recruiter.rec_skills_cyber_impact') },
    { name: t('recruiter.rec_skills_react'), scarcity: "7.5/10", impact: t('recruiter.rec_skills_react_impact') },
  ];

  // Attractiveness Criteria
  const attractiveCriteria = [
    { label: t('recruiter.rec_attract_salary_label'), score: "95%", status: t('recruiter.rec_attract_salary_status') },
    { label: t('recruiter.rec_attract_clarity_label'), score: "82%", status: t('recruiter.rec_attract_clarity_status') },
    { label: t('recruiter.rec_attract_benefits_label'), score: "70%", status: t('recruiter.rec_attract_benefits_status') },
    { label: t('recruiter.rec_attract_seo_label'), score: "88%", status: t('recruiter.rec_attract_seo_status') },
  ];

  return (
    <div className="bg-slate-50 dark:bg-slate-950 min-h-screen animate-in fade-in duration-700">
      {/* Header - Vision Stratégique */}
      <header className="relative pt-32 pb-24 px-4 overflow-hidden bg-white dark:bg-slate-950 border-b border-slate-100 dark:border-slate-800">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-50/30 skew-x-12 translate-x-1/4 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto relative z-10 text-center md:text-left flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1">
            
            <h1 className="text-5xl md:text-8xl font-black text-slate-900 dark:text-slate-100 tracking-tighter mb-8 leading-[0.9]">
              {t('recruiter.rec_hero_title')}
            </h1>
            <p className="text-xl text-slate-400 dark:text-slate-500 max-w-2xl font-medium mb-12 italic leading-relaxed">
              {t('recruiter.rec_hero_subtitle')}
            </p>
            <button 
              onClick={() => navigate('/login')} 
              className="bg-blue-600 text-white px-12 py-6 rounded-2xl font-black text-lg uppercase tracking-widest shadow-2xl dark:shadow-blue-950 hover:-translate-y-1 transition-all active:scale-95 flex items-center gap-4"
            >
              {t('recruiter.start_now')} <ArrowRight />
            </button>
          </div>
          <div className="flex-1 w-full max-w-2xl">
            {/* RIGHT SIDE: ORBITAL DATA ENGINE */}
            <div className="relative h-[600px] hidden lg:flex items-center justify-center animate-in fade-in zoom-in duration-1000 delay-300">
              {/* Central Core: The IA Brain */}
              <div className="relative z-30 w-32 h-32 bg-white dark:bg-slate-900 rounded-full shadow-[0_0_100px_rgba(99,102,241,0.2)] dark:shadow-[0_0_100px_rgba(99,102,241,0.1)] border-4 border-indigo-50 dark:border-indigo-900 flex items-center justify-center group cursor-pointer hover:scale-110 transition-transform duration-500">
                <div className="absolute inset-2 border border-indigo-100 rounded-full animate-spin-slow"></div>
                <Database className="text-indigo-600" size={40} />
              </div>

              {/* Orbital Rings */}
              <div className="absolute w-[300px] h-[300px] border border-slate-100 dark:border-slate-700 rounded-full"></div>
              <div className="absolute w-[450px] h-[450px] border border-slate-50 dark:border-slate-800 rounded-full"></div>
              <div className="absolute w-[580px] h-[580px] border border-slate-50/50 dark:border-slate-800/30 rounded-full"></div>

              {/* Data Nodes (Orbiting Cards) */}
              {/* Node 1: Salary Bench */}
              <div className="absolute top-[15%] right-0 z-40 bg-white dark:bg-slate-900 p-5 rounded-3xl shadow-xl border border-slate-100 dark:border-slate-700 w-56 transform hover:-translate-y-2 transition-transform">
                <div className="flex items-center gap-3 mb-3">
                     <div className="w-8 h-8 bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 rounded-xl flex items-center justify-center">
                    <TrendingUp size={16} />
                  </div>
                    <span className="text-[9px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest">Benchmark</span>
                </div>
                <div className="text-2xl font-black text-slate-900 dark:text-slate-100">+18.5% <span className="text-[10px] text-emerald-500 font-bold">vs Q1</span></div>
                <div className="mt-2 text-[9px] font-bold text-slate-400 dark:text-slate-500 italic">Tendance Marché IT</div>
              </div>

              {/* Node 2: Scarcity Index */}
              <div className="absolute bottom-[20%] right-[10%] z-40 bg-slate-950 text-white p-6 rounded-[2.5rem] shadow-2xl w-60 transform -rotate-3 hover:rotate-0 transition-all">
                <div className="flex items-center justify-between mb-4">
                  <Cpu size={18} className="text-indigo-400" />
                  <div className="w-2 h-2 bg-indigo-500 rounded-full animate-ping"></div>
                </div>
                <div className="text-[10px] font-black text-indigo-300 uppercase tracking-widest mb-1">Scarcity Score</div>
                <div className="text-4xl font-black mb-3 text-white">9.8<span className="text-sm opacity-50">/10</span></div>
                <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase">
                  <Globe size={10} /> Focus: Europe Centrale
                </div>
              </div>

              {/* Node 3: Real-time Feed */}
              <div className="absolute left-0 top-[30%] z-40 bg-white/80 backdrop-blur-md p-5 rounded-3xl border border-white shadow-lg w-52">
                <div className="flex items-center gap-3 mb-4">
                  <Activity size={16} className="text-indigo-600" />
                  <span className="text-[9px] font-black text-slate-900 dark:text-white uppercase tracking-widest">Feed Live</span>
                </div>
                <div className="space-y-3">
                  {[1,2,3].map(i => (
                    <div key={i} className="flex items-center justify-between">
                      <div className="w-1.5 h-1.5 bg-indigo-200 rounded-full"></div>
                      <div className="h-1 flex-1 bg-slate-50 mx-2 rounded-full overflow-hidden">
                        <div className={`h-full bg-indigo-500 w-[${30 + i*20}%]`}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Architectural Lines (SVG) */}
              <svg className="absolute inset-0 w-full h-full -z-10" viewBox="0 0 600 600">
                <path d="M300 300 L500 150" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="5 5" />
                <path d="M300 300 L450 480" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="5 5" />
                <path d="M300 300 L120 250" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="5 5" />
              </svg>
            </div>
          </div>
        </div>
      </header>

     

      {/* --- MODULE 1: BENCHMARKING (REALISTIC DATA) --- */}
      <section className="py-24 px-6 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1">
               <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-[2.5rem] overflow-hidden shadow-sm">
                  <div className="p-8 border-b border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900">
                     <h4 className="text-sm font-black uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-1">{t('recruiter.rec_bench_subtitle')}</h4>
                     <p className="text-lg font-bold text-slate-900 dark:text-slate-100">{t('recruiter.rec_bench_role')}</p>
                  </div>
                  <div className="p-8 space-y-8">
                     <div className="space-y-4">
                        <div className="flex justify-between items-center">
                           <span className="text-xs font-bold text-slate-600 dark:text-slate-400 uppercase">{t('recruiter.rec_bench_budget')}</span>
                           <span className="text-lg font-black text-slate-900 dark:text-slate-100">{t('recruiter.rec_bench_budget_value')}</span>
                        </div>
                        <div className="h-3 w-full bg-slate-200 rounded-full overflow-hidden">
                           <div className="h-full w-[65%] bg-slate-900"></div>
                        </div>
                     </div>
                     <div className="space-y-4">
                        <div className="flex justify-between items-center">
                           <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase">{t('recruiter.rec_bench_market')}</span>
                           <span className="text-lg font-black text-indigo-600 dark:text-indigo-400">{t('recruiter.rec_bench_market_value')}</span>
                        </div>
                        <div className="h-3 w-full bg-indigo-100 rounded-full overflow-hidden">
                           <div className="h-full w-[85%] bg-indigo-600"></div>
                        </div>
                     </div>
                     <div className="p-6 bg-red-50 dark:bg-red-950 rounded-2xl border border-red-100 dark:border-red-900 flex items-center gap-4">
                        <AlertCircle className="text-red-500 shrink-0" />
                        <p className="text-sm font-bold text-red-700 dark:text-red-400">{t('recruiter.rec_bench_alert')}</p>
                     </div>
                  </div>
               </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="w-16 h-16 bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 rounded-2xl flex items-center justify-center mb-8">
                <BarChart3 size={32} />
              </div>
              <h2 className="text-4xl font-black tracking-tight mb-6 text-slate-950 dark:text-slate-100">{t('recruiter.rec_bench_title')}</h2>
              <p className="text-xl text-slate-500 font-medium leading-relaxed mb-10">
                {t('recruiter.rec_bench_desc')}
              </p>
              <div className="space-y-4">
                 {benchmarkItems.map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                       <CheckCircle2 size={18} className="text-emerald-500" />
                       <span className="font-bold text-slate-700 dark:text-slate-300">{item}</span>
                    </div>
                 ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- MODULE 2: RARE SKILLS (TABLE STYLE) --- */}
      <section className="py-24 px-6 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="w-16 h-16 bg-amber-50 dark:bg-amber-950 text-amber-600 dark:text-amber-400 rounded-2xl flex items-center justify-center mb-8">
                <TrendingUp size={32} />
              </div>
              <h2 className="text-4xl font-black tracking-tight mb-6 text-slate-950 dark:text-slate-100">{t('recruiter.rec_skills_title')}</h2>
              <p className="text-xl text-slate-500 dark:text-slate-400 font-medium leading-relaxed mb-10">
                {t('recruiter.rec_skills_desc')}
              </p>
              <div className="grid grid-cols-2 gap-6">
                 <div className="p-6 bg-white rounded-2xl border border-slate-200">
                    <div className="text-2xl font-black text-slate-900 dark:text-slate-100 mb-1">94%</div>
                    <div className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest">{t('recruiter.rec_skills_scarcity')}</div>
                 </div>
                 <div className="p-6 bg-slate-900 rounded-2xl">
                    <div className="text-2xl font-black text-white mb-1">+18%</div>
                    <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{t('recruiter.rec_skills_bonus')}</div>
                 </div>
              </div>
            </div>
            
            <div>
               <div className="bg-white dark:bg-slate-950 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden">
                  <div className="p-6 border-b border-slate-100 dark:border-slate-700 flex justify-between items-center bg-white dark:bg-slate-950">
                     <span className="font-black text-xs uppercase tracking-widest text-slate-400">{t('recruiter.rec_skills_table_title')}</span>
                     <TrendingUp size={16} className="text-amber-500" />
                  </div>
                  <div className="divide-y divide-slate-100">
                     {skillsList.map((skill, i) => (
                        <div key={i} className="p-6 flex items-center justify-between hover:bg-slate-50 transition-colors">
                           <div>
                              <div className="font-black text-slate-900 dark:text-slate-100">{skill.name}</div>
                              <div className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase">{t('recruiter.rec_skills_scarcity_label')} : {skill.scarcity}</div>
                           </div>
                           <div className="text-right">
                              <div className="text-sm font-black text-emerald-600">{skill.impact}</div>
                              <div className="text-[10px] font-bold text-slate-400 uppercase">{t('recruiter.rec_skills_impact_label')}</div>
                           </div>
                        </div>
                     ))}
                  </div>
                  <div className="p-4 bg-slate-50 text-center">
                     <button className="text-[10px] font-black uppercase text-indigo-600 hover:underline">{t('recruiter.rec_skills_view_all')}</button>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- MODULE 3: ATTRACTIVENESS (DETAILED SCORECARD) --- */}
      <section className="py-24 px-6 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1">
               <div className="bg-slate-900 rounded-[2.5rem] p-10 text-white shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-48 h-48 bg-indigo-500/10 blur-[100px]"></div>
                  <div className="flex items-center gap-4 mb-10">
                     <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-white font-black text-2xl">84</div>
                     <div>
                        <div className="text-xs font-bold text-indigo-400 uppercase">{t('recruiter.rec_attract_score')}</div>
                        <div className="text-xl font-black">{t('recruiter.rec_attract_performance')}</div>
                     </div>
                  </div>
                  <div className="space-y-6">
                     {attractiveCriteria.map((crit, i) => {
                        const isGood = crit.score === '95%' || crit.score === '88%';
                        return (
                        <div key={i} className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                           <span className="text-sm font-medium">{crit.label}</span>
                           <div className="flex items-center gap-4">
                              <span className="text-xs font-black text-indigo-400">{crit.score}</span>
                              <span className={isGood ? 'text-[10px] font-black uppercase px-2 py-0.5 rounded-md bg-emerald-500/20 text-emerald-400' : 'text-[10px] font-black uppercase px-2 py-0.5 rounded-md bg-yellow-500/20 text-yellow-400'}>
                                 {crit.status}
                              </span>
                           </div>
                        </div>
                        );
                     })}
                  </div>
               </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="w-16 h-16 bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 rounded-2xl flex items-center justify-center mb-8">
                <Target size={32} />
              </div>
              <h2 className="text-4xl font-black tracking-tight mb-6 text-slate-950 dark:text-slate-100">{t('recruiter.rec_attract_title')}</h2>
              <p className="text-xl text-slate-500 font-medium leading-relaxed mb-10">
                {t('recruiter.rec_attract_desc')}
              </p>
              <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-700 flex items-start gap-4 mb-8">
                 <Info className="text-indigo-500 shrink-0 mt-1" />
                 <p className="text-sm font-medium text-slate-600 italic">"{t('recruiter.rec_attract_insight')}"</p>
              </div>
              <button onClick={() => navigate('/login')} className="text-indigo-600 font-black uppercase text-xs tracking-widest flex items-center gap-2 hover:gap-4 transition-all">
                 {t('recruiter.rec_attract_cta')} <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>
       {/* Les 4 Piliers Fonctionnels (Cahier des Charges) */}
      <section className="py-24 px-4 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Pilier 4: SQL & Infrastructure */}
            <div className="md:col-span-2 bg-gradient-to-r from-slate-50 to-white dark:from-slate-900 dark:to-slate-950 p-12 rounded-[3.5rem] border border-slate-100 dark:border-slate-700 flex flex-col md:flex-row justify-between items-center gap-12">
               <div className="flex items-center gap-8">
                  <div className="w-20 h-20 bg-white dark:bg-slate-900 shadow-xl rounded-3xl flex items-center justify-center text-slate-900 dark:text-slate-100 border border-slate-100 dark:border-slate-700">
                    <Database size={36} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-slate-900 dark:text-slate-100 mb-2">{t('recruiter.rec_pillar4_title')}</h3>
                    <p className="text-slate-500 dark:text-slate-400 font-medium">{t('recruiter.rec_pillar4_desc')}</p>
                  </div>
               </div>
               <div className="flex gap-4">
                  <div className="flex items-center gap-3 px-6 py-4 bg-white rounded-2xl border border-slate-100 shadow-sm font-black text-xs uppercase tracking-widest text-slate-400">
                    <FileJson size={16} /> JSON/CSV
                  </div>
                  <div className="flex items-center gap-3 px-6 py-4 bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm font-black text-xs uppercase tracking-widest text-slate-900 dark:text-slate-100">
                    <ShieldCheck size={16} className="text-blue-600" /> SQL SECURE
                  </div>
               </div>
            </div>

          </div>
        </div>
      </section>


      {/* CTA Final */}
      <section className="py-32 px-4 bg-white dark:bg-slate-950">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-black text-slate-900 dark:text-slate-100 tracking-tighter mb-10">{t('recruiter.rec_final_title')}</h2>
          <button 
            onClick={() => navigate('/login')} 
            className="bg-slate-900 text-white px-20 py-8 rounded-[2rem] font-black text-2xl hover:bg-blue-600 hover:scale-105 transition-all shadow-2xl dark:shadow-slate-900"
          >
            {t('recruiter.rec_final_cta')}
          </button>
        </div>
      </section>
    </div>
  );
};

export default Recruteur;
