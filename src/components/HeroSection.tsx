import React from 'react';
import { Mail, Sparkles, Play } from 'lucide-react';
import { ThemeMode, VideoProject } from '../types';
import { USER_INFO } from '../data/portfolioData';

interface HeroSectionProps {
  theme: ThemeMode;
  featuredVideo?: VideoProject;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ featuredVideo }) => {
  return (
    <section id="featured" className="pt-6 pb-10 sm:pt-10 sm:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
        
        {/* Profile Card & Bio Introduction Banner */}
        <div 
          id="hero-profile-card"
          className="rounded-3xl p-6 sm:p-10 border transition-all duration-300 relative overflow-hidden bg-white border-slate-200/90 shadow-sm"
        >
          {/* Subtle decorative background gradient */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-sky-500/5 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col md:flex-row items-center md:items-start gap-6 sm:gap-8 relative z-10">
            
            {/* Real User Photo with Glowing Border */}
            <div className="relative group shrink-0">
              <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-r from-sky-500 via-indigo-500 to-cyan-400 opacity-30 blur-md group-hover:opacity-75 transition-all duration-500" />
              <div className="relative w-44 h-44 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-white/80 shadow-2xl bg-slate-100 ring-2 ring-sky-500/30">
                <img
                  id="hero-profile-image"
                  src={USER_INFO.profileImage}
                  onError={(e) => {
                    e.currentTarget.src = USER_INFO.fallbackProfileImage;
                  }}
                  alt={USER_INFO.name}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  loading="eager"
                />
              </div>
            </div>

            {/* Profile Info, Greeting & Creative Title */}
            <div className="flex-1 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase mb-3 border border-sky-400/50 bg-sky-50 text-sky-800 shadow-2xs">
                <Sparkles className="w-3.5 h-3.5 text-sky-600" />
                <span>Available for Projects &amp; Collaborations</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-3 text-slate-950">
                Hi, I'm <span className="text-sky-600 bg-clip-text text-transparent bg-gradient-to-r from-sky-500 to-sky-700">Shamim Hossain</span>
              </h1>

              {/* Ultra-Professional Creative Title Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-gradient-to-r from-slate-900 via-sky-950 to-slate-900 text-white shadow-md border border-sky-500/20 mb-5">
                <span className="w-2 h-2 rounded-full bg-sky-400 shadow-[0_0_10px_#38bdf8] animate-pulse" />
                <span className="text-sm sm:text-base font-extrabold tracking-wider uppercase bg-clip-text text-transparent bg-gradient-to-r from-white via-sky-100 to-sky-300">
                  Video Editor &amp; Graphic Designer
                </span>
                <span className="hidden sm:inline-block text-[11px] font-bold px-2 py-0.5 rounded-md bg-sky-500/20 text-sky-300 border border-sky-400/30 uppercase tracking-widest">
                  PRO
                </span>
              </div>

              {/* Skill highlights pills */}
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 mb-6">
                {['Dynamic Editing', 'Motion Graphics', 'Color Grading', 'Sound Design', 'Visual Storytelling'].map((skill, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-3 py-1.5 rounded-lg font-bold border transition-colors bg-slate-100 border-slate-200 text-slate-800 hover:border-sky-500/40 hover:text-sky-700"
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
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm transition-all shadow-sm hover:scale-[1.02] bg-slate-900 hover:bg-slate-800 text-white"
                >
                  <Mail className="w-4 h-4" />
                  <span>Get in Touch</span>
                </a>

                <a
                  id="hero-browse-work-btn"
                  href="#videos"
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-sm font-bold transition-all group border border-slate-200 bg-white hover:bg-slate-50 text-slate-800 hover:text-sky-700"
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
            className="shape-glow rounded-3xl p-6 sm:p-8 border border-slate-200/90 bg-white shadow-sm overflow-hidden"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase mb-2 border border-sky-400/50 bg-sky-50 text-sky-800 shadow-2xs">
                  <Play className="w-3.5 h-3.5 text-sky-600 fill-sky-600" />
                  <span>{featuredVideo.category}</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-slate-950">
                  {featuredVideo.title}
                </h2>
                <p className="mt-1 text-sm text-slate-700 font-medium">
                  {featuredVideo.description}
                </p>
              </div>

              <div className="flex items-center gap-2 flex-wrap">
                {featuredVideo.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-xs px-2.5 py-1 rounded-lg font-mono font-bold bg-slate-100 text-slate-800 border border-slate-200"
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
