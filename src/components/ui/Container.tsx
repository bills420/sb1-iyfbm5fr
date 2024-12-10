import { cn } from '../../utils/cn';

interface ContainerProps {
  className?: string;
  children: React.ReactNode;
}

export default function Container({ className, children }: ContainerProps) {
  return (
    <div className={cn(
      'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
      className
    )}>
      {children}
    </div>
  );
}