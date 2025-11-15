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
                    <p>My dearest Jezza Mae,</p>

                    <p>
                      From the moment we met in Grade 11, my life changed in ways I never imagined. You weren't my best friend at first, 
                      but being with you felt right - comfortable, natural, like finding home in a person. Every interaction, every moment 
                      with you has filled my heart with joy.
                    </p>

                    <p>
                      I love you so much, Jezza. I love love love you more than words can say. Every smile, every laugh, every time I see 
                      your face - my heart is filled with happiness. I'm learning everything about you - your favorites, your dreams, 
                      even your adorable baby mode - and I love every single part of you.
                    </p>

                    <p>
                      Thank you, God, for answering my prayers and bringing us together. From San Isidro Falls where our romance began, 
                      to the Church where we asked for His blessing on November 13, 2025 - every moment with you is a gift from above.
                    </p>

                    <p>
                      You make every moment happy, every day brighter, and every dream more beautiful. I promise to love you, cherish you, 
                      and thank God for you every single day. Our story is my favorite story, and I can't wait to write forever with you.
                    </p>

                    <div className="pt-4">
                      <p>Forever yours,</p>
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
