import React, { useState, useEffect } from 'react';
import { AccessibilitySettings, LoginMode } from '../../types';
import { AccessibleLoginForm } from './AccessibleLoginForm';
import { AccessibilityPanel } from './AccessibilityPanel';
import { LoginCaseStudy } from './LoginCaseStudy';
import { 
  UserCheck, 
  FileText, 
  SlidersHorizontal, 
  Contrast, 
  CheckCircle2, 
  Layers,
  X
} from 'lucide-react';

const DEFAULT_SETTINGS: AccessibilitySettings = {
  fontSize: 'normal',
  highContrast: false,
  reducedMotion: false,
  dyslexicFont: false,
  largeFocusRing: true,
};

const getInitialSettings = (): AccessibilitySettings => {
  try {
    const saved = localStorage.getItem('designlab_a11y_settings');
    if (saved) return JSON.parse(saved);
  } catch (e) {}
  
  const prefersReducedMotion = typeof window !== 'undefined' && 
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  return {
    ...DEFAULT_SETTINGS,
    reducedMotion: prefersReducedMotion,
  };
};

export const InclusiveLoginProject: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'preview' | 'casestudy'>('preview');
  const [loginMode, setLoginMode] = useState<LoginMode>('standard');
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Persistent accessibility settings in localStorage with prefers-reduced-motion fallback
  const [settings, setSettings] = useState<AccessibilitySettings>(getInitialSettings);

  useEffect(() => {
    try {
      localStorage.setItem('designlab_a11y_settings', JSON.stringify(settings));
    } catch (e) {}
  }, [settings]);

  // WCAG 2.1.2: Escape key dismisses accessibility preference drawer
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isDrawerOpen) {
        setIsDrawerOpen(false);
      }
    };
    if (isDrawerOpen) {
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }
  }, [isDrawerOpen]);

  const handleUpdateSettings = (newSettings: Partial<AccessibilitySettings>) => {
    setSettings(prev => ({ ...prev, ...newSettings }));
  };

  const handleResetSettings = () => {
    setSettings(DEFAULT_SETTINGS);
    setLoginMode('standard');
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-12">
      {/* Top Header Card */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
        <div>
          <div className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
            PROJECT 02
          </div>
          <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Inclusive & Accessible Login Screen
          </h1>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
            Authentication prototype evaluated against WCAG 2.2 criteria with live text zoom and high-contrast rendering.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center gap-1.5 p-1 bg-slate-100 dark:bg-slate-800 rounded-xl shrink-0">
          <button
            onClick={() => setActiveTab('preview')}
            className={`flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
              activeTab === 'preview'
                ? 'bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 shadow-xs'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <UserCheck className="w-4 h-4" />
            <span>Interactive Form</span>
          </button>

          <button
            onClick={() => setActiveTab('casestudy')}
            className={`flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
              activeTab === 'casestudy'
                ? 'bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 shadow-xs'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>WCAG Case Study</span>
          </button>
        </div>
      </div>

      {activeTab === 'preview' ? (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Mode Switcher & Accessibility Controls (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            {/* Version Mode Switcher Card */}
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
              <h3 className="font-bold text-slate-900 dark:text-white text-xs uppercase tracking-wider">
                Select View Version
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                Switch between the standard modern interface and the dedicated high-contrast accessibility interface:
              </p>

              <div className="grid grid-cols-1 gap-2 pt-1">
                <button
                  onClick={() => {
                    setLoginMode('standard');
                    handleUpdateSettings({ highContrast: false });
                  }}
                  className={`p-3 rounded-xl border text-left transition-all cursor-pointer flex items-center justify-between ${
                    loginMode === 'standard' && !settings.highContrast
                      ? 'border-indigo-600 bg-indigo-50 dark:bg-indigo-950/40 text-indigo-900 dark:text-indigo-100 font-bold'
                      : 'border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/60 text-slate-700 dark:text-slate-300'
                  }`}
                >
                  <div className="text-xs">
                    <div>1. Standard Login Mode</div>
                    <div className="text-[10px] text-slate-500 font-normal">Evaluated against WCAG 2.2 AA (17.56:1 text / 6.34:1 button)</div>
                  </div>
                  {loginMode === 'standard' && !settings.highContrast && (
                    <CheckCircle2 className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                  )}
                </button>

                <button
                  onClick={() => {
                    setLoginMode('high-contrast');
                    handleUpdateSettings({ highContrast: true });
                  }}
                  className={`p-3 rounded-xl border text-left transition-all cursor-pointer flex items-center justify-between ${
                    loginMode === 'high-contrast' || settings.highContrast
                      ? 'border-amber-400 bg-black text-amber-300 font-bold shadow-md'
                      : 'border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/60 text-slate-700 dark:text-slate-300'
                  }`}
                >
                  <div className="text-xs">
                    <div>2. High-Contrast Accessible Mode</div>
                    <div className="text-[10px] text-slate-400 font-normal">Evaluated for Low Vision (15.87:1 OLED Contrast)</div>
                  </div>
                  {(loginMode === 'high-contrast' || settings.highContrast) && (
                    <CheckCircle2 className="w-4 h-4 text-amber-400" />
                  )}
                </button>
              </div>
            </div>

            {/* Live Accessibility Settings Controls Panel */}
            <AccessibilityPanel
              settings={settings}
              onUpdateSettings={handleUpdateSettings}
              onResetSettings={handleResetSettings}
            />
          </div>

          {/* Right Column: The Accessible Login Form (8 cols) */}
          <div className="lg:col-span-8">
            <AccessibleLoginForm
              settings={settings}
              mode={loginMode}
              onOpenAccessibilityDrawer={() => setIsDrawerOpen(true)}
            />
          </div>
        </div>
      ) : (
        <LoginCaseStudy />
      )}

      {/* Floating Accessibility Quick Drawer / Modal */}
      {isDrawerOpen && (
        <div 
          role="dialog"
          aria-modal="true"
          aria-labelledby="a11y-drawer-title"
          className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in"
          onClick={() => setIsDrawerOpen(false)}
        >
          <div 
            className="w-full max-w-md bg-white dark:bg-slate-900 rounded-3xl p-6 shadow-2xl border border-slate-200 dark:border-slate-800 space-y-4 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-2 border-b border-slate-100 dark:border-slate-800">
              <h3 id="a11y-drawer-title" className="font-bold text-sm text-slate-900 dark:text-white">
                Accessibility Preferences
              </h3>
              <button
                onClick={() => setIsDrawerOpen(false)}
                className="w-11 h-11 flex items-center justify-center rounded-xl text-slate-500 hover:text-slate-800 dark:hover:text-white focus-visible:ring-2 focus-visible:ring-indigo-600 cursor-pointer"
                aria-label="Close accessibility panel (Escape)"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <AccessibilityPanel
              settings={settings}
              onUpdateSettings={handleUpdateSettings}
              onResetSettings={handleResetSettings}
            />

            <button
              onClick={() => setIsDrawerOpen(false)}
              className="w-full min-h-[44px] py-3 rounded-xl bg-indigo-600 text-white font-bold text-xs shadow-xs cursor-pointer"
            >
              Apply Settings & Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
