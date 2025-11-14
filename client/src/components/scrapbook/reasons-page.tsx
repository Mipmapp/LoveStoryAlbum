import { Heart } from 'lucide-react';

export function ReasonsILoveYouPage() {
  const reasons = [
    { text: 'Your cuteness melts me every time', color: 'bg-yellow-100', rotation: -3 },
    { text: 'Your presence makes everything feel lovely', color: 'bg-pink-100', rotation: 2 },
    { text: 'You understand my heart in ways I can’t explain', color: 'bg-blue-100', rotation: -2 },
    { text: 'You are breathtakingly beautiful', color: 'bg-green-100', rotation: 3 },
    { text: 'Your smile lights up my world', color: 'bg-purple-100', rotation: -4 },
    { text: 'You know me better than anyone ever has', color: 'bg-orange-100', rotation: 2 },
    { text: 'You turn simple moments into unforgettable memories', color: 'bg-red-100', rotation: -3 },
    { text: "With you, I feel safe, warm, and completely comfortable", color: 'bg-teal-100', rotation: 4 },
  ];


  return (
    <div className="w-full max-w-5xl mx-auto page-flip">
      <div className="space-y-12">
        {/* Page Title */}
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-handwritten text-primary mb-4" data-testid="text-reasons-title">
            Reasons I Love You
          </h2>
          <p className="text-lg font-playful text-muted-foreground">
            (There are infinite reasons, but here are a few...)
          </p>
        </div>

        {/* Sticky Notes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className={`${reason.color} p-6 shadow-lg sticky-note-float hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer group`}
              style={{
                transform: `rotate(${reason.rotation}deg)`,
                '--rotation': `${reason.rotation}deg`,
                animationDelay: `${index * 0.15}s`,
              } as React.CSSProperties}
              onMouseEnter={(e) => {
                e.currentTarget.style.animation = `wiggle 0.5s ease-in-out`;
              }}
              onAnimationEnd={(e) => {
                e.currentTarget.style.animation = '';
              }}
              data-testid={`sticky-note-${index}`}
            >
              {/* Tape effect at top */}
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-16 h-4 bg-white/40 shadow-sm"></div>

              <p className="text-lg font-playful text-gray-800 text-center leading-relaxed">
                {reason.text}
              </p>

              {/* Small heart decoration */}
              <div className="text-center mt-3 opacity-60 group-hover:opacity-100 transition-opacity">
                <Heart className="w-6 h-6 mx-auto text-pink-500 fill-pink-400" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom decorative text */}
        <div className="text-center mt-12 flex items-center justify-center gap-3">
          <p className="text-2xl font-handwritten text-primary/70">
            ...and so many more reasons to come
          </p>
          <Heart className="w-6 h-6 text-primary/70 fill-primary/50" />
        </div>
      </div>
    </div>
  );
}
