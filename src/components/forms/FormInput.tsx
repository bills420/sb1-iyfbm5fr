import { InputHTMLAttributes } from 'react';
import Typography from '../ui/Typography';
import { cn } from '../../utils/cn';

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export default function FormInput({ label, id, className, ...props }: FormInputProps) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-zinc-400 mb-2">
        {label}
      </label>
      <input
        id={id}
        className={cn(
          "mt-1 block w-full rounded-xl bg-zinc-800/50 border-zinc-700/50",
          "text-white shadow-sm focus:border-zinc-600 focus:ring focus:ring-zinc-600/50",
          className
        )}
        {...props}
      />
    </div>
  );
}