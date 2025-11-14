import { Button } from '@/components/ui/button';
import { Music } from 'lucide-react';
import { Heart } from 'lucide-react';
import { useEffect, useState } from 'react';

interface ForeverPageProps {
  onMusicToggle: () => void;
  isMusicPlaying: boolean;
}

interface FallingImage {
  id: number;
  src: string;
  left: number;
  duration: number;
  delay: number;
  size: number;
  rotation: number;
}

export function ForeverPage({ onMusicToggle, isMusicPlaying }: ForeverPageProps) {
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsButtonEnabled(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full max-w-3xl mx-auto page-flip relative">
      {/* Falling images are now managed globally in scrapbook.tsx */}
      
      <div className="space-y-12 text-center px-4 min-h-[70vh] flex flex-col justify-center relative z-10">
        {/* Main message */}
        <div className="space-y-6 fade-in-up">
          <p
            className="text-3xl md:text-5xl font-handwritten text-primary leading-relaxed"
            data-testid="text-forever-message"
          >
            This scrapbook may end here,
            <br />
            but our story never will.
          </p>

          {/* Decorative divider */}
          <div className="flex items-center justify-center gap-4 py-6">
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-primary/50"></div>
            <Heart className="w-6 h-6 text-primary fill-primary animate-pulse" />
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-primary/50"></div>
          </div>

          {/* Names */}
          <div
            className="text-4xl md:text-6xl font-handwritten text-card-foreground fade-in-up"
            style={{ animationDelay: '0.5s' }}
            data-testid="text-our-names"
          >
            You & Me
            <br />
            <div className="flex items-center justify-center gap-3 mt-2">
              <span className="text-3xl md:text-5xl text-primary">Forever</span>
              <Heart className="w-10 h-10 md:w-12 md:h-12 text-primary fill-primary" />
            </div>
          </div>
        </div>

        {/* Music toggle button */}
        <div className="fade-in-up pt-8" style={{ animationDelay: '1s' }}>
          <Button
            size="lg"
            onClick={onMusicToggle}
            disabled={!isButtonEnabled}
            className={`text-lg px-8 py-6 font-playful shadow-lg hover:shadow-xl transition-all duration-1000 gap-3 ${
              isButtonEnabled 
                ? 'opacity-100 scale-100 hover:scale-105' 
                : 'opacity-30 scale-95 cursor-not-allowed'
            }`}
            data-testid="button-play-song"
          >
            <Music className={`w-5 h-5 transition-all duration-1000 ${isButtonEnabled ? '' : 'opacity-50'}`} />
            {isMusicPlaying ? 'Pause Our Song' : 'Play Our Song'}
          </Button>
        </div>

        {/* Floating hearts decoration */}
        <div className="relative h-40 overflow-hidden pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <Heart
              key={i}
              className="absolute w-8 h-8 text-primary/40 fill-primary/30"
              style={{
                left: `${(i * 12) + 5}%`,
                animation: `heartFloat ${3 + Math.random() * 2}s ease-in-out infinite`,
                animationDelay: `${i * 0.5}s`,
              }}
            />
          ))}
        </div>

        {/* Bottom decorative text */}
        <p className="text-xl font-playful text-muted-foreground italic fade-in-up" style={{ animationDelay: '1.5s' }}>
          Every love story is beautiful, but ours is my favorite...
        </p>
      </div>
    </div>
  );
}
