import React from 'react';
import { NavSection } from '../../types';
import { 
  LayoutDashboard, 
  Smartphone, 
  UserCheck, 
  Palette, 
  Component, 
  GraduationCap, 
  CheckCircle2, 
  ChevronRight,
  Sparkles
} from 'lucide-react';

interface SidebarProps {
  currentSection: NavSection;
  onNavigate: (section: NavSection) => void;
}

export const NAV_ITEMS = [
  {
    id: 'overview' as NavSection,
    label: 'Overview',
    subtitle: 'Executive Summary',
    icon: LayoutDashboard,
    completed: true,
  },
  {
    id: 'project-1' as NavSection,
    label: 'Project 01 – Google Pay',
    subtitle: 'Mobile UI Redesign Prototype',
    icon: Smartphone,
    completed: true,
  },
  {
    id: 'project-2' as NavSection,
    label: 'Project 02 – Inclusive Login',
    subtitle: 'Accessible Auth Experience',
    icon: UserCheck,
    completed: true,
  },
  {
    id: 'project-3' as NavSection,
    label: 'Project 03 – Instagram Critique',
    subtitle: 'Color & Typography Analysis',
    icon: Palette,
    completed: true,
  },
  {
    id: 'design-system' as NavSection,
    label: 'Design System',
    subtitle: 'Tokens, Scales & Components',
    icon: Component,
    completed: true,
  },
  {
    id: 'about' as NavSection,
    label: 'About Project',
    subtitle: 'E.G.S. Pillay College · CO5',
    icon: GraduationCap,
    completed: true,
  },
];

export const Sidebar: React.FC<SidebarProps> = ({ currentSection, onNavigate }) => {
  return (
    <aside className="hidden lg:flex flex-col w-72 shrink-0 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 h-screen sticky top-0 transition-colors">
      {/* Brand Header */}
      <div className="p-6 border-b border-slate-200 dark:border-slate-800">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 via-indigo-600 to-blue-700 flex items-center justify-center text-white shadow-md shadow-blue-500/20">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <h1 className="font-bold text-slate-900 dark:text-white tracking-tight text-base leading-none">
              DESIGNLAB
            </h1>
            <p className="text-[11px] font-medium text-slate-500 dark:text-slate-400 mt-1 uppercase tracking-wider">
              UI/UX Experience Studio
            </p>
          </div>
        </div>
      </div>

      {/* Navigation List */}
      <div className="flex-1 overflow-y-auto px-4 py-6 space-y-1.5">
        <div className="px-3 pb-2 text-[11px] font-semibold tracking-wider uppercase text-slate-400 dark:text-slate-500">
          Academic Projects
        </div>

        {NAV_ITEMS.map((item) => {
          const Icon = item.icon;
          const isActive = currentSection === item.id;

          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`w-full flex items-center justify-between p-3 rounded-xl text-left transition-all group ${
                isActive
                  ? 'bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 font-semibold shadow-xs border border-blue-200/60 dark:border-blue-900/40'
                  : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100/80 dark:hover:bg-slate-800/80 hover:text-slate-900 dark:hover:text-slate-200'
              }`}
            >
              <div className="flex items-center gap-3 min-w-0">
                <div
                  className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                    isActive
                      ? 'bg-blue-600 text-white'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-slate-200'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                </div>
                <div className="truncate">
                  <div className="text-xs font-medium truncate">{item.label}</div>
                  <div className="text-[11px] text-slate-400 dark:text-slate-500 truncate font-normal">
                    {item.subtitle}
                  </div>
                </div>
              </div>

              {isActive ? (
                <ChevronRight className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 ml-2" />
              ) : (
                <span className="w-2 h-2 rounded-full bg-slate-200 dark:bg-slate-700 group-hover:bg-blue-400 shrink-0 ml-2" />
              )}
            </button>
          );
        })}
      </div>

      {/* Progress & Academic Meta Footer */}
      <div className="p-4 mx-4 mb-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-800">
        <div className="flex items-center justify-between text-xs mb-2">
          <span className="font-semibold text-slate-700 dark:text-slate-300">
            Portfolio Status
          </span>
          <span className="font-mono text-emerald-600 dark:text-emerald-400 font-semibold text-[11px] flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5" /> 3 / 3 Done
          </span>
        </div>
        
        {/* Progress Bar */}
        <div className="w-full bg-slate-200 dark:bg-slate-700 h-1.5 rounded-full overflow-hidden">
          <div className="bg-emerald-500 h-full w-full rounded-full transition-all" />
        </div>

        <div className="mt-3 pt-2.5 border-t border-slate-200/60 dark:border-slate-700/60 text-[11px] text-slate-500 dark:text-slate-400">
          <div>Web Tech – Assignment 2</div>
          <div className="font-medium text-slate-700 dark:text-slate-300">Sakthi · V Sem CSE</div>
        </div>
      </div>
    </aside>
  );
};
