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
  const [fallingImages, setFallingImages] = useState<FallingImage[]>([]);

  // Available images for falling effect
  const imageUrls = [
    '/photos/first-date-1.jpg',
    '/photos/how-we-met-1.jpg',
    '/photos/how-we-met-2.jpg',
    '/photos/first-date-memory.jpg',
    '/photos/church-together.jpg',
    '/photos/gifts.jpg',
    '/photos/adventure-memory.jpg',
    '/photos/first-hug.jpg',
    '/photos/just-us.jpg',
  ];

  // Generate falling images when music plays
  useEffect(() => {
    if (isMusicPlaying) {
      const images: FallingImage[] = [];
      for (let i = 0; i < 20; i++) {
        images.push({
          id: i,
          src: imageUrls[Math.floor(Math.random() * imageUrls.length)],
          left: Math.random() * 100,
          duration: 8 + Math.random() * 4,
          delay: Math.random() * 3,
          size: 60 + Math.random() * 80,
          rotation: Math.random() * 40 - 20,
        });
      }
      setFallingImages(images);
    } else {
      setFallingImages([]);
    }
  }, [isMusicPlaying]);
  return (
    <div className="w-full max-w-3xl mx-auto page-flip relative">
      {/* Falling Images Effect */}
      {fallingImages.length > 0 && (
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
          {fallingImages.map((img) => (
            <div
              key={img.id}
              className="absolute -top-20 opacity-70 rounded-lg shadow-lg animate-fall"
              style={{
                left: `${img.left}%`,
                width: `${img.size}px`,
                height: `${img.size}px`,
                animationDuration: `${img.duration}s`,
                animationDelay: `${img.delay}s`,
              }}
            >
              <img
                src={img.src}
                alt="Memory"
                className="w-full h-full object-cover rounded-lg border-4 border-white shadow-xl"
                style={{
                  transform: `rotate(${img.rotation}deg)`,
                }}
              />
            </div>
          ))}
        </div>
      )}

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
            className="text-lg px-8 py-6 font-playful shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 gap-3"
            data-testid="button-play-song"
          >
            <Music className="w-5 h-5" />
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
