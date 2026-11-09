import React from 'react';
import { 
  AlertTriangle, 
  CheckCircle2, 
  Layers, 
  Type, 
  MousePointerClick, 
  Sliders, 
  Eye, 
  ArrowRight,
  ShieldCheck,
  Compass
} from 'lucide-react';

export const GPayCaseStudy: React.FC = () => {
  return (
    <div className="space-y-8 max-w-4xl mx-auto pb-12">
      {/* Overview Header */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 text-xs font-semibold border border-blue-200/60 dark:border-blue-900/40">
          <Compass className="w-3.5 h-3.5" />
          <span>UI/UX Architectural Case Study · Project 01</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Google Pay Mobile Interface Redesign Rationale
        </h2>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
          This case study presents a critical heuristic evaluation of digital payment UX patterns, detailing design decisions, cognitive psychology principles, and structural improvements introduced in this prototype.
        </p>
        <div className="p-3.5 rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200/60 dark:border-amber-900/40 text-amber-800 dark:text-amber-300 text-xs">
          <strong>Academic Note:</strong> All evaluations represent visual heuristic analyses and human-computer interaction observations (Nielsen Norman Group heuristics, Fitts’s Law, Hick’s Law), without claiming unpublished proprietary telemetry or invented laboratory statistics.
        </div>
      </div>

      {/* 1. Problematic Aspects in Original Design */}
      <section className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
        <div className="flex items-center gap-2.5 text-rose-600 dark:text-rose-400">
          <AlertTriangle className="w-5 h-5 shrink-0" />
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">
            1. Problematic Patterns in Traditional Digital Payment UIs
          </h3>
        </div>

        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
          While Google Pay is one of the most widely adopted payment applications globally, continuous feature expansion over several years has introduced interface friction:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 space-y-1.5">
            <h4 className="text-xs font-bold text-slate-900 dark:text-slate-100">
              Visual Clutter & Banner Contamination
            </h4>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Third-party promotional banners, promotional games (e.g. seasonal stamp rallies), and merchant offers frequently occupy the most prime screen viewport real estate, distracting users from their primary task: completing a financial transaction.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 space-y-1.5">
            <h4 className="text-xs font-bold text-slate-900 dark:text-slate-100">
              Buried Financial Utilities
            </h4>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Essential day-to-day user tasks—specifically checking one’s bank account balance or viewing past transaction history—are frequently placed at the very bottom of long scrollable feeds or nested inside account settings.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 space-y-1.5">
            <h4 className="text-xs font-bold text-slate-900 dark:text-slate-100">
              Mixed Entity Paradigms
            </h4>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Peer contacts (friends, family) and corporate billers (state electricity boards, telecom operators) were often displayed in identical circular avatar strips without clear semantic boundary, leading to category ambiguity.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 space-y-1.5">
            <h4 className="text-xs font-bold text-slate-900 dark:text-slate-100">
              Inconsistent Secondary Navigation
            </h4>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Navigating back from payment receipts sometimes skipped directly to the root screen instead of the conversation thread, causing spatial disorientation during multi-step payments.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Redesigned Navigation */}
      <section className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
        <div className="flex items-center gap-2.5 text-blue-600 dark:text-blue-400">
          <Compass className="w-5 h-5 shrink-0" />
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">
            2. Redesigned Navigation & Thumb Zone Architecture
          </h3>
        </div>

        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
          The redesigned prototype establishes a strict 3-tier vertical hierarchy aligned with Steven Hoober’s mobile "Thumb Zone" research:
        </p>

        <ul className="space-y-3 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
          <li className="flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
            <div>
              <strong className="text-slate-900 dark:text-slate-100">High-Reachable Thumb Zone (Bottom 40%):</strong> Quick primary action triggers (Scan & Pay, Send Money, Receive QR, Bank Balance) sit within comfortable one-handed reach of the average adult thumb without requiring hand repositioning.
            </div>
          </li>
          <li className="flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
            <div>
              <strong className="text-slate-900 dark:text-slate-100">Persistent 4-Tab Bottom Dock:</strong> A fixed bottom navigation bar (Home, Activity, Rewards, Profile) provides 100% predictable, single-tap transitions to any core section of the app.
            </div>
          </li>
          <li className="flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
            <div>
              <strong className="text-slate-900 dark:text-slate-100">Explicit Backward State Breadcrumbs:</strong> Every child screen (Send, Confirm, Receipt) includes a visible left chevron with clear labels so users never feel trapped.
            </div>
          </li>
        </ul>
      </section>

      {/* 3. Grouping Related Actions (Hick's & Miller's Law) */}
      <section className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
        <div className="flex items-center gap-2.5 text-indigo-600 dark:text-indigo-400">
          <Sliders className="w-5 h-5 shrink-0" />
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">
            3. Grouping Related Actions to Minimize Cognitive Load
          </h3>
        </div>

        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
          According to <em>Hick’s Law</em> ($T = b \cdot \log_2(n + 1)$), the time required to make a decision increases logarithmically with the number and complexity of choices. The redesign applies deliberate cognitive chunking:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
          <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60">
            <div className="text-xs font-bold text-slate-900 dark:text-white mb-1">Peer Transfers</div>
            <p className="text-xs text-slate-500">
              Segregated into a dedicated "People" carousel showcasing contact names and avatars, distinct from automated services.
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60">
            <div className="text-xs font-bold text-slate-900 dark:text-white mb-1">Utility & Bills</div>
            <p className="text-xs text-slate-500">
              Chunked into 5 standardized categories (Electricity, Mobile, Water, Internet, Card) with distinct category color badges.
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60">
            <div className="text-xs font-bold text-slate-900 dark:text-white mb-1">Bank Utilities</div>
            <p className="text-xs text-slate-500">
              Direct elevated action for "Check Balance" on the home dashboard, eliminating 4 previously required sub-menu taps.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Typography Improvements */}
      <section className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
        <div className="flex items-center gap-2.5 text-purple-600 dark:text-purple-400">
          <Type className="w-5 h-5 shrink-0" />
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">
            4. Typography and Tabular Figures for Financial Readability
          </h3>
        </div>

        <div className="space-y-3 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
          <p>
            In financial user interfaces, typographic ambiguity directly causes transaction errors. The redesign implements:
          </p>
          <ul className="space-y-2 list-disc list-inside">
            <li>
              <strong className="text-slate-900 dark:text-white">Tabular Figures (font-variant-numeric: tabular-nums):</strong> All financial currency amounts (e.g. ₹1,450.00 vs ₹350.00) use fixed-width numeric figures, preventing visual jitter and ensuring vertical decimal alignment in transaction ledgers.
            </li>
            <li>
              <strong className="text-slate-900 dark:text-white">Minimum 12px Metadata Rule:</strong> No secondary metadata (timestamp, UTR, note) is rendered below 11px–12px, solving the illegibility common in small mobile screens under bright outdoor sunlight.
            </li>
            <li>
              <strong className="text-slate-900 dark:text-white">Optical Weight Balancing:</strong> High-importance elements (amount entered, recipient name) use 700 Bold / 800 ExtraBold, creating unambiguous scan paths for the human eye.
            </li>
          </ul>
        </div>
      </section>

      {/* 5. Consistent Iconography */}
      <section className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
        <div className="flex items-center gap-2.5 text-emerald-600 dark:text-emerald-400">
          <ShieldCheck className="w-5 h-5 shrink-0" />
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">
            5. Consistent Iconography & Visual Recognition
          </h3>
        </div>

        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
          Icon recognition relies on consistency in stroke weight, bounding box proportions, and universal semantic metaphors:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-600 dark:text-slate-400">
          <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 space-y-1">
            <span className="font-semibold text-slate-900 dark:text-white">2.0px Consistent Stroke Geometry</span>
            <p>Every icon in the redesigned prototype uses uniform Lucide React vector geometry, avoiding mismatched line weights.</p>
          </div>
          <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 space-y-1">
            <span className="font-semibold text-slate-900 dark:text-white">Paired Text Labels</span>
            <p>Following Jakob Nielsen’s recognition-over-recall heuristic, no action icon appears as a mysterious standalone symbol without an accompanying text label.</p>
          </div>
        </div>
      </section>

      {/* 6. Visual Hierarchy & Progressive Disclosure */}
      <section className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
        <div className="flex items-center gap-2.5 text-cyan-600 dark:text-cyan-400">
          <Eye className="w-5 h-5 shrink-0" />
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">
            6. Visual Hierarchy & Progressive Disclosure
          </h3>
        </div>

        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
          Instead of overwhelming the user on a single screen with account numbers, IFSC codes, UPI handles, and fee breakdowns, the redesigned flow applies <em>Progressive Disclosure</em>:
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-2 text-xs font-semibold text-slate-700 dark:text-slate-300 pt-2">
          <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-center flex-1 w-full">
            1. Select Recipient
          </div>
          <ArrowRight className="w-4 h-4 text-slate-400 shrink-0 hidden sm:block" />
          <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-center flex-1 w-full">
            2. Enter Amount & Note
          </div>
          <ArrowRight className="w-4 h-4 text-slate-400 shrink-0 hidden sm:block" />
          <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-center flex-1 w-full">
            3. Confirm & Authorize
          </div>
          <ArrowRight className="w-4 h-4 text-slate-400 shrink-0 hidden sm:block" />
          <div className="p-2.5 rounded-xl bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 text-center flex-1 w-full">
            4. Verified Receipt
          </div>
        </div>
      </section>

      {/* 7. Reducing Navigation Steps */}
      <section className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
        <div className="flex items-center gap-2.5 text-amber-600 dark:text-amber-400">
          <MousePointerClick className="w-5 h-5 shrink-0" />
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">
            7. Step Reduction Comparison: Baseline vs Redesigned Flow
          </h3>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-slate-200 dark:border-slate-800 text-slate-400 uppercase font-mono">
                <th className="py-2.5 pr-4">Task Workflow</th>
                <th className="py-2.5 px-4 text-rose-600 dark:text-rose-400">Original Baseline</th>
                <th className="py-2.5 px-4 text-emerald-600 dark:text-emerald-400">Redesigned Prototype</th>
                <th className="py-2.5 pl-4 text-slate-700 dark:text-slate-300">UX Improvement</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-600 dark:text-slate-400">
              <tr>
                <td className="py-3 pr-4 font-semibold text-slate-900 dark:text-white">Check Bank Balance</td>
                <td className="py-3 px-4">Scroll to page bottom → Tap "Check balance" → Select bank → PIN</td>
                <td className="py-3 px-4 font-semibold text-emerald-600 dark:text-emerald-400">1 tap on Home Quick Action → PIN</td>
                <td className="py-3 pl-4">Eliminates 3 scroll gestures and 2 screen loads</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-semibold text-slate-900 dark:text-white">Send Money to Recent Peer</td>
                <td className="py-3 px-4">Tap "New Payment" or search → find contact → open chat → tap Pay</td>
                <td className="py-3 px-4 font-semibold text-emerald-600 dark:text-emerald-400">Direct tap on Contact Avatar on Home</td>
                <td className="py-3 pl-4">Reduces 3 taps down to 1 direct intent tap</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-semibold text-slate-900 dark:text-white">Show My UPI QR Code</td>
                <td className="py-3 px-4">Tap profile image top-right → tap QR icon → view modal</td>
                <td className="py-3 px-4 font-semibold text-emerald-600 dark:text-emerald-400">Direct "Receive" button in Quick Actions</td>
                <td className="py-3 pl-4">Instant discoverability without nested profile diving</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};
