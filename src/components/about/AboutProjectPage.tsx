import React from 'react';
import { ACADEMIC_INFO } from '../../data/mockData';
import { 
  GraduationCap, 
  BookOpen, 
  CheckCircle2, 
  Layers, 
  ShieldCheck, 
  Code, 
  Award,
  Building2,
  Calendar,
  User,
  Mail,
  Compass
} from 'lucide-react';

export const AboutProjectPage: React.FC = () => {
  const LEARNING_OUTCOMES = [
    {
      title: 'Understand UI/UX Design Principles',
      desc: 'Mastery of fundamental HCI principles including Fitts’s Law, Hick’s Law, Miller’s Law chunking, and progressive disclosure.',
    },
    {
      title: 'Identify Usability Problems',
      desc: 'Heuristic evaluation of existing consumer platforms to spot friction, hidden workflows, and visual noise.',
    },
    {
      title: 'Design Intuitive Interfaces',
      desc: 'Creating streamlined mobile workflows with clear touch targets, thumb-zone mapping, and cohesive visual structure.',
    },
    {
      title: 'Apply Accessibility Principles',
      desc: 'Implementation of WCAG 2.2 Level AA and AAA standards, high-contrast modes, dynamic text scaling, and ARIA attributes.',
    },
    {
      title: 'Evaluate Color and Typography',
      desc: 'Critical dissection of social media brand palettes, contrast ratios, type hierarchy, and readability trade-offs.',
    },
    {
      title: 'Develop Interactive Frontend Prototypes',
      desc: 'Building responsive, high-performance web applications using React, TypeScript, and modern design systems without dead controls.',
    },
  ];

  return (
    <div className="space-y-8 max-w-5xl mx-auto pb-12">
      {/* Hero Header */}
      <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white border border-slate-800 space-y-4 shadow-xl">
        <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-blue-300">
          <span className="bg-blue-500/20 px-2.5 py-1 rounded text-blue-300 border border-blue-400/30">
            {ACADEMIC_INFO.courseCode} · {ACADEMIC_INFO.activity}
          </span>
          <span className="text-slate-400">·</span>
          <span>{ACADEMIC_INFO.academicYear}</span>
        </div>

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight">
          Project Documentation & Academic Information
        </h1>

        <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl">
          Comprehensive project portfolio prepared for Web Technology (2302CS503) – Activity II (CO5) at E.G.S. Pillay Engineering College.
        </p>
      </div>

      {/* Institutional Metadata Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1">
          <div className="flex items-center gap-2 text-slate-500 text-xs font-medium">
            <Building2 className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span>Institution</span>
          </div>
          <div className="font-bold text-sm text-slate-900 dark:text-white">
            {ACADEMIC_INFO.institution}
          </div>
        </div>

        <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1">
          <div className="flex items-center gap-2 text-slate-500 text-xs font-medium">
            <BookOpen className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
            <span>Subject & Code</span>
          </div>
          <div className="font-bold text-sm text-slate-900 dark:text-white">
            {ACADEMIC_INFO.courseCode} – {ACADEMIC_INFO.courseName}
          </div>
        </div>

        <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1">
          <div className="flex items-center gap-2 text-slate-500 text-xs font-medium">
            <Calendar className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span>Semester & Academic Year</span>
          </div>
          <div className="font-bold text-sm text-slate-900 dark:text-white">
            {ACADEMIC_INFO.semester} ({ACADEMIC_INFO.academicYear})
          </div>
        </div>

        <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1">
          <div className="flex items-center gap-2 text-slate-500 text-xs font-medium">
            <User className="w-4 h-4 text-purple-600 dark:text-purple-400" />
            <span>Student / Designer</span>
          </div>
          <div className="font-bold text-sm text-slate-900 dark:text-white">
            {ACADEMIC_INFO.studentName}
          </div>
        </div>

        <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1">
          <div className="flex items-center gap-2 text-slate-500 text-xs font-medium">
            <Mail className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
            <span>Contact Email</span>
          </div>
          <div className="font-bold text-xs font-mono text-slate-900 dark:text-white">
            {ACADEMIC_INFO.email}
          </div>
        </div>

        <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1">
          <div className="flex items-center gap-2 text-slate-500 text-xs font-medium">
            <Award className="w-4 h-4 text-amber-600 dark:text-amber-400" />
            <span>Course Outcome Target</span>
          </div>
          <div className="font-bold text-sm text-slate-900 dark:text-white">
            Activity II – CO5 Alignment
          </div>
        </div>
      </div>

      {/* Assignment Objectives */}
      <section className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
        <h2 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <Compass className="w-5 h-5 text-blue-600 dark:text-blue-400" />
          <span>Assignment Objective</span>
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
          To develop practical UI/UX design skills through application redesign, inclusive interface development, and critical evaluation of visual design principles. Rather than submitting static slides or non-functional wireframes, this assignment delivers a complete, interactive, component-based web application with working prototypes and analytical case studies.
        </p>
      </section>

      {/* Course Learning Outcomes (CO5) */}
      <section className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
        <h2 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
          <span>Course Learning Outcomes Achieved</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {LEARNING_OUTCOMES.map((item, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 space-y-1.5">
              <div className="font-bold text-xs text-slate-900 dark:text-white flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-blue-100 dark:bg-blue-900/60 text-blue-600 dark:text-blue-400 flex items-center justify-center text-[10px] font-mono">
                  {idx + 1}
                </span>
                <span>{item.title}</span>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed pl-7">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Technical Architecture Notes */}
      <section className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
        <h2 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <Code className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
          <span>Technical Architecture & Compliance</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-600 dark:text-slate-400 pt-1">
          <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60">
            <span className="font-bold text-slate-900 dark:text-white block mb-1">Stack & Frameworks</span>
            <span>React 19, TypeScript, Tailwind CSS v4, Lucide React vector icons. No unnecessary dependencies.</span>
          </div>
          <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60">
            <span className="font-bold text-slate-900 dark:text-white block mb-1">Zero Backend Dependency</span>
            <span>Runs 100% client-side with persistent mock state stored in browser localStorage. No API keys required.</span>
          </div>
          <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60">
            <span className="font-bold text-slate-900 dark:text-white block mb-1">Universal Responsiveness</span>
            <span>Engineered for Desktop (1440px), Laptop, Tablet with collapsible drawer, and Mobile (touch friendly).</span>
          </div>
        </div>
      </section>
    </div>
  );
};
