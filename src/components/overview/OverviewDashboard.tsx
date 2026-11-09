import React from 'react';
import { NavSection } from '../../types';
import { 
  Smartphone, 
  UserCheck, 
  Palette, 
  ArrowRight, 
  CheckCircle2, 
  Layers, 
  Eye, 
  Zap, 
  ShieldCheck, 
  Sparkles,
  BookOpen,
  MousePointerClick,
  Sliders,
  Scale
} from 'lucide-react';

interface OverviewDashboardProps {
  onNavigate: (section: NavSection) => void;
}

export const OverviewDashboard: React.FC<OverviewDashboardProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-8 max-w-7xl mx-auto pb-12">
      {/* Hero Welcome Banner */}
      <section className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-950 text-white p-6 sm:p-8 md:p-10 shadow-xl border border-slate-800">
        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-blue-300">
            <span className="bg-blue-500/20 px-2.5 py-1 rounded text-blue-300 border border-blue-400/30">
              Web Technology · Assignment 2
            </span>
            <span className="text-slate-400">·</span>
            <span className="text-slate-300">Activity II – CO5</span>
            <span className="text-slate-400">·</span>
            <span className="text-slate-300">Academic Year 2026–2027</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white leading-tight">
            DESIGNLAB – UI/UX Experience Studio
          </h1>
          
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl">
            A comprehensive, interactive UI/UX portfolio demonstrating full practical competencies in mobile application redesign, inclusive & accessible authentication architectures, and critical visual design heuristics.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-3">
            <button
              onClick={() => onNavigate('project-1')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm shadow-md transition-all cursor-pointer"
            >
              <span>Explore Project 01 (Google Pay)</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onNavigate('design-system')}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-medium text-sm border border-white/10 transition-all cursor-pointer"
            >
              <Layers className="w-4 h-4" />
              <span>Inspect Design System</span>
            </button>
          </div>
        </div>

        {/* Ambient background decoration */}
        <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-15 pointer-events-none hidden md:block">
          <div className="w-96 h-96 rounded-full bg-blue-500 blur-3xl absolute -right-20 -top-20" />
          <div className="w-80 h-80 rounded-full bg-indigo-500 blur-3xl absolute -right-10 -bottom-10" />
        </div>
      </section>

      {/* Progress & Portfolio Status Overview */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 transition-colors">
          <div className="text-xs font-medium text-slate-500 dark:text-slate-400">Portfolio Status</div>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-2xl font-bold text-slate-900 dark:text-white tabular-nums">3 / 3</span>
            <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">100% Implemented</span>
          </div>
          <div className="mt-3 w-full bg-slate-100 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden">
            <div className="bg-emerald-500 h-full w-full rounded-full" />
          </div>
        </div>

        <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 transition-colors">
          <div className="text-xs font-medium text-slate-500 dark:text-slate-400">Google Pay Redesign</div>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">390px</span>
            <span className="text-xs text-slate-500 dark:text-slate-400">Interactive Viewport</span>
          </div>
          <div className="mt-2 text-xs text-slate-600 dark:text-slate-400 flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
            <span>6 Working Prototype Screens</span>
          </div>
        </div>

        <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 transition-colors">
          <div className="text-xs font-medium text-slate-500 dark:text-slate-400">Accessibility Standard</div>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">WCAG 2.2</span>
            <span className="text-xs text-emerald-600 dark:text-emerald-400 font-semibold">8 Criteria Tested</span>
          </div>
          <div className="mt-2 text-xs text-slate-600 dark:text-slate-400 flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
            <span>Contrast & Scaling Engine Verified</span>
          </div>
        </div>

        <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 transition-colors">
          <div className="text-xs font-medium text-slate-500 dark:text-slate-400">Design System & Tokens</div>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-2xl font-bold text-slate-900 dark:text-white tabular-nums">11+</span>
            <span className="text-xs text-slate-500 dark:text-slate-400">Interactive Components</span>
          </div>
          <div className="mt-2 text-xs text-slate-600 dark:text-slate-400 flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
            <span>5 States per Component</span>
          </div>
        </div>
      </section>

      {/* The 3 Core Projects Display */}
      <section className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
              Curated UI/UX Projects
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              Select any project card to interact with the working prototype and read the analytical case studies.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Google Pay */}
          <div className="group rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-hidden shadow-xs hover:shadow-lg hover:border-blue-400/50 dark:hover:border-blue-500/50 transition-all flex flex-col justify-between">
            <div>
              {/* Card visual preview */}
              <div className="h-48 bg-gradient-to-br from-blue-500/10 via-indigo-500/10 to-blue-600/20 p-5 flex flex-col justify-between border-b border-slate-200 dark:border-slate-800 relative">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-blue-700 dark:text-blue-300 bg-white/80 dark:bg-slate-900/80 px-2.5 py-1 rounded-md shadow-xs">
                    PROJECT 01
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded-full border border-emerald-200/50 dark:border-emerald-800/50">
                    <CheckCircle2 className="w-3 h-3" /> Fully Interactive
                  </span>
                </div>

                {/* Mini mobile UI representation */}
                <div className="self-center w-48 h-32 bg-white dark:bg-slate-950 rounded-t-xl shadow-lg border border-slate-200 dark:border-slate-800 p-2.5 space-y-2 transform translate-y-3 group-hover:translate-y-1 transition-transform">
                  <div className="flex items-center justify-between text-[10px] text-slate-500">
                    <span className="font-semibold text-blue-600">Google Pay Redesign</span>
                    <span>₹14,250</span>
                  </div>
                  <div className="grid grid-cols-4 gap-1.5 text-center">
                    <div className="p-1 rounded bg-blue-50 dark:bg-blue-900/30 text-[9px] font-medium text-blue-700 dark:text-blue-300">Scan</div>
                    <div className="p-1 rounded bg-blue-50 dark:bg-blue-900/30 text-[9px] font-medium text-blue-700 dark:text-blue-300">Send</div>
                    <div className="p-1 rounded bg-blue-50 dark:bg-blue-900/30 text-[9px] font-medium text-blue-700 dark:text-blue-300">Request</div>
                    <div className="p-1 rounded bg-blue-50 dark:bg-blue-900/30 text-[9px] font-medium text-blue-700 dark:text-blue-300">Bills</div>
                  </div>
                  <div className="h-6 bg-slate-50 dark:bg-slate-900 rounded p-1 flex items-center justify-between text-[9px] text-slate-600 dark:text-slate-400">
                    <span>Priyan Raj</span>
                    <span className="text-rose-500 font-mono">-₹350</span>
                  </div>
                </div>
              </div>

              {/* Card content */}
              <div className="p-6 space-y-3">
                <div className="flex items-center gap-2 text-xs font-medium text-blue-600 dark:text-blue-400">
                  <Smartphone className="w-4 h-4" />
                  <span>Fintech UX Prototype</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  Google Pay – Application UI Redesign
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  A realistic 390px mobile payment application prototype resolving visual clutter, grouping payment workflows, and streamlining send-money flows with real simulated state and detailed usability justifications.
                </p>
                <div className="pt-2 flex flex-wrap gap-1.5 text-[11px] text-slate-500 dark:text-slate-400 font-mono">
                  <span>· Fitts’s Law</span>
                  <span>· Hick’s Law</span>
                  <span>· Live UPI Simulation</span>
                </div>
              </div>
            </div>

            <div className="p-6 pt-0">
              <button
                onClick={() => onNavigate('project-1')}
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold text-xs transition-colors cursor-pointer"
              >
                <span>Explore Project 01</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Card 2: Inclusive Login */}
          <div className="group rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-hidden shadow-xs hover:shadow-lg hover:border-indigo-400/50 dark:hover:border-indigo-500/50 transition-all flex flex-col justify-between">
            <div>
              {/* Card visual preview */}
              <div className="h-48 bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-indigo-600/20 p-5 flex flex-col justify-between border-b border-slate-200 dark:border-slate-800 relative">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-indigo-700 dark:text-indigo-300 bg-white/80 dark:bg-slate-900/80 px-2.5 py-1 rounded-md shadow-xs">
                    PROJECT 02
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded-full border border-emerald-200/50 dark:border-emerald-800/50">
                    <CheckCircle2 className="w-3 h-3" /> Fully Interactive
                  </span>
                </div>

                {/* Mini login UI representation */}
                <div className="self-center w-52 h-32 bg-white dark:bg-slate-950 rounded-t-xl shadow-lg border border-slate-200 dark:border-slate-800 p-3 space-y-2 transform translate-y-3 group-hover:translate-y-1 transition-transform">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded bg-indigo-600" />
                    <span className="text-[10px] font-bold text-slate-800 dark:text-slate-200">Accessible Auth</span>
                  </div>
                  <div className="h-4 bg-slate-100 dark:bg-slate-800 rounded px-1.5 flex items-center text-[8px] text-slate-400">
                    user@domain.com
                  </div>
                  <div className="h-4 bg-slate-100 dark:bg-slate-800 rounded px-1.5 flex items-center justify-between text-[8px] text-slate-400">
                    <span>••••••••••</span>
                    <Eye className="w-2.5 h-2.5" />
                  </div>
                  <div className="h-5 bg-indigo-600 rounded flex items-center justify-center text-[9px] font-bold text-white">
                    Sign In (Evaluated AA)
                  </div>
                </div>
              </div>

              {/* Card content */}
              <div className="p-6 space-y-3">
                <div className="flex items-center gap-2 text-xs font-medium text-indigo-600 dark:text-indigo-400">
                  <UserCheck className="w-4 h-4" />
                  <span>Inclusive & Accessible Architecture</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  Inclusive & Accessible Login Screen
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  Dual-mode accessible authentication interface featuring live high-contrast rendering, real text size scaling, full keyboard navigation, screen reader ARIA landmarks, and persistent preferences.
                </p>
                <div className="pt-2 flex flex-wrap gap-1.5 text-[11px] text-slate-500 dark:text-slate-400 font-mono">
                  <span>· WCAG 2.2 Criteria</span>
                  <span>· High Contrast Toggle</span>
                  <span>· Text Scaling Engine</span>
                </div>
              </div>
            </div>

            <div className="p-6 pt-0">
              <button
                onClick={() => onNavigate('project-2')}
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white font-semibold text-xs transition-colors cursor-pointer"
              >
                <span>Explore Project 02</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Card 3: Instagram Critique */}
          <div className="group rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-hidden shadow-xs hover:shadow-lg hover:border-pink-400/50 dark:hover:border-pink-500/50 transition-all flex flex-col justify-between">
            <div>
              {/* Card visual preview */}
              <div className="h-48 bg-gradient-to-br from-pink-500/10 via-purple-500/10 to-amber-500/10 p-5 flex flex-col justify-between border-b border-slate-200 dark:border-slate-800 relative">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-pink-700 dark:text-pink-300 bg-white/80 dark:bg-slate-900/80 px-2.5 py-1 rounded-md shadow-xs">
                    PROJECT 03
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded-full border border-emerald-200/50 dark:border-emerald-800/50">
                    <CheckCircle2 className="w-3 h-3" /> Fully Interactive
                  </span>
                </div>

                {/* Mini Instagram palette & critique preview */}
                <div className="self-center w-52 h-32 bg-white dark:bg-slate-950 rounded-t-xl shadow-lg border border-slate-200 dark:border-slate-800 p-2.5 space-y-2 transform translate-y-3 group-hover:translate-y-1 transition-transform">
                  <div className="flex items-center justify-between text-[10px]">
                    <span className="font-semibold text-slate-800 dark:text-slate-200">Color Spectrum</span>
                    <span className="font-mono text-[9px] text-pink-600">WCAG Tested</span>
                  </div>
                  <div className="h-4 rounded bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 flex items-center justify-center text-[8px] font-bold text-white">
                    #833AB4 → #E1306C → #F77737
                  </div>
                  <div className="grid grid-cols-2 gap-1 text-[8px]">
                    <div className="p-1 rounded bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300">
                      Caption: 14px / 1.28
                    </div>
                    <div className="p-1 rounded bg-rose-50 dark:bg-rose-950/40 text-rose-600">
                      Meta: 11px (Low AA)
                    </div>
                  </div>
                </div>
              </div>

              {/* Card content */}
              <div className="p-6 space-y-3">
                <div className="flex items-center gap-2 text-xs font-medium text-pink-600 dark:text-pink-400">
                  <Palette className="w-4 h-4" />
                  <span>Visual Heuristic Analysis</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors">
                  Instagram – Color & Typography Critique
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  A professional visual analysis dashboard dissecting Instagram’s color palette, gradient anchors, typographic hierarchy, readability issues in small metadata, and side-by-side redesign solutions.
                </p>
                <div className="pt-2 flex flex-wrap gap-1.5 text-[11px] text-slate-500 dark:text-slate-400 font-mono">
                  <span>· Color Contrast Matrix</span>
                  <span>· Type Hierarchy Audit</span>
                  <span>· Side-by-Side Redesign</span>
                </div>
              </div>
            </div>

            <div className="p-6 pt-0">
              <button
                onClick={() => onNavigate('project-3')}
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-pink-600 hover:bg-pink-700 active:bg-pink-800 text-white font-semibold text-xs transition-colors cursor-pointer"
              >
                <span>Explore Project 03</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Applied Design Principles Section */}
      <section className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-6">
        <div>
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white tracking-tight">
            Core UI/UX Design Principles & Heuristics Applied
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
            Every screen and component in this studio adheres to established human-computer interaction (HCI) laws.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60 space-y-1.5">
            <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wider">
              <MousePointerClick className="w-4 h-4" />
              <span>Fitts's Law</span>
            </div>
            <div className="font-semibold text-sm text-slate-900 dark:text-slate-100">
              Target Size & Proximity
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Touch targets are enlarged (≥ 44px) and placed within natural thumb reach in the GPay mobile interface, reducing target acquisition time.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60 space-y-1.5">
            <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 text-xs font-bold uppercase tracking-wider">
              <Sliders className="w-4 h-4" />
              <span>Hick's Law</span>
            </div>
            <div className="font-semibold text-sm text-slate-900 dark:text-slate-100">
              Decision Time Reduction
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Payment choices are chunked into 4 primary actions (Scan, Send, Request, Bills), eliminating decision paralysis caused by endless mixed icon grids.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60 space-y-1.5">
            <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" />
              <span>WCAG 2.2 Evaluation</span>
            </div>
            <div className="font-semibold text-sm text-slate-900 dark:text-slate-100">
              Tested Accessibility Criteria
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Strict contrast ratios (≥ 4.5:1 for body copy, ≥ 3:1 for UI components), screen-reader ARIA live regions, and real text zoom up to 150%.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60 space-y-1.5">
            <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400 text-xs font-bold uppercase tracking-wider">
              <Zap className="w-4 h-4" />
              <span>Immediate Feedback</span>
            </div>
            <div className="font-semibold text-sm text-slate-900 dark:text-slate-100">
              System Status Visibility
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Every action provides confirmation (haptic-like visual states, simulated transaction receipts, inline validation errors, and clear success states).
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60 space-y-1.5">
            <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400 text-xs font-bold uppercase tracking-wider">
              <Scale className="w-4 h-4" />
              <span>Miller's Law</span>
            </div>
            <div className="font-semibold text-sm text-slate-900 dark:text-slate-100">
              Cognitive Chunking
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Information on every screen is organized into groups of 5–7 items maximum (recent people, business bills, quick filters), respecting short-term memory limits.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60 space-y-1.5">
            <div className="flex items-center gap-2 text-cyan-600 dark:text-cyan-400 text-xs font-bold uppercase tracking-wider">
              <Eye className="w-4 h-4" />
              <span>Visual Hierarchy</span>
            </div>
            <div className="font-semibold text-sm text-slate-900 dark:text-slate-100">
              Intentional Contrast & Scale
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Clear typographic scaling from display headings to muted timestamps, ensuring the user's eye naturally tracks key actions and critical values first.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
