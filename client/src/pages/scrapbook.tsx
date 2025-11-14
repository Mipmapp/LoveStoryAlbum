import { useState, useEffect, useRef } from 'react';
import { Heart, Music, ChevronLeft, ChevronRight, Volume2, VolumeX } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAudio } from '@/hooks/use-audio';
import { LoadingScreen } from '@/components/loading-screen';

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

// Music URLs - Replace with your own music files
const BACKGROUND_MUSIC_URL = '/background-music.mp3'; // Background music when browsing scrapbook
const OUR_SONG_URL = '/our-song.mp3'; // Special song on the last page

export default function Scrapbook() {
  // Current page state (0 = cover, 1+ = scrapbook pages)
  const [currentPage, setCurrentPage] = useState(0);
  const [isScrapbookOpen, setIsScrapbookOpen] = useState(false);
  const [showHiddenSurprise, setShowHiddenSurprise] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  
  // Calculate total pages from configuration
  const totalPages = scrapbookPages.length - 1; // -1 because cover is index 0
  
  // Audio references
  const backgroundMusicRef = useRef<HTMLAudioElement | null>(null);
  const ourSongRef = useRef<HTMLAudioElement | null>(null);
  const [isBackgroundMusicPlaying, setIsBackgroundMusicPlaying] = useState(false);
  const [isOurSongPlaying, setIsOurSongPlaying] = useState(false);
  
  // Initialize audio elements
  useEffect(() => {
    backgroundMusicRef.current = new Audio(BACKGROUND_MUSIC_URL);
    backgroundMusicRef.current.loop = true;
    backgroundMusicRef.current.volume = 0.3; // 30% volume
    
    ourSongRef.current = new Audio(OUR_SONG_URL);
    ourSongRef.current.loop = true;
    
    return () => {
      backgroundMusicRef.current?.pause();
      ourSongRef.current?.pause();
    };
  }, []);

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

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

  // Handle loading complete
  const handleLoadComplete = () => {
    setIsLoading(false);
  };

  // Handle scrapbook opening
  const openScrapbook = () => {
    setIsScrapbookOpen(true);
    setCurrentPage(1);
    
    // Start background music when opening scrapbook
    if (backgroundMusicRef.current && !isBackgroundMusicPlaying) {
      backgroundMusicRef.current.play().catch(() => {
        // Autoplay might be blocked, user will need to interact first
      });
      setIsBackgroundMusicPlaying(true);
    }
  };

  // Toggle "Our Song" on the Forever page
  const toggleOurSong = () => {
    if (ourSongRef.current) {
      if (isOurSongPlaying) {
        ourSongRef.current.pause();
        setIsOurSongPlaying(false);
      } else {
        // Stop background music when Our Song starts
        if (backgroundMusicRef.current) {
          backgroundMusicRef.current.pause();
          setIsBackgroundMusicPlaying(false);
        }
        
        ourSongRef.current.play();
        setIsOurSongPlaying(true);
      }
    }
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
        return <ForeverPage onMusicToggle={toggleOurSong} isMusicPlaying={isOurSongPlaying} data-testid="page-forever" />;
      default:
        return <CoverPage onOpen={openScrapbook} data-testid="page-cover" />;
    }
  };

  return (
    <>
      {/* Loading Screen */}
      {isLoading && <LoadingScreen onLoadComplete={handleLoadComplete} />}
      
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

      {/* Home Button (visible on all pages except cover) */}
      {currentPage > 0 && (
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
    </>
  );
}
