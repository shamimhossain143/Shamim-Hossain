/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { ThemeMode } from './types';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { VideoGrid } from './components/VideoGrid';
import { GraphicSection } from './components/GraphicSection';
import { SoftwareToolsSection } from './components/SoftwareToolsSection';
import { ProfessionalTrainingSection } from './components/ProfessionalTrainingSection';
import { ContactSection } from './components/ContactSection';
import {
  FEATURED_VIDEO,
  PORTFOLIO_VIDEOS,
  GRAPHIC_PROJECTS,
  PROFESSIONAL_TRAINING,
  SOFTWARE_TOOLS_DATA
} from './data/portfolioData';

export default function App() {
  // Website is permanently locked to Light mode per user specification
  const theme: ThemeMode = 'light';

  useEffect(() => {
    localStorage.setItem('portfolio_theme', 'light');
    document.documentElement.classList.add('light');
    document.documentElement.classList.remove('dark');
  }, []);

  return (
    <div
      id="portfolio-root"
      className="min-h-screen transition-colors duration-300 antialiased selection:bg-sky-500 selection:text-slate-950 font-sans bg-slate-50 text-slate-900"
      style={{
        backgroundColor: '#f8fafc',
        color: '#0f172a'
      }}
    >
      {/* Background ambient lighting accents */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div
          className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full blur-[140px] opacity-15"
          style={{
            backgroundColor: '#38bdf8'
          }}
        />
        <div
          className="absolute top-[40%] -right-40 w-[600px] h-[500px] rounded-full blur-[160px] opacity-10"
          style={{
            backgroundColor: '#0ea5e9'
          }}
        />
      </div>

      {/* Main Content wrapper */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Navigation Bar */}
        <Navbar theme={theme} />

        <main className="flex-1">
          {/* Hero Section with Profile & Featured Video Showreel */}
          <HeroSection theme={theme} featuredVideo={FEATURED_VIDEO} />

          {/* Video Portfolio Grid (4 videos in a single row) */}
          <VideoGrid theme={theme} videos={PORTFOLIO_VIDEOS} />

          {/* Graphic Work Section */}
          <GraphicSection theme={theme} graphics={GRAPHIC_PROJECTS} />

          {/* Software & Tools Section */}
          <SoftwareToolsSection theme={theme} softwareCategories={SOFTWARE_TOOLS_DATA} />

          {/* Professional Training Program */}
          <ProfessionalTrainingSection
            theme={theme}
            trainings={PROFESSIONAL_TRAINING}
          />

          {/* Get in Touch Section */}
          <ContactSection theme={theme} />
        </main>
      </div>
    </div>
  );
}
