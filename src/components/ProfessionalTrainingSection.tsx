import React from 'react';
import {
  Briefcase,
  TrendingUp
} from 'lucide-react';
import { ThemeMode, TrainingItem } from '../types';

interface ProfessionalTrainingSectionProps {
  theme: ThemeMode;
  trainings: TrainingItem[];
}

export const ProfessionalTrainingSection: React.FC<ProfessionalTrainingSectionProps> = ({
  trainings
}) => {
  return (
    <section id="training" className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase mb-2 border border-emerald-400/60 bg-emerald-50 text-emerald-800 shadow-xs">
            <Briefcase className="w-3.5 h-3.5 text-emerald-600" />
            <span>Professional Growth &amp; Expertise</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-slate-950">
            Professional Training
          </h2>
        </div>

        {/* Professional Training Institution Showcase Banner */}
        {trainings.map((training, idx) => (
          <div
            key={idx}
            id={`training-card-${idx}`}
            className="shape-glow rounded-3xl p-6 sm:p-8 border border-slate-200/90 transition-all duration-300 relative overflow-hidden bg-white shadow-sm hover:shadow-md"
          >
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-emerald-100 border border-emerald-300 text-emerald-800 shadow-xs">
                  <TrendingUp className="w-3.5 h-3.5 text-emerald-700" />
                  <span>Professional Training Program</span>
                </div>

                <h3 className="text-xl sm:text-2xl lg:text-3xl font-black tracking-tight text-slate-950">
                  {training.institute}
                </h3>

                <div className="flex items-center gap-3 flex-wrap">
                  <span className="px-3.5 py-1 rounded-xl text-sm font-extrabold bg-sky-100 text-sky-800 border border-sky-300 shadow-xs">
                    {training.program}
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-slate-700">
                    Role / Status: <strong className="text-slate-950 font-black">{training.role}</strong>
                  </span>
                </div>

                <p className="text-xs sm:text-sm max-w-3xl leading-relaxed text-slate-700 font-medium">
                  Comprehensive practical training curriculum focusing on entrepreneurship, operational workflows, business communication, financial accounting essentials, and modern digital branding strategies.
                </p>
              </div>

              {/* Status Badge Tag */}
              <div className="flex-shrink-0 flex items-center lg:flex-col lg:items-end justify-between border-t lg:border-t-0 pt-4 lg:pt-0 border-slate-200 gap-2">
                <span className="text-xs uppercase font-extrabold tracking-wider text-slate-600">
                  Affiliation
                </span>
                <span className="px-4 py-2 rounded-xl text-sm font-black bg-gradient-to-r from-sky-600 to-indigo-600 text-white shadow-md">
                  As-Sunnah SDI Trainee
                </span>
              </div>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
};
