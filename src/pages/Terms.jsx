import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  FileText,
  Clock,
  Share2,
  Printer,
  ChevronRight,
  AlertTriangle,
  Mail,
  CheckCircle2,
  ArrowRight,
  ShieldAlert,
  Scale,
  Shield
} from 'lucide-react';
import { termsContent } from '../content/terms';
import { APP_NAME, OPERATOR, CONTACT_EMAIL, LAST_UPDATED, LEGAL_DISCLAIMER } from '../content/config';

export default function Terms() {
  const [activeSection, setActiveSection] = useState(termsContent.sections[0].id);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (const section of termsContent.sections) {
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
            to="/privacy"
            className="hidden sm:inline-flex items-center gap-1 font-semibold text-amber-900 hover:text-amber-950 underline shrink-0"
          >
            View Privacy Policy <ChevronRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      {/* Main Header / Navbar */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link to="/" className="flex items-center gap-2.5 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-violet-600 flex items-center justify-center text-white shadow-md shadow-indigo-100 group-hover:scale-105 transition-transform">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <span className="font-bold text-slate-900 text-lg leading-tight block">{APP_NAME}</span>
                <span className="text-xs text-slate-500 block">Legal & Terms Portal</span>
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
              className="text-sm font-medium text-slate-600 hover:text-indigo-600 px-3 py-1.5 rounded-lg hover:bg-slate-100 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-sm font-medium text-indigo-600 bg-indigo-50 px-3 py-1.5 rounded-lg"
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
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-700 border border-indigo-200 mb-4">
                <Scale className="w-3.5 h-3.5" />
                <span>Binding User Agreement & Disclaimers</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
                {termsContent.title}
              </h1>
              <p className="mt-3 text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed">
                {termsContent.subtitle}
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-500">
                <span className="flex items-center gap-1.5 bg-slate-100 px-2.5 py-1 rounded-md font-medium text-slate-700">
                  <Clock className="w-4 h-4 text-slate-500" />
                  Last updated: {LAST_UPDATED}
                </span>
                <span>•</span>
                <span>Operator: <strong className="text-slate-700">{OPERATOR}</strong></span>
                <span>•</span>
                <span className="text-slate-500">Applicable to Android App & Backend Service</span>
              </div>
            </div>

            {/* Action buttons */}
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
                  Terms Sections
                </h2>
                <nav className="space-y-1 max-h-[calc(100vh-14rem)] overflow-y-auto pr-1">
                  {termsContent.sections.map((section) => (
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

              {/* Legal Support Card */}
              <div className="bg-gradient-to-br from-indigo-50 to-slate-50 rounded-xl border border-indigo-100 p-4 text-xs text-slate-600">
                <div className="flex items-center gap-2 text-indigo-700 font-semibold mb-2">
                  <Mail className="w-4 h-4" />
                  <span>Legal & Inquiries</span>
                </div>
                <p className="mb-3">
                  Questions regarding compliance, copyright notices, or these terms?
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

          {/* Terms Document Body */}
          <article className="lg:col-span-8 xl:col-span-9 space-y-10">

            {/* Critical Disclaimers Banner */}
            <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/20 text-indigo-400 border border-indigo-400/30 flex items-center justify-center shrink-0">
                  <ShieldAlert className="w-5 h-5" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-white">
                    Summary of Fundamental Legal Commitments
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    By accessing {APP_NAME}, you acknowledge that you are solely responsible for verifying that you have the lawful right or authorization to download any requested media. {APP_NAME} does not endorse copyright infringement and operates strictly as an ephemeral utility tool.
                  </p>
                </div>
              </div>
            </div>

            {/* Render Each Section */}
            {termsContent.sections.map((section) => (
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
                    <p
                      key={idx}
                      className={
                        paragraph.startsWith('THE SERVICE IS PROVIDED') ||
                        paragraph.startsWith('TO THE FULLEST EXTENT') ||
                        paragraph.startsWith('WE DO NOT WARRANT') ||
                        paragraph.startsWith('TO THE MAXIMUM EXTENT') ||
                        paragraph.startsWith('UNDER NO CIRCUMSTANCES')
                          ? 'font-medium text-slate-800 text-xs sm:text-sm tracking-wide bg-slate-50 p-4 rounded-xl border border-slate-200 font-mono'
                          : ''
                      }
                    >
                      {paragraph}
                    </p>
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
                </div>
              </section>
            ))}

            {/* Bottom Card: Link to Privacy Policy */}
            <div className="bg-gradient-to-r from-slate-900 to-indigo-950 text-white rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
              <div>
                <h3 className="text-lg font-bold">Review Our Privacy Disclosures</h3>
                <p className="text-sm text-slate-300 mt-1 max-w-xl">
                  Discover how {APP_NAME} handles URLs, transient server processing via FastAPI & yt-dlp, and protects your privacy without user accounts.
                </p>
              </div>
              <Link
                to="/privacy"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-indigo-500 hover:bg-indigo-400 text-white font-semibold text-sm rounded-xl transition-colors shrink-0 shadow-sm"
              >
                <span>Read Privacy Policy</span>
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
                <FileText className="w-3.5 h-3.5" />
              </div>
              <span className="font-bold text-slate-800">{APP_NAME}</span>
              <span>— Operated by {OPERATOR}</span>
            </div>
            <div className="flex items-center gap-6 text-sm">
              <Link to="/" className="hover:text-indigo-600 transition-colors">Home</Link>
              <Link to="/privacy" className="hover:text-indigo-600 transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-indigo-600 transition-colors font-semibold text-indigo-600">Terms & Conditions</Link>
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
