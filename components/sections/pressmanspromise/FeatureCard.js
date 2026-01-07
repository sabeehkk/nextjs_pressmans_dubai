const FeatureCard = ({ icon: Icon, title, description, delay = 0 }) => {
  return (
    <div 
      className="card-feature group "
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-start gap-4 ">
        <div className="icon-wrapper shrink-0 group-hover:scale-110 transition-transform duration-300">
          <Icon className="w-7 h-7 text-accent" strokeWidth={1.5} />
        </div>
        <div className="space-y-2">
          <h3 className="font-display text-xl font-semibold text-foreground">
            {title}
          </h3>
          <p className="text-muted-foreground leading-relaxed text-sm">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
