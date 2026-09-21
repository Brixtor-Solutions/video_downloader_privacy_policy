import React from 'react';
import { Routes, Route, Link, Navigate } from 'react-router-dom';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Terms from './pages/Terms';
import {
  Shield,
  FileText,
  Lock,
  Server,
  Smartphone,
  HardDrive,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  ChevronRight,
  ExternalLink,
  Mail,
  Clock,
  Sparkles,
  HelpCircle
} from 'lucide-react';
import {
  APP_NAME,
  OPERATOR,
  CONTACT_EMAIL,
  LAST_UPDATED,
  LEGAL_DISCLAIMER,
  SUPPORTED_PLATFORMS
} from './content/config';

function HomePage() {
  return (
    <div className="min-h-screen bg-[#F7F7F7] text-[#181818] flex flex-col selection:bg-red-100 selection:text-red-900">
      {/* Top Advisory Bar */}
      <div className="bg-amber-50 border-b border-amber-200 px-4 py-2.5 text-xs sm:text-sm text-amber-900">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
            <span className="font-medium">Notice:</span>
            <span>{LEGAL_DISCLAIMER}</span>
          </div>
          <span className="hidden sm:inline-block text-amber-800 text-xs font-semibold">
            Last Updated: {LAST_UPDATED}
          </span>
        </div>
      </div>

      {/* Main Navigation Header */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#E2E2E2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-[14px] bg-[#FF0000] flex items-center justify-center text-white shadow-md shadow-red-500/20">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <span className="font-bold text-[#181818] text-lg leading-tight block">{APP_NAME}</span>
              <span className="text-xs text-[#707070] block">Legal & Transparency Portal</span>
            </div>
          </div>

          <nav className="flex items-center gap-2 sm:gap-4">
            <Link
              to="/privacy"
              className="text-sm font-medium text-[#181818] hover:text-[#FF0000] px-3 py-1.5 rounded-[14px] hover:bg-black/5 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-sm font-medium text-[#181818] hover:text-[#FF0000] px-3 py-1.5 rounded-[14px] hover:bg-black/5 transition-colors"
            >
              Terms & Conditions
            </Link>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-[14px] bg-red-50 text-red-700 hover:bg-red-100 transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Contact Support</span>
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#F7F7F7] to-[#F1F1F1] border-b border-[#E2E2E2] py-16 sm:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-red-50 text-red-700 border border-red-200 mb-6">
            <Sparkles className="w-4 h-4 text-[#FF0000]" />
            <span>Official Legal Documentation for Android App & Backend Service</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#181818] tracking-tight leading-tight">
            Clear, Honest Legal Disclosures for <span className="text-[#FF0000]">{APP_NAME}</span>
          </h1>

          <p className="mt-5 text-base sm:text-xl text-[#707070] max-w-3xl mx-auto leading-relaxed">
            Welcome to the official legal portal for {APP_NAME}, operated by {OPERATOR}. Review our Privacy Policy and Terms of Service to understand our architecture, data handling, and user responsibilities.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-[#707070]">
            <span className="flex items-center gap-1.5 bg-white border border-[#E2E2E2] px-3.5 py-1.5 rounded-[14px] font-medium text-[#181818] shadow-sm">
              <CheckCircle2 className="w-4 h-4 text-[#2E7D32]" />
              No User Accounts Required
            </span>
            <span className="flex items-center gap-1.5 bg-white border border-[#E2E2E2] px-3.5 py-1.5 rounded-[14px] font-medium text-[#181818] shadow-sm">
              <CheckCircle2 className="w-4 h-4 text-[#2E7D32]" />
              Ephemeral Server Processing
            </span>
            <span className="flex items-center gap-1.5 bg-white border border-[#E2E2E2] px-3.5 py-1.5 rounded-[14px] font-medium text-[#181818] shadow-sm">
              <CheckCircle2 className="w-4 h-4 text-[#2E7D32]" />
              Zero Persistent Media Archiving
            </span>
          </div>
        </div>
      </section>

      {/* Main Two Documents Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 -mt-10 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Privacy Policy Card */}
          <div className="bg-white rounded-[14px] border border-[#E2E2E2] p-8 shadow-md flex flex-col justify-between hover:border-red-400 transition-all group">
            <div>
              <div className="w-12 h-12 rounded-[14px] bg-red-50 text-[#FF0000] flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                <Shield className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#FF0000]">Privacy & Data Governance</span>
              <h2 className="text-2xl font-bold text-[#181818] mt-1">Privacy Policy</h2>
              <p className="text-[#707070] text-sm sm:text-base mt-3 leading-relaxed">
                Detailed technical disclosure of how URLs and media are handled, temporary server-side conversion using FastAPI and yt-dlp, local storage storage rights, and third-party disclaimers.
              </p>

              <div className="mt-6 space-y-2.5 pt-4 border-t border-[#E2E2E2] text-xs sm:text-sm text-[#707070]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2E7D32]" />
                  <span>Full technical breakdown of Flutter → FastAPI → yt-dlp pipeline</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2E7D32]" />
                  <span>No user accounts or password databases</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2E7D32]" />
                  <span>Clear rules for AdMob & Firebase Analytics configuration</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[#E2E2E2] flex items-center justify-between">
              <span className="text-xs text-[#707070]">Route: /privacy</span>
              <Link
                to="/privacy"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#FF0000] hover:bg-red-700 text-white text-sm font-semibold rounded-[14px] transition-colors shadow-sm"
              >
                <span>Read Privacy Policy</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Terms & Conditions Card */}
          <div className="bg-white rounded-[14px] border border-[#E2E2E2] p-8 shadow-md flex flex-col justify-between hover:border-red-400 transition-all group">
            <div>
              <div className="w-12 h-12 rounded-[14px] bg-neutral-100 text-[#181818] flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                <FileText className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#181818]">Terms of Service</span>
              <h2 className="text-2xl font-bold text-[#181818] mt-1">Terms & Conditions</h2>
              <p className="text-[#707070] text-sm sm:text-base mt-3 leading-relaxed">
                Rules governing lawful use, user responsibility for copyright ownership or permissions, non-affiliation with third-party platforms, warranty disclaimers, and liability boundaries.
              </p>

              <div className="mt-6 space-y-2.5 pt-4 border-t border-[#E2E2E2] text-xs sm:text-sm text-[#707070]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2E7D32]" />
                  <span>User responsibility for copyright permissions & lawful use</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2E7D32]" />
                  <span>Explicit disclaimer of affiliation with third-party hosts</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2E7D32]" />
                  <span>Standard warranty disclaimers and limitation of liability</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[#E2E2E2] flex items-center justify-between">
              <span className="text-xs text-[#707070]">Route: /terms</span>
              <Link
                to="/terms"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#181818] hover:bg-black text-white text-sm font-semibold rounded-[14px] transition-colors shadow-sm"
              >
                <span>Read Terms & Conditions</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* Architecture Transparency Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-gradient-to-br from-[#121212] via-neutral-900 to-black text-white rounded-[14px] p-8 sm:p-12 shadow-xl border border-neutral-800">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#FF0000]">Technical Transparency</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold mt-2">
              Our Processing Architecture: Truth in Technology
            </h2>
            <p className="mt-3 text-sm sm:text-base text-neutral-300 leading-relaxed">
              Many apps claim "everything happens on your device" when it does not. We believe in complete honesty. Here is how {APP_NAME} actually processes requests:
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/5 backdrop-blur-md rounded-[14px] p-6 border border-white/10">
              <div className="w-10 h-10 rounded-[10px] bg-red-600/20 text-red-400 border border-red-500/30 flex items-center justify-center mb-4 font-bold text-base">
                1
              </div>
              <h3 className="font-bold text-lg text-white">Flutter Mobile Client</h3>
              <p className="mt-2 text-xs sm:text-sm text-neutral-300 leading-relaxed">
                You enter a URL in the Android app. The app verifies the format and transmits the link over secure HTTPS to our FastAPI backend.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-md rounded-[14px] p-6 border border-white/10">
              <div className="w-10 h-10 rounded-[10px] bg-red-600/20 text-red-400 border border-red-500/30 flex items-center justify-center mb-4 font-bold text-base">
                2
              </div>
              <h3 className="font-bold text-lg text-white">FastAPI & yt-dlp Backend</h3>
              <p className="mt-2 text-xs sm:text-sm text-neutral-300 leading-relaxed">
                Our remote server extracts streams using yt-dlp. Stream multiplexing and format assembly are processed in temporary scratch storage.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-md rounded-[14px] p-6 border border-white/10">
              <div className="w-10 h-10 rounded-[10px] bg-red-600/20 text-red-400 border border-red-500/30 flex items-center justify-center mb-4 font-bold text-base">
                3
              </div>
              <h3 className="font-bold text-lg text-white">Delivery & Local Save</h3>
              <p className="mt-2 text-xs sm:text-sm text-neutral-300 leading-relaxed">
                The finished media is streamed back to your device and saved directly to your local phone storage. Server scratch files are automatically purged.
              </p>
            </div>
          </div>

          <div className="mt-8 p-4 rounded-[14px] bg-amber-400/10 border border-amber-400/20 text-xs sm:text-sm text-amber-200 flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <p>
              <strong>Important Copyright Responsibility:</strong> {APP_NAME} is an automated conversion utility. Users are legally responsible for verifying that they own or have permission to download requested content.
            </p>
          </div>
        </div>
      </section>

      {/* Quick FAQ Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#181818]">Frequently Asked Questions</h2>
          <p className="text-[#707070] text-sm mt-2">Key legal and privacy answers at a glance</p>
        </div>

        <div className="space-y-4">
          <div className="bg-white p-5 sm:p-6 rounded-[14px] border border-[#E2E2E2] shadow-sm">
            <h3 className="font-bold text-[#181818] text-base">Do you keep my downloaded videos on your servers?</h3>
            <p className="mt-2 text-sm text-[#707070] leading-relaxed">
              No. Media files are handled in temporary server scratch storage solely while fulfilling the active stream conversion. As soon as the payload is delivered, or after a short expiration window, the files are permanently deleted.
            </p>
          </div>

          <div className="bg-white p-5 sm:p-6 rounded-[14px] border border-[#E2E2E2] shadow-sm">
            <h3 className="font-bold text-[#181818] text-base">Are you affiliated with YouTube, Instagram, or TikTok?</h3>
            <p className="mt-2 text-sm text-[#707070] leading-relaxed">
              No. We are an independent software operator ({OPERATOR}). We are not affiliated with, endorsed by, or sponsored by any third-party media platforms. All platform names and trademarks belong to their respective owners.
            </p>
          </div>

          <div className="bg-white p-5 sm:p-6 rounded-[14px] border border-[#E2E2E2] shadow-sm">
            <h3 className="font-bold text-[#181818] text-base">Do I need to sign up or create an account?</h3>
            <p className="mt-2 text-sm text-[#707070] leading-relaxed">
              No. {APP_NAME} requires zero registration. We do not store names, passwords, or personal profiles.
            </p>
          </div>

          <div className="bg-white p-5 sm:p-6 rounded-[14px] border border-[#E2E2E2] shadow-sm">
            <h3 className="font-bold text-[#181818] text-base">How can I contact the operator?</h3>
            <p className="mt-2 text-sm text-[#707070] leading-relaxed">
              For any questions regarding privacy, legal terms, or technical matters, reach out to {OPERATOR} directly at{' '}
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-[#FF0000] font-semibold underline">
                {CONTACT_EMAIL}
              </a>.
            </p>
          </div>
        </div>
      </section>

      {/* Standard Footer */}
      <footer className="bg-white border-t border-[#E2E2E2] mt-auto py-10 text-sm text-[#707070]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 border-b border-[#E2E2E2]">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-[6px] bg-[#FF0000] flex items-center justify-center text-white">
                <Shield className="w-3.5 h-3.5" />
              </div>
              <span className="font-bold text-[#181818]">{APP_NAME}</span>
              <span>— Operated by {OPERATOR}</span>
            </div>
            <div className="flex items-center gap-6 text-sm">
              <Link to="/" className="hover:text-[#FF0000] transition-colors font-semibold text-[#FF0000]">Home</Link>
              <Link to="/privacy" className="hover:text-[#FF0000] transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-[#FF0000] transition-colors">Terms & Conditions</Link>
              <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-[#FF0000] transition-colors">Contact</a>
            </div>
          </div>
          <div className="mt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-[#707070]">
            <p>© {new Date().getFullYear()} {OPERATOR}. All rights reserved.</p>
            <p>{LEGAL_DISCLAIMER}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      
      {/* Privacy Policy routes */}
      <Route path="/privacy" element={<PrivacyPolicy />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      
      {/* Terms & Conditions routes */}
      <Route path="/terms" element={<Terms />} />
      <Route path="/terms-and-conditions" element={<Terms />} />
      
      {/* Fallback */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
