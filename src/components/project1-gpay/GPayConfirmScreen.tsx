import React, { useState } from 'react';
import { Contact, GPayScreen } from '../../types';
import { ArrowLeft, ShieldCheck, Building2, Check, Lock, AlertCircle } from 'lucide-react';

interface GPayConfirmScreenProps {
  selectedContact: Contact | { name: string; upiId: string };
  amount: number;
  note?: string;
  onConfirmPayment: () => void;
  onNavigateScreen: (screen: GPayScreen) => void;
}

export const GPayConfirmScreen: React.FC<GPayConfirmScreenProps> = ({
  selectedContact,
  amount,
  note,
  onConfirmPayment,
  onNavigateScreen,
}) => {
  const [pin, setPin] = useState('');
  const [showPinError, setShowPinError] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleKeyPress = (digit: string) => {
    if (pin.length < 4) {
      setPin(prev => prev + digit);
      setShowPinError(false);
    }
  };

  const handleBackspace = () => {
    setPin(prev => prev.slice(0, -1));
  };

  const handleExecutePayment = () => {
    if (pin.length < 4) {
      setShowPinError(true);
      return;
    }

    setIsProcessing(true);
    // Simulate NPCI UPI network roundtrip latency (600ms)
    setTimeout(() => {
      setIsProcessing(false);
      onConfirmPayment();
    }, 700);
  };

  return (
    <div className="flex-1 flex flex-col justify-between p-4 space-y-4">
      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <button
            onClick={() => onNavigateScreen('send')}
            className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300"
            aria-label="Back to send screen"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <h2 className="text-base font-bold text-slate-900 dark:text-white leading-tight">
              Confirm Payment
            </h2>
            <p className="text-[11px] text-slate-500">Educational Simulation · No real money moved</p>
          </div>
        </div>

        {/* Transfer Breakdown Card */}
        <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs text-slate-500">Paying to</span>
            <span className="text-xs font-bold text-slate-900 dark:text-white truncate max-w-[180px]">
              {selectedContact.name}
            </span>
          </div>
          <div className="flex items-center justify-between text-[11px]">
            <span className="text-slate-500">UPI ID</span>
            <span className="font-mono text-slate-700 dark:text-slate-300 truncate max-w-[180px]">
              {selectedContact.upiId}
            </span>
          </div>

          <div className="pt-2 border-t border-slate-200/60 dark:border-slate-800 flex items-center justify-between">
            <span className="text-xs text-slate-500">From Bank Account</span>
            <div className="text-right">
              <div className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                State Bank of India
              </div>
              <div className="text-[10px] text-slate-400 font-mono">A/c •••• 4892</div>
            </div>
          </div>

          {note && (
            <div className="pt-2 border-t border-slate-200/60 dark:border-slate-800 flex items-center justify-between text-xs">
              <span className="text-slate-500">Note</span>
              <span className="italic text-slate-700 dark:text-slate-300 truncate max-w-[180px]">{note}</span>
            </div>
          )}

          <div className="pt-2 border-t border-slate-200/60 dark:border-slate-800 flex items-center justify-between">
            <span className="text-xs font-bold text-slate-900 dark:text-white">Total Amount</span>
            <span className="text-xl font-black text-blue-600 dark:text-blue-400 font-mono tabular-nums">
              ₹{amount.toLocaleString()}
            </span>
          </div>
        </div>

        {/* PIN Entry Area */}
        <div className="space-y-3 text-center">
          <div className="flex items-center justify-center gap-1.5 text-xs text-slate-600 dark:text-slate-400">
            <Lock className="w-3.5 h-3.5 text-blue-500" />
            <span>Enter UPI PIN to authorize</span>
          </div>

          {/* PIN Indicators */}
          <div className="flex items-center justify-center gap-4 py-1">
            {[0, 1, 2, 3].map((idx) => (
              <div
                key={idx}
                className={`w-3.5 h-3.5 rounded-full border-2 transition-all ${
                  pin.length > idx
                    ? 'bg-blue-600 border-blue-600 scale-110'
                    : 'border-slate-300 dark:border-slate-600'
                }`}
              />
            ))}
          </div>

          {showPinError && (
            <div className="text-[11px] text-rose-500 flex items-center justify-center gap-1">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>Please enter all 4 digits (e.g. 1 2 3 4)</span>
            </div>
          )}

          {/* Quick Demo PIN Helper */}
          <div className="pt-0.5">
            <button
              type="button"
              onClick={() => {
                setPin('1234');
                setShowPinError(false);
              }}
              className="text-[10px] font-semibold text-blue-600 dark:text-blue-400 hover:underline cursor-pointer bg-blue-50 dark:bg-blue-950/60 px-2 py-0.5 rounded-full border border-blue-200/50 dark:border-blue-900/50"
            >
              Fill Demo PIN: 1234
            </button>
          </div>

          {/* Number pad */}
          <div className="grid grid-cols-3 gap-1.5 max-w-[240px] mx-auto pt-1">
            {['1', '2', '3', '4', '5', '6', '7', '8', '9', '', '0', '⌫'].map((k, i) => (
              <button
                key={i}
                type="button"
                disabled={k === ''}
                onClick={() => {
                  if (k === '⌫') handleBackspace();
                  else if (k !== '') handleKeyPress(k);
                }}
                className={`h-9 rounded-xl font-semibold text-xs transition-colors ${
                  k === ''
                    ? 'opacity-0 cursor-default'
                    : 'bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 active:scale-95 text-slate-900 dark:text-white'
                }`}
              >
                {k}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Action Buttons: Cancel and Confirm */}
      <div className="pt-2 border-t border-slate-100 dark:border-slate-800 space-y-2">
        <button
          onClick={handleExecutePayment}
          disabled={isProcessing}
          className="w-full py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 active:bg-blue-800 disabled:opacity-75 text-white font-bold text-xs shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
        >
          {isProcessing ? (
            <div className="flex items-center gap-2">
              <div className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              <span>Securing Payment Simulation...</span>
            </div>
          ) : (
            <span>Confirm & Pay ₹{amount.toLocaleString()}</span>
          )}
        </button>

        <button
          onClick={() => onNavigateScreen('home')}
          className="w-full py-2 text-xs font-semibold text-slate-500 hover:text-slate-700 dark:hover:text-slate-300"
        >
          Cancel Transaction
        </button>
      </div>
    </div>
  );
};
