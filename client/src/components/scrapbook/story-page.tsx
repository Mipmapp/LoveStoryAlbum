import { Heart } from 'lucide-react';

export interface StoryPageData {
  title: string;
  subtitle?: string;
  content: string[];
  images?: {
    url: string;
    alt: string;
    caption?: string;
    position?: 'top' | 'middle' | 'bottom' | 'left' | 'right';
  }[];
  decorativeElements?: boolean;
}

interface StoryPageProps {
  data: StoryPageData;
}

export function StoryPage({ data }: StoryPageProps) {
  const { title, subtitle, content, images = [], decorativeElements = true } = data;
  
  const hasImages = images.length > 0;
  const imagePosition = images[0]?.position || 'top';
  
  const renderImage = (index: number) => {
    const image = images[index];
    if (!image) return null;
    
    return (
      <div className="relative group">
        <div className="polaroid-frame hover-elevate transition-all duration-300">
          <div className="relative w-full h-64 overflow-hidden rounded-sm">
            <img
              src={image.url}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
          </div>
          {image.caption && (
            <p className="text-center mt-3 font-handwritten text-sm text-muted-foreground">
              {image.caption}
            </p>
          )}
        </div>
      </div>
    );
  };
  
  const renderContent = () => (
    <div className="space-y-6">
      {content.map((paragraph, index) => (
        <p
          key={index}
          className="text-lg leading-relaxed text-card-foreground font-sans"
        >
          {paragraph}
        </p>
      ))}
    </div>
  );
  
  return (
    <div className="w-full max-w-4xl mx-auto p-6 md:p-8 fade-in-up">
      <div className="bg-card/80 backdrop-blur-sm rounded-lg shadow-2xl p-8 md:p-12 border border-primary/10">
        {decorativeElements && (
          <div className="absolute -top-3 -right-3 w-12 h-12">
            <Heart className="w-full h-full text-primary/20 fill-primary/10 animate-pulse" />
          </div>
        )}
        
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-handwritten text-primary mb-2">
            {title}
          </h2>
          {subtitle && (
            <p className="text-xl font-playful text-muted-foreground">
              {subtitle}
            </p>
          )}
          <div className="flex items-center justify-center gap-4 mt-4">
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-primary/50"></div>
            <Heart className="w-4 h-4 text-primary fill-primary" />
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-primary/50"></div>
          </div>
        </div>
        
        {hasImages && imagePosition === 'top' && (
          <div className="mb-8 flex justify-center">
            {renderImage(0)}
          </div>
        )}
        
        {hasImages && (imagePosition === 'left' || imagePosition === 'right') ? (
          <div className={`flex flex-col md:flex-row gap-8 items-start ${imagePosition === 'right' ? 'md:flex-row-reverse' : ''}`}>
            <div className="md:w-1/2 flex-shrink-0">
              {renderImage(0)}
              {images[1] && <div className="mt-6">{renderImage(1)}</div>}
            </div>
            <div className="md:w-1/2">
              {renderContent()}
            </div>
          </div>
        ) : (
          <>
            {hasImages && imagePosition === 'middle' && images[0] ? (
              <>
                {content.slice(0, Math.ceil(content.length / 2)).map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-lg leading-relaxed text-card-foreground font-sans mb-6"
                  >
                    {paragraph}
                  </p>
                ))}
                <div className="my-8 flex justify-center">
                  {renderImage(0)}
                </div>
                {content.slice(Math.ceil(content.length / 2)).map((paragraph, index) => (
                  <p
                    key={index + Math.ceil(content.length / 2)}
                    className="text-lg leading-relaxed text-card-foreground font-sans mb-6"
                  >
                    {paragraph}
                  </p>
                ))}
              </>
            ) : (
              <>
                {renderContent()}
                {hasImages && imagePosition === 'bottom' && (
                  <div className="mt-8 flex justify-center gap-6">
                    {renderImage(0)}
                    {images[1] && renderImage(1)}
                  </div>
                )}
              </>
            )}
          </>
        )}
        
        {decorativeElements && (
          <div className="mt-8 pt-6 border-t border-primary/10 flex justify-center gap-2">
            {[...Array(5)].map((_, i) => (
              <Heart
                key={i}
                className="w-3 h-3 text-primary/40 fill-primary/30"
                style={{
                  animation: `pulse ${2 + i * 0.2}s ease-in-out infinite`,
                  animationDelay: `${i * 0.1}s`,
                }}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
