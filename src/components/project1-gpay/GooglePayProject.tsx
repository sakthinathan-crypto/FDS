import React, { useState, useEffect } from 'react';
import { 
  Contact, 
  Transaction, 
  GPayScreen, 
  GPayTab 
} from '../../types';
import { INITIAL_CONTACTS, INITIAL_TRANSACTIONS } from '../../data/mockData';
import { PhoneFrame } from './PhoneFrame';
import { GPayHomeScreen } from './GPayHomeScreen';
import { GPaySendMoneyScreen } from './GPaySendMoneyScreen';
import { GPayConfirmScreen } from './GPayConfirmScreen';
import { GPaySuccessScreen } from './GPaySuccessScreen';
import { GPayActivityScreen } from './GPayActivityScreen';
import { GPayProfileScreen } from './GPayProfileScreen';
import { GPayCaseStudy } from './GPayCaseStudy';
import { 
  ScanModal, 
  ReceiveModal, 
  CheckBalanceModal, 
  RewardModal, 
  TransactionDetailModal 
} from './GPayModals';
import { 
  Home, 
  Clock, 
  Gift, 
  User, 
  Smartphone, 
  FileText,
  RotateCcw
} from 'lucide-react';

export const GooglePayProject: React.FC = () => {
  const [activeTab, setActiveTab] = useState<GPayTab>('prototype');
  const [screen, setScreen] = useState<GPayScreen>('home');

  // Transactions state with localStorage persistence
  const [transactions, setTransactions] = useState<Transaction[]>(() => {
    try {
      const saved = localStorage.getItem('designlab_gpay_txs');
      if (saved) return JSON.parse(saved);
    } catch (e) {
      // Fallback
    }
    return INITIAL_TRANSACTIONS;
  });

  const [contacts] = useState<Contact[]>(INITIAL_CONTACTS);

  // Active payment draft state
  const [selectedRecipient, setSelectedRecipient] = useState<Contact | { name: string; upiId: string } | null>(null);
  const [paymentAmount, setPaymentAmount] = useState<number>(500);
  const [paymentNote, setPaymentNote] = useState<string>('');
  const [currentRefId, setCurrentRefId] = useState<string>('UPI/631892014582');

  // Modals state
  const [isScanOpen, setIsScanOpen] = useState(false);
  const [isReceiveOpen, setIsReceiveOpen] = useState(false);
  const [isBalanceOpen, setIsBalanceOpen] = useState(false);
  const [isRewardsOpen, setIsRewardsOpen] = useState(false);
  const [activeTxDetail, setActiveTxDetail] = useState<Transaction | null>(null);

  // Sync transactions to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('designlab_gpay_txs', JSON.stringify(transactions));
    } catch (e) {
      console.error(e);
    }
  }, [transactions]);

  // WCAG 2.1.2: No Keyboard Trap - Escape key dismisses open GPay modal dialogs
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (isScanOpen) setIsScanOpen(false);
        if (isReceiveOpen) setIsReceiveOpen(false);
        if (isBalanceOpen) setIsBalanceOpen(false);
        if (isRewardsOpen) setIsRewardsOpen(false);
        if (activeTxDetail) setActiveTxDetail(null);
      }
    };

    if (isScanOpen || isReceiveOpen || isBalanceOpen || isRewardsOpen || activeTxDetail) {
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }
  }, [isScanOpen, isReceiveOpen, isBalanceOpen, isRewardsOpen, activeTxDetail]);

  // Handler for contact click on Home screen
  const handleSelectContactForPayment = (contact: Contact | { name: string; upiId: string }) => {
    setSelectedRecipient(contact);
    setScreen('send');
  };

  // Handler to proceed from Send to Confirm
  const handleProceedToConfirm = (amount: number, note: string) => {
    setPaymentAmount(amount);
    setPaymentNote(note);
    setScreen('confirm');
  };

  // Handler for successful simulated payment
  const handleConfirmPayment = () => {
    const randomRef = `UPI/631${Math.floor(100000000 + Math.random() * 900000000)}`;
    setCurrentRefId(randomRef);

    const newTx: Transaction = {
      id: `tx_${Date.now()}`,
      contactName: selectedRecipient?.name || 'Peer Recipient',
      contactUpi: selectedRecipient?.upiId || 'peer@okaxis',
      type: 'debit',
      amount: paymentAmount,
      date: 'Today',
      time: 'Just now',
      status: 'success',
      category: 'transfer',
      note: paymentNote || undefined,
      referenceId: randomRef,
    };

    setTransactions(prev => [newTx, ...prev]);
    setScreen('success');
  };

  // Reset demo transactions to default
  const handleResetTransactions = () => {
    setTransactions(INITIAL_TRANSACTIONS);
    try {
      localStorage.removeItem('designlab_gpay_txs');
    } catch (e) {}
  };

  // Full prototype flow reset
  const handleFullReset = () => {
    setScreen('home');
    setSelectedRecipient(null);
    setPaymentAmount(500);
    setPaymentNote('');
    setIsScanOpen(false);
    setIsReceiveOpen(false);
    setIsBalanceOpen(false);
    setIsRewardsOpen(false);
    setActiveTxDetail(null);
  };

  const getScreenDisplayName = (s: GPayScreen) => {
    switch (s) {
      case 'home': return 'Home View';
      case 'send': return 'Send Money';
      case 'confirm': return 'Payment Confirmation';
      case 'success': return 'Transaction Success';
      case 'activity': return 'Activity & History';
      case 'profile': return 'Profile & Settings';
    }
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-12">
      {/* Top Controls: View Selector (Prototype vs Case Study) */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
        <div>
          <div className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
            PROJECT 01
          </div>
          <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Google Pay – Application UI Redesign
          </h1>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
            Interactive 390px mobile fintech prototype + in-depth UI/UX architectural case study.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center gap-1.5 p-1 bg-slate-100 dark:bg-slate-800 rounded-xl shrink-0">
          <button
            onClick={() => setActiveTab('prototype')}
            className={`flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
              activeTab === 'prototype'
                ? 'bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-xs'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <Smartphone className="w-4 h-4" />
            <span>Interactive Prototype</span>
          </button>

          <button
            onClick={() => setActiveTab('casestudy')}
            className={`flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
              activeTab === 'casestudy'
                ? 'bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-xs'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>Design Improvement Case Study</span>
          </button>
        </div>
      </div>

      {/* Main Tab Content */}
      {activeTab === 'prototype' ? (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Prototype Controls & Instructions (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
              <h3 className="font-bold text-slate-900 dark:text-white text-sm">
                Interactive Prototype Navigator
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Click directly within the phone frame on the right to interact with all screens, or use the quick jumps below to test individual states:
              </p>

              {/* Direct Screen Jump Buttons */}
              <div className="grid grid-cols-2 gap-2 text-xs">
                <button
                  onClick={() => setScreen('home')}
                  className={`p-2.5 rounded-xl border text-left transition-all cursor-pointer ${
                    screen === 'home'
                      ? 'border-blue-500 bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 font-semibold'
                      : 'border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/60 text-slate-700 dark:text-slate-300'
                  }`}
                >
                  <div className="font-bold">Home Screen</div>
                  <div className="text-[10px] text-slate-500">Quick actions & contacts</div>
                </button>

                <button
                  onClick={() => {
                    setSelectedRecipient(contacts[0]);
                    setScreen('send');
                  }}
                  className={`p-2.5 rounded-xl border text-left transition-all cursor-pointer ${
                    screen === 'send'
                      ? 'border-blue-500 bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 font-semibold'
                      : 'border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/60 text-slate-700 dark:text-slate-300'
                  }`}
                >
                  <div className="font-bold">Send Money</div>
                  <div className="text-[10px] text-slate-500">Amount & notes entry</div>
                </button>

                <button
                  onClick={() => {
                    setSelectedRecipient(contacts[0]);
                    setPaymentAmount(500);
                    setScreen('confirm');
                  }}
                  className={`p-2.5 rounded-xl border text-left transition-all cursor-pointer ${
                    screen === 'confirm'
                      ? 'border-blue-500 bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 font-semibold'
                      : 'border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/60 text-slate-700 dark:text-slate-300'
                  }`}
                >
                  <div className="font-bold">Confirm & PIN</div>
                  <div className="text-[10px] text-slate-500">PIN pad authorization</div>
                </button>

                <button
                  onClick={() => {
                    setSelectedRecipient(contacts[0]);
                    setPaymentAmount(500);
                    setScreen('success');
                  }}
                  className={`p-2.5 rounded-xl border text-left transition-all cursor-pointer ${
                    screen === 'success'
                      ? 'border-blue-500 bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 font-semibold'
                      : 'border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/60 text-slate-700 dark:text-slate-300'
                  }`}
                >
                  <div className="font-bold">Payment Success</div>
                  <div className="text-[10px] text-slate-500">Animated check & receipt</div>
                </button>

                <button
                  onClick={() => setScreen('activity')}
                  className={`p-2.5 rounded-xl border text-left transition-all cursor-pointer ${
                    screen === 'activity'
                      ? 'border-blue-500 bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 font-semibold'
                      : 'border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/60 text-slate-700 dark:text-slate-300'
                  }`}
                >
                  <div className="font-bold">Activity Ledger</div>
                  <div className="text-[10px] text-slate-500">Filtered transactions</div>
                </button>

                <button
                  onClick={() => setScreen('profile')}
                  className={`p-2.5 rounded-xl border text-left transition-all cursor-pointer ${
                    screen === 'profile'
                      ? 'border-blue-500 bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 font-semibold'
                      : 'border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/60 text-slate-700 dark:text-slate-300'
                  }`}
                >
                  <div className="font-bold">Profile & Settings</div>
                  <div className="text-[10px] text-slate-500">Linked banks & security</div>
                </button>
              </div>

              {/* Working Modals Quick Triggers */}
              <div className="pt-2 border-t border-slate-100 dark:border-slate-800 space-y-2">
                <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                  Test Built-in Modals
                </span>
                <div className="flex flex-wrap gap-1.5 text-xs">
                  <button
                    onClick={() => setIsScanOpen(true)}
                    className="px-2.5 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 font-medium text-slate-700 dark:text-slate-300"
                  >
                    Scan QR Laser
                  </button>
                  <button
                    onClick={() => setIsReceiveOpen(true)}
                    className="px-2.5 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 font-medium text-slate-700 dark:text-slate-300"
                  >
                    My UPI QR
                  </button>
                  <button
                    onClick={() => setIsBalanceOpen(true)}
                    className="px-2.5 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 font-medium text-slate-700 dark:text-slate-300"
                  >
                    Check Balance PIN
                  </button>
                  <button
                    onClick={() => setIsRewardsOpen(true)}
                    className="px-2.5 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 font-medium text-slate-700 dark:text-slate-300"
                  >
                    Scratch Card
                  </button>
                </div>
              </div>
            </div>

            {/* Simulated Live Ledger Info */}
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-xs space-y-2">
              <div className="flex items-center justify-between font-semibold text-slate-800 dark:text-slate-200">
                <span>Active Ledger Record Count</span>
                <span className="font-mono text-blue-600 dark:text-blue-400">{transactions.length} Transactions</span>
              </div>
              <p className="text-[11px] text-slate-500">
                Completing transactions in this prototype dynamically inserts records into the activity ledger and persists via browser localStorage.
              </p>
            </div>
          </div>

          {/* Right Column: Mobile Device Frame (7 cols) */}
          <div className="lg:col-span-7 flex justify-center">
            <PhoneFrame
              onReset={handleFullReset}
              currentScreenName={getScreenDisplayName(screen)}
            >
              {/* Screen Rendering Switch */}
              {screen === 'home' && (
                <GPayHomeScreen
                  contacts={contacts}
                  transactions={transactions}
                  onNavigateScreen={setScreen}
                  onSelectContactForPayment={handleSelectContactForPayment}
                  onOpenScanModal={() => setIsScanOpen(true)}
                  onOpenReceiveModal={() => setIsReceiveOpen(true)}
                  onOpenBalanceModal={() => setIsBalanceOpen(true)}
                  onOpenRewardsModal={() => setIsRewardsOpen(true)}
                  onSelectTransactionDetail={setActiveTxDetail}
                />
              )}

              {screen === 'send' && (
                <GPaySendMoneyScreen
                  contacts={contacts}
                  selectedContact={selectedRecipient}
                  onSelectContact={setSelectedRecipient}
                  onProceedToConfirm={handleProceedToConfirm}
                  onNavigateScreen={setScreen}
                />
              )}

              {screen === 'confirm' && (
                <GPayConfirmScreen
                  selectedContact={selectedRecipient || contacts[0]}
                  amount={paymentAmount}
                  note={paymentNote}
                  onConfirmPayment={handleConfirmPayment}
                  onNavigateScreen={setScreen}
                />
              )}

              {screen === 'success' && (
                <GPaySuccessScreen
                  recipient={selectedRecipient || contacts[0]}
                  amount={paymentAmount}
                  referenceId={currentRefId}
                  onNavigateScreen={setScreen}
                  onOpenRewardsModal={() => setIsRewardsOpen(true)}
                />
              )}

              {screen === 'activity' && (
                <GPayActivityScreen
                  transactions={transactions}
                  onNavigateScreen={setScreen}
                  onSelectTransactionDetail={setActiveTxDetail}
                />
              )}

              {screen === 'profile' && (
                <GPayProfileScreen
                  onNavigateScreen={setScreen}
                  onResetTransactions={handleResetTransactions}
                  onOpenReceiveModal={() => setIsReceiveOpen(true)}
                />
              )}

              {/* Persistent Bottom Navigation Dock (Visible on Home, Activity, Profile) */}
              {(screen === 'home' || screen === 'activity' || screen === 'profile') && (
                <div className="absolute bottom-0 inset-x-0 h-14 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-t border-slate-200/80 dark:border-slate-800 flex items-center justify-around px-2 z-20">
                  <button
                    onClick={() => setScreen('home')}
                    className={`flex flex-col items-center gap-1 p-1 rounded-lg transition-colors ${
                      screen === 'home'
                        ? 'text-blue-600 dark:text-blue-400 font-bold'
                        : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-300'
                    }`}
                  >
                    <Home className="w-5 h-5" />
                    <span className="text-[10px]">Home</span>
                  </button>

                  <button
                    onClick={() => setScreen('activity')}
                    className={`flex flex-col items-center gap-1 p-1 rounded-lg transition-colors ${
                      screen === 'activity'
                        ? 'text-blue-600 dark:text-blue-400 font-bold'
                        : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-300'
                    }`}
                  >
                    <Clock className="w-5 h-5" />
                    <span className="text-[10px]">Activity</span>
                  </button>

                  <button
                    onClick={() => setIsRewardsOpen(true)}
                    className="flex flex-col items-center gap-1 p-1 rounded-lg text-slate-500 hover:text-slate-800 dark:hover:text-slate-300 transition-colors"
                  >
                    <Gift className="w-5 h-5" />
                    <span className="text-[10px]">Rewards</span>
                  </button>

                  <button
                    onClick={() => setScreen('profile')}
                    className={`flex flex-col items-center gap-1 p-1 rounded-lg transition-colors ${
                      screen === 'profile'
                        ? 'text-blue-600 dark:text-blue-400 font-bold'
                        : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-300'
                    }`}
                  >
                    <User className="w-5 h-5" />
                    <span className="text-[10px]">Profile</span>
                  </button>
                </div>
              )}

              {/* Modals placed inside the phone frame */}
              <ScanModal
                isOpen={isScanOpen}
                onClose={() => setIsScanOpen(false)}
                onSelectScannedContact={(contact) => {
                  setSelectedRecipient(contact);
                  setScreen('send');
                }}
              />

              <ReceiveModal
                isOpen={isReceiveOpen}
                onClose={() => setIsReceiveOpen(false)}
              />

              <CheckBalanceModal
                isOpen={isBalanceOpen}
                onClose={() => setIsBalanceOpen(false)}
              />

              <RewardModal
                isOpen={isRewardsOpen}
                onClose={() => setIsRewardsOpen(false)}
              />

              <TransactionDetailModal
                transaction={activeTxDetail}
                onClose={() => setActiveTxDetail(null)}
              />
            </PhoneFrame>
          </div>
        </div>
      ) : (
        /* Case Study Tab Content */
        <GPayCaseStudy />
      )}
    </div>
  );
};
