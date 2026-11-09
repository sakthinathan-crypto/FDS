import React from 'react';
import { AccessibilitySettings } from '../../types';
import { 
  Eye, 
  Type, 
  Sparkles, 
  RotateCcw, 
  ShieldCheck, 
  Contrast, 
  Focus,
  Check
} from 'lucide-react';

interface AccessibilityPanelProps {
  settings: AccessibilitySettings;
  onUpdateSettings: (newSettings: Partial<AccessibilitySettings>) => void;
  onResetSettings: () => void;
}

export const AccessibilityPanel: React.FC<AccessibilityPanelProps> = ({
  settings,
  onUpdateSettings,
  onResetSettings,
}) => {
  return (
    <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-5">
      <div className="flex items-center justify-between pb-2 border-b border-slate-100 dark:border-slate-800">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
          <h3 className="font-bold text-slate-900 dark:text-white text-sm">
            Live Accessibility Engine Controls
          </h3>
        </div>
        <button
          onClick={onResetSettings}
          className="flex items-center gap-1 text-[11px] font-semibold text-slate-500 hover:text-indigo-600 dark:hover:text-indigo-400 cursor-pointer"
          title="Reset to default accessibility settings"
        >
          <RotateCcw className="w-3 h-3" />
          <span>Reset</span>
        </button>
      </div>

      {/* 1. Text Size Scaling */}
      <div className="space-y-2">
        <div className="flex items-center justify-between text-xs">
          <span className="font-semibold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
            <Type className="w-3.5 h-3.5 text-indigo-500" />
            <span>Font Size Scaling (WCAG 1.4.4 up to 200%)</span>
          </span>
          <span className="font-mono text-indigo-600 dark:text-indigo-400 font-bold">
            {settings.fontSize === 'normal' && '100% (16px)'}
            {settings.fontSize === 'large' && '130% (20.8px)'}
            {settings.fontSize === 'larger' && '160% (25.6px)'}
            {settings.fontSize === 'largest' && '200% (32px - Max)'}
          </span>
        </div>

        <div className="grid grid-cols-4 gap-1.5">
          {(['normal', 'large', 'larger', 'largest'] as const).map((size) => (
            <button
              key={size}
              onClick={() => onUpdateSettings({ fontSize: size })}
              className={`py-2 px-2 rounded-lg text-xs font-semibold transition-all cursor-pointer min-h-[40px] flex items-center justify-center ${
                settings.fontSize === size
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              {size === 'normal' && '100%'}
              {size === 'large' && '130%'}
              {size === 'larger' && '160%'}
              {size === 'largest' && '200%'}
            </button>
          ))}
        </div>
      </div>

      {/* 2. High Contrast Mode Toggle */}
      <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60">
        <div className="space-y-0.5">
          <div className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
            <Contrast className="w-3.5 h-3.5 text-amber-500" />
            <span>High Contrast Mode (WCAG 1.4.6 AAA)</span>
          </div>
          <p className="text-[11px] text-slate-500">
            Enforces 14:1+ contrast ratio with enhanced borders & amber accents.
          </p>
        </div>

        <button
          role="switch"
          aria-checked={settings.highContrast}
          onClick={() => onUpdateSettings({ highContrast: !settings.highContrast })}
          className={`w-11 h-6 rounded-full transition-colors relative p-0.5 cursor-pointer shrink-0 ml-3 ${
            settings.highContrast ? 'bg-indigo-600' : 'bg-slate-300 dark:bg-slate-700'
          }`}
        >
          <div
            className={`w-5 h-5 rounded-full bg-white transition-transform ${
              settings.highContrast ? 'translate-x-5' : 'translate-x-0'
            }`}
          />
        </button>
      </div>

      {/* 3. Reduced Motion Mode Toggle */}
      <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60">
        <div className="space-y-0.5">
          <div className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-blue-500" />
            <span>Reduced Motion (WCAG 2.3.3)</span>
          </div>
          <p className="text-[11px] text-slate-500">
            Suppresses transitions and motion animations for vestibular safety.
          </p>
        </div>

        <button
          role="switch"
          aria-checked={settings.reducedMotion}
          onClick={() => onUpdateSettings({ reducedMotion: !settings.reducedMotion })}
          className={`w-11 h-6 rounded-full transition-colors relative p-0.5 cursor-pointer shrink-0 ml-3 ${
            settings.reducedMotion ? 'bg-indigo-600' : 'bg-slate-300 dark:bg-slate-700'
          }`}
        >
          <div
            className={`w-5 h-5 rounded-full bg-white transition-transform ${
              settings.reducedMotion ? 'translate-x-5' : 'translate-x-0'
            }`}
          />
        </button>
      </div>

      {/* 4. Enhanced Focus Ring Outline */}
      <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60">
        <div className="space-y-0.5">
          <div className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
            <Focus className="w-3.5 h-3.5 text-emerald-500" />
            <span>High-Visibility Focus Indicators (WCAG 2.4.7)</span>
          </div>
          <p className="text-[11px] text-slate-500">
            Draws an unmistakable 3px high-contrast outline on keyboard focused items.
          </p>
        </div>

        <button
          role="switch"
          aria-checked={settings.largeFocusRing}
          onClick={() => onUpdateSettings({ largeFocusRing: !settings.largeFocusRing })}
          className={`w-11 h-6 rounded-full transition-colors relative p-0.5 cursor-pointer shrink-0 ml-3 ${
            settings.largeFocusRing ? 'bg-indigo-600' : 'bg-slate-300 dark:bg-slate-700'
          }`}
        >
          <div
            className={`w-5 h-5 rounded-full bg-white transition-transform ${
              settings.largeFocusRing ? 'translate-x-5' : 'translate-x-0'
            }`}
          />
        </button>
      </div>
    </div>
  );
};
