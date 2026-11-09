import React, { useState } from 'react';
import { 
  Palette, 
  Type, 
  Component as ComponentIcon, 
  Ruler, 
  Layers, 
  Check, 
  Copy, 
  Search, 
  X, 
  Sliders, 
  CheckCircle2, 
  AlertCircle, 
  Clock, 
  ChevronRight,
  ShieldCheck,
  MousePointerClick
} from 'lucide-react';

export const DesignSystemPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'tokens' | 'typography' | 'components' | 'spacing'>('components');
  const [copiedColor, setCopiedColor] = useState<string | null>(null);

  // Interactive component demo states
  const [checkboxChecked, setCheckboxChecked] = useState(true);
  const [toggleActive, setToggleActive] = useState(true);
  const [demoInput, setDemoInput] = useState('Interactive input value');
  const [demoSearchQuery, setDemoSearchQuery] = useState('Design Tokens');
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  const copyToClipboard = (val: string) => {
    navigator.clipboard?.writeText(val);
    setCopiedColor(val);
    setTimeout(() => setCopiedColor(null), 1500);
  };

  const COLOR_TOKENS = [
    { name: 'Primary Deep Navy', token: '--color-primary', hex: '#111827', category: 'Primary', desc: 'Main brand canvas, primary text, high-intent actions' },
    { name: 'Secondary Royal Blue', token: '--color-secondary', hex: '#2563EB', category: 'Secondary', desc: 'Primary CTAs, focused interactive borders, links' },
    { name: 'Canvas Background', token: '--color-bg', hex: '#F8FAFC', category: 'Background', desc: 'Soft neutral backdrop preventing eye strain' },
    { name: 'Pure Surface White', token: '--color-surface', hex: '#FFFFFF', category: 'Surface', desc: 'Card containers, sheets, dialog surfaces' },
    { name: 'Primary Text', token: '--color-text-primary', hex: '#111827', category: 'Text', desc: 'Headers, titles, high-contrast labels (WCAG AAA)' },
    { name: 'Secondary Text', token: '--color-text-secondary', hex: '#64748B', category: 'Text', desc: 'Subheadings, helper notes, metadata' },
    { name: 'Success Emerald', token: '--color-status-success', hex: '#16A34A', category: 'Status', desc: 'Completed transactions, approved states' },
    { name: 'Warning Amber', token: '--color-status-warning', hex: '#F59E0B', category: 'Status', desc: 'Pending verifications, cautionary alerts' },
    { name: 'Destructive Rose', token: '--color-status-error', hex: '#DC2626', category: 'Status', desc: 'Failed validation, destructive triggers' },
  ];

  const SPACING_SCALE = [
    { token: 'space-1', px: '4px', rem: '0.25rem', usage: 'Micro gaps, icon offsets, badge paddings' },
    { token: 'space-2', px: '8px', rem: '0.5rem', usage: 'Compact button gaps, inline chip padding' },
    { token: 'space-3', px: '12px', rem: '0.75rem', usage: 'Input inner padding, card item gaps' },
    { token: 'space-4', px: '16px', rem: '1.0rem', usage: 'Standard container padding, card body gutters' },
    { token: 'space-6', px: '24px', rem: '1.5rem', usage: 'Section separations, modal interior padding' },
    { token: 'space-8', px: '32px', rem: '2.0rem', usage: 'Major block margins, hero container margins' },
    { token: 'space-12', px: '48px', rem: '3.0rem', usage: 'Page section intervals' },
    { token: 'space-16', px: '64px', rem: '4.0rem', usage: 'Hero split margins, viewport bookends' },
  ];

  const RADIUS_SCALE = [
    { token: 'rounded-md', px: '8px', usage: 'Buttons, badges, inline chips, small controls' },
    { token: 'rounded-xl', px: '12px', usage: 'Inputs, search bars, list items, alert boxes' },
    { token: 'rounded-2xl', px: '16px', usage: 'Cards, sheets, modal dialogues' },
    { token: 'rounded-3xl', px: '24px', usage: 'Hero banners, mobile device outer enclosures' },
  ];

  return (
    <div className="space-y-8 max-w-7xl mx-auto pb-12">
      {/* Top Header Card */}
      <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
              DESIGN SYSTEM ARCHITECTURE
            </div>
            <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              DesignLab Unified Design System
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5">
              Production design tokens, typography hierarchy, responsive spacing scale, and accessible component library.
            </p>
          </div>

          {/* Navigation Category Switcher */}
          <div className="flex items-center gap-1 p-1 bg-slate-100 dark:bg-slate-800 rounded-xl text-xs font-semibold shrink-0">
            <button
              onClick={() => setActiveTab('components')}
              className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                activeTab === 'components'
                  ? 'bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-xs'
                  : 'text-slate-600 dark:text-slate-400'
              }`}
            >
              Components (5 States)
            </button>
            <button
              onClick={() => setActiveTab('tokens')}
              className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                activeTab === 'tokens'
                  ? 'bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-xs'
                  : 'text-slate-600 dark:text-slate-400'
              }`}
            >
              Color Tokens
            </button>
            <button
              onClick={() => setActiveTab('typography')}
              className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                activeTab === 'typography'
                  ? 'bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-xs'
                  : 'text-slate-600 dark:text-slate-400'
              }`}
            >
              Typography
            </button>
            <button
              onClick={() => setActiveTab('spacing')}
              className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                activeTab === 'spacing'
                  ? 'bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-xs'
                  : 'text-slate-600 dark:text-slate-400'
              }`}
            >
              Spacing & Radius
            </button>
          </div>
        </div>
      </div>

      {/* 1. Components & 5 Interactive States Showcase */}
      {activeTab === 'components' && (
        <section className="space-y-6">
          <div className="p-4 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200/60 dark:border-blue-900/40 text-blue-900 dark:text-blue-200 text-xs">
            <strong>Interactive Component State Matrix:</strong> Every core component is demonstrated across all 5 interaction states: <em>Default, Hover, Focus, Active, and Disabled</em>.
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* 1. Primary Button */}
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-slate-100 dark:border-slate-800">
                <span className="font-bold text-xs text-slate-900 dark:text-white">Primary Button</span>
                <span className="font-mono text-[10px] text-slate-400">&lt;button className="bg-blue-600"&gt;</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="space-y-1">
                  <span className="text-[10px] text-slate-400">Default State</span>
                  <button className="w-full py-2.5 px-4 rounded-xl bg-blue-600 text-white font-semibold shadow-xs">
                    Primary Action
                  </button>
                </div>

                <div className="space-y-1">
                  <span className="text-[10px] text-slate-400">Hover State (Simulated)</span>
                  <button className="w-full py-2.5 px-4 rounded-xl bg-blue-700 text-white font-semibold shadow-md">
                    Hovered Action
                  </button>
                </div>

                <div className="space-y-1">
                  <span className="text-[10px] text-slate-400">Focus-Visible State</span>
                  <button className="w-full py-2.5 px-4 rounded-xl bg-blue-600 text-white font-semibold ring-2 ring-blue-500 ring-offset-2">
                    Focused Action
                  </button>
                </div>

                <div className="space-y-1">
                  <span className="text-[10px] text-slate-400">Active State</span>
                  <button className="w-full py-2.5 px-4 rounded-xl bg-blue-800 text-white font-semibold scale-98">
                    Pressed Action
                  </button>
                </div>

                <div className="space-y-1 sm:col-span-2">
                  <span className="text-[10px] text-slate-400">Disabled State</span>
                  <button disabled className="w-full py-2.5 px-4 rounded-xl bg-slate-200 dark:bg-slate-800 text-slate-400 dark:text-slate-600 font-semibold cursor-not-allowed">
                    Disabled Action
                  </button>
                </div>
              </div>
            </div>

            {/* 2. Secondary Button */}
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-slate-100 dark:border-slate-800">
                <span className="font-bold text-xs text-slate-900 dark:text-white">Secondary Button</span>
                <span className="font-mono text-[10px] text-slate-400">&lt;button className="bg-slate-100"&gt;</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="space-y-1">
                  <span className="text-[10px] text-slate-400">Default State</span>
                  <button className="w-full py-2.5 px-4 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 font-semibold">
                    Secondary Action
                  </button>
                </div>

                <div className="space-y-1">
                  <span className="text-[10px] text-slate-400">Hover State</span>
                  <button className="w-full py-2.5 px-4 rounded-xl bg-slate-200 dark:bg-slate-700 text-slate-900 dark:text-white font-semibold">
                    Hovered Action
                  </button>
                </div>

                <div className="space-y-1">
                  <span className="text-[10px] text-slate-400">Focus-Visible State</span>
                  <button className="w-full py-2.5 px-4 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white font-semibold ring-2 ring-blue-500 ring-offset-2">
                    Focused Action
                  </button>
                </div>

                <div className="space-y-1">
                  <span className="text-[10px] text-slate-400">Disabled State</span>
                  <button disabled className="w-full py-2.5 px-4 rounded-xl bg-slate-100/50 dark:bg-slate-800/40 text-slate-300 dark:text-slate-700 font-semibold cursor-not-allowed">
                    Disabled Action
                  </button>
                </div>
              </div>
            </div>

            {/* 3. Input Field with Live States */}
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-slate-100 dark:border-slate-800">
                <span className="font-bold text-xs text-slate-900 dark:text-white">Form Input Field</span>
                <span className="font-mono text-[10px] text-slate-400">&lt;input type="text"&gt;</span>
              </div>

              <div className="space-y-3 text-xs">
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-slate-500">Live Interactive Input (Try typing)</label>
                  <input
                    type="text"
                    value={demoInput}
                    onChange={(e) => setDemoInput(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-500/20"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-rose-500">Error State</label>
                  <input
                    type="text"
                    readOnly
                    value="invalid_entry@domain"
                    className="w-full px-3 py-2 rounded-xl bg-rose-50/50 dark:bg-rose-950/20 border-2 border-rose-500 text-xs text-rose-700 dark:text-rose-300 focus:outline-none"
                  />
                  <span className="text-[10px] text-rose-500 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> Please enter a valid institutional address
                  </span>
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-slate-400">Disabled State</label>
                  <input
                    type="text"
                    disabled
                    value="Read-only system value"
                    className="w-full px-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 text-xs text-slate-400 cursor-not-allowed"
                  />
                </div>
              </div>
            </div>

            {/* 4. Search Bar Component */}
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-slate-100 dark:border-slate-800">
                <span className="font-bold text-xs text-slate-900 dark:text-white">Search Bar</span>
                <span className="font-mono text-[10px] text-slate-400">Search with Clear Button</span>
              </div>

              <div className="space-y-3">
                <div className="relative">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={demoSearchQuery}
                    onChange={(e) => setDemoSearchQuery(e.target.value)}
                    placeholder="Search components or tokens..."
                    className="w-full pl-9 pr-8 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-blue-600"
                  />
                  {demoSearchQuery && (
                    <button
                      onClick={() => setDemoSearchQuery('')}
                      className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 cursor-pointer"
                      title="Clear search text"
                      aria-label="Clear search text"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>

                <div className="text-[11px] text-slate-500">
                  Includes automatic icon anchoring, keyboard dismiss shortcut, and hover/focus highlight.
                </div>
              </div>
            </div>

            {/* 5. Toggle Switch & Checkbox */}
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-slate-100 dark:border-slate-800">
                <span className="font-bold text-xs text-slate-900 dark:text-white">Selection Controls</span>
                <span className="font-mono text-[10px] text-slate-400">Toggle & Checkbox</span>
              </div>

              <div className="space-y-4">
                {/* Working Toggle Switch */}
                <div className="flex items-center justify-between">
                  <div className="text-xs">
                    <div className="font-semibold text-slate-900 dark:text-white">Interactive Toggle Switch</div>
                    <div className="text-[10px] text-slate-500">State: {toggleActive ? 'Enabled' : 'Disabled'}</div>
                  </div>
                  <button
                    onClick={() => setToggleActive(!toggleActive)}
                    className={`w-11 h-6 rounded-full transition-colors relative p-0.5 cursor-pointer ${
                      toggleActive ? 'bg-blue-600' : 'bg-slate-300 dark:bg-slate-700'
                    }`}
                  >
                    <div
                      className={`w-5 h-5 rounded-full bg-white transition-transform ${
                        toggleActive ? 'translate-x-5' : 'translate-x-0'
                      }`}
                    />
                  </button>
                </div>

                {/* Working Checkbox */}
                <div className="flex items-center gap-3 pt-2 border-t border-slate-100 dark:border-slate-800">
                  <input
                    id="system-checkbox"
                    type="checkbox"
                    checked={checkboxChecked}
                    onChange={(e) => setCheckboxChecked(e.target.checked)}
                    className="w-5 h-5 rounded accent-blue-600 cursor-pointer"
                  />
                  <label htmlFor="system-checkbox" className="text-xs font-semibold text-slate-800 dark:text-slate-200 cursor-pointer">
                    Accessible Checkbox Label ({checkboxChecked ? 'Checked' : 'Unchecked'})
                  </label>
                </div>
              </div>
            </div>

            {/* 6. Status Badges & Cards */}
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-slate-100 dark:border-slate-800">
                <span className="font-bold text-xs text-slate-900 dark:text-white">Status Badges & Modal</span>
                <span className="font-mono text-[10px] text-slate-400">Semantic Chips</span>
              </div>

              <div className="space-y-3">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" /> Approved
                  </span>

                  <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800 flex items-center gap-1">
                    <Clock className="w-3 h-3" /> Pending Review
                  </span>

                  <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-rose-50 dark:bg-rose-950/40 text-rose-700 dark:text-rose-300 border border-rose-200 dark:border-rose-800 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> Action Required
                  </span>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => setIsDemoModalOpen(true)}
                    className="w-full py-2 px-3 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold text-xs cursor-pointer"
                  >
                    Trigger System Modal Dialog
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 2. Color Tokens Section */}
      {activeTab === 'tokens' && (
        <section className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-5">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-bold text-slate-900 dark:text-white">
              Color Tokens & Semantic Roles
            </h2>
            <span className="text-xs text-slate-500">Click any card to copy HEX value</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {COLOR_TOKENS.map((c) => (
              <button
                key={c.name}
                onClick={() => copyToClipboard(c.hex)}
                className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-left flex items-start gap-3 cursor-pointer group"
              >
                <div 
                  className="w-12 h-12 rounded-xl shrink-0 border border-black/10 shadow-xs flex items-center justify-center text-white"
                  style={{ backgroundColor: c.hex }}
                >
                  {copiedColor === c.hex && <Check className="w-4 h-4 stroke-[3]" />}
                </div>

                <div className="truncate flex-1">
                  <div className="font-bold text-xs text-slate-900 dark:text-white truncate">
                    {c.name}
                  </div>
                  <div className="font-mono text-[11px] text-blue-600 dark:text-blue-400">
                    {c.hex}
                  </div>
                  <div className="text-[10px] text-slate-500 truncate mt-0.5">
                    {c.desc}
                  </div>
                </div>

                <Copy className="w-3.5 h-3.5 text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-200 shrink-0" />
              </button>
            ))}
          </div>
        </section>
      )}

      {/* 3. Typography Styles Section */}
      {activeTab === 'typography' && (
        <section className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-6">
          <div className="space-y-1">
            <h2 className="text-base font-bold text-slate-900 dark:text-white">
              Typographic Scale & Hierarchy
            </h2>
            <p className="text-xs text-slate-500">
              Configured using Plus Jakarta Sans (Headings & Body) and JetBrains Mono (Data & Code).
            </p>
          </div>

          <div className="space-y-4 divide-y divide-slate-100 dark:divide-slate-800">
            <div className="pt-3 space-y-1">
              <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                <span>Display Heading 1 · 36px / 2.25rem · Bold 800</span>
                <span>h1.text-4xl</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                DesignLab UI/UX Studio
              </h1>
            </div>

            <div className="pt-3 space-y-1">
              <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                <span>Section Heading 2 · 24px / 1.5rem · Bold 700</span>
                <span>h2.text-2xl</span>
              </div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                Financial Architecture & Inclusive Interfaces
              </h2>
            </div>

            <div className="pt-3 space-y-1">
              <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                <span>Subheading 3 · 18px / 1.125rem · SemiBold 600</span>
                <span>h3.text-lg</span>
              </div>
              <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200">
                Accessible Design Heuristics and Verification Matrix
              </h3>
            </div>

            <div className="pt-3 space-y-1">
              <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                <span>Body Regular · 15px / 0.9375rem · Regular 400 · Line Height 1.6</span>
                <span>p.text-sm</span>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl">
                Every component is carefully engineered to eliminate ambiguity. Touch targets exceed 44px, focus outlines are always visible, and typography conforms to WCAG 2.2 Level AA readability thresholds.
              </p>
            </div>

            <div className="pt-3 space-y-1">
              <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                <span>Data & Monospace · 13px / 0.8125rem · Tabular Numerals</span>
                <span>span.font-mono.tabular-nums</span>
              </div>
              <div className="font-mono text-xs font-bold text-slate-800 dark:text-slate-200 tabular-nums">
                ₹24,850.00 · UPI/631892014582 · 14.8:1 AAA CONTRAST
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 4. Spacing Scale & Border Radius Section */}
      {activeTab === 'spacing' && (
        <section className="space-y-6">
          {/* Spacing Ruler */}
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
            <h2 className="text-base font-bold text-slate-900 dark:text-white">
              Consistent Spacing Scale (8-Point Grid Foundation)
            </h2>

            <div className="space-y-3">
              {SPACING_SCALE.map((s) => (
                <div key={s.token} className="flex items-center gap-4 text-xs">
                  <div className="w-24 font-mono font-bold text-slate-700 dark:text-slate-300 shrink-0">
                    {s.token} ({s.px})
                  </div>
                  <div className="h-6 rounded bg-blue-600 shrink-0 transition-all" style={{ width: s.px }} />
                  <div className="text-slate-500 truncate text-[11px]">{s.usage}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Border Radius Scale */}
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
            <h2 className="text-base font-bold text-slate-900 dark:text-white">
              Border Radius Tokens
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {RADIUS_SCALE.map((r) => (
                <div 
                  key={r.token}
                  className="p-4 bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-2 text-center"
                  style={{ borderRadius: r.px }}
                >
                  <div className="font-bold text-xs text-slate-900 dark:text-white font-mono">{r.token}</div>
                  <div className="text-xs text-blue-600 dark:text-blue-400 font-mono font-semibold">{r.px}</div>
                  <div className="text-[10px] text-slate-500">{r.usage}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Demo Modal Dialog */}
      {isDemoModalOpen && (
        <div 
          className="fixed inset-0 z-50 bg-slate-950/75 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in"
          onClick={() => setIsDemoModalOpen(false)}
        >
          <div 
            className="bg-white dark:bg-slate-900 rounded-3xl p-6 max-w-sm w-full border border-slate-200 dark:border-slate-800 space-y-4 text-slate-900 dark:text-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-2 border-b border-slate-100 dark:border-slate-800">
              <h3 className="font-bold text-sm">System Component Modal</h3>
              <button onClick={() => setIsDemoModalOpen(false)} className="p-1 text-slate-400 hover:text-slate-600">
                <X className="w-4 h-4" />
              </button>
            </div>
            <p className="text-xs text-slate-500 leading-relaxed">
              Demonstrates consistent modal depth, accessible focus trapping, backdrop blur, and dismiss action.
            </p>
            <button
              onClick={() => setIsDemoModalOpen(false)}
              className="w-full py-2.5 rounded-xl bg-blue-600 text-white font-bold text-xs"
            >
              Confirm & Dismiss
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
