import React, { useState, useEffect } from 'react';
import { Mail, Menu, X, Sun, Moon } from 'lucide-react';
import { ThemeMode } from '../types';
import { USER_INFO } from '../data/portfolioData';

interface NavbarProps {
  theme?: ThemeMode;
  onToggleTheme?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ theme = 'light', onToggleTheme }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('featured');
  const [isScrolled, setIsScrolled] = useState(false);

  const isDark = theme === 'dark';

  const navLinks = [
    { id: 'nav-link-featured', href: '#featured', sectionId: 'featured', label: 'Featured' },
    { id: 'nav-link-videos', href: '#videos', sectionId: 'videos', label: 'Videos' },
    { id: 'nav-link-graphics', href: '#graphics', sectionId: 'graphics', label: 'Graphics' },
    { id: 'nav-link-software-tools', href: '#software-tools', sectionId: 'software-tools', label: 'Software & Tools' },
    { id: 'nav-link-training', href: '#training', sectionId: 'training', label: 'Professional Training' },
    { id: 'nav-link-contact', href: '#contact', sectionId: 'contact', label: 'Contact' }
  ];

  // Active section tracking on scroll & elevation effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const scrollPosition = window.scrollY + 120;
      for (const link of [...navLinks].reverse()) {
        const el = document.getElementById(link.sectionId);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(link.sectionId);
            return;
          }
        }
      }
      setActiveSection('featured');
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      id="main-navigation"
      className={`sticky top-0 z-50 backdrop-blur-xl transition-all duration-300 ${
        isScrolled
          ? isDark
            ? 'bg-slate-950/95 border-b border-slate-800 shadow-[0_4px_24px_rgba(0,0,0,0.5)]'
            : 'bg-white/95 border-b border-slate-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.06)]'
          : isDark
          ? 'bg-slate-950/80 border-b border-slate-800/60 shadow-xs'
          : 'bg-white/90 border-b border-slate-200/60 shadow-xs'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
        
        {/* Left Side: Brand Name & Title */}
        <div className="flex items-center gap-2.5 sm:gap-3.5 shrink-0">
          <a
            id="nav-brand"
            href="#featured"
            className="flex items-center gap-2 sm:gap-3 group focus:outline-none shrink-0"
          >
            {/* Elegant Stylish Name Logo: Shamim (Blue), Hossain (Dynamic Black in Light, White in Dark) */}
            <div className="flex items-center">
              <span className="text-base sm:text-lg font-black tracking-tight select-none">
                <span className={isDark ? 'text-sky-400' : 'text-sky-600'}>Shamim</span>{' '}
                <span className={`transition-colors duration-200 ${isDark ? 'text-white' : 'text-black'}`}>
                  Hossain
                </span>
              </span>
            </div>

            {/* Glowing Professional Title Badge - Two Lines */}
            <div className="relative group/titlebadge shrink-0 hidden sm:block">
              <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-sky-500 via-cyan-400 to-indigo-500 opacity-25 blur-xs group-hover/titlebadge:opacity-60 group-hover:blur-sm transition-all duration-300 pointer-events-none" />

              <div className={`relative flex flex-col justify-center px-3 py-1 sm:py-1.5 rounded-xl border transition-all duration-300 backdrop-blur-md shrink-0 shadow-[0_0_14px_rgba(14,165,233,0.18)] ${
                isDark
                  ? 'border-sky-500/40 bg-slate-900/90 group-hover:border-sky-400'
                  : 'border-sky-300 bg-white/95 group-hover:border-sky-400'
              }`}>
                <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-wider text-sky-500 dark:text-sky-400 leading-tight whitespace-nowrap">
                  VIDEO EDITING &amp;
                </span>
                <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-wider text-sky-600 dark:text-cyan-300 leading-tight whitespace-nowrap">
                  GRAPHIC DESIGNER
                </span>
              </div>
            </div>
          </a>
        </div>

        {/* Desktop Navigation Links */}
        <nav
          aria-label="Main Navigation"
          className={`hidden lg:flex items-center p-1.5 rounded-full border shadow-2xs backdrop-blur-md gap-0.5 ${
            isDark
              ? 'bg-slate-900/90 border-slate-800'
              : 'bg-slate-100/90 border-slate-200/90'
          }`}
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.sectionId;
            return (
              <a
                key={link.id}
                id={link.id}
                href={link.href}
                className={`relative px-3.5 py-1 rounded-full text-xs font-bold whitespace-nowrap transition-all duration-200 ${
                  isActive
                    ? isDark
                      ? 'bg-sky-600 text-white shadow-xs font-black'
                      : 'bg-white text-sky-700 shadow-xs border border-slate-200/80 font-black'
                    : isDark
                    ? 'text-slate-300 hover:text-white hover:bg-slate-800/70'
                    : 'text-slate-700 hover:text-slate-950 hover:bg-white/60'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Right Side Actions: WhatsApp, Hire Me, and Small Circular Brightness/Dark Mode Toggle */}
        <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
          {/* WhatsApp Button */}
          <a
            id="nav-whatsapp-btn"
            href="https://wa.me/8801620572429"
            target="_blank"
            rel="noopener noreferrer"
            className={`group relative hidden sm:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold transition-all duration-300 backdrop-blur-md border shadow-xs hover:-translate-y-0.5 active:translate-y-0 ${
              isDark
                ? 'border-emerald-500/50 bg-emerald-950/40 text-emerald-400 hover:bg-emerald-900/50 hover:border-emerald-400'
                : 'border-emerald-400/60 bg-emerald-50 text-emerald-700 hover:text-emerald-800 hover:bg-emerald-100 hover:border-emerald-500'
            }`}
            title="Chat on WhatsApp"
            aria-label="Chat on WhatsApp"
          >
            <svg
              viewBox="0 0 24 24"
              className="w-4 h-4 fill-current transition-transform duration-300 group-hover:scale-110 shrink-0"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.04 14.69 2 12.04 2ZM12.04 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.16 12.04 20.16C10.66 20.16 9.3 19.8 8.1 19.09L7.81 18.92L4.7 19.74L5.53 16.71L5.34 16.41C4.55 15.15 4.13 13.56 4.13 11.92C4.13 7.38 7.83 3.67 12.04 3.67ZM8.53 7.33C8.36 7.33 8.08 7.4 7.84 7.65C7.61 7.91 6.94 8.54 6.94 9.83C6.94 11.12 7.88 12.36 8.01 12.53C8.14 12.71 9.84 15.34 12.45 16.46C13.07 16.73 13.55 16.89 13.93 17.01C14.55 17.21 15.11 17.18 15.56 17.11C16.06 17.04 17.09 16.49 17.3 15.89C17.52 15.29 17.52 14.78 17.45 14.67C17.39 14.56 17.22 14.5 16.96 14.37C16.7 14.24 15.44 13.62 15.21 13.54C14.98 13.45 14.81 13.41 14.64 13.67C14.47 13.92 13.99 14.5 13.85 14.67C13.7 14.84 13.56 14.86 13.3 14.73C13.04 14.6 11.96 14.25 10.68 13.11C9.69 12.22 9.01 11.13 8.82 10.8C8.63 10.48 8.8 10.3 8.93 10.17C9.05 10.05 9.19 9.86 9.32 9.71C9.45 9.56 9.5 9.45 9.58 9.28C9.67 9.11 9.63 8.96 9.56 8.83C9.5 8.7 9.01 7.49 8.8 7.01C8.61 6.53 8.41 6.6 8.26 6.59C8.11 6.58 7.94 6.58 7.77 6.58L8.53 7.33Z" />
            </svg>
            <span className="font-bold tracking-wide">WhatsApp</span>
          </a>

          {/* Quick email CTA button */}
          <a
            id="nav-hire-btn"
            href={`mailto:${USER_INFO.email}?subject=Video%20Editing%20Project%20Inquiry`}
            className={`hidden sm:inline-flex items-center gap-1.5 text-xs font-bold px-4 py-2 rounded-full transition-all shadow-xs whitespace-nowrap shrink-0 hover:scale-[1.02] ${
              isDark
                ? 'bg-sky-600 hover:bg-sky-500 text-white shadow-[0_0_15px_rgba(14,165,233,0.3)]'
                : 'bg-slate-900 hover:bg-slate-800 text-white'
            }`}
          >
            <Mail className="w-3.5 h-3.5 shrink-0" />
            <span className="whitespace-nowrap">Hire Me</span>
          </a>

          {/* Compact Circular Brightness / Dark Mode Toggle on the Far Right */}
          <button
            id="nav-theme-toggle-btn"
            type="button"
            onClick={onToggleTheme}
            aria-label={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            className={`relative group w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center border transition-all duration-300 cursor-pointer shadow-xs shrink-0 ${
              isDark
                ? 'bg-slate-900 border-sky-500/40 text-sky-400 hover:bg-slate-800 hover:border-sky-400 hover:shadow-[0_0_14px_rgba(56,189,248,0.4)]'
                : 'bg-white border-slate-300 text-amber-500 hover:bg-amber-50/60 hover:border-amber-400 hover:shadow-[0_0_14px_rgba(245,158,11,0.3)]'
            }`}
          >
            {/* Subtle soft ambient aura on hover */}
            <div
              className={`absolute inset-0 rounded-full transition-opacity duration-300 opacity-0 group-hover:opacity-100 blur-xs pointer-events-none ${
                isDark ? 'bg-sky-400/20' : 'bg-amber-400/20'
              }`}
            />
            {isDark ? (
              <Moon className="w-4 h-4 text-sky-300 fill-sky-400/20 transition-transform duration-300 group-hover:-rotate-12 group-hover:scale-110 drop-shadow-[0_0_6px_rgba(56,189,248,0.8)]" />
            ) : (
              <Sun className="w-4 h-4 text-amber-500 fill-amber-400/30 transition-transform duration-300 group-hover:rotate-45 group-hover:scale-110 drop-shadow-[0_0_6px_rgba(245,158,11,0.8)]" />
            )}
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            id="mobile-menu-toggle-btn"
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
            className={`lg:hidden p-2 rounded-xl border transition-colors cursor-pointer ${
              isDark
                ? 'border-slate-800 bg-slate-900 text-slate-200 hover:text-white'
                : 'border-slate-300 bg-slate-100 text-slate-800 hover:text-slate-950'
            }`}
            title="Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Dropdown */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-dropdown"
          className={`lg:hidden border-b px-4 py-3 space-y-1 transition-all ${
            isDark
              ? 'border-slate-800 bg-slate-950 text-slate-200'
              : 'border-slate-200 bg-white/98 text-slate-800'
          }`}
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.sectionId;
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-3.5 py-2 rounded-xl text-sm font-bold transition-colors ${
                  isActive
                    ? isDark
                      ? 'bg-sky-950 text-sky-400 border border-sky-800'
                      : 'bg-sky-50 text-sky-700 border border-sky-200'
                    : isDark
                    ? 'text-slate-300 hover:bg-slate-900 hover:text-white'
                    : 'text-slate-700 hover:bg-slate-100 hover:text-slate-950'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </div>
      )}
    </header>
  );
};
