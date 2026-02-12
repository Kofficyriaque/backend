import React, { useState } from 'react';

type FAQItemProps = {
  question: string;
  answer: React.ReactNode;
};

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden text-left transition-colors">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-slate-50 dark:hover:bg-slate-900 transition"
      >
        <span className="text-lg font-semibold text-slate-900 dark:text-white pr-8">{question}</span>
        <div className={`shrink-0 transition-transform text-slate-900 dark:text-slate-400 ${isOpen ? 'rotate-45' : ''}`}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
        </div>
      </button>
      {isOpen && (
        <div className="px-8 pb-6 text-slate-600 dark:text-slate-400 leading-relaxed text-left">
          {answer}
        </div>
      )}
    </div>
  );
};

export default FAQItem;
