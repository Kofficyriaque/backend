
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Users, Brain, TrendingUp, Briefcase, Target, Quote, Globe, Layers } from 'lucide-react';

const About: React.FC = () => {
  const { t, i18n } = useTranslation();
  const ns = i18n.language === 'fr' ? 'apropos' : 'about';

  // --- HERO SECTION ---
  const presHeroTitle = t(`${ns}.pres_hero_title`);
  const presIntroP1 = t(`${ns}.pres_intro_p1`);
  const presMiddleIntro = t(`${ns}.pres_middle_intro`);

  // --- AUDIENCE SECTION ---
  const presAudienceTitle = t(`${ns}.pres_audience_title`);
  const presCandidateFull = t(`${ns}.pres_candidate_full`);
  const presRecruiterFull = t(`${ns}.pres_recruiter_full`);

  // --- VISION SECTION ---
  const presVisionP1 = t(`${ns}.pres_vision_p1`);
  const presVisionP2 = t(`${ns}.pres_vision_p2`);
  const presVisionP3 = t(`${ns}.pres_vision_p3`);

  return (
    <div className="bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 animate-in fade-in duration-1000 transition-colors">
      
      {/* --- PAGE DE GARDE (HERO) --- */}
      <section className="relative min-h-[90vh] flex items-center pt-20 px-6 overflow-hidden bg-slate-50 dark:bg-slate-900 transition-colors">
        {/* Subtle decorative elements */}
        <div className="absolute top-0 left-0 w-1/2 h-full bg-blue-50/30 dark:bg-blue-950/30 -skew-x-12 translate-x-1/4 pointer-events-none hidden lg:block transition-colors"></div>
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-indigo-100 dark:bg-indigo-950/50 rounded-full blur-[120px] opacity-60"></div>
        
        <div className="max-w-7xl mx-auto relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-8">

              
              <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.85] mb-12 text-slate-950 dark:text-slate-100 transition-colors" dangerouslySetInnerHTML={{ __html: presHeroTitle }}>
              </h1>
              
              <div className="max-w-2xl">
                <p className="text-2xl md:text-3xl text-slate-900 dark:text-slate-200 font-light leading-tight mb-8 transition-colors">
                  {presIntroP1}
                </p>
                <div className="w-16 h-1 bg-blue-600 dark:bg-blue-500 rounded-full"></div>
              </div>
            </div>
            
            <div className="lg:col-span-4 hidden lg:flex flex-col items-end gap-12">
               <div className="p-8 bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-2xl border border-slate-100 dark:border-slate-800 rotate-3 hover:rotate-0 transition-transform duration-500">
                  <Brain size={64} className="text-blue-600 dark:text-blue-400 mb-6" />
                  <div className="text-xs font-black uppercase tracking-widest text-slate-400 mb-2">Technologie</div>
                  <div className="text-lg font-bold text-slate-900 dark:text-white">IA & Machine Learning</div>
               </div>
               <div className="p-8 bg-slate-900 dark:bg-blue-600 text-white rounded-[2.5rem] shadow-2xl -rotate-3 hover:rotate-0 transition-transform duration-500 mr-12">
                  <Globe size={64} className="text-blue-400 dark:text-blue-100 mb-6" />
                  <div className="text-xs font-black uppercase tracking-widest text-slate-500 dark:text-blue-100 mb-2">Marché</div>
                  <div className="text-lg font-bold">Vision Globale RH</div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- PARAGRAPH INTRODUCTION (CONTEXTE) - STRUCTURÉ --- */}
      <section className="py-32 px-6 bg-white dark:bg-slate-950 border-b border-slate-100 dark:border-slate-800 transition-colors">
        <div className="max-w-4xl mx-auto text-center relative">
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 text-blue-600/10 dark:text-blue-500/10">
            <Layers size={120} />
          </div>
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 leading-relaxed font-light italic relative z-10 transition-colors">
            "{presMiddleIntro}"
          </p>
        </div>
      </section>

      {/* --- SECTION DES PUBLICS (CONTENU RICHE) --- */}
      <section className="py-40 px-6 bg-white dark:bg-slate-950 border-y border-slate-100 dark:border-slate-800 transition-colors">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-32">
             <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-slate-950 dark:text-slate-100 mb-8 transition-colors">{presAudienceTitle}</h2>
             <div className="w-24 h-2 bg-blue-600 dark:bg-blue-500 mx-auto rounded-full"></div>
          </div>

          <div className="space-y-40">
            {/* Candidates Detail */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
              <div className="lg:col-span-7">
                <div className="flex items-center gap-6 mb-10">
                  <div className="w-20 h-20 bg-blue-50 dark:bg-blue-950/30 text-blue-600 dark:text-blue-400 rounded-3xl flex items-center justify-center shadow-inner transition-colors">
                    <Users size={40} />
                  </div>
                  <h3 className="text-4xl font-black tracking-tight text-slate-950 dark:text-slate-100 italic transition-colors">Pour les Chercheurs d'Emploi</h3>
                </div>
                <p className="text-2xl text-slate-600 dark:text-slate-300 font-medium leading-relaxed italic border-l-4 border-blue-600 dark:border-blue-500 pl-10 py-4 transition-colors">
                  {presCandidateFull}
                </p>
              </div>
              <div className="lg:col-span-5 bg-slate-50 dark:bg-slate-900 p-12 rounded-[3.5rem] border border-slate-100 dark:border-slate-800 relative overflow-hidden group transition-colors">
                 <div className="relative z-10">
                    <TrendingUp size={48} className="text-blue-600 dark:text-blue-400 mb-8 group-hover:scale-125 transition-transform" />
                    <h4 className="text-xl font-black dark:text-slate-100 mb-4">Aide à la décision</h4>
                    <p className="text-slate-500 dark:text-slate-400 font-medium">Identifier les compétences à forte valeur ajoutée et prendre des décisions éclairées pour son évolution.</p>
                 </div>
                 <div className="absolute top-0 right-0 p-10 opacity-[0.05] dark:opacity-[0.1] group-hover:opacity-10 dark:group-hover:opacity-20 transition-opacity">
                    <Target size={180} />
                 </div>
              </div>
            </div>

            {/* Recruiters Detail */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
              <div className="lg:col-span-5 order-2 lg:order-1 bg-slate-950 dark:bg-slate-800 p-12 rounded-[3.5rem] text-white shadow-2xl relative overflow-hidden group transition-colors">
                <div className="relative z-10">
                  <Briefcase size={48} className="text-blue-400 dark:text-blue-300 mb-8 group-hover:scale-125 transition-transform" />
                  <h4 className="text-xl font-black dark:text-slate-100 mb-4">Optimisation Stratégique</h4>
                  <p className="text-slate-400 dark:text-slate-300 font-medium">Une vision globale des tendances pour améliorer l'attractivité des offres et optimiser les coûts de recrutement.</p>
                </div>
                <div className="absolute bottom-0 right-0 p-10 opacity-10 dark:opacity-5">
                   <Briefcase size={180} />
                </div>
              </div>
              <div className="lg:col-span-7 order-1 lg:order-2">
                <div className="flex items-center gap-6 mb-10 justify-end lg:text-right">
                  <h3 className="text-4xl font-black tracking-tight text-slate-950 dark:text-slate-100 italic transition-colors">Pour les Recruteurs & RH</h3>
                  <div className="w-20 h-20 bg-slate-950 dark:bg-slate-800 text-white rounded-3xl flex items-center justify-center shadow-xl transition-colors">
                    <Briefcase size={40} />
                  </div>
                </div>
                <p className="text-2xl text-slate-600 dark:text-slate-300 font-medium leading-relaxed text-right italic border-r-4 border-slate-950 dark:border-slate-700 pr-10 py-4 transition-colors">
                  {presRecruiterFull}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION VISION & IA (MANIFESTE) --- */}
      <section className="py-40 px-6 bg-slate-50 dark:bg-slate-900 overflow-hidden transition-colors">
        <div className="max-w-4xl mx-auto text-center">
           <div className="inline-flex items-center gap-3 mb-16 text-blue-600 dark:text-blue-400">
              <Quote size={40} fill="currentColor" className="opacity-20 dark:opacity-30" />
           </div>
           
           <div className="space-y-12">
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-slate-950 dark:text-slate-100 leading-tight transition-colors">
                {presVisionP1}
              </h2>
              <div className="h-px w-20 bg-slate-300 dark:bg-slate-700 mx-auto"></div>
              <p className="text-xl text-slate-500 dark:text-slate-400 font-medium leading-relaxed transition-colors">
                {presVisionP2}
              </p>
              <p className="text-xl text-slate-500 dark:text-slate-400 font-medium leading-relaxed transition-colors">
                {presVisionP3}
              </p>
           </div>
        </div>
      </section>



    </div>
  );
};

export default About;
