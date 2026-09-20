import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Shield,
  Clock,
  ArrowLeft,
  Share2,
  Printer,
  ChevronRight,
  Server,
  Smartphone,
  HardDrive,
  FileCheck,
  AlertTriangle,
  Mail,
  ExternalLink,
  Cpu,
  Layers,
  ArrowRight,
  CheckCircle2,
  Lock
} from 'lucide-react';
import { privacyContent } from '../content/privacy';
import { APP_NAME, OPERATOR, CONTACT_EMAIL, LAST_UPDATED, LEGAL_DISCLAIMER, SERVICES_CONFIG } from '../content/config';

export default function PrivacyPolicy() {
  const [activeSection, setActiveSection] = useState(privacyContent.sections[0].id);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (const section of privacyContent.sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col selection:bg-indigo-100 selection:text-indigo-900">
      {/* Top Advisory Bar */}
      <div className="bg-amber-50 border-b border-amber-200 px-4 py-2.5 text-xs sm:text-sm text-amber-900">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
            <span className="font-medium">Transparency Notice:</span>
            <span>{LEGAL_DISCLAIMER}</span>
          </div>
          <Link
            to="/terms"
            className="hidden sm:inline-flex items-center gap-1 font-semibold text-amber-900 hover:text-amber-950 underline shrink-0"
          >
            View Terms & Conditions <ChevronRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      {/* Main Header / Navbar */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link to="/" className="flex items-center gap-2.5 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-violet-600 flex items-center justify-center text-white shadow-md shadow-indigo-100 group-hover:scale-105 transition-transform">
                <Shield className="w-5 h-5" />
              </div>
              <div>
                <span className="font-bold text-slate-900 text-lg leading-tight block">{APP_NAME}</span>
                <span className="text-xs text-slate-500 block">Legal & Privacy Portal</span>
              </div>
            </Link>
          </div>

          <nav className="flex items-center gap-2 sm:gap-4">
            <Link
              to="/"
              className="text-sm font-medium text-slate-600 hover:text-indigo-600 px-3 py-1.5 rounded-lg hover:bg-slate-100 transition-colors"
            >
              Home
            </Link>
            <Link
              to="/privacy"
              className="text-sm font-medium text-indigo-600 bg-indigo-50 px-3 py-1.5 rounded-lg"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-sm font-medium text-slate-600 hover:text-indigo-600 px-3 py-1.5 rounded-lg hover:bg-slate-100 transition-colors"
            >
              Terms & Conditions
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero / Document Header */}
      <section className="bg-gradient-to-b from-white to-slate-50 border-b border-slate-200 py-10 sm:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200 mb-4">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Verified Architecture & Privacy Disclosures</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
                {privacyContent.title}
              </h1>
              <p className="mt-3 text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed">
                {privacyContent.subtitle}
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-500">
                <span className="flex items-center gap-1.5 bg-slate-100 px-2.5 py-1 rounded-md font-medium text-slate-700">
                  <Clock className="w-4 h-4 text-slate-500" />
                  Last updated: {LAST_UPDATED}
                </span>
                <span>•</span>
                <span>Operator: <strong className="text-slate-700">{OPERATOR}</strong></span>
                <span>•</span>
                <span className="text-slate-500">No user accounts required</span>
              </div>
            </div>

            {/* Quick action buttons */}
            <div className="flex items-center gap-2.5">
              <button
                onClick={handleCopyLink}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 text-sm font-medium text-slate-700 bg-white border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors shadow-sm"
                title="Copy shareable link"
              >
                <Share2 className="w-4 h-4" />
                <span>{copied ? 'Copied!' : 'Share'}</span>
              </button>
              <button
                onClick={handlePrint}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 text-sm font-medium text-slate-700 bg-white border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors shadow-sm"
                title="Print or export to PDF"
              >
                <Printer className="w-4 h-4" />
                <span>Print / PDF</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area with Sidebar Table of Contents */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex-1 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Sticky Table of Contents (Desktop) */}
          <aside className="hidden lg:block lg:col-span-4 xl:col-span-3">
            <div className="sticky top-24 space-y-6">
              <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
                <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 px-2">
                  Table of Contents
                </h2>
                <nav className="space-y-1 max-h-[calc(100vh-14rem)] overflow-y-auto pr-1">
                  {privacyContent.sections.map((section) => (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      className={`block px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
                        activeSection === section.id
                          ? 'bg-indigo-50 text-indigo-700 font-semibold'
                          : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                      }`}
                    >
                      {section.title}
                    </a>
                  ))}
                </nav>
              </div>

              {/* Quick Contact Card */}
              <div className="bg-gradient-to-br from-indigo-50 to-slate-50 rounded-xl border border-indigo-100 p-4 text-xs text-slate-600">
                <div className="flex items-center gap-2 text-indigo-700 font-semibold mb-2">
                  <Mail className="w-4 h-4" />
                  <span>Privacy Inquiries</span>
                </div>
                <p className="mb-3">
                  Have questions about this policy or technical data handling?
                </p>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="block text-center bg-white border border-indigo-200 text-indigo-700 font-medium py-1.5 px-3 rounded-lg hover:bg-indigo-50 transition-colors truncate"
                >
                  {CONTACT_EMAIL}
                </a>
              </div>
            </div>
          </aside>

          {/* Policy Document Body */}
          <article className="lg:col-span-8 xl:col-span-9 space-y-10">

            {/* Architecture Spotlight Box */}
            <div className="bg-white rounded-2xl border border-indigo-100 p-6 sm:p-8 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 translate-x-8 -translate-y-8 w-40 h-40 bg-indigo-50 rounded-full blur-2xl -z-0"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-2.5 text-indigo-600 font-bold text-sm mb-2">
                  <Cpu className="w-5 h-5" />
                  <span>System Architecture Overview</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                  How {APP_NAME} Operates Behind the Scenes
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  To provide full transparency, the diagram below outlines the exact technical pipeline from the moment you submit a link to when the media is saved on your device.
                </p>

                {/* Pipeline Flow Steps */}
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
                  {privacyContent.architectureSummary.map((item) => (
                    <div
                      key={item.step}
                      className="bg-slate-50 border border-slate-200/80 rounded-xl p-4 flex flex-col justify-between hover:border-indigo-300 transition-colors"
                    >
                      <div>
                        <div className="w-7 h-7 rounded-lg bg-indigo-600 text-white font-bold text-xs flex items-center justify-center mb-3">
                          {item.step}
                        </div>
                        <h4 className="text-sm font-bold text-slate-900">{item.title}</h4>
                        <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-5 p-4 rounded-xl bg-amber-50/80 border border-amber-200 text-xs text-amber-900 flex items-start gap-3">
                  <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold">Notice Regarding Server-Side Processing: </span>
                    <span>
                      {APP_NAME} does <strong>NOT</strong> claim that all processing occurs exclusively on-device. Stream resolution and format multiplexing happen transiently on our FastAPI servers using yt-dlp before files are securely delivered to your phone.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Render Each Policy Section */}
            {privacyContent.sections.map((section) => (
              <section
                key={section.id}
                id={section.id}
                className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm scroll-mt-24"
              >
                <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-5">
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight">
                    {section.title}
                  </h2>
                  <a
                    href={`#${section.id}`}
                    className="text-xs font-mono text-slate-400 hover:text-indigo-600"
                    title="Anchor link"
                  >
                    #{section.id}
                  </a>
                </div>

                <div className="space-y-4 text-sm sm:text-base text-slate-600 leading-relaxed">
                  {section.content.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}

                  {section.list && (
                    <ul className="space-y-2.5 mt-4 pt-2">
                      {section.list.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-indigo-500 mt-1 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {section.callout && (
                    <div className="mt-6 p-4 rounded-xl bg-blue-50 border border-blue-200 text-blue-950">
                      <div className="flex items-center gap-2 font-bold text-sm text-blue-900 mb-1">
                        <AlertTriangle className="w-4 h-4 text-blue-600 shrink-0" />
                        <span>{section.callout.title}</span>
                      </div>
                      <p className="text-xs sm:text-sm text-blue-900/90 leading-relaxed">
                        {section.callout.body}
                      </p>
                    </div>
                  )}

                  {section.conditionalNotice && (
                    <div className="mt-4 p-3.5 rounded-lg bg-slate-100 border border-slate-200 text-xs text-slate-700 font-mono">
                      {section.conditionalNotice}
                    </div>
                  )}
                </div>
              </section>
            ))}

            {/* Bottom Card: Link to Terms */}
            <div className="bg-gradient-to-r from-slate-900 to-indigo-950 text-white rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
              <div>
                <h3 className="text-lg font-bold">Review Our Terms & Conditions</h3>
                <p className="text-sm text-slate-300 mt-1 max-w-xl">
                  Learn about lawful use, user responsibilities for downloaded media, intellectual property disclaimers, and warranty limitations.
                </p>
              </div>
              <Link
                to="/terms"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-indigo-500 hover:bg-indigo-400 text-white font-semibold text-sm rounded-xl transition-colors shrink-0 shadow-sm"
              >
                <span>Read Terms & Conditions</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </article>
        </div>
      </main>

      {/* Standard Footer */}
      <footer className="bg-white border-t border-slate-200 mt-20 py-10 text-sm text-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-md bg-indigo-600 flex items-center justify-center text-white">
                <Shield className="w-3.5 h-3.5" />
              </div>
              <span className="font-bold text-slate-800">{APP_NAME}</span>
              <span>— Operated by {OPERATOR}</span>
            </div>
            <div className="flex items-center gap-6 text-sm">
              <Link to="/" className="hover:text-indigo-600 transition-colors">Home</Link>
              <Link to="/privacy" className="hover:text-indigo-600 transition-colors font-semibold text-indigo-600">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-indigo-600 transition-colors">Terms & Conditions</Link>
              <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-indigo-600 transition-colors">Contact</a>
            </div>
          </div>
          <div className="mt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-slate-400">
            <p>© {new Date().getFullYear()} {OPERATOR}. All rights reserved.</p>
            <p>{LEGAL_DISCLAIMER}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
