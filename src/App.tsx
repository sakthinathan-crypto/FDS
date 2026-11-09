import React, { useState, useEffect } from 'react';
import { NavSection } from './types';
import { TopNavbar } from './components/layout/TopNavbar';
import { Sidebar } from './components/layout/Sidebar';
import { MobileDrawer } from './components/layout/MobileDrawer';
import { OverviewDashboard } from './components/overview/OverviewDashboard';
import { GooglePayProject } from './components/project1-gpay/GooglePayProject';
import { InclusiveLoginProject } from './components/project2-login/InclusiveLoginProject';
import { InstagramCritiqueProject } from './components/project3-instagram/InstagramCritiqueProject';
import { DesignSystemPage } from './components/design-system/DesignSystemPage';
import { AboutProjectPage } from './components/about/AboutProjectPage';

export default function App() {
  const [currentSection, setCurrentSection] = useState<NavSection>('overview');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Dark mode state with localStorage persistence
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    try {
      const saved = localStorage.getItem('designlab_theme');
      if (saved) return saved === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    } catch (e) {
      return false;
    }
  });

  useEffect(() => {
    try {
      if (darkMode) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('designlab_theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('designlab_theme', 'light');
      }
    } catch (e) {}
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(prev => !prev);
  };

  const handleNavigate = (section: NavSection) => {
    setCurrentSection(section);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col antialiased transition-colors duration-200">
      {/* Mobile Drawer */}
      <MobileDrawer
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        currentSection={currentSection}
        onNavigate={handleNavigate}
      />

      <div className="flex-1 flex">
        {/* Fixed Desktop Sidebar */}
        <Sidebar
          currentSection={currentSection}
          onNavigate={handleNavigate}
        />

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col min-w-0">
          <TopNavbar
            currentSection={currentSection}
            onNavigate={handleNavigate}
            darkMode={darkMode}
            onToggleDarkMode={toggleDarkMode}
            onOpenMobileMenu={() => setIsMobileMenuOpen(true)}
            onOpenAccessibilitySettings={() => handleNavigate('project-2')}
          />

          <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto">
            {currentSection === 'overview' && (
              <OverviewDashboard onNavigate={handleNavigate} />
            )}

            {currentSection === 'project-1' && (
              <GooglePayProject />
            )}

            {currentSection === 'project-2' && (
              <InclusiveLoginProject />
            )}

            {currentSection === 'project-3' && (
              <InstagramCritiqueProject />
            )}

            {currentSection === 'design-system' && (
              <DesignSystemPage />
            )}

            {currentSection === 'about' && (
              <AboutProjectPage />
            )}
          </main>

          {/* Clean Academic Site Footer */}
          <footer className="border-t border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-900/60 py-4 px-6 text-xs text-slate-500 dark:text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-2">
            <div>
              <span className="font-semibold text-slate-700 dark:text-slate-300">DESIGNLAB Studio</span> · 2302CS503 Web Technology Assignment 2 (CO5)
            </div>
            <div className="flex items-center gap-4 text-[11px]">
              <span>E.G.S. Pillay Engineering College</span>
              <span aria-hidden="true">·</span>
              <span>Sakthi (2026–2027)</span>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}
