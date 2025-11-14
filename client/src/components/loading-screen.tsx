import { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

interface LoadingScreenProps {
  onLoadComplete: () => void;
}

export function LoadingScreen({ onLoadComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [loadedImages, setLoadedImages] = useState(0);
  const [loadedAudio, setLoadedAudio] = useState(0);
  const [totalAssets, setTotalAssets] = useState(0);

  useEffect(() => {
    let isMounted = true;
    const imageRefs: HTMLImageElement[] = [];
    const audioRefs: HTMLAudioElement[] = [];

    const imagesToPreload = [
      '/photos/first-date-1.jpg',
      '/photos/first-date-2.jpg',
      '/photos/how-we-met-1.jpg',
      '/photos/how-we-met-2.jpg',
      '/photos/first-date-memory.jpg',
      '/photos/church-together.jpg',
      '/photos/gifts.jpg',
      '/photos/adventure-memory.jpg',
      '/photos/first-hug.jpg',
      '/photos/just-us.jpg',
      '/photos/adventure.jpg',
      '/photos/moment1.jpg',
      '/photos/moment2.jpg',
    ];

    const audioToPreload = [
      '/background-music.mp3',
      '/our-song.mp3',
    ];

    setTotalAssets(imagesToPreload.length + audioToPreload.length);

    const loadImage = (src: string): Promise<void> => {
      return new Promise((resolve) => {
        const img = new Image();
        imageRefs.push(img);
        
        img.onload = () => {
          if (isMounted) {
            setLoadedImages((prev) => prev + 1);
          }
          resolve();
        };
        img.onerror = () => {
          if (isMounted) {
            setLoadedImages((prev) => prev + 1);
          }
          resolve();
        };
        img.src = src;
      });
    };

    const loadAudio = (src: string): Promise<void> => {
      return new Promise((resolve) => {
        const audio = new Audio();
        audioRefs.push(audio);
        
        audio.oncanplaythrough = () => {
          if (isMounted) {
            setLoadedAudio((prev) => prev + 1);
          }
          resolve();
        };
        audio.onerror = () => {
          if (isMounted) {
            setLoadedAudio((prev) => prev + 1);
          }
          resolve();
        };
        audio.src = src;
        audio.load();
      });
    };

    const loadAllAssets = async () => {
      await Promise.all([
        ...imagesToPreload.map(loadImage),
        ...audioToPreload.map(loadAudio),
      ]);
      if (isMounted) {
        setTimeout(() => {
          onLoadComplete();
        }, 500);
      }
    };

    loadAllAssets();

    return () => {
      isMounted = false;
      imageRefs.forEach(img => {
        img.onload = null;
        img.onerror = null;
        img.src = '';
      });
      audioRefs.forEach(audio => {
        audio.oncanplaythrough = null;
        audio.onerror = null;
        audio.src = '';
      });
    };
  }, [onLoadComplete]);

  useEffect(() => {
    if (totalAssets > 0) {
      const loadedCount = loadedImages + loadedAudio;
      setProgress((loadedCount / totalAssets) * 100);
    }
  }, [loadedImages, loadedAudio, totalAssets]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-background via-background to-primary/5">
      <div className="text-center space-y-8 px-4 max-w-md w-full">
        <div className="relative">
          <Heart className="w-20 h-20 mx-auto text-primary fill-primary animate-pulse" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-24 border-4 border-primary/20 border-t-primary rounded-full animate-spin" />
          </div>
        </div>

        <div className="space-y-2">
          <h2 className="text-3xl font-handwritten text-primary" data-testid="text-loading-title">
            Preparing Our Love Story
          </h2>
          <p className="text-muted-foreground font-playful">
            Loading precious memories...
          </p>
        </div>

        <div className="space-y-2 px-8">
          <Progress value={progress} className="h-2" data-testid="progress-loading" />
          <p className="text-sm text-muted-foreground">
            {loadedImages + loadedAudio} of {totalAssets} assets loaded
          </p>
        </div>

        <div className="flex justify-center gap-2 opacity-60">
          <Heart className="w-4 h-4 text-primary fill-primary animate-bounce" style={{ animationDelay: '0s' }} />
          <Heart className="w-4 h-4 text-primary fill-primary animate-bounce" style={{ animationDelay: '0.2s' }} />
          <Heart className="w-4 h-4 text-primary fill-primary animate-bounce" style={{ animationDelay: '0.4s' }} />
        </div>
      </div>
    </div>
  );
}
