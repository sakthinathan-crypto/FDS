import React, { useState } from 'react';
import { 
  Contact, 
  Transaction, 
  GPayScreen 
} from '../../types';
import { BUSINESS_SERVICES } from '../../data/mockData';
import { 
  Search, 
  Bell, 
  QrCode, 
  Send, 
  ArrowDownLeft, 
  Building2, 
  ChevronRight, 
  Zap, 
  Smartphone, 
  Droplets, 
  Wifi, 
  CreditCard,
  User,
  ArrowUpRight,
  ShieldCheck,
  Check
} from 'lucide-react';

interface GPayHomeScreenProps {
  contacts: Contact[];
  transactions: Transaction[];
  onNavigateScreen: (screen: GPayScreen) => void;
  onSelectContactForPayment: (contact: Contact | { name: string; upiId: string }) => void;
  onOpenScanModal: () => void;
  onOpenReceiveModal: () => void;
  onOpenBalanceModal: () => void;
  onOpenRewardsModal: () => void;
  onSelectTransactionDetail: (tx: Transaction) => void;
}

export const GPayHomeScreen: React.FC<GPayHomeScreenProps> = ({
  contacts,
  transactions,
  onNavigateScreen,
  onSelectContactForPayment,
  onOpenScanModal,
  onOpenReceiveModal,
  onOpenBalanceModal,
  onOpenRewardsModal,
  onSelectTransactionDetail,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [hasNotifications, setHasNotifications] = useState(true);
  const [showNotificationToast, setShowNotificationToast] = useState(false);

  // Filter contacts by search query
  const filteredContacts = contacts.filter(c => 
    c.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    c.phone.includes(searchQuery) ||
    c.upiId.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Filter businesses by search query
  const filteredBusinesses = BUSINESS_SERVICES.filter(b =>
    b.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    b.biller.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getBusinessIcon = (iconName: string) => {
    switch (iconName) {
      case 'Zap': return <Zap className="w-5 h-5 text-amber-500" />;
      case 'Smartphone': return <Smartphone className="w-5 h-5 text-blue-500" />;
      case 'Droplets': return <Droplets className="w-5 h-5 text-cyan-500" />;
      case 'Wifi': return <Wifi className="w-5 h-5 text-purple-500" />;
      case 'CreditCard': return <CreditCard className="w-5 h-5 text-emerald-500" />;
      default: return <CreditCard className="w-5 h-5" />;
    }
  };

  const handleNotificationClick = () => {
    setShowNotificationToast(true);
    setHasNotifications(false);
    setTimeout(() => setShowNotificationToast(false), 3500);
  };

  return (
    <div className="flex-1 pb-20 space-y-5 px-4 pt-2">
      {/* 1. Header: Greeting & Profile */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button 
            onClick={() => onNavigateScreen('profile')}
            className="relative focus-visible:ring-2 focus-visible:ring-blue-600 rounded-full"
            aria-label="Open profile settings"
          >
            <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold text-sm shadow-md ring-2 ring-blue-500/30">
              S
            </div>
            <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-white dark:border-slate-900 rounded-full" />
          </button>
          <div>
            <div className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
              Welcome back
            </div>
            <div className="text-base font-bold text-slate-900 dark:text-white leading-tight">
              Hello, Sakthi!
            </div>
          </div>
        </div>

        <div className="relative">
          <button 
            onClick={handleNotificationClick}
            className="p-2.5 rounded-full bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 transition-colors focus-visible:ring-2 focus-visible:ring-blue-600"
            aria-label="Notifications"
          >
            <Bell className="w-5 h-5" />
            {hasNotifications && (
              <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-rose-500 rounded-full border-2 border-white dark:border-slate-900" />
            )}
          </button>

          {showNotificationToast && (
            <div className="absolute right-0 top-12 w-64 p-3 bg-white dark:bg-slate-900 rounded-xl shadow-xl border border-slate-200 dark:border-slate-800 text-xs z-50 animate-in fade-in slide-in-from-top-2">
              <div className="font-semibold text-slate-900 dark:text-white flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                <span>UPI Security Alert</span>
              </div>
              <p className="text-[11px] text-slate-500 mt-1">
                Electricity bill payment of ₹1,450 to TNEB was successfully processed.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* 2. Search Bar: Working Live Filter */}
      <div className="relative">
        <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search contacts, UPI IDs, bills..."
          className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white dark:focus:bg-slate-950 transition-all"
        />
        {searchQuery && (
          <button
            onClick={() => setSearchQuery('')}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
          >
            Clear
          </button>
        )}
      </div>

      {/* 3. Quick Actions Grid (Fitts's Law Optimized, Hick's Law 4 choices) */}
      <div className="grid grid-cols-4 gap-2">
        <button
          onClick={onOpenScanModal}
          className="flex flex-col items-center gap-1.5 p-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors cursor-pointer group"
        >
          <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-950/60 border border-blue-200/60 dark:border-blue-800/40 text-blue-600 dark:text-blue-400 flex items-center justify-center group-hover:scale-105 transition-transform shadow-xs">
            <QrCode className="w-6 h-6" />
          </div>
          <span className="text-[11px] font-semibold text-slate-800 dark:text-slate-200 text-center leading-tight">
            Scan & Pay
          </span>
        </button>

        <button
          onClick={() => onNavigateScreen('send')}
          className="flex flex-col items-center gap-1.5 p-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors cursor-pointer group"
        >
          <div className="w-12 h-12 rounded-2xl bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200/60 dark:border-indigo-800/40 text-indigo-600 dark:text-indigo-400 flex items-center justify-center group-hover:scale-105 transition-transform shadow-xs">
            <Send className="w-5 h-5" />
          </div>
          <span className="text-[11px] font-semibold text-slate-800 dark:text-slate-200 text-center leading-tight">
            Send Money
          </span>
        </button>

        <button
          onClick={onOpenReceiveModal}
          className="flex flex-col items-center gap-1.5 p-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors cursor-pointer group"
        >
          <div className="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200/60 dark:border-emerald-800/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center group-hover:scale-105 transition-transform shadow-xs">
            <ArrowDownLeft className="w-5 h-5" />
          </div>
          <span className="text-[11px] font-semibold text-slate-800 dark:text-slate-200 text-center leading-tight">
            Receive
          </span>
        </button>

        <button
          onClick={onOpenBalanceModal}
          className="flex flex-col items-center gap-1.5 p-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors cursor-pointer group"
        >
          <div className="w-12 h-12 rounded-2xl bg-purple-50 dark:bg-purple-950/60 border border-purple-200/60 dark:border-purple-800/40 text-purple-600 dark:text-purple-400 flex items-center justify-center group-hover:scale-105 transition-transform shadow-xs">
            <Building2 className="w-5 h-5" />
          </div>
          <span className="text-[11px] font-semibold text-slate-800 dark:text-slate-200 text-center leading-tight">
            Bank Balance
          </span>
        </button>
      </div>

      {/* 4. People Section */}
      <div className="space-y-2.5">
        <div className="flex items-center justify-between">
          <div className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
            People & Contacts
          </div>
          <button 
            onClick={() => onNavigateScreen('send')}
            className="text-[11px] font-semibold text-blue-600 dark:text-blue-400 hover:underline"
          >
            View all
          </button>
        </div>

        {filteredContacts.length === 0 ? (
          <div className="p-4 text-center text-xs text-slate-400">
            No contacts matching "{searchQuery}"
          </div>
        ) : (
          <div className="grid grid-cols-4 gap-2">
            {filteredContacts.slice(0, 4).map((c) => (
              <button
                key={c.id}
                onClick={() => onSelectContactForPayment(c)}
                className="flex flex-col items-center gap-1.5 p-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors group cursor-pointer text-center"
              >
                <div className={`w-12 h-12 rounded-full ${c.avatarBg} ${c.avatarColor} flex items-center justify-center text-sm font-bold shadow-xs group-hover:scale-105 transition-transform ring-2 ring-white dark:ring-slate-900`}>
                  {c.name.split(' ').map(n => n[0]).join('')}
                </div>
                <span className="text-[11px] font-medium text-slate-800 dark:text-slate-200 truncate w-full">
                  {c.name.split(' ')[0]}
                </span>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* 5. Business & Utility Bills Section */}
      <div className="space-y-2.5">
        <div className="flex items-center justify-between">
          <div className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
            Business & Bills
          </div>
          <span className="text-[11px] text-slate-400">Direct Pay</span>
        </div>

        <div className="grid grid-cols-5 gap-1.5">
          {filteredBusinesses.map((b) => (
            <button
              key={b.id}
              onClick={() => {
                onSelectContactForPayment({
                  name: b.name,
                  upiId: `${b.id}.utility@gov`,
                });
              }}
              className="flex flex-col items-center gap-1.5 p-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors group cursor-pointer text-center"
            >
              <div className="w-11 h-11 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
                {getBusinessIcon(b.icon)}
              </div>
              <span className="text-[10px] font-medium text-slate-700 dark:text-slate-300 leading-tight truncate w-full">
                {b.name}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Rewards Teaser Card (Interactive) */}
      <div 
        onClick={onOpenRewardsModal}
        className="p-3.5 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white flex items-center justify-between shadow-md cursor-pointer hover:opacity-95 transition-opacity"
      >
        <div className="space-y-0.5">
          <div className="text-xs font-bold flex items-center gap-1.5">
            <span>🎁 You have 1 unopened scratch card!</span>
          </div>
          <p className="text-[11px] text-blue-100">Tap to reveal instant cashback reward</p>
        </div>
        <div className="px-3 py-1 bg-white/20 hover:bg-white/30 rounded-lg text-xs font-semibold whitespace-nowrap">
          Scratch Now
        </div>
      </div>

      {/* 6. Recent Transactions */}
      <div className="space-y-2.5">
        <div className="flex items-center justify-between">
          <div className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
            Recent Transactions
          </div>
          <button 
            onClick={() => onNavigateScreen('activity')}
            className="text-[11px] font-semibold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-0.5"
          >
            <span>See all</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="space-y-1.5">
          {transactions.slice(0, 4).map((tx) => (
            <button
              key={tx.id}
              onClick={() => onSelectTransactionDetail(tx)}
              className="w-full flex items-center justify-between p-2.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 hover:bg-slate-100 dark:hover:bg-slate-900 border border-slate-200/60 dark:border-slate-800 transition-colors text-left cursor-pointer group"
            >
              <div className="flex items-center gap-2.5 min-w-0">
                <div 
                  className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${
                    tx.type === 'credit'
                      ? 'bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400'
                      : 'bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                  }`}
                >
                  {tx.type === 'credit' ? (
                    <ArrowDownLeft className="w-4 h-4" />
                  ) : (
                    <ArrowUpRight className="w-4 h-4" />
                  )}
                </div>
                <div className="truncate">
                  <div className="text-xs font-semibold text-slate-900 dark:text-white truncate">
                    {tx.contactName}
                  </div>
                  <div className="text-[10px] text-slate-500">
                    {tx.date} · {tx.time}
                  </div>
                </div>
              </div>

              <div className="text-right shrink-0">
                <div className={`text-xs font-bold font-mono tabular-nums ${
                  tx.type === 'credit' 
                    ? 'text-emerald-600 dark:text-emerald-400' 
                    : 'text-slate-900 dark:text-white'
                }`}>
                  {tx.type === 'credit' ? '+' : '-'}₹{tx.amount.toLocaleString()}
                </div>
                <div className="text-[10px] text-slate-400 capitalize">
                  {tx.status}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
