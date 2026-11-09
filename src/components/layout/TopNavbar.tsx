import React from 'react';
import { NavSection } from '../../types';
import { 
  Sun, 
  Moon, 
  Menu, 
  Layers, 
  ShieldCheck, 
  ExternalLink 
} from 'lucide-react';

interface TopNavbarProps {
  currentSection: NavSection;
  onNavigate: (section: NavSection) => void;
  darkMode: boolean;
  onToggleDarkMode: () => void;
  onOpenMobileMenu: () => void;
  onOpenAccessibilitySettings?: () => void;
}

const SECTION_TITLES: Record<NavSection, { title: string; category: string }> = {
  'overview': { title: 'Executive Portfolio Dashboard', category: 'DesignLab Studio' },
  'project-1': { title: 'Project 01: Google Pay Application UI Redesign', category: 'Fintech UX / Mobile Prototype' },
  'project-2': { title: 'Project 02: Inclusive & Accessible Login Screen', category: 'WCAG 2.2 AA / Inclusive Design' },
  'project-3': { title: 'Project 03: Instagram Color & Typography Critique', category: 'Visual Heuristic Analysis' },
  'design-system': { title: 'Design System Tokens & Components', category: 'Design Architecture' },
  'about': { title: 'Academic Project Documentation & CO5', category: 'Web Technology 2302CS503' },
};

export const TopNavbar: React.FC<TopNavbarProps> = ({
  currentSection,
  onNavigate,
  darkMode,
  onToggleDarkMode,
  onOpenMobileMenu,
  onOpenAccessibilitySettings,
}) => {
  const current = SECTION_TITLES[currentSection];

  return (
    <header className="sticky top-0 z-30 flex items-center justify-between gap-4 px-4 lg:px-8 py-3.5 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors">
      {/* Zone 1: Mobile Hamburger & Breadcrumb */}
      <div className="flex items-center gap-3 min-w-0">
        <button
          onClick={onOpenMobileMenu}
          className="lg:hidden p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 focus-visible:ring-2 focus-visible:ring-blue-600"
          aria-label="Open mobile navigation menu"
        >
          <Menu className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 dark:text-slate-400 truncate">
          <button 
            onClick={() => onNavigate('overview')}
            className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium whitespace-nowrap"
          >
            DESIGNLAB
          </button>
          <span aria-hidden="true" className="text-slate-300 dark:text-slate-600">/</span>
          <span className="text-slate-900 dark:text-slate-100 font-semibold truncate">
            {current.title}
          </span>
        </div>
      </div>

      {/* Zone 2: Academic & Assignment Badge (Desktop) */}
      <div className="hidden xl:flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400">
        <span className="px-2.5 py-1 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium font-mono text-[11px]">
          2302CS503 · CO5
        </span>
        <span className="text-slate-400 dark:text-slate-500">|</span>
        <span className="truncate">E.G.S. Pillay Engineering College</span>
      </div>

      {/* Zone 3: Actions & Theme Controls */}
      <div className="flex items-center gap-2 sm:gap-3 shrink-0">
        {onOpenAccessibilitySettings && (
          <button
            onClick={onOpenAccessibilitySettings}
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-colors"
            title="Accessibility Preferences"
            aria-label="Open Accessibility Preferences"
          >
            <ShieldCheck className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span>Accessibility</span>
          </button>
        )}

        <button
          onClick={onToggleDarkMode}
          className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors focus-visible:ring-2 focus-visible:ring-blue-600"
          title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          aria-label={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        >
          {darkMode ? (
            <Sun className="w-5 h-5 text-amber-400" />
          ) : (
            <Moon className="w-5 h-5 text-slate-600" />
          )}
        </button>

        <button
          onClick={() => {
            const nextMap: Record<NavSection, NavSection> = {
              'overview': 'project-1',
              'project-1': 'project-2',
              'project-2': 'project-3',
              'project-3': 'design-system',
              'design-system': 'about',
              'about': 'overview',
            };
            onNavigate(nextMap[currentSection]);
          }}
          className="px-3.5 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 rounded-lg shadow-sm transition-colors whitespace-nowrap cursor-pointer"
        >
          {currentSection === 'overview' && 'Explore Project 01'}
          {currentSection === 'project-1' && 'Next: Project 02'}
          {currentSection === 'project-2' && 'Next: Project 03'}
          {currentSection === 'project-3' && 'Design System'}
          {currentSection === 'design-system' && 'About Project'}
          {currentSection === 'about' && 'Back to Overview'}
        </button>
      </div>
    </header>
  );
};
