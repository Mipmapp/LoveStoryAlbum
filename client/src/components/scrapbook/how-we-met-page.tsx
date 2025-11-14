import { Card } from '@/components/ui/card';
import { Heart } from 'lucide-react';

export function HowWeMetPage() {
  return (
    <div className="w-full max-w-4xl mx-auto page-flip">
      <div className="space-y-8">
        {/* Page Title with sticky note style */}
        <div className="relative inline-block">
          <div
            className="bg-yellow-100 border-t-4 border-yellow-200 px-6 py-4 shadow-md"
            style={{ transform: 'rotate(-1deg)' }}
          >
            <h2 className="text-2xl md:text-3xl font-playful text-yellow-900" data-testid="text-how-we-met-title">
              The day we met...
            </h2>
          </div>
        </div>

        {/* Polaroid Photos */}
        <div className="flex flex-wrap gap-8 justify-center items-start mt-12">
          {/* Polaroid 1 */}
          <Card
            className="bg-white p-4 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 polaroid-pop"
            style={{ transform: 'rotate(-3deg)', animationDelay: '0.2s', '--rotation': '-3deg' } as React.CSSProperties}
            data-testid="polaroid-photo-1"
          >
            <div className="aspect-square w-48 mb-4 overflow-hidden bg-gradient-to-br from-primary/20 to-accent/30 flex items-center justify-center">
              <img 
                src="/photos/how-we-met-1.jpg" 
                alt="How we met - Photo 1"
                className="w-full h-full object-cover"
                onError={(e) => {
                  // Show placeholder if image not found
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.parentElement!.innerHTML = '<svg class="w-20 h-20 text-primary/40" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"/></svg>';
                }}
              />
            </div>
            <p className="text-center font-playful text-sm text-gray-700">
              The moment we met
            </p>
          </Card>

          {/* Polaroid 2 */}
          <Card
            className="bg-white p-4 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 polaroid-pop"
            style={{ transform: 'rotate(2deg)', animationDelay: '0.4s', '--rotation': '2deg' } as React.CSSProperties}
            data-testid="polaroid-photo-2"
          >
            <div className="aspect-square w-48 mb-4 overflow-hidden bg-gradient-to-br from-accent/30 to-primary/20 flex items-center justify-center">
              <img 
                src="/photos/how-we-met-2.jpg" 
                alt="How we met - Photo 2"
                className="w-full h-full object-cover"
                onError={(e) => {
                  // Show placeholder if image not found
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.parentElement!.innerHTML = '<svg class="w-20 h-20 text-primary/40" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"/></svg>';
                }}
              />
            </div>
            <p className="text-center font-playful text-sm text-gray-700">
              Our first smile
            </p>
          </Card>
        </div>

        {/* Story Text */}
        <div className="relative max-w-2xl mx-auto mt-12 fade-in-up" style={{ animationDelay: '0.6s' }}>
          <Card className="p-8 shadow-lg">
            <div className="space-y-4">
              <p className="text-lg leading-relaxed text-card-foreground font-sans" data-testid="text-our-story">
                I remember the first time I saw you like it was yesterday. The way you smiled, the way you laughed - 
                everything about that moment felt like magic. I never believed in love at first sight until that day.
              </p>
              <p className="text-lg leading-relaxed text-card-foreground font-sans">
                From that moment on, every day with you has been an adventure. You've brought so much joy, laughter, 
                and love into my life. Thank you for being my person, my best friend, my everything.
              </p>
            </div>
          </Card>

          {/* Decorative doodle */}
          <div className="absolute -bottom-6 -right-6 opacity-40 pointer-events-none">
            <svg width="100" height="100" viewBox="0 0 100 100">
              <path
                d="M 30 50 Q 40 30, 50 50 T 70 50"
                stroke="hsl(var(--primary))"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
              />
              <circle cx="80" cy="40" r="8" fill="none" stroke="hsl(var(--primary))" strokeWidth="2" />
              <circle cx="85" cy="35" r="6" fill="none" stroke="hsl(var(--primary))" strokeWidth="2" />
            </svg>
          </div>
        </div>

        {/* Connecting hearts doodle */}
        <div className="flex justify-center items-center mt-8 opacity-50 gap-2">
          <Heart className="w-6 h-6 text-primary fill-primary" />
          <div className="h-px w-32 bg-primary" style={{ backgroundImage: 'repeating-linear-gradient(to right, hsl(var(--primary)) 0, hsl(var(--primary)) 5px, transparent 5px, transparent 10px)' }}></div>
          <Heart className="w-6 h-6 text-primary fill-primary" />
        </div>
      </div>
    </div>
  );
}
