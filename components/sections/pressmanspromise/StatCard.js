const StatCard = ({ value, label, delay = 0 }) => {
  return (
    <div 
      className="stat-card opacity-0 animate-count-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-brand-brown mb-2">
        {value}
      </div>
      <div className="text-muted-foreground font-medium text-sm md:text-base">
        {label}
      </div>
    </div>
  );
};

export default StatCard;
