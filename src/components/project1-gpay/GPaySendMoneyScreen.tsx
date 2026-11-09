import React, { useState } from 'react';
import { Contact, GPayScreen } from '../../types';
import { ArrowLeft, Search, User, Check, AlertCircle } from 'lucide-react';

interface GPaySendMoneyScreenProps {
  contacts: Contact[];
  selectedContact: Contact | { name: string; upiId: string } | null;
  onSelectContact: (contact: Contact | { name: string; upiId: string }) => void;
  onProceedToConfirm: (amount: number, note: string) => void;
  onNavigateScreen: (screen: GPayScreen) => void;
}

export const GPaySendMoneyScreen: React.FC<GPaySendMoneyScreenProps> = ({
  contacts,
  selectedContact,
  onSelectContact,
  onProceedToConfirm,
  onNavigateScreen,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [amountStr, setAmountStr] = useState('500');
  const [note, setNote] = useState('');
  const [validationError, setValidationError] = useState('');

  const quickAmounts = [100, 200, 500, 1000, 2000];

  const filteredContacts = contacts.filter(c =>
    c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    c.phone.includes(searchQuery) ||
    c.upiId.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleContinue = () => {
    if (!selectedContact) {
      setValidationError('Please select a recipient first');
      return;
    }
    const num = parseFloat(amountStr);
    if (isNaN(num) || num <= 0) {
      setValidationError('Please enter a valid transfer amount greater than ₹0');
      return;
    }
    if (num > 100000) {
      setValidationError('Maximum UPI single transaction limit is ₹1,00,000');
      return;
    }

    setValidationError('');
    onProceedToConfirm(num, note.trim());
  };

  return (
    <div className="flex-1 flex flex-col justify-between p-4 space-y-4">
      {/* Top Header */}
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <button
            onClick={() => onNavigateScreen('home')}
            className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300"
            aria-label="Back to home"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <h2 className="text-base font-bold text-slate-900 dark:text-white leading-tight">
              Send Money via UPI
            </h2>
            <p className="text-[11px] text-slate-500">Zero fee instant bank-to-bank transfer</p>
          </div>
        </div>

        {/* Selected Contact or Contact Selection Picker */}
        {selectedContact ? (
          <div className="p-3.5 rounded-2xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900/50 flex items-center justify-between">
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm shrink-0">
                {selectedContact.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div className="truncate">
                <div className="text-xs font-bold text-slate-900 dark:text-white truncate">
                  {selectedContact.name}
                </div>
                <div className="text-[11px] text-slate-500 font-mono truncate">
                  {selectedContact.upiId}
                </div>
              </div>
            </div>
            <button
              onClick={() => onSelectContact(null as any)}
              className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline shrink-0 ml-2"
            >
              Change
            </button>
          </div>
        ) : (
          <div className="space-y-3">
            {/* Search Contact Field */}
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search recipient name, phone or UPI ID..."
                className="w-full pl-9 pr-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-blue-500"
              />
            </div>

            {/* Suggested / Contact list */}
            <div className="space-y-1 max-h-48 overflow-y-auto">
              <div className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider px-1">
                Suggested Recipients
              </div>
              {filteredContacts.map(c => (
                <button
                  key={c.id}
                  onClick={() => onSelectContact(c)}
                  className="w-full flex items-center gap-3 p-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors text-left"
                >
                  <div className={`w-9 h-9 rounded-full ${c.avatarBg} ${c.avatarColor} flex items-center justify-center text-xs font-bold`}>
                    {c.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="truncate flex-1">
                    <div className="text-xs font-semibold text-slate-800 dark:text-slate-200 truncate">{c.name}</div>
                    <div className="text-[10px] text-slate-400 font-mono">{c.upiId}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Amount Input Section */}
        {selectedContact && (
          <div className="space-y-4 pt-2">
            <div className="text-center space-y-1">
              <label htmlFor="amount-input" className="text-xs text-slate-500 font-medium">
                Enter Amount
              </label>
              <div className="flex items-center justify-center gap-1">
                <span className="text-2xl font-bold text-slate-400 font-mono">₹</span>
                <input
                  id="amount-input"
                  type="number"
                  min="1"
                  max="100000"
                  value={amountStr}
                  onChange={(e) => {
                    setAmountStr(e.target.value);
                    setValidationError('');
                  }}
                  className="text-4xl font-black text-slate-900 dark:text-white font-mono tracking-tight text-center bg-transparent max-w-[200px] focus:outline-none"
                  placeholder="0"
                  autoFocus
                />
              </div>
            </div>

            {/* Quick Amount Chips */}
            <div className="flex items-center justify-center gap-1.5 flex-wrap">
              {quickAmounts.map((amt) => (
                <button
                  key={amt}
                  type="button"
                  onClick={() => setAmountStr(amt.toString())}
                  className={`px-3 py-1 rounded-lg text-xs font-mono font-medium transition-colors ${
                    amountStr === amt.toString()
                      ? 'bg-blue-600 text-white shadow-xs'
                      : 'bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800'
                  }`}
                >
                  +₹{amt}
                </button>
              ))}
            </div>

            {/* Optional Note */}
            <div className="pt-2">
              <input
                type="text"
                value={note}
                onChange={(e) => setNote(e.target.value)}
                placeholder="Add a note (e.g. Lunch, Split, Rent)"
                maxLength={50}
                className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-blue-500"
              />
            </div>

            {validationError && (
              <div className="p-2.5 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900 text-rose-600 dark:text-rose-400 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{validationError}</span>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Continue Action */}
      <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
        <button
          onClick={handleContinue}
          disabled={!selectedContact}
          className="w-full py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:bg-slate-200 dark:disabled:bg-slate-800 disabled:text-slate-400 text-white font-bold text-xs shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
        >
          <span>Continue to Confirmation</span>
        </button>
      </div>
    </div>
  );
};
