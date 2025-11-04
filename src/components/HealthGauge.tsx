interface HealthGaugeProps {
  value: number;
  size?: number;
}

const HealthGauge = ({ value, size = 120 }: HealthGaugeProps) => {
  const getColor = (val: number) => {
    if (val >= 80) return "hsl(var(--success))";
    if (val >= 60) return "hsl(var(--warning))";
    return "hsl(var(--destructive))";
  };

  const circumference = 2 * Math.PI * 45;
  const strokeDashoffset = circumference - (value / 100) * circumference;

  return (
    <div className="relative flex items-center justify-center animate-scale-in">
      <svg width={size} height={size} className="transform -rotate-90">
        {/* Background circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r="45"
          stroke="hsl(var(--muted))"
          strokeWidth="8"
          fill="none"
        />
        {/* Progress circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r="45"
          stroke={getColor(value)}
          strokeWidth="8"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          className="transition-all duration-1000 ease-out"
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-3xl font-bold text-card-foreground">{value}</span>
        <span className="text-xs text-muted-foreground">/ 100</span>
      </div>
    </div>
  );
};

export default HealthGauge;
