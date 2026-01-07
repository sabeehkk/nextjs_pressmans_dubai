import { Sparkles } from "lucide-react";

const SparkleDecoration = () => {
  return (
    <div className="flex flex-col items-center gap-1">
      <Sparkles 
        className="w-8 h-8 text-brand-brown animate-sparkle" 
        strokeWidth={1.5}
        style={{ animationDelay: "0ms" }}
      />
      <div className="flex items-center gap-3">
        <Sparkles 
          className="w-5 h-5 text-brand-brown/70 animate-sparkle" 
          strokeWidth={1.5}
          style={{ animationDelay: "200ms" }}
        />
        <Sparkles 
          className="w-10 h-10 text-brand-brown animate-sparkle animate-float" 
          strokeWidth={1.5}
          style={{ animationDelay: "400ms" }}
        />
        <Sparkles 
          className="w-5 h-5 text-brand-brown/70 animate-sparkle" 
          strokeWidth={1.5}
          style={{ animationDelay: "600ms" }}
        />
      </div>
      <Sparkles 
        className="w-6 h-6 text-brand-brown/80 animate-sparkle" 
        strokeWidth={1.5}
        style={{ animationDelay: "300ms" }}
      />
    </div>
  );
};

export default SparkleDecoration;
