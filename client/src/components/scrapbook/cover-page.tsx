import { Button } from '@/components/ui/button';
import { Heart } from 'lucide-react';

interface CoverPageProps {
  onOpen: () => void;
}

export function CoverPage({ onOpen }: CoverPageProps) {
  return (
    <div className="w-full max-w-2xl mx-auto text-center space-y-8 fade-in-up">
      {/* Decorative hearts */}
      <div className="relative">
        <Heart className="absolute -top-12 left-1/4 w-8 h-8 text-primary/30 fill-primary/20 animate-pulse" style={{ animationDelay: '0s' }} />
        <Heart className="absolute -top-8 right-1/4 w-6 h-6 text-primary/40 fill-primary/30 animate-pulse" style={{ animationDelay: '0.5s' }} />
        
        {/* Main Title */}
        <h1 className="text-5xl md:text-7xl font-handwritten text-primary mb-4 leading-tight" data-testid="text-cover-title">
          To my lovely Girlfriend!
        </h1>
        <div className="flex items-center justify-center gap-3">
          <h2 className="text-3xl md:text-4xl font-handwritten text-card-foreground" data-testid="text-cover-subtitle">
            this is the special moments of our story
          </h2>
          <Heart className="w-8 h-8 text-primary fill-primary" />
        </div>
      </div>

      {/* Decorative line */}
      <div className="flex items-center justify-center gap-4">
        <div className="h-px w-20 bg-gradient-to-r from-transparent to-primary/50"></div>
        <Heart className="w-4 h-4 text-primary fill-primary" />
        <div className="h-px w-20 bg-gradient-to-l from-transparent to-primary/50"></div>
      </div>

      {/* Open Scrapbook Button */}
      <div className="pt-4">
        <Button
          size="lg"
          className="text-lg px-8 py-6 font-playful shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          onClick={onOpen}
          data-testid="button-open-scrapbook"
        >
          Open Scrapbook
        </Button>
      </div>

      {/* Decorative doodles at bottom */}
      <div className="pt-12 opacity-60">
        <svg width="200" height="40" viewBox="0 0 200 40" className="mx-auto">
          <path
            d="M 10 20 Q 30 10, 50 20 T 90 20 T 130 20 T 170 20 T 190 20"
            stroke="hsl(var(--primary))"
            strokeWidth="2"
            fill="none"
            strokeDasharray="5,5"
            opacity="0.5"
          />
          <circle cx="20" cy="15" r="3" fill="hsl(var(--primary))" opacity="0.4" />
          <circle cx="180" cy="25" r="3" fill="hsl(var(--primary))" opacity="0.4" />
        </svg>
      </div>
    </div>
  );
}
