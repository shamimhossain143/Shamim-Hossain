import React, { useState, useEffect } from 'react';
import { Image as ImageIcon, Maximize2, X, ChevronLeft, ChevronRight, ExternalLink, Sparkles } from 'lucide-react';
import { ThemeMode, GraphicProject } from '../types';

interface GraphicSectionProps {
  theme: ThemeMode;
  graphics: GraphicProject[];
}

export const GraphicSection: React.FC<GraphicSectionProps> = ({ theme, graphics }) => {
  const [selectedGraphicIndex, setSelectedGraphicIndex] = useState<number | null>(null);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedGraphicIndex === null) return;
      if (e.key === 'Escape') {
        setSelectedGraphicIndex(null);
      } else if (e.key === 'ArrowRight') {
        setSelectedGraphicIndex((prev) => (prev !== null ? (prev + 1) % graphics.length : null));
      } else if (e.key === 'ArrowLeft') {
        setSelectedGraphicIndex((prev) => (prev !== null ? (prev - 1 + graphics.length) % graphics.length : null));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedGraphicIndex, graphics.length]);

  const currentGraphic = selectedGraphicIndex !== null ? graphics[selectedGraphicIndex] : null;

  return (
    <section id="graphics" className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase mb-2 border border-sky-400/50 bg-sky-50 text-sky-800 shadow-xs">
              <ImageIcon className="w-3.5 h-3.5 text-sky-600" />
              <span>Visual Arts &amp; Key Art</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-slate-950">
              Graphic &amp; Poster Designs
            </h2>
            <p className="mt-2 text-sm sm:text-base max-w-2xl text-slate-800 font-medium leading-relaxed">
              Eye-catching thumbnails, editorial posters, and digital artwork designed to complement visual productions and captivate audiences.
            </p>
          </div>
          <span className="text-xs font-bold px-3 py-1.5 rounded-full self-start sm:self-auto bg-slate-100 text-slate-700 border border-slate-200">
            Click image to open high-res lightbox
          </span>
        </div>

        {/* Image Cards Grid (4 columns per row on desktop/large screens, 2 on mobile/tablet) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {graphics.map((item, index) => (
            <div
              key={item.id}
              id={`graphic-card-${index + 1}`}
              onClick={() => setSelectedGraphicIndex(index)}
              className="shape-glow group cursor-pointer rounded-2xl border border-slate-200/90 bg-white shadow-xs hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col hover:-translate-y-1"
            >
              {/* Image Container with hover zoom */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100 flex items-center justify-center">
                <img
                  id={`img-${item.filename.replace('.', '-')}`}
                  src={item.filename}
                  alt={`Graphic Design ${index + 1} - ${item.title}`}
                  onError={(e) => {
                    e.currentTarget.src = item.directImageUrl;
                  }}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />

                {/* Hover overlay with zoom icon */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-3">
                  <span className="p-2.5 rounded-full bg-sky-500 text-white shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <Maximize2 className="w-4 h-4" />
                  </span>
                </div>

                <div className="absolute top-2.5 left-2.5">
                  <span className="px-2 py-0.5 rounded-md text-[10px] font-black tracking-wider uppercase bg-white/90 text-sky-800 backdrop-blur-md border border-slate-200 shadow-xs">
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Card Caption */}
              <div className="p-3 sm:p-3.5 flex items-center justify-between">
                <div className="min-w-0 pr-2">
                  <h3 className="font-black text-xs sm:text-sm text-slate-950 group-hover:text-sky-700 transition-colors truncate">
                    {item.title}
                  </h3>
                  <span className="text-[11px] text-slate-600 font-medium block truncate">
                    {item.filename}
                  </span>
                </div>
                <div className="p-1.5 rounded-lg text-slate-500 group-hover:text-slate-950 group-hover:bg-slate-100 transition-colors shrink-0">
                  <Maximize2 className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox / Modal Overlay */}
      {selectedGraphicIndex !== null && currentGraphic && (
        <div
          id="graphic-lightbox-modal"
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-slate-950/90 backdrop-blur-md transition-opacity duration-300 animate-fadeIn"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setSelectedGraphicIndex(null);
            }
          }}
        >
          {/* Close button */}
          <button
            id="lightbox-close-btn"
            type="button"
            onClick={() => setSelectedGraphicIndex(null)}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 z-50 p-2.5 rounded-full bg-slate-800/80 hover:bg-slate-700 text-white transition-colors border border-white/10 cursor-pointer shadow-lg"
            title="Close Lightbox (Esc)"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Previous Button */}
          <button
            id="lightbox-prev-btn"
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedGraphicIndex((selectedGraphicIndex - 1 + graphics.length) % graphics.length);
            }}
            className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-50 p-2.5 rounded-full bg-slate-800/80 hover:bg-slate-700 text-white transition-colors border border-white/10 cursor-pointer shadow-lg"
            title="Previous (Left Arrow)"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Button */}
          <button
            id="lightbox-next-btn"
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedGraphicIndex((selectedGraphicIndex + 1) % graphics.length);
            }}
            className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-50 p-2.5 rounded-full bg-slate-800/80 hover:bg-slate-700 text-white transition-colors border border-white/10 cursor-pointer shadow-lg"
            title="Next (Right Arrow)"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Modal Content Card */}
          <div
            className="relative max-w-4xl w-full max-h-[90vh] flex flex-col rounded-2xl overflow-hidden shadow-2xl border border-white/15 bg-slate-900"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Image Display */}
            <div className="relative w-full max-h-[72vh] flex items-center justify-center bg-black/80 p-2 sm:p-4 overflow-hidden">
              <img
                id="lightbox-full-img"
                src={currentGraphic.filename}
                alt={currentGraphic.title}
                onError={(e) => {
                  e.currentTarget.src = currentGraphic.directImageUrl;
                }}
                className="max-h-[68vh] w-auto max-w-full object-contain rounded-lg shadow-xl"
              />
            </div>

            {/* Modal Footer Info */}
            <div className="p-4 sm:p-6 bg-slate-900 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-slate-100">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-semibold px-2 py-0.5 rounded bg-sky-500/20 text-sky-300 border border-sky-500/30">
                    {currentGraphic.category}
                  </span>
                  <span className="text-xs text-slate-400">
                    {selectedGraphicIndex + 1} of {graphics.length}
                  </span>
                </div>
                <h4 className="text-lg font-bold">{currentGraphic.title}</h4>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href={currentGraphic.postImgUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-medium px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors"
                >
                  <span>PostImg Source</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <button
                  type="button"
                  onClick={() => setSelectedGraphicIndex(null)}
                  className="px-4 py-2 rounded-xl text-xs font-semibold bg-sky-500 hover:bg-sky-400 text-slate-950 transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
