import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { BrainCircuit, BarChart4, Map, Database, ShieldCheck, TrendingUp, Users, FileJson,ArrowRight,Target} from 'lucide-react';
import { FeatureVisual} from '../components/FeatureVisual';

const Recruteur: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <div className="bg-slate-50 min-h-screen animate-in fade-in duration-700">
      {/* Header - Vision Stratégique */}
      <header className="relative pt-32 pb-24 px-4 overflow-hidden bg-white border-b border-slate-100">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-50/30 skew-x-12 translate-x-1/4 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto relative z-10 text-center md:text-left flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1">
            
            <h1 className="text-5xl md:text-8xl font-black text-slate-900 tracking-tighter mb-8 leading-[0.9]">
              {t('recruiter.rec_hero_title')}
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl font-medium mb-12 italic leading-relaxed">
              {t('recruiter.rec_hero_subtitle')}
            </p>
            <button 
              onClick={() => navigate('/login')} 
              className="bg-blue-600 text-white px-12 py-6 rounded-2xl font-black text-lg uppercase tracking-widest shadow-2xl shadow-blue-200 hover:-translate-y-1 transition-all active:scale-95 flex items-center gap-4"
            >
              {t('recruiter.start_now')} <ArrowRight />
            </button>
          </div>
          <div className="flex-1 w-full max-w-xl">
            <div className="relative bg-white rounded-[3rem] p-8 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] border border-slate-100">
               <FeatureVisual type="salarial" color="blue" />
            </div>
          </div>
        </div>
      </header>

      {/* Les 4 Piliers Fonctionnels (Cahier des Charges) */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Pilier 1: IA & Machine Learning */}
            <div className="bg-white p-12 rounded-[3.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all group">
              <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-10 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <BrainCircuit size={32} />
              </div>
              <h3 className="text-3xl font-black text-slate-900 mb-6 tracking-tight">{t('recruiter.rec_pillar1_title')}</h3>
              <p className="text-slate-500 font-medium leading-relaxed mb-10">{t('recruiter.rec_pillar1_desc')}</p>
              <ul className="space-y-4">
                <li className="flex items-center gap-4 text-sm font-bold text-slate-700">
                  <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-[10px] text-blue-600"><i className="fas fa-check"></i></div>
                  {t('recruiter.rec_pillar1_feature')}
                </li>
                <li className="flex items-center gap-4 text-sm font-bold text-slate-700">
                  <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-[10px] text-blue-600"><i className="fas fa-check"></i></div>
                  Modèle prédictif entraîné sur 1M+ données
                </li>
              </ul>
            </div>

            {/* Pilier 2: Benchmarking & Attractivité */}
            <div className="bg-slate-900 p-12 rounded-[3.5rem] text-white shadow-2xl hover:scale-[1.02] transition-all group">
              <div className="w-16 h-16 bg-white/10 text-blue-400 rounded-2xl flex items-center justify-center mb-10 group-hover:bg-blue-400 group-hover:text-white transition-colors">
                <Target size={32} />
              </div>
              <h3 className="text-3xl font-black mb-6 tracking-tight">{t('recruiter.rec_pillar2_title')}</h3>
              <p className="text-slate-300 font-medium leading-relaxed mb-10">{t('recruiter.rec_pillar2_desc')}</p>
              <div className="p-6 bg-white/5 rounded-3xl border border-white/10">
                 <div className="flex justify-between items-center mb-4">
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">{t('recruiter.rec_pillar2_feature')}</span>
                    <span className="text-2xl font-black text-blue-400">84%</span>
                 </div>
                 <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full w-[84%] bg-blue-400"></div>
                 </div>
              </div>
            </div>

            {/* Pilier 3: Tableaux de Bord (Dashboards) */}
            <div className="md:col-span-2 bg-white p-12 rounded-[3.5rem] border border-slate-100 shadow-sm">
               <div className="flex flex-col md:flex-row gap-16 items-center">
                  <div className="flex-1">
                    <div className="w-16 h-16 bg-cyan-50 text-cyan-600 rounded-2xl flex items-center justify-center mb-10">
                      <BarChart4 size={32} />
                    </div>
                    <h3 className="text-4xl font-black text-slate-900 mb-6 tracking-tight">{t('recruiter.rec_pillar3_title')}</h3>
                    <p className="text-slate-500 font-medium leading-relaxed mb-12">{t('recruiter.rec_pillar3_desc')}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                       <div className="space-y-3">
                          <Map className="text-blue-500" size={20} />
                          <div className="text-[11px] font-black uppercase tracking-tighter text-slate-400">{t('recruiter.rec_pillar3_map')}</div>
                       </div>
                       <div className="space-y-3">
                          <TrendingUp className="text-emerald-500" size={20} />
                          <div className="text-[11px] font-black uppercase tracking-tighter text-slate-400">{t('recruiter.rec_pillar3_skills')}</div>
                       </div>
                       <div className="space-y-3">
                          <Users className="text-indigo-500" size={20} />
                          <div className="text-[11px] font-black uppercase tracking-tighter text-slate-400">{t('recruiter.rec_pillar3_compare')}</div>
                       </div>
                    </div>
                  </div>
                  <div className="flex-1 w-full bg-slate-50 rounded-[2.5rem] p-10 border border-slate-100">
                     <div className="h-64 flex items-end gap-3">
                        {[40, 70, 45, 90, 65, 85, 50, 75].map((h, i) => (
                          <div key={i} style={{ height: `${h}%` }} className="flex-1 bg-blue-200/50 rounded-t-xl hover:bg-blue-600 transition-all"></div>
                        ))}
                     </div>
                  </div>
               </div>
            </div>

            {/* Pilier 4: SQL & Infrastructure */}
            <div className="md:col-span-2 bg-gradient-to-r from-slate-50 to-white p-12 rounded-[3.5rem] border border-slate-100 flex flex-col md:flex-row justify-between items-center gap-12">
               <div className="flex items-center gap-8">
                  <div className="w-20 h-20 bg-white shadow-xl rounded-3xl flex items-center justify-center text-slate-900 border border-slate-100">
                    <Database size={36} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-slate-900 mb-2">{t('recruiter.rec_pillar4_title')}</h3>
                    <p className="text-slate-500 font-medium">{t('recruiter.rec_pillar4_desc')}</p>
                  </div>
               </div>
               <div className="flex gap-4">
                  <div className="flex items-center gap-3 px-6 py-4 bg-white rounded-2xl border border-slate-100 shadow-sm font-black text-xs uppercase tracking-widest text-slate-400">
                    <FileJson size={16} /> JSON/CSV
                  </div>
                  <div className="flex items-center gap-3 px-6 py-4 bg-white rounded-2xl border border-slate-100 shadow-sm font-black text-xs uppercase tracking-widest text-slate-900">
                    <ShieldCheck size={16} className="text-blue-600" /> SQL SECURE
                  </div>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-32 px-4 bg-white border-t border-slate-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-black text-slate-900 tracking-tighter mb-10">Prenez l'avantage sur le marché de l'emploi.</h2>
          <button 
            onClick={() => navigate('/login')} 
            className="bg-slate-900 text-white px-20 py-8 rounded-[2rem] font-black text-2xl hover:bg-blue-600 hover:scale-105 transition-all shadow-2xl shadow-slate-200"
          >
            Lancer un Audit maintenant
          </button>
        </div>
      </section>
    </div>
  );
};

export default Recruteur;
