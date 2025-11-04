import { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";
import { ReactNode } from "react";

interface StatsCardProps {
  title: string;
  value: string | ReactNode;
  icon: LucideIcon;
  subtitle?: string;
  onClick?: () => void;
}

const StatsCard = ({ title, value, icon: Icon, subtitle, onClick }: StatsCardProps) => {
  return (
    <Card
      className="p-6 bg-card hover:shadow-lg transition-all cursor-pointer animate-fade-in border-0"
      onClick={onClick}
      style={{ boxShadow: "var(--shadow-soft)" }}
    >
      <div className="flex items-start justify-between mb-3">
        <h3 className="text-sm font-semibold text-card-foreground">{title}</h3>
        <Icon className="h-5 w-5 text-primary" />
      </div>
      <div className="space-y-2">
        {typeof value === "string" ? (
          <p className="text-2xl font-bold text-card-foreground">{value}</p>
        ) : (
          value
        )}
        {subtitle && (
          <p className="text-xs text-muted-foreground">{subtitle}</p>
        )}
      </div>
    </Card>
  );
};

export default StatsCard;
