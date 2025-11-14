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
import { StoryPage } from '@/components/scrapbook/story-page';

// Import pages configuration
import { scrapbookPages } from '@/config/scrapbook-pages';

// Using a soft romantic piano music from a free source
// You can replace this URL with your own song URL
const BACKGROUND_MUSIC_URL = '/our-song.mp3'

export default function Scrapbook() {
  // Current page state (0 = cover, 1+ = scrapbook pages)
  const [currentPage, setCurrentPage] = useState(0);
  const [isScrapbookOpen, setIsScrapbookOpen] = useState(false);
  const [showHiddenSurprise, setShowHiddenSurprise] = useState(false);
  
  // Calculate total pages from configuration
  const totalPages = scrapbookPages.length - 1; // -1 because cover is index 0
  
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

  // Navigate between pages
  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Render the current page based on configuration
  const renderPage = () => {
    const pageConfig = scrapbookPages[currentPage];
    
    if (!pageConfig) {
      return <CoverPage onOpen={openScrapbook} data-testid="page-cover" />;
    }
    
    // Render story pages
    if (pageConfig.type === 'story' && pageConfig.data) {
      return <StoryPage data={pageConfig.data} data-testid={`page-${pageConfig.id}`} />;
    }
    
    // Render special pages
    switch (pageConfig.id) {
      case 'cover':
        return <CoverPage onOpen={openScrapbook} data-testid="page-cover" />;
      case 'how-we-met':
        return <HowWeMetPage data-testid="page-how-we-met" />;
      case 'favorite-memories':
        return (
          <FavoriteMemoriesPage
            onHiddenClick={() => setShowHiddenSurprise(true)}
            data-testid="page-favorite-memories"
          />
        );
      case 'reasons':
        return <ReasonsILoveYouPage data-testid="page-reasons" />;
      case 'love-letter':
        return <LoveLetterPage data-testid="page-love-letter" />;
      case 'forever':
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
        <>
          <Button
            size="icon"
            variant="outline"
            className="fixed top-4 right-4 z-40 rounded-full shadow-lg hover-elevate"
            onClick={toggleMusic}
            data-testid="button-music-toggle"
          >
            {isMusicPlaying ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5" />}
          </Button>
          <Button
            size="icon"
            variant="outline"
            className="fixed top-4 left-4 z-40 rounded-full shadow-lg hover-elevate"
            onClick={() => setCurrentPage(0)}
            data-testid="button-home"
            title="Back to cover"
          >
            <Heart className="w-5 h-5" />
          </Button>
        </>
      )}

      {/* Main Content Area */}
      <div className="relative min-h-screen flex items-center justify-center p-4">
        {renderPage()}
      </div>

      {/* Page indicator dots */}
      {currentPage > 0 && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-40 bg-card/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg" data-testid="page-indicators">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`rounded-full transition-all duration-300 ${
                currentPage === page ? 'bg-primary w-6 h-3' : 'bg-muted w-2 h-2 hover:bg-primary/50 hover:scale-125'
              }`}
              data-testid={`indicator-page-${page}`}
            />
          ))}
        </div>
      )}

      {/* Navigation Arrows (visible on scrapbook pages) */}
      {currentPage > 0 && (
        <div className="fixed bottom-6 left-0 right-0 flex justify-between px-4 md:px-8 z-40 pointer-events-none">
          {currentPage > 1 ? (
            <Button
              size="lg"
              variant="outline"
              className="rounded-full shadow-lg bg-card/90 backdrop-blur-sm hover:bg-card hover:scale-110 transition-all duration-300 border-2 border-primary/20 pointer-events-auto"
              onClick={prevPage}
              data-testid="button-prev-page"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>
          ) : (
            <div className="w-14 h-14" />
          )}
          
          {currentPage < totalPages ? (
            <Button
              size="lg"
              variant="outline"
              className="rounded-full shadow-lg bg-card/90 backdrop-blur-sm hover:bg-card hover:scale-110 transition-all duration-300 border-2 border-primary/20 pointer-events-auto"
              onClick={nextPage}
              data-testid="button-next-page"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          ) : (
            <div className="w-14 h-14" />
          )}
        </div>
      )}
    </div>
  );
}
