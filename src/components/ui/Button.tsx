import { type ButtonHTMLAttributes } from 'react';
import { cn } from '../../utils/cn';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

export default function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variants = {
    primary: 'bg-purple-600 hover:bg-purple-700 text-white focus:ring-purple-500 rounded-xl',
    secondary: 'bg-zinc-800/50 hover:bg-zinc-700/50 text-white border border-zinc-700/50 hover:border-zinc-600/50 rounded-xl',
    outline: 'border-2 border-purple-600 text-purple-600 hover:bg-purple-600/10 rounded-xl',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm h-8',
    md: 'px-6 py-3 text-base h-12',
    lg: 'px-8 py-4 text-lg h-16',
  };

  return (
    <button
      className={cn(
        baseStyles,
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}