import React, { useState } from 'react';
import { 
  X, 
  QrCode, 
  Copy, 
  Check, 
  ShieldCheck, 
  Sparkles, 
  Gift, 
  CreditCard,
  Building2,
  Share2
} from 'lucide-react';
import { Transaction } from '../../types';

interface ScanModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectScannedContact: (contact: { name: string; upiId: string }) => void;
}

export const ScanModal: React.FC<ScanModalProps> = ({
  isOpen,
  onClose,
  onSelectScannedContact,
}) => {
  if (!isOpen) return null;

  return (
    <div className="absolute inset-0 z-50 bg-slate-950/95 flex flex-col p-6 text-white animate-in fade-in duration-200">
      <div className="flex items-center justify-between pb-4">
        <div className="flex items-center gap-2">
          <QrCode className="w-5 h-5 text-blue-400" />
          <span className="font-semibold text-sm">Scan any QR Code</span>
        </div>
        <button 
          onClick={onClose}
          className="w-11 h-11 flex items-center justify-center rounded-xl bg-white/10 hover:bg-white/20 text-white focus-visible:ring-2 focus-visible:ring-blue-400 cursor-pointer"
          aria-label="Close QR scanner"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center space-y-6">
        <div className="relative w-64 h-64 border-2 border-blue-400/80 rounded-3xl p-4 flex items-center justify-center overflow-hidden bg-slate-900/60">
          {/* Animated scanning laser line */}
          <div className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_12px_#38bdf8] animate-[bounce_2s_infinite]" />

          <div className="w-48 h-48 border border-white/20 border-dashed rounded-2xl flex flex-col items-center justify-center p-4 text-center">
            <QrCode className="w-16 h-16 text-slate-400 mb-2 opacity-50" />
            <span className="text-[11px] text-slate-400">Align QR code inside the frame</span>
          </div>
        </div>

        <div className="text-center space-y-1">
          <p className="text-xs text-slate-300 font-medium">Demo Simulator: Quick Scan Detected</p>
          <p className="text-[11px] text-slate-400">Tap below to test payment to a verified merchant</p>
        </div>

        <button
          onClick={() => {
            onSelectScannedContact({
              name: 'Campus Cafe & Roasters',
              upiId: 'campuscafe@okaxis',
            });
            onClose();
          }}
          className="w-full py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 font-semibold text-xs text-white shadow-lg transition-colors cursor-pointer"
        >
          Simulate Scan: "Campus Cafe & Roasters"
        </button>
      </div>
    </div>
  );
};

interface ReceiveModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReceiveModal: React.FC<ReceiveModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  if (!isOpen) return null;

  const upiId = 'sakthi@okaxis';

  const handleCopy = () => {
    navigator.clipboard?.writeText(upiId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="absolute inset-0 z-50 bg-slate-900/80 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in">
      <div className="w-full bg-white dark:bg-slate-900 rounded-3xl p-6 shadow-2xl border border-slate-200 dark:border-slate-800 text-center space-y-5">
        <div className="flex items-center justify-between">
          <div className="text-left">
            <h3 className="font-bold text-slate-900 dark:text-white text-sm">Receive Money</h3>
            <p className="text-[11px] text-slate-500">Scan using any UPI application</p>
          </div>
          <button 
            onClick={onClose} 
            className="w-11 h-11 flex items-center justify-center rounded-xl text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 focus-visible:ring-2 focus-visible:ring-blue-600 cursor-pointer"
            aria-label="Close receive money dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* QR Code graphic */}
        <div className="mx-auto w-48 h-48 p-3 rounded-2xl bg-white border border-slate-200 dark:border-slate-700 shadow-inner flex flex-col items-center justify-center">
          <div className="grid grid-cols-6 gap-1 w-full h-full p-2">
            {Array.from({ length: 36 }).map((_, i) => (
              <div 
                key={i} 
                className={`rounded-xs ${
                  (i % 2 === 0 && i % 3 === 0) || i === 0 || i === 5 || i === 30 || i === 35 
                    ? 'bg-slate-900' 
                    : i % 4 === 0 
                    ? 'bg-slate-800' 
                    : 'bg-slate-100'
                }`}
              />
            ))}
          </div>
        </div>

        <div className="space-y-1">
          <div className="font-semibold text-slate-900 dark:text-white text-sm">Sakthi</div>
          <div className="flex items-center justify-center gap-1.5 text-xs text-slate-600 dark:text-slate-400 font-mono">
            <span>{upiId}</span>
            <button 
              onClick={handleCopy}
              className="p-1 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950 rounded"
              title="Copy UPI ID"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>

        <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-center gap-2 text-[11px] text-slate-500">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
          <span>Linked to SBI A/c •••• 4892</span>
        </div>
      </div>
    </div>
  );
};

interface CheckBalanceModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CheckBalanceModal: React.FC<CheckBalanceModalProps> = ({ isOpen, onClose }) => {
  const [pin, setPin] = useState('');
  const [revealed, setRevealed] = useState(false);
  const [error, setError] = useState(false);

  if (!isOpen) return null;

  const handleKeyPress = (num: string) => {
    if (pin.length < 4) {
      const newPin = pin + num;
      setPin(newPin);
      if (newPin.length === 4) {
        // Automatically verify
        setTimeout(() => {
          setRevealed(true);
        }, 300);
      }
    }
  };

  const handleBackspace = () => {
    setPin(prev => prev.slice(0, -1));
    setError(false);
  };

  const handleCloseAndReset = () => {
    setPin('');
    setRevealed(false);
    setError(false);
    onClose();
  };

  return (
    <div className="absolute inset-0 z-50 bg-slate-950/85 backdrop-blur-xs flex flex-col justify-end animate-in fade-in">
      <div className="bg-white dark:bg-slate-900 rounded-t-3xl p-6 border-t border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white space-y-5 animate-in slide-in-from-bottom duration-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 flex items-center justify-center">
              <Building2 className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold">State Bank of India</div>
              <div className="text-[10px] text-slate-500">A/c •••• 4892</div>
            </div>
          </div>
          <button 
            onClick={handleCloseAndReset} 
            className="w-11 h-11 flex items-center justify-center rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-white focus-visible:ring-2 focus-visible:ring-blue-600 cursor-pointer"
            aria-label="Close balance check"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {!revealed ? (
          <div className="space-y-4 text-center">
            <div className="space-y-1">
              <h4 className="text-sm font-bold">Enter 4-Digit UPI PIN</h4>
              <p className="text-[11px] text-slate-500">Demo PIN: Any 4 digits (e.g. 1 2 3 4)</p>
            </div>

            {/* PIN Dots */}
            <div className="flex items-center justify-center gap-4 py-2">
              {[0, 1, 2, 3].map((idx) => (
                <div 
                  key={idx}
                  className={`w-4 h-4 rounded-full border-2 transition-all ${
                    pin.length > idx 
                      ? 'bg-blue-600 border-blue-600 scale-110' 
                      : 'border-slate-300 dark:border-slate-600'
                  }`}
                />
              ))}
            </div>

            {/* Numeric Keypad */}
            <div className="grid grid-cols-3 gap-2 pt-2 max-w-[260px] mx-auto">
              {['1', '2', '3', '4', '5', '6', '7', '8', '9', '', '0', '⌫'].map((k, i) => (
                <button
                  key={i}
                  disabled={k === ''}
                  onClick={() => {
                    if (k === '⌫') handleBackspace();
                    else if (k !== '') handleKeyPress(k);
                  }}
                  className={`h-11 rounded-xl font-semibold text-sm transition-colors ${
                    k === '' 
                      ? 'opacity-0 cursor-default' 
                      : 'bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 active:scale-95'
                  }`}
                >
                  {k}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="space-y-5 text-center py-4">
            <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 mx-auto flex items-center justify-center">
              <Check className="w-6 h-6 stroke-[3]" />
            </div>

            <div className="space-y-1">
              <span className="text-xs text-slate-500 font-medium">Available Balance</span>
              <div className="text-3xl font-extrabold text-slate-900 dark:text-white tabular-nums tracking-tight font-mono">
                ₹24,850.00
              </div>
              <p className="text-[11px] text-slate-400">Fetched securely via NPCI UPI Simulator</p>
            </div>

            <button
              onClick={handleCloseAndReset}
              className="w-full py-2.5 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-semibold text-xs"
            >
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

interface RewardModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RewardModal: React.FC<RewardModalProps> = ({ isOpen, onClose }) => {
  const [scratched, setScratched] = useState(false);
  if (!isOpen) return null;

  return (
    <div className="absolute inset-0 z-50 bg-slate-950/80 backdrop-blur-xs flex items-center justify-center p-5 animate-in fade-in">
      <div className="w-full bg-white dark:bg-slate-900 rounded-3xl p-6 text-center space-y-4 border border-slate-200 dark:border-slate-800">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">GPay Rewards</span>
          <button 
            onClick={onClose} 
            className="w-11 h-11 flex items-center justify-center rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-white focus-visible:ring-2 focus-visible:ring-blue-600 cursor-pointer"
            aria-label="Close rewards dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-1">
          <h3 className="font-bold text-slate-900 dark:text-white text-base">You won a scratch card!</h3>
          <p className="text-[11px] text-slate-500">Tap the card below to scratch and reveal</p>
        </div>

        {/* Scratch Card Area */}
        <div 
          onClick={() => setScratched(true)}
          className={`w-44 h-44 mx-auto rounded-2xl flex flex-col items-center justify-center p-4 cursor-pointer transition-all duration-300 shadow-md ${
            scratched 
              ? 'bg-gradient-to-br from-amber-400 to-amber-600 text-white scale-105' 
              : 'bg-gradient-to-br from-blue-600 via-indigo-600 to-blue-700 text-white hover:opacity-95'
          }`}
        >
          {!scratched ? (
            <div className="space-y-2 flex flex-col items-center">
              <Gift className="w-10 h-10 animate-pulse text-amber-300" />
              <div className="text-xs font-bold tracking-wider">TAP TO SCRATCH</div>
              <span className="text-[10px] text-blue-200">Payment Cashback</span>
            </div>
          ) : (
            <div className="space-y-1 animate-in zoom-in duration-300 text-center">
              <Sparkles className="w-8 h-8 mx-auto text-yellow-200" />
              <div className="text-2xl font-black font-mono">₹25</div>
              <div className="text-[11px] font-semibold">Cashback Credited!</div>
              <div className="text-[9px] text-amber-100">Direct to SBI A/c •••• 4892</div>
            </div>
          )}
        </div>

        <button
          onClick={onClose}
          className="w-full py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-xs font-semibold text-slate-800 dark:text-slate-200"
        >
          {scratched ? 'Claim & Close' : 'Keep for later'}
        </button>
      </div>
    </div>
  );
};

interface TransactionDetailModalProps {
  transaction: Transaction | null;
  onClose: () => void;
}

export const TransactionDetailModal: React.FC<TransactionDetailModalProps> = ({
  transaction,
  onClose,
}) => {
  if (!transaction) return null;

  return (
    <div className="absolute inset-0 z-50 bg-slate-950/80 backdrop-blur-xs flex flex-col justify-end animate-in fade-in">
      <div className="bg-white dark:bg-slate-900 rounded-t-3xl p-6 border-t border-slate-200 dark:border-slate-800 space-y-4 animate-in slide-in-from-bottom duration-200 text-slate-900 dark:text-white">
        <div className="flex items-center justify-between pb-2 border-b border-slate-100 dark:border-slate-800">
          <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Payment Receipt</div>
          <button 
            onClick={onClose} 
            className="w-11 h-11 flex items-center justify-center rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-white focus-visible:ring-2 focus-visible:ring-blue-600 cursor-pointer"
            aria-label="Close transaction receipt"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="text-center space-y-1">
          <div className="text-xs text-slate-500">
            {transaction.type === 'debit' ? 'Paid to' : 'Received from'}
          </div>
          <div className="text-base font-bold text-slate-900 dark:text-white">
            {transaction.contactName}
          </div>
          <div className="text-2xl font-extrabold text-slate-900 dark:text-white font-mono tabular-nums">
            {transaction.type === 'debit' ? '-' : '+'}₹{transaction.amount.toLocaleString()}
          </div>
          <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-2 py-0.5 rounded-full">
            <Check className="w-3 h-3" /> Completed
          </span>
        </div>

        <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 text-xs space-y-2 border border-slate-100 dark:border-slate-800">
          <div className="flex justify-between">
            <span className="text-slate-500">UPI Reference ID</span>
            <span className="font-mono font-medium text-slate-800 dark:text-slate-200">{transaction.referenceId}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-500">Timestamp</span>
            <span className="text-slate-800 dark:text-slate-200">{transaction.date} at {transaction.time}</span>
          </div>
          {transaction.note && (
            <div className="flex justify-between">
              <span className="text-slate-500">Note</span>
              <span className="text-slate-800 dark:text-slate-200 italic font-medium truncate max-w-[180px]">{transaction.note}</span>
            </div>
          )}
          <div className="flex justify-between">
            <span className="text-slate-500">Payment Method</span>
            <span className="text-slate-800 dark:text-slate-200">SBI A/c •••• 4892</span>
          </div>
        </div>

        <button
          onClick={onClose}
          className="w-full py-2.5 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-semibold text-xs"
        >
          Close Receipt
        </button>
      </div>
    </div>
  );
};
