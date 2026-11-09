import React, { useState } from 'react';
import { 
  INSTAGRAM_COLORS, 
  INSTAGRAM_TYPOGRAPHY 
} from '../../data/mockData';
import { ColorToken, TypographyToken } from '../../types';
import { 
  Palette, 
  Type, 
  Sparkles, 
  CheckCircle2, 
  AlertTriangle, 
  Sliders, 
  Eye, 
  ArrowRight, 
  Compass, 
  Layers, 
  Scale, 
  Contrast,
  Check,
  X,
  Heart,
  MessageCircle,
  Bookmark,
  Share2,
  MoreHorizontal
} from 'lucide-react';

export const InstagramCritiqueProject: React.FC = () => {
  const [selectedColor, setSelectedColor] = useState<ColorToken>(INSTAGRAM_COLORS[0]);
  const [activeSection, setActiveSection] = useState<'all' | 'colors' | 'typography' | 'comparison' | 'verdict'>('all');
  const [inspectMode, setInspectMode] = useState<'original' | 'redesigned'>('redesigned');
  const [isLiked, setIsLiked] = useState(true);
  const [likeCount, setLikeCount] = useState(1482);
  const [isSaved, setIsSaved] = useState(false);

  return (
    <div className="space-y-8 max-w-7xl mx-auto pb-12">
      {/* Top Banner */}
      <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <div className="text-xs font-bold text-pink-600 dark:text-pink-400 uppercase tracking-wider">
              PROJECT 03
            </div>
            <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Instagram – Color and Typography Critique
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5">
              A comprehensive visual design heuristic analysis examining brand color psychology, typographic hierarchy, and accessibility trade-offs.
            </p>
          </div>

          {/* Quick Category Filter */}
          <div className="flex items-center gap-1 p-1 bg-slate-100 dark:bg-slate-800 rounded-xl text-xs font-semibold">
            {(['all', 'colors', 'typography', 'comparison', 'verdict'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveSection(tab)}
                className={`px-3 py-1.5 rounded-lg capitalize transition-colors cursor-pointer ${
                  activeSection === tab
                    ? 'bg-white dark:bg-slate-900 text-pink-600 dark:text-pink-400 shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {tab === 'all' ? 'All Sections' : tab}
              </button>
            ))}
          </div>
        </div>

        <div className="p-3 rounded-xl bg-pink-50 dark:bg-pink-950/30 border border-pink-200/60 dark:border-pink-900/40 text-pink-900 dark:text-pink-200 text-xs">
          <strong>Illustrative Disclaimer:</strong> Colors and font specs listed here represent widely documented public UI values used for academic design critique and heuristic evaluation, rather than an official internal brand book specification.
        </div>
      </div>

      {/* A. Introduction Section */}
      {(activeSection === 'all' || activeSection === 'colors') && (
        <section className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2.5 text-pink-600 dark:text-pink-400">
              <Compass className="w-5 h-5 shrink-0" />
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                A. Platform Overview & Role of Visual Design
              </h2>
            </div>
            <span className="text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
              Taxonomy: Verified Facts & Functional Role
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            <div className="space-y-3">
              <p>
                <span className="inline-block px-1.5 py-0.5 mr-1.5 rounded bg-blue-100 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 text-[10px] font-mono font-bold uppercase">
                  Verified Fact
                </span>
                <strong>Platform History & Core Media:</strong> Launched in 2010 and acquired by Meta (formerly Facebook, Inc.) in 2012, Instagram transitioned from a square photographic application with simulated retro filters into a multi-format visual media network spanning Feeds, Ephemeral Stories (introduced 2016), and vertical short-form Reels (introduced 2020).
              </p>
              <p>
                <span className="inline-block px-1.5 py-0.5 mr-1.5 rounded bg-blue-100 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 text-[10px] font-mono font-bold uppercase">
                  Design Observation
                </span>
                <strong>Visual Architecture Purpose:</strong> The application interface is architected around a content-first principle: UI chrome elements recede into neutral monochrome so that saturated user-generated photography and video capture maximum visual attention.
              </p>
            </div>

            <div className="space-y-3">
              <p>
                <span className="inline-block px-1.5 py-0.5 mr-1.5 rounded bg-blue-100 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 text-[10px] font-mono font-bold uppercase">
                  Verified Fact
                </span>
                <strong>Documented Audience Cohorts:</strong>
              </p>
              <ul className="space-y-2 list-none">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-pink-500 mt-1.5 shrink-0" />
                  <div>
                    <strong className="text-slate-900 dark:text-slate-100">Everyday Consumers & Mobile Readers:</strong> High-frequency browsing under varying ambient illumination (indoor, outdoor sunlight, dark environments).
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-pink-500 mt-1.5 shrink-0" />
                  <div>
                    <strong className="text-slate-900 dark:text-slate-100">Visual Creators & Media Publishers:</strong> Demanding high visual color integrity, minimal UI intrusion, and uncompromised aspect ratio rendering.
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-pink-500 mt-1.5 shrink-0" />
                  <div>
                    <strong className="text-slate-900 dark:text-slate-100">E-Commerce & Commercial Brands:</strong> Relying on prominent calls to action (Shop Now, Visit Site) and legible pricing metadata.
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
      )}

      {/* B. Color Analysis */}
      {(activeSection === 'all' || activeSection === 'colors') && (
        <section className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2.5 text-pink-600 dark:text-pink-400">
              <Palette className="w-5 h-5 shrink-0" />
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                B. Color Palette & Emotional Influence Analysis
              </h2>
            </div>
            <span className="text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full bg-pink-50 dark:bg-pink-950/60 text-pink-700 dark:text-pink-300 border border-pink-200 dark:border-pink-800">
              Taxonomy: Mathematical Contrast & Perceptual Salience
            </span>
          </div>

          {/* Interactive Palette Inspector */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                Interactive Color Tokens (Evaluated Contrast & WCAG Limits)
              </div>
              <span className="text-[11px] text-slate-400 font-mono">Click token to inspect calculations</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2.5">
              {INSTAGRAM_COLORS.map((c) => (
                <button
                  key={c.name}
                  onClick={() => setSelectedColor(c)}
                  className={`p-2.5 rounded-xl border text-left transition-all cursor-pointer group ${
                    selectedColor.name === c.name
                      ? 'ring-2 ring-pink-500 border-pink-500 shadow-md scale-102'
                      : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                  }`}
                >
                  <div 
                    className="w-full h-12 rounded-lg shadow-inner mb-2 border border-black/10 flex items-center justify-center"
                    style={{ backgroundColor: c.hex }}
                  >
                    {selectedColor.name === c.name && (
                      <Check className="w-4 h-4 stroke-[3]" style={{ color: c.textOnColor }} />
                    )}
                  </div>
                  <div className="font-bold text-xs text-slate-900 dark:text-white truncate">
                    {c.name}
                  </div>
                  <div className="font-mono text-[11px] text-slate-500 truncate">
                    {c.hex}
                  </div>
                </button>
              ))}
            </div>

            {/* Selected Color Inspector Box */}
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 space-y-2">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <div 
                    className="w-4 h-4 rounded-full border border-black/10" 
                    style={{ backgroundColor: selectedColor.hex }} 
                  />
                  <h4 className="font-bold text-slate-900 dark:text-white text-sm">
                    {selectedColor.name} ({selectedColor.hex})
                  </h4>
                  <span className="text-xs text-slate-500">· {selectedColor.role}</span>
                </div>

                <div className="flex items-center gap-2 font-mono text-xs">
                  <span className="px-2 py-0.5 rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300">
                    RGB: {selectedColor.rgb}
                  </span>
                  <span className={`px-2 py-0.5 rounded font-semibold ${
                    selectedColor.wcagCompliant 
                      ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300' 
                      : 'bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300'
                  }`}>
                    {selectedColor.contrastRatioWhite}
                  </span>
                </div>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                <span className="font-semibold text-slate-900 dark:text-slate-100">Evaluation: </span>
                {selectedColor.description}
              </p>
            </div>
          </div>

          {/* Color Dimension Evaluation Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-bold text-xs text-pink-600 dark:text-pink-400 uppercase tracking-wider">
                  1. Brand Identity
                </span>
                <span className="px-1.5 py-0.5 rounded bg-blue-100 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 text-[10px] font-mono font-bold uppercase">
                  Verified Fact
                </span>
              </div>
              <div className="text-sm font-semibold text-slate-900 dark:text-white">
                Sunset Mesh Gradient Identity
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                In 2016, Instagram replaced its skeuomorphic brown camera icon with a flat glyph over a multi-stop gradient (#833AB4, #E1306C, #F77737, #FFDC80). This gradient anchors corporate identity, app launcher recognition, and brand recall across marketing collateral.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-bold text-xs text-pink-600 dark:text-pink-400 uppercase tracking-wider">
                  2. Visual Salience
                </span>
                <span className="px-1.5 py-0.5 rounded bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 text-[10px] font-mono font-bold uppercase">
                  Design Observation
                </span>
              </div>
              <div className="text-sm font-semibold text-slate-900 dark:text-white">
                Salient Cues in Unviewed Story Rings
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                Avatars with unwatched ephemeral stories are enveloped in the high-saturation brand gradient ring. The sudden hue contrast against the neutral gray/white header serves as a salient visual orienting stimulus, drawing involuntary eye fixation toward unconsumed feeds.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-bold text-xs text-pink-600 dark:text-pink-400 uppercase tracking-wider">
                  3. Aesthetic Subservience
                </span>
                <span className="px-1.5 py-0.5 rounded bg-purple-100 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 text-[10px] font-mono font-bold uppercase">
                  Design Observation
                </span>
              </div>
              <div className="text-sm font-semibold text-slate-900 dark:text-white">
                The "Neutral Gallery Canvas"
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                By restricting permanent chrome (top navigation, bottom tab bar, borders) to neutral black (#000000), white (#FFFFFF), and border dividers (#DBDBDB), the UI functions as a non-competing white-cube gallery wall that does not bias user-photographed color palettes.
              </p>
            </div>
          </div>
        </section>
      )}

      {/* C. Typography Analysis */}
      {(activeSection === 'all' || activeSection === 'typography') && (
        <section className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2.5 text-indigo-600 dark:text-indigo-400">
              <Type className="w-5 h-5 shrink-0" />
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                C. Typography Analysis & Hierarchical Breakdown
              </h2>
            </div>
            <span className="text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800">
              Taxonomy: Illustrative Specs & Heuristic Observations
            </span>
          </div>

          <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 text-xs text-slate-600 dark:text-slate-400 leading-relaxed space-y-1">
            <div className="font-semibold text-slate-900 dark:text-white flex items-center gap-1.5">
              <span className="px-1.5 py-0.5 rounded bg-blue-100 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 text-[10px] font-mono font-bold uppercase">
                Verified Fact
              </span>
              <span>Platform Typeface Resolution</span>
            </div>
            <p>
              Instagram does not download heavy web fonts for general body text in mobile apps; it binds to operating system native stacks—<strong>SF Pro</strong> on iOS and <strong>Roboto</strong> on Android—paired with their proprietary custom headline face <em>Instagram Sans</em>.
            </p>
            <p className="text-[11px] text-slate-500 italic">
              <strong>Illustrative Design Specification Note:</strong> Font sizes and leading values tabulated below are measured approximations taken from standard 390px-width mobile viewport inspection, provided for comparative pedagogical critique.
            </p>
          </div>

          {/* Typography Token Matrix */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-800 text-slate-400 uppercase font-mono">
                  <th className="py-2.5 pr-4">UI Role</th>
                  <th className="py-2.5 px-3">Typeface Family</th>
                  <th className="py-2.5 px-3">Computed Size</th>
                  <th className="py-2.5 px-3">Weight</th>
                  <th className="py-2.5 px-3">Live Sample</th>
                  <th className="py-2.5 pl-3">Heuristic Observation</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-600 dark:text-slate-400">
                {INSTAGRAM_TYPOGRAPHY.map((t) => (
                  <tr key={t.level}>
                    <td className="py-3 pr-4 font-bold text-slate-900 dark:text-white">{t.level}</td>
                    <td className="py-3 px-3 font-mono text-slate-500">{t.name}</td>
                    <td className="py-3 px-3 font-mono">{t.size}</td>
                    <td className="py-3 px-3">{t.weight}</td>
                    <td className="py-3 px-3 font-medium text-slate-800 dark:text-slate-200 truncate max-w-[140px] italic">
                      "{t.sampleText}"
                    </td>
                    <td className="py-3 pl-3 text-slate-500">{t.usage}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Key Typographic Trade-offs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-bold text-xs text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
                  Readability Strengths
                </span>
                <span className="px-1.5 py-0.5 rounded bg-blue-100 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 text-[10px] font-mono font-bold uppercase">
                  Design Observation
                </span>
              </div>
              <ul className="text-xs text-slate-500 space-y-1.5 list-disc list-inside">
                <li>System native fonts render at full native screen resolution with hardware subpixel antialiasing.</li>
                <li>Clear username emphasis (SemiBold 600) prevents user impersonation mistakes in dense feeds.</li>
                <li>Tight line spacing maximizes media viewport real estate on compact 5.8"–6.1" phone displays.</li>
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-bold text-xs text-rose-600 dark:text-rose-400 uppercase tracking-wider">
                  Accessibility Vulnerabilities
                </span>
                <span className="px-1.5 py-0.5 rounded bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 text-[10px] font-mono font-bold uppercase">
                  Design Observation
                </span>
              </div>
              <ul className="text-xs text-slate-500 space-y-1.5 list-disc list-inside">
                <li>11px timestamps ("2 HOURS AGO") fall below the recommended 12px visual comfort threshold for presbyopic readers.</li>
                <li>Tight line-height (1.28) in multiline captions creates visual crowding during sustained mobile reading.</li>
                <li>Dynamic system text scaling sometimes causes abrupt truncation of profile bio lines rather than graceful reflow.</li>
              </ul>
            </div>
          </div>
        </section>
      )}

      {/* D. Positive Aspects vs E. Areas for Improvement */}
      {(activeSection === 'all' || activeSection === 'typography') && (
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Positive Aspects */}
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400">
                <CheckCircle2 className="w-5 h-5 shrink-0" />
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  D. Notable Design Strengths
                </h3>
              </div>
              <span className="px-1.5 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 text-[10px] font-mono font-bold uppercase">
                Observation
              </span>
            </div>

            <ul className="space-y-3 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 dark:text-white">Icon-First Mental Model:</strong> Navigation relies on internationally understood vector affordances (Heart for likes, Bubble for comments, Paper plane for direct shares).
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 dark:text-white">Consistent Neutral Backdrop:</strong> Minimizing chrome decoration ensures maximum perceptual contrast for user-created photography.
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 dark:text-white">High Contrast in Core Actions:</strong> Black glyphs on white canvas guarantee a pristine 21:1 contrast ratio for primary controls.
                </div>
              </li>
            </ul>
          </div>

          {/* Areas for Improvement */}
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-rose-600 dark:text-rose-400">
                <AlertTriangle className="w-5 h-5 shrink-0" />
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  E. Evaluated Usability Deficits
                </h3>
              </div>
              <span className="px-1.5 py-0.5 rounded bg-rose-100 dark:bg-rose-950/60 text-rose-800 dark:text-rose-300 text-[10px] font-mono font-bold uppercase">
                Deficit Audit
              </span>
            </div>

            <ul className="space-y-3 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              <li className="flex items-start gap-2">
                <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 dark:text-white">Sub-AA Dark Mode Contrast:</strong> Muted metadata (#737373) against pure OLED black (#000000) achieves a 4.41:1 contrast ratio, failing the WCAG 1.4.3 Level AA requirement of 4.5:1 for body copy.
                </div>
              </li>
              <li className="flex items-start gap-2">
                <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 dark:text-white">Crowded Tap Targets:</strong> In comment threads, reply buttons, timestamp badges, and like hearts sit less than 8px apart, creating risk of accidental touches.
                </div>
              </li>
              <li className="flex items-start gap-2">
                <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 dark:text-white">Sub-12px Font Sizing:</strong> Micro-metadata at 11px violates general digital accessibility recommendations under high glare or low-vision conditions.
                </div>
              </li>
            </ul>
          </div>
        </section>
      )}

      {/* F. Redesign Recommendations & Interactive Comparative Prototype */}
      {(activeSection === 'all' || activeSection === 'comparison') && (
        <section className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <div className="flex items-center gap-2.5 text-blue-600 dark:text-blue-400">
                <Sliders className="w-5 h-5 shrink-0" />
                <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                  F. Side-by-Side Comparative Showcase
                </h2>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Toggle between the baseline problematic Instagram post pattern and the proposed accessible redesign.
              </p>
            </div>

            {/* Interactive Toggle */}
            <div className="flex items-center gap-1.5 p-1 bg-slate-100 dark:bg-slate-800 rounded-xl text-xs font-semibold shrink-0">
              <button
                onClick={() => setInspectMode('original')}
                className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                  inspectMode === 'original'
                    ? 'bg-rose-500 text-white shadow-xs'
                    : 'text-slate-600 dark:text-slate-400'
                }`}
              >
                [Baseline] Problematic UI
              </button>
              <button
                onClick={() => setInspectMode('redesigned')}
                className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                  inspectMode === 'redesigned'
                    ? 'bg-emerald-600 text-white shadow-xs'
                    : 'text-slate-600 dark:text-slate-400'
                }`}
              >
                [Recommendation] Accessible UI
              </button>
            </div>
          </div>

          {/* Interactive Card Comparison */}
          <div className="max-w-md mx-auto rounded-3xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 overflow-hidden shadow-xl">
            {/* Post Header */}
            <div className="p-3.5 flex items-center justify-between border-b border-slate-100 dark:border-slate-900">
              <div className="flex items-center gap-2.5">
                <div className={`w-9 h-9 rounded-full p-0.5 ${
                  inspectMode === 'redesigned'
                    ? 'bg-gradient-to-tr from-purple-600 to-pink-500'
                    : 'bg-gradient-to-tr from-amber-400 to-rose-600'
                }`}>
                  <div className="w-full h-full rounded-full bg-white dark:bg-slate-950 flex items-center justify-center font-bold text-xs text-slate-900 dark:text-white">
                    SL
                  </div>
                </div>
                <div>
                  <div className="font-bold text-xs text-slate-900 dark:text-white flex items-center gap-1">
                    <span>sakthi_ui_lab</span>
                    <span className="text-[10px] text-blue-500">●</span>
                  </div>
                  <div className="text-[10px] text-slate-400">Design Studio · Nagapattinam</div>
                </div>
              </div>
              <MoreHorizontal className="w-4 h-4 text-slate-400" />
            </div>

            {/* Post Image Visual */}
            <div className="h-64 bg-gradient-to-br from-indigo-900 via-slate-900 to-purple-950 p-6 flex flex-col justify-between text-white relative">
              <div className="text-right">
                <span className="px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-xs font-mono text-[10px]">
                  1/3
                </span>
              </div>
              <div className="space-y-1">
                <span className="text-[10px] font-bold tracking-wider text-pink-400 uppercase">
                  Design Architecture 2026
                </span>
                <div className="text-lg font-extrabold leading-snug">
                  Accessible Typography & Color Systems
                </div>
              </div>
            </div>

            {/* Action Bar */}
            <div className="p-3.5 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => {
                      setIsLiked(!isLiked);
                      setLikeCount(prev => isLiked ? prev - 1 : prev + 1);
                    }}
                    className="cursor-pointer transition-transform active:scale-125"
                    aria-label={isLiked ? "Unlike post" : "Like post"}
                  >
                    <Heart className={`w-5 h-5 transition-colors ${
                      isLiked ? 'text-rose-500 fill-rose-500' : 'text-slate-700 dark:text-slate-300'
                    }`} />
                  </button>
                  <button className="cursor-pointer" aria-label="Comment">
                    <MessageCircle className="w-5 h-5 text-slate-700 dark:text-slate-300" />
                  </button>
                  <button className="cursor-pointer" aria-label="Share">
                    <Share2 className="w-5 h-5 text-slate-700 dark:text-slate-300" />
                  </button>
                </div>
                <button
                  onClick={() => setIsSaved(!isSaved)}
                  className="cursor-pointer"
                  aria-label={isSaved ? "Remove from bookmarks" : "Save post"}
                >
                  <Bookmark className={`w-5 h-5 transition-colors ${
                    isSaved ? 'text-blue-600 fill-blue-600' : 'text-slate-700 dark:text-slate-300'
                  }`} />
                </button>
              </div>

              {/* Likes & Captions (Conditioned by Mode) */}
              <div className="space-y-1.5 text-slate-900 dark:text-white">
                <div className="text-xs font-bold tabular-nums">
                  {likeCount.toLocaleString()} likes
                </div>

                {inspectMode === 'original' ? (
                  /* Problematic Original Style: 11px gray text, tight 1.1 line-height */
                  <div className="space-y-1">
                    <p className="text-[13px] leading-tight text-slate-800 dark:text-slate-200">
                      <strong className="font-semibold">sakthi_ui_lab</strong> Examining why low-contrast 11px timestamps fail outdoor readability under direct sunlight...
                    </p>
                    <div className="text-[11px] text-[#737373] tracking-tight">
                      3 HOURS AGO · SEE TRANSLATION
                    </div>
                    <div className="p-2 rounded bg-rose-50 dark:bg-rose-950/40 text-rose-700 dark:text-rose-300 text-[10px] font-medium border border-rose-200 dark:border-rose-900/60">
                      ⚠️ Heuristic Deficit: #737373 on OLED black achieves 4.41:1 contrast, failing WCAG 1.4.3 Level AA (4.5:1).
                    </div>
                  </div>
                ) : (
                  /* Redesigned Accessible Style: 13px high-contrast metadata, 1.4 line-height, distinct interactive hit areas */
                  <div className="space-y-1.5">
                    <p className="text-sm leading-relaxed text-slate-900 dark:text-slate-100">
                      <strong className="font-bold">sakthi_ui_lab</strong> Upgraded to 14px body with 1.4 line-height, improved contrast ratio of 7.2:1, and generous touch targets.
                    </p>
                    <div className="flex items-center gap-2 text-xs font-medium text-slate-600 dark:text-slate-300">
                      <span>3 hours ago</span>
                      <span aria-hidden="true">·</span>
                      <button className="text-indigo-600 dark:text-indigo-400 font-semibold hover:underline">
                        See translation
                      </button>
                    </div>
                    <div className="p-2 rounded bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 text-[10px] font-medium border border-emerald-200 dark:border-emerald-900/60">
                      ✓ Accessible Fix: Text size ≥ 13px, line-height 1.4, evaluated ≥ 7:1 contrast on dark/light surfaces.
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* G. Final Verdict */}
      {(activeSection === 'all' || activeSection === 'verdict') && (
        <section className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2.5 text-indigo-600 dark:text-indigo-400">
              <Scale className="w-5 h-5 shrink-0" />
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                G. Final Balanced Evaluation: Help or Hinder?
              </h2>
            </div>
            <span className="text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
              Taxonomy: Synthesis & Recommendations
            </span>
          </div>

          <div className="space-y-3 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            <p>
              Does Instagram's color and typography system help or hinder the user interface? A balanced, evidence-based synthesis reveals:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 space-y-1.5">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-emerald-600 dark:text-emerald-400 text-xs uppercase tracking-wider">
                    Where It Helps (Branding & Media Dominance)
                  </h4>
                  <span className="px-1.5 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 text-[10px] font-mono font-bold uppercase">
                    Observation
                  </span>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">
                  The monochromatic black/white shell excels at receding into the background, ensuring user photographs remain the undisputed focal point. The iconic sunset gradient drives immense brand recognition and emotional engagement without polluting individual content posts.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 space-y-1.5">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-rose-600 dark:text-rose-400 text-xs uppercase tracking-wider">
                    Where It Hinders (Accessibility & Scalability)
                  </h4>
                  <span className="px-1.5 py-0.5 rounded bg-rose-100 dark:bg-rose-950/60 text-rose-800 dark:text-rose-300 text-[10px] font-mono font-bold uppercase">
                    Deficit
                  </span>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">
                  In secondary and tertiary content—such as timestamps, comments, translated captions, and profile bios—the aggressive pursuit of visual minimalism creates readability barriers for users with low visual acuity, aging eyesight, or high ambient glare environments.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-900/60 space-y-1 text-indigo-900 dark:text-indigo-200">
              <div className="flex items-center gap-1.5 font-bold text-xs uppercase tracking-wider">
                <span className="px-1.5 py-0.5 rounded bg-indigo-600 text-white text-[10px] font-mono">
                  Recommendation
                </span>
                <span>Engineering Takeaway for Modern Design Systems</span>
              </div>
              <p className="text-xs leading-relaxed">
                Instagram's visual language is brilliantly engineered for marketing recall and content primacy, but requires intentional accessibility upgrades in metadata sizing (minimum 13px) and dark mode contrast (#A8A8A8 rather than #737373) to satisfy inclusive modern web standards.
              </p>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};
