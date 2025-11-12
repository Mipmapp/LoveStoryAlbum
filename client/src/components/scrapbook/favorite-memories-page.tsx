import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Heart, Flower2, Sunrise, Cake, Plane, TreePine, Users } from 'lucide-react';

interface FavoriteMemoriesPageProps {
  onHiddenClick: () => void;
}

export function FavoriteMemoriesPage({ onHiddenClick }: FavoriteMemoriesPageProps) {
  const [hoveredPhoto, setHoveredPhoto] = useState<number | null>(null);

  const memories = [
    { icon: Flower2, caption: 'Our first date', rotation: -4 },
    { icon: Sunrise, caption: 'Sunset together', rotation: 3 },
    { icon: Cake, caption: 'Your birthday surprise', rotation: -2 },
    { icon: Plane, caption: 'Our adventure', rotation: 2 },
    { icon: TreePine, caption: 'Holidays together', rotation: -3 },
    { icon: Users, caption: 'Just us', rotation: 4 },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto page-flip">
      <div className="space-y-8">
        {/* Page Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-handwritten text-primary" data-testid="text-memories-title">
            Our Favorite Memories
          </h2>
          <p className="text-muted-foreground font-playful mt-2">
            (Hover over each photo to see the moment)
          </p>
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 px-4">
          {memories.map((memory, index) => (
            <div
              key={index}
              className="relative polaroid-pop"
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setHoveredPhoto(index)}
              onMouseLeave={() => setHoveredPhoto(null)}
            >
              {/* Washi tape decoration */}
              <div
                className="absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-6 opacity-60 z-10"
                style={{
                  background: `linear-gradient(90deg, rgba(255,182,193,0.7) 0%, rgba(255,218,185,0.7) 100%)`,
                  transform: `translateX(-50%) rotate(${memory.rotation}deg)`,
                }}
              ></div>

              <Card
                className="bg-white p-4 shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-110 cursor-pointer"
                style={{ transform: `rotate(${memory.rotation}deg)`, '--rotation': `${memory.rotation}deg` } as React.CSSProperties}
                data-testid={`polaroid-memory-${index}`}
              >
                <div className="aspect-square bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/20 mb-3 flex items-center justify-center">
                  <memory.icon className="w-20 h-20 text-primary/60 stroke-[1.5]" />
                </div>
                <p
                  className={`text-center font-playful text-sm text-gray-700 transition-all duration-300 ${
                    hoveredPhoto === index ? 'opacity-100 font-medium' : 'opacity-70'
                  }`}
                >
                  {memory.caption}
                </p>
              </Card>

              {/* Hidden surprise on first photo */}
              {index === 0 && (
                <button
                  onClick={onHiddenClick}
                  className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-primary flex items-center justify-center shadow-lg hover:scale-125 transition-all duration-300 z-20 animate-pulse"
                  data-testid="button-hidden-surprise"
                >
                  <Heart className="w-5 h-5 text-primary-foreground fill-primary-foreground" />
                </button>
              )}
            </div>
          ))}
        </div>

        {/* Decorative doodles */}
        <div className="flex justify-around mt-12 opacity-40 pointer-events-none">
          <Heart className="w-8 h-8 text-primary fill-primary animate-bounce" style={{ animationDelay: '0s', animationDuration: '2s' }} />
          <Heart className="w-6 h-6 text-primary fill-primary animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '2s' }} />
          <Heart className="w-8 h-8 text-primary fill-primary animate-bounce" style={{ animationDelay: '1s', animationDuration: '2s' }} />
        </div>
      </div>
    </div>
  );
}
