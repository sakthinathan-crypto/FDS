import React, { useState } from 'react';
import { GPayScreen } from '../../types';
import { 
  ArrowLeft, 
  ShieldCheck, 
  Building2, 
  HelpCircle, 
  Lock, 
  RotateCcw, 
  ChevronRight, 
  Check, 
  QrCode,
  Bell,
  Smartphone
} from 'lucide-react';

interface GPayProfileScreenProps {
  onNavigateScreen: (screen: GPayScreen) => void;
  onResetTransactions: () => void;
  onOpenReceiveModal: () => void;
}

export const GPayProfileScreen: React.FC<GPayProfileScreenProps> = ({
  onNavigateScreen,
  onResetTransactions,
  onOpenReceiveModal,
}) => {
  const [showSupportModal, setShowSupportModal] = useState(false);
  const [biometricEnabled, setBiometricEnabled] = useState(true);
  const [resetSuccess, setResetSuccess] = useState(false);

  const handleReset = () => {
    onResetTransactions();
    setResetSuccess(true);
    setTimeout(() => setResetSuccess(false), 2000);
  };

  return (
    <div className="flex-1 pb-16 space-y-4 p-4">
      {/* Header */}
      <div className="flex items-center gap-3">
        <button
          onClick={() => onNavigateScreen('home')}
          className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300"
          aria-label="Back to home"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <h2 className="text-base font-bold text-slate-900 dark:text-white leading-tight">
          Profile & Settings
        </h2>
      </div>

      {/* User Card */}
      <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-600 via-indigo-600 to-blue-700 text-white space-y-3 shadow-md">
        <div className="flex items-center gap-3">
          <div className="w-14 h-14 rounded-full bg-white text-blue-700 font-bold text-xl flex items-center justify-center shadow-md">
            S
          </div>
          <div className="min-w-0">
            <h3 className="font-extrabold text-base leading-tight">Sakthi</h3>
            <p className="text-xs text-blue-100 font-mono">sakthi@okaxis</p>
            <p className="text-[11px] text-blue-200 truncate">sakthisakthi7791@gmail.com</p>
          </div>
        </div>

        <div className="pt-2 border-t border-blue-500/50 flex items-center justify-between">
          <span className="text-[11px] text-blue-100">UPI QR Code</span>
          <button
            onClick={onOpenReceiveModal}
            className="flex items-center gap-1.5 px-3 py-1 bg-white/20 hover:bg-white/30 rounded-lg text-xs font-semibold"
          >
            <QrCode className="w-3.5 h-3.5" />
            <span>Show QR</span>
          </button>
        </div>
      </div>

      {/* Linked Bank Accounts */}
      <div className="space-y-2">
        <div className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
          Payment Methods
        </div>

        <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-2.5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold text-xs">
                SBI
              </div>
              <div>
                <div className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                  <span>State Bank of India</span>
                  <span className="text-[9px] bg-blue-100 text-blue-700 dark:bg-blue-900/60 dark:text-blue-300 px-1.5 py-0.2 rounded font-semibold">
                    Primary
                  </span>
                </div>
                <div className="text-[10px] text-slate-500 font-mono">Savings · A/c •••• 4892</div>
              </div>
            </div>
            <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 flex items-center gap-0.5">
              <Check className="w-3.5 h-3.5" /> Active
            </span>
          </div>

          <div className="pt-2 border-t border-slate-200/60 dark:border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-indigo-100 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold text-xs">
                HDFC
              </div>
              <div>
                <div className="text-xs font-bold text-slate-900 dark:text-white">
                  HDFC Bank
                </div>
                <div className="text-[10px] text-slate-500 font-mono">Salary · A/c •••• 1024</div>
              </div>
            </div>
            <span className="text-[11px] text-slate-400">Secondary</span>
          </div>
        </div>
      </div>

      {/* Security & Privacy */}
      <div className="space-y-2">
        <div className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
          Security & Privacy
        </div>

        <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs text-slate-800 dark:text-slate-200">
              <Lock className="w-4 h-4 text-blue-500" />
              <span>Biometric / App Lock</span>
            </div>
            <button
              onClick={() => setBiometricEnabled(!biometricEnabled)}
              className={`w-9 h-5 rounded-full transition-colors relative p-0.5 cursor-pointer ${
                biometricEnabled ? 'bg-blue-600' : 'bg-slate-300 dark:bg-slate-700'
              }`}
            >
              <div className={`w-4 h-4 rounded-full bg-white transition-transform ${
                biometricEnabled ? 'translate-x-4' : 'translate-x-0'
              }`} />
            </button>
          </div>

          <button
            onClick={() => setShowSupportModal(true)}
            className="w-full flex items-center justify-between text-xs text-slate-800 dark:text-slate-200 pt-2 border-t border-slate-200/60 dark:border-slate-800"
          >
            <div className="flex items-center gap-2">
              <HelpCircle className="w-4 h-4 text-slate-400" />
              <span>Help & 24/7 Dispute Support</span>
            </div>
            <ChevronRight className="w-4 h-4 text-slate-400" />
          </button>
        </div>
      </div>

      {/* Demo State Control */}
      <div className="space-y-2 pt-2">
        <button
          onClick={handleReset}
          className="w-full py-2.5 px-3 rounded-xl border border-rose-200 dark:border-rose-900/50 bg-rose-50 dark:bg-rose-950/20 text-rose-600 dark:text-rose-400 font-semibold text-xs flex items-center justify-center gap-1.5 transition-colors"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>{resetSuccess ? 'Demo Data Restored!' : 'Reset Demo Transactions'}</span>
        </button>
      </div>

      {/* Help Modal Simulation */}
      {showSupportModal && (
        <div className="absolute inset-0 z-50 bg-slate-950/80 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-5 border border-slate-200 dark:border-slate-800 space-y-4 max-w-xs text-slate-900 dark:text-white">
            <h4 className="font-bold text-sm">UPI Customer Dispute Portal</h4>
            <p className="text-xs text-slate-500">
              For any transaction disputes, NPCI mandates a standard 24-hour reversal window. No dispute tickets currently active on your account.
            </p>
            <button
              onClick={() => setShowSupportModal(false)}
              className="w-full py-2 bg-blue-600 text-white rounded-xl text-xs font-semibold"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
