import React from 'react';
import { Contact, GPayScreen } from '../../types';
import { Check, Sparkles, ArrowRight, Share2 } from 'lucide-react';

interface GPaySuccessScreenProps {
  recipient: Contact | { name: string; upiId: string };
  amount: number;
  referenceId: string;
  onNavigateScreen: (screen: GPayScreen) => void;
  onOpenRewardsModal: () => void;
}

export const GPaySuccessScreen: React.FC<GPaySuccessScreenProps> = ({
  recipient,
  amount,
  referenceId,
  onNavigateScreen,
  onOpenRewardsModal,
}) => {
  return (
    <div className="flex-1 flex flex-col justify-between p-6 text-center space-y-6 animate-in fade-in duration-300">
      <div className="space-y-6 my-auto">
        {/* Animated Checkmark Circle */}
        <div className="relative mx-auto w-20 h-20">
          <div className="w-20 h-20 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-lg shadow-emerald-500/30 animate-in zoom-in-75 duration-300">
            <Check className="w-10 h-10 stroke-[3]" />
          </div>
          <div className="absolute -inset-1.5 rounded-full border-2 border-emerald-400/40 animate-ping pointer-events-none" />
        </div>

        {/* Message */}
        <div className="space-y-1">
          <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
            Payment Completed
          </span>
          <div className="text-3xl font-extrabold text-slate-900 dark:text-white font-mono tabular-nums">
            ₹{amount.toLocaleString()}
          </div>
          <p className="text-xs text-slate-500 font-medium">
            Paid to <strong className="text-slate-900 dark:text-white font-semibold">{recipient.name}</strong>
          </p>
        </div>

        {/* Transaction Reference Card */}
        <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-left space-y-2 text-xs">
          <div className="flex justify-between">
            <span className="text-slate-500">UPI Ref ID</span>
            <span className="font-mono font-medium text-slate-900 dark:text-white text-[11px]">{referenceId}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-500">From</span>
            <span className="text-slate-800 dark:text-slate-200">SBI A/c •••• 4892</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-500">Status</span>
            <span className="text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1 text-[11px]">
              <Check className="w-3 h-3" /> Successful (Instant)
            </span>
          </div>
        </div>

        {/* Scratch Card Teaser */}
        <div 
          onClick={onOpenRewardsModal}
          className="p-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-white flex items-center justify-between shadow-xs cursor-pointer hover:opacity-95 transition-opacity"
        >
          <div className="flex items-center gap-2 text-left">
            <Sparkles className="w-5 h-5 text-amber-200 shrink-0" />
            <div>
              <div className="text-xs font-bold leading-tight">You unlocked 1 Scratch Card!</div>
              <div className="text-[10px] text-amber-100">Tap to scratch for instant cashback</div>
            </div>
          </div>
          <span className="text-xs font-bold underline shrink-0 ml-2">Reveal</span>
        </div>
      </div>

      {/* Return Buttons */}
      <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-800">
        <button
          onClick={() => onNavigateScreen('home')}
          className="w-full py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-bold text-xs shadow-md transition-all cursor-pointer"
        >
          Return to Home
        </button>

        <button
          onClick={() => onNavigateScreen('activity')}
          className="w-full py-2 text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
        >
          View in Transaction History
        </button>
      </div>
    </div>
  );
};
