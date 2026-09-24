import React from 'react';
import { Mail, Sparkles, Play } from 'lucide-react';
import { ThemeMode, VideoProject } from '../types';
import { USER_INFO } from '../data/portfolioData';

interface HeroSectionProps {
  theme: ThemeMode;
  featuredVideo?: VideoProject;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ theme, featuredVideo }) => {
  const isDark = theme === 'dark';

  return (
    <section id="featured" className="pt-6 pb-10 sm:pt-10 sm:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
        
        {/* Profile Card & Bio Introduction Banner */}
        <div 
          id="hero-profile-card"
          className={`rounded-3xl px-6 pt-6 sm:px-10 sm:pt-10 pb-0 border transition-all duration-300 relative overflow-hidden shadow-sm ${
            isDark
              ? 'bg-slate-900/90 border-slate-800/90 text-white'
              : 'bg-white border-slate-200/90 text-slate-900'
          }`}
        >
          {/* Subtle decorative background gradient */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-10 relative z-10">
            
            {/* Clean Cutout Photo grounded seamlessly on the bottom edge of the card shape with soft bounce hover effect */}
            <div className="relative shrink-0 flex items-end justify-center self-end w-full sm:w-auto group/photo cursor-pointer">
              <div className="relative w-52 sm:w-64 md:w-72 lg:w-84 xl:w-92 flex items-end justify-center -mb-px">
                <img
                  id="hero-profile-image"
                  src={USER_INFO.profileImage}
                  onError={(e) => {
                    e.currentTarget.src = USER_INFO.fallbackProfileImage;
                  }}
                  alt={USER_INFO.name}
                  className="w-full h-auto max-h-[340px] sm:max-h-[380px] md:max-h-[420px] lg:max-h-[450px] object-contain object-bottom select-none drop-shadow-xl block transition-all duration-500 ease-out origin-bottom transform group-hover/photo:scale-105 group-hover/photo:-translate-y-2 group-hover/photo:drop-shadow-[0_20px_25px_rgba(56,189,248,0.25)]"
                  loading="eager"
                />
              </div>
            </div>

            {/* Profile Info, Greeting & Creative Title - Vertically Centered */}
            <div className="flex-1 text-center md:text-left py-6 sm:py-8 my-auto flex flex-col justify-center">
              <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase mb-3 border shadow-2xs self-center md:self-start ${
                isDark
                  ? 'border-sky-500/30 bg-sky-950/50 text-sky-400'
                  : 'border-sky-400/50 bg-sky-50 text-sky-800'
              }`}>
                <Sparkles className="w-3.5 h-3.5 text-sky-500" />
                <span>Available for Projects &amp; Collaborations</span>
              </div>

              <h1 className={`text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-3 uppercase ${
                isDark ? 'text-white' : 'text-slate-950'
              }`}>
                Hi, I'm <span className="text-sky-500 bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-sky-600">SHAMIM HOSSAIN</span>
              </h1>

              {/* Ultra-Professional Creative Title Badge with Subtle Ambient Glow */}
              <div className="relative inline-flex group mb-5">
                {/* Soft ambient colored glow behind badge */}
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-sky-500/40 via-cyan-400/30 to-blue-600/40 blur-md opacity-75 group-hover:opacity-100 transition duration-500 group-hover:blur-lg" />
                
                {/* Inner badge container with crisp borders, glassy highlights, and glow shadow */}
                <div className="relative inline-flex items-center gap-2.5 px-4.5 py-2.5 rounded-2xl bg-gradient-to-r from-slate-950 via-slate-900 to-sky-950 text-white shadow-[0_0_20px_rgba(56,189,248,0.25)] border border-sky-400/40 ring-1 ring-sky-300/20 backdrop-blur-sm">
                  {/* Glowing Pulse Dot */}
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-sky-400 shadow-[0_0_8px_#38bdf8]" />
                  </span>

                  {/* Gradient Headline Text */}
                  <span className="text-sm sm:text-base font-extrabold tracking-wider uppercase bg-clip-text text-transparent bg-gradient-to-r from-white via-sky-100 to-sky-300 drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                    Video Editor &amp; Graphic Designer
                  </span>

                  {/* PRO Pill with Neon Glow Accent */}
                  <span className="inline-block text-[11px] font-black px-2.5 py-0.5 rounded-lg bg-gradient-to-r from-sky-500/25 to-blue-500/25 text-sky-300 border border-sky-400/40 uppercase tracking-widest shadow-[0_0_12px_rgba(56,189,248,0.35)]">
                    PRO
                  </span>
                </div>
              </div>

              {/* Skill highlights pills */}
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 mb-6">
                {['Dynamic Editing', 'Motion Graphics', 'Color Grading', 'Sound Design', 'Visual Storytelling'].map((skill, idx) => (
                  <span
                    key={idx}
                    className={`text-xs px-3 py-1.5 rounded-lg font-bold border transition-colors ${
                      isDark
                        ? 'bg-slate-800/80 border-slate-700 text-slate-200 hover:border-sky-500/50 hover:text-sky-400'
                        : 'bg-slate-100 border-slate-200 text-slate-800 hover:border-sky-500/40 hover:text-sky-700'
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Action CTAs */}
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
                <a
                  id="hero-contact-cta"
                  href="#contact"
                  className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm transition-all shadow-sm hover:scale-[1.02] ${
                    isDark
                      ? 'bg-sky-600 hover:bg-sky-500 text-white shadow-[0_0_15px_rgba(14,165,233,0.3)]'
                      : 'bg-slate-900 hover:bg-slate-800 text-white'
                  }`}
                >
                  <Mail className="w-4 h-4" />
                  <span>Get in Touch</span>
                </a>

                <a
                  id="hero-browse-work-btn"
                  href="#videos"
                  className={`inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-sm font-bold transition-all group border ${
                    isDark
                      ? 'border-slate-700 bg-slate-800/90 text-slate-200 hover:bg-slate-700 hover:text-sky-400'
                      : 'border-slate-200 bg-white hover:bg-slate-50 text-slate-800 hover:text-sky-700'
                  }`}
                >
                  <span>Browse Videos</span>
                  <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Featured Showcase Video (Cinematic Editing Showreel & Visual Narrative) */}
        {featuredVideo && (
          <div
            id="featured-showreel-container"
            className={`shape-glow rounded-3xl p-6 sm:p-8 border shadow-sm overflow-hidden ${
              isDark
                ? 'bg-slate-900/90 border-slate-800/90'
                : 'bg-white border-slate-200/90'
            }`}
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
              <div>
                <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase mb-2 border shadow-2xs ${
                  isDark
                    ? 'border-sky-500/30 bg-sky-950/50 text-sky-400'
                    : 'border-sky-400/50 bg-sky-50 text-sky-800'
                }`}>
                  <Play className="w-3.5 h-3.5 text-sky-500 fill-sky-500" />
                  <span>{featuredVideo.category}</span>
                </div>
                <h2 className={`text-2xl sm:text-3xl font-black tracking-tight ${
                  isDark ? 'text-white' : 'text-slate-950'
                }`}>
                  {featuredVideo.title}
                </h2>
                {featuredVideo.description && (
                  <p className={`mt-1 text-sm font-medium ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                    {featuredVideo.description}
                  </p>
                )}
              </div>

              <div className="flex items-center gap-2 flex-wrap">
                {featuredVideo.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className={`text-xs px-2.5 py-1 rounded-lg font-mono font-bold border ${
                      isDark
                        ? 'bg-slate-800 text-slate-300 border-slate-700'
                        : 'bg-slate-100 text-slate-800 border-slate-200'
                    }`}
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* 16:9 Video Player */}
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-black shadow-inner">
              <iframe
                id="hero-featured-iframe"
                className="w-full h-full object-cover"
                src={`https://www.youtube-nocookie.com/embed/${featuredVideo.youtubeId}?rel=0&modestbranding=1`}
                title={featuredVideo.title}
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
