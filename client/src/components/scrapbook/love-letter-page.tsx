import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Mail, Heart } from 'lucide-react';

export function LoveLetterPage() {
  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState(false);
  const [showLetter, setShowLetter] = useState(false);

  const handleEnvelopeClick = () => {
    setIsEnvelopeOpen(true);
    setTimeout(() => {
      setShowLetter(true);
    }, 800);
  };

  return (
    <div className="w-full max-w-3xl mx-auto page-flip">
      <div className="space-y-8 px-4">
        {!isEnvelopeOpen ? (
          /* Closed Envelope */
          <div className="flex flex-col items-center justify-center min-h-[60vh]">
            <p className="text-2xl font-handwritten text-primary mb-8 text-center" data-testid="text-letter-prompt">
              Click the envelope to read my letter to you...
            </p>

            <button
              onClick={handleEnvelopeClick}
              className="relative group hover:scale-110 transition-all duration-300"
              data-testid="button-open-envelope"
            >
              <Card className="w-64 h-40 bg-gradient-to-br from-red-100 to-pink-100 border-2 border-red-200 shadow-2xl flex items-center justify-center group-hover:shadow-3xl transition-all duration-300">
                <Mail className="w-20 h-20 text-red-400" />
              </Card>

              {/* Wax seal decoration */}
              <div className="absolute bottom-6 right-6 w-12 h-12 rounded-full bg-red-400 border-2 border-red-500 shadow-lg flex items-center justify-center">
                <Heart className="w-6 h-6 text-white fill-white" />
              </div>
            </button>
          </div>
        ) : (
          /* Opened Letter */
          <div className="space-y-6">
            {/* Envelope opening animation */}
            <div
              className="mx-auto w-64 h-8 bg-gradient-to-br from-red-100 to-pink-100 border-2 border-red-200 rounded-t-lg"
              style={{
                animation: 'envelopeOpen 0.8s ease-out forwards',
                transformOrigin: 'bottom',
              }}
            ></div>

            {/* Letter content */}
            {showLetter && (
              <Card
                className="bg-gradient-to-br from-amber-50 to-yellow-50 p-8 md:p-12 shadow-2xl border-2 border-amber-200 fade-in-up"
                data-testid="card-love-letter"
              >
                <div className="space-y-6">
                  <div className="text-right text-sm font-playful text-muted-foreground">
                    {new Date().toLocaleDateString('en-US', {
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric',
                    })}
                  </div>

                  <div className="space-y-4 font-handwritten text-xl md:text-2xl text-gray-700 leading-relaxed">
                    <p>My dearest love,</p>

                    <p>
                      Words cannot fully express how much you mean to me. Every moment we spend together is a treasure 
                      I hold close to my heart. You've shown me what true love feels like - it's in the little things, 
                      the quiet moments, the shared laughter, and even the comfortable silences.
                    </p>

                    <p>
                      Thank you for being my partner, my confidant, my best friend. Thank you for choosing me every day, 
                      for believing in us, and for making life so incredibly beautiful.
                    </p>

                    <p>
                      I promise to always cherish you, support you, and love you with all my heart. Our story is my 
                      favorite story, and I can't wait to write so many more chapters together.
                    </p>

                    <div className="pt-4">
                      <p>Forever and always,</p>
                      <div className="flex items-center justify-start gap-2 mt-2">
                        <p className="text-3xl">Your Love</p>
                        <Heart className="w-6 h-6 text-red-400 fill-red-300" />
                      </div>
                    </div>
                  </div>

                  {/* Decorative elements */}
                  <div className="flex justify-center gap-4 pt-4 opacity-40">
                    <Heart className="w-8 h-8 text-red-400 fill-red-300" />
                    <Heart className="w-10 h-10 text-pink-400 fill-pink-300" />
                    <Heart className="w-8 h-8 text-red-400 fill-red-300" />
                  </div>
                </div>
              </Card>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
