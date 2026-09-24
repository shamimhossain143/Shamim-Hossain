import React, { useState, useRef, useEffect } from 'react';
import { Film, ExternalLink, Tag, Maximize2, Play, X, ChevronLeft, ChevronRight, Volume2 } from 'lucide-react';
import { ThemeMode, VideoProject } from '../types';

interface VideoGridProps {
  theme: ThemeMode;
  videos: VideoProject[];
}

export const VideoGrid: React.FC<VideoGridProps> = ({ videos }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [fullscreenVideo, setFullscreenVideo] = useState<VideoProject | null>(null);
  const [carouselIndex, setCarouselIndex] = useState<number>(0);
  const carouselTrackRef = useRef<HTMLDivElement>(null);

  const categories = ['All', 'Motion Design', 'Cinematic Camera', 'Motion & Animation', 'Logo Animation'];

  const filteredVideos = activeCategory === 'All'
    ? videos
    : videos.filter(v => v.category.toLowerCase().includes(activeCategory.toLowerCase()));

  // Reset carousel index when category changes
  useEffect(() => {
    setCarouselIndex(0);
  }, [activeCategory]);

  // Handle ESC key to exit modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setFullscreenVideo(null);
      }
      if (fullscreenVideo) {
        const currentIndex = filteredVideos.findIndex(v => v.id === fullscreenVideo.id);
        if (e.key === 'ArrowRight' && currentIndex < filteredVideos.length - 1) {
          setFullscreenVideo(filteredVideos[currentIndex + 1]);
        } else if (e.key === 'ArrowLeft' && currentIndex > 0) {
          setFullscreenVideo(filteredVideos[currentIndex - 1]);
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [fullscreenVideo, filteredVideos]);

  const handlePrev = () => {
    setCarouselIndex(prev => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCarouselIndex(prev => Math.min(filteredVideos.length - 1, prev + 1));
  };

  const openFullscreen = (video: VideoProject) => {
    setFullscreenVideo(video);
  };

  return (
    <section id="videos" className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading & Category Filter */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase mb-2 border border-sky-400/50 bg-sky-50 text-sky-800 shadow-xs">
              <Film className="w-3.5 h-3.5 text-sky-600" />
              <span>Editing Portfolio</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-slate-950">
              Selected Video Editing Works
            </h2>
          </div>

          {/* Controls: Filter Pills and Carousel Nav */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
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

            {/* Carousel navigation buttons */}
            <div className="hidden sm:flex items-center gap-1.5 ml-auto">
              <button
                type="button"
                onClick={handlePrev}
                disabled={carouselIndex === 0}
                aria-label="Previous videos"
                className="p-2 rounded-xl border border-slate-200 bg-white hover:bg-slate-100 disabled:opacity-30 disabled:cursor-not-allowed transition-all text-slate-800 shadow-2xs cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                disabled={carouselIndex >= filteredVideos.length - 1}
                aria-label="Next videos"
                className="p-2 rounded-xl border border-slate-200 bg-white hover:bg-slate-100 disabled:opacity-30 disabled:cursor-not-allowed transition-all text-slate-800 shadow-2xs cursor-pointer"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Video Cards Grid & Carousel View */}
        <div className="relative">
          <div
            ref={carouselTrackRef}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5"
          >
            {filteredVideos.map((video, idx) => (
              <div
                key={video.id}
                id={`video-card-${video.id}`}
                onClick={() => openFullscreen(video)}
                className="shape-glow rounded-2xl border border-slate-200/90 bg-white shadow-xs hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col group hover:-translate-y-1.5 cursor-pointer relative"
              >
                {/* Responsive Compact Video Player Wrapper (16:9) */}
                <div className="relative w-full aspect-video bg-slate-950 overflow-hidden group">
                  {/* High Quality Video Poster / Thumbnail */}
                  <img
                    src={`https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`}
                    alt={video.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                    loading="lazy"
                  />

                  {/* Shimmer gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

                  {/* Pulsing Central Play Button with Fullscreen Cue */}
                  <div className="absolute inset-0 flex items-center justify-center p-4">
                    <div className="w-12 h-12 rounded-full bg-red-600/90 group-hover:bg-red-600 text-white flex items-center justify-center shadow-lg transform transition-transform duration-300 group-hover:scale-115 ring-4 ring-white/30">
                      <Play className="w-5 h-5 fill-white translate-x-0.5" />
                    </div>
                  </div>

                  {/* Top-Right Fullscreen Badge */}
                  <div className="absolute top-2.5 right-2.5">
                    <span className="inline-flex items-center gap-1 px-2 py-1 rounded-lg text-[10px] font-black uppercase tracking-wider bg-black/75 text-white backdrop-blur-md border border-white/20 shadow-xs group-hover:bg-sky-600 transition-colors">
                      <Maximize2 className="w-3 h-3" />
                      <span>Click to Fullscreen</span>
                    </span>
                  </div>

                  {/* Category Pill on Image */}
                  <div className="absolute bottom-2.5 left-2.5">
                    <span className="text-[10px] font-black px-2 py-0.5 rounded-md border border-white/20 bg-black/70 text-white backdrop-blur-sm">
                      {video.category}
                    </span>
                  </div>
                </div>

                {/* Card Meta & Compact Details */}
                <div className="p-3.5 sm:p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-sm font-black tracking-tight mb-1.5 text-slate-950 group-hover:text-sky-700 transition-colors line-clamp-2 leading-snug">
                      {video.title}
                    </h3>

                    <p className="text-[11px] sm:text-xs leading-relaxed mb-3 text-slate-700 font-medium line-clamp-2">
                      {video.description}
                    </p>
                  </div>

                  {/* Action Link & Tags row */}
                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between gap-1">
                    <div className="flex flex-wrap items-center gap-1">
                      <Tag className="w-3 h-3 text-slate-400 shrink-0" />
                      {video.tags.slice(0, 2).map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[10px] px-1.5 py-0.5 rounded font-mono font-bold bg-slate-100 text-slate-700 border border-slate-200"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>

                    <a
                      href={`https://www.youtube.com/watch?v=${video.youtubeId}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="text-[11px] font-bold flex items-center gap-1 text-sky-700 hover:text-sky-900 hover:underline shrink-0"
                      title="Open on YouTube in new tab"
                    >
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Automatic Fullscreen Video Modal Lightbox */}
      {fullscreenVideo && (
        <div
          id="fullscreen-video-modal"
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-8 bg-slate-950/95 backdrop-blur-xl animate-fadeIn"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setFullscreenVideo(null);
            }
          }}
        >
          {/* Top Bar Controls */}
          <div className="absolute top-3 left-3 sm:top-5 sm:left-6 right-3 sm:right-6 flex items-center justify-between z-50 pointer-events-auto">
            <div className="flex items-center gap-2 max-w-[70%] truncate">
              <span className="px-2.5 py-1 rounded-md text-xs font-black uppercase tracking-wider bg-sky-500/20 text-sky-400 border border-sky-400/30">
                {fullscreenVideo.category}
              </span>
              <span className="text-xs sm:text-sm font-bold text-white/90 truncate hidden sm:inline">
                {fullscreenVideo.title}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <a
                href={`https://www.youtube.com/watch?v=${fullscreenVideo.youtubeId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 sm:p-2.5 rounded-full bg-slate-800/90 hover:bg-slate-700 text-white transition-colors border border-white/10 shadow-lg cursor-pointer"
                title="Open on YouTube"
              >
                <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <button
                type="button"
                onClick={() => setFullscreenVideo(null)}
                className="p-2 sm:p-2.5 rounded-full bg-red-600/90 hover:bg-red-500 text-white transition-colors border border-white/10 shadow-lg cursor-pointer"
                title="Close Fullscreen (Esc)"
              >
                <X className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>
          </div>

          {/* Main Fullscreen Video Container */}
          <div className="w-full max-w-5xl aspect-video rounded-2xl overflow-hidden bg-black shadow-2xl border border-white/10 relative">
            <iframe
              id="fullscreen-video-player"
              className="w-full h-full object-cover"
              src={`https://www.youtube-nocookie.com/embed/${fullscreenVideo.youtubeId}?autoplay=1&rel=0&modestbranding=1&fs=1`}
              title={fullscreenVideo.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
              allowFullScreen
            />
          </div>

          {/* Navigation Previous/Next inside Fullscreen */}
          {(() => {
            const currentIndex = filteredVideos.findIndex(v => v.id === fullscreenVideo.id);
            return (
              <>
                {currentIndex > 0 && (
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setFullscreenVideo(filteredVideos[currentIndex - 1]);
                    }}
                    className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 p-2 sm:p-3 rounded-full bg-slate-900/80 hover:bg-sky-600 text-white transition-all border border-white/10 cursor-pointer shadow-xl hidden md:flex items-center justify-center"
                    title="Previous Video (Left Arrow)"
                  >
                    <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                  </button>
                )}
                {currentIndex < filteredVideos.length - 1 && (
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setFullscreenVideo(filteredVideos[currentIndex + 1]);
                    }}
                    className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-2 sm:p-3 rounded-full bg-slate-900/80 hover:bg-sky-600 text-white transition-all border border-white/10 cursor-pointer shadow-xl hidden md:flex items-center justify-center"
                    title="Next Video (Right Arrow)"
                  >
                    <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                  </button>
                )}
              </>
            );
          })()}
        </div>
      )}
    </section>
  );
};
