
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, ArrowLeft, Brain, Sparkles, CheckCircle2, ChevronRight, X, Loader2, TrendingUp, DollarSign } from 'lucide-react';

type Step = 1 | 2 | 3;

const CandidateOnboarding: React.FC = () => {
  const [step, setStep] = React.useState<Step>(1);
  const [jobTitle, setJobTitle] = React.useState('');
  const [experience, setExperience] = React.useState('');
  const [region, setRegion] = React.useState('');
  const [skills, setSkills] = React.useState<string[]>([]);
  const [newSkill, setNewSkill] = React.useState('');
  const [isAnalyzing, setIsAnalyzing] = React.useState(false);
  const [analysisStatus, setAnalysisStatus] = React.useState('');
  const [showResult, setShowResult] = React.useState(false);

  const navigate = useNavigate();

  const regions = [
    "Île-de-France (Paris)",
    "Auvergne-Rhône-Alpes",
    "Hauts-de-France",
    "Nouvelle-Aquitaine",
    "Occitanie",
    "Provence-Alpes-Côte d'Azur",
    "Bretagne",
    "Pays de la Loire",
    "Grand Est",
    "Normandie",
    "Bourgogne-Franche-Comté",
    "Centre-Val de Loire"
  ];

  const suggestedSkills = ["React", "TypeScript", "Node.js", "AWS", "Python", "Docker", "SQL", "Tailwind CSS"];

  const handleAddSkill = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (newSkill && !skills.includes(newSkill)) {
      setSkills([...skills, newSkill]);
      setNewSkill('');
    }
  };

  const removeSkill = (skill: string) => {
    setSkills(skills.filter(s => s !== skill));
  };

  const addSuggestedSkill = (skill: string) => {
    if (!skills.includes(skill)) {
      setSkills([...skills, skill]);
    }
  };

  const runAnalysis = async () => {
    setIsAnalyzing(true);
    const statuses = [
      "Connecting to market APIs...",
      "Analyzing 15,248 job offers for your profile...",
      "Normalizing salary benchmarks...",
      "Calculating median percentiles for " + region + "...",
      "Cross-referencing " + skills.length + " skills against market demand...",
      "Finalizing AI prediction model..."
    ];

    for (const status of statuses) {
      setAnalysisStatus(status);
      await new Promise(resolve => setTimeout(resolve, 800));
    }

    setIsAnalyzing(false);
    setShowResult(true);
  };

  const nextStep = () => {
    if (step < 3) setStep((step + 1) as Step);
  };

  const prevStep = () => {
    if (step > 1) setStep((step - 1) as Step);
  };

  return (
    <div className="min-h-[calc(100vh-64px)] bg-slate-50 dark:bg-slate-900 flex flex-col items-center py-12 px-4">
      {/* Progress Bar */}
      <div className="max-w-2xl w-full mb-12">
        <div className="flex justify-between text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-4 px-2">
          <span>Profile</span>
          <span>Expertise</span>
          <span>Analysis</span>
        </div>
        <div className="h-2 w-full bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
          <motion.div 
            initial={{ width: '33.33%' }}
            animate={{ width: `${(step / 3) * 100}%` }}
            className="h-full bg-blue-600 dark:bg-blue-500"
          />
        </div>
        <p className="text-center mt-4 text-sm font-semibold text-slate-500 dark:text-slate-400">Step {step} of 3</p>
      </div>

      <div className="max-w-2xl w-full">
        <AnimatePresence mode="wait">
          {!isAnalyzing && !showResult && (
            <motion.div
              key={`step-${step}`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="bg-white dark:bg-slate-950 p-8 md:p-12 rounded-[2.5rem] shadow-xl shadow-slate-200/50 dark:shadow-slate-900/50 border border-slate-100 dark:border-slate-800"
            >
              {step === 1 && (
                <div className="space-y-8">
                  <div>
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-2">Tell us about your role.</h2>
                    <p className="text-slate-500 dark:text-slate-400">We use this to anchor your profile against global market data.</p>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Target Job Title</label>
                      <input 
                        type="text"
                        value={jobTitle}
                        onChange={(e) => setJobTitle(e.target.value)}
                        placeholder="e.g. Senior Fullstack Engineer"
                        className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all text-lg font-medium"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Years of Experience</label>
                        <select 
                          value={experience}
                          onChange={(e) => setExperience(e.target.value)}
                          className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all text-lg font-medium appearance-none"
                        >
                          <option value="">Select range</option>
                          <option value="0-2">0 - 2 years (Junior)</option>
                          <option value="2-5">2 - 5 years (Intermediate)</option>
                          <option value="5-10">5 - 10 years (Senior)</option>
                          <option value="10+">10+ years (Expert/Lead)</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Target Region</label>
                        <select 
                          value={region}
                          onChange={(e) => setRegion(e.target.value)}
                          className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all text-lg font-medium appearance-none"
                        >
                          <option value="">Select region</option>
                          {regions.map(r => <option key={r} value={r}>{r}</option>)}
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-8">
                  <div>
                    <h2 className="text-3xl font-bold text-slate-900 mb-2">Refine your stack.</h2>
                    <p className="text-slate-500">Skills are your biggest salary multipliers. Add at least 3.</p>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Technical Skills</label>
                      <form onSubmit={handleAddSkill} className="relative">
                        <input 
                          type="text"
                          value={newSkill}
                          onChange={(e) => setNewSkill(e.target.value)}
                          placeholder="Type a skill and press Enter"
                          className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all text-lg font-medium"
                        />
                        <button 
                          type="button"
                          onClick={() => handleAddSkill()}
                          className="absolute right-3 top-1/2 -translate-y-1/2 bg-blue-600 text-white p-2 rounded-xl hover:bg-blue-700 transition-colors"
                        >
                          <ArrowRight size={20} />
                        </button>
                      </form>
                    </div>

                    <div>
                      <p className="text-sm font-bold text-slate-400 mb-3 uppercase tracking-wide">Your Profile Stack</p>
                      <div className="flex flex-wrap gap-2 min-h-[50px]">
                        {skills.length === 0 && <p className="text-slate-300 italic">No skills added yet...</p>}
                        {skills.map(skill => (
                          <motion.span 
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            key={skill} 
                            className="bg-blue-50 text-blue-600 px-4 py-2 rounded-xl text-sm font-bold flex items-center group border border-blue-100"
                          >
                            {skill}
                            <button onClick={() => removeSkill(skill)} className="ml-2 hover:text-blue-800 transition-colors">
                              <X size={14} />
                            </button>
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <p className="text-sm font-bold text-slate-400 mb-3 uppercase tracking-wide">Suggestions</p>
                      <div className="flex flex-wrap gap-2">
                        {suggestedSkills.filter(s => !skills.includes(s)).map(skill => (
                          <button 
                            key={skill} 
                            onClick={() => addSuggestedSkill(skill)}
                            className="px-4 py-2 bg-slate-100 text-slate-600 rounded-xl text-sm font-medium hover:bg-slate-200 transition-colors"
                          >
                            + {skill}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-8 text-center">
                  <div className="flex justify-center mb-6">
                    <div className="w-20 h-20 bg-blue-50 text-blue-600 rounded-[2rem] flex items-center justify-center animate-bounce">
                      <Brain size={40} />
                    </div>
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-slate-900 mb-2">Ready to analyze.</h2>
                    <p className="text-slate-500 max-w-sm mx-auto">We've gathered enough info to build a custom market projection for your profile.</p>
                  </div>
                  
                  <div className="bg-slate-50 rounded-[2rem] p-8 border border-slate-100 text-left">
                    <div className="space-y-4">
                      <div className="flex items-center text-slate-600">
                        <CheckCircle2 size={18} className="text-blue-600 mr-3 shrink-0" />
                        <span className="font-medium">{jobTitle} with {experience} yrs exp</span>
                      </div>
                      <div className="flex items-center text-slate-600">
                        <CheckCircle2 size={18} className="text-blue-600 mr-3 shrink-0" />
                        <span className="font-medium">Targeting {region}</span>
                      </div>
                      <div className="flex items-center text-slate-600">
                        <CheckCircle2 size={18} className="text-blue-600 mr-3 shrink-0" />
                        <span className="font-medium">{skills.length} verified technical skills</span>
                      </div>
                    </div>
                  </div>

                  <button 
                    onClick={runAnalysis}
                    className="w-full bg-blue-600 text-white py-6 rounded-[2rem] font-bold text-xl hover:bg-blue-700 transition-all shadow-xl dark:shadow-blue-950 flex items-center justify-center group"
                  >
                    Launch PrediSalaire AI <Sparkles size={24} className="ml-3 group-hover:rotate-12 transition-transform" />
                  </button>
                </div>
              )}

              {/* Navigation Controls */}
              {step < 3 && (
                <div className="flex items-center justify-between mt-12 pt-8 border-t border-slate-100">
                  <button 
                    disabled={step === 1}
                    onClick={prevStep}
                    className="flex items-center text-slate-400 font-bold hover:text-slate-900 transition-colors disabled:opacity-30"
                  >
                    <ArrowLeft size={20} className="mr-2" /> Back
                  </button>
                  <button 
                    disabled={step === 1 ? (!jobTitle || !experience || !region) : skills.length < 2}
                    onClick={nextStep}
                    className="bg-slate-900 text-white px-10 py-4 rounded-2xl font-bold hover:bg-slate-800 transition-all disabled:opacity-30 disabled:cursor-not-allowed flex items-center"
                  >
                    Next <ChevronRight size={20} className="ml-2" />
                  </button>
                </div>
              )}
            </motion.div>
          )}

          {isAnalyzing && (
            <motion.div
              key="analyzing"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white p-12 rounded-[2.5rem] shadow-xl text-center space-y-8"
            >
              <div className="relative flex justify-center">
                <Loader2 className="text-blue-600 animate-spin" size={80} />
                <Brain className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-blue-600" size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Neural Engine is running...</h3>
                <p className="text-blue-600 font-medium h-6 animate-pulse">{analysisStatus}</p>
              </div>
            </motion.div>
          )}

          {showResult && (
            <motion.div
              key="result"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white p-8 md:p-12 rounded-[3rem] shadow-2xl border border-blue-50 overflow-hidden relative"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
              
              <div className="relative z-10 text-center space-y-10">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-50 text-green-700 font-bold text-xs uppercase tracking-widest border border-green-100">
                  Analysis Complete
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-slate-500">Predicted Market Value</h2>
                  <div className="text-5xl md:text-7xl font-extrabold text-blue-600 tracking-tighter">
                    48 500 € – 56 200 €
                  </div>
                  <p className="text-slate-400 font-medium">Gross Annual Salary (Fixed + Variable)</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <ResultStat icon={<TrendingUp size={20} />} label="Confidence Score" value="94.2%" />
                  <ResultStat icon={<DollarSign size={20} />} label="Regional Median" value="51.8k€" />
                  <ResultStat icon={<CheckCircle2 size={20} />} label="Sample Size" value="1.2k+" />
                </div>

                <div className="pt-6 flex flex-col sm:flex-row gap-4">
                  <button 
                    onClick={() => navigate('/')}
                    className="flex-1 bg-blue-600 text-white py-5 rounded-2xl font-bold text-lg hover:bg-blue-700 transition-all shadow-xl dark:shadow-blue-950"
                  >
                    View Matching Offers
                  </button>
                  <button 
                    onClick={() => { setShowResult(false); setStep(1); }}
                    className="flex-1 bg-slate-50 text-slate-600 py-5 rounded-2xl font-bold text-lg hover:bg-slate-100 transition-all border border-slate-200"
                  >
                    Refine Profile
                  </button>
                </div>
                
                <p className="text-slate-400 text-sm italic">
                  *This estimation is based on real-time market data as of March 2024 and does not constitute a legal offer.
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

const ResultStat: React.FC<{ icon: React.ReactNode, label: string, value: string }> = ({ icon, label, value }) => (
  <div className="bg-slate-50 p-6 rounded-[2rem] border border-slate-100">
    <div className="text-blue-600 mb-2 flex justify-center">{icon}</div>
    <div className="text-xs font-bold text-slate-400 uppercase mb-1">{label}</div>
    <div className="text-xl font-bold text-slate-900">{value}</div>
  </div>
);

export default CandidateOnboarding;
