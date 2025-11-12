import { useEffect, useRef, useState } from 'react';

export function useAudio(url: string) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Create audio element
    audioRef.current = new Audio(url);
    audioRef.current.loop = true;
    audioRef.current.volume = 0.5;

    // Error handling
    audioRef.current.addEventListener('error', () => {
      setError('Unable to load audio file');
      setIsPlaying(false);
    });

    // Clean up on unmount
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, [url]);

  const play = async () => {
    if (audioRef.current) {
      try {
        await audioRef.current.play();
        setIsPlaying(true);
        setError(null);
      } catch (err) {
        setError('Unable to play audio');
        setIsPlaying(false);
      }
    }
  };

  const pause = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggle = async () => {
    if (isPlaying) {
      pause();
    } else {
      await play();
    }
  };

  return {
    isPlaying,
    error,
    play,
    pause,
    toggle,
  };
}
