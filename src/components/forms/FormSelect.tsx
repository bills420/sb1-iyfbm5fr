import { SelectHTMLAttributes } from 'react';
import { cn } from '../../utils/cn';

interface Option {
  value: string;
  label: string;
}

interface FormSelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: Option[];
}

export default function FormSelect({ label, id, options, className, ...props }: FormSelectProps) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-zinc-400 mb-2">
        {label}
      </label>
      <select
        id={id}
        className={cn(
          "mt-1 block w-full rounded-xl bg-zinc-800/50 border-zinc-700/50",
          "text-white shadow-sm focus:border-zinc-600 focus:ring focus:ring-zinc-600/50",
          className
        )}
        {...props}
      >
        <option value="">Select an option</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}