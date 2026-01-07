import { Store, Clock, Wallet, MessageCircle } from "lucide-react";
import FeatureCard from "./FeatureCard";
import StatCard from "./StatCard";
import SparkleDecoration from "./SparkleDecoration";

const features = [
  {
    icon: Store,
    title: "Hot & Fresh Food",
    description: "We do not pre-make any order. All our menu items are made to your order using only Fresh and Premium ingredients.",
  },
  {
    icon: Clock,
    title: "Quick Service",
    description: "We aim to prepare your order and serve within 8 minutes so that you can have more time to relish your food and enjoy a conversation.",
  },
  {
    icon: Wallet,
    title: "Healthy On Budget",
    description: "Our menu pricing is not only attractive for individuals but also for friends, families and kids who can simply spend good time and enjoy good food.",
  },
];

const stats = [
  { value: "97K", label: "Happy Customers" },
  { value: "72%", label: "Repeat Orders" },
  { value: "1.53M", label: "Meals Delivered" },
  { value: "9", label: "Locations" },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background bg-amber-700">
      {/* Promise Section */}
      <section className="section-brand py-16 md:py-24 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-brand-brown/10 blur-3xl" />
          <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-accent/10 blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 relative">
          <div className="flex flex-col items-center text-center mb-12 md:mb-16">
            {/* Logo placeholder with sparkles */}
            <div className="mb-8 opacity-0 animate-fade-up" style={{ animationDelay: "100ms" }}>
              <SparkleDecoration />
            </div>
            
            {/* Section heading */}
            <div className="space-y-4 opacity-0 animate-fade-up" style={{ animationDelay: "200ms" }}>
              <span className="inline-block text-sm md:text-base font-semibold tracking-[0.2em] uppercase text-brand-brown">
                {/* Pressman's Promise */}
              </span>
              <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-semibold text-brand-brown-dark max-w-2xl text-balance">
                Visit a nearby Pressman's outlet today and we assure you:
              </h2>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <div 
                key={feature.title}
                className="opacity-0 animate-scale-in"
                style={{ animationDelay: `${300 + index * 150}ms` }}
              >
                <FeatureCard
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-cream py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="bg-card rounded-3xl shadow-stat py-12 md:py-16 px-6 md:px-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
              {stats.map((stat, index) => (
                <div 
                  key={stat.label} 
                  className={`${index < stats.length - 1 ? "md:border-r md:border-border" : ""}`}
                >
                  <StatCard
                    value={stat.value}
                    label={stat.label}
                    delay={600 + index * 150}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/1234567890"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 flex items-center gap-2 bg-[#25D366] hover:bg-[#20BD5A] text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 z-50 group"
        aria-label="Chat on WhatsApp"
      >
        <span className="text-sm font-medium hidden sm:inline-block">WhatsApp</span>
        <MessageCircle className="w-5 h-5 fill-current" />
      </a>
    </div>
  );
};

export default Index;
