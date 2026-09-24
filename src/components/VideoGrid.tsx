import React, { useState } from 'react';
import { Film, ExternalLink, Tag } from 'lucide-react';
import { ThemeMode, VideoProject } from '../types';

interface VideoGridProps {
  theme: ThemeMode;
  videos: VideoProject[];
}

export const VideoGrid: React.FC<VideoGridProps> = ({ videos }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Motion Design', 'Cinematic Camera', 'Motion & Animation', 'Logo Animation'];

  const filteredVideos = activeCategory === 'All'
    ? videos
    : videos.filter(v => v.category.toLowerCase().includes(activeCategory.toLowerCase()));

  return (
    <section id="videos" className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase mb-2 border border-sky-400/50 bg-sky-50 text-sky-800 shadow-xs">
              <Film className="w-3.5 h-3.5 text-sky-600" />
              <span>Editing Portfolio</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-slate-950">
              Selected Video Editing Works
            </h2>
            <p className="mt-2 text-sm sm:text-base max-w-2xl text-slate-800 font-medium leading-relaxed">
              A curated collection of After Effects animations, smooth camera moves, null object motion, and branded logo animations crafted with meticulous precision.
            </p>
          </div>

          {/* Quick Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`text-xs px-3 py-1 rounded-xl font-bold transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-sky-600 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-700 hover:text-slate-950 hover:bg-slate-200 border border-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 4 Videos In One Single Row Grid (4 Columns on desktop/tablet, horizontal scroll/compact grid on mobile) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {filteredVideos.map((video) => (
            <div
              key={video.id}
              id={`video-card-${video.id}`}
              className="shape-glow rounded-2xl border border-slate-200/90 bg-white shadow-xs hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col group hover:-translate-y-1"
            >
              {/* Responsive Compact Video Player Wrapper (16:9) */}
              <div className="relative w-full aspect-video bg-black overflow-hidden">
                <iframe
                  id={`iframe-${video.id}`}
                  className="w-full h-full object-cover"
                  src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}?rel=0&modestbranding=1`}
                  title={video.title}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>

              {/* Card Meta & Compact Details */}
              <div className="p-3.5 sm:p-4 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-1.5 mb-1.5">
                    <span className="text-[10px] sm:text-xs font-black px-2 py-0.5 rounded-full border border-sky-300 bg-sky-50 text-sky-800">
                      {video.category}
                    </span>
                    <a
                      href={`https://www.youtube.com/watch?v=${video.youtubeId}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] font-bold flex items-center gap-1 text-sky-700 hover:text-sky-900 hover:underline shrink-0"
                      title="Watch on YouTube"
                    >
                      <span>Watch</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>

                  <h3 className="text-sm font-black tracking-tight mb-1.5 text-slate-950 group-hover:text-sky-700 transition-colors line-clamp-2 leading-snug">
                    {video.title}
                  </h3>

                  <p className="text-[11px] sm:text-xs leading-relaxed mb-3 text-slate-700 font-medium line-clamp-2">
                    {video.description}
                  </p>
                </div>

                {/* Tags row */}
                <div className="pt-2 border-t border-slate-100 flex flex-wrap items-center gap-1">
                  <Tag className="w-3 h-3 text-slate-400 shrink-0" />
                  {video.tags.slice(0, 3).map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[10px] px-1.5 py-0.5 rounded font-mono font-bold bg-slate-100 text-slate-700 border border-slate-200"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
