import React, { useState } from 'react';
import { Transaction, GPayScreen } from '../../types';
import { 
  ArrowLeft, 
  Search, 
  ArrowDownLeft, 
  ArrowUpRight, 
  Filter, 
  Calendar 
} from 'lucide-react';

interface GPayActivityScreenProps {
  transactions: Transaction[];
  onNavigateScreen: (screen: GPayScreen) => void;
  onSelectTransactionDetail: (tx: Transaction) => void;
}

export const GPayActivityScreen: React.FC<GPayActivityScreenProps> = ({
  transactions,
  onNavigateScreen,
  onSelectTransactionDetail,
}) => {
  const [search, setSearch] = useState('');
  const [filterType, setFilterType] = useState<'all' | 'debit' | 'credit'>('all');
  const [dateRange, setDateRange] = useState<'all' | 'week' | 'month'>('all');

  const filtered = transactions.filter(t => {
    const matchesSearch = t.contactName.toLowerCase().includes(search.toLowerCase()) ||
      t.referenceId.toLowerCase().includes(search.toLowerCase()) ||
      (t.note && t.note.toLowerCase().includes(search.toLowerCase()));

    const matchesType = filterType === 'all' || t.type === filterType;

    const matchesDate = dateRange === 'all' 
      ? true 
      : dateRange === 'week' 
      ? (t.date === 'Today' || t.date === 'Yesterday' || t.date.includes('Nov')) 
      : true;

    return matchesSearch && matchesType && matchesDate;
  });

  const totalSpent = transactions
    .filter(t => t.type === 'debit')
    .reduce((acc, curr) => acc + curr.amount, 0);

  const totalReceived = transactions
    .filter(t => t.type === 'credit')
    .reduce((acc, curr) => acc + curr.amount, 0);

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
        <div>
          <h2 className="text-base font-bold text-slate-900 dark:text-white leading-tight">
            Transaction Activity
          </h2>
          <p className="text-[11px] text-slate-500">Live updated ledger with simulated receipts</p>
        </div>
      </div>

      {/* Monthly Summary Strip */}
      <div className="grid grid-cols-2 gap-2">
        <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
          <div className="text-[10px] text-slate-400 uppercase font-semibold">Total Debited</div>
          <div className="text-sm font-bold text-slate-900 dark:text-white font-mono tabular-nums mt-0.5">
            -₹{totalSpent.toLocaleString()}
          </div>
        </div>
        <div className="p-3 rounded-xl bg-emerald-50/60 dark:bg-emerald-950/30 border border-emerald-200/60 dark:border-emerald-900/40">
          <div className="text-[10px] text-emerald-600 dark:text-emerald-400 uppercase font-semibold">Total Received</div>
          <div className="text-sm font-bold text-emerald-700 dark:text-emerald-300 font-mono tabular-nums mt-0.5">
            +₹{totalReceived.toLocaleString()}
          </div>
        </div>
      </div>

      {/* Search Input */}
      <div className="relative">
        <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by contact or reference ID..."
          className="w-full pl-9 pr-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-blue-500"
        />
      </div>

      {/* Filter Tabs (Segmented Controls) */}
      <div className="flex items-center justify-between gap-1 p-1 bg-slate-100 dark:bg-slate-900 rounded-xl">
        <button
          onClick={() => setFilterType('all')}
          className={`flex-1 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
            filterType === 'all'
              ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-xs'
              : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
          }`}
        >
          All ({transactions.length})
        </button>
        <button
          onClick={() => setFilterType('debit')}
          className={`flex-1 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
            filterType === 'debit'
              ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-xs'
              : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
          }`}
        >
          Paid
        </button>
        <button
          onClick={() => setFilterType('credit')}
          className={`flex-1 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
            filterType === 'credit'
              ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-xs'
              : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
          }`}
        >
          Received
        </button>
      </div>

      {/* Transaction List */}
      <div className="space-y-1.5">
        {filtered.length === 0 ? (
          <div className="p-8 text-center text-xs text-slate-400 space-y-2">
            <div>No matching transactions found</div>
            <button
              onClick={() => {
                setSearch('');
                setFilterType('all');
              }}
              className="text-xs text-blue-600 dark:text-blue-400 font-semibold underline"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          filtered.map((t) => (
            <button
              key={t.id}
              onClick={() => onSelectTransactionDetail(t)}
              className="w-full flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 hover:bg-slate-100 dark:hover:bg-slate-900 border border-slate-200/60 dark:border-slate-800 transition-colors text-left cursor-pointer"
            >
              <div className="flex items-center gap-3 min-w-0">
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                    t.type === 'credit'
                      ? 'bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400'
                      : 'bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                  }`}
                >
                  {t.type === 'credit' ? (
                    <ArrowDownLeft className="w-5 h-5" />
                  ) : (
                    <ArrowUpRight className="w-5 h-5" />
                  )}
                </div>
                <div className="truncate">
                  <div className="text-xs font-bold text-slate-900 dark:text-white truncate">
                    {t.contactName}
                  </div>
                  <div className="text-[10px] text-slate-400 flex items-center gap-1.5 font-mono">
                    <span>{t.date} · {t.time}</span>
                  </div>
                  {t.note && (
                    <div className="text-[10px] text-slate-500 truncate max-w-[170px] italic">
                      "{t.note}"
                    </div>
                  )}
                </div>
              </div>

              <div className="text-right shrink-0">
                <div
                  className={`text-xs font-bold font-mono tabular-nums ${
                    t.type === 'credit'
                      ? 'text-emerald-600 dark:text-emerald-400'
                      : 'text-slate-900 dark:text-white'
                  }`}
                >
                  {t.type === 'credit' ? '+' : '-'}₹{t.amount.toLocaleString()}
                </div>
                <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-semibold">
                  Completed
                </span>
              </div>
            </button>
          ))
        )}
      </div>
    </div>
  );
};
