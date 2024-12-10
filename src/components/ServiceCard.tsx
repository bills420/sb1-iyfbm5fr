import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  Icon: LucideIcon;
  category: string;
}

export default function ServiceCard({ title, description, Icon, category }: ServiceCardProps) {
  return (
    <div className="bg-zinc-800/30 backdrop-blur-sm p-6 rounded-xl border border-zinc-700/50 hover:bg-zinc-700/30 transition-all">
      <div className="flex items-center justify-between mb-4">
        <div className="inline-block p-3 bg-zinc-800/50 rounded-lg">
          <Icon className="h-6 w-6 text-white" />
        </div>
        <span className="text-sm text-zinc-400 font-medium">{category}</span>
      </div>
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <p className="mt-2 text-zinc-400">{description}</p>
    </div>
  );
}