import { cn } from '../../utils/cn';

interface TypographyProps {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'small';
  className?: string;
  children: React.ReactNode;
}

export default function Typography({ variant = 'p', className, children }: TypographyProps) {
  const styles = {
    h1: 'text-4xl md:text-6xl font-bold tracking-tight leading-tight',
    h2: 'text-3xl md:text-4xl font-bold tracking-tight leading-tight',
    h3: 'text-2xl md:text-3xl font-semibold leading-snug',
    h4: 'text-xl md:text-2xl font-semibold leading-snug',
    p: 'text-base leading-relaxed',
    small: 'text-sm leading-relaxed',
  };

  const Component = variant;

  return (
    <Component className={cn(styles[variant], className)}>
      {children}
    </Component>
  );
}