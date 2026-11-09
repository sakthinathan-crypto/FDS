import React, { useState } from 'react';
import { AccessibilitySettings, LoginMode } from '../../types';
import { 
  Lock, 
  Mail, 
  Eye, 
  EyeOff, 
  CheckCircle2, 
  AlertCircle, 
  ShieldCheck, 
  KeyRound, 
  SlidersHorizontal,
  X,
  HelpCircle,
  Fingerprint
} from 'lucide-react';

interface AccessibleLoginFormProps {
  settings: AccessibilitySettings;
  mode: LoginMode;
  onOpenAccessibilityDrawer: () => void;
}

export const AccessibleLoginForm: React.FC<AccessibleLoginFormProps> = ({
  settings,
  mode,
  onOpenAccessibilityDrawer,
}) => {
  const [email, setEmail] = useState('sakthi.designer@edu.in');
  const [password, setPassword] = useState('DesignLab@2026!');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);

  // Validation & Submission States
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});
  const [isLoading, setIsLoading] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);

  // Modals state
  const [forgotPasswordModal, setForgotPasswordModal] = useState(false);
  const [forgotEmailSent, setForgotEmailSent] = useState(false);
  const [signupModal, setSignupModal] = useState(false);

  // WCAG 2.1.2: No Keyboard Trap - Ensure Esc key dismisses open dialogs
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (forgotPasswordModal) {
          setForgotPasswordModal(false);
          setForgotEmailSent(false);
        }
        if (signupModal) {
          setSignupModal(false);
        }
      }
    };

    if (forgotPasswordModal || signupModal) {
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }
  }, [forgotPasswordModal, signupModal]);

  // Font size scale class supporting full 200% text resizing (WCAG 1.4.4)
  const getFontSizeMultiplier = () => {
    switch (settings.fontSize) {
      case 'large': return 'text-[18px] leading-relaxed';
      case 'larger': return 'text-[22px] leading-relaxed';
      case 'largest': return 'text-[32px] leading-snug'; // 200% of 16px base
      default: return 'text-[16px] leading-normal';
    }
  };

  const getHeadingScale = () => {
    switch (settings.fontSize) {
      case 'large': return 'text-2xl sm:text-3xl';
      case 'larger': return 'text-3xl sm:text-4xl';
      case 'largest': return 'text-3xl sm:text-5xl';
      default: return 'text-xl sm:text-2xl';
    }
  };

  const validate = () => {
    const errs: { email?: string; password?: string } = {};

    if (!email.trim()) {
      errs.email = 'Email address or username is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && !/^[a-zA-Z0-9_]{3,}$/.test(email)) {
      errs.email = 'Please enter a valid email address (e.g. name@domain.com) or username.';
    }

    if (!password) {
      errs.password = 'Password is required.';
    } else if (password.length < 8) {
      errs.password = 'Password must be at least 8 characters in length.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setLoginSuccess(true);
    }, 600);
  };

  const isHighContrast = mode === 'high-contrast' || settings.highContrast;

  return (
    <div className={`w-full max-w-xl mx-auto rounded-3xl transition-all ${
      isHighContrast
        ? 'bg-black text-amber-300 border-4 border-amber-400 p-6 sm:p-8 shadow-2xl'
        : 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-800 p-6 sm:p-10 shadow-xl'
    } ${settings.reducedMotion ? 'transition-none' : ''}`}>
      
      {/* Accessibility Quick Ribbon */}
      <div className="flex items-center justify-between pb-6 border-b border-slate-100 dark:border-slate-800">
        <div className="flex items-center gap-2">
          <div className={`w-9 h-9 rounded-xl flex items-center justify-center font-bold text-sm ${
            isHighContrast
              ? 'bg-amber-400 text-black'
              : 'bg-indigo-600 text-white shadow-xs'
          }`}>
            <ShieldCheck className="w-5 h-5" />
          </div>
          <span className={`text-xs font-bold tracking-wider uppercase font-mono ${
            isHighContrast ? 'text-amber-300' : 'text-slate-500 dark:text-slate-400'
          }`}>
            {isHighContrast ? 'High Contrast Mode (AAA)' : 'DesignLab Auth'}
          </span>
        </div>

        <button
          onClick={onOpenAccessibilityDrawer}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold cursor-pointer transition-colors ${
            isHighContrast
              ? 'bg-amber-400 text-black hover:bg-amber-300'
              : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700'
          }`}
          aria-label="Open accessibility options panel"
        >
          <SlidersHorizontal className="w-3.5 h-3.5" />
          <span>A11y Preferences</span>
        </button>
      </div>

      {/* Main Login Header */}
      <div className="pt-6 space-y-2">
        <h1 className={`font-extrabold tracking-tight ${getHeadingScale()} ${
          isHighContrast ? 'text-amber-300' : 'text-slate-900 dark:text-white'
        }`}>
          Welcome to DesignLab
        </h1>
        <p className={`text-slate-600 dark:text-slate-300 ${getFontSizeMultiplier()} leading-relaxed ${
          isHighContrast ? '!text-white' : ''
        }`}>
          Enter your credentials to securely access your student UI/UX design workspace.
        </p>
      </div>

      {/* Success Notification Alert */}
      {loginSuccess && (
        <div 
          role="status"
          aria-live="polite"
          className={`mt-6 p-4 rounded-2xl flex items-start gap-3 border ${
            isHighContrast
              ? 'bg-black text-amber-300 border-2 border-amber-300'
              : 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-200 border-emerald-300 dark:border-emerald-800'
          }`}
        >
          <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <div className="font-bold text-sm">Authentication Successful!</div>
            <p className="text-xs">
              Welcome back, Sakthi! You are signed in with student credentials.
            </p>
            <button
              onClick={() => setLoginSuccess(false)}
              className="mt-2 text-xs font-bold underline cursor-pointer"
            >
              Log out / Reset form
            </button>
          </div>
        </div>
      )}

      {/* Login Form */}
      <form onSubmit={handleSubmit} noValidate className="mt-6 space-y-5">
        {/* Email / Username Field */}
        <div className="space-y-2">
          <label
            htmlFor="login-email"
            className={`block font-bold ${getFontSizeMultiplier()} ${
              isHighContrast ? 'text-amber-300' : 'text-slate-900 dark:text-slate-100'
            }`}
          >
            Email Address or Username
            <span className="text-rose-500 ml-1" aria-hidden="true">*</span>
          </label>

          <div className="relative">
            <Mail className={`w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none ${
              isHighContrast ? 'text-amber-400' : 'text-slate-400'
            }`} />
            
            <input
              id="login-email"
              type="text"
              autoComplete="username"
              required
              aria-required="true"
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? 'email-error-msg' : 'email-hint-msg'}
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (errors.email) setErrors(prev => ({ ...prev, email: undefined }));
              }}
              placeholder="e.g. sakthi@egspe.ac.in"
              className={`w-full pl-12 pr-14 py-3.5 min-h-[48px] rounded-xl border-2 font-medium transition-all ${getFontSizeMultiplier()} ${
                isHighContrast
                  ? 'bg-black text-amber-300 border-amber-400 focus:outline-none focus:ring-4 focus:ring-amber-300'
                  : `bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white border-slate-500 dark:border-slate-400 focus:outline-none focus:border-indigo-600 focus:bg-white dark:focus:bg-slate-950 ${settings.largeFocusRing ? 'focus:ring-4 focus:ring-indigo-500/40' : 'focus:ring-2 focus:ring-indigo-500'}`
              } ${errors.email ? '!border-rose-500 dark:!border-rose-500' : ''}`}
            />
          </div>

          <div id="email-hint-msg" className="sr-only">
            Enter your student institutional email address or verified username.
          </div>

          {errors.email && (
            <div
              id="email-error-msg"
              role="alert"
              aria-live="assertive"
              className="flex items-center gap-1.5 text-xs font-semibold text-rose-600 dark:text-rose-400 pt-1"
            >
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errors.email}</span>
            </div>
          )}
        </div>

        {/* Password Field */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label
              htmlFor="login-password"
              className={`block font-bold ${getFontSizeMultiplier()} ${
                isHighContrast ? 'text-amber-300' : 'text-slate-900 dark:text-slate-100'
              }`}
            >
              Password
              <span className="text-rose-500 ml-1" aria-hidden="true">*</span>
            </label>

            <button
              type="button"
              onClick={() => setForgotPasswordModal(true)}
              className={`text-xs font-bold underline focus-visible:ring-2 focus-visible:ring-indigo-600 rounded cursor-pointer min-h-[32px] flex items-center ${
                isHighContrast ? 'text-amber-400 hover:text-white' : 'text-indigo-600 dark:text-indigo-400 hover:text-indigo-700'
              }`}
            >
              Forgot password?
            </button>
          </div>

          <div className="relative">
            <Lock className={`w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none ${
              isHighContrast ? 'text-amber-400' : 'text-slate-400'
            }`} />

            <input
              id="login-password"
              type={showPassword ? 'text' : 'password'}
              autoComplete="current-password"
              required
              aria-required="true"
              aria-invalid={Boolean(errors.password)}
              aria-describedby={errors.password ? 'password-error-msg' : 'password-hint-msg'}
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                if (errors.password) setErrors(prev => ({ ...prev, password: undefined }));
              }}
              placeholder="Minimum 8 characters"
              className={`w-full pl-12 pr-14 py-3.5 min-h-[48px] rounded-xl border-2 font-medium transition-all ${getFontSizeMultiplier()} ${
                isHighContrast
                  ? 'bg-black text-amber-300 border-amber-400 focus:outline-none focus:ring-4 focus:ring-amber-300'
                  : `bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white border-slate-500 dark:border-slate-400 focus:outline-none focus:border-indigo-600 focus:bg-white dark:focus:bg-slate-950 ${settings.largeFocusRing ? 'focus:ring-4 focus:ring-indigo-500/40' : 'focus:ring-2 focus:ring-indigo-500'}`
              } ${errors.password ? '!border-rose-500 dark:!border-rose-500' : ''}`}
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className={`absolute right-1.5 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center rounded-xl text-slate-500 hover:text-slate-800 dark:hover:text-white focus-visible:ring-2 focus-visible:ring-indigo-600 cursor-pointer ${
                isHighContrast ? '!text-amber-400 hover:!text-white' : ''
              }`}
              aria-label={showPassword ? 'Hide password text' : 'Show password as plain text'}
              aria-pressed={showPassword}
            >
              {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </div>

          <div id="password-hint-msg" className="sr-only">
            Password must contain at least 8 characters.
          </div>

          {errors.password && (
            <div
              id="password-error-msg"
              role="alert"
              aria-live="assertive"
              className="flex items-center gap-1.5 text-xs font-semibold text-rose-600 dark:text-rose-400 pt-1"
            >
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errors.password}</span>
            </div>
          )}
        </div>

        {/* Remember Me Checkbox */}
        <div className="flex items-center gap-3 py-1">
          <input
            id="remember-me"
            type="checkbox"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
            className={`w-5 h-5 min-w-[20px] rounded border-2 cursor-pointer focus-visible:ring-2 focus-visible:ring-indigo-600 ${
              isHighContrast
                ? 'accent-amber-400 bg-black border-amber-400'
                : 'accent-indigo-600 text-indigo-600'
            }`}
          />
          <label
            htmlFor="remember-me"
            className={`font-medium cursor-pointer select-none py-1.5 ${getFontSizeMultiplier()} ${
              isHighContrast ? 'text-amber-300' : 'text-slate-700 dark:text-slate-300'
            }`}
          >
            Remember this device for 30 days
          </label>
        </div>

        {/* Primary Submit Button (Min 48px touch target) */}
        <button
          type="submit"
          disabled={isLoading}
          className={`w-full min-h-[48px] py-4 px-6 rounded-xl font-bold transition-all cursor-pointer flex items-center justify-center gap-2 ${getFontSizeMultiplier()} ${
            isHighContrast
              ? 'bg-amber-400 text-black hover:bg-amber-300 active:bg-amber-500 border-2 border-black'
              : 'bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white shadow-md hover:shadow-lg'
          } ${settings.reducedMotion ? '!transition-none' : ''}`}
        >
          {isLoading ? (
            <div className="flex items-center gap-2">
              <div className={`w-4 h-4 border-2 border-current border-t-transparent rounded-full ${settings.reducedMotion ? '' : 'animate-spin'}`} />
              <span>Verifying Credentials...</span>
            </div>
          ) : (
            <span>Sign In to Dashboard</span>
          )}
        </button>

        {/* Divider */}
        <div className="relative py-2 flex items-center justify-center">
          <div className={`w-full border-t ${
            isHighContrast ? 'border-amber-400/40' : 'border-slate-300 dark:border-slate-700'
          }`} />
          <span className={`absolute px-3 text-xs font-semibold uppercase tracking-wider ${
            isHighContrast ? 'bg-black text-amber-300' : 'bg-white dark:bg-slate-900 text-slate-500'
          }`}>
            Or use accessible alternative
          </span>
        </div>

        {/* Alternative Login: Passkey / WebAuthn */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <button
            type="button"
            onClick={() => setLoginSuccess(true)}
            className={`min-h-[48px] py-3 px-4 rounded-xl border-2 font-semibold text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer ${
              isHighContrast
                ? 'border-amber-400 text-amber-300 hover:bg-amber-400 hover:text-black'
                : 'border-slate-400 dark:border-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-100'
            }`}
          >
            <Fingerprint className="w-5 h-5 text-indigo-500 shrink-0" />
            <span>Passkey / FIDO2</span>
          </button>

          <button
            type="button"
            onClick={() => setLoginSuccess(true)}
            className={`min-h-[48px] py-3 px-4 rounded-xl border-2 font-semibold text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer ${
              isHighContrast
                ? 'border-amber-400 text-amber-300 hover:bg-amber-400 hover:text-black'
                : 'border-slate-400 dark:border-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-100'
            }`}
          >
            <KeyRound className="w-5 h-5 text-emerald-500 shrink-0" />
            <span>Institutional SSO</span>
          </button>
        </div>

        {/* Sign Up Link */}
        <div className="pt-2 text-center text-xs">
          <span className={isHighContrast ? 'text-white' : 'text-slate-600 dark:text-slate-400'}>
            Don't have an active student account?{' '}
          </span>
          <button
            type="button"
            onClick={() => setSignupModal(true)}
            className={`font-bold underline cursor-pointer min-h-[32px] inline-flex items-center ${
              isHighContrast ? 'text-amber-300 hover:text-white' : 'text-indigo-600 dark:text-indigo-400 hover:text-indigo-700'
            }`}
          >
            Register Student Profile
          </button>
        </div>
      </form>

      {/* Forgot Password Modal Dialog */}
      {forgotPasswordModal && (
        <div 
          role="dialog"
          aria-modal="true"
          aria-labelledby="forgot-password-title"
          className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in"
        >
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 max-w-md w-full border border-slate-200 dark:border-slate-800 space-y-4 text-slate-900 dark:text-white shadow-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between">
              <h3 id="forgot-password-title" className="font-bold text-base">Reset Account Password</h3>
              <button 
                onClick={() => {
                  setForgotPasswordModal(false);
                  setForgotEmailSent(false);
                }} 
                className="w-11 h-11 flex items-center justify-center rounded-xl text-slate-500 hover:text-slate-800 dark:hover:text-white focus-visible:ring-2 focus-visible:ring-indigo-600 cursor-pointer"
                aria-label="Close dialog (Escape)"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {!forgotEmailSent ? (
              <div className="space-y-4">
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  Enter your registered institutional email address. An accessible password reset link with a 15-minute token will be sent to your inbox. Press Escape to cancel.
                </p>
                <input
                  type="email"
                  defaultValue={email}
                  placeholder="name@domain.com"
                  className="w-full px-4 py-3 min-h-[44px] rounded-xl border border-slate-400 dark:border-slate-600 bg-slate-50 dark:bg-slate-800 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-indigo-600"
                />
                <button
                  onClick={() => setForgotEmailSent(true)}
                  className="w-full min-h-[44px] py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-xs"
                >
                  Send Reset Link
                </button>
              </div>
            ) : (
              <div className="space-y-4 text-center py-2">
                <CheckCircle2 className="w-10 h-10 text-emerald-500 mx-auto" />
                <div className="text-sm font-bold">Password Reset Link Sent!</div>
                <p className="text-xs text-slate-500">
                  Check your inbox at <strong>{email}</strong> for instructions.
                </p>
                <button
                  onClick={() => {
                    setForgotPasswordModal(false);
                    setForgotEmailSent(false);
                  }}
                  className="w-full min-h-[44px] py-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-xs font-semibold cursor-pointer"
                >
                  Return to Login
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Sign Up Modal Simulation Dialog */}
      {signupModal && (
        <div 
          role="dialog"
          aria-modal="true"
          aria-labelledby="signup-dialog-title"
          className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in"
        >
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 max-w-md w-full border border-slate-200 dark:border-slate-800 space-y-4 text-slate-900 dark:text-white shadow-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between">
              <h3 id="signup-dialog-title" className="font-bold text-base">Student Account Registration</h3>
              <button 
                onClick={() => setSignupModal(false)} 
                className="w-11 h-11 flex items-center justify-center rounded-xl text-slate-500 hover:text-slate-800 dark:hover:text-white focus-visible:ring-2 focus-visible:ring-indigo-600 cursor-pointer"
                aria-label="Close dialog (Escape)"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              Registration for Course Outcome 5 (Web Technology 2302CS503) is managed via college active directory credentials. Please use your standard roll number login.
            </p>
            <button
              onClick={() => setSignupModal(false)}
              className="w-full min-h-[44px] py-3 rounded-xl bg-indigo-600 text-white font-bold text-xs shadow-xs cursor-pointer"
            >
              Back to Login Screen
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
