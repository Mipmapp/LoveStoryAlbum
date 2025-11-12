import { useState, useEffect } from 'react';
import { Heart, Music, ChevronLeft, ChevronRight, Volume2, VolumeX } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAudio } from '@/hooks/use-audio';

// Import all page components
import { CoverPage } from '@/components/scrapbook/cover-page';
import { HowWeMetPage } from '@/components/scrapbook/how-we-met-page';
import { FavoriteMemoriesPage } from '@/components/scrapbook/favorite-memories-page';
import { ReasonsILoveYouPage } from '@/components/scrapbook/reasons-page';
import { LoveLetterPage } from '@/components/scrapbook/love-letter-page';
import { ForeverPage } from '@/components/scrapbook/forever-page';

// Using a soft romantic piano music from a free source
// You can replace this URL with your own song URL
const BACKGROUND_MUSIC_URL = 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3';

export default function Scrapbook() {
  // Current page state (0 = cover, 1-6 = scrapbook pages)
  const [currentPage, setCurrentPage] = useState(0);
  const [isScrapbookOpen, setIsScrapbookOpen] = useState(false);
  const [showHiddenSurprise, setShowHiddenSurprise] = useState(false);
  
  // Audio playback hook
  const { isPlaying: isMusicPlaying, toggle: toggleMusic } = useAudio(BACKGROUND_MUSIC_URL);

  // Heart cursor trail effect
  useEffect(() => {
    const createHeart = (e: MouseEvent) => {
      const heart = document.createElement('div');
      heart.className = 'heart-cursor';
      heart.style.left = `${e.pageX}px`;
      heart.style.top = `${e.pageY}px`;
      document.body.appendChild(heart);

      setTimeout(() => {
        heart.remove();
      }, 1000);
    };

    let lastTime = 0;
    const throttledCreateHeart = (e: MouseEvent) => {
      const now = Date.now();
      if (now - lastTime > 100) {
        createHeart(e);
        lastTime = now;
      }
    };

    document.addEventListener('mousemove', throttledCreateHeart);

    return () => {
      document.removeEventListener('mousemove', throttledCreateHeart);
    };
  }, []);

  // Handle scrapbook opening
  const openScrapbook = () => {
    setIsScrapbookOpen(true);
    setCurrentPage(1);
  };

  // Navigate between pages (pages 1-5 are available)
  const nextPage = () => {
    if (currentPage < 5) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Render the current page
  const renderPage = () => {
    switch (currentPage) {
      case 0:
        return <CoverPage onOpen={openScrapbook} data-testid="page-cover" />;
      case 1:
        return <HowWeMetPage data-testid="page-how-we-met" />;
      case 2:
        return (
          <FavoriteMemoriesPage
            onHiddenClick={() => setShowHiddenSurprise(true)}
            data-testid="page-favorite-memories"
          />
        );
      case 3:
        return <ReasonsILoveYouPage data-testid="page-reasons" />;
      case 4:
        return <LoveLetterPage data-testid="page-love-letter" />;
      case 5:
        return <ForeverPage onMusicToggle={toggleMusic} isMusicPlaying={isMusicPlaying} data-testid="page-forever" />;
      default:
        return <CoverPage onOpen={openScrapbook} data-testid="page-cover" />;
    }
  };

  return (
    <div className="min-h-screen w-full paper-texture overflow-x-hidden">
      {/* Hidden Surprise Modal */}
      {showHiddenSurprise && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
          onClick={() => setShowHiddenSurprise(false)}
          data-testid="modal-hidden-surprise"
        >
          <div className="relative bg-card border-2 border-primary rounded-lg p-8 max-w-md mx-4 shadow-2xl animate-in fade-in zoom-in duration-500">
            <div className="absolute -top-2 -left-2 -right-2 -bottom-2 pointer-events-none">
              {[...Array(20)].map((_, i) => (
                <Heart
                  key={i}
                  className="absolute w-4 h-4 text-primary/60 fill-primary/40"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animation: `sparkle ${1 + Math.random()}s ease-in-out infinite`,
                    animationDelay: `${Math.random() * 2}s`,
                  }}
                />
              ))}
            </div>
            <Heart className="w-16 h-16 mx-auto mb-4 text-primary fill-primary animate-pulse" />
            <div className="flex items-center justify-center gap-2">
              <p className="text-2xl font-handwritten text-center text-card-foreground leading-relaxed">
                You're my favorite chapter, and I'll never stop writing our story
              </p>
              <Heart className="w-6 h-6 text-primary fill-primary" />
            </div>
          </div>
        </div>
      )}

      {/* Music Toggle Button (visible on all pages except cover) */}
      {currentPage > 0 && (
        <Button
          size="icon"
          variant="outline"
          className="fixed top-4 right-4 z-40 rounded-full shadow-lg hover-elevate"
          onClick={toggleMusic}
          data-testid="button-music-toggle"
        >
          {isMusicPlaying ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5" />}
        </Button>
      )}

      {/* Main Content Area */}
      <div className="relative min-h-screen flex items-center justify-center p-4">
        {renderPage()}
      </div>

      {/* Navigation Arrows (only show on scrapbook pages, not cover or forever page) */}
      {currentPage > 0 && currentPage < 5 && (
        <>
          {currentPage > 1 && (
            <Button
              size="icon"
              variant="ghost"
              className="fixed left-4 bottom-4 z-40 rounded-full hover-elevate"
              onClick={prevPage}
              data-testid="button-prev-page"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>
          )}
          {currentPage < 5 && (
            <Button
              size="icon"
              variant="ghost"
              className="fixed right-4 bottom-4 z-40 rounded-full hover-elevate"
              onClick={nextPage}
              data-testid="button-next-page"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          )}
        </>
      )}

      {/* Page indicator dots */}
      {currentPage > 0 && (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-40" data-testid="page-indicators">
          {[1, 2, 3, 4, 5].map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentPage === page ? 'bg-primary w-6' : 'bg-muted hover-elevate'
              }`}
              data-testid={`indicator-page-${page}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
