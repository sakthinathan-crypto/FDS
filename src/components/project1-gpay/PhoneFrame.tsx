import React from 'react';
import { Wifi, BatteryMedium, Signal, RotateCcw } from 'lucide-react';

interface PhoneFrameProps {
  children: React.ReactNode;
  onReset?: () => void;
  currentScreenName: string;
}

export const PhoneFrame: React.FC<PhoneFrameProps> = ({
  children,
  onReset,
  currentScreenName,
}) => {
  return (
    <div className="flex flex-col items-center">
      {/* Device Toolbar / Controls */}
      <div className="w-[390px] max-w-full mb-3 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 px-2">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="font-mono text-[11px] font-medium text-slate-700 dark:text-slate-300">
            390 × 844 px · {currentScreenName}
          </span>
        </div>
        {onReset && (
          <button
            onClick={onReset}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-colors cursor-pointer text-[11px]"
            title="Reset prototype to Home"
          >
            <RotateCcw className="w-3 h-3" />
            <span>Reset Flow</span>
          </button>
        )}
      </div>

      {/* Realistic Mobile Device Outer Chassis */}
      <div className="relative w-[390px] max-w-full h-[820px] bg-slate-900 rounded-[50px] p-[10px] shadow-2xl ring-1 ring-slate-800/80 border-4 border-slate-700/60 flex flex-col overflow-hidden">
        {/* Dynamic Island / Top Speaker Notch */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-28 h-6 bg-black rounded-full z-40 flex items-center justify-center">
          <div className="w-2.5 h-2.5 rounded-full bg-slate-900/90 ml-auto mr-3 border border-slate-800/40" />
        </div>

        {/* Screen Bezel / Content Area */}
        <div className="relative w-full h-full bg-white dark:bg-slate-950 rounded-[40px] overflow-hidden flex flex-col text-slate-900 dark:text-slate-100 select-none">
          {/* iOS / Mobile Status Bar */}
          <div className="h-10 pt-2 px-6 flex items-center justify-between text-[13px] font-semibold tracking-tight text-slate-900 dark:text-slate-100 z-30 shrink-0">
            <span className="font-mono text-xs">09:41</span>
            <div className="flex items-center gap-1.5 text-slate-800 dark:text-slate-200">
              <Signal className="w-3.5 h-3.5" />
              <Wifi className="w-3.5 h-3.5" />
              <div className="flex items-center gap-0.5">
                <span className="text-[10px] font-mono">100%</span>
                <BatteryMedium className="w-4 h-4 text-emerald-500" />
              </div>
            </div>
          </div>

          {/* Screen Content Viewport */}
          <div className="flex-1 overflow-y-auto overflow-x-hidden relative flex flex-col">
            {children}
          </div>

          {/* Bottom Home Indicator Bar */}
          <div className="h-4 w-full flex items-center justify-center bg-white/80 dark:bg-slate-950/80 backdrop-blur-xs shrink-0 z-30">
            <div className="w-32 h-1 bg-slate-300 dark:bg-slate-700 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
};
