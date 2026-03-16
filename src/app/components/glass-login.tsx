import React from 'react';
import { Mail, Lock, Eye, EyeOff, User, ArrowRight } from 'lucide-react';
import { GlassButton } from './glass-button';
import { GlassInput } from './glass-input';
import { GlassCheckbox } from './glass-checkbox';
import { GlassDivider } from './glass-divider';

interface GlassLoginProps {
  onLogin?: (email: string, password: string) => void;
  onForgotPassword?: () => void;
  onSignUp?: () => void;
  className?: string;
}

export function GlassLogin({ 
  onLogin, 
  onForgotPassword, 
  onSignUp,
  className = '' 
}: GlassLoginProps) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [showPassword, setShowPassword] = React.useState(false);
  const [rememberMe, setRememberMe] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin?.(email, password);
  };

  return (
    <div className={`
      max-w-md w-full
      backdrop-blur-xl backdrop-saturate-150
      bg-[var(--glass-bg-light)]
      border border-[var(--glass-border)]
      rounded-3xl
      p-8
      shadow-[var(--shadow-overlay)]
      ${className}
    `}>
      <div className="text-center mb-8">
        <h2 className="text-3xl text-white mb-2">Welcome Back</h2>
        <p className="text-[var(--text-tertiary)]">Sign in to your account</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <GlassInput
          type="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          icon={<Mail size={20} />}
        />

        <div className="relative">
          <GlassInput
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            icon={<Lock size={20} />}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="
              absolute right-4 top-1/2 -translate-y-1/2
              text-[var(--text-muted)] hover:text-white
              transition-colors duration-200
            "
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>

        <div className="flex items-center justify-between">
          <GlassCheckbox
            checked={rememberMe}
            onChange={setRememberMe}
            label="Remember me"
          />
          <button
            type="button"
            onClick={onForgotPassword}
            className="text-[var(--text-tertiary)] hover:text-white text-sm transition-colors"
          >
            Forgot password?
          </button>
        </div>

        <GlassButton type="submit" variant="primary" className="w-full">
          Sign In
          <ArrowRight size={20} className="ml-2" />
        </GlassButton>
      </form>

      <GlassDivider label="or" className="my-6" />

      <div className="space-y-3">
        <button className="
          w-full py-3 px-4 rounded-2xl
          backdrop-blur-md backdrop-saturate-150
          bg-[var(--glass-bg-light)]
          border border-[var(--glass-border)]
          text-white
          hover:bg-[var(--glass-bg-medium)]
          transition-all duration-200
          flex items-center justify-center gap-2
        ">
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
            <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
          </svg>
          Continue with Google
        </button>
      </div>

      <div className="text-center mt-6">
        <p className="text-[var(--text-tertiary)] text-sm">
          Don't have an account?{' '}
          <button
            onClick={onSignUp}
            className="text-white hover:underline"
          >
            Sign up
          </button>
        </p>
      </div>
    </div>
  );
}

interface GlassSignUpProps {
  onSignUp?: (name: string, email: string, password: string) => void;
  onLogin?: () => void;
  className?: string;
}

export function GlassSignUp({ 
  onSignUp, 
  onLogin,
  className = '' 
}: GlassSignUpProps) {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [showPassword, setShowPassword] = React.useState(false);
  const [acceptTerms, setAcceptTerms] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (acceptTerms) {
      onSignUp?.(name, email, password);
    }
  };

  return (
    <div className={`
      max-w-md w-full
      backdrop-blur-xl backdrop-saturate-150
      bg-[var(--glass-bg-light)]
      border border-[var(--glass-border)]
      rounded-3xl
      p-8
      shadow-[var(--shadow-overlay)]
      ${className}
    `}>
      <div className="text-center mb-8">
        <h2 className="text-3xl text-white mb-2">Create Account</h2>
        <p className="text-[var(--text-tertiary)]">Join us today</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <GlassInput
          type="text"
          placeholder="Full name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          icon={<User size={20} />}
        />

        <GlassInput
          type="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          icon={<Mail size={20} />}
        />

        <div className="relative">
          <GlassInput
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            icon={<Lock size={20} />}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="
              absolute right-4 top-1/2 -translate-y-1/2
              text-[var(--text-muted)] hover:text-white
              transition-colors duration-200
            "
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>

        <GlassCheckbox
          checked={acceptTerms}
          onChange={setAcceptTerms}
          label="I accept the Terms and Conditions"
        />

        <GlassButton 
          type="submit" 
          variant="primary" 
          className="w-full"
          disabled={!acceptTerms}
        >
          Create Account
          <ArrowRight size={20} className="ml-2" />
        </GlassButton>
      </form>

      <GlassDivider label="or" className="my-6" />

      <div className="space-y-3">
        <button className="
          w-full py-3 px-4 rounded-2xl
          backdrop-blur-md backdrop-saturate-150
          bg-[var(--glass-bg-light)]
          border border-[var(--glass-border)]
          text-white
          hover:bg-[var(--glass-bg-medium)]
          transition-all duration-200
          flex items-center justify-center gap-2
        ">
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
            <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
          </svg>
          Sign up with Google
        </button>
      </div>

      <div className="text-center mt-6">
        <p className="text-[var(--text-tertiary)] text-sm">
          Already have an account?{' '}
          <button
            onClick={onLogin}
            className="text-white hover:underline"
          >
            Sign in
          </button>
        </p>
      </div>
    </div>
  );
}
