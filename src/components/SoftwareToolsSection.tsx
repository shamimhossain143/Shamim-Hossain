import React from 'react';
import {
  Wrench,
  Film,
  Palette,
  Briefcase,
  Sparkles,
  Sliders,
  CheckCircle2,
  ExternalLink,
  Laptop
} from 'lucide-react';
import { ThemeMode, SoftwareCategoryGroup } from '../types';
import { SoftwareLogo } from './SoftwareLogo';

interface SoftwareToolsSectionProps {
  theme: ThemeMode;
  softwareCategories: SoftwareCategoryGroup[];
}

export const SoftwareToolsSection: React.FC<SoftwareToolsSectionProps> = ({
  theme,
  softwareCategories
}) => {
  // Category badge & accent styling
  const getCategoryConfig = (category: string) => {
    switch (category) {
      case 'Video Editing':
        return {
          icon: <Film className="w-4 h-4 text-purple-700" />,
          badgeClass: 'bg-purple-50 text-purple-900 border-purple-300 font-bold',
          accentGradient: 'from-purple-500/20 via-indigo-500/5 to-transparent',
          topBorder: 'border-t-purple-600'
        };
      case 'Graphic Design':
        return {
          icon: <Palette className="w-4 h-4 text-sky-700" />,
          badgeClass: 'bg-sky-50 text-sky-900 border-sky-300 font-bold',
          accentGradient: 'from-sky-500/20 via-blue-500/5 to-transparent',
          topBorder: 'border-t-sky-600'
        };
      case 'Productivity & Office':
        return {
          icon: <Briefcase className="w-4 h-4 text-emerald-700" />,
          badgeClass: 'bg-emerald-50 text-emerald-900 border-emerald-300 font-bold',
          accentGradient: 'from-emerald-500/20 via-teal-500/5 to-transparent',
          topBorder: 'border-t-emerald-600'
        };
      case 'AI & Creative Tools':
        return {
          icon: <Sparkles className="w-4 h-4 text-fuchsia-700" />,
          badgeClass: 'bg-fuchsia-50 text-fuchsia-900 border-fuchsia-300 font-bold',
          accentGradient: 'from-fuchsia-500/20 via-pink-500/5 to-transparent',
          topBorder: 'border-t-fuchsia-600'
        };
      default:
        return {
          icon: <Laptop className="w-4 h-4 text-sky-700" />,
          badgeClass: 'bg-sky-50 text-sky-900 border-sky-300 font-bold',
          accentGradient: 'from-sky-500/20 to-transparent',
          topBorder: 'border-t-sky-600'
        };
    }
  };

  return (
    <section id="software-tools" className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase mb-2 border border-sky-400/50 bg-sky-50 text-sky-800 whitespace-nowrap shadow-xs">
            <Wrench className="w-3.5 h-3.5 text-sky-600" />
            <span>Tech Stack &amp; Workflow</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-slate-950">
            Software &amp; Tools
          </h2>
          <p className="mt-2 text-sm sm:text-base max-w-2xl text-slate-800 font-medium leading-relaxed">
            Industry-standard digital applications and modern creative suites powering video post-production, visual graphics, office management, and AI workflows.
          </p>
        </div>

        {/* 4 Software Category Groups */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {softwareCategories.map((group, idx) => {
            const config = getCategoryConfig(group.category);
            return (
              <div
                key={idx}
                id={`software-group-${idx}`}
                className={`shape-glow rounded-3xl p-6 sm:p-7 border border-slate-200/90 relative overflow-hidden flex flex-col justify-between transition-all duration-300 ${config.topBorder} border-t-4 bg-white shadow-sm hover:shadow-md`}
              >
                <div>
                  {/* Category Title & Badge */}
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-xl bg-slate-100 border border-slate-200 shadow-xs">
                        {config.icon}
                      </div>
                      <h3 className="text-lg sm:text-xl font-extrabold tracking-tight text-slate-950">
                        {group.category}
                      </h3>
                    </div>

                    <span className={`text-[11px] font-extrabold px-3 py-1 rounded-full border uppercase tracking-wider ${config.badgeClass} shadow-xs`}>
                      {group.tools.length} Tools
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm mb-5 leading-relaxed text-slate-700 font-medium">
                    {group.description}
                  </p>

                  {/* Software Cards List */}
                  <div className="space-y-3 mb-4">
                    {group.tools.map((tool) => (
                      <div
                        key={tool.id}
                        id={`tool-${tool.id}`}
                        className="p-3.5 sm:p-4 rounded-2xl border border-slate-200/90 bg-slate-50/80 hover:bg-white hover:border-sky-400/80 transition-all duration-200 flex items-center justify-between gap-4 group/tool hover:scale-[1.01] hover:shadow-sm"
                      >
                        {/* Logo + Software Name + Description */}
                        <div className="flex items-center gap-3.5 min-w-0">
                          <SoftwareLogo
                            type={tool.logoType}
                            size={44}
                            className="group-hover/tool:scale-110 transition-transform duration-300"
                          />

                          <div className="min-w-0">
                            <div className="flex items-center gap-2 flex-wrap">
                              <h4 className="text-sm sm:text-base font-black tracking-tight text-slate-950">
                                {tool.name}
                              </h4>
                              {tool.level && (
                                <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-md bg-slate-200/90 text-slate-900 border border-slate-300">
                                  {tool.level}
                                </span>
                              )}
                            </div>
                            <p className="text-xs sm:text-sm mt-0.5 text-slate-700 font-semibold truncate max-w-sm sm:max-w-md">
                              {tool.description}
                            </p>
                          </div>
                        </div>

                        {/* Verified Check Badge */}
                        <div className="flex-shrink-0">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 opacity-90 group-hover/tool:opacity-100 transition-opacity" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Micro-note */}
                <div className="pt-3 border-t border-slate-200 text-xs flex items-center justify-between gap-2 text-slate-700 font-semibold">
                  <span className="flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-sky-600" />
                    <span>Hands-on professional proficiency</span>
                  </span>
                  <span className="font-extrabold text-sky-700 uppercase tracking-wider text-[11px]">
                    Verified Stack
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
