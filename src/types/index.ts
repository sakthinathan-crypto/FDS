export type NavSection = 
  | 'overview' 
  | 'project-1' 
  | 'project-2' 
  | 'project-3' 
  | 'design-system' 
  | 'about';

export interface Contact {
  id: string;
  name: string;
  phone: string;
  upiId: string;
  avatarBg: string;
  avatarColor: string;
  recent: boolean;
  avatarUrl?: string;
}

export interface Transaction {
  id: string;
  contactName: string;
  contactUpi: string;
  type: 'debit' | 'credit';
  amount: number;
  date: string;
  time: string;
  status: 'success' | 'pending' | 'failed';
  category: 'transfer' | 'bill' | 'recharge' | 'refund' | 'shopping';
  note?: string;
  referenceId: string;
}

export type GPayScreen = 
  | 'home' 
  | 'send' 
  | 'confirm' 
  | 'success' 
  | 'activity' 
  | 'profile';

export type GPayTab = 'prototype' | 'casestudy';

export interface AccessibilitySettings {
  fontSize: 'normal' | 'large' | 'larger' | 'largest';
  highContrast: boolean;
  reducedMotion: boolean;
  dyslexicFont: boolean;
  largeFocusRing: boolean;
}

export type LoginMode = 'standard' | 'high-contrast';

export interface ColorToken {
  name: string;
  role: string;
  hex: string;
  rgb: string;
  textOnColor: string;
  contrastRatioWhite: string;
  contrastRatioBlack: string;
  description: string;
  wcagCompliant: boolean;
}

export interface TypographyToken {
  level: string;
  name: string;
  size: string;
  lineHeight: string;
  weight: string;
  sampleText: string;
  usage: string;
}
