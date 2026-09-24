import React, { useState } from 'react';
import { Mail, MessageCircle, Send, Check, Copy, ExternalLink, Sparkles, Phone, ArrowUp, MapPin, Navigation } from 'lucide-react';
import { ThemeMode } from '../types';
import { USER_INFO } from '../data/portfolioData';

interface ContactSectionProps {
  theme: ThemeMode;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ theme }) => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Showreel & Video Edit',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(USER_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`[Editing Inquiry] ${formData.projectType} - from ${formData.name || 'Client'}`);
    const body = encodeURIComponent(
      `Hi Shamim,\n\nMy name is ${formData.name} (${formData.email}).\nProject Type: ${formData.projectType}\n\nMessage:\n${formData.message}\n\nLooking forward to hearing from you!`
    );
    window.location.href = `mailto:${USER_INFO.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="contact" className="py-12 sm:py-20 border-t"
      style={{
        borderColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase mb-2 border border-sky-400/50 bg-sky-50 text-sky-800 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-sky-600" />
            <span>Ready to Collaborate?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-950">
            Let's Bring Your Footage to Life
          </h2>
          <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-800 font-medium">
            Have a project in mind, a YouTube video needing rhythm, or a trailer that requires cinematic impact? Reach out and let's get started.
          </p>
        </div>

        {/* Contact Layout: Action Buttons Card & Quick Message Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          
          {/* Left Column: Direct Action Buttons & Channels */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Direct Channels</h3>

              {/* Email Action Card */}
              <div
                className="shape-glow p-5 rounded-2xl border border-slate-200/90 transition-all flex items-center justify-between bg-white shadow-sm hover:shadow-md"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-200 text-sky-600 flex items-center justify-center shadow-xs">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-600 block font-bold">Direct Email</span>
                    <span className="text-sm font-black text-slate-950 break-all">
                      {USER_INFO.email}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 shrink-0">
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg border border-slate-200 bg-slate-100 text-slate-800 hover:bg-slate-200 transition-colors cursor-pointer shadow-xs"
                    title="Copy Email Address"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4 text-slate-700" />}
                  </button>
                  <a
                    id="contact-email-btn"
                    href={`mailto:${USER_INFO.email}?subject=Project%20Inquiry`}
                    className="p-2 rounded-lg bg-sky-600 hover:bg-sky-500 text-white transition-colors shadow-xs"
                    title="Open Mail Client"
                  >
                    <Send className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* WhatsApp Action Card */}
              <div
                className="shape-glow p-5 rounded-2xl border border-slate-200/90 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white shadow-sm hover:shadow-md"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center shrink-0 shadow-xs">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-600 block font-bold">WhatsApp (Chat &amp; Call)</span>
                    <a
                      href="https://wa.me/8801620572429"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base sm:text-lg font-black tracking-wide text-emerald-700 hover:text-emerald-800 transition-colors inline-flex items-center gap-1.5"
                      title="Open WhatsApp Profile"
                    >
                      <span>01620572429</span>
                      <span className="text-xs font-semibold text-slate-600">({USER_INFO.whatsapp})</span>
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-2 self-end sm:self-auto shrink-0">
                  <a
                    id="contact-whatsapp-btn"
                    href="https://wa.me/8801620572429"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-emerald-600 hover:bg-emerald-500 text-white transition-all inline-flex items-center gap-2 shadow-md hover:scale-[1.02] cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Open WhatsApp</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Facebook Profile Action Card */}
              <div
                className="shape-glow p-5 rounded-2xl border border-slate-200/90 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white shadow-sm hover:shadow-md"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-xl bg-blue-50 border border-blue-200 text-blue-600 flex items-center justify-center shrink-0 shadow-xs">
                    <ExternalLink className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-600 block font-bold">Facebook Profile</span>
                    <a
                      href="https://www.facebook.com/ksg.shamim"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm sm:text-base font-black text-blue-700 hover:text-blue-800 transition-colors block break-all"
                    >
                      facebook.com/ksg.shamim
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-2 self-end sm:self-auto shrink-0">
                  <a
                    id="contact-facebook-btn"
                    href="https://www.facebook.com/ksg.shamim"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-blue-600 hover:bg-blue-500 text-white transition-all inline-flex items-center gap-2 shadow-md hover:scale-[1.02] cursor-pointer"
                  >
                    <span>Visit Profile</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Physical Studio / Location Address Card */}
              <div
                id="contact-location-card"
                className="shape-glow p-5 rounded-2xl border border-slate-200/90 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white shadow-sm hover:shadow-md"
              >
                <div className="flex items-start gap-3.5">
                  <div className="w-11 h-11 rounded-xl bg-amber-50 border border-amber-200 text-amber-600 flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-slate-600 font-bold">Studio &amp; Location Address</span>
                      <span className="text-[10px] font-black px-2.5 py-0.5 rounded-full bg-amber-100 border border-amber-300 text-amber-800 uppercase tracking-wider">
                        Dhaka
                      </span>
                    </div>
                    <p className="text-sm sm:text-base font-black text-slate-950 mt-1 leading-snug">
                      Holding No.99, Satarkul, Uttar Badda, Dhaka-12
                    </p>
                    <span className="text-xs text-slate-600 mt-0.5 block font-semibold">
                      Available for in-person studio meetings &amp; remote collaborations
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 self-end sm:self-auto shrink-0">
                  <a
                    id="contact-maps-btn"
                    href="https://maps.google.com/?q=Satarkul,+Uttar+Badda,+Dhaka"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-amber-500 hover:bg-amber-400 text-slate-950 transition-all inline-flex items-center gap-2 shadow-md hover:scale-[1.02] cursor-pointer"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>View Map</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Availability Box */}
            <div
              className="mt-6 p-5 rounded-2xl border flex items-center gap-3"
              style={{
                backgroundColor: theme === 'dark' ? 'rgba(16, 185, 129, 0.08)' : 'rgba(16, 185, 129, 0.1)',
                borderColor: 'rgba(16, 185, 129, 0.25)'
              }}
            >
              <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse shrink-0" />
              <p className="text-xs sm:text-sm text-emerald-400 dark:text-emerald-300 light:text-emerald-800 font-medium">
                Currently accepting freelance video editing inquiries, YouTube partnerships, and creative trailer commissions.
              </p>
            </div>
          </div>

          {/* Right Column: Quick Contact Form */}
          <div className="lg:col-span-7">
            <div
              className="shape-glow p-6 sm:p-8 rounded-3xl border border-slate-200/90 transition-all bg-white shadow-sm hover:shadow-md"
            >
              <h3 className="text-xl font-black text-slate-950 mb-1">Send a Message</h3>
              <p className="text-xs sm:text-sm mb-6 text-slate-700 font-medium">
                Fill out the quick form below to launch your email client with your project requirements formatted.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="client-name" className="block text-xs font-bold uppercase tracking-wider mb-1.5 text-slate-800">
                      Your Name
                    </label>
                    <input
                      id="client-name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Morgan"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-slate-50 text-slate-950 font-medium placeholder-slate-500 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500 focus:bg-white"
                    />
                  </div>

                  <div>
                    <label htmlFor="client-email" className="block text-xs font-bold uppercase tracking-wider mb-1.5 text-slate-800">
                      Your Email
                    </label>
                    <input
                      id="client-email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex@example.com"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-slate-50 text-slate-950 font-medium placeholder-slate-500 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500 focus:bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="project-type" className="block text-xs font-bold uppercase tracking-wider mb-1.5 text-slate-800">
                    Project Type
                  </label>
                  <select
                    id="project-type"
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-slate-50 text-slate-950 font-medium text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500 focus:bg-white"
                  >
                    <option value="Showreel & Video Edit">Showreel & Video Edit</option>
                    <option value="YouTube Long-Form Content">YouTube Long-Form Content</option>
                    <option value="Shorts / Reels / TikTok (Vertical)">Shorts / Reels / TikTok (Vertical)</option>
                    <option value="Commercial & Brand Promo">Commercial & Brand Promo</option>
                    <option value="Graphic & Thumbnail Design">Graphic & Thumbnail Design</option>
                    <option value="Other Custom Editing">Other Custom Editing</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="client-message" className="block text-xs font-bold uppercase tracking-wider mb-1.5 text-slate-800">
                    Project Details / Vision
                  </label>
                  <textarea
                    id="client-message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your footage, deadlines, reference links, and preferred visual tone..."
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-slate-50 text-slate-950 font-medium placeholder-slate-500 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500 focus:bg-white resize-none"
                  />
                </div>

                <button
                  id="submit-contact-form"
                  type="submit"
                  className="w-full py-3 rounded-xl font-black text-sm transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer bg-slate-950 hover:bg-slate-800 text-white"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Inquiry</span>
                </button>

                {submitted && (
                  <p className="text-xs text-emerald-400 text-center font-medium mt-2 animate-fadeIn">
                    Email draft generated! If your mail client didn't open, email directly at {USER_INFO.email}.
                  </p>
                )}
              </form>
            </div>
          </div>

        </div>

        {/* Minimalist Footer */}
        <div
          className="mt-16 sm:mt-20 pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs"
        >
          <div className="flex flex-wrap items-center gap-3 text-slate-700 font-semibold">
            <span>© {new Date().getFullYear()} {USER_INFO.name}. All rights reserved.</span>
            <span>•</span>
            <span className="flex items-center gap-1 text-slate-800 font-bold">
              <MapPin className="w-3 h-3 text-amber-600 shrink-0" />
              Holding No.99, Satarkul, Uttar Badda, Dhaka-12
            </span>
            <span>•</span>
            <a
              href={`https://wa.me/8801620572429`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-700 hover:text-emerald-800 font-bold transition-colors"
            >
              WhatsApp: 01620572429
            </a>
            <span>•</span>
            <a
              href={USER_INFO.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-700 hover:text-sky-800 font-bold transition-colors"
            >
              Facebook: ksg.shamim
            </a>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-300 bg-white text-slate-800 hover:bg-slate-100 hover:text-slate-950 font-bold transition-colors cursor-pointer shadow-xs"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
};
